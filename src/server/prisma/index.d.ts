
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
 * Model Users
 * 
 */
export type Users = $Result.DefaultSelection<Prisma.$UsersPayload>
/**
 * Model Authors
 * 
 */
export type Authors = $Result.DefaultSelection<Prisma.$AuthorsPayload>
/**
 * Model Sessions
 * 
 */
export type Sessions = $Result.DefaultSelection<Prisma.$SessionsPayload>
/**
 * Model Articles
 * 
 */
export type Articles = $Result.DefaultSelection<Prisma.$ArticlesPayload>
/**
 * Model Reactions
 * 
 */
export type Reactions = $Result.DefaultSelection<Prisma.$ReactionsPayload>
/**
 * Model Stars
 * 
 */
export type Stars = $Result.DefaultSelection<Prisma.$StarsPayload>
/**
 * Model Topics
 * 
 */
export type Topics = $Result.DefaultSelection<Prisma.$TopicsPayload>
/**
 * Model ArticleToTopics
 * 
 */
export type ArticleToTopics = $Result.DefaultSelection<Prisma.$ArticleToTopicsPayload>
/**
 * Model Pageviews
 * 
 */
export type Pageviews = $Result.DefaultSelection<Prisma.$PageviewsPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.users.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * const users = await prisma.users.findMany()
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

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
   * `prisma.users`: Exposes CRUD operations for the **Users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.UsersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.authors`: Exposes CRUD operations for the **Authors** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Authors
    * const authors = await prisma.authors.findMany()
    * ```
    */
  get authors(): Prisma.AuthorsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sessions`: Exposes CRUD operations for the **Sessions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.sessions.findMany()
    * ```
    */
  get sessions(): Prisma.SessionsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.articles`: Exposes CRUD operations for the **Articles** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Articles
    * const articles = await prisma.articles.findMany()
    * ```
    */
  get articles(): Prisma.ArticlesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.reactions`: Exposes CRUD operations for the **Reactions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reactions
    * const reactions = await prisma.reactions.findMany()
    * ```
    */
  get reactions(): Prisma.ReactionsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.stars`: Exposes CRUD operations for the **Stars** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Stars
    * const stars = await prisma.stars.findMany()
    * ```
    */
  get stars(): Prisma.StarsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.topics`: Exposes CRUD operations for the **Topics** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Topics
    * const topics = await prisma.topics.findMany()
    * ```
    */
  get topics(): Prisma.TopicsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.articleToTopics`: Exposes CRUD operations for the **ArticleToTopics** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ArticleToTopics
    * const articleToTopics = await prisma.articleToTopics.findMany()
    * ```
    */
  get articleToTopics(): Prisma.ArticleToTopicsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pageviews`: Exposes CRUD operations for the **Pageviews** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pageviews
    * const pageviews = await prisma.pageviews.findMany()
    * ```
    */
  get pageviews(): Prisma.PageviewsDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    Users: 'Users',
    Authors: 'Authors',
    Sessions: 'Sessions',
    Articles: 'Articles',
    Reactions: 'Reactions',
    Stars: 'Stars',
    Topics: 'Topics',
    ArticleToTopics: 'ArticleToTopics',
    Pageviews: 'Pageviews'
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
      modelProps: "users" | "authors" | "sessions" | "articles" | "reactions" | "stars" | "topics" | "articleToTopics" | "pageviews"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Users: {
        payload: Prisma.$UsersPayload<ExtArgs>
        fields: Prisma.UsersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findFirst: {
            args: Prisma.UsersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findMany: {
            args: Prisma.UsersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          create: {
            args: Prisma.UsersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          createMany: {
            args: Prisma.UsersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          delete: {
            args: Prisma.UsersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          update: {
            args: Prisma.UsersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          deleteMany: {
            args: Prisma.UsersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          upsert: {
            args: Prisma.UsersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.UsersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      Authors: {
        payload: Prisma.$AuthorsPayload<ExtArgs>
        fields: Prisma.AuthorsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuthorsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuthorsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorsPayload>
          }
          findFirst: {
            args: Prisma.AuthorsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuthorsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorsPayload>
          }
          findMany: {
            args: Prisma.AuthorsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorsPayload>[]
          }
          create: {
            args: Prisma.AuthorsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorsPayload>
          }
          createMany: {
            args: Prisma.AuthorsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AuthorsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorsPayload>[]
          }
          delete: {
            args: Prisma.AuthorsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorsPayload>
          }
          update: {
            args: Prisma.AuthorsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorsPayload>
          }
          deleteMany: {
            args: Prisma.AuthorsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AuthorsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AuthorsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorsPayload>[]
          }
          upsert: {
            args: Prisma.AuthorsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorsPayload>
          }
          aggregate: {
            args: Prisma.AuthorsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuthors>
          }
          groupBy: {
            args: Prisma.AuthorsGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuthorsGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuthorsCountArgs<ExtArgs>
            result: $Utils.Optional<AuthorsCountAggregateOutputType> | number
          }
        }
      }
      Sessions: {
        payload: Prisma.$SessionsPayload<ExtArgs>
        fields: Prisma.SessionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionsPayload>
          }
          findFirst: {
            args: Prisma.SessionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionsPayload>
          }
          findMany: {
            args: Prisma.SessionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionsPayload>[]
          }
          create: {
            args: Prisma.SessionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionsPayload>
          }
          createMany: {
            args: Prisma.SessionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionsPayload>[]
          }
          delete: {
            args: Prisma.SessionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionsPayload>
          }
          update: {
            args: Prisma.SessionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionsPayload>
          }
          deleteMany: {
            args: Prisma.SessionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionsPayload>[]
          }
          upsert: {
            args: Prisma.SessionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionsPayload>
          }
          aggregate: {
            args: Prisma.SessionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSessions>
          }
          groupBy: {
            args: Prisma.SessionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionsCountArgs<ExtArgs>
            result: $Utils.Optional<SessionsCountAggregateOutputType> | number
          }
        }
      }
      Articles: {
        payload: Prisma.$ArticlesPayload<ExtArgs>
        fields: Prisma.ArticlesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ArticlesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ArticlesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlesPayload>
          }
          findFirst: {
            args: Prisma.ArticlesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ArticlesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlesPayload>
          }
          findMany: {
            args: Prisma.ArticlesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlesPayload>[]
          }
          create: {
            args: Prisma.ArticlesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlesPayload>
          }
          createMany: {
            args: Prisma.ArticlesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ArticlesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlesPayload>[]
          }
          delete: {
            args: Prisma.ArticlesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlesPayload>
          }
          update: {
            args: Prisma.ArticlesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlesPayload>
          }
          deleteMany: {
            args: Prisma.ArticlesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ArticlesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ArticlesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlesPayload>[]
          }
          upsert: {
            args: Prisma.ArticlesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlesPayload>
          }
          aggregate: {
            args: Prisma.ArticlesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateArticles>
          }
          groupBy: {
            args: Prisma.ArticlesGroupByArgs<ExtArgs>
            result: $Utils.Optional<ArticlesGroupByOutputType>[]
          }
          count: {
            args: Prisma.ArticlesCountArgs<ExtArgs>
            result: $Utils.Optional<ArticlesCountAggregateOutputType> | number
          }
        }
      }
      Reactions: {
        payload: Prisma.$ReactionsPayload<ExtArgs>
        fields: Prisma.ReactionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReactionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReactionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReactionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReactionsPayload>
          }
          findFirst: {
            args: Prisma.ReactionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReactionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReactionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReactionsPayload>
          }
          findMany: {
            args: Prisma.ReactionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReactionsPayload>[]
          }
          create: {
            args: Prisma.ReactionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReactionsPayload>
          }
          createMany: {
            args: Prisma.ReactionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReactionsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReactionsPayload>[]
          }
          delete: {
            args: Prisma.ReactionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReactionsPayload>
          }
          update: {
            args: Prisma.ReactionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReactionsPayload>
          }
          deleteMany: {
            args: Prisma.ReactionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReactionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReactionsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReactionsPayload>[]
          }
          upsert: {
            args: Prisma.ReactionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReactionsPayload>
          }
          aggregate: {
            args: Prisma.ReactionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReactions>
          }
          groupBy: {
            args: Prisma.ReactionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReactionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReactionsCountArgs<ExtArgs>
            result: $Utils.Optional<ReactionsCountAggregateOutputType> | number
          }
        }
      }
      Stars: {
        payload: Prisma.$StarsPayload<ExtArgs>
        fields: Prisma.StarsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StarsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StarsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StarsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StarsPayload>
          }
          findFirst: {
            args: Prisma.StarsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StarsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StarsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StarsPayload>
          }
          findMany: {
            args: Prisma.StarsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StarsPayload>[]
          }
          create: {
            args: Prisma.StarsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StarsPayload>
          }
          createMany: {
            args: Prisma.StarsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StarsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StarsPayload>[]
          }
          delete: {
            args: Prisma.StarsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StarsPayload>
          }
          update: {
            args: Prisma.StarsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StarsPayload>
          }
          deleteMany: {
            args: Prisma.StarsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StarsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StarsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StarsPayload>[]
          }
          upsert: {
            args: Prisma.StarsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StarsPayload>
          }
          aggregate: {
            args: Prisma.StarsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStars>
          }
          groupBy: {
            args: Prisma.StarsGroupByArgs<ExtArgs>
            result: $Utils.Optional<StarsGroupByOutputType>[]
          }
          count: {
            args: Prisma.StarsCountArgs<ExtArgs>
            result: $Utils.Optional<StarsCountAggregateOutputType> | number
          }
        }
      }
      Topics: {
        payload: Prisma.$TopicsPayload<ExtArgs>
        fields: Prisma.TopicsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TopicsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TopicsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicsPayload>
          }
          findFirst: {
            args: Prisma.TopicsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TopicsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicsPayload>
          }
          findMany: {
            args: Prisma.TopicsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicsPayload>[]
          }
          create: {
            args: Prisma.TopicsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicsPayload>
          }
          createMany: {
            args: Prisma.TopicsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TopicsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicsPayload>[]
          }
          delete: {
            args: Prisma.TopicsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicsPayload>
          }
          update: {
            args: Prisma.TopicsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicsPayload>
          }
          deleteMany: {
            args: Prisma.TopicsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TopicsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TopicsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicsPayload>[]
          }
          upsert: {
            args: Prisma.TopicsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicsPayload>
          }
          aggregate: {
            args: Prisma.TopicsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTopics>
          }
          groupBy: {
            args: Prisma.TopicsGroupByArgs<ExtArgs>
            result: $Utils.Optional<TopicsGroupByOutputType>[]
          }
          count: {
            args: Prisma.TopicsCountArgs<ExtArgs>
            result: $Utils.Optional<TopicsCountAggregateOutputType> | number
          }
        }
      }
      ArticleToTopics: {
        payload: Prisma.$ArticleToTopicsPayload<ExtArgs>
        fields: Prisma.ArticleToTopicsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ArticleToTopicsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticleToTopicsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ArticleToTopicsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticleToTopicsPayload>
          }
          findFirst: {
            args: Prisma.ArticleToTopicsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticleToTopicsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ArticleToTopicsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticleToTopicsPayload>
          }
          findMany: {
            args: Prisma.ArticleToTopicsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticleToTopicsPayload>[]
          }
          create: {
            args: Prisma.ArticleToTopicsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticleToTopicsPayload>
          }
          createMany: {
            args: Prisma.ArticleToTopicsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ArticleToTopicsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticleToTopicsPayload>[]
          }
          delete: {
            args: Prisma.ArticleToTopicsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticleToTopicsPayload>
          }
          update: {
            args: Prisma.ArticleToTopicsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticleToTopicsPayload>
          }
          deleteMany: {
            args: Prisma.ArticleToTopicsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ArticleToTopicsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ArticleToTopicsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticleToTopicsPayload>[]
          }
          upsert: {
            args: Prisma.ArticleToTopicsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticleToTopicsPayload>
          }
          aggregate: {
            args: Prisma.ArticleToTopicsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateArticleToTopics>
          }
          groupBy: {
            args: Prisma.ArticleToTopicsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ArticleToTopicsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ArticleToTopicsCountArgs<ExtArgs>
            result: $Utils.Optional<ArticleToTopicsCountAggregateOutputType> | number
          }
        }
      }
      Pageviews: {
        payload: Prisma.$PageviewsPayload<ExtArgs>
        fields: Prisma.PageviewsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PageviewsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageviewsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PageviewsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageviewsPayload>
          }
          findFirst: {
            args: Prisma.PageviewsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageviewsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PageviewsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageviewsPayload>
          }
          findMany: {
            args: Prisma.PageviewsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageviewsPayload>[]
          }
          create: {
            args: Prisma.PageviewsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageviewsPayload>
          }
          createMany: {
            args: Prisma.PageviewsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PageviewsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageviewsPayload>[]
          }
          delete: {
            args: Prisma.PageviewsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageviewsPayload>
          }
          update: {
            args: Prisma.PageviewsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageviewsPayload>
          }
          deleteMany: {
            args: Prisma.PageviewsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PageviewsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PageviewsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageviewsPayload>[]
          }
          upsert: {
            args: Prisma.PageviewsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageviewsPayload>
          }
          aggregate: {
            args: Prisma.PageviewsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePageviews>
          }
          groupBy: {
            args: Prisma.PageviewsGroupByArgs<ExtArgs>
            result: $Utils.Optional<PageviewsGroupByOutputType>[]
          }
          count: {
            args: Prisma.PageviewsCountArgs<ExtArgs>
            result: $Utils.Optional<PageviewsCountAggregateOutputType> | number
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
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
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
    users?: UsersOmit
    authors?: AuthorsOmit
    sessions?: SessionsOmit
    articles?: ArticlesOmit
    reactions?: ReactionsOmit
    stars?: StarsOmit
    topics?: TopicsOmit
    articleToTopics?: ArticleToTopicsOmit
    pageviews?: PageviewsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    reaction: number
    stars: number
    pageviews: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reaction?: boolean | UsersCountOutputTypeCountReactionArgs
    stars?: boolean | UsersCountOutputTypeCountStarsArgs
    pageviews?: boolean | UsersCountOutputTypeCountPageviewsArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountReactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReactionsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountStarsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StarsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountPageviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PageviewsWhereInput
  }


  /**
   * Count Type AuthorsCountOutputType
   */

  export type AuthorsCountOutputType = {
    articles: number
    sessions: number
  }

  export type AuthorsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    articles?: boolean | AuthorsCountOutputTypeCountArticlesArgs
    sessions?: boolean | AuthorsCountOutputTypeCountSessionsArgs
  }

  // Custom InputTypes
  /**
   * AuthorsCountOutputType without action
   */
  export type AuthorsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthorsCountOutputType
     */
    select?: AuthorsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AuthorsCountOutputType without action
   */
  export type AuthorsCountOutputTypeCountArticlesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArticlesWhereInput
  }

  /**
   * AuthorsCountOutputType without action
   */
  export type AuthorsCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionsWhereInput
  }


  /**
   * Count Type ArticlesCountOutputType
   */

  export type ArticlesCountOutputType = {
    stars: number
    reactions: number
    topics: number
    pageviews: number
  }

  export type ArticlesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stars?: boolean | ArticlesCountOutputTypeCountStarsArgs
    reactions?: boolean | ArticlesCountOutputTypeCountReactionsArgs
    topics?: boolean | ArticlesCountOutputTypeCountTopicsArgs
    pageviews?: boolean | ArticlesCountOutputTypeCountPageviewsArgs
  }

  // Custom InputTypes
  /**
   * ArticlesCountOutputType without action
   */
  export type ArticlesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticlesCountOutputType
     */
    select?: ArticlesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ArticlesCountOutputType without action
   */
  export type ArticlesCountOutputTypeCountStarsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StarsWhereInput
  }

  /**
   * ArticlesCountOutputType without action
   */
  export type ArticlesCountOutputTypeCountReactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReactionsWhereInput
  }

  /**
   * ArticlesCountOutputType without action
   */
  export type ArticlesCountOutputTypeCountTopicsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArticleToTopicsWhereInput
  }

  /**
   * ArticlesCountOutputType without action
   */
  export type ArticlesCountOutputTypeCountPageviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PageviewsWhereInput
  }


  /**
   * Count Type TopicsCountOutputType
   */

  export type TopicsCountOutputType = {
    articles: number
  }

  export type TopicsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    articles?: boolean | TopicsCountOutputTypeCountArticlesArgs
  }

  // Custom InputTypes
  /**
   * TopicsCountOutputType without action
   */
  export type TopicsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TopicsCountOutputType
     */
    select?: TopicsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TopicsCountOutputType without action
   */
  export type TopicsCountOutputTypeCountArticlesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArticleToTopicsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersMinAggregateOutputType = {
    id: string | null
    fullName: string | null
    registeredAt: Date | null
    deletedAt: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    id: string | null
    fullName: string | null
    registeredAt: Date | null
    deletedAt: Date | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    fullName: number
    registeredAt: number
    deletedAt: number
    _all: number
  }


  export type UsersMinAggregateInputType = {
    id?: true
    fullName?: true
    registeredAt?: true
    deletedAt?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    fullName?: true
    registeredAt?: true
    deletedAt?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    fullName?: true
    registeredAt?: true
    deletedAt?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to aggregate.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsersWhereUniqueInput
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
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type UsersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersWhereInput
    orderBy?: UsersOrderByWithAggregationInput | UsersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: UsersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: string
    fullName: string
    registeredAt: Date
    deletedAt: Date | null
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends UsersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type UsersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    registeredAt?: boolean
    deletedAt?: boolean
    reaction?: boolean | Users$reactionArgs<ExtArgs>
    stars?: boolean | Users$starsArgs<ExtArgs>
    pageviews?: boolean | Users$pageviewsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type UsersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    registeredAt?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["users"]>

  export type UsersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    registeredAt?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["users"]>

  export type UsersSelectScalar = {
    id?: boolean
    fullName?: boolean
    registeredAt?: boolean
    deletedAt?: boolean
  }

  export type UsersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fullName" | "registeredAt" | "deletedAt", ExtArgs["result"]["users"]>
  export type UsersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reaction?: boolean | Users$reactionArgs<ExtArgs>
    stars?: boolean | Users$starsArgs<ExtArgs>
    pageviews?: boolean | Users$pageviewsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UsersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UsersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Users"
    objects: {
      reaction: Prisma.$ReactionsPayload<ExtArgs>[]
      stars: Prisma.$StarsPayload<ExtArgs>[]
      pageviews: Prisma.$PageviewsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      fullName: string
      registeredAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type UsersGetPayload<S extends boolean | null | undefined | UsersDefaultArgs> = $Result.GetResult<Prisma.$UsersPayload, S>

  type UsersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface UsersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Users'], meta: { name: 'Users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {UsersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsersFindUniqueArgs>(args: SelectSubset<T, UsersFindUniqueArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsersFindUniqueOrThrowArgs>(args: SelectSubset<T, UsersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsersFindFirstArgs>(args?: SelectSubset<T, UsersFindFirstArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsersFindFirstOrThrowArgs>(args?: SelectSubset<T, UsersFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsersFindManyArgs>(args?: SelectSubset<T, UsersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {UsersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends UsersCreateArgs>(args: SelectSubset<T, UsersCreateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UsersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsersCreateManyArgs>(args?: SelectSubset<T, UsersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UsersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsersCreateManyAndReturnArgs>(args?: SelectSubset<T, UsersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {UsersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends UsersDeleteArgs>(args: SelectSubset<T, UsersDeleteArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {UsersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsersUpdateArgs>(args: SelectSubset<T, UsersUpdateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UsersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsersDeleteManyArgs>(args?: SelectSubset<T, UsersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsersUpdateManyArgs>(args: SelectSubset<T, UsersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UsersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.updateManyAndReturn({
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
    updateManyAndReturn<T extends UsersUpdateManyAndReturnArgs>(args: SelectSubset<T, UsersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {UsersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends UsersUpsertArgs>(args: SelectSubset<T, UsersUpsertArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UsersCountArgs>(
      args?: Subset<T, UsersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersGroupByArgs} args - Group by arguments.
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
      T extends UsersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsersGroupByArgs['orderBy'] }
        : { orderBy?: UsersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UsersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Users model
   */
  readonly fields: UsersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    reaction<T extends Users$reactionArgs<ExtArgs> = {}>(args?: Subset<T, Users$reactionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReactionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    stars<T extends Users$starsArgs<ExtArgs> = {}>(args?: Subset<T, Users$starsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StarsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    pageviews<T extends Users$pageviewsArgs<ExtArgs> = {}>(args?: Subset<T, Users$pageviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PageviewsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Users model
   */
  interface UsersFieldRefs {
    readonly id: FieldRef<"Users", 'String'>
    readonly fullName: FieldRef<"Users", 'String'>
    readonly registeredAt: FieldRef<"Users", 'DateTime'>
    readonly deletedAt: FieldRef<"Users", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Users findUnique
   */
  export type UsersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findUniqueOrThrow
   */
  export type UsersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findFirst
   */
  export type UsersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
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
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findFirstOrThrow
   */
  export type UsersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
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
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findMany
   */
  export type UsersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UsersWhereUniqueInput
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
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users create
   */
  export type UsersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to create a Users.
     */
    data: XOR<UsersCreateInput, UsersUncheckedCreateInput>
  }

  /**
   * Users createMany
   */
  export type UsersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Users createManyAndReturn
   */
  export type UsersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Users update
   */
  export type UsersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to update a Users.
     */
    data: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
    /**
     * Choose, which Users to update.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users updateMany
   */
  export type UsersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * Users updateManyAndReturn
   */
  export type UsersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * Users upsert
   */
  export type UsersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The filter to search for the Users to update in case it exists.
     */
    where: UsersWhereUniqueInput
    /**
     * In case the Users found by the `where` argument doesn't exist, create a new Users with this data.
     */
    create: XOR<UsersCreateInput, UsersUncheckedCreateInput>
    /**
     * In case the Users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
  }

  /**
   * Users delete
   */
  export type UsersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter which Users to delete.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users deleteMany
   */
  export type UsersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * Users.reaction
   */
  export type Users$reactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reactions
     */
    select?: ReactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reactions
     */
    omit?: ReactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReactionsInclude<ExtArgs> | null
    where?: ReactionsWhereInput
    orderBy?: ReactionsOrderByWithRelationInput | ReactionsOrderByWithRelationInput[]
    cursor?: ReactionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReactionsScalarFieldEnum | ReactionsScalarFieldEnum[]
  }

  /**
   * Users.stars
   */
  export type Users$starsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stars
     */
    select?: StarsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stars
     */
    omit?: StarsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StarsInclude<ExtArgs> | null
    where?: StarsWhereInput
    orderBy?: StarsOrderByWithRelationInput | StarsOrderByWithRelationInput[]
    cursor?: StarsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StarsScalarFieldEnum | StarsScalarFieldEnum[]
  }

  /**
   * Users.pageviews
   */
  export type Users$pageviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pageviews
     */
    select?: PageviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pageviews
     */
    omit?: PageviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageviewsInclude<ExtArgs> | null
    where?: PageviewsWhereInput
    orderBy?: PageviewsOrderByWithRelationInput | PageviewsOrderByWithRelationInput[]
    cursor?: PageviewsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PageviewsScalarFieldEnum | PageviewsScalarFieldEnum[]
  }

  /**
   * Users without action
   */
  export type UsersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
  }


  /**
   * Model Authors
   */

  export type AggregateAuthors = {
    _count: AuthorsCountAggregateOutputType | null
    _min: AuthorsMinAggregateOutputType | null
    _max: AuthorsMaxAggregateOutputType | null
  }

  export type AuthorsMinAggregateOutputType = {
    id: string | null
    authorId: string | null
    password: string | null
    fullName: string | null
    registeredAt: Date | null
    deletedAt: Date | null
  }

  export type AuthorsMaxAggregateOutputType = {
    id: string | null
    authorId: string | null
    password: string | null
    fullName: string | null
    registeredAt: Date | null
    deletedAt: Date | null
  }

  export type AuthorsCountAggregateOutputType = {
    id: number
    authorId: number
    password: number
    fullName: number
    registeredAt: number
    deletedAt: number
    _all: number
  }


  export type AuthorsMinAggregateInputType = {
    id?: true
    authorId?: true
    password?: true
    fullName?: true
    registeredAt?: true
    deletedAt?: true
  }

  export type AuthorsMaxAggregateInputType = {
    id?: true
    authorId?: true
    password?: true
    fullName?: true
    registeredAt?: true
    deletedAt?: true
  }

  export type AuthorsCountAggregateInputType = {
    id?: true
    authorId?: true
    password?: true
    fullName?: true
    registeredAt?: true
    deletedAt?: true
    _all?: true
  }

  export type AuthorsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Authors to aggregate.
     */
    where?: AuthorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Authors to fetch.
     */
    orderBy?: AuthorsOrderByWithRelationInput | AuthorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuthorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Authors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Authors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Authors
    **/
    _count?: true | AuthorsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuthorsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuthorsMaxAggregateInputType
  }

  export type GetAuthorsAggregateType<T extends AuthorsAggregateArgs> = {
        [P in keyof T & keyof AggregateAuthors]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuthors[P]>
      : GetScalarType<T[P], AggregateAuthors[P]>
  }




  export type AuthorsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuthorsWhereInput
    orderBy?: AuthorsOrderByWithAggregationInput | AuthorsOrderByWithAggregationInput[]
    by: AuthorsScalarFieldEnum[] | AuthorsScalarFieldEnum
    having?: AuthorsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuthorsCountAggregateInputType | true
    _min?: AuthorsMinAggregateInputType
    _max?: AuthorsMaxAggregateInputType
  }

  export type AuthorsGroupByOutputType = {
    id: string
    authorId: string
    password: string
    fullName: string
    registeredAt: Date
    deletedAt: Date | null
    _count: AuthorsCountAggregateOutputType | null
    _min: AuthorsMinAggregateOutputType | null
    _max: AuthorsMaxAggregateOutputType | null
  }

  type GetAuthorsGroupByPayload<T extends AuthorsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuthorsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuthorsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuthorsGroupByOutputType[P]>
            : GetScalarType<T[P], AuthorsGroupByOutputType[P]>
        }
      >
    >


  export type AuthorsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    authorId?: boolean
    password?: boolean
    fullName?: boolean
    registeredAt?: boolean
    deletedAt?: boolean
    articles?: boolean | Authors$articlesArgs<ExtArgs>
    sessions?: boolean | Authors$sessionsArgs<ExtArgs>
    _count?: boolean | AuthorsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["authors"]>

  export type AuthorsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    authorId?: boolean
    password?: boolean
    fullName?: boolean
    registeredAt?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["authors"]>

  export type AuthorsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    authorId?: boolean
    password?: boolean
    fullName?: boolean
    registeredAt?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["authors"]>

  export type AuthorsSelectScalar = {
    id?: boolean
    authorId?: boolean
    password?: boolean
    fullName?: boolean
    registeredAt?: boolean
    deletedAt?: boolean
  }

  export type AuthorsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "authorId" | "password" | "fullName" | "registeredAt" | "deletedAt", ExtArgs["result"]["authors"]>
  export type AuthorsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    articles?: boolean | Authors$articlesArgs<ExtArgs>
    sessions?: boolean | Authors$sessionsArgs<ExtArgs>
    _count?: boolean | AuthorsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AuthorsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AuthorsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AuthorsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Authors"
    objects: {
      articles: Prisma.$ArticlesPayload<ExtArgs>[]
      sessions: Prisma.$SessionsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      authorId: string
      password: string
      fullName: string
      registeredAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["authors"]>
    composites: {}
  }

  type AuthorsGetPayload<S extends boolean | null | undefined | AuthorsDefaultArgs> = $Result.GetResult<Prisma.$AuthorsPayload, S>

  type AuthorsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AuthorsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AuthorsCountAggregateInputType | true
    }

  export interface AuthorsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Authors'], meta: { name: 'Authors' } }
    /**
     * Find zero or one Authors that matches the filter.
     * @param {AuthorsFindUniqueArgs} args - Arguments to find a Authors
     * @example
     * // Get one Authors
     * const authors = await prisma.authors.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuthorsFindUniqueArgs>(args: SelectSubset<T, AuthorsFindUniqueArgs<ExtArgs>>): Prisma__AuthorsClient<$Result.GetResult<Prisma.$AuthorsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Authors that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AuthorsFindUniqueOrThrowArgs} args - Arguments to find a Authors
     * @example
     * // Get one Authors
     * const authors = await prisma.authors.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuthorsFindUniqueOrThrowArgs>(args: SelectSubset<T, AuthorsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AuthorsClient<$Result.GetResult<Prisma.$AuthorsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Authors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorsFindFirstArgs} args - Arguments to find a Authors
     * @example
     * // Get one Authors
     * const authors = await prisma.authors.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuthorsFindFirstArgs>(args?: SelectSubset<T, AuthorsFindFirstArgs<ExtArgs>>): Prisma__AuthorsClient<$Result.GetResult<Prisma.$AuthorsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Authors that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorsFindFirstOrThrowArgs} args - Arguments to find a Authors
     * @example
     * // Get one Authors
     * const authors = await prisma.authors.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuthorsFindFirstOrThrowArgs>(args?: SelectSubset<T, AuthorsFindFirstOrThrowArgs<ExtArgs>>): Prisma__AuthorsClient<$Result.GetResult<Prisma.$AuthorsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Authors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Authors
     * const authors = await prisma.authors.findMany()
     * 
     * // Get first 10 Authors
     * const authors = await prisma.authors.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const authorsWithIdOnly = await prisma.authors.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AuthorsFindManyArgs>(args?: SelectSubset<T, AuthorsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthorsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Authors.
     * @param {AuthorsCreateArgs} args - Arguments to create a Authors.
     * @example
     * // Create one Authors
     * const Authors = await prisma.authors.create({
     *   data: {
     *     // ... data to create a Authors
     *   }
     * })
     * 
     */
    create<T extends AuthorsCreateArgs>(args: SelectSubset<T, AuthorsCreateArgs<ExtArgs>>): Prisma__AuthorsClient<$Result.GetResult<Prisma.$AuthorsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Authors.
     * @param {AuthorsCreateManyArgs} args - Arguments to create many Authors.
     * @example
     * // Create many Authors
     * const authors = await prisma.authors.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AuthorsCreateManyArgs>(args?: SelectSubset<T, AuthorsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Authors and returns the data saved in the database.
     * @param {AuthorsCreateManyAndReturnArgs} args - Arguments to create many Authors.
     * @example
     * // Create many Authors
     * const authors = await prisma.authors.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Authors and only return the `id`
     * const authorsWithIdOnly = await prisma.authors.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AuthorsCreateManyAndReturnArgs>(args?: SelectSubset<T, AuthorsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthorsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Authors.
     * @param {AuthorsDeleteArgs} args - Arguments to delete one Authors.
     * @example
     * // Delete one Authors
     * const Authors = await prisma.authors.delete({
     *   where: {
     *     // ... filter to delete one Authors
     *   }
     * })
     * 
     */
    delete<T extends AuthorsDeleteArgs>(args: SelectSubset<T, AuthorsDeleteArgs<ExtArgs>>): Prisma__AuthorsClient<$Result.GetResult<Prisma.$AuthorsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Authors.
     * @param {AuthorsUpdateArgs} args - Arguments to update one Authors.
     * @example
     * // Update one Authors
     * const authors = await prisma.authors.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AuthorsUpdateArgs>(args: SelectSubset<T, AuthorsUpdateArgs<ExtArgs>>): Prisma__AuthorsClient<$Result.GetResult<Prisma.$AuthorsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Authors.
     * @param {AuthorsDeleteManyArgs} args - Arguments to filter Authors to delete.
     * @example
     * // Delete a few Authors
     * const { count } = await prisma.authors.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AuthorsDeleteManyArgs>(args?: SelectSubset<T, AuthorsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Authors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Authors
     * const authors = await prisma.authors.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AuthorsUpdateManyArgs>(args: SelectSubset<T, AuthorsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Authors and returns the data updated in the database.
     * @param {AuthorsUpdateManyAndReturnArgs} args - Arguments to update many Authors.
     * @example
     * // Update many Authors
     * const authors = await prisma.authors.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Authors and only return the `id`
     * const authorsWithIdOnly = await prisma.authors.updateManyAndReturn({
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
    updateManyAndReturn<T extends AuthorsUpdateManyAndReturnArgs>(args: SelectSubset<T, AuthorsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthorsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Authors.
     * @param {AuthorsUpsertArgs} args - Arguments to update or create a Authors.
     * @example
     * // Update or create a Authors
     * const authors = await prisma.authors.upsert({
     *   create: {
     *     // ... data to create a Authors
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Authors we want to update
     *   }
     * })
     */
    upsert<T extends AuthorsUpsertArgs>(args: SelectSubset<T, AuthorsUpsertArgs<ExtArgs>>): Prisma__AuthorsClient<$Result.GetResult<Prisma.$AuthorsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Authors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorsCountArgs} args - Arguments to filter Authors to count.
     * @example
     * // Count the number of Authors
     * const count = await prisma.authors.count({
     *   where: {
     *     // ... the filter for the Authors we want to count
     *   }
     * })
    **/
    count<T extends AuthorsCountArgs>(
      args?: Subset<T, AuthorsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuthorsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Authors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AuthorsAggregateArgs>(args: Subset<T, AuthorsAggregateArgs>): Prisma.PrismaPromise<GetAuthorsAggregateType<T>>

    /**
     * Group by Authors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorsGroupByArgs} args - Group by arguments.
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
      T extends AuthorsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuthorsGroupByArgs['orderBy'] }
        : { orderBy?: AuthorsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AuthorsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuthorsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Authors model
   */
  readonly fields: AuthorsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Authors.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuthorsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    articles<T extends Authors$articlesArgs<ExtArgs> = {}>(args?: Subset<T, Authors$articlesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticlesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sessions<T extends Authors$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, Authors$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Authors model
   */
  interface AuthorsFieldRefs {
    readonly id: FieldRef<"Authors", 'String'>
    readonly authorId: FieldRef<"Authors", 'String'>
    readonly password: FieldRef<"Authors", 'String'>
    readonly fullName: FieldRef<"Authors", 'String'>
    readonly registeredAt: FieldRef<"Authors", 'DateTime'>
    readonly deletedAt: FieldRef<"Authors", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Authors findUnique
   */
  export type AuthorsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Authors
     */
    select?: AuthorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Authors
     */
    omit?: AuthorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorsInclude<ExtArgs> | null
    /**
     * Filter, which Authors to fetch.
     */
    where: AuthorsWhereUniqueInput
  }

  /**
   * Authors findUniqueOrThrow
   */
  export type AuthorsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Authors
     */
    select?: AuthorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Authors
     */
    omit?: AuthorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorsInclude<ExtArgs> | null
    /**
     * Filter, which Authors to fetch.
     */
    where: AuthorsWhereUniqueInput
  }

  /**
   * Authors findFirst
   */
  export type AuthorsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Authors
     */
    select?: AuthorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Authors
     */
    omit?: AuthorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorsInclude<ExtArgs> | null
    /**
     * Filter, which Authors to fetch.
     */
    where?: AuthorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Authors to fetch.
     */
    orderBy?: AuthorsOrderByWithRelationInput | AuthorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Authors.
     */
    cursor?: AuthorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Authors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Authors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Authors.
     */
    distinct?: AuthorsScalarFieldEnum | AuthorsScalarFieldEnum[]
  }

  /**
   * Authors findFirstOrThrow
   */
  export type AuthorsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Authors
     */
    select?: AuthorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Authors
     */
    omit?: AuthorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorsInclude<ExtArgs> | null
    /**
     * Filter, which Authors to fetch.
     */
    where?: AuthorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Authors to fetch.
     */
    orderBy?: AuthorsOrderByWithRelationInput | AuthorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Authors.
     */
    cursor?: AuthorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Authors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Authors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Authors.
     */
    distinct?: AuthorsScalarFieldEnum | AuthorsScalarFieldEnum[]
  }

  /**
   * Authors findMany
   */
  export type AuthorsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Authors
     */
    select?: AuthorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Authors
     */
    omit?: AuthorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorsInclude<ExtArgs> | null
    /**
     * Filter, which Authors to fetch.
     */
    where?: AuthorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Authors to fetch.
     */
    orderBy?: AuthorsOrderByWithRelationInput | AuthorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Authors.
     */
    cursor?: AuthorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Authors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Authors.
     */
    skip?: number
    distinct?: AuthorsScalarFieldEnum | AuthorsScalarFieldEnum[]
  }

  /**
   * Authors create
   */
  export type AuthorsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Authors
     */
    select?: AuthorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Authors
     */
    omit?: AuthorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorsInclude<ExtArgs> | null
    /**
     * The data needed to create a Authors.
     */
    data: XOR<AuthorsCreateInput, AuthorsUncheckedCreateInput>
  }

  /**
   * Authors createMany
   */
  export type AuthorsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Authors.
     */
    data: AuthorsCreateManyInput | AuthorsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Authors createManyAndReturn
   */
  export type AuthorsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Authors
     */
    select?: AuthorsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Authors
     */
    omit?: AuthorsOmit<ExtArgs> | null
    /**
     * The data used to create many Authors.
     */
    data: AuthorsCreateManyInput | AuthorsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Authors update
   */
  export type AuthorsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Authors
     */
    select?: AuthorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Authors
     */
    omit?: AuthorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorsInclude<ExtArgs> | null
    /**
     * The data needed to update a Authors.
     */
    data: XOR<AuthorsUpdateInput, AuthorsUncheckedUpdateInput>
    /**
     * Choose, which Authors to update.
     */
    where: AuthorsWhereUniqueInput
  }

  /**
   * Authors updateMany
   */
  export type AuthorsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Authors.
     */
    data: XOR<AuthorsUpdateManyMutationInput, AuthorsUncheckedUpdateManyInput>
    /**
     * Filter which Authors to update
     */
    where?: AuthorsWhereInput
    /**
     * Limit how many Authors to update.
     */
    limit?: number
  }

  /**
   * Authors updateManyAndReturn
   */
  export type AuthorsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Authors
     */
    select?: AuthorsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Authors
     */
    omit?: AuthorsOmit<ExtArgs> | null
    /**
     * The data used to update Authors.
     */
    data: XOR<AuthorsUpdateManyMutationInput, AuthorsUncheckedUpdateManyInput>
    /**
     * Filter which Authors to update
     */
    where?: AuthorsWhereInput
    /**
     * Limit how many Authors to update.
     */
    limit?: number
  }

  /**
   * Authors upsert
   */
  export type AuthorsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Authors
     */
    select?: AuthorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Authors
     */
    omit?: AuthorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorsInclude<ExtArgs> | null
    /**
     * The filter to search for the Authors to update in case it exists.
     */
    where: AuthorsWhereUniqueInput
    /**
     * In case the Authors found by the `where` argument doesn't exist, create a new Authors with this data.
     */
    create: XOR<AuthorsCreateInput, AuthorsUncheckedCreateInput>
    /**
     * In case the Authors was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuthorsUpdateInput, AuthorsUncheckedUpdateInput>
  }

  /**
   * Authors delete
   */
  export type AuthorsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Authors
     */
    select?: AuthorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Authors
     */
    omit?: AuthorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorsInclude<ExtArgs> | null
    /**
     * Filter which Authors to delete.
     */
    where: AuthorsWhereUniqueInput
  }

  /**
   * Authors deleteMany
   */
  export type AuthorsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Authors to delete
     */
    where?: AuthorsWhereInput
    /**
     * Limit how many Authors to delete.
     */
    limit?: number
  }

  /**
   * Authors.articles
   */
  export type Authors$articlesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Articles
     */
    select?: ArticlesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Articles
     */
    omit?: ArticlesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticlesInclude<ExtArgs> | null
    where?: ArticlesWhereInput
    orderBy?: ArticlesOrderByWithRelationInput | ArticlesOrderByWithRelationInput[]
    cursor?: ArticlesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ArticlesScalarFieldEnum | ArticlesScalarFieldEnum[]
  }

  /**
   * Authors.sessions
   */
  export type Authors$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sessions
     */
    select?: SessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sessions
     */
    omit?: SessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionsInclude<ExtArgs> | null
    where?: SessionsWhereInput
    orderBy?: SessionsOrderByWithRelationInput | SessionsOrderByWithRelationInput[]
    cursor?: SessionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionsScalarFieldEnum | SessionsScalarFieldEnum[]
  }

  /**
   * Authors without action
   */
  export type AuthorsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Authors
     */
    select?: AuthorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Authors
     */
    omit?: AuthorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorsInclude<ExtArgs> | null
  }


  /**
   * Model Sessions
   */

  export type AggregateSessions = {
    _count: SessionsCountAggregateOutputType | null
    _min: SessionsMinAggregateOutputType | null
    _max: SessionsMaxAggregateOutputType | null
  }

  export type SessionsMinAggregateOutputType = {
    id: string | null
    authorId: string | null
    password: string | null
    loggedInAt: Date | null
    loggedOutAdt: Date | null
  }

  export type SessionsMaxAggregateOutputType = {
    id: string | null
    authorId: string | null
    password: string | null
    loggedInAt: Date | null
    loggedOutAdt: Date | null
  }

  export type SessionsCountAggregateOutputType = {
    id: number
    authorId: number
    password: number
    loggedInAt: number
    loggedOutAdt: number
    _all: number
  }


  export type SessionsMinAggregateInputType = {
    id?: true
    authorId?: true
    password?: true
    loggedInAt?: true
    loggedOutAdt?: true
  }

  export type SessionsMaxAggregateInputType = {
    id?: true
    authorId?: true
    password?: true
    loggedInAt?: true
    loggedOutAdt?: true
  }

  export type SessionsCountAggregateInputType = {
    id?: true
    authorId?: true
    password?: true
    loggedInAt?: true
    loggedOutAdt?: true
    _all?: true
  }

  export type SessionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to aggregate.
     */
    where?: SessionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionsOrderByWithRelationInput | SessionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionsWhereUniqueInput
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
    _count?: true | SessionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionsMaxAggregateInputType
  }

  export type GetSessionsAggregateType<T extends SessionsAggregateArgs> = {
        [P in keyof T & keyof AggregateSessions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSessions[P]>
      : GetScalarType<T[P], AggregateSessions[P]>
  }




  export type SessionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionsWhereInput
    orderBy?: SessionsOrderByWithAggregationInput | SessionsOrderByWithAggregationInput[]
    by: SessionsScalarFieldEnum[] | SessionsScalarFieldEnum
    having?: SessionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionsCountAggregateInputType | true
    _min?: SessionsMinAggregateInputType
    _max?: SessionsMaxAggregateInputType
  }

  export type SessionsGroupByOutputType = {
    id: string
    authorId: string
    password: string
    loggedInAt: Date
    loggedOutAdt: Date | null
    _count: SessionsCountAggregateOutputType | null
    _min: SessionsMinAggregateOutputType | null
    _max: SessionsMaxAggregateOutputType | null
  }

  type GetSessionsGroupByPayload<T extends SessionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionsGroupByOutputType[P]>
            : GetScalarType<T[P], SessionsGroupByOutputType[P]>
        }
      >
    >


  export type SessionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    authorId?: boolean
    password?: boolean
    loggedInAt?: boolean
    loggedOutAdt?: boolean
    author?: boolean | AuthorsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sessions"]>

  export type SessionsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    authorId?: boolean
    password?: boolean
    loggedInAt?: boolean
    loggedOutAdt?: boolean
    author?: boolean | AuthorsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sessions"]>

  export type SessionsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    authorId?: boolean
    password?: boolean
    loggedInAt?: boolean
    loggedOutAdt?: boolean
    author?: boolean | AuthorsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sessions"]>

  export type SessionsSelectScalar = {
    id?: boolean
    authorId?: boolean
    password?: boolean
    loggedInAt?: boolean
    loggedOutAdt?: boolean
  }

  export type SessionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "authorId" | "password" | "loggedInAt" | "loggedOutAdt", ExtArgs["result"]["sessions"]>
  export type SessionsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | AuthorsDefaultArgs<ExtArgs>
  }
  export type SessionsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | AuthorsDefaultArgs<ExtArgs>
  }
  export type SessionsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | AuthorsDefaultArgs<ExtArgs>
  }

  export type $SessionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Sessions"
    objects: {
      author: Prisma.$AuthorsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      authorId: string
      password: string
      loggedInAt: Date
      loggedOutAdt: Date | null
    }, ExtArgs["result"]["sessions"]>
    composites: {}
  }

  type SessionsGetPayload<S extends boolean | null | undefined | SessionsDefaultArgs> = $Result.GetResult<Prisma.$SessionsPayload, S>

  type SessionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionsCountAggregateInputType | true
    }

  export interface SessionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Sessions'], meta: { name: 'Sessions' } }
    /**
     * Find zero or one Sessions that matches the filter.
     * @param {SessionsFindUniqueArgs} args - Arguments to find a Sessions
     * @example
     * // Get one Sessions
     * const sessions = await prisma.sessions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionsFindUniqueArgs>(args: SelectSubset<T, SessionsFindUniqueArgs<ExtArgs>>): Prisma__SessionsClient<$Result.GetResult<Prisma.$SessionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sessions that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionsFindUniqueOrThrowArgs} args - Arguments to find a Sessions
     * @example
     * // Get one Sessions
     * const sessions = await prisma.sessions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionsFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionsClient<$Result.GetResult<Prisma.$SessionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionsFindFirstArgs} args - Arguments to find a Sessions
     * @example
     * // Get one Sessions
     * const sessions = await prisma.sessions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionsFindFirstArgs>(args?: SelectSubset<T, SessionsFindFirstArgs<ExtArgs>>): Prisma__SessionsClient<$Result.GetResult<Prisma.$SessionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sessions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionsFindFirstOrThrowArgs} args - Arguments to find a Sessions
     * @example
     * // Get one Sessions
     * const sessions = await prisma.sessions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionsFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionsClient<$Result.GetResult<Prisma.$SessionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.sessions.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.sessions.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionsWithIdOnly = await prisma.sessions.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionsFindManyArgs>(args?: SelectSubset<T, SessionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sessions.
     * @param {SessionsCreateArgs} args - Arguments to create a Sessions.
     * @example
     * // Create one Sessions
     * const Sessions = await prisma.sessions.create({
     *   data: {
     *     // ... data to create a Sessions
     *   }
     * })
     * 
     */
    create<T extends SessionsCreateArgs>(args: SelectSubset<T, SessionsCreateArgs<ExtArgs>>): Prisma__SessionsClient<$Result.GetResult<Prisma.$SessionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionsCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const sessions = await prisma.sessions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionsCreateManyArgs>(args?: SelectSubset<T, SessionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionsCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const sessions = await prisma.sessions.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionsWithIdOnly = await prisma.sessions.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionsCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Sessions.
     * @param {SessionsDeleteArgs} args - Arguments to delete one Sessions.
     * @example
     * // Delete one Sessions
     * const Sessions = await prisma.sessions.delete({
     *   where: {
     *     // ... filter to delete one Sessions
     *   }
     * })
     * 
     */
    delete<T extends SessionsDeleteArgs>(args: SelectSubset<T, SessionsDeleteArgs<ExtArgs>>): Prisma__SessionsClient<$Result.GetResult<Prisma.$SessionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sessions.
     * @param {SessionsUpdateArgs} args - Arguments to update one Sessions.
     * @example
     * // Update one Sessions
     * const sessions = await prisma.sessions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionsUpdateArgs>(args: SelectSubset<T, SessionsUpdateArgs<ExtArgs>>): Prisma__SessionsClient<$Result.GetResult<Prisma.$SessionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionsDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.sessions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionsDeleteManyArgs>(args?: SelectSubset<T, SessionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const sessions = await prisma.sessions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionsUpdateManyArgs>(args: SelectSubset<T, SessionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {SessionsUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const sessions = await prisma.sessions.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessions and only return the `id`
     * const sessionsWithIdOnly = await prisma.sessions.updateManyAndReturn({
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
    updateManyAndReturn<T extends SessionsUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Sessions.
     * @param {SessionsUpsertArgs} args - Arguments to update or create a Sessions.
     * @example
     * // Update or create a Sessions
     * const sessions = await prisma.sessions.upsert({
     *   create: {
     *     // ... data to create a Sessions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sessions we want to update
     *   }
     * })
     */
    upsert<T extends SessionsUpsertArgs>(args: SelectSubset<T, SessionsUpsertArgs<ExtArgs>>): Prisma__SessionsClient<$Result.GetResult<Prisma.$SessionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionsCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.sessions.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionsCountArgs>(
      args?: Subset<T, SessionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SessionsAggregateArgs>(args: Subset<T, SessionsAggregateArgs>): Prisma.PrismaPromise<GetSessionsAggregateType<T>>

    /**
     * Group by Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionsGroupByArgs} args - Group by arguments.
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
      T extends SessionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionsGroupByArgs['orderBy'] }
        : { orderBy?: SessionsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SessionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Sessions model
   */
  readonly fields: SessionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Sessions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    author<T extends AuthorsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AuthorsDefaultArgs<ExtArgs>>): Prisma__AuthorsClient<$Result.GetResult<Prisma.$AuthorsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Sessions model
   */
  interface SessionsFieldRefs {
    readonly id: FieldRef<"Sessions", 'String'>
    readonly authorId: FieldRef<"Sessions", 'String'>
    readonly password: FieldRef<"Sessions", 'String'>
    readonly loggedInAt: FieldRef<"Sessions", 'DateTime'>
    readonly loggedOutAdt: FieldRef<"Sessions", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Sessions findUnique
   */
  export type SessionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sessions
     */
    select?: SessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sessions
     */
    omit?: SessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionsInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where: SessionsWhereUniqueInput
  }

  /**
   * Sessions findUniqueOrThrow
   */
  export type SessionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sessions
     */
    select?: SessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sessions
     */
    omit?: SessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionsInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where: SessionsWhereUniqueInput
  }

  /**
   * Sessions findFirst
   */
  export type SessionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sessions
     */
    select?: SessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sessions
     */
    omit?: SessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionsInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionsOrderByWithRelationInput | SessionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionsWhereUniqueInput
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
    distinct?: SessionsScalarFieldEnum | SessionsScalarFieldEnum[]
  }

  /**
   * Sessions findFirstOrThrow
   */
  export type SessionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sessions
     */
    select?: SessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sessions
     */
    omit?: SessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionsInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionsOrderByWithRelationInput | SessionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionsWhereUniqueInput
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
    distinct?: SessionsScalarFieldEnum | SessionsScalarFieldEnum[]
  }

  /**
   * Sessions findMany
   */
  export type SessionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sessions
     */
    select?: SessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sessions
     */
    omit?: SessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionsInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionsOrderByWithRelationInput | SessionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionsWhereUniqueInput
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
    distinct?: SessionsScalarFieldEnum | SessionsScalarFieldEnum[]
  }

  /**
   * Sessions create
   */
  export type SessionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sessions
     */
    select?: SessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sessions
     */
    omit?: SessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionsInclude<ExtArgs> | null
    /**
     * The data needed to create a Sessions.
     */
    data: XOR<SessionsCreateInput, SessionsUncheckedCreateInput>
  }

  /**
   * Sessions createMany
   */
  export type SessionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionsCreateManyInput | SessionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Sessions createManyAndReturn
   */
  export type SessionsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sessions
     */
    select?: SessionsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sessions
     */
    omit?: SessionsOmit<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionsCreateManyInput | SessionsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Sessions update
   */
  export type SessionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sessions
     */
    select?: SessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sessions
     */
    omit?: SessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionsInclude<ExtArgs> | null
    /**
     * The data needed to update a Sessions.
     */
    data: XOR<SessionsUpdateInput, SessionsUncheckedUpdateInput>
    /**
     * Choose, which Sessions to update.
     */
    where: SessionsWhereUniqueInput
  }

  /**
   * Sessions updateMany
   */
  export type SessionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionsUpdateManyMutationInput, SessionsUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionsWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Sessions updateManyAndReturn
   */
  export type SessionsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sessions
     */
    select?: SessionsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sessions
     */
    omit?: SessionsOmit<ExtArgs> | null
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionsUpdateManyMutationInput, SessionsUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionsWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Sessions upsert
   */
  export type SessionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sessions
     */
    select?: SessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sessions
     */
    omit?: SessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionsInclude<ExtArgs> | null
    /**
     * The filter to search for the Sessions to update in case it exists.
     */
    where: SessionsWhereUniqueInput
    /**
     * In case the Sessions found by the `where` argument doesn't exist, create a new Sessions with this data.
     */
    create: XOR<SessionsCreateInput, SessionsUncheckedCreateInput>
    /**
     * In case the Sessions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionsUpdateInput, SessionsUncheckedUpdateInput>
  }

  /**
   * Sessions delete
   */
  export type SessionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sessions
     */
    select?: SessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sessions
     */
    omit?: SessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionsInclude<ExtArgs> | null
    /**
     * Filter which Sessions to delete.
     */
    where: SessionsWhereUniqueInput
  }

  /**
   * Sessions deleteMany
   */
  export type SessionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionsWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Sessions without action
   */
  export type SessionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sessions
     */
    select?: SessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sessions
     */
    omit?: SessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionsInclude<ExtArgs> | null
  }


  /**
   * Model Articles
   */

  export type AggregateArticles = {
    _count: ArticlesCountAggregateOutputType | null
    _min: ArticlesMinAggregateOutputType | null
    _max: ArticlesMaxAggregateOutputType | null
  }

  export type ArticlesMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    articleMarkdown: string | null
    imageUrl: string | null
    authorId: string | null
    createdAt: Date | null
    deletedAt: Date | null
  }

  export type ArticlesMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    articleMarkdown: string | null
    imageUrl: string | null
    authorId: string | null
    createdAt: Date | null
    deletedAt: Date | null
  }

  export type ArticlesCountAggregateOutputType = {
    id: number
    title: number
    description: number
    articleMarkdown: number
    imageUrl: number
    authorId: number
    createdAt: number
    deletedAt: number
    _all: number
  }


  export type ArticlesMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    articleMarkdown?: true
    imageUrl?: true
    authorId?: true
    createdAt?: true
    deletedAt?: true
  }

  export type ArticlesMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    articleMarkdown?: true
    imageUrl?: true
    authorId?: true
    createdAt?: true
    deletedAt?: true
  }

  export type ArticlesCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    articleMarkdown?: true
    imageUrl?: true
    authorId?: true
    createdAt?: true
    deletedAt?: true
    _all?: true
  }

  export type ArticlesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Articles to aggregate.
     */
    where?: ArticlesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Articles to fetch.
     */
    orderBy?: ArticlesOrderByWithRelationInput | ArticlesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ArticlesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Articles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Articles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Articles
    **/
    _count?: true | ArticlesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ArticlesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ArticlesMaxAggregateInputType
  }

  export type GetArticlesAggregateType<T extends ArticlesAggregateArgs> = {
        [P in keyof T & keyof AggregateArticles]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArticles[P]>
      : GetScalarType<T[P], AggregateArticles[P]>
  }




  export type ArticlesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArticlesWhereInput
    orderBy?: ArticlesOrderByWithAggregationInput | ArticlesOrderByWithAggregationInput[]
    by: ArticlesScalarFieldEnum[] | ArticlesScalarFieldEnum
    having?: ArticlesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ArticlesCountAggregateInputType | true
    _min?: ArticlesMinAggregateInputType
    _max?: ArticlesMaxAggregateInputType
  }

  export type ArticlesGroupByOutputType = {
    id: string
    title: string
    description: string
    articleMarkdown: string
    imageUrl: string | null
    authorId: string
    createdAt: Date
    deletedAt: Date | null
    _count: ArticlesCountAggregateOutputType | null
    _min: ArticlesMinAggregateOutputType | null
    _max: ArticlesMaxAggregateOutputType | null
  }

  type GetArticlesGroupByPayload<T extends ArticlesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ArticlesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ArticlesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ArticlesGroupByOutputType[P]>
            : GetScalarType<T[P], ArticlesGroupByOutputType[P]>
        }
      >
    >


  export type ArticlesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    articleMarkdown?: boolean
    imageUrl?: boolean
    authorId?: boolean
    createdAt?: boolean
    deletedAt?: boolean
    author?: boolean | AuthorsDefaultArgs<ExtArgs>
    stars?: boolean | Articles$starsArgs<ExtArgs>
    reactions?: boolean | Articles$reactionsArgs<ExtArgs>
    topics?: boolean | Articles$topicsArgs<ExtArgs>
    pageviews?: boolean | Articles$pageviewsArgs<ExtArgs>
    _count?: boolean | ArticlesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["articles"]>

  export type ArticlesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    articleMarkdown?: boolean
    imageUrl?: boolean
    authorId?: boolean
    createdAt?: boolean
    deletedAt?: boolean
    author?: boolean | AuthorsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["articles"]>

  export type ArticlesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    articleMarkdown?: boolean
    imageUrl?: boolean
    authorId?: boolean
    createdAt?: boolean
    deletedAt?: boolean
    author?: boolean | AuthorsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["articles"]>

  export type ArticlesSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    articleMarkdown?: boolean
    imageUrl?: boolean
    authorId?: boolean
    createdAt?: boolean
    deletedAt?: boolean
  }

  export type ArticlesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "articleMarkdown" | "imageUrl" | "authorId" | "createdAt" | "deletedAt", ExtArgs["result"]["articles"]>
  export type ArticlesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | AuthorsDefaultArgs<ExtArgs>
    stars?: boolean | Articles$starsArgs<ExtArgs>
    reactions?: boolean | Articles$reactionsArgs<ExtArgs>
    topics?: boolean | Articles$topicsArgs<ExtArgs>
    pageviews?: boolean | Articles$pageviewsArgs<ExtArgs>
    _count?: boolean | ArticlesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ArticlesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | AuthorsDefaultArgs<ExtArgs>
  }
  export type ArticlesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | AuthorsDefaultArgs<ExtArgs>
  }

  export type $ArticlesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Articles"
    objects: {
      author: Prisma.$AuthorsPayload<ExtArgs>
      stars: Prisma.$StarsPayload<ExtArgs>[]
      reactions: Prisma.$ReactionsPayload<ExtArgs>[]
      topics: Prisma.$ArticleToTopicsPayload<ExtArgs>[]
      pageviews: Prisma.$PageviewsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string
      articleMarkdown: string
      imageUrl: string | null
      authorId: string
      createdAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["articles"]>
    composites: {}
  }

  type ArticlesGetPayload<S extends boolean | null | undefined | ArticlesDefaultArgs> = $Result.GetResult<Prisma.$ArticlesPayload, S>

  type ArticlesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ArticlesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ArticlesCountAggregateInputType | true
    }

  export interface ArticlesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Articles'], meta: { name: 'Articles' } }
    /**
     * Find zero or one Articles that matches the filter.
     * @param {ArticlesFindUniqueArgs} args - Arguments to find a Articles
     * @example
     * // Get one Articles
     * const articles = await prisma.articles.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ArticlesFindUniqueArgs>(args: SelectSubset<T, ArticlesFindUniqueArgs<ExtArgs>>): Prisma__ArticlesClient<$Result.GetResult<Prisma.$ArticlesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Articles that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ArticlesFindUniqueOrThrowArgs} args - Arguments to find a Articles
     * @example
     * // Get one Articles
     * const articles = await prisma.articles.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ArticlesFindUniqueOrThrowArgs>(args: SelectSubset<T, ArticlesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ArticlesClient<$Result.GetResult<Prisma.$ArticlesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Articles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticlesFindFirstArgs} args - Arguments to find a Articles
     * @example
     * // Get one Articles
     * const articles = await prisma.articles.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ArticlesFindFirstArgs>(args?: SelectSubset<T, ArticlesFindFirstArgs<ExtArgs>>): Prisma__ArticlesClient<$Result.GetResult<Prisma.$ArticlesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Articles that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticlesFindFirstOrThrowArgs} args - Arguments to find a Articles
     * @example
     * // Get one Articles
     * const articles = await prisma.articles.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ArticlesFindFirstOrThrowArgs>(args?: SelectSubset<T, ArticlesFindFirstOrThrowArgs<ExtArgs>>): Prisma__ArticlesClient<$Result.GetResult<Prisma.$ArticlesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Articles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticlesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Articles
     * const articles = await prisma.articles.findMany()
     * 
     * // Get first 10 Articles
     * const articles = await prisma.articles.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const articlesWithIdOnly = await prisma.articles.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ArticlesFindManyArgs>(args?: SelectSubset<T, ArticlesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticlesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Articles.
     * @param {ArticlesCreateArgs} args - Arguments to create a Articles.
     * @example
     * // Create one Articles
     * const Articles = await prisma.articles.create({
     *   data: {
     *     // ... data to create a Articles
     *   }
     * })
     * 
     */
    create<T extends ArticlesCreateArgs>(args: SelectSubset<T, ArticlesCreateArgs<ExtArgs>>): Prisma__ArticlesClient<$Result.GetResult<Prisma.$ArticlesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Articles.
     * @param {ArticlesCreateManyArgs} args - Arguments to create many Articles.
     * @example
     * // Create many Articles
     * const articles = await prisma.articles.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ArticlesCreateManyArgs>(args?: SelectSubset<T, ArticlesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Articles and returns the data saved in the database.
     * @param {ArticlesCreateManyAndReturnArgs} args - Arguments to create many Articles.
     * @example
     * // Create many Articles
     * const articles = await prisma.articles.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Articles and only return the `id`
     * const articlesWithIdOnly = await prisma.articles.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ArticlesCreateManyAndReturnArgs>(args?: SelectSubset<T, ArticlesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticlesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Articles.
     * @param {ArticlesDeleteArgs} args - Arguments to delete one Articles.
     * @example
     * // Delete one Articles
     * const Articles = await prisma.articles.delete({
     *   where: {
     *     // ... filter to delete one Articles
     *   }
     * })
     * 
     */
    delete<T extends ArticlesDeleteArgs>(args: SelectSubset<T, ArticlesDeleteArgs<ExtArgs>>): Prisma__ArticlesClient<$Result.GetResult<Prisma.$ArticlesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Articles.
     * @param {ArticlesUpdateArgs} args - Arguments to update one Articles.
     * @example
     * // Update one Articles
     * const articles = await prisma.articles.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ArticlesUpdateArgs>(args: SelectSubset<T, ArticlesUpdateArgs<ExtArgs>>): Prisma__ArticlesClient<$Result.GetResult<Prisma.$ArticlesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Articles.
     * @param {ArticlesDeleteManyArgs} args - Arguments to filter Articles to delete.
     * @example
     * // Delete a few Articles
     * const { count } = await prisma.articles.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ArticlesDeleteManyArgs>(args?: SelectSubset<T, ArticlesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Articles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticlesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Articles
     * const articles = await prisma.articles.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ArticlesUpdateManyArgs>(args: SelectSubset<T, ArticlesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Articles and returns the data updated in the database.
     * @param {ArticlesUpdateManyAndReturnArgs} args - Arguments to update many Articles.
     * @example
     * // Update many Articles
     * const articles = await prisma.articles.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Articles and only return the `id`
     * const articlesWithIdOnly = await prisma.articles.updateManyAndReturn({
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
    updateManyAndReturn<T extends ArticlesUpdateManyAndReturnArgs>(args: SelectSubset<T, ArticlesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticlesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Articles.
     * @param {ArticlesUpsertArgs} args - Arguments to update or create a Articles.
     * @example
     * // Update or create a Articles
     * const articles = await prisma.articles.upsert({
     *   create: {
     *     // ... data to create a Articles
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Articles we want to update
     *   }
     * })
     */
    upsert<T extends ArticlesUpsertArgs>(args: SelectSubset<T, ArticlesUpsertArgs<ExtArgs>>): Prisma__ArticlesClient<$Result.GetResult<Prisma.$ArticlesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Articles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticlesCountArgs} args - Arguments to filter Articles to count.
     * @example
     * // Count the number of Articles
     * const count = await prisma.articles.count({
     *   where: {
     *     // ... the filter for the Articles we want to count
     *   }
     * })
    **/
    count<T extends ArticlesCountArgs>(
      args?: Subset<T, ArticlesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ArticlesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Articles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticlesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ArticlesAggregateArgs>(args: Subset<T, ArticlesAggregateArgs>): Prisma.PrismaPromise<GetArticlesAggregateType<T>>

    /**
     * Group by Articles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticlesGroupByArgs} args - Group by arguments.
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
      T extends ArticlesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ArticlesGroupByArgs['orderBy'] }
        : { orderBy?: ArticlesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ArticlesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetArticlesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Articles model
   */
  readonly fields: ArticlesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Articles.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ArticlesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    author<T extends AuthorsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AuthorsDefaultArgs<ExtArgs>>): Prisma__AuthorsClient<$Result.GetResult<Prisma.$AuthorsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    stars<T extends Articles$starsArgs<ExtArgs> = {}>(args?: Subset<T, Articles$starsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StarsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reactions<T extends Articles$reactionsArgs<ExtArgs> = {}>(args?: Subset<T, Articles$reactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReactionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    topics<T extends Articles$topicsArgs<ExtArgs> = {}>(args?: Subset<T, Articles$topicsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticleToTopicsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    pageviews<T extends Articles$pageviewsArgs<ExtArgs> = {}>(args?: Subset<T, Articles$pageviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PageviewsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Articles model
   */
  interface ArticlesFieldRefs {
    readonly id: FieldRef<"Articles", 'String'>
    readonly title: FieldRef<"Articles", 'String'>
    readonly description: FieldRef<"Articles", 'String'>
    readonly articleMarkdown: FieldRef<"Articles", 'String'>
    readonly imageUrl: FieldRef<"Articles", 'String'>
    readonly authorId: FieldRef<"Articles", 'String'>
    readonly createdAt: FieldRef<"Articles", 'DateTime'>
    readonly deletedAt: FieldRef<"Articles", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Articles findUnique
   */
  export type ArticlesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Articles
     */
    select?: ArticlesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Articles
     */
    omit?: ArticlesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticlesInclude<ExtArgs> | null
    /**
     * Filter, which Articles to fetch.
     */
    where: ArticlesWhereUniqueInput
  }

  /**
   * Articles findUniqueOrThrow
   */
  export type ArticlesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Articles
     */
    select?: ArticlesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Articles
     */
    omit?: ArticlesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticlesInclude<ExtArgs> | null
    /**
     * Filter, which Articles to fetch.
     */
    where: ArticlesWhereUniqueInput
  }

  /**
   * Articles findFirst
   */
  export type ArticlesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Articles
     */
    select?: ArticlesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Articles
     */
    omit?: ArticlesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticlesInclude<ExtArgs> | null
    /**
     * Filter, which Articles to fetch.
     */
    where?: ArticlesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Articles to fetch.
     */
    orderBy?: ArticlesOrderByWithRelationInput | ArticlesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Articles.
     */
    cursor?: ArticlesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Articles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Articles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Articles.
     */
    distinct?: ArticlesScalarFieldEnum | ArticlesScalarFieldEnum[]
  }

  /**
   * Articles findFirstOrThrow
   */
  export type ArticlesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Articles
     */
    select?: ArticlesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Articles
     */
    omit?: ArticlesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticlesInclude<ExtArgs> | null
    /**
     * Filter, which Articles to fetch.
     */
    where?: ArticlesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Articles to fetch.
     */
    orderBy?: ArticlesOrderByWithRelationInput | ArticlesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Articles.
     */
    cursor?: ArticlesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Articles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Articles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Articles.
     */
    distinct?: ArticlesScalarFieldEnum | ArticlesScalarFieldEnum[]
  }

  /**
   * Articles findMany
   */
  export type ArticlesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Articles
     */
    select?: ArticlesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Articles
     */
    omit?: ArticlesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticlesInclude<ExtArgs> | null
    /**
     * Filter, which Articles to fetch.
     */
    where?: ArticlesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Articles to fetch.
     */
    orderBy?: ArticlesOrderByWithRelationInput | ArticlesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Articles.
     */
    cursor?: ArticlesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Articles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Articles.
     */
    skip?: number
    distinct?: ArticlesScalarFieldEnum | ArticlesScalarFieldEnum[]
  }

  /**
   * Articles create
   */
  export type ArticlesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Articles
     */
    select?: ArticlesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Articles
     */
    omit?: ArticlesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticlesInclude<ExtArgs> | null
    /**
     * The data needed to create a Articles.
     */
    data: XOR<ArticlesCreateInput, ArticlesUncheckedCreateInput>
  }

  /**
   * Articles createMany
   */
  export type ArticlesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Articles.
     */
    data: ArticlesCreateManyInput | ArticlesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Articles createManyAndReturn
   */
  export type ArticlesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Articles
     */
    select?: ArticlesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Articles
     */
    omit?: ArticlesOmit<ExtArgs> | null
    /**
     * The data used to create many Articles.
     */
    data: ArticlesCreateManyInput | ArticlesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticlesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Articles update
   */
  export type ArticlesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Articles
     */
    select?: ArticlesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Articles
     */
    omit?: ArticlesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticlesInclude<ExtArgs> | null
    /**
     * The data needed to update a Articles.
     */
    data: XOR<ArticlesUpdateInput, ArticlesUncheckedUpdateInput>
    /**
     * Choose, which Articles to update.
     */
    where: ArticlesWhereUniqueInput
  }

  /**
   * Articles updateMany
   */
  export type ArticlesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Articles.
     */
    data: XOR<ArticlesUpdateManyMutationInput, ArticlesUncheckedUpdateManyInput>
    /**
     * Filter which Articles to update
     */
    where?: ArticlesWhereInput
    /**
     * Limit how many Articles to update.
     */
    limit?: number
  }

  /**
   * Articles updateManyAndReturn
   */
  export type ArticlesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Articles
     */
    select?: ArticlesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Articles
     */
    omit?: ArticlesOmit<ExtArgs> | null
    /**
     * The data used to update Articles.
     */
    data: XOR<ArticlesUpdateManyMutationInput, ArticlesUncheckedUpdateManyInput>
    /**
     * Filter which Articles to update
     */
    where?: ArticlesWhereInput
    /**
     * Limit how many Articles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticlesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Articles upsert
   */
  export type ArticlesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Articles
     */
    select?: ArticlesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Articles
     */
    omit?: ArticlesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticlesInclude<ExtArgs> | null
    /**
     * The filter to search for the Articles to update in case it exists.
     */
    where: ArticlesWhereUniqueInput
    /**
     * In case the Articles found by the `where` argument doesn't exist, create a new Articles with this data.
     */
    create: XOR<ArticlesCreateInput, ArticlesUncheckedCreateInput>
    /**
     * In case the Articles was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ArticlesUpdateInput, ArticlesUncheckedUpdateInput>
  }

  /**
   * Articles delete
   */
  export type ArticlesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Articles
     */
    select?: ArticlesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Articles
     */
    omit?: ArticlesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticlesInclude<ExtArgs> | null
    /**
     * Filter which Articles to delete.
     */
    where: ArticlesWhereUniqueInput
  }

  /**
   * Articles deleteMany
   */
  export type ArticlesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Articles to delete
     */
    where?: ArticlesWhereInput
    /**
     * Limit how many Articles to delete.
     */
    limit?: number
  }

  /**
   * Articles.stars
   */
  export type Articles$starsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stars
     */
    select?: StarsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stars
     */
    omit?: StarsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StarsInclude<ExtArgs> | null
    where?: StarsWhereInput
    orderBy?: StarsOrderByWithRelationInput | StarsOrderByWithRelationInput[]
    cursor?: StarsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StarsScalarFieldEnum | StarsScalarFieldEnum[]
  }

  /**
   * Articles.reactions
   */
  export type Articles$reactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reactions
     */
    select?: ReactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reactions
     */
    omit?: ReactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReactionsInclude<ExtArgs> | null
    where?: ReactionsWhereInput
    orderBy?: ReactionsOrderByWithRelationInput | ReactionsOrderByWithRelationInput[]
    cursor?: ReactionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReactionsScalarFieldEnum | ReactionsScalarFieldEnum[]
  }

  /**
   * Articles.topics
   */
  export type Articles$topicsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleToTopics
     */
    select?: ArticleToTopicsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleToTopics
     */
    omit?: ArticleToTopicsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleToTopicsInclude<ExtArgs> | null
    where?: ArticleToTopicsWhereInput
    orderBy?: ArticleToTopicsOrderByWithRelationInput | ArticleToTopicsOrderByWithRelationInput[]
    cursor?: ArticleToTopicsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ArticleToTopicsScalarFieldEnum | ArticleToTopicsScalarFieldEnum[]
  }

  /**
   * Articles.pageviews
   */
  export type Articles$pageviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pageviews
     */
    select?: PageviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pageviews
     */
    omit?: PageviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageviewsInclude<ExtArgs> | null
    where?: PageviewsWhereInput
    orderBy?: PageviewsOrderByWithRelationInput | PageviewsOrderByWithRelationInput[]
    cursor?: PageviewsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PageviewsScalarFieldEnum | PageviewsScalarFieldEnum[]
  }

  /**
   * Articles without action
   */
  export type ArticlesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Articles
     */
    select?: ArticlesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Articles
     */
    omit?: ArticlesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticlesInclude<ExtArgs> | null
  }


  /**
   * Model Reactions
   */

  export type AggregateReactions = {
    _count: ReactionsCountAggregateOutputType | null
    _min: ReactionsMinAggregateOutputType | null
    _max: ReactionsMaxAggregateOutputType | null
  }

  export type ReactionsMinAggregateOutputType = {
    id: string | null
    userId: string | null
    articleId: string | null
    reactionText: string | null
    createdAt: Date | null
    deletedAt: Date | null
  }

  export type ReactionsMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    articleId: string | null
    reactionText: string | null
    createdAt: Date | null
    deletedAt: Date | null
  }

  export type ReactionsCountAggregateOutputType = {
    id: number
    userId: number
    articleId: number
    reactionText: number
    createdAt: number
    deletedAt: number
    _all: number
  }


  export type ReactionsMinAggregateInputType = {
    id?: true
    userId?: true
    articleId?: true
    reactionText?: true
    createdAt?: true
    deletedAt?: true
  }

  export type ReactionsMaxAggregateInputType = {
    id?: true
    userId?: true
    articleId?: true
    reactionText?: true
    createdAt?: true
    deletedAt?: true
  }

  export type ReactionsCountAggregateInputType = {
    id?: true
    userId?: true
    articleId?: true
    reactionText?: true
    createdAt?: true
    deletedAt?: true
    _all?: true
  }

  export type ReactionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reactions to aggregate.
     */
    where?: ReactionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reactions to fetch.
     */
    orderBy?: ReactionsOrderByWithRelationInput | ReactionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReactionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reactions
    **/
    _count?: true | ReactionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReactionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReactionsMaxAggregateInputType
  }

  export type GetReactionsAggregateType<T extends ReactionsAggregateArgs> = {
        [P in keyof T & keyof AggregateReactions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReactions[P]>
      : GetScalarType<T[P], AggregateReactions[P]>
  }




  export type ReactionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReactionsWhereInput
    orderBy?: ReactionsOrderByWithAggregationInput | ReactionsOrderByWithAggregationInput[]
    by: ReactionsScalarFieldEnum[] | ReactionsScalarFieldEnum
    having?: ReactionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReactionsCountAggregateInputType | true
    _min?: ReactionsMinAggregateInputType
    _max?: ReactionsMaxAggregateInputType
  }

  export type ReactionsGroupByOutputType = {
    id: string
    userId: string
    articleId: string
    reactionText: string
    createdAt: Date
    deletedAt: Date | null
    _count: ReactionsCountAggregateOutputType | null
    _min: ReactionsMinAggregateOutputType | null
    _max: ReactionsMaxAggregateOutputType | null
  }

  type GetReactionsGroupByPayload<T extends ReactionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReactionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReactionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReactionsGroupByOutputType[P]>
            : GetScalarType<T[P], ReactionsGroupByOutputType[P]>
        }
      >
    >


  export type ReactionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    articleId?: boolean
    reactionText?: boolean
    createdAt?: boolean
    deletedAt?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
    article?: boolean | ArticlesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reactions"]>

  export type ReactionsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    articleId?: boolean
    reactionText?: boolean
    createdAt?: boolean
    deletedAt?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
    article?: boolean | ArticlesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reactions"]>

  export type ReactionsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    articleId?: boolean
    reactionText?: boolean
    createdAt?: boolean
    deletedAt?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
    article?: boolean | ArticlesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reactions"]>

  export type ReactionsSelectScalar = {
    id?: boolean
    userId?: boolean
    articleId?: boolean
    reactionText?: boolean
    createdAt?: boolean
    deletedAt?: boolean
  }

  export type ReactionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "articleId" | "reactionText" | "createdAt" | "deletedAt", ExtArgs["result"]["reactions"]>
  export type ReactionsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
    article?: boolean | ArticlesDefaultArgs<ExtArgs>
  }
  export type ReactionsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
    article?: boolean | ArticlesDefaultArgs<ExtArgs>
  }
  export type ReactionsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
    article?: boolean | ArticlesDefaultArgs<ExtArgs>
  }

  export type $ReactionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Reactions"
    objects: {
      user: Prisma.$UsersPayload<ExtArgs>
      article: Prisma.$ArticlesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      articleId: string
      reactionText: string
      createdAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["reactions"]>
    composites: {}
  }

  type ReactionsGetPayload<S extends boolean | null | undefined | ReactionsDefaultArgs> = $Result.GetResult<Prisma.$ReactionsPayload, S>

  type ReactionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReactionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReactionsCountAggregateInputType | true
    }

  export interface ReactionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Reactions'], meta: { name: 'Reactions' } }
    /**
     * Find zero or one Reactions that matches the filter.
     * @param {ReactionsFindUniqueArgs} args - Arguments to find a Reactions
     * @example
     * // Get one Reactions
     * const reactions = await prisma.reactions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReactionsFindUniqueArgs>(args: SelectSubset<T, ReactionsFindUniqueArgs<ExtArgs>>): Prisma__ReactionsClient<$Result.GetResult<Prisma.$ReactionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Reactions that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReactionsFindUniqueOrThrowArgs} args - Arguments to find a Reactions
     * @example
     * // Get one Reactions
     * const reactions = await prisma.reactions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReactionsFindUniqueOrThrowArgs>(args: SelectSubset<T, ReactionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReactionsClient<$Result.GetResult<Prisma.$ReactionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReactionsFindFirstArgs} args - Arguments to find a Reactions
     * @example
     * // Get one Reactions
     * const reactions = await prisma.reactions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReactionsFindFirstArgs>(args?: SelectSubset<T, ReactionsFindFirstArgs<ExtArgs>>): Prisma__ReactionsClient<$Result.GetResult<Prisma.$ReactionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reactions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReactionsFindFirstOrThrowArgs} args - Arguments to find a Reactions
     * @example
     * // Get one Reactions
     * const reactions = await prisma.reactions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReactionsFindFirstOrThrowArgs>(args?: SelectSubset<T, ReactionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReactionsClient<$Result.GetResult<Prisma.$ReactionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReactionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reactions
     * const reactions = await prisma.reactions.findMany()
     * 
     * // Get first 10 Reactions
     * const reactions = await prisma.reactions.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reactionsWithIdOnly = await prisma.reactions.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReactionsFindManyArgs>(args?: SelectSubset<T, ReactionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReactionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Reactions.
     * @param {ReactionsCreateArgs} args - Arguments to create a Reactions.
     * @example
     * // Create one Reactions
     * const Reactions = await prisma.reactions.create({
     *   data: {
     *     // ... data to create a Reactions
     *   }
     * })
     * 
     */
    create<T extends ReactionsCreateArgs>(args: SelectSubset<T, ReactionsCreateArgs<ExtArgs>>): Prisma__ReactionsClient<$Result.GetResult<Prisma.$ReactionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reactions.
     * @param {ReactionsCreateManyArgs} args - Arguments to create many Reactions.
     * @example
     * // Create many Reactions
     * const reactions = await prisma.reactions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReactionsCreateManyArgs>(args?: SelectSubset<T, ReactionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reactions and returns the data saved in the database.
     * @param {ReactionsCreateManyAndReturnArgs} args - Arguments to create many Reactions.
     * @example
     * // Create many Reactions
     * const reactions = await prisma.reactions.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reactions and only return the `id`
     * const reactionsWithIdOnly = await prisma.reactions.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReactionsCreateManyAndReturnArgs>(args?: SelectSubset<T, ReactionsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReactionsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Reactions.
     * @param {ReactionsDeleteArgs} args - Arguments to delete one Reactions.
     * @example
     * // Delete one Reactions
     * const Reactions = await prisma.reactions.delete({
     *   where: {
     *     // ... filter to delete one Reactions
     *   }
     * })
     * 
     */
    delete<T extends ReactionsDeleteArgs>(args: SelectSubset<T, ReactionsDeleteArgs<ExtArgs>>): Prisma__ReactionsClient<$Result.GetResult<Prisma.$ReactionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Reactions.
     * @param {ReactionsUpdateArgs} args - Arguments to update one Reactions.
     * @example
     * // Update one Reactions
     * const reactions = await prisma.reactions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReactionsUpdateArgs>(args: SelectSubset<T, ReactionsUpdateArgs<ExtArgs>>): Prisma__ReactionsClient<$Result.GetResult<Prisma.$ReactionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reactions.
     * @param {ReactionsDeleteManyArgs} args - Arguments to filter Reactions to delete.
     * @example
     * // Delete a few Reactions
     * const { count } = await prisma.reactions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReactionsDeleteManyArgs>(args?: SelectSubset<T, ReactionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReactionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reactions
     * const reactions = await prisma.reactions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReactionsUpdateManyArgs>(args: SelectSubset<T, ReactionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reactions and returns the data updated in the database.
     * @param {ReactionsUpdateManyAndReturnArgs} args - Arguments to update many Reactions.
     * @example
     * // Update many Reactions
     * const reactions = await prisma.reactions.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reactions and only return the `id`
     * const reactionsWithIdOnly = await prisma.reactions.updateManyAndReturn({
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
    updateManyAndReturn<T extends ReactionsUpdateManyAndReturnArgs>(args: SelectSubset<T, ReactionsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReactionsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Reactions.
     * @param {ReactionsUpsertArgs} args - Arguments to update or create a Reactions.
     * @example
     * // Update or create a Reactions
     * const reactions = await prisma.reactions.upsert({
     *   create: {
     *     // ... data to create a Reactions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reactions we want to update
     *   }
     * })
     */
    upsert<T extends ReactionsUpsertArgs>(args: SelectSubset<T, ReactionsUpsertArgs<ExtArgs>>): Prisma__ReactionsClient<$Result.GetResult<Prisma.$ReactionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReactionsCountArgs} args - Arguments to filter Reactions to count.
     * @example
     * // Count the number of Reactions
     * const count = await prisma.reactions.count({
     *   where: {
     *     // ... the filter for the Reactions we want to count
     *   }
     * })
    **/
    count<T extends ReactionsCountArgs>(
      args?: Subset<T, ReactionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReactionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Reactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReactionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReactionsAggregateArgs>(args: Subset<T, ReactionsAggregateArgs>): Prisma.PrismaPromise<GetReactionsAggregateType<T>>

    /**
     * Group by Reactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReactionsGroupByArgs} args - Group by arguments.
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
      T extends ReactionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReactionsGroupByArgs['orderBy'] }
        : { orderBy?: ReactionsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReactionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReactionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Reactions model
   */
  readonly fields: ReactionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Reactions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReactionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    article<T extends ArticlesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ArticlesDefaultArgs<ExtArgs>>): Prisma__ArticlesClient<$Result.GetResult<Prisma.$ArticlesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Reactions model
   */
  interface ReactionsFieldRefs {
    readonly id: FieldRef<"Reactions", 'String'>
    readonly userId: FieldRef<"Reactions", 'String'>
    readonly articleId: FieldRef<"Reactions", 'String'>
    readonly reactionText: FieldRef<"Reactions", 'String'>
    readonly createdAt: FieldRef<"Reactions", 'DateTime'>
    readonly deletedAt: FieldRef<"Reactions", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Reactions findUnique
   */
  export type ReactionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reactions
     */
    select?: ReactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reactions
     */
    omit?: ReactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReactionsInclude<ExtArgs> | null
    /**
     * Filter, which Reactions to fetch.
     */
    where: ReactionsWhereUniqueInput
  }

  /**
   * Reactions findUniqueOrThrow
   */
  export type ReactionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reactions
     */
    select?: ReactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reactions
     */
    omit?: ReactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReactionsInclude<ExtArgs> | null
    /**
     * Filter, which Reactions to fetch.
     */
    where: ReactionsWhereUniqueInput
  }

  /**
   * Reactions findFirst
   */
  export type ReactionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reactions
     */
    select?: ReactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reactions
     */
    omit?: ReactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReactionsInclude<ExtArgs> | null
    /**
     * Filter, which Reactions to fetch.
     */
    where?: ReactionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reactions to fetch.
     */
    orderBy?: ReactionsOrderByWithRelationInput | ReactionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reactions.
     */
    cursor?: ReactionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reactions.
     */
    distinct?: ReactionsScalarFieldEnum | ReactionsScalarFieldEnum[]
  }

  /**
   * Reactions findFirstOrThrow
   */
  export type ReactionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reactions
     */
    select?: ReactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reactions
     */
    omit?: ReactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReactionsInclude<ExtArgs> | null
    /**
     * Filter, which Reactions to fetch.
     */
    where?: ReactionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reactions to fetch.
     */
    orderBy?: ReactionsOrderByWithRelationInput | ReactionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reactions.
     */
    cursor?: ReactionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reactions.
     */
    distinct?: ReactionsScalarFieldEnum | ReactionsScalarFieldEnum[]
  }

  /**
   * Reactions findMany
   */
  export type ReactionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reactions
     */
    select?: ReactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reactions
     */
    omit?: ReactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReactionsInclude<ExtArgs> | null
    /**
     * Filter, which Reactions to fetch.
     */
    where?: ReactionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reactions to fetch.
     */
    orderBy?: ReactionsOrderByWithRelationInput | ReactionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reactions.
     */
    cursor?: ReactionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reactions.
     */
    skip?: number
    distinct?: ReactionsScalarFieldEnum | ReactionsScalarFieldEnum[]
  }

  /**
   * Reactions create
   */
  export type ReactionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reactions
     */
    select?: ReactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reactions
     */
    omit?: ReactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReactionsInclude<ExtArgs> | null
    /**
     * The data needed to create a Reactions.
     */
    data: XOR<ReactionsCreateInput, ReactionsUncheckedCreateInput>
  }

  /**
   * Reactions createMany
   */
  export type ReactionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reactions.
     */
    data: ReactionsCreateManyInput | ReactionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Reactions createManyAndReturn
   */
  export type ReactionsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reactions
     */
    select?: ReactionsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Reactions
     */
    omit?: ReactionsOmit<ExtArgs> | null
    /**
     * The data used to create many Reactions.
     */
    data: ReactionsCreateManyInput | ReactionsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReactionsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Reactions update
   */
  export type ReactionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reactions
     */
    select?: ReactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reactions
     */
    omit?: ReactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReactionsInclude<ExtArgs> | null
    /**
     * The data needed to update a Reactions.
     */
    data: XOR<ReactionsUpdateInput, ReactionsUncheckedUpdateInput>
    /**
     * Choose, which Reactions to update.
     */
    where: ReactionsWhereUniqueInput
  }

  /**
   * Reactions updateMany
   */
  export type ReactionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reactions.
     */
    data: XOR<ReactionsUpdateManyMutationInput, ReactionsUncheckedUpdateManyInput>
    /**
     * Filter which Reactions to update
     */
    where?: ReactionsWhereInput
    /**
     * Limit how many Reactions to update.
     */
    limit?: number
  }

  /**
   * Reactions updateManyAndReturn
   */
  export type ReactionsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reactions
     */
    select?: ReactionsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Reactions
     */
    omit?: ReactionsOmit<ExtArgs> | null
    /**
     * The data used to update Reactions.
     */
    data: XOR<ReactionsUpdateManyMutationInput, ReactionsUncheckedUpdateManyInput>
    /**
     * Filter which Reactions to update
     */
    where?: ReactionsWhereInput
    /**
     * Limit how many Reactions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReactionsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Reactions upsert
   */
  export type ReactionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reactions
     */
    select?: ReactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reactions
     */
    omit?: ReactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReactionsInclude<ExtArgs> | null
    /**
     * The filter to search for the Reactions to update in case it exists.
     */
    where: ReactionsWhereUniqueInput
    /**
     * In case the Reactions found by the `where` argument doesn't exist, create a new Reactions with this data.
     */
    create: XOR<ReactionsCreateInput, ReactionsUncheckedCreateInput>
    /**
     * In case the Reactions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReactionsUpdateInput, ReactionsUncheckedUpdateInput>
  }

  /**
   * Reactions delete
   */
  export type ReactionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reactions
     */
    select?: ReactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reactions
     */
    omit?: ReactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReactionsInclude<ExtArgs> | null
    /**
     * Filter which Reactions to delete.
     */
    where: ReactionsWhereUniqueInput
  }

  /**
   * Reactions deleteMany
   */
  export type ReactionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reactions to delete
     */
    where?: ReactionsWhereInput
    /**
     * Limit how many Reactions to delete.
     */
    limit?: number
  }

  /**
   * Reactions without action
   */
  export type ReactionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reactions
     */
    select?: ReactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reactions
     */
    omit?: ReactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReactionsInclude<ExtArgs> | null
  }


  /**
   * Model Stars
   */

  export type AggregateStars = {
    _count: StarsCountAggregateOutputType | null
    _min: StarsMinAggregateOutputType | null
    _max: StarsMaxAggregateOutputType | null
  }

  export type StarsMinAggregateOutputType = {
    id: string | null
    articleId: string | null
    userId: string | null
    createdAt: Date | null
    deletedAt: Date | null
  }

  export type StarsMaxAggregateOutputType = {
    id: string | null
    articleId: string | null
    userId: string | null
    createdAt: Date | null
    deletedAt: Date | null
  }

  export type StarsCountAggregateOutputType = {
    id: number
    articleId: number
    userId: number
    createdAt: number
    deletedAt: number
    _all: number
  }


  export type StarsMinAggregateInputType = {
    id?: true
    articleId?: true
    userId?: true
    createdAt?: true
    deletedAt?: true
  }

  export type StarsMaxAggregateInputType = {
    id?: true
    articleId?: true
    userId?: true
    createdAt?: true
    deletedAt?: true
  }

  export type StarsCountAggregateInputType = {
    id?: true
    articleId?: true
    userId?: true
    createdAt?: true
    deletedAt?: true
    _all?: true
  }

  export type StarsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Stars to aggregate.
     */
    where?: StarsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stars to fetch.
     */
    orderBy?: StarsOrderByWithRelationInput | StarsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StarsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Stars
    **/
    _count?: true | StarsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StarsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StarsMaxAggregateInputType
  }

  export type GetStarsAggregateType<T extends StarsAggregateArgs> = {
        [P in keyof T & keyof AggregateStars]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStars[P]>
      : GetScalarType<T[P], AggregateStars[P]>
  }




  export type StarsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StarsWhereInput
    orderBy?: StarsOrderByWithAggregationInput | StarsOrderByWithAggregationInput[]
    by: StarsScalarFieldEnum[] | StarsScalarFieldEnum
    having?: StarsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StarsCountAggregateInputType | true
    _min?: StarsMinAggregateInputType
    _max?: StarsMaxAggregateInputType
  }

  export type StarsGroupByOutputType = {
    id: string
    articleId: string | null
    userId: string
    createdAt: Date
    deletedAt: Date | null
    _count: StarsCountAggregateOutputType | null
    _min: StarsMinAggregateOutputType | null
    _max: StarsMaxAggregateOutputType | null
  }

  type GetStarsGroupByPayload<T extends StarsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StarsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StarsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StarsGroupByOutputType[P]>
            : GetScalarType<T[P], StarsGroupByOutputType[P]>
        }
      >
    >


  export type StarsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    articleId?: boolean
    userId?: boolean
    createdAt?: boolean
    deletedAt?: boolean
    article?: boolean | Stars$articleArgs<ExtArgs>
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stars"]>

  export type StarsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    articleId?: boolean
    userId?: boolean
    createdAt?: boolean
    deletedAt?: boolean
    article?: boolean | Stars$articleArgs<ExtArgs>
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stars"]>

  export type StarsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    articleId?: boolean
    userId?: boolean
    createdAt?: boolean
    deletedAt?: boolean
    article?: boolean | Stars$articleArgs<ExtArgs>
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stars"]>

  export type StarsSelectScalar = {
    id?: boolean
    articleId?: boolean
    userId?: boolean
    createdAt?: boolean
    deletedAt?: boolean
  }

  export type StarsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "articleId" | "userId" | "createdAt" | "deletedAt", ExtArgs["result"]["stars"]>
  export type StarsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    article?: boolean | Stars$articleArgs<ExtArgs>
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type StarsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    article?: boolean | Stars$articleArgs<ExtArgs>
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type StarsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    article?: boolean | Stars$articleArgs<ExtArgs>
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }

  export type $StarsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Stars"
    objects: {
      article: Prisma.$ArticlesPayload<ExtArgs> | null
      user: Prisma.$UsersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      articleId: string | null
      userId: string
      createdAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["stars"]>
    composites: {}
  }

  type StarsGetPayload<S extends boolean | null | undefined | StarsDefaultArgs> = $Result.GetResult<Prisma.$StarsPayload, S>

  type StarsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StarsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StarsCountAggregateInputType | true
    }

  export interface StarsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Stars'], meta: { name: 'Stars' } }
    /**
     * Find zero or one Stars that matches the filter.
     * @param {StarsFindUniqueArgs} args - Arguments to find a Stars
     * @example
     * // Get one Stars
     * const stars = await prisma.stars.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StarsFindUniqueArgs>(args: SelectSubset<T, StarsFindUniqueArgs<ExtArgs>>): Prisma__StarsClient<$Result.GetResult<Prisma.$StarsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Stars that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StarsFindUniqueOrThrowArgs} args - Arguments to find a Stars
     * @example
     * // Get one Stars
     * const stars = await prisma.stars.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StarsFindUniqueOrThrowArgs>(args: SelectSubset<T, StarsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StarsClient<$Result.GetResult<Prisma.$StarsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Stars that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StarsFindFirstArgs} args - Arguments to find a Stars
     * @example
     * // Get one Stars
     * const stars = await prisma.stars.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StarsFindFirstArgs>(args?: SelectSubset<T, StarsFindFirstArgs<ExtArgs>>): Prisma__StarsClient<$Result.GetResult<Prisma.$StarsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Stars that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StarsFindFirstOrThrowArgs} args - Arguments to find a Stars
     * @example
     * // Get one Stars
     * const stars = await prisma.stars.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StarsFindFirstOrThrowArgs>(args?: SelectSubset<T, StarsFindFirstOrThrowArgs<ExtArgs>>): Prisma__StarsClient<$Result.GetResult<Prisma.$StarsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Stars that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StarsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Stars
     * const stars = await prisma.stars.findMany()
     * 
     * // Get first 10 Stars
     * const stars = await prisma.stars.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const starsWithIdOnly = await prisma.stars.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StarsFindManyArgs>(args?: SelectSubset<T, StarsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StarsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Stars.
     * @param {StarsCreateArgs} args - Arguments to create a Stars.
     * @example
     * // Create one Stars
     * const Stars = await prisma.stars.create({
     *   data: {
     *     // ... data to create a Stars
     *   }
     * })
     * 
     */
    create<T extends StarsCreateArgs>(args: SelectSubset<T, StarsCreateArgs<ExtArgs>>): Prisma__StarsClient<$Result.GetResult<Prisma.$StarsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Stars.
     * @param {StarsCreateManyArgs} args - Arguments to create many Stars.
     * @example
     * // Create many Stars
     * const stars = await prisma.stars.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StarsCreateManyArgs>(args?: SelectSubset<T, StarsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Stars and returns the data saved in the database.
     * @param {StarsCreateManyAndReturnArgs} args - Arguments to create many Stars.
     * @example
     * // Create many Stars
     * const stars = await prisma.stars.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Stars and only return the `id`
     * const starsWithIdOnly = await prisma.stars.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StarsCreateManyAndReturnArgs>(args?: SelectSubset<T, StarsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StarsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Stars.
     * @param {StarsDeleteArgs} args - Arguments to delete one Stars.
     * @example
     * // Delete one Stars
     * const Stars = await prisma.stars.delete({
     *   where: {
     *     // ... filter to delete one Stars
     *   }
     * })
     * 
     */
    delete<T extends StarsDeleteArgs>(args: SelectSubset<T, StarsDeleteArgs<ExtArgs>>): Prisma__StarsClient<$Result.GetResult<Prisma.$StarsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Stars.
     * @param {StarsUpdateArgs} args - Arguments to update one Stars.
     * @example
     * // Update one Stars
     * const stars = await prisma.stars.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StarsUpdateArgs>(args: SelectSubset<T, StarsUpdateArgs<ExtArgs>>): Prisma__StarsClient<$Result.GetResult<Prisma.$StarsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Stars.
     * @param {StarsDeleteManyArgs} args - Arguments to filter Stars to delete.
     * @example
     * // Delete a few Stars
     * const { count } = await prisma.stars.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StarsDeleteManyArgs>(args?: SelectSubset<T, StarsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StarsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Stars
     * const stars = await prisma.stars.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StarsUpdateManyArgs>(args: SelectSubset<T, StarsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stars and returns the data updated in the database.
     * @param {StarsUpdateManyAndReturnArgs} args - Arguments to update many Stars.
     * @example
     * // Update many Stars
     * const stars = await prisma.stars.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Stars and only return the `id`
     * const starsWithIdOnly = await prisma.stars.updateManyAndReturn({
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
    updateManyAndReturn<T extends StarsUpdateManyAndReturnArgs>(args: SelectSubset<T, StarsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StarsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Stars.
     * @param {StarsUpsertArgs} args - Arguments to update or create a Stars.
     * @example
     * // Update or create a Stars
     * const stars = await prisma.stars.upsert({
     *   create: {
     *     // ... data to create a Stars
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Stars we want to update
     *   }
     * })
     */
    upsert<T extends StarsUpsertArgs>(args: SelectSubset<T, StarsUpsertArgs<ExtArgs>>): Prisma__StarsClient<$Result.GetResult<Prisma.$StarsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Stars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StarsCountArgs} args - Arguments to filter Stars to count.
     * @example
     * // Count the number of Stars
     * const count = await prisma.stars.count({
     *   where: {
     *     // ... the filter for the Stars we want to count
     *   }
     * })
    **/
    count<T extends StarsCountArgs>(
      args?: Subset<T, StarsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StarsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Stars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StarsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StarsAggregateArgs>(args: Subset<T, StarsAggregateArgs>): Prisma.PrismaPromise<GetStarsAggregateType<T>>

    /**
     * Group by Stars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StarsGroupByArgs} args - Group by arguments.
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
      T extends StarsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StarsGroupByArgs['orderBy'] }
        : { orderBy?: StarsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StarsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStarsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Stars model
   */
  readonly fields: StarsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Stars.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StarsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    article<T extends Stars$articleArgs<ExtArgs> = {}>(args?: Subset<T, Stars$articleArgs<ExtArgs>>): Prisma__ArticlesClient<$Result.GetResult<Prisma.$ArticlesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    user<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Stars model
   */
  interface StarsFieldRefs {
    readonly id: FieldRef<"Stars", 'String'>
    readonly articleId: FieldRef<"Stars", 'String'>
    readonly userId: FieldRef<"Stars", 'String'>
    readonly createdAt: FieldRef<"Stars", 'DateTime'>
    readonly deletedAt: FieldRef<"Stars", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Stars findUnique
   */
  export type StarsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stars
     */
    select?: StarsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stars
     */
    omit?: StarsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StarsInclude<ExtArgs> | null
    /**
     * Filter, which Stars to fetch.
     */
    where: StarsWhereUniqueInput
  }

  /**
   * Stars findUniqueOrThrow
   */
  export type StarsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stars
     */
    select?: StarsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stars
     */
    omit?: StarsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StarsInclude<ExtArgs> | null
    /**
     * Filter, which Stars to fetch.
     */
    where: StarsWhereUniqueInput
  }

  /**
   * Stars findFirst
   */
  export type StarsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stars
     */
    select?: StarsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stars
     */
    omit?: StarsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StarsInclude<ExtArgs> | null
    /**
     * Filter, which Stars to fetch.
     */
    where?: StarsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stars to fetch.
     */
    orderBy?: StarsOrderByWithRelationInput | StarsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Stars.
     */
    cursor?: StarsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Stars.
     */
    distinct?: StarsScalarFieldEnum | StarsScalarFieldEnum[]
  }

  /**
   * Stars findFirstOrThrow
   */
  export type StarsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stars
     */
    select?: StarsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stars
     */
    omit?: StarsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StarsInclude<ExtArgs> | null
    /**
     * Filter, which Stars to fetch.
     */
    where?: StarsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stars to fetch.
     */
    orderBy?: StarsOrderByWithRelationInput | StarsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Stars.
     */
    cursor?: StarsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Stars.
     */
    distinct?: StarsScalarFieldEnum | StarsScalarFieldEnum[]
  }

  /**
   * Stars findMany
   */
  export type StarsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stars
     */
    select?: StarsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stars
     */
    omit?: StarsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StarsInclude<ExtArgs> | null
    /**
     * Filter, which Stars to fetch.
     */
    where?: StarsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stars to fetch.
     */
    orderBy?: StarsOrderByWithRelationInput | StarsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Stars.
     */
    cursor?: StarsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stars.
     */
    skip?: number
    distinct?: StarsScalarFieldEnum | StarsScalarFieldEnum[]
  }

  /**
   * Stars create
   */
  export type StarsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stars
     */
    select?: StarsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stars
     */
    omit?: StarsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StarsInclude<ExtArgs> | null
    /**
     * The data needed to create a Stars.
     */
    data: XOR<StarsCreateInput, StarsUncheckedCreateInput>
  }

  /**
   * Stars createMany
   */
  export type StarsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Stars.
     */
    data: StarsCreateManyInput | StarsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Stars createManyAndReturn
   */
  export type StarsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stars
     */
    select?: StarsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Stars
     */
    omit?: StarsOmit<ExtArgs> | null
    /**
     * The data used to create many Stars.
     */
    data: StarsCreateManyInput | StarsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StarsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Stars update
   */
  export type StarsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stars
     */
    select?: StarsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stars
     */
    omit?: StarsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StarsInclude<ExtArgs> | null
    /**
     * The data needed to update a Stars.
     */
    data: XOR<StarsUpdateInput, StarsUncheckedUpdateInput>
    /**
     * Choose, which Stars to update.
     */
    where: StarsWhereUniqueInput
  }

  /**
   * Stars updateMany
   */
  export type StarsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Stars.
     */
    data: XOR<StarsUpdateManyMutationInput, StarsUncheckedUpdateManyInput>
    /**
     * Filter which Stars to update
     */
    where?: StarsWhereInput
    /**
     * Limit how many Stars to update.
     */
    limit?: number
  }

  /**
   * Stars updateManyAndReturn
   */
  export type StarsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stars
     */
    select?: StarsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Stars
     */
    omit?: StarsOmit<ExtArgs> | null
    /**
     * The data used to update Stars.
     */
    data: XOR<StarsUpdateManyMutationInput, StarsUncheckedUpdateManyInput>
    /**
     * Filter which Stars to update
     */
    where?: StarsWhereInput
    /**
     * Limit how many Stars to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StarsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Stars upsert
   */
  export type StarsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stars
     */
    select?: StarsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stars
     */
    omit?: StarsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StarsInclude<ExtArgs> | null
    /**
     * The filter to search for the Stars to update in case it exists.
     */
    where: StarsWhereUniqueInput
    /**
     * In case the Stars found by the `where` argument doesn't exist, create a new Stars with this data.
     */
    create: XOR<StarsCreateInput, StarsUncheckedCreateInput>
    /**
     * In case the Stars was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StarsUpdateInput, StarsUncheckedUpdateInput>
  }

  /**
   * Stars delete
   */
  export type StarsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stars
     */
    select?: StarsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stars
     */
    omit?: StarsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StarsInclude<ExtArgs> | null
    /**
     * Filter which Stars to delete.
     */
    where: StarsWhereUniqueInput
  }

  /**
   * Stars deleteMany
   */
  export type StarsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Stars to delete
     */
    where?: StarsWhereInput
    /**
     * Limit how many Stars to delete.
     */
    limit?: number
  }

  /**
   * Stars.article
   */
  export type Stars$articleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Articles
     */
    select?: ArticlesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Articles
     */
    omit?: ArticlesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticlesInclude<ExtArgs> | null
    where?: ArticlesWhereInput
  }

  /**
   * Stars without action
   */
  export type StarsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stars
     */
    select?: StarsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stars
     */
    omit?: StarsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StarsInclude<ExtArgs> | null
  }


  /**
   * Model Topics
   */

  export type AggregateTopics = {
    _count: TopicsCountAggregateOutputType | null
    _min: TopicsMinAggregateOutputType | null
    _max: TopicsMaxAggregateOutputType | null
  }

  export type TopicsMinAggregateOutputType = {
    id: string | null
    topicName: string | null
    createdAt: Date | null
    deletedAt: Date | null
  }

  export type TopicsMaxAggregateOutputType = {
    id: string | null
    topicName: string | null
    createdAt: Date | null
    deletedAt: Date | null
  }

  export type TopicsCountAggregateOutputType = {
    id: number
    topicName: number
    createdAt: number
    deletedAt: number
    _all: number
  }


  export type TopicsMinAggregateInputType = {
    id?: true
    topicName?: true
    createdAt?: true
    deletedAt?: true
  }

  export type TopicsMaxAggregateInputType = {
    id?: true
    topicName?: true
    createdAt?: true
    deletedAt?: true
  }

  export type TopicsCountAggregateInputType = {
    id?: true
    topicName?: true
    createdAt?: true
    deletedAt?: true
    _all?: true
  }

  export type TopicsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Topics to aggregate.
     */
    where?: TopicsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Topics to fetch.
     */
    orderBy?: TopicsOrderByWithRelationInput | TopicsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TopicsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Topics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Topics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Topics
    **/
    _count?: true | TopicsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TopicsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TopicsMaxAggregateInputType
  }

  export type GetTopicsAggregateType<T extends TopicsAggregateArgs> = {
        [P in keyof T & keyof AggregateTopics]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTopics[P]>
      : GetScalarType<T[P], AggregateTopics[P]>
  }




  export type TopicsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TopicsWhereInput
    orderBy?: TopicsOrderByWithAggregationInput | TopicsOrderByWithAggregationInput[]
    by: TopicsScalarFieldEnum[] | TopicsScalarFieldEnum
    having?: TopicsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TopicsCountAggregateInputType | true
    _min?: TopicsMinAggregateInputType
    _max?: TopicsMaxAggregateInputType
  }

  export type TopicsGroupByOutputType = {
    id: string
    topicName: string
    createdAt: Date
    deletedAt: Date | null
    _count: TopicsCountAggregateOutputType | null
    _min: TopicsMinAggregateOutputType | null
    _max: TopicsMaxAggregateOutputType | null
  }

  type GetTopicsGroupByPayload<T extends TopicsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TopicsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TopicsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TopicsGroupByOutputType[P]>
            : GetScalarType<T[P], TopicsGroupByOutputType[P]>
        }
      >
    >


  export type TopicsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    topicName?: boolean
    createdAt?: boolean
    deletedAt?: boolean
    articles?: boolean | Topics$articlesArgs<ExtArgs>
    _count?: boolean | TopicsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["topics"]>

  export type TopicsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    topicName?: boolean
    createdAt?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["topics"]>

  export type TopicsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    topicName?: boolean
    createdAt?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["topics"]>

  export type TopicsSelectScalar = {
    id?: boolean
    topicName?: boolean
    createdAt?: boolean
    deletedAt?: boolean
  }

  export type TopicsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "topicName" | "createdAt" | "deletedAt", ExtArgs["result"]["topics"]>
  export type TopicsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    articles?: boolean | Topics$articlesArgs<ExtArgs>
    _count?: boolean | TopicsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TopicsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TopicsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TopicsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Topics"
    objects: {
      articles: Prisma.$ArticleToTopicsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      topicName: string
      createdAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["topics"]>
    composites: {}
  }

  type TopicsGetPayload<S extends boolean | null | undefined | TopicsDefaultArgs> = $Result.GetResult<Prisma.$TopicsPayload, S>

  type TopicsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TopicsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TopicsCountAggregateInputType | true
    }

  export interface TopicsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Topics'], meta: { name: 'Topics' } }
    /**
     * Find zero or one Topics that matches the filter.
     * @param {TopicsFindUniqueArgs} args - Arguments to find a Topics
     * @example
     * // Get one Topics
     * const topics = await prisma.topics.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TopicsFindUniqueArgs>(args: SelectSubset<T, TopicsFindUniqueArgs<ExtArgs>>): Prisma__TopicsClient<$Result.GetResult<Prisma.$TopicsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Topics that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TopicsFindUniqueOrThrowArgs} args - Arguments to find a Topics
     * @example
     * // Get one Topics
     * const topics = await prisma.topics.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TopicsFindUniqueOrThrowArgs>(args: SelectSubset<T, TopicsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TopicsClient<$Result.GetResult<Prisma.$TopicsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Topics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopicsFindFirstArgs} args - Arguments to find a Topics
     * @example
     * // Get one Topics
     * const topics = await prisma.topics.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TopicsFindFirstArgs>(args?: SelectSubset<T, TopicsFindFirstArgs<ExtArgs>>): Prisma__TopicsClient<$Result.GetResult<Prisma.$TopicsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Topics that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopicsFindFirstOrThrowArgs} args - Arguments to find a Topics
     * @example
     * // Get one Topics
     * const topics = await prisma.topics.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TopicsFindFirstOrThrowArgs>(args?: SelectSubset<T, TopicsFindFirstOrThrowArgs<ExtArgs>>): Prisma__TopicsClient<$Result.GetResult<Prisma.$TopicsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Topics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopicsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Topics
     * const topics = await prisma.topics.findMany()
     * 
     * // Get first 10 Topics
     * const topics = await prisma.topics.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const topicsWithIdOnly = await prisma.topics.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TopicsFindManyArgs>(args?: SelectSubset<T, TopicsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TopicsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Topics.
     * @param {TopicsCreateArgs} args - Arguments to create a Topics.
     * @example
     * // Create one Topics
     * const Topics = await prisma.topics.create({
     *   data: {
     *     // ... data to create a Topics
     *   }
     * })
     * 
     */
    create<T extends TopicsCreateArgs>(args: SelectSubset<T, TopicsCreateArgs<ExtArgs>>): Prisma__TopicsClient<$Result.GetResult<Prisma.$TopicsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Topics.
     * @param {TopicsCreateManyArgs} args - Arguments to create many Topics.
     * @example
     * // Create many Topics
     * const topics = await prisma.topics.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TopicsCreateManyArgs>(args?: SelectSubset<T, TopicsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Topics and returns the data saved in the database.
     * @param {TopicsCreateManyAndReturnArgs} args - Arguments to create many Topics.
     * @example
     * // Create many Topics
     * const topics = await prisma.topics.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Topics and only return the `id`
     * const topicsWithIdOnly = await prisma.topics.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TopicsCreateManyAndReturnArgs>(args?: SelectSubset<T, TopicsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TopicsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Topics.
     * @param {TopicsDeleteArgs} args - Arguments to delete one Topics.
     * @example
     * // Delete one Topics
     * const Topics = await prisma.topics.delete({
     *   where: {
     *     // ... filter to delete one Topics
     *   }
     * })
     * 
     */
    delete<T extends TopicsDeleteArgs>(args: SelectSubset<T, TopicsDeleteArgs<ExtArgs>>): Prisma__TopicsClient<$Result.GetResult<Prisma.$TopicsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Topics.
     * @param {TopicsUpdateArgs} args - Arguments to update one Topics.
     * @example
     * // Update one Topics
     * const topics = await prisma.topics.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TopicsUpdateArgs>(args: SelectSubset<T, TopicsUpdateArgs<ExtArgs>>): Prisma__TopicsClient<$Result.GetResult<Prisma.$TopicsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Topics.
     * @param {TopicsDeleteManyArgs} args - Arguments to filter Topics to delete.
     * @example
     * // Delete a few Topics
     * const { count } = await prisma.topics.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TopicsDeleteManyArgs>(args?: SelectSubset<T, TopicsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Topics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopicsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Topics
     * const topics = await prisma.topics.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TopicsUpdateManyArgs>(args: SelectSubset<T, TopicsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Topics and returns the data updated in the database.
     * @param {TopicsUpdateManyAndReturnArgs} args - Arguments to update many Topics.
     * @example
     * // Update many Topics
     * const topics = await prisma.topics.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Topics and only return the `id`
     * const topicsWithIdOnly = await prisma.topics.updateManyAndReturn({
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
    updateManyAndReturn<T extends TopicsUpdateManyAndReturnArgs>(args: SelectSubset<T, TopicsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TopicsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Topics.
     * @param {TopicsUpsertArgs} args - Arguments to update or create a Topics.
     * @example
     * // Update or create a Topics
     * const topics = await prisma.topics.upsert({
     *   create: {
     *     // ... data to create a Topics
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Topics we want to update
     *   }
     * })
     */
    upsert<T extends TopicsUpsertArgs>(args: SelectSubset<T, TopicsUpsertArgs<ExtArgs>>): Prisma__TopicsClient<$Result.GetResult<Prisma.$TopicsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Topics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopicsCountArgs} args - Arguments to filter Topics to count.
     * @example
     * // Count the number of Topics
     * const count = await prisma.topics.count({
     *   where: {
     *     // ... the filter for the Topics we want to count
     *   }
     * })
    **/
    count<T extends TopicsCountArgs>(
      args?: Subset<T, TopicsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TopicsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Topics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopicsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TopicsAggregateArgs>(args: Subset<T, TopicsAggregateArgs>): Prisma.PrismaPromise<GetTopicsAggregateType<T>>

    /**
     * Group by Topics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopicsGroupByArgs} args - Group by arguments.
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
      T extends TopicsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TopicsGroupByArgs['orderBy'] }
        : { orderBy?: TopicsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TopicsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTopicsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Topics model
   */
  readonly fields: TopicsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Topics.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TopicsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    articles<T extends Topics$articlesArgs<ExtArgs> = {}>(args?: Subset<T, Topics$articlesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticleToTopicsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Topics model
   */
  interface TopicsFieldRefs {
    readonly id: FieldRef<"Topics", 'String'>
    readonly topicName: FieldRef<"Topics", 'String'>
    readonly createdAt: FieldRef<"Topics", 'DateTime'>
    readonly deletedAt: FieldRef<"Topics", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Topics findUnique
   */
  export type TopicsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topics
     */
    select?: TopicsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Topics
     */
    omit?: TopicsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicsInclude<ExtArgs> | null
    /**
     * Filter, which Topics to fetch.
     */
    where: TopicsWhereUniqueInput
  }

  /**
   * Topics findUniqueOrThrow
   */
  export type TopicsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topics
     */
    select?: TopicsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Topics
     */
    omit?: TopicsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicsInclude<ExtArgs> | null
    /**
     * Filter, which Topics to fetch.
     */
    where: TopicsWhereUniqueInput
  }

  /**
   * Topics findFirst
   */
  export type TopicsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topics
     */
    select?: TopicsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Topics
     */
    omit?: TopicsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicsInclude<ExtArgs> | null
    /**
     * Filter, which Topics to fetch.
     */
    where?: TopicsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Topics to fetch.
     */
    orderBy?: TopicsOrderByWithRelationInput | TopicsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Topics.
     */
    cursor?: TopicsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Topics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Topics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Topics.
     */
    distinct?: TopicsScalarFieldEnum | TopicsScalarFieldEnum[]
  }

  /**
   * Topics findFirstOrThrow
   */
  export type TopicsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topics
     */
    select?: TopicsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Topics
     */
    omit?: TopicsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicsInclude<ExtArgs> | null
    /**
     * Filter, which Topics to fetch.
     */
    where?: TopicsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Topics to fetch.
     */
    orderBy?: TopicsOrderByWithRelationInput | TopicsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Topics.
     */
    cursor?: TopicsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Topics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Topics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Topics.
     */
    distinct?: TopicsScalarFieldEnum | TopicsScalarFieldEnum[]
  }

  /**
   * Topics findMany
   */
  export type TopicsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topics
     */
    select?: TopicsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Topics
     */
    omit?: TopicsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicsInclude<ExtArgs> | null
    /**
     * Filter, which Topics to fetch.
     */
    where?: TopicsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Topics to fetch.
     */
    orderBy?: TopicsOrderByWithRelationInput | TopicsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Topics.
     */
    cursor?: TopicsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Topics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Topics.
     */
    skip?: number
    distinct?: TopicsScalarFieldEnum | TopicsScalarFieldEnum[]
  }

  /**
   * Topics create
   */
  export type TopicsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topics
     */
    select?: TopicsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Topics
     */
    omit?: TopicsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicsInclude<ExtArgs> | null
    /**
     * The data needed to create a Topics.
     */
    data: XOR<TopicsCreateInput, TopicsUncheckedCreateInput>
  }

  /**
   * Topics createMany
   */
  export type TopicsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Topics.
     */
    data: TopicsCreateManyInput | TopicsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Topics createManyAndReturn
   */
  export type TopicsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topics
     */
    select?: TopicsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Topics
     */
    omit?: TopicsOmit<ExtArgs> | null
    /**
     * The data used to create many Topics.
     */
    data: TopicsCreateManyInput | TopicsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Topics update
   */
  export type TopicsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topics
     */
    select?: TopicsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Topics
     */
    omit?: TopicsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicsInclude<ExtArgs> | null
    /**
     * The data needed to update a Topics.
     */
    data: XOR<TopicsUpdateInput, TopicsUncheckedUpdateInput>
    /**
     * Choose, which Topics to update.
     */
    where: TopicsWhereUniqueInput
  }

  /**
   * Topics updateMany
   */
  export type TopicsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Topics.
     */
    data: XOR<TopicsUpdateManyMutationInput, TopicsUncheckedUpdateManyInput>
    /**
     * Filter which Topics to update
     */
    where?: TopicsWhereInput
    /**
     * Limit how many Topics to update.
     */
    limit?: number
  }

  /**
   * Topics updateManyAndReturn
   */
  export type TopicsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topics
     */
    select?: TopicsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Topics
     */
    omit?: TopicsOmit<ExtArgs> | null
    /**
     * The data used to update Topics.
     */
    data: XOR<TopicsUpdateManyMutationInput, TopicsUncheckedUpdateManyInput>
    /**
     * Filter which Topics to update
     */
    where?: TopicsWhereInput
    /**
     * Limit how many Topics to update.
     */
    limit?: number
  }

  /**
   * Topics upsert
   */
  export type TopicsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topics
     */
    select?: TopicsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Topics
     */
    omit?: TopicsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicsInclude<ExtArgs> | null
    /**
     * The filter to search for the Topics to update in case it exists.
     */
    where: TopicsWhereUniqueInput
    /**
     * In case the Topics found by the `where` argument doesn't exist, create a new Topics with this data.
     */
    create: XOR<TopicsCreateInput, TopicsUncheckedCreateInput>
    /**
     * In case the Topics was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TopicsUpdateInput, TopicsUncheckedUpdateInput>
  }

  /**
   * Topics delete
   */
  export type TopicsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topics
     */
    select?: TopicsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Topics
     */
    omit?: TopicsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicsInclude<ExtArgs> | null
    /**
     * Filter which Topics to delete.
     */
    where: TopicsWhereUniqueInput
  }

  /**
   * Topics deleteMany
   */
  export type TopicsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Topics to delete
     */
    where?: TopicsWhereInput
    /**
     * Limit how many Topics to delete.
     */
    limit?: number
  }

  /**
   * Topics.articles
   */
  export type Topics$articlesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleToTopics
     */
    select?: ArticleToTopicsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleToTopics
     */
    omit?: ArticleToTopicsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleToTopicsInclude<ExtArgs> | null
    where?: ArticleToTopicsWhereInput
    orderBy?: ArticleToTopicsOrderByWithRelationInput | ArticleToTopicsOrderByWithRelationInput[]
    cursor?: ArticleToTopicsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ArticleToTopicsScalarFieldEnum | ArticleToTopicsScalarFieldEnum[]
  }

  /**
   * Topics without action
   */
  export type TopicsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topics
     */
    select?: TopicsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Topics
     */
    omit?: TopicsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicsInclude<ExtArgs> | null
  }


  /**
   * Model ArticleToTopics
   */

  export type AggregateArticleToTopics = {
    _count: ArticleToTopicsCountAggregateOutputType | null
    _min: ArticleToTopicsMinAggregateOutputType | null
    _max: ArticleToTopicsMaxAggregateOutputType | null
  }

  export type ArticleToTopicsMinAggregateOutputType = {
    id: string | null
    articleId: string | null
    topicId: string | null
    createdAt: Date | null
    deletedAt: Date | null
  }

  export type ArticleToTopicsMaxAggregateOutputType = {
    id: string | null
    articleId: string | null
    topicId: string | null
    createdAt: Date | null
    deletedAt: Date | null
  }

  export type ArticleToTopicsCountAggregateOutputType = {
    id: number
    articleId: number
    topicId: number
    createdAt: number
    deletedAt: number
    _all: number
  }


  export type ArticleToTopicsMinAggregateInputType = {
    id?: true
    articleId?: true
    topicId?: true
    createdAt?: true
    deletedAt?: true
  }

  export type ArticleToTopicsMaxAggregateInputType = {
    id?: true
    articleId?: true
    topicId?: true
    createdAt?: true
    deletedAt?: true
  }

  export type ArticleToTopicsCountAggregateInputType = {
    id?: true
    articleId?: true
    topicId?: true
    createdAt?: true
    deletedAt?: true
    _all?: true
  }

  export type ArticleToTopicsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ArticleToTopics to aggregate.
     */
    where?: ArticleToTopicsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArticleToTopics to fetch.
     */
    orderBy?: ArticleToTopicsOrderByWithRelationInput | ArticleToTopicsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ArticleToTopicsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArticleToTopics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArticleToTopics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ArticleToTopics
    **/
    _count?: true | ArticleToTopicsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ArticleToTopicsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ArticleToTopicsMaxAggregateInputType
  }

  export type GetArticleToTopicsAggregateType<T extends ArticleToTopicsAggregateArgs> = {
        [P in keyof T & keyof AggregateArticleToTopics]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArticleToTopics[P]>
      : GetScalarType<T[P], AggregateArticleToTopics[P]>
  }




  export type ArticleToTopicsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArticleToTopicsWhereInput
    orderBy?: ArticleToTopicsOrderByWithAggregationInput | ArticleToTopicsOrderByWithAggregationInput[]
    by: ArticleToTopicsScalarFieldEnum[] | ArticleToTopicsScalarFieldEnum
    having?: ArticleToTopicsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ArticleToTopicsCountAggregateInputType | true
    _min?: ArticleToTopicsMinAggregateInputType
    _max?: ArticleToTopicsMaxAggregateInputType
  }

  export type ArticleToTopicsGroupByOutputType = {
    id: string
    articleId: string
    topicId: string
    createdAt: Date
    deletedAt: Date | null
    _count: ArticleToTopicsCountAggregateOutputType | null
    _min: ArticleToTopicsMinAggregateOutputType | null
    _max: ArticleToTopicsMaxAggregateOutputType | null
  }

  type GetArticleToTopicsGroupByPayload<T extends ArticleToTopicsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ArticleToTopicsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ArticleToTopicsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ArticleToTopicsGroupByOutputType[P]>
            : GetScalarType<T[P], ArticleToTopicsGroupByOutputType[P]>
        }
      >
    >


  export type ArticleToTopicsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    articleId?: boolean
    topicId?: boolean
    createdAt?: boolean
    deletedAt?: boolean
    article?: boolean | ArticlesDefaultArgs<ExtArgs>
    topic?: boolean | TopicsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["articleToTopics"]>

  export type ArticleToTopicsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    articleId?: boolean
    topicId?: boolean
    createdAt?: boolean
    deletedAt?: boolean
    article?: boolean | ArticlesDefaultArgs<ExtArgs>
    topic?: boolean | TopicsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["articleToTopics"]>

  export type ArticleToTopicsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    articleId?: boolean
    topicId?: boolean
    createdAt?: boolean
    deletedAt?: boolean
    article?: boolean | ArticlesDefaultArgs<ExtArgs>
    topic?: boolean | TopicsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["articleToTopics"]>

  export type ArticleToTopicsSelectScalar = {
    id?: boolean
    articleId?: boolean
    topicId?: boolean
    createdAt?: boolean
    deletedAt?: boolean
  }

  export type ArticleToTopicsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "articleId" | "topicId" | "createdAt" | "deletedAt", ExtArgs["result"]["articleToTopics"]>
  export type ArticleToTopicsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    article?: boolean | ArticlesDefaultArgs<ExtArgs>
    topic?: boolean | TopicsDefaultArgs<ExtArgs>
  }
  export type ArticleToTopicsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    article?: boolean | ArticlesDefaultArgs<ExtArgs>
    topic?: boolean | TopicsDefaultArgs<ExtArgs>
  }
  export type ArticleToTopicsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    article?: boolean | ArticlesDefaultArgs<ExtArgs>
    topic?: boolean | TopicsDefaultArgs<ExtArgs>
  }

  export type $ArticleToTopicsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ArticleToTopics"
    objects: {
      article: Prisma.$ArticlesPayload<ExtArgs>
      topic: Prisma.$TopicsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      articleId: string
      topicId: string
      createdAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["articleToTopics"]>
    composites: {}
  }

  type ArticleToTopicsGetPayload<S extends boolean | null | undefined | ArticleToTopicsDefaultArgs> = $Result.GetResult<Prisma.$ArticleToTopicsPayload, S>

  type ArticleToTopicsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ArticleToTopicsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ArticleToTopicsCountAggregateInputType | true
    }

  export interface ArticleToTopicsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ArticleToTopics'], meta: { name: 'ArticleToTopics' } }
    /**
     * Find zero or one ArticleToTopics that matches the filter.
     * @param {ArticleToTopicsFindUniqueArgs} args - Arguments to find a ArticleToTopics
     * @example
     * // Get one ArticleToTopics
     * const articleToTopics = await prisma.articleToTopics.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ArticleToTopicsFindUniqueArgs>(args: SelectSubset<T, ArticleToTopicsFindUniqueArgs<ExtArgs>>): Prisma__ArticleToTopicsClient<$Result.GetResult<Prisma.$ArticleToTopicsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ArticleToTopics that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ArticleToTopicsFindUniqueOrThrowArgs} args - Arguments to find a ArticleToTopics
     * @example
     * // Get one ArticleToTopics
     * const articleToTopics = await prisma.articleToTopics.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ArticleToTopicsFindUniqueOrThrowArgs>(args: SelectSubset<T, ArticleToTopicsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ArticleToTopicsClient<$Result.GetResult<Prisma.$ArticleToTopicsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ArticleToTopics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleToTopicsFindFirstArgs} args - Arguments to find a ArticleToTopics
     * @example
     * // Get one ArticleToTopics
     * const articleToTopics = await prisma.articleToTopics.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ArticleToTopicsFindFirstArgs>(args?: SelectSubset<T, ArticleToTopicsFindFirstArgs<ExtArgs>>): Prisma__ArticleToTopicsClient<$Result.GetResult<Prisma.$ArticleToTopicsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ArticleToTopics that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleToTopicsFindFirstOrThrowArgs} args - Arguments to find a ArticleToTopics
     * @example
     * // Get one ArticleToTopics
     * const articleToTopics = await prisma.articleToTopics.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ArticleToTopicsFindFirstOrThrowArgs>(args?: SelectSubset<T, ArticleToTopicsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ArticleToTopicsClient<$Result.GetResult<Prisma.$ArticleToTopicsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ArticleToTopics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleToTopicsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ArticleToTopics
     * const articleToTopics = await prisma.articleToTopics.findMany()
     * 
     * // Get first 10 ArticleToTopics
     * const articleToTopics = await prisma.articleToTopics.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const articleToTopicsWithIdOnly = await prisma.articleToTopics.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ArticleToTopicsFindManyArgs>(args?: SelectSubset<T, ArticleToTopicsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticleToTopicsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ArticleToTopics.
     * @param {ArticleToTopicsCreateArgs} args - Arguments to create a ArticleToTopics.
     * @example
     * // Create one ArticleToTopics
     * const ArticleToTopics = await prisma.articleToTopics.create({
     *   data: {
     *     // ... data to create a ArticleToTopics
     *   }
     * })
     * 
     */
    create<T extends ArticleToTopicsCreateArgs>(args: SelectSubset<T, ArticleToTopicsCreateArgs<ExtArgs>>): Prisma__ArticleToTopicsClient<$Result.GetResult<Prisma.$ArticleToTopicsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ArticleToTopics.
     * @param {ArticleToTopicsCreateManyArgs} args - Arguments to create many ArticleToTopics.
     * @example
     * // Create many ArticleToTopics
     * const articleToTopics = await prisma.articleToTopics.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ArticleToTopicsCreateManyArgs>(args?: SelectSubset<T, ArticleToTopicsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ArticleToTopics and returns the data saved in the database.
     * @param {ArticleToTopicsCreateManyAndReturnArgs} args - Arguments to create many ArticleToTopics.
     * @example
     * // Create many ArticleToTopics
     * const articleToTopics = await prisma.articleToTopics.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ArticleToTopics and only return the `id`
     * const articleToTopicsWithIdOnly = await prisma.articleToTopics.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ArticleToTopicsCreateManyAndReturnArgs>(args?: SelectSubset<T, ArticleToTopicsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticleToTopicsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ArticleToTopics.
     * @param {ArticleToTopicsDeleteArgs} args - Arguments to delete one ArticleToTopics.
     * @example
     * // Delete one ArticleToTopics
     * const ArticleToTopics = await prisma.articleToTopics.delete({
     *   where: {
     *     // ... filter to delete one ArticleToTopics
     *   }
     * })
     * 
     */
    delete<T extends ArticleToTopicsDeleteArgs>(args: SelectSubset<T, ArticleToTopicsDeleteArgs<ExtArgs>>): Prisma__ArticleToTopicsClient<$Result.GetResult<Prisma.$ArticleToTopicsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ArticleToTopics.
     * @param {ArticleToTopicsUpdateArgs} args - Arguments to update one ArticleToTopics.
     * @example
     * // Update one ArticleToTopics
     * const articleToTopics = await prisma.articleToTopics.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ArticleToTopicsUpdateArgs>(args: SelectSubset<T, ArticleToTopicsUpdateArgs<ExtArgs>>): Prisma__ArticleToTopicsClient<$Result.GetResult<Prisma.$ArticleToTopicsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ArticleToTopics.
     * @param {ArticleToTopicsDeleteManyArgs} args - Arguments to filter ArticleToTopics to delete.
     * @example
     * // Delete a few ArticleToTopics
     * const { count } = await prisma.articleToTopics.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ArticleToTopicsDeleteManyArgs>(args?: SelectSubset<T, ArticleToTopicsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ArticleToTopics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleToTopicsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ArticleToTopics
     * const articleToTopics = await prisma.articleToTopics.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ArticleToTopicsUpdateManyArgs>(args: SelectSubset<T, ArticleToTopicsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ArticleToTopics and returns the data updated in the database.
     * @param {ArticleToTopicsUpdateManyAndReturnArgs} args - Arguments to update many ArticleToTopics.
     * @example
     * // Update many ArticleToTopics
     * const articleToTopics = await prisma.articleToTopics.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ArticleToTopics and only return the `id`
     * const articleToTopicsWithIdOnly = await prisma.articleToTopics.updateManyAndReturn({
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
    updateManyAndReturn<T extends ArticleToTopicsUpdateManyAndReturnArgs>(args: SelectSubset<T, ArticleToTopicsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticleToTopicsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ArticleToTopics.
     * @param {ArticleToTopicsUpsertArgs} args - Arguments to update or create a ArticleToTopics.
     * @example
     * // Update or create a ArticleToTopics
     * const articleToTopics = await prisma.articleToTopics.upsert({
     *   create: {
     *     // ... data to create a ArticleToTopics
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ArticleToTopics we want to update
     *   }
     * })
     */
    upsert<T extends ArticleToTopicsUpsertArgs>(args: SelectSubset<T, ArticleToTopicsUpsertArgs<ExtArgs>>): Prisma__ArticleToTopicsClient<$Result.GetResult<Prisma.$ArticleToTopicsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ArticleToTopics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleToTopicsCountArgs} args - Arguments to filter ArticleToTopics to count.
     * @example
     * // Count the number of ArticleToTopics
     * const count = await prisma.articleToTopics.count({
     *   where: {
     *     // ... the filter for the ArticleToTopics we want to count
     *   }
     * })
    **/
    count<T extends ArticleToTopicsCountArgs>(
      args?: Subset<T, ArticleToTopicsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ArticleToTopicsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ArticleToTopics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleToTopicsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ArticleToTopicsAggregateArgs>(args: Subset<T, ArticleToTopicsAggregateArgs>): Prisma.PrismaPromise<GetArticleToTopicsAggregateType<T>>

    /**
     * Group by ArticleToTopics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleToTopicsGroupByArgs} args - Group by arguments.
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
      T extends ArticleToTopicsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ArticleToTopicsGroupByArgs['orderBy'] }
        : { orderBy?: ArticleToTopicsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ArticleToTopicsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetArticleToTopicsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ArticleToTopics model
   */
  readonly fields: ArticleToTopicsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ArticleToTopics.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ArticleToTopicsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    article<T extends ArticlesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ArticlesDefaultArgs<ExtArgs>>): Prisma__ArticlesClient<$Result.GetResult<Prisma.$ArticlesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    topic<T extends TopicsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TopicsDefaultArgs<ExtArgs>>): Prisma__TopicsClient<$Result.GetResult<Prisma.$TopicsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ArticleToTopics model
   */
  interface ArticleToTopicsFieldRefs {
    readonly id: FieldRef<"ArticleToTopics", 'String'>
    readonly articleId: FieldRef<"ArticleToTopics", 'String'>
    readonly topicId: FieldRef<"ArticleToTopics", 'String'>
    readonly createdAt: FieldRef<"ArticleToTopics", 'DateTime'>
    readonly deletedAt: FieldRef<"ArticleToTopics", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ArticleToTopics findUnique
   */
  export type ArticleToTopicsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleToTopics
     */
    select?: ArticleToTopicsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleToTopics
     */
    omit?: ArticleToTopicsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleToTopicsInclude<ExtArgs> | null
    /**
     * Filter, which ArticleToTopics to fetch.
     */
    where: ArticleToTopicsWhereUniqueInput
  }

  /**
   * ArticleToTopics findUniqueOrThrow
   */
  export type ArticleToTopicsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleToTopics
     */
    select?: ArticleToTopicsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleToTopics
     */
    omit?: ArticleToTopicsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleToTopicsInclude<ExtArgs> | null
    /**
     * Filter, which ArticleToTopics to fetch.
     */
    where: ArticleToTopicsWhereUniqueInput
  }

  /**
   * ArticleToTopics findFirst
   */
  export type ArticleToTopicsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleToTopics
     */
    select?: ArticleToTopicsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleToTopics
     */
    omit?: ArticleToTopicsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleToTopicsInclude<ExtArgs> | null
    /**
     * Filter, which ArticleToTopics to fetch.
     */
    where?: ArticleToTopicsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArticleToTopics to fetch.
     */
    orderBy?: ArticleToTopicsOrderByWithRelationInput | ArticleToTopicsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ArticleToTopics.
     */
    cursor?: ArticleToTopicsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArticleToTopics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArticleToTopics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ArticleToTopics.
     */
    distinct?: ArticleToTopicsScalarFieldEnum | ArticleToTopicsScalarFieldEnum[]
  }

  /**
   * ArticleToTopics findFirstOrThrow
   */
  export type ArticleToTopicsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleToTopics
     */
    select?: ArticleToTopicsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleToTopics
     */
    omit?: ArticleToTopicsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleToTopicsInclude<ExtArgs> | null
    /**
     * Filter, which ArticleToTopics to fetch.
     */
    where?: ArticleToTopicsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArticleToTopics to fetch.
     */
    orderBy?: ArticleToTopicsOrderByWithRelationInput | ArticleToTopicsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ArticleToTopics.
     */
    cursor?: ArticleToTopicsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArticleToTopics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArticleToTopics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ArticleToTopics.
     */
    distinct?: ArticleToTopicsScalarFieldEnum | ArticleToTopicsScalarFieldEnum[]
  }

  /**
   * ArticleToTopics findMany
   */
  export type ArticleToTopicsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleToTopics
     */
    select?: ArticleToTopicsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleToTopics
     */
    omit?: ArticleToTopicsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleToTopicsInclude<ExtArgs> | null
    /**
     * Filter, which ArticleToTopics to fetch.
     */
    where?: ArticleToTopicsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArticleToTopics to fetch.
     */
    orderBy?: ArticleToTopicsOrderByWithRelationInput | ArticleToTopicsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ArticleToTopics.
     */
    cursor?: ArticleToTopicsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArticleToTopics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArticleToTopics.
     */
    skip?: number
    distinct?: ArticleToTopicsScalarFieldEnum | ArticleToTopicsScalarFieldEnum[]
  }

  /**
   * ArticleToTopics create
   */
  export type ArticleToTopicsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleToTopics
     */
    select?: ArticleToTopicsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleToTopics
     */
    omit?: ArticleToTopicsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleToTopicsInclude<ExtArgs> | null
    /**
     * The data needed to create a ArticleToTopics.
     */
    data: XOR<ArticleToTopicsCreateInput, ArticleToTopicsUncheckedCreateInput>
  }

  /**
   * ArticleToTopics createMany
   */
  export type ArticleToTopicsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ArticleToTopics.
     */
    data: ArticleToTopicsCreateManyInput | ArticleToTopicsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ArticleToTopics createManyAndReturn
   */
  export type ArticleToTopicsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleToTopics
     */
    select?: ArticleToTopicsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleToTopics
     */
    omit?: ArticleToTopicsOmit<ExtArgs> | null
    /**
     * The data used to create many ArticleToTopics.
     */
    data: ArticleToTopicsCreateManyInput | ArticleToTopicsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleToTopicsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ArticleToTopics update
   */
  export type ArticleToTopicsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleToTopics
     */
    select?: ArticleToTopicsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleToTopics
     */
    omit?: ArticleToTopicsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleToTopicsInclude<ExtArgs> | null
    /**
     * The data needed to update a ArticleToTopics.
     */
    data: XOR<ArticleToTopicsUpdateInput, ArticleToTopicsUncheckedUpdateInput>
    /**
     * Choose, which ArticleToTopics to update.
     */
    where: ArticleToTopicsWhereUniqueInput
  }

  /**
   * ArticleToTopics updateMany
   */
  export type ArticleToTopicsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ArticleToTopics.
     */
    data: XOR<ArticleToTopicsUpdateManyMutationInput, ArticleToTopicsUncheckedUpdateManyInput>
    /**
     * Filter which ArticleToTopics to update
     */
    where?: ArticleToTopicsWhereInput
    /**
     * Limit how many ArticleToTopics to update.
     */
    limit?: number
  }

  /**
   * ArticleToTopics updateManyAndReturn
   */
  export type ArticleToTopicsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleToTopics
     */
    select?: ArticleToTopicsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleToTopics
     */
    omit?: ArticleToTopicsOmit<ExtArgs> | null
    /**
     * The data used to update ArticleToTopics.
     */
    data: XOR<ArticleToTopicsUpdateManyMutationInput, ArticleToTopicsUncheckedUpdateManyInput>
    /**
     * Filter which ArticleToTopics to update
     */
    where?: ArticleToTopicsWhereInput
    /**
     * Limit how many ArticleToTopics to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleToTopicsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ArticleToTopics upsert
   */
  export type ArticleToTopicsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleToTopics
     */
    select?: ArticleToTopicsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleToTopics
     */
    omit?: ArticleToTopicsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleToTopicsInclude<ExtArgs> | null
    /**
     * The filter to search for the ArticleToTopics to update in case it exists.
     */
    where: ArticleToTopicsWhereUniqueInput
    /**
     * In case the ArticleToTopics found by the `where` argument doesn't exist, create a new ArticleToTopics with this data.
     */
    create: XOR<ArticleToTopicsCreateInput, ArticleToTopicsUncheckedCreateInput>
    /**
     * In case the ArticleToTopics was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ArticleToTopicsUpdateInput, ArticleToTopicsUncheckedUpdateInput>
  }

  /**
   * ArticleToTopics delete
   */
  export type ArticleToTopicsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleToTopics
     */
    select?: ArticleToTopicsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleToTopics
     */
    omit?: ArticleToTopicsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleToTopicsInclude<ExtArgs> | null
    /**
     * Filter which ArticleToTopics to delete.
     */
    where: ArticleToTopicsWhereUniqueInput
  }

  /**
   * ArticleToTopics deleteMany
   */
  export type ArticleToTopicsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ArticleToTopics to delete
     */
    where?: ArticleToTopicsWhereInput
    /**
     * Limit how many ArticleToTopics to delete.
     */
    limit?: number
  }

  /**
   * ArticleToTopics without action
   */
  export type ArticleToTopicsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleToTopics
     */
    select?: ArticleToTopicsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleToTopics
     */
    omit?: ArticleToTopicsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleToTopicsInclude<ExtArgs> | null
  }


  /**
   * Model Pageviews
   */

  export type AggregatePageviews = {
    _count: PageviewsCountAggregateOutputType | null
    _min: PageviewsMinAggregateOutputType | null
    _max: PageviewsMaxAggregateOutputType | null
  }

  export type PageviewsMinAggregateOutputType = {
    id: string | null
    articleId: string | null
    userId: string | null
    createdAt: Date | null
    deletedAt: Date | null
  }

  export type PageviewsMaxAggregateOutputType = {
    id: string | null
    articleId: string | null
    userId: string | null
    createdAt: Date | null
    deletedAt: Date | null
  }

  export type PageviewsCountAggregateOutputType = {
    id: number
    articleId: number
    userId: number
    createdAt: number
    deletedAt: number
    _all: number
  }


  export type PageviewsMinAggregateInputType = {
    id?: true
    articleId?: true
    userId?: true
    createdAt?: true
    deletedAt?: true
  }

  export type PageviewsMaxAggregateInputType = {
    id?: true
    articleId?: true
    userId?: true
    createdAt?: true
    deletedAt?: true
  }

  export type PageviewsCountAggregateInputType = {
    id?: true
    articleId?: true
    userId?: true
    createdAt?: true
    deletedAt?: true
    _all?: true
  }

  export type PageviewsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pageviews to aggregate.
     */
    where?: PageviewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pageviews to fetch.
     */
    orderBy?: PageviewsOrderByWithRelationInput | PageviewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PageviewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pageviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pageviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pageviews
    **/
    _count?: true | PageviewsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PageviewsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PageviewsMaxAggregateInputType
  }

  export type GetPageviewsAggregateType<T extends PageviewsAggregateArgs> = {
        [P in keyof T & keyof AggregatePageviews]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePageviews[P]>
      : GetScalarType<T[P], AggregatePageviews[P]>
  }




  export type PageviewsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PageviewsWhereInput
    orderBy?: PageviewsOrderByWithAggregationInput | PageviewsOrderByWithAggregationInput[]
    by: PageviewsScalarFieldEnum[] | PageviewsScalarFieldEnum
    having?: PageviewsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PageviewsCountAggregateInputType | true
    _min?: PageviewsMinAggregateInputType
    _max?: PageviewsMaxAggregateInputType
  }

  export type PageviewsGroupByOutputType = {
    id: string
    articleId: string | null
    userId: string
    createdAt: Date
    deletedAt: Date | null
    _count: PageviewsCountAggregateOutputType | null
    _min: PageviewsMinAggregateOutputType | null
    _max: PageviewsMaxAggregateOutputType | null
  }

  type GetPageviewsGroupByPayload<T extends PageviewsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PageviewsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PageviewsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PageviewsGroupByOutputType[P]>
            : GetScalarType<T[P], PageviewsGroupByOutputType[P]>
        }
      >
    >


  export type PageviewsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    articleId?: boolean
    userId?: boolean
    createdAt?: boolean
    deletedAt?: boolean
    article?: boolean | Pageviews$articleArgs<ExtArgs>
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pageviews"]>

  export type PageviewsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    articleId?: boolean
    userId?: boolean
    createdAt?: boolean
    deletedAt?: boolean
    article?: boolean | Pageviews$articleArgs<ExtArgs>
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pageviews"]>

  export type PageviewsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    articleId?: boolean
    userId?: boolean
    createdAt?: boolean
    deletedAt?: boolean
    article?: boolean | Pageviews$articleArgs<ExtArgs>
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pageviews"]>

  export type PageviewsSelectScalar = {
    id?: boolean
    articleId?: boolean
    userId?: boolean
    createdAt?: boolean
    deletedAt?: boolean
  }

  export type PageviewsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "articleId" | "userId" | "createdAt" | "deletedAt", ExtArgs["result"]["pageviews"]>
  export type PageviewsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    article?: boolean | Pageviews$articleArgs<ExtArgs>
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type PageviewsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    article?: boolean | Pageviews$articleArgs<ExtArgs>
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type PageviewsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    article?: boolean | Pageviews$articleArgs<ExtArgs>
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }

  export type $PageviewsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Pageviews"
    objects: {
      article: Prisma.$ArticlesPayload<ExtArgs> | null
      user: Prisma.$UsersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      articleId: string | null
      userId: string
      createdAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["pageviews"]>
    composites: {}
  }

  type PageviewsGetPayload<S extends boolean | null | undefined | PageviewsDefaultArgs> = $Result.GetResult<Prisma.$PageviewsPayload, S>

  type PageviewsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PageviewsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PageviewsCountAggregateInputType | true
    }

  export interface PageviewsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Pageviews'], meta: { name: 'Pageviews' } }
    /**
     * Find zero or one Pageviews that matches the filter.
     * @param {PageviewsFindUniqueArgs} args - Arguments to find a Pageviews
     * @example
     * // Get one Pageviews
     * const pageviews = await prisma.pageviews.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PageviewsFindUniqueArgs>(args: SelectSubset<T, PageviewsFindUniqueArgs<ExtArgs>>): Prisma__PageviewsClient<$Result.GetResult<Prisma.$PageviewsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pageviews that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PageviewsFindUniqueOrThrowArgs} args - Arguments to find a Pageviews
     * @example
     * // Get one Pageviews
     * const pageviews = await prisma.pageviews.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PageviewsFindUniqueOrThrowArgs>(args: SelectSubset<T, PageviewsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PageviewsClient<$Result.GetResult<Prisma.$PageviewsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pageviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageviewsFindFirstArgs} args - Arguments to find a Pageviews
     * @example
     * // Get one Pageviews
     * const pageviews = await prisma.pageviews.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PageviewsFindFirstArgs>(args?: SelectSubset<T, PageviewsFindFirstArgs<ExtArgs>>): Prisma__PageviewsClient<$Result.GetResult<Prisma.$PageviewsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pageviews that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageviewsFindFirstOrThrowArgs} args - Arguments to find a Pageviews
     * @example
     * // Get one Pageviews
     * const pageviews = await prisma.pageviews.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PageviewsFindFirstOrThrowArgs>(args?: SelectSubset<T, PageviewsFindFirstOrThrowArgs<ExtArgs>>): Prisma__PageviewsClient<$Result.GetResult<Prisma.$PageviewsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pageviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageviewsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pageviews
     * const pageviews = await prisma.pageviews.findMany()
     * 
     * // Get first 10 Pageviews
     * const pageviews = await prisma.pageviews.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pageviewsWithIdOnly = await prisma.pageviews.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PageviewsFindManyArgs>(args?: SelectSubset<T, PageviewsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PageviewsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pageviews.
     * @param {PageviewsCreateArgs} args - Arguments to create a Pageviews.
     * @example
     * // Create one Pageviews
     * const Pageviews = await prisma.pageviews.create({
     *   data: {
     *     // ... data to create a Pageviews
     *   }
     * })
     * 
     */
    create<T extends PageviewsCreateArgs>(args: SelectSubset<T, PageviewsCreateArgs<ExtArgs>>): Prisma__PageviewsClient<$Result.GetResult<Prisma.$PageviewsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pageviews.
     * @param {PageviewsCreateManyArgs} args - Arguments to create many Pageviews.
     * @example
     * // Create many Pageviews
     * const pageviews = await prisma.pageviews.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PageviewsCreateManyArgs>(args?: SelectSubset<T, PageviewsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pageviews and returns the data saved in the database.
     * @param {PageviewsCreateManyAndReturnArgs} args - Arguments to create many Pageviews.
     * @example
     * // Create many Pageviews
     * const pageviews = await prisma.pageviews.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pageviews and only return the `id`
     * const pageviewsWithIdOnly = await prisma.pageviews.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PageviewsCreateManyAndReturnArgs>(args?: SelectSubset<T, PageviewsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PageviewsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Pageviews.
     * @param {PageviewsDeleteArgs} args - Arguments to delete one Pageviews.
     * @example
     * // Delete one Pageviews
     * const Pageviews = await prisma.pageviews.delete({
     *   where: {
     *     // ... filter to delete one Pageviews
     *   }
     * })
     * 
     */
    delete<T extends PageviewsDeleteArgs>(args: SelectSubset<T, PageviewsDeleteArgs<ExtArgs>>): Prisma__PageviewsClient<$Result.GetResult<Prisma.$PageviewsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pageviews.
     * @param {PageviewsUpdateArgs} args - Arguments to update one Pageviews.
     * @example
     * // Update one Pageviews
     * const pageviews = await prisma.pageviews.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PageviewsUpdateArgs>(args: SelectSubset<T, PageviewsUpdateArgs<ExtArgs>>): Prisma__PageviewsClient<$Result.GetResult<Prisma.$PageviewsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pageviews.
     * @param {PageviewsDeleteManyArgs} args - Arguments to filter Pageviews to delete.
     * @example
     * // Delete a few Pageviews
     * const { count } = await prisma.pageviews.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PageviewsDeleteManyArgs>(args?: SelectSubset<T, PageviewsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pageviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageviewsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pageviews
     * const pageviews = await prisma.pageviews.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PageviewsUpdateManyArgs>(args: SelectSubset<T, PageviewsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pageviews and returns the data updated in the database.
     * @param {PageviewsUpdateManyAndReturnArgs} args - Arguments to update many Pageviews.
     * @example
     * // Update many Pageviews
     * const pageviews = await prisma.pageviews.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pageviews and only return the `id`
     * const pageviewsWithIdOnly = await prisma.pageviews.updateManyAndReturn({
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
    updateManyAndReturn<T extends PageviewsUpdateManyAndReturnArgs>(args: SelectSubset<T, PageviewsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PageviewsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Pageviews.
     * @param {PageviewsUpsertArgs} args - Arguments to update or create a Pageviews.
     * @example
     * // Update or create a Pageviews
     * const pageviews = await prisma.pageviews.upsert({
     *   create: {
     *     // ... data to create a Pageviews
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pageviews we want to update
     *   }
     * })
     */
    upsert<T extends PageviewsUpsertArgs>(args: SelectSubset<T, PageviewsUpsertArgs<ExtArgs>>): Prisma__PageviewsClient<$Result.GetResult<Prisma.$PageviewsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pageviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageviewsCountArgs} args - Arguments to filter Pageviews to count.
     * @example
     * // Count the number of Pageviews
     * const count = await prisma.pageviews.count({
     *   where: {
     *     // ... the filter for the Pageviews we want to count
     *   }
     * })
    **/
    count<T extends PageviewsCountArgs>(
      args?: Subset<T, PageviewsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PageviewsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pageviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageviewsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PageviewsAggregateArgs>(args: Subset<T, PageviewsAggregateArgs>): Prisma.PrismaPromise<GetPageviewsAggregateType<T>>

    /**
     * Group by Pageviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageviewsGroupByArgs} args - Group by arguments.
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
      T extends PageviewsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PageviewsGroupByArgs['orderBy'] }
        : { orderBy?: PageviewsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PageviewsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPageviewsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Pageviews model
   */
  readonly fields: PageviewsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Pageviews.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PageviewsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    article<T extends Pageviews$articleArgs<ExtArgs> = {}>(args?: Subset<T, Pageviews$articleArgs<ExtArgs>>): Prisma__ArticlesClient<$Result.GetResult<Prisma.$ArticlesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    user<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Pageviews model
   */
  interface PageviewsFieldRefs {
    readonly id: FieldRef<"Pageviews", 'String'>
    readonly articleId: FieldRef<"Pageviews", 'String'>
    readonly userId: FieldRef<"Pageviews", 'String'>
    readonly createdAt: FieldRef<"Pageviews", 'DateTime'>
    readonly deletedAt: FieldRef<"Pageviews", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Pageviews findUnique
   */
  export type PageviewsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pageviews
     */
    select?: PageviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pageviews
     */
    omit?: PageviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageviewsInclude<ExtArgs> | null
    /**
     * Filter, which Pageviews to fetch.
     */
    where: PageviewsWhereUniqueInput
  }

  /**
   * Pageviews findUniqueOrThrow
   */
  export type PageviewsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pageviews
     */
    select?: PageviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pageviews
     */
    omit?: PageviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageviewsInclude<ExtArgs> | null
    /**
     * Filter, which Pageviews to fetch.
     */
    where: PageviewsWhereUniqueInput
  }

  /**
   * Pageviews findFirst
   */
  export type PageviewsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pageviews
     */
    select?: PageviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pageviews
     */
    omit?: PageviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageviewsInclude<ExtArgs> | null
    /**
     * Filter, which Pageviews to fetch.
     */
    where?: PageviewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pageviews to fetch.
     */
    orderBy?: PageviewsOrderByWithRelationInput | PageviewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pageviews.
     */
    cursor?: PageviewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pageviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pageviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pageviews.
     */
    distinct?: PageviewsScalarFieldEnum | PageviewsScalarFieldEnum[]
  }

  /**
   * Pageviews findFirstOrThrow
   */
  export type PageviewsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pageviews
     */
    select?: PageviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pageviews
     */
    omit?: PageviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageviewsInclude<ExtArgs> | null
    /**
     * Filter, which Pageviews to fetch.
     */
    where?: PageviewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pageviews to fetch.
     */
    orderBy?: PageviewsOrderByWithRelationInput | PageviewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pageviews.
     */
    cursor?: PageviewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pageviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pageviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pageviews.
     */
    distinct?: PageviewsScalarFieldEnum | PageviewsScalarFieldEnum[]
  }

  /**
   * Pageviews findMany
   */
  export type PageviewsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pageviews
     */
    select?: PageviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pageviews
     */
    omit?: PageviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageviewsInclude<ExtArgs> | null
    /**
     * Filter, which Pageviews to fetch.
     */
    where?: PageviewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pageviews to fetch.
     */
    orderBy?: PageviewsOrderByWithRelationInput | PageviewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pageviews.
     */
    cursor?: PageviewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pageviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pageviews.
     */
    skip?: number
    distinct?: PageviewsScalarFieldEnum | PageviewsScalarFieldEnum[]
  }

  /**
   * Pageviews create
   */
  export type PageviewsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pageviews
     */
    select?: PageviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pageviews
     */
    omit?: PageviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageviewsInclude<ExtArgs> | null
    /**
     * The data needed to create a Pageviews.
     */
    data: XOR<PageviewsCreateInput, PageviewsUncheckedCreateInput>
  }

  /**
   * Pageviews createMany
   */
  export type PageviewsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pageviews.
     */
    data: PageviewsCreateManyInput | PageviewsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Pageviews createManyAndReturn
   */
  export type PageviewsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pageviews
     */
    select?: PageviewsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pageviews
     */
    omit?: PageviewsOmit<ExtArgs> | null
    /**
     * The data used to create many Pageviews.
     */
    data: PageviewsCreateManyInput | PageviewsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageviewsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Pageviews update
   */
  export type PageviewsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pageviews
     */
    select?: PageviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pageviews
     */
    omit?: PageviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageviewsInclude<ExtArgs> | null
    /**
     * The data needed to update a Pageviews.
     */
    data: XOR<PageviewsUpdateInput, PageviewsUncheckedUpdateInput>
    /**
     * Choose, which Pageviews to update.
     */
    where: PageviewsWhereUniqueInput
  }

  /**
   * Pageviews updateMany
   */
  export type PageviewsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pageviews.
     */
    data: XOR<PageviewsUpdateManyMutationInput, PageviewsUncheckedUpdateManyInput>
    /**
     * Filter which Pageviews to update
     */
    where?: PageviewsWhereInput
    /**
     * Limit how many Pageviews to update.
     */
    limit?: number
  }

  /**
   * Pageviews updateManyAndReturn
   */
  export type PageviewsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pageviews
     */
    select?: PageviewsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pageviews
     */
    omit?: PageviewsOmit<ExtArgs> | null
    /**
     * The data used to update Pageviews.
     */
    data: XOR<PageviewsUpdateManyMutationInput, PageviewsUncheckedUpdateManyInput>
    /**
     * Filter which Pageviews to update
     */
    where?: PageviewsWhereInput
    /**
     * Limit how many Pageviews to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageviewsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Pageviews upsert
   */
  export type PageviewsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pageviews
     */
    select?: PageviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pageviews
     */
    omit?: PageviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageviewsInclude<ExtArgs> | null
    /**
     * The filter to search for the Pageviews to update in case it exists.
     */
    where: PageviewsWhereUniqueInput
    /**
     * In case the Pageviews found by the `where` argument doesn't exist, create a new Pageviews with this data.
     */
    create: XOR<PageviewsCreateInput, PageviewsUncheckedCreateInput>
    /**
     * In case the Pageviews was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PageviewsUpdateInput, PageviewsUncheckedUpdateInput>
  }

  /**
   * Pageviews delete
   */
  export type PageviewsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pageviews
     */
    select?: PageviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pageviews
     */
    omit?: PageviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageviewsInclude<ExtArgs> | null
    /**
     * Filter which Pageviews to delete.
     */
    where: PageviewsWhereUniqueInput
  }

  /**
   * Pageviews deleteMany
   */
  export type PageviewsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pageviews to delete
     */
    where?: PageviewsWhereInput
    /**
     * Limit how many Pageviews to delete.
     */
    limit?: number
  }

  /**
   * Pageviews.article
   */
  export type Pageviews$articleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Articles
     */
    select?: ArticlesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Articles
     */
    omit?: ArticlesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticlesInclude<ExtArgs> | null
    where?: ArticlesWhereInput
  }

  /**
   * Pageviews without action
   */
  export type PageviewsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pageviews
     */
    select?: PageviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pageviews
     */
    omit?: PageviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageviewsInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UsersScalarFieldEnum: {
    id: 'id',
    fullName: 'fullName',
    registeredAt: 'registeredAt',
    deletedAt: 'deletedAt'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const AuthorsScalarFieldEnum: {
    id: 'id',
    authorId: 'authorId',
    password: 'password',
    fullName: 'fullName',
    registeredAt: 'registeredAt',
    deletedAt: 'deletedAt'
  };

  export type AuthorsScalarFieldEnum = (typeof AuthorsScalarFieldEnum)[keyof typeof AuthorsScalarFieldEnum]


  export const SessionsScalarFieldEnum: {
    id: 'id',
    authorId: 'authorId',
    password: 'password',
    loggedInAt: 'loggedInAt',
    loggedOutAdt: 'loggedOutAdt'
  };

  export type SessionsScalarFieldEnum = (typeof SessionsScalarFieldEnum)[keyof typeof SessionsScalarFieldEnum]


  export const ArticlesScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    articleMarkdown: 'articleMarkdown',
    imageUrl: 'imageUrl',
    authorId: 'authorId',
    createdAt: 'createdAt',
    deletedAt: 'deletedAt'
  };

  export type ArticlesScalarFieldEnum = (typeof ArticlesScalarFieldEnum)[keyof typeof ArticlesScalarFieldEnum]


  export const ReactionsScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    articleId: 'articleId',
    reactionText: 'reactionText',
    createdAt: 'createdAt',
    deletedAt: 'deletedAt'
  };

  export type ReactionsScalarFieldEnum = (typeof ReactionsScalarFieldEnum)[keyof typeof ReactionsScalarFieldEnum]


  export const StarsScalarFieldEnum: {
    id: 'id',
    articleId: 'articleId',
    userId: 'userId',
    createdAt: 'createdAt',
    deletedAt: 'deletedAt'
  };

  export type StarsScalarFieldEnum = (typeof StarsScalarFieldEnum)[keyof typeof StarsScalarFieldEnum]


  export const TopicsScalarFieldEnum: {
    id: 'id',
    topicName: 'topicName',
    createdAt: 'createdAt',
    deletedAt: 'deletedAt'
  };

  export type TopicsScalarFieldEnum = (typeof TopicsScalarFieldEnum)[keyof typeof TopicsScalarFieldEnum]


  export const ArticleToTopicsScalarFieldEnum: {
    id: 'id',
    articleId: 'articleId',
    topicId: 'topicId',
    createdAt: 'createdAt',
    deletedAt: 'deletedAt'
  };

  export type ArticleToTopicsScalarFieldEnum = (typeof ArticleToTopicsScalarFieldEnum)[keyof typeof ArticleToTopicsScalarFieldEnum]


  export const PageviewsScalarFieldEnum: {
    id: 'id',
    articleId: 'articleId',
    userId: 'userId',
    createdAt: 'createdAt',
    deletedAt: 'deletedAt'
  };

  export type PageviewsScalarFieldEnum = (typeof PageviewsScalarFieldEnum)[keyof typeof PageviewsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


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
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UsersWhereInput = {
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    id?: StringFilter<"Users"> | string
    fullName?: StringFilter<"Users"> | string
    registeredAt?: DateTimeFilter<"Users"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Users"> | Date | string | null
    reaction?: ReactionsListRelationFilter
    stars?: StarsListRelationFilter
    pageviews?: PageviewsListRelationFilter
  }

  export type UsersOrderByWithRelationInput = {
    id?: SortOrder
    fullName?: SortOrder
    registeredAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    reaction?: ReactionsOrderByRelationAggregateInput
    stars?: StarsOrderByRelationAggregateInput
    pageviews?: PageviewsOrderByRelationAggregateInput
  }

  export type UsersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    fullName?: string
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    registeredAt?: DateTimeFilter<"Users"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Users"> | Date | string | null
    reaction?: ReactionsListRelationFilter
    stars?: StarsListRelationFilter
    pageviews?: PageviewsListRelationFilter
  }, "id" | "fullName">

  export type UsersOrderByWithAggregationInput = {
    id?: SortOrder
    fullName?: SortOrder
    registeredAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: UsersCountOrderByAggregateInput
    _max?: UsersMaxOrderByAggregateInput
    _min?: UsersMinOrderByAggregateInput
  }

  export type UsersScalarWhereWithAggregatesInput = {
    AND?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    OR?: UsersScalarWhereWithAggregatesInput[]
    NOT?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Users"> | string
    fullName?: StringWithAggregatesFilter<"Users"> | string
    registeredAt?: DateTimeWithAggregatesFilter<"Users"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Users"> | Date | string | null
  }

  export type AuthorsWhereInput = {
    AND?: AuthorsWhereInput | AuthorsWhereInput[]
    OR?: AuthorsWhereInput[]
    NOT?: AuthorsWhereInput | AuthorsWhereInput[]
    id?: StringFilter<"Authors"> | string
    authorId?: StringFilter<"Authors"> | string
    password?: StringFilter<"Authors"> | string
    fullName?: StringFilter<"Authors"> | string
    registeredAt?: DateTimeFilter<"Authors"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Authors"> | Date | string | null
    articles?: ArticlesListRelationFilter
    sessions?: SessionsListRelationFilter
  }

  export type AuthorsOrderByWithRelationInput = {
    id?: SortOrder
    authorId?: SortOrder
    password?: SortOrder
    fullName?: SortOrder
    registeredAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    articles?: ArticlesOrderByRelationAggregateInput
    sessions?: SessionsOrderByRelationAggregateInput
  }

  export type AuthorsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    authorId?: string
    AND?: AuthorsWhereInput | AuthorsWhereInput[]
    OR?: AuthorsWhereInput[]
    NOT?: AuthorsWhereInput | AuthorsWhereInput[]
    password?: StringFilter<"Authors"> | string
    fullName?: StringFilter<"Authors"> | string
    registeredAt?: DateTimeFilter<"Authors"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Authors"> | Date | string | null
    articles?: ArticlesListRelationFilter
    sessions?: SessionsListRelationFilter
  }, "id" | "authorId">

  export type AuthorsOrderByWithAggregationInput = {
    id?: SortOrder
    authorId?: SortOrder
    password?: SortOrder
    fullName?: SortOrder
    registeredAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: AuthorsCountOrderByAggregateInput
    _max?: AuthorsMaxOrderByAggregateInput
    _min?: AuthorsMinOrderByAggregateInput
  }

  export type AuthorsScalarWhereWithAggregatesInput = {
    AND?: AuthorsScalarWhereWithAggregatesInput | AuthorsScalarWhereWithAggregatesInput[]
    OR?: AuthorsScalarWhereWithAggregatesInput[]
    NOT?: AuthorsScalarWhereWithAggregatesInput | AuthorsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Authors"> | string
    authorId?: StringWithAggregatesFilter<"Authors"> | string
    password?: StringWithAggregatesFilter<"Authors"> | string
    fullName?: StringWithAggregatesFilter<"Authors"> | string
    registeredAt?: DateTimeWithAggregatesFilter<"Authors"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Authors"> | Date | string | null
  }

  export type SessionsWhereInput = {
    AND?: SessionsWhereInput | SessionsWhereInput[]
    OR?: SessionsWhereInput[]
    NOT?: SessionsWhereInput | SessionsWhereInput[]
    id?: StringFilter<"Sessions"> | string
    authorId?: StringFilter<"Sessions"> | string
    password?: StringFilter<"Sessions"> | string
    loggedInAt?: DateTimeFilter<"Sessions"> | Date | string
    loggedOutAdt?: DateTimeNullableFilter<"Sessions"> | Date | string | null
    author?: XOR<AuthorsScalarRelationFilter, AuthorsWhereInput>
  }

  export type SessionsOrderByWithRelationInput = {
    id?: SortOrder
    authorId?: SortOrder
    password?: SortOrder
    loggedInAt?: SortOrder
    loggedOutAdt?: SortOrderInput | SortOrder
    author?: AuthorsOrderByWithRelationInput
  }

  export type SessionsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SessionsWhereInput | SessionsWhereInput[]
    OR?: SessionsWhereInput[]
    NOT?: SessionsWhereInput | SessionsWhereInput[]
    authorId?: StringFilter<"Sessions"> | string
    password?: StringFilter<"Sessions"> | string
    loggedInAt?: DateTimeFilter<"Sessions"> | Date | string
    loggedOutAdt?: DateTimeNullableFilter<"Sessions"> | Date | string | null
    author?: XOR<AuthorsScalarRelationFilter, AuthorsWhereInput>
  }, "id">

  export type SessionsOrderByWithAggregationInput = {
    id?: SortOrder
    authorId?: SortOrder
    password?: SortOrder
    loggedInAt?: SortOrder
    loggedOutAdt?: SortOrderInput | SortOrder
    _count?: SessionsCountOrderByAggregateInput
    _max?: SessionsMaxOrderByAggregateInput
    _min?: SessionsMinOrderByAggregateInput
  }

  export type SessionsScalarWhereWithAggregatesInput = {
    AND?: SessionsScalarWhereWithAggregatesInput | SessionsScalarWhereWithAggregatesInput[]
    OR?: SessionsScalarWhereWithAggregatesInput[]
    NOT?: SessionsScalarWhereWithAggregatesInput | SessionsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Sessions"> | string
    authorId?: StringWithAggregatesFilter<"Sessions"> | string
    password?: StringWithAggregatesFilter<"Sessions"> | string
    loggedInAt?: DateTimeWithAggregatesFilter<"Sessions"> | Date | string
    loggedOutAdt?: DateTimeNullableWithAggregatesFilter<"Sessions"> | Date | string | null
  }

  export type ArticlesWhereInput = {
    AND?: ArticlesWhereInput | ArticlesWhereInput[]
    OR?: ArticlesWhereInput[]
    NOT?: ArticlesWhereInput | ArticlesWhereInput[]
    id?: StringFilter<"Articles"> | string
    title?: StringFilter<"Articles"> | string
    description?: StringFilter<"Articles"> | string
    articleMarkdown?: StringFilter<"Articles"> | string
    imageUrl?: StringNullableFilter<"Articles"> | string | null
    authorId?: StringFilter<"Articles"> | string
    createdAt?: DateTimeFilter<"Articles"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Articles"> | Date | string | null
    author?: XOR<AuthorsScalarRelationFilter, AuthorsWhereInput>
    stars?: StarsListRelationFilter
    reactions?: ReactionsListRelationFilter
    topics?: ArticleToTopicsListRelationFilter
    pageviews?: PageviewsListRelationFilter
  }

  export type ArticlesOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    articleMarkdown?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    authorId?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    author?: AuthorsOrderByWithRelationInput
    stars?: StarsOrderByRelationAggregateInput
    reactions?: ReactionsOrderByRelationAggregateInput
    topics?: ArticleToTopicsOrderByRelationAggregateInput
    pageviews?: PageviewsOrderByRelationAggregateInput
  }

  export type ArticlesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ArticlesWhereInput | ArticlesWhereInput[]
    OR?: ArticlesWhereInput[]
    NOT?: ArticlesWhereInput | ArticlesWhereInput[]
    title?: StringFilter<"Articles"> | string
    description?: StringFilter<"Articles"> | string
    articleMarkdown?: StringFilter<"Articles"> | string
    imageUrl?: StringNullableFilter<"Articles"> | string | null
    authorId?: StringFilter<"Articles"> | string
    createdAt?: DateTimeFilter<"Articles"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Articles"> | Date | string | null
    author?: XOR<AuthorsScalarRelationFilter, AuthorsWhereInput>
    stars?: StarsListRelationFilter
    reactions?: ReactionsListRelationFilter
    topics?: ArticleToTopicsListRelationFilter
    pageviews?: PageviewsListRelationFilter
  }, "id">

  export type ArticlesOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    articleMarkdown?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    authorId?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: ArticlesCountOrderByAggregateInput
    _max?: ArticlesMaxOrderByAggregateInput
    _min?: ArticlesMinOrderByAggregateInput
  }

  export type ArticlesScalarWhereWithAggregatesInput = {
    AND?: ArticlesScalarWhereWithAggregatesInput | ArticlesScalarWhereWithAggregatesInput[]
    OR?: ArticlesScalarWhereWithAggregatesInput[]
    NOT?: ArticlesScalarWhereWithAggregatesInput | ArticlesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Articles"> | string
    title?: StringWithAggregatesFilter<"Articles"> | string
    description?: StringWithAggregatesFilter<"Articles"> | string
    articleMarkdown?: StringWithAggregatesFilter<"Articles"> | string
    imageUrl?: StringNullableWithAggregatesFilter<"Articles"> | string | null
    authorId?: StringWithAggregatesFilter<"Articles"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Articles"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Articles"> | Date | string | null
  }

  export type ReactionsWhereInput = {
    AND?: ReactionsWhereInput | ReactionsWhereInput[]
    OR?: ReactionsWhereInput[]
    NOT?: ReactionsWhereInput | ReactionsWhereInput[]
    id?: StringFilter<"Reactions"> | string
    userId?: StringFilter<"Reactions"> | string
    articleId?: StringFilter<"Reactions"> | string
    reactionText?: StringFilter<"Reactions"> | string
    createdAt?: DateTimeFilter<"Reactions"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Reactions"> | Date | string | null
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    article?: XOR<ArticlesScalarRelationFilter, ArticlesWhereInput>
  }

  export type ReactionsOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    articleId?: SortOrder
    reactionText?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    user?: UsersOrderByWithRelationInput
    article?: ArticlesOrderByWithRelationInput
  }

  export type ReactionsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ReactionsWhereInput | ReactionsWhereInput[]
    OR?: ReactionsWhereInput[]
    NOT?: ReactionsWhereInput | ReactionsWhereInput[]
    userId?: StringFilter<"Reactions"> | string
    articleId?: StringFilter<"Reactions"> | string
    reactionText?: StringFilter<"Reactions"> | string
    createdAt?: DateTimeFilter<"Reactions"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Reactions"> | Date | string | null
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    article?: XOR<ArticlesScalarRelationFilter, ArticlesWhereInput>
  }, "id">

  export type ReactionsOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    articleId?: SortOrder
    reactionText?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: ReactionsCountOrderByAggregateInput
    _max?: ReactionsMaxOrderByAggregateInput
    _min?: ReactionsMinOrderByAggregateInput
  }

  export type ReactionsScalarWhereWithAggregatesInput = {
    AND?: ReactionsScalarWhereWithAggregatesInput | ReactionsScalarWhereWithAggregatesInput[]
    OR?: ReactionsScalarWhereWithAggregatesInput[]
    NOT?: ReactionsScalarWhereWithAggregatesInput | ReactionsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Reactions"> | string
    userId?: StringWithAggregatesFilter<"Reactions"> | string
    articleId?: StringWithAggregatesFilter<"Reactions"> | string
    reactionText?: StringWithAggregatesFilter<"Reactions"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Reactions"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Reactions"> | Date | string | null
  }

  export type StarsWhereInput = {
    AND?: StarsWhereInput | StarsWhereInput[]
    OR?: StarsWhereInput[]
    NOT?: StarsWhereInput | StarsWhereInput[]
    id?: StringFilter<"Stars"> | string
    articleId?: StringNullableFilter<"Stars"> | string | null
    userId?: StringFilter<"Stars"> | string
    createdAt?: DateTimeFilter<"Stars"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Stars"> | Date | string | null
    article?: XOR<ArticlesNullableScalarRelationFilter, ArticlesWhereInput> | null
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }

  export type StarsOrderByWithRelationInput = {
    id?: SortOrder
    articleId?: SortOrderInput | SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    article?: ArticlesOrderByWithRelationInput
    user?: UsersOrderByWithRelationInput
  }

  export type StarsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: StarsWhereInput | StarsWhereInput[]
    OR?: StarsWhereInput[]
    NOT?: StarsWhereInput | StarsWhereInput[]
    articleId?: StringNullableFilter<"Stars"> | string | null
    userId?: StringFilter<"Stars"> | string
    createdAt?: DateTimeFilter<"Stars"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Stars"> | Date | string | null
    article?: XOR<ArticlesNullableScalarRelationFilter, ArticlesWhereInput> | null
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }, "id">

  export type StarsOrderByWithAggregationInput = {
    id?: SortOrder
    articleId?: SortOrderInput | SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: StarsCountOrderByAggregateInput
    _max?: StarsMaxOrderByAggregateInput
    _min?: StarsMinOrderByAggregateInput
  }

  export type StarsScalarWhereWithAggregatesInput = {
    AND?: StarsScalarWhereWithAggregatesInput | StarsScalarWhereWithAggregatesInput[]
    OR?: StarsScalarWhereWithAggregatesInput[]
    NOT?: StarsScalarWhereWithAggregatesInput | StarsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Stars"> | string
    articleId?: StringNullableWithAggregatesFilter<"Stars"> | string | null
    userId?: StringWithAggregatesFilter<"Stars"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Stars"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Stars"> | Date | string | null
  }

  export type TopicsWhereInput = {
    AND?: TopicsWhereInput | TopicsWhereInput[]
    OR?: TopicsWhereInput[]
    NOT?: TopicsWhereInput | TopicsWhereInput[]
    id?: StringFilter<"Topics"> | string
    topicName?: StringFilter<"Topics"> | string
    createdAt?: DateTimeFilter<"Topics"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Topics"> | Date | string | null
    articles?: ArticleToTopicsListRelationFilter
  }

  export type TopicsOrderByWithRelationInput = {
    id?: SortOrder
    topicName?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    articles?: ArticleToTopicsOrderByRelationAggregateInput
  }

  export type TopicsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TopicsWhereInput | TopicsWhereInput[]
    OR?: TopicsWhereInput[]
    NOT?: TopicsWhereInput | TopicsWhereInput[]
    topicName?: StringFilter<"Topics"> | string
    createdAt?: DateTimeFilter<"Topics"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Topics"> | Date | string | null
    articles?: ArticleToTopicsListRelationFilter
  }, "id">

  export type TopicsOrderByWithAggregationInput = {
    id?: SortOrder
    topicName?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: TopicsCountOrderByAggregateInput
    _max?: TopicsMaxOrderByAggregateInput
    _min?: TopicsMinOrderByAggregateInput
  }

  export type TopicsScalarWhereWithAggregatesInput = {
    AND?: TopicsScalarWhereWithAggregatesInput | TopicsScalarWhereWithAggregatesInput[]
    OR?: TopicsScalarWhereWithAggregatesInput[]
    NOT?: TopicsScalarWhereWithAggregatesInput | TopicsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Topics"> | string
    topicName?: StringWithAggregatesFilter<"Topics"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Topics"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Topics"> | Date | string | null
  }

  export type ArticleToTopicsWhereInput = {
    AND?: ArticleToTopicsWhereInput | ArticleToTopicsWhereInput[]
    OR?: ArticleToTopicsWhereInput[]
    NOT?: ArticleToTopicsWhereInput | ArticleToTopicsWhereInput[]
    id?: StringFilter<"ArticleToTopics"> | string
    articleId?: StringFilter<"ArticleToTopics"> | string
    topicId?: StringFilter<"ArticleToTopics"> | string
    createdAt?: DateTimeFilter<"ArticleToTopics"> | Date | string
    deletedAt?: DateTimeNullableFilter<"ArticleToTopics"> | Date | string | null
    article?: XOR<ArticlesScalarRelationFilter, ArticlesWhereInput>
    topic?: XOR<TopicsScalarRelationFilter, TopicsWhereInput>
  }

  export type ArticleToTopicsOrderByWithRelationInput = {
    id?: SortOrder
    articleId?: SortOrder
    topicId?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    article?: ArticlesOrderByWithRelationInput
    topic?: TopicsOrderByWithRelationInput
  }

  export type ArticleToTopicsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ArticleToTopicsWhereInput | ArticleToTopicsWhereInput[]
    OR?: ArticleToTopicsWhereInput[]
    NOT?: ArticleToTopicsWhereInput | ArticleToTopicsWhereInput[]
    articleId?: StringFilter<"ArticleToTopics"> | string
    topicId?: StringFilter<"ArticleToTopics"> | string
    createdAt?: DateTimeFilter<"ArticleToTopics"> | Date | string
    deletedAt?: DateTimeNullableFilter<"ArticleToTopics"> | Date | string | null
    article?: XOR<ArticlesScalarRelationFilter, ArticlesWhereInput>
    topic?: XOR<TopicsScalarRelationFilter, TopicsWhereInput>
  }, "id">

  export type ArticleToTopicsOrderByWithAggregationInput = {
    id?: SortOrder
    articleId?: SortOrder
    topicId?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: ArticleToTopicsCountOrderByAggregateInput
    _max?: ArticleToTopicsMaxOrderByAggregateInput
    _min?: ArticleToTopicsMinOrderByAggregateInput
  }

  export type ArticleToTopicsScalarWhereWithAggregatesInput = {
    AND?: ArticleToTopicsScalarWhereWithAggregatesInput | ArticleToTopicsScalarWhereWithAggregatesInput[]
    OR?: ArticleToTopicsScalarWhereWithAggregatesInput[]
    NOT?: ArticleToTopicsScalarWhereWithAggregatesInput | ArticleToTopicsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ArticleToTopics"> | string
    articleId?: StringWithAggregatesFilter<"ArticleToTopics"> | string
    topicId?: StringWithAggregatesFilter<"ArticleToTopics"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ArticleToTopics"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"ArticleToTopics"> | Date | string | null
  }

  export type PageviewsWhereInput = {
    AND?: PageviewsWhereInput | PageviewsWhereInput[]
    OR?: PageviewsWhereInput[]
    NOT?: PageviewsWhereInput | PageviewsWhereInput[]
    id?: StringFilter<"Pageviews"> | string
    articleId?: StringNullableFilter<"Pageviews"> | string | null
    userId?: StringFilter<"Pageviews"> | string
    createdAt?: DateTimeFilter<"Pageviews"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Pageviews"> | Date | string | null
    article?: XOR<ArticlesNullableScalarRelationFilter, ArticlesWhereInput> | null
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }

  export type PageviewsOrderByWithRelationInput = {
    id?: SortOrder
    articleId?: SortOrderInput | SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    article?: ArticlesOrderByWithRelationInput
    user?: UsersOrderByWithRelationInput
  }

  export type PageviewsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PageviewsWhereInput | PageviewsWhereInput[]
    OR?: PageviewsWhereInput[]
    NOT?: PageviewsWhereInput | PageviewsWhereInput[]
    articleId?: StringNullableFilter<"Pageviews"> | string | null
    userId?: StringFilter<"Pageviews"> | string
    createdAt?: DateTimeFilter<"Pageviews"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Pageviews"> | Date | string | null
    article?: XOR<ArticlesNullableScalarRelationFilter, ArticlesWhereInput> | null
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }, "id">

  export type PageviewsOrderByWithAggregationInput = {
    id?: SortOrder
    articleId?: SortOrderInput | SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: PageviewsCountOrderByAggregateInput
    _max?: PageviewsMaxOrderByAggregateInput
    _min?: PageviewsMinOrderByAggregateInput
  }

  export type PageviewsScalarWhereWithAggregatesInput = {
    AND?: PageviewsScalarWhereWithAggregatesInput | PageviewsScalarWhereWithAggregatesInput[]
    OR?: PageviewsScalarWhereWithAggregatesInput[]
    NOT?: PageviewsScalarWhereWithAggregatesInput | PageviewsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Pageviews"> | string
    articleId?: StringNullableWithAggregatesFilter<"Pageviews"> | string | null
    userId?: StringWithAggregatesFilter<"Pageviews"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Pageviews"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Pageviews"> | Date | string | null
  }

  export type UsersCreateInput = {
    id?: string
    fullName: string
    registeredAt: Date | string
    deletedAt?: Date | string | null
    reaction?: ReactionsCreateNestedManyWithoutUserInput
    stars?: StarsCreateNestedManyWithoutUserInput
    pageviews?: PageviewsCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateInput = {
    id?: string
    fullName: string
    registeredAt: Date | string
    deletedAt?: Date | string | null
    reaction?: ReactionsUncheckedCreateNestedManyWithoutUserInput
    stars?: StarsUncheckedCreateNestedManyWithoutUserInput
    pageviews?: PageviewsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reaction?: ReactionsUpdateManyWithoutUserNestedInput
    stars?: StarsUpdateManyWithoutUserNestedInput
    pageviews?: PageviewsUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reaction?: ReactionsUncheckedUpdateManyWithoutUserNestedInput
    stars?: StarsUncheckedUpdateManyWithoutUserNestedInput
    pageviews?: PageviewsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UsersCreateManyInput = {
    id?: string
    fullName: string
    registeredAt: Date | string
    deletedAt?: Date | string | null
  }

  export type UsersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UsersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AuthorsCreateInput = {
    id?: string
    authorId: string
    password: string
    fullName: string
    registeredAt: Date | string
    deletedAt?: Date | string | null
    articles?: ArticlesCreateNestedManyWithoutAuthorInput
    sessions?: SessionsCreateNestedManyWithoutAuthorInput
  }

  export type AuthorsUncheckedCreateInput = {
    id?: string
    authorId: string
    password: string
    fullName: string
    registeredAt: Date | string
    deletedAt?: Date | string | null
    articles?: ArticlesUncheckedCreateNestedManyWithoutAuthorInput
    sessions?: SessionsUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type AuthorsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    articles?: ArticlesUpdateManyWithoutAuthorNestedInput
    sessions?: SessionsUpdateManyWithoutAuthorNestedInput
  }

  export type AuthorsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    articles?: ArticlesUncheckedUpdateManyWithoutAuthorNestedInput
    sessions?: SessionsUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type AuthorsCreateManyInput = {
    id?: string
    authorId: string
    password: string
    fullName: string
    registeredAt: Date | string
    deletedAt?: Date | string | null
  }

  export type AuthorsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AuthorsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SessionsCreateInput = {
    id?: string
    password: string
    loggedInAt: Date | string
    loggedOutAdt?: Date | string | null
    author: AuthorsCreateNestedOneWithoutSessionsInput
  }

  export type SessionsUncheckedCreateInput = {
    id?: string
    authorId: string
    password: string
    loggedInAt: Date | string
    loggedOutAdt?: Date | string | null
  }

  export type SessionsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    loggedInAt?: DateTimeFieldUpdateOperationsInput | Date | string
    loggedOutAdt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    author?: AuthorsUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    loggedInAt?: DateTimeFieldUpdateOperationsInput | Date | string
    loggedOutAdt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SessionsCreateManyInput = {
    id?: string
    authorId: string
    password: string
    loggedInAt: Date | string
    loggedOutAdt?: Date | string | null
  }

  export type SessionsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    loggedInAt?: DateTimeFieldUpdateOperationsInput | Date | string
    loggedOutAdt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SessionsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    loggedInAt?: DateTimeFieldUpdateOperationsInput | Date | string
    loggedOutAdt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ArticlesCreateInput = {
    id?: string
    title: string
    description: string
    articleMarkdown: string
    imageUrl?: string | null
    createdAt: Date | string
    deletedAt?: Date | string | null
    author: AuthorsCreateNestedOneWithoutArticlesInput
    stars?: StarsCreateNestedManyWithoutArticleInput
    reactions?: ReactionsCreateNestedManyWithoutArticleInput
    topics?: ArticleToTopicsCreateNestedManyWithoutArticleInput
    pageviews?: PageviewsCreateNestedManyWithoutArticleInput
  }

  export type ArticlesUncheckedCreateInput = {
    id?: string
    title: string
    description: string
    articleMarkdown: string
    imageUrl?: string | null
    authorId: string
    createdAt: Date | string
    deletedAt?: Date | string | null
    stars?: StarsUncheckedCreateNestedManyWithoutArticleInput
    reactions?: ReactionsUncheckedCreateNestedManyWithoutArticleInput
    topics?: ArticleToTopicsUncheckedCreateNestedManyWithoutArticleInput
    pageviews?: PageviewsUncheckedCreateNestedManyWithoutArticleInput
  }

  export type ArticlesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    articleMarkdown?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    author?: AuthorsUpdateOneRequiredWithoutArticlesNestedInput
    stars?: StarsUpdateManyWithoutArticleNestedInput
    reactions?: ReactionsUpdateManyWithoutArticleNestedInput
    topics?: ArticleToTopicsUpdateManyWithoutArticleNestedInput
    pageviews?: PageviewsUpdateManyWithoutArticleNestedInput
  }

  export type ArticlesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    articleMarkdown?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    authorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stars?: StarsUncheckedUpdateManyWithoutArticleNestedInput
    reactions?: ReactionsUncheckedUpdateManyWithoutArticleNestedInput
    topics?: ArticleToTopicsUncheckedUpdateManyWithoutArticleNestedInput
    pageviews?: PageviewsUncheckedUpdateManyWithoutArticleNestedInput
  }

  export type ArticlesCreateManyInput = {
    id?: string
    title: string
    description: string
    articleMarkdown: string
    imageUrl?: string | null
    authorId: string
    createdAt: Date | string
    deletedAt?: Date | string | null
  }

  export type ArticlesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    articleMarkdown?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ArticlesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    articleMarkdown?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    authorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ReactionsCreateInput = {
    id?: string
    reactionText: string
    createdAt: Date | string
    deletedAt?: Date | string | null
    user: UsersCreateNestedOneWithoutReactionInput
    article: ArticlesCreateNestedOneWithoutReactionsInput
  }

  export type ReactionsUncheckedCreateInput = {
    id?: string
    userId: string
    articleId: string
    reactionText: string
    createdAt: Date | string
    deletedAt?: Date | string | null
  }

  export type ReactionsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    reactionText?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UsersUpdateOneRequiredWithoutReactionNestedInput
    article?: ArticlesUpdateOneRequiredWithoutReactionsNestedInput
  }

  export type ReactionsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    articleId?: StringFieldUpdateOperationsInput | string
    reactionText?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ReactionsCreateManyInput = {
    id?: string
    userId: string
    articleId: string
    reactionText: string
    createdAt: Date | string
    deletedAt?: Date | string | null
  }

  export type ReactionsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    reactionText?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ReactionsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    articleId?: StringFieldUpdateOperationsInput | string
    reactionText?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StarsCreateInput = {
    id?: string
    createdAt: Date | string
    deletedAt?: Date | string | null
    article?: ArticlesCreateNestedOneWithoutStarsInput
    user: UsersCreateNestedOneWithoutStarsInput
  }

  export type StarsUncheckedCreateInput = {
    id?: string
    articleId?: string | null
    userId: string
    createdAt: Date | string
    deletedAt?: Date | string | null
  }

  export type StarsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    article?: ArticlesUpdateOneWithoutStarsNestedInput
    user?: UsersUpdateOneRequiredWithoutStarsNestedInput
  }

  export type StarsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    articleId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StarsCreateManyInput = {
    id?: string
    articleId?: string | null
    userId: string
    createdAt: Date | string
    deletedAt?: Date | string | null
  }

  export type StarsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StarsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    articleId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TopicsCreateInput = {
    id?: string
    topicName: string
    createdAt: Date | string
    deletedAt?: Date | string | null
    articles?: ArticleToTopicsCreateNestedManyWithoutTopicInput
  }

  export type TopicsUncheckedCreateInput = {
    id?: string
    topicName: string
    createdAt: Date | string
    deletedAt?: Date | string | null
    articles?: ArticleToTopicsUncheckedCreateNestedManyWithoutTopicInput
  }

  export type TopicsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    topicName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    articles?: ArticleToTopicsUpdateManyWithoutTopicNestedInput
  }

  export type TopicsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    topicName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    articles?: ArticleToTopicsUncheckedUpdateManyWithoutTopicNestedInput
  }

  export type TopicsCreateManyInput = {
    id?: string
    topicName: string
    createdAt: Date | string
    deletedAt?: Date | string | null
  }

  export type TopicsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    topicName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TopicsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    topicName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ArticleToTopicsCreateInput = {
    id?: string
    createdAt: Date | string
    deletedAt?: Date | string | null
    article: ArticlesCreateNestedOneWithoutTopicsInput
    topic: TopicsCreateNestedOneWithoutArticlesInput
  }

  export type ArticleToTopicsUncheckedCreateInput = {
    id?: string
    articleId: string
    topicId: string
    createdAt: Date | string
    deletedAt?: Date | string | null
  }

  export type ArticleToTopicsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    article?: ArticlesUpdateOneRequiredWithoutTopicsNestedInput
    topic?: TopicsUpdateOneRequiredWithoutArticlesNestedInput
  }

  export type ArticleToTopicsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    articleId?: StringFieldUpdateOperationsInput | string
    topicId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ArticleToTopicsCreateManyInput = {
    id?: string
    articleId: string
    topicId: string
    createdAt: Date | string
    deletedAt?: Date | string | null
  }

  export type ArticleToTopicsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ArticleToTopicsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    articleId?: StringFieldUpdateOperationsInput | string
    topicId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PageviewsCreateInput = {
    id?: string
    createdAt: Date | string
    deletedAt?: Date | string | null
    article?: ArticlesCreateNestedOneWithoutPageviewsInput
    user: UsersCreateNestedOneWithoutPageviewsInput
  }

  export type PageviewsUncheckedCreateInput = {
    id?: string
    articleId?: string | null
    userId: string
    createdAt: Date | string
    deletedAt?: Date | string | null
  }

  export type PageviewsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    article?: ArticlesUpdateOneWithoutPageviewsNestedInput
    user?: UsersUpdateOneRequiredWithoutPageviewsNestedInput
  }

  export type PageviewsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    articleId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PageviewsCreateManyInput = {
    id?: string
    articleId?: string | null
    userId: string
    createdAt: Date | string
    deletedAt?: Date | string | null
  }

  export type PageviewsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PageviewsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    articleId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type ReactionsListRelationFilter = {
    every?: ReactionsWhereInput
    some?: ReactionsWhereInput
    none?: ReactionsWhereInput
  }

  export type StarsListRelationFilter = {
    every?: StarsWhereInput
    some?: StarsWhereInput
    none?: StarsWhereInput
  }

  export type PageviewsListRelationFilter = {
    every?: PageviewsWhereInput
    some?: PageviewsWhereInput
    none?: PageviewsWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ReactionsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StarsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PageviewsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsersCountOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    registeredAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type UsersMaxOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    registeredAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type UsersMinOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    registeredAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type ArticlesListRelationFilter = {
    every?: ArticlesWhereInput
    some?: ArticlesWhereInput
    none?: ArticlesWhereInput
  }

  export type SessionsListRelationFilter = {
    every?: SessionsWhereInput
    some?: SessionsWhereInput
    none?: SessionsWhereInput
  }

  export type ArticlesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessionsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AuthorsCountOrderByAggregateInput = {
    id?: SortOrder
    authorId?: SortOrder
    password?: SortOrder
    fullName?: SortOrder
    registeredAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type AuthorsMaxOrderByAggregateInput = {
    id?: SortOrder
    authorId?: SortOrder
    password?: SortOrder
    fullName?: SortOrder
    registeredAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type AuthorsMinOrderByAggregateInput = {
    id?: SortOrder
    authorId?: SortOrder
    password?: SortOrder
    fullName?: SortOrder
    registeredAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type AuthorsScalarRelationFilter = {
    is?: AuthorsWhereInput
    isNot?: AuthorsWhereInput
  }

  export type SessionsCountOrderByAggregateInput = {
    id?: SortOrder
    authorId?: SortOrder
    password?: SortOrder
    loggedInAt?: SortOrder
    loggedOutAdt?: SortOrder
  }

  export type SessionsMaxOrderByAggregateInput = {
    id?: SortOrder
    authorId?: SortOrder
    password?: SortOrder
    loggedInAt?: SortOrder
    loggedOutAdt?: SortOrder
  }

  export type SessionsMinOrderByAggregateInput = {
    id?: SortOrder
    authorId?: SortOrder
    password?: SortOrder
    loggedInAt?: SortOrder
    loggedOutAdt?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type ArticleToTopicsListRelationFilter = {
    every?: ArticleToTopicsWhereInput
    some?: ArticleToTopicsWhereInput
    none?: ArticleToTopicsWhereInput
  }

  export type ArticleToTopicsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ArticlesCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    articleMarkdown?: SortOrder
    imageUrl?: SortOrder
    authorId?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type ArticlesMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    articleMarkdown?: SortOrder
    imageUrl?: SortOrder
    authorId?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type ArticlesMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    articleMarkdown?: SortOrder
    imageUrl?: SortOrder
    authorId?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type UsersScalarRelationFilter = {
    is?: UsersWhereInput
    isNot?: UsersWhereInput
  }

  export type ArticlesScalarRelationFilter = {
    is?: ArticlesWhereInput
    isNot?: ArticlesWhereInput
  }

  export type ReactionsCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    articleId?: SortOrder
    reactionText?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type ReactionsMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    articleId?: SortOrder
    reactionText?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type ReactionsMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    articleId?: SortOrder
    reactionText?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type ArticlesNullableScalarRelationFilter = {
    is?: ArticlesWhereInput | null
    isNot?: ArticlesWhereInput | null
  }

  export type StarsCountOrderByAggregateInput = {
    id?: SortOrder
    articleId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type StarsMaxOrderByAggregateInput = {
    id?: SortOrder
    articleId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type StarsMinOrderByAggregateInput = {
    id?: SortOrder
    articleId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type TopicsCountOrderByAggregateInput = {
    id?: SortOrder
    topicName?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type TopicsMaxOrderByAggregateInput = {
    id?: SortOrder
    topicName?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type TopicsMinOrderByAggregateInput = {
    id?: SortOrder
    topicName?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type TopicsScalarRelationFilter = {
    is?: TopicsWhereInput
    isNot?: TopicsWhereInput
  }

  export type ArticleToTopicsCountOrderByAggregateInput = {
    id?: SortOrder
    articleId?: SortOrder
    topicId?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type ArticleToTopicsMaxOrderByAggregateInput = {
    id?: SortOrder
    articleId?: SortOrder
    topicId?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type ArticleToTopicsMinOrderByAggregateInput = {
    id?: SortOrder
    articleId?: SortOrder
    topicId?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type PageviewsCountOrderByAggregateInput = {
    id?: SortOrder
    articleId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type PageviewsMaxOrderByAggregateInput = {
    id?: SortOrder
    articleId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type PageviewsMinOrderByAggregateInput = {
    id?: SortOrder
    articleId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type ReactionsCreateNestedManyWithoutUserInput = {
    create?: XOR<ReactionsCreateWithoutUserInput, ReactionsUncheckedCreateWithoutUserInput> | ReactionsCreateWithoutUserInput[] | ReactionsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReactionsCreateOrConnectWithoutUserInput | ReactionsCreateOrConnectWithoutUserInput[]
    createMany?: ReactionsCreateManyUserInputEnvelope
    connect?: ReactionsWhereUniqueInput | ReactionsWhereUniqueInput[]
  }

  export type StarsCreateNestedManyWithoutUserInput = {
    create?: XOR<StarsCreateWithoutUserInput, StarsUncheckedCreateWithoutUserInput> | StarsCreateWithoutUserInput[] | StarsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StarsCreateOrConnectWithoutUserInput | StarsCreateOrConnectWithoutUserInput[]
    createMany?: StarsCreateManyUserInputEnvelope
    connect?: StarsWhereUniqueInput | StarsWhereUniqueInput[]
  }

  export type PageviewsCreateNestedManyWithoutUserInput = {
    create?: XOR<PageviewsCreateWithoutUserInput, PageviewsUncheckedCreateWithoutUserInput> | PageviewsCreateWithoutUserInput[] | PageviewsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PageviewsCreateOrConnectWithoutUserInput | PageviewsCreateOrConnectWithoutUserInput[]
    createMany?: PageviewsCreateManyUserInputEnvelope
    connect?: PageviewsWhereUniqueInput | PageviewsWhereUniqueInput[]
  }

  export type ReactionsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ReactionsCreateWithoutUserInput, ReactionsUncheckedCreateWithoutUserInput> | ReactionsCreateWithoutUserInput[] | ReactionsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReactionsCreateOrConnectWithoutUserInput | ReactionsCreateOrConnectWithoutUserInput[]
    createMany?: ReactionsCreateManyUserInputEnvelope
    connect?: ReactionsWhereUniqueInput | ReactionsWhereUniqueInput[]
  }

  export type StarsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<StarsCreateWithoutUserInput, StarsUncheckedCreateWithoutUserInput> | StarsCreateWithoutUserInput[] | StarsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StarsCreateOrConnectWithoutUserInput | StarsCreateOrConnectWithoutUserInput[]
    createMany?: StarsCreateManyUserInputEnvelope
    connect?: StarsWhereUniqueInput | StarsWhereUniqueInput[]
  }

  export type PageviewsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PageviewsCreateWithoutUserInput, PageviewsUncheckedCreateWithoutUserInput> | PageviewsCreateWithoutUserInput[] | PageviewsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PageviewsCreateOrConnectWithoutUserInput | PageviewsCreateOrConnectWithoutUserInput[]
    createMany?: PageviewsCreateManyUserInputEnvelope
    connect?: PageviewsWhereUniqueInput | PageviewsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type ReactionsUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReactionsCreateWithoutUserInput, ReactionsUncheckedCreateWithoutUserInput> | ReactionsCreateWithoutUserInput[] | ReactionsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReactionsCreateOrConnectWithoutUserInput | ReactionsCreateOrConnectWithoutUserInput[]
    upsert?: ReactionsUpsertWithWhereUniqueWithoutUserInput | ReactionsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReactionsCreateManyUserInputEnvelope
    set?: ReactionsWhereUniqueInput | ReactionsWhereUniqueInput[]
    disconnect?: ReactionsWhereUniqueInput | ReactionsWhereUniqueInput[]
    delete?: ReactionsWhereUniqueInput | ReactionsWhereUniqueInput[]
    connect?: ReactionsWhereUniqueInput | ReactionsWhereUniqueInput[]
    update?: ReactionsUpdateWithWhereUniqueWithoutUserInput | ReactionsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReactionsUpdateManyWithWhereWithoutUserInput | ReactionsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReactionsScalarWhereInput | ReactionsScalarWhereInput[]
  }

  export type StarsUpdateManyWithoutUserNestedInput = {
    create?: XOR<StarsCreateWithoutUserInput, StarsUncheckedCreateWithoutUserInput> | StarsCreateWithoutUserInput[] | StarsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StarsCreateOrConnectWithoutUserInput | StarsCreateOrConnectWithoutUserInput[]
    upsert?: StarsUpsertWithWhereUniqueWithoutUserInput | StarsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: StarsCreateManyUserInputEnvelope
    set?: StarsWhereUniqueInput | StarsWhereUniqueInput[]
    disconnect?: StarsWhereUniqueInput | StarsWhereUniqueInput[]
    delete?: StarsWhereUniqueInput | StarsWhereUniqueInput[]
    connect?: StarsWhereUniqueInput | StarsWhereUniqueInput[]
    update?: StarsUpdateWithWhereUniqueWithoutUserInput | StarsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: StarsUpdateManyWithWhereWithoutUserInput | StarsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: StarsScalarWhereInput | StarsScalarWhereInput[]
  }

  export type PageviewsUpdateManyWithoutUserNestedInput = {
    create?: XOR<PageviewsCreateWithoutUserInput, PageviewsUncheckedCreateWithoutUserInput> | PageviewsCreateWithoutUserInput[] | PageviewsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PageviewsCreateOrConnectWithoutUserInput | PageviewsCreateOrConnectWithoutUserInput[]
    upsert?: PageviewsUpsertWithWhereUniqueWithoutUserInput | PageviewsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PageviewsCreateManyUserInputEnvelope
    set?: PageviewsWhereUniqueInput | PageviewsWhereUniqueInput[]
    disconnect?: PageviewsWhereUniqueInput | PageviewsWhereUniqueInput[]
    delete?: PageviewsWhereUniqueInput | PageviewsWhereUniqueInput[]
    connect?: PageviewsWhereUniqueInput | PageviewsWhereUniqueInput[]
    update?: PageviewsUpdateWithWhereUniqueWithoutUserInput | PageviewsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PageviewsUpdateManyWithWhereWithoutUserInput | PageviewsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PageviewsScalarWhereInput | PageviewsScalarWhereInput[]
  }

  export type ReactionsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReactionsCreateWithoutUserInput, ReactionsUncheckedCreateWithoutUserInput> | ReactionsCreateWithoutUserInput[] | ReactionsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReactionsCreateOrConnectWithoutUserInput | ReactionsCreateOrConnectWithoutUserInput[]
    upsert?: ReactionsUpsertWithWhereUniqueWithoutUserInput | ReactionsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReactionsCreateManyUserInputEnvelope
    set?: ReactionsWhereUniqueInput | ReactionsWhereUniqueInput[]
    disconnect?: ReactionsWhereUniqueInput | ReactionsWhereUniqueInput[]
    delete?: ReactionsWhereUniqueInput | ReactionsWhereUniqueInput[]
    connect?: ReactionsWhereUniqueInput | ReactionsWhereUniqueInput[]
    update?: ReactionsUpdateWithWhereUniqueWithoutUserInput | ReactionsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReactionsUpdateManyWithWhereWithoutUserInput | ReactionsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReactionsScalarWhereInput | ReactionsScalarWhereInput[]
  }

  export type StarsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<StarsCreateWithoutUserInput, StarsUncheckedCreateWithoutUserInput> | StarsCreateWithoutUserInput[] | StarsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StarsCreateOrConnectWithoutUserInput | StarsCreateOrConnectWithoutUserInput[]
    upsert?: StarsUpsertWithWhereUniqueWithoutUserInput | StarsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: StarsCreateManyUserInputEnvelope
    set?: StarsWhereUniqueInput | StarsWhereUniqueInput[]
    disconnect?: StarsWhereUniqueInput | StarsWhereUniqueInput[]
    delete?: StarsWhereUniqueInput | StarsWhereUniqueInput[]
    connect?: StarsWhereUniqueInput | StarsWhereUniqueInput[]
    update?: StarsUpdateWithWhereUniqueWithoutUserInput | StarsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: StarsUpdateManyWithWhereWithoutUserInput | StarsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: StarsScalarWhereInput | StarsScalarWhereInput[]
  }

  export type PageviewsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PageviewsCreateWithoutUserInput, PageviewsUncheckedCreateWithoutUserInput> | PageviewsCreateWithoutUserInput[] | PageviewsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PageviewsCreateOrConnectWithoutUserInput | PageviewsCreateOrConnectWithoutUserInput[]
    upsert?: PageviewsUpsertWithWhereUniqueWithoutUserInput | PageviewsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PageviewsCreateManyUserInputEnvelope
    set?: PageviewsWhereUniqueInput | PageviewsWhereUniqueInput[]
    disconnect?: PageviewsWhereUniqueInput | PageviewsWhereUniqueInput[]
    delete?: PageviewsWhereUniqueInput | PageviewsWhereUniqueInput[]
    connect?: PageviewsWhereUniqueInput | PageviewsWhereUniqueInput[]
    update?: PageviewsUpdateWithWhereUniqueWithoutUserInput | PageviewsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PageviewsUpdateManyWithWhereWithoutUserInput | PageviewsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PageviewsScalarWhereInput | PageviewsScalarWhereInput[]
  }

  export type ArticlesCreateNestedManyWithoutAuthorInput = {
    create?: XOR<ArticlesCreateWithoutAuthorInput, ArticlesUncheckedCreateWithoutAuthorInput> | ArticlesCreateWithoutAuthorInput[] | ArticlesUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: ArticlesCreateOrConnectWithoutAuthorInput | ArticlesCreateOrConnectWithoutAuthorInput[]
    createMany?: ArticlesCreateManyAuthorInputEnvelope
    connect?: ArticlesWhereUniqueInput | ArticlesWhereUniqueInput[]
  }

  export type SessionsCreateNestedManyWithoutAuthorInput = {
    create?: XOR<SessionsCreateWithoutAuthorInput, SessionsUncheckedCreateWithoutAuthorInput> | SessionsCreateWithoutAuthorInput[] | SessionsUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: SessionsCreateOrConnectWithoutAuthorInput | SessionsCreateOrConnectWithoutAuthorInput[]
    createMany?: SessionsCreateManyAuthorInputEnvelope
    connect?: SessionsWhereUniqueInput | SessionsWhereUniqueInput[]
  }

  export type ArticlesUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<ArticlesCreateWithoutAuthorInput, ArticlesUncheckedCreateWithoutAuthorInput> | ArticlesCreateWithoutAuthorInput[] | ArticlesUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: ArticlesCreateOrConnectWithoutAuthorInput | ArticlesCreateOrConnectWithoutAuthorInput[]
    createMany?: ArticlesCreateManyAuthorInputEnvelope
    connect?: ArticlesWhereUniqueInput | ArticlesWhereUniqueInput[]
  }

  export type SessionsUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<SessionsCreateWithoutAuthorInput, SessionsUncheckedCreateWithoutAuthorInput> | SessionsCreateWithoutAuthorInput[] | SessionsUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: SessionsCreateOrConnectWithoutAuthorInput | SessionsCreateOrConnectWithoutAuthorInput[]
    createMany?: SessionsCreateManyAuthorInputEnvelope
    connect?: SessionsWhereUniqueInput | SessionsWhereUniqueInput[]
  }

  export type ArticlesUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<ArticlesCreateWithoutAuthorInput, ArticlesUncheckedCreateWithoutAuthorInput> | ArticlesCreateWithoutAuthorInput[] | ArticlesUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: ArticlesCreateOrConnectWithoutAuthorInput | ArticlesCreateOrConnectWithoutAuthorInput[]
    upsert?: ArticlesUpsertWithWhereUniqueWithoutAuthorInput | ArticlesUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: ArticlesCreateManyAuthorInputEnvelope
    set?: ArticlesWhereUniqueInput | ArticlesWhereUniqueInput[]
    disconnect?: ArticlesWhereUniqueInput | ArticlesWhereUniqueInput[]
    delete?: ArticlesWhereUniqueInput | ArticlesWhereUniqueInput[]
    connect?: ArticlesWhereUniqueInput | ArticlesWhereUniqueInput[]
    update?: ArticlesUpdateWithWhereUniqueWithoutAuthorInput | ArticlesUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: ArticlesUpdateManyWithWhereWithoutAuthorInput | ArticlesUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: ArticlesScalarWhereInput | ArticlesScalarWhereInput[]
  }

  export type SessionsUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<SessionsCreateWithoutAuthorInput, SessionsUncheckedCreateWithoutAuthorInput> | SessionsCreateWithoutAuthorInput[] | SessionsUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: SessionsCreateOrConnectWithoutAuthorInput | SessionsCreateOrConnectWithoutAuthorInput[]
    upsert?: SessionsUpsertWithWhereUniqueWithoutAuthorInput | SessionsUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: SessionsCreateManyAuthorInputEnvelope
    set?: SessionsWhereUniqueInput | SessionsWhereUniqueInput[]
    disconnect?: SessionsWhereUniqueInput | SessionsWhereUniqueInput[]
    delete?: SessionsWhereUniqueInput | SessionsWhereUniqueInput[]
    connect?: SessionsWhereUniqueInput | SessionsWhereUniqueInput[]
    update?: SessionsUpdateWithWhereUniqueWithoutAuthorInput | SessionsUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: SessionsUpdateManyWithWhereWithoutAuthorInput | SessionsUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: SessionsScalarWhereInput | SessionsScalarWhereInput[]
  }

  export type ArticlesUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<ArticlesCreateWithoutAuthorInput, ArticlesUncheckedCreateWithoutAuthorInput> | ArticlesCreateWithoutAuthorInput[] | ArticlesUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: ArticlesCreateOrConnectWithoutAuthorInput | ArticlesCreateOrConnectWithoutAuthorInput[]
    upsert?: ArticlesUpsertWithWhereUniqueWithoutAuthorInput | ArticlesUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: ArticlesCreateManyAuthorInputEnvelope
    set?: ArticlesWhereUniqueInput | ArticlesWhereUniqueInput[]
    disconnect?: ArticlesWhereUniqueInput | ArticlesWhereUniqueInput[]
    delete?: ArticlesWhereUniqueInput | ArticlesWhereUniqueInput[]
    connect?: ArticlesWhereUniqueInput | ArticlesWhereUniqueInput[]
    update?: ArticlesUpdateWithWhereUniqueWithoutAuthorInput | ArticlesUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: ArticlesUpdateManyWithWhereWithoutAuthorInput | ArticlesUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: ArticlesScalarWhereInput | ArticlesScalarWhereInput[]
  }

  export type SessionsUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<SessionsCreateWithoutAuthorInput, SessionsUncheckedCreateWithoutAuthorInput> | SessionsCreateWithoutAuthorInput[] | SessionsUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: SessionsCreateOrConnectWithoutAuthorInput | SessionsCreateOrConnectWithoutAuthorInput[]
    upsert?: SessionsUpsertWithWhereUniqueWithoutAuthorInput | SessionsUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: SessionsCreateManyAuthorInputEnvelope
    set?: SessionsWhereUniqueInput | SessionsWhereUniqueInput[]
    disconnect?: SessionsWhereUniqueInput | SessionsWhereUniqueInput[]
    delete?: SessionsWhereUniqueInput | SessionsWhereUniqueInput[]
    connect?: SessionsWhereUniqueInput | SessionsWhereUniqueInput[]
    update?: SessionsUpdateWithWhereUniqueWithoutAuthorInput | SessionsUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: SessionsUpdateManyWithWhereWithoutAuthorInput | SessionsUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: SessionsScalarWhereInput | SessionsScalarWhereInput[]
  }

  export type AuthorsCreateNestedOneWithoutSessionsInput = {
    create?: XOR<AuthorsCreateWithoutSessionsInput, AuthorsUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: AuthorsCreateOrConnectWithoutSessionsInput
    connect?: AuthorsWhereUniqueInput
  }

  export type AuthorsUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<AuthorsCreateWithoutSessionsInput, AuthorsUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: AuthorsCreateOrConnectWithoutSessionsInput
    upsert?: AuthorsUpsertWithoutSessionsInput
    connect?: AuthorsWhereUniqueInput
    update?: XOR<XOR<AuthorsUpdateToOneWithWhereWithoutSessionsInput, AuthorsUpdateWithoutSessionsInput>, AuthorsUncheckedUpdateWithoutSessionsInput>
  }

  export type AuthorsCreateNestedOneWithoutArticlesInput = {
    create?: XOR<AuthorsCreateWithoutArticlesInput, AuthorsUncheckedCreateWithoutArticlesInput>
    connectOrCreate?: AuthorsCreateOrConnectWithoutArticlesInput
    connect?: AuthorsWhereUniqueInput
  }

  export type StarsCreateNestedManyWithoutArticleInput = {
    create?: XOR<StarsCreateWithoutArticleInput, StarsUncheckedCreateWithoutArticleInput> | StarsCreateWithoutArticleInput[] | StarsUncheckedCreateWithoutArticleInput[]
    connectOrCreate?: StarsCreateOrConnectWithoutArticleInput | StarsCreateOrConnectWithoutArticleInput[]
    createMany?: StarsCreateManyArticleInputEnvelope
    connect?: StarsWhereUniqueInput | StarsWhereUniqueInput[]
  }

  export type ReactionsCreateNestedManyWithoutArticleInput = {
    create?: XOR<ReactionsCreateWithoutArticleInput, ReactionsUncheckedCreateWithoutArticleInput> | ReactionsCreateWithoutArticleInput[] | ReactionsUncheckedCreateWithoutArticleInput[]
    connectOrCreate?: ReactionsCreateOrConnectWithoutArticleInput | ReactionsCreateOrConnectWithoutArticleInput[]
    createMany?: ReactionsCreateManyArticleInputEnvelope
    connect?: ReactionsWhereUniqueInput | ReactionsWhereUniqueInput[]
  }

  export type ArticleToTopicsCreateNestedManyWithoutArticleInput = {
    create?: XOR<ArticleToTopicsCreateWithoutArticleInput, ArticleToTopicsUncheckedCreateWithoutArticleInput> | ArticleToTopicsCreateWithoutArticleInput[] | ArticleToTopicsUncheckedCreateWithoutArticleInput[]
    connectOrCreate?: ArticleToTopicsCreateOrConnectWithoutArticleInput | ArticleToTopicsCreateOrConnectWithoutArticleInput[]
    createMany?: ArticleToTopicsCreateManyArticleInputEnvelope
    connect?: ArticleToTopicsWhereUniqueInput | ArticleToTopicsWhereUniqueInput[]
  }

  export type PageviewsCreateNestedManyWithoutArticleInput = {
    create?: XOR<PageviewsCreateWithoutArticleInput, PageviewsUncheckedCreateWithoutArticleInput> | PageviewsCreateWithoutArticleInput[] | PageviewsUncheckedCreateWithoutArticleInput[]
    connectOrCreate?: PageviewsCreateOrConnectWithoutArticleInput | PageviewsCreateOrConnectWithoutArticleInput[]
    createMany?: PageviewsCreateManyArticleInputEnvelope
    connect?: PageviewsWhereUniqueInput | PageviewsWhereUniqueInput[]
  }

  export type StarsUncheckedCreateNestedManyWithoutArticleInput = {
    create?: XOR<StarsCreateWithoutArticleInput, StarsUncheckedCreateWithoutArticleInput> | StarsCreateWithoutArticleInput[] | StarsUncheckedCreateWithoutArticleInput[]
    connectOrCreate?: StarsCreateOrConnectWithoutArticleInput | StarsCreateOrConnectWithoutArticleInput[]
    createMany?: StarsCreateManyArticleInputEnvelope
    connect?: StarsWhereUniqueInput | StarsWhereUniqueInput[]
  }

  export type ReactionsUncheckedCreateNestedManyWithoutArticleInput = {
    create?: XOR<ReactionsCreateWithoutArticleInput, ReactionsUncheckedCreateWithoutArticleInput> | ReactionsCreateWithoutArticleInput[] | ReactionsUncheckedCreateWithoutArticleInput[]
    connectOrCreate?: ReactionsCreateOrConnectWithoutArticleInput | ReactionsCreateOrConnectWithoutArticleInput[]
    createMany?: ReactionsCreateManyArticleInputEnvelope
    connect?: ReactionsWhereUniqueInput | ReactionsWhereUniqueInput[]
  }

  export type ArticleToTopicsUncheckedCreateNestedManyWithoutArticleInput = {
    create?: XOR<ArticleToTopicsCreateWithoutArticleInput, ArticleToTopicsUncheckedCreateWithoutArticleInput> | ArticleToTopicsCreateWithoutArticleInput[] | ArticleToTopicsUncheckedCreateWithoutArticleInput[]
    connectOrCreate?: ArticleToTopicsCreateOrConnectWithoutArticleInput | ArticleToTopicsCreateOrConnectWithoutArticleInput[]
    createMany?: ArticleToTopicsCreateManyArticleInputEnvelope
    connect?: ArticleToTopicsWhereUniqueInput | ArticleToTopicsWhereUniqueInput[]
  }

  export type PageviewsUncheckedCreateNestedManyWithoutArticleInput = {
    create?: XOR<PageviewsCreateWithoutArticleInput, PageviewsUncheckedCreateWithoutArticleInput> | PageviewsCreateWithoutArticleInput[] | PageviewsUncheckedCreateWithoutArticleInput[]
    connectOrCreate?: PageviewsCreateOrConnectWithoutArticleInput | PageviewsCreateOrConnectWithoutArticleInput[]
    createMany?: PageviewsCreateManyArticleInputEnvelope
    connect?: PageviewsWhereUniqueInput | PageviewsWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type AuthorsUpdateOneRequiredWithoutArticlesNestedInput = {
    create?: XOR<AuthorsCreateWithoutArticlesInput, AuthorsUncheckedCreateWithoutArticlesInput>
    connectOrCreate?: AuthorsCreateOrConnectWithoutArticlesInput
    upsert?: AuthorsUpsertWithoutArticlesInput
    connect?: AuthorsWhereUniqueInput
    update?: XOR<XOR<AuthorsUpdateToOneWithWhereWithoutArticlesInput, AuthorsUpdateWithoutArticlesInput>, AuthorsUncheckedUpdateWithoutArticlesInput>
  }

  export type StarsUpdateManyWithoutArticleNestedInput = {
    create?: XOR<StarsCreateWithoutArticleInput, StarsUncheckedCreateWithoutArticleInput> | StarsCreateWithoutArticleInput[] | StarsUncheckedCreateWithoutArticleInput[]
    connectOrCreate?: StarsCreateOrConnectWithoutArticleInput | StarsCreateOrConnectWithoutArticleInput[]
    upsert?: StarsUpsertWithWhereUniqueWithoutArticleInput | StarsUpsertWithWhereUniqueWithoutArticleInput[]
    createMany?: StarsCreateManyArticleInputEnvelope
    set?: StarsWhereUniqueInput | StarsWhereUniqueInput[]
    disconnect?: StarsWhereUniqueInput | StarsWhereUniqueInput[]
    delete?: StarsWhereUniqueInput | StarsWhereUniqueInput[]
    connect?: StarsWhereUniqueInput | StarsWhereUniqueInput[]
    update?: StarsUpdateWithWhereUniqueWithoutArticleInput | StarsUpdateWithWhereUniqueWithoutArticleInput[]
    updateMany?: StarsUpdateManyWithWhereWithoutArticleInput | StarsUpdateManyWithWhereWithoutArticleInput[]
    deleteMany?: StarsScalarWhereInput | StarsScalarWhereInput[]
  }

  export type ReactionsUpdateManyWithoutArticleNestedInput = {
    create?: XOR<ReactionsCreateWithoutArticleInput, ReactionsUncheckedCreateWithoutArticleInput> | ReactionsCreateWithoutArticleInput[] | ReactionsUncheckedCreateWithoutArticleInput[]
    connectOrCreate?: ReactionsCreateOrConnectWithoutArticleInput | ReactionsCreateOrConnectWithoutArticleInput[]
    upsert?: ReactionsUpsertWithWhereUniqueWithoutArticleInput | ReactionsUpsertWithWhereUniqueWithoutArticleInput[]
    createMany?: ReactionsCreateManyArticleInputEnvelope
    set?: ReactionsWhereUniqueInput | ReactionsWhereUniqueInput[]
    disconnect?: ReactionsWhereUniqueInput | ReactionsWhereUniqueInput[]
    delete?: ReactionsWhereUniqueInput | ReactionsWhereUniqueInput[]
    connect?: ReactionsWhereUniqueInput | ReactionsWhereUniqueInput[]
    update?: ReactionsUpdateWithWhereUniqueWithoutArticleInput | ReactionsUpdateWithWhereUniqueWithoutArticleInput[]
    updateMany?: ReactionsUpdateManyWithWhereWithoutArticleInput | ReactionsUpdateManyWithWhereWithoutArticleInput[]
    deleteMany?: ReactionsScalarWhereInput | ReactionsScalarWhereInput[]
  }

  export type ArticleToTopicsUpdateManyWithoutArticleNestedInput = {
    create?: XOR<ArticleToTopicsCreateWithoutArticleInput, ArticleToTopicsUncheckedCreateWithoutArticleInput> | ArticleToTopicsCreateWithoutArticleInput[] | ArticleToTopicsUncheckedCreateWithoutArticleInput[]
    connectOrCreate?: ArticleToTopicsCreateOrConnectWithoutArticleInput | ArticleToTopicsCreateOrConnectWithoutArticleInput[]
    upsert?: ArticleToTopicsUpsertWithWhereUniqueWithoutArticleInput | ArticleToTopicsUpsertWithWhereUniqueWithoutArticleInput[]
    createMany?: ArticleToTopicsCreateManyArticleInputEnvelope
    set?: ArticleToTopicsWhereUniqueInput | ArticleToTopicsWhereUniqueInput[]
    disconnect?: ArticleToTopicsWhereUniqueInput | ArticleToTopicsWhereUniqueInput[]
    delete?: ArticleToTopicsWhereUniqueInput | ArticleToTopicsWhereUniqueInput[]
    connect?: ArticleToTopicsWhereUniqueInput | ArticleToTopicsWhereUniqueInput[]
    update?: ArticleToTopicsUpdateWithWhereUniqueWithoutArticleInput | ArticleToTopicsUpdateWithWhereUniqueWithoutArticleInput[]
    updateMany?: ArticleToTopicsUpdateManyWithWhereWithoutArticleInput | ArticleToTopicsUpdateManyWithWhereWithoutArticleInput[]
    deleteMany?: ArticleToTopicsScalarWhereInput | ArticleToTopicsScalarWhereInput[]
  }

  export type PageviewsUpdateManyWithoutArticleNestedInput = {
    create?: XOR<PageviewsCreateWithoutArticleInput, PageviewsUncheckedCreateWithoutArticleInput> | PageviewsCreateWithoutArticleInput[] | PageviewsUncheckedCreateWithoutArticleInput[]
    connectOrCreate?: PageviewsCreateOrConnectWithoutArticleInput | PageviewsCreateOrConnectWithoutArticleInput[]
    upsert?: PageviewsUpsertWithWhereUniqueWithoutArticleInput | PageviewsUpsertWithWhereUniqueWithoutArticleInput[]
    createMany?: PageviewsCreateManyArticleInputEnvelope
    set?: PageviewsWhereUniqueInput | PageviewsWhereUniqueInput[]
    disconnect?: PageviewsWhereUniqueInput | PageviewsWhereUniqueInput[]
    delete?: PageviewsWhereUniqueInput | PageviewsWhereUniqueInput[]
    connect?: PageviewsWhereUniqueInput | PageviewsWhereUniqueInput[]
    update?: PageviewsUpdateWithWhereUniqueWithoutArticleInput | PageviewsUpdateWithWhereUniqueWithoutArticleInput[]
    updateMany?: PageviewsUpdateManyWithWhereWithoutArticleInput | PageviewsUpdateManyWithWhereWithoutArticleInput[]
    deleteMany?: PageviewsScalarWhereInput | PageviewsScalarWhereInput[]
  }

  export type StarsUncheckedUpdateManyWithoutArticleNestedInput = {
    create?: XOR<StarsCreateWithoutArticleInput, StarsUncheckedCreateWithoutArticleInput> | StarsCreateWithoutArticleInput[] | StarsUncheckedCreateWithoutArticleInput[]
    connectOrCreate?: StarsCreateOrConnectWithoutArticleInput | StarsCreateOrConnectWithoutArticleInput[]
    upsert?: StarsUpsertWithWhereUniqueWithoutArticleInput | StarsUpsertWithWhereUniqueWithoutArticleInput[]
    createMany?: StarsCreateManyArticleInputEnvelope
    set?: StarsWhereUniqueInput | StarsWhereUniqueInput[]
    disconnect?: StarsWhereUniqueInput | StarsWhereUniqueInput[]
    delete?: StarsWhereUniqueInput | StarsWhereUniqueInput[]
    connect?: StarsWhereUniqueInput | StarsWhereUniqueInput[]
    update?: StarsUpdateWithWhereUniqueWithoutArticleInput | StarsUpdateWithWhereUniqueWithoutArticleInput[]
    updateMany?: StarsUpdateManyWithWhereWithoutArticleInput | StarsUpdateManyWithWhereWithoutArticleInput[]
    deleteMany?: StarsScalarWhereInput | StarsScalarWhereInput[]
  }

  export type ReactionsUncheckedUpdateManyWithoutArticleNestedInput = {
    create?: XOR<ReactionsCreateWithoutArticleInput, ReactionsUncheckedCreateWithoutArticleInput> | ReactionsCreateWithoutArticleInput[] | ReactionsUncheckedCreateWithoutArticleInput[]
    connectOrCreate?: ReactionsCreateOrConnectWithoutArticleInput | ReactionsCreateOrConnectWithoutArticleInput[]
    upsert?: ReactionsUpsertWithWhereUniqueWithoutArticleInput | ReactionsUpsertWithWhereUniqueWithoutArticleInput[]
    createMany?: ReactionsCreateManyArticleInputEnvelope
    set?: ReactionsWhereUniqueInput | ReactionsWhereUniqueInput[]
    disconnect?: ReactionsWhereUniqueInput | ReactionsWhereUniqueInput[]
    delete?: ReactionsWhereUniqueInput | ReactionsWhereUniqueInput[]
    connect?: ReactionsWhereUniqueInput | ReactionsWhereUniqueInput[]
    update?: ReactionsUpdateWithWhereUniqueWithoutArticleInput | ReactionsUpdateWithWhereUniqueWithoutArticleInput[]
    updateMany?: ReactionsUpdateManyWithWhereWithoutArticleInput | ReactionsUpdateManyWithWhereWithoutArticleInput[]
    deleteMany?: ReactionsScalarWhereInput | ReactionsScalarWhereInput[]
  }

  export type ArticleToTopicsUncheckedUpdateManyWithoutArticleNestedInput = {
    create?: XOR<ArticleToTopicsCreateWithoutArticleInput, ArticleToTopicsUncheckedCreateWithoutArticleInput> | ArticleToTopicsCreateWithoutArticleInput[] | ArticleToTopicsUncheckedCreateWithoutArticleInput[]
    connectOrCreate?: ArticleToTopicsCreateOrConnectWithoutArticleInput | ArticleToTopicsCreateOrConnectWithoutArticleInput[]
    upsert?: ArticleToTopicsUpsertWithWhereUniqueWithoutArticleInput | ArticleToTopicsUpsertWithWhereUniqueWithoutArticleInput[]
    createMany?: ArticleToTopicsCreateManyArticleInputEnvelope
    set?: ArticleToTopicsWhereUniqueInput | ArticleToTopicsWhereUniqueInput[]
    disconnect?: ArticleToTopicsWhereUniqueInput | ArticleToTopicsWhereUniqueInput[]
    delete?: ArticleToTopicsWhereUniqueInput | ArticleToTopicsWhereUniqueInput[]
    connect?: ArticleToTopicsWhereUniqueInput | ArticleToTopicsWhereUniqueInput[]
    update?: ArticleToTopicsUpdateWithWhereUniqueWithoutArticleInput | ArticleToTopicsUpdateWithWhereUniqueWithoutArticleInput[]
    updateMany?: ArticleToTopicsUpdateManyWithWhereWithoutArticleInput | ArticleToTopicsUpdateManyWithWhereWithoutArticleInput[]
    deleteMany?: ArticleToTopicsScalarWhereInput | ArticleToTopicsScalarWhereInput[]
  }

  export type PageviewsUncheckedUpdateManyWithoutArticleNestedInput = {
    create?: XOR<PageviewsCreateWithoutArticleInput, PageviewsUncheckedCreateWithoutArticleInput> | PageviewsCreateWithoutArticleInput[] | PageviewsUncheckedCreateWithoutArticleInput[]
    connectOrCreate?: PageviewsCreateOrConnectWithoutArticleInput | PageviewsCreateOrConnectWithoutArticleInput[]
    upsert?: PageviewsUpsertWithWhereUniqueWithoutArticleInput | PageviewsUpsertWithWhereUniqueWithoutArticleInput[]
    createMany?: PageviewsCreateManyArticleInputEnvelope
    set?: PageviewsWhereUniqueInput | PageviewsWhereUniqueInput[]
    disconnect?: PageviewsWhereUniqueInput | PageviewsWhereUniqueInput[]
    delete?: PageviewsWhereUniqueInput | PageviewsWhereUniqueInput[]
    connect?: PageviewsWhereUniqueInput | PageviewsWhereUniqueInput[]
    update?: PageviewsUpdateWithWhereUniqueWithoutArticleInput | PageviewsUpdateWithWhereUniqueWithoutArticleInput[]
    updateMany?: PageviewsUpdateManyWithWhereWithoutArticleInput | PageviewsUpdateManyWithWhereWithoutArticleInput[]
    deleteMany?: PageviewsScalarWhereInput | PageviewsScalarWhereInput[]
  }

  export type UsersCreateNestedOneWithoutReactionInput = {
    create?: XOR<UsersCreateWithoutReactionInput, UsersUncheckedCreateWithoutReactionInput>
    connectOrCreate?: UsersCreateOrConnectWithoutReactionInput
    connect?: UsersWhereUniqueInput
  }

  export type ArticlesCreateNestedOneWithoutReactionsInput = {
    create?: XOR<ArticlesCreateWithoutReactionsInput, ArticlesUncheckedCreateWithoutReactionsInput>
    connectOrCreate?: ArticlesCreateOrConnectWithoutReactionsInput
    connect?: ArticlesWhereUniqueInput
  }

  export type UsersUpdateOneRequiredWithoutReactionNestedInput = {
    create?: XOR<UsersCreateWithoutReactionInput, UsersUncheckedCreateWithoutReactionInput>
    connectOrCreate?: UsersCreateOrConnectWithoutReactionInput
    upsert?: UsersUpsertWithoutReactionInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutReactionInput, UsersUpdateWithoutReactionInput>, UsersUncheckedUpdateWithoutReactionInput>
  }

  export type ArticlesUpdateOneRequiredWithoutReactionsNestedInput = {
    create?: XOR<ArticlesCreateWithoutReactionsInput, ArticlesUncheckedCreateWithoutReactionsInput>
    connectOrCreate?: ArticlesCreateOrConnectWithoutReactionsInput
    upsert?: ArticlesUpsertWithoutReactionsInput
    connect?: ArticlesWhereUniqueInput
    update?: XOR<XOR<ArticlesUpdateToOneWithWhereWithoutReactionsInput, ArticlesUpdateWithoutReactionsInput>, ArticlesUncheckedUpdateWithoutReactionsInput>
  }

  export type ArticlesCreateNestedOneWithoutStarsInput = {
    create?: XOR<ArticlesCreateWithoutStarsInput, ArticlesUncheckedCreateWithoutStarsInput>
    connectOrCreate?: ArticlesCreateOrConnectWithoutStarsInput
    connect?: ArticlesWhereUniqueInput
  }

  export type UsersCreateNestedOneWithoutStarsInput = {
    create?: XOR<UsersCreateWithoutStarsInput, UsersUncheckedCreateWithoutStarsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutStarsInput
    connect?: UsersWhereUniqueInput
  }

  export type ArticlesUpdateOneWithoutStarsNestedInput = {
    create?: XOR<ArticlesCreateWithoutStarsInput, ArticlesUncheckedCreateWithoutStarsInput>
    connectOrCreate?: ArticlesCreateOrConnectWithoutStarsInput
    upsert?: ArticlesUpsertWithoutStarsInput
    disconnect?: ArticlesWhereInput | boolean
    delete?: ArticlesWhereInput | boolean
    connect?: ArticlesWhereUniqueInput
    update?: XOR<XOR<ArticlesUpdateToOneWithWhereWithoutStarsInput, ArticlesUpdateWithoutStarsInput>, ArticlesUncheckedUpdateWithoutStarsInput>
  }

  export type UsersUpdateOneRequiredWithoutStarsNestedInput = {
    create?: XOR<UsersCreateWithoutStarsInput, UsersUncheckedCreateWithoutStarsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutStarsInput
    upsert?: UsersUpsertWithoutStarsInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutStarsInput, UsersUpdateWithoutStarsInput>, UsersUncheckedUpdateWithoutStarsInput>
  }

  export type ArticleToTopicsCreateNestedManyWithoutTopicInput = {
    create?: XOR<ArticleToTopicsCreateWithoutTopicInput, ArticleToTopicsUncheckedCreateWithoutTopicInput> | ArticleToTopicsCreateWithoutTopicInput[] | ArticleToTopicsUncheckedCreateWithoutTopicInput[]
    connectOrCreate?: ArticleToTopicsCreateOrConnectWithoutTopicInput | ArticleToTopicsCreateOrConnectWithoutTopicInput[]
    createMany?: ArticleToTopicsCreateManyTopicInputEnvelope
    connect?: ArticleToTopicsWhereUniqueInput | ArticleToTopicsWhereUniqueInput[]
  }

  export type ArticleToTopicsUncheckedCreateNestedManyWithoutTopicInput = {
    create?: XOR<ArticleToTopicsCreateWithoutTopicInput, ArticleToTopicsUncheckedCreateWithoutTopicInput> | ArticleToTopicsCreateWithoutTopicInput[] | ArticleToTopicsUncheckedCreateWithoutTopicInput[]
    connectOrCreate?: ArticleToTopicsCreateOrConnectWithoutTopicInput | ArticleToTopicsCreateOrConnectWithoutTopicInput[]
    createMany?: ArticleToTopicsCreateManyTopicInputEnvelope
    connect?: ArticleToTopicsWhereUniqueInput | ArticleToTopicsWhereUniqueInput[]
  }

  export type ArticleToTopicsUpdateManyWithoutTopicNestedInput = {
    create?: XOR<ArticleToTopicsCreateWithoutTopicInput, ArticleToTopicsUncheckedCreateWithoutTopicInput> | ArticleToTopicsCreateWithoutTopicInput[] | ArticleToTopicsUncheckedCreateWithoutTopicInput[]
    connectOrCreate?: ArticleToTopicsCreateOrConnectWithoutTopicInput | ArticleToTopicsCreateOrConnectWithoutTopicInput[]
    upsert?: ArticleToTopicsUpsertWithWhereUniqueWithoutTopicInput | ArticleToTopicsUpsertWithWhereUniqueWithoutTopicInput[]
    createMany?: ArticleToTopicsCreateManyTopicInputEnvelope
    set?: ArticleToTopicsWhereUniqueInput | ArticleToTopicsWhereUniqueInput[]
    disconnect?: ArticleToTopicsWhereUniqueInput | ArticleToTopicsWhereUniqueInput[]
    delete?: ArticleToTopicsWhereUniqueInput | ArticleToTopicsWhereUniqueInput[]
    connect?: ArticleToTopicsWhereUniqueInput | ArticleToTopicsWhereUniqueInput[]
    update?: ArticleToTopicsUpdateWithWhereUniqueWithoutTopicInput | ArticleToTopicsUpdateWithWhereUniqueWithoutTopicInput[]
    updateMany?: ArticleToTopicsUpdateManyWithWhereWithoutTopicInput | ArticleToTopicsUpdateManyWithWhereWithoutTopicInput[]
    deleteMany?: ArticleToTopicsScalarWhereInput | ArticleToTopicsScalarWhereInput[]
  }

  export type ArticleToTopicsUncheckedUpdateManyWithoutTopicNestedInput = {
    create?: XOR<ArticleToTopicsCreateWithoutTopicInput, ArticleToTopicsUncheckedCreateWithoutTopicInput> | ArticleToTopicsCreateWithoutTopicInput[] | ArticleToTopicsUncheckedCreateWithoutTopicInput[]
    connectOrCreate?: ArticleToTopicsCreateOrConnectWithoutTopicInput | ArticleToTopicsCreateOrConnectWithoutTopicInput[]
    upsert?: ArticleToTopicsUpsertWithWhereUniqueWithoutTopicInput | ArticleToTopicsUpsertWithWhereUniqueWithoutTopicInput[]
    createMany?: ArticleToTopicsCreateManyTopicInputEnvelope
    set?: ArticleToTopicsWhereUniqueInput | ArticleToTopicsWhereUniqueInput[]
    disconnect?: ArticleToTopicsWhereUniqueInput | ArticleToTopicsWhereUniqueInput[]
    delete?: ArticleToTopicsWhereUniqueInput | ArticleToTopicsWhereUniqueInput[]
    connect?: ArticleToTopicsWhereUniqueInput | ArticleToTopicsWhereUniqueInput[]
    update?: ArticleToTopicsUpdateWithWhereUniqueWithoutTopicInput | ArticleToTopicsUpdateWithWhereUniqueWithoutTopicInput[]
    updateMany?: ArticleToTopicsUpdateManyWithWhereWithoutTopicInput | ArticleToTopicsUpdateManyWithWhereWithoutTopicInput[]
    deleteMany?: ArticleToTopicsScalarWhereInput | ArticleToTopicsScalarWhereInput[]
  }

  export type ArticlesCreateNestedOneWithoutTopicsInput = {
    create?: XOR<ArticlesCreateWithoutTopicsInput, ArticlesUncheckedCreateWithoutTopicsInput>
    connectOrCreate?: ArticlesCreateOrConnectWithoutTopicsInput
    connect?: ArticlesWhereUniqueInput
  }

  export type TopicsCreateNestedOneWithoutArticlesInput = {
    create?: XOR<TopicsCreateWithoutArticlesInput, TopicsUncheckedCreateWithoutArticlesInput>
    connectOrCreate?: TopicsCreateOrConnectWithoutArticlesInput
    connect?: TopicsWhereUniqueInput
  }

  export type ArticlesUpdateOneRequiredWithoutTopicsNestedInput = {
    create?: XOR<ArticlesCreateWithoutTopicsInput, ArticlesUncheckedCreateWithoutTopicsInput>
    connectOrCreate?: ArticlesCreateOrConnectWithoutTopicsInput
    upsert?: ArticlesUpsertWithoutTopicsInput
    connect?: ArticlesWhereUniqueInput
    update?: XOR<XOR<ArticlesUpdateToOneWithWhereWithoutTopicsInput, ArticlesUpdateWithoutTopicsInput>, ArticlesUncheckedUpdateWithoutTopicsInput>
  }

  export type TopicsUpdateOneRequiredWithoutArticlesNestedInput = {
    create?: XOR<TopicsCreateWithoutArticlesInput, TopicsUncheckedCreateWithoutArticlesInput>
    connectOrCreate?: TopicsCreateOrConnectWithoutArticlesInput
    upsert?: TopicsUpsertWithoutArticlesInput
    connect?: TopicsWhereUniqueInput
    update?: XOR<XOR<TopicsUpdateToOneWithWhereWithoutArticlesInput, TopicsUpdateWithoutArticlesInput>, TopicsUncheckedUpdateWithoutArticlesInput>
  }

  export type ArticlesCreateNestedOneWithoutPageviewsInput = {
    create?: XOR<ArticlesCreateWithoutPageviewsInput, ArticlesUncheckedCreateWithoutPageviewsInput>
    connectOrCreate?: ArticlesCreateOrConnectWithoutPageviewsInput
    connect?: ArticlesWhereUniqueInput
  }

  export type UsersCreateNestedOneWithoutPageviewsInput = {
    create?: XOR<UsersCreateWithoutPageviewsInput, UsersUncheckedCreateWithoutPageviewsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutPageviewsInput
    connect?: UsersWhereUniqueInput
  }

  export type ArticlesUpdateOneWithoutPageviewsNestedInput = {
    create?: XOR<ArticlesCreateWithoutPageviewsInput, ArticlesUncheckedCreateWithoutPageviewsInput>
    connectOrCreate?: ArticlesCreateOrConnectWithoutPageviewsInput
    upsert?: ArticlesUpsertWithoutPageviewsInput
    disconnect?: ArticlesWhereInput | boolean
    delete?: ArticlesWhereInput | boolean
    connect?: ArticlesWhereUniqueInput
    update?: XOR<XOR<ArticlesUpdateToOneWithWhereWithoutPageviewsInput, ArticlesUpdateWithoutPageviewsInput>, ArticlesUncheckedUpdateWithoutPageviewsInput>
  }

  export type UsersUpdateOneRequiredWithoutPageviewsNestedInput = {
    create?: XOR<UsersCreateWithoutPageviewsInput, UsersUncheckedCreateWithoutPageviewsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutPageviewsInput
    upsert?: UsersUpsertWithoutPageviewsInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutPageviewsInput, UsersUpdateWithoutPageviewsInput>, UsersUncheckedUpdateWithoutPageviewsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
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
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
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

  export type ReactionsCreateWithoutUserInput = {
    id?: string
    reactionText: string
    createdAt: Date | string
    deletedAt?: Date | string | null
    article: ArticlesCreateNestedOneWithoutReactionsInput
  }

  export type ReactionsUncheckedCreateWithoutUserInput = {
    id?: string
    articleId: string
    reactionText: string
    createdAt: Date | string
    deletedAt?: Date | string | null
  }

  export type ReactionsCreateOrConnectWithoutUserInput = {
    where: ReactionsWhereUniqueInput
    create: XOR<ReactionsCreateWithoutUserInput, ReactionsUncheckedCreateWithoutUserInput>
  }

  export type ReactionsCreateManyUserInputEnvelope = {
    data: ReactionsCreateManyUserInput | ReactionsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type StarsCreateWithoutUserInput = {
    id?: string
    createdAt: Date | string
    deletedAt?: Date | string | null
    article?: ArticlesCreateNestedOneWithoutStarsInput
  }

  export type StarsUncheckedCreateWithoutUserInput = {
    id?: string
    articleId?: string | null
    createdAt: Date | string
    deletedAt?: Date | string | null
  }

  export type StarsCreateOrConnectWithoutUserInput = {
    where: StarsWhereUniqueInput
    create: XOR<StarsCreateWithoutUserInput, StarsUncheckedCreateWithoutUserInput>
  }

  export type StarsCreateManyUserInputEnvelope = {
    data: StarsCreateManyUserInput | StarsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PageviewsCreateWithoutUserInput = {
    id?: string
    createdAt: Date | string
    deletedAt?: Date | string | null
    article?: ArticlesCreateNestedOneWithoutPageviewsInput
  }

  export type PageviewsUncheckedCreateWithoutUserInput = {
    id?: string
    articleId?: string | null
    createdAt: Date | string
    deletedAt?: Date | string | null
  }

  export type PageviewsCreateOrConnectWithoutUserInput = {
    where: PageviewsWhereUniqueInput
    create: XOR<PageviewsCreateWithoutUserInput, PageviewsUncheckedCreateWithoutUserInput>
  }

  export type PageviewsCreateManyUserInputEnvelope = {
    data: PageviewsCreateManyUserInput | PageviewsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ReactionsUpsertWithWhereUniqueWithoutUserInput = {
    where: ReactionsWhereUniqueInput
    update: XOR<ReactionsUpdateWithoutUserInput, ReactionsUncheckedUpdateWithoutUserInput>
    create: XOR<ReactionsCreateWithoutUserInput, ReactionsUncheckedCreateWithoutUserInput>
  }

  export type ReactionsUpdateWithWhereUniqueWithoutUserInput = {
    where: ReactionsWhereUniqueInput
    data: XOR<ReactionsUpdateWithoutUserInput, ReactionsUncheckedUpdateWithoutUserInput>
  }

  export type ReactionsUpdateManyWithWhereWithoutUserInput = {
    where: ReactionsScalarWhereInput
    data: XOR<ReactionsUpdateManyMutationInput, ReactionsUncheckedUpdateManyWithoutUserInput>
  }

  export type ReactionsScalarWhereInput = {
    AND?: ReactionsScalarWhereInput | ReactionsScalarWhereInput[]
    OR?: ReactionsScalarWhereInput[]
    NOT?: ReactionsScalarWhereInput | ReactionsScalarWhereInput[]
    id?: StringFilter<"Reactions"> | string
    userId?: StringFilter<"Reactions"> | string
    articleId?: StringFilter<"Reactions"> | string
    reactionText?: StringFilter<"Reactions"> | string
    createdAt?: DateTimeFilter<"Reactions"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Reactions"> | Date | string | null
  }

  export type StarsUpsertWithWhereUniqueWithoutUserInput = {
    where: StarsWhereUniqueInput
    update: XOR<StarsUpdateWithoutUserInput, StarsUncheckedUpdateWithoutUserInput>
    create: XOR<StarsCreateWithoutUserInput, StarsUncheckedCreateWithoutUserInput>
  }

  export type StarsUpdateWithWhereUniqueWithoutUserInput = {
    where: StarsWhereUniqueInput
    data: XOR<StarsUpdateWithoutUserInput, StarsUncheckedUpdateWithoutUserInput>
  }

  export type StarsUpdateManyWithWhereWithoutUserInput = {
    where: StarsScalarWhereInput
    data: XOR<StarsUpdateManyMutationInput, StarsUncheckedUpdateManyWithoutUserInput>
  }

  export type StarsScalarWhereInput = {
    AND?: StarsScalarWhereInput | StarsScalarWhereInput[]
    OR?: StarsScalarWhereInput[]
    NOT?: StarsScalarWhereInput | StarsScalarWhereInput[]
    id?: StringFilter<"Stars"> | string
    articleId?: StringNullableFilter<"Stars"> | string | null
    userId?: StringFilter<"Stars"> | string
    createdAt?: DateTimeFilter<"Stars"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Stars"> | Date | string | null
  }

  export type PageviewsUpsertWithWhereUniqueWithoutUserInput = {
    where: PageviewsWhereUniqueInput
    update: XOR<PageviewsUpdateWithoutUserInput, PageviewsUncheckedUpdateWithoutUserInput>
    create: XOR<PageviewsCreateWithoutUserInput, PageviewsUncheckedCreateWithoutUserInput>
  }

  export type PageviewsUpdateWithWhereUniqueWithoutUserInput = {
    where: PageviewsWhereUniqueInput
    data: XOR<PageviewsUpdateWithoutUserInput, PageviewsUncheckedUpdateWithoutUserInput>
  }

  export type PageviewsUpdateManyWithWhereWithoutUserInput = {
    where: PageviewsScalarWhereInput
    data: XOR<PageviewsUpdateManyMutationInput, PageviewsUncheckedUpdateManyWithoutUserInput>
  }

  export type PageviewsScalarWhereInput = {
    AND?: PageviewsScalarWhereInput | PageviewsScalarWhereInput[]
    OR?: PageviewsScalarWhereInput[]
    NOT?: PageviewsScalarWhereInput | PageviewsScalarWhereInput[]
    id?: StringFilter<"Pageviews"> | string
    articleId?: StringNullableFilter<"Pageviews"> | string | null
    userId?: StringFilter<"Pageviews"> | string
    createdAt?: DateTimeFilter<"Pageviews"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Pageviews"> | Date | string | null
  }

  export type ArticlesCreateWithoutAuthorInput = {
    id?: string
    title: string
    description: string
    articleMarkdown: string
    imageUrl?: string | null
    createdAt: Date | string
    deletedAt?: Date | string | null
    stars?: StarsCreateNestedManyWithoutArticleInput
    reactions?: ReactionsCreateNestedManyWithoutArticleInput
    topics?: ArticleToTopicsCreateNestedManyWithoutArticleInput
    pageviews?: PageviewsCreateNestedManyWithoutArticleInput
  }

  export type ArticlesUncheckedCreateWithoutAuthorInput = {
    id?: string
    title: string
    description: string
    articleMarkdown: string
    imageUrl?: string | null
    createdAt: Date | string
    deletedAt?: Date | string | null
    stars?: StarsUncheckedCreateNestedManyWithoutArticleInput
    reactions?: ReactionsUncheckedCreateNestedManyWithoutArticleInput
    topics?: ArticleToTopicsUncheckedCreateNestedManyWithoutArticleInput
    pageviews?: PageviewsUncheckedCreateNestedManyWithoutArticleInput
  }

  export type ArticlesCreateOrConnectWithoutAuthorInput = {
    where: ArticlesWhereUniqueInput
    create: XOR<ArticlesCreateWithoutAuthorInput, ArticlesUncheckedCreateWithoutAuthorInput>
  }

  export type ArticlesCreateManyAuthorInputEnvelope = {
    data: ArticlesCreateManyAuthorInput | ArticlesCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type SessionsCreateWithoutAuthorInput = {
    id?: string
    password: string
    loggedInAt: Date | string
    loggedOutAdt?: Date | string | null
  }

  export type SessionsUncheckedCreateWithoutAuthorInput = {
    id?: string
    password: string
    loggedInAt: Date | string
    loggedOutAdt?: Date | string | null
  }

  export type SessionsCreateOrConnectWithoutAuthorInput = {
    where: SessionsWhereUniqueInput
    create: XOR<SessionsCreateWithoutAuthorInput, SessionsUncheckedCreateWithoutAuthorInput>
  }

  export type SessionsCreateManyAuthorInputEnvelope = {
    data: SessionsCreateManyAuthorInput | SessionsCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type ArticlesUpsertWithWhereUniqueWithoutAuthorInput = {
    where: ArticlesWhereUniqueInput
    update: XOR<ArticlesUpdateWithoutAuthorInput, ArticlesUncheckedUpdateWithoutAuthorInput>
    create: XOR<ArticlesCreateWithoutAuthorInput, ArticlesUncheckedCreateWithoutAuthorInput>
  }

  export type ArticlesUpdateWithWhereUniqueWithoutAuthorInput = {
    where: ArticlesWhereUniqueInput
    data: XOR<ArticlesUpdateWithoutAuthorInput, ArticlesUncheckedUpdateWithoutAuthorInput>
  }

  export type ArticlesUpdateManyWithWhereWithoutAuthorInput = {
    where: ArticlesScalarWhereInput
    data: XOR<ArticlesUpdateManyMutationInput, ArticlesUncheckedUpdateManyWithoutAuthorInput>
  }

  export type ArticlesScalarWhereInput = {
    AND?: ArticlesScalarWhereInput | ArticlesScalarWhereInput[]
    OR?: ArticlesScalarWhereInput[]
    NOT?: ArticlesScalarWhereInput | ArticlesScalarWhereInput[]
    id?: StringFilter<"Articles"> | string
    title?: StringFilter<"Articles"> | string
    description?: StringFilter<"Articles"> | string
    articleMarkdown?: StringFilter<"Articles"> | string
    imageUrl?: StringNullableFilter<"Articles"> | string | null
    authorId?: StringFilter<"Articles"> | string
    createdAt?: DateTimeFilter<"Articles"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Articles"> | Date | string | null
  }

  export type SessionsUpsertWithWhereUniqueWithoutAuthorInput = {
    where: SessionsWhereUniqueInput
    update: XOR<SessionsUpdateWithoutAuthorInput, SessionsUncheckedUpdateWithoutAuthorInput>
    create: XOR<SessionsCreateWithoutAuthorInput, SessionsUncheckedCreateWithoutAuthorInput>
  }

  export type SessionsUpdateWithWhereUniqueWithoutAuthorInput = {
    where: SessionsWhereUniqueInput
    data: XOR<SessionsUpdateWithoutAuthorInput, SessionsUncheckedUpdateWithoutAuthorInput>
  }

  export type SessionsUpdateManyWithWhereWithoutAuthorInput = {
    where: SessionsScalarWhereInput
    data: XOR<SessionsUpdateManyMutationInput, SessionsUncheckedUpdateManyWithoutAuthorInput>
  }

  export type SessionsScalarWhereInput = {
    AND?: SessionsScalarWhereInput | SessionsScalarWhereInput[]
    OR?: SessionsScalarWhereInput[]
    NOT?: SessionsScalarWhereInput | SessionsScalarWhereInput[]
    id?: StringFilter<"Sessions"> | string
    authorId?: StringFilter<"Sessions"> | string
    password?: StringFilter<"Sessions"> | string
    loggedInAt?: DateTimeFilter<"Sessions"> | Date | string
    loggedOutAdt?: DateTimeNullableFilter<"Sessions"> | Date | string | null
  }

  export type AuthorsCreateWithoutSessionsInput = {
    id?: string
    authorId: string
    password: string
    fullName: string
    registeredAt: Date | string
    deletedAt?: Date | string | null
    articles?: ArticlesCreateNestedManyWithoutAuthorInput
  }

  export type AuthorsUncheckedCreateWithoutSessionsInput = {
    id?: string
    authorId: string
    password: string
    fullName: string
    registeredAt: Date | string
    deletedAt?: Date | string | null
    articles?: ArticlesUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type AuthorsCreateOrConnectWithoutSessionsInput = {
    where: AuthorsWhereUniqueInput
    create: XOR<AuthorsCreateWithoutSessionsInput, AuthorsUncheckedCreateWithoutSessionsInput>
  }

  export type AuthorsUpsertWithoutSessionsInput = {
    update: XOR<AuthorsUpdateWithoutSessionsInput, AuthorsUncheckedUpdateWithoutSessionsInput>
    create: XOR<AuthorsCreateWithoutSessionsInput, AuthorsUncheckedCreateWithoutSessionsInput>
    where?: AuthorsWhereInput
  }

  export type AuthorsUpdateToOneWithWhereWithoutSessionsInput = {
    where?: AuthorsWhereInput
    data: XOR<AuthorsUpdateWithoutSessionsInput, AuthorsUncheckedUpdateWithoutSessionsInput>
  }

  export type AuthorsUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    articles?: ArticlesUpdateManyWithoutAuthorNestedInput
  }

  export type AuthorsUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    articles?: ArticlesUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type AuthorsCreateWithoutArticlesInput = {
    id?: string
    authorId: string
    password: string
    fullName: string
    registeredAt: Date | string
    deletedAt?: Date | string | null
    sessions?: SessionsCreateNestedManyWithoutAuthorInput
  }

  export type AuthorsUncheckedCreateWithoutArticlesInput = {
    id?: string
    authorId: string
    password: string
    fullName: string
    registeredAt: Date | string
    deletedAt?: Date | string | null
    sessions?: SessionsUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type AuthorsCreateOrConnectWithoutArticlesInput = {
    where: AuthorsWhereUniqueInput
    create: XOR<AuthorsCreateWithoutArticlesInput, AuthorsUncheckedCreateWithoutArticlesInput>
  }

  export type StarsCreateWithoutArticleInput = {
    id?: string
    createdAt: Date | string
    deletedAt?: Date | string | null
    user: UsersCreateNestedOneWithoutStarsInput
  }

  export type StarsUncheckedCreateWithoutArticleInput = {
    id?: string
    userId: string
    createdAt: Date | string
    deletedAt?: Date | string | null
  }

  export type StarsCreateOrConnectWithoutArticleInput = {
    where: StarsWhereUniqueInput
    create: XOR<StarsCreateWithoutArticleInput, StarsUncheckedCreateWithoutArticleInput>
  }

  export type StarsCreateManyArticleInputEnvelope = {
    data: StarsCreateManyArticleInput | StarsCreateManyArticleInput[]
    skipDuplicates?: boolean
  }

  export type ReactionsCreateWithoutArticleInput = {
    id?: string
    reactionText: string
    createdAt: Date | string
    deletedAt?: Date | string | null
    user: UsersCreateNestedOneWithoutReactionInput
  }

  export type ReactionsUncheckedCreateWithoutArticleInput = {
    id?: string
    userId: string
    reactionText: string
    createdAt: Date | string
    deletedAt?: Date | string | null
  }

  export type ReactionsCreateOrConnectWithoutArticleInput = {
    where: ReactionsWhereUniqueInput
    create: XOR<ReactionsCreateWithoutArticleInput, ReactionsUncheckedCreateWithoutArticleInput>
  }

  export type ReactionsCreateManyArticleInputEnvelope = {
    data: ReactionsCreateManyArticleInput | ReactionsCreateManyArticleInput[]
    skipDuplicates?: boolean
  }

  export type ArticleToTopicsCreateWithoutArticleInput = {
    id?: string
    createdAt: Date | string
    deletedAt?: Date | string | null
    topic: TopicsCreateNestedOneWithoutArticlesInput
  }

  export type ArticleToTopicsUncheckedCreateWithoutArticleInput = {
    id?: string
    topicId: string
    createdAt: Date | string
    deletedAt?: Date | string | null
  }

  export type ArticleToTopicsCreateOrConnectWithoutArticleInput = {
    where: ArticleToTopicsWhereUniqueInput
    create: XOR<ArticleToTopicsCreateWithoutArticleInput, ArticleToTopicsUncheckedCreateWithoutArticleInput>
  }

  export type ArticleToTopicsCreateManyArticleInputEnvelope = {
    data: ArticleToTopicsCreateManyArticleInput | ArticleToTopicsCreateManyArticleInput[]
    skipDuplicates?: boolean
  }

  export type PageviewsCreateWithoutArticleInput = {
    id?: string
    createdAt: Date | string
    deletedAt?: Date | string | null
    user: UsersCreateNestedOneWithoutPageviewsInput
  }

  export type PageviewsUncheckedCreateWithoutArticleInput = {
    id?: string
    userId: string
    createdAt: Date | string
    deletedAt?: Date | string | null
  }

  export type PageviewsCreateOrConnectWithoutArticleInput = {
    where: PageviewsWhereUniqueInput
    create: XOR<PageviewsCreateWithoutArticleInput, PageviewsUncheckedCreateWithoutArticleInput>
  }

  export type PageviewsCreateManyArticleInputEnvelope = {
    data: PageviewsCreateManyArticleInput | PageviewsCreateManyArticleInput[]
    skipDuplicates?: boolean
  }

  export type AuthorsUpsertWithoutArticlesInput = {
    update: XOR<AuthorsUpdateWithoutArticlesInput, AuthorsUncheckedUpdateWithoutArticlesInput>
    create: XOR<AuthorsCreateWithoutArticlesInput, AuthorsUncheckedCreateWithoutArticlesInput>
    where?: AuthorsWhereInput
  }

  export type AuthorsUpdateToOneWithWhereWithoutArticlesInput = {
    where?: AuthorsWhereInput
    data: XOR<AuthorsUpdateWithoutArticlesInput, AuthorsUncheckedUpdateWithoutArticlesInput>
  }

  export type AuthorsUpdateWithoutArticlesInput = {
    id?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessions?: SessionsUpdateManyWithoutAuthorNestedInput
  }

  export type AuthorsUncheckedUpdateWithoutArticlesInput = {
    id?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessions?: SessionsUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type StarsUpsertWithWhereUniqueWithoutArticleInput = {
    where: StarsWhereUniqueInput
    update: XOR<StarsUpdateWithoutArticleInput, StarsUncheckedUpdateWithoutArticleInput>
    create: XOR<StarsCreateWithoutArticleInput, StarsUncheckedCreateWithoutArticleInput>
  }

  export type StarsUpdateWithWhereUniqueWithoutArticleInput = {
    where: StarsWhereUniqueInput
    data: XOR<StarsUpdateWithoutArticleInput, StarsUncheckedUpdateWithoutArticleInput>
  }

  export type StarsUpdateManyWithWhereWithoutArticleInput = {
    where: StarsScalarWhereInput
    data: XOR<StarsUpdateManyMutationInput, StarsUncheckedUpdateManyWithoutArticleInput>
  }

  export type ReactionsUpsertWithWhereUniqueWithoutArticleInput = {
    where: ReactionsWhereUniqueInput
    update: XOR<ReactionsUpdateWithoutArticleInput, ReactionsUncheckedUpdateWithoutArticleInput>
    create: XOR<ReactionsCreateWithoutArticleInput, ReactionsUncheckedCreateWithoutArticleInput>
  }

  export type ReactionsUpdateWithWhereUniqueWithoutArticleInput = {
    where: ReactionsWhereUniqueInput
    data: XOR<ReactionsUpdateWithoutArticleInput, ReactionsUncheckedUpdateWithoutArticleInput>
  }

  export type ReactionsUpdateManyWithWhereWithoutArticleInput = {
    where: ReactionsScalarWhereInput
    data: XOR<ReactionsUpdateManyMutationInput, ReactionsUncheckedUpdateManyWithoutArticleInput>
  }

  export type ArticleToTopicsUpsertWithWhereUniqueWithoutArticleInput = {
    where: ArticleToTopicsWhereUniqueInput
    update: XOR<ArticleToTopicsUpdateWithoutArticleInput, ArticleToTopicsUncheckedUpdateWithoutArticleInput>
    create: XOR<ArticleToTopicsCreateWithoutArticleInput, ArticleToTopicsUncheckedCreateWithoutArticleInput>
  }

  export type ArticleToTopicsUpdateWithWhereUniqueWithoutArticleInput = {
    where: ArticleToTopicsWhereUniqueInput
    data: XOR<ArticleToTopicsUpdateWithoutArticleInput, ArticleToTopicsUncheckedUpdateWithoutArticleInput>
  }

  export type ArticleToTopicsUpdateManyWithWhereWithoutArticleInput = {
    where: ArticleToTopicsScalarWhereInput
    data: XOR<ArticleToTopicsUpdateManyMutationInput, ArticleToTopicsUncheckedUpdateManyWithoutArticleInput>
  }

  export type ArticleToTopicsScalarWhereInput = {
    AND?: ArticleToTopicsScalarWhereInput | ArticleToTopicsScalarWhereInput[]
    OR?: ArticleToTopicsScalarWhereInput[]
    NOT?: ArticleToTopicsScalarWhereInput | ArticleToTopicsScalarWhereInput[]
    id?: StringFilter<"ArticleToTopics"> | string
    articleId?: StringFilter<"ArticleToTopics"> | string
    topicId?: StringFilter<"ArticleToTopics"> | string
    createdAt?: DateTimeFilter<"ArticleToTopics"> | Date | string
    deletedAt?: DateTimeNullableFilter<"ArticleToTopics"> | Date | string | null
  }

  export type PageviewsUpsertWithWhereUniqueWithoutArticleInput = {
    where: PageviewsWhereUniqueInput
    update: XOR<PageviewsUpdateWithoutArticleInput, PageviewsUncheckedUpdateWithoutArticleInput>
    create: XOR<PageviewsCreateWithoutArticleInput, PageviewsUncheckedCreateWithoutArticleInput>
  }

  export type PageviewsUpdateWithWhereUniqueWithoutArticleInput = {
    where: PageviewsWhereUniqueInput
    data: XOR<PageviewsUpdateWithoutArticleInput, PageviewsUncheckedUpdateWithoutArticleInput>
  }

  export type PageviewsUpdateManyWithWhereWithoutArticleInput = {
    where: PageviewsScalarWhereInput
    data: XOR<PageviewsUpdateManyMutationInput, PageviewsUncheckedUpdateManyWithoutArticleInput>
  }

  export type UsersCreateWithoutReactionInput = {
    id?: string
    fullName: string
    registeredAt: Date | string
    deletedAt?: Date | string | null
    stars?: StarsCreateNestedManyWithoutUserInput
    pageviews?: PageviewsCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutReactionInput = {
    id?: string
    fullName: string
    registeredAt: Date | string
    deletedAt?: Date | string | null
    stars?: StarsUncheckedCreateNestedManyWithoutUserInput
    pageviews?: PageviewsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutReactionInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutReactionInput, UsersUncheckedCreateWithoutReactionInput>
  }

  export type ArticlesCreateWithoutReactionsInput = {
    id?: string
    title: string
    description: string
    articleMarkdown: string
    imageUrl?: string | null
    createdAt: Date | string
    deletedAt?: Date | string | null
    author: AuthorsCreateNestedOneWithoutArticlesInput
    stars?: StarsCreateNestedManyWithoutArticleInput
    topics?: ArticleToTopicsCreateNestedManyWithoutArticleInput
    pageviews?: PageviewsCreateNestedManyWithoutArticleInput
  }

  export type ArticlesUncheckedCreateWithoutReactionsInput = {
    id?: string
    title: string
    description: string
    articleMarkdown: string
    imageUrl?: string | null
    authorId: string
    createdAt: Date | string
    deletedAt?: Date | string | null
    stars?: StarsUncheckedCreateNestedManyWithoutArticleInput
    topics?: ArticleToTopicsUncheckedCreateNestedManyWithoutArticleInput
    pageviews?: PageviewsUncheckedCreateNestedManyWithoutArticleInput
  }

  export type ArticlesCreateOrConnectWithoutReactionsInput = {
    where: ArticlesWhereUniqueInput
    create: XOR<ArticlesCreateWithoutReactionsInput, ArticlesUncheckedCreateWithoutReactionsInput>
  }

  export type UsersUpsertWithoutReactionInput = {
    update: XOR<UsersUpdateWithoutReactionInput, UsersUncheckedUpdateWithoutReactionInput>
    create: XOR<UsersCreateWithoutReactionInput, UsersUncheckedCreateWithoutReactionInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutReactionInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutReactionInput, UsersUncheckedUpdateWithoutReactionInput>
  }

  export type UsersUpdateWithoutReactionInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stars?: StarsUpdateManyWithoutUserNestedInput
    pageviews?: PageviewsUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutReactionInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stars?: StarsUncheckedUpdateManyWithoutUserNestedInput
    pageviews?: PageviewsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ArticlesUpsertWithoutReactionsInput = {
    update: XOR<ArticlesUpdateWithoutReactionsInput, ArticlesUncheckedUpdateWithoutReactionsInput>
    create: XOR<ArticlesCreateWithoutReactionsInput, ArticlesUncheckedCreateWithoutReactionsInput>
    where?: ArticlesWhereInput
  }

  export type ArticlesUpdateToOneWithWhereWithoutReactionsInput = {
    where?: ArticlesWhereInput
    data: XOR<ArticlesUpdateWithoutReactionsInput, ArticlesUncheckedUpdateWithoutReactionsInput>
  }

  export type ArticlesUpdateWithoutReactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    articleMarkdown?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    author?: AuthorsUpdateOneRequiredWithoutArticlesNestedInput
    stars?: StarsUpdateManyWithoutArticleNestedInput
    topics?: ArticleToTopicsUpdateManyWithoutArticleNestedInput
    pageviews?: PageviewsUpdateManyWithoutArticleNestedInput
  }

  export type ArticlesUncheckedUpdateWithoutReactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    articleMarkdown?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    authorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stars?: StarsUncheckedUpdateManyWithoutArticleNestedInput
    topics?: ArticleToTopicsUncheckedUpdateManyWithoutArticleNestedInput
    pageviews?: PageviewsUncheckedUpdateManyWithoutArticleNestedInput
  }

  export type ArticlesCreateWithoutStarsInput = {
    id?: string
    title: string
    description: string
    articleMarkdown: string
    imageUrl?: string | null
    createdAt: Date | string
    deletedAt?: Date | string | null
    author: AuthorsCreateNestedOneWithoutArticlesInput
    reactions?: ReactionsCreateNestedManyWithoutArticleInput
    topics?: ArticleToTopicsCreateNestedManyWithoutArticleInput
    pageviews?: PageviewsCreateNestedManyWithoutArticleInput
  }

  export type ArticlesUncheckedCreateWithoutStarsInput = {
    id?: string
    title: string
    description: string
    articleMarkdown: string
    imageUrl?: string | null
    authorId: string
    createdAt: Date | string
    deletedAt?: Date | string | null
    reactions?: ReactionsUncheckedCreateNestedManyWithoutArticleInput
    topics?: ArticleToTopicsUncheckedCreateNestedManyWithoutArticleInput
    pageviews?: PageviewsUncheckedCreateNestedManyWithoutArticleInput
  }

  export type ArticlesCreateOrConnectWithoutStarsInput = {
    where: ArticlesWhereUniqueInput
    create: XOR<ArticlesCreateWithoutStarsInput, ArticlesUncheckedCreateWithoutStarsInput>
  }

  export type UsersCreateWithoutStarsInput = {
    id?: string
    fullName: string
    registeredAt: Date | string
    deletedAt?: Date | string | null
    reaction?: ReactionsCreateNestedManyWithoutUserInput
    pageviews?: PageviewsCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutStarsInput = {
    id?: string
    fullName: string
    registeredAt: Date | string
    deletedAt?: Date | string | null
    reaction?: ReactionsUncheckedCreateNestedManyWithoutUserInput
    pageviews?: PageviewsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutStarsInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutStarsInput, UsersUncheckedCreateWithoutStarsInput>
  }

  export type ArticlesUpsertWithoutStarsInput = {
    update: XOR<ArticlesUpdateWithoutStarsInput, ArticlesUncheckedUpdateWithoutStarsInput>
    create: XOR<ArticlesCreateWithoutStarsInput, ArticlesUncheckedCreateWithoutStarsInput>
    where?: ArticlesWhereInput
  }

  export type ArticlesUpdateToOneWithWhereWithoutStarsInput = {
    where?: ArticlesWhereInput
    data: XOR<ArticlesUpdateWithoutStarsInput, ArticlesUncheckedUpdateWithoutStarsInput>
  }

  export type ArticlesUpdateWithoutStarsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    articleMarkdown?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    author?: AuthorsUpdateOneRequiredWithoutArticlesNestedInput
    reactions?: ReactionsUpdateManyWithoutArticleNestedInput
    topics?: ArticleToTopicsUpdateManyWithoutArticleNestedInput
    pageviews?: PageviewsUpdateManyWithoutArticleNestedInput
  }

  export type ArticlesUncheckedUpdateWithoutStarsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    articleMarkdown?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    authorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reactions?: ReactionsUncheckedUpdateManyWithoutArticleNestedInput
    topics?: ArticleToTopicsUncheckedUpdateManyWithoutArticleNestedInput
    pageviews?: PageviewsUncheckedUpdateManyWithoutArticleNestedInput
  }

  export type UsersUpsertWithoutStarsInput = {
    update: XOR<UsersUpdateWithoutStarsInput, UsersUncheckedUpdateWithoutStarsInput>
    create: XOR<UsersCreateWithoutStarsInput, UsersUncheckedCreateWithoutStarsInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutStarsInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutStarsInput, UsersUncheckedUpdateWithoutStarsInput>
  }

  export type UsersUpdateWithoutStarsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reaction?: ReactionsUpdateManyWithoutUserNestedInput
    pageviews?: PageviewsUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutStarsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reaction?: ReactionsUncheckedUpdateManyWithoutUserNestedInput
    pageviews?: PageviewsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ArticleToTopicsCreateWithoutTopicInput = {
    id?: string
    createdAt: Date | string
    deletedAt?: Date | string | null
    article: ArticlesCreateNestedOneWithoutTopicsInput
  }

  export type ArticleToTopicsUncheckedCreateWithoutTopicInput = {
    id?: string
    articleId: string
    createdAt: Date | string
    deletedAt?: Date | string | null
  }

  export type ArticleToTopicsCreateOrConnectWithoutTopicInput = {
    where: ArticleToTopicsWhereUniqueInput
    create: XOR<ArticleToTopicsCreateWithoutTopicInput, ArticleToTopicsUncheckedCreateWithoutTopicInput>
  }

  export type ArticleToTopicsCreateManyTopicInputEnvelope = {
    data: ArticleToTopicsCreateManyTopicInput | ArticleToTopicsCreateManyTopicInput[]
    skipDuplicates?: boolean
  }

  export type ArticleToTopicsUpsertWithWhereUniqueWithoutTopicInput = {
    where: ArticleToTopicsWhereUniqueInput
    update: XOR<ArticleToTopicsUpdateWithoutTopicInput, ArticleToTopicsUncheckedUpdateWithoutTopicInput>
    create: XOR<ArticleToTopicsCreateWithoutTopicInput, ArticleToTopicsUncheckedCreateWithoutTopicInput>
  }

  export type ArticleToTopicsUpdateWithWhereUniqueWithoutTopicInput = {
    where: ArticleToTopicsWhereUniqueInput
    data: XOR<ArticleToTopicsUpdateWithoutTopicInput, ArticleToTopicsUncheckedUpdateWithoutTopicInput>
  }

  export type ArticleToTopicsUpdateManyWithWhereWithoutTopicInput = {
    where: ArticleToTopicsScalarWhereInput
    data: XOR<ArticleToTopicsUpdateManyMutationInput, ArticleToTopicsUncheckedUpdateManyWithoutTopicInput>
  }

  export type ArticlesCreateWithoutTopicsInput = {
    id?: string
    title: string
    description: string
    articleMarkdown: string
    imageUrl?: string | null
    createdAt: Date | string
    deletedAt?: Date | string | null
    author: AuthorsCreateNestedOneWithoutArticlesInput
    stars?: StarsCreateNestedManyWithoutArticleInput
    reactions?: ReactionsCreateNestedManyWithoutArticleInput
    pageviews?: PageviewsCreateNestedManyWithoutArticleInput
  }

  export type ArticlesUncheckedCreateWithoutTopicsInput = {
    id?: string
    title: string
    description: string
    articleMarkdown: string
    imageUrl?: string | null
    authorId: string
    createdAt: Date | string
    deletedAt?: Date | string | null
    stars?: StarsUncheckedCreateNestedManyWithoutArticleInput
    reactions?: ReactionsUncheckedCreateNestedManyWithoutArticleInput
    pageviews?: PageviewsUncheckedCreateNestedManyWithoutArticleInput
  }

  export type ArticlesCreateOrConnectWithoutTopicsInput = {
    where: ArticlesWhereUniqueInput
    create: XOR<ArticlesCreateWithoutTopicsInput, ArticlesUncheckedCreateWithoutTopicsInput>
  }

  export type TopicsCreateWithoutArticlesInput = {
    id?: string
    topicName: string
    createdAt: Date | string
    deletedAt?: Date | string | null
  }

  export type TopicsUncheckedCreateWithoutArticlesInput = {
    id?: string
    topicName: string
    createdAt: Date | string
    deletedAt?: Date | string | null
  }

  export type TopicsCreateOrConnectWithoutArticlesInput = {
    where: TopicsWhereUniqueInput
    create: XOR<TopicsCreateWithoutArticlesInput, TopicsUncheckedCreateWithoutArticlesInput>
  }

  export type ArticlesUpsertWithoutTopicsInput = {
    update: XOR<ArticlesUpdateWithoutTopicsInput, ArticlesUncheckedUpdateWithoutTopicsInput>
    create: XOR<ArticlesCreateWithoutTopicsInput, ArticlesUncheckedCreateWithoutTopicsInput>
    where?: ArticlesWhereInput
  }

  export type ArticlesUpdateToOneWithWhereWithoutTopicsInput = {
    where?: ArticlesWhereInput
    data: XOR<ArticlesUpdateWithoutTopicsInput, ArticlesUncheckedUpdateWithoutTopicsInput>
  }

  export type ArticlesUpdateWithoutTopicsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    articleMarkdown?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    author?: AuthorsUpdateOneRequiredWithoutArticlesNestedInput
    stars?: StarsUpdateManyWithoutArticleNestedInput
    reactions?: ReactionsUpdateManyWithoutArticleNestedInput
    pageviews?: PageviewsUpdateManyWithoutArticleNestedInput
  }

  export type ArticlesUncheckedUpdateWithoutTopicsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    articleMarkdown?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    authorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stars?: StarsUncheckedUpdateManyWithoutArticleNestedInput
    reactions?: ReactionsUncheckedUpdateManyWithoutArticleNestedInput
    pageviews?: PageviewsUncheckedUpdateManyWithoutArticleNestedInput
  }

  export type TopicsUpsertWithoutArticlesInput = {
    update: XOR<TopicsUpdateWithoutArticlesInput, TopicsUncheckedUpdateWithoutArticlesInput>
    create: XOR<TopicsCreateWithoutArticlesInput, TopicsUncheckedCreateWithoutArticlesInput>
    where?: TopicsWhereInput
  }

  export type TopicsUpdateToOneWithWhereWithoutArticlesInput = {
    where?: TopicsWhereInput
    data: XOR<TopicsUpdateWithoutArticlesInput, TopicsUncheckedUpdateWithoutArticlesInput>
  }

  export type TopicsUpdateWithoutArticlesInput = {
    id?: StringFieldUpdateOperationsInput | string
    topicName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TopicsUncheckedUpdateWithoutArticlesInput = {
    id?: StringFieldUpdateOperationsInput | string
    topicName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ArticlesCreateWithoutPageviewsInput = {
    id?: string
    title: string
    description: string
    articleMarkdown: string
    imageUrl?: string | null
    createdAt: Date | string
    deletedAt?: Date | string | null
    author: AuthorsCreateNestedOneWithoutArticlesInput
    stars?: StarsCreateNestedManyWithoutArticleInput
    reactions?: ReactionsCreateNestedManyWithoutArticleInput
    topics?: ArticleToTopicsCreateNestedManyWithoutArticleInput
  }

  export type ArticlesUncheckedCreateWithoutPageviewsInput = {
    id?: string
    title: string
    description: string
    articleMarkdown: string
    imageUrl?: string | null
    authorId: string
    createdAt: Date | string
    deletedAt?: Date | string | null
    stars?: StarsUncheckedCreateNestedManyWithoutArticleInput
    reactions?: ReactionsUncheckedCreateNestedManyWithoutArticleInput
    topics?: ArticleToTopicsUncheckedCreateNestedManyWithoutArticleInput
  }

  export type ArticlesCreateOrConnectWithoutPageviewsInput = {
    where: ArticlesWhereUniqueInput
    create: XOR<ArticlesCreateWithoutPageviewsInput, ArticlesUncheckedCreateWithoutPageviewsInput>
  }

  export type UsersCreateWithoutPageviewsInput = {
    id?: string
    fullName: string
    registeredAt: Date | string
    deletedAt?: Date | string | null
    reaction?: ReactionsCreateNestedManyWithoutUserInput
    stars?: StarsCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutPageviewsInput = {
    id?: string
    fullName: string
    registeredAt: Date | string
    deletedAt?: Date | string | null
    reaction?: ReactionsUncheckedCreateNestedManyWithoutUserInput
    stars?: StarsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutPageviewsInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutPageviewsInput, UsersUncheckedCreateWithoutPageviewsInput>
  }

  export type ArticlesUpsertWithoutPageviewsInput = {
    update: XOR<ArticlesUpdateWithoutPageviewsInput, ArticlesUncheckedUpdateWithoutPageviewsInput>
    create: XOR<ArticlesCreateWithoutPageviewsInput, ArticlesUncheckedCreateWithoutPageviewsInput>
    where?: ArticlesWhereInput
  }

  export type ArticlesUpdateToOneWithWhereWithoutPageviewsInput = {
    where?: ArticlesWhereInput
    data: XOR<ArticlesUpdateWithoutPageviewsInput, ArticlesUncheckedUpdateWithoutPageviewsInput>
  }

  export type ArticlesUpdateWithoutPageviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    articleMarkdown?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    author?: AuthorsUpdateOneRequiredWithoutArticlesNestedInput
    stars?: StarsUpdateManyWithoutArticleNestedInput
    reactions?: ReactionsUpdateManyWithoutArticleNestedInput
    topics?: ArticleToTopicsUpdateManyWithoutArticleNestedInput
  }

  export type ArticlesUncheckedUpdateWithoutPageviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    articleMarkdown?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    authorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stars?: StarsUncheckedUpdateManyWithoutArticleNestedInput
    reactions?: ReactionsUncheckedUpdateManyWithoutArticleNestedInput
    topics?: ArticleToTopicsUncheckedUpdateManyWithoutArticleNestedInput
  }

  export type UsersUpsertWithoutPageviewsInput = {
    update: XOR<UsersUpdateWithoutPageviewsInput, UsersUncheckedUpdateWithoutPageviewsInput>
    create: XOR<UsersCreateWithoutPageviewsInput, UsersUncheckedCreateWithoutPageviewsInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutPageviewsInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutPageviewsInput, UsersUncheckedUpdateWithoutPageviewsInput>
  }

  export type UsersUpdateWithoutPageviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reaction?: ReactionsUpdateManyWithoutUserNestedInput
    stars?: StarsUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutPageviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reaction?: ReactionsUncheckedUpdateManyWithoutUserNestedInput
    stars?: StarsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ReactionsCreateManyUserInput = {
    id?: string
    articleId: string
    reactionText: string
    createdAt: Date | string
    deletedAt?: Date | string | null
  }

  export type StarsCreateManyUserInput = {
    id?: string
    articleId?: string | null
    createdAt: Date | string
    deletedAt?: Date | string | null
  }

  export type PageviewsCreateManyUserInput = {
    id?: string
    articleId?: string | null
    createdAt: Date | string
    deletedAt?: Date | string | null
  }

  export type ReactionsUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    reactionText?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    article?: ArticlesUpdateOneRequiredWithoutReactionsNestedInput
  }

  export type ReactionsUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    articleId?: StringFieldUpdateOperationsInput | string
    reactionText?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ReactionsUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    articleId?: StringFieldUpdateOperationsInput | string
    reactionText?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StarsUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    article?: ArticlesUpdateOneWithoutStarsNestedInput
  }

  export type StarsUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    articleId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StarsUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    articleId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PageviewsUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    article?: ArticlesUpdateOneWithoutPageviewsNestedInput
  }

  export type PageviewsUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    articleId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PageviewsUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    articleId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ArticlesCreateManyAuthorInput = {
    id?: string
    title: string
    description: string
    articleMarkdown: string
    imageUrl?: string | null
    createdAt: Date | string
    deletedAt?: Date | string | null
  }

  export type SessionsCreateManyAuthorInput = {
    id?: string
    password: string
    loggedInAt: Date | string
    loggedOutAdt?: Date | string | null
  }

  export type ArticlesUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    articleMarkdown?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stars?: StarsUpdateManyWithoutArticleNestedInput
    reactions?: ReactionsUpdateManyWithoutArticleNestedInput
    topics?: ArticleToTopicsUpdateManyWithoutArticleNestedInput
    pageviews?: PageviewsUpdateManyWithoutArticleNestedInput
  }

  export type ArticlesUncheckedUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    articleMarkdown?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stars?: StarsUncheckedUpdateManyWithoutArticleNestedInput
    reactions?: ReactionsUncheckedUpdateManyWithoutArticleNestedInput
    topics?: ArticleToTopicsUncheckedUpdateManyWithoutArticleNestedInput
    pageviews?: PageviewsUncheckedUpdateManyWithoutArticleNestedInput
  }

  export type ArticlesUncheckedUpdateManyWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    articleMarkdown?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SessionsUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    loggedInAt?: DateTimeFieldUpdateOperationsInput | Date | string
    loggedOutAdt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SessionsUncheckedUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    loggedInAt?: DateTimeFieldUpdateOperationsInput | Date | string
    loggedOutAdt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SessionsUncheckedUpdateManyWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    loggedInAt?: DateTimeFieldUpdateOperationsInput | Date | string
    loggedOutAdt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StarsCreateManyArticleInput = {
    id?: string
    userId: string
    createdAt: Date | string
    deletedAt?: Date | string | null
  }

  export type ReactionsCreateManyArticleInput = {
    id?: string
    userId: string
    reactionText: string
    createdAt: Date | string
    deletedAt?: Date | string | null
  }

  export type ArticleToTopicsCreateManyArticleInput = {
    id?: string
    topicId: string
    createdAt: Date | string
    deletedAt?: Date | string | null
  }

  export type PageviewsCreateManyArticleInput = {
    id?: string
    userId: string
    createdAt: Date | string
    deletedAt?: Date | string | null
  }

  export type StarsUpdateWithoutArticleInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UsersUpdateOneRequiredWithoutStarsNestedInput
  }

  export type StarsUncheckedUpdateWithoutArticleInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StarsUncheckedUpdateManyWithoutArticleInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ReactionsUpdateWithoutArticleInput = {
    id?: StringFieldUpdateOperationsInput | string
    reactionText?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UsersUpdateOneRequiredWithoutReactionNestedInput
  }

  export type ReactionsUncheckedUpdateWithoutArticleInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    reactionText?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ReactionsUncheckedUpdateManyWithoutArticleInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    reactionText?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ArticleToTopicsUpdateWithoutArticleInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    topic?: TopicsUpdateOneRequiredWithoutArticlesNestedInput
  }

  export type ArticleToTopicsUncheckedUpdateWithoutArticleInput = {
    id?: StringFieldUpdateOperationsInput | string
    topicId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ArticleToTopicsUncheckedUpdateManyWithoutArticleInput = {
    id?: StringFieldUpdateOperationsInput | string
    topicId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PageviewsUpdateWithoutArticleInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UsersUpdateOneRequiredWithoutPageviewsNestedInput
  }

  export type PageviewsUncheckedUpdateWithoutArticleInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PageviewsUncheckedUpdateManyWithoutArticleInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ArticleToTopicsCreateManyTopicInput = {
    id?: string
    articleId: string
    createdAt: Date | string
    deletedAt?: Date | string | null
  }

  export type ArticleToTopicsUpdateWithoutTopicInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    article?: ArticlesUpdateOneRequiredWithoutTopicsNestedInput
  }

  export type ArticleToTopicsUncheckedUpdateWithoutTopicInput = {
    id?: StringFieldUpdateOperationsInput | string
    articleId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ArticleToTopicsUncheckedUpdateManyWithoutTopicInput = {
    id?: StringFieldUpdateOperationsInput | string
    articleId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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