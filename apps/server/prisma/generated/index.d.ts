
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model Verification
 * 
 */
export type Verification = $Result.DefaultSelection<Prisma.$VerificationPayload>
/**
 * Model Deck
 * 
 */
export type Deck = $Result.DefaultSelection<Prisma.$DeckPayload>
/**
 * Model Flashcard
 * 
 */
export type Flashcard = $Result.DefaultSelection<Prisma.$FlashcardPayload>
/**
 * Model Purchase
 * 
 */
export type Purchase = $Result.DefaultSelection<Prisma.$PurchasePayload>
/**
 * Model Subscription
 * 
 */
export type Subscription = $Result.DefaultSelection<Prisma.$SubscriptionPayload>
/**
 * Model Favorite
 * 
 */
export type Favorite = $Result.DefaultSelection<Prisma.$FavoritePayload>
/**
 * Model AsaasCustomer
 * 
 */
export type AsaasCustomer = $Result.DefaultSelection<Prisma.$AsaasCustomerPayload>
/**
 * Model AsaasPayment
 * 
 */
export type AsaasPayment = $Result.DefaultSelection<Prisma.$AsaasPaymentPayload>
/**
 * Model AsaasSubscription
 * 
 */
export type AsaasSubscription = $Result.DefaultSelection<Prisma.$AsaasSubscriptionPayload>
/**
 * Model AsaasWebhook
 * 
 */
export type AsaasWebhook = $Result.DefaultSelection<Prisma.$AsaasWebhookPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.verification`: Exposes CRUD operations for the **Verification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Verifications
    * const verifications = await prisma.verification.findMany()
    * ```
    */
  get verification(): Prisma.VerificationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.deck`: Exposes CRUD operations for the **Deck** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Decks
    * const decks = await prisma.deck.findMany()
    * ```
    */
  get deck(): Prisma.DeckDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.flashcard`: Exposes CRUD operations for the **Flashcard** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Flashcards
    * const flashcards = await prisma.flashcard.findMany()
    * ```
    */
  get flashcard(): Prisma.FlashcardDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.purchase`: Exposes CRUD operations for the **Purchase** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Purchases
    * const purchases = await prisma.purchase.findMany()
    * ```
    */
  get purchase(): Prisma.PurchaseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.subscription`: Exposes CRUD operations for the **Subscription** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Subscriptions
    * const subscriptions = await prisma.subscription.findMany()
    * ```
    */
  get subscription(): Prisma.SubscriptionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.favorite`: Exposes CRUD operations for the **Favorite** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Favorites
    * const favorites = await prisma.favorite.findMany()
    * ```
    */
  get favorite(): Prisma.FavoriteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.asaasCustomer`: Exposes CRUD operations for the **AsaasCustomer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AsaasCustomers
    * const asaasCustomers = await prisma.asaasCustomer.findMany()
    * ```
    */
  get asaasCustomer(): Prisma.AsaasCustomerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.asaasPayment`: Exposes CRUD operations for the **AsaasPayment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AsaasPayments
    * const asaasPayments = await prisma.asaasPayment.findMany()
    * ```
    */
  get asaasPayment(): Prisma.AsaasPaymentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.asaasSubscription`: Exposes CRUD operations for the **AsaasSubscription** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AsaasSubscriptions
    * const asaasSubscriptions = await prisma.asaasSubscription.findMany()
    * ```
    */
  get asaasSubscription(): Prisma.AsaasSubscriptionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.asaasWebhook`: Exposes CRUD operations for the **AsaasWebhook** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AsaasWebhooks
    * const asaasWebhooks = await prisma.asaasWebhook.findMany()
    * ```
    */
  get asaasWebhook(): Prisma.AsaasWebhookDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.1
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Session: 'Session',
    Account: 'Account',
    Verification: 'Verification',
    Deck: 'Deck',
    Flashcard: 'Flashcard',
    Purchase: 'Purchase',
    Subscription: 'Subscription',
    Favorite: 'Favorite',
    AsaasCustomer: 'AsaasCustomer',
    AsaasPayment: 'AsaasPayment',
    AsaasSubscription: 'AsaasSubscription',
    AsaasWebhook: 'AsaasWebhook'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "session" | "account" | "verification" | "deck" | "flashcard" | "purchase" | "subscription" | "favorite" | "asaasCustomer" | "asaasPayment" | "asaasSubscription" | "asaasWebhook"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      Verification: {
        payload: Prisma.$VerificationPayload<ExtArgs>
        fields: Prisma.VerificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VerificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VerificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          findFirst: {
            args: Prisma.VerificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VerificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          findMany: {
            args: Prisma.VerificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>[]
          }
          create: {
            args: Prisma.VerificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          createMany: {
            args: Prisma.VerificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VerificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>[]
          }
          delete: {
            args: Prisma.VerificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          update: {
            args: Prisma.VerificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          deleteMany: {
            args: Prisma.VerificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VerificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VerificationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>[]
          }
          upsert: {
            args: Prisma.VerificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          aggregate: {
            args: Prisma.VerificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVerification>
          }
          groupBy: {
            args: Prisma.VerificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<VerificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.VerificationCountArgs<ExtArgs>
            result: $Utils.Optional<VerificationCountAggregateOutputType> | number
          }
        }
      }
      Deck: {
        payload: Prisma.$DeckPayload<ExtArgs>
        fields: Prisma.DeckFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DeckFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeckPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DeckFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeckPayload>
          }
          findFirst: {
            args: Prisma.DeckFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeckPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DeckFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeckPayload>
          }
          findMany: {
            args: Prisma.DeckFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeckPayload>[]
          }
          create: {
            args: Prisma.DeckCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeckPayload>
          }
          createMany: {
            args: Prisma.DeckCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DeckCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeckPayload>[]
          }
          delete: {
            args: Prisma.DeckDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeckPayload>
          }
          update: {
            args: Prisma.DeckUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeckPayload>
          }
          deleteMany: {
            args: Prisma.DeckDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DeckUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DeckUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeckPayload>[]
          }
          upsert: {
            args: Prisma.DeckUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeckPayload>
          }
          aggregate: {
            args: Prisma.DeckAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDeck>
          }
          groupBy: {
            args: Prisma.DeckGroupByArgs<ExtArgs>
            result: $Utils.Optional<DeckGroupByOutputType>[]
          }
          count: {
            args: Prisma.DeckCountArgs<ExtArgs>
            result: $Utils.Optional<DeckCountAggregateOutputType> | number
          }
        }
      }
      Flashcard: {
        payload: Prisma.$FlashcardPayload<ExtArgs>
        fields: Prisma.FlashcardFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FlashcardFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlashcardPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FlashcardFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlashcardPayload>
          }
          findFirst: {
            args: Prisma.FlashcardFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlashcardPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FlashcardFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlashcardPayload>
          }
          findMany: {
            args: Prisma.FlashcardFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlashcardPayload>[]
          }
          create: {
            args: Prisma.FlashcardCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlashcardPayload>
          }
          createMany: {
            args: Prisma.FlashcardCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FlashcardCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlashcardPayload>[]
          }
          delete: {
            args: Prisma.FlashcardDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlashcardPayload>
          }
          update: {
            args: Prisma.FlashcardUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlashcardPayload>
          }
          deleteMany: {
            args: Prisma.FlashcardDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FlashcardUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FlashcardUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlashcardPayload>[]
          }
          upsert: {
            args: Prisma.FlashcardUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlashcardPayload>
          }
          aggregate: {
            args: Prisma.FlashcardAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFlashcard>
          }
          groupBy: {
            args: Prisma.FlashcardGroupByArgs<ExtArgs>
            result: $Utils.Optional<FlashcardGroupByOutputType>[]
          }
          count: {
            args: Prisma.FlashcardCountArgs<ExtArgs>
            result: $Utils.Optional<FlashcardCountAggregateOutputType> | number
          }
        }
      }
      Purchase: {
        payload: Prisma.$PurchasePayload<ExtArgs>
        fields: Prisma.PurchaseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PurchaseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PurchaseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload>
          }
          findFirst: {
            args: Prisma.PurchaseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PurchaseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload>
          }
          findMany: {
            args: Prisma.PurchaseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload>[]
          }
          create: {
            args: Prisma.PurchaseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload>
          }
          createMany: {
            args: Prisma.PurchaseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PurchaseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload>[]
          }
          delete: {
            args: Prisma.PurchaseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload>
          }
          update: {
            args: Prisma.PurchaseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload>
          }
          deleteMany: {
            args: Prisma.PurchaseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PurchaseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PurchaseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload>[]
          }
          upsert: {
            args: Prisma.PurchaseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload>
          }
          aggregate: {
            args: Prisma.PurchaseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePurchase>
          }
          groupBy: {
            args: Prisma.PurchaseGroupByArgs<ExtArgs>
            result: $Utils.Optional<PurchaseGroupByOutputType>[]
          }
          count: {
            args: Prisma.PurchaseCountArgs<ExtArgs>
            result: $Utils.Optional<PurchaseCountAggregateOutputType> | number
          }
        }
      }
      Subscription: {
        payload: Prisma.$SubscriptionPayload<ExtArgs>
        fields: Prisma.SubscriptionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubscriptionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubscriptionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          findFirst: {
            args: Prisma.SubscriptionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubscriptionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          findMany: {
            args: Prisma.SubscriptionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>[]
          }
          create: {
            args: Prisma.SubscriptionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          createMany: {
            args: Prisma.SubscriptionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SubscriptionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>[]
          }
          delete: {
            args: Prisma.SubscriptionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          update: {
            args: Prisma.SubscriptionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          deleteMany: {
            args: Prisma.SubscriptionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubscriptionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SubscriptionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>[]
          }
          upsert: {
            args: Prisma.SubscriptionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          aggregate: {
            args: Prisma.SubscriptionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubscription>
          }
          groupBy: {
            args: Prisma.SubscriptionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubscriptionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubscriptionCountArgs<ExtArgs>
            result: $Utils.Optional<SubscriptionCountAggregateOutputType> | number
          }
        }
      }
      Favorite: {
        payload: Prisma.$FavoritePayload<ExtArgs>
        fields: Prisma.FavoriteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FavoriteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FavoriteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>
          }
          findFirst: {
            args: Prisma.FavoriteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FavoriteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>
          }
          findMany: {
            args: Prisma.FavoriteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>[]
          }
          create: {
            args: Prisma.FavoriteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>
          }
          createMany: {
            args: Prisma.FavoriteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FavoriteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>[]
          }
          delete: {
            args: Prisma.FavoriteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>
          }
          update: {
            args: Prisma.FavoriteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>
          }
          deleteMany: {
            args: Prisma.FavoriteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FavoriteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FavoriteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>[]
          }
          upsert: {
            args: Prisma.FavoriteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>
          }
          aggregate: {
            args: Prisma.FavoriteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFavorite>
          }
          groupBy: {
            args: Prisma.FavoriteGroupByArgs<ExtArgs>
            result: $Utils.Optional<FavoriteGroupByOutputType>[]
          }
          count: {
            args: Prisma.FavoriteCountArgs<ExtArgs>
            result: $Utils.Optional<FavoriteCountAggregateOutputType> | number
          }
        }
      }
      AsaasCustomer: {
        payload: Prisma.$AsaasCustomerPayload<ExtArgs>
        fields: Prisma.AsaasCustomerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AsaasCustomerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsaasCustomerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AsaasCustomerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsaasCustomerPayload>
          }
          findFirst: {
            args: Prisma.AsaasCustomerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsaasCustomerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AsaasCustomerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsaasCustomerPayload>
          }
          findMany: {
            args: Prisma.AsaasCustomerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsaasCustomerPayload>[]
          }
          create: {
            args: Prisma.AsaasCustomerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsaasCustomerPayload>
          }
          createMany: {
            args: Prisma.AsaasCustomerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AsaasCustomerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsaasCustomerPayload>[]
          }
          delete: {
            args: Prisma.AsaasCustomerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsaasCustomerPayload>
          }
          update: {
            args: Prisma.AsaasCustomerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsaasCustomerPayload>
          }
          deleteMany: {
            args: Prisma.AsaasCustomerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AsaasCustomerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AsaasCustomerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsaasCustomerPayload>[]
          }
          upsert: {
            args: Prisma.AsaasCustomerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsaasCustomerPayload>
          }
          aggregate: {
            args: Prisma.AsaasCustomerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAsaasCustomer>
          }
          groupBy: {
            args: Prisma.AsaasCustomerGroupByArgs<ExtArgs>
            result: $Utils.Optional<AsaasCustomerGroupByOutputType>[]
          }
          count: {
            args: Prisma.AsaasCustomerCountArgs<ExtArgs>
            result: $Utils.Optional<AsaasCustomerCountAggregateOutputType> | number
          }
        }
      }
      AsaasPayment: {
        payload: Prisma.$AsaasPaymentPayload<ExtArgs>
        fields: Prisma.AsaasPaymentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AsaasPaymentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsaasPaymentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AsaasPaymentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsaasPaymentPayload>
          }
          findFirst: {
            args: Prisma.AsaasPaymentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsaasPaymentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AsaasPaymentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsaasPaymentPayload>
          }
          findMany: {
            args: Prisma.AsaasPaymentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsaasPaymentPayload>[]
          }
          create: {
            args: Prisma.AsaasPaymentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsaasPaymentPayload>
          }
          createMany: {
            args: Prisma.AsaasPaymentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AsaasPaymentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsaasPaymentPayload>[]
          }
          delete: {
            args: Prisma.AsaasPaymentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsaasPaymentPayload>
          }
          update: {
            args: Prisma.AsaasPaymentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsaasPaymentPayload>
          }
          deleteMany: {
            args: Prisma.AsaasPaymentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AsaasPaymentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AsaasPaymentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsaasPaymentPayload>[]
          }
          upsert: {
            args: Prisma.AsaasPaymentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsaasPaymentPayload>
          }
          aggregate: {
            args: Prisma.AsaasPaymentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAsaasPayment>
          }
          groupBy: {
            args: Prisma.AsaasPaymentGroupByArgs<ExtArgs>
            result: $Utils.Optional<AsaasPaymentGroupByOutputType>[]
          }
          count: {
            args: Prisma.AsaasPaymentCountArgs<ExtArgs>
            result: $Utils.Optional<AsaasPaymentCountAggregateOutputType> | number
          }
        }
      }
      AsaasSubscription: {
        payload: Prisma.$AsaasSubscriptionPayload<ExtArgs>
        fields: Prisma.AsaasSubscriptionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AsaasSubscriptionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsaasSubscriptionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AsaasSubscriptionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsaasSubscriptionPayload>
          }
          findFirst: {
            args: Prisma.AsaasSubscriptionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsaasSubscriptionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AsaasSubscriptionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsaasSubscriptionPayload>
          }
          findMany: {
            args: Prisma.AsaasSubscriptionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsaasSubscriptionPayload>[]
          }
          create: {
            args: Prisma.AsaasSubscriptionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsaasSubscriptionPayload>
          }
          createMany: {
            args: Prisma.AsaasSubscriptionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AsaasSubscriptionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsaasSubscriptionPayload>[]
          }
          delete: {
            args: Prisma.AsaasSubscriptionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsaasSubscriptionPayload>
          }
          update: {
            args: Prisma.AsaasSubscriptionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsaasSubscriptionPayload>
          }
          deleteMany: {
            args: Prisma.AsaasSubscriptionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AsaasSubscriptionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AsaasSubscriptionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsaasSubscriptionPayload>[]
          }
          upsert: {
            args: Prisma.AsaasSubscriptionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsaasSubscriptionPayload>
          }
          aggregate: {
            args: Prisma.AsaasSubscriptionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAsaasSubscription>
          }
          groupBy: {
            args: Prisma.AsaasSubscriptionGroupByArgs<ExtArgs>
            result: $Utils.Optional<AsaasSubscriptionGroupByOutputType>[]
          }
          count: {
            args: Prisma.AsaasSubscriptionCountArgs<ExtArgs>
            result: $Utils.Optional<AsaasSubscriptionCountAggregateOutputType> | number
          }
        }
      }
      AsaasWebhook: {
        payload: Prisma.$AsaasWebhookPayload<ExtArgs>
        fields: Prisma.AsaasWebhookFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AsaasWebhookFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsaasWebhookPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AsaasWebhookFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsaasWebhookPayload>
          }
          findFirst: {
            args: Prisma.AsaasWebhookFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsaasWebhookPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AsaasWebhookFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsaasWebhookPayload>
          }
          findMany: {
            args: Prisma.AsaasWebhookFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsaasWebhookPayload>[]
          }
          create: {
            args: Prisma.AsaasWebhookCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsaasWebhookPayload>
          }
          createMany: {
            args: Prisma.AsaasWebhookCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AsaasWebhookCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsaasWebhookPayload>[]
          }
          delete: {
            args: Prisma.AsaasWebhookDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsaasWebhookPayload>
          }
          update: {
            args: Prisma.AsaasWebhookUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsaasWebhookPayload>
          }
          deleteMany: {
            args: Prisma.AsaasWebhookDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AsaasWebhookUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AsaasWebhookUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsaasWebhookPayload>[]
          }
          upsert: {
            args: Prisma.AsaasWebhookUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsaasWebhookPayload>
          }
          aggregate: {
            args: Prisma.AsaasWebhookAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAsaasWebhook>
          }
          groupBy: {
            args: Prisma.AsaasWebhookGroupByArgs<ExtArgs>
            result: $Utils.Optional<AsaasWebhookGroupByOutputType>[]
          }
          count: {
            args: Prisma.AsaasWebhookCountArgs<ExtArgs>
            result: $Utils.Optional<AsaasWebhookCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    session?: SessionOmit
    account?: AccountOmit
    verification?: VerificationOmit
    deck?: DeckOmit
    flashcard?: FlashcardOmit
    purchase?: PurchaseOmit
    subscription?: SubscriptionOmit
    favorite?: FavoriteOmit
    asaasCustomer?: AsaasCustomerOmit
    asaasPayment?: AsaasPaymentOmit
    asaasSubscription?: AsaasSubscriptionOmit
    asaasWebhook?: AsaasWebhookOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    sessions: number
    accounts: number
    decks: number
    purchases: number
    subscriptions: number
    favorites: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
    accounts?: boolean | UserCountOutputTypeCountAccountsArgs
    decks?: boolean | UserCountOutputTypeCountDecksArgs
    purchases?: boolean | UserCountOutputTypeCountPurchasesArgs
    subscriptions?: boolean | UserCountOutputTypeCountSubscriptionsArgs
    favorites?: boolean | UserCountOutputTypeCountFavoritesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDecksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeckWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPurchasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PurchaseWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSubscriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubscriptionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFavoritesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FavoriteWhereInput
  }


  /**
   * Count Type DeckCountOutputType
   */

  export type DeckCountOutputType = {
    flashcards: number
    purchases: number
    favorites: number
  }

  export type DeckCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    flashcards?: boolean | DeckCountOutputTypeCountFlashcardsArgs
    purchases?: boolean | DeckCountOutputTypeCountPurchasesArgs
    favorites?: boolean | DeckCountOutputTypeCountFavoritesArgs
  }

  // Custom InputTypes
  /**
   * DeckCountOutputType without action
   */
  export type DeckCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeckCountOutputType
     */
    select?: DeckCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DeckCountOutputType without action
   */
  export type DeckCountOutputTypeCountFlashcardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FlashcardWhereInput
  }

  /**
   * DeckCountOutputType without action
   */
  export type DeckCountOutputTypeCountPurchasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PurchaseWhereInput
  }

  /**
   * DeckCountOutputType without action
   */
  export type DeckCountOutputTypeCountFavoritesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FavoriteWhereInput
  }


  /**
   * Count Type AsaasCustomerCountOutputType
   */

  export type AsaasCustomerCountOutputType = {
    payments: number
    subscriptions: number
  }

  export type AsaasCustomerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payments?: boolean | AsaasCustomerCountOutputTypeCountPaymentsArgs
    subscriptions?: boolean | AsaasCustomerCountOutputTypeCountSubscriptionsArgs
  }

  // Custom InputTypes
  /**
   * AsaasCustomerCountOutputType without action
   */
  export type AsaasCustomerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AsaasCustomerCountOutputType
     */
    select?: AsaasCustomerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AsaasCustomerCountOutputType without action
   */
  export type AsaasCustomerCountOutputTypeCountPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AsaasPaymentWhereInput
  }

  /**
   * AsaasCustomerCountOutputType without action
   */
  export type AsaasCustomerCountOutputTypeCountSubscriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AsaasSubscriptionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: boolean | null
    image: string | null
    role: string | null
    asaasCustomerId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: boolean | null
    image: string | null
    role: string | null
    asaasCustomerId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    emailVerified: number
    image: number
    role: number
    asaasCustomerId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    role?: true
    asaasCustomerId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    role?: true
    asaasCustomerId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    role?: true
    asaasCustomerId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    emailVerified: boolean
    image: string | null
    role: string
    asaasCustomerId: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    role?: boolean
    asaasCustomerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    accounts?: boolean | User$accountsArgs<ExtArgs>
    decks?: boolean | User$decksArgs<ExtArgs>
    purchases?: boolean | User$purchasesArgs<ExtArgs>
    subscriptions?: boolean | User$subscriptionsArgs<ExtArgs>
    favorites?: boolean | User$favoritesArgs<ExtArgs>
    asaasCustomer?: boolean | User$asaasCustomerArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    role?: boolean
    asaasCustomerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    role?: boolean
    asaasCustomerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    role?: boolean
    asaasCustomerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "emailVerified" | "image" | "role" | "asaasCustomerId" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    accounts?: boolean | User$accountsArgs<ExtArgs>
    decks?: boolean | User$decksArgs<ExtArgs>
    purchases?: boolean | User$purchasesArgs<ExtArgs>
    subscriptions?: boolean | User$subscriptionsArgs<ExtArgs>
    favorites?: boolean | User$favoritesArgs<ExtArgs>
    asaasCustomer?: boolean | User$asaasCustomerArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      sessions: Prisma.$SessionPayload<ExtArgs>[]
      accounts: Prisma.$AccountPayload<ExtArgs>[]
      decks: Prisma.$DeckPayload<ExtArgs>[]
      purchases: Prisma.$PurchasePayload<ExtArgs>[]
      subscriptions: Prisma.$SubscriptionPayload<ExtArgs>[]
      favorites: Prisma.$FavoritePayload<ExtArgs>[]
      asaasCustomer: Prisma.$AsaasCustomerPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      emailVerified: boolean
      image: string | null
      role: string
      asaasCustomerId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    accounts<T extends User$accountsArgs<ExtArgs> = {}>(args?: Subset<T, User$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    decks<T extends User$decksArgs<ExtArgs> = {}>(args?: Subset<T, User$decksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeckPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    purchases<T extends User$purchasesArgs<ExtArgs> = {}>(args?: Subset<T, User$purchasesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    subscriptions<T extends User$subscriptionsArgs<ExtArgs> = {}>(args?: Subset<T, User$subscriptionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    favorites<T extends User$favoritesArgs<ExtArgs> = {}>(args?: Subset<T, User$favoritesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    asaasCustomer<T extends User$asaasCustomerArgs<ExtArgs> = {}>(args?: Subset<T, User$asaasCustomerArgs<ExtArgs>>): Prisma__AsaasCustomerClient<$Result.GetResult<Prisma.$AsaasCustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly emailVerified: FieldRef<"User", 'Boolean'>
    readonly image: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
    readonly asaasCustomerId: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * User.accounts
   */
  export type User$accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    cursor?: AccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * User.decks
   */
  export type User$decksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deck
     */
    select?: DeckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deck
     */
    omit?: DeckOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeckInclude<ExtArgs> | null
    where?: DeckWhereInput
    orderBy?: DeckOrderByWithRelationInput | DeckOrderByWithRelationInput[]
    cursor?: DeckWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DeckScalarFieldEnum | DeckScalarFieldEnum[]
  }

  /**
   * User.purchases
   */
  export type User$purchasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    where?: PurchaseWhereInput
    orderBy?: PurchaseOrderByWithRelationInput | PurchaseOrderByWithRelationInput[]
    cursor?: PurchaseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PurchaseScalarFieldEnum | PurchaseScalarFieldEnum[]
  }

  /**
   * User.subscriptions
   */
  export type User$subscriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    where?: SubscriptionWhereInput
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    cursor?: SubscriptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * User.favorites
   */
  export type User$favoritesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    where?: FavoriteWhereInput
    orderBy?: FavoriteOrderByWithRelationInput | FavoriteOrderByWithRelationInput[]
    cursor?: FavoriteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FavoriteScalarFieldEnum | FavoriteScalarFieldEnum[]
  }

  /**
   * User.asaasCustomer
   */
  export type User$asaasCustomerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AsaasCustomer
     */
    select?: AsaasCustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AsaasCustomer
     */
    omit?: AsaasCustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsaasCustomerInclude<ExtArgs> | null
    where?: AsaasCustomerWhereInput
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    expiresAt: Date | null
    token: string | null
    createdAt: Date | null
    updatedAt: Date | null
    ipAddress: string | null
    userAgent: string | null
    userId: string | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    expiresAt: Date | null
    token: string | null
    createdAt: Date | null
    updatedAt: Date | null
    ipAddress: string | null
    userAgent: string | null
    userId: string | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    expiresAt: number
    token: number
    createdAt: number
    updatedAt: number
    ipAddress: number
    userAgent: number
    userId: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    expiresAt?: true
    token?: true
    createdAt?: true
    updatedAt?: true
    ipAddress?: true
    userAgent?: true
    userId?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    expiresAt?: true
    token?: true
    createdAt?: true
    updatedAt?: true
    ipAddress?: true
    userAgent?: true
    userId?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    expiresAt?: true
    token?: true
    createdAt?: true
    updatedAt?: true
    ipAddress?: true
    userAgent?: true
    userId?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    expiresAt: Date
    token: string
    createdAt: Date
    updatedAt: Date
    ipAddress: string | null
    userAgent: string | null
    userId: string
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    expiresAt?: boolean
    token?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    expiresAt?: boolean
    token?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    expiresAt?: boolean
    token?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    expiresAt?: boolean
    token?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    userId?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "expiresAt" | "token" | "createdAt" | "updatedAt" | "ipAddress" | "userAgent" | "userId", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      expiresAt: Date
      token: string
      createdAt: Date
      updatedAt: Date
      ipAddress: string | null
      userAgent: string | null
      userId: string
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {SessionUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SessionUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly expiresAt: FieldRef<"Session", 'DateTime'>
    readonly token: FieldRef<"Session", 'String'>
    readonly createdAt: FieldRef<"Session", 'DateTime'>
    readonly updatedAt: FieldRef<"Session", 'DateTime'>
    readonly ipAddress: FieldRef<"Session", 'String'>
    readonly userAgent: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
  }

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session updateManyAndReturn
   */
  export type SessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountMinAggregateOutputType = {
    id: string | null
    accountId: string | null
    providerId: string | null
    userId: string | null
    accessToken: string | null
    refreshToken: string | null
    idToken: string | null
    accessTokenExpiresAt: Date | null
    refreshTokenExpiresAt: Date | null
    scope: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountMaxAggregateOutputType = {
    id: string | null
    accountId: string | null
    providerId: string | null
    userId: string | null
    accessToken: string | null
    refreshToken: string | null
    idToken: string | null
    accessTokenExpiresAt: Date | null
    refreshTokenExpiresAt: Date | null
    scope: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    accountId: number
    providerId: number
    userId: number
    accessToken: number
    refreshToken: number
    idToken: number
    accessTokenExpiresAt: number
    refreshTokenExpiresAt: number
    scope: number
    password: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AccountMinAggregateInputType = {
    id?: true
    accountId?: true
    providerId?: true
    userId?: true
    accessToken?: true
    refreshToken?: true
    idToken?: true
    accessTokenExpiresAt?: true
    refreshTokenExpiresAt?: true
    scope?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    accountId?: true
    providerId?: true
    userId?: true
    accessToken?: true
    refreshToken?: true
    idToken?: true
    accessTokenExpiresAt?: true
    refreshTokenExpiresAt?: true
    scope?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    accountId?: true
    providerId?: true
    userId?: true
    accessToken?: true
    refreshToken?: true
    idToken?: true
    accessTokenExpiresAt?: true
    refreshTokenExpiresAt?: true
    scope?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    id: string
    accountId: string
    providerId: string
    userId: string
    accessToken: string | null
    refreshToken: string | null
    idToken: string | null
    accessTokenExpiresAt: Date | null
    refreshTokenExpiresAt: Date | null
    scope: string | null
    password: string | null
    createdAt: Date
    updatedAt: Date
    _count: AccountCountAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountId?: boolean
    providerId?: boolean
    userId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    idToken?: boolean
    accessTokenExpiresAt?: boolean
    refreshTokenExpiresAt?: boolean
    scope?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountId?: boolean
    providerId?: boolean
    userId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    idToken?: boolean
    accessTokenExpiresAt?: boolean
    refreshTokenExpiresAt?: boolean
    scope?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountId?: boolean
    providerId?: boolean
    userId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    idToken?: boolean
    accessTokenExpiresAt?: boolean
    refreshTokenExpiresAt?: boolean
    scope?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectScalar = {
    id?: boolean
    accountId?: boolean
    providerId?: boolean
    userId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    idToken?: boolean
    accessTokenExpiresAt?: boolean
    refreshTokenExpiresAt?: boolean
    scope?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "accountId" | "providerId" | "userId" | "accessToken" | "refreshToken" | "idToken" | "accessTokenExpiresAt" | "refreshTokenExpiresAt" | "scope" | "password" | "createdAt" | "updatedAt", ExtArgs["result"]["account"]>
  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      accountId: string
      providerId: string
      userId: string
      accessToken: string | null
      refreshToken: string | null
      idToken: string | null
      accessTokenExpiresAt: Date | null
      refreshTokenExpiresAt: Date | null
      scope: string | null
      password: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["account"]>
    composites: {}
  }

  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountFindUniqueArgs>(args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountFindFirstArgs>(args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccountFindManyArgs>(args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
     */
    create<T extends AccountCreateArgs>(args: SelectSubset<T, AccountCreateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accounts.
     * @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountCreateManyArgs>(args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Accounts and returns the data saved in the database.
     * @param {AccountCreateManyAndReturnArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccountCreateManyAndReturnArgs>(args?: SelectSubset<T, AccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
     */
    delete<T extends AccountDeleteArgs>(args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountUpdateArgs>(args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountDeleteManyArgs>(args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountUpdateManyArgs>(args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts and returns the data updated in the database.
     * @param {AccountUpdateManyAndReturnArgs} args - Arguments to update many Accounts.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AccountUpdateManyAndReturnArgs>(args: SelectSubset<T, AccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
     */
    upsert<T extends AccountUpsertArgs>(args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Account model
   */
  interface AccountFieldRefs {
    readonly id: FieldRef<"Account", 'String'>
    readonly accountId: FieldRef<"Account", 'String'>
    readonly providerId: FieldRef<"Account", 'String'>
    readonly userId: FieldRef<"Account", 'String'>
    readonly accessToken: FieldRef<"Account", 'String'>
    readonly refreshToken: FieldRef<"Account", 'String'>
    readonly idToken: FieldRef<"Account", 'String'>
    readonly accessTokenExpiresAt: FieldRef<"Account", 'DateTime'>
    readonly refreshTokenExpiresAt: FieldRef<"Account", 'DateTime'>
    readonly scope: FieldRef<"Account", 'String'>
    readonly password: FieldRef<"Account", 'String'>
    readonly createdAt: FieldRef<"Account", 'DateTime'>
    readonly updatedAt: FieldRef<"Account", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }

  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
  }

  /**
   * Account createManyAndReturn
   */
  export type AccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
  }

  /**
   * Account updateManyAndReturn
   */
  export type AccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }

  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to delete.
     */
    limit?: number
  }

  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
  }


  /**
   * Model Verification
   */

  export type AggregateVerification = {
    _count: VerificationCountAggregateOutputType | null
    _min: VerificationMinAggregateOutputType | null
    _max: VerificationMaxAggregateOutputType | null
  }

  export type VerificationMinAggregateOutputType = {
    id: string | null
    identifier: string | null
    value: string | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VerificationMaxAggregateOutputType = {
    id: string | null
    identifier: string | null
    value: string | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VerificationCountAggregateOutputType = {
    id: number
    identifier: number
    value: number
    expiresAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type VerificationMinAggregateInputType = {
    id?: true
    identifier?: true
    value?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VerificationMaxAggregateInputType = {
    id?: true
    identifier?: true
    value?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VerificationCountAggregateInputType = {
    id?: true
    identifier?: true
    value?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type VerificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Verification to aggregate.
     */
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Verifications
    **/
    _count?: true | VerificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerificationMaxAggregateInputType
  }

  export type GetVerificationAggregateType<T extends VerificationAggregateArgs> = {
        [P in keyof T & keyof AggregateVerification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerification[P]>
      : GetScalarType<T[P], AggregateVerification[P]>
  }




  export type VerificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerificationWhereInput
    orderBy?: VerificationOrderByWithAggregationInput | VerificationOrderByWithAggregationInput[]
    by: VerificationScalarFieldEnum[] | VerificationScalarFieldEnum
    having?: VerificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerificationCountAggregateInputType | true
    _min?: VerificationMinAggregateInputType
    _max?: VerificationMaxAggregateInputType
  }

  export type VerificationGroupByOutputType = {
    id: string
    identifier: string
    value: string
    expiresAt: Date
    createdAt: Date | null
    updatedAt: Date | null
    _count: VerificationCountAggregateOutputType | null
    _min: VerificationMinAggregateOutputType | null
    _max: VerificationMaxAggregateOutputType | null
  }

  type GetVerificationGroupByPayload<T extends VerificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VerificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerificationGroupByOutputType[P]>
            : GetScalarType<T[P], VerificationGroupByOutputType[P]>
        }
      >
    >


  export type VerificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    identifier?: boolean
    value?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["verification"]>

  export type VerificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    identifier?: boolean
    value?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["verification"]>

  export type VerificationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    identifier?: boolean
    value?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["verification"]>

  export type VerificationSelectScalar = {
    id?: boolean
    identifier?: boolean
    value?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type VerificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "identifier" | "value" | "expiresAt" | "createdAt" | "updatedAt", ExtArgs["result"]["verification"]>

  export type $VerificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Verification"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      identifier: string
      value: string
      expiresAt: Date
      createdAt: Date | null
      updatedAt: Date | null
    }, ExtArgs["result"]["verification"]>
    composites: {}
  }

  type VerificationGetPayload<S extends boolean | null | undefined | VerificationDefaultArgs> = $Result.GetResult<Prisma.$VerificationPayload, S>

  type VerificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VerificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VerificationCountAggregateInputType | true
    }

  export interface VerificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Verification'], meta: { name: 'Verification' } }
    /**
     * Find zero or one Verification that matches the filter.
     * @param {VerificationFindUniqueArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VerificationFindUniqueArgs>(args: SelectSubset<T, VerificationFindUniqueArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Verification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VerificationFindUniqueOrThrowArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VerificationFindUniqueOrThrowArgs>(args: SelectSubset<T, VerificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Verification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationFindFirstArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VerificationFindFirstArgs>(args?: SelectSubset<T, VerificationFindFirstArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Verification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationFindFirstOrThrowArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VerificationFindFirstOrThrowArgs>(args?: SelectSubset<T, VerificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Verifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Verifications
     * const verifications = await prisma.verification.findMany()
     * 
     * // Get first 10 Verifications
     * const verifications = await prisma.verification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const verificationWithIdOnly = await prisma.verification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VerificationFindManyArgs>(args?: SelectSubset<T, VerificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Verification.
     * @param {VerificationCreateArgs} args - Arguments to create a Verification.
     * @example
     * // Create one Verification
     * const Verification = await prisma.verification.create({
     *   data: {
     *     // ... data to create a Verification
     *   }
     * })
     * 
     */
    create<T extends VerificationCreateArgs>(args: SelectSubset<T, VerificationCreateArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Verifications.
     * @param {VerificationCreateManyArgs} args - Arguments to create many Verifications.
     * @example
     * // Create many Verifications
     * const verification = await prisma.verification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VerificationCreateManyArgs>(args?: SelectSubset<T, VerificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Verifications and returns the data saved in the database.
     * @param {VerificationCreateManyAndReturnArgs} args - Arguments to create many Verifications.
     * @example
     * // Create many Verifications
     * const verification = await prisma.verification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Verifications and only return the `id`
     * const verificationWithIdOnly = await prisma.verification.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VerificationCreateManyAndReturnArgs>(args?: SelectSubset<T, VerificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Verification.
     * @param {VerificationDeleteArgs} args - Arguments to delete one Verification.
     * @example
     * // Delete one Verification
     * const Verification = await prisma.verification.delete({
     *   where: {
     *     // ... filter to delete one Verification
     *   }
     * })
     * 
     */
    delete<T extends VerificationDeleteArgs>(args: SelectSubset<T, VerificationDeleteArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Verification.
     * @param {VerificationUpdateArgs} args - Arguments to update one Verification.
     * @example
     * // Update one Verification
     * const verification = await prisma.verification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VerificationUpdateArgs>(args: SelectSubset<T, VerificationUpdateArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Verifications.
     * @param {VerificationDeleteManyArgs} args - Arguments to filter Verifications to delete.
     * @example
     * // Delete a few Verifications
     * const { count } = await prisma.verification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VerificationDeleteManyArgs>(args?: SelectSubset<T, VerificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Verifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Verifications
     * const verification = await prisma.verification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VerificationUpdateManyArgs>(args: SelectSubset<T, VerificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Verifications and returns the data updated in the database.
     * @param {VerificationUpdateManyAndReturnArgs} args - Arguments to update many Verifications.
     * @example
     * // Update many Verifications
     * const verification = await prisma.verification.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Verifications and only return the `id`
     * const verificationWithIdOnly = await prisma.verification.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VerificationUpdateManyAndReturnArgs>(args: SelectSubset<T, VerificationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Verification.
     * @param {VerificationUpsertArgs} args - Arguments to update or create a Verification.
     * @example
     * // Update or create a Verification
     * const verification = await prisma.verification.upsert({
     *   create: {
     *     // ... data to create a Verification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Verification we want to update
     *   }
     * })
     */
    upsert<T extends VerificationUpsertArgs>(args: SelectSubset<T, VerificationUpsertArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Verifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationCountArgs} args - Arguments to filter Verifications to count.
     * @example
     * // Count the number of Verifications
     * const count = await prisma.verification.count({
     *   where: {
     *     // ... the filter for the Verifications we want to count
     *   }
     * })
    **/
    count<T extends VerificationCountArgs>(
      args?: Subset<T, VerificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Verification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VerificationAggregateArgs>(args: Subset<T, VerificationAggregateArgs>): Prisma.PrismaPromise<GetVerificationAggregateType<T>>

    /**
     * Group by Verification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VerificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerificationGroupByArgs['orderBy'] }
        : { orderBy?: VerificationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VerificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Verification model
   */
  readonly fields: VerificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Verification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VerificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Verification model
   */
  interface VerificationFieldRefs {
    readonly id: FieldRef<"Verification", 'String'>
    readonly identifier: FieldRef<"Verification", 'String'>
    readonly value: FieldRef<"Verification", 'String'>
    readonly expiresAt: FieldRef<"Verification", 'DateTime'>
    readonly createdAt: FieldRef<"Verification", 'DateTime'>
    readonly updatedAt: FieldRef<"Verification", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Verification findUnique
   */
  export type VerificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verification to fetch.
     */
    where: VerificationWhereUniqueInput
  }

  /**
   * Verification findUniqueOrThrow
   */
  export type VerificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verification to fetch.
     */
    where: VerificationWhereUniqueInput
  }

  /**
   * Verification findFirst
   */
  export type VerificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verification to fetch.
     */
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Verifications.
     */
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Verifications.
     */
    distinct?: VerificationScalarFieldEnum | VerificationScalarFieldEnum[]
  }

  /**
   * Verification findFirstOrThrow
   */
  export type VerificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verification to fetch.
     */
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Verifications.
     */
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Verifications.
     */
    distinct?: VerificationScalarFieldEnum | VerificationScalarFieldEnum[]
  }

  /**
   * Verification findMany
   */
  export type VerificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verifications to fetch.
     */
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Verifications.
     */
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    distinct?: VerificationScalarFieldEnum | VerificationScalarFieldEnum[]
  }

  /**
   * Verification create
   */
  export type VerificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The data needed to create a Verification.
     */
    data: XOR<VerificationCreateInput, VerificationUncheckedCreateInput>
  }

  /**
   * Verification createMany
   */
  export type VerificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Verifications.
     */
    data: VerificationCreateManyInput | VerificationCreateManyInput[]
  }

  /**
   * Verification createManyAndReturn
   */
  export type VerificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The data used to create many Verifications.
     */
    data: VerificationCreateManyInput | VerificationCreateManyInput[]
  }

  /**
   * Verification update
   */
  export type VerificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The data needed to update a Verification.
     */
    data: XOR<VerificationUpdateInput, VerificationUncheckedUpdateInput>
    /**
     * Choose, which Verification to update.
     */
    where: VerificationWhereUniqueInput
  }

  /**
   * Verification updateMany
   */
  export type VerificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Verifications.
     */
    data: XOR<VerificationUpdateManyMutationInput, VerificationUncheckedUpdateManyInput>
    /**
     * Filter which Verifications to update
     */
    where?: VerificationWhereInput
    /**
     * Limit how many Verifications to update.
     */
    limit?: number
  }

  /**
   * Verification updateManyAndReturn
   */
  export type VerificationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The data used to update Verifications.
     */
    data: XOR<VerificationUpdateManyMutationInput, VerificationUncheckedUpdateManyInput>
    /**
     * Filter which Verifications to update
     */
    where?: VerificationWhereInput
    /**
     * Limit how many Verifications to update.
     */
    limit?: number
  }

  /**
   * Verification upsert
   */
  export type VerificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The filter to search for the Verification to update in case it exists.
     */
    where: VerificationWhereUniqueInput
    /**
     * In case the Verification found by the `where` argument doesn't exist, create a new Verification with this data.
     */
    create: XOR<VerificationCreateInput, VerificationUncheckedCreateInput>
    /**
     * In case the Verification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VerificationUpdateInput, VerificationUncheckedUpdateInput>
  }

  /**
   * Verification delete
   */
  export type VerificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter which Verification to delete.
     */
    where: VerificationWhereUniqueInput
  }

  /**
   * Verification deleteMany
   */
  export type VerificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Verifications to delete
     */
    where?: VerificationWhereInput
    /**
     * Limit how many Verifications to delete.
     */
    limit?: number
  }

  /**
   * Verification without action
   */
  export type VerificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
  }


  /**
   * Model Deck
   */

  export type AggregateDeck = {
    _count: DeckCountAggregateOutputType | null
    _avg: DeckAvgAggregateOutputType | null
    _sum: DeckSumAggregateOutputType | null
    _min: DeckMinAggregateOutputType | null
    _max: DeckMaxAggregateOutputType | null
  }

  export type DeckAvgAggregateOutputType = {
    id: number | null
    priceCents: number | null
  }

  export type DeckSumAggregateOutputType = {
    id: number | null
    priceCents: number | null
  }

  export type DeckMinAggregateOutputType = {
    id: number | null
    userId: string | null
    title: string | null
    description: string | null
    coverUrl: string | null
    isPublic: boolean | null
    priceCents: number | null
    deletedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DeckMaxAggregateOutputType = {
    id: number | null
    userId: string | null
    title: string | null
    description: string | null
    coverUrl: string | null
    isPublic: boolean | null
    priceCents: number | null
    deletedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DeckCountAggregateOutputType = {
    id: number
    userId: number
    title: number
    description: number
    coverUrl: number
    isPublic: number
    priceCents: number
    deletedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DeckAvgAggregateInputType = {
    id?: true
    priceCents?: true
  }

  export type DeckSumAggregateInputType = {
    id?: true
    priceCents?: true
  }

  export type DeckMinAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    description?: true
    coverUrl?: true
    isPublic?: true
    priceCents?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DeckMaxAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    description?: true
    coverUrl?: true
    isPublic?: true
    priceCents?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DeckCountAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    description?: true
    coverUrl?: true
    isPublic?: true
    priceCents?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DeckAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Deck to aggregate.
     */
    where?: DeckWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Decks to fetch.
     */
    orderBy?: DeckOrderByWithRelationInput | DeckOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DeckWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Decks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Decks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Decks
    **/
    _count?: true | DeckCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DeckAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DeckSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DeckMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DeckMaxAggregateInputType
  }

  export type GetDeckAggregateType<T extends DeckAggregateArgs> = {
        [P in keyof T & keyof AggregateDeck]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDeck[P]>
      : GetScalarType<T[P], AggregateDeck[P]>
  }




  export type DeckGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeckWhereInput
    orderBy?: DeckOrderByWithAggregationInput | DeckOrderByWithAggregationInput[]
    by: DeckScalarFieldEnum[] | DeckScalarFieldEnum
    having?: DeckScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DeckCountAggregateInputType | true
    _avg?: DeckAvgAggregateInputType
    _sum?: DeckSumAggregateInputType
    _min?: DeckMinAggregateInputType
    _max?: DeckMaxAggregateInputType
  }

  export type DeckGroupByOutputType = {
    id: number
    userId: string
    title: string
    description: string | null
    coverUrl: string | null
    isPublic: boolean
    priceCents: number
    deletedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: DeckCountAggregateOutputType | null
    _avg: DeckAvgAggregateOutputType | null
    _sum: DeckSumAggregateOutputType | null
    _min: DeckMinAggregateOutputType | null
    _max: DeckMaxAggregateOutputType | null
  }

  type GetDeckGroupByPayload<T extends DeckGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DeckGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DeckGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DeckGroupByOutputType[P]>
            : GetScalarType<T[P], DeckGroupByOutputType[P]>
        }
      >
    >


  export type DeckSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    description?: boolean
    coverUrl?: boolean
    isPublic?: boolean
    priceCents?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    flashcards?: boolean | Deck$flashcardsArgs<ExtArgs>
    purchases?: boolean | Deck$purchasesArgs<ExtArgs>
    favorites?: boolean | Deck$favoritesArgs<ExtArgs>
    _count?: boolean | DeckCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["deck"]>

  export type DeckSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    description?: boolean
    coverUrl?: boolean
    isPublic?: boolean
    priceCents?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["deck"]>

  export type DeckSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    description?: boolean
    coverUrl?: boolean
    isPublic?: boolean
    priceCents?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["deck"]>

  export type DeckSelectScalar = {
    id?: boolean
    userId?: boolean
    title?: boolean
    description?: boolean
    coverUrl?: boolean
    isPublic?: boolean
    priceCents?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DeckOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "title" | "description" | "coverUrl" | "isPublic" | "priceCents" | "deletedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["deck"]>
  export type DeckInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    flashcards?: boolean | Deck$flashcardsArgs<ExtArgs>
    purchases?: boolean | Deck$purchasesArgs<ExtArgs>
    favorites?: boolean | Deck$favoritesArgs<ExtArgs>
    _count?: boolean | DeckCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DeckIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type DeckIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $DeckPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Deck"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      flashcards: Prisma.$FlashcardPayload<ExtArgs>[]
      purchases: Prisma.$PurchasePayload<ExtArgs>[]
      favorites: Prisma.$FavoritePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: string
      title: string
      description: string | null
      coverUrl: string | null
      isPublic: boolean
      priceCents: number
      deletedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["deck"]>
    composites: {}
  }

  type DeckGetPayload<S extends boolean | null | undefined | DeckDefaultArgs> = $Result.GetResult<Prisma.$DeckPayload, S>

  type DeckCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DeckFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DeckCountAggregateInputType | true
    }

  export interface DeckDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Deck'], meta: { name: 'Deck' } }
    /**
     * Find zero or one Deck that matches the filter.
     * @param {DeckFindUniqueArgs} args - Arguments to find a Deck
     * @example
     * // Get one Deck
     * const deck = await prisma.deck.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DeckFindUniqueArgs>(args: SelectSubset<T, DeckFindUniqueArgs<ExtArgs>>): Prisma__DeckClient<$Result.GetResult<Prisma.$DeckPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Deck that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DeckFindUniqueOrThrowArgs} args - Arguments to find a Deck
     * @example
     * // Get one Deck
     * const deck = await prisma.deck.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DeckFindUniqueOrThrowArgs>(args: SelectSubset<T, DeckFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DeckClient<$Result.GetResult<Prisma.$DeckPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Deck that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeckFindFirstArgs} args - Arguments to find a Deck
     * @example
     * // Get one Deck
     * const deck = await prisma.deck.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DeckFindFirstArgs>(args?: SelectSubset<T, DeckFindFirstArgs<ExtArgs>>): Prisma__DeckClient<$Result.GetResult<Prisma.$DeckPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Deck that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeckFindFirstOrThrowArgs} args - Arguments to find a Deck
     * @example
     * // Get one Deck
     * const deck = await prisma.deck.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DeckFindFirstOrThrowArgs>(args?: SelectSubset<T, DeckFindFirstOrThrowArgs<ExtArgs>>): Prisma__DeckClient<$Result.GetResult<Prisma.$DeckPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Decks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeckFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Decks
     * const decks = await prisma.deck.findMany()
     * 
     * // Get first 10 Decks
     * const decks = await prisma.deck.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const deckWithIdOnly = await prisma.deck.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DeckFindManyArgs>(args?: SelectSubset<T, DeckFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeckPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Deck.
     * @param {DeckCreateArgs} args - Arguments to create a Deck.
     * @example
     * // Create one Deck
     * const Deck = await prisma.deck.create({
     *   data: {
     *     // ... data to create a Deck
     *   }
     * })
     * 
     */
    create<T extends DeckCreateArgs>(args: SelectSubset<T, DeckCreateArgs<ExtArgs>>): Prisma__DeckClient<$Result.GetResult<Prisma.$DeckPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Decks.
     * @param {DeckCreateManyArgs} args - Arguments to create many Decks.
     * @example
     * // Create many Decks
     * const deck = await prisma.deck.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DeckCreateManyArgs>(args?: SelectSubset<T, DeckCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Decks and returns the data saved in the database.
     * @param {DeckCreateManyAndReturnArgs} args - Arguments to create many Decks.
     * @example
     * // Create many Decks
     * const deck = await prisma.deck.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Decks and only return the `id`
     * const deckWithIdOnly = await prisma.deck.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DeckCreateManyAndReturnArgs>(args?: SelectSubset<T, DeckCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeckPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Deck.
     * @param {DeckDeleteArgs} args - Arguments to delete one Deck.
     * @example
     * // Delete one Deck
     * const Deck = await prisma.deck.delete({
     *   where: {
     *     // ... filter to delete one Deck
     *   }
     * })
     * 
     */
    delete<T extends DeckDeleteArgs>(args: SelectSubset<T, DeckDeleteArgs<ExtArgs>>): Prisma__DeckClient<$Result.GetResult<Prisma.$DeckPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Deck.
     * @param {DeckUpdateArgs} args - Arguments to update one Deck.
     * @example
     * // Update one Deck
     * const deck = await prisma.deck.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DeckUpdateArgs>(args: SelectSubset<T, DeckUpdateArgs<ExtArgs>>): Prisma__DeckClient<$Result.GetResult<Prisma.$DeckPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Decks.
     * @param {DeckDeleteManyArgs} args - Arguments to filter Decks to delete.
     * @example
     * // Delete a few Decks
     * const { count } = await prisma.deck.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DeckDeleteManyArgs>(args?: SelectSubset<T, DeckDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Decks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeckUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Decks
     * const deck = await prisma.deck.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DeckUpdateManyArgs>(args: SelectSubset<T, DeckUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Decks and returns the data updated in the database.
     * @param {DeckUpdateManyAndReturnArgs} args - Arguments to update many Decks.
     * @example
     * // Update many Decks
     * const deck = await prisma.deck.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Decks and only return the `id`
     * const deckWithIdOnly = await prisma.deck.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DeckUpdateManyAndReturnArgs>(args: SelectSubset<T, DeckUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeckPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Deck.
     * @param {DeckUpsertArgs} args - Arguments to update or create a Deck.
     * @example
     * // Update or create a Deck
     * const deck = await prisma.deck.upsert({
     *   create: {
     *     // ... data to create a Deck
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Deck we want to update
     *   }
     * })
     */
    upsert<T extends DeckUpsertArgs>(args: SelectSubset<T, DeckUpsertArgs<ExtArgs>>): Prisma__DeckClient<$Result.GetResult<Prisma.$DeckPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Decks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeckCountArgs} args - Arguments to filter Decks to count.
     * @example
     * // Count the number of Decks
     * const count = await prisma.deck.count({
     *   where: {
     *     // ... the filter for the Decks we want to count
     *   }
     * })
    **/
    count<T extends DeckCountArgs>(
      args?: Subset<T, DeckCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DeckCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Deck.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeckAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DeckAggregateArgs>(args: Subset<T, DeckAggregateArgs>): Prisma.PrismaPromise<GetDeckAggregateType<T>>

    /**
     * Group by Deck.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeckGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DeckGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DeckGroupByArgs['orderBy'] }
        : { orderBy?: DeckGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DeckGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDeckGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Deck model
   */
  readonly fields: DeckFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Deck.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DeckClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    flashcards<T extends Deck$flashcardsArgs<ExtArgs> = {}>(args?: Subset<T, Deck$flashcardsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlashcardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    purchases<T extends Deck$purchasesArgs<ExtArgs> = {}>(args?: Subset<T, Deck$purchasesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    favorites<T extends Deck$favoritesArgs<ExtArgs> = {}>(args?: Subset<T, Deck$favoritesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Deck model
   */
  interface DeckFieldRefs {
    readonly id: FieldRef<"Deck", 'Int'>
    readonly userId: FieldRef<"Deck", 'String'>
    readonly title: FieldRef<"Deck", 'String'>
    readonly description: FieldRef<"Deck", 'String'>
    readonly coverUrl: FieldRef<"Deck", 'String'>
    readonly isPublic: FieldRef<"Deck", 'Boolean'>
    readonly priceCents: FieldRef<"Deck", 'Int'>
    readonly deletedAt: FieldRef<"Deck", 'DateTime'>
    readonly createdAt: FieldRef<"Deck", 'DateTime'>
    readonly updatedAt: FieldRef<"Deck", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Deck findUnique
   */
  export type DeckFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deck
     */
    select?: DeckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deck
     */
    omit?: DeckOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeckInclude<ExtArgs> | null
    /**
     * Filter, which Deck to fetch.
     */
    where: DeckWhereUniqueInput
  }

  /**
   * Deck findUniqueOrThrow
   */
  export type DeckFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deck
     */
    select?: DeckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deck
     */
    omit?: DeckOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeckInclude<ExtArgs> | null
    /**
     * Filter, which Deck to fetch.
     */
    where: DeckWhereUniqueInput
  }

  /**
   * Deck findFirst
   */
  export type DeckFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deck
     */
    select?: DeckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deck
     */
    omit?: DeckOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeckInclude<ExtArgs> | null
    /**
     * Filter, which Deck to fetch.
     */
    where?: DeckWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Decks to fetch.
     */
    orderBy?: DeckOrderByWithRelationInput | DeckOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Decks.
     */
    cursor?: DeckWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Decks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Decks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Decks.
     */
    distinct?: DeckScalarFieldEnum | DeckScalarFieldEnum[]
  }

  /**
   * Deck findFirstOrThrow
   */
  export type DeckFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deck
     */
    select?: DeckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deck
     */
    omit?: DeckOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeckInclude<ExtArgs> | null
    /**
     * Filter, which Deck to fetch.
     */
    where?: DeckWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Decks to fetch.
     */
    orderBy?: DeckOrderByWithRelationInput | DeckOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Decks.
     */
    cursor?: DeckWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Decks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Decks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Decks.
     */
    distinct?: DeckScalarFieldEnum | DeckScalarFieldEnum[]
  }

  /**
   * Deck findMany
   */
  export type DeckFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deck
     */
    select?: DeckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deck
     */
    omit?: DeckOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeckInclude<ExtArgs> | null
    /**
     * Filter, which Decks to fetch.
     */
    where?: DeckWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Decks to fetch.
     */
    orderBy?: DeckOrderByWithRelationInput | DeckOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Decks.
     */
    cursor?: DeckWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Decks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Decks.
     */
    skip?: number
    distinct?: DeckScalarFieldEnum | DeckScalarFieldEnum[]
  }

  /**
   * Deck create
   */
  export type DeckCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deck
     */
    select?: DeckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deck
     */
    omit?: DeckOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeckInclude<ExtArgs> | null
    /**
     * The data needed to create a Deck.
     */
    data: XOR<DeckCreateInput, DeckUncheckedCreateInput>
  }

  /**
   * Deck createMany
   */
  export type DeckCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Decks.
     */
    data: DeckCreateManyInput | DeckCreateManyInput[]
  }

  /**
   * Deck createManyAndReturn
   */
  export type DeckCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deck
     */
    select?: DeckSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Deck
     */
    omit?: DeckOmit<ExtArgs> | null
    /**
     * The data used to create many Decks.
     */
    data: DeckCreateManyInput | DeckCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeckIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Deck update
   */
  export type DeckUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deck
     */
    select?: DeckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deck
     */
    omit?: DeckOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeckInclude<ExtArgs> | null
    /**
     * The data needed to update a Deck.
     */
    data: XOR<DeckUpdateInput, DeckUncheckedUpdateInput>
    /**
     * Choose, which Deck to update.
     */
    where: DeckWhereUniqueInput
  }

  /**
   * Deck updateMany
   */
  export type DeckUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Decks.
     */
    data: XOR<DeckUpdateManyMutationInput, DeckUncheckedUpdateManyInput>
    /**
     * Filter which Decks to update
     */
    where?: DeckWhereInput
    /**
     * Limit how many Decks to update.
     */
    limit?: number
  }

  /**
   * Deck updateManyAndReturn
   */
  export type DeckUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deck
     */
    select?: DeckSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Deck
     */
    omit?: DeckOmit<ExtArgs> | null
    /**
     * The data used to update Decks.
     */
    data: XOR<DeckUpdateManyMutationInput, DeckUncheckedUpdateManyInput>
    /**
     * Filter which Decks to update
     */
    where?: DeckWhereInput
    /**
     * Limit how many Decks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeckIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Deck upsert
   */
  export type DeckUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deck
     */
    select?: DeckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deck
     */
    omit?: DeckOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeckInclude<ExtArgs> | null
    /**
     * The filter to search for the Deck to update in case it exists.
     */
    where: DeckWhereUniqueInput
    /**
     * In case the Deck found by the `where` argument doesn't exist, create a new Deck with this data.
     */
    create: XOR<DeckCreateInput, DeckUncheckedCreateInput>
    /**
     * In case the Deck was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DeckUpdateInput, DeckUncheckedUpdateInput>
  }

  /**
   * Deck delete
   */
  export type DeckDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deck
     */
    select?: DeckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deck
     */
    omit?: DeckOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeckInclude<ExtArgs> | null
    /**
     * Filter which Deck to delete.
     */
    where: DeckWhereUniqueInput
  }

  /**
   * Deck deleteMany
   */
  export type DeckDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Decks to delete
     */
    where?: DeckWhereInput
    /**
     * Limit how many Decks to delete.
     */
    limit?: number
  }

  /**
   * Deck.flashcards
   */
  export type Deck$flashcardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flashcard
     */
    select?: FlashcardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flashcard
     */
    omit?: FlashcardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlashcardInclude<ExtArgs> | null
    where?: FlashcardWhereInput
    orderBy?: FlashcardOrderByWithRelationInput | FlashcardOrderByWithRelationInput[]
    cursor?: FlashcardWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FlashcardScalarFieldEnum | FlashcardScalarFieldEnum[]
  }

  /**
   * Deck.purchases
   */
  export type Deck$purchasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    where?: PurchaseWhereInput
    orderBy?: PurchaseOrderByWithRelationInput | PurchaseOrderByWithRelationInput[]
    cursor?: PurchaseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PurchaseScalarFieldEnum | PurchaseScalarFieldEnum[]
  }

  /**
   * Deck.favorites
   */
  export type Deck$favoritesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    where?: FavoriteWhereInput
    orderBy?: FavoriteOrderByWithRelationInput | FavoriteOrderByWithRelationInput[]
    cursor?: FavoriteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FavoriteScalarFieldEnum | FavoriteScalarFieldEnum[]
  }

  /**
   * Deck without action
   */
  export type DeckDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deck
     */
    select?: DeckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deck
     */
    omit?: DeckOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeckInclude<ExtArgs> | null
  }


  /**
   * Model Flashcard
   */

  export type AggregateFlashcard = {
    _count: FlashcardCountAggregateOutputType | null
    _avg: FlashcardAvgAggregateOutputType | null
    _sum: FlashcardSumAggregateOutputType | null
    _min: FlashcardMinAggregateOutputType | null
    _max: FlashcardMaxAggregateOutputType | null
  }

  export type FlashcardAvgAggregateOutputType = {
    id: number | null
    deckId: number | null
    orderIndex: number | null
  }

  export type FlashcardSumAggregateOutputType = {
    id: number | null
    deckId: number | null
    orderIndex: number | null
  }

  export type FlashcardMinAggregateOutputType = {
    id: number | null
    deckId: number | null
    frontText: string | null
    backText: string | null
    orderIndex: number | null
    deletedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FlashcardMaxAggregateOutputType = {
    id: number | null
    deckId: number | null
    frontText: string | null
    backText: string | null
    orderIndex: number | null
    deletedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FlashcardCountAggregateOutputType = {
    id: number
    deckId: number
    frontText: number
    backText: number
    orderIndex: number
    deletedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FlashcardAvgAggregateInputType = {
    id?: true
    deckId?: true
    orderIndex?: true
  }

  export type FlashcardSumAggregateInputType = {
    id?: true
    deckId?: true
    orderIndex?: true
  }

  export type FlashcardMinAggregateInputType = {
    id?: true
    deckId?: true
    frontText?: true
    backText?: true
    orderIndex?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FlashcardMaxAggregateInputType = {
    id?: true
    deckId?: true
    frontText?: true
    backText?: true
    orderIndex?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FlashcardCountAggregateInputType = {
    id?: true
    deckId?: true
    frontText?: true
    backText?: true
    orderIndex?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FlashcardAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Flashcard to aggregate.
     */
    where?: FlashcardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Flashcards to fetch.
     */
    orderBy?: FlashcardOrderByWithRelationInput | FlashcardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FlashcardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Flashcards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Flashcards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Flashcards
    **/
    _count?: true | FlashcardCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FlashcardAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FlashcardSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FlashcardMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FlashcardMaxAggregateInputType
  }

  export type GetFlashcardAggregateType<T extends FlashcardAggregateArgs> = {
        [P in keyof T & keyof AggregateFlashcard]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFlashcard[P]>
      : GetScalarType<T[P], AggregateFlashcard[P]>
  }




  export type FlashcardGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FlashcardWhereInput
    orderBy?: FlashcardOrderByWithAggregationInput | FlashcardOrderByWithAggregationInput[]
    by: FlashcardScalarFieldEnum[] | FlashcardScalarFieldEnum
    having?: FlashcardScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FlashcardCountAggregateInputType | true
    _avg?: FlashcardAvgAggregateInputType
    _sum?: FlashcardSumAggregateInputType
    _min?: FlashcardMinAggregateInputType
    _max?: FlashcardMaxAggregateInputType
  }

  export type FlashcardGroupByOutputType = {
    id: number
    deckId: number
    frontText: string
    backText: string
    orderIndex: number
    deletedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: FlashcardCountAggregateOutputType | null
    _avg: FlashcardAvgAggregateOutputType | null
    _sum: FlashcardSumAggregateOutputType | null
    _min: FlashcardMinAggregateOutputType | null
    _max: FlashcardMaxAggregateOutputType | null
  }

  type GetFlashcardGroupByPayload<T extends FlashcardGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FlashcardGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FlashcardGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FlashcardGroupByOutputType[P]>
            : GetScalarType<T[P], FlashcardGroupByOutputType[P]>
        }
      >
    >


  export type FlashcardSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    deckId?: boolean
    frontText?: boolean
    backText?: boolean
    orderIndex?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deck?: boolean | DeckDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["flashcard"]>

  export type FlashcardSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    deckId?: boolean
    frontText?: boolean
    backText?: boolean
    orderIndex?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deck?: boolean | DeckDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["flashcard"]>

  export type FlashcardSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    deckId?: boolean
    frontText?: boolean
    backText?: boolean
    orderIndex?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deck?: boolean | DeckDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["flashcard"]>

  export type FlashcardSelectScalar = {
    id?: boolean
    deckId?: boolean
    frontText?: boolean
    backText?: boolean
    orderIndex?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FlashcardOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "deckId" | "frontText" | "backText" | "orderIndex" | "deletedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["flashcard"]>
  export type FlashcardInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    deck?: boolean | DeckDefaultArgs<ExtArgs>
  }
  export type FlashcardIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    deck?: boolean | DeckDefaultArgs<ExtArgs>
  }
  export type FlashcardIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    deck?: boolean | DeckDefaultArgs<ExtArgs>
  }

  export type $FlashcardPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Flashcard"
    objects: {
      deck: Prisma.$DeckPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      deckId: number
      frontText: string
      backText: string
      orderIndex: number
      deletedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["flashcard"]>
    composites: {}
  }

  type FlashcardGetPayload<S extends boolean | null | undefined | FlashcardDefaultArgs> = $Result.GetResult<Prisma.$FlashcardPayload, S>

  type FlashcardCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FlashcardFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FlashcardCountAggregateInputType | true
    }

  export interface FlashcardDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Flashcard'], meta: { name: 'Flashcard' } }
    /**
     * Find zero or one Flashcard that matches the filter.
     * @param {FlashcardFindUniqueArgs} args - Arguments to find a Flashcard
     * @example
     * // Get one Flashcard
     * const flashcard = await prisma.flashcard.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FlashcardFindUniqueArgs>(args: SelectSubset<T, FlashcardFindUniqueArgs<ExtArgs>>): Prisma__FlashcardClient<$Result.GetResult<Prisma.$FlashcardPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Flashcard that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FlashcardFindUniqueOrThrowArgs} args - Arguments to find a Flashcard
     * @example
     * // Get one Flashcard
     * const flashcard = await prisma.flashcard.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FlashcardFindUniqueOrThrowArgs>(args: SelectSubset<T, FlashcardFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FlashcardClient<$Result.GetResult<Prisma.$FlashcardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Flashcard that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlashcardFindFirstArgs} args - Arguments to find a Flashcard
     * @example
     * // Get one Flashcard
     * const flashcard = await prisma.flashcard.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FlashcardFindFirstArgs>(args?: SelectSubset<T, FlashcardFindFirstArgs<ExtArgs>>): Prisma__FlashcardClient<$Result.GetResult<Prisma.$FlashcardPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Flashcard that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlashcardFindFirstOrThrowArgs} args - Arguments to find a Flashcard
     * @example
     * // Get one Flashcard
     * const flashcard = await prisma.flashcard.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FlashcardFindFirstOrThrowArgs>(args?: SelectSubset<T, FlashcardFindFirstOrThrowArgs<ExtArgs>>): Prisma__FlashcardClient<$Result.GetResult<Prisma.$FlashcardPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Flashcards that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlashcardFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Flashcards
     * const flashcards = await prisma.flashcard.findMany()
     * 
     * // Get first 10 Flashcards
     * const flashcards = await prisma.flashcard.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const flashcardWithIdOnly = await prisma.flashcard.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FlashcardFindManyArgs>(args?: SelectSubset<T, FlashcardFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlashcardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Flashcard.
     * @param {FlashcardCreateArgs} args - Arguments to create a Flashcard.
     * @example
     * // Create one Flashcard
     * const Flashcard = await prisma.flashcard.create({
     *   data: {
     *     // ... data to create a Flashcard
     *   }
     * })
     * 
     */
    create<T extends FlashcardCreateArgs>(args: SelectSubset<T, FlashcardCreateArgs<ExtArgs>>): Prisma__FlashcardClient<$Result.GetResult<Prisma.$FlashcardPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Flashcards.
     * @param {FlashcardCreateManyArgs} args - Arguments to create many Flashcards.
     * @example
     * // Create many Flashcards
     * const flashcard = await prisma.flashcard.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FlashcardCreateManyArgs>(args?: SelectSubset<T, FlashcardCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Flashcards and returns the data saved in the database.
     * @param {FlashcardCreateManyAndReturnArgs} args - Arguments to create many Flashcards.
     * @example
     * // Create many Flashcards
     * const flashcard = await prisma.flashcard.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Flashcards and only return the `id`
     * const flashcardWithIdOnly = await prisma.flashcard.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FlashcardCreateManyAndReturnArgs>(args?: SelectSubset<T, FlashcardCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlashcardPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Flashcard.
     * @param {FlashcardDeleteArgs} args - Arguments to delete one Flashcard.
     * @example
     * // Delete one Flashcard
     * const Flashcard = await prisma.flashcard.delete({
     *   where: {
     *     // ... filter to delete one Flashcard
     *   }
     * })
     * 
     */
    delete<T extends FlashcardDeleteArgs>(args: SelectSubset<T, FlashcardDeleteArgs<ExtArgs>>): Prisma__FlashcardClient<$Result.GetResult<Prisma.$FlashcardPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Flashcard.
     * @param {FlashcardUpdateArgs} args - Arguments to update one Flashcard.
     * @example
     * // Update one Flashcard
     * const flashcard = await prisma.flashcard.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FlashcardUpdateArgs>(args: SelectSubset<T, FlashcardUpdateArgs<ExtArgs>>): Prisma__FlashcardClient<$Result.GetResult<Prisma.$FlashcardPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Flashcards.
     * @param {FlashcardDeleteManyArgs} args - Arguments to filter Flashcards to delete.
     * @example
     * // Delete a few Flashcards
     * const { count } = await prisma.flashcard.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FlashcardDeleteManyArgs>(args?: SelectSubset<T, FlashcardDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Flashcards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlashcardUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Flashcards
     * const flashcard = await prisma.flashcard.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FlashcardUpdateManyArgs>(args: SelectSubset<T, FlashcardUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Flashcards and returns the data updated in the database.
     * @param {FlashcardUpdateManyAndReturnArgs} args - Arguments to update many Flashcards.
     * @example
     * // Update many Flashcards
     * const flashcard = await prisma.flashcard.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Flashcards and only return the `id`
     * const flashcardWithIdOnly = await prisma.flashcard.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FlashcardUpdateManyAndReturnArgs>(args: SelectSubset<T, FlashcardUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlashcardPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Flashcard.
     * @param {FlashcardUpsertArgs} args - Arguments to update or create a Flashcard.
     * @example
     * // Update or create a Flashcard
     * const flashcard = await prisma.flashcard.upsert({
     *   create: {
     *     // ... data to create a Flashcard
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Flashcard we want to update
     *   }
     * })
     */
    upsert<T extends FlashcardUpsertArgs>(args: SelectSubset<T, FlashcardUpsertArgs<ExtArgs>>): Prisma__FlashcardClient<$Result.GetResult<Prisma.$FlashcardPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Flashcards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlashcardCountArgs} args - Arguments to filter Flashcards to count.
     * @example
     * // Count the number of Flashcards
     * const count = await prisma.flashcard.count({
     *   where: {
     *     // ... the filter for the Flashcards we want to count
     *   }
     * })
    **/
    count<T extends FlashcardCountArgs>(
      args?: Subset<T, FlashcardCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FlashcardCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Flashcard.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlashcardAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FlashcardAggregateArgs>(args: Subset<T, FlashcardAggregateArgs>): Prisma.PrismaPromise<GetFlashcardAggregateType<T>>

    /**
     * Group by Flashcard.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlashcardGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FlashcardGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FlashcardGroupByArgs['orderBy'] }
        : { orderBy?: FlashcardGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FlashcardGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFlashcardGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Flashcard model
   */
  readonly fields: FlashcardFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Flashcard.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FlashcardClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    deck<T extends DeckDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DeckDefaultArgs<ExtArgs>>): Prisma__DeckClient<$Result.GetResult<Prisma.$DeckPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Flashcard model
   */
  interface FlashcardFieldRefs {
    readonly id: FieldRef<"Flashcard", 'Int'>
    readonly deckId: FieldRef<"Flashcard", 'Int'>
    readonly frontText: FieldRef<"Flashcard", 'String'>
    readonly backText: FieldRef<"Flashcard", 'String'>
    readonly orderIndex: FieldRef<"Flashcard", 'Int'>
    readonly deletedAt: FieldRef<"Flashcard", 'DateTime'>
    readonly createdAt: FieldRef<"Flashcard", 'DateTime'>
    readonly updatedAt: FieldRef<"Flashcard", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Flashcard findUnique
   */
  export type FlashcardFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flashcard
     */
    select?: FlashcardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flashcard
     */
    omit?: FlashcardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlashcardInclude<ExtArgs> | null
    /**
     * Filter, which Flashcard to fetch.
     */
    where: FlashcardWhereUniqueInput
  }

  /**
   * Flashcard findUniqueOrThrow
   */
  export type FlashcardFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flashcard
     */
    select?: FlashcardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flashcard
     */
    omit?: FlashcardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlashcardInclude<ExtArgs> | null
    /**
     * Filter, which Flashcard to fetch.
     */
    where: FlashcardWhereUniqueInput
  }

  /**
   * Flashcard findFirst
   */
  export type FlashcardFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flashcard
     */
    select?: FlashcardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flashcard
     */
    omit?: FlashcardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlashcardInclude<ExtArgs> | null
    /**
     * Filter, which Flashcard to fetch.
     */
    where?: FlashcardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Flashcards to fetch.
     */
    orderBy?: FlashcardOrderByWithRelationInput | FlashcardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Flashcards.
     */
    cursor?: FlashcardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Flashcards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Flashcards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Flashcards.
     */
    distinct?: FlashcardScalarFieldEnum | FlashcardScalarFieldEnum[]
  }

  /**
   * Flashcard findFirstOrThrow
   */
  export type FlashcardFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flashcard
     */
    select?: FlashcardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flashcard
     */
    omit?: FlashcardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlashcardInclude<ExtArgs> | null
    /**
     * Filter, which Flashcard to fetch.
     */
    where?: FlashcardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Flashcards to fetch.
     */
    orderBy?: FlashcardOrderByWithRelationInput | FlashcardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Flashcards.
     */
    cursor?: FlashcardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Flashcards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Flashcards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Flashcards.
     */
    distinct?: FlashcardScalarFieldEnum | FlashcardScalarFieldEnum[]
  }

  /**
   * Flashcard findMany
   */
  export type FlashcardFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flashcard
     */
    select?: FlashcardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flashcard
     */
    omit?: FlashcardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlashcardInclude<ExtArgs> | null
    /**
     * Filter, which Flashcards to fetch.
     */
    where?: FlashcardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Flashcards to fetch.
     */
    orderBy?: FlashcardOrderByWithRelationInput | FlashcardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Flashcards.
     */
    cursor?: FlashcardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Flashcards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Flashcards.
     */
    skip?: number
    distinct?: FlashcardScalarFieldEnum | FlashcardScalarFieldEnum[]
  }

  /**
   * Flashcard create
   */
  export type FlashcardCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flashcard
     */
    select?: FlashcardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flashcard
     */
    omit?: FlashcardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlashcardInclude<ExtArgs> | null
    /**
     * The data needed to create a Flashcard.
     */
    data: XOR<FlashcardCreateInput, FlashcardUncheckedCreateInput>
  }

  /**
   * Flashcard createMany
   */
  export type FlashcardCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Flashcards.
     */
    data: FlashcardCreateManyInput | FlashcardCreateManyInput[]
  }

  /**
   * Flashcard createManyAndReturn
   */
  export type FlashcardCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flashcard
     */
    select?: FlashcardSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Flashcard
     */
    omit?: FlashcardOmit<ExtArgs> | null
    /**
     * The data used to create many Flashcards.
     */
    data: FlashcardCreateManyInput | FlashcardCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlashcardIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Flashcard update
   */
  export type FlashcardUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flashcard
     */
    select?: FlashcardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flashcard
     */
    omit?: FlashcardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlashcardInclude<ExtArgs> | null
    /**
     * The data needed to update a Flashcard.
     */
    data: XOR<FlashcardUpdateInput, FlashcardUncheckedUpdateInput>
    /**
     * Choose, which Flashcard to update.
     */
    where: FlashcardWhereUniqueInput
  }

  /**
   * Flashcard updateMany
   */
  export type FlashcardUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Flashcards.
     */
    data: XOR<FlashcardUpdateManyMutationInput, FlashcardUncheckedUpdateManyInput>
    /**
     * Filter which Flashcards to update
     */
    where?: FlashcardWhereInput
    /**
     * Limit how many Flashcards to update.
     */
    limit?: number
  }

  /**
   * Flashcard updateManyAndReturn
   */
  export type FlashcardUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flashcard
     */
    select?: FlashcardSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Flashcard
     */
    omit?: FlashcardOmit<ExtArgs> | null
    /**
     * The data used to update Flashcards.
     */
    data: XOR<FlashcardUpdateManyMutationInput, FlashcardUncheckedUpdateManyInput>
    /**
     * Filter which Flashcards to update
     */
    where?: FlashcardWhereInput
    /**
     * Limit how many Flashcards to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlashcardIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Flashcard upsert
   */
  export type FlashcardUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flashcard
     */
    select?: FlashcardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flashcard
     */
    omit?: FlashcardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlashcardInclude<ExtArgs> | null
    /**
     * The filter to search for the Flashcard to update in case it exists.
     */
    where: FlashcardWhereUniqueInput
    /**
     * In case the Flashcard found by the `where` argument doesn't exist, create a new Flashcard with this data.
     */
    create: XOR<FlashcardCreateInput, FlashcardUncheckedCreateInput>
    /**
     * In case the Flashcard was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FlashcardUpdateInput, FlashcardUncheckedUpdateInput>
  }

  /**
   * Flashcard delete
   */
  export type FlashcardDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flashcard
     */
    select?: FlashcardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flashcard
     */
    omit?: FlashcardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlashcardInclude<ExtArgs> | null
    /**
     * Filter which Flashcard to delete.
     */
    where: FlashcardWhereUniqueInput
  }

  /**
   * Flashcard deleteMany
   */
  export type FlashcardDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Flashcards to delete
     */
    where?: FlashcardWhereInput
    /**
     * Limit how many Flashcards to delete.
     */
    limit?: number
  }

  /**
   * Flashcard without action
   */
  export type FlashcardDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flashcard
     */
    select?: FlashcardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flashcard
     */
    omit?: FlashcardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlashcardInclude<ExtArgs> | null
  }


  /**
   * Model Purchase
   */

  export type AggregatePurchase = {
    _count: PurchaseCountAggregateOutputType | null
    _avg: PurchaseAvgAggregateOutputType | null
    _sum: PurchaseSumAggregateOutputType | null
    _min: PurchaseMinAggregateOutputType | null
    _max: PurchaseMaxAggregateOutputType | null
  }

  export type PurchaseAvgAggregateOutputType = {
    id: number | null
    deckId: number | null
    amountCents: number | null
  }

  export type PurchaseSumAggregateOutputType = {
    id: number | null
    deckId: number | null
    amountCents: number | null
  }

  export type PurchaseMinAggregateOutputType = {
    id: number | null
    userId: string | null
    deckId: number | null
    amountCents: number | null
    status: string | null
    paymentMethod: string | null
    asaasPaymentId: string | null
    asaasInvoiceId: string | null
    asaasPayload: string | null
    confirmedAt: Date | null
    createdAt: Date | null
  }

  export type PurchaseMaxAggregateOutputType = {
    id: number | null
    userId: string | null
    deckId: number | null
    amountCents: number | null
    status: string | null
    paymentMethod: string | null
    asaasPaymentId: string | null
    asaasInvoiceId: string | null
    asaasPayload: string | null
    confirmedAt: Date | null
    createdAt: Date | null
  }

  export type PurchaseCountAggregateOutputType = {
    id: number
    userId: number
    deckId: number
    amountCents: number
    status: number
    paymentMethod: number
    asaasPaymentId: number
    asaasInvoiceId: number
    asaasPayload: number
    confirmedAt: number
    createdAt: number
    _all: number
  }


  export type PurchaseAvgAggregateInputType = {
    id?: true
    deckId?: true
    amountCents?: true
  }

  export type PurchaseSumAggregateInputType = {
    id?: true
    deckId?: true
    amountCents?: true
  }

  export type PurchaseMinAggregateInputType = {
    id?: true
    userId?: true
    deckId?: true
    amountCents?: true
    status?: true
    paymentMethod?: true
    asaasPaymentId?: true
    asaasInvoiceId?: true
    asaasPayload?: true
    confirmedAt?: true
    createdAt?: true
  }

  export type PurchaseMaxAggregateInputType = {
    id?: true
    userId?: true
    deckId?: true
    amountCents?: true
    status?: true
    paymentMethod?: true
    asaasPaymentId?: true
    asaasInvoiceId?: true
    asaasPayload?: true
    confirmedAt?: true
    createdAt?: true
  }

  export type PurchaseCountAggregateInputType = {
    id?: true
    userId?: true
    deckId?: true
    amountCents?: true
    status?: true
    paymentMethod?: true
    asaasPaymentId?: true
    asaasInvoiceId?: true
    asaasPayload?: true
    confirmedAt?: true
    createdAt?: true
    _all?: true
  }

  export type PurchaseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Purchase to aggregate.
     */
    where?: PurchaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Purchases to fetch.
     */
    orderBy?: PurchaseOrderByWithRelationInput | PurchaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PurchaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Purchases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Purchases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Purchases
    **/
    _count?: true | PurchaseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PurchaseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PurchaseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PurchaseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PurchaseMaxAggregateInputType
  }

  export type GetPurchaseAggregateType<T extends PurchaseAggregateArgs> = {
        [P in keyof T & keyof AggregatePurchase]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePurchase[P]>
      : GetScalarType<T[P], AggregatePurchase[P]>
  }




  export type PurchaseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PurchaseWhereInput
    orderBy?: PurchaseOrderByWithAggregationInput | PurchaseOrderByWithAggregationInput[]
    by: PurchaseScalarFieldEnum[] | PurchaseScalarFieldEnum
    having?: PurchaseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PurchaseCountAggregateInputType | true
    _avg?: PurchaseAvgAggregateInputType
    _sum?: PurchaseSumAggregateInputType
    _min?: PurchaseMinAggregateInputType
    _max?: PurchaseMaxAggregateInputType
  }

  export type PurchaseGroupByOutputType = {
    id: number
    userId: string
    deckId: number
    amountCents: number
    status: string
    paymentMethod: string | null
    asaasPaymentId: string | null
    asaasInvoiceId: string | null
    asaasPayload: string | null
    confirmedAt: Date | null
    createdAt: Date
    _count: PurchaseCountAggregateOutputType | null
    _avg: PurchaseAvgAggregateOutputType | null
    _sum: PurchaseSumAggregateOutputType | null
    _min: PurchaseMinAggregateOutputType | null
    _max: PurchaseMaxAggregateOutputType | null
  }

  type GetPurchaseGroupByPayload<T extends PurchaseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PurchaseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PurchaseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PurchaseGroupByOutputType[P]>
            : GetScalarType<T[P], PurchaseGroupByOutputType[P]>
        }
      >
    >


  export type PurchaseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    deckId?: boolean
    amountCents?: boolean
    status?: boolean
    paymentMethod?: boolean
    asaasPaymentId?: boolean
    asaasInvoiceId?: boolean
    asaasPayload?: boolean
    confirmedAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    deck?: boolean | DeckDefaultArgs<ExtArgs>
    asaasPayment?: boolean | Purchase$asaasPaymentArgs<ExtArgs>
  }, ExtArgs["result"]["purchase"]>

  export type PurchaseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    deckId?: boolean
    amountCents?: boolean
    status?: boolean
    paymentMethod?: boolean
    asaasPaymentId?: boolean
    asaasInvoiceId?: boolean
    asaasPayload?: boolean
    confirmedAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    deck?: boolean | DeckDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["purchase"]>

  export type PurchaseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    deckId?: boolean
    amountCents?: boolean
    status?: boolean
    paymentMethod?: boolean
    asaasPaymentId?: boolean
    asaasInvoiceId?: boolean
    asaasPayload?: boolean
    confirmedAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    deck?: boolean | DeckDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["purchase"]>

  export type PurchaseSelectScalar = {
    id?: boolean
    userId?: boolean
    deckId?: boolean
    amountCents?: boolean
    status?: boolean
    paymentMethod?: boolean
    asaasPaymentId?: boolean
    asaasInvoiceId?: boolean
    asaasPayload?: boolean
    confirmedAt?: boolean
    createdAt?: boolean
  }

  export type PurchaseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "deckId" | "amountCents" | "status" | "paymentMethod" | "asaasPaymentId" | "asaasInvoiceId" | "asaasPayload" | "confirmedAt" | "createdAt", ExtArgs["result"]["purchase"]>
  export type PurchaseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    deck?: boolean | DeckDefaultArgs<ExtArgs>
    asaasPayment?: boolean | Purchase$asaasPaymentArgs<ExtArgs>
  }
  export type PurchaseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    deck?: boolean | DeckDefaultArgs<ExtArgs>
  }
  export type PurchaseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    deck?: boolean | DeckDefaultArgs<ExtArgs>
  }

  export type $PurchasePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Purchase"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      deck: Prisma.$DeckPayload<ExtArgs>
      asaasPayment: Prisma.$AsaasPaymentPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: string
      deckId: number
      amountCents: number
      status: string
      paymentMethod: string | null
      asaasPaymentId: string | null
      asaasInvoiceId: string | null
      asaasPayload: string | null
      confirmedAt: Date | null
      createdAt: Date
    }, ExtArgs["result"]["purchase"]>
    composites: {}
  }

  type PurchaseGetPayload<S extends boolean | null | undefined | PurchaseDefaultArgs> = $Result.GetResult<Prisma.$PurchasePayload, S>

  type PurchaseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PurchaseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PurchaseCountAggregateInputType | true
    }

  export interface PurchaseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Purchase'], meta: { name: 'Purchase' } }
    /**
     * Find zero or one Purchase that matches the filter.
     * @param {PurchaseFindUniqueArgs} args - Arguments to find a Purchase
     * @example
     * // Get one Purchase
     * const purchase = await prisma.purchase.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PurchaseFindUniqueArgs>(args: SelectSubset<T, PurchaseFindUniqueArgs<ExtArgs>>): Prisma__PurchaseClient<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Purchase that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PurchaseFindUniqueOrThrowArgs} args - Arguments to find a Purchase
     * @example
     * // Get one Purchase
     * const purchase = await prisma.purchase.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PurchaseFindUniqueOrThrowArgs>(args: SelectSubset<T, PurchaseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PurchaseClient<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Purchase that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseFindFirstArgs} args - Arguments to find a Purchase
     * @example
     * // Get one Purchase
     * const purchase = await prisma.purchase.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PurchaseFindFirstArgs>(args?: SelectSubset<T, PurchaseFindFirstArgs<ExtArgs>>): Prisma__PurchaseClient<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Purchase that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseFindFirstOrThrowArgs} args - Arguments to find a Purchase
     * @example
     * // Get one Purchase
     * const purchase = await prisma.purchase.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PurchaseFindFirstOrThrowArgs>(args?: SelectSubset<T, PurchaseFindFirstOrThrowArgs<ExtArgs>>): Prisma__PurchaseClient<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Purchases that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Purchases
     * const purchases = await prisma.purchase.findMany()
     * 
     * // Get first 10 Purchases
     * const purchases = await prisma.purchase.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const purchaseWithIdOnly = await prisma.purchase.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PurchaseFindManyArgs>(args?: SelectSubset<T, PurchaseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Purchase.
     * @param {PurchaseCreateArgs} args - Arguments to create a Purchase.
     * @example
     * // Create one Purchase
     * const Purchase = await prisma.purchase.create({
     *   data: {
     *     // ... data to create a Purchase
     *   }
     * })
     * 
     */
    create<T extends PurchaseCreateArgs>(args: SelectSubset<T, PurchaseCreateArgs<ExtArgs>>): Prisma__PurchaseClient<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Purchases.
     * @param {PurchaseCreateManyArgs} args - Arguments to create many Purchases.
     * @example
     * // Create many Purchases
     * const purchase = await prisma.purchase.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PurchaseCreateManyArgs>(args?: SelectSubset<T, PurchaseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Purchases and returns the data saved in the database.
     * @param {PurchaseCreateManyAndReturnArgs} args - Arguments to create many Purchases.
     * @example
     * // Create many Purchases
     * const purchase = await prisma.purchase.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Purchases and only return the `id`
     * const purchaseWithIdOnly = await prisma.purchase.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PurchaseCreateManyAndReturnArgs>(args?: SelectSubset<T, PurchaseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Purchase.
     * @param {PurchaseDeleteArgs} args - Arguments to delete one Purchase.
     * @example
     * // Delete one Purchase
     * const Purchase = await prisma.purchase.delete({
     *   where: {
     *     // ... filter to delete one Purchase
     *   }
     * })
     * 
     */
    delete<T extends PurchaseDeleteArgs>(args: SelectSubset<T, PurchaseDeleteArgs<ExtArgs>>): Prisma__PurchaseClient<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Purchase.
     * @param {PurchaseUpdateArgs} args - Arguments to update one Purchase.
     * @example
     * // Update one Purchase
     * const purchase = await prisma.purchase.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PurchaseUpdateArgs>(args: SelectSubset<T, PurchaseUpdateArgs<ExtArgs>>): Prisma__PurchaseClient<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Purchases.
     * @param {PurchaseDeleteManyArgs} args - Arguments to filter Purchases to delete.
     * @example
     * // Delete a few Purchases
     * const { count } = await prisma.purchase.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PurchaseDeleteManyArgs>(args?: SelectSubset<T, PurchaseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Purchases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Purchases
     * const purchase = await prisma.purchase.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PurchaseUpdateManyArgs>(args: SelectSubset<T, PurchaseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Purchases and returns the data updated in the database.
     * @param {PurchaseUpdateManyAndReturnArgs} args - Arguments to update many Purchases.
     * @example
     * // Update many Purchases
     * const purchase = await prisma.purchase.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Purchases and only return the `id`
     * const purchaseWithIdOnly = await prisma.purchase.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PurchaseUpdateManyAndReturnArgs>(args: SelectSubset<T, PurchaseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Purchase.
     * @param {PurchaseUpsertArgs} args - Arguments to update or create a Purchase.
     * @example
     * // Update or create a Purchase
     * const purchase = await prisma.purchase.upsert({
     *   create: {
     *     // ... data to create a Purchase
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Purchase we want to update
     *   }
     * })
     */
    upsert<T extends PurchaseUpsertArgs>(args: SelectSubset<T, PurchaseUpsertArgs<ExtArgs>>): Prisma__PurchaseClient<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Purchases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseCountArgs} args - Arguments to filter Purchases to count.
     * @example
     * // Count the number of Purchases
     * const count = await prisma.purchase.count({
     *   where: {
     *     // ... the filter for the Purchases we want to count
     *   }
     * })
    **/
    count<T extends PurchaseCountArgs>(
      args?: Subset<T, PurchaseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PurchaseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Purchase.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PurchaseAggregateArgs>(args: Subset<T, PurchaseAggregateArgs>): Prisma.PrismaPromise<GetPurchaseAggregateType<T>>

    /**
     * Group by Purchase.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PurchaseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PurchaseGroupByArgs['orderBy'] }
        : { orderBy?: PurchaseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PurchaseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPurchaseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Purchase model
   */
  readonly fields: PurchaseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Purchase.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PurchaseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    deck<T extends DeckDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DeckDefaultArgs<ExtArgs>>): Prisma__DeckClient<$Result.GetResult<Prisma.$DeckPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    asaasPayment<T extends Purchase$asaasPaymentArgs<ExtArgs> = {}>(args?: Subset<T, Purchase$asaasPaymentArgs<ExtArgs>>): Prisma__AsaasPaymentClient<$Result.GetResult<Prisma.$AsaasPaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Purchase model
   */
  interface PurchaseFieldRefs {
    readonly id: FieldRef<"Purchase", 'Int'>
    readonly userId: FieldRef<"Purchase", 'String'>
    readonly deckId: FieldRef<"Purchase", 'Int'>
    readonly amountCents: FieldRef<"Purchase", 'Int'>
    readonly status: FieldRef<"Purchase", 'String'>
    readonly paymentMethod: FieldRef<"Purchase", 'String'>
    readonly asaasPaymentId: FieldRef<"Purchase", 'String'>
    readonly asaasInvoiceId: FieldRef<"Purchase", 'String'>
    readonly asaasPayload: FieldRef<"Purchase", 'String'>
    readonly confirmedAt: FieldRef<"Purchase", 'DateTime'>
    readonly createdAt: FieldRef<"Purchase", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Purchase findUnique
   */
  export type PurchaseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    /**
     * Filter, which Purchase to fetch.
     */
    where: PurchaseWhereUniqueInput
  }

  /**
   * Purchase findUniqueOrThrow
   */
  export type PurchaseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    /**
     * Filter, which Purchase to fetch.
     */
    where: PurchaseWhereUniqueInput
  }

  /**
   * Purchase findFirst
   */
  export type PurchaseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    /**
     * Filter, which Purchase to fetch.
     */
    where?: PurchaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Purchases to fetch.
     */
    orderBy?: PurchaseOrderByWithRelationInput | PurchaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Purchases.
     */
    cursor?: PurchaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Purchases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Purchases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Purchases.
     */
    distinct?: PurchaseScalarFieldEnum | PurchaseScalarFieldEnum[]
  }

  /**
   * Purchase findFirstOrThrow
   */
  export type PurchaseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    /**
     * Filter, which Purchase to fetch.
     */
    where?: PurchaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Purchases to fetch.
     */
    orderBy?: PurchaseOrderByWithRelationInput | PurchaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Purchases.
     */
    cursor?: PurchaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Purchases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Purchases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Purchases.
     */
    distinct?: PurchaseScalarFieldEnum | PurchaseScalarFieldEnum[]
  }

  /**
   * Purchase findMany
   */
  export type PurchaseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    /**
     * Filter, which Purchases to fetch.
     */
    where?: PurchaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Purchases to fetch.
     */
    orderBy?: PurchaseOrderByWithRelationInput | PurchaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Purchases.
     */
    cursor?: PurchaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Purchases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Purchases.
     */
    skip?: number
    distinct?: PurchaseScalarFieldEnum | PurchaseScalarFieldEnum[]
  }

  /**
   * Purchase create
   */
  export type PurchaseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    /**
     * The data needed to create a Purchase.
     */
    data: XOR<PurchaseCreateInput, PurchaseUncheckedCreateInput>
  }

  /**
   * Purchase createMany
   */
  export type PurchaseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Purchases.
     */
    data: PurchaseCreateManyInput | PurchaseCreateManyInput[]
  }

  /**
   * Purchase createManyAndReturn
   */
  export type PurchaseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * The data used to create many Purchases.
     */
    data: PurchaseCreateManyInput | PurchaseCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Purchase update
   */
  export type PurchaseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    /**
     * The data needed to update a Purchase.
     */
    data: XOR<PurchaseUpdateInput, PurchaseUncheckedUpdateInput>
    /**
     * Choose, which Purchase to update.
     */
    where: PurchaseWhereUniqueInput
  }

  /**
   * Purchase updateMany
   */
  export type PurchaseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Purchases.
     */
    data: XOR<PurchaseUpdateManyMutationInput, PurchaseUncheckedUpdateManyInput>
    /**
     * Filter which Purchases to update
     */
    where?: PurchaseWhereInput
    /**
     * Limit how many Purchases to update.
     */
    limit?: number
  }

  /**
   * Purchase updateManyAndReturn
   */
  export type PurchaseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * The data used to update Purchases.
     */
    data: XOR<PurchaseUpdateManyMutationInput, PurchaseUncheckedUpdateManyInput>
    /**
     * Filter which Purchases to update
     */
    where?: PurchaseWhereInput
    /**
     * Limit how many Purchases to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Purchase upsert
   */
  export type PurchaseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    /**
     * The filter to search for the Purchase to update in case it exists.
     */
    where: PurchaseWhereUniqueInput
    /**
     * In case the Purchase found by the `where` argument doesn't exist, create a new Purchase with this data.
     */
    create: XOR<PurchaseCreateInput, PurchaseUncheckedCreateInput>
    /**
     * In case the Purchase was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PurchaseUpdateInput, PurchaseUncheckedUpdateInput>
  }

  /**
   * Purchase delete
   */
  export type PurchaseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    /**
     * Filter which Purchase to delete.
     */
    where: PurchaseWhereUniqueInput
  }

  /**
   * Purchase deleteMany
   */
  export type PurchaseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Purchases to delete
     */
    where?: PurchaseWhereInput
    /**
     * Limit how many Purchases to delete.
     */
    limit?: number
  }

  /**
   * Purchase.asaasPayment
   */
  export type Purchase$asaasPaymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AsaasPayment
     */
    select?: AsaasPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AsaasPayment
     */
    omit?: AsaasPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsaasPaymentInclude<ExtArgs> | null
    where?: AsaasPaymentWhereInput
  }

  /**
   * Purchase without action
   */
  export type PurchaseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
  }


  /**
   * Model Subscription
   */

  export type AggregateSubscription = {
    _count: SubscriptionCountAggregateOutputType | null
    _avg: SubscriptionAvgAggregateOutputType | null
    _sum: SubscriptionSumAggregateOutputType | null
    _min: SubscriptionMinAggregateOutputType | null
    _max: SubscriptionMaxAggregateOutputType | null
  }

  export type SubscriptionAvgAggregateOutputType = {
    id: number | null
    priceCents: number | null
  }

  export type SubscriptionSumAggregateOutputType = {
    id: number | null
    priceCents: number | null
  }

  export type SubscriptionMinAggregateOutputType = {
    id: number | null
    userId: string | null
    status: string | null
    planName: string | null
    priceCents: number | null
    asaasSubscriptionId: string | null
    nextDueDate: Date | null
    lastPaymentDate: Date | null
    currentPeriodEnd: Date | null
    createdAt: Date | null
  }

  export type SubscriptionMaxAggregateOutputType = {
    id: number | null
    userId: string | null
    status: string | null
    planName: string | null
    priceCents: number | null
    asaasSubscriptionId: string | null
    nextDueDate: Date | null
    lastPaymentDate: Date | null
    currentPeriodEnd: Date | null
    createdAt: Date | null
  }

  export type SubscriptionCountAggregateOutputType = {
    id: number
    userId: number
    status: number
    planName: number
    priceCents: number
    asaasSubscriptionId: number
    nextDueDate: number
    lastPaymentDate: number
    currentPeriodEnd: number
    createdAt: number
    _all: number
  }


  export type SubscriptionAvgAggregateInputType = {
    id?: true
    priceCents?: true
  }

  export type SubscriptionSumAggregateInputType = {
    id?: true
    priceCents?: true
  }

  export type SubscriptionMinAggregateInputType = {
    id?: true
    userId?: true
    status?: true
    planName?: true
    priceCents?: true
    asaasSubscriptionId?: true
    nextDueDate?: true
    lastPaymentDate?: true
    currentPeriodEnd?: true
    createdAt?: true
  }

  export type SubscriptionMaxAggregateInputType = {
    id?: true
    userId?: true
    status?: true
    planName?: true
    priceCents?: true
    asaasSubscriptionId?: true
    nextDueDate?: true
    lastPaymentDate?: true
    currentPeriodEnd?: true
    createdAt?: true
  }

  export type SubscriptionCountAggregateInputType = {
    id?: true
    userId?: true
    status?: true
    planName?: true
    priceCents?: true
    asaasSubscriptionId?: true
    nextDueDate?: true
    lastPaymentDate?: true
    currentPeriodEnd?: true
    createdAt?: true
    _all?: true
  }

  export type SubscriptionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subscription to aggregate.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Subscriptions
    **/
    _count?: true | SubscriptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SubscriptionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SubscriptionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubscriptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubscriptionMaxAggregateInputType
  }

  export type GetSubscriptionAggregateType<T extends SubscriptionAggregateArgs> = {
        [P in keyof T & keyof AggregateSubscription]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubscription[P]>
      : GetScalarType<T[P], AggregateSubscription[P]>
  }




  export type SubscriptionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubscriptionWhereInput
    orderBy?: SubscriptionOrderByWithAggregationInput | SubscriptionOrderByWithAggregationInput[]
    by: SubscriptionScalarFieldEnum[] | SubscriptionScalarFieldEnum
    having?: SubscriptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubscriptionCountAggregateInputType | true
    _avg?: SubscriptionAvgAggregateInputType
    _sum?: SubscriptionSumAggregateInputType
    _min?: SubscriptionMinAggregateInputType
    _max?: SubscriptionMaxAggregateInputType
  }

  export type SubscriptionGroupByOutputType = {
    id: number
    userId: string
    status: string
    planName: string
    priceCents: number
    asaasSubscriptionId: string
    nextDueDate: Date | null
    lastPaymentDate: Date | null
    currentPeriodEnd: Date | null
    createdAt: Date
    _count: SubscriptionCountAggregateOutputType | null
    _avg: SubscriptionAvgAggregateOutputType | null
    _sum: SubscriptionSumAggregateOutputType | null
    _min: SubscriptionMinAggregateOutputType | null
    _max: SubscriptionMaxAggregateOutputType | null
  }

  type GetSubscriptionGroupByPayload<T extends SubscriptionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubscriptionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubscriptionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubscriptionGroupByOutputType[P]>
            : GetScalarType<T[P], SubscriptionGroupByOutputType[P]>
        }
      >
    >


  export type SubscriptionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    status?: boolean
    planName?: boolean
    priceCents?: boolean
    asaasSubscriptionId?: boolean
    nextDueDate?: boolean
    lastPaymentDate?: boolean
    currentPeriodEnd?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    asaasSubscription?: boolean | Subscription$asaasSubscriptionArgs<ExtArgs>
  }, ExtArgs["result"]["subscription"]>

  export type SubscriptionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    status?: boolean
    planName?: boolean
    priceCents?: boolean
    asaasSubscriptionId?: boolean
    nextDueDate?: boolean
    lastPaymentDate?: boolean
    currentPeriodEnd?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subscription"]>

  export type SubscriptionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    status?: boolean
    planName?: boolean
    priceCents?: boolean
    asaasSubscriptionId?: boolean
    nextDueDate?: boolean
    lastPaymentDate?: boolean
    currentPeriodEnd?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subscription"]>

  export type SubscriptionSelectScalar = {
    id?: boolean
    userId?: boolean
    status?: boolean
    planName?: boolean
    priceCents?: boolean
    asaasSubscriptionId?: boolean
    nextDueDate?: boolean
    lastPaymentDate?: boolean
    currentPeriodEnd?: boolean
    createdAt?: boolean
  }

  export type SubscriptionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "status" | "planName" | "priceCents" | "asaasSubscriptionId" | "nextDueDate" | "lastPaymentDate" | "currentPeriodEnd" | "createdAt", ExtArgs["result"]["subscription"]>
  export type SubscriptionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    asaasSubscription?: boolean | Subscription$asaasSubscriptionArgs<ExtArgs>
  }
  export type SubscriptionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SubscriptionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SubscriptionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Subscription"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      asaasSubscription: Prisma.$AsaasSubscriptionPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: string
      status: string
      planName: string
      priceCents: number
      asaasSubscriptionId: string
      nextDueDate: Date | null
      lastPaymentDate: Date | null
      currentPeriodEnd: Date | null
      createdAt: Date
    }, ExtArgs["result"]["subscription"]>
    composites: {}
  }

  type SubscriptionGetPayload<S extends boolean | null | undefined | SubscriptionDefaultArgs> = $Result.GetResult<Prisma.$SubscriptionPayload, S>

  type SubscriptionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubscriptionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubscriptionCountAggregateInputType | true
    }

  export interface SubscriptionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Subscription'], meta: { name: 'Subscription' } }
    /**
     * Find zero or one Subscription that matches the filter.
     * @param {SubscriptionFindUniqueArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubscriptionFindUniqueArgs>(args: SelectSubset<T, SubscriptionFindUniqueArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Subscription that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubscriptionFindUniqueOrThrowArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubscriptionFindUniqueOrThrowArgs>(args: SelectSubset<T, SubscriptionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subscription that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionFindFirstArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubscriptionFindFirstArgs>(args?: SelectSubset<T, SubscriptionFindFirstArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subscription that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionFindFirstOrThrowArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubscriptionFindFirstOrThrowArgs>(args?: SelectSubset<T, SubscriptionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Subscriptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Subscriptions
     * const subscriptions = await prisma.subscription.findMany()
     * 
     * // Get first 10 Subscriptions
     * const subscriptions = await prisma.subscription.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subscriptionWithIdOnly = await prisma.subscription.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubscriptionFindManyArgs>(args?: SelectSubset<T, SubscriptionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Subscription.
     * @param {SubscriptionCreateArgs} args - Arguments to create a Subscription.
     * @example
     * // Create one Subscription
     * const Subscription = await prisma.subscription.create({
     *   data: {
     *     // ... data to create a Subscription
     *   }
     * })
     * 
     */
    create<T extends SubscriptionCreateArgs>(args: SelectSubset<T, SubscriptionCreateArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Subscriptions.
     * @param {SubscriptionCreateManyArgs} args - Arguments to create many Subscriptions.
     * @example
     * // Create many Subscriptions
     * const subscription = await prisma.subscription.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubscriptionCreateManyArgs>(args?: SelectSubset<T, SubscriptionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Subscriptions and returns the data saved in the database.
     * @param {SubscriptionCreateManyAndReturnArgs} args - Arguments to create many Subscriptions.
     * @example
     * // Create many Subscriptions
     * const subscription = await prisma.subscription.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Subscriptions and only return the `id`
     * const subscriptionWithIdOnly = await prisma.subscription.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SubscriptionCreateManyAndReturnArgs>(args?: SelectSubset<T, SubscriptionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Subscription.
     * @param {SubscriptionDeleteArgs} args - Arguments to delete one Subscription.
     * @example
     * // Delete one Subscription
     * const Subscription = await prisma.subscription.delete({
     *   where: {
     *     // ... filter to delete one Subscription
     *   }
     * })
     * 
     */
    delete<T extends SubscriptionDeleteArgs>(args: SelectSubset<T, SubscriptionDeleteArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Subscription.
     * @param {SubscriptionUpdateArgs} args - Arguments to update one Subscription.
     * @example
     * // Update one Subscription
     * const subscription = await prisma.subscription.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubscriptionUpdateArgs>(args: SelectSubset<T, SubscriptionUpdateArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Subscriptions.
     * @param {SubscriptionDeleteManyArgs} args - Arguments to filter Subscriptions to delete.
     * @example
     * // Delete a few Subscriptions
     * const { count } = await prisma.subscription.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubscriptionDeleteManyArgs>(args?: SelectSubset<T, SubscriptionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Subscriptions
     * const subscription = await prisma.subscription.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubscriptionUpdateManyArgs>(args: SelectSubset<T, SubscriptionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subscriptions and returns the data updated in the database.
     * @param {SubscriptionUpdateManyAndReturnArgs} args - Arguments to update many Subscriptions.
     * @example
     * // Update many Subscriptions
     * const subscription = await prisma.subscription.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Subscriptions and only return the `id`
     * const subscriptionWithIdOnly = await prisma.subscription.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SubscriptionUpdateManyAndReturnArgs>(args: SelectSubset<T, SubscriptionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Subscription.
     * @param {SubscriptionUpsertArgs} args - Arguments to update or create a Subscription.
     * @example
     * // Update or create a Subscription
     * const subscription = await prisma.subscription.upsert({
     *   create: {
     *     // ... data to create a Subscription
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Subscription we want to update
     *   }
     * })
     */
    upsert<T extends SubscriptionUpsertArgs>(args: SelectSubset<T, SubscriptionUpsertArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Subscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionCountArgs} args - Arguments to filter Subscriptions to count.
     * @example
     * // Count the number of Subscriptions
     * const count = await prisma.subscription.count({
     *   where: {
     *     // ... the filter for the Subscriptions we want to count
     *   }
     * })
    **/
    count<T extends SubscriptionCountArgs>(
      args?: Subset<T, SubscriptionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubscriptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Subscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SubscriptionAggregateArgs>(args: Subset<T, SubscriptionAggregateArgs>): Prisma.PrismaPromise<GetSubscriptionAggregateType<T>>

    /**
     * Group by Subscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SubscriptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubscriptionGroupByArgs['orderBy'] }
        : { orderBy?: SubscriptionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SubscriptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubscriptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Subscription model
   */
  readonly fields: SubscriptionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Subscription.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubscriptionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    asaasSubscription<T extends Subscription$asaasSubscriptionArgs<ExtArgs> = {}>(args?: Subset<T, Subscription$asaasSubscriptionArgs<ExtArgs>>): Prisma__AsaasSubscriptionClient<$Result.GetResult<Prisma.$AsaasSubscriptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Subscription model
   */
  interface SubscriptionFieldRefs {
    readonly id: FieldRef<"Subscription", 'Int'>
    readonly userId: FieldRef<"Subscription", 'String'>
    readonly status: FieldRef<"Subscription", 'String'>
    readonly planName: FieldRef<"Subscription", 'String'>
    readonly priceCents: FieldRef<"Subscription", 'Int'>
    readonly asaasSubscriptionId: FieldRef<"Subscription", 'String'>
    readonly nextDueDate: FieldRef<"Subscription", 'DateTime'>
    readonly lastPaymentDate: FieldRef<"Subscription", 'DateTime'>
    readonly currentPeriodEnd: FieldRef<"Subscription", 'DateTime'>
    readonly createdAt: FieldRef<"Subscription", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Subscription findUnique
   */
  export type SubscriptionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription findUniqueOrThrow
   */
  export type SubscriptionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription findFirst
   */
  export type SubscriptionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subscriptions.
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subscriptions.
     */
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * Subscription findFirstOrThrow
   */
  export type SubscriptionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subscriptions.
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subscriptions.
     */
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * Subscription findMany
   */
  export type SubscriptionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscriptions to fetch.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Subscriptions.
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * Subscription create
   */
  export type SubscriptionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * The data needed to create a Subscription.
     */
    data: XOR<SubscriptionCreateInput, SubscriptionUncheckedCreateInput>
  }

  /**
   * Subscription createMany
   */
  export type SubscriptionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Subscriptions.
     */
    data: SubscriptionCreateManyInput | SubscriptionCreateManyInput[]
  }

  /**
   * Subscription createManyAndReturn
   */
  export type SubscriptionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * The data used to create many Subscriptions.
     */
    data: SubscriptionCreateManyInput | SubscriptionCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Subscription update
   */
  export type SubscriptionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * The data needed to update a Subscription.
     */
    data: XOR<SubscriptionUpdateInput, SubscriptionUncheckedUpdateInput>
    /**
     * Choose, which Subscription to update.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription updateMany
   */
  export type SubscriptionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Subscriptions.
     */
    data: XOR<SubscriptionUpdateManyMutationInput, SubscriptionUncheckedUpdateManyInput>
    /**
     * Filter which Subscriptions to update
     */
    where?: SubscriptionWhereInput
    /**
     * Limit how many Subscriptions to update.
     */
    limit?: number
  }

  /**
   * Subscription updateManyAndReturn
   */
  export type SubscriptionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * The data used to update Subscriptions.
     */
    data: XOR<SubscriptionUpdateManyMutationInput, SubscriptionUncheckedUpdateManyInput>
    /**
     * Filter which Subscriptions to update
     */
    where?: SubscriptionWhereInput
    /**
     * Limit how many Subscriptions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Subscription upsert
   */
  export type SubscriptionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * The filter to search for the Subscription to update in case it exists.
     */
    where: SubscriptionWhereUniqueInput
    /**
     * In case the Subscription found by the `where` argument doesn't exist, create a new Subscription with this data.
     */
    create: XOR<SubscriptionCreateInput, SubscriptionUncheckedCreateInput>
    /**
     * In case the Subscription was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubscriptionUpdateInput, SubscriptionUncheckedUpdateInput>
  }

  /**
   * Subscription delete
   */
  export type SubscriptionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter which Subscription to delete.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription deleteMany
   */
  export type SubscriptionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subscriptions to delete
     */
    where?: SubscriptionWhereInput
    /**
     * Limit how many Subscriptions to delete.
     */
    limit?: number
  }

  /**
   * Subscription.asaasSubscription
   */
  export type Subscription$asaasSubscriptionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AsaasSubscription
     */
    select?: AsaasSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AsaasSubscription
     */
    omit?: AsaasSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsaasSubscriptionInclude<ExtArgs> | null
    where?: AsaasSubscriptionWhereInput
  }

  /**
   * Subscription without action
   */
  export type SubscriptionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
  }


  /**
   * Model Favorite
   */

  export type AggregateFavorite = {
    _count: FavoriteCountAggregateOutputType | null
    _avg: FavoriteAvgAggregateOutputType | null
    _sum: FavoriteSumAggregateOutputType | null
    _min: FavoriteMinAggregateOutputType | null
    _max: FavoriteMaxAggregateOutputType | null
  }

  export type FavoriteAvgAggregateOutputType = {
    id: number | null
    deckId: number | null
  }

  export type FavoriteSumAggregateOutputType = {
    id: number | null
    deckId: number | null
  }

  export type FavoriteMinAggregateOutputType = {
    id: number | null
    userId: string | null
    deckId: number | null
    createdAt: Date | null
  }

  export type FavoriteMaxAggregateOutputType = {
    id: number | null
    userId: string | null
    deckId: number | null
    createdAt: Date | null
  }

  export type FavoriteCountAggregateOutputType = {
    id: number
    userId: number
    deckId: number
    createdAt: number
    _all: number
  }


  export type FavoriteAvgAggregateInputType = {
    id?: true
    deckId?: true
  }

  export type FavoriteSumAggregateInputType = {
    id?: true
    deckId?: true
  }

  export type FavoriteMinAggregateInputType = {
    id?: true
    userId?: true
    deckId?: true
    createdAt?: true
  }

  export type FavoriteMaxAggregateInputType = {
    id?: true
    userId?: true
    deckId?: true
    createdAt?: true
  }

  export type FavoriteCountAggregateInputType = {
    id?: true
    userId?: true
    deckId?: true
    createdAt?: true
    _all?: true
  }

  export type FavoriteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Favorite to aggregate.
     */
    where?: FavoriteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Favorites to fetch.
     */
    orderBy?: FavoriteOrderByWithRelationInput | FavoriteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FavoriteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Favorites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Favorites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Favorites
    **/
    _count?: true | FavoriteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FavoriteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FavoriteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FavoriteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FavoriteMaxAggregateInputType
  }

  export type GetFavoriteAggregateType<T extends FavoriteAggregateArgs> = {
        [P in keyof T & keyof AggregateFavorite]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFavorite[P]>
      : GetScalarType<T[P], AggregateFavorite[P]>
  }




  export type FavoriteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FavoriteWhereInput
    orderBy?: FavoriteOrderByWithAggregationInput | FavoriteOrderByWithAggregationInput[]
    by: FavoriteScalarFieldEnum[] | FavoriteScalarFieldEnum
    having?: FavoriteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FavoriteCountAggregateInputType | true
    _avg?: FavoriteAvgAggregateInputType
    _sum?: FavoriteSumAggregateInputType
    _min?: FavoriteMinAggregateInputType
    _max?: FavoriteMaxAggregateInputType
  }

  export type FavoriteGroupByOutputType = {
    id: number
    userId: string
    deckId: number
    createdAt: Date
    _count: FavoriteCountAggregateOutputType | null
    _avg: FavoriteAvgAggregateOutputType | null
    _sum: FavoriteSumAggregateOutputType | null
    _min: FavoriteMinAggregateOutputType | null
    _max: FavoriteMaxAggregateOutputType | null
  }

  type GetFavoriteGroupByPayload<T extends FavoriteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FavoriteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FavoriteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FavoriteGroupByOutputType[P]>
            : GetScalarType<T[P], FavoriteGroupByOutputType[P]>
        }
      >
    >


  export type FavoriteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    deckId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    deck?: boolean | DeckDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["favorite"]>

  export type FavoriteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    deckId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    deck?: boolean | DeckDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["favorite"]>

  export type FavoriteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    deckId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    deck?: boolean | DeckDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["favorite"]>

  export type FavoriteSelectScalar = {
    id?: boolean
    userId?: boolean
    deckId?: boolean
    createdAt?: boolean
  }

  export type FavoriteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "deckId" | "createdAt", ExtArgs["result"]["favorite"]>
  export type FavoriteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    deck?: boolean | DeckDefaultArgs<ExtArgs>
  }
  export type FavoriteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    deck?: boolean | DeckDefaultArgs<ExtArgs>
  }
  export type FavoriteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    deck?: boolean | DeckDefaultArgs<ExtArgs>
  }

  export type $FavoritePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Favorite"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      deck: Prisma.$DeckPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: string
      deckId: number
      createdAt: Date
    }, ExtArgs["result"]["favorite"]>
    composites: {}
  }

  type FavoriteGetPayload<S extends boolean | null | undefined | FavoriteDefaultArgs> = $Result.GetResult<Prisma.$FavoritePayload, S>

  type FavoriteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FavoriteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FavoriteCountAggregateInputType | true
    }

  export interface FavoriteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Favorite'], meta: { name: 'Favorite' } }
    /**
     * Find zero or one Favorite that matches the filter.
     * @param {FavoriteFindUniqueArgs} args - Arguments to find a Favorite
     * @example
     * // Get one Favorite
     * const favorite = await prisma.favorite.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FavoriteFindUniqueArgs>(args: SelectSubset<T, FavoriteFindUniqueArgs<ExtArgs>>): Prisma__FavoriteClient<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Favorite that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FavoriteFindUniqueOrThrowArgs} args - Arguments to find a Favorite
     * @example
     * // Get one Favorite
     * const favorite = await prisma.favorite.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FavoriteFindUniqueOrThrowArgs>(args: SelectSubset<T, FavoriteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FavoriteClient<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Favorite that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteFindFirstArgs} args - Arguments to find a Favorite
     * @example
     * // Get one Favorite
     * const favorite = await prisma.favorite.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FavoriteFindFirstArgs>(args?: SelectSubset<T, FavoriteFindFirstArgs<ExtArgs>>): Prisma__FavoriteClient<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Favorite that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteFindFirstOrThrowArgs} args - Arguments to find a Favorite
     * @example
     * // Get one Favorite
     * const favorite = await prisma.favorite.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FavoriteFindFirstOrThrowArgs>(args?: SelectSubset<T, FavoriteFindFirstOrThrowArgs<ExtArgs>>): Prisma__FavoriteClient<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Favorites that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Favorites
     * const favorites = await prisma.favorite.findMany()
     * 
     * // Get first 10 Favorites
     * const favorites = await prisma.favorite.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const favoriteWithIdOnly = await prisma.favorite.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FavoriteFindManyArgs>(args?: SelectSubset<T, FavoriteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Favorite.
     * @param {FavoriteCreateArgs} args - Arguments to create a Favorite.
     * @example
     * // Create one Favorite
     * const Favorite = await prisma.favorite.create({
     *   data: {
     *     // ... data to create a Favorite
     *   }
     * })
     * 
     */
    create<T extends FavoriteCreateArgs>(args: SelectSubset<T, FavoriteCreateArgs<ExtArgs>>): Prisma__FavoriteClient<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Favorites.
     * @param {FavoriteCreateManyArgs} args - Arguments to create many Favorites.
     * @example
     * // Create many Favorites
     * const favorite = await prisma.favorite.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FavoriteCreateManyArgs>(args?: SelectSubset<T, FavoriteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Favorites and returns the data saved in the database.
     * @param {FavoriteCreateManyAndReturnArgs} args - Arguments to create many Favorites.
     * @example
     * // Create many Favorites
     * const favorite = await prisma.favorite.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Favorites and only return the `id`
     * const favoriteWithIdOnly = await prisma.favorite.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FavoriteCreateManyAndReturnArgs>(args?: SelectSubset<T, FavoriteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Favorite.
     * @param {FavoriteDeleteArgs} args - Arguments to delete one Favorite.
     * @example
     * // Delete one Favorite
     * const Favorite = await prisma.favorite.delete({
     *   where: {
     *     // ... filter to delete one Favorite
     *   }
     * })
     * 
     */
    delete<T extends FavoriteDeleteArgs>(args: SelectSubset<T, FavoriteDeleteArgs<ExtArgs>>): Prisma__FavoriteClient<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Favorite.
     * @param {FavoriteUpdateArgs} args - Arguments to update one Favorite.
     * @example
     * // Update one Favorite
     * const favorite = await prisma.favorite.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FavoriteUpdateArgs>(args: SelectSubset<T, FavoriteUpdateArgs<ExtArgs>>): Prisma__FavoriteClient<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Favorites.
     * @param {FavoriteDeleteManyArgs} args - Arguments to filter Favorites to delete.
     * @example
     * // Delete a few Favorites
     * const { count } = await prisma.favorite.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FavoriteDeleteManyArgs>(args?: SelectSubset<T, FavoriteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Favorites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Favorites
     * const favorite = await prisma.favorite.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FavoriteUpdateManyArgs>(args: SelectSubset<T, FavoriteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Favorites and returns the data updated in the database.
     * @param {FavoriteUpdateManyAndReturnArgs} args - Arguments to update many Favorites.
     * @example
     * // Update many Favorites
     * const favorite = await prisma.favorite.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Favorites and only return the `id`
     * const favoriteWithIdOnly = await prisma.favorite.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FavoriteUpdateManyAndReturnArgs>(args: SelectSubset<T, FavoriteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Favorite.
     * @param {FavoriteUpsertArgs} args - Arguments to update or create a Favorite.
     * @example
     * // Update or create a Favorite
     * const favorite = await prisma.favorite.upsert({
     *   create: {
     *     // ... data to create a Favorite
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Favorite we want to update
     *   }
     * })
     */
    upsert<T extends FavoriteUpsertArgs>(args: SelectSubset<T, FavoriteUpsertArgs<ExtArgs>>): Prisma__FavoriteClient<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Favorites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteCountArgs} args - Arguments to filter Favorites to count.
     * @example
     * // Count the number of Favorites
     * const count = await prisma.favorite.count({
     *   where: {
     *     // ... the filter for the Favorites we want to count
     *   }
     * })
    **/
    count<T extends FavoriteCountArgs>(
      args?: Subset<T, FavoriteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FavoriteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Favorite.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FavoriteAggregateArgs>(args: Subset<T, FavoriteAggregateArgs>): Prisma.PrismaPromise<GetFavoriteAggregateType<T>>

    /**
     * Group by Favorite.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FavoriteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FavoriteGroupByArgs['orderBy'] }
        : { orderBy?: FavoriteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FavoriteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFavoriteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Favorite model
   */
  readonly fields: FavoriteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Favorite.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FavoriteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    deck<T extends DeckDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DeckDefaultArgs<ExtArgs>>): Prisma__DeckClient<$Result.GetResult<Prisma.$DeckPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Favorite model
   */
  interface FavoriteFieldRefs {
    readonly id: FieldRef<"Favorite", 'Int'>
    readonly userId: FieldRef<"Favorite", 'String'>
    readonly deckId: FieldRef<"Favorite", 'Int'>
    readonly createdAt: FieldRef<"Favorite", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Favorite findUnique
   */
  export type FavoriteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * Filter, which Favorite to fetch.
     */
    where: FavoriteWhereUniqueInput
  }

  /**
   * Favorite findUniqueOrThrow
   */
  export type FavoriteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * Filter, which Favorite to fetch.
     */
    where: FavoriteWhereUniqueInput
  }

  /**
   * Favorite findFirst
   */
  export type FavoriteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * Filter, which Favorite to fetch.
     */
    where?: FavoriteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Favorites to fetch.
     */
    orderBy?: FavoriteOrderByWithRelationInput | FavoriteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Favorites.
     */
    cursor?: FavoriteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Favorites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Favorites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Favorites.
     */
    distinct?: FavoriteScalarFieldEnum | FavoriteScalarFieldEnum[]
  }

  /**
   * Favorite findFirstOrThrow
   */
  export type FavoriteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * Filter, which Favorite to fetch.
     */
    where?: FavoriteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Favorites to fetch.
     */
    orderBy?: FavoriteOrderByWithRelationInput | FavoriteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Favorites.
     */
    cursor?: FavoriteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Favorites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Favorites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Favorites.
     */
    distinct?: FavoriteScalarFieldEnum | FavoriteScalarFieldEnum[]
  }

  /**
   * Favorite findMany
   */
  export type FavoriteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * Filter, which Favorites to fetch.
     */
    where?: FavoriteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Favorites to fetch.
     */
    orderBy?: FavoriteOrderByWithRelationInput | FavoriteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Favorites.
     */
    cursor?: FavoriteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Favorites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Favorites.
     */
    skip?: number
    distinct?: FavoriteScalarFieldEnum | FavoriteScalarFieldEnum[]
  }

  /**
   * Favorite create
   */
  export type FavoriteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * The data needed to create a Favorite.
     */
    data: XOR<FavoriteCreateInput, FavoriteUncheckedCreateInput>
  }

  /**
   * Favorite createMany
   */
  export type FavoriteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Favorites.
     */
    data: FavoriteCreateManyInput | FavoriteCreateManyInput[]
  }

  /**
   * Favorite createManyAndReturn
   */
  export type FavoriteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * The data used to create many Favorites.
     */
    data: FavoriteCreateManyInput | FavoriteCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Favorite update
   */
  export type FavoriteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * The data needed to update a Favorite.
     */
    data: XOR<FavoriteUpdateInput, FavoriteUncheckedUpdateInput>
    /**
     * Choose, which Favorite to update.
     */
    where: FavoriteWhereUniqueInput
  }

  /**
   * Favorite updateMany
   */
  export type FavoriteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Favorites.
     */
    data: XOR<FavoriteUpdateManyMutationInput, FavoriteUncheckedUpdateManyInput>
    /**
     * Filter which Favorites to update
     */
    where?: FavoriteWhereInput
    /**
     * Limit how many Favorites to update.
     */
    limit?: number
  }

  /**
   * Favorite updateManyAndReturn
   */
  export type FavoriteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * The data used to update Favorites.
     */
    data: XOR<FavoriteUpdateManyMutationInput, FavoriteUncheckedUpdateManyInput>
    /**
     * Filter which Favorites to update
     */
    where?: FavoriteWhereInput
    /**
     * Limit how many Favorites to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Favorite upsert
   */
  export type FavoriteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * The filter to search for the Favorite to update in case it exists.
     */
    where: FavoriteWhereUniqueInput
    /**
     * In case the Favorite found by the `where` argument doesn't exist, create a new Favorite with this data.
     */
    create: XOR<FavoriteCreateInput, FavoriteUncheckedCreateInput>
    /**
     * In case the Favorite was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FavoriteUpdateInput, FavoriteUncheckedUpdateInput>
  }

  /**
   * Favorite delete
   */
  export type FavoriteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * Filter which Favorite to delete.
     */
    where: FavoriteWhereUniqueInput
  }

  /**
   * Favorite deleteMany
   */
  export type FavoriteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Favorites to delete
     */
    where?: FavoriteWhereInput
    /**
     * Limit how many Favorites to delete.
     */
    limit?: number
  }

  /**
   * Favorite without action
   */
  export type FavoriteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
  }


  /**
   * Model AsaasCustomer
   */

  export type AggregateAsaasCustomer = {
    _count: AsaasCustomerCountAggregateOutputType | null
    _min: AsaasCustomerMinAggregateOutputType | null
    _max: AsaasCustomerMaxAggregateOutputType | null
  }

  export type AsaasCustomerMinAggregateOutputType = {
    id: string | null
    userId: string | null
    asaasId: string | null
    name: string | null
    cpfCnpj: string | null
    email: string | null
    phone: string | null
    mobilePhone: string | null
    postalCode: string | null
    address: string | null
    addressNumber: string | null
    complement: string | null
    province: string | null
    externalReference: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AsaasCustomerMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    asaasId: string | null
    name: string | null
    cpfCnpj: string | null
    email: string | null
    phone: string | null
    mobilePhone: string | null
    postalCode: string | null
    address: string | null
    addressNumber: string | null
    complement: string | null
    province: string | null
    externalReference: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AsaasCustomerCountAggregateOutputType = {
    id: number
    userId: number
    asaasId: number
    name: number
    cpfCnpj: number
    email: number
    phone: number
    mobilePhone: number
    postalCode: number
    address: number
    addressNumber: number
    complement: number
    province: number
    externalReference: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AsaasCustomerMinAggregateInputType = {
    id?: true
    userId?: true
    asaasId?: true
    name?: true
    cpfCnpj?: true
    email?: true
    phone?: true
    mobilePhone?: true
    postalCode?: true
    address?: true
    addressNumber?: true
    complement?: true
    province?: true
    externalReference?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AsaasCustomerMaxAggregateInputType = {
    id?: true
    userId?: true
    asaasId?: true
    name?: true
    cpfCnpj?: true
    email?: true
    phone?: true
    mobilePhone?: true
    postalCode?: true
    address?: true
    addressNumber?: true
    complement?: true
    province?: true
    externalReference?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AsaasCustomerCountAggregateInputType = {
    id?: true
    userId?: true
    asaasId?: true
    name?: true
    cpfCnpj?: true
    email?: true
    phone?: true
    mobilePhone?: true
    postalCode?: true
    address?: true
    addressNumber?: true
    complement?: true
    province?: true
    externalReference?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AsaasCustomerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AsaasCustomer to aggregate.
     */
    where?: AsaasCustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AsaasCustomers to fetch.
     */
    orderBy?: AsaasCustomerOrderByWithRelationInput | AsaasCustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AsaasCustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AsaasCustomers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AsaasCustomers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AsaasCustomers
    **/
    _count?: true | AsaasCustomerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AsaasCustomerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AsaasCustomerMaxAggregateInputType
  }

  export type GetAsaasCustomerAggregateType<T extends AsaasCustomerAggregateArgs> = {
        [P in keyof T & keyof AggregateAsaasCustomer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAsaasCustomer[P]>
      : GetScalarType<T[P], AggregateAsaasCustomer[P]>
  }




  export type AsaasCustomerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AsaasCustomerWhereInput
    orderBy?: AsaasCustomerOrderByWithAggregationInput | AsaasCustomerOrderByWithAggregationInput[]
    by: AsaasCustomerScalarFieldEnum[] | AsaasCustomerScalarFieldEnum
    having?: AsaasCustomerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AsaasCustomerCountAggregateInputType | true
    _min?: AsaasCustomerMinAggregateInputType
    _max?: AsaasCustomerMaxAggregateInputType
  }

  export type AsaasCustomerGroupByOutputType = {
    id: string
    userId: string
    asaasId: string
    name: string
    cpfCnpj: string | null
    email: string
    phone: string | null
    mobilePhone: string | null
    postalCode: string | null
    address: string | null
    addressNumber: string | null
    complement: string | null
    province: string | null
    externalReference: string | null
    createdAt: Date
    updatedAt: Date
    _count: AsaasCustomerCountAggregateOutputType | null
    _min: AsaasCustomerMinAggregateOutputType | null
    _max: AsaasCustomerMaxAggregateOutputType | null
  }

  type GetAsaasCustomerGroupByPayload<T extends AsaasCustomerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AsaasCustomerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AsaasCustomerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AsaasCustomerGroupByOutputType[P]>
            : GetScalarType<T[P], AsaasCustomerGroupByOutputType[P]>
        }
      >
    >


  export type AsaasCustomerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    asaasId?: boolean
    name?: boolean
    cpfCnpj?: boolean
    email?: boolean
    phone?: boolean
    mobilePhone?: boolean
    postalCode?: boolean
    address?: boolean
    addressNumber?: boolean
    complement?: boolean
    province?: boolean
    externalReference?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    payments?: boolean | AsaasCustomer$paymentsArgs<ExtArgs>
    subscriptions?: boolean | AsaasCustomer$subscriptionsArgs<ExtArgs>
    _count?: boolean | AsaasCustomerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["asaasCustomer"]>

  export type AsaasCustomerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    asaasId?: boolean
    name?: boolean
    cpfCnpj?: boolean
    email?: boolean
    phone?: boolean
    mobilePhone?: boolean
    postalCode?: boolean
    address?: boolean
    addressNumber?: boolean
    complement?: boolean
    province?: boolean
    externalReference?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["asaasCustomer"]>

  export type AsaasCustomerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    asaasId?: boolean
    name?: boolean
    cpfCnpj?: boolean
    email?: boolean
    phone?: boolean
    mobilePhone?: boolean
    postalCode?: boolean
    address?: boolean
    addressNumber?: boolean
    complement?: boolean
    province?: boolean
    externalReference?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["asaasCustomer"]>

  export type AsaasCustomerSelectScalar = {
    id?: boolean
    userId?: boolean
    asaasId?: boolean
    name?: boolean
    cpfCnpj?: boolean
    email?: boolean
    phone?: boolean
    mobilePhone?: boolean
    postalCode?: boolean
    address?: boolean
    addressNumber?: boolean
    complement?: boolean
    province?: boolean
    externalReference?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AsaasCustomerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "asaasId" | "name" | "cpfCnpj" | "email" | "phone" | "mobilePhone" | "postalCode" | "address" | "addressNumber" | "complement" | "province" | "externalReference" | "createdAt" | "updatedAt", ExtArgs["result"]["asaasCustomer"]>
  export type AsaasCustomerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    payments?: boolean | AsaasCustomer$paymentsArgs<ExtArgs>
    subscriptions?: boolean | AsaasCustomer$subscriptionsArgs<ExtArgs>
    _count?: boolean | AsaasCustomerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AsaasCustomerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AsaasCustomerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AsaasCustomerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AsaasCustomer"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      payments: Prisma.$AsaasPaymentPayload<ExtArgs>[]
      subscriptions: Prisma.$AsaasSubscriptionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      asaasId: string
      name: string
      cpfCnpj: string | null
      email: string
      phone: string | null
      mobilePhone: string | null
      postalCode: string | null
      address: string | null
      addressNumber: string | null
      complement: string | null
      province: string | null
      externalReference: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["asaasCustomer"]>
    composites: {}
  }

  type AsaasCustomerGetPayload<S extends boolean | null | undefined | AsaasCustomerDefaultArgs> = $Result.GetResult<Prisma.$AsaasCustomerPayload, S>

  type AsaasCustomerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AsaasCustomerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AsaasCustomerCountAggregateInputType | true
    }

  export interface AsaasCustomerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AsaasCustomer'], meta: { name: 'AsaasCustomer' } }
    /**
     * Find zero or one AsaasCustomer that matches the filter.
     * @param {AsaasCustomerFindUniqueArgs} args - Arguments to find a AsaasCustomer
     * @example
     * // Get one AsaasCustomer
     * const asaasCustomer = await prisma.asaasCustomer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AsaasCustomerFindUniqueArgs>(args: SelectSubset<T, AsaasCustomerFindUniqueArgs<ExtArgs>>): Prisma__AsaasCustomerClient<$Result.GetResult<Prisma.$AsaasCustomerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AsaasCustomer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AsaasCustomerFindUniqueOrThrowArgs} args - Arguments to find a AsaasCustomer
     * @example
     * // Get one AsaasCustomer
     * const asaasCustomer = await prisma.asaasCustomer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AsaasCustomerFindUniqueOrThrowArgs>(args: SelectSubset<T, AsaasCustomerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AsaasCustomerClient<$Result.GetResult<Prisma.$AsaasCustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AsaasCustomer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AsaasCustomerFindFirstArgs} args - Arguments to find a AsaasCustomer
     * @example
     * // Get one AsaasCustomer
     * const asaasCustomer = await prisma.asaasCustomer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AsaasCustomerFindFirstArgs>(args?: SelectSubset<T, AsaasCustomerFindFirstArgs<ExtArgs>>): Prisma__AsaasCustomerClient<$Result.GetResult<Prisma.$AsaasCustomerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AsaasCustomer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AsaasCustomerFindFirstOrThrowArgs} args - Arguments to find a AsaasCustomer
     * @example
     * // Get one AsaasCustomer
     * const asaasCustomer = await prisma.asaasCustomer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AsaasCustomerFindFirstOrThrowArgs>(args?: SelectSubset<T, AsaasCustomerFindFirstOrThrowArgs<ExtArgs>>): Prisma__AsaasCustomerClient<$Result.GetResult<Prisma.$AsaasCustomerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AsaasCustomers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AsaasCustomerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AsaasCustomers
     * const asaasCustomers = await prisma.asaasCustomer.findMany()
     * 
     * // Get first 10 AsaasCustomers
     * const asaasCustomers = await prisma.asaasCustomer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const asaasCustomerWithIdOnly = await prisma.asaasCustomer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AsaasCustomerFindManyArgs>(args?: SelectSubset<T, AsaasCustomerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AsaasCustomerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AsaasCustomer.
     * @param {AsaasCustomerCreateArgs} args - Arguments to create a AsaasCustomer.
     * @example
     * // Create one AsaasCustomer
     * const AsaasCustomer = await prisma.asaasCustomer.create({
     *   data: {
     *     // ... data to create a AsaasCustomer
     *   }
     * })
     * 
     */
    create<T extends AsaasCustomerCreateArgs>(args: SelectSubset<T, AsaasCustomerCreateArgs<ExtArgs>>): Prisma__AsaasCustomerClient<$Result.GetResult<Prisma.$AsaasCustomerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AsaasCustomers.
     * @param {AsaasCustomerCreateManyArgs} args - Arguments to create many AsaasCustomers.
     * @example
     * // Create many AsaasCustomers
     * const asaasCustomer = await prisma.asaasCustomer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AsaasCustomerCreateManyArgs>(args?: SelectSubset<T, AsaasCustomerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AsaasCustomers and returns the data saved in the database.
     * @param {AsaasCustomerCreateManyAndReturnArgs} args - Arguments to create many AsaasCustomers.
     * @example
     * // Create many AsaasCustomers
     * const asaasCustomer = await prisma.asaasCustomer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AsaasCustomers and only return the `id`
     * const asaasCustomerWithIdOnly = await prisma.asaasCustomer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AsaasCustomerCreateManyAndReturnArgs>(args?: SelectSubset<T, AsaasCustomerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AsaasCustomerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AsaasCustomer.
     * @param {AsaasCustomerDeleteArgs} args - Arguments to delete one AsaasCustomer.
     * @example
     * // Delete one AsaasCustomer
     * const AsaasCustomer = await prisma.asaasCustomer.delete({
     *   where: {
     *     // ... filter to delete one AsaasCustomer
     *   }
     * })
     * 
     */
    delete<T extends AsaasCustomerDeleteArgs>(args: SelectSubset<T, AsaasCustomerDeleteArgs<ExtArgs>>): Prisma__AsaasCustomerClient<$Result.GetResult<Prisma.$AsaasCustomerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AsaasCustomer.
     * @param {AsaasCustomerUpdateArgs} args - Arguments to update one AsaasCustomer.
     * @example
     * // Update one AsaasCustomer
     * const asaasCustomer = await prisma.asaasCustomer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AsaasCustomerUpdateArgs>(args: SelectSubset<T, AsaasCustomerUpdateArgs<ExtArgs>>): Prisma__AsaasCustomerClient<$Result.GetResult<Prisma.$AsaasCustomerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AsaasCustomers.
     * @param {AsaasCustomerDeleteManyArgs} args - Arguments to filter AsaasCustomers to delete.
     * @example
     * // Delete a few AsaasCustomers
     * const { count } = await prisma.asaasCustomer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AsaasCustomerDeleteManyArgs>(args?: SelectSubset<T, AsaasCustomerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AsaasCustomers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AsaasCustomerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AsaasCustomers
     * const asaasCustomer = await prisma.asaasCustomer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AsaasCustomerUpdateManyArgs>(args: SelectSubset<T, AsaasCustomerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AsaasCustomers and returns the data updated in the database.
     * @param {AsaasCustomerUpdateManyAndReturnArgs} args - Arguments to update many AsaasCustomers.
     * @example
     * // Update many AsaasCustomers
     * const asaasCustomer = await prisma.asaasCustomer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AsaasCustomers and only return the `id`
     * const asaasCustomerWithIdOnly = await prisma.asaasCustomer.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AsaasCustomerUpdateManyAndReturnArgs>(args: SelectSubset<T, AsaasCustomerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AsaasCustomerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AsaasCustomer.
     * @param {AsaasCustomerUpsertArgs} args - Arguments to update or create a AsaasCustomer.
     * @example
     * // Update or create a AsaasCustomer
     * const asaasCustomer = await prisma.asaasCustomer.upsert({
     *   create: {
     *     // ... data to create a AsaasCustomer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AsaasCustomer we want to update
     *   }
     * })
     */
    upsert<T extends AsaasCustomerUpsertArgs>(args: SelectSubset<T, AsaasCustomerUpsertArgs<ExtArgs>>): Prisma__AsaasCustomerClient<$Result.GetResult<Prisma.$AsaasCustomerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AsaasCustomers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AsaasCustomerCountArgs} args - Arguments to filter AsaasCustomers to count.
     * @example
     * // Count the number of AsaasCustomers
     * const count = await prisma.asaasCustomer.count({
     *   where: {
     *     // ... the filter for the AsaasCustomers we want to count
     *   }
     * })
    **/
    count<T extends AsaasCustomerCountArgs>(
      args?: Subset<T, AsaasCustomerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AsaasCustomerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AsaasCustomer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AsaasCustomerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AsaasCustomerAggregateArgs>(args: Subset<T, AsaasCustomerAggregateArgs>): Prisma.PrismaPromise<GetAsaasCustomerAggregateType<T>>

    /**
     * Group by AsaasCustomer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AsaasCustomerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AsaasCustomerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AsaasCustomerGroupByArgs['orderBy'] }
        : { orderBy?: AsaasCustomerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AsaasCustomerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAsaasCustomerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AsaasCustomer model
   */
  readonly fields: AsaasCustomerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AsaasCustomer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AsaasCustomerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    payments<T extends AsaasCustomer$paymentsArgs<ExtArgs> = {}>(args?: Subset<T, AsaasCustomer$paymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AsaasPaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    subscriptions<T extends AsaasCustomer$subscriptionsArgs<ExtArgs> = {}>(args?: Subset<T, AsaasCustomer$subscriptionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AsaasSubscriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AsaasCustomer model
   */
  interface AsaasCustomerFieldRefs {
    readonly id: FieldRef<"AsaasCustomer", 'String'>
    readonly userId: FieldRef<"AsaasCustomer", 'String'>
    readonly asaasId: FieldRef<"AsaasCustomer", 'String'>
    readonly name: FieldRef<"AsaasCustomer", 'String'>
    readonly cpfCnpj: FieldRef<"AsaasCustomer", 'String'>
    readonly email: FieldRef<"AsaasCustomer", 'String'>
    readonly phone: FieldRef<"AsaasCustomer", 'String'>
    readonly mobilePhone: FieldRef<"AsaasCustomer", 'String'>
    readonly postalCode: FieldRef<"AsaasCustomer", 'String'>
    readonly address: FieldRef<"AsaasCustomer", 'String'>
    readonly addressNumber: FieldRef<"AsaasCustomer", 'String'>
    readonly complement: FieldRef<"AsaasCustomer", 'String'>
    readonly province: FieldRef<"AsaasCustomer", 'String'>
    readonly externalReference: FieldRef<"AsaasCustomer", 'String'>
    readonly createdAt: FieldRef<"AsaasCustomer", 'DateTime'>
    readonly updatedAt: FieldRef<"AsaasCustomer", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AsaasCustomer findUnique
   */
  export type AsaasCustomerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AsaasCustomer
     */
    select?: AsaasCustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AsaasCustomer
     */
    omit?: AsaasCustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsaasCustomerInclude<ExtArgs> | null
    /**
     * Filter, which AsaasCustomer to fetch.
     */
    where: AsaasCustomerWhereUniqueInput
  }

  /**
   * AsaasCustomer findUniqueOrThrow
   */
  export type AsaasCustomerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AsaasCustomer
     */
    select?: AsaasCustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AsaasCustomer
     */
    omit?: AsaasCustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsaasCustomerInclude<ExtArgs> | null
    /**
     * Filter, which AsaasCustomer to fetch.
     */
    where: AsaasCustomerWhereUniqueInput
  }

  /**
   * AsaasCustomer findFirst
   */
  export type AsaasCustomerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AsaasCustomer
     */
    select?: AsaasCustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AsaasCustomer
     */
    omit?: AsaasCustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsaasCustomerInclude<ExtArgs> | null
    /**
     * Filter, which AsaasCustomer to fetch.
     */
    where?: AsaasCustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AsaasCustomers to fetch.
     */
    orderBy?: AsaasCustomerOrderByWithRelationInput | AsaasCustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AsaasCustomers.
     */
    cursor?: AsaasCustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AsaasCustomers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AsaasCustomers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AsaasCustomers.
     */
    distinct?: AsaasCustomerScalarFieldEnum | AsaasCustomerScalarFieldEnum[]
  }

  /**
   * AsaasCustomer findFirstOrThrow
   */
  export type AsaasCustomerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AsaasCustomer
     */
    select?: AsaasCustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AsaasCustomer
     */
    omit?: AsaasCustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsaasCustomerInclude<ExtArgs> | null
    /**
     * Filter, which AsaasCustomer to fetch.
     */
    where?: AsaasCustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AsaasCustomers to fetch.
     */
    orderBy?: AsaasCustomerOrderByWithRelationInput | AsaasCustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AsaasCustomers.
     */
    cursor?: AsaasCustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AsaasCustomers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AsaasCustomers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AsaasCustomers.
     */
    distinct?: AsaasCustomerScalarFieldEnum | AsaasCustomerScalarFieldEnum[]
  }

  /**
   * AsaasCustomer findMany
   */
  export type AsaasCustomerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AsaasCustomer
     */
    select?: AsaasCustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AsaasCustomer
     */
    omit?: AsaasCustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsaasCustomerInclude<ExtArgs> | null
    /**
     * Filter, which AsaasCustomers to fetch.
     */
    where?: AsaasCustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AsaasCustomers to fetch.
     */
    orderBy?: AsaasCustomerOrderByWithRelationInput | AsaasCustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AsaasCustomers.
     */
    cursor?: AsaasCustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AsaasCustomers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AsaasCustomers.
     */
    skip?: number
    distinct?: AsaasCustomerScalarFieldEnum | AsaasCustomerScalarFieldEnum[]
  }

  /**
   * AsaasCustomer create
   */
  export type AsaasCustomerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AsaasCustomer
     */
    select?: AsaasCustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AsaasCustomer
     */
    omit?: AsaasCustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsaasCustomerInclude<ExtArgs> | null
    /**
     * The data needed to create a AsaasCustomer.
     */
    data: XOR<AsaasCustomerCreateInput, AsaasCustomerUncheckedCreateInput>
  }

  /**
   * AsaasCustomer createMany
   */
  export type AsaasCustomerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AsaasCustomers.
     */
    data: AsaasCustomerCreateManyInput | AsaasCustomerCreateManyInput[]
  }

  /**
   * AsaasCustomer createManyAndReturn
   */
  export type AsaasCustomerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AsaasCustomer
     */
    select?: AsaasCustomerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AsaasCustomer
     */
    omit?: AsaasCustomerOmit<ExtArgs> | null
    /**
     * The data used to create many AsaasCustomers.
     */
    data: AsaasCustomerCreateManyInput | AsaasCustomerCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsaasCustomerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AsaasCustomer update
   */
  export type AsaasCustomerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AsaasCustomer
     */
    select?: AsaasCustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AsaasCustomer
     */
    omit?: AsaasCustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsaasCustomerInclude<ExtArgs> | null
    /**
     * The data needed to update a AsaasCustomer.
     */
    data: XOR<AsaasCustomerUpdateInput, AsaasCustomerUncheckedUpdateInput>
    /**
     * Choose, which AsaasCustomer to update.
     */
    where: AsaasCustomerWhereUniqueInput
  }

  /**
   * AsaasCustomer updateMany
   */
  export type AsaasCustomerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AsaasCustomers.
     */
    data: XOR<AsaasCustomerUpdateManyMutationInput, AsaasCustomerUncheckedUpdateManyInput>
    /**
     * Filter which AsaasCustomers to update
     */
    where?: AsaasCustomerWhereInput
    /**
     * Limit how many AsaasCustomers to update.
     */
    limit?: number
  }

  /**
   * AsaasCustomer updateManyAndReturn
   */
  export type AsaasCustomerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AsaasCustomer
     */
    select?: AsaasCustomerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AsaasCustomer
     */
    omit?: AsaasCustomerOmit<ExtArgs> | null
    /**
     * The data used to update AsaasCustomers.
     */
    data: XOR<AsaasCustomerUpdateManyMutationInput, AsaasCustomerUncheckedUpdateManyInput>
    /**
     * Filter which AsaasCustomers to update
     */
    where?: AsaasCustomerWhereInput
    /**
     * Limit how many AsaasCustomers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsaasCustomerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AsaasCustomer upsert
   */
  export type AsaasCustomerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AsaasCustomer
     */
    select?: AsaasCustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AsaasCustomer
     */
    omit?: AsaasCustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsaasCustomerInclude<ExtArgs> | null
    /**
     * The filter to search for the AsaasCustomer to update in case it exists.
     */
    where: AsaasCustomerWhereUniqueInput
    /**
     * In case the AsaasCustomer found by the `where` argument doesn't exist, create a new AsaasCustomer with this data.
     */
    create: XOR<AsaasCustomerCreateInput, AsaasCustomerUncheckedCreateInput>
    /**
     * In case the AsaasCustomer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AsaasCustomerUpdateInput, AsaasCustomerUncheckedUpdateInput>
  }

  /**
   * AsaasCustomer delete
   */
  export type AsaasCustomerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AsaasCustomer
     */
    select?: AsaasCustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AsaasCustomer
     */
    omit?: AsaasCustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsaasCustomerInclude<ExtArgs> | null
    /**
     * Filter which AsaasCustomer to delete.
     */
    where: AsaasCustomerWhereUniqueInput
  }

  /**
   * AsaasCustomer deleteMany
   */
  export type AsaasCustomerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AsaasCustomers to delete
     */
    where?: AsaasCustomerWhereInput
    /**
     * Limit how many AsaasCustomers to delete.
     */
    limit?: number
  }

  /**
   * AsaasCustomer.payments
   */
  export type AsaasCustomer$paymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AsaasPayment
     */
    select?: AsaasPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AsaasPayment
     */
    omit?: AsaasPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsaasPaymentInclude<ExtArgs> | null
    where?: AsaasPaymentWhereInput
    orderBy?: AsaasPaymentOrderByWithRelationInput | AsaasPaymentOrderByWithRelationInput[]
    cursor?: AsaasPaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AsaasPaymentScalarFieldEnum | AsaasPaymentScalarFieldEnum[]
  }

  /**
   * AsaasCustomer.subscriptions
   */
  export type AsaasCustomer$subscriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AsaasSubscription
     */
    select?: AsaasSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AsaasSubscription
     */
    omit?: AsaasSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsaasSubscriptionInclude<ExtArgs> | null
    where?: AsaasSubscriptionWhereInput
    orderBy?: AsaasSubscriptionOrderByWithRelationInput | AsaasSubscriptionOrderByWithRelationInput[]
    cursor?: AsaasSubscriptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AsaasSubscriptionScalarFieldEnum | AsaasSubscriptionScalarFieldEnum[]
  }

  /**
   * AsaasCustomer without action
   */
  export type AsaasCustomerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AsaasCustomer
     */
    select?: AsaasCustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AsaasCustomer
     */
    omit?: AsaasCustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsaasCustomerInclude<ExtArgs> | null
  }


  /**
   * Model AsaasPayment
   */

  export type AggregateAsaasPayment = {
    _count: AsaasPaymentCountAggregateOutputType | null
    _avg: AsaasPaymentAvgAggregateOutputType | null
    _sum: AsaasPaymentSumAggregateOutputType | null
    _min: AsaasPaymentMinAggregateOutputType | null
    _max: AsaasPaymentMaxAggregateOutputType | null
  }

  export type AsaasPaymentAvgAggregateOutputType = {
    purchaseId: number | null
    value: number | null
    netValue: number | null
    originalValue: number | null
    interestValue: number | null
    discountValue: number | null
    fineValue: number | null
  }

  export type AsaasPaymentSumAggregateOutputType = {
    purchaseId: number | null
    value: number | null
    netValue: number | null
    originalValue: number | null
    interestValue: number | null
    discountValue: number | null
    fineValue: number | null
  }

  export type AsaasPaymentMinAggregateOutputType = {
    id: string | null
    customerId: string | null
    asaasId: string | null
    purchaseId: number | null
    billingType: string | null
    status: string | null
    value: number | null
    dueDate: Date | null
    originalDueDate: Date | null
    description: string | null
    externalReference: string | null
    invoiceUrl: string | null
    bankSlipUrl: string | null
    pixQrCode: string | null
    creditCardPaymentLink: string | null
    confirmedDate: Date | null
    paymentDate: Date | null
    clientPaymentDate: Date | null
    netValue: number | null
    originalValue: number | null
    interestValue: number | null
    discountValue: number | null
    fineValue: number | null
    asaasPayload: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AsaasPaymentMaxAggregateOutputType = {
    id: string | null
    customerId: string | null
    asaasId: string | null
    purchaseId: number | null
    billingType: string | null
    status: string | null
    value: number | null
    dueDate: Date | null
    originalDueDate: Date | null
    description: string | null
    externalReference: string | null
    invoiceUrl: string | null
    bankSlipUrl: string | null
    pixQrCode: string | null
    creditCardPaymentLink: string | null
    confirmedDate: Date | null
    paymentDate: Date | null
    clientPaymentDate: Date | null
    netValue: number | null
    originalValue: number | null
    interestValue: number | null
    discountValue: number | null
    fineValue: number | null
    asaasPayload: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AsaasPaymentCountAggregateOutputType = {
    id: number
    customerId: number
    asaasId: number
    purchaseId: number
    billingType: number
    status: number
    value: number
    dueDate: number
    originalDueDate: number
    description: number
    externalReference: number
    invoiceUrl: number
    bankSlipUrl: number
    pixQrCode: number
    creditCardPaymentLink: number
    confirmedDate: number
    paymentDate: number
    clientPaymentDate: number
    netValue: number
    originalValue: number
    interestValue: number
    discountValue: number
    fineValue: number
    asaasPayload: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AsaasPaymentAvgAggregateInputType = {
    purchaseId?: true
    value?: true
    netValue?: true
    originalValue?: true
    interestValue?: true
    discountValue?: true
    fineValue?: true
  }

  export type AsaasPaymentSumAggregateInputType = {
    purchaseId?: true
    value?: true
    netValue?: true
    originalValue?: true
    interestValue?: true
    discountValue?: true
    fineValue?: true
  }

  export type AsaasPaymentMinAggregateInputType = {
    id?: true
    customerId?: true
    asaasId?: true
    purchaseId?: true
    billingType?: true
    status?: true
    value?: true
    dueDate?: true
    originalDueDate?: true
    description?: true
    externalReference?: true
    invoiceUrl?: true
    bankSlipUrl?: true
    pixQrCode?: true
    creditCardPaymentLink?: true
    confirmedDate?: true
    paymentDate?: true
    clientPaymentDate?: true
    netValue?: true
    originalValue?: true
    interestValue?: true
    discountValue?: true
    fineValue?: true
    asaasPayload?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AsaasPaymentMaxAggregateInputType = {
    id?: true
    customerId?: true
    asaasId?: true
    purchaseId?: true
    billingType?: true
    status?: true
    value?: true
    dueDate?: true
    originalDueDate?: true
    description?: true
    externalReference?: true
    invoiceUrl?: true
    bankSlipUrl?: true
    pixQrCode?: true
    creditCardPaymentLink?: true
    confirmedDate?: true
    paymentDate?: true
    clientPaymentDate?: true
    netValue?: true
    originalValue?: true
    interestValue?: true
    discountValue?: true
    fineValue?: true
    asaasPayload?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AsaasPaymentCountAggregateInputType = {
    id?: true
    customerId?: true
    asaasId?: true
    purchaseId?: true
    billingType?: true
    status?: true
    value?: true
    dueDate?: true
    originalDueDate?: true
    description?: true
    externalReference?: true
    invoiceUrl?: true
    bankSlipUrl?: true
    pixQrCode?: true
    creditCardPaymentLink?: true
    confirmedDate?: true
    paymentDate?: true
    clientPaymentDate?: true
    netValue?: true
    originalValue?: true
    interestValue?: true
    discountValue?: true
    fineValue?: true
    asaasPayload?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AsaasPaymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AsaasPayment to aggregate.
     */
    where?: AsaasPaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AsaasPayments to fetch.
     */
    orderBy?: AsaasPaymentOrderByWithRelationInput | AsaasPaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AsaasPaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AsaasPayments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AsaasPayments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AsaasPayments
    **/
    _count?: true | AsaasPaymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AsaasPaymentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AsaasPaymentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AsaasPaymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AsaasPaymentMaxAggregateInputType
  }

  export type GetAsaasPaymentAggregateType<T extends AsaasPaymentAggregateArgs> = {
        [P in keyof T & keyof AggregateAsaasPayment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAsaasPayment[P]>
      : GetScalarType<T[P], AggregateAsaasPayment[P]>
  }




  export type AsaasPaymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AsaasPaymentWhereInput
    orderBy?: AsaasPaymentOrderByWithAggregationInput | AsaasPaymentOrderByWithAggregationInput[]
    by: AsaasPaymentScalarFieldEnum[] | AsaasPaymentScalarFieldEnum
    having?: AsaasPaymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AsaasPaymentCountAggregateInputType | true
    _avg?: AsaasPaymentAvgAggregateInputType
    _sum?: AsaasPaymentSumAggregateInputType
    _min?: AsaasPaymentMinAggregateInputType
    _max?: AsaasPaymentMaxAggregateInputType
  }

  export type AsaasPaymentGroupByOutputType = {
    id: string
    customerId: string
    asaasId: string
    purchaseId: number | null
    billingType: string
    status: string
    value: number
    dueDate: Date
    originalDueDate: Date | null
    description: string | null
    externalReference: string | null
    invoiceUrl: string | null
    bankSlipUrl: string | null
    pixQrCode: string | null
    creditCardPaymentLink: string | null
    confirmedDate: Date | null
    paymentDate: Date | null
    clientPaymentDate: Date | null
    netValue: number | null
    originalValue: number | null
    interestValue: number | null
    discountValue: number | null
    fineValue: number | null
    asaasPayload: string | null
    createdAt: Date
    updatedAt: Date
    _count: AsaasPaymentCountAggregateOutputType | null
    _avg: AsaasPaymentAvgAggregateOutputType | null
    _sum: AsaasPaymentSumAggregateOutputType | null
    _min: AsaasPaymentMinAggregateOutputType | null
    _max: AsaasPaymentMaxAggregateOutputType | null
  }

  type GetAsaasPaymentGroupByPayload<T extends AsaasPaymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AsaasPaymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AsaasPaymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AsaasPaymentGroupByOutputType[P]>
            : GetScalarType<T[P], AsaasPaymentGroupByOutputType[P]>
        }
      >
    >


  export type AsaasPaymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerId?: boolean
    asaasId?: boolean
    purchaseId?: boolean
    billingType?: boolean
    status?: boolean
    value?: boolean
    dueDate?: boolean
    originalDueDate?: boolean
    description?: boolean
    externalReference?: boolean
    invoiceUrl?: boolean
    bankSlipUrl?: boolean
    pixQrCode?: boolean
    creditCardPaymentLink?: boolean
    confirmedDate?: boolean
    paymentDate?: boolean
    clientPaymentDate?: boolean
    netValue?: boolean
    originalValue?: boolean
    interestValue?: boolean
    discountValue?: boolean
    fineValue?: boolean
    asaasPayload?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    customer?: boolean | AsaasCustomerDefaultArgs<ExtArgs>
    purchase?: boolean | AsaasPayment$purchaseArgs<ExtArgs>
  }, ExtArgs["result"]["asaasPayment"]>

  export type AsaasPaymentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerId?: boolean
    asaasId?: boolean
    purchaseId?: boolean
    billingType?: boolean
    status?: boolean
    value?: boolean
    dueDate?: boolean
    originalDueDate?: boolean
    description?: boolean
    externalReference?: boolean
    invoiceUrl?: boolean
    bankSlipUrl?: boolean
    pixQrCode?: boolean
    creditCardPaymentLink?: boolean
    confirmedDate?: boolean
    paymentDate?: boolean
    clientPaymentDate?: boolean
    netValue?: boolean
    originalValue?: boolean
    interestValue?: boolean
    discountValue?: boolean
    fineValue?: boolean
    asaasPayload?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    customer?: boolean | AsaasCustomerDefaultArgs<ExtArgs>
    purchase?: boolean | AsaasPayment$purchaseArgs<ExtArgs>
  }, ExtArgs["result"]["asaasPayment"]>

  export type AsaasPaymentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerId?: boolean
    asaasId?: boolean
    purchaseId?: boolean
    billingType?: boolean
    status?: boolean
    value?: boolean
    dueDate?: boolean
    originalDueDate?: boolean
    description?: boolean
    externalReference?: boolean
    invoiceUrl?: boolean
    bankSlipUrl?: boolean
    pixQrCode?: boolean
    creditCardPaymentLink?: boolean
    confirmedDate?: boolean
    paymentDate?: boolean
    clientPaymentDate?: boolean
    netValue?: boolean
    originalValue?: boolean
    interestValue?: boolean
    discountValue?: boolean
    fineValue?: boolean
    asaasPayload?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    customer?: boolean | AsaasCustomerDefaultArgs<ExtArgs>
    purchase?: boolean | AsaasPayment$purchaseArgs<ExtArgs>
  }, ExtArgs["result"]["asaasPayment"]>

  export type AsaasPaymentSelectScalar = {
    id?: boolean
    customerId?: boolean
    asaasId?: boolean
    purchaseId?: boolean
    billingType?: boolean
    status?: boolean
    value?: boolean
    dueDate?: boolean
    originalDueDate?: boolean
    description?: boolean
    externalReference?: boolean
    invoiceUrl?: boolean
    bankSlipUrl?: boolean
    pixQrCode?: boolean
    creditCardPaymentLink?: boolean
    confirmedDate?: boolean
    paymentDate?: boolean
    clientPaymentDate?: boolean
    netValue?: boolean
    originalValue?: boolean
    interestValue?: boolean
    discountValue?: boolean
    fineValue?: boolean
    asaasPayload?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AsaasPaymentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "customerId" | "asaasId" | "purchaseId" | "billingType" | "status" | "value" | "dueDate" | "originalDueDate" | "description" | "externalReference" | "invoiceUrl" | "bankSlipUrl" | "pixQrCode" | "creditCardPaymentLink" | "confirmedDate" | "paymentDate" | "clientPaymentDate" | "netValue" | "originalValue" | "interestValue" | "discountValue" | "fineValue" | "asaasPayload" | "createdAt" | "updatedAt", ExtArgs["result"]["asaasPayment"]>
  export type AsaasPaymentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | AsaasCustomerDefaultArgs<ExtArgs>
    purchase?: boolean | AsaasPayment$purchaseArgs<ExtArgs>
  }
  export type AsaasPaymentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | AsaasCustomerDefaultArgs<ExtArgs>
    purchase?: boolean | AsaasPayment$purchaseArgs<ExtArgs>
  }
  export type AsaasPaymentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | AsaasCustomerDefaultArgs<ExtArgs>
    purchase?: boolean | AsaasPayment$purchaseArgs<ExtArgs>
  }

  export type $AsaasPaymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AsaasPayment"
    objects: {
      customer: Prisma.$AsaasCustomerPayload<ExtArgs>
      purchase: Prisma.$PurchasePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      customerId: string
      asaasId: string
      purchaseId: number | null
      billingType: string
      status: string
      value: number
      dueDate: Date
      originalDueDate: Date | null
      description: string | null
      externalReference: string | null
      invoiceUrl: string | null
      bankSlipUrl: string | null
      pixQrCode: string | null
      creditCardPaymentLink: string | null
      confirmedDate: Date | null
      paymentDate: Date | null
      clientPaymentDate: Date | null
      netValue: number | null
      originalValue: number | null
      interestValue: number | null
      discountValue: number | null
      fineValue: number | null
      asaasPayload: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["asaasPayment"]>
    composites: {}
  }

  type AsaasPaymentGetPayload<S extends boolean | null | undefined | AsaasPaymentDefaultArgs> = $Result.GetResult<Prisma.$AsaasPaymentPayload, S>

  type AsaasPaymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AsaasPaymentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AsaasPaymentCountAggregateInputType | true
    }

  export interface AsaasPaymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AsaasPayment'], meta: { name: 'AsaasPayment' } }
    /**
     * Find zero or one AsaasPayment that matches the filter.
     * @param {AsaasPaymentFindUniqueArgs} args - Arguments to find a AsaasPayment
     * @example
     * // Get one AsaasPayment
     * const asaasPayment = await prisma.asaasPayment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AsaasPaymentFindUniqueArgs>(args: SelectSubset<T, AsaasPaymentFindUniqueArgs<ExtArgs>>): Prisma__AsaasPaymentClient<$Result.GetResult<Prisma.$AsaasPaymentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AsaasPayment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AsaasPaymentFindUniqueOrThrowArgs} args - Arguments to find a AsaasPayment
     * @example
     * // Get one AsaasPayment
     * const asaasPayment = await prisma.asaasPayment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AsaasPaymentFindUniqueOrThrowArgs>(args: SelectSubset<T, AsaasPaymentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AsaasPaymentClient<$Result.GetResult<Prisma.$AsaasPaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AsaasPayment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AsaasPaymentFindFirstArgs} args - Arguments to find a AsaasPayment
     * @example
     * // Get one AsaasPayment
     * const asaasPayment = await prisma.asaasPayment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AsaasPaymentFindFirstArgs>(args?: SelectSubset<T, AsaasPaymentFindFirstArgs<ExtArgs>>): Prisma__AsaasPaymentClient<$Result.GetResult<Prisma.$AsaasPaymentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AsaasPayment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AsaasPaymentFindFirstOrThrowArgs} args - Arguments to find a AsaasPayment
     * @example
     * // Get one AsaasPayment
     * const asaasPayment = await prisma.asaasPayment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AsaasPaymentFindFirstOrThrowArgs>(args?: SelectSubset<T, AsaasPaymentFindFirstOrThrowArgs<ExtArgs>>): Prisma__AsaasPaymentClient<$Result.GetResult<Prisma.$AsaasPaymentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AsaasPayments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AsaasPaymentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AsaasPayments
     * const asaasPayments = await prisma.asaasPayment.findMany()
     * 
     * // Get first 10 AsaasPayments
     * const asaasPayments = await prisma.asaasPayment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const asaasPaymentWithIdOnly = await prisma.asaasPayment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AsaasPaymentFindManyArgs>(args?: SelectSubset<T, AsaasPaymentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AsaasPaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AsaasPayment.
     * @param {AsaasPaymentCreateArgs} args - Arguments to create a AsaasPayment.
     * @example
     * // Create one AsaasPayment
     * const AsaasPayment = await prisma.asaasPayment.create({
     *   data: {
     *     // ... data to create a AsaasPayment
     *   }
     * })
     * 
     */
    create<T extends AsaasPaymentCreateArgs>(args: SelectSubset<T, AsaasPaymentCreateArgs<ExtArgs>>): Prisma__AsaasPaymentClient<$Result.GetResult<Prisma.$AsaasPaymentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AsaasPayments.
     * @param {AsaasPaymentCreateManyArgs} args - Arguments to create many AsaasPayments.
     * @example
     * // Create many AsaasPayments
     * const asaasPayment = await prisma.asaasPayment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AsaasPaymentCreateManyArgs>(args?: SelectSubset<T, AsaasPaymentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AsaasPayments and returns the data saved in the database.
     * @param {AsaasPaymentCreateManyAndReturnArgs} args - Arguments to create many AsaasPayments.
     * @example
     * // Create many AsaasPayments
     * const asaasPayment = await prisma.asaasPayment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AsaasPayments and only return the `id`
     * const asaasPaymentWithIdOnly = await prisma.asaasPayment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AsaasPaymentCreateManyAndReturnArgs>(args?: SelectSubset<T, AsaasPaymentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AsaasPaymentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AsaasPayment.
     * @param {AsaasPaymentDeleteArgs} args - Arguments to delete one AsaasPayment.
     * @example
     * // Delete one AsaasPayment
     * const AsaasPayment = await prisma.asaasPayment.delete({
     *   where: {
     *     // ... filter to delete one AsaasPayment
     *   }
     * })
     * 
     */
    delete<T extends AsaasPaymentDeleteArgs>(args: SelectSubset<T, AsaasPaymentDeleteArgs<ExtArgs>>): Prisma__AsaasPaymentClient<$Result.GetResult<Prisma.$AsaasPaymentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AsaasPayment.
     * @param {AsaasPaymentUpdateArgs} args - Arguments to update one AsaasPayment.
     * @example
     * // Update one AsaasPayment
     * const asaasPayment = await prisma.asaasPayment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AsaasPaymentUpdateArgs>(args: SelectSubset<T, AsaasPaymentUpdateArgs<ExtArgs>>): Prisma__AsaasPaymentClient<$Result.GetResult<Prisma.$AsaasPaymentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AsaasPayments.
     * @param {AsaasPaymentDeleteManyArgs} args - Arguments to filter AsaasPayments to delete.
     * @example
     * // Delete a few AsaasPayments
     * const { count } = await prisma.asaasPayment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AsaasPaymentDeleteManyArgs>(args?: SelectSubset<T, AsaasPaymentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AsaasPayments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AsaasPaymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AsaasPayments
     * const asaasPayment = await prisma.asaasPayment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AsaasPaymentUpdateManyArgs>(args: SelectSubset<T, AsaasPaymentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AsaasPayments and returns the data updated in the database.
     * @param {AsaasPaymentUpdateManyAndReturnArgs} args - Arguments to update many AsaasPayments.
     * @example
     * // Update many AsaasPayments
     * const asaasPayment = await prisma.asaasPayment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AsaasPayments and only return the `id`
     * const asaasPaymentWithIdOnly = await prisma.asaasPayment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AsaasPaymentUpdateManyAndReturnArgs>(args: SelectSubset<T, AsaasPaymentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AsaasPaymentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AsaasPayment.
     * @param {AsaasPaymentUpsertArgs} args - Arguments to update or create a AsaasPayment.
     * @example
     * // Update or create a AsaasPayment
     * const asaasPayment = await prisma.asaasPayment.upsert({
     *   create: {
     *     // ... data to create a AsaasPayment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AsaasPayment we want to update
     *   }
     * })
     */
    upsert<T extends AsaasPaymentUpsertArgs>(args: SelectSubset<T, AsaasPaymentUpsertArgs<ExtArgs>>): Prisma__AsaasPaymentClient<$Result.GetResult<Prisma.$AsaasPaymentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AsaasPayments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AsaasPaymentCountArgs} args - Arguments to filter AsaasPayments to count.
     * @example
     * // Count the number of AsaasPayments
     * const count = await prisma.asaasPayment.count({
     *   where: {
     *     // ... the filter for the AsaasPayments we want to count
     *   }
     * })
    **/
    count<T extends AsaasPaymentCountArgs>(
      args?: Subset<T, AsaasPaymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AsaasPaymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AsaasPayment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AsaasPaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AsaasPaymentAggregateArgs>(args: Subset<T, AsaasPaymentAggregateArgs>): Prisma.PrismaPromise<GetAsaasPaymentAggregateType<T>>

    /**
     * Group by AsaasPayment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AsaasPaymentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AsaasPaymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AsaasPaymentGroupByArgs['orderBy'] }
        : { orderBy?: AsaasPaymentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AsaasPaymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAsaasPaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AsaasPayment model
   */
  readonly fields: AsaasPaymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AsaasPayment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AsaasPaymentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    customer<T extends AsaasCustomerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AsaasCustomerDefaultArgs<ExtArgs>>): Prisma__AsaasCustomerClient<$Result.GetResult<Prisma.$AsaasCustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    purchase<T extends AsaasPayment$purchaseArgs<ExtArgs> = {}>(args?: Subset<T, AsaasPayment$purchaseArgs<ExtArgs>>): Prisma__PurchaseClient<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AsaasPayment model
   */
  interface AsaasPaymentFieldRefs {
    readonly id: FieldRef<"AsaasPayment", 'String'>
    readonly customerId: FieldRef<"AsaasPayment", 'String'>
    readonly asaasId: FieldRef<"AsaasPayment", 'String'>
    readonly purchaseId: FieldRef<"AsaasPayment", 'Int'>
    readonly billingType: FieldRef<"AsaasPayment", 'String'>
    readonly status: FieldRef<"AsaasPayment", 'String'>
    readonly value: FieldRef<"AsaasPayment", 'Float'>
    readonly dueDate: FieldRef<"AsaasPayment", 'DateTime'>
    readonly originalDueDate: FieldRef<"AsaasPayment", 'DateTime'>
    readonly description: FieldRef<"AsaasPayment", 'String'>
    readonly externalReference: FieldRef<"AsaasPayment", 'String'>
    readonly invoiceUrl: FieldRef<"AsaasPayment", 'String'>
    readonly bankSlipUrl: FieldRef<"AsaasPayment", 'String'>
    readonly pixQrCode: FieldRef<"AsaasPayment", 'String'>
    readonly creditCardPaymentLink: FieldRef<"AsaasPayment", 'String'>
    readonly confirmedDate: FieldRef<"AsaasPayment", 'DateTime'>
    readonly paymentDate: FieldRef<"AsaasPayment", 'DateTime'>
    readonly clientPaymentDate: FieldRef<"AsaasPayment", 'DateTime'>
    readonly netValue: FieldRef<"AsaasPayment", 'Float'>
    readonly originalValue: FieldRef<"AsaasPayment", 'Float'>
    readonly interestValue: FieldRef<"AsaasPayment", 'Float'>
    readonly discountValue: FieldRef<"AsaasPayment", 'Float'>
    readonly fineValue: FieldRef<"AsaasPayment", 'Float'>
    readonly asaasPayload: FieldRef<"AsaasPayment", 'String'>
    readonly createdAt: FieldRef<"AsaasPayment", 'DateTime'>
    readonly updatedAt: FieldRef<"AsaasPayment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AsaasPayment findUnique
   */
  export type AsaasPaymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AsaasPayment
     */
    select?: AsaasPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AsaasPayment
     */
    omit?: AsaasPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsaasPaymentInclude<ExtArgs> | null
    /**
     * Filter, which AsaasPayment to fetch.
     */
    where: AsaasPaymentWhereUniqueInput
  }

  /**
   * AsaasPayment findUniqueOrThrow
   */
  export type AsaasPaymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AsaasPayment
     */
    select?: AsaasPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AsaasPayment
     */
    omit?: AsaasPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsaasPaymentInclude<ExtArgs> | null
    /**
     * Filter, which AsaasPayment to fetch.
     */
    where: AsaasPaymentWhereUniqueInput
  }

  /**
   * AsaasPayment findFirst
   */
  export type AsaasPaymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AsaasPayment
     */
    select?: AsaasPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AsaasPayment
     */
    omit?: AsaasPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsaasPaymentInclude<ExtArgs> | null
    /**
     * Filter, which AsaasPayment to fetch.
     */
    where?: AsaasPaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AsaasPayments to fetch.
     */
    orderBy?: AsaasPaymentOrderByWithRelationInput | AsaasPaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AsaasPayments.
     */
    cursor?: AsaasPaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AsaasPayments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AsaasPayments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AsaasPayments.
     */
    distinct?: AsaasPaymentScalarFieldEnum | AsaasPaymentScalarFieldEnum[]
  }

  /**
   * AsaasPayment findFirstOrThrow
   */
  export type AsaasPaymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AsaasPayment
     */
    select?: AsaasPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AsaasPayment
     */
    omit?: AsaasPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsaasPaymentInclude<ExtArgs> | null
    /**
     * Filter, which AsaasPayment to fetch.
     */
    where?: AsaasPaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AsaasPayments to fetch.
     */
    orderBy?: AsaasPaymentOrderByWithRelationInput | AsaasPaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AsaasPayments.
     */
    cursor?: AsaasPaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AsaasPayments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AsaasPayments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AsaasPayments.
     */
    distinct?: AsaasPaymentScalarFieldEnum | AsaasPaymentScalarFieldEnum[]
  }

  /**
   * AsaasPayment findMany
   */
  export type AsaasPaymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AsaasPayment
     */
    select?: AsaasPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AsaasPayment
     */
    omit?: AsaasPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsaasPaymentInclude<ExtArgs> | null
    /**
     * Filter, which AsaasPayments to fetch.
     */
    where?: AsaasPaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AsaasPayments to fetch.
     */
    orderBy?: AsaasPaymentOrderByWithRelationInput | AsaasPaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AsaasPayments.
     */
    cursor?: AsaasPaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AsaasPayments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AsaasPayments.
     */
    skip?: number
    distinct?: AsaasPaymentScalarFieldEnum | AsaasPaymentScalarFieldEnum[]
  }

  /**
   * AsaasPayment create
   */
  export type AsaasPaymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AsaasPayment
     */
    select?: AsaasPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AsaasPayment
     */
    omit?: AsaasPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsaasPaymentInclude<ExtArgs> | null
    /**
     * The data needed to create a AsaasPayment.
     */
    data: XOR<AsaasPaymentCreateInput, AsaasPaymentUncheckedCreateInput>
  }

  /**
   * AsaasPayment createMany
   */
  export type AsaasPaymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AsaasPayments.
     */
    data: AsaasPaymentCreateManyInput | AsaasPaymentCreateManyInput[]
  }

  /**
   * AsaasPayment createManyAndReturn
   */
  export type AsaasPaymentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AsaasPayment
     */
    select?: AsaasPaymentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AsaasPayment
     */
    omit?: AsaasPaymentOmit<ExtArgs> | null
    /**
     * The data used to create many AsaasPayments.
     */
    data: AsaasPaymentCreateManyInput | AsaasPaymentCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsaasPaymentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AsaasPayment update
   */
  export type AsaasPaymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AsaasPayment
     */
    select?: AsaasPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AsaasPayment
     */
    omit?: AsaasPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsaasPaymentInclude<ExtArgs> | null
    /**
     * The data needed to update a AsaasPayment.
     */
    data: XOR<AsaasPaymentUpdateInput, AsaasPaymentUncheckedUpdateInput>
    /**
     * Choose, which AsaasPayment to update.
     */
    where: AsaasPaymentWhereUniqueInput
  }

  /**
   * AsaasPayment updateMany
   */
  export type AsaasPaymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AsaasPayments.
     */
    data: XOR<AsaasPaymentUpdateManyMutationInput, AsaasPaymentUncheckedUpdateManyInput>
    /**
     * Filter which AsaasPayments to update
     */
    where?: AsaasPaymentWhereInput
    /**
     * Limit how many AsaasPayments to update.
     */
    limit?: number
  }

  /**
   * AsaasPayment updateManyAndReturn
   */
  export type AsaasPaymentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AsaasPayment
     */
    select?: AsaasPaymentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AsaasPayment
     */
    omit?: AsaasPaymentOmit<ExtArgs> | null
    /**
     * The data used to update AsaasPayments.
     */
    data: XOR<AsaasPaymentUpdateManyMutationInput, AsaasPaymentUncheckedUpdateManyInput>
    /**
     * Filter which AsaasPayments to update
     */
    where?: AsaasPaymentWhereInput
    /**
     * Limit how many AsaasPayments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsaasPaymentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AsaasPayment upsert
   */
  export type AsaasPaymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AsaasPayment
     */
    select?: AsaasPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AsaasPayment
     */
    omit?: AsaasPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsaasPaymentInclude<ExtArgs> | null
    /**
     * The filter to search for the AsaasPayment to update in case it exists.
     */
    where: AsaasPaymentWhereUniqueInput
    /**
     * In case the AsaasPayment found by the `where` argument doesn't exist, create a new AsaasPayment with this data.
     */
    create: XOR<AsaasPaymentCreateInput, AsaasPaymentUncheckedCreateInput>
    /**
     * In case the AsaasPayment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AsaasPaymentUpdateInput, AsaasPaymentUncheckedUpdateInput>
  }

  /**
   * AsaasPayment delete
   */
  export type AsaasPaymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AsaasPayment
     */
    select?: AsaasPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AsaasPayment
     */
    omit?: AsaasPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsaasPaymentInclude<ExtArgs> | null
    /**
     * Filter which AsaasPayment to delete.
     */
    where: AsaasPaymentWhereUniqueInput
  }

  /**
   * AsaasPayment deleteMany
   */
  export type AsaasPaymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AsaasPayments to delete
     */
    where?: AsaasPaymentWhereInput
    /**
     * Limit how many AsaasPayments to delete.
     */
    limit?: number
  }

  /**
   * AsaasPayment.purchase
   */
  export type AsaasPayment$purchaseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    where?: PurchaseWhereInput
  }

  /**
   * AsaasPayment without action
   */
  export type AsaasPaymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AsaasPayment
     */
    select?: AsaasPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AsaasPayment
     */
    omit?: AsaasPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsaasPaymentInclude<ExtArgs> | null
  }


  /**
   * Model AsaasSubscription
   */

  export type AggregateAsaasSubscription = {
    _count: AsaasSubscriptionCountAggregateOutputType | null
    _avg: AsaasSubscriptionAvgAggregateOutputType | null
    _sum: AsaasSubscriptionSumAggregateOutputType | null
    _min: AsaasSubscriptionMinAggregateOutputType | null
    _max: AsaasSubscriptionMaxAggregateOutputType | null
  }

  export type AsaasSubscriptionAvgAggregateOutputType = {
    subscriptionId: number | null
    value: number | null
    maxPayments: number | null
  }

  export type AsaasSubscriptionSumAggregateOutputType = {
    subscriptionId: number | null
    value: number | null
    maxPayments: number | null
  }

  export type AsaasSubscriptionMinAggregateOutputType = {
    id: string | null
    customerId: string | null
    asaasId: string | null
    subscriptionId: number | null
    billingType: string | null
    status: string | null
    value: number | null
    nextDueDate: Date | null
    cycle: string | null
    description: string | null
    endDate: Date | null
    maxPayments: number | null
    externalReference: string | null
    asaasPayload: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AsaasSubscriptionMaxAggregateOutputType = {
    id: string | null
    customerId: string | null
    asaasId: string | null
    subscriptionId: number | null
    billingType: string | null
    status: string | null
    value: number | null
    nextDueDate: Date | null
    cycle: string | null
    description: string | null
    endDate: Date | null
    maxPayments: number | null
    externalReference: string | null
    asaasPayload: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AsaasSubscriptionCountAggregateOutputType = {
    id: number
    customerId: number
    asaasId: number
    subscriptionId: number
    billingType: number
    status: number
    value: number
    nextDueDate: number
    cycle: number
    description: number
    endDate: number
    maxPayments: number
    externalReference: number
    asaasPayload: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AsaasSubscriptionAvgAggregateInputType = {
    subscriptionId?: true
    value?: true
    maxPayments?: true
  }

  export type AsaasSubscriptionSumAggregateInputType = {
    subscriptionId?: true
    value?: true
    maxPayments?: true
  }

  export type AsaasSubscriptionMinAggregateInputType = {
    id?: true
    customerId?: true
    asaasId?: true
    subscriptionId?: true
    billingType?: true
    status?: true
    value?: true
    nextDueDate?: true
    cycle?: true
    description?: true
    endDate?: true
    maxPayments?: true
    externalReference?: true
    asaasPayload?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AsaasSubscriptionMaxAggregateInputType = {
    id?: true
    customerId?: true
    asaasId?: true
    subscriptionId?: true
    billingType?: true
    status?: true
    value?: true
    nextDueDate?: true
    cycle?: true
    description?: true
    endDate?: true
    maxPayments?: true
    externalReference?: true
    asaasPayload?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AsaasSubscriptionCountAggregateInputType = {
    id?: true
    customerId?: true
    asaasId?: true
    subscriptionId?: true
    billingType?: true
    status?: true
    value?: true
    nextDueDate?: true
    cycle?: true
    description?: true
    endDate?: true
    maxPayments?: true
    externalReference?: true
    asaasPayload?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AsaasSubscriptionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AsaasSubscription to aggregate.
     */
    where?: AsaasSubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AsaasSubscriptions to fetch.
     */
    orderBy?: AsaasSubscriptionOrderByWithRelationInput | AsaasSubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AsaasSubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AsaasSubscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AsaasSubscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AsaasSubscriptions
    **/
    _count?: true | AsaasSubscriptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AsaasSubscriptionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AsaasSubscriptionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AsaasSubscriptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AsaasSubscriptionMaxAggregateInputType
  }

  export type GetAsaasSubscriptionAggregateType<T extends AsaasSubscriptionAggregateArgs> = {
        [P in keyof T & keyof AggregateAsaasSubscription]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAsaasSubscription[P]>
      : GetScalarType<T[P], AggregateAsaasSubscription[P]>
  }




  export type AsaasSubscriptionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AsaasSubscriptionWhereInput
    orderBy?: AsaasSubscriptionOrderByWithAggregationInput | AsaasSubscriptionOrderByWithAggregationInput[]
    by: AsaasSubscriptionScalarFieldEnum[] | AsaasSubscriptionScalarFieldEnum
    having?: AsaasSubscriptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AsaasSubscriptionCountAggregateInputType | true
    _avg?: AsaasSubscriptionAvgAggregateInputType
    _sum?: AsaasSubscriptionSumAggregateInputType
    _min?: AsaasSubscriptionMinAggregateInputType
    _max?: AsaasSubscriptionMaxAggregateInputType
  }

  export type AsaasSubscriptionGroupByOutputType = {
    id: string
    customerId: string
    asaasId: string
    subscriptionId: number | null
    billingType: string
    status: string
    value: number
    nextDueDate: Date
    cycle: string
    description: string | null
    endDate: Date | null
    maxPayments: number | null
    externalReference: string | null
    asaasPayload: string | null
    createdAt: Date
    updatedAt: Date
    _count: AsaasSubscriptionCountAggregateOutputType | null
    _avg: AsaasSubscriptionAvgAggregateOutputType | null
    _sum: AsaasSubscriptionSumAggregateOutputType | null
    _min: AsaasSubscriptionMinAggregateOutputType | null
    _max: AsaasSubscriptionMaxAggregateOutputType | null
  }

  type GetAsaasSubscriptionGroupByPayload<T extends AsaasSubscriptionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AsaasSubscriptionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AsaasSubscriptionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AsaasSubscriptionGroupByOutputType[P]>
            : GetScalarType<T[P], AsaasSubscriptionGroupByOutputType[P]>
        }
      >
    >


  export type AsaasSubscriptionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerId?: boolean
    asaasId?: boolean
    subscriptionId?: boolean
    billingType?: boolean
    status?: boolean
    value?: boolean
    nextDueDate?: boolean
    cycle?: boolean
    description?: boolean
    endDate?: boolean
    maxPayments?: boolean
    externalReference?: boolean
    asaasPayload?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    customer?: boolean | AsaasCustomerDefaultArgs<ExtArgs>
    subscription?: boolean | AsaasSubscription$subscriptionArgs<ExtArgs>
  }, ExtArgs["result"]["asaasSubscription"]>

  export type AsaasSubscriptionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerId?: boolean
    asaasId?: boolean
    subscriptionId?: boolean
    billingType?: boolean
    status?: boolean
    value?: boolean
    nextDueDate?: boolean
    cycle?: boolean
    description?: boolean
    endDate?: boolean
    maxPayments?: boolean
    externalReference?: boolean
    asaasPayload?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    customer?: boolean | AsaasCustomerDefaultArgs<ExtArgs>
    subscription?: boolean | AsaasSubscription$subscriptionArgs<ExtArgs>
  }, ExtArgs["result"]["asaasSubscription"]>

  export type AsaasSubscriptionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerId?: boolean
    asaasId?: boolean
    subscriptionId?: boolean
    billingType?: boolean
    status?: boolean
    value?: boolean
    nextDueDate?: boolean
    cycle?: boolean
    description?: boolean
    endDate?: boolean
    maxPayments?: boolean
    externalReference?: boolean
    asaasPayload?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    customer?: boolean | AsaasCustomerDefaultArgs<ExtArgs>
    subscription?: boolean | AsaasSubscription$subscriptionArgs<ExtArgs>
  }, ExtArgs["result"]["asaasSubscription"]>

  export type AsaasSubscriptionSelectScalar = {
    id?: boolean
    customerId?: boolean
    asaasId?: boolean
    subscriptionId?: boolean
    billingType?: boolean
    status?: boolean
    value?: boolean
    nextDueDate?: boolean
    cycle?: boolean
    description?: boolean
    endDate?: boolean
    maxPayments?: boolean
    externalReference?: boolean
    asaasPayload?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AsaasSubscriptionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "customerId" | "asaasId" | "subscriptionId" | "billingType" | "status" | "value" | "nextDueDate" | "cycle" | "description" | "endDate" | "maxPayments" | "externalReference" | "asaasPayload" | "createdAt" | "updatedAt", ExtArgs["result"]["asaasSubscription"]>
  export type AsaasSubscriptionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | AsaasCustomerDefaultArgs<ExtArgs>
    subscription?: boolean | AsaasSubscription$subscriptionArgs<ExtArgs>
  }
  export type AsaasSubscriptionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | AsaasCustomerDefaultArgs<ExtArgs>
    subscription?: boolean | AsaasSubscription$subscriptionArgs<ExtArgs>
  }
  export type AsaasSubscriptionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | AsaasCustomerDefaultArgs<ExtArgs>
    subscription?: boolean | AsaasSubscription$subscriptionArgs<ExtArgs>
  }

  export type $AsaasSubscriptionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AsaasSubscription"
    objects: {
      customer: Prisma.$AsaasCustomerPayload<ExtArgs>
      subscription: Prisma.$SubscriptionPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      customerId: string
      asaasId: string
      subscriptionId: number | null
      billingType: string
      status: string
      value: number
      nextDueDate: Date
      cycle: string
      description: string | null
      endDate: Date | null
      maxPayments: number | null
      externalReference: string | null
      asaasPayload: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["asaasSubscription"]>
    composites: {}
  }

  type AsaasSubscriptionGetPayload<S extends boolean | null | undefined | AsaasSubscriptionDefaultArgs> = $Result.GetResult<Prisma.$AsaasSubscriptionPayload, S>

  type AsaasSubscriptionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AsaasSubscriptionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AsaasSubscriptionCountAggregateInputType | true
    }

  export interface AsaasSubscriptionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AsaasSubscription'], meta: { name: 'AsaasSubscription' } }
    /**
     * Find zero or one AsaasSubscription that matches the filter.
     * @param {AsaasSubscriptionFindUniqueArgs} args - Arguments to find a AsaasSubscription
     * @example
     * // Get one AsaasSubscription
     * const asaasSubscription = await prisma.asaasSubscription.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AsaasSubscriptionFindUniqueArgs>(args: SelectSubset<T, AsaasSubscriptionFindUniqueArgs<ExtArgs>>): Prisma__AsaasSubscriptionClient<$Result.GetResult<Prisma.$AsaasSubscriptionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AsaasSubscription that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AsaasSubscriptionFindUniqueOrThrowArgs} args - Arguments to find a AsaasSubscription
     * @example
     * // Get one AsaasSubscription
     * const asaasSubscription = await prisma.asaasSubscription.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AsaasSubscriptionFindUniqueOrThrowArgs>(args: SelectSubset<T, AsaasSubscriptionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AsaasSubscriptionClient<$Result.GetResult<Prisma.$AsaasSubscriptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AsaasSubscription that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AsaasSubscriptionFindFirstArgs} args - Arguments to find a AsaasSubscription
     * @example
     * // Get one AsaasSubscription
     * const asaasSubscription = await prisma.asaasSubscription.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AsaasSubscriptionFindFirstArgs>(args?: SelectSubset<T, AsaasSubscriptionFindFirstArgs<ExtArgs>>): Prisma__AsaasSubscriptionClient<$Result.GetResult<Prisma.$AsaasSubscriptionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AsaasSubscription that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AsaasSubscriptionFindFirstOrThrowArgs} args - Arguments to find a AsaasSubscription
     * @example
     * // Get one AsaasSubscription
     * const asaasSubscription = await prisma.asaasSubscription.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AsaasSubscriptionFindFirstOrThrowArgs>(args?: SelectSubset<T, AsaasSubscriptionFindFirstOrThrowArgs<ExtArgs>>): Prisma__AsaasSubscriptionClient<$Result.GetResult<Prisma.$AsaasSubscriptionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AsaasSubscriptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AsaasSubscriptionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AsaasSubscriptions
     * const asaasSubscriptions = await prisma.asaasSubscription.findMany()
     * 
     * // Get first 10 AsaasSubscriptions
     * const asaasSubscriptions = await prisma.asaasSubscription.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const asaasSubscriptionWithIdOnly = await prisma.asaasSubscription.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AsaasSubscriptionFindManyArgs>(args?: SelectSubset<T, AsaasSubscriptionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AsaasSubscriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AsaasSubscription.
     * @param {AsaasSubscriptionCreateArgs} args - Arguments to create a AsaasSubscription.
     * @example
     * // Create one AsaasSubscription
     * const AsaasSubscription = await prisma.asaasSubscription.create({
     *   data: {
     *     // ... data to create a AsaasSubscription
     *   }
     * })
     * 
     */
    create<T extends AsaasSubscriptionCreateArgs>(args: SelectSubset<T, AsaasSubscriptionCreateArgs<ExtArgs>>): Prisma__AsaasSubscriptionClient<$Result.GetResult<Prisma.$AsaasSubscriptionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AsaasSubscriptions.
     * @param {AsaasSubscriptionCreateManyArgs} args - Arguments to create many AsaasSubscriptions.
     * @example
     * // Create many AsaasSubscriptions
     * const asaasSubscription = await prisma.asaasSubscription.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AsaasSubscriptionCreateManyArgs>(args?: SelectSubset<T, AsaasSubscriptionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AsaasSubscriptions and returns the data saved in the database.
     * @param {AsaasSubscriptionCreateManyAndReturnArgs} args - Arguments to create many AsaasSubscriptions.
     * @example
     * // Create many AsaasSubscriptions
     * const asaasSubscription = await prisma.asaasSubscription.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AsaasSubscriptions and only return the `id`
     * const asaasSubscriptionWithIdOnly = await prisma.asaasSubscription.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AsaasSubscriptionCreateManyAndReturnArgs>(args?: SelectSubset<T, AsaasSubscriptionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AsaasSubscriptionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AsaasSubscription.
     * @param {AsaasSubscriptionDeleteArgs} args - Arguments to delete one AsaasSubscription.
     * @example
     * // Delete one AsaasSubscription
     * const AsaasSubscription = await prisma.asaasSubscription.delete({
     *   where: {
     *     // ... filter to delete one AsaasSubscription
     *   }
     * })
     * 
     */
    delete<T extends AsaasSubscriptionDeleteArgs>(args: SelectSubset<T, AsaasSubscriptionDeleteArgs<ExtArgs>>): Prisma__AsaasSubscriptionClient<$Result.GetResult<Prisma.$AsaasSubscriptionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AsaasSubscription.
     * @param {AsaasSubscriptionUpdateArgs} args - Arguments to update one AsaasSubscription.
     * @example
     * // Update one AsaasSubscription
     * const asaasSubscription = await prisma.asaasSubscription.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AsaasSubscriptionUpdateArgs>(args: SelectSubset<T, AsaasSubscriptionUpdateArgs<ExtArgs>>): Prisma__AsaasSubscriptionClient<$Result.GetResult<Prisma.$AsaasSubscriptionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AsaasSubscriptions.
     * @param {AsaasSubscriptionDeleteManyArgs} args - Arguments to filter AsaasSubscriptions to delete.
     * @example
     * // Delete a few AsaasSubscriptions
     * const { count } = await prisma.asaasSubscription.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AsaasSubscriptionDeleteManyArgs>(args?: SelectSubset<T, AsaasSubscriptionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AsaasSubscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AsaasSubscriptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AsaasSubscriptions
     * const asaasSubscription = await prisma.asaasSubscription.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AsaasSubscriptionUpdateManyArgs>(args: SelectSubset<T, AsaasSubscriptionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AsaasSubscriptions and returns the data updated in the database.
     * @param {AsaasSubscriptionUpdateManyAndReturnArgs} args - Arguments to update many AsaasSubscriptions.
     * @example
     * // Update many AsaasSubscriptions
     * const asaasSubscription = await prisma.asaasSubscription.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AsaasSubscriptions and only return the `id`
     * const asaasSubscriptionWithIdOnly = await prisma.asaasSubscription.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AsaasSubscriptionUpdateManyAndReturnArgs>(args: SelectSubset<T, AsaasSubscriptionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AsaasSubscriptionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AsaasSubscription.
     * @param {AsaasSubscriptionUpsertArgs} args - Arguments to update or create a AsaasSubscription.
     * @example
     * // Update or create a AsaasSubscription
     * const asaasSubscription = await prisma.asaasSubscription.upsert({
     *   create: {
     *     // ... data to create a AsaasSubscription
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AsaasSubscription we want to update
     *   }
     * })
     */
    upsert<T extends AsaasSubscriptionUpsertArgs>(args: SelectSubset<T, AsaasSubscriptionUpsertArgs<ExtArgs>>): Prisma__AsaasSubscriptionClient<$Result.GetResult<Prisma.$AsaasSubscriptionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AsaasSubscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AsaasSubscriptionCountArgs} args - Arguments to filter AsaasSubscriptions to count.
     * @example
     * // Count the number of AsaasSubscriptions
     * const count = await prisma.asaasSubscription.count({
     *   where: {
     *     // ... the filter for the AsaasSubscriptions we want to count
     *   }
     * })
    **/
    count<T extends AsaasSubscriptionCountArgs>(
      args?: Subset<T, AsaasSubscriptionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AsaasSubscriptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AsaasSubscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AsaasSubscriptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AsaasSubscriptionAggregateArgs>(args: Subset<T, AsaasSubscriptionAggregateArgs>): Prisma.PrismaPromise<GetAsaasSubscriptionAggregateType<T>>

    /**
     * Group by AsaasSubscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AsaasSubscriptionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AsaasSubscriptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AsaasSubscriptionGroupByArgs['orderBy'] }
        : { orderBy?: AsaasSubscriptionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AsaasSubscriptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAsaasSubscriptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AsaasSubscription model
   */
  readonly fields: AsaasSubscriptionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AsaasSubscription.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AsaasSubscriptionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    customer<T extends AsaasCustomerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AsaasCustomerDefaultArgs<ExtArgs>>): Prisma__AsaasCustomerClient<$Result.GetResult<Prisma.$AsaasCustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    subscription<T extends AsaasSubscription$subscriptionArgs<ExtArgs> = {}>(args?: Subset<T, AsaasSubscription$subscriptionArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AsaasSubscription model
   */
  interface AsaasSubscriptionFieldRefs {
    readonly id: FieldRef<"AsaasSubscription", 'String'>
    readonly customerId: FieldRef<"AsaasSubscription", 'String'>
    readonly asaasId: FieldRef<"AsaasSubscription", 'String'>
    readonly subscriptionId: FieldRef<"AsaasSubscription", 'Int'>
    readonly billingType: FieldRef<"AsaasSubscription", 'String'>
    readonly status: FieldRef<"AsaasSubscription", 'String'>
    readonly value: FieldRef<"AsaasSubscription", 'Float'>
    readonly nextDueDate: FieldRef<"AsaasSubscription", 'DateTime'>
    readonly cycle: FieldRef<"AsaasSubscription", 'String'>
    readonly description: FieldRef<"AsaasSubscription", 'String'>
    readonly endDate: FieldRef<"AsaasSubscription", 'DateTime'>
    readonly maxPayments: FieldRef<"AsaasSubscription", 'Int'>
    readonly externalReference: FieldRef<"AsaasSubscription", 'String'>
    readonly asaasPayload: FieldRef<"AsaasSubscription", 'String'>
    readonly createdAt: FieldRef<"AsaasSubscription", 'DateTime'>
    readonly updatedAt: FieldRef<"AsaasSubscription", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AsaasSubscription findUnique
   */
  export type AsaasSubscriptionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AsaasSubscription
     */
    select?: AsaasSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AsaasSubscription
     */
    omit?: AsaasSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsaasSubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which AsaasSubscription to fetch.
     */
    where: AsaasSubscriptionWhereUniqueInput
  }

  /**
   * AsaasSubscription findUniqueOrThrow
   */
  export type AsaasSubscriptionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AsaasSubscription
     */
    select?: AsaasSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AsaasSubscription
     */
    omit?: AsaasSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsaasSubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which AsaasSubscription to fetch.
     */
    where: AsaasSubscriptionWhereUniqueInput
  }

  /**
   * AsaasSubscription findFirst
   */
  export type AsaasSubscriptionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AsaasSubscription
     */
    select?: AsaasSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AsaasSubscription
     */
    omit?: AsaasSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsaasSubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which AsaasSubscription to fetch.
     */
    where?: AsaasSubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AsaasSubscriptions to fetch.
     */
    orderBy?: AsaasSubscriptionOrderByWithRelationInput | AsaasSubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AsaasSubscriptions.
     */
    cursor?: AsaasSubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AsaasSubscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AsaasSubscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AsaasSubscriptions.
     */
    distinct?: AsaasSubscriptionScalarFieldEnum | AsaasSubscriptionScalarFieldEnum[]
  }

  /**
   * AsaasSubscription findFirstOrThrow
   */
  export type AsaasSubscriptionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AsaasSubscription
     */
    select?: AsaasSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AsaasSubscription
     */
    omit?: AsaasSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsaasSubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which AsaasSubscription to fetch.
     */
    where?: AsaasSubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AsaasSubscriptions to fetch.
     */
    orderBy?: AsaasSubscriptionOrderByWithRelationInput | AsaasSubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AsaasSubscriptions.
     */
    cursor?: AsaasSubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AsaasSubscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AsaasSubscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AsaasSubscriptions.
     */
    distinct?: AsaasSubscriptionScalarFieldEnum | AsaasSubscriptionScalarFieldEnum[]
  }

  /**
   * AsaasSubscription findMany
   */
  export type AsaasSubscriptionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AsaasSubscription
     */
    select?: AsaasSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AsaasSubscription
     */
    omit?: AsaasSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsaasSubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which AsaasSubscriptions to fetch.
     */
    where?: AsaasSubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AsaasSubscriptions to fetch.
     */
    orderBy?: AsaasSubscriptionOrderByWithRelationInput | AsaasSubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AsaasSubscriptions.
     */
    cursor?: AsaasSubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AsaasSubscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AsaasSubscriptions.
     */
    skip?: number
    distinct?: AsaasSubscriptionScalarFieldEnum | AsaasSubscriptionScalarFieldEnum[]
  }

  /**
   * AsaasSubscription create
   */
  export type AsaasSubscriptionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AsaasSubscription
     */
    select?: AsaasSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AsaasSubscription
     */
    omit?: AsaasSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsaasSubscriptionInclude<ExtArgs> | null
    /**
     * The data needed to create a AsaasSubscription.
     */
    data: XOR<AsaasSubscriptionCreateInput, AsaasSubscriptionUncheckedCreateInput>
  }

  /**
   * AsaasSubscription createMany
   */
  export type AsaasSubscriptionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AsaasSubscriptions.
     */
    data: AsaasSubscriptionCreateManyInput | AsaasSubscriptionCreateManyInput[]
  }

  /**
   * AsaasSubscription createManyAndReturn
   */
  export type AsaasSubscriptionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AsaasSubscription
     */
    select?: AsaasSubscriptionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AsaasSubscription
     */
    omit?: AsaasSubscriptionOmit<ExtArgs> | null
    /**
     * The data used to create many AsaasSubscriptions.
     */
    data: AsaasSubscriptionCreateManyInput | AsaasSubscriptionCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsaasSubscriptionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AsaasSubscription update
   */
  export type AsaasSubscriptionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AsaasSubscription
     */
    select?: AsaasSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AsaasSubscription
     */
    omit?: AsaasSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsaasSubscriptionInclude<ExtArgs> | null
    /**
     * The data needed to update a AsaasSubscription.
     */
    data: XOR<AsaasSubscriptionUpdateInput, AsaasSubscriptionUncheckedUpdateInput>
    /**
     * Choose, which AsaasSubscription to update.
     */
    where: AsaasSubscriptionWhereUniqueInput
  }

  /**
   * AsaasSubscription updateMany
   */
  export type AsaasSubscriptionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AsaasSubscriptions.
     */
    data: XOR<AsaasSubscriptionUpdateManyMutationInput, AsaasSubscriptionUncheckedUpdateManyInput>
    /**
     * Filter which AsaasSubscriptions to update
     */
    where?: AsaasSubscriptionWhereInput
    /**
     * Limit how many AsaasSubscriptions to update.
     */
    limit?: number
  }

  /**
   * AsaasSubscription updateManyAndReturn
   */
  export type AsaasSubscriptionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AsaasSubscription
     */
    select?: AsaasSubscriptionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AsaasSubscription
     */
    omit?: AsaasSubscriptionOmit<ExtArgs> | null
    /**
     * The data used to update AsaasSubscriptions.
     */
    data: XOR<AsaasSubscriptionUpdateManyMutationInput, AsaasSubscriptionUncheckedUpdateManyInput>
    /**
     * Filter which AsaasSubscriptions to update
     */
    where?: AsaasSubscriptionWhereInput
    /**
     * Limit how many AsaasSubscriptions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsaasSubscriptionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AsaasSubscription upsert
   */
  export type AsaasSubscriptionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AsaasSubscription
     */
    select?: AsaasSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AsaasSubscription
     */
    omit?: AsaasSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsaasSubscriptionInclude<ExtArgs> | null
    /**
     * The filter to search for the AsaasSubscription to update in case it exists.
     */
    where: AsaasSubscriptionWhereUniqueInput
    /**
     * In case the AsaasSubscription found by the `where` argument doesn't exist, create a new AsaasSubscription with this data.
     */
    create: XOR<AsaasSubscriptionCreateInput, AsaasSubscriptionUncheckedCreateInput>
    /**
     * In case the AsaasSubscription was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AsaasSubscriptionUpdateInput, AsaasSubscriptionUncheckedUpdateInput>
  }

  /**
   * AsaasSubscription delete
   */
  export type AsaasSubscriptionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AsaasSubscription
     */
    select?: AsaasSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AsaasSubscription
     */
    omit?: AsaasSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsaasSubscriptionInclude<ExtArgs> | null
    /**
     * Filter which AsaasSubscription to delete.
     */
    where: AsaasSubscriptionWhereUniqueInput
  }

  /**
   * AsaasSubscription deleteMany
   */
  export type AsaasSubscriptionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AsaasSubscriptions to delete
     */
    where?: AsaasSubscriptionWhereInput
    /**
     * Limit how many AsaasSubscriptions to delete.
     */
    limit?: number
  }

  /**
   * AsaasSubscription.subscription
   */
  export type AsaasSubscription$subscriptionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    where?: SubscriptionWhereInput
  }

  /**
   * AsaasSubscription without action
   */
  export type AsaasSubscriptionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AsaasSubscription
     */
    select?: AsaasSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AsaasSubscription
     */
    omit?: AsaasSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsaasSubscriptionInclude<ExtArgs> | null
  }


  /**
   * Model AsaasWebhook
   */

  export type AggregateAsaasWebhook = {
    _count: AsaasWebhookCountAggregateOutputType | null
    _min: AsaasWebhookMinAggregateOutputType | null
    _max: AsaasWebhookMaxAggregateOutputType | null
  }

  export type AsaasWebhookMinAggregateOutputType = {
    id: string | null
    event: string | null
    object: string | null
    objectId: string | null
    payload: string | null
    processed: boolean | null
    processedAt: Date | null
    errorLog: string | null
    createdAt: Date | null
  }

  export type AsaasWebhookMaxAggregateOutputType = {
    id: string | null
    event: string | null
    object: string | null
    objectId: string | null
    payload: string | null
    processed: boolean | null
    processedAt: Date | null
    errorLog: string | null
    createdAt: Date | null
  }

  export type AsaasWebhookCountAggregateOutputType = {
    id: number
    event: number
    object: number
    objectId: number
    payload: number
    processed: number
    processedAt: number
    errorLog: number
    createdAt: number
    _all: number
  }


  export type AsaasWebhookMinAggregateInputType = {
    id?: true
    event?: true
    object?: true
    objectId?: true
    payload?: true
    processed?: true
    processedAt?: true
    errorLog?: true
    createdAt?: true
  }

  export type AsaasWebhookMaxAggregateInputType = {
    id?: true
    event?: true
    object?: true
    objectId?: true
    payload?: true
    processed?: true
    processedAt?: true
    errorLog?: true
    createdAt?: true
  }

  export type AsaasWebhookCountAggregateInputType = {
    id?: true
    event?: true
    object?: true
    objectId?: true
    payload?: true
    processed?: true
    processedAt?: true
    errorLog?: true
    createdAt?: true
    _all?: true
  }

  export type AsaasWebhookAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AsaasWebhook to aggregate.
     */
    where?: AsaasWebhookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AsaasWebhooks to fetch.
     */
    orderBy?: AsaasWebhookOrderByWithRelationInput | AsaasWebhookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AsaasWebhookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AsaasWebhooks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AsaasWebhooks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AsaasWebhooks
    **/
    _count?: true | AsaasWebhookCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AsaasWebhookMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AsaasWebhookMaxAggregateInputType
  }

  export type GetAsaasWebhookAggregateType<T extends AsaasWebhookAggregateArgs> = {
        [P in keyof T & keyof AggregateAsaasWebhook]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAsaasWebhook[P]>
      : GetScalarType<T[P], AggregateAsaasWebhook[P]>
  }




  export type AsaasWebhookGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AsaasWebhookWhereInput
    orderBy?: AsaasWebhookOrderByWithAggregationInput | AsaasWebhookOrderByWithAggregationInput[]
    by: AsaasWebhookScalarFieldEnum[] | AsaasWebhookScalarFieldEnum
    having?: AsaasWebhookScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AsaasWebhookCountAggregateInputType | true
    _min?: AsaasWebhookMinAggregateInputType
    _max?: AsaasWebhookMaxAggregateInputType
  }

  export type AsaasWebhookGroupByOutputType = {
    id: string
    event: string
    object: string
    objectId: string
    payload: string
    processed: boolean
    processedAt: Date | null
    errorLog: string | null
    createdAt: Date
    _count: AsaasWebhookCountAggregateOutputType | null
    _min: AsaasWebhookMinAggregateOutputType | null
    _max: AsaasWebhookMaxAggregateOutputType | null
  }

  type GetAsaasWebhookGroupByPayload<T extends AsaasWebhookGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AsaasWebhookGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AsaasWebhookGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AsaasWebhookGroupByOutputType[P]>
            : GetScalarType<T[P], AsaasWebhookGroupByOutputType[P]>
        }
      >
    >


  export type AsaasWebhookSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    event?: boolean
    object?: boolean
    objectId?: boolean
    payload?: boolean
    processed?: boolean
    processedAt?: boolean
    errorLog?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["asaasWebhook"]>

  export type AsaasWebhookSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    event?: boolean
    object?: boolean
    objectId?: boolean
    payload?: boolean
    processed?: boolean
    processedAt?: boolean
    errorLog?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["asaasWebhook"]>

  export type AsaasWebhookSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    event?: boolean
    object?: boolean
    objectId?: boolean
    payload?: boolean
    processed?: boolean
    processedAt?: boolean
    errorLog?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["asaasWebhook"]>

  export type AsaasWebhookSelectScalar = {
    id?: boolean
    event?: boolean
    object?: boolean
    objectId?: boolean
    payload?: boolean
    processed?: boolean
    processedAt?: boolean
    errorLog?: boolean
    createdAt?: boolean
  }

  export type AsaasWebhookOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "event" | "object" | "objectId" | "payload" | "processed" | "processedAt" | "errorLog" | "createdAt", ExtArgs["result"]["asaasWebhook"]>

  export type $AsaasWebhookPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AsaasWebhook"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      event: string
      object: string
      objectId: string
      payload: string
      processed: boolean
      processedAt: Date | null
      errorLog: string | null
      createdAt: Date
    }, ExtArgs["result"]["asaasWebhook"]>
    composites: {}
  }

  type AsaasWebhookGetPayload<S extends boolean | null | undefined | AsaasWebhookDefaultArgs> = $Result.GetResult<Prisma.$AsaasWebhookPayload, S>

  type AsaasWebhookCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AsaasWebhookFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AsaasWebhookCountAggregateInputType | true
    }

  export interface AsaasWebhookDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AsaasWebhook'], meta: { name: 'AsaasWebhook' } }
    /**
     * Find zero or one AsaasWebhook that matches the filter.
     * @param {AsaasWebhookFindUniqueArgs} args - Arguments to find a AsaasWebhook
     * @example
     * // Get one AsaasWebhook
     * const asaasWebhook = await prisma.asaasWebhook.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AsaasWebhookFindUniqueArgs>(args: SelectSubset<T, AsaasWebhookFindUniqueArgs<ExtArgs>>): Prisma__AsaasWebhookClient<$Result.GetResult<Prisma.$AsaasWebhookPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AsaasWebhook that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AsaasWebhookFindUniqueOrThrowArgs} args - Arguments to find a AsaasWebhook
     * @example
     * // Get one AsaasWebhook
     * const asaasWebhook = await prisma.asaasWebhook.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AsaasWebhookFindUniqueOrThrowArgs>(args: SelectSubset<T, AsaasWebhookFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AsaasWebhookClient<$Result.GetResult<Prisma.$AsaasWebhookPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AsaasWebhook that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AsaasWebhookFindFirstArgs} args - Arguments to find a AsaasWebhook
     * @example
     * // Get one AsaasWebhook
     * const asaasWebhook = await prisma.asaasWebhook.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AsaasWebhookFindFirstArgs>(args?: SelectSubset<T, AsaasWebhookFindFirstArgs<ExtArgs>>): Prisma__AsaasWebhookClient<$Result.GetResult<Prisma.$AsaasWebhookPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AsaasWebhook that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AsaasWebhookFindFirstOrThrowArgs} args - Arguments to find a AsaasWebhook
     * @example
     * // Get one AsaasWebhook
     * const asaasWebhook = await prisma.asaasWebhook.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AsaasWebhookFindFirstOrThrowArgs>(args?: SelectSubset<T, AsaasWebhookFindFirstOrThrowArgs<ExtArgs>>): Prisma__AsaasWebhookClient<$Result.GetResult<Prisma.$AsaasWebhookPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AsaasWebhooks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AsaasWebhookFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AsaasWebhooks
     * const asaasWebhooks = await prisma.asaasWebhook.findMany()
     * 
     * // Get first 10 AsaasWebhooks
     * const asaasWebhooks = await prisma.asaasWebhook.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const asaasWebhookWithIdOnly = await prisma.asaasWebhook.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AsaasWebhookFindManyArgs>(args?: SelectSubset<T, AsaasWebhookFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AsaasWebhookPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AsaasWebhook.
     * @param {AsaasWebhookCreateArgs} args - Arguments to create a AsaasWebhook.
     * @example
     * // Create one AsaasWebhook
     * const AsaasWebhook = await prisma.asaasWebhook.create({
     *   data: {
     *     // ... data to create a AsaasWebhook
     *   }
     * })
     * 
     */
    create<T extends AsaasWebhookCreateArgs>(args: SelectSubset<T, AsaasWebhookCreateArgs<ExtArgs>>): Prisma__AsaasWebhookClient<$Result.GetResult<Prisma.$AsaasWebhookPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AsaasWebhooks.
     * @param {AsaasWebhookCreateManyArgs} args - Arguments to create many AsaasWebhooks.
     * @example
     * // Create many AsaasWebhooks
     * const asaasWebhook = await prisma.asaasWebhook.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AsaasWebhookCreateManyArgs>(args?: SelectSubset<T, AsaasWebhookCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AsaasWebhooks and returns the data saved in the database.
     * @param {AsaasWebhookCreateManyAndReturnArgs} args - Arguments to create many AsaasWebhooks.
     * @example
     * // Create many AsaasWebhooks
     * const asaasWebhook = await prisma.asaasWebhook.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AsaasWebhooks and only return the `id`
     * const asaasWebhookWithIdOnly = await prisma.asaasWebhook.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AsaasWebhookCreateManyAndReturnArgs>(args?: SelectSubset<T, AsaasWebhookCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AsaasWebhookPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AsaasWebhook.
     * @param {AsaasWebhookDeleteArgs} args - Arguments to delete one AsaasWebhook.
     * @example
     * // Delete one AsaasWebhook
     * const AsaasWebhook = await prisma.asaasWebhook.delete({
     *   where: {
     *     // ... filter to delete one AsaasWebhook
     *   }
     * })
     * 
     */
    delete<T extends AsaasWebhookDeleteArgs>(args: SelectSubset<T, AsaasWebhookDeleteArgs<ExtArgs>>): Prisma__AsaasWebhookClient<$Result.GetResult<Prisma.$AsaasWebhookPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AsaasWebhook.
     * @param {AsaasWebhookUpdateArgs} args - Arguments to update one AsaasWebhook.
     * @example
     * // Update one AsaasWebhook
     * const asaasWebhook = await prisma.asaasWebhook.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AsaasWebhookUpdateArgs>(args: SelectSubset<T, AsaasWebhookUpdateArgs<ExtArgs>>): Prisma__AsaasWebhookClient<$Result.GetResult<Prisma.$AsaasWebhookPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AsaasWebhooks.
     * @param {AsaasWebhookDeleteManyArgs} args - Arguments to filter AsaasWebhooks to delete.
     * @example
     * // Delete a few AsaasWebhooks
     * const { count } = await prisma.asaasWebhook.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AsaasWebhookDeleteManyArgs>(args?: SelectSubset<T, AsaasWebhookDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AsaasWebhooks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AsaasWebhookUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AsaasWebhooks
     * const asaasWebhook = await prisma.asaasWebhook.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AsaasWebhookUpdateManyArgs>(args: SelectSubset<T, AsaasWebhookUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AsaasWebhooks and returns the data updated in the database.
     * @param {AsaasWebhookUpdateManyAndReturnArgs} args - Arguments to update many AsaasWebhooks.
     * @example
     * // Update many AsaasWebhooks
     * const asaasWebhook = await prisma.asaasWebhook.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AsaasWebhooks and only return the `id`
     * const asaasWebhookWithIdOnly = await prisma.asaasWebhook.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AsaasWebhookUpdateManyAndReturnArgs>(args: SelectSubset<T, AsaasWebhookUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AsaasWebhookPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AsaasWebhook.
     * @param {AsaasWebhookUpsertArgs} args - Arguments to update or create a AsaasWebhook.
     * @example
     * // Update or create a AsaasWebhook
     * const asaasWebhook = await prisma.asaasWebhook.upsert({
     *   create: {
     *     // ... data to create a AsaasWebhook
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AsaasWebhook we want to update
     *   }
     * })
     */
    upsert<T extends AsaasWebhookUpsertArgs>(args: SelectSubset<T, AsaasWebhookUpsertArgs<ExtArgs>>): Prisma__AsaasWebhookClient<$Result.GetResult<Prisma.$AsaasWebhookPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AsaasWebhooks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AsaasWebhookCountArgs} args - Arguments to filter AsaasWebhooks to count.
     * @example
     * // Count the number of AsaasWebhooks
     * const count = await prisma.asaasWebhook.count({
     *   where: {
     *     // ... the filter for the AsaasWebhooks we want to count
     *   }
     * })
    **/
    count<T extends AsaasWebhookCountArgs>(
      args?: Subset<T, AsaasWebhookCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AsaasWebhookCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AsaasWebhook.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AsaasWebhookAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AsaasWebhookAggregateArgs>(args: Subset<T, AsaasWebhookAggregateArgs>): Prisma.PrismaPromise<GetAsaasWebhookAggregateType<T>>

    /**
     * Group by AsaasWebhook.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AsaasWebhookGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AsaasWebhookGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AsaasWebhookGroupByArgs['orderBy'] }
        : { orderBy?: AsaasWebhookGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AsaasWebhookGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAsaasWebhookGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AsaasWebhook model
   */
  readonly fields: AsaasWebhookFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AsaasWebhook.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AsaasWebhookClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AsaasWebhook model
   */
  interface AsaasWebhookFieldRefs {
    readonly id: FieldRef<"AsaasWebhook", 'String'>
    readonly event: FieldRef<"AsaasWebhook", 'String'>
    readonly object: FieldRef<"AsaasWebhook", 'String'>
    readonly objectId: FieldRef<"AsaasWebhook", 'String'>
    readonly payload: FieldRef<"AsaasWebhook", 'String'>
    readonly processed: FieldRef<"AsaasWebhook", 'Boolean'>
    readonly processedAt: FieldRef<"AsaasWebhook", 'DateTime'>
    readonly errorLog: FieldRef<"AsaasWebhook", 'String'>
    readonly createdAt: FieldRef<"AsaasWebhook", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AsaasWebhook findUnique
   */
  export type AsaasWebhookFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AsaasWebhook
     */
    select?: AsaasWebhookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AsaasWebhook
     */
    omit?: AsaasWebhookOmit<ExtArgs> | null
    /**
     * Filter, which AsaasWebhook to fetch.
     */
    where: AsaasWebhookWhereUniqueInput
  }

  /**
   * AsaasWebhook findUniqueOrThrow
   */
  export type AsaasWebhookFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AsaasWebhook
     */
    select?: AsaasWebhookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AsaasWebhook
     */
    omit?: AsaasWebhookOmit<ExtArgs> | null
    /**
     * Filter, which AsaasWebhook to fetch.
     */
    where: AsaasWebhookWhereUniqueInput
  }

  /**
   * AsaasWebhook findFirst
   */
  export type AsaasWebhookFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AsaasWebhook
     */
    select?: AsaasWebhookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AsaasWebhook
     */
    omit?: AsaasWebhookOmit<ExtArgs> | null
    /**
     * Filter, which AsaasWebhook to fetch.
     */
    where?: AsaasWebhookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AsaasWebhooks to fetch.
     */
    orderBy?: AsaasWebhookOrderByWithRelationInput | AsaasWebhookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AsaasWebhooks.
     */
    cursor?: AsaasWebhookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AsaasWebhooks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AsaasWebhooks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AsaasWebhooks.
     */
    distinct?: AsaasWebhookScalarFieldEnum | AsaasWebhookScalarFieldEnum[]
  }

  /**
   * AsaasWebhook findFirstOrThrow
   */
  export type AsaasWebhookFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AsaasWebhook
     */
    select?: AsaasWebhookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AsaasWebhook
     */
    omit?: AsaasWebhookOmit<ExtArgs> | null
    /**
     * Filter, which AsaasWebhook to fetch.
     */
    where?: AsaasWebhookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AsaasWebhooks to fetch.
     */
    orderBy?: AsaasWebhookOrderByWithRelationInput | AsaasWebhookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AsaasWebhooks.
     */
    cursor?: AsaasWebhookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AsaasWebhooks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AsaasWebhooks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AsaasWebhooks.
     */
    distinct?: AsaasWebhookScalarFieldEnum | AsaasWebhookScalarFieldEnum[]
  }

  /**
   * AsaasWebhook findMany
   */
  export type AsaasWebhookFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AsaasWebhook
     */
    select?: AsaasWebhookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AsaasWebhook
     */
    omit?: AsaasWebhookOmit<ExtArgs> | null
    /**
     * Filter, which AsaasWebhooks to fetch.
     */
    where?: AsaasWebhookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AsaasWebhooks to fetch.
     */
    orderBy?: AsaasWebhookOrderByWithRelationInput | AsaasWebhookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AsaasWebhooks.
     */
    cursor?: AsaasWebhookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AsaasWebhooks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AsaasWebhooks.
     */
    skip?: number
    distinct?: AsaasWebhookScalarFieldEnum | AsaasWebhookScalarFieldEnum[]
  }

  /**
   * AsaasWebhook create
   */
  export type AsaasWebhookCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AsaasWebhook
     */
    select?: AsaasWebhookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AsaasWebhook
     */
    omit?: AsaasWebhookOmit<ExtArgs> | null
    /**
     * The data needed to create a AsaasWebhook.
     */
    data: XOR<AsaasWebhookCreateInput, AsaasWebhookUncheckedCreateInput>
  }

  /**
   * AsaasWebhook createMany
   */
  export type AsaasWebhookCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AsaasWebhooks.
     */
    data: AsaasWebhookCreateManyInput | AsaasWebhookCreateManyInput[]
  }

  /**
   * AsaasWebhook createManyAndReturn
   */
  export type AsaasWebhookCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AsaasWebhook
     */
    select?: AsaasWebhookSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AsaasWebhook
     */
    omit?: AsaasWebhookOmit<ExtArgs> | null
    /**
     * The data used to create many AsaasWebhooks.
     */
    data: AsaasWebhookCreateManyInput | AsaasWebhookCreateManyInput[]
  }

  /**
   * AsaasWebhook update
   */
  export type AsaasWebhookUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AsaasWebhook
     */
    select?: AsaasWebhookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AsaasWebhook
     */
    omit?: AsaasWebhookOmit<ExtArgs> | null
    /**
     * The data needed to update a AsaasWebhook.
     */
    data: XOR<AsaasWebhookUpdateInput, AsaasWebhookUncheckedUpdateInput>
    /**
     * Choose, which AsaasWebhook to update.
     */
    where: AsaasWebhookWhereUniqueInput
  }

  /**
   * AsaasWebhook updateMany
   */
  export type AsaasWebhookUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AsaasWebhooks.
     */
    data: XOR<AsaasWebhookUpdateManyMutationInput, AsaasWebhookUncheckedUpdateManyInput>
    /**
     * Filter which AsaasWebhooks to update
     */
    where?: AsaasWebhookWhereInput
    /**
     * Limit how many AsaasWebhooks to update.
     */
    limit?: number
  }

  /**
   * AsaasWebhook updateManyAndReturn
   */
  export type AsaasWebhookUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AsaasWebhook
     */
    select?: AsaasWebhookSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AsaasWebhook
     */
    omit?: AsaasWebhookOmit<ExtArgs> | null
    /**
     * The data used to update AsaasWebhooks.
     */
    data: XOR<AsaasWebhookUpdateManyMutationInput, AsaasWebhookUncheckedUpdateManyInput>
    /**
     * Filter which AsaasWebhooks to update
     */
    where?: AsaasWebhookWhereInput
    /**
     * Limit how many AsaasWebhooks to update.
     */
    limit?: number
  }

  /**
   * AsaasWebhook upsert
   */
  export type AsaasWebhookUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AsaasWebhook
     */
    select?: AsaasWebhookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AsaasWebhook
     */
    omit?: AsaasWebhookOmit<ExtArgs> | null
    /**
     * The filter to search for the AsaasWebhook to update in case it exists.
     */
    where: AsaasWebhookWhereUniqueInput
    /**
     * In case the AsaasWebhook found by the `where` argument doesn't exist, create a new AsaasWebhook with this data.
     */
    create: XOR<AsaasWebhookCreateInput, AsaasWebhookUncheckedCreateInput>
    /**
     * In case the AsaasWebhook was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AsaasWebhookUpdateInput, AsaasWebhookUncheckedUpdateInput>
  }

  /**
   * AsaasWebhook delete
   */
  export type AsaasWebhookDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AsaasWebhook
     */
    select?: AsaasWebhookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AsaasWebhook
     */
    omit?: AsaasWebhookOmit<ExtArgs> | null
    /**
     * Filter which AsaasWebhook to delete.
     */
    where: AsaasWebhookWhereUniqueInput
  }

  /**
   * AsaasWebhook deleteMany
   */
  export type AsaasWebhookDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AsaasWebhooks to delete
     */
    where?: AsaasWebhookWhereInput
    /**
     * Limit how many AsaasWebhooks to delete.
     */
    limit?: number
  }

  /**
   * AsaasWebhook without action
   */
  export type AsaasWebhookDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AsaasWebhook
     */
    select?: AsaasWebhookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AsaasWebhook
     */
    omit?: AsaasWebhookOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    emailVerified: 'emailVerified',
    image: 'image',
    role: 'role',
    asaasCustomerId: 'asaasCustomerId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    expiresAt: 'expiresAt',
    token: 'token',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    ipAddress: 'ipAddress',
    userAgent: 'userAgent',
    userId: 'userId'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const AccountScalarFieldEnum: {
    id: 'id',
    accountId: 'accountId',
    providerId: 'providerId',
    userId: 'userId',
    accessToken: 'accessToken',
    refreshToken: 'refreshToken',
    idToken: 'idToken',
    accessTokenExpiresAt: 'accessTokenExpiresAt',
    refreshTokenExpiresAt: 'refreshTokenExpiresAt',
    scope: 'scope',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const VerificationScalarFieldEnum: {
    id: 'id',
    identifier: 'identifier',
    value: 'value',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type VerificationScalarFieldEnum = (typeof VerificationScalarFieldEnum)[keyof typeof VerificationScalarFieldEnum]


  export const DeckScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    title: 'title',
    description: 'description',
    coverUrl: 'coverUrl',
    isPublic: 'isPublic',
    priceCents: 'priceCents',
    deletedAt: 'deletedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DeckScalarFieldEnum = (typeof DeckScalarFieldEnum)[keyof typeof DeckScalarFieldEnum]


  export const FlashcardScalarFieldEnum: {
    id: 'id',
    deckId: 'deckId',
    frontText: 'frontText',
    backText: 'backText',
    orderIndex: 'orderIndex',
    deletedAt: 'deletedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FlashcardScalarFieldEnum = (typeof FlashcardScalarFieldEnum)[keyof typeof FlashcardScalarFieldEnum]


  export const PurchaseScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    deckId: 'deckId',
    amountCents: 'amountCents',
    status: 'status',
    paymentMethod: 'paymentMethod',
    asaasPaymentId: 'asaasPaymentId',
    asaasInvoiceId: 'asaasInvoiceId',
    asaasPayload: 'asaasPayload',
    confirmedAt: 'confirmedAt',
    createdAt: 'createdAt'
  };

  export type PurchaseScalarFieldEnum = (typeof PurchaseScalarFieldEnum)[keyof typeof PurchaseScalarFieldEnum]


  export const SubscriptionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    status: 'status',
    planName: 'planName',
    priceCents: 'priceCents',
    asaasSubscriptionId: 'asaasSubscriptionId',
    nextDueDate: 'nextDueDate',
    lastPaymentDate: 'lastPaymentDate',
    currentPeriodEnd: 'currentPeriodEnd',
    createdAt: 'createdAt'
  };

  export type SubscriptionScalarFieldEnum = (typeof SubscriptionScalarFieldEnum)[keyof typeof SubscriptionScalarFieldEnum]


  export const FavoriteScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    deckId: 'deckId',
    createdAt: 'createdAt'
  };

  export type FavoriteScalarFieldEnum = (typeof FavoriteScalarFieldEnum)[keyof typeof FavoriteScalarFieldEnum]


  export const AsaasCustomerScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    asaasId: 'asaasId',
    name: 'name',
    cpfCnpj: 'cpfCnpj',
    email: 'email',
    phone: 'phone',
    mobilePhone: 'mobilePhone',
    postalCode: 'postalCode',
    address: 'address',
    addressNumber: 'addressNumber',
    complement: 'complement',
    province: 'province',
    externalReference: 'externalReference',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AsaasCustomerScalarFieldEnum = (typeof AsaasCustomerScalarFieldEnum)[keyof typeof AsaasCustomerScalarFieldEnum]


  export const AsaasPaymentScalarFieldEnum: {
    id: 'id',
    customerId: 'customerId',
    asaasId: 'asaasId',
    purchaseId: 'purchaseId',
    billingType: 'billingType',
    status: 'status',
    value: 'value',
    dueDate: 'dueDate',
    originalDueDate: 'originalDueDate',
    description: 'description',
    externalReference: 'externalReference',
    invoiceUrl: 'invoiceUrl',
    bankSlipUrl: 'bankSlipUrl',
    pixQrCode: 'pixQrCode',
    creditCardPaymentLink: 'creditCardPaymentLink',
    confirmedDate: 'confirmedDate',
    paymentDate: 'paymentDate',
    clientPaymentDate: 'clientPaymentDate',
    netValue: 'netValue',
    originalValue: 'originalValue',
    interestValue: 'interestValue',
    discountValue: 'discountValue',
    fineValue: 'fineValue',
    asaasPayload: 'asaasPayload',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AsaasPaymentScalarFieldEnum = (typeof AsaasPaymentScalarFieldEnum)[keyof typeof AsaasPaymentScalarFieldEnum]


  export const AsaasSubscriptionScalarFieldEnum: {
    id: 'id',
    customerId: 'customerId',
    asaasId: 'asaasId',
    subscriptionId: 'subscriptionId',
    billingType: 'billingType',
    status: 'status',
    value: 'value',
    nextDueDate: 'nextDueDate',
    cycle: 'cycle',
    description: 'description',
    endDate: 'endDate',
    maxPayments: 'maxPayments',
    externalReference: 'externalReference',
    asaasPayload: 'asaasPayload',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AsaasSubscriptionScalarFieldEnum = (typeof AsaasSubscriptionScalarFieldEnum)[keyof typeof AsaasSubscriptionScalarFieldEnum]


  export const AsaasWebhookScalarFieldEnum: {
    id: 'id',
    event: 'event',
    object: 'object',
    objectId: 'objectId',
    payload: 'payload',
    processed: 'processed',
    processedAt: 'processedAt',
    errorLog: 'errorLog',
    createdAt: 'createdAt'
  };

  export type AsaasWebhookScalarFieldEnum = (typeof AsaasWebhookScalarFieldEnum)[keyof typeof AsaasWebhookScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    emailVerified?: BoolFilter<"User"> | boolean
    image?: StringNullableFilter<"User"> | string | null
    role?: StringFilter<"User"> | string
    asaasCustomerId?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    sessions?: SessionListRelationFilter
    accounts?: AccountListRelationFilter
    decks?: DeckListRelationFilter
    purchases?: PurchaseListRelationFilter
    subscriptions?: SubscriptionListRelationFilter
    favorites?: FavoriteListRelationFilter
    asaasCustomer?: XOR<AsaasCustomerNullableScalarRelationFilter, AsaasCustomerWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrderInput | SortOrder
    role?: SortOrder
    asaasCustomerId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    sessions?: SessionOrderByRelationAggregateInput
    accounts?: AccountOrderByRelationAggregateInput
    decks?: DeckOrderByRelationAggregateInput
    purchases?: PurchaseOrderByRelationAggregateInput
    subscriptions?: SubscriptionOrderByRelationAggregateInput
    favorites?: FavoriteOrderByRelationAggregateInput
    asaasCustomer?: AsaasCustomerOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    asaasCustomerId?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    emailVerified?: BoolFilter<"User"> | boolean
    image?: StringNullableFilter<"User"> | string | null
    role?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    sessions?: SessionListRelationFilter
    accounts?: AccountListRelationFilter
    decks?: DeckListRelationFilter
    purchases?: PurchaseListRelationFilter
    subscriptions?: SubscriptionListRelationFilter
    favorites?: FavoriteListRelationFilter
    asaasCustomer?: XOR<AsaasCustomerNullableScalarRelationFilter, AsaasCustomerWhereInput> | null
  }, "id" | "asaasCustomerId" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrderInput | SortOrder
    role?: SortOrder
    asaasCustomerId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    emailVerified?: BoolWithAggregatesFilter<"User"> | boolean
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: StringWithAggregatesFilter<"User"> | string
    asaasCustomerId?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    token?: StringFilter<"Session"> | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    ipAddress?: StringNullableFilter<"Session"> | string | null
    userAgent?: StringNullableFilter<"Session"> | string | null
    userId?: StringFilter<"Session"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    ipAddress?: StringNullableFilter<"Session"> | string | null
    userAgent?: StringNullableFilter<"Session"> | string | null
    userId?: StringFilter<"Session"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "token">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    userId?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    token?: StringWithAggregatesFilter<"Session"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    ipAddress?: StringNullableWithAggregatesFilter<"Session"> | string | null
    userAgent?: StringNullableWithAggregatesFilter<"Session"> | string | null
    userId?: StringWithAggregatesFilter<"Session"> | string
  }

  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    id?: StringFilter<"Account"> | string
    accountId?: StringFilter<"Account"> | string
    providerId?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    accessToken?: StringNullableFilter<"Account"> | string | null
    refreshToken?: StringNullableFilter<"Account"> | string | null
    idToken?: StringNullableFilter<"Account"> | string | null
    accessTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    refreshTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    password?: StringNullableFilter<"Account"> | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrderInput | SortOrder
    refreshToken?: SortOrderInput | SortOrder
    idToken?: SortOrderInput | SortOrder
    accessTokenExpiresAt?: SortOrderInput | SortOrder
    refreshTokenExpiresAt?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    accountId?: StringFilter<"Account"> | string
    providerId?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    accessToken?: StringNullableFilter<"Account"> | string | null
    refreshToken?: StringNullableFilter<"Account"> | string | null
    idToken?: StringNullableFilter<"Account"> | string | null
    accessTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    refreshTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    password?: StringNullableFilter<"Account"> | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrderInput | SortOrder
    refreshToken?: SortOrderInput | SortOrder
    idToken?: SortOrderInput | SortOrder
    accessTokenExpiresAt?: SortOrderInput | SortOrder
    refreshTokenExpiresAt?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AccountCountOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Account"> | string
    accountId?: StringWithAggregatesFilter<"Account"> | string
    providerId?: StringWithAggregatesFilter<"Account"> | string
    userId?: StringWithAggregatesFilter<"Account"> | string
    accessToken?: StringNullableWithAggregatesFilter<"Account"> | string | null
    refreshToken?: StringNullableWithAggregatesFilter<"Account"> | string | null
    idToken?: StringNullableWithAggregatesFilter<"Account"> | string | null
    accessTokenExpiresAt?: DateTimeNullableWithAggregatesFilter<"Account"> | Date | string | null
    refreshTokenExpiresAt?: DateTimeNullableWithAggregatesFilter<"Account"> | Date | string | null
    scope?: StringNullableWithAggregatesFilter<"Account"> | string | null
    password?: StringNullableWithAggregatesFilter<"Account"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string
  }

  export type VerificationWhereInput = {
    AND?: VerificationWhereInput | VerificationWhereInput[]
    OR?: VerificationWhereInput[]
    NOT?: VerificationWhereInput | VerificationWhereInput[]
    id?: StringFilter<"Verification"> | string
    identifier?: StringFilter<"Verification"> | string
    value?: StringFilter<"Verification"> | string
    expiresAt?: DateTimeFilter<"Verification"> | Date | string
    createdAt?: DateTimeNullableFilter<"Verification"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"Verification"> | Date | string | null
  }

  export type VerificationOrderByWithRelationInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
  }

  export type VerificationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: VerificationWhereInput | VerificationWhereInput[]
    OR?: VerificationWhereInput[]
    NOT?: VerificationWhereInput | VerificationWhereInput[]
    identifier?: StringFilter<"Verification"> | string
    value?: StringFilter<"Verification"> | string
    expiresAt?: DateTimeFilter<"Verification"> | Date | string
    createdAt?: DateTimeNullableFilter<"Verification"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"Verification"> | Date | string | null
  }, "id">

  export type VerificationOrderByWithAggregationInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: VerificationCountOrderByAggregateInput
    _max?: VerificationMaxOrderByAggregateInput
    _min?: VerificationMinOrderByAggregateInput
  }

  export type VerificationScalarWhereWithAggregatesInput = {
    AND?: VerificationScalarWhereWithAggregatesInput | VerificationScalarWhereWithAggregatesInput[]
    OR?: VerificationScalarWhereWithAggregatesInput[]
    NOT?: VerificationScalarWhereWithAggregatesInput | VerificationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Verification"> | string
    identifier?: StringWithAggregatesFilter<"Verification"> | string
    value?: StringWithAggregatesFilter<"Verification"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"Verification"> | Date | string
    createdAt?: DateTimeNullableWithAggregatesFilter<"Verification"> | Date | string | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Verification"> | Date | string | null
  }

  export type DeckWhereInput = {
    AND?: DeckWhereInput | DeckWhereInput[]
    OR?: DeckWhereInput[]
    NOT?: DeckWhereInput | DeckWhereInput[]
    id?: IntFilter<"Deck"> | number
    userId?: StringFilter<"Deck"> | string
    title?: StringFilter<"Deck"> | string
    description?: StringNullableFilter<"Deck"> | string | null
    coverUrl?: StringNullableFilter<"Deck"> | string | null
    isPublic?: BoolFilter<"Deck"> | boolean
    priceCents?: IntFilter<"Deck"> | number
    deletedAt?: DateTimeNullableFilter<"Deck"> | Date | string | null
    createdAt?: DateTimeFilter<"Deck"> | Date | string
    updatedAt?: DateTimeFilter<"Deck"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    flashcards?: FlashcardListRelationFilter
    purchases?: PurchaseListRelationFilter
    favorites?: FavoriteListRelationFilter
  }

  export type DeckOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    coverUrl?: SortOrderInput | SortOrder
    isPublic?: SortOrder
    priceCents?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    flashcards?: FlashcardOrderByRelationAggregateInput
    purchases?: PurchaseOrderByRelationAggregateInput
    favorites?: FavoriteOrderByRelationAggregateInput
  }

  export type DeckWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DeckWhereInput | DeckWhereInput[]
    OR?: DeckWhereInput[]
    NOT?: DeckWhereInput | DeckWhereInput[]
    userId?: StringFilter<"Deck"> | string
    title?: StringFilter<"Deck"> | string
    description?: StringNullableFilter<"Deck"> | string | null
    coverUrl?: StringNullableFilter<"Deck"> | string | null
    isPublic?: BoolFilter<"Deck"> | boolean
    priceCents?: IntFilter<"Deck"> | number
    deletedAt?: DateTimeNullableFilter<"Deck"> | Date | string | null
    createdAt?: DateTimeFilter<"Deck"> | Date | string
    updatedAt?: DateTimeFilter<"Deck"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    flashcards?: FlashcardListRelationFilter
    purchases?: PurchaseListRelationFilter
    favorites?: FavoriteListRelationFilter
  }, "id">

  export type DeckOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    coverUrl?: SortOrderInput | SortOrder
    isPublic?: SortOrder
    priceCents?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DeckCountOrderByAggregateInput
    _avg?: DeckAvgOrderByAggregateInput
    _max?: DeckMaxOrderByAggregateInput
    _min?: DeckMinOrderByAggregateInput
    _sum?: DeckSumOrderByAggregateInput
  }

  export type DeckScalarWhereWithAggregatesInput = {
    AND?: DeckScalarWhereWithAggregatesInput | DeckScalarWhereWithAggregatesInput[]
    OR?: DeckScalarWhereWithAggregatesInput[]
    NOT?: DeckScalarWhereWithAggregatesInput | DeckScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Deck"> | number
    userId?: StringWithAggregatesFilter<"Deck"> | string
    title?: StringWithAggregatesFilter<"Deck"> | string
    description?: StringNullableWithAggregatesFilter<"Deck"> | string | null
    coverUrl?: StringNullableWithAggregatesFilter<"Deck"> | string | null
    isPublic?: BoolWithAggregatesFilter<"Deck"> | boolean
    priceCents?: IntWithAggregatesFilter<"Deck"> | number
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Deck"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Deck"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Deck"> | Date | string
  }

  export type FlashcardWhereInput = {
    AND?: FlashcardWhereInput | FlashcardWhereInput[]
    OR?: FlashcardWhereInput[]
    NOT?: FlashcardWhereInput | FlashcardWhereInput[]
    id?: IntFilter<"Flashcard"> | number
    deckId?: IntFilter<"Flashcard"> | number
    frontText?: StringFilter<"Flashcard"> | string
    backText?: StringFilter<"Flashcard"> | string
    orderIndex?: IntFilter<"Flashcard"> | number
    deletedAt?: DateTimeNullableFilter<"Flashcard"> | Date | string | null
    createdAt?: DateTimeFilter<"Flashcard"> | Date | string
    updatedAt?: DateTimeFilter<"Flashcard"> | Date | string
    deck?: XOR<DeckScalarRelationFilter, DeckWhereInput>
  }

  export type FlashcardOrderByWithRelationInput = {
    id?: SortOrder
    deckId?: SortOrder
    frontText?: SortOrder
    backText?: SortOrder
    orderIndex?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deck?: DeckOrderByWithRelationInput
  }

  export type FlashcardWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FlashcardWhereInput | FlashcardWhereInput[]
    OR?: FlashcardWhereInput[]
    NOT?: FlashcardWhereInput | FlashcardWhereInput[]
    deckId?: IntFilter<"Flashcard"> | number
    frontText?: StringFilter<"Flashcard"> | string
    backText?: StringFilter<"Flashcard"> | string
    orderIndex?: IntFilter<"Flashcard"> | number
    deletedAt?: DateTimeNullableFilter<"Flashcard"> | Date | string | null
    createdAt?: DateTimeFilter<"Flashcard"> | Date | string
    updatedAt?: DateTimeFilter<"Flashcard"> | Date | string
    deck?: XOR<DeckScalarRelationFilter, DeckWhereInput>
  }, "id">

  export type FlashcardOrderByWithAggregationInput = {
    id?: SortOrder
    deckId?: SortOrder
    frontText?: SortOrder
    backText?: SortOrder
    orderIndex?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FlashcardCountOrderByAggregateInput
    _avg?: FlashcardAvgOrderByAggregateInput
    _max?: FlashcardMaxOrderByAggregateInput
    _min?: FlashcardMinOrderByAggregateInput
    _sum?: FlashcardSumOrderByAggregateInput
  }

  export type FlashcardScalarWhereWithAggregatesInput = {
    AND?: FlashcardScalarWhereWithAggregatesInput | FlashcardScalarWhereWithAggregatesInput[]
    OR?: FlashcardScalarWhereWithAggregatesInput[]
    NOT?: FlashcardScalarWhereWithAggregatesInput | FlashcardScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Flashcard"> | number
    deckId?: IntWithAggregatesFilter<"Flashcard"> | number
    frontText?: StringWithAggregatesFilter<"Flashcard"> | string
    backText?: StringWithAggregatesFilter<"Flashcard"> | string
    orderIndex?: IntWithAggregatesFilter<"Flashcard"> | number
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Flashcard"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Flashcard"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Flashcard"> | Date | string
  }

  export type PurchaseWhereInput = {
    AND?: PurchaseWhereInput | PurchaseWhereInput[]
    OR?: PurchaseWhereInput[]
    NOT?: PurchaseWhereInput | PurchaseWhereInput[]
    id?: IntFilter<"Purchase"> | number
    userId?: StringFilter<"Purchase"> | string
    deckId?: IntFilter<"Purchase"> | number
    amountCents?: IntFilter<"Purchase"> | number
    status?: StringFilter<"Purchase"> | string
    paymentMethod?: StringNullableFilter<"Purchase"> | string | null
    asaasPaymentId?: StringNullableFilter<"Purchase"> | string | null
    asaasInvoiceId?: StringNullableFilter<"Purchase"> | string | null
    asaasPayload?: StringNullableFilter<"Purchase"> | string | null
    confirmedAt?: DateTimeNullableFilter<"Purchase"> | Date | string | null
    createdAt?: DateTimeFilter<"Purchase"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    deck?: XOR<DeckScalarRelationFilter, DeckWhereInput>
    asaasPayment?: XOR<AsaasPaymentNullableScalarRelationFilter, AsaasPaymentWhereInput> | null
  }

  export type PurchaseOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    deckId?: SortOrder
    amountCents?: SortOrder
    status?: SortOrder
    paymentMethod?: SortOrderInput | SortOrder
    asaasPaymentId?: SortOrderInput | SortOrder
    asaasInvoiceId?: SortOrderInput | SortOrder
    asaasPayload?: SortOrderInput | SortOrder
    confirmedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    deck?: DeckOrderByWithRelationInput
    asaasPayment?: AsaasPaymentOrderByWithRelationInput
  }

  export type PurchaseWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    asaasPaymentId?: string
    AND?: PurchaseWhereInput | PurchaseWhereInput[]
    OR?: PurchaseWhereInput[]
    NOT?: PurchaseWhereInput | PurchaseWhereInput[]
    userId?: StringFilter<"Purchase"> | string
    deckId?: IntFilter<"Purchase"> | number
    amountCents?: IntFilter<"Purchase"> | number
    status?: StringFilter<"Purchase"> | string
    paymentMethod?: StringNullableFilter<"Purchase"> | string | null
    asaasInvoiceId?: StringNullableFilter<"Purchase"> | string | null
    asaasPayload?: StringNullableFilter<"Purchase"> | string | null
    confirmedAt?: DateTimeNullableFilter<"Purchase"> | Date | string | null
    createdAt?: DateTimeFilter<"Purchase"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    deck?: XOR<DeckScalarRelationFilter, DeckWhereInput>
    asaasPayment?: XOR<AsaasPaymentNullableScalarRelationFilter, AsaasPaymentWhereInput> | null
  }, "id" | "asaasPaymentId">

  export type PurchaseOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    deckId?: SortOrder
    amountCents?: SortOrder
    status?: SortOrder
    paymentMethod?: SortOrderInput | SortOrder
    asaasPaymentId?: SortOrderInput | SortOrder
    asaasInvoiceId?: SortOrderInput | SortOrder
    asaasPayload?: SortOrderInput | SortOrder
    confirmedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: PurchaseCountOrderByAggregateInput
    _avg?: PurchaseAvgOrderByAggregateInput
    _max?: PurchaseMaxOrderByAggregateInput
    _min?: PurchaseMinOrderByAggregateInput
    _sum?: PurchaseSumOrderByAggregateInput
  }

  export type PurchaseScalarWhereWithAggregatesInput = {
    AND?: PurchaseScalarWhereWithAggregatesInput | PurchaseScalarWhereWithAggregatesInput[]
    OR?: PurchaseScalarWhereWithAggregatesInput[]
    NOT?: PurchaseScalarWhereWithAggregatesInput | PurchaseScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Purchase"> | number
    userId?: StringWithAggregatesFilter<"Purchase"> | string
    deckId?: IntWithAggregatesFilter<"Purchase"> | number
    amountCents?: IntWithAggregatesFilter<"Purchase"> | number
    status?: StringWithAggregatesFilter<"Purchase"> | string
    paymentMethod?: StringNullableWithAggregatesFilter<"Purchase"> | string | null
    asaasPaymentId?: StringNullableWithAggregatesFilter<"Purchase"> | string | null
    asaasInvoiceId?: StringNullableWithAggregatesFilter<"Purchase"> | string | null
    asaasPayload?: StringNullableWithAggregatesFilter<"Purchase"> | string | null
    confirmedAt?: DateTimeNullableWithAggregatesFilter<"Purchase"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Purchase"> | Date | string
  }

  export type SubscriptionWhereInput = {
    AND?: SubscriptionWhereInput | SubscriptionWhereInput[]
    OR?: SubscriptionWhereInput[]
    NOT?: SubscriptionWhereInput | SubscriptionWhereInput[]
    id?: IntFilter<"Subscription"> | number
    userId?: StringFilter<"Subscription"> | string
    status?: StringFilter<"Subscription"> | string
    planName?: StringFilter<"Subscription"> | string
    priceCents?: IntFilter<"Subscription"> | number
    asaasSubscriptionId?: StringFilter<"Subscription"> | string
    nextDueDate?: DateTimeNullableFilter<"Subscription"> | Date | string | null
    lastPaymentDate?: DateTimeNullableFilter<"Subscription"> | Date | string | null
    currentPeriodEnd?: DateTimeNullableFilter<"Subscription"> | Date | string | null
    createdAt?: DateTimeFilter<"Subscription"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    asaasSubscription?: XOR<AsaasSubscriptionNullableScalarRelationFilter, AsaasSubscriptionWhereInput> | null
  }

  export type SubscriptionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    planName?: SortOrder
    priceCents?: SortOrder
    asaasSubscriptionId?: SortOrder
    nextDueDate?: SortOrderInput | SortOrder
    lastPaymentDate?: SortOrderInput | SortOrder
    currentPeriodEnd?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    asaasSubscription?: AsaasSubscriptionOrderByWithRelationInput
  }

  export type SubscriptionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    asaasSubscriptionId?: string
    AND?: SubscriptionWhereInput | SubscriptionWhereInput[]
    OR?: SubscriptionWhereInput[]
    NOT?: SubscriptionWhereInput | SubscriptionWhereInput[]
    userId?: StringFilter<"Subscription"> | string
    status?: StringFilter<"Subscription"> | string
    planName?: StringFilter<"Subscription"> | string
    priceCents?: IntFilter<"Subscription"> | number
    nextDueDate?: DateTimeNullableFilter<"Subscription"> | Date | string | null
    lastPaymentDate?: DateTimeNullableFilter<"Subscription"> | Date | string | null
    currentPeriodEnd?: DateTimeNullableFilter<"Subscription"> | Date | string | null
    createdAt?: DateTimeFilter<"Subscription"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    asaasSubscription?: XOR<AsaasSubscriptionNullableScalarRelationFilter, AsaasSubscriptionWhereInput> | null
  }, "id" | "asaasSubscriptionId">

  export type SubscriptionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    planName?: SortOrder
    priceCents?: SortOrder
    asaasSubscriptionId?: SortOrder
    nextDueDate?: SortOrderInput | SortOrder
    lastPaymentDate?: SortOrderInput | SortOrder
    currentPeriodEnd?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: SubscriptionCountOrderByAggregateInput
    _avg?: SubscriptionAvgOrderByAggregateInput
    _max?: SubscriptionMaxOrderByAggregateInput
    _min?: SubscriptionMinOrderByAggregateInput
    _sum?: SubscriptionSumOrderByAggregateInput
  }

  export type SubscriptionScalarWhereWithAggregatesInput = {
    AND?: SubscriptionScalarWhereWithAggregatesInput | SubscriptionScalarWhereWithAggregatesInput[]
    OR?: SubscriptionScalarWhereWithAggregatesInput[]
    NOT?: SubscriptionScalarWhereWithAggregatesInput | SubscriptionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Subscription"> | number
    userId?: StringWithAggregatesFilter<"Subscription"> | string
    status?: StringWithAggregatesFilter<"Subscription"> | string
    planName?: StringWithAggregatesFilter<"Subscription"> | string
    priceCents?: IntWithAggregatesFilter<"Subscription"> | number
    asaasSubscriptionId?: StringWithAggregatesFilter<"Subscription"> | string
    nextDueDate?: DateTimeNullableWithAggregatesFilter<"Subscription"> | Date | string | null
    lastPaymentDate?: DateTimeNullableWithAggregatesFilter<"Subscription"> | Date | string | null
    currentPeriodEnd?: DateTimeNullableWithAggregatesFilter<"Subscription"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Subscription"> | Date | string
  }

  export type FavoriteWhereInput = {
    AND?: FavoriteWhereInput | FavoriteWhereInput[]
    OR?: FavoriteWhereInput[]
    NOT?: FavoriteWhereInput | FavoriteWhereInput[]
    id?: IntFilter<"Favorite"> | number
    userId?: StringFilter<"Favorite"> | string
    deckId?: IntFilter<"Favorite"> | number
    createdAt?: DateTimeFilter<"Favorite"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    deck?: XOR<DeckScalarRelationFilter, DeckWhereInput>
  }

  export type FavoriteOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    deckId?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    deck?: DeckOrderByWithRelationInput
  }

  export type FavoriteWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    ux_favorites_user_deck?: FavoriteUx_favorites_user_deckCompoundUniqueInput
    AND?: FavoriteWhereInput | FavoriteWhereInput[]
    OR?: FavoriteWhereInput[]
    NOT?: FavoriteWhereInput | FavoriteWhereInput[]
    userId?: StringFilter<"Favorite"> | string
    deckId?: IntFilter<"Favorite"> | number
    createdAt?: DateTimeFilter<"Favorite"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    deck?: XOR<DeckScalarRelationFilter, DeckWhereInput>
  }, "id" | "ux_favorites_user_deck">

  export type FavoriteOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    deckId?: SortOrder
    createdAt?: SortOrder
    _count?: FavoriteCountOrderByAggregateInput
    _avg?: FavoriteAvgOrderByAggregateInput
    _max?: FavoriteMaxOrderByAggregateInput
    _min?: FavoriteMinOrderByAggregateInput
    _sum?: FavoriteSumOrderByAggregateInput
  }

  export type FavoriteScalarWhereWithAggregatesInput = {
    AND?: FavoriteScalarWhereWithAggregatesInput | FavoriteScalarWhereWithAggregatesInput[]
    OR?: FavoriteScalarWhereWithAggregatesInput[]
    NOT?: FavoriteScalarWhereWithAggregatesInput | FavoriteScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Favorite"> | number
    userId?: StringWithAggregatesFilter<"Favorite"> | string
    deckId?: IntWithAggregatesFilter<"Favorite"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Favorite"> | Date | string
  }

  export type AsaasCustomerWhereInput = {
    AND?: AsaasCustomerWhereInput | AsaasCustomerWhereInput[]
    OR?: AsaasCustomerWhereInput[]
    NOT?: AsaasCustomerWhereInput | AsaasCustomerWhereInput[]
    id?: StringFilter<"AsaasCustomer"> | string
    userId?: StringFilter<"AsaasCustomer"> | string
    asaasId?: StringFilter<"AsaasCustomer"> | string
    name?: StringFilter<"AsaasCustomer"> | string
    cpfCnpj?: StringNullableFilter<"AsaasCustomer"> | string | null
    email?: StringFilter<"AsaasCustomer"> | string
    phone?: StringNullableFilter<"AsaasCustomer"> | string | null
    mobilePhone?: StringNullableFilter<"AsaasCustomer"> | string | null
    postalCode?: StringNullableFilter<"AsaasCustomer"> | string | null
    address?: StringNullableFilter<"AsaasCustomer"> | string | null
    addressNumber?: StringNullableFilter<"AsaasCustomer"> | string | null
    complement?: StringNullableFilter<"AsaasCustomer"> | string | null
    province?: StringNullableFilter<"AsaasCustomer"> | string | null
    externalReference?: StringNullableFilter<"AsaasCustomer"> | string | null
    createdAt?: DateTimeFilter<"AsaasCustomer"> | Date | string
    updatedAt?: DateTimeFilter<"AsaasCustomer"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    payments?: AsaasPaymentListRelationFilter
    subscriptions?: AsaasSubscriptionListRelationFilter
  }

  export type AsaasCustomerOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    asaasId?: SortOrder
    name?: SortOrder
    cpfCnpj?: SortOrderInput | SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    mobilePhone?: SortOrderInput | SortOrder
    postalCode?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    addressNumber?: SortOrderInput | SortOrder
    complement?: SortOrderInput | SortOrder
    province?: SortOrderInput | SortOrder
    externalReference?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    payments?: AsaasPaymentOrderByRelationAggregateInput
    subscriptions?: AsaasSubscriptionOrderByRelationAggregateInput
  }

  export type AsaasCustomerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    asaasId?: string
    AND?: AsaasCustomerWhereInput | AsaasCustomerWhereInput[]
    OR?: AsaasCustomerWhereInput[]
    NOT?: AsaasCustomerWhereInput | AsaasCustomerWhereInput[]
    name?: StringFilter<"AsaasCustomer"> | string
    cpfCnpj?: StringNullableFilter<"AsaasCustomer"> | string | null
    email?: StringFilter<"AsaasCustomer"> | string
    phone?: StringNullableFilter<"AsaasCustomer"> | string | null
    mobilePhone?: StringNullableFilter<"AsaasCustomer"> | string | null
    postalCode?: StringNullableFilter<"AsaasCustomer"> | string | null
    address?: StringNullableFilter<"AsaasCustomer"> | string | null
    addressNumber?: StringNullableFilter<"AsaasCustomer"> | string | null
    complement?: StringNullableFilter<"AsaasCustomer"> | string | null
    province?: StringNullableFilter<"AsaasCustomer"> | string | null
    externalReference?: StringNullableFilter<"AsaasCustomer"> | string | null
    createdAt?: DateTimeFilter<"AsaasCustomer"> | Date | string
    updatedAt?: DateTimeFilter<"AsaasCustomer"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    payments?: AsaasPaymentListRelationFilter
    subscriptions?: AsaasSubscriptionListRelationFilter
  }, "id" | "userId" | "asaasId">

  export type AsaasCustomerOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    asaasId?: SortOrder
    name?: SortOrder
    cpfCnpj?: SortOrderInput | SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    mobilePhone?: SortOrderInput | SortOrder
    postalCode?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    addressNumber?: SortOrderInput | SortOrder
    complement?: SortOrderInput | SortOrder
    province?: SortOrderInput | SortOrder
    externalReference?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AsaasCustomerCountOrderByAggregateInput
    _max?: AsaasCustomerMaxOrderByAggregateInput
    _min?: AsaasCustomerMinOrderByAggregateInput
  }

  export type AsaasCustomerScalarWhereWithAggregatesInput = {
    AND?: AsaasCustomerScalarWhereWithAggregatesInput | AsaasCustomerScalarWhereWithAggregatesInput[]
    OR?: AsaasCustomerScalarWhereWithAggregatesInput[]
    NOT?: AsaasCustomerScalarWhereWithAggregatesInput | AsaasCustomerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AsaasCustomer"> | string
    userId?: StringWithAggregatesFilter<"AsaasCustomer"> | string
    asaasId?: StringWithAggregatesFilter<"AsaasCustomer"> | string
    name?: StringWithAggregatesFilter<"AsaasCustomer"> | string
    cpfCnpj?: StringNullableWithAggregatesFilter<"AsaasCustomer"> | string | null
    email?: StringWithAggregatesFilter<"AsaasCustomer"> | string
    phone?: StringNullableWithAggregatesFilter<"AsaasCustomer"> | string | null
    mobilePhone?: StringNullableWithAggregatesFilter<"AsaasCustomer"> | string | null
    postalCode?: StringNullableWithAggregatesFilter<"AsaasCustomer"> | string | null
    address?: StringNullableWithAggregatesFilter<"AsaasCustomer"> | string | null
    addressNumber?: StringNullableWithAggregatesFilter<"AsaasCustomer"> | string | null
    complement?: StringNullableWithAggregatesFilter<"AsaasCustomer"> | string | null
    province?: StringNullableWithAggregatesFilter<"AsaasCustomer"> | string | null
    externalReference?: StringNullableWithAggregatesFilter<"AsaasCustomer"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"AsaasCustomer"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AsaasCustomer"> | Date | string
  }

  export type AsaasPaymentWhereInput = {
    AND?: AsaasPaymentWhereInput | AsaasPaymentWhereInput[]
    OR?: AsaasPaymentWhereInput[]
    NOT?: AsaasPaymentWhereInput | AsaasPaymentWhereInput[]
    id?: StringFilter<"AsaasPayment"> | string
    customerId?: StringFilter<"AsaasPayment"> | string
    asaasId?: StringFilter<"AsaasPayment"> | string
    purchaseId?: IntNullableFilter<"AsaasPayment"> | number | null
    billingType?: StringFilter<"AsaasPayment"> | string
    status?: StringFilter<"AsaasPayment"> | string
    value?: FloatFilter<"AsaasPayment"> | number
    dueDate?: DateTimeFilter<"AsaasPayment"> | Date | string
    originalDueDate?: DateTimeNullableFilter<"AsaasPayment"> | Date | string | null
    description?: StringNullableFilter<"AsaasPayment"> | string | null
    externalReference?: StringNullableFilter<"AsaasPayment"> | string | null
    invoiceUrl?: StringNullableFilter<"AsaasPayment"> | string | null
    bankSlipUrl?: StringNullableFilter<"AsaasPayment"> | string | null
    pixQrCode?: StringNullableFilter<"AsaasPayment"> | string | null
    creditCardPaymentLink?: StringNullableFilter<"AsaasPayment"> | string | null
    confirmedDate?: DateTimeNullableFilter<"AsaasPayment"> | Date | string | null
    paymentDate?: DateTimeNullableFilter<"AsaasPayment"> | Date | string | null
    clientPaymentDate?: DateTimeNullableFilter<"AsaasPayment"> | Date | string | null
    netValue?: FloatNullableFilter<"AsaasPayment"> | number | null
    originalValue?: FloatNullableFilter<"AsaasPayment"> | number | null
    interestValue?: FloatNullableFilter<"AsaasPayment"> | number | null
    discountValue?: FloatNullableFilter<"AsaasPayment"> | number | null
    fineValue?: FloatNullableFilter<"AsaasPayment"> | number | null
    asaasPayload?: StringNullableFilter<"AsaasPayment"> | string | null
    createdAt?: DateTimeFilter<"AsaasPayment"> | Date | string
    updatedAt?: DateTimeFilter<"AsaasPayment"> | Date | string
    customer?: XOR<AsaasCustomerScalarRelationFilter, AsaasCustomerWhereInput>
    purchase?: XOR<PurchaseNullableScalarRelationFilter, PurchaseWhereInput> | null
  }

  export type AsaasPaymentOrderByWithRelationInput = {
    id?: SortOrder
    customerId?: SortOrder
    asaasId?: SortOrder
    purchaseId?: SortOrderInput | SortOrder
    billingType?: SortOrder
    status?: SortOrder
    value?: SortOrder
    dueDate?: SortOrder
    originalDueDate?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    externalReference?: SortOrderInput | SortOrder
    invoiceUrl?: SortOrderInput | SortOrder
    bankSlipUrl?: SortOrderInput | SortOrder
    pixQrCode?: SortOrderInput | SortOrder
    creditCardPaymentLink?: SortOrderInput | SortOrder
    confirmedDate?: SortOrderInput | SortOrder
    paymentDate?: SortOrderInput | SortOrder
    clientPaymentDate?: SortOrderInput | SortOrder
    netValue?: SortOrderInput | SortOrder
    originalValue?: SortOrderInput | SortOrder
    interestValue?: SortOrderInput | SortOrder
    discountValue?: SortOrderInput | SortOrder
    fineValue?: SortOrderInput | SortOrder
    asaasPayload?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    customer?: AsaasCustomerOrderByWithRelationInput
    purchase?: PurchaseOrderByWithRelationInput
  }

  export type AsaasPaymentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    asaasId?: string
    purchaseId?: number
    AND?: AsaasPaymentWhereInput | AsaasPaymentWhereInput[]
    OR?: AsaasPaymentWhereInput[]
    NOT?: AsaasPaymentWhereInput | AsaasPaymentWhereInput[]
    customerId?: StringFilter<"AsaasPayment"> | string
    billingType?: StringFilter<"AsaasPayment"> | string
    status?: StringFilter<"AsaasPayment"> | string
    value?: FloatFilter<"AsaasPayment"> | number
    dueDate?: DateTimeFilter<"AsaasPayment"> | Date | string
    originalDueDate?: DateTimeNullableFilter<"AsaasPayment"> | Date | string | null
    description?: StringNullableFilter<"AsaasPayment"> | string | null
    externalReference?: StringNullableFilter<"AsaasPayment"> | string | null
    invoiceUrl?: StringNullableFilter<"AsaasPayment"> | string | null
    bankSlipUrl?: StringNullableFilter<"AsaasPayment"> | string | null
    pixQrCode?: StringNullableFilter<"AsaasPayment"> | string | null
    creditCardPaymentLink?: StringNullableFilter<"AsaasPayment"> | string | null
    confirmedDate?: DateTimeNullableFilter<"AsaasPayment"> | Date | string | null
    paymentDate?: DateTimeNullableFilter<"AsaasPayment"> | Date | string | null
    clientPaymentDate?: DateTimeNullableFilter<"AsaasPayment"> | Date | string | null
    netValue?: FloatNullableFilter<"AsaasPayment"> | number | null
    originalValue?: FloatNullableFilter<"AsaasPayment"> | number | null
    interestValue?: FloatNullableFilter<"AsaasPayment"> | number | null
    discountValue?: FloatNullableFilter<"AsaasPayment"> | number | null
    fineValue?: FloatNullableFilter<"AsaasPayment"> | number | null
    asaasPayload?: StringNullableFilter<"AsaasPayment"> | string | null
    createdAt?: DateTimeFilter<"AsaasPayment"> | Date | string
    updatedAt?: DateTimeFilter<"AsaasPayment"> | Date | string
    customer?: XOR<AsaasCustomerScalarRelationFilter, AsaasCustomerWhereInput>
    purchase?: XOR<PurchaseNullableScalarRelationFilter, PurchaseWhereInput> | null
  }, "id" | "asaasId" | "purchaseId">

  export type AsaasPaymentOrderByWithAggregationInput = {
    id?: SortOrder
    customerId?: SortOrder
    asaasId?: SortOrder
    purchaseId?: SortOrderInput | SortOrder
    billingType?: SortOrder
    status?: SortOrder
    value?: SortOrder
    dueDate?: SortOrder
    originalDueDate?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    externalReference?: SortOrderInput | SortOrder
    invoiceUrl?: SortOrderInput | SortOrder
    bankSlipUrl?: SortOrderInput | SortOrder
    pixQrCode?: SortOrderInput | SortOrder
    creditCardPaymentLink?: SortOrderInput | SortOrder
    confirmedDate?: SortOrderInput | SortOrder
    paymentDate?: SortOrderInput | SortOrder
    clientPaymentDate?: SortOrderInput | SortOrder
    netValue?: SortOrderInput | SortOrder
    originalValue?: SortOrderInput | SortOrder
    interestValue?: SortOrderInput | SortOrder
    discountValue?: SortOrderInput | SortOrder
    fineValue?: SortOrderInput | SortOrder
    asaasPayload?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AsaasPaymentCountOrderByAggregateInput
    _avg?: AsaasPaymentAvgOrderByAggregateInput
    _max?: AsaasPaymentMaxOrderByAggregateInput
    _min?: AsaasPaymentMinOrderByAggregateInput
    _sum?: AsaasPaymentSumOrderByAggregateInput
  }

  export type AsaasPaymentScalarWhereWithAggregatesInput = {
    AND?: AsaasPaymentScalarWhereWithAggregatesInput | AsaasPaymentScalarWhereWithAggregatesInput[]
    OR?: AsaasPaymentScalarWhereWithAggregatesInput[]
    NOT?: AsaasPaymentScalarWhereWithAggregatesInput | AsaasPaymentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AsaasPayment"> | string
    customerId?: StringWithAggregatesFilter<"AsaasPayment"> | string
    asaasId?: StringWithAggregatesFilter<"AsaasPayment"> | string
    purchaseId?: IntNullableWithAggregatesFilter<"AsaasPayment"> | number | null
    billingType?: StringWithAggregatesFilter<"AsaasPayment"> | string
    status?: StringWithAggregatesFilter<"AsaasPayment"> | string
    value?: FloatWithAggregatesFilter<"AsaasPayment"> | number
    dueDate?: DateTimeWithAggregatesFilter<"AsaasPayment"> | Date | string
    originalDueDate?: DateTimeNullableWithAggregatesFilter<"AsaasPayment"> | Date | string | null
    description?: StringNullableWithAggregatesFilter<"AsaasPayment"> | string | null
    externalReference?: StringNullableWithAggregatesFilter<"AsaasPayment"> | string | null
    invoiceUrl?: StringNullableWithAggregatesFilter<"AsaasPayment"> | string | null
    bankSlipUrl?: StringNullableWithAggregatesFilter<"AsaasPayment"> | string | null
    pixQrCode?: StringNullableWithAggregatesFilter<"AsaasPayment"> | string | null
    creditCardPaymentLink?: StringNullableWithAggregatesFilter<"AsaasPayment"> | string | null
    confirmedDate?: DateTimeNullableWithAggregatesFilter<"AsaasPayment"> | Date | string | null
    paymentDate?: DateTimeNullableWithAggregatesFilter<"AsaasPayment"> | Date | string | null
    clientPaymentDate?: DateTimeNullableWithAggregatesFilter<"AsaasPayment"> | Date | string | null
    netValue?: FloatNullableWithAggregatesFilter<"AsaasPayment"> | number | null
    originalValue?: FloatNullableWithAggregatesFilter<"AsaasPayment"> | number | null
    interestValue?: FloatNullableWithAggregatesFilter<"AsaasPayment"> | number | null
    discountValue?: FloatNullableWithAggregatesFilter<"AsaasPayment"> | number | null
    fineValue?: FloatNullableWithAggregatesFilter<"AsaasPayment"> | number | null
    asaasPayload?: StringNullableWithAggregatesFilter<"AsaasPayment"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"AsaasPayment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AsaasPayment"> | Date | string
  }

  export type AsaasSubscriptionWhereInput = {
    AND?: AsaasSubscriptionWhereInput | AsaasSubscriptionWhereInput[]
    OR?: AsaasSubscriptionWhereInput[]
    NOT?: AsaasSubscriptionWhereInput | AsaasSubscriptionWhereInput[]
    id?: StringFilter<"AsaasSubscription"> | string
    customerId?: StringFilter<"AsaasSubscription"> | string
    asaasId?: StringFilter<"AsaasSubscription"> | string
    subscriptionId?: IntNullableFilter<"AsaasSubscription"> | number | null
    billingType?: StringFilter<"AsaasSubscription"> | string
    status?: StringFilter<"AsaasSubscription"> | string
    value?: FloatFilter<"AsaasSubscription"> | number
    nextDueDate?: DateTimeFilter<"AsaasSubscription"> | Date | string
    cycle?: StringFilter<"AsaasSubscription"> | string
    description?: StringNullableFilter<"AsaasSubscription"> | string | null
    endDate?: DateTimeNullableFilter<"AsaasSubscription"> | Date | string | null
    maxPayments?: IntNullableFilter<"AsaasSubscription"> | number | null
    externalReference?: StringNullableFilter<"AsaasSubscription"> | string | null
    asaasPayload?: StringNullableFilter<"AsaasSubscription"> | string | null
    createdAt?: DateTimeFilter<"AsaasSubscription"> | Date | string
    updatedAt?: DateTimeFilter<"AsaasSubscription"> | Date | string
    customer?: XOR<AsaasCustomerScalarRelationFilter, AsaasCustomerWhereInput>
    subscription?: XOR<SubscriptionNullableScalarRelationFilter, SubscriptionWhereInput> | null
  }

  export type AsaasSubscriptionOrderByWithRelationInput = {
    id?: SortOrder
    customerId?: SortOrder
    asaasId?: SortOrder
    subscriptionId?: SortOrderInput | SortOrder
    billingType?: SortOrder
    status?: SortOrder
    value?: SortOrder
    nextDueDate?: SortOrder
    cycle?: SortOrder
    description?: SortOrderInput | SortOrder
    endDate?: SortOrderInput | SortOrder
    maxPayments?: SortOrderInput | SortOrder
    externalReference?: SortOrderInput | SortOrder
    asaasPayload?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    customer?: AsaasCustomerOrderByWithRelationInput
    subscription?: SubscriptionOrderByWithRelationInput
  }

  export type AsaasSubscriptionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    asaasId?: string
    subscriptionId?: number
    AND?: AsaasSubscriptionWhereInput | AsaasSubscriptionWhereInput[]
    OR?: AsaasSubscriptionWhereInput[]
    NOT?: AsaasSubscriptionWhereInput | AsaasSubscriptionWhereInput[]
    customerId?: StringFilter<"AsaasSubscription"> | string
    billingType?: StringFilter<"AsaasSubscription"> | string
    status?: StringFilter<"AsaasSubscription"> | string
    value?: FloatFilter<"AsaasSubscription"> | number
    nextDueDate?: DateTimeFilter<"AsaasSubscription"> | Date | string
    cycle?: StringFilter<"AsaasSubscription"> | string
    description?: StringNullableFilter<"AsaasSubscription"> | string | null
    endDate?: DateTimeNullableFilter<"AsaasSubscription"> | Date | string | null
    maxPayments?: IntNullableFilter<"AsaasSubscription"> | number | null
    externalReference?: StringNullableFilter<"AsaasSubscription"> | string | null
    asaasPayload?: StringNullableFilter<"AsaasSubscription"> | string | null
    createdAt?: DateTimeFilter<"AsaasSubscription"> | Date | string
    updatedAt?: DateTimeFilter<"AsaasSubscription"> | Date | string
    customer?: XOR<AsaasCustomerScalarRelationFilter, AsaasCustomerWhereInput>
    subscription?: XOR<SubscriptionNullableScalarRelationFilter, SubscriptionWhereInput> | null
  }, "id" | "asaasId" | "subscriptionId">

  export type AsaasSubscriptionOrderByWithAggregationInput = {
    id?: SortOrder
    customerId?: SortOrder
    asaasId?: SortOrder
    subscriptionId?: SortOrderInput | SortOrder
    billingType?: SortOrder
    status?: SortOrder
    value?: SortOrder
    nextDueDate?: SortOrder
    cycle?: SortOrder
    description?: SortOrderInput | SortOrder
    endDate?: SortOrderInput | SortOrder
    maxPayments?: SortOrderInput | SortOrder
    externalReference?: SortOrderInput | SortOrder
    asaasPayload?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AsaasSubscriptionCountOrderByAggregateInput
    _avg?: AsaasSubscriptionAvgOrderByAggregateInput
    _max?: AsaasSubscriptionMaxOrderByAggregateInput
    _min?: AsaasSubscriptionMinOrderByAggregateInput
    _sum?: AsaasSubscriptionSumOrderByAggregateInput
  }

  export type AsaasSubscriptionScalarWhereWithAggregatesInput = {
    AND?: AsaasSubscriptionScalarWhereWithAggregatesInput | AsaasSubscriptionScalarWhereWithAggregatesInput[]
    OR?: AsaasSubscriptionScalarWhereWithAggregatesInput[]
    NOT?: AsaasSubscriptionScalarWhereWithAggregatesInput | AsaasSubscriptionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AsaasSubscription"> | string
    customerId?: StringWithAggregatesFilter<"AsaasSubscription"> | string
    asaasId?: StringWithAggregatesFilter<"AsaasSubscription"> | string
    subscriptionId?: IntNullableWithAggregatesFilter<"AsaasSubscription"> | number | null
    billingType?: StringWithAggregatesFilter<"AsaasSubscription"> | string
    status?: StringWithAggregatesFilter<"AsaasSubscription"> | string
    value?: FloatWithAggregatesFilter<"AsaasSubscription"> | number
    nextDueDate?: DateTimeWithAggregatesFilter<"AsaasSubscription"> | Date | string
    cycle?: StringWithAggregatesFilter<"AsaasSubscription"> | string
    description?: StringNullableWithAggregatesFilter<"AsaasSubscription"> | string | null
    endDate?: DateTimeNullableWithAggregatesFilter<"AsaasSubscription"> | Date | string | null
    maxPayments?: IntNullableWithAggregatesFilter<"AsaasSubscription"> | number | null
    externalReference?: StringNullableWithAggregatesFilter<"AsaasSubscription"> | string | null
    asaasPayload?: StringNullableWithAggregatesFilter<"AsaasSubscription"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"AsaasSubscription"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AsaasSubscription"> | Date | string
  }

  export type AsaasWebhookWhereInput = {
    AND?: AsaasWebhookWhereInput | AsaasWebhookWhereInput[]
    OR?: AsaasWebhookWhereInput[]
    NOT?: AsaasWebhookWhereInput | AsaasWebhookWhereInput[]
    id?: StringFilter<"AsaasWebhook"> | string
    event?: StringFilter<"AsaasWebhook"> | string
    object?: StringFilter<"AsaasWebhook"> | string
    objectId?: StringFilter<"AsaasWebhook"> | string
    payload?: StringFilter<"AsaasWebhook"> | string
    processed?: BoolFilter<"AsaasWebhook"> | boolean
    processedAt?: DateTimeNullableFilter<"AsaasWebhook"> | Date | string | null
    errorLog?: StringNullableFilter<"AsaasWebhook"> | string | null
    createdAt?: DateTimeFilter<"AsaasWebhook"> | Date | string
  }

  export type AsaasWebhookOrderByWithRelationInput = {
    id?: SortOrder
    event?: SortOrder
    object?: SortOrder
    objectId?: SortOrder
    payload?: SortOrder
    processed?: SortOrder
    processedAt?: SortOrderInput | SortOrder
    errorLog?: SortOrderInput | SortOrder
    createdAt?: SortOrder
  }

  export type AsaasWebhookWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AsaasWebhookWhereInput | AsaasWebhookWhereInput[]
    OR?: AsaasWebhookWhereInput[]
    NOT?: AsaasWebhookWhereInput | AsaasWebhookWhereInput[]
    event?: StringFilter<"AsaasWebhook"> | string
    object?: StringFilter<"AsaasWebhook"> | string
    objectId?: StringFilter<"AsaasWebhook"> | string
    payload?: StringFilter<"AsaasWebhook"> | string
    processed?: BoolFilter<"AsaasWebhook"> | boolean
    processedAt?: DateTimeNullableFilter<"AsaasWebhook"> | Date | string | null
    errorLog?: StringNullableFilter<"AsaasWebhook"> | string | null
    createdAt?: DateTimeFilter<"AsaasWebhook"> | Date | string
  }, "id">

  export type AsaasWebhookOrderByWithAggregationInput = {
    id?: SortOrder
    event?: SortOrder
    object?: SortOrder
    objectId?: SortOrder
    payload?: SortOrder
    processed?: SortOrder
    processedAt?: SortOrderInput | SortOrder
    errorLog?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: AsaasWebhookCountOrderByAggregateInput
    _max?: AsaasWebhookMaxOrderByAggregateInput
    _min?: AsaasWebhookMinOrderByAggregateInput
  }

  export type AsaasWebhookScalarWhereWithAggregatesInput = {
    AND?: AsaasWebhookScalarWhereWithAggregatesInput | AsaasWebhookScalarWhereWithAggregatesInput[]
    OR?: AsaasWebhookScalarWhereWithAggregatesInput[]
    NOT?: AsaasWebhookScalarWhereWithAggregatesInput | AsaasWebhookScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AsaasWebhook"> | string
    event?: StringWithAggregatesFilter<"AsaasWebhook"> | string
    object?: StringWithAggregatesFilter<"AsaasWebhook"> | string
    objectId?: StringWithAggregatesFilter<"AsaasWebhook"> | string
    payload?: StringWithAggregatesFilter<"AsaasWebhook"> | string
    processed?: BoolWithAggregatesFilter<"AsaasWebhook"> | boolean
    processedAt?: DateTimeNullableWithAggregatesFilter<"AsaasWebhook"> | Date | string | null
    errorLog?: StringNullableWithAggregatesFilter<"AsaasWebhook"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"AsaasWebhook"> | Date | string
  }

  export type UserCreateInput = {
    id: string
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    role?: string
    asaasCustomerId?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    decks?: DeckCreateNestedManyWithoutUserInput
    purchases?: PurchaseCreateNestedManyWithoutUserInput
    subscriptions?: SubscriptionCreateNestedManyWithoutUserInput
    favorites?: FavoriteCreateNestedManyWithoutUserInput
    asaasCustomer?: AsaasCustomerCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id: string
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    role?: string
    asaasCustomerId?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    decks?: DeckUncheckedCreateNestedManyWithoutUserInput
    purchases?: PurchaseUncheckedCreateNestedManyWithoutUserInput
    subscriptions?: SubscriptionUncheckedCreateNestedManyWithoutUserInput
    favorites?: FavoriteUncheckedCreateNestedManyWithoutUserInput
    asaasCustomer?: AsaasCustomerUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    asaasCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    decks?: DeckUpdateManyWithoutUserNestedInput
    purchases?: PurchaseUpdateManyWithoutUserNestedInput
    subscriptions?: SubscriptionUpdateManyWithoutUserNestedInput
    favorites?: FavoriteUpdateManyWithoutUserNestedInput
    asaasCustomer?: AsaasCustomerUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    asaasCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    decks?: DeckUncheckedUpdateManyWithoutUserNestedInput
    purchases?: PurchaseUncheckedUpdateManyWithoutUserNestedInput
    subscriptions?: SubscriptionUncheckedUpdateManyWithoutUserNestedInput
    favorites?: FavoriteUncheckedUpdateManyWithoutUserNestedInput
    asaasCustomer?: AsaasCustomerUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id: string
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    role?: string
    asaasCustomerId?: string | null
    createdAt: Date | string
    updatedAt: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    asaasCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    asaasCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt: Date | string
    updatedAt: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt: Date | string
    updatedAt: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    userId: string
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type SessionCreateManyInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt: Date | string
    updatedAt: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    userId: string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type AccountCreateInput = {
    id: string
    accountId: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    user: UserCreateNestedOneWithoutAccountsInput
  }

  export type AccountUncheckedCreateInput = {
    id: string
    accountId: string
    providerId: string
    userId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt: Date | string
    updatedAt: Date | string
  }

  export type AccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAccountsNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountCreateManyInput = {
    id: string
    accountId: string
    providerId: string
    userId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt: Date | string
    updatedAt: Date | string
  }

  export type AccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationCreateInput = {
    id: string
    identifier: string
    value: string
    expiresAt: Date | string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type VerificationUncheckedCreateInput = {
    id: string
    identifier: string
    value: string
    expiresAt: Date | string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type VerificationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type VerificationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type VerificationCreateManyInput = {
    id: string
    identifier: string
    value: string
    expiresAt: Date | string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type VerificationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type VerificationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DeckCreateInput = {
    title: string
    description?: string | null
    coverUrl?: string | null
    isPublic?: boolean
    priceCents?: number
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutDecksInput
    flashcards?: FlashcardCreateNestedManyWithoutDeckInput
    purchases?: PurchaseCreateNestedManyWithoutDeckInput
    favorites?: FavoriteCreateNestedManyWithoutDeckInput
  }

  export type DeckUncheckedCreateInput = {
    id?: number
    userId: string
    title: string
    description?: string | null
    coverUrl?: string | null
    isPublic?: boolean
    priceCents?: number
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    flashcards?: FlashcardUncheckedCreateNestedManyWithoutDeckInput
    purchases?: PurchaseUncheckedCreateNestedManyWithoutDeckInput
    favorites?: FavoriteUncheckedCreateNestedManyWithoutDeckInput
  }

  export type DeckUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    priceCents?: IntFieldUpdateOperationsInput | number
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutDecksNestedInput
    flashcards?: FlashcardUpdateManyWithoutDeckNestedInput
    purchases?: PurchaseUpdateManyWithoutDeckNestedInput
    favorites?: FavoriteUpdateManyWithoutDeckNestedInput
  }

  export type DeckUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    priceCents?: IntFieldUpdateOperationsInput | number
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    flashcards?: FlashcardUncheckedUpdateManyWithoutDeckNestedInput
    purchases?: PurchaseUncheckedUpdateManyWithoutDeckNestedInput
    favorites?: FavoriteUncheckedUpdateManyWithoutDeckNestedInput
  }

  export type DeckCreateManyInput = {
    id?: number
    userId: string
    title: string
    description?: string | null
    coverUrl?: string | null
    isPublic?: boolean
    priceCents?: number
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DeckUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    priceCents?: IntFieldUpdateOperationsInput | number
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeckUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    priceCents?: IntFieldUpdateOperationsInput | number
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FlashcardCreateInput = {
    frontText: string
    backText: string
    orderIndex?: number
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deck: DeckCreateNestedOneWithoutFlashcardsInput
  }

  export type FlashcardUncheckedCreateInput = {
    id?: number
    deckId: number
    frontText: string
    backText: string
    orderIndex?: number
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FlashcardUpdateInput = {
    frontText?: StringFieldUpdateOperationsInput | string
    backText?: StringFieldUpdateOperationsInput | string
    orderIndex?: IntFieldUpdateOperationsInput | number
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deck?: DeckUpdateOneRequiredWithoutFlashcardsNestedInput
  }

  export type FlashcardUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    deckId?: IntFieldUpdateOperationsInput | number
    frontText?: StringFieldUpdateOperationsInput | string
    backText?: StringFieldUpdateOperationsInput | string
    orderIndex?: IntFieldUpdateOperationsInput | number
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FlashcardCreateManyInput = {
    id?: number
    deckId: number
    frontText: string
    backText: string
    orderIndex?: number
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FlashcardUpdateManyMutationInput = {
    frontText?: StringFieldUpdateOperationsInput | string
    backText?: StringFieldUpdateOperationsInput | string
    orderIndex?: IntFieldUpdateOperationsInput | number
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FlashcardUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    deckId?: IntFieldUpdateOperationsInput | number
    frontText?: StringFieldUpdateOperationsInput | string
    backText?: StringFieldUpdateOperationsInput | string
    orderIndex?: IntFieldUpdateOperationsInput | number
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchaseCreateInput = {
    amountCents: number
    status: string
    paymentMethod?: string | null
    asaasPaymentId?: string | null
    asaasInvoiceId?: string | null
    asaasPayload?: string | null
    confirmedAt?: Date | string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutPurchasesInput
    deck: DeckCreateNestedOneWithoutPurchasesInput
    asaasPayment?: AsaasPaymentCreateNestedOneWithoutPurchaseInput
  }

  export type PurchaseUncheckedCreateInput = {
    id?: number
    userId: string
    deckId: number
    amountCents: number
    status: string
    paymentMethod?: string | null
    asaasPaymentId?: string | null
    asaasInvoiceId?: string | null
    asaasPayload?: string | null
    confirmedAt?: Date | string | null
    createdAt?: Date | string
    asaasPayment?: AsaasPaymentUncheckedCreateNestedOneWithoutPurchaseInput
  }

  export type PurchaseUpdateInput = {
    amountCents?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    asaasPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    asaasInvoiceId?: NullableStringFieldUpdateOperationsInput | string | null
    asaasPayload?: NullableStringFieldUpdateOperationsInput | string | null
    confirmedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPurchasesNestedInput
    deck?: DeckUpdateOneRequiredWithoutPurchasesNestedInput
    asaasPayment?: AsaasPaymentUpdateOneWithoutPurchaseNestedInput
  }

  export type PurchaseUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    deckId?: IntFieldUpdateOperationsInput | number
    amountCents?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    asaasPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    asaasInvoiceId?: NullableStringFieldUpdateOperationsInput | string | null
    asaasPayload?: NullableStringFieldUpdateOperationsInput | string | null
    confirmedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    asaasPayment?: AsaasPaymentUncheckedUpdateOneWithoutPurchaseNestedInput
  }

  export type PurchaseCreateManyInput = {
    id?: number
    userId: string
    deckId: number
    amountCents: number
    status: string
    paymentMethod?: string | null
    asaasPaymentId?: string | null
    asaasInvoiceId?: string | null
    asaasPayload?: string | null
    confirmedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type PurchaseUpdateManyMutationInput = {
    amountCents?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    asaasPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    asaasInvoiceId?: NullableStringFieldUpdateOperationsInput | string | null
    asaasPayload?: NullableStringFieldUpdateOperationsInput | string | null
    confirmedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchaseUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    deckId?: IntFieldUpdateOperationsInput | number
    amountCents?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    asaasPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    asaasInvoiceId?: NullableStringFieldUpdateOperationsInput | string | null
    asaasPayload?: NullableStringFieldUpdateOperationsInput | string | null
    confirmedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionCreateInput = {
    status: string
    planName: string
    priceCents: number
    asaasSubscriptionId: string
    nextDueDate?: Date | string | null
    lastPaymentDate?: Date | string | null
    currentPeriodEnd?: Date | string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutSubscriptionsInput
    asaasSubscription?: AsaasSubscriptionCreateNestedOneWithoutSubscriptionInput
  }

  export type SubscriptionUncheckedCreateInput = {
    id?: number
    userId: string
    status: string
    planName: string
    priceCents: number
    asaasSubscriptionId: string
    nextDueDate?: Date | string | null
    lastPaymentDate?: Date | string | null
    currentPeriodEnd?: Date | string | null
    createdAt?: Date | string
    asaasSubscription?: AsaasSubscriptionUncheckedCreateNestedOneWithoutSubscriptionInput
  }

  export type SubscriptionUpdateInput = {
    status?: StringFieldUpdateOperationsInput | string
    planName?: StringFieldUpdateOperationsInput | string
    priceCents?: IntFieldUpdateOperationsInput | number
    asaasSubscriptionId?: StringFieldUpdateOperationsInput | string
    nextDueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastPaymentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currentPeriodEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSubscriptionsNestedInput
    asaasSubscription?: AsaasSubscriptionUpdateOneWithoutSubscriptionNestedInput
  }

  export type SubscriptionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    planName?: StringFieldUpdateOperationsInput | string
    priceCents?: IntFieldUpdateOperationsInput | number
    asaasSubscriptionId?: StringFieldUpdateOperationsInput | string
    nextDueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastPaymentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currentPeriodEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    asaasSubscription?: AsaasSubscriptionUncheckedUpdateOneWithoutSubscriptionNestedInput
  }

  export type SubscriptionCreateManyInput = {
    id?: number
    userId: string
    status: string
    planName: string
    priceCents: number
    asaasSubscriptionId: string
    nextDueDate?: Date | string | null
    lastPaymentDate?: Date | string | null
    currentPeriodEnd?: Date | string | null
    createdAt?: Date | string
  }

  export type SubscriptionUpdateManyMutationInput = {
    status?: StringFieldUpdateOperationsInput | string
    planName?: StringFieldUpdateOperationsInput | string
    priceCents?: IntFieldUpdateOperationsInput | number
    asaasSubscriptionId?: StringFieldUpdateOperationsInput | string
    nextDueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastPaymentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currentPeriodEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    planName?: StringFieldUpdateOperationsInput | string
    priceCents?: IntFieldUpdateOperationsInput | number
    asaasSubscriptionId?: StringFieldUpdateOperationsInput | string
    nextDueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastPaymentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currentPeriodEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoriteCreateInput = {
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutFavoritesInput
    deck: DeckCreateNestedOneWithoutFavoritesInput
  }

  export type FavoriteUncheckedCreateInput = {
    id?: number
    userId: string
    deckId: number
    createdAt?: Date | string
  }

  export type FavoriteUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutFavoritesNestedInput
    deck?: DeckUpdateOneRequiredWithoutFavoritesNestedInput
  }

  export type FavoriteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    deckId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoriteCreateManyInput = {
    id?: number
    userId: string
    deckId: number
    createdAt?: Date | string
  }

  export type FavoriteUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoriteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    deckId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AsaasCustomerCreateInput = {
    id: string
    asaasId: string
    name: string
    cpfCnpj?: string | null
    email: string
    phone?: string | null
    mobilePhone?: string | null
    postalCode?: string | null
    address?: string | null
    addressNumber?: string | null
    complement?: string | null
    province?: string | null
    externalReference?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutAsaasCustomerInput
    payments?: AsaasPaymentCreateNestedManyWithoutCustomerInput
    subscriptions?: AsaasSubscriptionCreateNestedManyWithoutCustomerInput
  }

  export type AsaasCustomerUncheckedCreateInput = {
    id: string
    userId: string
    asaasId: string
    name: string
    cpfCnpj?: string | null
    email: string
    phone?: string | null
    mobilePhone?: string | null
    postalCode?: string | null
    address?: string | null
    addressNumber?: string | null
    complement?: string | null
    province?: string | null
    externalReference?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    payments?: AsaasPaymentUncheckedCreateNestedManyWithoutCustomerInput
    subscriptions?: AsaasSubscriptionUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type AsaasCustomerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    asaasId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cpfCnpj?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    mobilePhone?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    addressNumber?: NullableStringFieldUpdateOperationsInput | string | null
    complement?: NullableStringFieldUpdateOperationsInput | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    externalReference?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAsaasCustomerNestedInput
    payments?: AsaasPaymentUpdateManyWithoutCustomerNestedInput
    subscriptions?: AsaasSubscriptionUpdateManyWithoutCustomerNestedInput
  }

  export type AsaasCustomerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    asaasId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cpfCnpj?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    mobilePhone?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    addressNumber?: NullableStringFieldUpdateOperationsInput | string | null
    complement?: NullableStringFieldUpdateOperationsInput | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    externalReference?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: AsaasPaymentUncheckedUpdateManyWithoutCustomerNestedInput
    subscriptions?: AsaasSubscriptionUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type AsaasCustomerCreateManyInput = {
    id: string
    userId: string
    asaasId: string
    name: string
    cpfCnpj?: string | null
    email: string
    phone?: string | null
    mobilePhone?: string | null
    postalCode?: string | null
    address?: string | null
    addressNumber?: string | null
    complement?: string | null
    province?: string | null
    externalReference?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AsaasCustomerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    asaasId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cpfCnpj?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    mobilePhone?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    addressNumber?: NullableStringFieldUpdateOperationsInput | string | null
    complement?: NullableStringFieldUpdateOperationsInput | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    externalReference?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AsaasCustomerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    asaasId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cpfCnpj?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    mobilePhone?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    addressNumber?: NullableStringFieldUpdateOperationsInput | string | null
    complement?: NullableStringFieldUpdateOperationsInput | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    externalReference?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AsaasPaymentCreateInput = {
    id: string
    asaasId: string
    billingType: string
    status: string
    value: number
    dueDate: Date | string
    originalDueDate?: Date | string | null
    description?: string | null
    externalReference?: string | null
    invoiceUrl?: string | null
    bankSlipUrl?: string | null
    pixQrCode?: string | null
    creditCardPaymentLink?: string | null
    confirmedDate?: Date | string | null
    paymentDate?: Date | string | null
    clientPaymentDate?: Date | string | null
    netValue?: number | null
    originalValue?: number | null
    interestValue?: number | null
    discountValue?: number | null
    fineValue?: number | null
    asaasPayload?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    customer: AsaasCustomerCreateNestedOneWithoutPaymentsInput
    purchase?: PurchaseCreateNestedOneWithoutAsaasPaymentInput
  }

  export type AsaasPaymentUncheckedCreateInput = {
    id: string
    customerId: string
    asaasId: string
    purchaseId?: number | null
    billingType: string
    status: string
    value: number
    dueDate: Date | string
    originalDueDate?: Date | string | null
    description?: string | null
    externalReference?: string | null
    invoiceUrl?: string | null
    bankSlipUrl?: string | null
    pixQrCode?: string | null
    creditCardPaymentLink?: string | null
    confirmedDate?: Date | string | null
    paymentDate?: Date | string | null
    clientPaymentDate?: Date | string | null
    netValue?: number | null
    originalValue?: number | null
    interestValue?: number | null
    discountValue?: number | null
    fineValue?: number | null
    asaasPayload?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AsaasPaymentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    asaasId?: StringFieldUpdateOperationsInput | string
    billingType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    value?: FloatFieldUpdateOperationsInput | number
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    originalDueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    externalReference?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bankSlipUrl?: NullableStringFieldUpdateOperationsInput | string | null
    pixQrCode?: NullableStringFieldUpdateOperationsInput | string | null
    creditCardPaymentLink?: NullableStringFieldUpdateOperationsInput | string | null
    confirmedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    clientPaymentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    netValue?: NullableFloatFieldUpdateOperationsInput | number | null
    originalValue?: NullableFloatFieldUpdateOperationsInput | number | null
    interestValue?: NullableFloatFieldUpdateOperationsInput | number | null
    discountValue?: NullableFloatFieldUpdateOperationsInput | number | null
    fineValue?: NullableFloatFieldUpdateOperationsInput | number | null
    asaasPayload?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: AsaasCustomerUpdateOneRequiredWithoutPaymentsNestedInput
    purchase?: PurchaseUpdateOneWithoutAsaasPaymentNestedInput
  }

  export type AsaasPaymentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    asaasId?: StringFieldUpdateOperationsInput | string
    purchaseId?: NullableIntFieldUpdateOperationsInput | number | null
    billingType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    value?: FloatFieldUpdateOperationsInput | number
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    originalDueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    externalReference?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bankSlipUrl?: NullableStringFieldUpdateOperationsInput | string | null
    pixQrCode?: NullableStringFieldUpdateOperationsInput | string | null
    creditCardPaymentLink?: NullableStringFieldUpdateOperationsInput | string | null
    confirmedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    clientPaymentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    netValue?: NullableFloatFieldUpdateOperationsInput | number | null
    originalValue?: NullableFloatFieldUpdateOperationsInput | number | null
    interestValue?: NullableFloatFieldUpdateOperationsInput | number | null
    discountValue?: NullableFloatFieldUpdateOperationsInput | number | null
    fineValue?: NullableFloatFieldUpdateOperationsInput | number | null
    asaasPayload?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AsaasPaymentCreateManyInput = {
    id: string
    customerId: string
    asaasId: string
    purchaseId?: number | null
    billingType: string
    status: string
    value: number
    dueDate: Date | string
    originalDueDate?: Date | string | null
    description?: string | null
    externalReference?: string | null
    invoiceUrl?: string | null
    bankSlipUrl?: string | null
    pixQrCode?: string | null
    creditCardPaymentLink?: string | null
    confirmedDate?: Date | string | null
    paymentDate?: Date | string | null
    clientPaymentDate?: Date | string | null
    netValue?: number | null
    originalValue?: number | null
    interestValue?: number | null
    discountValue?: number | null
    fineValue?: number | null
    asaasPayload?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AsaasPaymentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    asaasId?: StringFieldUpdateOperationsInput | string
    billingType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    value?: FloatFieldUpdateOperationsInput | number
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    originalDueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    externalReference?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bankSlipUrl?: NullableStringFieldUpdateOperationsInput | string | null
    pixQrCode?: NullableStringFieldUpdateOperationsInput | string | null
    creditCardPaymentLink?: NullableStringFieldUpdateOperationsInput | string | null
    confirmedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    clientPaymentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    netValue?: NullableFloatFieldUpdateOperationsInput | number | null
    originalValue?: NullableFloatFieldUpdateOperationsInput | number | null
    interestValue?: NullableFloatFieldUpdateOperationsInput | number | null
    discountValue?: NullableFloatFieldUpdateOperationsInput | number | null
    fineValue?: NullableFloatFieldUpdateOperationsInput | number | null
    asaasPayload?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AsaasPaymentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    asaasId?: StringFieldUpdateOperationsInput | string
    purchaseId?: NullableIntFieldUpdateOperationsInput | number | null
    billingType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    value?: FloatFieldUpdateOperationsInput | number
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    originalDueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    externalReference?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bankSlipUrl?: NullableStringFieldUpdateOperationsInput | string | null
    pixQrCode?: NullableStringFieldUpdateOperationsInput | string | null
    creditCardPaymentLink?: NullableStringFieldUpdateOperationsInput | string | null
    confirmedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    clientPaymentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    netValue?: NullableFloatFieldUpdateOperationsInput | number | null
    originalValue?: NullableFloatFieldUpdateOperationsInput | number | null
    interestValue?: NullableFloatFieldUpdateOperationsInput | number | null
    discountValue?: NullableFloatFieldUpdateOperationsInput | number | null
    fineValue?: NullableFloatFieldUpdateOperationsInput | number | null
    asaasPayload?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AsaasSubscriptionCreateInput = {
    id: string
    asaasId: string
    billingType: string
    status: string
    value: number
    nextDueDate: Date | string
    cycle: string
    description?: string | null
    endDate?: Date | string | null
    maxPayments?: number | null
    externalReference?: string | null
    asaasPayload?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    customer: AsaasCustomerCreateNestedOneWithoutSubscriptionsInput
    subscription?: SubscriptionCreateNestedOneWithoutAsaasSubscriptionInput
  }

  export type AsaasSubscriptionUncheckedCreateInput = {
    id: string
    customerId: string
    asaasId: string
    subscriptionId?: number | null
    billingType: string
    status: string
    value: number
    nextDueDate: Date | string
    cycle: string
    description?: string | null
    endDate?: Date | string | null
    maxPayments?: number | null
    externalReference?: string | null
    asaasPayload?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AsaasSubscriptionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    asaasId?: StringFieldUpdateOperationsInput | string
    billingType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    value?: FloatFieldUpdateOperationsInput | number
    nextDueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    cycle?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    maxPayments?: NullableIntFieldUpdateOperationsInput | number | null
    externalReference?: NullableStringFieldUpdateOperationsInput | string | null
    asaasPayload?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: AsaasCustomerUpdateOneRequiredWithoutSubscriptionsNestedInput
    subscription?: SubscriptionUpdateOneWithoutAsaasSubscriptionNestedInput
  }

  export type AsaasSubscriptionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    asaasId?: StringFieldUpdateOperationsInput | string
    subscriptionId?: NullableIntFieldUpdateOperationsInput | number | null
    billingType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    value?: FloatFieldUpdateOperationsInput | number
    nextDueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    cycle?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    maxPayments?: NullableIntFieldUpdateOperationsInput | number | null
    externalReference?: NullableStringFieldUpdateOperationsInput | string | null
    asaasPayload?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AsaasSubscriptionCreateManyInput = {
    id: string
    customerId: string
    asaasId: string
    subscriptionId?: number | null
    billingType: string
    status: string
    value: number
    nextDueDate: Date | string
    cycle: string
    description?: string | null
    endDate?: Date | string | null
    maxPayments?: number | null
    externalReference?: string | null
    asaasPayload?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AsaasSubscriptionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    asaasId?: StringFieldUpdateOperationsInput | string
    billingType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    value?: FloatFieldUpdateOperationsInput | number
    nextDueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    cycle?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    maxPayments?: NullableIntFieldUpdateOperationsInput | number | null
    externalReference?: NullableStringFieldUpdateOperationsInput | string | null
    asaasPayload?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AsaasSubscriptionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    asaasId?: StringFieldUpdateOperationsInput | string
    subscriptionId?: NullableIntFieldUpdateOperationsInput | number | null
    billingType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    value?: FloatFieldUpdateOperationsInput | number
    nextDueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    cycle?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    maxPayments?: NullableIntFieldUpdateOperationsInput | number | null
    externalReference?: NullableStringFieldUpdateOperationsInput | string | null
    asaasPayload?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AsaasWebhookCreateInput = {
    id: string
    event: string
    object: string
    objectId: string
    payload: string
    processed?: boolean
    processedAt?: Date | string | null
    errorLog?: string | null
    createdAt?: Date | string
  }

  export type AsaasWebhookUncheckedCreateInput = {
    id: string
    event: string
    object: string
    objectId: string
    payload: string
    processed?: boolean
    processedAt?: Date | string | null
    errorLog?: string | null
    createdAt?: Date | string
  }

  export type AsaasWebhookUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    event?: StringFieldUpdateOperationsInput | string
    object?: StringFieldUpdateOperationsInput | string
    objectId?: StringFieldUpdateOperationsInput | string
    payload?: StringFieldUpdateOperationsInput | string
    processed?: BoolFieldUpdateOperationsInput | boolean
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorLog?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AsaasWebhookUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    event?: StringFieldUpdateOperationsInput | string
    object?: StringFieldUpdateOperationsInput | string
    objectId?: StringFieldUpdateOperationsInput | string
    payload?: StringFieldUpdateOperationsInput | string
    processed?: BoolFieldUpdateOperationsInput | boolean
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorLog?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AsaasWebhookCreateManyInput = {
    id: string
    event: string
    object: string
    objectId: string
    payload: string
    processed?: boolean
    processedAt?: Date | string | null
    errorLog?: string | null
    createdAt?: Date | string
  }

  export type AsaasWebhookUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    event?: StringFieldUpdateOperationsInput | string
    object?: StringFieldUpdateOperationsInput | string
    objectId?: StringFieldUpdateOperationsInput | string
    payload?: StringFieldUpdateOperationsInput | string
    processed?: BoolFieldUpdateOperationsInput | boolean
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorLog?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AsaasWebhookUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    event?: StringFieldUpdateOperationsInput | string
    object?: StringFieldUpdateOperationsInput | string
    objectId?: StringFieldUpdateOperationsInput | string
    payload?: StringFieldUpdateOperationsInput | string
    processed?: BoolFieldUpdateOperationsInput | boolean
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorLog?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type DeckListRelationFilter = {
    every?: DeckWhereInput
    some?: DeckWhereInput
    none?: DeckWhereInput
  }

  export type PurchaseListRelationFilter = {
    every?: PurchaseWhereInput
    some?: PurchaseWhereInput
    none?: PurchaseWhereInput
  }

  export type SubscriptionListRelationFilter = {
    every?: SubscriptionWhereInput
    some?: SubscriptionWhereInput
    none?: SubscriptionWhereInput
  }

  export type FavoriteListRelationFilter = {
    every?: FavoriteWhereInput
    some?: FavoriteWhereInput
    none?: FavoriteWhereInput
  }

  export type AsaasCustomerNullableScalarRelationFilter = {
    is?: AsaasCustomerWhereInput | null
    isNot?: AsaasCustomerWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DeckOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PurchaseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SubscriptionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FavoriteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    role?: SortOrder
    asaasCustomerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    role?: SortOrder
    asaasCustomerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    role?: SortOrder
    asaasCustomerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    userId?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    userId?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    userId?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    idToken?: SortOrder
    accessTokenExpiresAt?: SortOrder
    refreshTokenExpiresAt?: SortOrder
    scope?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    idToken?: SortOrder
    accessTokenExpiresAt?: SortOrder
    refreshTokenExpiresAt?: SortOrder
    scope?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    idToken?: SortOrder
    accessTokenExpiresAt?: SortOrder
    refreshTokenExpiresAt?: SortOrder
    scope?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type VerificationCountOrderByAggregateInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VerificationMaxOrderByAggregateInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VerificationMinOrderByAggregateInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type FlashcardListRelationFilter = {
    every?: FlashcardWhereInput
    some?: FlashcardWhereInput
    none?: FlashcardWhereInput
  }

  export type FlashcardOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DeckCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    coverUrl?: SortOrder
    isPublic?: SortOrder
    priceCents?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DeckAvgOrderByAggregateInput = {
    id?: SortOrder
    priceCents?: SortOrder
  }

  export type DeckMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    coverUrl?: SortOrder
    isPublic?: SortOrder
    priceCents?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DeckMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    coverUrl?: SortOrder
    isPublic?: SortOrder
    priceCents?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DeckSumOrderByAggregateInput = {
    id?: SortOrder
    priceCents?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DeckScalarRelationFilter = {
    is?: DeckWhereInput
    isNot?: DeckWhereInput
  }

  export type FlashcardCountOrderByAggregateInput = {
    id?: SortOrder
    deckId?: SortOrder
    frontText?: SortOrder
    backText?: SortOrder
    orderIndex?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FlashcardAvgOrderByAggregateInput = {
    id?: SortOrder
    deckId?: SortOrder
    orderIndex?: SortOrder
  }

  export type FlashcardMaxOrderByAggregateInput = {
    id?: SortOrder
    deckId?: SortOrder
    frontText?: SortOrder
    backText?: SortOrder
    orderIndex?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FlashcardMinOrderByAggregateInput = {
    id?: SortOrder
    deckId?: SortOrder
    frontText?: SortOrder
    backText?: SortOrder
    orderIndex?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FlashcardSumOrderByAggregateInput = {
    id?: SortOrder
    deckId?: SortOrder
    orderIndex?: SortOrder
  }

  export type AsaasPaymentNullableScalarRelationFilter = {
    is?: AsaasPaymentWhereInput | null
    isNot?: AsaasPaymentWhereInput | null
  }

  export type PurchaseCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    deckId?: SortOrder
    amountCents?: SortOrder
    status?: SortOrder
    paymentMethod?: SortOrder
    asaasPaymentId?: SortOrder
    asaasInvoiceId?: SortOrder
    asaasPayload?: SortOrder
    confirmedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type PurchaseAvgOrderByAggregateInput = {
    id?: SortOrder
    deckId?: SortOrder
    amountCents?: SortOrder
  }

  export type PurchaseMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    deckId?: SortOrder
    amountCents?: SortOrder
    status?: SortOrder
    paymentMethod?: SortOrder
    asaasPaymentId?: SortOrder
    asaasInvoiceId?: SortOrder
    asaasPayload?: SortOrder
    confirmedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type PurchaseMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    deckId?: SortOrder
    amountCents?: SortOrder
    status?: SortOrder
    paymentMethod?: SortOrder
    asaasPaymentId?: SortOrder
    asaasInvoiceId?: SortOrder
    asaasPayload?: SortOrder
    confirmedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type PurchaseSumOrderByAggregateInput = {
    id?: SortOrder
    deckId?: SortOrder
    amountCents?: SortOrder
  }

  export type AsaasSubscriptionNullableScalarRelationFilter = {
    is?: AsaasSubscriptionWhereInput | null
    isNot?: AsaasSubscriptionWhereInput | null
  }

  export type SubscriptionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    planName?: SortOrder
    priceCents?: SortOrder
    asaasSubscriptionId?: SortOrder
    nextDueDate?: SortOrder
    lastPaymentDate?: SortOrder
    currentPeriodEnd?: SortOrder
    createdAt?: SortOrder
  }

  export type SubscriptionAvgOrderByAggregateInput = {
    id?: SortOrder
    priceCents?: SortOrder
  }

  export type SubscriptionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    planName?: SortOrder
    priceCents?: SortOrder
    asaasSubscriptionId?: SortOrder
    nextDueDate?: SortOrder
    lastPaymentDate?: SortOrder
    currentPeriodEnd?: SortOrder
    createdAt?: SortOrder
  }

  export type SubscriptionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    planName?: SortOrder
    priceCents?: SortOrder
    asaasSubscriptionId?: SortOrder
    nextDueDate?: SortOrder
    lastPaymentDate?: SortOrder
    currentPeriodEnd?: SortOrder
    createdAt?: SortOrder
  }

  export type SubscriptionSumOrderByAggregateInput = {
    id?: SortOrder
    priceCents?: SortOrder
  }

  export type FavoriteUx_favorites_user_deckCompoundUniqueInput = {
    userId: string
    deckId: number
  }

  export type FavoriteCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    deckId?: SortOrder
    createdAt?: SortOrder
  }

  export type FavoriteAvgOrderByAggregateInput = {
    id?: SortOrder
    deckId?: SortOrder
  }

  export type FavoriteMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    deckId?: SortOrder
    createdAt?: SortOrder
  }

  export type FavoriteMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    deckId?: SortOrder
    createdAt?: SortOrder
  }

  export type FavoriteSumOrderByAggregateInput = {
    id?: SortOrder
    deckId?: SortOrder
  }

  export type AsaasPaymentListRelationFilter = {
    every?: AsaasPaymentWhereInput
    some?: AsaasPaymentWhereInput
    none?: AsaasPaymentWhereInput
  }

  export type AsaasSubscriptionListRelationFilter = {
    every?: AsaasSubscriptionWhereInput
    some?: AsaasSubscriptionWhereInput
    none?: AsaasSubscriptionWhereInput
  }

  export type AsaasPaymentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AsaasSubscriptionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AsaasCustomerCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    asaasId?: SortOrder
    name?: SortOrder
    cpfCnpj?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    mobilePhone?: SortOrder
    postalCode?: SortOrder
    address?: SortOrder
    addressNumber?: SortOrder
    complement?: SortOrder
    province?: SortOrder
    externalReference?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AsaasCustomerMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    asaasId?: SortOrder
    name?: SortOrder
    cpfCnpj?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    mobilePhone?: SortOrder
    postalCode?: SortOrder
    address?: SortOrder
    addressNumber?: SortOrder
    complement?: SortOrder
    province?: SortOrder
    externalReference?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AsaasCustomerMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    asaasId?: SortOrder
    name?: SortOrder
    cpfCnpj?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    mobilePhone?: SortOrder
    postalCode?: SortOrder
    address?: SortOrder
    addressNumber?: SortOrder
    complement?: SortOrder
    province?: SortOrder
    externalReference?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type AsaasCustomerScalarRelationFilter = {
    is?: AsaasCustomerWhereInput
    isNot?: AsaasCustomerWhereInput
  }

  export type PurchaseNullableScalarRelationFilter = {
    is?: PurchaseWhereInput | null
    isNot?: PurchaseWhereInput | null
  }

  export type AsaasPaymentCountOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    asaasId?: SortOrder
    purchaseId?: SortOrder
    billingType?: SortOrder
    status?: SortOrder
    value?: SortOrder
    dueDate?: SortOrder
    originalDueDate?: SortOrder
    description?: SortOrder
    externalReference?: SortOrder
    invoiceUrl?: SortOrder
    bankSlipUrl?: SortOrder
    pixQrCode?: SortOrder
    creditCardPaymentLink?: SortOrder
    confirmedDate?: SortOrder
    paymentDate?: SortOrder
    clientPaymentDate?: SortOrder
    netValue?: SortOrder
    originalValue?: SortOrder
    interestValue?: SortOrder
    discountValue?: SortOrder
    fineValue?: SortOrder
    asaasPayload?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AsaasPaymentAvgOrderByAggregateInput = {
    purchaseId?: SortOrder
    value?: SortOrder
    netValue?: SortOrder
    originalValue?: SortOrder
    interestValue?: SortOrder
    discountValue?: SortOrder
    fineValue?: SortOrder
  }

  export type AsaasPaymentMaxOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    asaasId?: SortOrder
    purchaseId?: SortOrder
    billingType?: SortOrder
    status?: SortOrder
    value?: SortOrder
    dueDate?: SortOrder
    originalDueDate?: SortOrder
    description?: SortOrder
    externalReference?: SortOrder
    invoiceUrl?: SortOrder
    bankSlipUrl?: SortOrder
    pixQrCode?: SortOrder
    creditCardPaymentLink?: SortOrder
    confirmedDate?: SortOrder
    paymentDate?: SortOrder
    clientPaymentDate?: SortOrder
    netValue?: SortOrder
    originalValue?: SortOrder
    interestValue?: SortOrder
    discountValue?: SortOrder
    fineValue?: SortOrder
    asaasPayload?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AsaasPaymentMinOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    asaasId?: SortOrder
    purchaseId?: SortOrder
    billingType?: SortOrder
    status?: SortOrder
    value?: SortOrder
    dueDate?: SortOrder
    originalDueDate?: SortOrder
    description?: SortOrder
    externalReference?: SortOrder
    invoiceUrl?: SortOrder
    bankSlipUrl?: SortOrder
    pixQrCode?: SortOrder
    creditCardPaymentLink?: SortOrder
    confirmedDate?: SortOrder
    paymentDate?: SortOrder
    clientPaymentDate?: SortOrder
    netValue?: SortOrder
    originalValue?: SortOrder
    interestValue?: SortOrder
    discountValue?: SortOrder
    fineValue?: SortOrder
    asaasPayload?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AsaasPaymentSumOrderByAggregateInput = {
    purchaseId?: SortOrder
    value?: SortOrder
    netValue?: SortOrder
    originalValue?: SortOrder
    interestValue?: SortOrder
    discountValue?: SortOrder
    fineValue?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type SubscriptionNullableScalarRelationFilter = {
    is?: SubscriptionWhereInput | null
    isNot?: SubscriptionWhereInput | null
  }

  export type AsaasSubscriptionCountOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    asaasId?: SortOrder
    subscriptionId?: SortOrder
    billingType?: SortOrder
    status?: SortOrder
    value?: SortOrder
    nextDueDate?: SortOrder
    cycle?: SortOrder
    description?: SortOrder
    endDate?: SortOrder
    maxPayments?: SortOrder
    externalReference?: SortOrder
    asaasPayload?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AsaasSubscriptionAvgOrderByAggregateInput = {
    subscriptionId?: SortOrder
    value?: SortOrder
    maxPayments?: SortOrder
  }

  export type AsaasSubscriptionMaxOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    asaasId?: SortOrder
    subscriptionId?: SortOrder
    billingType?: SortOrder
    status?: SortOrder
    value?: SortOrder
    nextDueDate?: SortOrder
    cycle?: SortOrder
    description?: SortOrder
    endDate?: SortOrder
    maxPayments?: SortOrder
    externalReference?: SortOrder
    asaasPayload?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AsaasSubscriptionMinOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    asaasId?: SortOrder
    subscriptionId?: SortOrder
    billingType?: SortOrder
    status?: SortOrder
    value?: SortOrder
    nextDueDate?: SortOrder
    cycle?: SortOrder
    description?: SortOrder
    endDate?: SortOrder
    maxPayments?: SortOrder
    externalReference?: SortOrder
    asaasPayload?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AsaasSubscriptionSumOrderByAggregateInput = {
    subscriptionId?: SortOrder
    value?: SortOrder
    maxPayments?: SortOrder
  }

  export type AsaasWebhookCountOrderByAggregateInput = {
    id?: SortOrder
    event?: SortOrder
    object?: SortOrder
    objectId?: SortOrder
    payload?: SortOrder
    processed?: SortOrder
    processedAt?: SortOrder
    errorLog?: SortOrder
    createdAt?: SortOrder
  }

  export type AsaasWebhookMaxOrderByAggregateInput = {
    id?: SortOrder
    event?: SortOrder
    object?: SortOrder
    objectId?: SortOrder
    payload?: SortOrder
    processed?: SortOrder
    processedAt?: SortOrder
    errorLog?: SortOrder
    createdAt?: SortOrder
  }

  export type AsaasWebhookMinOrderByAggregateInput = {
    id?: SortOrder
    event?: SortOrder
    object?: SortOrder
    objectId?: SortOrder
    payload?: SortOrder
    processed?: SortOrder
    processedAt?: SortOrder
    errorLog?: SortOrder
    createdAt?: SortOrder
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type AccountCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type DeckCreateNestedManyWithoutUserInput = {
    create?: XOR<DeckCreateWithoutUserInput, DeckUncheckedCreateWithoutUserInput> | DeckCreateWithoutUserInput[] | DeckUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DeckCreateOrConnectWithoutUserInput | DeckCreateOrConnectWithoutUserInput[]
    createMany?: DeckCreateManyUserInputEnvelope
    connect?: DeckWhereUniqueInput | DeckWhereUniqueInput[]
  }

  export type PurchaseCreateNestedManyWithoutUserInput = {
    create?: XOR<PurchaseCreateWithoutUserInput, PurchaseUncheckedCreateWithoutUserInput> | PurchaseCreateWithoutUserInput[] | PurchaseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PurchaseCreateOrConnectWithoutUserInput | PurchaseCreateOrConnectWithoutUserInput[]
    createMany?: PurchaseCreateManyUserInputEnvelope
    connect?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
  }

  export type SubscriptionCreateNestedManyWithoutUserInput = {
    create?: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput> | SubscriptionCreateWithoutUserInput[] | SubscriptionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutUserInput | SubscriptionCreateOrConnectWithoutUserInput[]
    createMany?: SubscriptionCreateManyUserInputEnvelope
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
  }

  export type FavoriteCreateNestedManyWithoutUserInput = {
    create?: XOR<FavoriteCreateWithoutUserInput, FavoriteUncheckedCreateWithoutUserInput> | FavoriteCreateWithoutUserInput[] | FavoriteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FavoriteCreateOrConnectWithoutUserInput | FavoriteCreateOrConnectWithoutUserInput[]
    createMany?: FavoriteCreateManyUserInputEnvelope
    connect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
  }

  export type AsaasCustomerCreateNestedOneWithoutUserInput = {
    create?: XOR<AsaasCustomerCreateWithoutUserInput, AsaasCustomerUncheckedCreateWithoutUserInput>
    connectOrCreate?: AsaasCustomerCreateOrConnectWithoutUserInput
    connect?: AsaasCustomerWhereUniqueInput
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type AccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type DeckUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<DeckCreateWithoutUserInput, DeckUncheckedCreateWithoutUserInput> | DeckCreateWithoutUserInput[] | DeckUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DeckCreateOrConnectWithoutUserInput | DeckCreateOrConnectWithoutUserInput[]
    createMany?: DeckCreateManyUserInputEnvelope
    connect?: DeckWhereUniqueInput | DeckWhereUniqueInput[]
  }

  export type PurchaseUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PurchaseCreateWithoutUserInput, PurchaseUncheckedCreateWithoutUserInput> | PurchaseCreateWithoutUserInput[] | PurchaseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PurchaseCreateOrConnectWithoutUserInput | PurchaseCreateOrConnectWithoutUserInput[]
    createMany?: PurchaseCreateManyUserInputEnvelope
    connect?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
  }

  export type SubscriptionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput> | SubscriptionCreateWithoutUserInput[] | SubscriptionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutUserInput | SubscriptionCreateOrConnectWithoutUserInput[]
    createMany?: SubscriptionCreateManyUserInputEnvelope
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
  }

  export type FavoriteUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<FavoriteCreateWithoutUserInput, FavoriteUncheckedCreateWithoutUserInput> | FavoriteCreateWithoutUserInput[] | FavoriteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FavoriteCreateOrConnectWithoutUserInput | FavoriteCreateOrConnectWithoutUserInput[]
    createMany?: FavoriteCreateManyUserInputEnvelope
    connect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
  }

  export type AsaasCustomerUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<AsaasCustomerCreateWithoutUserInput, AsaasCustomerUncheckedCreateWithoutUserInput>
    connectOrCreate?: AsaasCustomerCreateOrConnectWithoutUserInput
    connect?: AsaasCustomerWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type AccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type DeckUpdateManyWithoutUserNestedInput = {
    create?: XOR<DeckCreateWithoutUserInput, DeckUncheckedCreateWithoutUserInput> | DeckCreateWithoutUserInput[] | DeckUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DeckCreateOrConnectWithoutUserInput | DeckCreateOrConnectWithoutUserInput[]
    upsert?: DeckUpsertWithWhereUniqueWithoutUserInput | DeckUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DeckCreateManyUserInputEnvelope
    set?: DeckWhereUniqueInput | DeckWhereUniqueInput[]
    disconnect?: DeckWhereUniqueInput | DeckWhereUniqueInput[]
    delete?: DeckWhereUniqueInput | DeckWhereUniqueInput[]
    connect?: DeckWhereUniqueInput | DeckWhereUniqueInput[]
    update?: DeckUpdateWithWhereUniqueWithoutUserInput | DeckUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DeckUpdateManyWithWhereWithoutUserInput | DeckUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DeckScalarWhereInput | DeckScalarWhereInput[]
  }

  export type PurchaseUpdateManyWithoutUserNestedInput = {
    create?: XOR<PurchaseCreateWithoutUserInput, PurchaseUncheckedCreateWithoutUserInput> | PurchaseCreateWithoutUserInput[] | PurchaseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PurchaseCreateOrConnectWithoutUserInput | PurchaseCreateOrConnectWithoutUserInput[]
    upsert?: PurchaseUpsertWithWhereUniqueWithoutUserInput | PurchaseUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PurchaseCreateManyUserInputEnvelope
    set?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    disconnect?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    delete?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    connect?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    update?: PurchaseUpdateWithWhereUniqueWithoutUserInput | PurchaseUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PurchaseUpdateManyWithWhereWithoutUserInput | PurchaseUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PurchaseScalarWhereInput | PurchaseScalarWhereInput[]
  }

  export type SubscriptionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput> | SubscriptionCreateWithoutUserInput[] | SubscriptionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutUserInput | SubscriptionCreateOrConnectWithoutUserInput[]
    upsert?: SubscriptionUpsertWithWhereUniqueWithoutUserInput | SubscriptionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SubscriptionCreateManyUserInputEnvelope
    set?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    disconnect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    delete?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    update?: SubscriptionUpdateWithWhereUniqueWithoutUserInput | SubscriptionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SubscriptionUpdateManyWithWhereWithoutUserInput | SubscriptionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SubscriptionScalarWhereInput | SubscriptionScalarWhereInput[]
  }

  export type FavoriteUpdateManyWithoutUserNestedInput = {
    create?: XOR<FavoriteCreateWithoutUserInput, FavoriteUncheckedCreateWithoutUserInput> | FavoriteCreateWithoutUserInput[] | FavoriteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FavoriteCreateOrConnectWithoutUserInput | FavoriteCreateOrConnectWithoutUserInput[]
    upsert?: FavoriteUpsertWithWhereUniqueWithoutUserInput | FavoriteUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FavoriteCreateManyUserInputEnvelope
    set?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    disconnect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    delete?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    connect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    update?: FavoriteUpdateWithWhereUniqueWithoutUserInput | FavoriteUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FavoriteUpdateManyWithWhereWithoutUserInput | FavoriteUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FavoriteScalarWhereInput | FavoriteScalarWhereInput[]
  }

  export type AsaasCustomerUpdateOneWithoutUserNestedInput = {
    create?: XOR<AsaasCustomerCreateWithoutUserInput, AsaasCustomerUncheckedCreateWithoutUserInput>
    connectOrCreate?: AsaasCustomerCreateOrConnectWithoutUserInput
    upsert?: AsaasCustomerUpsertWithoutUserInput
    disconnect?: AsaasCustomerWhereInput | boolean
    delete?: AsaasCustomerWhereInput | boolean
    connect?: AsaasCustomerWhereUniqueInput
    update?: XOR<XOR<AsaasCustomerUpdateToOneWithWhereWithoutUserInput, AsaasCustomerUpdateWithoutUserInput>, AsaasCustomerUncheckedUpdateWithoutUserInput>
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type AccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type DeckUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<DeckCreateWithoutUserInput, DeckUncheckedCreateWithoutUserInput> | DeckCreateWithoutUserInput[] | DeckUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DeckCreateOrConnectWithoutUserInput | DeckCreateOrConnectWithoutUserInput[]
    upsert?: DeckUpsertWithWhereUniqueWithoutUserInput | DeckUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DeckCreateManyUserInputEnvelope
    set?: DeckWhereUniqueInput | DeckWhereUniqueInput[]
    disconnect?: DeckWhereUniqueInput | DeckWhereUniqueInput[]
    delete?: DeckWhereUniqueInput | DeckWhereUniqueInput[]
    connect?: DeckWhereUniqueInput | DeckWhereUniqueInput[]
    update?: DeckUpdateWithWhereUniqueWithoutUserInput | DeckUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DeckUpdateManyWithWhereWithoutUserInput | DeckUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DeckScalarWhereInput | DeckScalarWhereInput[]
  }

  export type PurchaseUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PurchaseCreateWithoutUserInput, PurchaseUncheckedCreateWithoutUserInput> | PurchaseCreateWithoutUserInput[] | PurchaseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PurchaseCreateOrConnectWithoutUserInput | PurchaseCreateOrConnectWithoutUserInput[]
    upsert?: PurchaseUpsertWithWhereUniqueWithoutUserInput | PurchaseUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PurchaseCreateManyUserInputEnvelope
    set?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    disconnect?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    delete?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    connect?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    update?: PurchaseUpdateWithWhereUniqueWithoutUserInput | PurchaseUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PurchaseUpdateManyWithWhereWithoutUserInput | PurchaseUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PurchaseScalarWhereInput | PurchaseScalarWhereInput[]
  }

  export type SubscriptionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput> | SubscriptionCreateWithoutUserInput[] | SubscriptionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutUserInput | SubscriptionCreateOrConnectWithoutUserInput[]
    upsert?: SubscriptionUpsertWithWhereUniqueWithoutUserInput | SubscriptionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SubscriptionCreateManyUserInputEnvelope
    set?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    disconnect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    delete?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    update?: SubscriptionUpdateWithWhereUniqueWithoutUserInput | SubscriptionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SubscriptionUpdateManyWithWhereWithoutUserInput | SubscriptionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SubscriptionScalarWhereInput | SubscriptionScalarWhereInput[]
  }

  export type FavoriteUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<FavoriteCreateWithoutUserInput, FavoriteUncheckedCreateWithoutUserInput> | FavoriteCreateWithoutUserInput[] | FavoriteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FavoriteCreateOrConnectWithoutUserInput | FavoriteCreateOrConnectWithoutUserInput[]
    upsert?: FavoriteUpsertWithWhereUniqueWithoutUserInput | FavoriteUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FavoriteCreateManyUserInputEnvelope
    set?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    disconnect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    delete?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    connect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    update?: FavoriteUpdateWithWhereUniqueWithoutUserInput | FavoriteUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FavoriteUpdateManyWithWhereWithoutUserInput | FavoriteUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FavoriteScalarWhereInput | FavoriteScalarWhereInput[]
  }

  export type AsaasCustomerUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<AsaasCustomerCreateWithoutUserInput, AsaasCustomerUncheckedCreateWithoutUserInput>
    connectOrCreate?: AsaasCustomerCreateOrConnectWithoutUserInput
    upsert?: AsaasCustomerUpsertWithoutUserInput
    disconnect?: AsaasCustomerWhereInput | boolean
    delete?: AsaasCustomerWhereInput | boolean
    connect?: AsaasCustomerWhereUniqueInput
    update?: XOR<XOR<AsaasCustomerUpdateToOneWithWhereWithoutUserInput, AsaasCustomerUpdateWithoutUserInput>, AsaasCustomerUncheckedUpdateWithoutUserInput>
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserCreateNestedOneWithoutAccountsInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    upsert?: UserUpsertWithoutAccountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccountsInput, UserUpdateWithoutAccountsInput>, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserCreateNestedOneWithoutDecksInput = {
    create?: XOR<UserCreateWithoutDecksInput, UserUncheckedCreateWithoutDecksInput>
    connectOrCreate?: UserCreateOrConnectWithoutDecksInput
    connect?: UserWhereUniqueInput
  }

  export type FlashcardCreateNestedManyWithoutDeckInput = {
    create?: XOR<FlashcardCreateWithoutDeckInput, FlashcardUncheckedCreateWithoutDeckInput> | FlashcardCreateWithoutDeckInput[] | FlashcardUncheckedCreateWithoutDeckInput[]
    connectOrCreate?: FlashcardCreateOrConnectWithoutDeckInput | FlashcardCreateOrConnectWithoutDeckInput[]
    createMany?: FlashcardCreateManyDeckInputEnvelope
    connect?: FlashcardWhereUniqueInput | FlashcardWhereUniqueInput[]
  }

  export type PurchaseCreateNestedManyWithoutDeckInput = {
    create?: XOR<PurchaseCreateWithoutDeckInput, PurchaseUncheckedCreateWithoutDeckInput> | PurchaseCreateWithoutDeckInput[] | PurchaseUncheckedCreateWithoutDeckInput[]
    connectOrCreate?: PurchaseCreateOrConnectWithoutDeckInput | PurchaseCreateOrConnectWithoutDeckInput[]
    createMany?: PurchaseCreateManyDeckInputEnvelope
    connect?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
  }

  export type FavoriteCreateNestedManyWithoutDeckInput = {
    create?: XOR<FavoriteCreateWithoutDeckInput, FavoriteUncheckedCreateWithoutDeckInput> | FavoriteCreateWithoutDeckInput[] | FavoriteUncheckedCreateWithoutDeckInput[]
    connectOrCreate?: FavoriteCreateOrConnectWithoutDeckInput | FavoriteCreateOrConnectWithoutDeckInput[]
    createMany?: FavoriteCreateManyDeckInputEnvelope
    connect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
  }

  export type FlashcardUncheckedCreateNestedManyWithoutDeckInput = {
    create?: XOR<FlashcardCreateWithoutDeckInput, FlashcardUncheckedCreateWithoutDeckInput> | FlashcardCreateWithoutDeckInput[] | FlashcardUncheckedCreateWithoutDeckInput[]
    connectOrCreate?: FlashcardCreateOrConnectWithoutDeckInput | FlashcardCreateOrConnectWithoutDeckInput[]
    createMany?: FlashcardCreateManyDeckInputEnvelope
    connect?: FlashcardWhereUniqueInput | FlashcardWhereUniqueInput[]
  }

  export type PurchaseUncheckedCreateNestedManyWithoutDeckInput = {
    create?: XOR<PurchaseCreateWithoutDeckInput, PurchaseUncheckedCreateWithoutDeckInput> | PurchaseCreateWithoutDeckInput[] | PurchaseUncheckedCreateWithoutDeckInput[]
    connectOrCreate?: PurchaseCreateOrConnectWithoutDeckInput | PurchaseCreateOrConnectWithoutDeckInput[]
    createMany?: PurchaseCreateManyDeckInputEnvelope
    connect?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
  }

  export type FavoriteUncheckedCreateNestedManyWithoutDeckInput = {
    create?: XOR<FavoriteCreateWithoutDeckInput, FavoriteUncheckedCreateWithoutDeckInput> | FavoriteCreateWithoutDeckInput[] | FavoriteUncheckedCreateWithoutDeckInput[]
    connectOrCreate?: FavoriteCreateOrConnectWithoutDeckInput | FavoriteCreateOrConnectWithoutDeckInput[]
    createMany?: FavoriteCreateManyDeckInputEnvelope
    connect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutDecksNestedInput = {
    create?: XOR<UserCreateWithoutDecksInput, UserUncheckedCreateWithoutDecksInput>
    connectOrCreate?: UserCreateOrConnectWithoutDecksInput
    upsert?: UserUpsertWithoutDecksInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDecksInput, UserUpdateWithoutDecksInput>, UserUncheckedUpdateWithoutDecksInput>
  }

  export type FlashcardUpdateManyWithoutDeckNestedInput = {
    create?: XOR<FlashcardCreateWithoutDeckInput, FlashcardUncheckedCreateWithoutDeckInput> | FlashcardCreateWithoutDeckInput[] | FlashcardUncheckedCreateWithoutDeckInput[]
    connectOrCreate?: FlashcardCreateOrConnectWithoutDeckInput | FlashcardCreateOrConnectWithoutDeckInput[]
    upsert?: FlashcardUpsertWithWhereUniqueWithoutDeckInput | FlashcardUpsertWithWhereUniqueWithoutDeckInput[]
    createMany?: FlashcardCreateManyDeckInputEnvelope
    set?: FlashcardWhereUniqueInput | FlashcardWhereUniqueInput[]
    disconnect?: FlashcardWhereUniqueInput | FlashcardWhereUniqueInput[]
    delete?: FlashcardWhereUniqueInput | FlashcardWhereUniqueInput[]
    connect?: FlashcardWhereUniqueInput | FlashcardWhereUniqueInput[]
    update?: FlashcardUpdateWithWhereUniqueWithoutDeckInput | FlashcardUpdateWithWhereUniqueWithoutDeckInput[]
    updateMany?: FlashcardUpdateManyWithWhereWithoutDeckInput | FlashcardUpdateManyWithWhereWithoutDeckInput[]
    deleteMany?: FlashcardScalarWhereInput | FlashcardScalarWhereInput[]
  }

  export type PurchaseUpdateManyWithoutDeckNestedInput = {
    create?: XOR<PurchaseCreateWithoutDeckInput, PurchaseUncheckedCreateWithoutDeckInput> | PurchaseCreateWithoutDeckInput[] | PurchaseUncheckedCreateWithoutDeckInput[]
    connectOrCreate?: PurchaseCreateOrConnectWithoutDeckInput | PurchaseCreateOrConnectWithoutDeckInput[]
    upsert?: PurchaseUpsertWithWhereUniqueWithoutDeckInput | PurchaseUpsertWithWhereUniqueWithoutDeckInput[]
    createMany?: PurchaseCreateManyDeckInputEnvelope
    set?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    disconnect?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    delete?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    connect?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    update?: PurchaseUpdateWithWhereUniqueWithoutDeckInput | PurchaseUpdateWithWhereUniqueWithoutDeckInput[]
    updateMany?: PurchaseUpdateManyWithWhereWithoutDeckInput | PurchaseUpdateManyWithWhereWithoutDeckInput[]
    deleteMany?: PurchaseScalarWhereInput | PurchaseScalarWhereInput[]
  }

  export type FavoriteUpdateManyWithoutDeckNestedInput = {
    create?: XOR<FavoriteCreateWithoutDeckInput, FavoriteUncheckedCreateWithoutDeckInput> | FavoriteCreateWithoutDeckInput[] | FavoriteUncheckedCreateWithoutDeckInput[]
    connectOrCreate?: FavoriteCreateOrConnectWithoutDeckInput | FavoriteCreateOrConnectWithoutDeckInput[]
    upsert?: FavoriteUpsertWithWhereUniqueWithoutDeckInput | FavoriteUpsertWithWhereUniqueWithoutDeckInput[]
    createMany?: FavoriteCreateManyDeckInputEnvelope
    set?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    disconnect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    delete?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    connect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    update?: FavoriteUpdateWithWhereUniqueWithoutDeckInput | FavoriteUpdateWithWhereUniqueWithoutDeckInput[]
    updateMany?: FavoriteUpdateManyWithWhereWithoutDeckInput | FavoriteUpdateManyWithWhereWithoutDeckInput[]
    deleteMany?: FavoriteScalarWhereInput | FavoriteScalarWhereInput[]
  }

  export type FlashcardUncheckedUpdateManyWithoutDeckNestedInput = {
    create?: XOR<FlashcardCreateWithoutDeckInput, FlashcardUncheckedCreateWithoutDeckInput> | FlashcardCreateWithoutDeckInput[] | FlashcardUncheckedCreateWithoutDeckInput[]
    connectOrCreate?: FlashcardCreateOrConnectWithoutDeckInput | FlashcardCreateOrConnectWithoutDeckInput[]
    upsert?: FlashcardUpsertWithWhereUniqueWithoutDeckInput | FlashcardUpsertWithWhereUniqueWithoutDeckInput[]
    createMany?: FlashcardCreateManyDeckInputEnvelope
    set?: FlashcardWhereUniqueInput | FlashcardWhereUniqueInput[]
    disconnect?: FlashcardWhereUniqueInput | FlashcardWhereUniqueInput[]
    delete?: FlashcardWhereUniqueInput | FlashcardWhereUniqueInput[]
    connect?: FlashcardWhereUniqueInput | FlashcardWhereUniqueInput[]
    update?: FlashcardUpdateWithWhereUniqueWithoutDeckInput | FlashcardUpdateWithWhereUniqueWithoutDeckInput[]
    updateMany?: FlashcardUpdateManyWithWhereWithoutDeckInput | FlashcardUpdateManyWithWhereWithoutDeckInput[]
    deleteMany?: FlashcardScalarWhereInput | FlashcardScalarWhereInput[]
  }

  export type PurchaseUncheckedUpdateManyWithoutDeckNestedInput = {
    create?: XOR<PurchaseCreateWithoutDeckInput, PurchaseUncheckedCreateWithoutDeckInput> | PurchaseCreateWithoutDeckInput[] | PurchaseUncheckedCreateWithoutDeckInput[]
    connectOrCreate?: PurchaseCreateOrConnectWithoutDeckInput | PurchaseCreateOrConnectWithoutDeckInput[]
    upsert?: PurchaseUpsertWithWhereUniqueWithoutDeckInput | PurchaseUpsertWithWhereUniqueWithoutDeckInput[]
    createMany?: PurchaseCreateManyDeckInputEnvelope
    set?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    disconnect?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    delete?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    connect?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    update?: PurchaseUpdateWithWhereUniqueWithoutDeckInput | PurchaseUpdateWithWhereUniqueWithoutDeckInput[]
    updateMany?: PurchaseUpdateManyWithWhereWithoutDeckInput | PurchaseUpdateManyWithWhereWithoutDeckInput[]
    deleteMany?: PurchaseScalarWhereInput | PurchaseScalarWhereInput[]
  }

  export type FavoriteUncheckedUpdateManyWithoutDeckNestedInput = {
    create?: XOR<FavoriteCreateWithoutDeckInput, FavoriteUncheckedCreateWithoutDeckInput> | FavoriteCreateWithoutDeckInput[] | FavoriteUncheckedCreateWithoutDeckInput[]
    connectOrCreate?: FavoriteCreateOrConnectWithoutDeckInput | FavoriteCreateOrConnectWithoutDeckInput[]
    upsert?: FavoriteUpsertWithWhereUniqueWithoutDeckInput | FavoriteUpsertWithWhereUniqueWithoutDeckInput[]
    createMany?: FavoriteCreateManyDeckInputEnvelope
    set?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    disconnect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    delete?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    connect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    update?: FavoriteUpdateWithWhereUniqueWithoutDeckInput | FavoriteUpdateWithWhereUniqueWithoutDeckInput[]
    updateMany?: FavoriteUpdateManyWithWhereWithoutDeckInput | FavoriteUpdateManyWithWhereWithoutDeckInput[]
    deleteMany?: FavoriteScalarWhereInput | FavoriteScalarWhereInput[]
  }

  export type DeckCreateNestedOneWithoutFlashcardsInput = {
    create?: XOR<DeckCreateWithoutFlashcardsInput, DeckUncheckedCreateWithoutFlashcardsInput>
    connectOrCreate?: DeckCreateOrConnectWithoutFlashcardsInput
    connect?: DeckWhereUniqueInput
  }

  export type DeckUpdateOneRequiredWithoutFlashcardsNestedInput = {
    create?: XOR<DeckCreateWithoutFlashcardsInput, DeckUncheckedCreateWithoutFlashcardsInput>
    connectOrCreate?: DeckCreateOrConnectWithoutFlashcardsInput
    upsert?: DeckUpsertWithoutFlashcardsInput
    connect?: DeckWhereUniqueInput
    update?: XOR<XOR<DeckUpdateToOneWithWhereWithoutFlashcardsInput, DeckUpdateWithoutFlashcardsInput>, DeckUncheckedUpdateWithoutFlashcardsInput>
  }

  export type UserCreateNestedOneWithoutPurchasesInput = {
    create?: XOR<UserCreateWithoutPurchasesInput, UserUncheckedCreateWithoutPurchasesInput>
    connectOrCreate?: UserCreateOrConnectWithoutPurchasesInput
    connect?: UserWhereUniqueInput
  }

  export type DeckCreateNestedOneWithoutPurchasesInput = {
    create?: XOR<DeckCreateWithoutPurchasesInput, DeckUncheckedCreateWithoutPurchasesInput>
    connectOrCreate?: DeckCreateOrConnectWithoutPurchasesInput
    connect?: DeckWhereUniqueInput
  }

  export type AsaasPaymentCreateNestedOneWithoutPurchaseInput = {
    create?: XOR<AsaasPaymentCreateWithoutPurchaseInput, AsaasPaymentUncheckedCreateWithoutPurchaseInput>
    connectOrCreate?: AsaasPaymentCreateOrConnectWithoutPurchaseInput
    connect?: AsaasPaymentWhereUniqueInput
  }

  export type AsaasPaymentUncheckedCreateNestedOneWithoutPurchaseInput = {
    create?: XOR<AsaasPaymentCreateWithoutPurchaseInput, AsaasPaymentUncheckedCreateWithoutPurchaseInput>
    connectOrCreate?: AsaasPaymentCreateOrConnectWithoutPurchaseInput
    connect?: AsaasPaymentWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutPurchasesNestedInput = {
    create?: XOR<UserCreateWithoutPurchasesInput, UserUncheckedCreateWithoutPurchasesInput>
    connectOrCreate?: UserCreateOrConnectWithoutPurchasesInput
    upsert?: UserUpsertWithoutPurchasesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPurchasesInput, UserUpdateWithoutPurchasesInput>, UserUncheckedUpdateWithoutPurchasesInput>
  }

  export type DeckUpdateOneRequiredWithoutPurchasesNestedInput = {
    create?: XOR<DeckCreateWithoutPurchasesInput, DeckUncheckedCreateWithoutPurchasesInput>
    connectOrCreate?: DeckCreateOrConnectWithoutPurchasesInput
    upsert?: DeckUpsertWithoutPurchasesInput
    connect?: DeckWhereUniqueInput
    update?: XOR<XOR<DeckUpdateToOneWithWhereWithoutPurchasesInput, DeckUpdateWithoutPurchasesInput>, DeckUncheckedUpdateWithoutPurchasesInput>
  }

  export type AsaasPaymentUpdateOneWithoutPurchaseNestedInput = {
    create?: XOR<AsaasPaymentCreateWithoutPurchaseInput, AsaasPaymentUncheckedCreateWithoutPurchaseInput>
    connectOrCreate?: AsaasPaymentCreateOrConnectWithoutPurchaseInput
    upsert?: AsaasPaymentUpsertWithoutPurchaseInput
    disconnect?: AsaasPaymentWhereInput | boolean
    delete?: AsaasPaymentWhereInput | boolean
    connect?: AsaasPaymentWhereUniqueInput
    update?: XOR<XOR<AsaasPaymentUpdateToOneWithWhereWithoutPurchaseInput, AsaasPaymentUpdateWithoutPurchaseInput>, AsaasPaymentUncheckedUpdateWithoutPurchaseInput>
  }

  export type AsaasPaymentUncheckedUpdateOneWithoutPurchaseNestedInput = {
    create?: XOR<AsaasPaymentCreateWithoutPurchaseInput, AsaasPaymentUncheckedCreateWithoutPurchaseInput>
    connectOrCreate?: AsaasPaymentCreateOrConnectWithoutPurchaseInput
    upsert?: AsaasPaymentUpsertWithoutPurchaseInput
    disconnect?: AsaasPaymentWhereInput | boolean
    delete?: AsaasPaymentWhereInput | boolean
    connect?: AsaasPaymentWhereUniqueInput
    update?: XOR<XOR<AsaasPaymentUpdateToOneWithWhereWithoutPurchaseInput, AsaasPaymentUpdateWithoutPurchaseInput>, AsaasPaymentUncheckedUpdateWithoutPurchaseInput>
  }

  export type UserCreateNestedOneWithoutSubscriptionsInput = {
    create?: XOR<UserCreateWithoutSubscriptionsInput, UserUncheckedCreateWithoutSubscriptionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSubscriptionsInput
    connect?: UserWhereUniqueInput
  }

  export type AsaasSubscriptionCreateNestedOneWithoutSubscriptionInput = {
    create?: XOR<AsaasSubscriptionCreateWithoutSubscriptionInput, AsaasSubscriptionUncheckedCreateWithoutSubscriptionInput>
    connectOrCreate?: AsaasSubscriptionCreateOrConnectWithoutSubscriptionInput
    connect?: AsaasSubscriptionWhereUniqueInput
  }

  export type AsaasSubscriptionUncheckedCreateNestedOneWithoutSubscriptionInput = {
    create?: XOR<AsaasSubscriptionCreateWithoutSubscriptionInput, AsaasSubscriptionUncheckedCreateWithoutSubscriptionInput>
    connectOrCreate?: AsaasSubscriptionCreateOrConnectWithoutSubscriptionInput
    connect?: AsaasSubscriptionWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSubscriptionsNestedInput = {
    create?: XOR<UserCreateWithoutSubscriptionsInput, UserUncheckedCreateWithoutSubscriptionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSubscriptionsInput
    upsert?: UserUpsertWithoutSubscriptionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSubscriptionsInput, UserUpdateWithoutSubscriptionsInput>, UserUncheckedUpdateWithoutSubscriptionsInput>
  }

  export type AsaasSubscriptionUpdateOneWithoutSubscriptionNestedInput = {
    create?: XOR<AsaasSubscriptionCreateWithoutSubscriptionInput, AsaasSubscriptionUncheckedCreateWithoutSubscriptionInput>
    connectOrCreate?: AsaasSubscriptionCreateOrConnectWithoutSubscriptionInput
    upsert?: AsaasSubscriptionUpsertWithoutSubscriptionInput
    disconnect?: AsaasSubscriptionWhereInput | boolean
    delete?: AsaasSubscriptionWhereInput | boolean
    connect?: AsaasSubscriptionWhereUniqueInput
    update?: XOR<XOR<AsaasSubscriptionUpdateToOneWithWhereWithoutSubscriptionInput, AsaasSubscriptionUpdateWithoutSubscriptionInput>, AsaasSubscriptionUncheckedUpdateWithoutSubscriptionInput>
  }

  export type AsaasSubscriptionUncheckedUpdateOneWithoutSubscriptionNestedInput = {
    create?: XOR<AsaasSubscriptionCreateWithoutSubscriptionInput, AsaasSubscriptionUncheckedCreateWithoutSubscriptionInput>
    connectOrCreate?: AsaasSubscriptionCreateOrConnectWithoutSubscriptionInput
    upsert?: AsaasSubscriptionUpsertWithoutSubscriptionInput
    disconnect?: AsaasSubscriptionWhereInput | boolean
    delete?: AsaasSubscriptionWhereInput | boolean
    connect?: AsaasSubscriptionWhereUniqueInput
    update?: XOR<XOR<AsaasSubscriptionUpdateToOneWithWhereWithoutSubscriptionInput, AsaasSubscriptionUpdateWithoutSubscriptionInput>, AsaasSubscriptionUncheckedUpdateWithoutSubscriptionInput>
  }

  export type UserCreateNestedOneWithoutFavoritesInput = {
    create?: XOR<UserCreateWithoutFavoritesInput, UserUncheckedCreateWithoutFavoritesInput>
    connectOrCreate?: UserCreateOrConnectWithoutFavoritesInput
    connect?: UserWhereUniqueInput
  }

  export type DeckCreateNestedOneWithoutFavoritesInput = {
    create?: XOR<DeckCreateWithoutFavoritesInput, DeckUncheckedCreateWithoutFavoritesInput>
    connectOrCreate?: DeckCreateOrConnectWithoutFavoritesInput
    connect?: DeckWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutFavoritesNestedInput = {
    create?: XOR<UserCreateWithoutFavoritesInput, UserUncheckedCreateWithoutFavoritesInput>
    connectOrCreate?: UserCreateOrConnectWithoutFavoritesInput
    upsert?: UserUpsertWithoutFavoritesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFavoritesInput, UserUpdateWithoutFavoritesInput>, UserUncheckedUpdateWithoutFavoritesInput>
  }

  export type DeckUpdateOneRequiredWithoutFavoritesNestedInput = {
    create?: XOR<DeckCreateWithoutFavoritesInput, DeckUncheckedCreateWithoutFavoritesInput>
    connectOrCreate?: DeckCreateOrConnectWithoutFavoritesInput
    upsert?: DeckUpsertWithoutFavoritesInput
    connect?: DeckWhereUniqueInput
    update?: XOR<XOR<DeckUpdateToOneWithWhereWithoutFavoritesInput, DeckUpdateWithoutFavoritesInput>, DeckUncheckedUpdateWithoutFavoritesInput>
  }

  export type UserCreateNestedOneWithoutAsaasCustomerInput = {
    create?: XOR<UserCreateWithoutAsaasCustomerInput, UserUncheckedCreateWithoutAsaasCustomerInput>
    connectOrCreate?: UserCreateOrConnectWithoutAsaasCustomerInput
    connect?: UserWhereUniqueInput
  }

  export type AsaasPaymentCreateNestedManyWithoutCustomerInput = {
    create?: XOR<AsaasPaymentCreateWithoutCustomerInput, AsaasPaymentUncheckedCreateWithoutCustomerInput> | AsaasPaymentCreateWithoutCustomerInput[] | AsaasPaymentUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: AsaasPaymentCreateOrConnectWithoutCustomerInput | AsaasPaymentCreateOrConnectWithoutCustomerInput[]
    createMany?: AsaasPaymentCreateManyCustomerInputEnvelope
    connect?: AsaasPaymentWhereUniqueInput | AsaasPaymentWhereUniqueInput[]
  }

  export type AsaasSubscriptionCreateNestedManyWithoutCustomerInput = {
    create?: XOR<AsaasSubscriptionCreateWithoutCustomerInput, AsaasSubscriptionUncheckedCreateWithoutCustomerInput> | AsaasSubscriptionCreateWithoutCustomerInput[] | AsaasSubscriptionUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: AsaasSubscriptionCreateOrConnectWithoutCustomerInput | AsaasSubscriptionCreateOrConnectWithoutCustomerInput[]
    createMany?: AsaasSubscriptionCreateManyCustomerInputEnvelope
    connect?: AsaasSubscriptionWhereUniqueInput | AsaasSubscriptionWhereUniqueInput[]
  }

  export type AsaasPaymentUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<AsaasPaymentCreateWithoutCustomerInput, AsaasPaymentUncheckedCreateWithoutCustomerInput> | AsaasPaymentCreateWithoutCustomerInput[] | AsaasPaymentUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: AsaasPaymentCreateOrConnectWithoutCustomerInput | AsaasPaymentCreateOrConnectWithoutCustomerInput[]
    createMany?: AsaasPaymentCreateManyCustomerInputEnvelope
    connect?: AsaasPaymentWhereUniqueInput | AsaasPaymentWhereUniqueInput[]
  }

  export type AsaasSubscriptionUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<AsaasSubscriptionCreateWithoutCustomerInput, AsaasSubscriptionUncheckedCreateWithoutCustomerInput> | AsaasSubscriptionCreateWithoutCustomerInput[] | AsaasSubscriptionUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: AsaasSubscriptionCreateOrConnectWithoutCustomerInput | AsaasSubscriptionCreateOrConnectWithoutCustomerInput[]
    createMany?: AsaasSubscriptionCreateManyCustomerInputEnvelope
    connect?: AsaasSubscriptionWhereUniqueInput | AsaasSubscriptionWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutAsaasCustomerNestedInput = {
    create?: XOR<UserCreateWithoutAsaasCustomerInput, UserUncheckedCreateWithoutAsaasCustomerInput>
    connectOrCreate?: UserCreateOrConnectWithoutAsaasCustomerInput
    upsert?: UserUpsertWithoutAsaasCustomerInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAsaasCustomerInput, UserUpdateWithoutAsaasCustomerInput>, UserUncheckedUpdateWithoutAsaasCustomerInput>
  }

  export type AsaasPaymentUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<AsaasPaymentCreateWithoutCustomerInput, AsaasPaymentUncheckedCreateWithoutCustomerInput> | AsaasPaymentCreateWithoutCustomerInput[] | AsaasPaymentUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: AsaasPaymentCreateOrConnectWithoutCustomerInput | AsaasPaymentCreateOrConnectWithoutCustomerInput[]
    upsert?: AsaasPaymentUpsertWithWhereUniqueWithoutCustomerInput | AsaasPaymentUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: AsaasPaymentCreateManyCustomerInputEnvelope
    set?: AsaasPaymentWhereUniqueInput | AsaasPaymentWhereUniqueInput[]
    disconnect?: AsaasPaymentWhereUniqueInput | AsaasPaymentWhereUniqueInput[]
    delete?: AsaasPaymentWhereUniqueInput | AsaasPaymentWhereUniqueInput[]
    connect?: AsaasPaymentWhereUniqueInput | AsaasPaymentWhereUniqueInput[]
    update?: AsaasPaymentUpdateWithWhereUniqueWithoutCustomerInput | AsaasPaymentUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: AsaasPaymentUpdateManyWithWhereWithoutCustomerInput | AsaasPaymentUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: AsaasPaymentScalarWhereInput | AsaasPaymentScalarWhereInput[]
  }

  export type AsaasSubscriptionUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<AsaasSubscriptionCreateWithoutCustomerInput, AsaasSubscriptionUncheckedCreateWithoutCustomerInput> | AsaasSubscriptionCreateWithoutCustomerInput[] | AsaasSubscriptionUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: AsaasSubscriptionCreateOrConnectWithoutCustomerInput | AsaasSubscriptionCreateOrConnectWithoutCustomerInput[]
    upsert?: AsaasSubscriptionUpsertWithWhereUniqueWithoutCustomerInput | AsaasSubscriptionUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: AsaasSubscriptionCreateManyCustomerInputEnvelope
    set?: AsaasSubscriptionWhereUniqueInput | AsaasSubscriptionWhereUniqueInput[]
    disconnect?: AsaasSubscriptionWhereUniqueInput | AsaasSubscriptionWhereUniqueInput[]
    delete?: AsaasSubscriptionWhereUniqueInput | AsaasSubscriptionWhereUniqueInput[]
    connect?: AsaasSubscriptionWhereUniqueInput | AsaasSubscriptionWhereUniqueInput[]
    update?: AsaasSubscriptionUpdateWithWhereUniqueWithoutCustomerInput | AsaasSubscriptionUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: AsaasSubscriptionUpdateManyWithWhereWithoutCustomerInput | AsaasSubscriptionUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: AsaasSubscriptionScalarWhereInput | AsaasSubscriptionScalarWhereInput[]
  }

  export type AsaasPaymentUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<AsaasPaymentCreateWithoutCustomerInput, AsaasPaymentUncheckedCreateWithoutCustomerInput> | AsaasPaymentCreateWithoutCustomerInput[] | AsaasPaymentUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: AsaasPaymentCreateOrConnectWithoutCustomerInput | AsaasPaymentCreateOrConnectWithoutCustomerInput[]
    upsert?: AsaasPaymentUpsertWithWhereUniqueWithoutCustomerInput | AsaasPaymentUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: AsaasPaymentCreateManyCustomerInputEnvelope
    set?: AsaasPaymentWhereUniqueInput | AsaasPaymentWhereUniqueInput[]
    disconnect?: AsaasPaymentWhereUniqueInput | AsaasPaymentWhereUniqueInput[]
    delete?: AsaasPaymentWhereUniqueInput | AsaasPaymentWhereUniqueInput[]
    connect?: AsaasPaymentWhereUniqueInput | AsaasPaymentWhereUniqueInput[]
    update?: AsaasPaymentUpdateWithWhereUniqueWithoutCustomerInput | AsaasPaymentUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: AsaasPaymentUpdateManyWithWhereWithoutCustomerInput | AsaasPaymentUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: AsaasPaymentScalarWhereInput | AsaasPaymentScalarWhereInput[]
  }

  export type AsaasSubscriptionUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<AsaasSubscriptionCreateWithoutCustomerInput, AsaasSubscriptionUncheckedCreateWithoutCustomerInput> | AsaasSubscriptionCreateWithoutCustomerInput[] | AsaasSubscriptionUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: AsaasSubscriptionCreateOrConnectWithoutCustomerInput | AsaasSubscriptionCreateOrConnectWithoutCustomerInput[]
    upsert?: AsaasSubscriptionUpsertWithWhereUniqueWithoutCustomerInput | AsaasSubscriptionUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: AsaasSubscriptionCreateManyCustomerInputEnvelope
    set?: AsaasSubscriptionWhereUniqueInput | AsaasSubscriptionWhereUniqueInput[]
    disconnect?: AsaasSubscriptionWhereUniqueInput | AsaasSubscriptionWhereUniqueInput[]
    delete?: AsaasSubscriptionWhereUniqueInput | AsaasSubscriptionWhereUniqueInput[]
    connect?: AsaasSubscriptionWhereUniqueInput | AsaasSubscriptionWhereUniqueInput[]
    update?: AsaasSubscriptionUpdateWithWhereUniqueWithoutCustomerInput | AsaasSubscriptionUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: AsaasSubscriptionUpdateManyWithWhereWithoutCustomerInput | AsaasSubscriptionUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: AsaasSubscriptionScalarWhereInput | AsaasSubscriptionScalarWhereInput[]
  }

  export type AsaasCustomerCreateNestedOneWithoutPaymentsInput = {
    create?: XOR<AsaasCustomerCreateWithoutPaymentsInput, AsaasCustomerUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: AsaasCustomerCreateOrConnectWithoutPaymentsInput
    connect?: AsaasCustomerWhereUniqueInput
  }

  export type PurchaseCreateNestedOneWithoutAsaasPaymentInput = {
    create?: XOR<PurchaseCreateWithoutAsaasPaymentInput, PurchaseUncheckedCreateWithoutAsaasPaymentInput>
    connectOrCreate?: PurchaseCreateOrConnectWithoutAsaasPaymentInput
    connect?: PurchaseWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AsaasCustomerUpdateOneRequiredWithoutPaymentsNestedInput = {
    create?: XOR<AsaasCustomerCreateWithoutPaymentsInput, AsaasCustomerUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: AsaasCustomerCreateOrConnectWithoutPaymentsInput
    upsert?: AsaasCustomerUpsertWithoutPaymentsInput
    connect?: AsaasCustomerWhereUniqueInput
    update?: XOR<XOR<AsaasCustomerUpdateToOneWithWhereWithoutPaymentsInput, AsaasCustomerUpdateWithoutPaymentsInput>, AsaasCustomerUncheckedUpdateWithoutPaymentsInput>
  }

  export type PurchaseUpdateOneWithoutAsaasPaymentNestedInput = {
    create?: XOR<PurchaseCreateWithoutAsaasPaymentInput, PurchaseUncheckedCreateWithoutAsaasPaymentInput>
    connectOrCreate?: PurchaseCreateOrConnectWithoutAsaasPaymentInput
    upsert?: PurchaseUpsertWithoutAsaasPaymentInput
    disconnect?: PurchaseWhereInput | boolean
    delete?: PurchaseWhereInput | boolean
    connect?: PurchaseWhereUniqueInput
    update?: XOR<XOR<PurchaseUpdateToOneWithWhereWithoutAsaasPaymentInput, PurchaseUpdateWithoutAsaasPaymentInput>, PurchaseUncheckedUpdateWithoutAsaasPaymentInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AsaasCustomerCreateNestedOneWithoutSubscriptionsInput = {
    create?: XOR<AsaasCustomerCreateWithoutSubscriptionsInput, AsaasCustomerUncheckedCreateWithoutSubscriptionsInput>
    connectOrCreate?: AsaasCustomerCreateOrConnectWithoutSubscriptionsInput
    connect?: AsaasCustomerWhereUniqueInput
  }

  export type SubscriptionCreateNestedOneWithoutAsaasSubscriptionInput = {
    create?: XOR<SubscriptionCreateWithoutAsaasSubscriptionInput, SubscriptionUncheckedCreateWithoutAsaasSubscriptionInput>
    connectOrCreate?: SubscriptionCreateOrConnectWithoutAsaasSubscriptionInput
    connect?: SubscriptionWhereUniqueInput
  }

  export type AsaasCustomerUpdateOneRequiredWithoutSubscriptionsNestedInput = {
    create?: XOR<AsaasCustomerCreateWithoutSubscriptionsInput, AsaasCustomerUncheckedCreateWithoutSubscriptionsInput>
    connectOrCreate?: AsaasCustomerCreateOrConnectWithoutSubscriptionsInput
    upsert?: AsaasCustomerUpsertWithoutSubscriptionsInput
    connect?: AsaasCustomerWhereUniqueInput
    update?: XOR<XOR<AsaasCustomerUpdateToOneWithWhereWithoutSubscriptionsInput, AsaasCustomerUpdateWithoutSubscriptionsInput>, AsaasCustomerUncheckedUpdateWithoutSubscriptionsInput>
  }

  export type SubscriptionUpdateOneWithoutAsaasSubscriptionNestedInput = {
    create?: XOR<SubscriptionCreateWithoutAsaasSubscriptionInput, SubscriptionUncheckedCreateWithoutAsaasSubscriptionInput>
    connectOrCreate?: SubscriptionCreateOrConnectWithoutAsaasSubscriptionInput
    upsert?: SubscriptionUpsertWithoutAsaasSubscriptionInput
    disconnect?: SubscriptionWhereInput | boolean
    delete?: SubscriptionWhereInput | boolean
    connect?: SubscriptionWhereUniqueInput
    update?: XOR<XOR<SubscriptionUpdateToOneWithWhereWithoutAsaasSubscriptionInput, SubscriptionUpdateWithoutAsaasSubscriptionInput>, SubscriptionUncheckedUpdateWithoutAsaasSubscriptionInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type SessionCreateWithoutUserInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt: Date | string
    updatedAt: Date | string
    ipAddress?: string | null
    userAgent?: string | null
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt: Date | string
    updatedAt: Date | string
    ipAddress?: string | null
    userAgent?: string | null
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
  }

  export type AccountCreateWithoutUserInput = {
    id: string
    accountId: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt: Date | string
    updatedAt: Date | string
  }

  export type AccountUncheckedCreateWithoutUserInput = {
    id: string
    accountId: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt: Date | string
    updatedAt: Date | string
  }

  export type AccountCreateOrConnectWithoutUserInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountCreateManyUserInputEnvelope = {
    data: AccountCreateManyUserInput | AccountCreateManyUserInput[]
  }

  export type DeckCreateWithoutUserInput = {
    title: string
    description?: string | null
    coverUrl?: string | null
    isPublic?: boolean
    priceCents?: number
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    flashcards?: FlashcardCreateNestedManyWithoutDeckInput
    purchases?: PurchaseCreateNestedManyWithoutDeckInput
    favorites?: FavoriteCreateNestedManyWithoutDeckInput
  }

  export type DeckUncheckedCreateWithoutUserInput = {
    id?: number
    title: string
    description?: string | null
    coverUrl?: string | null
    isPublic?: boolean
    priceCents?: number
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    flashcards?: FlashcardUncheckedCreateNestedManyWithoutDeckInput
    purchases?: PurchaseUncheckedCreateNestedManyWithoutDeckInput
    favorites?: FavoriteUncheckedCreateNestedManyWithoutDeckInput
  }

  export type DeckCreateOrConnectWithoutUserInput = {
    where: DeckWhereUniqueInput
    create: XOR<DeckCreateWithoutUserInput, DeckUncheckedCreateWithoutUserInput>
  }

  export type DeckCreateManyUserInputEnvelope = {
    data: DeckCreateManyUserInput | DeckCreateManyUserInput[]
  }

  export type PurchaseCreateWithoutUserInput = {
    amountCents: number
    status: string
    paymentMethod?: string | null
    asaasPaymentId?: string | null
    asaasInvoiceId?: string | null
    asaasPayload?: string | null
    confirmedAt?: Date | string | null
    createdAt?: Date | string
    deck: DeckCreateNestedOneWithoutPurchasesInput
    asaasPayment?: AsaasPaymentCreateNestedOneWithoutPurchaseInput
  }

  export type PurchaseUncheckedCreateWithoutUserInput = {
    id?: number
    deckId: number
    amountCents: number
    status: string
    paymentMethod?: string | null
    asaasPaymentId?: string | null
    asaasInvoiceId?: string | null
    asaasPayload?: string | null
    confirmedAt?: Date | string | null
    createdAt?: Date | string
    asaasPayment?: AsaasPaymentUncheckedCreateNestedOneWithoutPurchaseInput
  }

  export type PurchaseCreateOrConnectWithoutUserInput = {
    where: PurchaseWhereUniqueInput
    create: XOR<PurchaseCreateWithoutUserInput, PurchaseUncheckedCreateWithoutUserInput>
  }

  export type PurchaseCreateManyUserInputEnvelope = {
    data: PurchaseCreateManyUserInput | PurchaseCreateManyUserInput[]
  }

  export type SubscriptionCreateWithoutUserInput = {
    status: string
    planName: string
    priceCents: number
    asaasSubscriptionId: string
    nextDueDate?: Date | string | null
    lastPaymentDate?: Date | string | null
    currentPeriodEnd?: Date | string | null
    createdAt?: Date | string
    asaasSubscription?: AsaasSubscriptionCreateNestedOneWithoutSubscriptionInput
  }

  export type SubscriptionUncheckedCreateWithoutUserInput = {
    id?: number
    status: string
    planName: string
    priceCents: number
    asaasSubscriptionId: string
    nextDueDate?: Date | string | null
    lastPaymentDate?: Date | string | null
    currentPeriodEnd?: Date | string | null
    createdAt?: Date | string
    asaasSubscription?: AsaasSubscriptionUncheckedCreateNestedOneWithoutSubscriptionInput
  }

  export type SubscriptionCreateOrConnectWithoutUserInput = {
    where: SubscriptionWhereUniqueInput
    create: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput>
  }

  export type SubscriptionCreateManyUserInputEnvelope = {
    data: SubscriptionCreateManyUserInput | SubscriptionCreateManyUserInput[]
  }

  export type FavoriteCreateWithoutUserInput = {
    createdAt?: Date | string
    deck: DeckCreateNestedOneWithoutFavoritesInput
  }

  export type FavoriteUncheckedCreateWithoutUserInput = {
    id?: number
    deckId: number
    createdAt?: Date | string
  }

  export type FavoriteCreateOrConnectWithoutUserInput = {
    where: FavoriteWhereUniqueInput
    create: XOR<FavoriteCreateWithoutUserInput, FavoriteUncheckedCreateWithoutUserInput>
  }

  export type FavoriteCreateManyUserInputEnvelope = {
    data: FavoriteCreateManyUserInput | FavoriteCreateManyUserInput[]
  }

  export type AsaasCustomerCreateWithoutUserInput = {
    id: string
    asaasId: string
    name: string
    cpfCnpj?: string | null
    email: string
    phone?: string | null
    mobilePhone?: string | null
    postalCode?: string | null
    address?: string | null
    addressNumber?: string | null
    complement?: string | null
    province?: string | null
    externalReference?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    payments?: AsaasPaymentCreateNestedManyWithoutCustomerInput
    subscriptions?: AsaasSubscriptionCreateNestedManyWithoutCustomerInput
  }

  export type AsaasCustomerUncheckedCreateWithoutUserInput = {
    id: string
    asaasId: string
    name: string
    cpfCnpj?: string | null
    email: string
    phone?: string | null
    mobilePhone?: string | null
    postalCode?: string | null
    address?: string | null
    addressNumber?: string | null
    complement?: string | null
    province?: string | null
    externalReference?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    payments?: AsaasPaymentUncheckedCreateNestedManyWithoutCustomerInput
    subscriptions?: AsaasSubscriptionUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type AsaasCustomerCreateOrConnectWithoutUserInput = {
    where: AsaasCustomerWhereUniqueInput
    create: XOR<AsaasCustomerCreateWithoutUserInput, AsaasCustomerUncheckedCreateWithoutUserInput>
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: StringFilter<"Session"> | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    token?: StringFilter<"Session"> | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    ipAddress?: StringNullableFilter<"Session"> | string | null
    userAgent?: StringNullableFilter<"Session"> | string | null
    userId?: StringFilter<"Session"> | string
  }

  export type AccountUpsertWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
  }

  export type AccountUpdateManyWithWhereWithoutUserInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutUserInput>
  }

  export type AccountScalarWhereInput = {
    AND?: AccountScalarWhereInput | AccountScalarWhereInput[]
    OR?: AccountScalarWhereInput[]
    NOT?: AccountScalarWhereInput | AccountScalarWhereInput[]
    id?: StringFilter<"Account"> | string
    accountId?: StringFilter<"Account"> | string
    providerId?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    accessToken?: StringNullableFilter<"Account"> | string | null
    refreshToken?: StringNullableFilter<"Account"> | string | null
    idToken?: StringNullableFilter<"Account"> | string | null
    accessTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    refreshTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    password?: StringNullableFilter<"Account"> | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
  }

  export type DeckUpsertWithWhereUniqueWithoutUserInput = {
    where: DeckWhereUniqueInput
    update: XOR<DeckUpdateWithoutUserInput, DeckUncheckedUpdateWithoutUserInput>
    create: XOR<DeckCreateWithoutUserInput, DeckUncheckedCreateWithoutUserInput>
  }

  export type DeckUpdateWithWhereUniqueWithoutUserInput = {
    where: DeckWhereUniqueInput
    data: XOR<DeckUpdateWithoutUserInput, DeckUncheckedUpdateWithoutUserInput>
  }

  export type DeckUpdateManyWithWhereWithoutUserInput = {
    where: DeckScalarWhereInput
    data: XOR<DeckUpdateManyMutationInput, DeckUncheckedUpdateManyWithoutUserInput>
  }

  export type DeckScalarWhereInput = {
    AND?: DeckScalarWhereInput | DeckScalarWhereInput[]
    OR?: DeckScalarWhereInput[]
    NOT?: DeckScalarWhereInput | DeckScalarWhereInput[]
    id?: IntFilter<"Deck"> | number
    userId?: StringFilter<"Deck"> | string
    title?: StringFilter<"Deck"> | string
    description?: StringNullableFilter<"Deck"> | string | null
    coverUrl?: StringNullableFilter<"Deck"> | string | null
    isPublic?: BoolFilter<"Deck"> | boolean
    priceCents?: IntFilter<"Deck"> | number
    deletedAt?: DateTimeNullableFilter<"Deck"> | Date | string | null
    createdAt?: DateTimeFilter<"Deck"> | Date | string
    updatedAt?: DateTimeFilter<"Deck"> | Date | string
  }

  export type PurchaseUpsertWithWhereUniqueWithoutUserInput = {
    where: PurchaseWhereUniqueInput
    update: XOR<PurchaseUpdateWithoutUserInput, PurchaseUncheckedUpdateWithoutUserInput>
    create: XOR<PurchaseCreateWithoutUserInput, PurchaseUncheckedCreateWithoutUserInput>
  }

  export type PurchaseUpdateWithWhereUniqueWithoutUserInput = {
    where: PurchaseWhereUniqueInput
    data: XOR<PurchaseUpdateWithoutUserInput, PurchaseUncheckedUpdateWithoutUserInput>
  }

  export type PurchaseUpdateManyWithWhereWithoutUserInput = {
    where: PurchaseScalarWhereInput
    data: XOR<PurchaseUpdateManyMutationInput, PurchaseUncheckedUpdateManyWithoutUserInput>
  }

  export type PurchaseScalarWhereInput = {
    AND?: PurchaseScalarWhereInput | PurchaseScalarWhereInput[]
    OR?: PurchaseScalarWhereInput[]
    NOT?: PurchaseScalarWhereInput | PurchaseScalarWhereInput[]
    id?: IntFilter<"Purchase"> | number
    userId?: StringFilter<"Purchase"> | string
    deckId?: IntFilter<"Purchase"> | number
    amountCents?: IntFilter<"Purchase"> | number
    status?: StringFilter<"Purchase"> | string
    paymentMethod?: StringNullableFilter<"Purchase"> | string | null
    asaasPaymentId?: StringNullableFilter<"Purchase"> | string | null
    asaasInvoiceId?: StringNullableFilter<"Purchase"> | string | null
    asaasPayload?: StringNullableFilter<"Purchase"> | string | null
    confirmedAt?: DateTimeNullableFilter<"Purchase"> | Date | string | null
    createdAt?: DateTimeFilter<"Purchase"> | Date | string
  }

  export type SubscriptionUpsertWithWhereUniqueWithoutUserInput = {
    where: SubscriptionWhereUniqueInput
    update: XOR<SubscriptionUpdateWithoutUserInput, SubscriptionUncheckedUpdateWithoutUserInput>
    create: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput>
  }

  export type SubscriptionUpdateWithWhereUniqueWithoutUserInput = {
    where: SubscriptionWhereUniqueInput
    data: XOR<SubscriptionUpdateWithoutUserInput, SubscriptionUncheckedUpdateWithoutUserInput>
  }

  export type SubscriptionUpdateManyWithWhereWithoutUserInput = {
    where: SubscriptionScalarWhereInput
    data: XOR<SubscriptionUpdateManyMutationInput, SubscriptionUncheckedUpdateManyWithoutUserInput>
  }

  export type SubscriptionScalarWhereInput = {
    AND?: SubscriptionScalarWhereInput | SubscriptionScalarWhereInput[]
    OR?: SubscriptionScalarWhereInput[]
    NOT?: SubscriptionScalarWhereInput | SubscriptionScalarWhereInput[]
    id?: IntFilter<"Subscription"> | number
    userId?: StringFilter<"Subscription"> | string
    status?: StringFilter<"Subscription"> | string
    planName?: StringFilter<"Subscription"> | string
    priceCents?: IntFilter<"Subscription"> | number
    asaasSubscriptionId?: StringFilter<"Subscription"> | string
    nextDueDate?: DateTimeNullableFilter<"Subscription"> | Date | string | null
    lastPaymentDate?: DateTimeNullableFilter<"Subscription"> | Date | string | null
    currentPeriodEnd?: DateTimeNullableFilter<"Subscription"> | Date | string | null
    createdAt?: DateTimeFilter<"Subscription"> | Date | string
  }

  export type FavoriteUpsertWithWhereUniqueWithoutUserInput = {
    where: FavoriteWhereUniqueInput
    update: XOR<FavoriteUpdateWithoutUserInput, FavoriteUncheckedUpdateWithoutUserInput>
    create: XOR<FavoriteCreateWithoutUserInput, FavoriteUncheckedCreateWithoutUserInput>
  }

  export type FavoriteUpdateWithWhereUniqueWithoutUserInput = {
    where: FavoriteWhereUniqueInput
    data: XOR<FavoriteUpdateWithoutUserInput, FavoriteUncheckedUpdateWithoutUserInput>
  }

  export type FavoriteUpdateManyWithWhereWithoutUserInput = {
    where: FavoriteScalarWhereInput
    data: XOR<FavoriteUpdateManyMutationInput, FavoriteUncheckedUpdateManyWithoutUserInput>
  }

  export type FavoriteScalarWhereInput = {
    AND?: FavoriteScalarWhereInput | FavoriteScalarWhereInput[]
    OR?: FavoriteScalarWhereInput[]
    NOT?: FavoriteScalarWhereInput | FavoriteScalarWhereInput[]
    id?: IntFilter<"Favorite"> | number
    userId?: StringFilter<"Favorite"> | string
    deckId?: IntFilter<"Favorite"> | number
    createdAt?: DateTimeFilter<"Favorite"> | Date | string
  }

  export type AsaasCustomerUpsertWithoutUserInput = {
    update: XOR<AsaasCustomerUpdateWithoutUserInput, AsaasCustomerUncheckedUpdateWithoutUserInput>
    create: XOR<AsaasCustomerCreateWithoutUserInput, AsaasCustomerUncheckedCreateWithoutUserInput>
    where?: AsaasCustomerWhereInput
  }

  export type AsaasCustomerUpdateToOneWithWhereWithoutUserInput = {
    where?: AsaasCustomerWhereInput
    data: XOR<AsaasCustomerUpdateWithoutUserInput, AsaasCustomerUncheckedUpdateWithoutUserInput>
  }

  export type AsaasCustomerUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    asaasId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cpfCnpj?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    mobilePhone?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    addressNumber?: NullableStringFieldUpdateOperationsInput | string | null
    complement?: NullableStringFieldUpdateOperationsInput | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    externalReference?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: AsaasPaymentUpdateManyWithoutCustomerNestedInput
    subscriptions?: AsaasSubscriptionUpdateManyWithoutCustomerNestedInput
  }

  export type AsaasCustomerUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    asaasId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cpfCnpj?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    mobilePhone?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    addressNumber?: NullableStringFieldUpdateOperationsInput | string | null
    complement?: NullableStringFieldUpdateOperationsInput | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    externalReference?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: AsaasPaymentUncheckedUpdateManyWithoutCustomerNestedInput
    subscriptions?: AsaasSubscriptionUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type UserCreateWithoutSessionsInput = {
    id: string
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    role?: string
    asaasCustomerId?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    decks?: DeckCreateNestedManyWithoutUserInput
    purchases?: PurchaseCreateNestedManyWithoutUserInput
    subscriptions?: SubscriptionCreateNestedManyWithoutUserInput
    favorites?: FavoriteCreateNestedManyWithoutUserInput
    asaasCustomer?: AsaasCustomerCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id: string
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    role?: string
    asaasCustomerId?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    decks?: DeckUncheckedCreateNestedManyWithoutUserInput
    purchases?: PurchaseUncheckedCreateNestedManyWithoutUserInput
    subscriptions?: SubscriptionUncheckedCreateNestedManyWithoutUserInput
    favorites?: FavoriteUncheckedCreateNestedManyWithoutUserInput
    asaasCustomer?: AsaasCustomerUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    asaasCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    decks?: DeckUpdateManyWithoutUserNestedInput
    purchases?: PurchaseUpdateManyWithoutUserNestedInput
    subscriptions?: SubscriptionUpdateManyWithoutUserNestedInput
    favorites?: FavoriteUpdateManyWithoutUserNestedInput
    asaasCustomer?: AsaasCustomerUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    asaasCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    decks?: DeckUncheckedUpdateManyWithoutUserNestedInput
    purchases?: PurchaseUncheckedUpdateManyWithoutUserNestedInput
    subscriptions?: SubscriptionUncheckedUpdateManyWithoutUserNestedInput
    favorites?: FavoriteUncheckedUpdateManyWithoutUserNestedInput
    asaasCustomer?: AsaasCustomerUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateWithoutAccountsInput = {
    id: string
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    role?: string
    asaasCustomerId?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
    decks?: DeckCreateNestedManyWithoutUserInput
    purchases?: PurchaseCreateNestedManyWithoutUserInput
    subscriptions?: SubscriptionCreateNestedManyWithoutUserInput
    favorites?: FavoriteCreateNestedManyWithoutUserInput
    asaasCustomer?: AsaasCustomerCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAccountsInput = {
    id: string
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    role?: string
    asaasCustomerId?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    decks?: DeckUncheckedCreateNestedManyWithoutUserInput
    purchases?: PurchaseUncheckedCreateNestedManyWithoutUserInput
    subscriptions?: SubscriptionUncheckedCreateNestedManyWithoutUserInput
    favorites?: FavoriteUncheckedCreateNestedManyWithoutUserInput
    asaasCustomer?: AsaasCustomerUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
  }

  export type UserUpsertWithoutAccountsInput = {
    update: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAccountsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    asaasCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
    decks?: DeckUpdateManyWithoutUserNestedInput
    purchases?: PurchaseUpdateManyWithoutUserNestedInput
    subscriptions?: SubscriptionUpdateManyWithoutUserNestedInput
    favorites?: FavoriteUpdateManyWithoutUserNestedInput
    asaasCustomer?: AsaasCustomerUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    asaasCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    decks?: DeckUncheckedUpdateManyWithoutUserNestedInput
    purchases?: PurchaseUncheckedUpdateManyWithoutUserNestedInput
    subscriptions?: SubscriptionUncheckedUpdateManyWithoutUserNestedInput
    favorites?: FavoriteUncheckedUpdateManyWithoutUserNestedInput
    asaasCustomer?: AsaasCustomerUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateWithoutDecksInput = {
    id: string
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    role?: string
    asaasCustomerId?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    purchases?: PurchaseCreateNestedManyWithoutUserInput
    subscriptions?: SubscriptionCreateNestedManyWithoutUserInput
    favorites?: FavoriteCreateNestedManyWithoutUserInput
    asaasCustomer?: AsaasCustomerCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutDecksInput = {
    id: string
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    role?: string
    asaasCustomerId?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    purchases?: PurchaseUncheckedCreateNestedManyWithoutUserInput
    subscriptions?: SubscriptionUncheckedCreateNestedManyWithoutUserInput
    favorites?: FavoriteUncheckedCreateNestedManyWithoutUserInput
    asaasCustomer?: AsaasCustomerUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutDecksInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDecksInput, UserUncheckedCreateWithoutDecksInput>
  }

  export type FlashcardCreateWithoutDeckInput = {
    frontText: string
    backText: string
    orderIndex?: number
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FlashcardUncheckedCreateWithoutDeckInput = {
    id?: number
    frontText: string
    backText: string
    orderIndex?: number
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FlashcardCreateOrConnectWithoutDeckInput = {
    where: FlashcardWhereUniqueInput
    create: XOR<FlashcardCreateWithoutDeckInput, FlashcardUncheckedCreateWithoutDeckInput>
  }

  export type FlashcardCreateManyDeckInputEnvelope = {
    data: FlashcardCreateManyDeckInput | FlashcardCreateManyDeckInput[]
  }

  export type PurchaseCreateWithoutDeckInput = {
    amountCents: number
    status: string
    paymentMethod?: string | null
    asaasPaymentId?: string | null
    asaasInvoiceId?: string | null
    asaasPayload?: string | null
    confirmedAt?: Date | string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutPurchasesInput
    asaasPayment?: AsaasPaymentCreateNestedOneWithoutPurchaseInput
  }

  export type PurchaseUncheckedCreateWithoutDeckInput = {
    id?: number
    userId: string
    amountCents: number
    status: string
    paymentMethod?: string | null
    asaasPaymentId?: string | null
    asaasInvoiceId?: string | null
    asaasPayload?: string | null
    confirmedAt?: Date | string | null
    createdAt?: Date | string
    asaasPayment?: AsaasPaymentUncheckedCreateNestedOneWithoutPurchaseInput
  }

  export type PurchaseCreateOrConnectWithoutDeckInput = {
    where: PurchaseWhereUniqueInput
    create: XOR<PurchaseCreateWithoutDeckInput, PurchaseUncheckedCreateWithoutDeckInput>
  }

  export type PurchaseCreateManyDeckInputEnvelope = {
    data: PurchaseCreateManyDeckInput | PurchaseCreateManyDeckInput[]
  }

  export type FavoriteCreateWithoutDeckInput = {
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutFavoritesInput
  }

  export type FavoriteUncheckedCreateWithoutDeckInput = {
    id?: number
    userId: string
    createdAt?: Date | string
  }

  export type FavoriteCreateOrConnectWithoutDeckInput = {
    where: FavoriteWhereUniqueInput
    create: XOR<FavoriteCreateWithoutDeckInput, FavoriteUncheckedCreateWithoutDeckInput>
  }

  export type FavoriteCreateManyDeckInputEnvelope = {
    data: FavoriteCreateManyDeckInput | FavoriteCreateManyDeckInput[]
  }

  export type UserUpsertWithoutDecksInput = {
    update: XOR<UserUpdateWithoutDecksInput, UserUncheckedUpdateWithoutDecksInput>
    create: XOR<UserCreateWithoutDecksInput, UserUncheckedCreateWithoutDecksInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDecksInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDecksInput, UserUncheckedUpdateWithoutDecksInput>
  }

  export type UserUpdateWithoutDecksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    asaasCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    purchases?: PurchaseUpdateManyWithoutUserNestedInput
    subscriptions?: SubscriptionUpdateManyWithoutUserNestedInput
    favorites?: FavoriteUpdateManyWithoutUserNestedInput
    asaasCustomer?: AsaasCustomerUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutDecksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    asaasCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    purchases?: PurchaseUncheckedUpdateManyWithoutUserNestedInput
    subscriptions?: SubscriptionUncheckedUpdateManyWithoutUserNestedInput
    favorites?: FavoriteUncheckedUpdateManyWithoutUserNestedInput
    asaasCustomer?: AsaasCustomerUncheckedUpdateOneWithoutUserNestedInput
  }

  export type FlashcardUpsertWithWhereUniqueWithoutDeckInput = {
    where: FlashcardWhereUniqueInput
    update: XOR<FlashcardUpdateWithoutDeckInput, FlashcardUncheckedUpdateWithoutDeckInput>
    create: XOR<FlashcardCreateWithoutDeckInput, FlashcardUncheckedCreateWithoutDeckInput>
  }

  export type FlashcardUpdateWithWhereUniqueWithoutDeckInput = {
    where: FlashcardWhereUniqueInput
    data: XOR<FlashcardUpdateWithoutDeckInput, FlashcardUncheckedUpdateWithoutDeckInput>
  }

  export type FlashcardUpdateManyWithWhereWithoutDeckInput = {
    where: FlashcardScalarWhereInput
    data: XOR<FlashcardUpdateManyMutationInput, FlashcardUncheckedUpdateManyWithoutDeckInput>
  }

  export type FlashcardScalarWhereInput = {
    AND?: FlashcardScalarWhereInput | FlashcardScalarWhereInput[]
    OR?: FlashcardScalarWhereInput[]
    NOT?: FlashcardScalarWhereInput | FlashcardScalarWhereInput[]
    id?: IntFilter<"Flashcard"> | number
    deckId?: IntFilter<"Flashcard"> | number
    frontText?: StringFilter<"Flashcard"> | string
    backText?: StringFilter<"Flashcard"> | string
    orderIndex?: IntFilter<"Flashcard"> | number
    deletedAt?: DateTimeNullableFilter<"Flashcard"> | Date | string | null
    createdAt?: DateTimeFilter<"Flashcard"> | Date | string
    updatedAt?: DateTimeFilter<"Flashcard"> | Date | string
  }

  export type PurchaseUpsertWithWhereUniqueWithoutDeckInput = {
    where: PurchaseWhereUniqueInput
    update: XOR<PurchaseUpdateWithoutDeckInput, PurchaseUncheckedUpdateWithoutDeckInput>
    create: XOR<PurchaseCreateWithoutDeckInput, PurchaseUncheckedCreateWithoutDeckInput>
  }

  export type PurchaseUpdateWithWhereUniqueWithoutDeckInput = {
    where: PurchaseWhereUniqueInput
    data: XOR<PurchaseUpdateWithoutDeckInput, PurchaseUncheckedUpdateWithoutDeckInput>
  }

  export type PurchaseUpdateManyWithWhereWithoutDeckInput = {
    where: PurchaseScalarWhereInput
    data: XOR<PurchaseUpdateManyMutationInput, PurchaseUncheckedUpdateManyWithoutDeckInput>
  }

  export type FavoriteUpsertWithWhereUniqueWithoutDeckInput = {
    where: FavoriteWhereUniqueInput
    update: XOR<FavoriteUpdateWithoutDeckInput, FavoriteUncheckedUpdateWithoutDeckInput>
    create: XOR<FavoriteCreateWithoutDeckInput, FavoriteUncheckedCreateWithoutDeckInput>
  }

  export type FavoriteUpdateWithWhereUniqueWithoutDeckInput = {
    where: FavoriteWhereUniqueInput
    data: XOR<FavoriteUpdateWithoutDeckInput, FavoriteUncheckedUpdateWithoutDeckInput>
  }

  export type FavoriteUpdateManyWithWhereWithoutDeckInput = {
    where: FavoriteScalarWhereInput
    data: XOR<FavoriteUpdateManyMutationInput, FavoriteUncheckedUpdateManyWithoutDeckInput>
  }

  export type DeckCreateWithoutFlashcardsInput = {
    title: string
    description?: string | null
    coverUrl?: string | null
    isPublic?: boolean
    priceCents?: number
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutDecksInput
    purchases?: PurchaseCreateNestedManyWithoutDeckInput
    favorites?: FavoriteCreateNestedManyWithoutDeckInput
  }

  export type DeckUncheckedCreateWithoutFlashcardsInput = {
    id?: number
    userId: string
    title: string
    description?: string | null
    coverUrl?: string | null
    isPublic?: boolean
    priceCents?: number
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    purchases?: PurchaseUncheckedCreateNestedManyWithoutDeckInput
    favorites?: FavoriteUncheckedCreateNestedManyWithoutDeckInput
  }

  export type DeckCreateOrConnectWithoutFlashcardsInput = {
    where: DeckWhereUniqueInput
    create: XOR<DeckCreateWithoutFlashcardsInput, DeckUncheckedCreateWithoutFlashcardsInput>
  }

  export type DeckUpsertWithoutFlashcardsInput = {
    update: XOR<DeckUpdateWithoutFlashcardsInput, DeckUncheckedUpdateWithoutFlashcardsInput>
    create: XOR<DeckCreateWithoutFlashcardsInput, DeckUncheckedCreateWithoutFlashcardsInput>
    where?: DeckWhereInput
  }

  export type DeckUpdateToOneWithWhereWithoutFlashcardsInput = {
    where?: DeckWhereInput
    data: XOR<DeckUpdateWithoutFlashcardsInput, DeckUncheckedUpdateWithoutFlashcardsInput>
  }

  export type DeckUpdateWithoutFlashcardsInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    priceCents?: IntFieldUpdateOperationsInput | number
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutDecksNestedInput
    purchases?: PurchaseUpdateManyWithoutDeckNestedInput
    favorites?: FavoriteUpdateManyWithoutDeckNestedInput
  }

  export type DeckUncheckedUpdateWithoutFlashcardsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    priceCents?: IntFieldUpdateOperationsInput | number
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    purchases?: PurchaseUncheckedUpdateManyWithoutDeckNestedInput
    favorites?: FavoriteUncheckedUpdateManyWithoutDeckNestedInput
  }

  export type UserCreateWithoutPurchasesInput = {
    id: string
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    role?: string
    asaasCustomerId?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    decks?: DeckCreateNestedManyWithoutUserInput
    subscriptions?: SubscriptionCreateNestedManyWithoutUserInput
    favorites?: FavoriteCreateNestedManyWithoutUserInput
    asaasCustomer?: AsaasCustomerCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPurchasesInput = {
    id: string
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    role?: string
    asaasCustomerId?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    decks?: DeckUncheckedCreateNestedManyWithoutUserInput
    subscriptions?: SubscriptionUncheckedCreateNestedManyWithoutUserInput
    favorites?: FavoriteUncheckedCreateNestedManyWithoutUserInput
    asaasCustomer?: AsaasCustomerUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPurchasesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPurchasesInput, UserUncheckedCreateWithoutPurchasesInput>
  }

  export type DeckCreateWithoutPurchasesInput = {
    title: string
    description?: string | null
    coverUrl?: string | null
    isPublic?: boolean
    priceCents?: number
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutDecksInput
    flashcards?: FlashcardCreateNestedManyWithoutDeckInput
    favorites?: FavoriteCreateNestedManyWithoutDeckInput
  }

  export type DeckUncheckedCreateWithoutPurchasesInput = {
    id?: number
    userId: string
    title: string
    description?: string | null
    coverUrl?: string | null
    isPublic?: boolean
    priceCents?: number
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    flashcards?: FlashcardUncheckedCreateNestedManyWithoutDeckInput
    favorites?: FavoriteUncheckedCreateNestedManyWithoutDeckInput
  }

  export type DeckCreateOrConnectWithoutPurchasesInput = {
    where: DeckWhereUniqueInput
    create: XOR<DeckCreateWithoutPurchasesInput, DeckUncheckedCreateWithoutPurchasesInput>
  }

  export type AsaasPaymentCreateWithoutPurchaseInput = {
    id: string
    asaasId: string
    billingType: string
    status: string
    value: number
    dueDate: Date | string
    originalDueDate?: Date | string | null
    description?: string | null
    externalReference?: string | null
    invoiceUrl?: string | null
    bankSlipUrl?: string | null
    pixQrCode?: string | null
    creditCardPaymentLink?: string | null
    confirmedDate?: Date | string | null
    paymentDate?: Date | string | null
    clientPaymentDate?: Date | string | null
    netValue?: number | null
    originalValue?: number | null
    interestValue?: number | null
    discountValue?: number | null
    fineValue?: number | null
    asaasPayload?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    customer: AsaasCustomerCreateNestedOneWithoutPaymentsInput
  }

  export type AsaasPaymentUncheckedCreateWithoutPurchaseInput = {
    id: string
    customerId: string
    asaasId: string
    billingType: string
    status: string
    value: number
    dueDate: Date | string
    originalDueDate?: Date | string | null
    description?: string | null
    externalReference?: string | null
    invoiceUrl?: string | null
    bankSlipUrl?: string | null
    pixQrCode?: string | null
    creditCardPaymentLink?: string | null
    confirmedDate?: Date | string | null
    paymentDate?: Date | string | null
    clientPaymentDate?: Date | string | null
    netValue?: number | null
    originalValue?: number | null
    interestValue?: number | null
    discountValue?: number | null
    fineValue?: number | null
    asaasPayload?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AsaasPaymentCreateOrConnectWithoutPurchaseInput = {
    where: AsaasPaymentWhereUniqueInput
    create: XOR<AsaasPaymentCreateWithoutPurchaseInput, AsaasPaymentUncheckedCreateWithoutPurchaseInput>
  }

  export type UserUpsertWithoutPurchasesInput = {
    update: XOR<UserUpdateWithoutPurchasesInput, UserUncheckedUpdateWithoutPurchasesInput>
    create: XOR<UserCreateWithoutPurchasesInput, UserUncheckedCreateWithoutPurchasesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPurchasesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPurchasesInput, UserUncheckedUpdateWithoutPurchasesInput>
  }

  export type UserUpdateWithoutPurchasesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    asaasCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    decks?: DeckUpdateManyWithoutUserNestedInput
    subscriptions?: SubscriptionUpdateManyWithoutUserNestedInput
    favorites?: FavoriteUpdateManyWithoutUserNestedInput
    asaasCustomer?: AsaasCustomerUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPurchasesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    asaasCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    decks?: DeckUncheckedUpdateManyWithoutUserNestedInput
    subscriptions?: SubscriptionUncheckedUpdateManyWithoutUserNestedInput
    favorites?: FavoriteUncheckedUpdateManyWithoutUserNestedInput
    asaasCustomer?: AsaasCustomerUncheckedUpdateOneWithoutUserNestedInput
  }

  export type DeckUpsertWithoutPurchasesInput = {
    update: XOR<DeckUpdateWithoutPurchasesInput, DeckUncheckedUpdateWithoutPurchasesInput>
    create: XOR<DeckCreateWithoutPurchasesInput, DeckUncheckedCreateWithoutPurchasesInput>
    where?: DeckWhereInput
  }

  export type DeckUpdateToOneWithWhereWithoutPurchasesInput = {
    where?: DeckWhereInput
    data: XOR<DeckUpdateWithoutPurchasesInput, DeckUncheckedUpdateWithoutPurchasesInput>
  }

  export type DeckUpdateWithoutPurchasesInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    priceCents?: IntFieldUpdateOperationsInput | number
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutDecksNestedInput
    flashcards?: FlashcardUpdateManyWithoutDeckNestedInput
    favorites?: FavoriteUpdateManyWithoutDeckNestedInput
  }

  export type DeckUncheckedUpdateWithoutPurchasesInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    priceCents?: IntFieldUpdateOperationsInput | number
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    flashcards?: FlashcardUncheckedUpdateManyWithoutDeckNestedInput
    favorites?: FavoriteUncheckedUpdateManyWithoutDeckNestedInput
  }

  export type AsaasPaymentUpsertWithoutPurchaseInput = {
    update: XOR<AsaasPaymentUpdateWithoutPurchaseInput, AsaasPaymentUncheckedUpdateWithoutPurchaseInput>
    create: XOR<AsaasPaymentCreateWithoutPurchaseInput, AsaasPaymentUncheckedCreateWithoutPurchaseInput>
    where?: AsaasPaymentWhereInput
  }

  export type AsaasPaymentUpdateToOneWithWhereWithoutPurchaseInput = {
    where?: AsaasPaymentWhereInput
    data: XOR<AsaasPaymentUpdateWithoutPurchaseInput, AsaasPaymentUncheckedUpdateWithoutPurchaseInput>
  }

  export type AsaasPaymentUpdateWithoutPurchaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    asaasId?: StringFieldUpdateOperationsInput | string
    billingType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    value?: FloatFieldUpdateOperationsInput | number
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    originalDueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    externalReference?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bankSlipUrl?: NullableStringFieldUpdateOperationsInput | string | null
    pixQrCode?: NullableStringFieldUpdateOperationsInput | string | null
    creditCardPaymentLink?: NullableStringFieldUpdateOperationsInput | string | null
    confirmedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    clientPaymentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    netValue?: NullableFloatFieldUpdateOperationsInput | number | null
    originalValue?: NullableFloatFieldUpdateOperationsInput | number | null
    interestValue?: NullableFloatFieldUpdateOperationsInput | number | null
    discountValue?: NullableFloatFieldUpdateOperationsInput | number | null
    fineValue?: NullableFloatFieldUpdateOperationsInput | number | null
    asaasPayload?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: AsaasCustomerUpdateOneRequiredWithoutPaymentsNestedInput
  }

  export type AsaasPaymentUncheckedUpdateWithoutPurchaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    asaasId?: StringFieldUpdateOperationsInput | string
    billingType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    value?: FloatFieldUpdateOperationsInput | number
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    originalDueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    externalReference?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bankSlipUrl?: NullableStringFieldUpdateOperationsInput | string | null
    pixQrCode?: NullableStringFieldUpdateOperationsInput | string | null
    creditCardPaymentLink?: NullableStringFieldUpdateOperationsInput | string | null
    confirmedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    clientPaymentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    netValue?: NullableFloatFieldUpdateOperationsInput | number | null
    originalValue?: NullableFloatFieldUpdateOperationsInput | number | null
    interestValue?: NullableFloatFieldUpdateOperationsInput | number | null
    discountValue?: NullableFloatFieldUpdateOperationsInput | number | null
    fineValue?: NullableFloatFieldUpdateOperationsInput | number | null
    asaasPayload?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutSubscriptionsInput = {
    id: string
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    role?: string
    asaasCustomerId?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    decks?: DeckCreateNestedManyWithoutUserInput
    purchases?: PurchaseCreateNestedManyWithoutUserInput
    favorites?: FavoriteCreateNestedManyWithoutUserInput
    asaasCustomer?: AsaasCustomerCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSubscriptionsInput = {
    id: string
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    role?: string
    asaasCustomerId?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    decks?: DeckUncheckedCreateNestedManyWithoutUserInput
    purchases?: PurchaseUncheckedCreateNestedManyWithoutUserInput
    favorites?: FavoriteUncheckedCreateNestedManyWithoutUserInput
    asaasCustomer?: AsaasCustomerUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSubscriptionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSubscriptionsInput, UserUncheckedCreateWithoutSubscriptionsInput>
  }

  export type AsaasSubscriptionCreateWithoutSubscriptionInput = {
    id: string
    asaasId: string
    billingType: string
    status: string
    value: number
    nextDueDate: Date | string
    cycle: string
    description?: string | null
    endDate?: Date | string | null
    maxPayments?: number | null
    externalReference?: string | null
    asaasPayload?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    customer: AsaasCustomerCreateNestedOneWithoutSubscriptionsInput
  }

  export type AsaasSubscriptionUncheckedCreateWithoutSubscriptionInput = {
    id: string
    customerId: string
    asaasId: string
    billingType: string
    status: string
    value: number
    nextDueDate: Date | string
    cycle: string
    description?: string | null
    endDate?: Date | string | null
    maxPayments?: number | null
    externalReference?: string | null
    asaasPayload?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AsaasSubscriptionCreateOrConnectWithoutSubscriptionInput = {
    where: AsaasSubscriptionWhereUniqueInput
    create: XOR<AsaasSubscriptionCreateWithoutSubscriptionInput, AsaasSubscriptionUncheckedCreateWithoutSubscriptionInput>
  }

  export type UserUpsertWithoutSubscriptionsInput = {
    update: XOR<UserUpdateWithoutSubscriptionsInput, UserUncheckedUpdateWithoutSubscriptionsInput>
    create: XOR<UserCreateWithoutSubscriptionsInput, UserUncheckedCreateWithoutSubscriptionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSubscriptionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSubscriptionsInput, UserUncheckedUpdateWithoutSubscriptionsInput>
  }

  export type UserUpdateWithoutSubscriptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    asaasCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    decks?: DeckUpdateManyWithoutUserNestedInput
    purchases?: PurchaseUpdateManyWithoutUserNestedInput
    favorites?: FavoriteUpdateManyWithoutUserNestedInput
    asaasCustomer?: AsaasCustomerUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSubscriptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    asaasCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    decks?: DeckUncheckedUpdateManyWithoutUserNestedInput
    purchases?: PurchaseUncheckedUpdateManyWithoutUserNestedInput
    favorites?: FavoriteUncheckedUpdateManyWithoutUserNestedInput
    asaasCustomer?: AsaasCustomerUncheckedUpdateOneWithoutUserNestedInput
  }

  export type AsaasSubscriptionUpsertWithoutSubscriptionInput = {
    update: XOR<AsaasSubscriptionUpdateWithoutSubscriptionInput, AsaasSubscriptionUncheckedUpdateWithoutSubscriptionInput>
    create: XOR<AsaasSubscriptionCreateWithoutSubscriptionInput, AsaasSubscriptionUncheckedCreateWithoutSubscriptionInput>
    where?: AsaasSubscriptionWhereInput
  }

  export type AsaasSubscriptionUpdateToOneWithWhereWithoutSubscriptionInput = {
    where?: AsaasSubscriptionWhereInput
    data: XOR<AsaasSubscriptionUpdateWithoutSubscriptionInput, AsaasSubscriptionUncheckedUpdateWithoutSubscriptionInput>
  }

  export type AsaasSubscriptionUpdateWithoutSubscriptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    asaasId?: StringFieldUpdateOperationsInput | string
    billingType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    value?: FloatFieldUpdateOperationsInput | number
    nextDueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    cycle?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    maxPayments?: NullableIntFieldUpdateOperationsInput | number | null
    externalReference?: NullableStringFieldUpdateOperationsInput | string | null
    asaasPayload?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: AsaasCustomerUpdateOneRequiredWithoutSubscriptionsNestedInput
  }

  export type AsaasSubscriptionUncheckedUpdateWithoutSubscriptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    asaasId?: StringFieldUpdateOperationsInput | string
    billingType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    value?: FloatFieldUpdateOperationsInput | number
    nextDueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    cycle?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    maxPayments?: NullableIntFieldUpdateOperationsInput | number | null
    externalReference?: NullableStringFieldUpdateOperationsInput | string | null
    asaasPayload?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutFavoritesInput = {
    id: string
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    role?: string
    asaasCustomerId?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    decks?: DeckCreateNestedManyWithoutUserInput
    purchases?: PurchaseCreateNestedManyWithoutUserInput
    subscriptions?: SubscriptionCreateNestedManyWithoutUserInput
    asaasCustomer?: AsaasCustomerCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutFavoritesInput = {
    id: string
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    role?: string
    asaasCustomerId?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    decks?: DeckUncheckedCreateNestedManyWithoutUserInput
    purchases?: PurchaseUncheckedCreateNestedManyWithoutUserInput
    subscriptions?: SubscriptionUncheckedCreateNestedManyWithoutUserInput
    asaasCustomer?: AsaasCustomerUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutFavoritesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFavoritesInput, UserUncheckedCreateWithoutFavoritesInput>
  }

  export type DeckCreateWithoutFavoritesInput = {
    title: string
    description?: string | null
    coverUrl?: string | null
    isPublic?: boolean
    priceCents?: number
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutDecksInput
    flashcards?: FlashcardCreateNestedManyWithoutDeckInput
    purchases?: PurchaseCreateNestedManyWithoutDeckInput
  }

  export type DeckUncheckedCreateWithoutFavoritesInput = {
    id?: number
    userId: string
    title: string
    description?: string | null
    coverUrl?: string | null
    isPublic?: boolean
    priceCents?: number
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    flashcards?: FlashcardUncheckedCreateNestedManyWithoutDeckInput
    purchases?: PurchaseUncheckedCreateNestedManyWithoutDeckInput
  }

  export type DeckCreateOrConnectWithoutFavoritesInput = {
    where: DeckWhereUniqueInput
    create: XOR<DeckCreateWithoutFavoritesInput, DeckUncheckedCreateWithoutFavoritesInput>
  }

  export type UserUpsertWithoutFavoritesInput = {
    update: XOR<UserUpdateWithoutFavoritesInput, UserUncheckedUpdateWithoutFavoritesInput>
    create: XOR<UserCreateWithoutFavoritesInput, UserUncheckedCreateWithoutFavoritesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFavoritesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFavoritesInput, UserUncheckedUpdateWithoutFavoritesInput>
  }

  export type UserUpdateWithoutFavoritesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    asaasCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    decks?: DeckUpdateManyWithoutUserNestedInput
    purchases?: PurchaseUpdateManyWithoutUserNestedInput
    subscriptions?: SubscriptionUpdateManyWithoutUserNestedInput
    asaasCustomer?: AsaasCustomerUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFavoritesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    asaasCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    decks?: DeckUncheckedUpdateManyWithoutUserNestedInput
    purchases?: PurchaseUncheckedUpdateManyWithoutUserNestedInput
    subscriptions?: SubscriptionUncheckedUpdateManyWithoutUserNestedInput
    asaasCustomer?: AsaasCustomerUncheckedUpdateOneWithoutUserNestedInput
  }

  export type DeckUpsertWithoutFavoritesInput = {
    update: XOR<DeckUpdateWithoutFavoritesInput, DeckUncheckedUpdateWithoutFavoritesInput>
    create: XOR<DeckCreateWithoutFavoritesInput, DeckUncheckedCreateWithoutFavoritesInput>
    where?: DeckWhereInput
  }

  export type DeckUpdateToOneWithWhereWithoutFavoritesInput = {
    where?: DeckWhereInput
    data: XOR<DeckUpdateWithoutFavoritesInput, DeckUncheckedUpdateWithoutFavoritesInput>
  }

  export type DeckUpdateWithoutFavoritesInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    priceCents?: IntFieldUpdateOperationsInput | number
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutDecksNestedInput
    flashcards?: FlashcardUpdateManyWithoutDeckNestedInput
    purchases?: PurchaseUpdateManyWithoutDeckNestedInput
  }

  export type DeckUncheckedUpdateWithoutFavoritesInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    priceCents?: IntFieldUpdateOperationsInput | number
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    flashcards?: FlashcardUncheckedUpdateManyWithoutDeckNestedInput
    purchases?: PurchaseUncheckedUpdateManyWithoutDeckNestedInput
  }

  export type UserCreateWithoutAsaasCustomerInput = {
    id: string
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    role?: string
    asaasCustomerId?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    decks?: DeckCreateNestedManyWithoutUserInput
    purchases?: PurchaseCreateNestedManyWithoutUserInput
    subscriptions?: SubscriptionCreateNestedManyWithoutUserInput
    favorites?: FavoriteCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAsaasCustomerInput = {
    id: string
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    role?: string
    asaasCustomerId?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    decks?: DeckUncheckedCreateNestedManyWithoutUserInput
    purchases?: PurchaseUncheckedCreateNestedManyWithoutUserInput
    subscriptions?: SubscriptionUncheckedCreateNestedManyWithoutUserInput
    favorites?: FavoriteUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAsaasCustomerInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAsaasCustomerInput, UserUncheckedCreateWithoutAsaasCustomerInput>
  }

  export type AsaasPaymentCreateWithoutCustomerInput = {
    id: string
    asaasId: string
    billingType: string
    status: string
    value: number
    dueDate: Date | string
    originalDueDate?: Date | string | null
    description?: string | null
    externalReference?: string | null
    invoiceUrl?: string | null
    bankSlipUrl?: string | null
    pixQrCode?: string | null
    creditCardPaymentLink?: string | null
    confirmedDate?: Date | string | null
    paymentDate?: Date | string | null
    clientPaymentDate?: Date | string | null
    netValue?: number | null
    originalValue?: number | null
    interestValue?: number | null
    discountValue?: number | null
    fineValue?: number | null
    asaasPayload?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    purchase?: PurchaseCreateNestedOneWithoutAsaasPaymentInput
  }

  export type AsaasPaymentUncheckedCreateWithoutCustomerInput = {
    id: string
    asaasId: string
    purchaseId?: number | null
    billingType: string
    status: string
    value: number
    dueDate: Date | string
    originalDueDate?: Date | string | null
    description?: string | null
    externalReference?: string | null
    invoiceUrl?: string | null
    bankSlipUrl?: string | null
    pixQrCode?: string | null
    creditCardPaymentLink?: string | null
    confirmedDate?: Date | string | null
    paymentDate?: Date | string | null
    clientPaymentDate?: Date | string | null
    netValue?: number | null
    originalValue?: number | null
    interestValue?: number | null
    discountValue?: number | null
    fineValue?: number | null
    asaasPayload?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AsaasPaymentCreateOrConnectWithoutCustomerInput = {
    where: AsaasPaymentWhereUniqueInput
    create: XOR<AsaasPaymentCreateWithoutCustomerInput, AsaasPaymentUncheckedCreateWithoutCustomerInput>
  }

  export type AsaasPaymentCreateManyCustomerInputEnvelope = {
    data: AsaasPaymentCreateManyCustomerInput | AsaasPaymentCreateManyCustomerInput[]
  }

  export type AsaasSubscriptionCreateWithoutCustomerInput = {
    id: string
    asaasId: string
    billingType: string
    status: string
    value: number
    nextDueDate: Date | string
    cycle: string
    description?: string | null
    endDate?: Date | string | null
    maxPayments?: number | null
    externalReference?: string | null
    asaasPayload?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    subscription?: SubscriptionCreateNestedOneWithoutAsaasSubscriptionInput
  }

  export type AsaasSubscriptionUncheckedCreateWithoutCustomerInput = {
    id: string
    asaasId: string
    subscriptionId?: number | null
    billingType: string
    status: string
    value: number
    nextDueDate: Date | string
    cycle: string
    description?: string | null
    endDate?: Date | string | null
    maxPayments?: number | null
    externalReference?: string | null
    asaasPayload?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AsaasSubscriptionCreateOrConnectWithoutCustomerInput = {
    where: AsaasSubscriptionWhereUniqueInput
    create: XOR<AsaasSubscriptionCreateWithoutCustomerInput, AsaasSubscriptionUncheckedCreateWithoutCustomerInput>
  }

  export type AsaasSubscriptionCreateManyCustomerInputEnvelope = {
    data: AsaasSubscriptionCreateManyCustomerInput | AsaasSubscriptionCreateManyCustomerInput[]
  }

  export type UserUpsertWithoutAsaasCustomerInput = {
    update: XOR<UserUpdateWithoutAsaasCustomerInput, UserUncheckedUpdateWithoutAsaasCustomerInput>
    create: XOR<UserCreateWithoutAsaasCustomerInput, UserUncheckedCreateWithoutAsaasCustomerInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAsaasCustomerInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAsaasCustomerInput, UserUncheckedUpdateWithoutAsaasCustomerInput>
  }

  export type UserUpdateWithoutAsaasCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    asaasCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    decks?: DeckUpdateManyWithoutUserNestedInput
    purchases?: PurchaseUpdateManyWithoutUserNestedInput
    subscriptions?: SubscriptionUpdateManyWithoutUserNestedInput
    favorites?: FavoriteUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAsaasCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    asaasCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    decks?: DeckUncheckedUpdateManyWithoutUserNestedInput
    purchases?: PurchaseUncheckedUpdateManyWithoutUserNestedInput
    subscriptions?: SubscriptionUncheckedUpdateManyWithoutUserNestedInput
    favorites?: FavoriteUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AsaasPaymentUpsertWithWhereUniqueWithoutCustomerInput = {
    where: AsaasPaymentWhereUniqueInput
    update: XOR<AsaasPaymentUpdateWithoutCustomerInput, AsaasPaymentUncheckedUpdateWithoutCustomerInput>
    create: XOR<AsaasPaymentCreateWithoutCustomerInput, AsaasPaymentUncheckedCreateWithoutCustomerInput>
  }

  export type AsaasPaymentUpdateWithWhereUniqueWithoutCustomerInput = {
    where: AsaasPaymentWhereUniqueInput
    data: XOR<AsaasPaymentUpdateWithoutCustomerInput, AsaasPaymentUncheckedUpdateWithoutCustomerInput>
  }

  export type AsaasPaymentUpdateManyWithWhereWithoutCustomerInput = {
    where: AsaasPaymentScalarWhereInput
    data: XOR<AsaasPaymentUpdateManyMutationInput, AsaasPaymentUncheckedUpdateManyWithoutCustomerInput>
  }

  export type AsaasPaymentScalarWhereInput = {
    AND?: AsaasPaymentScalarWhereInput | AsaasPaymentScalarWhereInput[]
    OR?: AsaasPaymentScalarWhereInput[]
    NOT?: AsaasPaymentScalarWhereInput | AsaasPaymentScalarWhereInput[]
    id?: StringFilter<"AsaasPayment"> | string
    customerId?: StringFilter<"AsaasPayment"> | string
    asaasId?: StringFilter<"AsaasPayment"> | string
    purchaseId?: IntNullableFilter<"AsaasPayment"> | number | null
    billingType?: StringFilter<"AsaasPayment"> | string
    status?: StringFilter<"AsaasPayment"> | string
    value?: FloatFilter<"AsaasPayment"> | number
    dueDate?: DateTimeFilter<"AsaasPayment"> | Date | string
    originalDueDate?: DateTimeNullableFilter<"AsaasPayment"> | Date | string | null
    description?: StringNullableFilter<"AsaasPayment"> | string | null
    externalReference?: StringNullableFilter<"AsaasPayment"> | string | null
    invoiceUrl?: StringNullableFilter<"AsaasPayment"> | string | null
    bankSlipUrl?: StringNullableFilter<"AsaasPayment"> | string | null
    pixQrCode?: StringNullableFilter<"AsaasPayment"> | string | null
    creditCardPaymentLink?: StringNullableFilter<"AsaasPayment"> | string | null
    confirmedDate?: DateTimeNullableFilter<"AsaasPayment"> | Date | string | null
    paymentDate?: DateTimeNullableFilter<"AsaasPayment"> | Date | string | null
    clientPaymentDate?: DateTimeNullableFilter<"AsaasPayment"> | Date | string | null
    netValue?: FloatNullableFilter<"AsaasPayment"> | number | null
    originalValue?: FloatNullableFilter<"AsaasPayment"> | number | null
    interestValue?: FloatNullableFilter<"AsaasPayment"> | number | null
    discountValue?: FloatNullableFilter<"AsaasPayment"> | number | null
    fineValue?: FloatNullableFilter<"AsaasPayment"> | number | null
    asaasPayload?: StringNullableFilter<"AsaasPayment"> | string | null
    createdAt?: DateTimeFilter<"AsaasPayment"> | Date | string
    updatedAt?: DateTimeFilter<"AsaasPayment"> | Date | string
  }

  export type AsaasSubscriptionUpsertWithWhereUniqueWithoutCustomerInput = {
    where: AsaasSubscriptionWhereUniqueInput
    update: XOR<AsaasSubscriptionUpdateWithoutCustomerInput, AsaasSubscriptionUncheckedUpdateWithoutCustomerInput>
    create: XOR<AsaasSubscriptionCreateWithoutCustomerInput, AsaasSubscriptionUncheckedCreateWithoutCustomerInput>
  }

  export type AsaasSubscriptionUpdateWithWhereUniqueWithoutCustomerInput = {
    where: AsaasSubscriptionWhereUniqueInput
    data: XOR<AsaasSubscriptionUpdateWithoutCustomerInput, AsaasSubscriptionUncheckedUpdateWithoutCustomerInput>
  }

  export type AsaasSubscriptionUpdateManyWithWhereWithoutCustomerInput = {
    where: AsaasSubscriptionScalarWhereInput
    data: XOR<AsaasSubscriptionUpdateManyMutationInput, AsaasSubscriptionUncheckedUpdateManyWithoutCustomerInput>
  }

  export type AsaasSubscriptionScalarWhereInput = {
    AND?: AsaasSubscriptionScalarWhereInput | AsaasSubscriptionScalarWhereInput[]
    OR?: AsaasSubscriptionScalarWhereInput[]
    NOT?: AsaasSubscriptionScalarWhereInput | AsaasSubscriptionScalarWhereInput[]
    id?: StringFilter<"AsaasSubscription"> | string
    customerId?: StringFilter<"AsaasSubscription"> | string
    asaasId?: StringFilter<"AsaasSubscription"> | string
    subscriptionId?: IntNullableFilter<"AsaasSubscription"> | number | null
    billingType?: StringFilter<"AsaasSubscription"> | string
    status?: StringFilter<"AsaasSubscription"> | string
    value?: FloatFilter<"AsaasSubscription"> | number
    nextDueDate?: DateTimeFilter<"AsaasSubscription"> | Date | string
    cycle?: StringFilter<"AsaasSubscription"> | string
    description?: StringNullableFilter<"AsaasSubscription"> | string | null
    endDate?: DateTimeNullableFilter<"AsaasSubscription"> | Date | string | null
    maxPayments?: IntNullableFilter<"AsaasSubscription"> | number | null
    externalReference?: StringNullableFilter<"AsaasSubscription"> | string | null
    asaasPayload?: StringNullableFilter<"AsaasSubscription"> | string | null
    createdAt?: DateTimeFilter<"AsaasSubscription"> | Date | string
    updatedAt?: DateTimeFilter<"AsaasSubscription"> | Date | string
  }

  export type AsaasCustomerCreateWithoutPaymentsInput = {
    id: string
    asaasId: string
    name: string
    cpfCnpj?: string | null
    email: string
    phone?: string | null
    mobilePhone?: string | null
    postalCode?: string | null
    address?: string | null
    addressNumber?: string | null
    complement?: string | null
    province?: string | null
    externalReference?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutAsaasCustomerInput
    subscriptions?: AsaasSubscriptionCreateNestedManyWithoutCustomerInput
  }

  export type AsaasCustomerUncheckedCreateWithoutPaymentsInput = {
    id: string
    userId: string
    asaasId: string
    name: string
    cpfCnpj?: string | null
    email: string
    phone?: string | null
    mobilePhone?: string | null
    postalCode?: string | null
    address?: string | null
    addressNumber?: string | null
    complement?: string | null
    province?: string | null
    externalReference?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    subscriptions?: AsaasSubscriptionUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type AsaasCustomerCreateOrConnectWithoutPaymentsInput = {
    where: AsaasCustomerWhereUniqueInput
    create: XOR<AsaasCustomerCreateWithoutPaymentsInput, AsaasCustomerUncheckedCreateWithoutPaymentsInput>
  }

  export type PurchaseCreateWithoutAsaasPaymentInput = {
    amountCents: number
    status: string
    paymentMethod?: string | null
    asaasPaymentId?: string | null
    asaasInvoiceId?: string | null
    asaasPayload?: string | null
    confirmedAt?: Date | string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutPurchasesInput
    deck: DeckCreateNestedOneWithoutPurchasesInput
  }

  export type PurchaseUncheckedCreateWithoutAsaasPaymentInput = {
    id?: number
    userId: string
    deckId: number
    amountCents: number
    status: string
    paymentMethod?: string | null
    asaasPaymentId?: string | null
    asaasInvoiceId?: string | null
    asaasPayload?: string | null
    confirmedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type PurchaseCreateOrConnectWithoutAsaasPaymentInput = {
    where: PurchaseWhereUniqueInput
    create: XOR<PurchaseCreateWithoutAsaasPaymentInput, PurchaseUncheckedCreateWithoutAsaasPaymentInput>
  }

  export type AsaasCustomerUpsertWithoutPaymentsInput = {
    update: XOR<AsaasCustomerUpdateWithoutPaymentsInput, AsaasCustomerUncheckedUpdateWithoutPaymentsInput>
    create: XOR<AsaasCustomerCreateWithoutPaymentsInput, AsaasCustomerUncheckedCreateWithoutPaymentsInput>
    where?: AsaasCustomerWhereInput
  }

  export type AsaasCustomerUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: AsaasCustomerWhereInput
    data: XOR<AsaasCustomerUpdateWithoutPaymentsInput, AsaasCustomerUncheckedUpdateWithoutPaymentsInput>
  }

  export type AsaasCustomerUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    asaasId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cpfCnpj?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    mobilePhone?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    addressNumber?: NullableStringFieldUpdateOperationsInput | string | null
    complement?: NullableStringFieldUpdateOperationsInput | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    externalReference?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAsaasCustomerNestedInput
    subscriptions?: AsaasSubscriptionUpdateManyWithoutCustomerNestedInput
  }

  export type AsaasCustomerUncheckedUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    asaasId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cpfCnpj?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    mobilePhone?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    addressNumber?: NullableStringFieldUpdateOperationsInput | string | null
    complement?: NullableStringFieldUpdateOperationsInput | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    externalReference?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscriptions?: AsaasSubscriptionUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type PurchaseUpsertWithoutAsaasPaymentInput = {
    update: XOR<PurchaseUpdateWithoutAsaasPaymentInput, PurchaseUncheckedUpdateWithoutAsaasPaymentInput>
    create: XOR<PurchaseCreateWithoutAsaasPaymentInput, PurchaseUncheckedCreateWithoutAsaasPaymentInput>
    where?: PurchaseWhereInput
  }

  export type PurchaseUpdateToOneWithWhereWithoutAsaasPaymentInput = {
    where?: PurchaseWhereInput
    data: XOR<PurchaseUpdateWithoutAsaasPaymentInput, PurchaseUncheckedUpdateWithoutAsaasPaymentInput>
  }

  export type PurchaseUpdateWithoutAsaasPaymentInput = {
    amountCents?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    asaasPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    asaasInvoiceId?: NullableStringFieldUpdateOperationsInput | string | null
    asaasPayload?: NullableStringFieldUpdateOperationsInput | string | null
    confirmedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPurchasesNestedInput
    deck?: DeckUpdateOneRequiredWithoutPurchasesNestedInput
  }

  export type PurchaseUncheckedUpdateWithoutAsaasPaymentInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    deckId?: IntFieldUpdateOperationsInput | number
    amountCents?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    asaasPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    asaasInvoiceId?: NullableStringFieldUpdateOperationsInput | string | null
    asaasPayload?: NullableStringFieldUpdateOperationsInput | string | null
    confirmedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AsaasCustomerCreateWithoutSubscriptionsInput = {
    id: string
    asaasId: string
    name: string
    cpfCnpj?: string | null
    email: string
    phone?: string | null
    mobilePhone?: string | null
    postalCode?: string | null
    address?: string | null
    addressNumber?: string | null
    complement?: string | null
    province?: string | null
    externalReference?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutAsaasCustomerInput
    payments?: AsaasPaymentCreateNestedManyWithoutCustomerInput
  }

  export type AsaasCustomerUncheckedCreateWithoutSubscriptionsInput = {
    id: string
    userId: string
    asaasId: string
    name: string
    cpfCnpj?: string | null
    email: string
    phone?: string | null
    mobilePhone?: string | null
    postalCode?: string | null
    address?: string | null
    addressNumber?: string | null
    complement?: string | null
    province?: string | null
    externalReference?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    payments?: AsaasPaymentUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type AsaasCustomerCreateOrConnectWithoutSubscriptionsInput = {
    where: AsaasCustomerWhereUniqueInput
    create: XOR<AsaasCustomerCreateWithoutSubscriptionsInput, AsaasCustomerUncheckedCreateWithoutSubscriptionsInput>
  }

  export type SubscriptionCreateWithoutAsaasSubscriptionInput = {
    status: string
    planName: string
    priceCents: number
    asaasSubscriptionId: string
    nextDueDate?: Date | string | null
    lastPaymentDate?: Date | string | null
    currentPeriodEnd?: Date | string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutSubscriptionsInput
  }

  export type SubscriptionUncheckedCreateWithoutAsaasSubscriptionInput = {
    id?: number
    userId: string
    status: string
    planName: string
    priceCents: number
    asaasSubscriptionId: string
    nextDueDate?: Date | string | null
    lastPaymentDate?: Date | string | null
    currentPeriodEnd?: Date | string | null
    createdAt?: Date | string
  }

  export type SubscriptionCreateOrConnectWithoutAsaasSubscriptionInput = {
    where: SubscriptionWhereUniqueInput
    create: XOR<SubscriptionCreateWithoutAsaasSubscriptionInput, SubscriptionUncheckedCreateWithoutAsaasSubscriptionInput>
  }

  export type AsaasCustomerUpsertWithoutSubscriptionsInput = {
    update: XOR<AsaasCustomerUpdateWithoutSubscriptionsInput, AsaasCustomerUncheckedUpdateWithoutSubscriptionsInput>
    create: XOR<AsaasCustomerCreateWithoutSubscriptionsInput, AsaasCustomerUncheckedCreateWithoutSubscriptionsInput>
    where?: AsaasCustomerWhereInput
  }

  export type AsaasCustomerUpdateToOneWithWhereWithoutSubscriptionsInput = {
    where?: AsaasCustomerWhereInput
    data: XOR<AsaasCustomerUpdateWithoutSubscriptionsInput, AsaasCustomerUncheckedUpdateWithoutSubscriptionsInput>
  }

  export type AsaasCustomerUpdateWithoutSubscriptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    asaasId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cpfCnpj?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    mobilePhone?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    addressNumber?: NullableStringFieldUpdateOperationsInput | string | null
    complement?: NullableStringFieldUpdateOperationsInput | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    externalReference?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAsaasCustomerNestedInput
    payments?: AsaasPaymentUpdateManyWithoutCustomerNestedInput
  }

  export type AsaasCustomerUncheckedUpdateWithoutSubscriptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    asaasId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cpfCnpj?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    mobilePhone?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    addressNumber?: NullableStringFieldUpdateOperationsInput | string | null
    complement?: NullableStringFieldUpdateOperationsInput | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    externalReference?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: AsaasPaymentUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type SubscriptionUpsertWithoutAsaasSubscriptionInput = {
    update: XOR<SubscriptionUpdateWithoutAsaasSubscriptionInput, SubscriptionUncheckedUpdateWithoutAsaasSubscriptionInput>
    create: XOR<SubscriptionCreateWithoutAsaasSubscriptionInput, SubscriptionUncheckedCreateWithoutAsaasSubscriptionInput>
    where?: SubscriptionWhereInput
  }

  export type SubscriptionUpdateToOneWithWhereWithoutAsaasSubscriptionInput = {
    where?: SubscriptionWhereInput
    data: XOR<SubscriptionUpdateWithoutAsaasSubscriptionInput, SubscriptionUncheckedUpdateWithoutAsaasSubscriptionInput>
  }

  export type SubscriptionUpdateWithoutAsaasSubscriptionInput = {
    status?: StringFieldUpdateOperationsInput | string
    planName?: StringFieldUpdateOperationsInput | string
    priceCents?: IntFieldUpdateOperationsInput | number
    asaasSubscriptionId?: StringFieldUpdateOperationsInput | string
    nextDueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastPaymentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currentPeriodEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSubscriptionsNestedInput
  }

  export type SubscriptionUncheckedUpdateWithoutAsaasSubscriptionInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    planName?: StringFieldUpdateOperationsInput | string
    priceCents?: IntFieldUpdateOperationsInput | number
    asaasSubscriptionId?: StringFieldUpdateOperationsInput | string
    nextDueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastPaymentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currentPeriodEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyUserInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt: Date | string
    updatedAt: Date | string
    ipAddress?: string | null
    userAgent?: string | null
  }

  export type AccountCreateManyUserInput = {
    id: string
    accountId: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt: Date | string
    updatedAt: Date | string
  }

  export type DeckCreateManyUserInput = {
    id?: number
    title: string
    description?: string | null
    coverUrl?: string | null
    isPublic?: boolean
    priceCents?: number
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PurchaseCreateManyUserInput = {
    id?: number
    deckId: number
    amountCents: number
    status: string
    paymentMethod?: string | null
    asaasPaymentId?: string | null
    asaasInvoiceId?: string | null
    asaasPayload?: string | null
    confirmedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type SubscriptionCreateManyUserInput = {
    id?: number
    status: string
    planName: string
    priceCents: number
    asaasSubscriptionId: string
    nextDueDate?: Date | string | null
    lastPaymentDate?: Date | string | null
    currentPeriodEnd?: Date | string | null
    createdAt?: Date | string
  }

  export type FavoriteCreateManyUserInput = {
    id?: number
    deckId: number
    createdAt?: Date | string
  }

  export type SessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeckUpdateWithoutUserInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    priceCents?: IntFieldUpdateOperationsInput | number
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    flashcards?: FlashcardUpdateManyWithoutDeckNestedInput
    purchases?: PurchaseUpdateManyWithoutDeckNestedInput
    favorites?: FavoriteUpdateManyWithoutDeckNestedInput
  }

  export type DeckUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    priceCents?: IntFieldUpdateOperationsInput | number
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    flashcards?: FlashcardUncheckedUpdateManyWithoutDeckNestedInput
    purchases?: PurchaseUncheckedUpdateManyWithoutDeckNestedInput
    favorites?: FavoriteUncheckedUpdateManyWithoutDeckNestedInput
  }

  export type DeckUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    priceCents?: IntFieldUpdateOperationsInput | number
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchaseUpdateWithoutUserInput = {
    amountCents?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    asaasPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    asaasInvoiceId?: NullableStringFieldUpdateOperationsInput | string | null
    asaasPayload?: NullableStringFieldUpdateOperationsInput | string | null
    confirmedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deck?: DeckUpdateOneRequiredWithoutPurchasesNestedInput
    asaasPayment?: AsaasPaymentUpdateOneWithoutPurchaseNestedInput
  }

  export type PurchaseUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    deckId?: IntFieldUpdateOperationsInput | number
    amountCents?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    asaasPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    asaasInvoiceId?: NullableStringFieldUpdateOperationsInput | string | null
    asaasPayload?: NullableStringFieldUpdateOperationsInput | string | null
    confirmedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    asaasPayment?: AsaasPaymentUncheckedUpdateOneWithoutPurchaseNestedInput
  }

  export type PurchaseUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    deckId?: IntFieldUpdateOperationsInput | number
    amountCents?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    asaasPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    asaasInvoiceId?: NullableStringFieldUpdateOperationsInput | string | null
    asaasPayload?: NullableStringFieldUpdateOperationsInput | string | null
    confirmedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionUpdateWithoutUserInput = {
    status?: StringFieldUpdateOperationsInput | string
    planName?: StringFieldUpdateOperationsInput | string
    priceCents?: IntFieldUpdateOperationsInput | number
    asaasSubscriptionId?: StringFieldUpdateOperationsInput | string
    nextDueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastPaymentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currentPeriodEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    asaasSubscription?: AsaasSubscriptionUpdateOneWithoutSubscriptionNestedInput
  }

  export type SubscriptionUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    planName?: StringFieldUpdateOperationsInput | string
    priceCents?: IntFieldUpdateOperationsInput | number
    asaasSubscriptionId?: StringFieldUpdateOperationsInput | string
    nextDueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastPaymentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currentPeriodEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    asaasSubscription?: AsaasSubscriptionUncheckedUpdateOneWithoutSubscriptionNestedInput
  }

  export type SubscriptionUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    planName?: StringFieldUpdateOperationsInput | string
    priceCents?: IntFieldUpdateOperationsInput | number
    asaasSubscriptionId?: StringFieldUpdateOperationsInput | string
    nextDueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastPaymentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currentPeriodEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoriteUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deck?: DeckUpdateOneRequiredWithoutFavoritesNestedInput
  }

  export type FavoriteUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    deckId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoriteUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    deckId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FlashcardCreateManyDeckInput = {
    id?: number
    frontText: string
    backText: string
    orderIndex?: number
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PurchaseCreateManyDeckInput = {
    id?: number
    userId: string
    amountCents: number
    status: string
    paymentMethod?: string | null
    asaasPaymentId?: string | null
    asaasInvoiceId?: string | null
    asaasPayload?: string | null
    confirmedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type FavoriteCreateManyDeckInput = {
    id?: number
    userId: string
    createdAt?: Date | string
  }

  export type FlashcardUpdateWithoutDeckInput = {
    frontText?: StringFieldUpdateOperationsInput | string
    backText?: StringFieldUpdateOperationsInput | string
    orderIndex?: IntFieldUpdateOperationsInput | number
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FlashcardUncheckedUpdateWithoutDeckInput = {
    id?: IntFieldUpdateOperationsInput | number
    frontText?: StringFieldUpdateOperationsInput | string
    backText?: StringFieldUpdateOperationsInput | string
    orderIndex?: IntFieldUpdateOperationsInput | number
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FlashcardUncheckedUpdateManyWithoutDeckInput = {
    id?: IntFieldUpdateOperationsInput | number
    frontText?: StringFieldUpdateOperationsInput | string
    backText?: StringFieldUpdateOperationsInput | string
    orderIndex?: IntFieldUpdateOperationsInput | number
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchaseUpdateWithoutDeckInput = {
    amountCents?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    asaasPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    asaasInvoiceId?: NullableStringFieldUpdateOperationsInput | string | null
    asaasPayload?: NullableStringFieldUpdateOperationsInput | string | null
    confirmedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPurchasesNestedInput
    asaasPayment?: AsaasPaymentUpdateOneWithoutPurchaseNestedInput
  }

  export type PurchaseUncheckedUpdateWithoutDeckInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    amountCents?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    asaasPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    asaasInvoiceId?: NullableStringFieldUpdateOperationsInput | string | null
    asaasPayload?: NullableStringFieldUpdateOperationsInput | string | null
    confirmedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    asaasPayment?: AsaasPaymentUncheckedUpdateOneWithoutPurchaseNestedInput
  }

  export type PurchaseUncheckedUpdateManyWithoutDeckInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    amountCents?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    asaasPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    asaasInvoiceId?: NullableStringFieldUpdateOperationsInput | string | null
    asaasPayload?: NullableStringFieldUpdateOperationsInput | string | null
    confirmedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoriteUpdateWithoutDeckInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutFavoritesNestedInput
  }

  export type FavoriteUncheckedUpdateWithoutDeckInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoriteUncheckedUpdateManyWithoutDeckInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AsaasPaymentCreateManyCustomerInput = {
    id: string
    asaasId: string
    purchaseId?: number | null
    billingType: string
    status: string
    value: number
    dueDate: Date | string
    originalDueDate?: Date | string | null
    description?: string | null
    externalReference?: string | null
    invoiceUrl?: string | null
    bankSlipUrl?: string | null
    pixQrCode?: string | null
    creditCardPaymentLink?: string | null
    confirmedDate?: Date | string | null
    paymentDate?: Date | string | null
    clientPaymentDate?: Date | string | null
    netValue?: number | null
    originalValue?: number | null
    interestValue?: number | null
    discountValue?: number | null
    fineValue?: number | null
    asaasPayload?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AsaasSubscriptionCreateManyCustomerInput = {
    id: string
    asaasId: string
    subscriptionId?: number | null
    billingType: string
    status: string
    value: number
    nextDueDate: Date | string
    cycle: string
    description?: string | null
    endDate?: Date | string | null
    maxPayments?: number | null
    externalReference?: string | null
    asaasPayload?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AsaasPaymentUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    asaasId?: StringFieldUpdateOperationsInput | string
    billingType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    value?: FloatFieldUpdateOperationsInput | number
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    originalDueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    externalReference?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bankSlipUrl?: NullableStringFieldUpdateOperationsInput | string | null
    pixQrCode?: NullableStringFieldUpdateOperationsInput | string | null
    creditCardPaymentLink?: NullableStringFieldUpdateOperationsInput | string | null
    confirmedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    clientPaymentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    netValue?: NullableFloatFieldUpdateOperationsInput | number | null
    originalValue?: NullableFloatFieldUpdateOperationsInput | number | null
    interestValue?: NullableFloatFieldUpdateOperationsInput | number | null
    discountValue?: NullableFloatFieldUpdateOperationsInput | number | null
    fineValue?: NullableFloatFieldUpdateOperationsInput | number | null
    asaasPayload?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    purchase?: PurchaseUpdateOneWithoutAsaasPaymentNestedInput
  }

  export type AsaasPaymentUncheckedUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    asaasId?: StringFieldUpdateOperationsInput | string
    purchaseId?: NullableIntFieldUpdateOperationsInput | number | null
    billingType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    value?: FloatFieldUpdateOperationsInput | number
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    originalDueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    externalReference?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bankSlipUrl?: NullableStringFieldUpdateOperationsInput | string | null
    pixQrCode?: NullableStringFieldUpdateOperationsInput | string | null
    creditCardPaymentLink?: NullableStringFieldUpdateOperationsInput | string | null
    confirmedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    clientPaymentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    netValue?: NullableFloatFieldUpdateOperationsInput | number | null
    originalValue?: NullableFloatFieldUpdateOperationsInput | number | null
    interestValue?: NullableFloatFieldUpdateOperationsInput | number | null
    discountValue?: NullableFloatFieldUpdateOperationsInput | number | null
    fineValue?: NullableFloatFieldUpdateOperationsInput | number | null
    asaasPayload?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AsaasPaymentUncheckedUpdateManyWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    asaasId?: StringFieldUpdateOperationsInput | string
    purchaseId?: NullableIntFieldUpdateOperationsInput | number | null
    billingType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    value?: FloatFieldUpdateOperationsInput | number
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    originalDueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    externalReference?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bankSlipUrl?: NullableStringFieldUpdateOperationsInput | string | null
    pixQrCode?: NullableStringFieldUpdateOperationsInput | string | null
    creditCardPaymentLink?: NullableStringFieldUpdateOperationsInput | string | null
    confirmedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    clientPaymentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    netValue?: NullableFloatFieldUpdateOperationsInput | number | null
    originalValue?: NullableFloatFieldUpdateOperationsInput | number | null
    interestValue?: NullableFloatFieldUpdateOperationsInput | number | null
    discountValue?: NullableFloatFieldUpdateOperationsInput | number | null
    fineValue?: NullableFloatFieldUpdateOperationsInput | number | null
    asaasPayload?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AsaasSubscriptionUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    asaasId?: StringFieldUpdateOperationsInput | string
    billingType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    value?: FloatFieldUpdateOperationsInput | number
    nextDueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    cycle?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    maxPayments?: NullableIntFieldUpdateOperationsInput | number | null
    externalReference?: NullableStringFieldUpdateOperationsInput | string | null
    asaasPayload?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscription?: SubscriptionUpdateOneWithoutAsaasSubscriptionNestedInput
  }

  export type AsaasSubscriptionUncheckedUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    asaasId?: StringFieldUpdateOperationsInput | string
    subscriptionId?: NullableIntFieldUpdateOperationsInput | number | null
    billingType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    value?: FloatFieldUpdateOperationsInput | number
    nextDueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    cycle?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    maxPayments?: NullableIntFieldUpdateOperationsInput | number | null
    externalReference?: NullableStringFieldUpdateOperationsInput | string | null
    asaasPayload?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AsaasSubscriptionUncheckedUpdateManyWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    asaasId?: StringFieldUpdateOperationsInput | string
    subscriptionId?: NullableIntFieldUpdateOperationsInput | number | null
    billingType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    value?: FloatFieldUpdateOperationsInput | number
    nextDueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    cycle?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    maxPayments?: NullableIntFieldUpdateOperationsInput | number | null
    externalReference?: NullableStringFieldUpdateOperationsInput | string | null
    asaasPayload?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}