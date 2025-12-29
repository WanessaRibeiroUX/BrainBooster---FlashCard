"use client";

import { trpc } from "@/utils/trpc";
import { authClient } from "@/lib/auth-client";
import { useParams, useRouter } from "next/navigation";
import { useState, useEffect, useCallback } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Plus,
  Edit3,
  Trash2,
  Save,
  ArrowLeft,
  GripVertical,
  Eye,
  EyeOff,
  Layers,
  BookOpen,
  Sparkles,
  RotateCcw,
  Check,
  X,
  Copy,
  Play,
  Settings,
  Users,
  DollarSign,
  Lightbulb,
  AlertTriangle,
} from "lucide-react";
import { toast } from "sonner";
import Loader from "@/components/loader";
import { WysiwygEditor } from "@/components/wysiwyg-editor";
import {
  DndContext,
  DragOverlay,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import type { DragEndEvent, DragStartEvent } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
  arrayMove,
} from "@dnd-kit/sortable";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { ConfirmDialog } from "@/components/confirm-dialog";

// Função utilitária para verificar se o conteúdo HTML está vazio
function isHtmlContentEmpty(htmlContent: string): boolean {
  if (!htmlContent) return true;
  const textContent = htmlContent.replace(/<[^>]*>/g, "").trim();
  return textContent === "";
}

interface FlashcardForm {
  frontText: string;
  backText: string;
}

interface UnsavedChanges {
  hasChanges: boolean;
  type: "deck" | "flashcard" | null;
  data: any;
}

