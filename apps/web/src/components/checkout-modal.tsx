"use client";

import type React from "react";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CreditCard, Lock, ShoppingCart } from "lucide-react";
import { toast } from "sonner";

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  deck: {
    id: number;
    title: string;
    priceCents: number;
    coverUrl?: string;
  };
}

export function CheckoutModal({ isOpen, onClose, deck }: CheckoutModalProps) {
  const [isProcessing, setIsProcessing] = useState(false);
  const [formData, setFormData] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    cardholderName: "",
    email: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    try {
      // Simulate payment processing
      await new Promise((resolve) => setTimeout(resolve, 2000));

      toast.success("🎉 Compra realizada com sucesso!", {
        description: "Você já pode acessar todos os flashcards do deck!",
      });

      onClose();
      // Refresh the page to update access
      window.location.reload();
    } catch (error) {
      toast.error("Erro no pagamento", {
        description: "Tente novamente ou entre em contato com o suporte.",
      });
    } finally {
      setIsProcessing(false);
    }
  };

  const formatPrice = (priceCents: number) => {
    return `R$ ${(priceCents / 100).toFixed(2)}`;
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-xl">
            <ShoppingCart className="h-5 w-5 text-primary" />
            Checkout Clássico
          </DialogTitle>
        </DialogHeader>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Resumo do Pedido */}
          <div className="space-y-4">
            <Card className="bg-primary/5 border-primary/20">
              <CardHeader>
                <CardTitle className="text-lg text-primary">
                  Resumo do Pedido
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  {deck.coverUrl && (
                    <div className="w-16 h-16 bg-muted rounded-lg overflow-hidden flex-shrink-0">
                      <img
                        src={deck.coverUrl || "/placeholder.svg"}
                        alt={deck.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-foreground line-clamp-2">
                      {deck.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Acesso completo ao deck
                    </p>
                  </div>
                </div>

                <div className="border-t pt-4 space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subtotal:</span>
                    <span className="font-medium">
                      {formatPrice(deck.priceCents)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">
                      Taxa de processamento:
                    </span>
                    <span className="font-medium">R$ 0,00</span>
                  </div>
                  <div className="border-t pt-2 flex justify-between text-lg font-bold">
                    <span>Total:</span>
                    <span className="text-primary">
                      {formatPrice(deck.priceCents)}
                    </span>
                  </div>
                </div>

                <div className="bg-secondary/50 p-3 rounded-lg">
                  <div className="flex items-center gap-2 text-sm text-secondary-foreground">
                    <Lock className="h-4 w-4" />
                    <span>Pagamento 100% seguro</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Formulário de Pagamento */}
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <CreditCard className="h-5 w-5" />
                  Dados do Cartão
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">E-mail</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="seu@email.com"
                      value={formData.email}
                      onChange={(e) =>
                        handleInputChange("email", e.target.value)
                      }
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="cardholderName">Nome no Cartão</Label>
                    <Input
                      id="cardholderName"
                      placeholder="Nome completo"
                      value={formData.cardholderName}
                      onChange={(e) =>
                        handleInputChange("cardholderName", e.target.value)
                      }
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="cardNumber">Número do Cartão</Label>
                    <Input
                      id="cardNumber"
                      placeholder="1234 5678 9012 3456"
                      value={formData.cardNumber}
                      onChange={(e) =>
                        handleInputChange("cardNumber", e.target.value)
                      }
                      required
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="expiryDate">Validade</Label>
                      <Input
                        id="expiryDate"
                        placeholder="MM/AA"
                        value={formData.expiryDate}
                        onChange={(e) =>
                          handleInputChange("expiryDate", e.target.value)
                        }
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cvv">CVV</Label>
                      <Input
                        id="cvv"
                        placeholder="123"
                        value={formData.cvv}
                        onChange={(e) =>
                          handleInputChange("cvv", e.target.value)
                        }
                        required
                      />
                    </div>
                  </div>

                  <div className="pt-4 space-y-3">
                    <Button
                      type="submit"
                      className="w-full bg-primary hover:bg-primary/90"
                      disabled={isProcessing}
                    >
                      {isProcessing ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                          Processando...
                        </>
                      ) : (
                        <>
                          <Lock className="h-4 w-4 mr-2" />
                          Finalizar Compra - {formatPrice(deck.priceCents)}
                        </>
                      )}
                    </Button>

                    <Button
                      type="button"
                      variant="outline"
                      onClick={onClose}
                      className="w-full bg-transparent"
                      disabled={isProcessing}
                    >
                      Cancelar
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
