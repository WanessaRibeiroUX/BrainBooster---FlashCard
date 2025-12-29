import { ASAAS_CONFIG } from "./config";
import type {
  AsaasApiResponse,
  AsaasCustomerData,
  AsaasCustomerResponse,
  CreatePaymentData,
  AsaasPaymentResponse,
  CreateSubscriptionData,
  AsaasSubscriptionResponse,
  UpdateSubscriptionData,
  AsaasPaginatedResponse,
  CreateCheckoutData,
  CheckoutResponse,
} from "./types";

export class AsaasApiError extends Error {
  constructor(public errors: Array<{ code: string; description: string }>) {
    super(`Asaas API Error: ${errors.map((e) => e.description).join(", ")}`);
    this.name = "AsaasApiError";
  }
}

export class AsaasApiClient {
  private baseUrl: string;
  private apiKey: string;

  constructor() {
    this.baseUrl = ASAAS_CONFIG.BASE_URL;
    this.apiKey = ASAAS_CONFIG.API_KEY!;

    if (!this.apiKey) {
      throw new Error(
        "Asaas API key is required. Check environment variables."
      );
    }
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> {
    const url = `${this.baseUrl}${endpoint}`;

    const headers = {
      "Content-Type": "application/json",
      access_token: this.apiKey,
      ...options.headers,
    };

    try {
      const response = await fetch(url, {
        ...options,
        headers,
      });

      const data = await response.json();

      // Verifica se é um erro da API
      if (
        data &&
        typeof data === "object" &&
        "errors" in data &&
        Array.isArray(data.errors)
      ) {
        throw new AsaasApiError(data.errors);
      }

      return data as T;
    } catch (error) {
      if (error instanceof AsaasApiError) {
        throw error;
      }
      throw new Error(
        `Network error: ${
          error instanceof Error ? error.message : "Unknown error"
        }`
      );
    }
  }

  // ===== CUSTOMERS =====

  async createCustomer(
    customerData: AsaasCustomerData
  ): Promise<AsaasCustomerResponse> {
    return this.request<AsaasCustomerResponse>("/customers", {
      method: "POST",
      body: JSON.stringify(customerData),
    });
  }

  async getCustomer(customerId: string): Promise<AsaasCustomerResponse> {
    return this.request<AsaasCustomerResponse>(`/customers/${customerId}`);
  }

  async updateCustomer(
    customerId: string,
    customerData: Partial<AsaasCustomerData>
  ): Promise<AsaasCustomerResponse> {
    return this.request<AsaasCustomerResponse>(`/customers/${customerId}`, {
      method: "PUT",
      body: JSON.stringify(customerData),
    });
  }

  async listCustomers(params?: {
    offset?: number;
    limit?: number;
    name?: string;
    email?: string;
    cpfCnpj?: string;
  }): Promise<AsaasPaginatedResponse<AsaasCustomerResponse>> {
    const searchParams = new URLSearchParams();

    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined) {
          searchParams.append(key, value.toString());
        }
      });
    }

    const queryString = searchParams.toString();
    const endpoint = queryString ? `/customers?${queryString}` : "/customers";

    return this.request<AsaasPaginatedResponse<AsaasCustomerResponse>>(
      endpoint
    );
  }

  // ===== PAYMENTS =====

  async createPayment(
    paymentData: CreatePaymentData
  ): Promise<AsaasPaymentResponse> {
    const endpoint =
      paymentData.billingType === "CREDIT_CARD" ? "/payments/" : "/payments";

    return this.request<AsaasPaymentResponse>(endpoint, {
      method: "POST",
      body: JSON.stringify(paymentData),
    });
  }

  async getPayment(paymentId: string): Promise<AsaasPaymentResponse> {
    return this.request<AsaasPaymentResponse>(`/payments/${paymentId}`);
  }

  async updatePayment(
    paymentId: string,
    paymentData: Partial<CreatePaymentData>
  ): Promise<AsaasPaymentResponse> {
    return this.request<AsaasPaymentResponse>(`/payments/${paymentId}`, {
      method: "PUT",
      body: JSON.stringify(paymentData),
    });
  }

  async deletePayment(
    paymentId: string
  ): Promise<{ deleted: boolean; id: string }> {
    return this.request<{ deleted: boolean; id: string }>(
      `/payments/${paymentId}`,
      {
        method: "DELETE",
      }
    );
  }

  async listPayments(params?: {
    offset?: number;
    limit?: number;
    customer?: string;
    billingType?: string;
    status?: string;
    subscription?: string;
    externalReference?: string;
    paymentDate?: string;
    estimatedCreditDate?: string;
    dueDate?: string;
    user?: string;
  }): Promise<AsaasPaginatedResponse<AsaasPaymentResponse>> {
    const searchParams = new URLSearchParams();

    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined) {
          searchParams.append(key, value.toString());
        }
      });
    }

    const queryString = searchParams.toString();
    const endpoint = queryString ? `/payments?${queryString}` : "/payments";

    return this.request<AsaasPaginatedResponse<AsaasPaymentResponse>>(endpoint);
  }

  // ===== SUBSCRIPTIONS =====

  async createSubscription(
    subscriptionData: CreateSubscriptionData
  ): Promise<AsaasSubscriptionResponse> {
    const endpoint =
      subscriptionData.billingType === "CREDIT_CARD"
        ? "/subscriptions/"
        : "/subscriptions";

    return this.request<AsaasSubscriptionResponse>(endpoint, {
      method: "POST",
      body: JSON.stringify(subscriptionData),
    });
  }

  async getSubscription(
    subscriptionId: string
  ): Promise<AsaasSubscriptionResponse> {
    return this.request<AsaasSubscriptionResponse>(
      `/subscriptions/${subscriptionId}`
    );
  }

  async updateSubscription(
    subscriptionId: string,
    subscriptionData: UpdateSubscriptionData
  ): Promise<AsaasSubscriptionResponse> {
    return this.request<AsaasSubscriptionResponse>(
      `/subscriptions/${subscriptionId}`,
      {
        method: "PUT",
        body: JSON.stringify(subscriptionData),
      }
    );
  }

  async deleteSubscription(
    subscriptionId: string
  ): Promise<{ deleted: boolean; id: string }> {
    return this.request<{ deleted: boolean; id: string }>(
      `/subscriptions/${subscriptionId}`,
      {
        method: "DELETE",
      }
    );
  }

  async listSubscriptions(params?: {
    offset?: number;
    limit?: number;
    customer?: string;
    billingType?: string;
    status?: string;
    externalReference?: string;
  }): Promise<AsaasPaginatedResponse<AsaasSubscriptionResponse>> {
    const searchParams = new URLSearchParams();

    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined) {
          searchParams.append(key, value.toString());
        }
      });
    }

    const queryString = searchParams.toString();
    const endpoint = queryString
      ? `/subscriptions?${queryString}`
      : "/subscriptions";

    return this.request<AsaasPaginatedResponse<AsaasSubscriptionResponse>>(
      endpoint
    );
  }

  async getSubscriptionPayments(
    subscriptionId: string,
    params?: {
      offset?: number;
      limit?: number;
      status?: string;
    }
  ): Promise<AsaasPaginatedResponse<AsaasPaymentResponse>> {
    const searchParams = new URLSearchParams();

    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined) {
          searchParams.append(key, value.toString());
        }
      });
    }

    const queryString = searchParams.toString();
    const endpoint = queryString
      ? `/subscriptions/${subscriptionId}/payments?${queryString}`
      : `/subscriptions/${subscriptionId}/payments`;

    return this.request<AsaasPaginatedResponse<AsaasPaymentResponse>>(endpoint);
  }

  // ===== CHECKOUT =====

  async createCheckout(
    checkoutData: CreateCheckoutData
  ): Promise<CheckoutResponse> {
    return this.request<CheckoutResponse>("/checkouts", {
      method: "POST",
      body: JSON.stringify(checkoutData),
    });
  }

  async getCheckout(checkoutId: string): Promise<CheckoutResponse> {
    return this.request<CheckoutResponse>(`/checkouts/${checkoutId}`);
  }
}
