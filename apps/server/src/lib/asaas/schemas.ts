import { z } from "zod";

// Schema para criar cobrança
export const createPaymentSchema = z.object({
  purchaseId: z.number().int().positive(),
  billingType: z.enum(["BOLETO", "PIX", "CREDIT_CARD", "UNDEFINED"]),
  dueDate: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, "Formato deve ser YYYY-MM-DD"),
  description: z.string().optional(),
  discount: z
    .object({
      value: z.number().positive().optional(),
      percentage: z.number().min(0).max(100).optional(),
      dueDateLimitDays: z.number().int().min(0).optional(),
    })
    .optional(),
  fine: z
    .object({
      value: z.number().positive().optional(),
      percentage: z.number().min(0).max(100).optional(),
    })
    .optional(),
  interest: z
    .object({
      value: z.number().positive().optional(),
      percentage: z.number().min(0).max(100).optional(),
    })
    .optional(),
  creditCard: z
    .object({
      holderName: z.string(),
      number: z.string().regex(/^\d{13,19}$/, "Número do cartão inválido"),
      expiryMonth: z.string().regex(/^(0[1-9]|1[0-2])$/, "Mês deve ser 01-12"),
      expiryYear: z.string().regex(/^\d{4}$/, "Ano deve ter 4 dígitos"),
      ccv: z.string().regex(/^\d{3,4}$/, "CVV deve ter 3 ou 4 dígitos"),
    })
    .optional(),
  creditCardHolderInfo: z
    .object({
      name: z.string(),
      email: z.string().email(),
      cpfCnpj: z
        .string()
        .regex(/^\d{11}$|^\d{14}$/, "CPF deve ter 11 dígitos ou CNPJ 14"),
      postalCode: z.string().regex(/^\d{8}$/, "CEP deve ter 8 dígitos"),
      addressNumber: z.string(),
      addressComplement: z.string().optional(),
      phone: z
        .string()
        .regex(/^\d{10,11}$/, "Telefone deve ter 10 ou 11 dígitos"),
    })
    .optional(),
});

// Schema para criar assinatura
export const createSubscriptionSchema = z.object({
  billingType: z.enum(["BOLETO", "PIX", "CREDIT_CARD", "UNDEFINED"]),
  value: z.number().positive(),
  nextDueDate: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, "Formato deve ser YYYY-MM-DD"),
  cycle: z.enum([
    "WEEKLY",
    "BIWEEKLY",
    "MONTHLY",
    "BIMONTHLY",
    "QUARTERLY",
    "SEMIANNUALLY",
    "YEARLY",
  ]),
  description: z.string().optional(),
  endDate: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, "Formato deve ser YYYY-MM-DD")
    .optional(),
  maxPayments: z.number().int().positive().optional(),
  creditCard: z
    .object({
      holderName: z.string(),
      number: z.string().regex(/^\d{13,19}$/, "Número do cartão inválido"),
      expiryMonth: z.string().regex(/^(0[1-9]|1[0-2])$/, "Mês deve ser 01-12"),
      expiryYear: z.string().regex(/^\d{4}$/, "Ano deve ter 4 dígitos"),
      ccv: z.string().regex(/^\d{3,4}$/, "CVV deve ter 3 ou 4 dígitos"),
    })
    .optional(),
  creditCardHolderInfo: z
    .object({
      name: z.string(),
      email: z.string().email(),
      cpfCnpj: z
        .string()
        .regex(/^\d{11}$|^\d{14}$/, "CPF deve ter 11 dígitos ou CNPJ 14"),
      postalCode: z.string().regex(/^\d{8}$/, "CEP deve ter 8 dígitos"),
      addressNumber: z.string(),
      addressComplement: z.string().optional(),
      phone: z
        .string()
        .regex(/^\d{10,11}$/, "Telefone deve ter 10 ou 11 dígitos"),
    })
    .optional(),
});

// Schema para atualizar assinatura
export const updateSubscriptionSchema = z.object({
  subscriptionId: z.number().int().positive(),
  value: z.number().positive().optional(),
  nextDueDate: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, "Formato deve ser YYYY-MM-DD")
    .optional(),
  cycle: z
    .enum([
      "WEEKLY",
      "BIWEEKLY",
      "MONTHLY",
      "BIMONTHLY",
      "QUARTERLY",
      "SEMIANNUALLY",
      "YEARLY",
    ])
    .optional(),
  description: z.string().optional(),
  endDate: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, "Formato deve ser YYYY-MM-DD")
    .optional(),
  maxPayments: z.number().int().positive().optional(),
  updatePendingPayments: z.boolean().optional(),
});

// Schema para atualizar dados do cliente
export const updateCustomerSchema = z.object({
  name: z.string().optional(),
  cpfCnpj: z
    .string()
    .regex(/^\d{11}$|^\d{14}$/, "CPF deve ter 11 dígitos ou CNPJ 14")
    .optional(),
  phone: z
    .string()
    .regex(/^\d{10,11}$/, "Telefone deve ter 10 ou 11 dígitos")
    .optional(),
  mobilePhone: z
    .string()
    .regex(/^\d{10,11}$/, "Telefone deve ter 10 ou 11 dígitos")
    .optional(),
  postalCode: z
    .string()
    .regex(/^\d{8}$/, "CEP deve ter 8 dígitos")
    .optional(),
  address: z.string().optional(),
  addressNumber: z.string().optional(),
  complement: z.string().optional(),
  province: z.string().optional(),
});

// Schema para listar pagamentos
export const listPaymentsSchema = z.object({
  offset: z.number().int().min(0).optional(),
  limit: z.number().int().min(1).max(100).optional(),
  status: z
    .enum(["PENDING", "CONFIRMED", "RECEIVED", "OVERDUE", "REFUNDED"])
    .optional(),
  billingType: z.enum(["BOLETO", "PIX", "CREDIT_CARD", "UNDEFINED"]).optional(),
});

// Schema para listar assinaturas
export const listSubscriptionsSchema = z.object({
  offset: z.number().int().min(0).optional(),
  limit: z.number().int().min(1).max(100).optional(),
  status: z.enum(["ACTIVE", "INACTIVE", "OVERDUE", "EXPIRED"]).optional(),
  billingType: z.enum(["BOLETO", "PIX", "CREDIT_CARD", "UNDEFINED"]).optional(),
});

export type CreatePaymentInput = z.infer<typeof createPaymentSchema>;
export type CreateSubscriptionInput = z.infer<typeof createSubscriptionSchema>;
export type UpdateSubscriptionInput = z.infer<typeof updateSubscriptionSchema>;
export type UpdateCustomerInput = z.infer<typeof updateCustomerSchema>;
export type ListPaymentsInput = z.infer<typeof listPaymentsSchema>;
export type ListSubscriptionsInput = z.infer<typeof listSubscriptionsSchema>;
