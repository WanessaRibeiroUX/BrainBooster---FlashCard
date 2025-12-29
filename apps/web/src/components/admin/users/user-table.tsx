"use client";

import React, { useState } from "react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  MoreHorizontal,
  Edit2,
  Trash2,
  Eye,
  Shield,
  ShieldOff,
  Calendar,
  CreditCard,
  BookOpen,
  Heart,
} from "lucide-react";
import { trpc } from "@/utils/trpc";
import { toast } from "sonner";

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

interface UserTableProps {
  users: User[];
  onEditUser: (user: User) => void;
  onViewUser: (userId: string) => void;
  onDeleteUser: (userId: string) => void;
  onRefresh: () => void;
}

export function UserTable({
  users,
  onEditUser,
  onViewUser,
  onDeleteUser,
  onRefresh,
}: UserTableProps) {
  const [updatingRole, setUpdatingRole] = useState<string | null>(null);

  const updateRoleMutation = trpc.admin.updateUserRole.useMutation({
    onSuccess: () => {
      toast.success("Role do usuário atualizada com sucesso!");
      onRefresh();
      setUpdatingRole(null);
    },
    onError: (error) => {
      toast.error(`Erro ao atualizar role: ${error.message}`);
      setUpdatingRole(null);
    },
  });

  const handleToggleRole = async (userId: string, currentRole: string) => {
    setUpdatingRole(userId);
    const newRole = currentRole === "admin" ? "user" : "admin";
    await updateRoleMutation.mutateAsync({
      userId,
      role: newRole as "user" | "admin",
    });
  };

  const getRoleBadgeVariant = (role: string) => {
    return role === "admin" ? "default" : "secondary";
  };

  const getRoleIcon = (role: string) => {
    return role === "admin" ? Shield : ShieldOff;
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Lista de Usuários</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nome</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Cadastro</TableHead>
                <TableHead>Estatísticas</TableHead>
                <TableHead className="text-right">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={6} className="text-center">
                    Nenhum usuário encontrado
                  </TableCell>
                </TableRow>
              ) : (
                users.map((user) => {
                  const RoleIcon = getRoleIcon(user.role);
                  return (
                    <TableRow key={user.id}>
                      <TableCell className="font-medium">{user.name}</TableCell>
                      <TableCell>{user.email}</TableCell>
                      <TableCell>
                        <Badge
                          variant={getRoleBadgeVariant(user.role)}
                          className="flex items-center gap-1 w-fit"
                        >
                          <RoleIcon className="h-3 w-3" />
                          {user.role === "admin" ? "Admin" : "Usuário"}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Calendar className="h-3 w-3" />
                          {format(new Date(user.createdAt), "dd/MM/yyyy", {
                            locale: ptBR,
                          })}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-4 text-sm">
                          <div className="flex items-center gap-1">
                            <BookOpen className="h-3 w-3 text-blue-500" />
                            <span>{user._count.decks}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <CreditCard className="h-3 w-3 text-green-500" />
                            <span>{user._count.purchases}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Heart className="h-3 w-3 text-red-500" />
                            <span>{user._count.favorites}</span>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0">
                              <span className="sr-only">Abrir menu</span>
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Ações</DropdownMenuLabel>
                            <DropdownMenuItem
                              onClick={() => onViewUser(user.id)}
                            >
                              <Eye className="mr-2 h-4 w-4" />
                              Visualizar
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => onEditUser(user)}>
                              <Edit2 className="mr-2 h-4 w-4" />
                              Editar
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem
                              onClick={() =>
                                handleToggleRole(user.id, user.role)
                              }
                              disabled={updatingRole === user.id}
                            >
                              {user.role === "admin" ? (
                                <>
                                  <ShieldOff className="mr-2 h-4 w-4" />
                                  Remover Admin
                                </>
                              ) : (
                                <>
                                  <Shield className="mr-2 h-4 w-4" />
                                  Tornar Admin
                                </>
                              )}
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem
                              onClick={() => onDeleteUser(user.id)}
                              className="text-red-600"
                            >
                              <Trash2 className="mr-2 h-4 w-4" />
                              Deletar
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  );
                })
              )}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}
