"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { trpc } from "@/utils/trpc";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, Plus, RefreshCw, Users, ArrowLeft } from "lucide-react";
import { toast } from "sonner";
import Link from "next/link";
import Loader from "@/components/loader";

// Componentes específicos
import { UserTable } from "@/components/admin/users/user-table";
import { CreateUserDialog } from "@/components/admin/users/create-user-dialog";
import { EditUserDialog } from "@/components/admin/users/edit-user-dialog";
import { UserDetailsDialog } from "@/components/admin/users/user-details-dialog";
import { DeleteUserDialog } from "@/components/admin/users/delete-user-dialog";

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  createdAt: string;
  _count: {
    decks: number;
    purchases: number;
    favorites: number;
  };
}

export default function UsersManagementPage() {
  const router = useRouter();
  const { data: session } = authClient.useSession();
  const [isLoading, setIsLoading] = useState(true);

  // Estados para busca e paginação
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(0);
  const limit = 20;

  // Estados para modais
  const [createDialogOpen, setCreateDialogOpen] = useState(false);
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [detailsDialogOpen, setDetailsDialogOpen] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [selectedUserId, setSelectedUserId] = useState<string | null>(null);

  // Verificar se é admin
  const { data: adminCheck, isLoading: adminCheckLoading } =
    trpc.admin.isAdmin.useQuery();

  // Buscar usuários
  const {
    data: usersData,
    isLoading: usersLoading,
    refetch: refetchUsers,
  } = trpc.admin.getAllUsers.useQuery(
    {
      limit,
      offset: page * limit,
      search: search || undefined,
    },
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

  const handleSearch = (value: string) => {
    setSearch(value);
    setPage(0); // Resetar para primeira página ao buscar
  };

  const handleRefresh = () => {
    refetchUsers();
    toast.success("Lista de usuários atualizada!");
  };

  const handleEditUser = (user: User) => {
    setSelectedUser(user);
    setEditDialogOpen(true);
  };

  const handleViewUser = (userId: string) => {
    setSelectedUserId(userId);
    setDetailsDialogOpen(true);
  };

  const handleDeleteUser = (userId: string) => {
    const user = usersData?.users.find((u) => u.id === userId);
    if (user) {
      setSelectedUser(user);
      setDeleteDialogOpen(true);
    }
  };

  const handleSuccess = () => {
    refetchUsers();
  };

  if (isLoading || adminCheckLoading) {
    return <Loader />;
  }

  if (!adminCheck?.isAdmin) {
    return null;
  }

  const users = usersData?.users || [];
  const total = usersData?.total || 0;
  const totalPages = Math.ceil(total / limit);

  return (
    <div className="container mx-auto py-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <Link href="/admin">
            <Button variant="outline" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Voltar
            </Button>
          </Link>
          <div>
            <h1 className="text-3xl font-bold">Gerenciamento de Usuários</h1>
            <p className="text-muted-foreground">
              Administre usuários, permissões e monitore atividades
            </p>
          </div>
        </div>
        <Button onClick={() => setCreateDialogOpen(true)}>
          <Plus className="h-4 w-4 mr-2" />
          Novo Usuário
        </Button>
      </div>

      {/* Estatísticas resumidas */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total de Usuários
            </CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{total}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Administradores
            </CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {users.filter((u) => u.role === "admin").length}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Usuários Comuns
            </CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {users.filter((u) => u.role === "user").length}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Página</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {page + 1} de {totalPages || 1}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Controles de busca e filtros */}
      <Card className="mb-6">
        <CardContent className="pt-6">
          <div className="flex items-center gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Buscar por nome ou email..."
                value={search}
                onChange={(e) => handleSearch(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button variant="outline" onClick={handleRefresh}>
              <RefreshCw className="h-4 w-4 mr-2" />
              Atualizar
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Tabela de usuários */}
      {usersLoading ? (
        <Card>
          <CardContent className="flex items-center justify-center py-12">
            <div className="text-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 mx-auto mb-4"></div>
              <p className="text-muted-foreground">Carregando usuários...</p>
            </div>
          </CardContent>
        </Card>
      ) : (
        <UserTable
          users={users}
          onEditUser={handleEditUser}
          onViewUser={handleViewUser}
          onDeleteUser={handleDeleteUser}
          onRefresh={handleSuccess}
        />
      )}

      {/* Paginação */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center space-x-2 mt-6">
          <Button
            variant="outline"
            onClick={() => setPage(Math.max(0, page - 1))}
            disabled={page === 0}
          >
            Anterior
          </Button>
          <span className="px-4 py-2 text-sm">
            Página {page + 1} de {totalPages}
          </span>
          <Button
            variant="outline"
            onClick={() => setPage(Math.min(totalPages - 1, page + 1))}
            disabled={page === totalPages - 1}
          >
            Próximo
          </Button>
        </div>
      )}

      {/* Modais */}
      <CreateUserDialog
        open={createDialogOpen}
        onOpenChange={setCreateDialogOpen}
        onSuccess={handleSuccess}
      />

      <EditUserDialog
        open={editDialogOpen}
        onOpenChange={setEditDialogOpen}
        onSuccess={handleSuccess}
        user={selectedUser}
      />

      <UserDetailsDialog
        open={detailsDialogOpen}
        onOpenChange={setDetailsDialogOpen}
        userId={selectedUserId}
      />

      <DeleteUserDialog
        open={deleteDialogOpen}
        onOpenChange={setDeleteDialogOpen}
        onSuccess={handleSuccess}
        user={selectedUser}
      />
    </div>
  );
}
