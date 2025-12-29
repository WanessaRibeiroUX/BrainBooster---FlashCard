"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { trpc } from "@/utils/trpc";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import Loader from "@/components/loader";
import {
  Upload,
  FileText,
  ArrowLeft,
  CheckCircle,
  AlertCircle,
  DollarSign,
  Eye,
  EyeOff,
  Download,
  Info,
} from "lucide-react";
import { toast } from "sonner";
import Link from "next/link";

interface ImportForm {
  title: string;
  description: string;
  isPublic: boolean;
  priceCents: number;
}

interface ImportResult {
  success: boolean;
  deck: any;
  cardsImported: number;
  originalDeckName: string;
  decksFound: number;
}

export default function ImportAnkiPage() {
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { data: session } = authClient.useSession();

  // Estado do componente
  const [isLoading, setIsLoading] = useState(true);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isDragOver, setIsDragOver] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [importResult, setImportResult] = useState<ImportResult | null>(null);

  // Formulário
  const [form, setForm] = useState<ImportForm>({
    title: "",
    description: "",
    isPublic: true,
    priceCents: 0,
  });

  // Verificar se é admin
  const { data: adminCheck, isLoading: adminCheckLoading } =
    trpc.admin.isAdmin.useQuery();

  // Mutation para importar
  const importMutation = trpc.adminAnkiImport.useMutation({
    onSuccess: (result) => {
      setUploadProgress(100);
      toast.success(
        `Deck importado com sucesso! ${result.cardsImported} cards criados.`
      );
    },
    onError: (error) => {
      setUploadProgress(0);
      toast.error(`Erro ao importar: ${error.message}`);
    },
  });

  // Verificações de acesso
  useEffect(() => {
    if (!session && session !== null) {
      router.push("/login");
      return;
    }

    if (!adminCheckLoading && adminCheck && !adminCheck.isAdmin) {
      router.push("/dashboard");
      return;
    }

    if (session !== undefined && !adminCheckLoading) {
      setIsLoading(false);
    }
  }, [session, adminCheck, adminCheckLoading, router]);

  // Handlers de arquivo
  const handleFileSelect = (file: File) => {
    if (!file.name.toLowerCase().endsWith(".apkg")) {
      toast.error("Por favor, selecione um arquivo .apkg válido do Anki");
      return;
    }

    if (file.size > 100 * 1024 * 1024) {
      // 100MB limit
      toast.error("Arquivo muito grande. Limite de 100MB");
      return;
    }

    setSelectedFile(file);

    // Auto-preencher título se não estiver preenchido
    if (!form.title) {
      const fileName = file.name.replace(".apkg", "");
      setForm((prev) => ({ ...prev, title: fileName }));
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);

    const files = Array.from(e.dataTransfer.files);
    if (files.length > 0) {
      handleFileSelect(files[0]);
    }
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      handleFileSelect(files[0]);
    }
  };

  // Handler do formulário
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!selectedFile) {
      toast.error("Por favor, selecione um arquivo .apkg");
      return;
    }

    if (!form.title.trim()) {
      toast.error("Por favor, digite um título para o deck");
      return;
    }

    try {
      setUploadProgress(10);

      // Converter arquivo para ArrayBuffer e depois para array de bytes
      const arrayBuffer = await selectedFile.arrayBuffer();
      const uint8Array = new Uint8Array(arrayBuffer);
      const byteArray = Array.from(uint8Array);

      setUploadProgress(30);

      // Fazer a importação
      await importMutation.mutateAsync({
        fileBuffer: byteArray,
        fileName: selectedFile.name,
        title: form.title.trim(),
        description: form.description.trim() || undefined,
        isPublic: form.isPublic,
        priceCents: form.priceCents,
      });
    } catch (error) {
      console.error("Erro ao processar arquivo:", error);
      setUploadProgress(0);
    }
  };

  // Reset para nova importação
  const handleNewImport = () => {
    setSelectedFile(null);
    setImportResult(null);
    setUploadProgress(0);
    setForm({
      title: "",
      description: "",
      isPublic: true,
      priceCents: 0,
    });
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  // Loading inicial
  if (isLoading || adminCheckLoading) {
    return <Loader />;
  }

  // Não é admin
  if (!adminCheck?.isAdmin) {
    return null;
  }

  return (
    <div className="container mx-auto py-8 max-w-4xl">
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <Link href="/admin">
          <Button variant="outline" size="sm">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Voltar ao Admin
          </Button>
        </Link>
        <div>
          <h1 className="text-3xl font-bold">Importar Deck do Anki</h1>
          <p className="text-muted-foreground">
            Importe decks .apkg do Anki para o marketplace
          </p>
        </div>
      </div>

      {/* Informações sobre o formato */}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Upload de Arquivo */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Upload className="h-5 w-5" />
              Selecionar Arquivo .apkg
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div
              className={`
                border-2 border-dashed rounded-lg p-8 text-center transition-all
                ${
                  isDragOver ? "border-primary bg-primary/5" : "border-gray-300"
                }
                ${selectedFile ? "border-green-500 bg-green-50" : ""}
              `}
              onDrop={handleDrop}
              onDragOver={(e) => {
                e.preventDefault();
                setIsDragOver(true);
              }}
              onDragLeave={() => setIsDragOver(false)}
            >
              {selectedFile ? (
                <div className="space-y-3">
                  <CheckCircle className="h-12 w-12 text-green-500 mx-auto" />
                  <div>
                    <p className="font-medium text-green-700">
                      {selectedFile.name}
                    </p>
                    <p className="text-sm text-green-600">
                      {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                    </p>
                  </div>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => setSelectedFile(null)}
                  >
                    Escolher Outro Arquivo
                  </Button>
                </div>
              ) : (
                <div className="space-y-4">
                  <FileText className="h-12 w-12 text-gray-400 mx-auto" />
                  <div>
                    <p className="text-lg font-medium">
                      Arraste um arquivo .apkg aqui
                    </p>
                    <p className="text-muted-foreground">
                      ou clique para selecionar
                    </p>
                  </div>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => fileInputRef.current?.click()}
                  >
                    Selecionar Arquivo
                  </Button>
                </div>
              )}
            </div>

            <input
              ref={fileInputRef}
              type="file"
              accept=".apkg"
              onChange={handleFileInputChange}
              className="hidden"
            />
          </CardContent>
        </Card>

        {/* Configurações do Deck */}
        <Card>
          <CardHeader>
            <CardTitle>Configurações do Deck</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="title">Título do Deck *</Label>
              <Input
                id="title"
                value={form.title}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, title: e.target.value }))
                }
                placeholder="Ex: Vocabulário de Inglês Avançado"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Descrição</Label>
              <Textarea
                id="description"
                value={form.description}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, description: e.target.value }))
                }
                placeholder="Descreva o conteúdo e objetivo deste deck..."
                rows={3}
              />
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Checkbox
                  id="isPublic"
                  checked={form.isPublic}
                  onCheckedChange={(checked) =>
                    setForm((prev) => ({ ...prev, isPublic: !!checked }))
                  }
                />
                <div className="space-y-1">
                  <Label htmlFor="isPublic" className="flex items-center gap-2">
                    {form.isPublic ? (
                      <Eye className="h-4 w-4" />
                    ) : (
                      <EyeOff className="h-4 w-4" />
                    )}
                    Deck Público
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    {form.isPublic
                      ? "Deck será visível no marketplace"
                      : "Deck ficará privado"}
                  </p>
                </div>
              </div>

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
                  value={form.priceCents / 100}
                  onChange={(e) =>
                    setForm((prev) => ({
                      ...prev,
                      priceCents: Math.round(
                        parseFloat(e.target.value || "0") * 100
                      ),
                    }))
                  }
                  placeholder="0.00"
                />
                <p className="text-xs text-muted-foreground">
                  Deixe 0 para criar um deck gratuito
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Progress Bar */}
        {uploadProgress > 0 && uploadProgress < 100 && (
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Importando deck...</span>
                  <span>{uploadProgress}%</span>
                </div>
                <Progress value={uploadProgress} />
              </div>
            </CardContent>
          </Card>
        )}

        {/* Submit Button */}
        <div className="flex justify-end">
          <Button
            type="submit"
            size="lg"
            disabled={
              !selectedFile || !form.title.trim() || importMutation.isPending
            }
            className="px-8"
          >
            {importMutation.isPending ? (
              <>
                <Loader className="mr-2 h-4 w-4" />
                Importando...
              </>
            ) : (
              <>
                <Download className="mr-2 h-4 w-4" />
                Importar Deck
              </>
            )}
          </Button>
        </div>
      </form>
    </div>
  );
}
