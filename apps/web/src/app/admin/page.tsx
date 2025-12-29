"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { trpc } from "@/utils/trpc";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Loader from "@/components/loader";
import {
  Users,
  BookOpen,
  CreditCard,
  FileText,
  Eye,
  DollarSign,
} from "lucide-react";
import Link from "next/link";

export default function AdminDashboard() {
  const router = useRouter();
  const { data: session } = authClient.useSession();
  const [isLoading, setIsLoading] = useState(true);

  // Verificar se é admin
  const { data: adminCheck, isLoading: adminCheckLoading } =
    trpc.admin.isAdmin.useQuery();

  // Buscar estatísticas
  const { data: stats, isLoading: statsLoading } = trpc.admin.getStats.useQuery(
    undefined,
    { enabled: !!adminCheck?.isAdmin }
  );

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

  if (isLoading || adminCheckLoading || statsLoading) {
    return <Loader />;
  }

  if (!adminCheck?.isAdmin) {
    return null;
  }

  return (
    <div className="container mx-auto py-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">Painel Administrativo</h1>
        <div className="flex gap-4">
          <Link href="/admin/decks">
            <Button>Gerenciar Decks</Button>
          </Link>
          <Link href="/admin/import-anki">
            <Button variant="outline">Importar Anki</Button>
          </Link>
          <Link href="/admin/users">
            <Button variant="outline">Gerenciar Usuários</Button>
          </Link>
        </div>
      </div>

      {/* Estatísticas */}
      {stats && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total de Usuários
              </CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalUsers}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total de Decks
              </CardTitle>
              <BookOpen className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalDecks}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total de Flashcards
              </CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalFlashcards}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Decks Públicos
              </CardTitle>
              <Eye className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.publicDecks}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Decks Pagos</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.paidDecks}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total de Compras
              </CardTitle>
              <CreditCard className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalPurchases}</div>
            </CardContent>
          </Card>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Gerenciamento de Decks</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              Gerencie todos os decks do marketplace, crie novos produtos e
              controle preços.
            </p>
            <Link href="/admin/decks">
              <Button className="w-full">
                <BookOpen className="mr-2 h-4 w-4" />
                Acessar Gerenciamento de Decks
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Importar do Anki</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              Importe decks .apkg do Anki diretamente para o marketplace com
              todas as configurações.
            </p>
            <Link href="/admin/import-anki">
              <Button variant="outline" className="w-full">
                <FileText className="mr-2 h-4 w-4" />
                Importar Deck do Anki
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Gerenciamento de Usuários</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              Visualize usuários, gerencie permissões e controle o acesso
              administrativo.
            </p>
            <Link href="/admin/users">
              <Button variant="outline" className="w-full">
                <Users className="mr-2 h-4 w-4" />
                Acessar Gerenciamento de Usuários
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
