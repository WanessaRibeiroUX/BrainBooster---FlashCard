"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { trpc } from "@/utils/trpc";
import { toast } from "sonner";
import { WysiwygEditor } from "@/components/wysiwyg-editor";

interface FlashcardFormProps {
  deckId: number;
  onSuccess?: () => void;
  initialData?: {
    id?: number;
    frontText: string;
    backText: string;
  };
}

export function FlashcardForm({
  deckId,
  onSuccess,
  initialData,
}: FlashcardFormProps) {
  const [frontText, setFrontText] = useState(initialData?.frontText || "");
  const [backText, setBackText] = useState(initialData?.backText || "");

  const createMutation = trpc.flashcards.create.useMutation({
    onSuccess: () => {
      toast.success("Flashcard criado com sucesso!");
      // Limpar formulário
      setFrontText("");
      setBackText("");
      onSuccess?.();
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const updateMutation = trpc.flashcards.update.useMutation({
    onSuccess: () => {
      toast.success("Flashcard atualizado com sucesso!");
      onSuccess?.();
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!frontText.trim() || !backText.trim()) {
      toast.error("Preencha o texto da frente e do verso");
      return;
    }

    const data = {
      deckId,
      frontText,
      backText,
    };

    if (initialData?.id) {
      await updateMutation.mutateAsync({ id: initialData.id, ...data });
    } else {
      await createMutation.mutateAsync(data);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          {initialData?.id ? "Editar Flashcard" : "Novo Flashcard"}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Label htmlFor="frontText">Texto da Frente</Label>
            <WysiwygEditor
              content={frontText}
              onChange={setFrontText}
              placeholder="Digite o texto da frente do card..."
              className="mt-2"
            />
            <p className="text-xs text-gray-500 mt-1">
              Use a barra de ferramentas para formatar o texto, inserir imagens,
              links, etc.
            </p>
          </div>

          <div>
            <Label htmlFor="backText">Texto do Verso</Label>
            <WysiwygEditor
              content={backText}
              onChange={setBackText}
              placeholder="Digite o texto do verso do card..."
              className="mt-2"
            />
            <p className="text-xs text-gray-500 mt-1">
              Use a barra de ferramentas para formatar o texto, inserir imagens,
              links, etc.
            </p>
          </div>

          <div className="flex gap-2">
            <Button
              type="submit"
              disabled={createMutation.isPending || updateMutation.isPending}
            >
              {createMutation.isPending || updateMutation.isPending
                ? "Salvando..."
                : initialData?.id
                ? "Atualizar"
                : "Criar Flashcard"}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