export default function EditDeck() {
  const params = useParams();
  const router = useRouter();
  const deckId = parseInt(params.id as string);
  const { data: session } = authClient.useSession();
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [editingCard, setEditingCard] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<"info" | "cards">("cards");
  const [previewCard, setPreviewCard] = useState<number | null>(null);
  const [draggedItem, setDraggedItem] = useState<any>(null);
  const [duplicatingCardId, setDuplicatingCardId] = useState<number | null>(
    null
  );
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [cardToDelete, setCardToDelete] = useState<number | null>(null);

  // Estados para mudanças não salvas
  const [unsavedChanges, setUnsavedChanges] = useState<UnsavedChanges>({
    hasChanges: false,
    type: null,
    data: null,
  });
  const [showSaveAlert, setShowSaveAlert] = useState(false);

  const [deckForm, setDeckForm] = useState({
    title: "",
    description: "",
    coverUrl: "",
    isPublic: false,
    priceCents: 0,
  });
  const [originalDeckForm, setOriginalDeckForm] = useState({
    title: "",
    description: "",
    coverUrl: "",
    isPublic: false,
    priceCents: 0,
  });

  const [flashcardForm, setFlashcardForm] = useState<FlashcardForm>({
    frontText: "",
    backText: "",
  });

  // Configuração do drag and drop
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    })
  );

  const {
    data: deck,
    isLoading,
    refetch,
  } = trpc.decks.getById.useQuery({ id: deckId });

  // Atualizar form quando deck carrega
  useEffect(() => {
    if (deck) {
      const formData = {
        title: deck.title,
        description: deck.description || "",
        coverUrl: deck.coverUrl || "",
        isPublic: deck.isPublic,
        priceCents: deck.priceCents,
      };
      setDeckForm(formData);
      setOriginalDeckForm(formData);
    }
  }, [deck]);

  // Verificar mudanças no deck
  useEffect(() => {
    if (originalDeckForm.title) {
      const hasChanges =
        JSON.stringify(deckForm) !== JSON.stringify(originalDeckForm);
      setUnsavedChanges((prev) => ({
        hasChanges,
        type: hasChanges ? "deck" : null,
        data: hasChanges ? deckForm : null,
      }));
    }
  }, [deckForm, originalDeckForm]);

  // Mostrar alerta de salvamento
  useEffect(() => {
    setShowSaveAlert(unsavedChanges.hasChanges);
  }, [unsavedChanges]);

  const updateDeckMutation = trpc.decks.update.useMutation({
    onSuccess: () => {
      toast.success("Deck atualizado com sucesso!");
      setOriginalDeckForm(deckForm); // Atualizar o estado original
      setUnsavedChanges({ hasChanges: false, type: null, data: null });
      refetch();
    },
    onError: (error) => {
      const message = (error as any)?.message ?? "Erro ao atualizar deck";
      toast.error(message);
    },
  });

  const createFlashcardMutation = trpc.flashcards.create.useMutation({
    onSuccess: () => {
      toast.success("Flashcard criado com sucesso!");
      setShowCreateForm(false);
      setFlashcardForm({ frontText: "", backText: "" });
      refetch();
    },
    onError: (error) => {
      const message = (error as any)?.message ?? "Erro ao criar flashcard";
      toast.error(message);
    },
  });

  const updateFlashcardMutation = trpc.flashcards.update.useMutation({
    onSuccess: () => {
      toast.success("Flashcard atualizado com sucesso!");
      setEditingCard(null);
      setFlashcardForm({ frontText: "", backText: "" });
      refetch();
    },
    onError: (error) => {
      const message = (error as any)?.message ?? "Erro ao atualizar flashcard";
      toast.error(message);
    },
  });

  const deleteFlashcardMutation = trpc.flashcards.delete.useMutation({
    onSuccess: () => {
      toast.success("Flashcard deletado com sucesso!");
      refetch();
      setDeleteDialogOpen(false);
      setCardToDelete(null);
    },
    onError: (error) => {
      const message = (error as any)?.message ?? "Erro ao deletar flashcard";
      toast.error(message);
      setDeleteDialogOpen(false);
      setCardToDelete(null);
    },
  });

  const handleUpdateDeck = (e: React.FormEvent) => {
    e.preventDefault();
    if (!deckForm.title.trim()) {
      toast.error("Título é obrigatório");
      return;
    }
    updateDeckMutation.mutate({
      id: deckId,
      ...deckForm,
      description: deckForm.description || undefined,
      coverUrl: deckForm.coverUrl || undefined,
    });
  };

  const handleSaveChanges = () => {
    if (unsavedChanges.type === "deck") {
      handleUpdateDeck(new Event("submit") as any);
    }
  };

  const handleDiscardChanges = () => {
    if (unsavedChanges.type === "deck") {
      setDeckForm(originalDeckForm);
    }
    setUnsavedChanges({ hasChanges: false, type: null, data: null });
  };

  const handleCreateFlashcard = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      isHtmlContentEmpty(flashcardForm.frontText) ||
      isHtmlContentEmpty(flashcardForm.backText)
    ) {
      toast.error("Frente e verso do flashcard são obrigatórios");
      return;
    }
    createFlashcardMutation.mutate({
      deckId,
      ...flashcardForm,
    });
  };

  const handleEditFlashcard = (card: any) => {
    setEditingCard(card.id);
    setFlashcardForm({
      frontText: card.frontText,
      backText: card.backText,
    });
  };

  const handleUpdateFlashcard = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      isHtmlContentEmpty(flashcardForm.frontText) ||
      isHtmlContentEmpty(flashcardForm.backText)
    ) {
      toast.error("Frente e verso do flashcard são obrigatórios");
      return;
    }
    if (editingCard) {
      updateFlashcardMutation.mutate({
        id: editingCard,
        ...flashcardForm,
      });
    }
  };

  const handleDeleteFlashcard = (cardId: number) => {
    setCardToDelete(cardId);
    setDeleteDialogOpen(true);
  };

  const confirmDeleteFlashcard = () => {
    if (cardToDelete) {
      deleteFlashcardMutation.mutate({ id: cardToDelete });
    }
  };

  const handleDuplicateFlashcard = (cardId: number) => {
    const cardToDuplicate = deck?.flashcards.find((c) => c.id === cardId);
    if (cardToDuplicate) {
      setDuplicatingCardId(cardId);
      createFlashcardMutation.mutate(
        {
          deckId,
          frontText: cardToDuplicate.frontText,
          backText: cardToDuplicate.backText,
        },
        {
          onSettled: () => setDuplicatingCardId(null),
        }
      );
    }
  };

  const handleCancelEdit = () => {
    setEditingCard(null);
    setFlashcardForm({ frontText: "", backText: "" });
  };

  // Funções de drag and drop
  const handleDragStart = (event: DragStartEvent) => {
    const { active } = event;
    const draggedCard = deck?.flashcards.find((card) => card.id === active.id);
    setDraggedItem(draggedCard);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    setDraggedItem(null);

    if (!over || !deck) return;

    const activeId = active.id as number;
    const overId = over.id as number;

    if (activeId !== overId) {
      const flashcards = deck.flashcards;
      const oldIndex = flashcards.findIndex((card) => card.id === activeId);
      const newIndex = flashcards.findIndex((card) => card.id === overId);

      const reorderedCards = arrayMove(flashcards, oldIndex, newIndex);
      const flashcardIds = reorderedCards.map((card) => card.id);
    }
  };

  if (!session) {
    router.push("/login");
    return null;
  }

  if (isLoading) {
    return <Loader />;
  }

  if (!deck) {
    return (
      <div className="container mx-auto max-w-4xl px-4 py-8">
        <div className="text-center py-12">
          <BookOpen className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
          <h1 className="text-2xl font-bold mb-2">Deck não encontrado</h1>
          <p className="text-muted-foreground mb-6">
            O deck que você está procurando não existe ou foi removido.
          </p>
          <Button onClick={() => router.push("/my-decks")}>
            Voltar aos meus decks
          </Button>
        </div>
      </div>
    );
  }

  // Verificar se é admin ou proprietário
  const isAdmin = true;
  const isOwner = deck.userId === session.user.id;

  if (!isAdmin && !isOwner) {
    return (
      <div className="container mx-auto max-w-4xl px-4 py-8">
        <div className="text-center py-12">
          <Users className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
          <h1 className="text-2xl font-bold mb-2">Acesso negado</h1>
          <p className="text-muted-foreground mb-6">
            Você não tem permissão para editar este deck.
          </p>
          <Button onClick={() => router.push("/my-decks")}>
            Voltar aos meus decks
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen ">
      <div className="container mx-auto max-w-6xl px-4 py-8">
        {/* Alerta de mudanças não salvas */}
        {showSaveAlert && (
          <div className="fixed bottom-4 right-4 z-50">
            <Card className="shadow-lg border-2">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <AlertTriangle className="h-5 w-5" />
                  <div className="flex-1">
                    <p className="text-sm font-medium ">
                      Você tem alterações não salvas
                    </p>
                    <p className="text-xs ">Deseja salvar as alterações?</p>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={handleDiscardChanges}
                      className="text-xs"
                    >
                      Descartar
                    </Button>
                    <Button
                      size="sm"
                      onClick={handleSaveChanges}
                      disabled={updateDeckMutation.isPending}
                      className="text-xs"
                    >
                      {updateDeckMutation.isPending ? (
                        <>
                          <Loader className="h-3 w-3 mr-1 animate-spin" />
                          Salvando...
                        </>
                      ) : (
                        <>
                          <Save className="h-3 w-3 mr-1" />
                          Salvar
                        </>
                      )}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Header com navegação */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              onClick={() =>
                router.push(isAdmin ? "/admin/decks" : "/my-decks")
              }
              className="border-2"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              {isAdmin ? "Voltar ao Painel" : "Meus Decks"}
            </Button>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <BookOpen className="h-8 w-8 text-primary" />
                <h1 className="text-3xl font-bold max-w-md truncate">
                  {deck.title}
                </h1>
                {deck.isPublic ? (
                  <div className="flex items-center gap-1 text-green-600">
                    <Eye className="h-5 w-5 text-green-600" />{" "}
                    <span>modo público</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-1 text-gray-500">
                    <EyeOff className="h-5 w-5 " />
                    <span>modo privado</span>
                  </div>
                )}
              </div>
              <p className="text-muted-foreground flex items-center gap-4">
                <span className="flex items-center gap-1">
                  <Layers className="h-4 w-4" />
                  {deck.flashcards.length} flashcards
                </span>
                {deck.priceCents > 0 && (
                  <span className="flex items-center gap-1 text-emerald-600">
                    R$ {(deck.priceCents / 100).toFixed(2)}
                  </span>
                )}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              onClick={() => {
                // TODO: Implementar preview
                toast.info("Preview em desenvolvimento");
              }}
            >
              <Play className="h-4 w-4 mr-2" />
              Preview
            </Button>
            <Button
              variant="outline"
              onClick={() =>
                setActiveTab(activeTab === "cards" ? "info" : "cards")
              }
            >
              <Settings className="h-4 w-4 mr-2" />
              {activeTab === "cards" ? "Configurações" : "Flashcards"}
            </Button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex space-x-1 mb-8">
          <button
            onClick={() => setActiveTab("cards")}
            className={`px-4 py-2 rounded-lg font-medium transition-all ${
              activeTab === "cards"
                ? "bg-primary text-primary-foreground shadow-lg"
                : "hover:bg-muted"
            }`}
          >
            <Layers className="h-4 w-4 mr-2 inline" />
            Flashcards
          </button>
          <button
            onClick={() => setActiveTab("info")}
            className={`px-4 py-2 rounded-lg font-medium transition-all ${
              activeTab === "info"
                ? "bg-primary text-primary-foreground shadow-lg"
                : "hover:bg-muted"
            }`}
          >
            <Settings className="h-4 w-4 mr-2 inline" />
            Configurações
          </button>
        </div>

        {activeTab === "info" ? (
          <DeckInfoTab
            deckForm={deckForm}
            setDeckForm={setDeckForm}
            handleUpdateDeck={handleUpdateDeck}
            isLoading={updateDeckMutation.isPending}
          />
        ) : (
          <DndContext
            sensors={sensors}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
          >
            <FlashcardsTab
              deck={deck}
              showCreateForm={showCreateForm}
              setShowCreateForm={setShowCreateForm}
              editingCard={editingCard}
              previewCard={previewCard}
              setPreviewCard={setPreviewCard}
              flashcardForm={flashcardForm}
              setFlashcardForm={setFlashcardForm}
              handleCreateFlashcard={handleCreateFlashcard}
              handleEditFlashcard={handleEditFlashcard}
              handleUpdateFlashcard={handleUpdateFlashcard}
              handleDeleteFlashcard={handleDeleteFlashcard}
              handleDuplicateFlashcard={handleDuplicateFlashcard}
              handleCancelEdit={handleCancelEdit}
              isCreating={createFlashcardMutation.isPending}
              isUpdating={updateFlashcardMutation.isPending}
              isDeleting={deleteFlashcardMutation.isPending}
              duplicatingCardId={duplicatingCardId}
            />
            <DragOverlay>
              {draggedItem ? <FlashcardDragOverlay card={draggedItem} /> : null}
            </DragOverlay>
          </DndContext>
        )}
      </div>
    </div>
  );
}

// Componente para configurações do deck
function DeckInfoTab({
  deckForm,
  setDeckForm,
  handleUpdateDeck,
  isLoading,
}: {
  deckForm: any;
  setDeckForm: any;
  handleUpdateDeck: any;
  isLoading: boolean;
}) {
  return (
    <div className="space-y-6">
      <Card className="shadow-lg border-2">
        <CardHeader className="">
          <CardTitle className="flex items-center gap-2">
            <Settings className="h-5 w-5" />
            Configurações do Deck
          </CardTitle>
          <CardDescription>
            Personalize as informações e configurações do seu deck
          </CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          <form onSubmit={handleUpdateDeck} className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="title" className="flex items-center gap-2">
                  <BookOpen className="h-4 w-4" />
                  Título *
                </Label>
                <Input
                  id="title"
                  value={deckForm.title}
                  onChange={(e) =>
                    setDeckForm({ ...deckForm, title: e.target.value })
                  }
                  placeholder="Nome do seu deck"
                  className="transition-all focus:ring-2"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="coverUrl" className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4" />
                  URL da Capa
                </Label>
                <Input
                  id="coverUrl"
                  type="url"
                  value={deckForm.coverUrl}
                  onChange={(e) =>
                    setDeckForm({ ...deckForm, coverUrl: e.target.value })
                  }
                  placeholder="https://exemplo.com/imagem.jpg"
                  className="transition-all focus:ring-2"
                />
                <p className="text-xs text-muted-foreground">
                  URL de uma imagem para usar como capa do deck
                </p>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Descrição</Label>
              <textarea
                id="description"
                value={deckForm.description}
                onChange={(e) =>
                  setDeckForm({ ...deckForm, description: e.target.value })
                }
                placeholder="Descreva o conteúdo e objetivos do seu deck..."
                className="w-full px-3 py-3 text-sm border rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-ring transition-all min-h-[80px]"
                rows={4}
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="price" className="flex items-center gap-2">
                  <DollarSign className="h-4 w-4" />
                  Preço (R$)
                </Label>
                <Input
                  id="price"
                  type="number"
                  step="0.01"
                  min="0"
                  value={deckForm.priceCents / 100}
                  onChange={(e) =>
                    setDeckForm({
                      ...deckForm,
                      priceCents: Math.round(
                        parseFloat(e.target.value || "0") * 100
                      ),
                    })
                  }
                  placeholder="0.00"
                  className="transition-all focus:ring-2"
                />
                <p className="text-xs text-muted-foreground">
                  Deixe 0.00 para um deck gratuito
                </p>
              </div>

              <div className="flex items-start space-x-3 p-4 bg-muted/30 rounded-lg">
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="isPublic"
                    checked={deckForm.isPublic}
                    onChange={(e) =>
                      setDeckForm({ ...deckForm, isPublic: e.target.checked })
                    }
                    className="w-4 h-4"
                  />
                  <Label htmlFor="isPublic" className="cursor-pointer">
                    Publicar no marketplace
                  </Label>
                </div>
                {deckForm.isPublic ? (
                  <Eye className="h-4 w-4 text-green-600 mt-0.5" />
                ) : (
                  <EyeOff className="h-4 w-4 text-gray-500 mt-0.5" />
                )}
              </div>
            </div>

            <div className="flex justify-end">
              <Button
                type="submit"
                disabled={isLoading}
                className="px-8"
                size="lg"
              >
                {isLoading ? (
                  <>
                    <Loader className="mr-2 h-4 w-4 animate-spin" />
                    Salvando...
                  </>
                ) : (
                  <>
                    <Save className="h-4 w-4 mr-2" />
                    Salvar Alterações
                  </>
                )}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

// Componente para gerenciar flashcards
function FlashcardsTab({
  deck,
  showCreateForm,
  setShowCreateForm,
  editingCard,
  previewCard,
  setPreviewCard,
  flashcardForm,
  setFlashcardForm,
  handleCreateFlashcard,
  handleEditFlashcard,
  handleUpdateFlashcard,
  handleDeleteFlashcard,
  handleDuplicateFlashcard,
  handleCancelEdit,
  isCreating,
  isUpdating,
  isDeleting,
  duplicatingCardId,
}: any) {
  const hasCards = deck.flashcards.length > 0;

  return (
    <div className="space-y-6">
      {/* Header dos flashcards */}
      {!showCreateForm && (
        <Card className="shadow-lg border-2">
          <CardHeader className="">
            <div className="flex justify-between items-center">
              <div className="space-y-1">
                <CardTitle className="flex items-center gap-2">
                  <Layers className="h-5 w-5" />
                  Flashcards ({deck.flashcards.length})
                </CardTitle>
                <CardDescription>
                  {hasCards
                    ? "Gerencie, edite e organize os flashcards do seu deck"
                    : "Comece criando seu primeiro flashcard"}
                </CardDescription>
              </div>
              <Button
                onClick={() => setShowCreateForm(true)}
                size="lg"
                className="shadow-lg"
              >
                <Plus className="h-4 w-4 mr-2" />
                Novo Flashcard
              </Button>
            </div>
          </CardHeader>

          {hasCards && (
            <CardContent className="pt-6">
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Lightbulb className="h-4 w-4" />
                  <span>Clique em um card para visualizar</span>
                </div>
                <div className="flex items-center gap-1">
                  <GripVertical className="h-4 w-4" />
                  <span>Arraste para reordenar</span>
                </div>
                <div className="flex items-center gap-1">
                  <Edit3 className="h-4 w-4" />
                  <span>Use os botões para editar</span>
                </div>
              </div>
            </CardContent>
          )}
        </Card>
      )}

      {/* Formulário de criação */}
      {showCreateForm && (
        <Card className="shadow-lg border-2 border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-primary" />
              Criar Novo Flashcard
            </CardTitle>
            <CardDescription>
              Adicione uma pergunta na frente e a resposta no verso
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <CreateFlashcardForm
              flashcardForm={flashcardForm}
              setFlashcardForm={setFlashcardForm}
              handleSubmit={handleCreateFlashcard}
              isLoading={isCreating}
              onCancel={() => {
                setShowCreateForm(false);
                setFlashcardForm({ frontText: "", backText: "" });
              }}
            />
          </CardContent>
        </Card>
      )}

      {/* Lista de flashcards */}
      {!hasCards && !showCreateForm ? (
        <EmptyFlashcardsState onCreateFirst={() => setShowCreateForm(true)} />
      ) : hasCards ? (
        <SortableContext
          items={deck.flashcards.map((card: any) => card.id)}
          strategy={verticalListSortingStrategy}
        >
          <div className="grid gap-4">
            {deck.flashcards.map((card: any, index: number) => (
              <SortableFlashcardItem
                key={card.id}
                card={card}
                index={index}
                editingCard={editingCard}
                previewCard={previewCard}
                setPreviewCard={setPreviewCard}
                flashcardForm={flashcardForm}
                setFlashcardForm={setFlashcardForm}
                handleEditFlashcard={handleEditFlashcard}
                handleUpdateFlashcard={handleUpdateFlashcard}
                handleDeleteFlashcard={handleDeleteFlashcard}
                handleDuplicateFlashcard={handleDuplicateFlashcard}
                handleCancelEdit={handleCancelEdit}
                isUpdating={isUpdating}
                isDeleting={isDeleting}
                isDuplicating={duplicatingCardId === card.id}
              />
            ))}
          </div>
        </SortableContext>
      ) : null}
    </div>
  );
}

// Componente para formulário de criação de flashcard
function CreateFlashcardForm({
  flashcardForm,
  setFlashcardForm,
  handleSubmit,
  isLoading,
  onCancel,
}: any) {
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="frontText" className="text-base font-medium">
            Frente do Card *
          </Label>
          <WysiwygEditor
            content={flashcardForm.frontText}
            onChange={(content) =>
              setFlashcardForm({
                ...flashcardForm,
                frontText: content,
              })
            }
            placeholder="Ex: O que é React?"
            className="min-h-[120px]"
          />
          <p className="text-xs text-muted-foreground">
            Pergunta, termo ou conceito
          </p>
        </div>

        <div className="space-y-2">
          <Label htmlFor="backText" className="text-base font-medium">
            Verso do Card *
          </Label>
          <WysiwygEditor
            content={flashcardForm.backText}
            onChange={(content) =>
              setFlashcardForm({
                ...flashcardForm,
                backText: content,
              })
            }
            placeholder="Ex: React é uma biblioteca JavaScript para construir interfaces de usuário..."
            className="min-h-[120px]"
          />
          <p className="text-xs text-muted-foreground">
            Resposta ou explicação detalhada
          </p>
        </div>
      </div>

      <div className="flex gap-3 justify-end">
        <Button
          type="button"
          variant="outline"
          onClick={onCancel}
          disabled={isLoading}
        >
          <X className="mr-2 h-4 w-4" />
          Cancelar
        </Button>
        <Button type="submit" disabled={isLoading} className="px-8">
          {isLoading ? (
            <>
              <Loader className="mr-2 h-4 w-4 animate-spin" />
              Criando...
            </>
          ) : (
            <>
              <Plus className="mr-2 h-4 w-4" />
              Criar Flashcard
            </>
          )}
        </Button>
      </div>
    </form>
  );
}

// Estado vazio para quando não há flashcards
function EmptyFlashcardsState({
  onCreateFirst,
}: {
  onCreateFirst: () => void;
}) {
  return (
    <div className="text-center py-16">
      <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 max-w-md mx-auto">
        <Layers className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
        <h3 className="text-xl font-semibold mb-2">Nenhum flashcard ainda</h3>
        <p className="text-muted-foreground mb-6">
          Comece criando seu primeiro flashcard para dar vida ao seu deck de
          estudos.
        </p>
        <Button onClick={onCreateFirst} size="lg">
          <Sparkles className="mr-2 h-4 w-4" />
          Criar Primeiro Flashcard
        </Button>
      </div>
    </div>
  );
}

// Componente sortable para flashcards
function SortableFlashcardItem({
  card,
  index,
  editingCard,
  previewCard,
  setPreviewCard,
  flashcardForm,
  setFlashcardForm,
  handleEditFlashcard,
  handleUpdateFlashcard,
  handleDeleteFlashcard,
  handleDuplicateFlashcard,
  handleCancelEdit,
  isUpdating,
  isDeleting,
  isDuplicating,
}: any) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: card.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  const isEditing = editingCard === card.id;
  const isPreviewing = previewCard === card.id;

  if (isEditing) {
    return (
      <div ref={setNodeRef} style={style}>
        <Card className="shadow-lg border-2 border-blue-200 bg-blue-50/30 dark:bg-blue-950/30">
          <CardContent className="p-6">
            <form onSubmit={handleUpdateFlashcard} className="space-y-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div>
                  <Label className="text-sm font-medium">
                    Frente do Card *
                  </Label>
                  <WysiwygEditor
                    content={flashcardForm.frontText}
                    onChange={(content) =>
                      setFlashcardForm({
                        ...flashcardForm,
                        frontText: content,
                      })
                    }
                    placeholder="Frente do flashcard"
                    className="min-h-[80px]"
                  />
                </div>
                <div>
                  <Label className="text-sm font-medium">Verso do Card *</Label>
                  <WysiwygEditor
                    content={flashcardForm.backText}
                    onChange={(content) =>
                      setFlashcardForm({
                        ...flashcardForm,
                        backText: content,
                      })
                    }
                    placeholder="Verso do flashcard"
                    className="min-h-[80px]"
                  />
                </div>
              </div>
              <div className="flex gap-2 justify-end">
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={handleCancelEdit}
                  disabled={isUpdating}
                >
                  <X className="h-4 w-4 mr-1" />
                  Cancelar
                </Button>
                <Button type="submit" size="sm" disabled={isUpdating}>
                  {isUpdating ? (
                    <>
                      <Loader className="h-4 w-4 mr-1 animate-spin" />
                      Salvando...
                    </>
                  ) : (
                    <>
                      <Check className="h-4 w-4 mr-1" />
                      Salvar
                    </>
                  )}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div ref={setNodeRef} style={style}>
      <Card
        className={`group hover:shadow-lg transition-all duration-200 cursor-pointer ${
          isPreviewing
            ? "shadow-lg border-2 border-primary/30"
            : "border-2 hover:border-primary/20"
        } ${isDragging ? "shadow-2xl" : ""}`}
        onClick={() => setPreviewCard(isPreviewing ? null : card.id)}
      >
        <CardContent className="p-6">
          <div className="flex items-start justify-between">
            <div className="flex items-start gap-4 flex-1">
              <div className="flex items-center gap-2 text-muted-foreground">
                <div
                  {...attributes}
                  {...listeners}
                  className="cursor-grab active:cursor-grabbing p-1 hover:bg-muted rounded transition-colors"
                >
                  <GripVertical className="h-4 w-4" />
                </div>
                <span className="text-xs bg-primary/10 px-2 py-1 rounded">
                  #{index + 1}
                </span>
              </div>

              {isPreviewing ? (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 flex-1">
                  <div className="space-y-2">
                    <div className="text-sm font-medium text-muted-foreground">
                      Frente
                    </div>
                    <div className="p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg border-2 border-blue-200 dark:border-blue-800">
                      <div
                        className="font-medium prose prose-sm max-w-none"
                        dangerouslySetInnerHTML={{ __html: card.frontText }}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-sm font-medium text-muted-foreground">
                      Verso
                    </div>
                    <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border-2 border-green-200 dark:border-green-800">
                      <div
                        className="prose prose-sm max-w-none"
                        dangerouslySetInnerHTML={{ __html: card.backText }}
                      />
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-1 flex-1">
                  <div
                    className="font-medium line-clamp-2 prose prose-sm max-w-none"
                    dangerouslySetInnerHTML={{ __html: card.frontText }}
                  />
                  <div
                    className="text-sm text-muted-foreground line-clamp-2 prose prose-sm max-w-none"
                    dangerouslySetInnerHTML={{ __html: card.backText }}
                  />
                </div>
              )}
            </div>

            <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <Button
                variant="outline"
                size="sm"
                onClick={(e) => {
                  e.stopPropagation();
                  handleEditFlashcard(card);
                }}
                className="h-8 w-8 p-0"
              >
                <Edit3 className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={(e) => {
                  e.stopPropagation();
                  handleDuplicateFlashcard(card.id);
                }}
                disabled={isDuplicating}
                className="h-8 w-8 p-0"
              >
                {isDuplicating ? (
                  <Loader className="h-4 w-4 animate-spin" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
              </Button>
              <Button
                variant="destructive"
                size="sm"
                onClick={(e) => {
                  e.stopPropagation();
                  handleDeleteFlashcard(card.id);
                }}
                disabled={isDeleting}
                className="h-8 w-8 p-0"
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

// Componente para drag overlay
function FlashcardDragOverlay({ card }: { card: any }) {
  return (
    <Card className="shadow-2xl border-2 border-primary/50 bg-background/95 backdrop-blur-sm rotate-3">
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <div className="flex items-center gap-2 text-muted-foreground">
            <GripVertical className="h-4 w-4" />
            <span className="text-xs bg-primary/10 px-2 py-1 rounded">
              Arrastando...
            </span>
          </div>
          <div className="space-y-1 flex-1">
            <div
              className="font-medium line-clamp-2 prose prose-sm max-w-none"
              dangerouslySetInnerHTML={{ __html: card.frontText }}
            />
            <div
              className="text-sm text-muted-foreground line-clamp-2 prose prose-sm max-w-none"
              dangerouslySetInnerHTML={{ __html: card.backText }}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
