"use client";

import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, User, BookOpen, CreditCard } from "lucide-react";
import { trpc } from "@/utils/trpc";
import { toast } from "sonner";

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  _count: {
    decks: number;
    purchases: number;
    favorites: number;
  };
}

interface DeleteUserDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSuccess: () => void;
  user: User | null;
}

export function DeleteUserDialog({
  open,
  onOpenChange,
  onSuccess,
  user,
}: DeleteUserDialogProps) {
  const deleteUserMutation = trpc.admin.deleteUser.useMutation({
    onSuccess: () => {
      toast.success("Usuário deletado com sucesso!");
      onOpenChange(false);
      onSuccess();
    },
    onError: (error) => {
      toast.error(`Erro ao deletar usuário: ${error.message}`);
    },
  });

  const handleDelete = async () => {
    if (!user) return;
    await deleteUserMutation.mutateAsync({ userId: user.id });
  };

  if (!user) return null;

  const hasActivity = user._count.decks > 0 || user._count.purchases > 0;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-red-500" />
            Confirmar Exclusão
          </DialogTitle>
          <DialogDescription>
            Esta ação não pode ser desfeita. O usuário será permanentemente
            removido do sistema.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          {/* Informações do usuário */}
          <div className="p-4 border rounded-lg bg-muted/50">
            <div className="flex items-center gap-3 mb-3">
              <User className="h-5 w-5" />
              <div>
                <div className="font-medium">{user.name}</div>
                <div className="text-sm text-muted-foreground">
                  {user.email}
                </div>
              </div>
              <Badge variant={user.role === "admin" ? "default" : "secondary"}>
                {user.role === "admin" ? "Admin" : "Usuário"}
              </Badge>
            </div>

            <div className="grid grid-cols-3 gap-4 text-sm">
              <div className="text-center">
                <BookOpen className="h-4 w-4 mx-auto mb-1" />
                <div className="font-medium">{user._count.decks}</div>
                <div className="text-muted-foreground">Decks</div>
              </div>
              <div className="text-center">
                <CreditCard className="h-4 w-4 mx-auto mb-1" />
                <div className="font-medium">{user._count.purchases}</div>
                <div className="text-muted-foreground">Compras</div>
              </div>
              <div className="text-center">
                <div className="font-medium">{user._count.favorites}</div>
                <div className="text-muted-foreground">Favoritos</div>
              </div>
            </div>
          </div>

          {/* Avisos sobre o que será afetado */}
          {hasActivity && (
            <div className="p-4 border border-yellow-200 rounded-lg bg-yellow-50 dark:bg-yellow-950 dark:border-yellow-800">
              <h4 className="font-medium text-yellow-800 dark:text-yellow-200 mb-2">
                ⚠️ Impactos da exclusão:
              </h4>
              <ul className="text-sm text-yellow-700 dark:text-yellow-300 space-y-1">
                {user._count.decks > 0 && (
                  <li>
                    • {user._count.decks} deck(s) será(ão) marcado(s) como
                    deletado(s)
                  </li>
                )}
                {user._count.purchases > 0 && (
                  <li>
                    • {user._count.purchases} compra(s) será(ão) preservada(s)
                    no histórico
                  </li>
                )}
                <li>• Todas as sessões e contas vinculadas serão removidas</li>
                <li>• Favoritos serão removidos</li>
              </ul>
            </div>
          )}

          <div className="p-4 border border-red-200 rounded-lg bg-red-50 dark:bg-red-950 dark:border-red-800">
            <p className="text-sm text-red-700 dark:text-red-300">
              <strong>Atenção:</strong> Esta ação é irreversível. Todos os dados
              pessoais do usuário serão permanentemente removidos do sistema.
            </p>
          </div>
        </div>

        <DialogFooter>
          <Button
            type="button"
            variant="outline"
            onClick={() => onOpenChange(false)}
          >
            Cancelar
          </Button>
          <Button
            type="button"
            variant="destructive"
            onClick={handleDelete}
            disabled={deleteUserMutation.isPending}
          >
            {deleteUserMutation.isPending
              ? "Deletando..."
              : "Confirmar Exclusão"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
