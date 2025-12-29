// Tipos TypeScript para a API Asaas

export type BillingType = "BOLETO" | "PIX" | "CREDIT_CARD" | "UNDEFINED";

export type ChargeType = "DETACHED" | "INSTALLMENT" | "RECURRENT";

export type SubscriptionCycle =
  | "WEEKLY"
  | "BIWEEKLY"
  | "MONTHLY"
  | "BIMONTHLY"
  | "QUARTERLY"
  | "SEMIANNUALLY"
  | "YEARLY";

export type PaymentStatus =
  | "PENDING"
  | "CONFIRMED"
  | "RECEIVED"
  | "OVERDUE"
  | "REFUNDED"
  | "RECEIVED_IN_CASH"
  | "REFUND_REQUESTED"
  | "REFUND_IN_PROGRESS"
  | "CHARGEBACK_REQUESTED"
  | "CHARGEBACK_DISPUTE"
  | "AWAITING_CHARGEBACK_REVERSAL";

export type SubscriptionStatus = "ACTIVE" | "INACTIVE" | "OVERDUE" | "EXPIRED";

// Dados do cliente
export interface AsaasCustomerData {
  name: string;
  cpfCnpj?: string;
  email: string;
  phone?: string;
  mobilePhone?: string;
  postalCode?: string;
  address?: string;
  addressNumber?: string;
  complement?: string;
  province?: string;
  externalReference?: string;
}

// Resposta da criação do cliente
export interface AsaasCustomerResponse extends AsaasCustomerData {
  id: string;
  dateCreated: string;
  city?: string;
  state?: string;
  country?: string;
  observations?: string;
}

// Dados do cartão de crédito
export interface CreditCardData {
  holderName: string;
  number: string;
  expiryMonth: string;
  expiryYear: string;
  ccv: string;
}

// Informações do portador do cartão
export interface CreditCardHolderInfo {
  name: string;
  email: string;
  cpfCnpj: string;
  postalCode: string;
  addressNumber: string;
  addressComplement?: string;
  phone: string;
}

// Desconto
export interface DiscountData {
  value?: number;
  percentage?: number;
  dueDateLimitDays?: number;
}

// Multa
export interface FineData {
  value?: number;
  percentage?: number;
}

// Juros
export interface InterestData {
  value?: number;
  percentage?: number;
}

// Dados para criar cobrança
export interface CreatePaymentData {
  customer: string;
  billingType: BillingType;
  value: number;
  dueDate: string; // YYYY-MM-DD
  description?: string;
  externalReference?: string;
  discount?: DiscountData;
  fine?: FineData;
  interest?: InterestData;
  postalService?: boolean;
  creditCard?: CreditCardData;
  creditCardHolderInfo?: CreditCardHolderInfo;
}

// Resposta da criação de cobrança
export interface AsaasPaymentResponse {
  id: string;
  customer: string;
  billingType: BillingType;
  status: PaymentStatus;
  value: number;
  netValue?: number;
  originalValue?: number;
  interestValue?: number;
  description?: string;
  externalReference?: string;
  dueDate: string;
  originalDueDate?: string;
  paymentDate?: string;
  clientPaymentDate?: string;
  installmentNumber?: number;
  invoiceUrl?: string;
  bankSlipUrl?: string;
  transactionReceiptUrl?: string;
  invoiceNumber?: string;
  deleted: boolean;
  dateCreated: string;
  postalService?: boolean;
  anticipated?: boolean;
  anticipable?: boolean;
  creditDate?: string;
  estimatedCreditDate?: string;
  checkoutSession?: string; // ID da sessão de checkout
  pixTransaction?: {
    qrCode: {
      encodedImage: string;
      payload: string;
    };
    expirationDate: string;
  };
}

// Dados para criar assinatura
export interface CreateSubscriptionData {
  customer: string;
  billingType: BillingType;
  value: number;
  nextDueDate: string; // YYYY-MM-DD
  cycle: SubscriptionCycle;
  description?: string;
  endDate?: string; // YYYY-MM-DD
  maxPayments?: number;
  externalReference?: string;
  creditCard?: CreditCardData;
  creditCardHolderInfo?: CreditCardHolderInfo;
}

// Dados para atualizar assinatura
export interface UpdateSubscriptionData {
  value?: number;
  nextDueDate?: string;
  cycle?: SubscriptionCycle;
  description?: string;
  endDate?: string;
  maxPayments?: number;
  updatePendingPayments?: boolean;
}

// Resposta da criação de assinatura
export interface AsaasSubscriptionResponse {
  id: string;
  customer: string;
  billingType: BillingType;
  status: SubscriptionStatus;
  value: number;
  nextDueDate: string;
  cycle: SubscriptionCycle;
  description?: string;
  endDate?: string;
  maxPayments?: number;
  externalReference?: string;
  dateCreated: string;
  creditCard?: {
    creditCardNumber: string;
    creditCardBrand: string;
    creditCardToken: string;
  };
}

// Estrutura do webhook
export interface AsaasWebhookPayload {
  event: string;
  payment?: AsaasPaymentResponse;
  subscription?: AsaasSubscriptionResponse;
  customer?: AsaasCustomerResponse;
}

// Resposta de lista paginada
export interface AsaasPaginatedResponse<T> {
  object: string;
  hasMore: boolean;
  totalCount: number;
  limit: number;
  offset: number;
  data: T[];
}

// Erro da API Asaas
export interface AsaasApiError {
  errors: Array<{
    code: string;
    description: string;
  }>;
}

// Resposta padrão da API
export type AsaasApiResponse<T> = T | AsaasApiError;

// ===== CHECKOUT TYPES =====

export interface CheckoutItem {
  name: string;
  description?: string;
  quantity: number;
  value: number;
  imageBase64?: string;
}

export interface CheckoutCallback {
  successUrl: string;
  cancelUrl: string;
  expiredUrl?: string;
}

export interface CheckoutCustomerData {
  name: string;
  cpfCnpj?: string;
  email: string;
  phone?: string;
  mobilePhone?: string;
  postalCode?: string;
  address?: string;
  addressNumber?: string;
  complement?: string;
  province?: string;
  city?: string;
  state?: string;
}

export interface CheckoutInstallment {
  maxInstallmentCount: number;
}

export interface CheckoutSubscription {
  cycle: SubscriptionCycle;
  nextDueDate: string; // YYYY-MM-DD HH:mm:ss
  endDate?: string; // YYYY-MM-DD HH:mm:ss
}

export interface CheckoutSplit {
  walletId: string;
  fixedValue?: number;
  percentualValue?: number;
}

export interface CreateCheckoutData {
  billingTypes: BillingType[];
  chargeTypes: ChargeType[];
  minutesToExpire?: number;
  callback: CheckoutCallback;
  items: CheckoutItem[];
  customerData?: CheckoutCustomerData;
  customer?: string; // ID do cliente já cadastrado
  installment?: CheckoutInstallment;
  subscription?: CheckoutSubscription;
  splits?: CheckoutSplit[];
}

export interface CheckoutResponse {
  id: string;
  link: string;
  minutesToExpire: number;
  dateCreated: string;
  items: CheckoutItem[];
  billingTypes: BillingType[];
  chargeTypes: ChargeType[];
  callback: CheckoutCallback;
  customer?: string;
  customerData?: CheckoutCustomerData;
}
