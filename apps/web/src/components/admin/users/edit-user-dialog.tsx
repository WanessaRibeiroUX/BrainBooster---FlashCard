"use client";

import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { trpc } from "@/utils/trpc";
import { toast } from "sonner";

const editUserSchema = z.object({
  name: z.string().min(1, "Nome é obrigatório").max(100, "Nome muito longo"),
  email: z.string().email("Email inválido"),
  role: z.enum(["user", "admin"]),
  emailVerified: z.boolean(),
  image: z.string().optional(),
});

type EditUserFormData = z.infer<typeof editUserSchema>;

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  emailVerified?: boolean;
  image?: string | null;
}

interface EditUserDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSuccess: () => void;
  user: User | null;
}

export function EditUserDialog({
  open,
  onOpenChange,
  onSuccess,
  user,
}: EditUserDialogProps) {
  const form = useForm<EditUserFormData>({
    defaultValues: {
      name: "",
      email: "",
      role: "user",
      emailVerified: false,
      image: "",
    },
  });

  // Atualizar os valores do formulário quando o usuário mudar
  useEffect(() => {
    if (user) {
      form.reset({
        name: user.name,
        email: user.email,
        role: user.role as "user" | "admin",
        emailVerified: user.emailVerified || false,
        image: user.image || "",
      });
    }
  }, [user, form]);

  const updateUserMutation = trpc.admin.updateUser.useMutation({
    onSuccess: () => {
      toast.success("Usuário atualizado com sucesso!");
      onOpenChange(false);
      onSuccess();
    },
    onError: (error) => {
      toast.error(`Erro ao atualizar usuário: ${error.message}`);
    },
  });

  const onSubmit = async (data: EditUserFormData) => {
    if (!user) return;

    // Validação manual
    if (!data.name || data.name.trim().length === 0) {
      toast.error("Nome é obrigatório");
      return;
    }
    if (!data.email || !data.email.includes("@")) {
      toast.error("Email inválido");
      return;
    }

    // Validar URL da imagem se fornecida
    if (data.image && data.image.trim()) {
      try {
        new URL(data.image);
      } catch {
        toast.error("URL da imagem inválida");
        return;
      }
    }

    const submitData = {
      userId: user.id,
      ...data,
      image: data.image && data.image.trim() ? data.image : undefined,
    };
    await updateUserMutation.mutateAsync(submitData);
  };

  if (!user) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Editar Usuário</DialogTitle>
          <DialogDescription>
            Atualize as informações do usuário {user.name}.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nome</FormLabel>
                  <FormControl>
                    <Input placeholder="Digite o nome completo" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="email@exemplo.com"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="role"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tipo de Usuário</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione o tipo" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="user">Usuário</SelectItem>
                      <SelectItem value="admin">Administrador</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="emailVerified"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                  <div className="space-y-0.5">
                    <FormLabel>Email Verificado</FormLabel>
                    <div className="text-sm text-muted-foreground">
                      Marcar email como verificado
                    </div>
                  </div>
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="image"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>URL da Imagem (opcional)</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="https://exemplo.com/imagem.jpg"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <DialogFooter>
              <Button
                type="button"
                variant="outline"
                onClick={() => onOpenChange(false)}
              >
                Cancelar
              </Button>
              <Button type="submit" disabled={updateUserMutation.isPending}>
                {updateUserMutation.isPending
                  ? "Salvando..."
                  : "Salvar Alterações"}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
