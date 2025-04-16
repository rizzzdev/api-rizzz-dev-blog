
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
 * Model Posts
 * 
 */
export type Posts = $Result.DefaultSelection<Prisma.$PostsPayload>
/**
 * Model Comments
 * 
 */
export type Comments = $Result.DefaultSelection<Prisma.$CommentsPayload>
/**
 * Model Likes
 * 
 */
export type Likes = $Result.DefaultSelection<Prisma.$LikesPayload>
/**
 * Model Categories
 * 
 */
export type Categories = $Result.DefaultSelection<Prisma.$CategoriesPayload>
/**
 * Model PostToCategories
 * 
 */
export type PostToCategories = $Result.DefaultSelection<Prisma.$PostToCategoriesPayload>
/**
 * Model Stars
 * 
 */
export type Stars = $Result.DefaultSelection<Prisma.$StarsPayload>

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
   * `prisma.posts`: Exposes CRUD operations for the **Posts** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Posts
    * const posts = await prisma.posts.findMany()
    * ```
    */
  get posts(): Prisma.PostsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.comments`: Exposes CRUD operations for the **Comments** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comments
    * const comments = await prisma.comments.findMany()
    * ```
    */
  get comments(): Prisma.CommentsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.likes`: Exposes CRUD operations for the **Likes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Likes
    * const likes = await prisma.likes.findMany()
    * ```
    */
  get likes(): Prisma.LikesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.categories`: Exposes CRUD operations for the **Categories** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.categories.findMany()
    * ```
    */
  get categories(): Prisma.CategoriesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.postToCategories`: Exposes CRUD operations for the **PostToCategories** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PostToCategories
    * const postToCategories = await prisma.postToCategories.findMany()
    * ```
    */
  get postToCategories(): Prisma.PostToCategoriesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.stars`: Exposes CRUD operations for the **Stars** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Stars
    * const stars = await prisma.stars.findMany()
    * ```
    */
  get stars(): Prisma.StarsDelegate<ExtArgs, ClientOptions>;
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
    Posts: 'Posts',
    Comments: 'Comments',
    Likes: 'Likes',
    Categories: 'Categories',
    PostToCategories: 'PostToCategories',
    Stars: 'Stars'
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
      modelProps: "users" | "authors" | "posts" | "comments" | "likes" | "categories" | "postToCategories" | "stars"
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
      Posts: {
        payload: Prisma.$PostsPayload<ExtArgs>
        fields: Prisma.PostsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostsPayload>
          }
          findFirst: {
            args: Prisma.PostsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostsPayload>
          }
          findMany: {
            args: Prisma.PostsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostsPayload>[]
          }
          create: {
            args: Prisma.PostsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostsPayload>
          }
          createMany: {
            args: Prisma.PostsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PostsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostsPayload>[]
          }
          delete: {
            args: Prisma.PostsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostsPayload>
          }
          update: {
            args: Prisma.PostsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostsPayload>
          }
          deleteMany: {
            args: Prisma.PostsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PostsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PostsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostsPayload>[]
          }
          upsert: {
            args: Prisma.PostsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostsPayload>
          }
          aggregate: {
            args: Prisma.PostsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePosts>
          }
          groupBy: {
            args: Prisma.PostsGroupByArgs<ExtArgs>
            result: $Utils.Optional<PostsGroupByOutputType>[]
          }
          count: {
            args: Prisma.PostsCountArgs<ExtArgs>
            result: $Utils.Optional<PostsCountAggregateOutputType> | number
          }
        }
      }
      Comments: {
        payload: Prisma.$CommentsPayload<ExtArgs>
        fields: Prisma.CommentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommentsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommentsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload>
          }
          findFirst: {
            args: Prisma.CommentsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommentsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload>
          }
          findMany: {
            args: Prisma.CommentsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload>[]
          }
          create: {
            args: Prisma.CommentsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload>
          }
          createMany: {
            args: Prisma.CommentsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CommentsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload>[]
          }
          delete: {
            args: Prisma.CommentsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload>
          }
          update: {
            args: Prisma.CommentsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload>
          }
          deleteMany: {
            args: Prisma.CommentsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CommentsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CommentsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload>[]
          }
          upsert: {
            args: Prisma.CommentsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload>
          }
          aggregate: {
            args: Prisma.CommentsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComments>
          }
          groupBy: {
            args: Prisma.CommentsGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommentsGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommentsCountArgs<ExtArgs>
            result: $Utils.Optional<CommentsCountAggregateOutputType> | number
          }
        }
      }
      Likes: {
        payload: Prisma.$LikesPayload<ExtArgs>
        fields: Prisma.LikesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LikesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LikesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikesPayload>
          }
          findFirst: {
            args: Prisma.LikesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LikesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikesPayload>
          }
          findMany: {
            args: Prisma.LikesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikesPayload>[]
          }
          create: {
            args: Prisma.LikesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikesPayload>
          }
          createMany: {
            args: Prisma.LikesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LikesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikesPayload>[]
          }
          delete: {
            args: Prisma.LikesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikesPayload>
          }
          update: {
            args: Prisma.LikesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikesPayload>
          }
          deleteMany: {
            args: Prisma.LikesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LikesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LikesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikesPayload>[]
          }
          upsert: {
            args: Prisma.LikesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikesPayload>
          }
          aggregate: {
            args: Prisma.LikesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLikes>
          }
          groupBy: {
            args: Prisma.LikesGroupByArgs<ExtArgs>
            result: $Utils.Optional<LikesGroupByOutputType>[]
          }
          count: {
            args: Prisma.LikesCountArgs<ExtArgs>
            result: $Utils.Optional<LikesCountAggregateOutputType> | number
          }
        }
      }
      Categories: {
        payload: Prisma.$CategoriesPayload<ExtArgs>
        fields: Prisma.CategoriesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoriesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoriesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>
          }
          findFirst: {
            args: Prisma.CategoriesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoriesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>
          }
          findMany: {
            args: Prisma.CategoriesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>[]
          }
          create: {
            args: Prisma.CategoriesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>
          }
          createMany: {
            args: Prisma.CategoriesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoriesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>[]
          }
          delete: {
            args: Prisma.CategoriesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>
          }
          update: {
            args: Prisma.CategoriesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>
          }
          deleteMany: {
            args: Prisma.CategoriesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoriesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CategoriesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>[]
          }
          upsert: {
            args: Prisma.CategoriesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>
          }
          aggregate: {
            args: Prisma.CategoriesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategories>
          }
          groupBy: {
            args: Prisma.CategoriesGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoriesGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoriesCountArgs<ExtArgs>
            result: $Utils.Optional<CategoriesCountAggregateOutputType> | number
          }
        }
      }
      PostToCategories: {
        payload: Prisma.$PostToCategoriesPayload<ExtArgs>
        fields: Prisma.PostToCategoriesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostToCategoriesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostToCategoriesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostToCategoriesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostToCategoriesPayload>
          }
          findFirst: {
            args: Prisma.PostToCategoriesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostToCategoriesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostToCategoriesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostToCategoriesPayload>
          }
          findMany: {
            args: Prisma.PostToCategoriesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostToCategoriesPayload>[]
          }
          create: {
            args: Prisma.PostToCategoriesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostToCategoriesPayload>
          }
          createMany: {
            args: Prisma.PostToCategoriesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PostToCategoriesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostToCategoriesPayload>[]
          }
          delete: {
            args: Prisma.PostToCategoriesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostToCategoriesPayload>
          }
          update: {
            args: Prisma.PostToCategoriesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostToCategoriesPayload>
          }
          deleteMany: {
            args: Prisma.PostToCategoriesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PostToCategoriesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PostToCategoriesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostToCategoriesPayload>[]
          }
          upsert: {
            args: Prisma.PostToCategoriesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostToCategoriesPayload>
          }
          aggregate: {
            args: Prisma.PostToCategoriesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePostToCategories>
          }
          groupBy: {
            args: Prisma.PostToCategoriesGroupByArgs<ExtArgs>
            result: $Utils.Optional<PostToCategoriesGroupByOutputType>[]
          }
          count: {
            args: Prisma.PostToCategoriesCountArgs<ExtArgs>
            result: $Utils.Optional<PostToCategoriesCountAggregateOutputType> | number
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
    posts?: PostsOmit
    comments?: CommentsOmit
    likes?: LikesOmit
    categories?: CategoriesOmit
    postToCategories?: PostToCategoriesOmit
    stars?: StarsOmit
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
    comments: number
    likes: number
    stars: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comments?: boolean | UsersCountOutputTypeCountCommentsArgs
    likes?: boolean | UsersCountOutputTypeCountLikesArgs
    stars?: boolean | UsersCountOutputTypeCountStarsArgs
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
  export type UsersCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountLikesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LikesWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountStarsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StarsWhereInput
  }


  /**
   * Count Type AuthorsCountOutputType
   */

  export type AuthorsCountOutputType = {
    posts: number
  }

  export type AuthorsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts?: boolean | AuthorsCountOutputTypeCountPostsArgs
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
  export type AuthorsCountOutputTypeCountPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostsWhereInput
  }


  /**
   * Count Type PostsCountOutputType
   */

  export type PostsCountOutputType = {
    likes: number
    comments: number
    starts: number
    categories: number
  }

  export type PostsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    likes?: boolean | PostsCountOutputTypeCountLikesArgs
    comments?: boolean | PostsCountOutputTypeCountCommentsArgs
    starts?: boolean | PostsCountOutputTypeCountStartsArgs
    categories?: boolean | PostsCountOutputTypeCountCategoriesArgs
  }

  // Custom InputTypes
  /**
   * PostsCountOutputType without action
   */
  export type PostsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostsCountOutputType
     */
    select?: PostsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PostsCountOutputType without action
   */
  export type PostsCountOutputTypeCountLikesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LikesWhereInput
  }

  /**
   * PostsCountOutputType without action
   */
  export type PostsCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentsWhereInput
  }

  /**
   * PostsCountOutputType without action
   */
  export type PostsCountOutputTypeCountStartsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StarsWhereInput
  }

  /**
   * PostsCountOutputType without action
   */
  export type PostsCountOutputTypeCountCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostToCategoriesWhereInput
  }


  /**
   * Count Type CommentsCountOutputType
   */

  export type CommentsCountOutputType = {
    likes: number
  }

  export type CommentsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    likes?: boolean | CommentsCountOutputTypeCountLikesArgs
  }

  // Custom InputTypes
  /**
   * CommentsCountOutputType without action
   */
  export type CommentsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentsCountOutputType
     */
    select?: CommentsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CommentsCountOutputType without action
   */
  export type CommentsCountOutputTypeCountLikesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LikesWhereInput
  }


  /**
   * Count Type CategoriesCountOutputType
   */

  export type CategoriesCountOutputType = {
    postToCategories: number
  }

  export type CategoriesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    postToCategories?: boolean | CategoriesCountOutputTypeCountPostToCategoriesArgs
  }

  // Custom InputTypes
  /**
   * CategoriesCountOutputType without action
   */
  export type CategoriesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriesCountOutputType
     */
    select?: CategoriesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoriesCountOutputType without action
   */
  export type CategoriesCountOutputTypeCountPostToCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostToCategoriesWhereInput
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
  }

  export type UsersMaxAggregateOutputType = {
    id: string | null
    fullName: string | null
    registeredAt: Date | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    fullName: number
    registeredAt: number
    _all: number
  }


  export type UsersMinAggregateInputType = {
    id?: true
    fullName?: true
    registeredAt?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    fullName?: true
    registeredAt?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    fullName?: true
    registeredAt?: true
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
    comments?: boolean | Users$commentsArgs<ExtArgs>
    likes?: boolean | Users$likesArgs<ExtArgs>
    stars?: boolean | Users$starsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type UsersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    registeredAt?: boolean
  }, ExtArgs["result"]["users"]>

  export type UsersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    registeredAt?: boolean
  }, ExtArgs["result"]["users"]>

  export type UsersSelectScalar = {
    id?: boolean
    fullName?: boolean
    registeredAt?: boolean
  }

  export type UsersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fullName" | "registeredAt", ExtArgs["result"]["users"]>
  export type UsersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comments?: boolean | Users$commentsArgs<ExtArgs>
    likes?: boolean | Users$likesArgs<ExtArgs>
    stars?: boolean | Users$starsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UsersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UsersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Users"
    objects: {
      comments: Prisma.$CommentsPayload<ExtArgs>[]
      likes: Prisma.$LikesPayload<ExtArgs>[]
      stars: Prisma.$StarsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      fullName: string
      registeredAt: Date
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
    comments<T extends Users$commentsArgs<ExtArgs> = {}>(args?: Subset<T, Users$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    likes<T extends Users$likesArgs<ExtArgs> = {}>(args?: Subset<T, Users$likesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    stars<T extends Users$starsArgs<ExtArgs> = {}>(args?: Subset<T, Users$starsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StarsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Users.comments
   */
  export type Users$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    where?: CommentsWhereInput
    orderBy?: CommentsOrderByWithRelationInput | CommentsOrderByWithRelationInput[]
    cursor?: CommentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }

  /**
   * Users.likes
   */
  export type Users$likesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Likes
     */
    select?: LikesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Likes
     */
    omit?: LikesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikesInclude<ExtArgs> | null
    where?: LikesWhereInput
    orderBy?: LikesOrderByWithRelationInput | LikesOrderByWithRelationInput[]
    cursor?: LikesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LikesScalarFieldEnum | LikesScalarFieldEnum[]
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
    registeredAt: Date | null
  }

  export type AuthorsMaxAggregateOutputType = {
    id: string | null
    authorId: string | null
    password: string | null
    registeredAt: Date | null
  }

  export type AuthorsCountAggregateOutputType = {
    id: number
    authorId: number
    password: number
    registeredAt: number
    _all: number
  }


  export type AuthorsMinAggregateInputType = {
    id?: true
    authorId?: true
    password?: true
    registeredAt?: true
  }

  export type AuthorsMaxAggregateInputType = {
    id?: true
    authorId?: true
    password?: true
    registeredAt?: true
  }

  export type AuthorsCountAggregateInputType = {
    id?: true
    authorId?: true
    password?: true
    registeredAt?: true
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
    registeredAt: Date
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
    registeredAt?: boolean
    posts?: boolean | Authors$postsArgs<ExtArgs>
    _count?: boolean | AuthorsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["authors"]>

  export type AuthorsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    authorId?: boolean
    password?: boolean
    registeredAt?: boolean
  }, ExtArgs["result"]["authors"]>

  export type AuthorsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    authorId?: boolean
    password?: boolean
    registeredAt?: boolean
  }, ExtArgs["result"]["authors"]>

  export type AuthorsSelectScalar = {
    id?: boolean
    authorId?: boolean
    password?: boolean
    registeredAt?: boolean
  }

  export type AuthorsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "authorId" | "password" | "registeredAt", ExtArgs["result"]["authors"]>
  export type AuthorsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts?: boolean | Authors$postsArgs<ExtArgs>
    _count?: boolean | AuthorsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AuthorsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AuthorsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AuthorsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Authors"
    objects: {
      posts: Prisma.$PostsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      authorId: string
      password: string
      registeredAt: Date
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
    posts<T extends Authors$postsArgs<ExtArgs> = {}>(args?: Subset<T, Authors$postsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly registeredAt: FieldRef<"Authors", 'DateTime'>
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
   * Authors.posts
   */
  export type Authors$postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Posts
     */
    select?: PostsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Posts
     */
    omit?: PostsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostsInclude<ExtArgs> | null
    where?: PostsWhereInput
    orderBy?: PostsOrderByWithRelationInput | PostsOrderByWithRelationInput[]
    cursor?: PostsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostsScalarFieldEnum | PostsScalarFieldEnum[]
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
   * Model Posts
   */

  export type AggregatePosts = {
    _count: PostsCountAggregateOutputType | null
    _min: PostsMinAggregateOutputType | null
    _max: PostsMaxAggregateOutputType | null
  }

  export type PostsMinAggregateOutputType = {
    id: string | null
    title: string | null
    postMarkdown: string | null
    authorId: string | null
    createdAt: Date | null
  }

  export type PostsMaxAggregateOutputType = {
    id: string | null
    title: string | null
    postMarkdown: string | null
    authorId: string | null
    createdAt: Date | null
  }

  export type PostsCountAggregateOutputType = {
    id: number
    title: number
    postMarkdown: number
    authorId: number
    createdAt: number
    _all: number
  }


  export type PostsMinAggregateInputType = {
    id?: true
    title?: true
    postMarkdown?: true
    authorId?: true
    createdAt?: true
  }

  export type PostsMaxAggregateInputType = {
    id?: true
    title?: true
    postMarkdown?: true
    authorId?: true
    createdAt?: true
  }

  export type PostsCountAggregateInputType = {
    id?: true
    title?: true
    postMarkdown?: true
    authorId?: true
    createdAt?: true
    _all?: true
  }

  export type PostsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Posts to aggregate.
     */
    where?: PostsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostsOrderByWithRelationInput | PostsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Posts
    **/
    _count?: true | PostsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostsMaxAggregateInputType
  }

  export type GetPostsAggregateType<T extends PostsAggregateArgs> = {
        [P in keyof T & keyof AggregatePosts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePosts[P]>
      : GetScalarType<T[P], AggregatePosts[P]>
  }




  export type PostsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostsWhereInput
    orderBy?: PostsOrderByWithAggregationInput | PostsOrderByWithAggregationInput[]
    by: PostsScalarFieldEnum[] | PostsScalarFieldEnum
    having?: PostsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostsCountAggregateInputType | true
    _min?: PostsMinAggregateInputType
    _max?: PostsMaxAggregateInputType
  }

  export type PostsGroupByOutputType = {
    id: string
    title: string
    postMarkdown: string
    authorId: string
    createdAt: Date
    _count: PostsCountAggregateOutputType | null
    _min: PostsMinAggregateOutputType | null
    _max: PostsMaxAggregateOutputType | null
  }

  type GetPostsGroupByPayload<T extends PostsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostsGroupByOutputType[P]>
            : GetScalarType<T[P], PostsGroupByOutputType[P]>
        }
      >
    >


  export type PostsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    postMarkdown?: boolean
    authorId?: boolean
    createdAt?: boolean
    author?: boolean | AuthorsDefaultArgs<ExtArgs>
    likes?: boolean | Posts$likesArgs<ExtArgs>
    comments?: boolean | Posts$commentsArgs<ExtArgs>
    starts?: boolean | Posts$startsArgs<ExtArgs>
    categories?: boolean | Posts$categoriesArgs<ExtArgs>
    _count?: boolean | PostsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["posts"]>

  export type PostsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    postMarkdown?: boolean
    authorId?: boolean
    createdAt?: boolean
    author?: boolean | AuthorsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["posts"]>

  export type PostsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    postMarkdown?: boolean
    authorId?: boolean
    createdAt?: boolean
    author?: boolean | AuthorsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["posts"]>

  export type PostsSelectScalar = {
    id?: boolean
    title?: boolean
    postMarkdown?: boolean
    authorId?: boolean
    createdAt?: boolean
  }

  export type PostsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "postMarkdown" | "authorId" | "createdAt", ExtArgs["result"]["posts"]>
  export type PostsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | AuthorsDefaultArgs<ExtArgs>
    likes?: boolean | Posts$likesArgs<ExtArgs>
    comments?: boolean | Posts$commentsArgs<ExtArgs>
    starts?: boolean | Posts$startsArgs<ExtArgs>
    categories?: boolean | Posts$categoriesArgs<ExtArgs>
    _count?: boolean | PostsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PostsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | AuthorsDefaultArgs<ExtArgs>
  }
  export type PostsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | AuthorsDefaultArgs<ExtArgs>
  }

  export type $PostsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Posts"
    objects: {
      author: Prisma.$AuthorsPayload<ExtArgs>
      likes: Prisma.$LikesPayload<ExtArgs>[]
      comments: Prisma.$CommentsPayload<ExtArgs>[]
      starts: Prisma.$StarsPayload<ExtArgs>[]
      categories: Prisma.$PostToCategoriesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      postMarkdown: string
      authorId: string
      createdAt: Date
    }, ExtArgs["result"]["posts"]>
    composites: {}
  }

  type PostsGetPayload<S extends boolean | null | undefined | PostsDefaultArgs> = $Result.GetResult<Prisma.$PostsPayload, S>

  type PostsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PostsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PostsCountAggregateInputType | true
    }

  export interface PostsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Posts'], meta: { name: 'Posts' } }
    /**
     * Find zero or one Posts that matches the filter.
     * @param {PostsFindUniqueArgs} args - Arguments to find a Posts
     * @example
     * // Get one Posts
     * const posts = await prisma.posts.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PostsFindUniqueArgs>(args: SelectSubset<T, PostsFindUniqueArgs<ExtArgs>>): Prisma__PostsClient<$Result.GetResult<Prisma.$PostsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Posts that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PostsFindUniqueOrThrowArgs} args - Arguments to find a Posts
     * @example
     * // Get one Posts
     * const posts = await prisma.posts.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PostsFindUniqueOrThrowArgs>(args: SelectSubset<T, PostsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PostsClient<$Result.GetResult<Prisma.$PostsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostsFindFirstArgs} args - Arguments to find a Posts
     * @example
     * // Get one Posts
     * const posts = await prisma.posts.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PostsFindFirstArgs>(args?: SelectSubset<T, PostsFindFirstArgs<ExtArgs>>): Prisma__PostsClient<$Result.GetResult<Prisma.$PostsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Posts that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostsFindFirstOrThrowArgs} args - Arguments to find a Posts
     * @example
     * // Get one Posts
     * const posts = await prisma.posts.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PostsFindFirstOrThrowArgs>(args?: SelectSubset<T, PostsFindFirstOrThrowArgs<ExtArgs>>): Prisma__PostsClient<$Result.GetResult<Prisma.$PostsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Posts
     * const posts = await prisma.posts.findMany()
     * 
     * // Get first 10 Posts
     * const posts = await prisma.posts.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postsWithIdOnly = await prisma.posts.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PostsFindManyArgs>(args?: SelectSubset<T, PostsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Posts.
     * @param {PostsCreateArgs} args - Arguments to create a Posts.
     * @example
     * // Create one Posts
     * const Posts = await prisma.posts.create({
     *   data: {
     *     // ... data to create a Posts
     *   }
     * })
     * 
     */
    create<T extends PostsCreateArgs>(args: SelectSubset<T, PostsCreateArgs<ExtArgs>>): Prisma__PostsClient<$Result.GetResult<Prisma.$PostsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Posts.
     * @param {PostsCreateManyArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const posts = await prisma.posts.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PostsCreateManyArgs>(args?: SelectSubset<T, PostsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Posts and returns the data saved in the database.
     * @param {PostsCreateManyAndReturnArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const posts = await prisma.posts.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Posts and only return the `id`
     * const postsWithIdOnly = await prisma.posts.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PostsCreateManyAndReturnArgs>(args?: SelectSubset<T, PostsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Posts.
     * @param {PostsDeleteArgs} args - Arguments to delete one Posts.
     * @example
     * // Delete one Posts
     * const Posts = await prisma.posts.delete({
     *   where: {
     *     // ... filter to delete one Posts
     *   }
     * })
     * 
     */
    delete<T extends PostsDeleteArgs>(args: SelectSubset<T, PostsDeleteArgs<ExtArgs>>): Prisma__PostsClient<$Result.GetResult<Prisma.$PostsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Posts.
     * @param {PostsUpdateArgs} args - Arguments to update one Posts.
     * @example
     * // Update one Posts
     * const posts = await prisma.posts.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PostsUpdateArgs>(args: SelectSubset<T, PostsUpdateArgs<ExtArgs>>): Prisma__PostsClient<$Result.GetResult<Prisma.$PostsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Posts.
     * @param {PostsDeleteManyArgs} args - Arguments to filter Posts to delete.
     * @example
     * // Delete a few Posts
     * const { count } = await prisma.posts.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PostsDeleteManyArgs>(args?: SelectSubset<T, PostsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Posts
     * const posts = await prisma.posts.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PostsUpdateManyArgs>(args: SelectSubset<T, PostsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts and returns the data updated in the database.
     * @param {PostsUpdateManyAndReturnArgs} args - Arguments to update many Posts.
     * @example
     * // Update many Posts
     * const posts = await prisma.posts.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Posts and only return the `id`
     * const postsWithIdOnly = await prisma.posts.updateManyAndReturn({
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
    updateManyAndReturn<T extends PostsUpdateManyAndReturnArgs>(args: SelectSubset<T, PostsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Posts.
     * @param {PostsUpsertArgs} args - Arguments to update or create a Posts.
     * @example
     * // Update or create a Posts
     * const posts = await prisma.posts.upsert({
     *   create: {
     *     // ... data to create a Posts
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Posts we want to update
     *   }
     * })
     */
    upsert<T extends PostsUpsertArgs>(args: SelectSubset<T, PostsUpsertArgs<ExtArgs>>): Prisma__PostsClient<$Result.GetResult<Prisma.$PostsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostsCountArgs} args - Arguments to filter Posts to count.
     * @example
     * // Count the number of Posts
     * const count = await prisma.posts.count({
     *   where: {
     *     // ... the filter for the Posts we want to count
     *   }
     * })
    **/
    count<T extends PostsCountArgs>(
      args?: Subset<T, PostsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PostsAggregateArgs>(args: Subset<T, PostsAggregateArgs>): Prisma.PrismaPromise<GetPostsAggregateType<T>>

    /**
     * Group by Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostsGroupByArgs} args - Group by arguments.
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
      T extends PostsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostsGroupByArgs['orderBy'] }
        : { orderBy?: PostsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PostsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Posts model
   */
  readonly fields: PostsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Posts.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    author<T extends AuthorsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AuthorsDefaultArgs<ExtArgs>>): Prisma__AuthorsClient<$Result.GetResult<Prisma.$AuthorsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    likes<T extends Posts$likesArgs<ExtArgs> = {}>(args?: Subset<T, Posts$likesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    comments<T extends Posts$commentsArgs<ExtArgs> = {}>(args?: Subset<T, Posts$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    starts<T extends Posts$startsArgs<ExtArgs> = {}>(args?: Subset<T, Posts$startsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StarsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    categories<T extends Posts$categoriesArgs<ExtArgs> = {}>(args?: Subset<T, Posts$categoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostToCategoriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Posts model
   */
  interface PostsFieldRefs {
    readonly id: FieldRef<"Posts", 'String'>
    readonly title: FieldRef<"Posts", 'String'>
    readonly postMarkdown: FieldRef<"Posts", 'String'>
    readonly authorId: FieldRef<"Posts", 'String'>
    readonly createdAt: FieldRef<"Posts", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Posts findUnique
   */
  export type PostsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Posts
     */
    select?: PostsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Posts
     */
    omit?: PostsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostsInclude<ExtArgs> | null
    /**
     * Filter, which Posts to fetch.
     */
    where: PostsWhereUniqueInput
  }

  /**
   * Posts findUniqueOrThrow
   */
  export type PostsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Posts
     */
    select?: PostsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Posts
     */
    omit?: PostsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostsInclude<ExtArgs> | null
    /**
     * Filter, which Posts to fetch.
     */
    where: PostsWhereUniqueInput
  }

  /**
   * Posts findFirst
   */
  export type PostsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Posts
     */
    select?: PostsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Posts
     */
    omit?: PostsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostsInclude<ExtArgs> | null
    /**
     * Filter, which Posts to fetch.
     */
    where?: PostsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostsOrderByWithRelationInput | PostsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostsScalarFieldEnum | PostsScalarFieldEnum[]
  }

  /**
   * Posts findFirstOrThrow
   */
  export type PostsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Posts
     */
    select?: PostsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Posts
     */
    omit?: PostsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostsInclude<ExtArgs> | null
    /**
     * Filter, which Posts to fetch.
     */
    where?: PostsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostsOrderByWithRelationInput | PostsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostsScalarFieldEnum | PostsScalarFieldEnum[]
  }

  /**
   * Posts findMany
   */
  export type PostsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Posts
     */
    select?: PostsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Posts
     */
    omit?: PostsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostsInclude<ExtArgs> | null
    /**
     * Filter, which Posts to fetch.
     */
    where?: PostsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostsOrderByWithRelationInput | PostsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Posts.
     */
    cursor?: PostsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    distinct?: PostsScalarFieldEnum | PostsScalarFieldEnum[]
  }

  /**
   * Posts create
   */
  export type PostsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Posts
     */
    select?: PostsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Posts
     */
    omit?: PostsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostsInclude<ExtArgs> | null
    /**
     * The data needed to create a Posts.
     */
    data: XOR<PostsCreateInput, PostsUncheckedCreateInput>
  }

  /**
   * Posts createMany
   */
  export type PostsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Posts.
     */
    data: PostsCreateManyInput | PostsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Posts createManyAndReturn
   */
  export type PostsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Posts
     */
    select?: PostsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Posts
     */
    omit?: PostsOmit<ExtArgs> | null
    /**
     * The data used to create many Posts.
     */
    data: PostsCreateManyInput | PostsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Posts update
   */
  export type PostsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Posts
     */
    select?: PostsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Posts
     */
    omit?: PostsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostsInclude<ExtArgs> | null
    /**
     * The data needed to update a Posts.
     */
    data: XOR<PostsUpdateInput, PostsUncheckedUpdateInput>
    /**
     * Choose, which Posts to update.
     */
    where: PostsWhereUniqueInput
  }

  /**
   * Posts updateMany
   */
  export type PostsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Posts.
     */
    data: XOR<PostsUpdateManyMutationInput, PostsUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostsWhereInput
    /**
     * Limit how many Posts to update.
     */
    limit?: number
  }

  /**
   * Posts updateManyAndReturn
   */
  export type PostsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Posts
     */
    select?: PostsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Posts
     */
    omit?: PostsOmit<ExtArgs> | null
    /**
     * The data used to update Posts.
     */
    data: XOR<PostsUpdateManyMutationInput, PostsUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostsWhereInput
    /**
     * Limit how many Posts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Posts upsert
   */
  export type PostsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Posts
     */
    select?: PostsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Posts
     */
    omit?: PostsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostsInclude<ExtArgs> | null
    /**
     * The filter to search for the Posts to update in case it exists.
     */
    where: PostsWhereUniqueInput
    /**
     * In case the Posts found by the `where` argument doesn't exist, create a new Posts with this data.
     */
    create: XOR<PostsCreateInput, PostsUncheckedCreateInput>
    /**
     * In case the Posts was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostsUpdateInput, PostsUncheckedUpdateInput>
  }

  /**
   * Posts delete
   */
  export type PostsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Posts
     */
    select?: PostsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Posts
     */
    omit?: PostsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostsInclude<ExtArgs> | null
    /**
     * Filter which Posts to delete.
     */
    where: PostsWhereUniqueInput
  }

  /**
   * Posts deleteMany
   */
  export type PostsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Posts to delete
     */
    where?: PostsWhereInput
    /**
     * Limit how many Posts to delete.
     */
    limit?: number
  }

  /**
   * Posts.likes
   */
  export type Posts$likesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Likes
     */
    select?: LikesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Likes
     */
    omit?: LikesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikesInclude<ExtArgs> | null
    where?: LikesWhereInput
    orderBy?: LikesOrderByWithRelationInput | LikesOrderByWithRelationInput[]
    cursor?: LikesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LikesScalarFieldEnum | LikesScalarFieldEnum[]
  }

  /**
   * Posts.comments
   */
  export type Posts$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    where?: CommentsWhereInput
    orderBy?: CommentsOrderByWithRelationInput | CommentsOrderByWithRelationInput[]
    cursor?: CommentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }

  /**
   * Posts.starts
   */
  export type Posts$startsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Posts.categories
   */
  export type Posts$categoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostToCategories
     */
    select?: PostToCategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostToCategories
     */
    omit?: PostToCategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostToCategoriesInclude<ExtArgs> | null
    where?: PostToCategoriesWhereInput
    orderBy?: PostToCategoriesOrderByWithRelationInput | PostToCategoriesOrderByWithRelationInput[]
    cursor?: PostToCategoriesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostToCategoriesScalarFieldEnum | PostToCategoriesScalarFieldEnum[]
  }

  /**
   * Posts without action
   */
  export type PostsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Posts
     */
    select?: PostsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Posts
     */
    omit?: PostsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostsInclude<ExtArgs> | null
  }


  /**
   * Model Comments
   */

  export type AggregateComments = {
    _count: CommentsCountAggregateOutputType | null
    _min: CommentsMinAggregateOutputType | null
    _max: CommentsMaxAggregateOutputType | null
  }

  export type CommentsMinAggregateOutputType = {
    id: string | null
    userId: string | null
    postId: string | null
    commentsText: string | null
    createdAt: Date | null
  }

  export type CommentsMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    postId: string | null
    commentsText: string | null
    createdAt: Date | null
  }

  export type CommentsCountAggregateOutputType = {
    id: number
    userId: number
    postId: number
    commentsText: number
    createdAt: number
    _all: number
  }


  export type CommentsMinAggregateInputType = {
    id?: true
    userId?: true
    postId?: true
    commentsText?: true
    createdAt?: true
  }

  export type CommentsMaxAggregateInputType = {
    id?: true
    userId?: true
    postId?: true
    commentsText?: true
    createdAt?: true
  }

  export type CommentsCountAggregateInputType = {
    id?: true
    userId?: true
    postId?: true
    commentsText?: true
    createdAt?: true
    _all?: true
  }

  export type CommentsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comments to aggregate.
     */
    where?: CommentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentsOrderByWithRelationInput | CommentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Comments
    **/
    _count?: true | CommentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommentsMaxAggregateInputType
  }

  export type GetCommentsAggregateType<T extends CommentsAggregateArgs> = {
        [P in keyof T & keyof AggregateComments]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComments[P]>
      : GetScalarType<T[P], AggregateComments[P]>
  }




  export type CommentsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentsWhereInput
    orderBy?: CommentsOrderByWithAggregationInput | CommentsOrderByWithAggregationInput[]
    by: CommentsScalarFieldEnum[] | CommentsScalarFieldEnum
    having?: CommentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommentsCountAggregateInputType | true
    _min?: CommentsMinAggregateInputType
    _max?: CommentsMaxAggregateInputType
  }

  export type CommentsGroupByOutputType = {
    id: string
    userId: string
    postId: string
    commentsText: string
    createdAt: Date
    _count: CommentsCountAggregateOutputType | null
    _min: CommentsMinAggregateOutputType | null
    _max: CommentsMaxAggregateOutputType | null
  }

  type GetCommentsGroupByPayload<T extends CommentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommentsGroupByOutputType[P]>
            : GetScalarType<T[P], CommentsGroupByOutputType[P]>
        }
      >
    >


  export type CommentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    postId?: boolean
    commentsText?: boolean
    createdAt?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
    post?: boolean | PostsDefaultArgs<ExtArgs>
    likes?: boolean | Comments$likesArgs<ExtArgs>
    _count?: boolean | CommentsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comments"]>

  export type CommentsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    postId?: boolean
    commentsText?: boolean
    createdAt?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
    post?: boolean | PostsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comments"]>

  export type CommentsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    postId?: boolean
    commentsText?: boolean
    createdAt?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
    post?: boolean | PostsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comments"]>

  export type CommentsSelectScalar = {
    id?: boolean
    userId?: boolean
    postId?: boolean
    commentsText?: boolean
    createdAt?: boolean
  }

  export type CommentsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "postId" | "commentsText" | "createdAt", ExtArgs["result"]["comments"]>
  export type CommentsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
    post?: boolean | PostsDefaultArgs<ExtArgs>
    likes?: boolean | Comments$likesArgs<ExtArgs>
    _count?: boolean | CommentsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CommentsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
    post?: boolean | PostsDefaultArgs<ExtArgs>
  }
  export type CommentsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
    post?: boolean | PostsDefaultArgs<ExtArgs>
  }

  export type $CommentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Comments"
    objects: {
      user: Prisma.$UsersPayload<ExtArgs>
      post: Prisma.$PostsPayload<ExtArgs>
      likes: Prisma.$LikesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      postId: string
      commentsText: string
      createdAt: Date
    }, ExtArgs["result"]["comments"]>
    composites: {}
  }

  type CommentsGetPayload<S extends boolean | null | undefined | CommentsDefaultArgs> = $Result.GetResult<Prisma.$CommentsPayload, S>

  type CommentsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CommentsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CommentsCountAggregateInputType | true
    }

  export interface CommentsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Comments'], meta: { name: 'Comments' } }
    /**
     * Find zero or one Comments that matches the filter.
     * @param {CommentsFindUniqueArgs} args - Arguments to find a Comments
     * @example
     * // Get one Comments
     * const comments = await prisma.comments.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CommentsFindUniqueArgs>(args: SelectSubset<T, CommentsFindUniqueArgs<ExtArgs>>): Prisma__CommentsClient<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Comments that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CommentsFindUniqueOrThrowArgs} args - Arguments to find a Comments
     * @example
     * // Get one Comments
     * const comments = await prisma.comments.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CommentsFindUniqueOrThrowArgs>(args: SelectSubset<T, CommentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CommentsClient<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentsFindFirstArgs} args - Arguments to find a Comments
     * @example
     * // Get one Comments
     * const comments = await prisma.comments.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CommentsFindFirstArgs>(args?: SelectSubset<T, CommentsFindFirstArgs<ExtArgs>>): Prisma__CommentsClient<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comments that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentsFindFirstOrThrowArgs} args - Arguments to find a Comments
     * @example
     * // Get one Comments
     * const comments = await prisma.comments.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CommentsFindFirstOrThrowArgs>(args?: SelectSubset<T, CommentsFindFirstOrThrowArgs<ExtArgs>>): Prisma__CommentsClient<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comments
     * const comments = await prisma.comments.findMany()
     * 
     * // Get first 10 Comments
     * const comments = await prisma.comments.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const commentsWithIdOnly = await prisma.comments.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CommentsFindManyArgs>(args?: SelectSubset<T, CommentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Comments.
     * @param {CommentsCreateArgs} args - Arguments to create a Comments.
     * @example
     * // Create one Comments
     * const Comments = await prisma.comments.create({
     *   data: {
     *     // ... data to create a Comments
     *   }
     * })
     * 
     */
    create<T extends CommentsCreateArgs>(args: SelectSubset<T, CommentsCreateArgs<ExtArgs>>): Prisma__CommentsClient<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Comments.
     * @param {CommentsCreateManyArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comments = await prisma.comments.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CommentsCreateManyArgs>(args?: SelectSubset<T, CommentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Comments and returns the data saved in the database.
     * @param {CommentsCreateManyAndReturnArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comments = await prisma.comments.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Comments and only return the `id`
     * const commentsWithIdOnly = await prisma.comments.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CommentsCreateManyAndReturnArgs>(args?: SelectSubset<T, CommentsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Comments.
     * @param {CommentsDeleteArgs} args - Arguments to delete one Comments.
     * @example
     * // Delete one Comments
     * const Comments = await prisma.comments.delete({
     *   where: {
     *     // ... filter to delete one Comments
     *   }
     * })
     * 
     */
    delete<T extends CommentsDeleteArgs>(args: SelectSubset<T, CommentsDeleteArgs<ExtArgs>>): Prisma__CommentsClient<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Comments.
     * @param {CommentsUpdateArgs} args - Arguments to update one Comments.
     * @example
     * // Update one Comments
     * const comments = await prisma.comments.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CommentsUpdateArgs>(args: SelectSubset<T, CommentsUpdateArgs<ExtArgs>>): Prisma__CommentsClient<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Comments.
     * @param {CommentsDeleteManyArgs} args - Arguments to filter Comments to delete.
     * @example
     * // Delete a few Comments
     * const { count } = await prisma.comments.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CommentsDeleteManyArgs>(args?: SelectSubset<T, CommentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comments
     * const comments = await prisma.comments.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CommentsUpdateManyArgs>(args: SelectSubset<T, CommentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments and returns the data updated in the database.
     * @param {CommentsUpdateManyAndReturnArgs} args - Arguments to update many Comments.
     * @example
     * // Update many Comments
     * const comments = await prisma.comments.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Comments and only return the `id`
     * const commentsWithIdOnly = await prisma.comments.updateManyAndReturn({
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
    updateManyAndReturn<T extends CommentsUpdateManyAndReturnArgs>(args: SelectSubset<T, CommentsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Comments.
     * @param {CommentsUpsertArgs} args - Arguments to update or create a Comments.
     * @example
     * // Update or create a Comments
     * const comments = await prisma.comments.upsert({
     *   create: {
     *     // ... data to create a Comments
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comments we want to update
     *   }
     * })
     */
    upsert<T extends CommentsUpsertArgs>(args: SelectSubset<T, CommentsUpsertArgs<ExtArgs>>): Prisma__CommentsClient<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentsCountArgs} args - Arguments to filter Comments to count.
     * @example
     * // Count the number of Comments
     * const count = await prisma.comments.count({
     *   where: {
     *     // ... the filter for the Comments we want to count
     *   }
     * })
    **/
    count<T extends CommentsCountArgs>(
      args?: Subset<T, CommentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CommentsAggregateArgs>(args: Subset<T, CommentsAggregateArgs>): Prisma.PrismaPromise<GetCommentsAggregateType<T>>

    /**
     * Group by Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentsGroupByArgs} args - Group by arguments.
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
      T extends CommentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommentsGroupByArgs['orderBy'] }
        : { orderBy?: CommentsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CommentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Comments model
   */
  readonly fields: CommentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Comments.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommentsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    post<T extends PostsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PostsDefaultArgs<ExtArgs>>): Prisma__PostsClient<$Result.GetResult<Prisma.$PostsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    likes<T extends Comments$likesArgs<ExtArgs> = {}>(args?: Subset<T, Comments$likesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Comments model
   */
  interface CommentsFieldRefs {
    readonly id: FieldRef<"Comments", 'String'>
    readonly userId: FieldRef<"Comments", 'String'>
    readonly postId: FieldRef<"Comments", 'String'>
    readonly commentsText: FieldRef<"Comments", 'String'>
    readonly createdAt: FieldRef<"Comments", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Comments findUnique
   */
  export type CommentsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    /**
     * Filter, which Comments to fetch.
     */
    where: CommentsWhereUniqueInput
  }

  /**
   * Comments findUniqueOrThrow
   */
  export type CommentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    /**
     * Filter, which Comments to fetch.
     */
    where: CommentsWhereUniqueInput
  }

  /**
   * Comments findFirst
   */
  export type CommentsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    /**
     * Filter, which Comments to fetch.
     */
    where?: CommentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentsOrderByWithRelationInput | CommentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }

  /**
   * Comments findFirstOrThrow
   */
  export type CommentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    /**
     * Filter, which Comments to fetch.
     */
    where?: CommentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentsOrderByWithRelationInput | CommentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }

  /**
   * Comments findMany
   */
  export type CommentsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    /**
     * Filter, which Comments to fetch.
     */
    where?: CommentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentsOrderByWithRelationInput | CommentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Comments.
     */
    cursor?: CommentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }

  /**
   * Comments create
   */
  export type CommentsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    /**
     * The data needed to create a Comments.
     */
    data: XOR<CommentsCreateInput, CommentsUncheckedCreateInput>
  }

  /**
   * Comments createMany
   */
  export type CommentsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Comments.
     */
    data: CommentsCreateManyInput | CommentsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Comments createManyAndReturn
   */
  export type CommentsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * The data used to create many Comments.
     */
    data: CommentsCreateManyInput | CommentsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Comments update
   */
  export type CommentsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    /**
     * The data needed to update a Comments.
     */
    data: XOR<CommentsUpdateInput, CommentsUncheckedUpdateInput>
    /**
     * Choose, which Comments to update.
     */
    where: CommentsWhereUniqueInput
  }

  /**
   * Comments updateMany
   */
  export type CommentsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentsUpdateManyMutationInput, CommentsUncheckedUpdateManyInput>
    /**
     * Filter which Comments to update
     */
    where?: CommentsWhereInput
    /**
     * Limit how many Comments to update.
     */
    limit?: number
  }

  /**
   * Comments updateManyAndReturn
   */
  export type CommentsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentsUpdateManyMutationInput, CommentsUncheckedUpdateManyInput>
    /**
     * Filter which Comments to update
     */
    where?: CommentsWhereInput
    /**
     * Limit how many Comments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Comments upsert
   */
  export type CommentsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    /**
     * The filter to search for the Comments to update in case it exists.
     */
    where: CommentsWhereUniqueInput
    /**
     * In case the Comments found by the `where` argument doesn't exist, create a new Comments with this data.
     */
    create: XOR<CommentsCreateInput, CommentsUncheckedCreateInput>
    /**
     * In case the Comments was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommentsUpdateInput, CommentsUncheckedUpdateInput>
  }

  /**
   * Comments delete
   */
  export type CommentsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    /**
     * Filter which Comments to delete.
     */
    where: CommentsWhereUniqueInput
  }

  /**
   * Comments deleteMany
   */
  export type CommentsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comments to delete
     */
    where?: CommentsWhereInput
    /**
     * Limit how many Comments to delete.
     */
    limit?: number
  }

  /**
   * Comments.likes
   */
  export type Comments$likesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Likes
     */
    select?: LikesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Likes
     */
    omit?: LikesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikesInclude<ExtArgs> | null
    where?: LikesWhereInput
    orderBy?: LikesOrderByWithRelationInput | LikesOrderByWithRelationInput[]
    cursor?: LikesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LikesScalarFieldEnum | LikesScalarFieldEnum[]
  }

  /**
   * Comments without action
   */
  export type CommentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
  }


  /**
   * Model Likes
   */

  export type AggregateLikes = {
    _count: LikesCountAggregateOutputType | null
    _min: LikesMinAggregateOutputType | null
    _max: LikesMaxAggregateOutputType | null
  }

  export type LikesMinAggregateOutputType = {
    id: string | null
    postId: string | null
    userId: string | null
    commentId: string | null
    createdAt: Date | null
  }

  export type LikesMaxAggregateOutputType = {
    id: string | null
    postId: string | null
    userId: string | null
    commentId: string | null
    createdAt: Date | null
  }

  export type LikesCountAggregateOutputType = {
    id: number
    postId: number
    userId: number
    commentId: number
    createdAt: number
    _all: number
  }


  export type LikesMinAggregateInputType = {
    id?: true
    postId?: true
    userId?: true
    commentId?: true
    createdAt?: true
  }

  export type LikesMaxAggregateInputType = {
    id?: true
    postId?: true
    userId?: true
    commentId?: true
    createdAt?: true
  }

  export type LikesCountAggregateInputType = {
    id?: true
    postId?: true
    userId?: true
    commentId?: true
    createdAt?: true
    _all?: true
  }

  export type LikesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Likes to aggregate.
     */
    where?: LikesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Likes to fetch.
     */
    orderBy?: LikesOrderByWithRelationInput | LikesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LikesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Likes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Likes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Likes
    **/
    _count?: true | LikesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LikesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LikesMaxAggregateInputType
  }

  export type GetLikesAggregateType<T extends LikesAggregateArgs> = {
        [P in keyof T & keyof AggregateLikes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLikes[P]>
      : GetScalarType<T[P], AggregateLikes[P]>
  }




  export type LikesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LikesWhereInput
    orderBy?: LikesOrderByWithAggregationInput | LikesOrderByWithAggregationInput[]
    by: LikesScalarFieldEnum[] | LikesScalarFieldEnum
    having?: LikesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LikesCountAggregateInputType | true
    _min?: LikesMinAggregateInputType
    _max?: LikesMaxAggregateInputType
  }

  export type LikesGroupByOutputType = {
    id: string
    postId: string | null
    userId: string
    commentId: string | null
    createdAt: Date
    _count: LikesCountAggregateOutputType | null
    _min: LikesMinAggregateOutputType | null
    _max: LikesMaxAggregateOutputType | null
  }

  type GetLikesGroupByPayload<T extends LikesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LikesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LikesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LikesGroupByOutputType[P]>
            : GetScalarType<T[P], LikesGroupByOutputType[P]>
        }
      >
    >


  export type LikesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    postId?: boolean
    userId?: boolean
    commentId?: boolean
    createdAt?: boolean
    post?: boolean | Likes$postArgs<ExtArgs>
    user?: boolean | UsersDefaultArgs<ExtArgs>
    comment?: boolean | Likes$commentArgs<ExtArgs>
  }, ExtArgs["result"]["likes"]>

  export type LikesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    postId?: boolean
    userId?: boolean
    commentId?: boolean
    createdAt?: boolean
    post?: boolean | Likes$postArgs<ExtArgs>
    user?: boolean | UsersDefaultArgs<ExtArgs>
    comment?: boolean | Likes$commentArgs<ExtArgs>
  }, ExtArgs["result"]["likes"]>

  export type LikesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    postId?: boolean
    userId?: boolean
    commentId?: boolean
    createdAt?: boolean
    post?: boolean | Likes$postArgs<ExtArgs>
    user?: boolean | UsersDefaultArgs<ExtArgs>
    comment?: boolean | Likes$commentArgs<ExtArgs>
  }, ExtArgs["result"]["likes"]>

  export type LikesSelectScalar = {
    id?: boolean
    postId?: boolean
    userId?: boolean
    commentId?: boolean
    createdAt?: boolean
  }

  export type LikesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "postId" | "userId" | "commentId" | "createdAt", ExtArgs["result"]["likes"]>
  export type LikesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | Likes$postArgs<ExtArgs>
    user?: boolean | UsersDefaultArgs<ExtArgs>
    comment?: boolean | Likes$commentArgs<ExtArgs>
  }
  export type LikesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | Likes$postArgs<ExtArgs>
    user?: boolean | UsersDefaultArgs<ExtArgs>
    comment?: boolean | Likes$commentArgs<ExtArgs>
  }
  export type LikesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | Likes$postArgs<ExtArgs>
    user?: boolean | UsersDefaultArgs<ExtArgs>
    comment?: boolean | Likes$commentArgs<ExtArgs>
  }

  export type $LikesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Likes"
    objects: {
      post: Prisma.$PostsPayload<ExtArgs> | null
      user: Prisma.$UsersPayload<ExtArgs>
      comment: Prisma.$CommentsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      postId: string | null
      userId: string
      commentId: string | null
      createdAt: Date
    }, ExtArgs["result"]["likes"]>
    composites: {}
  }

  type LikesGetPayload<S extends boolean | null | undefined | LikesDefaultArgs> = $Result.GetResult<Prisma.$LikesPayload, S>

  type LikesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LikesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LikesCountAggregateInputType | true
    }

  export interface LikesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Likes'], meta: { name: 'Likes' } }
    /**
     * Find zero or one Likes that matches the filter.
     * @param {LikesFindUniqueArgs} args - Arguments to find a Likes
     * @example
     * // Get one Likes
     * const likes = await prisma.likes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LikesFindUniqueArgs>(args: SelectSubset<T, LikesFindUniqueArgs<ExtArgs>>): Prisma__LikesClient<$Result.GetResult<Prisma.$LikesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Likes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LikesFindUniqueOrThrowArgs} args - Arguments to find a Likes
     * @example
     * // Get one Likes
     * const likes = await prisma.likes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LikesFindUniqueOrThrowArgs>(args: SelectSubset<T, LikesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LikesClient<$Result.GetResult<Prisma.$LikesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Likes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikesFindFirstArgs} args - Arguments to find a Likes
     * @example
     * // Get one Likes
     * const likes = await prisma.likes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LikesFindFirstArgs>(args?: SelectSubset<T, LikesFindFirstArgs<ExtArgs>>): Prisma__LikesClient<$Result.GetResult<Prisma.$LikesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Likes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikesFindFirstOrThrowArgs} args - Arguments to find a Likes
     * @example
     * // Get one Likes
     * const likes = await prisma.likes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LikesFindFirstOrThrowArgs>(args?: SelectSubset<T, LikesFindFirstOrThrowArgs<ExtArgs>>): Prisma__LikesClient<$Result.GetResult<Prisma.$LikesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Likes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Likes
     * const likes = await prisma.likes.findMany()
     * 
     * // Get first 10 Likes
     * const likes = await prisma.likes.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const likesWithIdOnly = await prisma.likes.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LikesFindManyArgs>(args?: SelectSubset<T, LikesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Likes.
     * @param {LikesCreateArgs} args - Arguments to create a Likes.
     * @example
     * // Create one Likes
     * const Likes = await prisma.likes.create({
     *   data: {
     *     // ... data to create a Likes
     *   }
     * })
     * 
     */
    create<T extends LikesCreateArgs>(args: SelectSubset<T, LikesCreateArgs<ExtArgs>>): Prisma__LikesClient<$Result.GetResult<Prisma.$LikesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Likes.
     * @param {LikesCreateManyArgs} args - Arguments to create many Likes.
     * @example
     * // Create many Likes
     * const likes = await prisma.likes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LikesCreateManyArgs>(args?: SelectSubset<T, LikesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Likes and returns the data saved in the database.
     * @param {LikesCreateManyAndReturnArgs} args - Arguments to create many Likes.
     * @example
     * // Create many Likes
     * const likes = await prisma.likes.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Likes and only return the `id`
     * const likesWithIdOnly = await prisma.likes.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LikesCreateManyAndReturnArgs>(args?: SelectSubset<T, LikesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Likes.
     * @param {LikesDeleteArgs} args - Arguments to delete one Likes.
     * @example
     * // Delete one Likes
     * const Likes = await prisma.likes.delete({
     *   where: {
     *     // ... filter to delete one Likes
     *   }
     * })
     * 
     */
    delete<T extends LikesDeleteArgs>(args: SelectSubset<T, LikesDeleteArgs<ExtArgs>>): Prisma__LikesClient<$Result.GetResult<Prisma.$LikesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Likes.
     * @param {LikesUpdateArgs} args - Arguments to update one Likes.
     * @example
     * // Update one Likes
     * const likes = await prisma.likes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LikesUpdateArgs>(args: SelectSubset<T, LikesUpdateArgs<ExtArgs>>): Prisma__LikesClient<$Result.GetResult<Prisma.$LikesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Likes.
     * @param {LikesDeleteManyArgs} args - Arguments to filter Likes to delete.
     * @example
     * // Delete a few Likes
     * const { count } = await prisma.likes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LikesDeleteManyArgs>(args?: SelectSubset<T, LikesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Likes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Likes
     * const likes = await prisma.likes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LikesUpdateManyArgs>(args: SelectSubset<T, LikesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Likes and returns the data updated in the database.
     * @param {LikesUpdateManyAndReturnArgs} args - Arguments to update many Likes.
     * @example
     * // Update many Likes
     * const likes = await prisma.likes.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Likes and only return the `id`
     * const likesWithIdOnly = await prisma.likes.updateManyAndReturn({
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
    updateManyAndReturn<T extends LikesUpdateManyAndReturnArgs>(args: SelectSubset<T, LikesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Likes.
     * @param {LikesUpsertArgs} args - Arguments to update or create a Likes.
     * @example
     * // Update or create a Likes
     * const likes = await prisma.likes.upsert({
     *   create: {
     *     // ... data to create a Likes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Likes we want to update
     *   }
     * })
     */
    upsert<T extends LikesUpsertArgs>(args: SelectSubset<T, LikesUpsertArgs<ExtArgs>>): Prisma__LikesClient<$Result.GetResult<Prisma.$LikesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Likes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikesCountArgs} args - Arguments to filter Likes to count.
     * @example
     * // Count the number of Likes
     * const count = await prisma.likes.count({
     *   where: {
     *     // ... the filter for the Likes we want to count
     *   }
     * })
    **/
    count<T extends LikesCountArgs>(
      args?: Subset<T, LikesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LikesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Likes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LikesAggregateArgs>(args: Subset<T, LikesAggregateArgs>): Prisma.PrismaPromise<GetLikesAggregateType<T>>

    /**
     * Group by Likes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikesGroupByArgs} args - Group by arguments.
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
      T extends LikesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LikesGroupByArgs['orderBy'] }
        : { orderBy?: LikesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LikesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLikesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Likes model
   */
  readonly fields: LikesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Likes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LikesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    post<T extends Likes$postArgs<ExtArgs> = {}>(args?: Subset<T, Likes$postArgs<ExtArgs>>): Prisma__PostsClient<$Result.GetResult<Prisma.$PostsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    user<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    comment<T extends Likes$commentArgs<ExtArgs> = {}>(args?: Subset<T, Likes$commentArgs<ExtArgs>>): Prisma__CommentsClient<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Likes model
   */
  interface LikesFieldRefs {
    readonly id: FieldRef<"Likes", 'String'>
    readonly postId: FieldRef<"Likes", 'String'>
    readonly userId: FieldRef<"Likes", 'String'>
    readonly commentId: FieldRef<"Likes", 'String'>
    readonly createdAt: FieldRef<"Likes", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Likes findUnique
   */
  export type LikesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Likes
     */
    select?: LikesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Likes
     */
    omit?: LikesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikesInclude<ExtArgs> | null
    /**
     * Filter, which Likes to fetch.
     */
    where: LikesWhereUniqueInput
  }

  /**
   * Likes findUniqueOrThrow
   */
  export type LikesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Likes
     */
    select?: LikesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Likes
     */
    omit?: LikesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikesInclude<ExtArgs> | null
    /**
     * Filter, which Likes to fetch.
     */
    where: LikesWhereUniqueInput
  }

  /**
   * Likes findFirst
   */
  export type LikesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Likes
     */
    select?: LikesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Likes
     */
    omit?: LikesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikesInclude<ExtArgs> | null
    /**
     * Filter, which Likes to fetch.
     */
    where?: LikesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Likes to fetch.
     */
    orderBy?: LikesOrderByWithRelationInput | LikesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Likes.
     */
    cursor?: LikesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Likes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Likes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Likes.
     */
    distinct?: LikesScalarFieldEnum | LikesScalarFieldEnum[]
  }

  /**
   * Likes findFirstOrThrow
   */
  export type LikesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Likes
     */
    select?: LikesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Likes
     */
    omit?: LikesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikesInclude<ExtArgs> | null
    /**
     * Filter, which Likes to fetch.
     */
    where?: LikesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Likes to fetch.
     */
    orderBy?: LikesOrderByWithRelationInput | LikesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Likes.
     */
    cursor?: LikesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Likes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Likes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Likes.
     */
    distinct?: LikesScalarFieldEnum | LikesScalarFieldEnum[]
  }

  /**
   * Likes findMany
   */
  export type LikesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Likes
     */
    select?: LikesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Likes
     */
    omit?: LikesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikesInclude<ExtArgs> | null
    /**
     * Filter, which Likes to fetch.
     */
    where?: LikesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Likes to fetch.
     */
    orderBy?: LikesOrderByWithRelationInput | LikesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Likes.
     */
    cursor?: LikesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Likes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Likes.
     */
    skip?: number
    distinct?: LikesScalarFieldEnum | LikesScalarFieldEnum[]
  }

  /**
   * Likes create
   */
  export type LikesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Likes
     */
    select?: LikesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Likes
     */
    omit?: LikesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikesInclude<ExtArgs> | null
    /**
     * The data needed to create a Likes.
     */
    data: XOR<LikesCreateInput, LikesUncheckedCreateInput>
  }

  /**
   * Likes createMany
   */
  export type LikesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Likes.
     */
    data: LikesCreateManyInput | LikesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Likes createManyAndReturn
   */
  export type LikesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Likes
     */
    select?: LikesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Likes
     */
    omit?: LikesOmit<ExtArgs> | null
    /**
     * The data used to create many Likes.
     */
    data: LikesCreateManyInput | LikesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Likes update
   */
  export type LikesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Likes
     */
    select?: LikesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Likes
     */
    omit?: LikesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikesInclude<ExtArgs> | null
    /**
     * The data needed to update a Likes.
     */
    data: XOR<LikesUpdateInput, LikesUncheckedUpdateInput>
    /**
     * Choose, which Likes to update.
     */
    where: LikesWhereUniqueInput
  }

  /**
   * Likes updateMany
   */
  export type LikesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Likes.
     */
    data: XOR<LikesUpdateManyMutationInput, LikesUncheckedUpdateManyInput>
    /**
     * Filter which Likes to update
     */
    where?: LikesWhereInput
    /**
     * Limit how many Likes to update.
     */
    limit?: number
  }

  /**
   * Likes updateManyAndReturn
   */
  export type LikesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Likes
     */
    select?: LikesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Likes
     */
    omit?: LikesOmit<ExtArgs> | null
    /**
     * The data used to update Likes.
     */
    data: XOR<LikesUpdateManyMutationInput, LikesUncheckedUpdateManyInput>
    /**
     * Filter which Likes to update
     */
    where?: LikesWhereInput
    /**
     * Limit how many Likes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Likes upsert
   */
  export type LikesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Likes
     */
    select?: LikesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Likes
     */
    omit?: LikesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikesInclude<ExtArgs> | null
    /**
     * The filter to search for the Likes to update in case it exists.
     */
    where: LikesWhereUniqueInput
    /**
     * In case the Likes found by the `where` argument doesn't exist, create a new Likes with this data.
     */
    create: XOR<LikesCreateInput, LikesUncheckedCreateInput>
    /**
     * In case the Likes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LikesUpdateInput, LikesUncheckedUpdateInput>
  }

  /**
   * Likes delete
   */
  export type LikesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Likes
     */
    select?: LikesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Likes
     */
    omit?: LikesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikesInclude<ExtArgs> | null
    /**
     * Filter which Likes to delete.
     */
    where: LikesWhereUniqueInput
  }

  /**
   * Likes deleteMany
   */
  export type LikesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Likes to delete
     */
    where?: LikesWhereInput
    /**
     * Limit how many Likes to delete.
     */
    limit?: number
  }

  /**
   * Likes.post
   */
  export type Likes$postArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Posts
     */
    select?: PostsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Posts
     */
    omit?: PostsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostsInclude<ExtArgs> | null
    where?: PostsWhereInput
  }

  /**
   * Likes.comment
   */
  export type Likes$commentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    where?: CommentsWhereInput
  }

  /**
   * Likes without action
   */
  export type LikesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Likes
     */
    select?: LikesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Likes
     */
    omit?: LikesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikesInclude<ExtArgs> | null
  }


  /**
   * Model Categories
   */

  export type AggregateCategories = {
    _count: CategoriesCountAggregateOutputType | null
    _min: CategoriesMinAggregateOutputType | null
    _max: CategoriesMaxAggregateOutputType | null
  }

  export type CategoriesMinAggregateOutputType = {
    id: string | null
    categoryName: string | null
    createdAt: Date | null
  }

  export type CategoriesMaxAggregateOutputType = {
    id: string | null
    categoryName: string | null
    createdAt: Date | null
  }

  export type CategoriesCountAggregateOutputType = {
    id: number
    categoryName: number
    createdAt: number
    _all: number
  }


  export type CategoriesMinAggregateInputType = {
    id?: true
    categoryName?: true
    createdAt?: true
  }

  export type CategoriesMaxAggregateInputType = {
    id?: true
    categoryName?: true
    createdAt?: true
  }

  export type CategoriesCountAggregateInputType = {
    id?: true
    categoryName?: true
    createdAt?: true
    _all?: true
  }

  export type CategoriesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to aggregate.
     */
    where?: CategoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoriesOrderByWithRelationInput | CategoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoriesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoriesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoriesMaxAggregateInputType
  }

  export type GetCategoriesAggregateType<T extends CategoriesAggregateArgs> = {
        [P in keyof T & keyof AggregateCategories]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategories[P]>
      : GetScalarType<T[P], AggregateCategories[P]>
  }




  export type CategoriesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoriesWhereInput
    orderBy?: CategoriesOrderByWithAggregationInput | CategoriesOrderByWithAggregationInput[]
    by: CategoriesScalarFieldEnum[] | CategoriesScalarFieldEnum
    having?: CategoriesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoriesCountAggregateInputType | true
    _min?: CategoriesMinAggregateInputType
    _max?: CategoriesMaxAggregateInputType
  }

  export type CategoriesGroupByOutputType = {
    id: string
    categoryName: string
    createdAt: Date
    _count: CategoriesCountAggregateOutputType | null
    _min: CategoriesMinAggregateOutputType | null
    _max: CategoriesMaxAggregateOutputType | null
  }

  type GetCategoriesGroupByPayload<T extends CategoriesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoriesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoriesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoriesGroupByOutputType[P]>
            : GetScalarType<T[P], CategoriesGroupByOutputType[P]>
        }
      >
    >


  export type CategoriesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    categoryName?: boolean
    createdAt?: boolean
    postToCategories?: boolean | Categories$postToCategoriesArgs<ExtArgs>
    _count?: boolean | CategoriesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categories"]>

  export type CategoriesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    categoryName?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["categories"]>

  export type CategoriesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    categoryName?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["categories"]>

  export type CategoriesSelectScalar = {
    id?: boolean
    categoryName?: boolean
    createdAt?: boolean
  }

  export type CategoriesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "categoryName" | "createdAt", ExtArgs["result"]["categories"]>
  export type CategoriesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    postToCategories?: boolean | Categories$postToCategoriesArgs<ExtArgs>
    _count?: boolean | CategoriesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategoriesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CategoriesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CategoriesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Categories"
    objects: {
      postToCategories: Prisma.$PostToCategoriesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      categoryName: string
      createdAt: Date
    }, ExtArgs["result"]["categories"]>
    composites: {}
  }

  type CategoriesGetPayload<S extends boolean | null | undefined | CategoriesDefaultArgs> = $Result.GetResult<Prisma.$CategoriesPayload, S>

  type CategoriesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoriesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoriesCountAggregateInputType | true
    }

  export interface CategoriesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Categories'], meta: { name: 'Categories' } }
    /**
     * Find zero or one Categories that matches the filter.
     * @param {CategoriesFindUniqueArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoriesFindUniqueArgs>(args: SelectSubset<T, CategoriesFindUniqueArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Categories that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoriesFindUniqueOrThrowArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoriesFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoriesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesFindFirstArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoriesFindFirstArgs>(args?: SelectSubset<T, CategoriesFindFirstArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categories that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesFindFirstOrThrowArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoriesFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoriesFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.categories.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.categories.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoriesWithIdOnly = await prisma.categories.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoriesFindManyArgs>(args?: SelectSubset<T, CategoriesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Categories.
     * @param {CategoriesCreateArgs} args - Arguments to create a Categories.
     * @example
     * // Create one Categories
     * const Categories = await prisma.categories.create({
     *   data: {
     *     // ... data to create a Categories
     *   }
     * })
     * 
     */
    create<T extends CategoriesCreateArgs>(args: SelectSubset<T, CategoriesCreateArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {CategoriesCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const categories = await prisma.categories.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoriesCreateManyArgs>(args?: SelectSubset<T, CategoriesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {CategoriesCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const categories = await prisma.categories.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `id`
     * const categoriesWithIdOnly = await prisma.categories.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoriesCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoriesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Categories.
     * @param {CategoriesDeleteArgs} args - Arguments to delete one Categories.
     * @example
     * // Delete one Categories
     * const Categories = await prisma.categories.delete({
     *   where: {
     *     // ... filter to delete one Categories
     *   }
     * })
     * 
     */
    delete<T extends CategoriesDeleteArgs>(args: SelectSubset<T, CategoriesDeleteArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Categories.
     * @param {CategoriesUpdateArgs} args - Arguments to update one Categories.
     * @example
     * // Update one Categories
     * const categories = await prisma.categories.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoriesUpdateArgs>(args: SelectSubset<T, CategoriesUpdateArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {CategoriesDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.categories.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoriesDeleteManyArgs>(args?: SelectSubset<T, CategoriesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const categories = await prisma.categories.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoriesUpdateManyArgs>(args: SelectSubset<T, CategoriesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {CategoriesUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const categories = await prisma.categories.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categories and only return the `id`
     * const categoriesWithIdOnly = await prisma.categories.updateManyAndReturn({
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
    updateManyAndReturn<T extends CategoriesUpdateManyAndReturnArgs>(args: SelectSubset<T, CategoriesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Categories.
     * @param {CategoriesUpsertArgs} args - Arguments to update or create a Categories.
     * @example
     * // Update or create a Categories
     * const categories = await prisma.categories.upsert({
     *   create: {
     *     // ... data to create a Categories
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Categories we want to update
     *   }
     * })
     */
    upsert<T extends CategoriesUpsertArgs>(args: SelectSubset<T, CategoriesUpsertArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.categories.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoriesCountArgs>(
      args?: Subset<T, CategoriesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoriesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoriesAggregateArgs>(args: Subset<T, CategoriesAggregateArgs>): Prisma.PrismaPromise<GetCategoriesAggregateType<T>>

    /**
     * Group by Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesGroupByArgs} args - Group by arguments.
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
      T extends CategoriesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoriesGroupByArgs['orderBy'] }
        : { orderBy?: CategoriesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CategoriesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoriesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Categories model
   */
  readonly fields: CategoriesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Categories.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoriesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    postToCategories<T extends Categories$postToCategoriesArgs<ExtArgs> = {}>(args?: Subset<T, Categories$postToCategoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostToCategoriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Categories model
   */
  interface CategoriesFieldRefs {
    readonly id: FieldRef<"Categories", 'String'>
    readonly categoryName: FieldRef<"Categories", 'String'>
    readonly createdAt: FieldRef<"Categories", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Categories findUnique
   */
  export type CategoriesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where: CategoriesWhereUniqueInput
  }

  /**
   * Categories findUniqueOrThrow
   */
  export type CategoriesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where: CategoriesWhereUniqueInput
  }

  /**
   * Categories findFirst
   */
  export type CategoriesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoriesOrderByWithRelationInput | CategoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }

  /**
   * Categories findFirstOrThrow
   */
  export type CategoriesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoriesOrderByWithRelationInput | CategoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }

  /**
   * Categories findMany
   */
  export type CategoriesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoriesOrderByWithRelationInput | CategoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }

  /**
   * Categories create
   */
  export type CategoriesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * The data needed to create a Categories.
     */
    data: XOR<CategoriesCreateInput, CategoriesUncheckedCreateInput>
  }

  /**
   * Categories createMany
   */
  export type CategoriesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoriesCreateManyInput | CategoriesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Categories createManyAndReturn
   */
  export type CategoriesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * The data used to create many Categories.
     */
    data: CategoriesCreateManyInput | CategoriesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Categories update
   */
  export type CategoriesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * The data needed to update a Categories.
     */
    data: XOR<CategoriesUpdateInput, CategoriesUncheckedUpdateInput>
    /**
     * Choose, which Categories to update.
     */
    where: CategoriesWhereUniqueInput
  }

  /**
   * Categories updateMany
   */
  export type CategoriesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoriesUpdateManyMutationInput, CategoriesUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoriesWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Categories updateManyAndReturn
   */
  export type CategoriesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoriesUpdateManyMutationInput, CategoriesUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoriesWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Categories upsert
   */
  export type CategoriesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * The filter to search for the Categories to update in case it exists.
     */
    where: CategoriesWhereUniqueInput
    /**
     * In case the Categories found by the `where` argument doesn't exist, create a new Categories with this data.
     */
    create: XOR<CategoriesCreateInput, CategoriesUncheckedCreateInput>
    /**
     * In case the Categories was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoriesUpdateInput, CategoriesUncheckedUpdateInput>
  }

  /**
   * Categories delete
   */
  export type CategoriesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * Filter which Categories to delete.
     */
    where: CategoriesWhereUniqueInput
  }

  /**
   * Categories deleteMany
   */
  export type CategoriesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoriesWhereInput
    /**
     * Limit how many Categories to delete.
     */
    limit?: number
  }

  /**
   * Categories.postToCategories
   */
  export type Categories$postToCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostToCategories
     */
    select?: PostToCategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostToCategories
     */
    omit?: PostToCategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostToCategoriesInclude<ExtArgs> | null
    where?: PostToCategoriesWhereInput
    orderBy?: PostToCategoriesOrderByWithRelationInput | PostToCategoriesOrderByWithRelationInput[]
    cursor?: PostToCategoriesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostToCategoriesScalarFieldEnum | PostToCategoriesScalarFieldEnum[]
  }

  /**
   * Categories without action
   */
  export type CategoriesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
  }


  /**
   * Model PostToCategories
   */

  export type AggregatePostToCategories = {
    _count: PostToCategoriesCountAggregateOutputType | null
    _min: PostToCategoriesMinAggregateOutputType | null
    _max: PostToCategoriesMaxAggregateOutputType | null
  }

  export type PostToCategoriesMinAggregateOutputType = {
    id: string | null
    postId: string | null
    categoryId: string | null
    createdAt: Date | null
  }

  export type PostToCategoriesMaxAggregateOutputType = {
    id: string | null
    postId: string | null
    categoryId: string | null
    createdAt: Date | null
  }

  export type PostToCategoriesCountAggregateOutputType = {
    id: number
    postId: number
    categoryId: number
    createdAt: number
    _all: number
  }


  export type PostToCategoriesMinAggregateInputType = {
    id?: true
    postId?: true
    categoryId?: true
    createdAt?: true
  }

  export type PostToCategoriesMaxAggregateInputType = {
    id?: true
    postId?: true
    categoryId?: true
    createdAt?: true
  }

  export type PostToCategoriesCountAggregateInputType = {
    id?: true
    postId?: true
    categoryId?: true
    createdAt?: true
    _all?: true
  }

  export type PostToCategoriesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PostToCategories to aggregate.
     */
    where?: PostToCategoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostToCategories to fetch.
     */
    orderBy?: PostToCategoriesOrderByWithRelationInput | PostToCategoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostToCategoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostToCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostToCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PostToCategories
    **/
    _count?: true | PostToCategoriesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostToCategoriesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostToCategoriesMaxAggregateInputType
  }

  export type GetPostToCategoriesAggregateType<T extends PostToCategoriesAggregateArgs> = {
        [P in keyof T & keyof AggregatePostToCategories]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePostToCategories[P]>
      : GetScalarType<T[P], AggregatePostToCategories[P]>
  }




  export type PostToCategoriesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostToCategoriesWhereInput
    orderBy?: PostToCategoriesOrderByWithAggregationInput | PostToCategoriesOrderByWithAggregationInput[]
    by: PostToCategoriesScalarFieldEnum[] | PostToCategoriesScalarFieldEnum
    having?: PostToCategoriesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostToCategoriesCountAggregateInputType | true
    _min?: PostToCategoriesMinAggregateInputType
    _max?: PostToCategoriesMaxAggregateInputType
  }

  export type PostToCategoriesGroupByOutputType = {
    id: string
    postId: string
    categoryId: string
    createdAt: Date
    _count: PostToCategoriesCountAggregateOutputType | null
    _min: PostToCategoriesMinAggregateOutputType | null
    _max: PostToCategoriesMaxAggregateOutputType | null
  }

  type GetPostToCategoriesGroupByPayload<T extends PostToCategoriesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostToCategoriesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostToCategoriesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostToCategoriesGroupByOutputType[P]>
            : GetScalarType<T[P], PostToCategoriesGroupByOutputType[P]>
        }
      >
    >


  export type PostToCategoriesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    postId?: boolean
    categoryId?: boolean
    createdAt?: boolean
    post?: boolean | PostsDefaultArgs<ExtArgs>
    category?: boolean | CategoriesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["postToCategories"]>

  export type PostToCategoriesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    postId?: boolean
    categoryId?: boolean
    createdAt?: boolean
    post?: boolean | PostsDefaultArgs<ExtArgs>
    category?: boolean | CategoriesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["postToCategories"]>

  export type PostToCategoriesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    postId?: boolean
    categoryId?: boolean
    createdAt?: boolean
    post?: boolean | PostsDefaultArgs<ExtArgs>
    category?: boolean | CategoriesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["postToCategories"]>

  export type PostToCategoriesSelectScalar = {
    id?: boolean
    postId?: boolean
    categoryId?: boolean
    createdAt?: boolean
  }

  export type PostToCategoriesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "postId" | "categoryId" | "createdAt", ExtArgs["result"]["postToCategories"]>
  export type PostToCategoriesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostsDefaultArgs<ExtArgs>
    category?: boolean | CategoriesDefaultArgs<ExtArgs>
  }
  export type PostToCategoriesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostsDefaultArgs<ExtArgs>
    category?: boolean | CategoriesDefaultArgs<ExtArgs>
  }
  export type PostToCategoriesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostsDefaultArgs<ExtArgs>
    category?: boolean | CategoriesDefaultArgs<ExtArgs>
  }

  export type $PostToCategoriesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PostToCategories"
    objects: {
      post: Prisma.$PostsPayload<ExtArgs>
      category: Prisma.$CategoriesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      postId: string
      categoryId: string
      createdAt: Date
    }, ExtArgs["result"]["postToCategories"]>
    composites: {}
  }

  type PostToCategoriesGetPayload<S extends boolean | null | undefined | PostToCategoriesDefaultArgs> = $Result.GetResult<Prisma.$PostToCategoriesPayload, S>

  type PostToCategoriesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PostToCategoriesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PostToCategoriesCountAggregateInputType | true
    }

  export interface PostToCategoriesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PostToCategories'], meta: { name: 'PostToCategories' } }
    /**
     * Find zero or one PostToCategories that matches the filter.
     * @param {PostToCategoriesFindUniqueArgs} args - Arguments to find a PostToCategories
     * @example
     * // Get one PostToCategories
     * const postToCategories = await prisma.postToCategories.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PostToCategoriesFindUniqueArgs>(args: SelectSubset<T, PostToCategoriesFindUniqueArgs<ExtArgs>>): Prisma__PostToCategoriesClient<$Result.GetResult<Prisma.$PostToCategoriesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PostToCategories that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PostToCategoriesFindUniqueOrThrowArgs} args - Arguments to find a PostToCategories
     * @example
     * // Get one PostToCategories
     * const postToCategories = await prisma.postToCategories.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PostToCategoriesFindUniqueOrThrowArgs>(args: SelectSubset<T, PostToCategoriesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PostToCategoriesClient<$Result.GetResult<Prisma.$PostToCategoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PostToCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostToCategoriesFindFirstArgs} args - Arguments to find a PostToCategories
     * @example
     * // Get one PostToCategories
     * const postToCategories = await prisma.postToCategories.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PostToCategoriesFindFirstArgs>(args?: SelectSubset<T, PostToCategoriesFindFirstArgs<ExtArgs>>): Prisma__PostToCategoriesClient<$Result.GetResult<Prisma.$PostToCategoriesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PostToCategories that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostToCategoriesFindFirstOrThrowArgs} args - Arguments to find a PostToCategories
     * @example
     * // Get one PostToCategories
     * const postToCategories = await prisma.postToCategories.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PostToCategoriesFindFirstOrThrowArgs>(args?: SelectSubset<T, PostToCategoriesFindFirstOrThrowArgs<ExtArgs>>): Prisma__PostToCategoriesClient<$Result.GetResult<Prisma.$PostToCategoriesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PostToCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostToCategoriesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PostToCategories
     * const postToCategories = await prisma.postToCategories.findMany()
     * 
     * // Get first 10 PostToCategories
     * const postToCategories = await prisma.postToCategories.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postToCategoriesWithIdOnly = await prisma.postToCategories.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PostToCategoriesFindManyArgs>(args?: SelectSubset<T, PostToCategoriesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostToCategoriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PostToCategories.
     * @param {PostToCategoriesCreateArgs} args - Arguments to create a PostToCategories.
     * @example
     * // Create one PostToCategories
     * const PostToCategories = await prisma.postToCategories.create({
     *   data: {
     *     // ... data to create a PostToCategories
     *   }
     * })
     * 
     */
    create<T extends PostToCategoriesCreateArgs>(args: SelectSubset<T, PostToCategoriesCreateArgs<ExtArgs>>): Prisma__PostToCategoriesClient<$Result.GetResult<Prisma.$PostToCategoriesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PostToCategories.
     * @param {PostToCategoriesCreateManyArgs} args - Arguments to create many PostToCategories.
     * @example
     * // Create many PostToCategories
     * const postToCategories = await prisma.postToCategories.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PostToCategoriesCreateManyArgs>(args?: SelectSubset<T, PostToCategoriesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PostToCategories and returns the data saved in the database.
     * @param {PostToCategoriesCreateManyAndReturnArgs} args - Arguments to create many PostToCategories.
     * @example
     * // Create many PostToCategories
     * const postToCategories = await prisma.postToCategories.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PostToCategories and only return the `id`
     * const postToCategoriesWithIdOnly = await prisma.postToCategories.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PostToCategoriesCreateManyAndReturnArgs>(args?: SelectSubset<T, PostToCategoriesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostToCategoriesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PostToCategories.
     * @param {PostToCategoriesDeleteArgs} args - Arguments to delete one PostToCategories.
     * @example
     * // Delete one PostToCategories
     * const PostToCategories = await prisma.postToCategories.delete({
     *   where: {
     *     // ... filter to delete one PostToCategories
     *   }
     * })
     * 
     */
    delete<T extends PostToCategoriesDeleteArgs>(args: SelectSubset<T, PostToCategoriesDeleteArgs<ExtArgs>>): Prisma__PostToCategoriesClient<$Result.GetResult<Prisma.$PostToCategoriesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PostToCategories.
     * @param {PostToCategoriesUpdateArgs} args - Arguments to update one PostToCategories.
     * @example
     * // Update one PostToCategories
     * const postToCategories = await prisma.postToCategories.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PostToCategoriesUpdateArgs>(args: SelectSubset<T, PostToCategoriesUpdateArgs<ExtArgs>>): Prisma__PostToCategoriesClient<$Result.GetResult<Prisma.$PostToCategoriesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PostToCategories.
     * @param {PostToCategoriesDeleteManyArgs} args - Arguments to filter PostToCategories to delete.
     * @example
     * // Delete a few PostToCategories
     * const { count } = await prisma.postToCategories.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PostToCategoriesDeleteManyArgs>(args?: SelectSubset<T, PostToCategoriesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PostToCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostToCategoriesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PostToCategories
     * const postToCategories = await prisma.postToCategories.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PostToCategoriesUpdateManyArgs>(args: SelectSubset<T, PostToCategoriesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PostToCategories and returns the data updated in the database.
     * @param {PostToCategoriesUpdateManyAndReturnArgs} args - Arguments to update many PostToCategories.
     * @example
     * // Update many PostToCategories
     * const postToCategories = await prisma.postToCategories.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PostToCategories and only return the `id`
     * const postToCategoriesWithIdOnly = await prisma.postToCategories.updateManyAndReturn({
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
    updateManyAndReturn<T extends PostToCategoriesUpdateManyAndReturnArgs>(args: SelectSubset<T, PostToCategoriesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostToCategoriesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PostToCategories.
     * @param {PostToCategoriesUpsertArgs} args - Arguments to update or create a PostToCategories.
     * @example
     * // Update or create a PostToCategories
     * const postToCategories = await prisma.postToCategories.upsert({
     *   create: {
     *     // ... data to create a PostToCategories
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PostToCategories we want to update
     *   }
     * })
     */
    upsert<T extends PostToCategoriesUpsertArgs>(args: SelectSubset<T, PostToCategoriesUpsertArgs<ExtArgs>>): Prisma__PostToCategoriesClient<$Result.GetResult<Prisma.$PostToCategoriesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PostToCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostToCategoriesCountArgs} args - Arguments to filter PostToCategories to count.
     * @example
     * // Count the number of PostToCategories
     * const count = await prisma.postToCategories.count({
     *   where: {
     *     // ... the filter for the PostToCategories we want to count
     *   }
     * })
    **/
    count<T extends PostToCategoriesCountArgs>(
      args?: Subset<T, PostToCategoriesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostToCategoriesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PostToCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostToCategoriesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PostToCategoriesAggregateArgs>(args: Subset<T, PostToCategoriesAggregateArgs>): Prisma.PrismaPromise<GetPostToCategoriesAggregateType<T>>

    /**
     * Group by PostToCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostToCategoriesGroupByArgs} args - Group by arguments.
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
      T extends PostToCategoriesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostToCategoriesGroupByArgs['orderBy'] }
        : { orderBy?: PostToCategoriesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PostToCategoriesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostToCategoriesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PostToCategories model
   */
  readonly fields: PostToCategoriesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PostToCategories.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostToCategoriesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    post<T extends PostsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PostsDefaultArgs<ExtArgs>>): Prisma__PostsClient<$Result.GetResult<Prisma.$PostsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    category<T extends CategoriesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoriesDefaultArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PostToCategories model
   */
  interface PostToCategoriesFieldRefs {
    readonly id: FieldRef<"PostToCategories", 'String'>
    readonly postId: FieldRef<"PostToCategories", 'String'>
    readonly categoryId: FieldRef<"PostToCategories", 'String'>
    readonly createdAt: FieldRef<"PostToCategories", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PostToCategories findUnique
   */
  export type PostToCategoriesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostToCategories
     */
    select?: PostToCategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostToCategories
     */
    omit?: PostToCategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostToCategoriesInclude<ExtArgs> | null
    /**
     * Filter, which PostToCategories to fetch.
     */
    where: PostToCategoriesWhereUniqueInput
  }

  /**
   * PostToCategories findUniqueOrThrow
   */
  export type PostToCategoriesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostToCategories
     */
    select?: PostToCategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostToCategories
     */
    omit?: PostToCategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostToCategoriesInclude<ExtArgs> | null
    /**
     * Filter, which PostToCategories to fetch.
     */
    where: PostToCategoriesWhereUniqueInput
  }

  /**
   * PostToCategories findFirst
   */
  export type PostToCategoriesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostToCategories
     */
    select?: PostToCategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostToCategories
     */
    omit?: PostToCategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostToCategoriesInclude<ExtArgs> | null
    /**
     * Filter, which PostToCategories to fetch.
     */
    where?: PostToCategoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostToCategories to fetch.
     */
    orderBy?: PostToCategoriesOrderByWithRelationInput | PostToCategoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PostToCategories.
     */
    cursor?: PostToCategoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostToCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostToCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PostToCategories.
     */
    distinct?: PostToCategoriesScalarFieldEnum | PostToCategoriesScalarFieldEnum[]
  }

  /**
   * PostToCategories findFirstOrThrow
   */
  export type PostToCategoriesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostToCategories
     */
    select?: PostToCategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostToCategories
     */
    omit?: PostToCategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostToCategoriesInclude<ExtArgs> | null
    /**
     * Filter, which PostToCategories to fetch.
     */
    where?: PostToCategoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostToCategories to fetch.
     */
    orderBy?: PostToCategoriesOrderByWithRelationInput | PostToCategoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PostToCategories.
     */
    cursor?: PostToCategoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostToCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostToCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PostToCategories.
     */
    distinct?: PostToCategoriesScalarFieldEnum | PostToCategoriesScalarFieldEnum[]
  }

  /**
   * PostToCategories findMany
   */
  export type PostToCategoriesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostToCategories
     */
    select?: PostToCategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostToCategories
     */
    omit?: PostToCategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostToCategoriesInclude<ExtArgs> | null
    /**
     * Filter, which PostToCategories to fetch.
     */
    where?: PostToCategoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostToCategories to fetch.
     */
    orderBy?: PostToCategoriesOrderByWithRelationInput | PostToCategoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PostToCategories.
     */
    cursor?: PostToCategoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostToCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostToCategories.
     */
    skip?: number
    distinct?: PostToCategoriesScalarFieldEnum | PostToCategoriesScalarFieldEnum[]
  }

  /**
   * PostToCategories create
   */
  export type PostToCategoriesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostToCategories
     */
    select?: PostToCategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostToCategories
     */
    omit?: PostToCategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostToCategoriesInclude<ExtArgs> | null
    /**
     * The data needed to create a PostToCategories.
     */
    data: XOR<PostToCategoriesCreateInput, PostToCategoriesUncheckedCreateInput>
  }

  /**
   * PostToCategories createMany
   */
  export type PostToCategoriesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PostToCategories.
     */
    data: PostToCategoriesCreateManyInput | PostToCategoriesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PostToCategories createManyAndReturn
   */
  export type PostToCategoriesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostToCategories
     */
    select?: PostToCategoriesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PostToCategories
     */
    omit?: PostToCategoriesOmit<ExtArgs> | null
    /**
     * The data used to create many PostToCategories.
     */
    data: PostToCategoriesCreateManyInput | PostToCategoriesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostToCategoriesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PostToCategories update
   */
  export type PostToCategoriesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostToCategories
     */
    select?: PostToCategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostToCategories
     */
    omit?: PostToCategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostToCategoriesInclude<ExtArgs> | null
    /**
     * The data needed to update a PostToCategories.
     */
    data: XOR<PostToCategoriesUpdateInput, PostToCategoriesUncheckedUpdateInput>
    /**
     * Choose, which PostToCategories to update.
     */
    where: PostToCategoriesWhereUniqueInput
  }

  /**
   * PostToCategories updateMany
   */
  export type PostToCategoriesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PostToCategories.
     */
    data: XOR<PostToCategoriesUpdateManyMutationInput, PostToCategoriesUncheckedUpdateManyInput>
    /**
     * Filter which PostToCategories to update
     */
    where?: PostToCategoriesWhereInput
    /**
     * Limit how many PostToCategories to update.
     */
    limit?: number
  }

  /**
   * PostToCategories updateManyAndReturn
   */
  export type PostToCategoriesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostToCategories
     */
    select?: PostToCategoriesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PostToCategories
     */
    omit?: PostToCategoriesOmit<ExtArgs> | null
    /**
     * The data used to update PostToCategories.
     */
    data: XOR<PostToCategoriesUpdateManyMutationInput, PostToCategoriesUncheckedUpdateManyInput>
    /**
     * Filter which PostToCategories to update
     */
    where?: PostToCategoriesWhereInput
    /**
     * Limit how many PostToCategories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostToCategoriesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PostToCategories upsert
   */
  export type PostToCategoriesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostToCategories
     */
    select?: PostToCategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostToCategories
     */
    omit?: PostToCategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostToCategoriesInclude<ExtArgs> | null
    /**
     * The filter to search for the PostToCategories to update in case it exists.
     */
    where: PostToCategoriesWhereUniqueInput
    /**
     * In case the PostToCategories found by the `where` argument doesn't exist, create a new PostToCategories with this data.
     */
    create: XOR<PostToCategoriesCreateInput, PostToCategoriesUncheckedCreateInput>
    /**
     * In case the PostToCategories was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostToCategoriesUpdateInput, PostToCategoriesUncheckedUpdateInput>
  }

  /**
   * PostToCategories delete
   */
  export type PostToCategoriesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostToCategories
     */
    select?: PostToCategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostToCategories
     */
    omit?: PostToCategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostToCategoriesInclude<ExtArgs> | null
    /**
     * Filter which PostToCategories to delete.
     */
    where: PostToCategoriesWhereUniqueInput
  }

  /**
   * PostToCategories deleteMany
   */
  export type PostToCategoriesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PostToCategories to delete
     */
    where?: PostToCategoriesWhereInput
    /**
     * Limit how many PostToCategories to delete.
     */
    limit?: number
  }

  /**
   * PostToCategories without action
   */
  export type PostToCategoriesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostToCategories
     */
    select?: PostToCategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostToCategories
     */
    omit?: PostToCategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostToCategoriesInclude<ExtArgs> | null
  }


  /**
   * Model Stars
   */

  export type AggregateStars = {
    _count: StarsCountAggregateOutputType | null
    _avg: StarsAvgAggregateOutputType | null
    _sum: StarsSumAggregateOutputType | null
    _min: StarsMinAggregateOutputType | null
    _max: StarsMaxAggregateOutputType | null
  }

  export type StarsAvgAggregateOutputType = {
    star: number | null
  }

  export type StarsSumAggregateOutputType = {
    star: number | null
  }

  export type StarsMinAggregateOutputType = {
    id: string | null
    postId: string | null
    userId: string | null
    star: number | null
    createdAt: Date | null
  }

  export type StarsMaxAggregateOutputType = {
    id: string | null
    postId: string | null
    userId: string | null
    star: number | null
    createdAt: Date | null
  }

  export type StarsCountAggregateOutputType = {
    id: number
    postId: number
    userId: number
    star: number
    createdAt: number
    _all: number
  }


  export type StarsAvgAggregateInputType = {
    star?: true
  }

  export type StarsSumAggregateInputType = {
    star?: true
  }

  export type StarsMinAggregateInputType = {
    id?: true
    postId?: true
    userId?: true
    star?: true
    createdAt?: true
  }

  export type StarsMaxAggregateInputType = {
    id?: true
    postId?: true
    userId?: true
    star?: true
    createdAt?: true
  }

  export type StarsCountAggregateInputType = {
    id?: true
    postId?: true
    userId?: true
    star?: true
    createdAt?: true
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
     * Select which fields to average
    **/
    _avg?: StarsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StarsSumAggregateInputType
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
    _avg?: StarsAvgAggregateInputType
    _sum?: StarsSumAggregateInputType
    _min?: StarsMinAggregateInputType
    _max?: StarsMaxAggregateInputType
  }

  export type StarsGroupByOutputType = {
    id: string
    postId: string
    userId: string
    star: number
    createdAt: Date
    _count: StarsCountAggregateOutputType | null
    _avg: StarsAvgAggregateOutputType | null
    _sum: StarsSumAggregateOutputType | null
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
    postId?: boolean
    userId?: boolean
    star?: boolean
    createdAt?: boolean
    post?: boolean | PostsDefaultArgs<ExtArgs>
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stars"]>

  export type StarsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    postId?: boolean
    userId?: boolean
    star?: boolean
    createdAt?: boolean
    post?: boolean | PostsDefaultArgs<ExtArgs>
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stars"]>

  export type StarsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    postId?: boolean
    userId?: boolean
    star?: boolean
    createdAt?: boolean
    post?: boolean | PostsDefaultArgs<ExtArgs>
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stars"]>

  export type StarsSelectScalar = {
    id?: boolean
    postId?: boolean
    userId?: boolean
    star?: boolean
    createdAt?: boolean
  }

  export type StarsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "postId" | "userId" | "star" | "createdAt", ExtArgs["result"]["stars"]>
  export type StarsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostsDefaultArgs<ExtArgs>
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type StarsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostsDefaultArgs<ExtArgs>
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type StarsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostsDefaultArgs<ExtArgs>
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }

  export type $StarsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Stars"
    objects: {
      post: Prisma.$PostsPayload<ExtArgs>
      user: Prisma.$UsersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      postId: string
      userId: string
      star: number
      createdAt: Date
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
    post<T extends PostsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PostsDefaultArgs<ExtArgs>>): Prisma__PostsClient<$Result.GetResult<Prisma.$PostsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
    readonly postId: FieldRef<"Stars", 'String'>
    readonly userId: FieldRef<"Stars", 'String'>
    readonly star: FieldRef<"Stars", 'Int'>
    readonly createdAt: FieldRef<"Stars", 'DateTime'>
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
    registeredAt: 'registeredAt'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const AuthorsScalarFieldEnum: {
    id: 'id',
    authorId: 'authorId',
    password: 'password',
    registeredAt: 'registeredAt'
  };

  export type AuthorsScalarFieldEnum = (typeof AuthorsScalarFieldEnum)[keyof typeof AuthorsScalarFieldEnum]


  export const PostsScalarFieldEnum: {
    id: 'id',
    title: 'title',
    postMarkdown: 'postMarkdown',
    authorId: 'authorId',
    createdAt: 'createdAt'
  };

  export type PostsScalarFieldEnum = (typeof PostsScalarFieldEnum)[keyof typeof PostsScalarFieldEnum]


  export const CommentsScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    postId: 'postId',
    commentsText: 'commentsText',
    createdAt: 'createdAt'
  };

  export type CommentsScalarFieldEnum = (typeof CommentsScalarFieldEnum)[keyof typeof CommentsScalarFieldEnum]


  export const LikesScalarFieldEnum: {
    id: 'id',
    postId: 'postId',
    userId: 'userId',
    commentId: 'commentId',
    createdAt: 'createdAt'
  };

  export type LikesScalarFieldEnum = (typeof LikesScalarFieldEnum)[keyof typeof LikesScalarFieldEnum]


  export const CategoriesScalarFieldEnum: {
    id: 'id',
    categoryName: 'categoryName',
    createdAt: 'createdAt'
  };

  export type CategoriesScalarFieldEnum = (typeof CategoriesScalarFieldEnum)[keyof typeof CategoriesScalarFieldEnum]


  export const PostToCategoriesScalarFieldEnum: {
    id: 'id',
    postId: 'postId',
    categoryId: 'categoryId',
    createdAt: 'createdAt'
  };

  export type PostToCategoriesScalarFieldEnum = (typeof PostToCategoriesScalarFieldEnum)[keyof typeof PostToCategoriesScalarFieldEnum]


  export const StarsScalarFieldEnum: {
    id: 'id',
    postId: 'postId',
    userId: 'userId',
    star: 'star',
    createdAt: 'createdAt'
  };

  export type StarsScalarFieldEnum = (typeof StarsScalarFieldEnum)[keyof typeof StarsScalarFieldEnum]


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
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
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
    comments?: CommentsListRelationFilter
    likes?: LikesListRelationFilter
    stars?: StarsListRelationFilter
  }

  export type UsersOrderByWithRelationInput = {
    id?: SortOrder
    fullName?: SortOrder
    registeredAt?: SortOrder
    comments?: CommentsOrderByRelationAggregateInput
    likes?: LikesOrderByRelationAggregateInput
    stars?: StarsOrderByRelationAggregateInput
  }

  export type UsersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    fullName?: StringFilter<"Users"> | string
    registeredAt?: DateTimeFilter<"Users"> | Date | string
    comments?: CommentsListRelationFilter
    likes?: LikesListRelationFilter
    stars?: StarsListRelationFilter
  }, "id">

  export type UsersOrderByWithAggregationInput = {
    id?: SortOrder
    fullName?: SortOrder
    registeredAt?: SortOrder
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
  }

  export type AuthorsWhereInput = {
    AND?: AuthorsWhereInput | AuthorsWhereInput[]
    OR?: AuthorsWhereInput[]
    NOT?: AuthorsWhereInput | AuthorsWhereInput[]
    id?: StringFilter<"Authors"> | string
    authorId?: StringFilter<"Authors"> | string
    password?: StringFilter<"Authors"> | string
    registeredAt?: DateTimeFilter<"Authors"> | Date | string
    posts?: PostsListRelationFilter
  }

  export type AuthorsOrderByWithRelationInput = {
    id?: SortOrder
    authorId?: SortOrder
    password?: SortOrder
    registeredAt?: SortOrder
    posts?: PostsOrderByRelationAggregateInput
  }

  export type AuthorsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    authorId?: string
    AND?: AuthorsWhereInput | AuthorsWhereInput[]
    OR?: AuthorsWhereInput[]
    NOT?: AuthorsWhereInput | AuthorsWhereInput[]
    password?: StringFilter<"Authors"> | string
    registeredAt?: DateTimeFilter<"Authors"> | Date | string
    posts?: PostsListRelationFilter
  }, "id" | "authorId">

  export type AuthorsOrderByWithAggregationInput = {
    id?: SortOrder
    authorId?: SortOrder
    password?: SortOrder
    registeredAt?: SortOrder
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
    registeredAt?: DateTimeWithAggregatesFilter<"Authors"> | Date | string
  }

  export type PostsWhereInput = {
    AND?: PostsWhereInput | PostsWhereInput[]
    OR?: PostsWhereInput[]
    NOT?: PostsWhereInput | PostsWhereInput[]
    id?: StringFilter<"Posts"> | string
    title?: StringFilter<"Posts"> | string
    postMarkdown?: StringFilter<"Posts"> | string
    authorId?: StringFilter<"Posts"> | string
    createdAt?: DateTimeFilter<"Posts"> | Date | string
    author?: XOR<AuthorsScalarRelationFilter, AuthorsWhereInput>
    likes?: LikesListRelationFilter
    comments?: CommentsListRelationFilter
    starts?: StarsListRelationFilter
    categories?: PostToCategoriesListRelationFilter
  }

  export type PostsOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    postMarkdown?: SortOrder
    authorId?: SortOrder
    createdAt?: SortOrder
    author?: AuthorsOrderByWithRelationInput
    likes?: LikesOrderByRelationAggregateInput
    comments?: CommentsOrderByRelationAggregateInput
    starts?: StarsOrderByRelationAggregateInput
    categories?: PostToCategoriesOrderByRelationAggregateInput
  }

  export type PostsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PostsWhereInput | PostsWhereInput[]
    OR?: PostsWhereInput[]
    NOT?: PostsWhereInput | PostsWhereInput[]
    title?: StringFilter<"Posts"> | string
    postMarkdown?: StringFilter<"Posts"> | string
    authorId?: StringFilter<"Posts"> | string
    createdAt?: DateTimeFilter<"Posts"> | Date | string
    author?: XOR<AuthorsScalarRelationFilter, AuthorsWhereInput>
    likes?: LikesListRelationFilter
    comments?: CommentsListRelationFilter
    starts?: StarsListRelationFilter
    categories?: PostToCategoriesListRelationFilter
  }, "id">

  export type PostsOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    postMarkdown?: SortOrder
    authorId?: SortOrder
    createdAt?: SortOrder
    _count?: PostsCountOrderByAggregateInput
    _max?: PostsMaxOrderByAggregateInput
    _min?: PostsMinOrderByAggregateInput
  }

  export type PostsScalarWhereWithAggregatesInput = {
    AND?: PostsScalarWhereWithAggregatesInput | PostsScalarWhereWithAggregatesInput[]
    OR?: PostsScalarWhereWithAggregatesInput[]
    NOT?: PostsScalarWhereWithAggregatesInput | PostsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Posts"> | string
    title?: StringWithAggregatesFilter<"Posts"> | string
    postMarkdown?: StringWithAggregatesFilter<"Posts"> | string
    authorId?: StringWithAggregatesFilter<"Posts"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Posts"> | Date | string
  }

  export type CommentsWhereInput = {
    AND?: CommentsWhereInput | CommentsWhereInput[]
    OR?: CommentsWhereInput[]
    NOT?: CommentsWhereInput | CommentsWhereInput[]
    id?: StringFilter<"Comments"> | string
    userId?: StringFilter<"Comments"> | string
    postId?: StringFilter<"Comments"> | string
    commentsText?: StringFilter<"Comments"> | string
    createdAt?: DateTimeFilter<"Comments"> | Date | string
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    post?: XOR<PostsScalarRelationFilter, PostsWhereInput>
    likes?: LikesListRelationFilter
  }

  export type CommentsOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
    commentsText?: SortOrder
    createdAt?: SortOrder
    user?: UsersOrderByWithRelationInput
    post?: PostsOrderByWithRelationInput
    likes?: LikesOrderByRelationAggregateInput
  }

  export type CommentsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CommentsWhereInput | CommentsWhereInput[]
    OR?: CommentsWhereInput[]
    NOT?: CommentsWhereInput | CommentsWhereInput[]
    userId?: StringFilter<"Comments"> | string
    postId?: StringFilter<"Comments"> | string
    commentsText?: StringFilter<"Comments"> | string
    createdAt?: DateTimeFilter<"Comments"> | Date | string
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    post?: XOR<PostsScalarRelationFilter, PostsWhereInput>
    likes?: LikesListRelationFilter
  }, "id">

  export type CommentsOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
    commentsText?: SortOrder
    createdAt?: SortOrder
    _count?: CommentsCountOrderByAggregateInput
    _max?: CommentsMaxOrderByAggregateInput
    _min?: CommentsMinOrderByAggregateInput
  }

  export type CommentsScalarWhereWithAggregatesInput = {
    AND?: CommentsScalarWhereWithAggregatesInput | CommentsScalarWhereWithAggregatesInput[]
    OR?: CommentsScalarWhereWithAggregatesInput[]
    NOT?: CommentsScalarWhereWithAggregatesInput | CommentsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Comments"> | string
    userId?: StringWithAggregatesFilter<"Comments"> | string
    postId?: StringWithAggregatesFilter<"Comments"> | string
    commentsText?: StringWithAggregatesFilter<"Comments"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Comments"> | Date | string
  }

  export type LikesWhereInput = {
    AND?: LikesWhereInput | LikesWhereInput[]
    OR?: LikesWhereInput[]
    NOT?: LikesWhereInput | LikesWhereInput[]
    id?: StringFilter<"Likes"> | string
    postId?: StringNullableFilter<"Likes"> | string | null
    userId?: StringFilter<"Likes"> | string
    commentId?: StringNullableFilter<"Likes"> | string | null
    createdAt?: DateTimeFilter<"Likes"> | Date | string
    post?: XOR<PostsNullableScalarRelationFilter, PostsWhereInput> | null
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    comment?: XOR<CommentsNullableScalarRelationFilter, CommentsWhereInput> | null
  }

  export type LikesOrderByWithRelationInput = {
    id?: SortOrder
    postId?: SortOrderInput | SortOrder
    userId?: SortOrder
    commentId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    post?: PostsOrderByWithRelationInput
    user?: UsersOrderByWithRelationInput
    comment?: CommentsOrderByWithRelationInput
  }

  export type LikesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LikesWhereInput | LikesWhereInput[]
    OR?: LikesWhereInput[]
    NOT?: LikesWhereInput | LikesWhereInput[]
    postId?: StringNullableFilter<"Likes"> | string | null
    userId?: StringFilter<"Likes"> | string
    commentId?: StringNullableFilter<"Likes"> | string | null
    createdAt?: DateTimeFilter<"Likes"> | Date | string
    post?: XOR<PostsNullableScalarRelationFilter, PostsWhereInput> | null
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    comment?: XOR<CommentsNullableScalarRelationFilter, CommentsWhereInput> | null
  }, "id">

  export type LikesOrderByWithAggregationInput = {
    id?: SortOrder
    postId?: SortOrderInput | SortOrder
    userId?: SortOrder
    commentId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: LikesCountOrderByAggregateInput
    _max?: LikesMaxOrderByAggregateInput
    _min?: LikesMinOrderByAggregateInput
  }

  export type LikesScalarWhereWithAggregatesInput = {
    AND?: LikesScalarWhereWithAggregatesInput | LikesScalarWhereWithAggregatesInput[]
    OR?: LikesScalarWhereWithAggregatesInput[]
    NOT?: LikesScalarWhereWithAggregatesInput | LikesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Likes"> | string
    postId?: StringNullableWithAggregatesFilter<"Likes"> | string | null
    userId?: StringWithAggregatesFilter<"Likes"> | string
    commentId?: StringNullableWithAggregatesFilter<"Likes"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Likes"> | Date | string
  }

  export type CategoriesWhereInput = {
    AND?: CategoriesWhereInput | CategoriesWhereInput[]
    OR?: CategoriesWhereInput[]
    NOT?: CategoriesWhereInput | CategoriesWhereInput[]
    id?: StringFilter<"Categories"> | string
    categoryName?: StringFilter<"Categories"> | string
    createdAt?: DateTimeFilter<"Categories"> | Date | string
    postToCategories?: PostToCategoriesListRelationFilter
  }

  export type CategoriesOrderByWithRelationInput = {
    id?: SortOrder
    categoryName?: SortOrder
    createdAt?: SortOrder
    postToCategories?: PostToCategoriesOrderByRelationAggregateInput
  }

  export type CategoriesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CategoriesWhereInput | CategoriesWhereInput[]
    OR?: CategoriesWhereInput[]
    NOT?: CategoriesWhereInput | CategoriesWhereInput[]
    categoryName?: StringFilter<"Categories"> | string
    createdAt?: DateTimeFilter<"Categories"> | Date | string
    postToCategories?: PostToCategoriesListRelationFilter
  }, "id">

  export type CategoriesOrderByWithAggregationInput = {
    id?: SortOrder
    categoryName?: SortOrder
    createdAt?: SortOrder
    _count?: CategoriesCountOrderByAggregateInput
    _max?: CategoriesMaxOrderByAggregateInput
    _min?: CategoriesMinOrderByAggregateInput
  }

  export type CategoriesScalarWhereWithAggregatesInput = {
    AND?: CategoriesScalarWhereWithAggregatesInput | CategoriesScalarWhereWithAggregatesInput[]
    OR?: CategoriesScalarWhereWithAggregatesInput[]
    NOT?: CategoriesScalarWhereWithAggregatesInput | CategoriesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Categories"> | string
    categoryName?: StringWithAggregatesFilter<"Categories"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Categories"> | Date | string
  }

  export type PostToCategoriesWhereInput = {
    AND?: PostToCategoriesWhereInput | PostToCategoriesWhereInput[]
    OR?: PostToCategoriesWhereInput[]
    NOT?: PostToCategoriesWhereInput | PostToCategoriesWhereInput[]
    id?: StringFilter<"PostToCategories"> | string
    postId?: StringFilter<"PostToCategories"> | string
    categoryId?: StringFilter<"PostToCategories"> | string
    createdAt?: DateTimeFilter<"PostToCategories"> | Date | string
    post?: XOR<PostsScalarRelationFilter, PostsWhereInput>
    category?: XOR<CategoriesScalarRelationFilter, CategoriesWhereInput>
  }

  export type PostToCategoriesOrderByWithRelationInput = {
    id?: SortOrder
    postId?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
    post?: PostsOrderByWithRelationInput
    category?: CategoriesOrderByWithRelationInput
  }

  export type PostToCategoriesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PostToCategoriesWhereInput | PostToCategoriesWhereInput[]
    OR?: PostToCategoriesWhereInput[]
    NOT?: PostToCategoriesWhereInput | PostToCategoriesWhereInput[]
    postId?: StringFilter<"PostToCategories"> | string
    categoryId?: StringFilter<"PostToCategories"> | string
    createdAt?: DateTimeFilter<"PostToCategories"> | Date | string
    post?: XOR<PostsScalarRelationFilter, PostsWhereInput>
    category?: XOR<CategoriesScalarRelationFilter, CategoriesWhereInput>
  }, "id">

  export type PostToCategoriesOrderByWithAggregationInput = {
    id?: SortOrder
    postId?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
    _count?: PostToCategoriesCountOrderByAggregateInput
    _max?: PostToCategoriesMaxOrderByAggregateInput
    _min?: PostToCategoriesMinOrderByAggregateInput
  }

  export type PostToCategoriesScalarWhereWithAggregatesInput = {
    AND?: PostToCategoriesScalarWhereWithAggregatesInput | PostToCategoriesScalarWhereWithAggregatesInput[]
    OR?: PostToCategoriesScalarWhereWithAggregatesInput[]
    NOT?: PostToCategoriesScalarWhereWithAggregatesInput | PostToCategoriesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PostToCategories"> | string
    postId?: StringWithAggregatesFilter<"PostToCategories"> | string
    categoryId?: StringWithAggregatesFilter<"PostToCategories"> | string
    createdAt?: DateTimeWithAggregatesFilter<"PostToCategories"> | Date | string
  }

  export type StarsWhereInput = {
    AND?: StarsWhereInput | StarsWhereInput[]
    OR?: StarsWhereInput[]
    NOT?: StarsWhereInput | StarsWhereInput[]
    id?: StringFilter<"Stars"> | string
    postId?: StringFilter<"Stars"> | string
    userId?: StringFilter<"Stars"> | string
    star?: IntFilter<"Stars"> | number
    createdAt?: DateTimeFilter<"Stars"> | Date | string
    post?: XOR<PostsScalarRelationFilter, PostsWhereInput>
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }

  export type StarsOrderByWithRelationInput = {
    id?: SortOrder
    postId?: SortOrder
    userId?: SortOrder
    star?: SortOrder
    createdAt?: SortOrder
    post?: PostsOrderByWithRelationInput
    user?: UsersOrderByWithRelationInput
  }

  export type StarsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: StarsWhereInput | StarsWhereInput[]
    OR?: StarsWhereInput[]
    NOT?: StarsWhereInput | StarsWhereInput[]
    postId?: StringFilter<"Stars"> | string
    userId?: StringFilter<"Stars"> | string
    star?: IntFilter<"Stars"> | number
    createdAt?: DateTimeFilter<"Stars"> | Date | string
    post?: XOR<PostsScalarRelationFilter, PostsWhereInput>
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }, "id">

  export type StarsOrderByWithAggregationInput = {
    id?: SortOrder
    postId?: SortOrder
    userId?: SortOrder
    star?: SortOrder
    createdAt?: SortOrder
    _count?: StarsCountOrderByAggregateInput
    _avg?: StarsAvgOrderByAggregateInput
    _max?: StarsMaxOrderByAggregateInput
    _min?: StarsMinOrderByAggregateInput
    _sum?: StarsSumOrderByAggregateInput
  }

  export type StarsScalarWhereWithAggregatesInput = {
    AND?: StarsScalarWhereWithAggregatesInput | StarsScalarWhereWithAggregatesInput[]
    OR?: StarsScalarWhereWithAggregatesInput[]
    NOT?: StarsScalarWhereWithAggregatesInput | StarsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Stars"> | string
    postId?: StringWithAggregatesFilter<"Stars"> | string
    userId?: StringWithAggregatesFilter<"Stars"> | string
    star?: IntWithAggregatesFilter<"Stars"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Stars"> | Date | string
  }

  export type UsersCreateInput = {
    id?: string
    fullName: string
    registeredAt: Date | string
    comments?: CommentsCreateNestedManyWithoutUserInput
    likes?: LikesCreateNestedManyWithoutUserInput
    stars?: StarsCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateInput = {
    id?: string
    fullName: string
    registeredAt: Date | string
    comments?: CommentsUncheckedCreateNestedManyWithoutUserInput
    likes?: LikesUncheckedCreateNestedManyWithoutUserInput
    stars?: StarsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: CommentsUpdateManyWithoutUserNestedInput
    likes?: LikesUpdateManyWithoutUserNestedInput
    stars?: StarsUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: CommentsUncheckedUpdateManyWithoutUserNestedInput
    likes?: LikesUncheckedUpdateManyWithoutUserNestedInput
    stars?: StarsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UsersCreateManyInput = {
    id?: string
    fullName: string
    registeredAt: Date | string
  }

  export type UsersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuthorsCreateInput = {
    id?: string
    authorId: string
    password: string
    registeredAt: Date | string
    posts?: PostsCreateNestedManyWithoutAuthorInput
  }

  export type AuthorsUncheckedCreateInput = {
    id?: string
    authorId: string
    password: string
    registeredAt: Date | string
    posts?: PostsUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type AuthorsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostsUpdateManyWithoutAuthorNestedInput
  }

  export type AuthorsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostsUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type AuthorsCreateManyInput = {
    id?: string
    authorId: string
    password: string
    registeredAt: Date | string
  }

  export type AuthorsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuthorsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostsCreateInput = {
    id?: string
    title: string
    postMarkdown: string
    createdAt: Date | string
    author: AuthorsCreateNestedOneWithoutPostsInput
    likes?: LikesCreateNestedManyWithoutPostInput
    comments?: CommentsCreateNestedManyWithoutPostInput
    starts?: StarsCreateNestedManyWithoutPostInput
    categories?: PostToCategoriesCreateNestedManyWithoutPostInput
  }

  export type PostsUncheckedCreateInput = {
    id?: string
    title: string
    postMarkdown: string
    authorId: string
    createdAt: Date | string
    likes?: LikesUncheckedCreateNestedManyWithoutPostInput
    comments?: CommentsUncheckedCreateNestedManyWithoutPostInput
    starts?: StarsUncheckedCreateNestedManyWithoutPostInput
    categories?: PostToCategoriesUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    postMarkdown?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: AuthorsUpdateOneRequiredWithoutPostsNestedInput
    likes?: LikesUpdateManyWithoutPostNestedInput
    comments?: CommentsUpdateManyWithoutPostNestedInput
    starts?: StarsUpdateManyWithoutPostNestedInput
    categories?: PostToCategoriesUpdateManyWithoutPostNestedInput
  }

  export type PostsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    postMarkdown?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    likes?: LikesUncheckedUpdateManyWithoutPostNestedInput
    comments?: CommentsUncheckedUpdateManyWithoutPostNestedInput
    starts?: StarsUncheckedUpdateManyWithoutPostNestedInput
    categories?: PostToCategoriesUncheckedUpdateManyWithoutPostNestedInput
  }

  export type PostsCreateManyInput = {
    id?: string
    title: string
    postMarkdown: string
    authorId: string
    createdAt: Date | string
  }

  export type PostsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    postMarkdown?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    postMarkdown?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentsCreateInput = {
    id?: string
    commentsText: string
    createdAt: Date | string
    user: UsersCreateNestedOneWithoutCommentsInput
    post: PostsCreateNestedOneWithoutCommentsInput
    likes?: LikesCreateNestedManyWithoutCommentInput
  }

  export type CommentsUncheckedCreateInput = {
    id?: string
    userId: string
    postId: string
    commentsText: string
    createdAt: Date | string
    likes?: LikesUncheckedCreateNestedManyWithoutCommentInput
  }

  export type CommentsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    commentsText?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutCommentsNestedInput
    post?: PostsUpdateOneRequiredWithoutCommentsNestedInput
    likes?: LikesUpdateManyWithoutCommentNestedInput
  }

  export type CommentsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    commentsText?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    likes?: LikesUncheckedUpdateManyWithoutCommentNestedInput
  }

  export type CommentsCreateManyInput = {
    id?: string
    userId: string
    postId: string
    commentsText: string
    createdAt: Date | string
  }

  export type CommentsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    commentsText?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    commentsText?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikesCreateInput = {
    id?: string
    createdAt: Date | string
    post?: PostsCreateNestedOneWithoutLikesInput
    user: UsersCreateNestedOneWithoutLikesInput
    comment?: CommentsCreateNestedOneWithoutLikesInput
  }

  export type LikesUncheckedCreateInput = {
    id?: string
    postId?: string | null
    userId: string
    commentId?: string | null
    createdAt: Date | string
  }

  export type LikesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: PostsUpdateOneWithoutLikesNestedInput
    user?: UsersUpdateOneRequiredWithoutLikesNestedInput
    comment?: CommentsUpdateOneWithoutLikesNestedInput
  }

  export type LikesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    postId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    commentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikesCreateManyInput = {
    id?: string
    postId?: string | null
    userId: string
    commentId?: string | null
    createdAt: Date | string
  }

  export type LikesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    postId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    commentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoriesCreateInput = {
    id?: string
    categoryName: string
    createdAt: Date | string
    postToCategories?: PostToCategoriesCreateNestedManyWithoutCategoryInput
  }

  export type CategoriesUncheckedCreateInput = {
    id?: string
    categoryName: string
    createdAt: Date | string
    postToCategories?: PostToCategoriesUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoriesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    categoryName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postToCategories?: PostToCategoriesUpdateManyWithoutCategoryNestedInput
  }

  export type CategoriesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    categoryName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postToCategories?: PostToCategoriesUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoriesCreateManyInput = {
    id?: string
    categoryName: string
    createdAt: Date | string
  }

  export type CategoriesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    categoryName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoriesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    categoryName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostToCategoriesCreateInput = {
    id?: string
    createdAt: Date | string
    post: PostsCreateNestedOneWithoutCategoriesInput
    category: CategoriesCreateNestedOneWithoutPostToCategoriesInput
  }

  export type PostToCategoriesUncheckedCreateInput = {
    id?: string
    postId: string
    categoryId: string
    createdAt: Date | string
  }

  export type PostToCategoriesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: PostsUpdateOneRequiredWithoutCategoriesNestedInput
    category?: CategoriesUpdateOneRequiredWithoutPostToCategoriesNestedInput
  }

  export type PostToCategoriesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostToCategoriesCreateManyInput = {
    id?: string
    postId: string
    categoryId: string
    createdAt: Date | string
  }

  export type PostToCategoriesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostToCategoriesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StarsCreateInput = {
    id?: string
    star: number
    createdAt: Date | string
    post: PostsCreateNestedOneWithoutStartsInput
    user: UsersCreateNestedOneWithoutStarsInput
  }

  export type StarsUncheckedCreateInput = {
    id?: string
    postId: string
    userId: string
    star: number
    createdAt: Date | string
  }

  export type StarsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    star?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: PostsUpdateOneRequiredWithoutStartsNestedInput
    user?: UsersUpdateOneRequiredWithoutStarsNestedInput
  }

  export type StarsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    star?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StarsCreateManyInput = {
    id?: string
    postId: string
    userId: string
    star: number
    createdAt: Date | string
  }

  export type StarsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    star?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StarsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    star?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type CommentsListRelationFilter = {
    every?: CommentsWhereInput
    some?: CommentsWhereInput
    none?: CommentsWhereInput
  }

  export type LikesListRelationFilter = {
    every?: LikesWhereInput
    some?: LikesWhereInput
    none?: LikesWhereInput
  }

  export type StarsListRelationFilter = {
    every?: StarsWhereInput
    some?: StarsWhereInput
    none?: StarsWhereInput
  }

  export type CommentsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LikesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StarsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsersCountOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    registeredAt?: SortOrder
  }

  export type UsersMaxOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    registeredAt?: SortOrder
  }

  export type UsersMinOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    registeredAt?: SortOrder
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

  export type PostsListRelationFilter = {
    every?: PostsWhereInput
    some?: PostsWhereInput
    none?: PostsWhereInput
  }

  export type PostsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AuthorsCountOrderByAggregateInput = {
    id?: SortOrder
    authorId?: SortOrder
    password?: SortOrder
    registeredAt?: SortOrder
  }

  export type AuthorsMaxOrderByAggregateInput = {
    id?: SortOrder
    authorId?: SortOrder
    password?: SortOrder
    registeredAt?: SortOrder
  }

  export type AuthorsMinOrderByAggregateInput = {
    id?: SortOrder
    authorId?: SortOrder
    password?: SortOrder
    registeredAt?: SortOrder
  }

  export type AuthorsScalarRelationFilter = {
    is?: AuthorsWhereInput
    isNot?: AuthorsWhereInput
  }

  export type PostToCategoriesListRelationFilter = {
    every?: PostToCategoriesWhereInput
    some?: PostToCategoriesWhereInput
    none?: PostToCategoriesWhereInput
  }

  export type PostToCategoriesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PostsCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    postMarkdown?: SortOrder
    authorId?: SortOrder
    createdAt?: SortOrder
  }

  export type PostsMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    postMarkdown?: SortOrder
    authorId?: SortOrder
    createdAt?: SortOrder
  }

  export type PostsMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    postMarkdown?: SortOrder
    authorId?: SortOrder
    createdAt?: SortOrder
  }

  export type UsersScalarRelationFilter = {
    is?: UsersWhereInput
    isNot?: UsersWhereInput
  }

  export type PostsScalarRelationFilter = {
    is?: PostsWhereInput
    isNot?: PostsWhereInput
  }

  export type CommentsCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
    commentsText?: SortOrder
    createdAt?: SortOrder
  }

  export type CommentsMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
    commentsText?: SortOrder
    createdAt?: SortOrder
  }

  export type CommentsMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
    commentsText?: SortOrder
    createdAt?: SortOrder
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

  export type PostsNullableScalarRelationFilter = {
    is?: PostsWhereInput | null
    isNot?: PostsWhereInput | null
  }

  export type CommentsNullableScalarRelationFilter = {
    is?: CommentsWhereInput | null
    isNot?: CommentsWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type LikesCountOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    userId?: SortOrder
    commentId?: SortOrder
    createdAt?: SortOrder
  }

  export type LikesMaxOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    userId?: SortOrder
    commentId?: SortOrder
    createdAt?: SortOrder
  }

  export type LikesMinOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    userId?: SortOrder
    commentId?: SortOrder
    createdAt?: SortOrder
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

  export type CategoriesCountOrderByAggregateInput = {
    id?: SortOrder
    categoryName?: SortOrder
    createdAt?: SortOrder
  }

  export type CategoriesMaxOrderByAggregateInput = {
    id?: SortOrder
    categoryName?: SortOrder
    createdAt?: SortOrder
  }

  export type CategoriesMinOrderByAggregateInput = {
    id?: SortOrder
    categoryName?: SortOrder
    createdAt?: SortOrder
  }

  export type CategoriesScalarRelationFilter = {
    is?: CategoriesWhereInput
    isNot?: CategoriesWhereInput
  }

  export type PostToCategoriesCountOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
  }

  export type PostToCategoriesMaxOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
  }

  export type PostToCategoriesMinOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StarsCountOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    userId?: SortOrder
    star?: SortOrder
    createdAt?: SortOrder
  }

  export type StarsAvgOrderByAggregateInput = {
    star?: SortOrder
  }

  export type StarsMaxOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    userId?: SortOrder
    star?: SortOrder
    createdAt?: SortOrder
  }

  export type StarsMinOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    userId?: SortOrder
    star?: SortOrder
    createdAt?: SortOrder
  }

  export type StarsSumOrderByAggregateInput = {
    star?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type CommentsCreateNestedManyWithoutUserInput = {
    create?: XOR<CommentsCreateWithoutUserInput, CommentsUncheckedCreateWithoutUserInput> | CommentsCreateWithoutUserInput[] | CommentsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentsCreateOrConnectWithoutUserInput | CommentsCreateOrConnectWithoutUserInput[]
    createMany?: CommentsCreateManyUserInputEnvelope
    connect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
  }

  export type LikesCreateNestedManyWithoutUserInput = {
    create?: XOR<LikesCreateWithoutUserInput, LikesUncheckedCreateWithoutUserInput> | LikesCreateWithoutUserInput[] | LikesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LikesCreateOrConnectWithoutUserInput | LikesCreateOrConnectWithoutUserInput[]
    createMany?: LikesCreateManyUserInputEnvelope
    connect?: LikesWhereUniqueInput | LikesWhereUniqueInput[]
  }

  export type StarsCreateNestedManyWithoutUserInput = {
    create?: XOR<StarsCreateWithoutUserInput, StarsUncheckedCreateWithoutUserInput> | StarsCreateWithoutUserInput[] | StarsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StarsCreateOrConnectWithoutUserInput | StarsCreateOrConnectWithoutUserInput[]
    createMany?: StarsCreateManyUserInputEnvelope
    connect?: StarsWhereUniqueInput | StarsWhereUniqueInput[]
  }

  export type CommentsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CommentsCreateWithoutUserInput, CommentsUncheckedCreateWithoutUserInput> | CommentsCreateWithoutUserInput[] | CommentsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentsCreateOrConnectWithoutUserInput | CommentsCreateOrConnectWithoutUserInput[]
    createMany?: CommentsCreateManyUserInputEnvelope
    connect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
  }

  export type LikesUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<LikesCreateWithoutUserInput, LikesUncheckedCreateWithoutUserInput> | LikesCreateWithoutUserInput[] | LikesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LikesCreateOrConnectWithoutUserInput | LikesCreateOrConnectWithoutUserInput[]
    createMany?: LikesCreateManyUserInputEnvelope
    connect?: LikesWhereUniqueInput | LikesWhereUniqueInput[]
  }

  export type StarsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<StarsCreateWithoutUserInput, StarsUncheckedCreateWithoutUserInput> | StarsCreateWithoutUserInput[] | StarsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StarsCreateOrConnectWithoutUserInput | StarsCreateOrConnectWithoutUserInput[]
    createMany?: StarsCreateManyUserInputEnvelope
    connect?: StarsWhereUniqueInput | StarsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type CommentsUpdateManyWithoutUserNestedInput = {
    create?: XOR<CommentsCreateWithoutUserInput, CommentsUncheckedCreateWithoutUserInput> | CommentsCreateWithoutUserInput[] | CommentsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentsCreateOrConnectWithoutUserInput | CommentsCreateOrConnectWithoutUserInput[]
    upsert?: CommentsUpsertWithWhereUniqueWithoutUserInput | CommentsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CommentsCreateManyUserInputEnvelope
    set?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    disconnect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    delete?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    connect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    update?: CommentsUpdateWithWhereUniqueWithoutUserInput | CommentsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CommentsUpdateManyWithWhereWithoutUserInput | CommentsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CommentsScalarWhereInput | CommentsScalarWhereInput[]
  }

  export type LikesUpdateManyWithoutUserNestedInput = {
    create?: XOR<LikesCreateWithoutUserInput, LikesUncheckedCreateWithoutUserInput> | LikesCreateWithoutUserInput[] | LikesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LikesCreateOrConnectWithoutUserInput | LikesCreateOrConnectWithoutUserInput[]
    upsert?: LikesUpsertWithWhereUniqueWithoutUserInput | LikesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LikesCreateManyUserInputEnvelope
    set?: LikesWhereUniqueInput | LikesWhereUniqueInput[]
    disconnect?: LikesWhereUniqueInput | LikesWhereUniqueInput[]
    delete?: LikesWhereUniqueInput | LikesWhereUniqueInput[]
    connect?: LikesWhereUniqueInput | LikesWhereUniqueInput[]
    update?: LikesUpdateWithWhereUniqueWithoutUserInput | LikesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LikesUpdateManyWithWhereWithoutUserInput | LikesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LikesScalarWhereInput | LikesScalarWhereInput[]
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

  export type CommentsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CommentsCreateWithoutUserInput, CommentsUncheckedCreateWithoutUserInput> | CommentsCreateWithoutUserInput[] | CommentsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentsCreateOrConnectWithoutUserInput | CommentsCreateOrConnectWithoutUserInput[]
    upsert?: CommentsUpsertWithWhereUniqueWithoutUserInput | CommentsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CommentsCreateManyUserInputEnvelope
    set?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    disconnect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    delete?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    connect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    update?: CommentsUpdateWithWhereUniqueWithoutUserInput | CommentsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CommentsUpdateManyWithWhereWithoutUserInput | CommentsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CommentsScalarWhereInput | CommentsScalarWhereInput[]
  }

  export type LikesUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<LikesCreateWithoutUserInput, LikesUncheckedCreateWithoutUserInput> | LikesCreateWithoutUserInput[] | LikesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LikesCreateOrConnectWithoutUserInput | LikesCreateOrConnectWithoutUserInput[]
    upsert?: LikesUpsertWithWhereUniqueWithoutUserInput | LikesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LikesCreateManyUserInputEnvelope
    set?: LikesWhereUniqueInput | LikesWhereUniqueInput[]
    disconnect?: LikesWhereUniqueInput | LikesWhereUniqueInput[]
    delete?: LikesWhereUniqueInput | LikesWhereUniqueInput[]
    connect?: LikesWhereUniqueInput | LikesWhereUniqueInput[]
    update?: LikesUpdateWithWhereUniqueWithoutUserInput | LikesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LikesUpdateManyWithWhereWithoutUserInput | LikesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LikesScalarWhereInput | LikesScalarWhereInput[]
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

  export type PostsCreateNestedManyWithoutAuthorInput = {
    create?: XOR<PostsCreateWithoutAuthorInput, PostsUncheckedCreateWithoutAuthorInput> | PostsCreateWithoutAuthorInput[] | PostsUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: PostsCreateOrConnectWithoutAuthorInput | PostsCreateOrConnectWithoutAuthorInput[]
    createMany?: PostsCreateManyAuthorInputEnvelope
    connect?: PostsWhereUniqueInput | PostsWhereUniqueInput[]
  }

  export type PostsUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<PostsCreateWithoutAuthorInput, PostsUncheckedCreateWithoutAuthorInput> | PostsCreateWithoutAuthorInput[] | PostsUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: PostsCreateOrConnectWithoutAuthorInput | PostsCreateOrConnectWithoutAuthorInput[]
    createMany?: PostsCreateManyAuthorInputEnvelope
    connect?: PostsWhereUniqueInput | PostsWhereUniqueInput[]
  }

  export type PostsUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<PostsCreateWithoutAuthorInput, PostsUncheckedCreateWithoutAuthorInput> | PostsCreateWithoutAuthorInput[] | PostsUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: PostsCreateOrConnectWithoutAuthorInput | PostsCreateOrConnectWithoutAuthorInput[]
    upsert?: PostsUpsertWithWhereUniqueWithoutAuthorInput | PostsUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: PostsCreateManyAuthorInputEnvelope
    set?: PostsWhereUniqueInput | PostsWhereUniqueInput[]
    disconnect?: PostsWhereUniqueInput | PostsWhereUniqueInput[]
    delete?: PostsWhereUniqueInput | PostsWhereUniqueInput[]
    connect?: PostsWhereUniqueInput | PostsWhereUniqueInput[]
    update?: PostsUpdateWithWhereUniqueWithoutAuthorInput | PostsUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: PostsUpdateManyWithWhereWithoutAuthorInput | PostsUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: PostsScalarWhereInput | PostsScalarWhereInput[]
  }

  export type PostsUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<PostsCreateWithoutAuthorInput, PostsUncheckedCreateWithoutAuthorInput> | PostsCreateWithoutAuthorInput[] | PostsUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: PostsCreateOrConnectWithoutAuthorInput | PostsCreateOrConnectWithoutAuthorInput[]
    upsert?: PostsUpsertWithWhereUniqueWithoutAuthorInput | PostsUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: PostsCreateManyAuthorInputEnvelope
    set?: PostsWhereUniqueInput | PostsWhereUniqueInput[]
    disconnect?: PostsWhereUniqueInput | PostsWhereUniqueInput[]
    delete?: PostsWhereUniqueInput | PostsWhereUniqueInput[]
    connect?: PostsWhereUniqueInput | PostsWhereUniqueInput[]
    update?: PostsUpdateWithWhereUniqueWithoutAuthorInput | PostsUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: PostsUpdateManyWithWhereWithoutAuthorInput | PostsUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: PostsScalarWhereInput | PostsScalarWhereInput[]
  }

  export type AuthorsCreateNestedOneWithoutPostsInput = {
    create?: XOR<AuthorsCreateWithoutPostsInput, AuthorsUncheckedCreateWithoutPostsInput>
    connectOrCreate?: AuthorsCreateOrConnectWithoutPostsInput
    connect?: AuthorsWhereUniqueInput
  }

  export type LikesCreateNestedManyWithoutPostInput = {
    create?: XOR<LikesCreateWithoutPostInput, LikesUncheckedCreateWithoutPostInput> | LikesCreateWithoutPostInput[] | LikesUncheckedCreateWithoutPostInput[]
    connectOrCreate?: LikesCreateOrConnectWithoutPostInput | LikesCreateOrConnectWithoutPostInput[]
    createMany?: LikesCreateManyPostInputEnvelope
    connect?: LikesWhereUniqueInput | LikesWhereUniqueInput[]
  }

  export type CommentsCreateNestedManyWithoutPostInput = {
    create?: XOR<CommentsCreateWithoutPostInput, CommentsUncheckedCreateWithoutPostInput> | CommentsCreateWithoutPostInput[] | CommentsUncheckedCreateWithoutPostInput[]
    connectOrCreate?: CommentsCreateOrConnectWithoutPostInput | CommentsCreateOrConnectWithoutPostInput[]
    createMany?: CommentsCreateManyPostInputEnvelope
    connect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
  }

  export type StarsCreateNestedManyWithoutPostInput = {
    create?: XOR<StarsCreateWithoutPostInput, StarsUncheckedCreateWithoutPostInput> | StarsCreateWithoutPostInput[] | StarsUncheckedCreateWithoutPostInput[]
    connectOrCreate?: StarsCreateOrConnectWithoutPostInput | StarsCreateOrConnectWithoutPostInput[]
    createMany?: StarsCreateManyPostInputEnvelope
    connect?: StarsWhereUniqueInput | StarsWhereUniqueInput[]
  }

  export type PostToCategoriesCreateNestedManyWithoutPostInput = {
    create?: XOR<PostToCategoriesCreateWithoutPostInput, PostToCategoriesUncheckedCreateWithoutPostInput> | PostToCategoriesCreateWithoutPostInput[] | PostToCategoriesUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PostToCategoriesCreateOrConnectWithoutPostInput | PostToCategoriesCreateOrConnectWithoutPostInput[]
    createMany?: PostToCategoriesCreateManyPostInputEnvelope
    connect?: PostToCategoriesWhereUniqueInput | PostToCategoriesWhereUniqueInput[]
  }

  export type LikesUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<LikesCreateWithoutPostInput, LikesUncheckedCreateWithoutPostInput> | LikesCreateWithoutPostInput[] | LikesUncheckedCreateWithoutPostInput[]
    connectOrCreate?: LikesCreateOrConnectWithoutPostInput | LikesCreateOrConnectWithoutPostInput[]
    createMany?: LikesCreateManyPostInputEnvelope
    connect?: LikesWhereUniqueInput | LikesWhereUniqueInput[]
  }

  export type CommentsUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<CommentsCreateWithoutPostInput, CommentsUncheckedCreateWithoutPostInput> | CommentsCreateWithoutPostInput[] | CommentsUncheckedCreateWithoutPostInput[]
    connectOrCreate?: CommentsCreateOrConnectWithoutPostInput | CommentsCreateOrConnectWithoutPostInput[]
    createMany?: CommentsCreateManyPostInputEnvelope
    connect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
  }

  export type StarsUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<StarsCreateWithoutPostInput, StarsUncheckedCreateWithoutPostInput> | StarsCreateWithoutPostInput[] | StarsUncheckedCreateWithoutPostInput[]
    connectOrCreate?: StarsCreateOrConnectWithoutPostInput | StarsCreateOrConnectWithoutPostInput[]
    createMany?: StarsCreateManyPostInputEnvelope
    connect?: StarsWhereUniqueInput | StarsWhereUniqueInput[]
  }

  export type PostToCategoriesUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<PostToCategoriesCreateWithoutPostInput, PostToCategoriesUncheckedCreateWithoutPostInput> | PostToCategoriesCreateWithoutPostInput[] | PostToCategoriesUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PostToCategoriesCreateOrConnectWithoutPostInput | PostToCategoriesCreateOrConnectWithoutPostInput[]
    createMany?: PostToCategoriesCreateManyPostInputEnvelope
    connect?: PostToCategoriesWhereUniqueInput | PostToCategoriesWhereUniqueInput[]
  }

  export type AuthorsUpdateOneRequiredWithoutPostsNestedInput = {
    create?: XOR<AuthorsCreateWithoutPostsInput, AuthorsUncheckedCreateWithoutPostsInput>
    connectOrCreate?: AuthorsCreateOrConnectWithoutPostsInput
    upsert?: AuthorsUpsertWithoutPostsInput
    connect?: AuthorsWhereUniqueInput
    update?: XOR<XOR<AuthorsUpdateToOneWithWhereWithoutPostsInput, AuthorsUpdateWithoutPostsInput>, AuthorsUncheckedUpdateWithoutPostsInput>
  }

  export type LikesUpdateManyWithoutPostNestedInput = {
    create?: XOR<LikesCreateWithoutPostInput, LikesUncheckedCreateWithoutPostInput> | LikesCreateWithoutPostInput[] | LikesUncheckedCreateWithoutPostInput[]
    connectOrCreate?: LikesCreateOrConnectWithoutPostInput | LikesCreateOrConnectWithoutPostInput[]
    upsert?: LikesUpsertWithWhereUniqueWithoutPostInput | LikesUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: LikesCreateManyPostInputEnvelope
    set?: LikesWhereUniqueInput | LikesWhereUniqueInput[]
    disconnect?: LikesWhereUniqueInput | LikesWhereUniqueInput[]
    delete?: LikesWhereUniqueInput | LikesWhereUniqueInput[]
    connect?: LikesWhereUniqueInput | LikesWhereUniqueInput[]
    update?: LikesUpdateWithWhereUniqueWithoutPostInput | LikesUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: LikesUpdateManyWithWhereWithoutPostInput | LikesUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: LikesScalarWhereInput | LikesScalarWhereInput[]
  }

  export type CommentsUpdateManyWithoutPostNestedInput = {
    create?: XOR<CommentsCreateWithoutPostInput, CommentsUncheckedCreateWithoutPostInput> | CommentsCreateWithoutPostInput[] | CommentsUncheckedCreateWithoutPostInput[]
    connectOrCreate?: CommentsCreateOrConnectWithoutPostInput | CommentsCreateOrConnectWithoutPostInput[]
    upsert?: CommentsUpsertWithWhereUniqueWithoutPostInput | CommentsUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: CommentsCreateManyPostInputEnvelope
    set?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    disconnect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    delete?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    connect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    update?: CommentsUpdateWithWhereUniqueWithoutPostInput | CommentsUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: CommentsUpdateManyWithWhereWithoutPostInput | CommentsUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: CommentsScalarWhereInput | CommentsScalarWhereInput[]
  }

  export type StarsUpdateManyWithoutPostNestedInput = {
    create?: XOR<StarsCreateWithoutPostInput, StarsUncheckedCreateWithoutPostInput> | StarsCreateWithoutPostInput[] | StarsUncheckedCreateWithoutPostInput[]
    connectOrCreate?: StarsCreateOrConnectWithoutPostInput | StarsCreateOrConnectWithoutPostInput[]
    upsert?: StarsUpsertWithWhereUniqueWithoutPostInput | StarsUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: StarsCreateManyPostInputEnvelope
    set?: StarsWhereUniqueInput | StarsWhereUniqueInput[]
    disconnect?: StarsWhereUniqueInput | StarsWhereUniqueInput[]
    delete?: StarsWhereUniqueInput | StarsWhereUniqueInput[]
    connect?: StarsWhereUniqueInput | StarsWhereUniqueInput[]
    update?: StarsUpdateWithWhereUniqueWithoutPostInput | StarsUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: StarsUpdateManyWithWhereWithoutPostInput | StarsUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: StarsScalarWhereInput | StarsScalarWhereInput[]
  }

  export type PostToCategoriesUpdateManyWithoutPostNestedInput = {
    create?: XOR<PostToCategoriesCreateWithoutPostInput, PostToCategoriesUncheckedCreateWithoutPostInput> | PostToCategoriesCreateWithoutPostInput[] | PostToCategoriesUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PostToCategoriesCreateOrConnectWithoutPostInput | PostToCategoriesCreateOrConnectWithoutPostInput[]
    upsert?: PostToCategoriesUpsertWithWhereUniqueWithoutPostInput | PostToCategoriesUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: PostToCategoriesCreateManyPostInputEnvelope
    set?: PostToCategoriesWhereUniqueInput | PostToCategoriesWhereUniqueInput[]
    disconnect?: PostToCategoriesWhereUniqueInput | PostToCategoriesWhereUniqueInput[]
    delete?: PostToCategoriesWhereUniqueInput | PostToCategoriesWhereUniqueInput[]
    connect?: PostToCategoriesWhereUniqueInput | PostToCategoriesWhereUniqueInput[]
    update?: PostToCategoriesUpdateWithWhereUniqueWithoutPostInput | PostToCategoriesUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: PostToCategoriesUpdateManyWithWhereWithoutPostInput | PostToCategoriesUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: PostToCategoriesScalarWhereInput | PostToCategoriesScalarWhereInput[]
  }

  export type LikesUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<LikesCreateWithoutPostInput, LikesUncheckedCreateWithoutPostInput> | LikesCreateWithoutPostInput[] | LikesUncheckedCreateWithoutPostInput[]
    connectOrCreate?: LikesCreateOrConnectWithoutPostInput | LikesCreateOrConnectWithoutPostInput[]
    upsert?: LikesUpsertWithWhereUniqueWithoutPostInput | LikesUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: LikesCreateManyPostInputEnvelope
    set?: LikesWhereUniqueInput | LikesWhereUniqueInput[]
    disconnect?: LikesWhereUniqueInput | LikesWhereUniqueInput[]
    delete?: LikesWhereUniqueInput | LikesWhereUniqueInput[]
    connect?: LikesWhereUniqueInput | LikesWhereUniqueInput[]
    update?: LikesUpdateWithWhereUniqueWithoutPostInput | LikesUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: LikesUpdateManyWithWhereWithoutPostInput | LikesUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: LikesScalarWhereInput | LikesScalarWhereInput[]
  }

  export type CommentsUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<CommentsCreateWithoutPostInput, CommentsUncheckedCreateWithoutPostInput> | CommentsCreateWithoutPostInput[] | CommentsUncheckedCreateWithoutPostInput[]
    connectOrCreate?: CommentsCreateOrConnectWithoutPostInput | CommentsCreateOrConnectWithoutPostInput[]
    upsert?: CommentsUpsertWithWhereUniqueWithoutPostInput | CommentsUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: CommentsCreateManyPostInputEnvelope
    set?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    disconnect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    delete?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    connect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    update?: CommentsUpdateWithWhereUniqueWithoutPostInput | CommentsUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: CommentsUpdateManyWithWhereWithoutPostInput | CommentsUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: CommentsScalarWhereInput | CommentsScalarWhereInput[]
  }

  export type StarsUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<StarsCreateWithoutPostInput, StarsUncheckedCreateWithoutPostInput> | StarsCreateWithoutPostInput[] | StarsUncheckedCreateWithoutPostInput[]
    connectOrCreate?: StarsCreateOrConnectWithoutPostInput | StarsCreateOrConnectWithoutPostInput[]
    upsert?: StarsUpsertWithWhereUniqueWithoutPostInput | StarsUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: StarsCreateManyPostInputEnvelope
    set?: StarsWhereUniqueInput | StarsWhereUniqueInput[]
    disconnect?: StarsWhereUniqueInput | StarsWhereUniqueInput[]
    delete?: StarsWhereUniqueInput | StarsWhereUniqueInput[]
    connect?: StarsWhereUniqueInput | StarsWhereUniqueInput[]
    update?: StarsUpdateWithWhereUniqueWithoutPostInput | StarsUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: StarsUpdateManyWithWhereWithoutPostInput | StarsUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: StarsScalarWhereInput | StarsScalarWhereInput[]
  }

  export type PostToCategoriesUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<PostToCategoriesCreateWithoutPostInput, PostToCategoriesUncheckedCreateWithoutPostInput> | PostToCategoriesCreateWithoutPostInput[] | PostToCategoriesUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PostToCategoriesCreateOrConnectWithoutPostInput | PostToCategoriesCreateOrConnectWithoutPostInput[]
    upsert?: PostToCategoriesUpsertWithWhereUniqueWithoutPostInput | PostToCategoriesUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: PostToCategoriesCreateManyPostInputEnvelope
    set?: PostToCategoriesWhereUniqueInput | PostToCategoriesWhereUniqueInput[]
    disconnect?: PostToCategoriesWhereUniqueInput | PostToCategoriesWhereUniqueInput[]
    delete?: PostToCategoriesWhereUniqueInput | PostToCategoriesWhereUniqueInput[]
    connect?: PostToCategoriesWhereUniqueInput | PostToCategoriesWhereUniqueInput[]
    update?: PostToCategoriesUpdateWithWhereUniqueWithoutPostInput | PostToCategoriesUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: PostToCategoriesUpdateManyWithWhereWithoutPostInput | PostToCategoriesUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: PostToCategoriesScalarWhereInput | PostToCategoriesScalarWhereInput[]
  }

  export type UsersCreateNestedOneWithoutCommentsInput = {
    create?: XOR<UsersCreateWithoutCommentsInput, UsersUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutCommentsInput
    connect?: UsersWhereUniqueInput
  }

  export type PostsCreateNestedOneWithoutCommentsInput = {
    create?: XOR<PostsCreateWithoutCommentsInput, PostsUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: PostsCreateOrConnectWithoutCommentsInput
    connect?: PostsWhereUniqueInput
  }

  export type LikesCreateNestedManyWithoutCommentInput = {
    create?: XOR<LikesCreateWithoutCommentInput, LikesUncheckedCreateWithoutCommentInput> | LikesCreateWithoutCommentInput[] | LikesUncheckedCreateWithoutCommentInput[]
    connectOrCreate?: LikesCreateOrConnectWithoutCommentInput | LikesCreateOrConnectWithoutCommentInput[]
    createMany?: LikesCreateManyCommentInputEnvelope
    connect?: LikesWhereUniqueInput | LikesWhereUniqueInput[]
  }

  export type LikesUncheckedCreateNestedManyWithoutCommentInput = {
    create?: XOR<LikesCreateWithoutCommentInput, LikesUncheckedCreateWithoutCommentInput> | LikesCreateWithoutCommentInput[] | LikesUncheckedCreateWithoutCommentInput[]
    connectOrCreate?: LikesCreateOrConnectWithoutCommentInput | LikesCreateOrConnectWithoutCommentInput[]
    createMany?: LikesCreateManyCommentInputEnvelope
    connect?: LikesWhereUniqueInput | LikesWhereUniqueInput[]
  }

  export type UsersUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<UsersCreateWithoutCommentsInput, UsersUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutCommentsInput
    upsert?: UsersUpsertWithoutCommentsInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutCommentsInput, UsersUpdateWithoutCommentsInput>, UsersUncheckedUpdateWithoutCommentsInput>
  }

  export type PostsUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<PostsCreateWithoutCommentsInput, PostsUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: PostsCreateOrConnectWithoutCommentsInput
    upsert?: PostsUpsertWithoutCommentsInput
    connect?: PostsWhereUniqueInput
    update?: XOR<XOR<PostsUpdateToOneWithWhereWithoutCommentsInput, PostsUpdateWithoutCommentsInput>, PostsUncheckedUpdateWithoutCommentsInput>
  }

  export type LikesUpdateManyWithoutCommentNestedInput = {
    create?: XOR<LikesCreateWithoutCommentInput, LikesUncheckedCreateWithoutCommentInput> | LikesCreateWithoutCommentInput[] | LikesUncheckedCreateWithoutCommentInput[]
    connectOrCreate?: LikesCreateOrConnectWithoutCommentInput | LikesCreateOrConnectWithoutCommentInput[]
    upsert?: LikesUpsertWithWhereUniqueWithoutCommentInput | LikesUpsertWithWhereUniqueWithoutCommentInput[]
    createMany?: LikesCreateManyCommentInputEnvelope
    set?: LikesWhereUniqueInput | LikesWhereUniqueInput[]
    disconnect?: LikesWhereUniqueInput | LikesWhereUniqueInput[]
    delete?: LikesWhereUniqueInput | LikesWhereUniqueInput[]
    connect?: LikesWhereUniqueInput | LikesWhereUniqueInput[]
    update?: LikesUpdateWithWhereUniqueWithoutCommentInput | LikesUpdateWithWhereUniqueWithoutCommentInput[]
    updateMany?: LikesUpdateManyWithWhereWithoutCommentInput | LikesUpdateManyWithWhereWithoutCommentInput[]
    deleteMany?: LikesScalarWhereInput | LikesScalarWhereInput[]
  }

  export type LikesUncheckedUpdateManyWithoutCommentNestedInput = {
    create?: XOR<LikesCreateWithoutCommentInput, LikesUncheckedCreateWithoutCommentInput> | LikesCreateWithoutCommentInput[] | LikesUncheckedCreateWithoutCommentInput[]
    connectOrCreate?: LikesCreateOrConnectWithoutCommentInput | LikesCreateOrConnectWithoutCommentInput[]
    upsert?: LikesUpsertWithWhereUniqueWithoutCommentInput | LikesUpsertWithWhereUniqueWithoutCommentInput[]
    createMany?: LikesCreateManyCommentInputEnvelope
    set?: LikesWhereUniqueInput | LikesWhereUniqueInput[]
    disconnect?: LikesWhereUniqueInput | LikesWhereUniqueInput[]
    delete?: LikesWhereUniqueInput | LikesWhereUniqueInput[]
    connect?: LikesWhereUniqueInput | LikesWhereUniqueInput[]
    update?: LikesUpdateWithWhereUniqueWithoutCommentInput | LikesUpdateWithWhereUniqueWithoutCommentInput[]
    updateMany?: LikesUpdateManyWithWhereWithoutCommentInput | LikesUpdateManyWithWhereWithoutCommentInput[]
    deleteMany?: LikesScalarWhereInput | LikesScalarWhereInput[]
  }

  export type PostsCreateNestedOneWithoutLikesInput = {
    create?: XOR<PostsCreateWithoutLikesInput, PostsUncheckedCreateWithoutLikesInput>
    connectOrCreate?: PostsCreateOrConnectWithoutLikesInput
    connect?: PostsWhereUniqueInput
  }

  export type UsersCreateNestedOneWithoutLikesInput = {
    create?: XOR<UsersCreateWithoutLikesInput, UsersUncheckedCreateWithoutLikesInput>
    connectOrCreate?: UsersCreateOrConnectWithoutLikesInput
    connect?: UsersWhereUniqueInput
  }

  export type CommentsCreateNestedOneWithoutLikesInput = {
    create?: XOR<CommentsCreateWithoutLikesInput, CommentsUncheckedCreateWithoutLikesInput>
    connectOrCreate?: CommentsCreateOrConnectWithoutLikesInput
    connect?: CommentsWhereUniqueInput
  }

  export type PostsUpdateOneWithoutLikesNestedInput = {
    create?: XOR<PostsCreateWithoutLikesInput, PostsUncheckedCreateWithoutLikesInput>
    connectOrCreate?: PostsCreateOrConnectWithoutLikesInput
    upsert?: PostsUpsertWithoutLikesInput
    disconnect?: PostsWhereInput | boolean
    delete?: PostsWhereInput | boolean
    connect?: PostsWhereUniqueInput
    update?: XOR<XOR<PostsUpdateToOneWithWhereWithoutLikesInput, PostsUpdateWithoutLikesInput>, PostsUncheckedUpdateWithoutLikesInput>
  }

  export type UsersUpdateOneRequiredWithoutLikesNestedInput = {
    create?: XOR<UsersCreateWithoutLikesInput, UsersUncheckedCreateWithoutLikesInput>
    connectOrCreate?: UsersCreateOrConnectWithoutLikesInput
    upsert?: UsersUpsertWithoutLikesInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutLikesInput, UsersUpdateWithoutLikesInput>, UsersUncheckedUpdateWithoutLikesInput>
  }

  export type CommentsUpdateOneWithoutLikesNestedInput = {
    create?: XOR<CommentsCreateWithoutLikesInput, CommentsUncheckedCreateWithoutLikesInput>
    connectOrCreate?: CommentsCreateOrConnectWithoutLikesInput
    upsert?: CommentsUpsertWithoutLikesInput
    disconnect?: CommentsWhereInput | boolean
    delete?: CommentsWhereInput | boolean
    connect?: CommentsWhereUniqueInput
    update?: XOR<XOR<CommentsUpdateToOneWithWhereWithoutLikesInput, CommentsUpdateWithoutLikesInput>, CommentsUncheckedUpdateWithoutLikesInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type PostToCategoriesCreateNestedManyWithoutCategoryInput = {
    create?: XOR<PostToCategoriesCreateWithoutCategoryInput, PostToCategoriesUncheckedCreateWithoutCategoryInput> | PostToCategoriesCreateWithoutCategoryInput[] | PostToCategoriesUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: PostToCategoriesCreateOrConnectWithoutCategoryInput | PostToCategoriesCreateOrConnectWithoutCategoryInput[]
    createMany?: PostToCategoriesCreateManyCategoryInputEnvelope
    connect?: PostToCategoriesWhereUniqueInput | PostToCategoriesWhereUniqueInput[]
  }

  export type PostToCategoriesUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<PostToCategoriesCreateWithoutCategoryInput, PostToCategoriesUncheckedCreateWithoutCategoryInput> | PostToCategoriesCreateWithoutCategoryInput[] | PostToCategoriesUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: PostToCategoriesCreateOrConnectWithoutCategoryInput | PostToCategoriesCreateOrConnectWithoutCategoryInput[]
    createMany?: PostToCategoriesCreateManyCategoryInputEnvelope
    connect?: PostToCategoriesWhereUniqueInput | PostToCategoriesWhereUniqueInput[]
  }

  export type PostToCategoriesUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<PostToCategoriesCreateWithoutCategoryInput, PostToCategoriesUncheckedCreateWithoutCategoryInput> | PostToCategoriesCreateWithoutCategoryInput[] | PostToCategoriesUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: PostToCategoriesCreateOrConnectWithoutCategoryInput | PostToCategoriesCreateOrConnectWithoutCategoryInput[]
    upsert?: PostToCategoriesUpsertWithWhereUniqueWithoutCategoryInput | PostToCategoriesUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: PostToCategoriesCreateManyCategoryInputEnvelope
    set?: PostToCategoriesWhereUniqueInput | PostToCategoriesWhereUniqueInput[]
    disconnect?: PostToCategoriesWhereUniqueInput | PostToCategoriesWhereUniqueInput[]
    delete?: PostToCategoriesWhereUniqueInput | PostToCategoriesWhereUniqueInput[]
    connect?: PostToCategoriesWhereUniqueInput | PostToCategoriesWhereUniqueInput[]
    update?: PostToCategoriesUpdateWithWhereUniqueWithoutCategoryInput | PostToCategoriesUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: PostToCategoriesUpdateManyWithWhereWithoutCategoryInput | PostToCategoriesUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: PostToCategoriesScalarWhereInput | PostToCategoriesScalarWhereInput[]
  }

  export type PostToCategoriesUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<PostToCategoriesCreateWithoutCategoryInput, PostToCategoriesUncheckedCreateWithoutCategoryInput> | PostToCategoriesCreateWithoutCategoryInput[] | PostToCategoriesUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: PostToCategoriesCreateOrConnectWithoutCategoryInput | PostToCategoriesCreateOrConnectWithoutCategoryInput[]
    upsert?: PostToCategoriesUpsertWithWhereUniqueWithoutCategoryInput | PostToCategoriesUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: PostToCategoriesCreateManyCategoryInputEnvelope
    set?: PostToCategoriesWhereUniqueInput | PostToCategoriesWhereUniqueInput[]
    disconnect?: PostToCategoriesWhereUniqueInput | PostToCategoriesWhereUniqueInput[]
    delete?: PostToCategoriesWhereUniqueInput | PostToCategoriesWhereUniqueInput[]
    connect?: PostToCategoriesWhereUniqueInput | PostToCategoriesWhereUniqueInput[]
    update?: PostToCategoriesUpdateWithWhereUniqueWithoutCategoryInput | PostToCategoriesUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: PostToCategoriesUpdateManyWithWhereWithoutCategoryInput | PostToCategoriesUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: PostToCategoriesScalarWhereInput | PostToCategoriesScalarWhereInput[]
  }

  export type PostsCreateNestedOneWithoutCategoriesInput = {
    create?: XOR<PostsCreateWithoutCategoriesInput, PostsUncheckedCreateWithoutCategoriesInput>
    connectOrCreate?: PostsCreateOrConnectWithoutCategoriesInput
    connect?: PostsWhereUniqueInput
  }

  export type CategoriesCreateNestedOneWithoutPostToCategoriesInput = {
    create?: XOR<CategoriesCreateWithoutPostToCategoriesInput, CategoriesUncheckedCreateWithoutPostToCategoriesInput>
    connectOrCreate?: CategoriesCreateOrConnectWithoutPostToCategoriesInput
    connect?: CategoriesWhereUniqueInput
  }

  export type PostsUpdateOneRequiredWithoutCategoriesNestedInput = {
    create?: XOR<PostsCreateWithoutCategoriesInput, PostsUncheckedCreateWithoutCategoriesInput>
    connectOrCreate?: PostsCreateOrConnectWithoutCategoriesInput
    upsert?: PostsUpsertWithoutCategoriesInput
    connect?: PostsWhereUniqueInput
    update?: XOR<XOR<PostsUpdateToOneWithWhereWithoutCategoriesInput, PostsUpdateWithoutCategoriesInput>, PostsUncheckedUpdateWithoutCategoriesInput>
  }

  export type CategoriesUpdateOneRequiredWithoutPostToCategoriesNestedInput = {
    create?: XOR<CategoriesCreateWithoutPostToCategoriesInput, CategoriesUncheckedCreateWithoutPostToCategoriesInput>
    connectOrCreate?: CategoriesCreateOrConnectWithoutPostToCategoriesInput
    upsert?: CategoriesUpsertWithoutPostToCategoriesInput
    connect?: CategoriesWhereUniqueInput
    update?: XOR<XOR<CategoriesUpdateToOneWithWhereWithoutPostToCategoriesInput, CategoriesUpdateWithoutPostToCategoriesInput>, CategoriesUncheckedUpdateWithoutPostToCategoriesInput>
  }

  export type PostsCreateNestedOneWithoutStartsInput = {
    create?: XOR<PostsCreateWithoutStartsInput, PostsUncheckedCreateWithoutStartsInput>
    connectOrCreate?: PostsCreateOrConnectWithoutStartsInput
    connect?: PostsWhereUniqueInput
  }

  export type UsersCreateNestedOneWithoutStarsInput = {
    create?: XOR<UsersCreateWithoutStarsInput, UsersUncheckedCreateWithoutStarsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutStarsInput
    connect?: UsersWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PostsUpdateOneRequiredWithoutStartsNestedInput = {
    create?: XOR<PostsCreateWithoutStartsInput, PostsUncheckedCreateWithoutStartsInput>
    connectOrCreate?: PostsCreateOrConnectWithoutStartsInput
    upsert?: PostsUpsertWithoutStartsInput
    connect?: PostsWhereUniqueInput
    update?: XOR<XOR<PostsUpdateToOneWithWhereWithoutStartsInput, PostsUpdateWithoutStartsInput>, PostsUncheckedUpdateWithoutStartsInput>
  }

  export type UsersUpdateOneRequiredWithoutStarsNestedInput = {
    create?: XOR<UsersCreateWithoutStarsInput, UsersUncheckedCreateWithoutStarsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutStarsInput
    upsert?: UsersUpsertWithoutStarsInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutStarsInput, UsersUpdateWithoutStarsInput>, UsersUncheckedUpdateWithoutStarsInput>
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

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type CommentsCreateWithoutUserInput = {
    id?: string
    commentsText: string
    createdAt: Date | string
    post: PostsCreateNestedOneWithoutCommentsInput
    likes?: LikesCreateNestedManyWithoutCommentInput
  }

  export type CommentsUncheckedCreateWithoutUserInput = {
    id?: string
    postId: string
    commentsText: string
    createdAt: Date | string
    likes?: LikesUncheckedCreateNestedManyWithoutCommentInput
  }

  export type CommentsCreateOrConnectWithoutUserInput = {
    where: CommentsWhereUniqueInput
    create: XOR<CommentsCreateWithoutUserInput, CommentsUncheckedCreateWithoutUserInput>
  }

  export type CommentsCreateManyUserInputEnvelope = {
    data: CommentsCreateManyUserInput | CommentsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type LikesCreateWithoutUserInput = {
    id?: string
    createdAt: Date | string
    post?: PostsCreateNestedOneWithoutLikesInput
    comment?: CommentsCreateNestedOneWithoutLikesInput
  }

  export type LikesUncheckedCreateWithoutUserInput = {
    id?: string
    postId?: string | null
    commentId?: string | null
    createdAt: Date | string
  }

  export type LikesCreateOrConnectWithoutUserInput = {
    where: LikesWhereUniqueInput
    create: XOR<LikesCreateWithoutUserInput, LikesUncheckedCreateWithoutUserInput>
  }

  export type LikesCreateManyUserInputEnvelope = {
    data: LikesCreateManyUserInput | LikesCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type StarsCreateWithoutUserInput = {
    id?: string
    star: number
    createdAt: Date | string
    post: PostsCreateNestedOneWithoutStartsInput
  }

  export type StarsUncheckedCreateWithoutUserInput = {
    id?: string
    postId: string
    star: number
    createdAt: Date | string
  }

  export type StarsCreateOrConnectWithoutUserInput = {
    where: StarsWhereUniqueInput
    create: XOR<StarsCreateWithoutUserInput, StarsUncheckedCreateWithoutUserInput>
  }

  export type StarsCreateManyUserInputEnvelope = {
    data: StarsCreateManyUserInput | StarsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CommentsUpsertWithWhereUniqueWithoutUserInput = {
    where: CommentsWhereUniqueInput
    update: XOR<CommentsUpdateWithoutUserInput, CommentsUncheckedUpdateWithoutUserInput>
    create: XOR<CommentsCreateWithoutUserInput, CommentsUncheckedCreateWithoutUserInput>
  }

  export type CommentsUpdateWithWhereUniqueWithoutUserInput = {
    where: CommentsWhereUniqueInput
    data: XOR<CommentsUpdateWithoutUserInput, CommentsUncheckedUpdateWithoutUserInput>
  }

  export type CommentsUpdateManyWithWhereWithoutUserInput = {
    where: CommentsScalarWhereInput
    data: XOR<CommentsUpdateManyMutationInput, CommentsUncheckedUpdateManyWithoutUserInput>
  }

  export type CommentsScalarWhereInput = {
    AND?: CommentsScalarWhereInput | CommentsScalarWhereInput[]
    OR?: CommentsScalarWhereInput[]
    NOT?: CommentsScalarWhereInput | CommentsScalarWhereInput[]
    id?: StringFilter<"Comments"> | string
    userId?: StringFilter<"Comments"> | string
    postId?: StringFilter<"Comments"> | string
    commentsText?: StringFilter<"Comments"> | string
    createdAt?: DateTimeFilter<"Comments"> | Date | string
  }

  export type LikesUpsertWithWhereUniqueWithoutUserInput = {
    where: LikesWhereUniqueInput
    update: XOR<LikesUpdateWithoutUserInput, LikesUncheckedUpdateWithoutUserInput>
    create: XOR<LikesCreateWithoutUserInput, LikesUncheckedCreateWithoutUserInput>
  }

  export type LikesUpdateWithWhereUniqueWithoutUserInput = {
    where: LikesWhereUniqueInput
    data: XOR<LikesUpdateWithoutUserInput, LikesUncheckedUpdateWithoutUserInput>
  }

  export type LikesUpdateManyWithWhereWithoutUserInput = {
    where: LikesScalarWhereInput
    data: XOR<LikesUpdateManyMutationInput, LikesUncheckedUpdateManyWithoutUserInput>
  }

  export type LikesScalarWhereInput = {
    AND?: LikesScalarWhereInput | LikesScalarWhereInput[]
    OR?: LikesScalarWhereInput[]
    NOT?: LikesScalarWhereInput | LikesScalarWhereInput[]
    id?: StringFilter<"Likes"> | string
    postId?: StringNullableFilter<"Likes"> | string | null
    userId?: StringFilter<"Likes"> | string
    commentId?: StringNullableFilter<"Likes"> | string | null
    createdAt?: DateTimeFilter<"Likes"> | Date | string
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
    postId?: StringFilter<"Stars"> | string
    userId?: StringFilter<"Stars"> | string
    star?: IntFilter<"Stars"> | number
    createdAt?: DateTimeFilter<"Stars"> | Date | string
  }

  export type PostsCreateWithoutAuthorInput = {
    id?: string
    title: string
    postMarkdown: string
    createdAt: Date | string
    likes?: LikesCreateNestedManyWithoutPostInput
    comments?: CommentsCreateNestedManyWithoutPostInput
    starts?: StarsCreateNestedManyWithoutPostInput
    categories?: PostToCategoriesCreateNestedManyWithoutPostInput
  }

  export type PostsUncheckedCreateWithoutAuthorInput = {
    id?: string
    title: string
    postMarkdown: string
    createdAt: Date | string
    likes?: LikesUncheckedCreateNestedManyWithoutPostInput
    comments?: CommentsUncheckedCreateNestedManyWithoutPostInput
    starts?: StarsUncheckedCreateNestedManyWithoutPostInput
    categories?: PostToCategoriesUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostsCreateOrConnectWithoutAuthorInput = {
    where: PostsWhereUniqueInput
    create: XOR<PostsCreateWithoutAuthorInput, PostsUncheckedCreateWithoutAuthorInput>
  }

  export type PostsCreateManyAuthorInputEnvelope = {
    data: PostsCreateManyAuthorInput | PostsCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type PostsUpsertWithWhereUniqueWithoutAuthorInput = {
    where: PostsWhereUniqueInput
    update: XOR<PostsUpdateWithoutAuthorInput, PostsUncheckedUpdateWithoutAuthorInput>
    create: XOR<PostsCreateWithoutAuthorInput, PostsUncheckedCreateWithoutAuthorInput>
  }

  export type PostsUpdateWithWhereUniqueWithoutAuthorInput = {
    where: PostsWhereUniqueInput
    data: XOR<PostsUpdateWithoutAuthorInput, PostsUncheckedUpdateWithoutAuthorInput>
  }

  export type PostsUpdateManyWithWhereWithoutAuthorInput = {
    where: PostsScalarWhereInput
    data: XOR<PostsUpdateManyMutationInput, PostsUncheckedUpdateManyWithoutAuthorInput>
  }

  export type PostsScalarWhereInput = {
    AND?: PostsScalarWhereInput | PostsScalarWhereInput[]
    OR?: PostsScalarWhereInput[]
    NOT?: PostsScalarWhereInput | PostsScalarWhereInput[]
    id?: StringFilter<"Posts"> | string
    title?: StringFilter<"Posts"> | string
    postMarkdown?: StringFilter<"Posts"> | string
    authorId?: StringFilter<"Posts"> | string
    createdAt?: DateTimeFilter<"Posts"> | Date | string
  }

  export type AuthorsCreateWithoutPostsInput = {
    id?: string
    authorId: string
    password: string
    registeredAt: Date | string
  }

  export type AuthorsUncheckedCreateWithoutPostsInput = {
    id?: string
    authorId: string
    password: string
    registeredAt: Date | string
  }

  export type AuthorsCreateOrConnectWithoutPostsInput = {
    where: AuthorsWhereUniqueInput
    create: XOR<AuthorsCreateWithoutPostsInput, AuthorsUncheckedCreateWithoutPostsInput>
  }

  export type LikesCreateWithoutPostInput = {
    id?: string
    createdAt: Date | string
    user: UsersCreateNestedOneWithoutLikesInput
    comment?: CommentsCreateNestedOneWithoutLikesInput
  }

  export type LikesUncheckedCreateWithoutPostInput = {
    id?: string
    userId: string
    commentId?: string | null
    createdAt: Date | string
  }

  export type LikesCreateOrConnectWithoutPostInput = {
    where: LikesWhereUniqueInput
    create: XOR<LikesCreateWithoutPostInput, LikesUncheckedCreateWithoutPostInput>
  }

  export type LikesCreateManyPostInputEnvelope = {
    data: LikesCreateManyPostInput | LikesCreateManyPostInput[]
    skipDuplicates?: boolean
  }

  export type CommentsCreateWithoutPostInput = {
    id?: string
    commentsText: string
    createdAt: Date | string
    user: UsersCreateNestedOneWithoutCommentsInput
    likes?: LikesCreateNestedManyWithoutCommentInput
  }

  export type CommentsUncheckedCreateWithoutPostInput = {
    id?: string
    userId: string
    commentsText: string
    createdAt: Date | string
    likes?: LikesUncheckedCreateNestedManyWithoutCommentInput
  }

  export type CommentsCreateOrConnectWithoutPostInput = {
    where: CommentsWhereUniqueInput
    create: XOR<CommentsCreateWithoutPostInput, CommentsUncheckedCreateWithoutPostInput>
  }

  export type CommentsCreateManyPostInputEnvelope = {
    data: CommentsCreateManyPostInput | CommentsCreateManyPostInput[]
    skipDuplicates?: boolean
  }

  export type StarsCreateWithoutPostInput = {
    id?: string
    star: number
    createdAt: Date | string
    user: UsersCreateNestedOneWithoutStarsInput
  }

  export type StarsUncheckedCreateWithoutPostInput = {
    id?: string
    userId: string
    star: number
    createdAt: Date | string
  }

  export type StarsCreateOrConnectWithoutPostInput = {
    where: StarsWhereUniqueInput
    create: XOR<StarsCreateWithoutPostInput, StarsUncheckedCreateWithoutPostInput>
  }

  export type StarsCreateManyPostInputEnvelope = {
    data: StarsCreateManyPostInput | StarsCreateManyPostInput[]
    skipDuplicates?: boolean
  }

  export type PostToCategoriesCreateWithoutPostInput = {
    id?: string
    createdAt: Date | string
    category: CategoriesCreateNestedOneWithoutPostToCategoriesInput
  }

  export type PostToCategoriesUncheckedCreateWithoutPostInput = {
    id?: string
    categoryId: string
    createdAt: Date | string
  }

  export type PostToCategoriesCreateOrConnectWithoutPostInput = {
    where: PostToCategoriesWhereUniqueInput
    create: XOR<PostToCategoriesCreateWithoutPostInput, PostToCategoriesUncheckedCreateWithoutPostInput>
  }

  export type PostToCategoriesCreateManyPostInputEnvelope = {
    data: PostToCategoriesCreateManyPostInput | PostToCategoriesCreateManyPostInput[]
    skipDuplicates?: boolean
  }

  export type AuthorsUpsertWithoutPostsInput = {
    update: XOR<AuthorsUpdateWithoutPostsInput, AuthorsUncheckedUpdateWithoutPostsInput>
    create: XOR<AuthorsCreateWithoutPostsInput, AuthorsUncheckedCreateWithoutPostsInput>
    where?: AuthorsWhereInput
  }

  export type AuthorsUpdateToOneWithWhereWithoutPostsInput = {
    where?: AuthorsWhereInput
    data: XOR<AuthorsUpdateWithoutPostsInput, AuthorsUncheckedUpdateWithoutPostsInput>
  }

  export type AuthorsUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuthorsUncheckedUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikesUpsertWithWhereUniqueWithoutPostInput = {
    where: LikesWhereUniqueInput
    update: XOR<LikesUpdateWithoutPostInput, LikesUncheckedUpdateWithoutPostInput>
    create: XOR<LikesCreateWithoutPostInput, LikesUncheckedCreateWithoutPostInput>
  }

  export type LikesUpdateWithWhereUniqueWithoutPostInput = {
    where: LikesWhereUniqueInput
    data: XOR<LikesUpdateWithoutPostInput, LikesUncheckedUpdateWithoutPostInput>
  }

  export type LikesUpdateManyWithWhereWithoutPostInput = {
    where: LikesScalarWhereInput
    data: XOR<LikesUpdateManyMutationInput, LikesUncheckedUpdateManyWithoutPostInput>
  }

  export type CommentsUpsertWithWhereUniqueWithoutPostInput = {
    where: CommentsWhereUniqueInput
    update: XOR<CommentsUpdateWithoutPostInput, CommentsUncheckedUpdateWithoutPostInput>
    create: XOR<CommentsCreateWithoutPostInput, CommentsUncheckedCreateWithoutPostInput>
  }

  export type CommentsUpdateWithWhereUniqueWithoutPostInput = {
    where: CommentsWhereUniqueInput
    data: XOR<CommentsUpdateWithoutPostInput, CommentsUncheckedUpdateWithoutPostInput>
  }

  export type CommentsUpdateManyWithWhereWithoutPostInput = {
    where: CommentsScalarWhereInput
    data: XOR<CommentsUpdateManyMutationInput, CommentsUncheckedUpdateManyWithoutPostInput>
  }

  export type StarsUpsertWithWhereUniqueWithoutPostInput = {
    where: StarsWhereUniqueInput
    update: XOR<StarsUpdateWithoutPostInput, StarsUncheckedUpdateWithoutPostInput>
    create: XOR<StarsCreateWithoutPostInput, StarsUncheckedCreateWithoutPostInput>
  }

  export type StarsUpdateWithWhereUniqueWithoutPostInput = {
    where: StarsWhereUniqueInput
    data: XOR<StarsUpdateWithoutPostInput, StarsUncheckedUpdateWithoutPostInput>
  }

  export type StarsUpdateManyWithWhereWithoutPostInput = {
    where: StarsScalarWhereInput
    data: XOR<StarsUpdateManyMutationInput, StarsUncheckedUpdateManyWithoutPostInput>
  }

  export type PostToCategoriesUpsertWithWhereUniqueWithoutPostInput = {
    where: PostToCategoriesWhereUniqueInput
    update: XOR<PostToCategoriesUpdateWithoutPostInput, PostToCategoriesUncheckedUpdateWithoutPostInput>
    create: XOR<PostToCategoriesCreateWithoutPostInput, PostToCategoriesUncheckedCreateWithoutPostInput>
  }

  export type PostToCategoriesUpdateWithWhereUniqueWithoutPostInput = {
    where: PostToCategoriesWhereUniqueInput
    data: XOR<PostToCategoriesUpdateWithoutPostInput, PostToCategoriesUncheckedUpdateWithoutPostInput>
  }

  export type PostToCategoriesUpdateManyWithWhereWithoutPostInput = {
    where: PostToCategoriesScalarWhereInput
    data: XOR<PostToCategoriesUpdateManyMutationInput, PostToCategoriesUncheckedUpdateManyWithoutPostInput>
  }

  export type PostToCategoriesScalarWhereInput = {
    AND?: PostToCategoriesScalarWhereInput | PostToCategoriesScalarWhereInput[]
    OR?: PostToCategoriesScalarWhereInput[]
    NOT?: PostToCategoriesScalarWhereInput | PostToCategoriesScalarWhereInput[]
    id?: StringFilter<"PostToCategories"> | string
    postId?: StringFilter<"PostToCategories"> | string
    categoryId?: StringFilter<"PostToCategories"> | string
    createdAt?: DateTimeFilter<"PostToCategories"> | Date | string
  }

  export type UsersCreateWithoutCommentsInput = {
    id?: string
    fullName: string
    registeredAt: Date | string
    likes?: LikesCreateNestedManyWithoutUserInput
    stars?: StarsCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutCommentsInput = {
    id?: string
    fullName: string
    registeredAt: Date | string
    likes?: LikesUncheckedCreateNestedManyWithoutUserInput
    stars?: StarsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutCommentsInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutCommentsInput, UsersUncheckedCreateWithoutCommentsInput>
  }

  export type PostsCreateWithoutCommentsInput = {
    id?: string
    title: string
    postMarkdown: string
    createdAt: Date | string
    author: AuthorsCreateNestedOneWithoutPostsInput
    likes?: LikesCreateNestedManyWithoutPostInput
    starts?: StarsCreateNestedManyWithoutPostInput
    categories?: PostToCategoriesCreateNestedManyWithoutPostInput
  }

  export type PostsUncheckedCreateWithoutCommentsInput = {
    id?: string
    title: string
    postMarkdown: string
    authorId: string
    createdAt: Date | string
    likes?: LikesUncheckedCreateNestedManyWithoutPostInput
    starts?: StarsUncheckedCreateNestedManyWithoutPostInput
    categories?: PostToCategoriesUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostsCreateOrConnectWithoutCommentsInput = {
    where: PostsWhereUniqueInput
    create: XOR<PostsCreateWithoutCommentsInput, PostsUncheckedCreateWithoutCommentsInput>
  }

  export type LikesCreateWithoutCommentInput = {
    id?: string
    createdAt: Date | string
    post?: PostsCreateNestedOneWithoutLikesInput
    user: UsersCreateNestedOneWithoutLikesInput
  }

  export type LikesUncheckedCreateWithoutCommentInput = {
    id?: string
    postId?: string | null
    userId: string
    createdAt: Date | string
  }

  export type LikesCreateOrConnectWithoutCommentInput = {
    where: LikesWhereUniqueInput
    create: XOR<LikesCreateWithoutCommentInput, LikesUncheckedCreateWithoutCommentInput>
  }

  export type LikesCreateManyCommentInputEnvelope = {
    data: LikesCreateManyCommentInput | LikesCreateManyCommentInput[]
    skipDuplicates?: boolean
  }

  export type UsersUpsertWithoutCommentsInput = {
    update: XOR<UsersUpdateWithoutCommentsInput, UsersUncheckedUpdateWithoutCommentsInput>
    create: XOR<UsersCreateWithoutCommentsInput, UsersUncheckedCreateWithoutCommentsInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutCommentsInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutCommentsInput, UsersUncheckedUpdateWithoutCommentsInput>
  }

  export type UsersUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    likes?: LikesUpdateManyWithoutUserNestedInput
    stars?: StarsUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    likes?: LikesUncheckedUpdateManyWithoutUserNestedInput
    stars?: StarsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PostsUpsertWithoutCommentsInput = {
    update: XOR<PostsUpdateWithoutCommentsInput, PostsUncheckedUpdateWithoutCommentsInput>
    create: XOR<PostsCreateWithoutCommentsInput, PostsUncheckedCreateWithoutCommentsInput>
    where?: PostsWhereInput
  }

  export type PostsUpdateToOneWithWhereWithoutCommentsInput = {
    where?: PostsWhereInput
    data: XOR<PostsUpdateWithoutCommentsInput, PostsUncheckedUpdateWithoutCommentsInput>
  }

  export type PostsUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    postMarkdown?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: AuthorsUpdateOneRequiredWithoutPostsNestedInput
    likes?: LikesUpdateManyWithoutPostNestedInput
    starts?: StarsUpdateManyWithoutPostNestedInput
    categories?: PostToCategoriesUpdateManyWithoutPostNestedInput
  }

  export type PostsUncheckedUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    postMarkdown?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    likes?: LikesUncheckedUpdateManyWithoutPostNestedInput
    starts?: StarsUncheckedUpdateManyWithoutPostNestedInput
    categories?: PostToCategoriesUncheckedUpdateManyWithoutPostNestedInput
  }

  export type LikesUpsertWithWhereUniqueWithoutCommentInput = {
    where: LikesWhereUniqueInput
    update: XOR<LikesUpdateWithoutCommentInput, LikesUncheckedUpdateWithoutCommentInput>
    create: XOR<LikesCreateWithoutCommentInput, LikesUncheckedCreateWithoutCommentInput>
  }

  export type LikesUpdateWithWhereUniqueWithoutCommentInput = {
    where: LikesWhereUniqueInput
    data: XOR<LikesUpdateWithoutCommentInput, LikesUncheckedUpdateWithoutCommentInput>
  }

  export type LikesUpdateManyWithWhereWithoutCommentInput = {
    where: LikesScalarWhereInput
    data: XOR<LikesUpdateManyMutationInput, LikesUncheckedUpdateManyWithoutCommentInput>
  }

  export type PostsCreateWithoutLikesInput = {
    id?: string
    title: string
    postMarkdown: string
    createdAt: Date | string
    author: AuthorsCreateNestedOneWithoutPostsInput
    comments?: CommentsCreateNestedManyWithoutPostInput
    starts?: StarsCreateNestedManyWithoutPostInput
    categories?: PostToCategoriesCreateNestedManyWithoutPostInput
  }

  export type PostsUncheckedCreateWithoutLikesInput = {
    id?: string
    title: string
    postMarkdown: string
    authorId: string
    createdAt: Date | string
    comments?: CommentsUncheckedCreateNestedManyWithoutPostInput
    starts?: StarsUncheckedCreateNestedManyWithoutPostInput
    categories?: PostToCategoriesUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostsCreateOrConnectWithoutLikesInput = {
    where: PostsWhereUniqueInput
    create: XOR<PostsCreateWithoutLikesInput, PostsUncheckedCreateWithoutLikesInput>
  }

  export type UsersCreateWithoutLikesInput = {
    id?: string
    fullName: string
    registeredAt: Date | string
    comments?: CommentsCreateNestedManyWithoutUserInput
    stars?: StarsCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutLikesInput = {
    id?: string
    fullName: string
    registeredAt: Date | string
    comments?: CommentsUncheckedCreateNestedManyWithoutUserInput
    stars?: StarsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutLikesInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutLikesInput, UsersUncheckedCreateWithoutLikesInput>
  }

  export type CommentsCreateWithoutLikesInput = {
    id?: string
    commentsText: string
    createdAt: Date | string
    user: UsersCreateNestedOneWithoutCommentsInput
    post: PostsCreateNestedOneWithoutCommentsInput
  }

  export type CommentsUncheckedCreateWithoutLikesInput = {
    id?: string
    userId: string
    postId: string
    commentsText: string
    createdAt: Date | string
  }

  export type CommentsCreateOrConnectWithoutLikesInput = {
    where: CommentsWhereUniqueInput
    create: XOR<CommentsCreateWithoutLikesInput, CommentsUncheckedCreateWithoutLikesInput>
  }

  export type PostsUpsertWithoutLikesInput = {
    update: XOR<PostsUpdateWithoutLikesInput, PostsUncheckedUpdateWithoutLikesInput>
    create: XOR<PostsCreateWithoutLikesInput, PostsUncheckedCreateWithoutLikesInput>
    where?: PostsWhereInput
  }

  export type PostsUpdateToOneWithWhereWithoutLikesInput = {
    where?: PostsWhereInput
    data: XOR<PostsUpdateWithoutLikesInput, PostsUncheckedUpdateWithoutLikesInput>
  }

  export type PostsUpdateWithoutLikesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    postMarkdown?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: AuthorsUpdateOneRequiredWithoutPostsNestedInput
    comments?: CommentsUpdateManyWithoutPostNestedInput
    starts?: StarsUpdateManyWithoutPostNestedInput
    categories?: PostToCategoriesUpdateManyWithoutPostNestedInput
  }

  export type PostsUncheckedUpdateWithoutLikesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    postMarkdown?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: CommentsUncheckedUpdateManyWithoutPostNestedInput
    starts?: StarsUncheckedUpdateManyWithoutPostNestedInput
    categories?: PostToCategoriesUncheckedUpdateManyWithoutPostNestedInput
  }

  export type UsersUpsertWithoutLikesInput = {
    update: XOR<UsersUpdateWithoutLikesInput, UsersUncheckedUpdateWithoutLikesInput>
    create: XOR<UsersCreateWithoutLikesInput, UsersUncheckedCreateWithoutLikesInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutLikesInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutLikesInput, UsersUncheckedUpdateWithoutLikesInput>
  }

  export type UsersUpdateWithoutLikesInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: CommentsUpdateManyWithoutUserNestedInput
    stars?: StarsUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutLikesInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: CommentsUncheckedUpdateManyWithoutUserNestedInput
    stars?: StarsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CommentsUpsertWithoutLikesInput = {
    update: XOR<CommentsUpdateWithoutLikesInput, CommentsUncheckedUpdateWithoutLikesInput>
    create: XOR<CommentsCreateWithoutLikesInput, CommentsUncheckedCreateWithoutLikesInput>
    where?: CommentsWhereInput
  }

  export type CommentsUpdateToOneWithWhereWithoutLikesInput = {
    where?: CommentsWhereInput
    data: XOR<CommentsUpdateWithoutLikesInput, CommentsUncheckedUpdateWithoutLikesInput>
  }

  export type CommentsUpdateWithoutLikesInput = {
    id?: StringFieldUpdateOperationsInput | string
    commentsText?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutCommentsNestedInput
    post?: PostsUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type CommentsUncheckedUpdateWithoutLikesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    commentsText?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostToCategoriesCreateWithoutCategoryInput = {
    id?: string
    createdAt: Date | string
    post: PostsCreateNestedOneWithoutCategoriesInput
  }

  export type PostToCategoriesUncheckedCreateWithoutCategoryInput = {
    id?: string
    postId: string
    createdAt: Date | string
  }

  export type PostToCategoriesCreateOrConnectWithoutCategoryInput = {
    where: PostToCategoriesWhereUniqueInput
    create: XOR<PostToCategoriesCreateWithoutCategoryInput, PostToCategoriesUncheckedCreateWithoutCategoryInput>
  }

  export type PostToCategoriesCreateManyCategoryInputEnvelope = {
    data: PostToCategoriesCreateManyCategoryInput | PostToCategoriesCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type PostToCategoriesUpsertWithWhereUniqueWithoutCategoryInput = {
    where: PostToCategoriesWhereUniqueInput
    update: XOR<PostToCategoriesUpdateWithoutCategoryInput, PostToCategoriesUncheckedUpdateWithoutCategoryInput>
    create: XOR<PostToCategoriesCreateWithoutCategoryInput, PostToCategoriesUncheckedCreateWithoutCategoryInput>
  }

  export type PostToCategoriesUpdateWithWhereUniqueWithoutCategoryInput = {
    where: PostToCategoriesWhereUniqueInput
    data: XOR<PostToCategoriesUpdateWithoutCategoryInput, PostToCategoriesUncheckedUpdateWithoutCategoryInput>
  }

  export type PostToCategoriesUpdateManyWithWhereWithoutCategoryInput = {
    where: PostToCategoriesScalarWhereInput
    data: XOR<PostToCategoriesUpdateManyMutationInput, PostToCategoriesUncheckedUpdateManyWithoutCategoryInput>
  }

  export type PostsCreateWithoutCategoriesInput = {
    id?: string
    title: string
    postMarkdown: string
    createdAt: Date | string
    author: AuthorsCreateNestedOneWithoutPostsInput
    likes?: LikesCreateNestedManyWithoutPostInput
    comments?: CommentsCreateNestedManyWithoutPostInput
    starts?: StarsCreateNestedManyWithoutPostInput
  }

  export type PostsUncheckedCreateWithoutCategoriesInput = {
    id?: string
    title: string
    postMarkdown: string
    authorId: string
    createdAt: Date | string
    likes?: LikesUncheckedCreateNestedManyWithoutPostInput
    comments?: CommentsUncheckedCreateNestedManyWithoutPostInput
    starts?: StarsUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostsCreateOrConnectWithoutCategoriesInput = {
    where: PostsWhereUniqueInput
    create: XOR<PostsCreateWithoutCategoriesInput, PostsUncheckedCreateWithoutCategoriesInput>
  }

  export type CategoriesCreateWithoutPostToCategoriesInput = {
    id?: string
    categoryName: string
    createdAt: Date | string
  }

  export type CategoriesUncheckedCreateWithoutPostToCategoriesInput = {
    id?: string
    categoryName: string
    createdAt: Date | string
  }

  export type CategoriesCreateOrConnectWithoutPostToCategoriesInput = {
    where: CategoriesWhereUniqueInput
    create: XOR<CategoriesCreateWithoutPostToCategoriesInput, CategoriesUncheckedCreateWithoutPostToCategoriesInput>
  }

  export type PostsUpsertWithoutCategoriesInput = {
    update: XOR<PostsUpdateWithoutCategoriesInput, PostsUncheckedUpdateWithoutCategoriesInput>
    create: XOR<PostsCreateWithoutCategoriesInput, PostsUncheckedCreateWithoutCategoriesInput>
    where?: PostsWhereInput
  }

  export type PostsUpdateToOneWithWhereWithoutCategoriesInput = {
    where?: PostsWhereInput
    data: XOR<PostsUpdateWithoutCategoriesInput, PostsUncheckedUpdateWithoutCategoriesInput>
  }

  export type PostsUpdateWithoutCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    postMarkdown?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: AuthorsUpdateOneRequiredWithoutPostsNestedInput
    likes?: LikesUpdateManyWithoutPostNestedInput
    comments?: CommentsUpdateManyWithoutPostNestedInput
    starts?: StarsUpdateManyWithoutPostNestedInput
  }

  export type PostsUncheckedUpdateWithoutCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    postMarkdown?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    likes?: LikesUncheckedUpdateManyWithoutPostNestedInput
    comments?: CommentsUncheckedUpdateManyWithoutPostNestedInput
    starts?: StarsUncheckedUpdateManyWithoutPostNestedInput
  }

  export type CategoriesUpsertWithoutPostToCategoriesInput = {
    update: XOR<CategoriesUpdateWithoutPostToCategoriesInput, CategoriesUncheckedUpdateWithoutPostToCategoriesInput>
    create: XOR<CategoriesCreateWithoutPostToCategoriesInput, CategoriesUncheckedCreateWithoutPostToCategoriesInput>
    where?: CategoriesWhereInput
  }

  export type CategoriesUpdateToOneWithWhereWithoutPostToCategoriesInput = {
    where?: CategoriesWhereInput
    data: XOR<CategoriesUpdateWithoutPostToCategoriesInput, CategoriesUncheckedUpdateWithoutPostToCategoriesInput>
  }

  export type CategoriesUpdateWithoutPostToCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    categoryName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoriesUncheckedUpdateWithoutPostToCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    categoryName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostsCreateWithoutStartsInput = {
    id?: string
    title: string
    postMarkdown: string
    createdAt: Date | string
    author: AuthorsCreateNestedOneWithoutPostsInput
    likes?: LikesCreateNestedManyWithoutPostInput
    comments?: CommentsCreateNestedManyWithoutPostInput
    categories?: PostToCategoriesCreateNestedManyWithoutPostInput
  }

  export type PostsUncheckedCreateWithoutStartsInput = {
    id?: string
    title: string
    postMarkdown: string
    authorId: string
    createdAt: Date | string
    likes?: LikesUncheckedCreateNestedManyWithoutPostInput
    comments?: CommentsUncheckedCreateNestedManyWithoutPostInput
    categories?: PostToCategoriesUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostsCreateOrConnectWithoutStartsInput = {
    where: PostsWhereUniqueInput
    create: XOR<PostsCreateWithoutStartsInput, PostsUncheckedCreateWithoutStartsInput>
  }

  export type UsersCreateWithoutStarsInput = {
    id?: string
    fullName: string
    registeredAt: Date | string
    comments?: CommentsCreateNestedManyWithoutUserInput
    likes?: LikesCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutStarsInput = {
    id?: string
    fullName: string
    registeredAt: Date | string
    comments?: CommentsUncheckedCreateNestedManyWithoutUserInput
    likes?: LikesUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutStarsInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutStarsInput, UsersUncheckedCreateWithoutStarsInput>
  }

  export type PostsUpsertWithoutStartsInput = {
    update: XOR<PostsUpdateWithoutStartsInput, PostsUncheckedUpdateWithoutStartsInput>
    create: XOR<PostsCreateWithoutStartsInput, PostsUncheckedCreateWithoutStartsInput>
    where?: PostsWhereInput
  }

  export type PostsUpdateToOneWithWhereWithoutStartsInput = {
    where?: PostsWhereInput
    data: XOR<PostsUpdateWithoutStartsInput, PostsUncheckedUpdateWithoutStartsInput>
  }

  export type PostsUpdateWithoutStartsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    postMarkdown?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: AuthorsUpdateOneRequiredWithoutPostsNestedInput
    likes?: LikesUpdateManyWithoutPostNestedInput
    comments?: CommentsUpdateManyWithoutPostNestedInput
    categories?: PostToCategoriesUpdateManyWithoutPostNestedInput
  }

  export type PostsUncheckedUpdateWithoutStartsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    postMarkdown?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    likes?: LikesUncheckedUpdateManyWithoutPostNestedInput
    comments?: CommentsUncheckedUpdateManyWithoutPostNestedInput
    categories?: PostToCategoriesUncheckedUpdateManyWithoutPostNestedInput
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
    comments?: CommentsUpdateManyWithoutUserNestedInput
    likes?: LikesUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutStarsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: CommentsUncheckedUpdateManyWithoutUserNestedInput
    likes?: LikesUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CommentsCreateManyUserInput = {
    id?: string
    postId: string
    commentsText: string
    createdAt: Date | string
  }

  export type LikesCreateManyUserInput = {
    id?: string
    postId?: string | null
    commentId?: string | null
    createdAt: Date | string
  }

  export type StarsCreateManyUserInput = {
    id?: string
    postId: string
    star: number
    createdAt: Date | string
  }

  export type CommentsUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    commentsText?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: PostsUpdateOneRequiredWithoutCommentsNestedInput
    likes?: LikesUpdateManyWithoutCommentNestedInput
  }

  export type CommentsUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    commentsText?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    likes?: LikesUncheckedUpdateManyWithoutCommentNestedInput
  }

  export type CommentsUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    commentsText?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikesUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: PostsUpdateOneWithoutLikesNestedInput
    comment?: CommentsUpdateOneWithoutLikesNestedInput
  }

  export type LikesUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    postId?: NullableStringFieldUpdateOperationsInput | string | null
    commentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikesUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    postId?: NullableStringFieldUpdateOperationsInput | string | null
    commentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StarsUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    star?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: PostsUpdateOneRequiredWithoutStartsNestedInput
  }

  export type StarsUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    star?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StarsUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    star?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostsCreateManyAuthorInput = {
    id?: string
    title: string
    postMarkdown: string
    createdAt: Date | string
  }

  export type PostsUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    postMarkdown?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    likes?: LikesUpdateManyWithoutPostNestedInput
    comments?: CommentsUpdateManyWithoutPostNestedInput
    starts?: StarsUpdateManyWithoutPostNestedInput
    categories?: PostToCategoriesUpdateManyWithoutPostNestedInput
  }

  export type PostsUncheckedUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    postMarkdown?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    likes?: LikesUncheckedUpdateManyWithoutPostNestedInput
    comments?: CommentsUncheckedUpdateManyWithoutPostNestedInput
    starts?: StarsUncheckedUpdateManyWithoutPostNestedInput
    categories?: PostToCategoriesUncheckedUpdateManyWithoutPostNestedInput
  }

  export type PostsUncheckedUpdateManyWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    postMarkdown?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikesCreateManyPostInput = {
    id?: string
    userId: string
    commentId?: string | null
    createdAt: Date | string
  }

  export type CommentsCreateManyPostInput = {
    id?: string
    userId: string
    commentsText: string
    createdAt: Date | string
  }

  export type StarsCreateManyPostInput = {
    id?: string
    userId: string
    star: number
    createdAt: Date | string
  }

  export type PostToCategoriesCreateManyPostInput = {
    id?: string
    categoryId: string
    createdAt: Date | string
  }

  export type LikesUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutLikesNestedInput
    comment?: CommentsUpdateOneWithoutLikesNestedInput
  }

  export type LikesUncheckedUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    commentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikesUncheckedUpdateManyWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    commentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentsUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    commentsText?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutCommentsNestedInput
    likes?: LikesUpdateManyWithoutCommentNestedInput
  }

  export type CommentsUncheckedUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    commentsText?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    likes?: LikesUncheckedUpdateManyWithoutCommentNestedInput
  }

  export type CommentsUncheckedUpdateManyWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    commentsText?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StarsUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    star?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutStarsNestedInput
  }

  export type StarsUncheckedUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    star?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StarsUncheckedUpdateManyWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    star?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostToCategoriesUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoriesUpdateOneRequiredWithoutPostToCategoriesNestedInput
  }

  export type PostToCategoriesUncheckedUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostToCategoriesUncheckedUpdateManyWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikesCreateManyCommentInput = {
    id?: string
    postId?: string | null
    userId: string
    createdAt: Date | string
  }

  export type LikesUpdateWithoutCommentInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: PostsUpdateOneWithoutLikesNestedInput
    user?: UsersUpdateOneRequiredWithoutLikesNestedInput
  }

  export type LikesUncheckedUpdateWithoutCommentInput = {
    id?: StringFieldUpdateOperationsInput | string
    postId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikesUncheckedUpdateManyWithoutCommentInput = {
    id?: StringFieldUpdateOperationsInput | string
    postId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostToCategoriesCreateManyCategoryInput = {
    id?: string
    postId: string
    createdAt: Date | string
  }

  export type PostToCategoriesUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: PostsUpdateOneRequiredWithoutCategoriesNestedInput
  }

  export type PostToCategoriesUncheckedUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostToCategoriesUncheckedUpdateManyWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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