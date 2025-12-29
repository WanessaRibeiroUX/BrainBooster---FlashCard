"use client";

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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  CreditCard,
  QrCode,
  ShoppingCart,
  Copy,
  CheckCircle,
} from "lucide-react";
import { toast } from "sonner";

interface AsaasCheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  deck: {
    id: number;
    title: string;
    priceCents: number;
    coverUrl?: string;
  };
}

export function AsaasCheckoutModal({
  isOpen,
  onClose,
  deck,
}: AsaasCheckoutModalProps) {
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("credit_card");
  const [pixCode, setPixCode] = useState("");
  const [showPixCode, setShowPixCode] = useState(false);

  const formatPrice = (priceCents: number) => {
    return `R$ ${(priceCents / 100).toFixed(2)}`;
  };

  const handleCreditCardPayment = async () => {
    setIsProcessing(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      toast.success("🎉 Pagamento aprovado!", {
        description: "Seu acesso ao deck foi liberado!",
      });
      onClose();
      window.location.reload();
    } catch (error) {
      toast.error("Erro no pagamento");
    } finally {
      setIsProcessing(false);
    }
  };

  const handlePixPayment = async () => {
    setIsProcessing(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      // Generate mock PIX code
      const mockPixCode = `00020126580014BR.GOV.BCB.PIX0136${Math.random()
        .toString(36)
        .substring(2, 15)}520400005303986540${(deck.priceCents / 100).toFixed(
        2
      )}5802BR5925FlashCards Marketplace6009SAO PAULO62070503***6304`;
      setPixCode(mockPixCode);
      setShowPixCode(true);
      toast.success("PIX gerado com sucesso!", {
        description: "Escaneie o QR Code ou copie o código para pagar",
      });
    } catch (error) {
      toast.error("Erro ao gerar PIX");
    } finally {
      setIsProcessing(false);
    }
  };

  const copyPixCode = () => {
    navigator.clipboard.writeText(pixCode);
    toast.success("Código PIX copiado!");
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-xl">
            <ShoppingCart className="h-5 w-5 text-primary" />
            Checkout Asaas
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
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total:</span>
                    <span className="text-primary">
                      {formatPrice(deck.priceCents)}
                    </span>
                  </div>
                </div>

                <div className="bg-secondary/50 p-3 rounded-lg">
                  <div className="flex items-center gap-2 text-sm text-secondary-foreground">
                    <CheckCircle className="h-4 w-4" />
                    <span>Processamento via Asaas</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Métodos de Pagamento */}
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  Escolha o método de pagamento
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs value={paymentMethod} onValueChange={setPaymentMethod}>
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger
                      value="credit_card"
                      className="flex items-center gap-2"
                    >
                      <CreditCard className="h-4 w-4" />
                      Cartão
                    </TabsTrigger>
                    <TabsTrigger
                      value="pix"
                      className="flex items-center gap-2"
                    >
                      <QrCode className="h-4 w-4" />
                      PIX
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="credit_card" className="space-y-4 mt-6">
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="asaas-email">E-mail</Label>
                        <Input
                          id="asaas-email"
                          type="email"
                          placeholder="seu@email.com"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="asaas-name">Nome completo</Label>
                        <Input
                          id="asaas-name"
                          placeholder="Seu nome completo"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="asaas-cpf">CPF</Label>
                        <Input
                          id="asaas-cpf"
                          placeholder="000.000.000-00"
                          required
                        />
                      </div>

                      <Button
                        onClick={handleCreditCardPayment}
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
                            <CreditCard className="h-4 w-4 mr-2" />
                            Pagar com Cartão - {formatPrice(deck.priceCents)}
                          </>
                        )}
                      </Button>
                    </div>
                  </TabsContent>

                  <TabsContent value="pix" className="space-y-4 mt-6">
                    {!showPixCode ? (
                      <div className="space-y-4">
                        <div className="text-center p-6 bg-secondary/50 rounded-lg">
                          <QrCode className="h-12 w-12 mx-auto mb-4 text-primary" />
                          <h3 className="font-semibold mb-2">
                            Pagamento via PIX
                          </h3>
                          <p className="text-sm text-muted-foreground mb-4">
                            Clique no botão abaixo para gerar o código PIX
                          </p>
                          <p className="text-lg font-bold text-primary">
                            {formatPrice(deck.priceCents)}
                          </p>
                        </div>

                        <Button
                          onClick={handlePixPayment}
                          className="w-full bg-primary hover:bg-primary/90"
                          disabled={isProcessing}
                        >
                          {isProcessing ? (
                            <>
                              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                              Gerando PIX...
                            </>
                          ) : (
                            <>
                              <QrCode className="h-4 w-4 mr-2" />
                              Gerar PIX
                            </>
                          )}
                        </Button>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        <div className="text-center p-6 bg-secondary/50 rounded-lg">
                          <div className="w-32 h-32 mx-auto mb-4 bg-white rounded-lg flex items-center justify-center border-2 border-dashed border-primary">
                            <QrCode className="h-16 w-16 text-primary" />
                          </div>
                          <p className="text-sm text-muted-foreground mb-4">
                            Escaneie o QR Code com seu app do banco ou copie o
                            código abaixo
                          </p>
                        </div>

                        <div className="space-y-2">
                          <Label>Código PIX</Label>
                          <div className="flex gap-2">
                            <Input
                              value={pixCode}
                              readOnly
                              className="font-mono text-xs"
                            />
                            <Button
                              onClick={copyPixCode}
                              variant="outline"
                              size="icon"
                            >
                              <Copy className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>

                        <div className="bg-accent/10 p-4 rounded-lg">
                          <p className="text-sm text-accent-foreground">
                            ⏰ <strong>Importante:</strong> O pagamento PIX é
                            processado em até 2 minutos. Após o pagamento, seu
                            acesso será liberado automaticamente.
                          </p>
                        </div>
                      </div>
                    )}
                  </TabsContent>
                </Tabs>

                <div className="pt-4">
                  <Button
                    variant="outline"
                    onClick={onClose}
                    className="w-full bg-transparent"
                    disabled={isProcessing}
                  >
                    Cancelar
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
