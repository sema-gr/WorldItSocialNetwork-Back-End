
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
 * Model Album
 * 
 */
export type Album = $Result.DefaultSelection<Prisma.$AlbumPayload>
/**
 * Model ChatGroup
 * 
 */
export type ChatGroup = $Result.DefaultSelection<Prisma.$ChatGroupPayload>
/**
 * Model ChatMessage
 * 
 */
export type ChatMessage = $Result.DefaultSelection<Prisma.$ChatMessagePayload>
/**
 * Model Friendship
 * 
 */
export type Friendship = $Result.DefaultSelection<Prisma.$FriendshipPayload>
/**
 * Model Image
 * 
 */
export type Image = $Result.DefaultSelection<Prisma.$ImagePayload>
/**
 * Model UserPost
 * 
 */
export type UserPost = $Result.DefaultSelection<Prisma.$UserPostPayload>
/**
 * Model Tags
 * 
 */
export type Tags = $Result.DefaultSelection<Prisma.$TagsPayload>
/**
 * Model Link
 * 
 */
export type Link = $Result.DefaultSelection<Prisma.$LinkPayload>
/**
 * Model Profile
 * 
 */
export type Profile = $Result.DefaultSelection<Prisma.$ProfilePayload>
/**
 * Model Avatar
 * 
 */
export type Avatar = $Result.DefaultSelection<Prisma.$AvatarPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Albums
 * const albums = await prisma.album.findMany()
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
   * // Fetch zero or more Albums
   * const albums = await prisma.album.findMany()
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
   * `prisma.album`: Exposes CRUD operations for the **Album** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Albums
    * const albums = await prisma.album.findMany()
    * ```
    */
  get album(): Prisma.AlbumDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chatGroup`: Exposes CRUD operations for the **ChatGroup** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ChatGroups
    * const chatGroups = await prisma.chatGroup.findMany()
    * ```
    */
  get chatGroup(): Prisma.ChatGroupDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chatMessage`: Exposes CRUD operations for the **ChatMessage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ChatMessages
    * const chatMessages = await prisma.chatMessage.findMany()
    * ```
    */
  get chatMessage(): Prisma.ChatMessageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.friendship`: Exposes CRUD operations for the **Friendship** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Friendships
    * const friendships = await prisma.friendship.findMany()
    * ```
    */
  get friendship(): Prisma.FriendshipDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.image`: Exposes CRUD operations for the **Image** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Images
    * const images = await prisma.image.findMany()
    * ```
    */
  get image(): Prisma.ImageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userPost`: Exposes CRUD operations for the **UserPost** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserPosts
    * const userPosts = await prisma.userPost.findMany()
    * ```
    */
  get userPost(): Prisma.UserPostDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tags`: Exposes CRUD operations for the **Tags** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tags
    * const tags = await prisma.tags.findMany()
    * ```
    */
  get tags(): Prisma.TagsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.link`: Exposes CRUD operations for the **Link** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Links
    * const links = await prisma.link.findMany()
    * ```
    */
  get link(): Prisma.LinkDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.profile`: Exposes CRUD operations for the **Profile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Profiles
    * const profiles = await prisma.profile.findMany()
    * ```
    */
  get profile(): Prisma.ProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.avatar`: Exposes CRUD operations for the **Avatar** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Avatars
    * const avatars = await prisma.avatar.findMany()
    * ```
    */
  get avatar(): Prisma.AvatarDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
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
    Album: 'Album',
    ChatGroup: 'ChatGroup',
    ChatMessage: 'ChatMessage',
    Friendship: 'Friendship',
    Image: 'Image',
    UserPost: 'UserPost',
    Tags: 'Tags',
    Link: 'Link',
    Profile: 'Profile',
    Avatar: 'Avatar'
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
      modelProps: "album" | "chatGroup" | "chatMessage" | "friendship" | "image" | "userPost" | "tags" | "link" | "profile" | "avatar"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Album: {
        payload: Prisma.$AlbumPayload<ExtArgs>
        fields: Prisma.AlbumFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AlbumFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AlbumFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumPayload>
          }
          findFirst: {
            args: Prisma.AlbumFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AlbumFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumPayload>
          }
          findMany: {
            args: Prisma.AlbumFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumPayload>[]
          }
          create: {
            args: Prisma.AlbumCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumPayload>
          }
          createMany: {
            args: Prisma.AlbumCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AlbumCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumPayload>[]
          }
          delete: {
            args: Prisma.AlbumDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumPayload>
          }
          update: {
            args: Prisma.AlbumUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumPayload>
          }
          deleteMany: {
            args: Prisma.AlbumDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AlbumUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AlbumUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumPayload>[]
          }
          upsert: {
            args: Prisma.AlbumUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumPayload>
          }
          aggregate: {
            args: Prisma.AlbumAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAlbum>
          }
          groupBy: {
            args: Prisma.AlbumGroupByArgs<ExtArgs>
            result: $Utils.Optional<AlbumGroupByOutputType>[]
          }
          count: {
            args: Prisma.AlbumCountArgs<ExtArgs>
            result: $Utils.Optional<AlbumCountAggregateOutputType> | number
          }
        }
      }
      ChatGroup: {
        payload: Prisma.$ChatGroupPayload<ExtArgs>
        fields: Prisma.ChatGroupFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChatGroupFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatGroupPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChatGroupFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatGroupPayload>
          }
          findFirst: {
            args: Prisma.ChatGroupFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatGroupPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChatGroupFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatGroupPayload>
          }
          findMany: {
            args: Prisma.ChatGroupFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatGroupPayload>[]
          }
          create: {
            args: Prisma.ChatGroupCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatGroupPayload>
          }
          createMany: {
            args: Prisma.ChatGroupCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChatGroupCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatGroupPayload>[]
          }
          delete: {
            args: Prisma.ChatGroupDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatGroupPayload>
          }
          update: {
            args: Prisma.ChatGroupUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatGroupPayload>
          }
          deleteMany: {
            args: Prisma.ChatGroupDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChatGroupUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChatGroupUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatGroupPayload>[]
          }
          upsert: {
            args: Prisma.ChatGroupUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatGroupPayload>
          }
          aggregate: {
            args: Prisma.ChatGroupAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChatGroup>
          }
          groupBy: {
            args: Prisma.ChatGroupGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChatGroupGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChatGroupCountArgs<ExtArgs>
            result: $Utils.Optional<ChatGroupCountAggregateOutputType> | number
          }
        }
      }
      ChatMessage: {
        payload: Prisma.$ChatMessagePayload<ExtArgs>
        fields: Prisma.ChatMessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChatMessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChatMessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          findFirst: {
            args: Prisma.ChatMessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChatMessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          findMany: {
            args: Prisma.ChatMessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>[]
          }
          create: {
            args: Prisma.ChatMessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          createMany: {
            args: Prisma.ChatMessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChatMessageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>[]
          }
          delete: {
            args: Prisma.ChatMessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          update: {
            args: Prisma.ChatMessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          deleteMany: {
            args: Prisma.ChatMessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChatMessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChatMessageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>[]
          }
          upsert: {
            args: Prisma.ChatMessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          aggregate: {
            args: Prisma.ChatMessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChatMessage>
          }
          groupBy: {
            args: Prisma.ChatMessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChatMessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChatMessageCountArgs<ExtArgs>
            result: $Utils.Optional<ChatMessageCountAggregateOutputType> | number
          }
        }
      }
      Friendship: {
        payload: Prisma.$FriendshipPayload<ExtArgs>
        fields: Prisma.FriendshipFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FriendshipFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendshipPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FriendshipFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendshipPayload>
          }
          findFirst: {
            args: Prisma.FriendshipFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendshipPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FriendshipFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendshipPayload>
          }
          findMany: {
            args: Prisma.FriendshipFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendshipPayload>[]
          }
          create: {
            args: Prisma.FriendshipCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendshipPayload>
          }
          createMany: {
            args: Prisma.FriendshipCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FriendshipCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendshipPayload>[]
          }
          delete: {
            args: Prisma.FriendshipDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendshipPayload>
          }
          update: {
            args: Prisma.FriendshipUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendshipPayload>
          }
          deleteMany: {
            args: Prisma.FriendshipDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FriendshipUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FriendshipUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendshipPayload>[]
          }
          upsert: {
            args: Prisma.FriendshipUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendshipPayload>
          }
          aggregate: {
            args: Prisma.FriendshipAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFriendship>
          }
          groupBy: {
            args: Prisma.FriendshipGroupByArgs<ExtArgs>
            result: $Utils.Optional<FriendshipGroupByOutputType>[]
          }
          count: {
            args: Prisma.FriendshipCountArgs<ExtArgs>
            result: $Utils.Optional<FriendshipCountAggregateOutputType> | number
          }
        }
      }
      Image: {
        payload: Prisma.$ImagePayload<ExtArgs>
        fields: Prisma.ImageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ImageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ImageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          findFirst: {
            args: Prisma.ImageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ImageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          findMany: {
            args: Prisma.ImageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>[]
          }
          create: {
            args: Prisma.ImageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          createMany: {
            args: Prisma.ImageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ImageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>[]
          }
          delete: {
            args: Prisma.ImageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          update: {
            args: Prisma.ImageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          deleteMany: {
            args: Prisma.ImageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ImageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ImageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>[]
          }
          upsert: {
            args: Prisma.ImageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          aggregate: {
            args: Prisma.ImageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateImage>
          }
          groupBy: {
            args: Prisma.ImageGroupByArgs<ExtArgs>
            result: $Utils.Optional<ImageGroupByOutputType>[]
          }
          count: {
            args: Prisma.ImageCountArgs<ExtArgs>
            result: $Utils.Optional<ImageCountAggregateOutputType> | number
          }
        }
      }
      UserPost: {
        payload: Prisma.$UserPostPayload<ExtArgs>
        fields: Prisma.UserPostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserPostFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserPostFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPostPayload>
          }
          findFirst: {
            args: Prisma.UserPostFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserPostFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPostPayload>
          }
          findMany: {
            args: Prisma.UserPostFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPostPayload>[]
          }
          create: {
            args: Prisma.UserPostCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPostPayload>
          }
          createMany: {
            args: Prisma.UserPostCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserPostCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPostPayload>[]
          }
          delete: {
            args: Prisma.UserPostDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPostPayload>
          }
          update: {
            args: Prisma.UserPostUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPostPayload>
          }
          deleteMany: {
            args: Prisma.UserPostDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserPostUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserPostUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPostPayload>[]
          }
          upsert: {
            args: Prisma.UserPostUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPostPayload>
          }
          aggregate: {
            args: Prisma.UserPostAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserPost>
          }
          groupBy: {
            args: Prisma.UserPostGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserPostGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserPostCountArgs<ExtArgs>
            result: $Utils.Optional<UserPostCountAggregateOutputType> | number
          }
        }
      }
      Tags: {
        payload: Prisma.$TagsPayload<ExtArgs>
        fields: Prisma.TagsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TagsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TagsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagsPayload>
          }
          findFirst: {
            args: Prisma.TagsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TagsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagsPayload>
          }
          findMany: {
            args: Prisma.TagsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagsPayload>[]
          }
          create: {
            args: Prisma.TagsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagsPayload>
          }
          createMany: {
            args: Prisma.TagsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TagsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagsPayload>[]
          }
          delete: {
            args: Prisma.TagsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagsPayload>
          }
          update: {
            args: Prisma.TagsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagsPayload>
          }
          deleteMany: {
            args: Prisma.TagsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TagsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TagsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagsPayload>[]
          }
          upsert: {
            args: Prisma.TagsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagsPayload>
          }
          aggregate: {
            args: Prisma.TagsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTags>
          }
          groupBy: {
            args: Prisma.TagsGroupByArgs<ExtArgs>
            result: $Utils.Optional<TagsGroupByOutputType>[]
          }
          count: {
            args: Prisma.TagsCountArgs<ExtArgs>
            result: $Utils.Optional<TagsCountAggregateOutputType> | number
          }
        }
      }
      Link: {
        payload: Prisma.$LinkPayload<ExtArgs>
        fields: Prisma.LinkFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LinkFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LinkFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkPayload>
          }
          findFirst: {
            args: Prisma.LinkFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LinkFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkPayload>
          }
          findMany: {
            args: Prisma.LinkFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkPayload>[]
          }
          create: {
            args: Prisma.LinkCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkPayload>
          }
          createMany: {
            args: Prisma.LinkCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LinkCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkPayload>[]
          }
          delete: {
            args: Prisma.LinkDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkPayload>
          }
          update: {
            args: Prisma.LinkUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkPayload>
          }
          deleteMany: {
            args: Prisma.LinkDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LinkUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LinkUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkPayload>[]
          }
          upsert: {
            args: Prisma.LinkUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkPayload>
          }
          aggregate: {
            args: Prisma.LinkAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLink>
          }
          groupBy: {
            args: Prisma.LinkGroupByArgs<ExtArgs>
            result: $Utils.Optional<LinkGroupByOutputType>[]
          }
          count: {
            args: Prisma.LinkCountArgs<ExtArgs>
            result: $Utils.Optional<LinkCountAggregateOutputType> | number
          }
        }
      }
      Profile: {
        payload: Prisma.$ProfilePayload<ExtArgs>
        fields: Prisma.ProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          findFirst: {
            args: Prisma.ProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          findMany: {
            args: Prisma.ProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>[]
          }
          create: {
            args: Prisma.ProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          createMany: {
            args: Prisma.ProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>[]
          }
          delete: {
            args: Prisma.ProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          update: {
            args: Prisma.ProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          deleteMany: {
            args: Prisma.ProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>[]
          }
          upsert: {
            args: Prisma.ProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          aggregate: {
            args: Prisma.ProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProfile>
          }
          groupBy: {
            args: Prisma.ProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProfileCountArgs<ExtArgs>
            result: $Utils.Optional<ProfileCountAggregateOutputType> | number
          }
        }
      }
      Avatar: {
        payload: Prisma.$AvatarPayload<ExtArgs>
        fields: Prisma.AvatarFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AvatarFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvatarPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AvatarFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvatarPayload>
          }
          findFirst: {
            args: Prisma.AvatarFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvatarPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AvatarFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvatarPayload>
          }
          findMany: {
            args: Prisma.AvatarFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvatarPayload>[]
          }
          create: {
            args: Prisma.AvatarCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvatarPayload>
          }
          createMany: {
            args: Prisma.AvatarCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AvatarCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvatarPayload>[]
          }
          delete: {
            args: Prisma.AvatarDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvatarPayload>
          }
          update: {
            args: Prisma.AvatarUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvatarPayload>
          }
          deleteMany: {
            args: Prisma.AvatarDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AvatarUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AvatarUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvatarPayload>[]
          }
          upsert: {
            args: Prisma.AvatarUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvatarPayload>
          }
          aggregate: {
            args: Prisma.AvatarAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAvatar>
          }
          groupBy: {
            args: Prisma.AvatarGroupByArgs<ExtArgs>
            result: $Utils.Optional<AvatarGroupByOutputType>[]
          }
          count: {
            args: Prisma.AvatarCountArgs<ExtArgs>
            result: $Utils.Optional<AvatarCountAggregateOutputType> | number
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
    album?: AlbumOmit
    chatGroup?: ChatGroupOmit
    chatMessage?: ChatMessageOmit
    friendship?: FriendshipOmit
    image?: ImageOmit
    userPost?: UserPostOmit
    tags?: TagsOmit
    link?: LinkOmit
    profile?: ProfileOmit
    avatar?: AvatarOmit
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
   * Count Type AlbumCountOutputType
   */

  export type AlbumCountOutputType = {
    images: number
  }

  export type AlbumCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    images?: boolean | AlbumCountOutputTypeCountImagesArgs
  }

  // Custom InputTypes
  /**
   * AlbumCountOutputType without action
   */
  export type AlbumCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlbumCountOutputType
     */
    select?: AlbumCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AlbumCountOutputType without action
   */
  export type AlbumCountOutputTypeCountImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImageWhereInput
  }


  /**
   * Count Type ChatGroupCountOutputType
   */

  export type ChatGroupCountOutputType = {
    members: number
    chatMessages: number
  }

  export type ChatGroupCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    members?: boolean | ChatGroupCountOutputTypeCountMembersArgs
    chatMessages?: boolean | ChatGroupCountOutputTypeCountChatMessagesArgs
  }

  // Custom InputTypes
  /**
   * ChatGroupCountOutputType without action
   */
  export type ChatGroupCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatGroupCountOutputType
     */
    select?: ChatGroupCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ChatGroupCountOutputType without action
   */
  export type ChatGroupCountOutputTypeCountMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfileWhereInput
  }

  /**
   * ChatGroupCountOutputType without action
   */
  export type ChatGroupCountOutputTypeCountChatMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatMessageWhereInput
  }


  /**
   * Count Type ImageCountOutputType
   */

  export type ImageCountOutputType = {
    UserPost: number
    Album: number
  }

  export type ImageCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    UserPost?: boolean | ImageCountOutputTypeCountUserPostArgs
    Album?: boolean | ImageCountOutputTypeCountAlbumArgs
  }

  // Custom InputTypes
  /**
   * ImageCountOutputType without action
   */
  export type ImageCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImageCountOutputType
     */
    select?: ImageCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ImageCountOutputType without action
   */
  export type ImageCountOutputTypeCountUserPostArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserPostWhereInput
  }

  /**
   * ImageCountOutputType without action
   */
  export type ImageCountOutputTypeCountAlbumArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlbumWhereInput
  }


  /**
   * Count Type UserPostCountOutputType
   */

  export type UserPostCountOutputType = {
    tags: number
    images: number
    views: number
    likes: number
  }

  export type UserPostCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tags?: boolean | UserPostCountOutputTypeCountTagsArgs
    images?: boolean | UserPostCountOutputTypeCountImagesArgs
    views?: boolean | UserPostCountOutputTypeCountViewsArgs
    likes?: boolean | UserPostCountOutputTypeCountLikesArgs
  }

  // Custom InputTypes
  /**
   * UserPostCountOutputType without action
   */
  export type UserPostCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPostCountOutputType
     */
    select?: UserPostCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserPostCountOutputType without action
   */
  export type UserPostCountOutputTypeCountTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TagsWhereInput
  }

  /**
   * UserPostCountOutputType without action
   */
  export type UserPostCountOutputTypeCountImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImageWhereInput
  }

  /**
   * UserPostCountOutputType without action
   */
  export type UserPostCountOutputTypeCountViewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfileWhereInput
  }

  /**
   * UserPostCountOutputType without action
   */
  export type UserPostCountOutputTypeCountLikesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfileWhereInput
  }


  /**
   * Count Type TagsCountOutputType
   */

  export type TagsCountOutputType = {
    UserPost: number
  }

  export type TagsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    UserPost?: boolean | TagsCountOutputTypeCountUserPostArgs
  }

  // Custom InputTypes
  /**
   * TagsCountOutputType without action
   */
  export type TagsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TagsCountOutputType
     */
    select?: TagsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TagsCountOutputType without action
   */
  export type TagsCountOutputTypeCountUserPostArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserPostWhereInput
  }


  /**
   * Count Type LinkCountOutputType
   */

  export type LinkCountOutputType = {
    userPost: number
  }

  export type LinkCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userPost?: boolean | LinkCountOutputTypeCountUserPostArgs
  }

  // Custom InputTypes
  /**
   * LinkCountOutputType without action
   */
  export type LinkCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkCountOutputType
     */
    select?: LinkCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LinkCountOutputType without action
   */
  export type LinkCountOutputTypeCountUserPostArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserPostWhereInput
  }


  /**
   * Count Type ProfileCountOutputType
   */

  export type ProfileCountOutputType = {
    post: number
    album: number
    chats: number
    administeredGroups: number
    chatMessages: number
    userPostViews: number
    userPostLikes: number
    friendshipFrom: number
    friendshipTo: number
  }

  export type ProfileCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | ProfileCountOutputTypeCountPostArgs
    album?: boolean | ProfileCountOutputTypeCountAlbumArgs
    chats?: boolean | ProfileCountOutputTypeCountChatsArgs
    administeredGroups?: boolean | ProfileCountOutputTypeCountAdministeredGroupsArgs
    chatMessages?: boolean | ProfileCountOutputTypeCountChatMessagesArgs
    userPostViews?: boolean | ProfileCountOutputTypeCountUserPostViewsArgs
    userPostLikes?: boolean | ProfileCountOutputTypeCountUserPostLikesArgs
    friendshipFrom?: boolean | ProfileCountOutputTypeCountFriendshipFromArgs
    friendshipTo?: boolean | ProfileCountOutputTypeCountFriendshipToArgs
  }

  // Custom InputTypes
  /**
   * ProfileCountOutputType without action
   */
  export type ProfileCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileCountOutputType
     */
    select?: ProfileCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProfileCountOutputType without action
   */
  export type ProfileCountOutputTypeCountPostArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserPostWhereInput
  }

  /**
   * ProfileCountOutputType without action
   */
  export type ProfileCountOutputTypeCountAlbumArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlbumWhereInput
  }

  /**
   * ProfileCountOutputType without action
   */
  export type ProfileCountOutputTypeCountChatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatGroupWhereInput
  }

  /**
   * ProfileCountOutputType without action
   */
  export type ProfileCountOutputTypeCountAdministeredGroupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatGroupWhereInput
  }

  /**
   * ProfileCountOutputType without action
   */
  export type ProfileCountOutputTypeCountChatMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatMessageWhereInput
  }

  /**
   * ProfileCountOutputType without action
   */
  export type ProfileCountOutputTypeCountUserPostViewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserPostWhereInput
  }

  /**
   * ProfileCountOutputType without action
   */
  export type ProfileCountOutputTypeCountUserPostLikesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserPostWhereInput
  }

  /**
   * ProfileCountOutputType without action
   */
  export type ProfileCountOutputTypeCountFriendshipFromArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FriendshipWhereInput
  }

  /**
   * ProfileCountOutputType without action
   */
  export type ProfileCountOutputTypeCountFriendshipToArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FriendshipWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Album
   */

  export type AggregateAlbum = {
    _count: AlbumCountAggregateOutputType | null
    _avg: AlbumAvgAggregateOutputType | null
    _sum: AlbumSumAggregateOutputType | null
    _min: AlbumMinAggregateOutputType | null
    _max: AlbumMaxAggregateOutputType | null
  }

  export type AlbumAvgAggregateOutputType = {
    id: number | null
    authorId: number | null
  }

  export type AlbumSumAggregateOutputType = {
    id: number | null
    authorId: number | null
  }

  export type AlbumMinAggregateOutputType = {
    id: number | null
    name: string | null
    created_at: Date | null
    shown: boolean | null
    topic: string | null
    authorId: number | null
  }

  export type AlbumMaxAggregateOutputType = {
    id: number | null
    name: string | null
    created_at: Date | null
    shown: boolean | null
    topic: string | null
    authorId: number | null
  }

  export type AlbumCountAggregateOutputType = {
    id: number
    name: number
    created_at: number
    shown: number
    topic: number
    authorId: number
    _all: number
  }


  export type AlbumAvgAggregateInputType = {
    id?: true
    authorId?: true
  }

  export type AlbumSumAggregateInputType = {
    id?: true
    authorId?: true
  }

  export type AlbumMinAggregateInputType = {
    id?: true
    name?: true
    created_at?: true
    shown?: true
    topic?: true
    authorId?: true
  }

  export type AlbumMaxAggregateInputType = {
    id?: true
    name?: true
    created_at?: true
    shown?: true
    topic?: true
    authorId?: true
  }

  export type AlbumCountAggregateInputType = {
    id?: true
    name?: true
    created_at?: true
    shown?: true
    topic?: true
    authorId?: true
    _all?: true
  }

  export type AlbumAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Album to aggregate.
     */
    where?: AlbumWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Albums to fetch.
     */
    orderBy?: AlbumOrderByWithRelationInput | AlbumOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AlbumWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Albums from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Albums.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Albums
    **/
    _count?: true | AlbumCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AlbumAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AlbumSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AlbumMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AlbumMaxAggregateInputType
  }

  export type GetAlbumAggregateType<T extends AlbumAggregateArgs> = {
        [P in keyof T & keyof AggregateAlbum]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAlbum[P]>
      : GetScalarType<T[P], AggregateAlbum[P]>
  }




  export type AlbumGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlbumWhereInput
    orderBy?: AlbumOrderByWithAggregationInput | AlbumOrderByWithAggregationInput[]
    by: AlbumScalarFieldEnum[] | AlbumScalarFieldEnum
    having?: AlbumScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AlbumCountAggregateInputType | true
    _avg?: AlbumAvgAggregateInputType
    _sum?: AlbumSumAggregateInputType
    _min?: AlbumMinAggregateInputType
    _max?: AlbumMaxAggregateInputType
  }

  export type AlbumGroupByOutputType = {
    id: number
    name: string
    created_at: Date
    shown: boolean
    topic: string | null
    authorId: number
    _count: AlbumCountAggregateOutputType | null
    _avg: AlbumAvgAggregateOutputType | null
    _sum: AlbumSumAggregateOutputType | null
    _min: AlbumMinAggregateOutputType | null
    _max: AlbumMaxAggregateOutputType | null
  }

  type GetAlbumGroupByPayload<T extends AlbumGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AlbumGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AlbumGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AlbumGroupByOutputType[P]>
            : GetScalarType<T[P], AlbumGroupByOutputType[P]>
        }
      >
    >


  export type AlbumSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    created_at?: boolean
    shown?: boolean
    topic?: boolean
    authorId?: boolean
    images?: boolean | Album$imagesArgs<ExtArgs>
    author?: boolean | ProfileDefaultArgs<ExtArgs>
    _count?: boolean | AlbumCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["album"]>

  export type AlbumSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    created_at?: boolean
    shown?: boolean
    topic?: boolean
    authorId?: boolean
    author?: boolean | ProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["album"]>

  export type AlbumSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    created_at?: boolean
    shown?: boolean
    topic?: boolean
    authorId?: boolean
    author?: boolean | ProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["album"]>

  export type AlbumSelectScalar = {
    id?: boolean
    name?: boolean
    created_at?: boolean
    shown?: boolean
    topic?: boolean
    authorId?: boolean
  }

  export type AlbumOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "created_at" | "shown" | "topic" | "authorId", ExtArgs["result"]["album"]>
  export type AlbumInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    images?: boolean | Album$imagesArgs<ExtArgs>
    author?: boolean | ProfileDefaultArgs<ExtArgs>
    _count?: boolean | AlbumCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AlbumIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | ProfileDefaultArgs<ExtArgs>
  }
  export type AlbumIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | ProfileDefaultArgs<ExtArgs>
  }

  export type $AlbumPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Album"
    objects: {
      images: Prisma.$ImagePayload<ExtArgs>[]
      author: Prisma.$ProfilePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      created_at: Date
      shown: boolean
      topic: string | null
      authorId: number
    }, ExtArgs["result"]["album"]>
    composites: {}
  }

  type AlbumGetPayload<S extends boolean | null | undefined | AlbumDefaultArgs> = $Result.GetResult<Prisma.$AlbumPayload, S>

  type AlbumCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AlbumFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AlbumCountAggregateInputType | true
    }

  export interface AlbumDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Album'], meta: { name: 'Album' } }
    /**
     * Find zero or one Album that matches the filter.
     * @param {AlbumFindUniqueArgs} args - Arguments to find a Album
     * @example
     * // Get one Album
     * const album = await prisma.album.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AlbumFindUniqueArgs>(args: SelectSubset<T, AlbumFindUniqueArgs<ExtArgs>>): Prisma__AlbumClient<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Album that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AlbumFindUniqueOrThrowArgs} args - Arguments to find a Album
     * @example
     * // Get one Album
     * const album = await prisma.album.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AlbumFindUniqueOrThrowArgs>(args: SelectSubset<T, AlbumFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AlbumClient<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Album that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumFindFirstArgs} args - Arguments to find a Album
     * @example
     * // Get one Album
     * const album = await prisma.album.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AlbumFindFirstArgs>(args?: SelectSubset<T, AlbumFindFirstArgs<ExtArgs>>): Prisma__AlbumClient<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Album that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumFindFirstOrThrowArgs} args - Arguments to find a Album
     * @example
     * // Get one Album
     * const album = await prisma.album.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AlbumFindFirstOrThrowArgs>(args?: SelectSubset<T, AlbumFindFirstOrThrowArgs<ExtArgs>>): Prisma__AlbumClient<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Albums that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Albums
     * const albums = await prisma.album.findMany()
     * 
     * // Get first 10 Albums
     * const albums = await prisma.album.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const albumWithIdOnly = await prisma.album.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AlbumFindManyArgs>(args?: SelectSubset<T, AlbumFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Album.
     * @param {AlbumCreateArgs} args - Arguments to create a Album.
     * @example
     * // Create one Album
     * const Album = await prisma.album.create({
     *   data: {
     *     // ... data to create a Album
     *   }
     * })
     * 
     */
    create<T extends AlbumCreateArgs>(args: SelectSubset<T, AlbumCreateArgs<ExtArgs>>): Prisma__AlbumClient<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Albums.
     * @param {AlbumCreateManyArgs} args - Arguments to create many Albums.
     * @example
     * // Create many Albums
     * const album = await prisma.album.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AlbumCreateManyArgs>(args?: SelectSubset<T, AlbumCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Albums and returns the data saved in the database.
     * @param {AlbumCreateManyAndReturnArgs} args - Arguments to create many Albums.
     * @example
     * // Create many Albums
     * const album = await prisma.album.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Albums and only return the `id`
     * const albumWithIdOnly = await prisma.album.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AlbumCreateManyAndReturnArgs>(args?: SelectSubset<T, AlbumCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Album.
     * @param {AlbumDeleteArgs} args - Arguments to delete one Album.
     * @example
     * // Delete one Album
     * const Album = await prisma.album.delete({
     *   where: {
     *     // ... filter to delete one Album
     *   }
     * })
     * 
     */
    delete<T extends AlbumDeleteArgs>(args: SelectSubset<T, AlbumDeleteArgs<ExtArgs>>): Prisma__AlbumClient<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Album.
     * @param {AlbumUpdateArgs} args - Arguments to update one Album.
     * @example
     * // Update one Album
     * const album = await prisma.album.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AlbumUpdateArgs>(args: SelectSubset<T, AlbumUpdateArgs<ExtArgs>>): Prisma__AlbumClient<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Albums.
     * @param {AlbumDeleteManyArgs} args - Arguments to filter Albums to delete.
     * @example
     * // Delete a few Albums
     * const { count } = await prisma.album.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AlbumDeleteManyArgs>(args?: SelectSubset<T, AlbumDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Albums.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Albums
     * const album = await prisma.album.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AlbumUpdateManyArgs>(args: SelectSubset<T, AlbumUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Albums and returns the data updated in the database.
     * @param {AlbumUpdateManyAndReturnArgs} args - Arguments to update many Albums.
     * @example
     * // Update many Albums
     * const album = await prisma.album.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Albums and only return the `id`
     * const albumWithIdOnly = await prisma.album.updateManyAndReturn({
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
    updateManyAndReturn<T extends AlbumUpdateManyAndReturnArgs>(args: SelectSubset<T, AlbumUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Album.
     * @param {AlbumUpsertArgs} args - Arguments to update or create a Album.
     * @example
     * // Update or create a Album
     * const album = await prisma.album.upsert({
     *   create: {
     *     // ... data to create a Album
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Album we want to update
     *   }
     * })
     */
    upsert<T extends AlbumUpsertArgs>(args: SelectSubset<T, AlbumUpsertArgs<ExtArgs>>): Prisma__AlbumClient<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Albums.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumCountArgs} args - Arguments to filter Albums to count.
     * @example
     * // Count the number of Albums
     * const count = await prisma.album.count({
     *   where: {
     *     // ... the filter for the Albums we want to count
     *   }
     * })
    **/
    count<T extends AlbumCountArgs>(
      args?: Subset<T, AlbumCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AlbumCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Album.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AlbumAggregateArgs>(args: Subset<T, AlbumAggregateArgs>): Prisma.PrismaPromise<GetAlbumAggregateType<T>>

    /**
     * Group by Album.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumGroupByArgs} args - Group by arguments.
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
      T extends AlbumGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AlbumGroupByArgs['orderBy'] }
        : { orderBy?: AlbumGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AlbumGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAlbumGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Album model
   */
  readonly fields: AlbumFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Album.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AlbumClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    images<T extends Album$imagesArgs<ExtArgs> = {}>(args?: Subset<T, Album$imagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    author<T extends ProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProfileDefaultArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Album model
   */
  interface AlbumFieldRefs {
    readonly id: FieldRef<"Album", 'Int'>
    readonly name: FieldRef<"Album", 'String'>
    readonly created_at: FieldRef<"Album", 'DateTime'>
    readonly shown: FieldRef<"Album", 'Boolean'>
    readonly topic: FieldRef<"Album", 'String'>
    readonly authorId: FieldRef<"Album", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Album findUnique
   */
  export type AlbumFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Album
     */
    omit?: AlbumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumInclude<ExtArgs> | null
    /**
     * Filter, which Album to fetch.
     */
    where: AlbumWhereUniqueInput
  }

  /**
   * Album findUniqueOrThrow
   */
  export type AlbumFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Album
     */
    omit?: AlbumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumInclude<ExtArgs> | null
    /**
     * Filter, which Album to fetch.
     */
    where: AlbumWhereUniqueInput
  }

  /**
   * Album findFirst
   */
  export type AlbumFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Album
     */
    omit?: AlbumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumInclude<ExtArgs> | null
    /**
     * Filter, which Album to fetch.
     */
    where?: AlbumWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Albums to fetch.
     */
    orderBy?: AlbumOrderByWithRelationInput | AlbumOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Albums.
     */
    cursor?: AlbumWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Albums from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Albums.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Albums.
     */
    distinct?: AlbumScalarFieldEnum | AlbumScalarFieldEnum[]
  }

  /**
   * Album findFirstOrThrow
   */
  export type AlbumFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Album
     */
    omit?: AlbumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumInclude<ExtArgs> | null
    /**
     * Filter, which Album to fetch.
     */
    where?: AlbumWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Albums to fetch.
     */
    orderBy?: AlbumOrderByWithRelationInput | AlbumOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Albums.
     */
    cursor?: AlbumWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Albums from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Albums.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Albums.
     */
    distinct?: AlbumScalarFieldEnum | AlbumScalarFieldEnum[]
  }

  /**
   * Album findMany
   */
  export type AlbumFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Album
     */
    omit?: AlbumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumInclude<ExtArgs> | null
    /**
     * Filter, which Albums to fetch.
     */
    where?: AlbumWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Albums to fetch.
     */
    orderBy?: AlbumOrderByWithRelationInput | AlbumOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Albums.
     */
    cursor?: AlbumWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Albums from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Albums.
     */
    skip?: number
    distinct?: AlbumScalarFieldEnum | AlbumScalarFieldEnum[]
  }

  /**
   * Album create
   */
  export type AlbumCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Album
     */
    omit?: AlbumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumInclude<ExtArgs> | null
    /**
     * The data needed to create a Album.
     */
    data: XOR<AlbumCreateInput, AlbumUncheckedCreateInput>
  }

  /**
   * Album createMany
   */
  export type AlbumCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Albums.
     */
    data: AlbumCreateManyInput | AlbumCreateManyInput[]
  }

  /**
   * Album createManyAndReturn
   */
  export type AlbumCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Album
     */
    omit?: AlbumOmit<ExtArgs> | null
    /**
     * The data used to create many Albums.
     */
    data: AlbumCreateManyInput | AlbumCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Album update
   */
  export type AlbumUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Album
     */
    omit?: AlbumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumInclude<ExtArgs> | null
    /**
     * The data needed to update a Album.
     */
    data: XOR<AlbumUpdateInput, AlbumUncheckedUpdateInput>
    /**
     * Choose, which Album to update.
     */
    where: AlbumWhereUniqueInput
  }

  /**
   * Album updateMany
   */
  export type AlbumUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Albums.
     */
    data: XOR<AlbumUpdateManyMutationInput, AlbumUncheckedUpdateManyInput>
    /**
     * Filter which Albums to update
     */
    where?: AlbumWhereInput
    /**
     * Limit how many Albums to update.
     */
    limit?: number
  }

  /**
   * Album updateManyAndReturn
   */
  export type AlbumUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Album
     */
    omit?: AlbumOmit<ExtArgs> | null
    /**
     * The data used to update Albums.
     */
    data: XOR<AlbumUpdateManyMutationInput, AlbumUncheckedUpdateManyInput>
    /**
     * Filter which Albums to update
     */
    where?: AlbumWhereInput
    /**
     * Limit how many Albums to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Album upsert
   */
  export type AlbumUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Album
     */
    omit?: AlbumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumInclude<ExtArgs> | null
    /**
     * The filter to search for the Album to update in case it exists.
     */
    where: AlbumWhereUniqueInput
    /**
     * In case the Album found by the `where` argument doesn't exist, create a new Album with this data.
     */
    create: XOR<AlbumCreateInput, AlbumUncheckedCreateInput>
    /**
     * In case the Album was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AlbumUpdateInput, AlbumUncheckedUpdateInput>
  }

  /**
   * Album delete
   */
  export type AlbumDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Album
     */
    omit?: AlbumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumInclude<ExtArgs> | null
    /**
     * Filter which Album to delete.
     */
    where: AlbumWhereUniqueInput
  }

  /**
   * Album deleteMany
   */
  export type AlbumDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Albums to delete
     */
    where?: AlbumWhereInput
    /**
     * Limit how many Albums to delete.
     */
    limit?: number
  }

  /**
   * Album.images
   */
  export type Album$imagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    where?: ImageWhereInput
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    cursor?: ImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }

  /**
   * Album without action
   */
  export type AlbumDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Album
     */
    omit?: AlbumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumInclude<ExtArgs> | null
  }


  /**
   * Model ChatGroup
   */

  export type AggregateChatGroup = {
    _count: ChatGroupCountAggregateOutputType | null
    _avg: ChatGroupAvgAggregateOutputType | null
    _sum: ChatGroupSumAggregateOutputType | null
    _min: ChatGroupMinAggregateOutputType | null
    _max: ChatGroupMaxAggregateOutputType | null
  }

  export type ChatGroupAvgAggregateOutputType = {
    id: number | null
    adminId: number | null
  }

  export type ChatGroupSumAggregateOutputType = {
    id: number | null
    adminId: number | null
  }

  export type ChatGroupMinAggregateOutputType = {
    id: number | null
    name: string | null
    isPersonalChat: boolean | null
    adminId: number | null
    avatar: string | null
  }

  export type ChatGroupMaxAggregateOutputType = {
    id: number | null
    name: string | null
    isPersonalChat: boolean | null
    adminId: number | null
    avatar: string | null
  }

  export type ChatGroupCountAggregateOutputType = {
    id: number
    name: number
    isPersonalChat: number
    adminId: number
    avatar: number
    _all: number
  }


  export type ChatGroupAvgAggregateInputType = {
    id?: true
    adminId?: true
  }

  export type ChatGroupSumAggregateInputType = {
    id?: true
    adminId?: true
  }

  export type ChatGroupMinAggregateInputType = {
    id?: true
    name?: true
    isPersonalChat?: true
    adminId?: true
    avatar?: true
  }

  export type ChatGroupMaxAggregateInputType = {
    id?: true
    name?: true
    isPersonalChat?: true
    adminId?: true
    avatar?: true
  }

  export type ChatGroupCountAggregateInputType = {
    id?: true
    name?: true
    isPersonalChat?: true
    adminId?: true
    avatar?: true
    _all?: true
  }

  export type ChatGroupAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatGroup to aggregate.
     */
    where?: ChatGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatGroups to fetch.
     */
    orderBy?: ChatGroupOrderByWithRelationInput | ChatGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChatGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ChatGroups
    **/
    _count?: true | ChatGroupCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChatGroupAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChatGroupSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChatGroupMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChatGroupMaxAggregateInputType
  }

  export type GetChatGroupAggregateType<T extends ChatGroupAggregateArgs> = {
        [P in keyof T & keyof AggregateChatGroup]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChatGroup[P]>
      : GetScalarType<T[P], AggregateChatGroup[P]>
  }




  export type ChatGroupGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatGroupWhereInput
    orderBy?: ChatGroupOrderByWithAggregationInput | ChatGroupOrderByWithAggregationInput[]
    by: ChatGroupScalarFieldEnum[] | ChatGroupScalarFieldEnum
    having?: ChatGroupScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChatGroupCountAggregateInputType | true
    _avg?: ChatGroupAvgAggregateInputType
    _sum?: ChatGroupSumAggregateInputType
    _min?: ChatGroupMinAggregateInputType
    _max?: ChatGroupMaxAggregateInputType
  }

  export type ChatGroupGroupByOutputType = {
    id: number
    name: string
    isPersonalChat: boolean
    adminId: number
    avatar: string
    _count: ChatGroupCountAggregateOutputType | null
    _avg: ChatGroupAvgAggregateOutputType | null
    _sum: ChatGroupSumAggregateOutputType | null
    _min: ChatGroupMinAggregateOutputType | null
    _max: ChatGroupMaxAggregateOutputType | null
  }

  type GetChatGroupGroupByPayload<T extends ChatGroupGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChatGroupGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChatGroupGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChatGroupGroupByOutputType[P]>
            : GetScalarType<T[P], ChatGroupGroupByOutputType[P]>
        }
      >
    >


  export type ChatGroupSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    isPersonalChat?: boolean
    adminId?: boolean
    avatar?: boolean
    members?: boolean | ChatGroup$membersArgs<ExtArgs>
    admin?: boolean | ProfileDefaultArgs<ExtArgs>
    chatMessages?: boolean | ChatGroup$chatMessagesArgs<ExtArgs>
    _count?: boolean | ChatGroupCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatGroup"]>

  export type ChatGroupSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    isPersonalChat?: boolean
    adminId?: boolean
    avatar?: boolean
    admin?: boolean | ProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatGroup"]>

  export type ChatGroupSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    isPersonalChat?: boolean
    adminId?: boolean
    avatar?: boolean
    admin?: boolean | ProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatGroup"]>

  export type ChatGroupSelectScalar = {
    id?: boolean
    name?: boolean
    isPersonalChat?: boolean
    adminId?: boolean
    avatar?: boolean
  }

  export type ChatGroupOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "isPersonalChat" | "adminId" | "avatar", ExtArgs["result"]["chatGroup"]>
  export type ChatGroupInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    members?: boolean | ChatGroup$membersArgs<ExtArgs>
    admin?: boolean | ProfileDefaultArgs<ExtArgs>
    chatMessages?: boolean | ChatGroup$chatMessagesArgs<ExtArgs>
    _count?: boolean | ChatGroupCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ChatGroupIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admin?: boolean | ProfileDefaultArgs<ExtArgs>
  }
  export type ChatGroupIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admin?: boolean | ProfileDefaultArgs<ExtArgs>
  }

  export type $ChatGroupPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ChatGroup"
    objects: {
      members: Prisma.$ProfilePayload<ExtArgs>[]
      admin: Prisma.$ProfilePayload<ExtArgs>
      chatMessages: Prisma.$ChatMessagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      isPersonalChat: boolean
      adminId: number
      avatar: string
    }, ExtArgs["result"]["chatGroup"]>
    composites: {}
  }

  type ChatGroupGetPayload<S extends boolean | null | undefined | ChatGroupDefaultArgs> = $Result.GetResult<Prisma.$ChatGroupPayload, S>

  type ChatGroupCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChatGroupFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChatGroupCountAggregateInputType | true
    }

  export interface ChatGroupDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ChatGroup'], meta: { name: 'ChatGroup' } }
    /**
     * Find zero or one ChatGroup that matches the filter.
     * @param {ChatGroupFindUniqueArgs} args - Arguments to find a ChatGroup
     * @example
     * // Get one ChatGroup
     * const chatGroup = await prisma.chatGroup.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChatGroupFindUniqueArgs>(args: SelectSubset<T, ChatGroupFindUniqueArgs<ExtArgs>>): Prisma__ChatGroupClient<$Result.GetResult<Prisma.$ChatGroupPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ChatGroup that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChatGroupFindUniqueOrThrowArgs} args - Arguments to find a ChatGroup
     * @example
     * // Get one ChatGroup
     * const chatGroup = await prisma.chatGroup.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChatGroupFindUniqueOrThrowArgs>(args: SelectSubset<T, ChatGroupFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChatGroupClient<$Result.GetResult<Prisma.$ChatGroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatGroup that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatGroupFindFirstArgs} args - Arguments to find a ChatGroup
     * @example
     * // Get one ChatGroup
     * const chatGroup = await prisma.chatGroup.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChatGroupFindFirstArgs>(args?: SelectSubset<T, ChatGroupFindFirstArgs<ExtArgs>>): Prisma__ChatGroupClient<$Result.GetResult<Prisma.$ChatGroupPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatGroup that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatGroupFindFirstOrThrowArgs} args - Arguments to find a ChatGroup
     * @example
     * // Get one ChatGroup
     * const chatGroup = await prisma.chatGroup.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChatGroupFindFirstOrThrowArgs>(args?: SelectSubset<T, ChatGroupFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChatGroupClient<$Result.GetResult<Prisma.$ChatGroupPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ChatGroups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatGroupFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ChatGroups
     * const chatGroups = await prisma.chatGroup.findMany()
     * 
     * // Get first 10 ChatGroups
     * const chatGroups = await prisma.chatGroup.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chatGroupWithIdOnly = await prisma.chatGroup.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChatGroupFindManyArgs>(args?: SelectSubset<T, ChatGroupFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatGroupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ChatGroup.
     * @param {ChatGroupCreateArgs} args - Arguments to create a ChatGroup.
     * @example
     * // Create one ChatGroup
     * const ChatGroup = await prisma.chatGroup.create({
     *   data: {
     *     // ... data to create a ChatGroup
     *   }
     * })
     * 
     */
    create<T extends ChatGroupCreateArgs>(args: SelectSubset<T, ChatGroupCreateArgs<ExtArgs>>): Prisma__ChatGroupClient<$Result.GetResult<Prisma.$ChatGroupPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ChatGroups.
     * @param {ChatGroupCreateManyArgs} args - Arguments to create many ChatGroups.
     * @example
     * // Create many ChatGroups
     * const chatGroup = await prisma.chatGroup.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChatGroupCreateManyArgs>(args?: SelectSubset<T, ChatGroupCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ChatGroups and returns the data saved in the database.
     * @param {ChatGroupCreateManyAndReturnArgs} args - Arguments to create many ChatGroups.
     * @example
     * // Create many ChatGroups
     * const chatGroup = await prisma.chatGroup.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ChatGroups and only return the `id`
     * const chatGroupWithIdOnly = await prisma.chatGroup.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChatGroupCreateManyAndReturnArgs>(args?: SelectSubset<T, ChatGroupCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatGroupPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ChatGroup.
     * @param {ChatGroupDeleteArgs} args - Arguments to delete one ChatGroup.
     * @example
     * // Delete one ChatGroup
     * const ChatGroup = await prisma.chatGroup.delete({
     *   where: {
     *     // ... filter to delete one ChatGroup
     *   }
     * })
     * 
     */
    delete<T extends ChatGroupDeleteArgs>(args: SelectSubset<T, ChatGroupDeleteArgs<ExtArgs>>): Prisma__ChatGroupClient<$Result.GetResult<Prisma.$ChatGroupPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ChatGroup.
     * @param {ChatGroupUpdateArgs} args - Arguments to update one ChatGroup.
     * @example
     * // Update one ChatGroup
     * const chatGroup = await prisma.chatGroup.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChatGroupUpdateArgs>(args: SelectSubset<T, ChatGroupUpdateArgs<ExtArgs>>): Prisma__ChatGroupClient<$Result.GetResult<Prisma.$ChatGroupPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ChatGroups.
     * @param {ChatGroupDeleteManyArgs} args - Arguments to filter ChatGroups to delete.
     * @example
     * // Delete a few ChatGroups
     * const { count } = await prisma.chatGroup.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChatGroupDeleteManyArgs>(args?: SelectSubset<T, ChatGroupDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatGroups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatGroupUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ChatGroups
     * const chatGroup = await prisma.chatGroup.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChatGroupUpdateManyArgs>(args: SelectSubset<T, ChatGroupUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatGroups and returns the data updated in the database.
     * @param {ChatGroupUpdateManyAndReturnArgs} args - Arguments to update many ChatGroups.
     * @example
     * // Update many ChatGroups
     * const chatGroup = await prisma.chatGroup.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ChatGroups and only return the `id`
     * const chatGroupWithIdOnly = await prisma.chatGroup.updateManyAndReturn({
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
    updateManyAndReturn<T extends ChatGroupUpdateManyAndReturnArgs>(args: SelectSubset<T, ChatGroupUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatGroupPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ChatGroup.
     * @param {ChatGroupUpsertArgs} args - Arguments to update or create a ChatGroup.
     * @example
     * // Update or create a ChatGroup
     * const chatGroup = await prisma.chatGroup.upsert({
     *   create: {
     *     // ... data to create a ChatGroup
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ChatGroup we want to update
     *   }
     * })
     */
    upsert<T extends ChatGroupUpsertArgs>(args: SelectSubset<T, ChatGroupUpsertArgs<ExtArgs>>): Prisma__ChatGroupClient<$Result.GetResult<Prisma.$ChatGroupPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ChatGroups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatGroupCountArgs} args - Arguments to filter ChatGroups to count.
     * @example
     * // Count the number of ChatGroups
     * const count = await prisma.chatGroup.count({
     *   where: {
     *     // ... the filter for the ChatGroups we want to count
     *   }
     * })
    **/
    count<T extends ChatGroupCountArgs>(
      args?: Subset<T, ChatGroupCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChatGroupCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ChatGroup.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatGroupAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChatGroupAggregateArgs>(args: Subset<T, ChatGroupAggregateArgs>): Prisma.PrismaPromise<GetChatGroupAggregateType<T>>

    /**
     * Group by ChatGroup.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatGroupGroupByArgs} args - Group by arguments.
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
      T extends ChatGroupGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChatGroupGroupByArgs['orderBy'] }
        : { orderBy?: ChatGroupGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ChatGroupGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChatGroupGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ChatGroup model
   */
  readonly fields: ChatGroupFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ChatGroup.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChatGroupClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    members<T extends ChatGroup$membersArgs<ExtArgs> = {}>(args?: Subset<T, ChatGroup$membersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    admin<T extends ProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProfileDefaultArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    chatMessages<T extends ChatGroup$chatMessagesArgs<ExtArgs> = {}>(args?: Subset<T, ChatGroup$chatMessagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the ChatGroup model
   */
  interface ChatGroupFieldRefs {
    readonly id: FieldRef<"ChatGroup", 'Int'>
    readonly name: FieldRef<"ChatGroup", 'String'>
    readonly isPersonalChat: FieldRef<"ChatGroup", 'Boolean'>
    readonly adminId: FieldRef<"ChatGroup", 'Int'>
    readonly avatar: FieldRef<"ChatGroup", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ChatGroup findUnique
   */
  export type ChatGroupFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatGroup
     */
    select?: ChatGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatGroup
     */
    omit?: ChatGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatGroupInclude<ExtArgs> | null
    /**
     * Filter, which ChatGroup to fetch.
     */
    where: ChatGroupWhereUniqueInput
  }

  /**
   * ChatGroup findUniqueOrThrow
   */
  export type ChatGroupFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatGroup
     */
    select?: ChatGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatGroup
     */
    omit?: ChatGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatGroupInclude<ExtArgs> | null
    /**
     * Filter, which ChatGroup to fetch.
     */
    where: ChatGroupWhereUniqueInput
  }

  /**
   * ChatGroup findFirst
   */
  export type ChatGroupFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatGroup
     */
    select?: ChatGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatGroup
     */
    omit?: ChatGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatGroupInclude<ExtArgs> | null
    /**
     * Filter, which ChatGroup to fetch.
     */
    where?: ChatGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatGroups to fetch.
     */
    orderBy?: ChatGroupOrderByWithRelationInput | ChatGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatGroups.
     */
    cursor?: ChatGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatGroups.
     */
    distinct?: ChatGroupScalarFieldEnum | ChatGroupScalarFieldEnum[]
  }

  /**
   * ChatGroup findFirstOrThrow
   */
  export type ChatGroupFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatGroup
     */
    select?: ChatGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatGroup
     */
    omit?: ChatGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatGroupInclude<ExtArgs> | null
    /**
     * Filter, which ChatGroup to fetch.
     */
    where?: ChatGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatGroups to fetch.
     */
    orderBy?: ChatGroupOrderByWithRelationInput | ChatGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatGroups.
     */
    cursor?: ChatGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatGroups.
     */
    distinct?: ChatGroupScalarFieldEnum | ChatGroupScalarFieldEnum[]
  }

  /**
   * ChatGroup findMany
   */
  export type ChatGroupFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatGroup
     */
    select?: ChatGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatGroup
     */
    omit?: ChatGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatGroupInclude<ExtArgs> | null
    /**
     * Filter, which ChatGroups to fetch.
     */
    where?: ChatGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatGroups to fetch.
     */
    orderBy?: ChatGroupOrderByWithRelationInput | ChatGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ChatGroups.
     */
    cursor?: ChatGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatGroups.
     */
    skip?: number
    distinct?: ChatGroupScalarFieldEnum | ChatGroupScalarFieldEnum[]
  }

  /**
   * ChatGroup create
   */
  export type ChatGroupCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatGroup
     */
    select?: ChatGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatGroup
     */
    omit?: ChatGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatGroupInclude<ExtArgs> | null
    /**
     * The data needed to create a ChatGroup.
     */
    data: XOR<ChatGroupCreateInput, ChatGroupUncheckedCreateInput>
  }

  /**
   * ChatGroup createMany
   */
  export type ChatGroupCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ChatGroups.
     */
    data: ChatGroupCreateManyInput | ChatGroupCreateManyInput[]
  }

  /**
   * ChatGroup createManyAndReturn
   */
  export type ChatGroupCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatGroup
     */
    select?: ChatGroupSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChatGroup
     */
    omit?: ChatGroupOmit<ExtArgs> | null
    /**
     * The data used to create many ChatGroups.
     */
    data: ChatGroupCreateManyInput | ChatGroupCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatGroupIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChatGroup update
   */
  export type ChatGroupUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatGroup
     */
    select?: ChatGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatGroup
     */
    omit?: ChatGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatGroupInclude<ExtArgs> | null
    /**
     * The data needed to update a ChatGroup.
     */
    data: XOR<ChatGroupUpdateInput, ChatGroupUncheckedUpdateInput>
    /**
     * Choose, which ChatGroup to update.
     */
    where: ChatGroupWhereUniqueInput
  }

  /**
   * ChatGroup updateMany
   */
  export type ChatGroupUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ChatGroups.
     */
    data: XOR<ChatGroupUpdateManyMutationInput, ChatGroupUncheckedUpdateManyInput>
    /**
     * Filter which ChatGroups to update
     */
    where?: ChatGroupWhereInput
    /**
     * Limit how many ChatGroups to update.
     */
    limit?: number
  }

  /**
   * ChatGroup updateManyAndReturn
   */
  export type ChatGroupUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatGroup
     */
    select?: ChatGroupSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChatGroup
     */
    omit?: ChatGroupOmit<ExtArgs> | null
    /**
     * The data used to update ChatGroups.
     */
    data: XOR<ChatGroupUpdateManyMutationInput, ChatGroupUncheckedUpdateManyInput>
    /**
     * Filter which ChatGroups to update
     */
    where?: ChatGroupWhereInput
    /**
     * Limit how many ChatGroups to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatGroupIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChatGroup upsert
   */
  export type ChatGroupUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatGroup
     */
    select?: ChatGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatGroup
     */
    omit?: ChatGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatGroupInclude<ExtArgs> | null
    /**
     * The filter to search for the ChatGroup to update in case it exists.
     */
    where: ChatGroupWhereUniqueInput
    /**
     * In case the ChatGroup found by the `where` argument doesn't exist, create a new ChatGroup with this data.
     */
    create: XOR<ChatGroupCreateInput, ChatGroupUncheckedCreateInput>
    /**
     * In case the ChatGroup was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChatGroupUpdateInput, ChatGroupUncheckedUpdateInput>
  }

  /**
   * ChatGroup delete
   */
  export type ChatGroupDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatGroup
     */
    select?: ChatGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatGroup
     */
    omit?: ChatGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatGroupInclude<ExtArgs> | null
    /**
     * Filter which ChatGroup to delete.
     */
    where: ChatGroupWhereUniqueInput
  }

  /**
   * ChatGroup deleteMany
   */
  export type ChatGroupDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatGroups to delete
     */
    where?: ChatGroupWhereInput
    /**
     * Limit how many ChatGroups to delete.
     */
    limit?: number
  }

  /**
   * ChatGroup.members
   */
  export type ChatGroup$membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    where?: ProfileWhereInput
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    cursor?: ProfileWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * ChatGroup.chatMessages
   */
  export type ChatGroup$chatMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    where?: ChatMessageWhereInput
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    cursor?: ChatMessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[]
  }

  /**
   * ChatGroup without action
   */
  export type ChatGroupDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatGroup
     */
    select?: ChatGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatGroup
     */
    omit?: ChatGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatGroupInclude<ExtArgs> | null
  }


  /**
   * Model ChatMessage
   */

  export type AggregateChatMessage = {
    _count: ChatMessageCountAggregateOutputType | null
    _avg: ChatMessageAvgAggregateOutputType | null
    _sum: ChatMessageSumAggregateOutputType | null
    _min: ChatMessageMinAggregateOutputType | null
    _max: ChatMessageMaxAggregateOutputType | null
  }

  export type ChatMessageAvgAggregateOutputType = {
    id: number | null
    authorId: number | null
    chatGroupId: number | null
  }

  export type ChatMessageSumAggregateOutputType = {
    id: number | null
    authorId: number | null
    chatGroupId: number | null
  }

  export type ChatMessageMinAggregateOutputType = {
    id: number | null
    content: string | null
    sentAt: Date | null
    authorId: number | null
    chatGroupId: number | null
    attachedImage: string | null
  }

  export type ChatMessageMaxAggregateOutputType = {
    id: number | null
    content: string | null
    sentAt: Date | null
    authorId: number | null
    chatGroupId: number | null
    attachedImage: string | null
  }

  export type ChatMessageCountAggregateOutputType = {
    id: number
    content: number
    sentAt: number
    authorId: number
    chatGroupId: number
    attachedImage: number
    _all: number
  }


  export type ChatMessageAvgAggregateInputType = {
    id?: true
    authorId?: true
    chatGroupId?: true
  }

  export type ChatMessageSumAggregateInputType = {
    id?: true
    authorId?: true
    chatGroupId?: true
  }

  export type ChatMessageMinAggregateInputType = {
    id?: true
    content?: true
    sentAt?: true
    authorId?: true
    chatGroupId?: true
    attachedImage?: true
  }

  export type ChatMessageMaxAggregateInputType = {
    id?: true
    content?: true
    sentAt?: true
    authorId?: true
    chatGroupId?: true
    attachedImage?: true
  }

  export type ChatMessageCountAggregateInputType = {
    id?: true
    content?: true
    sentAt?: true
    authorId?: true
    chatGroupId?: true
    attachedImage?: true
    _all?: true
  }

  export type ChatMessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatMessage to aggregate.
     */
    where?: ChatMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMessages to fetch.
     */
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChatMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ChatMessages
    **/
    _count?: true | ChatMessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChatMessageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChatMessageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChatMessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChatMessageMaxAggregateInputType
  }

  export type GetChatMessageAggregateType<T extends ChatMessageAggregateArgs> = {
        [P in keyof T & keyof AggregateChatMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChatMessage[P]>
      : GetScalarType<T[P], AggregateChatMessage[P]>
  }




  export type ChatMessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatMessageWhereInput
    orderBy?: ChatMessageOrderByWithAggregationInput | ChatMessageOrderByWithAggregationInput[]
    by: ChatMessageScalarFieldEnum[] | ChatMessageScalarFieldEnum
    having?: ChatMessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChatMessageCountAggregateInputType | true
    _avg?: ChatMessageAvgAggregateInputType
    _sum?: ChatMessageSumAggregateInputType
    _min?: ChatMessageMinAggregateInputType
    _max?: ChatMessageMaxAggregateInputType
  }

  export type ChatMessageGroupByOutputType = {
    id: number
    content: string
    sentAt: Date
    authorId: number
    chatGroupId: number
    attachedImage: string
    _count: ChatMessageCountAggregateOutputType | null
    _avg: ChatMessageAvgAggregateOutputType | null
    _sum: ChatMessageSumAggregateOutputType | null
    _min: ChatMessageMinAggregateOutputType | null
    _max: ChatMessageMaxAggregateOutputType | null
  }

  type GetChatMessageGroupByPayload<T extends ChatMessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChatMessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChatMessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChatMessageGroupByOutputType[P]>
            : GetScalarType<T[P], ChatMessageGroupByOutputType[P]>
        }
      >
    >


  export type ChatMessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    sentAt?: boolean
    authorId?: boolean
    chatGroupId?: boolean
    attachedImage?: boolean
    author?: boolean | ProfileDefaultArgs<ExtArgs>
    chatGroup?: boolean | ChatGroupDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatMessage"]>

  export type ChatMessageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    sentAt?: boolean
    authorId?: boolean
    chatGroupId?: boolean
    attachedImage?: boolean
    author?: boolean | ProfileDefaultArgs<ExtArgs>
    chatGroup?: boolean | ChatGroupDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatMessage"]>

  export type ChatMessageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    sentAt?: boolean
    authorId?: boolean
    chatGroupId?: boolean
    attachedImage?: boolean
    author?: boolean | ProfileDefaultArgs<ExtArgs>
    chatGroup?: boolean | ChatGroupDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatMessage"]>

  export type ChatMessageSelectScalar = {
    id?: boolean
    content?: boolean
    sentAt?: boolean
    authorId?: boolean
    chatGroupId?: boolean
    attachedImage?: boolean
  }

  export type ChatMessageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "content" | "sentAt" | "authorId" | "chatGroupId" | "attachedImage", ExtArgs["result"]["chatMessage"]>
  export type ChatMessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | ProfileDefaultArgs<ExtArgs>
    chatGroup?: boolean | ChatGroupDefaultArgs<ExtArgs>
  }
  export type ChatMessageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | ProfileDefaultArgs<ExtArgs>
    chatGroup?: boolean | ChatGroupDefaultArgs<ExtArgs>
  }
  export type ChatMessageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | ProfileDefaultArgs<ExtArgs>
    chatGroup?: boolean | ChatGroupDefaultArgs<ExtArgs>
  }

  export type $ChatMessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ChatMessage"
    objects: {
      author: Prisma.$ProfilePayload<ExtArgs>
      chatGroup: Prisma.$ChatGroupPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      content: string
      sentAt: Date
      authorId: number
      chatGroupId: number
      attachedImage: string
    }, ExtArgs["result"]["chatMessage"]>
    composites: {}
  }

  type ChatMessageGetPayload<S extends boolean | null | undefined | ChatMessageDefaultArgs> = $Result.GetResult<Prisma.$ChatMessagePayload, S>

  type ChatMessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChatMessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChatMessageCountAggregateInputType | true
    }

  export interface ChatMessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ChatMessage'], meta: { name: 'ChatMessage' } }
    /**
     * Find zero or one ChatMessage that matches the filter.
     * @param {ChatMessageFindUniqueArgs} args - Arguments to find a ChatMessage
     * @example
     * // Get one ChatMessage
     * const chatMessage = await prisma.chatMessage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChatMessageFindUniqueArgs>(args: SelectSubset<T, ChatMessageFindUniqueArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ChatMessage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChatMessageFindUniqueOrThrowArgs} args - Arguments to find a ChatMessage
     * @example
     * // Get one ChatMessage
     * const chatMessage = await prisma.chatMessage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChatMessageFindUniqueOrThrowArgs>(args: SelectSubset<T, ChatMessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatMessage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageFindFirstArgs} args - Arguments to find a ChatMessage
     * @example
     * // Get one ChatMessage
     * const chatMessage = await prisma.chatMessage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChatMessageFindFirstArgs>(args?: SelectSubset<T, ChatMessageFindFirstArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatMessage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageFindFirstOrThrowArgs} args - Arguments to find a ChatMessage
     * @example
     * // Get one ChatMessage
     * const chatMessage = await prisma.chatMessage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChatMessageFindFirstOrThrowArgs>(args?: SelectSubset<T, ChatMessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ChatMessages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ChatMessages
     * const chatMessages = await prisma.chatMessage.findMany()
     * 
     * // Get first 10 ChatMessages
     * const chatMessages = await prisma.chatMessage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chatMessageWithIdOnly = await prisma.chatMessage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChatMessageFindManyArgs>(args?: SelectSubset<T, ChatMessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ChatMessage.
     * @param {ChatMessageCreateArgs} args - Arguments to create a ChatMessage.
     * @example
     * // Create one ChatMessage
     * const ChatMessage = await prisma.chatMessage.create({
     *   data: {
     *     // ... data to create a ChatMessage
     *   }
     * })
     * 
     */
    create<T extends ChatMessageCreateArgs>(args: SelectSubset<T, ChatMessageCreateArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ChatMessages.
     * @param {ChatMessageCreateManyArgs} args - Arguments to create many ChatMessages.
     * @example
     * // Create many ChatMessages
     * const chatMessage = await prisma.chatMessage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChatMessageCreateManyArgs>(args?: SelectSubset<T, ChatMessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ChatMessages and returns the data saved in the database.
     * @param {ChatMessageCreateManyAndReturnArgs} args - Arguments to create many ChatMessages.
     * @example
     * // Create many ChatMessages
     * const chatMessage = await prisma.chatMessage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ChatMessages and only return the `id`
     * const chatMessageWithIdOnly = await prisma.chatMessage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChatMessageCreateManyAndReturnArgs>(args?: SelectSubset<T, ChatMessageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ChatMessage.
     * @param {ChatMessageDeleteArgs} args - Arguments to delete one ChatMessage.
     * @example
     * // Delete one ChatMessage
     * const ChatMessage = await prisma.chatMessage.delete({
     *   where: {
     *     // ... filter to delete one ChatMessage
     *   }
     * })
     * 
     */
    delete<T extends ChatMessageDeleteArgs>(args: SelectSubset<T, ChatMessageDeleteArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ChatMessage.
     * @param {ChatMessageUpdateArgs} args - Arguments to update one ChatMessage.
     * @example
     * // Update one ChatMessage
     * const chatMessage = await prisma.chatMessage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChatMessageUpdateArgs>(args: SelectSubset<T, ChatMessageUpdateArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ChatMessages.
     * @param {ChatMessageDeleteManyArgs} args - Arguments to filter ChatMessages to delete.
     * @example
     * // Delete a few ChatMessages
     * const { count } = await prisma.chatMessage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChatMessageDeleteManyArgs>(args?: SelectSubset<T, ChatMessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ChatMessages
     * const chatMessage = await prisma.chatMessage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChatMessageUpdateManyArgs>(args: SelectSubset<T, ChatMessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatMessages and returns the data updated in the database.
     * @param {ChatMessageUpdateManyAndReturnArgs} args - Arguments to update many ChatMessages.
     * @example
     * // Update many ChatMessages
     * const chatMessage = await prisma.chatMessage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ChatMessages and only return the `id`
     * const chatMessageWithIdOnly = await prisma.chatMessage.updateManyAndReturn({
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
    updateManyAndReturn<T extends ChatMessageUpdateManyAndReturnArgs>(args: SelectSubset<T, ChatMessageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ChatMessage.
     * @param {ChatMessageUpsertArgs} args - Arguments to update or create a ChatMessage.
     * @example
     * // Update or create a ChatMessage
     * const chatMessage = await prisma.chatMessage.upsert({
     *   create: {
     *     // ... data to create a ChatMessage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ChatMessage we want to update
     *   }
     * })
     */
    upsert<T extends ChatMessageUpsertArgs>(args: SelectSubset<T, ChatMessageUpsertArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ChatMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageCountArgs} args - Arguments to filter ChatMessages to count.
     * @example
     * // Count the number of ChatMessages
     * const count = await prisma.chatMessage.count({
     *   where: {
     *     // ... the filter for the ChatMessages we want to count
     *   }
     * })
    **/
    count<T extends ChatMessageCountArgs>(
      args?: Subset<T, ChatMessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChatMessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ChatMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChatMessageAggregateArgs>(args: Subset<T, ChatMessageAggregateArgs>): Prisma.PrismaPromise<GetChatMessageAggregateType<T>>

    /**
     * Group by ChatMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageGroupByArgs} args - Group by arguments.
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
      T extends ChatMessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChatMessageGroupByArgs['orderBy'] }
        : { orderBy?: ChatMessageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ChatMessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChatMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ChatMessage model
   */
  readonly fields: ChatMessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ChatMessage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChatMessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    author<T extends ProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProfileDefaultArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    chatGroup<T extends ChatGroupDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChatGroupDefaultArgs<ExtArgs>>): Prisma__ChatGroupClient<$Result.GetResult<Prisma.$ChatGroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ChatMessage model
   */
  interface ChatMessageFieldRefs {
    readonly id: FieldRef<"ChatMessage", 'Int'>
    readonly content: FieldRef<"ChatMessage", 'String'>
    readonly sentAt: FieldRef<"ChatMessage", 'DateTime'>
    readonly authorId: FieldRef<"ChatMessage", 'Int'>
    readonly chatGroupId: FieldRef<"ChatMessage", 'Int'>
    readonly attachedImage: FieldRef<"ChatMessage", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ChatMessage findUnique
   */
  export type ChatMessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter, which ChatMessage to fetch.
     */
    where: ChatMessageWhereUniqueInput
  }

  /**
   * ChatMessage findUniqueOrThrow
   */
  export type ChatMessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter, which ChatMessage to fetch.
     */
    where: ChatMessageWhereUniqueInput
  }

  /**
   * ChatMessage findFirst
   */
  export type ChatMessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter, which ChatMessage to fetch.
     */
    where?: ChatMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMessages to fetch.
     */
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatMessages.
     */
    cursor?: ChatMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatMessages.
     */
    distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[]
  }

  /**
   * ChatMessage findFirstOrThrow
   */
  export type ChatMessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter, which ChatMessage to fetch.
     */
    where?: ChatMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMessages to fetch.
     */
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatMessages.
     */
    cursor?: ChatMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatMessages.
     */
    distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[]
  }

  /**
   * ChatMessage findMany
   */
  export type ChatMessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter, which ChatMessages to fetch.
     */
    where?: ChatMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMessages to fetch.
     */
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ChatMessages.
     */
    cursor?: ChatMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMessages.
     */
    skip?: number
    distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[]
  }

  /**
   * ChatMessage create
   */
  export type ChatMessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * The data needed to create a ChatMessage.
     */
    data: XOR<ChatMessageCreateInput, ChatMessageUncheckedCreateInput>
  }

  /**
   * ChatMessage createMany
   */
  export type ChatMessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ChatMessages.
     */
    data: ChatMessageCreateManyInput | ChatMessageCreateManyInput[]
  }

  /**
   * ChatMessage createManyAndReturn
   */
  export type ChatMessageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * The data used to create many ChatMessages.
     */
    data: ChatMessageCreateManyInput | ChatMessageCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChatMessage update
   */
  export type ChatMessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * The data needed to update a ChatMessage.
     */
    data: XOR<ChatMessageUpdateInput, ChatMessageUncheckedUpdateInput>
    /**
     * Choose, which ChatMessage to update.
     */
    where: ChatMessageWhereUniqueInput
  }

  /**
   * ChatMessage updateMany
   */
  export type ChatMessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ChatMessages.
     */
    data: XOR<ChatMessageUpdateManyMutationInput, ChatMessageUncheckedUpdateManyInput>
    /**
     * Filter which ChatMessages to update
     */
    where?: ChatMessageWhereInput
    /**
     * Limit how many ChatMessages to update.
     */
    limit?: number
  }

  /**
   * ChatMessage updateManyAndReturn
   */
  export type ChatMessageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * The data used to update ChatMessages.
     */
    data: XOR<ChatMessageUpdateManyMutationInput, ChatMessageUncheckedUpdateManyInput>
    /**
     * Filter which ChatMessages to update
     */
    where?: ChatMessageWhereInput
    /**
     * Limit how many ChatMessages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChatMessage upsert
   */
  export type ChatMessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * The filter to search for the ChatMessage to update in case it exists.
     */
    where: ChatMessageWhereUniqueInput
    /**
     * In case the ChatMessage found by the `where` argument doesn't exist, create a new ChatMessage with this data.
     */
    create: XOR<ChatMessageCreateInput, ChatMessageUncheckedCreateInput>
    /**
     * In case the ChatMessage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChatMessageUpdateInput, ChatMessageUncheckedUpdateInput>
  }

  /**
   * ChatMessage delete
   */
  export type ChatMessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter which ChatMessage to delete.
     */
    where: ChatMessageWhereUniqueInput
  }

  /**
   * ChatMessage deleteMany
   */
  export type ChatMessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatMessages to delete
     */
    where?: ChatMessageWhereInput
    /**
     * Limit how many ChatMessages to delete.
     */
    limit?: number
  }

  /**
   * ChatMessage without action
   */
  export type ChatMessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
  }


  /**
   * Model Friendship
   */

  export type AggregateFriendship = {
    _count: FriendshipCountAggregateOutputType | null
    _avg: FriendshipAvgAggregateOutputType | null
    _sum: FriendshipSumAggregateOutputType | null
    _min: FriendshipMinAggregateOutputType | null
    _max: FriendshipMaxAggregateOutputType | null
  }

  export type FriendshipAvgAggregateOutputType = {
    id: number | null
    idTo: number | null
    idFromId: number | null
  }

  export type FriendshipSumAggregateOutputType = {
    id: number | null
    idTo: number | null
    idFromId: number | null
  }

  export type FriendshipMinAggregateOutputType = {
    id: number | null
    idTo: number | null
    idFromId: number | null
    accepted: boolean | null
  }

  export type FriendshipMaxAggregateOutputType = {
    id: number | null
    idTo: number | null
    idFromId: number | null
    accepted: boolean | null
  }

  export type FriendshipCountAggregateOutputType = {
    id: number
    idTo: number
    idFromId: number
    accepted: number
    _all: number
  }


  export type FriendshipAvgAggregateInputType = {
    id?: true
    idTo?: true
    idFromId?: true
  }

  export type FriendshipSumAggregateInputType = {
    id?: true
    idTo?: true
    idFromId?: true
  }

  export type FriendshipMinAggregateInputType = {
    id?: true
    idTo?: true
    idFromId?: true
    accepted?: true
  }

  export type FriendshipMaxAggregateInputType = {
    id?: true
    idTo?: true
    idFromId?: true
    accepted?: true
  }

  export type FriendshipCountAggregateInputType = {
    id?: true
    idTo?: true
    idFromId?: true
    accepted?: true
    _all?: true
  }

  export type FriendshipAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Friendship to aggregate.
     */
    where?: FriendshipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Friendships to fetch.
     */
    orderBy?: FriendshipOrderByWithRelationInput | FriendshipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FriendshipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Friendships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Friendships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Friendships
    **/
    _count?: true | FriendshipCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FriendshipAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FriendshipSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FriendshipMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FriendshipMaxAggregateInputType
  }

  export type GetFriendshipAggregateType<T extends FriendshipAggregateArgs> = {
        [P in keyof T & keyof AggregateFriendship]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFriendship[P]>
      : GetScalarType<T[P], AggregateFriendship[P]>
  }




  export type FriendshipGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FriendshipWhereInput
    orderBy?: FriendshipOrderByWithAggregationInput | FriendshipOrderByWithAggregationInput[]
    by: FriendshipScalarFieldEnum[] | FriendshipScalarFieldEnum
    having?: FriendshipScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FriendshipCountAggregateInputType | true
    _avg?: FriendshipAvgAggregateInputType
    _sum?: FriendshipSumAggregateInputType
    _min?: FriendshipMinAggregateInputType
    _max?: FriendshipMaxAggregateInputType
  }

  export type FriendshipGroupByOutputType = {
    id: number
    idTo: number
    idFromId: number
    accepted: boolean
    _count: FriendshipCountAggregateOutputType | null
    _avg: FriendshipAvgAggregateOutputType | null
    _sum: FriendshipSumAggregateOutputType | null
    _min: FriendshipMinAggregateOutputType | null
    _max: FriendshipMaxAggregateOutputType | null
  }

  type GetFriendshipGroupByPayload<T extends FriendshipGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FriendshipGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FriendshipGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FriendshipGroupByOutputType[P]>
            : GetScalarType<T[P], FriendshipGroupByOutputType[P]>
        }
      >
    >


  export type FriendshipSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    idTo?: boolean
    idFromId?: boolean
    accepted?: boolean
    profile1?: boolean | ProfileDefaultArgs<ExtArgs>
    profile2?: boolean | ProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["friendship"]>

  export type FriendshipSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    idTo?: boolean
    idFromId?: boolean
    accepted?: boolean
    profile1?: boolean | ProfileDefaultArgs<ExtArgs>
    profile2?: boolean | ProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["friendship"]>

  export type FriendshipSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    idTo?: boolean
    idFromId?: boolean
    accepted?: boolean
    profile1?: boolean | ProfileDefaultArgs<ExtArgs>
    profile2?: boolean | ProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["friendship"]>

  export type FriendshipSelectScalar = {
    id?: boolean
    idTo?: boolean
    idFromId?: boolean
    accepted?: boolean
  }

  export type FriendshipOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "idTo" | "idFromId" | "accepted", ExtArgs["result"]["friendship"]>
  export type FriendshipInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile1?: boolean | ProfileDefaultArgs<ExtArgs>
    profile2?: boolean | ProfileDefaultArgs<ExtArgs>
  }
  export type FriendshipIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile1?: boolean | ProfileDefaultArgs<ExtArgs>
    profile2?: boolean | ProfileDefaultArgs<ExtArgs>
  }
  export type FriendshipIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile1?: boolean | ProfileDefaultArgs<ExtArgs>
    profile2?: boolean | ProfileDefaultArgs<ExtArgs>
  }

  export type $FriendshipPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Friendship"
    objects: {
      profile1: Prisma.$ProfilePayload<ExtArgs>
      profile2: Prisma.$ProfilePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      idTo: number
      idFromId: number
      accepted: boolean
    }, ExtArgs["result"]["friendship"]>
    composites: {}
  }

  type FriendshipGetPayload<S extends boolean | null | undefined | FriendshipDefaultArgs> = $Result.GetResult<Prisma.$FriendshipPayload, S>

  type FriendshipCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FriendshipFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FriendshipCountAggregateInputType | true
    }

  export interface FriendshipDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Friendship'], meta: { name: 'Friendship' } }
    /**
     * Find zero or one Friendship that matches the filter.
     * @param {FriendshipFindUniqueArgs} args - Arguments to find a Friendship
     * @example
     * // Get one Friendship
     * const friendship = await prisma.friendship.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FriendshipFindUniqueArgs>(args: SelectSubset<T, FriendshipFindUniqueArgs<ExtArgs>>): Prisma__FriendshipClient<$Result.GetResult<Prisma.$FriendshipPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Friendship that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FriendshipFindUniqueOrThrowArgs} args - Arguments to find a Friendship
     * @example
     * // Get one Friendship
     * const friendship = await prisma.friendship.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FriendshipFindUniqueOrThrowArgs>(args: SelectSubset<T, FriendshipFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FriendshipClient<$Result.GetResult<Prisma.$FriendshipPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Friendship that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendshipFindFirstArgs} args - Arguments to find a Friendship
     * @example
     * // Get one Friendship
     * const friendship = await prisma.friendship.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FriendshipFindFirstArgs>(args?: SelectSubset<T, FriendshipFindFirstArgs<ExtArgs>>): Prisma__FriendshipClient<$Result.GetResult<Prisma.$FriendshipPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Friendship that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendshipFindFirstOrThrowArgs} args - Arguments to find a Friendship
     * @example
     * // Get one Friendship
     * const friendship = await prisma.friendship.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FriendshipFindFirstOrThrowArgs>(args?: SelectSubset<T, FriendshipFindFirstOrThrowArgs<ExtArgs>>): Prisma__FriendshipClient<$Result.GetResult<Prisma.$FriendshipPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Friendships that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendshipFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Friendships
     * const friendships = await prisma.friendship.findMany()
     * 
     * // Get first 10 Friendships
     * const friendships = await prisma.friendship.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const friendshipWithIdOnly = await prisma.friendship.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FriendshipFindManyArgs>(args?: SelectSubset<T, FriendshipFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FriendshipPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Friendship.
     * @param {FriendshipCreateArgs} args - Arguments to create a Friendship.
     * @example
     * // Create one Friendship
     * const Friendship = await prisma.friendship.create({
     *   data: {
     *     // ... data to create a Friendship
     *   }
     * })
     * 
     */
    create<T extends FriendshipCreateArgs>(args: SelectSubset<T, FriendshipCreateArgs<ExtArgs>>): Prisma__FriendshipClient<$Result.GetResult<Prisma.$FriendshipPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Friendships.
     * @param {FriendshipCreateManyArgs} args - Arguments to create many Friendships.
     * @example
     * // Create many Friendships
     * const friendship = await prisma.friendship.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FriendshipCreateManyArgs>(args?: SelectSubset<T, FriendshipCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Friendships and returns the data saved in the database.
     * @param {FriendshipCreateManyAndReturnArgs} args - Arguments to create many Friendships.
     * @example
     * // Create many Friendships
     * const friendship = await prisma.friendship.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Friendships and only return the `id`
     * const friendshipWithIdOnly = await prisma.friendship.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FriendshipCreateManyAndReturnArgs>(args?: SelectSubset<T, FriendshipCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FriendshipPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Friendship.
     * @param {FriendshipDeleteArgs} args - Arguments to delete one Friendship.
     * @example
     * // Delete one Friendship
     * const Friendship = await prisma.friendship.delete({
     *   where: {
     *     // ... filter to delete one Friendship
     *   }
     * })
     * 
     */
    delete<T extends FriendshipDeleteArgs>(args: SelectSubset<T, FriendshipDeleteArgs<ExtArgs>>): Prisma__FriendshipClient<$Result.GetResult<Prisma.$FriendshipPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Friendship.
     * @param {FriendshipUpdateArgs} args - Arguments to update one Friendship.
     * @example
     * // Update one Friendship
     * const friendship = await prisma.friendship.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FriendshipUpdateArgs>(args: SelectSubset<T, FriendshipUpdateArgs<ExtArgs>>): Prisma__FriendshipClient<$Result.GetResult<Prisma.$FriendshipPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Friendships.
     * @param {FriendshipDeleteManyArgs} args - Arguments to filter Friendships to delete.
     * @example
     * // Delete a few Friendships
     * const { count } = await prisma.friendship.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FriendshipDeleteManyArgs>(args?: SelectSubset<T, FriendshipDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Friendships.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendshipUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Friendships
     * const friendship = await prisma.friendship.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FriendshipUpdateManyArgs>(args: SelectSubset<T, FriendshipUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Friendships and returns the data updated in the database.
     * @param {FriendshipUpdateManyAndReturnArgs} args - Arguments to update many Friendships.
     * @example
     * // Update many Friendships
     * const friendship = await prisma.friendship.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Friendships and only return the `id`
     * const friendshipWithIdOnly = await prisma.friendship.updateManyAndReturn({
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
    updateManyAndReturn<T extends FriendshipUpdateManyAndReturnArgs>(args: SelectSubset<T, FriendshipUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FriendshipPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Friendship.
     * @param {FriendshipUpsertArgs} args - Arguments to update or create a Friendship.
     * @example
     * // Update or create a Friendship
     * const friendship = await prisma.friendship.upsert({
     *   create: {
     *     // ... data to create a Friendship
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Friendship we want to update
     *   }
     * })
     */
    upsert<T extends FriendshipUpsertArgs>(args: SelectSubset<T, FriendshipUpsertArgs<ExtArgs>>): Prisma__FriendshipClient<$Result.GetResult<Prisma.$FriendshipPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Friendships.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendshipCountArgs} args - Arguments to filter Friendships to count.
     * @example
     * // Count the number of Friendships
     * const count = await prisma.friendship.count({
     *   where: {
     *     // ... the filter for the Friendships we want to count
     *   }
     * })
    **/
    count<T extends FriendshipCountArgs>(
      args?: Subset<T, FriendshipCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FriendshipCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Friendship.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendshipAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FriendshipAggregateArgs>(args: Subset<T, FriendshipAggregateArgs>): Prisma.PrismaPromise<GetFriendshipAggregateType<T>>

    /**
     * Group by Friendship.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendshipGroupByArgs} args - Group by arguments.
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
      T extends FriendshipGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FriendshipGroupByArgs['orderBy'] }
        : { orderBy?: FriendshipGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FriendshipGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFriendshipGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Friendship model
   */
  readonly fields: FriendshipFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Friendship.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FriendshipClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    profile1<T extends ProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProfileDefaultArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    profile2<T extends ProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProfileDefaultArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Friendship model
   */
  interface FriendshipFieldRefs {
    readonly id: FieldRef<"Friendship", 'Int'>
    readonly idTo: FieldRef<"Friendship", 'Int'>
    readonly idFromId: FieldRef<"Friendship", 'Int'>
    readonly accepted: FieldRef<"Friendship", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Friendship findUnique
   */
  export type FriendshipFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friendship
     */
    select?: FriendshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friendship
     */
    omit?: FriendshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendshipInclude<ExtArgs> | null
    /**
     * Filter, which Friendship to fetch.
     */
    where: FriendshipWhereUniqueInput
  }

  /**
   * Friendship findUniqueOrThrow
   */
  export type FriendshipFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friendship
     */
    select?: FriendshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friendship
     */
    omit?: FriendshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendshipInclude<ExtArgs> | null
    /**
     * Filter, which Friendship to fetch.
     */
    where: FriendshipWhereUniqueInput
  }

  /**
   * Friendship findFirst
   */
  export type FriendshipFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friendship
     */
    select?: FriendshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friendship
     */
    omit?: FriendshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendshipInclude<ExtArgs> | null
    /**
     * Filter, which Friendship to fetch.
     */
    where?: FriendshipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Friendships to fetch.
     */
    orderBy?: FriendshipOrderByWithRelationInput | FriendshipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Friendships.
     */
    cursor?: FriendshipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Friendships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Friendships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Friendships.
     */
    distinct?: FriendshipScalarFieldEnum | FriendshipScalarFieldEnum[]
  }

  /**
   * Friendship findFirstOrThrow
   */
  export type FriendshipFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friendship
     */
    select?: FriendshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friendship
     */
    omit?: FriendshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendshipInclude<ExtArgs> | null
    /**
     * Filter, which Friendship to fetch.
     */
    where?: FriendshipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Friendships to fetch.
     */
    orderBy?: FriendshipOrderByWithRelationInput | FriendshipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Friendships.
     */
    cursor?: FriendshipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Friendships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Friendships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Friendships.
     */
    distinct?: FriendshipScalarFieldEnum | FriendshipScalarFieldEnum[]
  }

  /**
   * Friendship findMany
   */
  export type FriendshipFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friendship
     */
    select?: FriendshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friendship
     */
    omit?: FriendshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendshipInclude<ExtArgs> | null
    /**
     * Filter, which Friendships to fetch.
     */
    where?: FriendshipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Friendships to fetch.
     */
    orderBy?: FriendshipOrderByWithRelationInput | FriendshipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Friendships.
     */
    cursor?: FriendshipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Friendships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Friendships.
     */
    skip?: number
    distinct?: FriendshipScalarFieldEnum | FriendshipScalarFieldEnum[]
  }

  /**
   * Friendship create
   */
  export type FriendshipCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friendship
     */
    select?: FriendshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friendship
     */
    omit?: FriendshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendshipInclude<ExtArgs> | null
    /**
     * The data needed to create a Friendship.
     */
    data: XOR<FriendshipCreateInput, FriendshipUncheckedCreateInput>
  }

  /**
   * Friendship createMany
   */
  export type FriendshipCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Friendships.
     */
    data: FriendshipCreateManyInput | FriendshipCreateManyInput[]
  }

  /**
   * Friendship createManyAndReturn
   */
  export type FriendshipCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friendship
     */
    select?: FriendshipSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Friendship
     */
    omit?: FriendshipOmit<ExtArgs> | null
    /**
     * The data used to create many Friendships.
     */
    data: FriendshipCreateManyInput | FriendshipCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendshipIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Friendship update
   */
  export type FriendshipUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friendship
     */
    select?: FriendshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friendship
     */
    omit?: FriendshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendshipInclude<ExtArgs> | null
    /**
     * The data needed to update a Friendship.
     */
    data: XOR<FriendshipUpdateInput, FriendshipUncheckedUpdateInput>
    /**
     * Choose, which Friendship to update.
     */
    where: FriendshipWhereUniqueInput
  }

  /**
   * Friendship updateMany
   */
  export type FriendshipUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Friendships.
     */
    data: XOR<FriendshipUpdateManyMutationInput, FriendshipUncheckedUpdateManyInput>
    /**
     * Filter which Friendships to update
     */
    where?: FriendshipWhereInput
    /**
     * Limit how many Friendships to update.
     */
    limit?: number
  }

  /**
   * Friendship updateManyAndReturn
   */
  export type FriendshipUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friendship
     */
    select?: FriendshipSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Friendship
     */
    omit?: FriendshipOmit<ExtArgs> | null
    /**
     * The data used to update Friendships.
     */
    data: XOR<FriendshipUpdateManyMutationInput, FriendshipUncheckedUpdateManyInput>
    /**
     * Filter which Friendships to update
     */
    where?: FriendshipWhereInput
    /**
     * Limit how many Friendships to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendshipIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Friendship upsert
   */
  export type FriendshipUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friendship
     */
    select?: FriendshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friendship
     */
    omit?: FriendshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendshipInclude<ExtArgs> | null
    /**
     * The filter to search for the Friendship to update in case it exists.
     */
    where: FriendshipWhereUniqueInput
    /**
     * In case the Friendship found by the `where` argument doesn't exist, create a new Friendship with this data.
     */
    create: XOR<FriendshipCreateInput, FriendshipUncheckedCreateInput>
    /**
     * In case the Friendship was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FriendshipUpdateInput, FriendshipUncheckedUpdateInput>
  }

  /**
   * Friendship delete
   */
  export type FriendshipDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friendship
     */
    select?: FriendshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friendship
     */
    omit?: FriendshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendshipInclude<ExtArgs> | null
    /**
     * Filter which Friendship to delete.
     */
    where: FriendshipWhereUniqueInput
  }

  /**
   * Friendship deleteMany
   */
  export type FriendshipDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Friendships to delete
     */
    where?: FriendshipWhereInput
    /**
     * Limit how many Friendships to delete.
     */
    limit?: number
  }

  /**
   * Friendship without action
   */
  export type FriendshipDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friendship
     */
    select?: FriendshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friendship
     */
    omit?: FriendshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendshipInclude<ExtArgs> | null
  }


  /**
   * Model Image
   */

  export type AggregateImage = {
    _count: ImageCountAggregateOutputType | null
    _avg: ImageAvgAggregateOutputType | null
    _sum: ImageSumAggregateOutputType | null
    _min: ImageMinAggregateOutputType | null
    _max: ImageMaxAggregateOutputType | null
  }

  export type ImageAvgAggregateOutputType = {
    id: number | null
  }

  export type ImageSumAggregateOutputType = {
    id: number | null
  }

  export type ImageMinAggregateOutputType = {
    id: number | null
    url: string | null
    uploadedAt: Date | null
  }

  export type ImageMaxAggregateOutputType = {
    id: number | null
    url: string | null
    uploadedAt: Date | null
  }

  export type ImageCountAggregateOutputType = {
    id: number
    url: number
    uploadedAt: number
    _all: number
  }


  export type ImageAvgAggregateInputType = {
    id?: true
  }

  export type ImageSumAggregateInputType = {
    id?: true
  }

  export type ImageMinAggregateInputType = {
    id?: true
    url?: true
    uploadedAt?: true
  }

  export type ImageMaxAggregateInputType = {
    id?: true
    url?: true
    uploadedAt?: true
  }

  export type ImageCountAggregateInputType = {
    id?: true
    url?: true
    uploadedAt?: true
    _all?: true
  }

  export type ImageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Image to aggregate.
     */
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Images
    **/
    _count?: true | ImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ImageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ImageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ImageMaxAggregateInputType
  }

  export type GetImageAggregateType<T extends ImageAggregateArgs> = {
        [P in keyof T & keyof AggregateImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateImage[P]>
      : GetScalarType<T[P], AggregateImage[P]>
  }




  export type ImageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImageWhereInput
    orderBy?: ImageOrderByWithAggregationInput | ImageOrderByWithAggregationInput[]
    by: ImageScalarFieldEnum[] | ImageScalarFieldEnum
    having?: ImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ImageCountAggregateInputType | true
    _avg?: ImageAvgAggregateInputType
    _sum?: ImageSumAggregateInputType
    _min?: ImageMinAggregateInputType
    _max?: ImageMaxAggregateInputType
  }

  export type ImageGroupByOutputType = {
    id: number
    url: string
    uploadedAt: Date
    _count: ImageCountAggregateOutputType | null
    _avg: ImageAvgAggregateOutputType | null
    _sum: ImageSumAggregateOutputType | null
    _min: ImageMinAggregateOutputType | null
    _max: ImageMaxAggregateOutputType | null
  }

  type GetImageGroupByPayload<T extends ImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ImageGroupByOutputType[P]>
            : GetScalarType<T[P], ImageGroupByOutputType[P]>
        }
      >
    >


  export type ImageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    uploadedAt?: boolean
    UserPost?: boolean | Image$UserPostArgs<ExtArgs>
    Album?: boolean | Image$AlbumArgs<ExtArgs>
    _count?: boolean | ImageCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["image"]>

  export type ImageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    uploadedAt?: boolean
  }, ExtArgs["result"]["image"]>

  export type ImageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    uploadedAt?: boolean
  }, ExtArgs["result"]["image"]>

  export type ImageSelectScalar = {
    id?: boolean
    url?: boolean
    uploadedAt?: boolean
  }

  export type ImageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "url" | "uploadedAt", ExtArgs["result"]["image"]>
  export type ImageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    UserPost?: boolean | Image$UserPostArgs<ExtArgs>
    Album?: boolean | Image$AlbumArgs<ExtArgs>
    _count?: boolean | ImageCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ImageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ImageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ImagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Image"
    objects: {
      UserPost: Prisma.$UserPostPayload<ExtArgs>[]
      Album: Prisma.$AlbumPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      url: string
      uploadedAt: Date
    }, ExtArgs["result"]["image"]>
    composites: {}
  }

  type ImageGetPayload<S extends boolean | null | undefined | ImageDefaultArgs> = $Result.GetResult<Prisma.$ImagePayload, S>

  type ImageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ImageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ImageCountAggregateInputType | true
    }

  export interface ImageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Image'], meta: { name: 'Image' } }
    /**
     * Find zero or one Image that matches the filter.
     * @param {ImageFindUniqueArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ImageFindUniqueArgs>(args: SelectSubset<T, ImageFindUniqueArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Image that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ImageFindUniqueOrThrowArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ImageFindUniqueOrThrowArgs>(args: SelectSubset<T, ImageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Image that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageFindFirstArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ImageFindFirstArgs>(args?: SelectSubset<T, ImageFindFirstArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Image that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageFindFirstOrThrowArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ImageFindFirstOrThrowArgs>(args?: SelectSubset<T, ImageFindFirstOrThrowArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Images that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Images
     * const images = await prisma.image.findMany()
     * 
     * // Get first 10 Images
     * const images = await prisma.image.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const imageWithIdOnly = await prisma.image.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ImageFindManyArgs>(args?: SelectSubset<T, ImageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Image.
     * @param {ImageCreateArgs} args - Arguments to create a Image.
     * @example
     * // Create one Image
     * const Image = await prisma.image.create({
     *   data: {
     *     // ... data to create a Image
     *   }
     * })
     * 
     */
    create<T extends ImageCreateArgs>(args: SelectSubset<T, ImageCreateArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Images.
     * @param {ImageCreateManyArgs} args - Arguments to create many Images.
     * @example
     * // Create many Images
     * const image = await prisma.image.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ImageCreateManyArgs>(args?: SelectSubset<T, ImageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Images and returns the data saved in the database.
     * @param {ImageCreateManyAndReturnArgs} args - Arguments to create many Images.
     * @example
     * // Create many Images
     * const image = await prisma.image.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Images and only return the `id`
     * const imageWithIdOnly = await prisma.image.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ImageCreateManyAndReturnArgs>(args?: SelectSubset<T, ImageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Image.
     * @param {ImageDeleteArgs} args - Arguments to delete one Image.
     * @example
     * // Delete one Image
     * const Image = await prisma.image.delete({
     *   where: {
     *     // ... filter to delete one Image
     *   }
     * })
     * 
     */
    delete<T extends ImageDeleteArgs>(args: SelectSubset<T, ImageDeleteArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Image.
     * @param {ImageUpdateArgs} args - Arguments to update one Image.
     * @example
     * // Update one Image
     * const image = await prisma.image.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ImageUpdateArgs>(args: SelectSubset<T, ImageUpdateArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Images.
     * @param {ImageDeleteManyArgs} args - Arguments to filter Images to delete.
     * @example
     * // Delete a few Images
     * const { count } = await prisma.image.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ImageDeleteManyArgs>(args?: SelectSubset<T, ImageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Images
     * const image = await prisma.image.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ImageUpdateManyArgs>(args: SelectSubset<T, ImageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Images and returns the data updated in the database.
     * @param {ImageUpdateManyAndReturnArgs} args - Arguments to update many Images.
     * @example
     * // Update many Images
     * const image = await prisma.image.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Images and only return the `id`
     * const imageWithIdOnly = await prisma.image.updateManyAndReturn({
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
    updateManyAndReturn<T extends ImageUpdateManyAndReturnArgs>(args: SelectSubset<T, ImageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Image.
     * @param {ImageUpsertArgs} args - Arguments to update or create a Image.
     * @example
     * // Update or create a Image
     * const image = await prisma.image.upsert({
     *   create: {
     *     // ... data to create a Image
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Image we want to update
     *   }
     * })
     */
    upsert<T extends ImageUpsertArgs>(args: SelectSubset<T, ImageUpsertArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageCountArgs} args - Arguments to filter Images to count.
     * @example
     * // Count the number of Images
     * const count = await prisma.image.count({
     *   where: {
     *     // ... the filter for the Images we want to count
     *   }
     * })
    **/
    count<T extends ImageCountArgs>(
      args?: Subset<T, ImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Image.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ImageAggregateArgs>(args: Subset<T, ImageAggregateArgs>): Prisma.PrismaPromise<GetImageAggregateType<T>>

    /**
     * Group by Image.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageGroupByArgs} args - Group by arguments.
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
      T extends ImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ImageGroupByArgs['orderBy'] }
        : { orderBy?: ImageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Image model
   */
  readonly fields: ImageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Image.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ImageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    UserPost<T extends Image$UserPostArgs<ExtArgs> = {}>(args?: Subset<T, Image$UserPostArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Album<T extends Image$AlbumArgs<ExtArgs> = {}>(args?: Subset<T, Image$AlbumArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Image model
   */
  interface ImageFieldRefs {
    readonly id: FieldRef<"Image", 'Int'>
    readonly url: FieldRef<"Image", 'String'>
    readonly uploadedAt: FieldRef<"Image", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Image findUnique
   */
  export type ImageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Image to fetch.
     */
    where: ImageWhereUniqueInput
  }

  /**
   * Image findUniqueOrThrow
   */
  export type ImageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Image to fetch.
     */
    where: ImageWhereUniqueInput
  }

  /**
   * Image findFirst
   */
  export type ImageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Image to fetch.
     */
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Images.
     */
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Images.
     */
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }

  /**
   * Image findFirstOrThrow
   */
  export type ImageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Image to fetch.
     */
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Images.
     */
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Images.
     */
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }

  /**
   * Image findMany
   */
  export type ImageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Images to fetch.
     */
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Images.
     */
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }

  /**
   * Image create
   */
  export type ImageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * The data needed to create a Image.
     */
    data: XOR<ImageCreateInput, ImageUncheckedCreateInput>
  }

  /**
   * Image createMany
   */
  export type ImageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Images.
     */
    data: ImageCreateManyInput | ImageCreateManyInput[]
  }

  /**
   * Image createManyAndReturn
   */
  export type ImageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * The data used to create many Images.
     */
    data: ImageCreateManyInput | ImageCreateManyInput[]
  }

  /**
   * Image update
   */
  export type ImageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * The data needed to update a Image.
     */
    data: XOR<ImageUpdateInput, ImageUncheckedUpdateInput>
    /**
     * Choose, which Image to update.
     */
    where: ImageWhereUniqueInput
  }

  /**
   * Image updateMany
   */
  export type ImageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Images.
     */
    data: XOR<ImageUpdateManyMutationInput, ImageUncheckedUpdateManyInput>
    /**
     * Filter which Images to update
     */
    where?: ImageWhereInput
    /**
     * Limit how many Images to update.
     */
    limit?: number
  }

  /**
   * Image updateManyAndReturn
   */
  export type ImageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * The data used to update Images.
     */
    data: XOR<ImageUpdateManyMutationInput, ImageUncheckedUpdateManyInput>
    /**
     * Filter which Images to update
     */
    where?: ImageWhereInput
    /**
     * Limit how many Images to update.
     */
    limit?: number
  }

  /**
   * Image upsert
   */
  export type ImageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * The filter to search for the Image to update in case it exists.
     */
    where: ImageWhereUniqueInput
    /**
     * In case the Image found by the `where` argument doesn't exist, create a new Image with this data.
     */
    create: XOR<ImageCreateInput, ImageUncheckedCreateInput>
    /**
     * In case the Image was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ImageUpdateInput, ImageUncheckedUpdateInput>
  }

  /**
   * Image delete
   */
  export type ImageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter which Image to delete.
     */
    where: ImageWhereUniqueInput
  }

  /**
   * Image deleteMany
   */
  export type ImageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Images to delete
     */
    where?: ImageWhereInput
    /**
     * Limit how many Images to delete.
     */
    limit?: number
  }

  /**
   * Image.UserPost
   */
  export type Image$UserPostArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPost
     */
    select?: UserPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPost
     */
    omit?: UserPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPostInclude<ExtArgs> | null
    where?: UserPostWhereInput
    orderBy?: UserPostOrderByWithRelationInput | UserPostOrderByWithRelationInput[]
    cursor?: UserPostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserPostScalarFieldEnum | UserPostScalarFieldEnum[]
  }

  /**
   * Image.Album
   */
  export type Image$AlbumArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Album
     */
    omit?: AlbumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumInclude<ExtArgs> | null
    where?: AlbumWhereInput
    orderBy?: AlbumOrderByWithRelationInput | AlbumOrderByWithRelationInput[]
    cursor?: AlbumWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AlbumScalarFieldEnum | AlbumScalarFieldEnum[]
  }

  /**
   * Image without action
   */
  export type ImageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
  }


  /**
   * Model UserPost
   */

  export type AggregateUserPost = {
    _count: UserPostCountAggregateOutputType | null
    _avg: UserPostAvgAggregateOutputType | null
    _sum: UserPostSumAggregateOutputType | null
    _min: UserPostMinAggregateOutputType | null
    _max: UserPostMaxAggregateOutputType | null
  }

  export type UserPostAvgAggregateOutputType = {
    id: number | null
    authorId: number | null
    linkId: number | null
  }

  export type UserPostSumAggregateOutputType = {
    id: number | null
    authorId: number | null
    linkId: number | null
  }

  export type UserPostMinAggregateOutputType = {
    id: number | null
    title: string | null
    content: string | null
    authorId: number | null
    linkId: number | null
  }

  export type UserPostMaxAggregateOutputType = {
    id: number | null
    title: string | null
    content: string | null
    authorId: number | null
    linkId: number | null
  }

  export type UserPostCountAggregateOutputType = {
    id: number
    title: number
    content: number
    authorId: number
    linkId: number
    _all: number
  }


  export type UserPostAvgAggregateInputType = {
    id?: true
    authorId?: true
    linkId?: true
  }

  export type UserPostSumAggregateInputType = {
    id?: true
    authorId?: true
    linkId?: true
  }

  export type UserPostMinAggregateInputType = {
    id?: true
    title?: true
    content?: true
    authorId?: true
    linkId?: true
  }

  export type UserPostMaxAggregateInputType = {
    id?: true
    title?: true
    content?: true
    authorId?: true
    linkId?: true
  }

  export type UserPostCountAggregateInputType = {
    id?: true
    title?: true
    content?: true
    authorId?: true
    linkId?: true
    _all?: true
  }

  export type UserPostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserPost to aggregate.
     */
    where?: UserPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPosts to fetch.
     */
    orderBy?: UserPostOrderByWithRelationInput | UserPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserPosts
    **/
    _count?: true | UserPostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserPostAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserPostSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserPostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserPostMaxAggregateInputType
  }

  export type GetUserPostAggregateType<T extends UserPostAggregateArgs> = {
        [P in keyof T & keyof AggregateUserPost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserPost[P]>
      : GetScalarType<T[P], AggregateUserPost[P]>
  }




  export type UserPostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserPostWhereInput
    orderBy?: UserPostOrderByWithAggregationInput | UserPostOrderByWithAggregationInput[]
    by: UserPostScalarFieldEnum[] | UserPostScalarFieldEnum
    having?: UserPostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserPostCountAggregateInputType | true
    _avg?: UserPostAvgAggregateInputType
    _sum?: UserPostSumAggregateInputType
    _min?: UserPostMinAggregateInputType
    _max?: UserPostMaxAggregateInputType
  }

  export type UserPostGroupByOutputType = {
    id: number
    title: string
    content: string
    authorId: number
    linkId: number | null
    _count: UserPostCountAggregateOutputType | null
    _avg: UserPostAvgAggregateOutputType | null
    _sum: UserPostSumAggregateOutputType | null
    _min: UserPostMinAggregateOutputType | null
    _max: UserPostMaxAggregateOutputType | null
  }

  type GetUserPostGroupByPayload<T extends UserPostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserPostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserPostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserPostGroupByOutputType[P]>
            : GetScalarType<T[P], UserPostGroupByOutputType[P]>
        }
      >
    >


  export type UserPostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    authorId?: boolean
    linkId?: boolean
    tags?: boolean | UserPost$tagsArgs<ExtArgs>
    images?: boolean | UserPost$imagesArgs<ExtArgs>
    views?: boolean | UserPost$viewsArgs<ExtArgs>
    likes?: boolean | UserPost$likesArgs<ExtArgs>
    author?: boolean | ProfileDefaultArgs<ExtArgs>
    link?: boolean | UserPost$linkArgs<ExtArgs>
    _count?: boolean | UserPostCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userPost"]>

  export type UserPostSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    authorId?: boolean
    linkId?: boolean
    author?: boolean | ProfileDefaultArgs<ExtArgs>
    link?: boolean | UserPost$linkArgs<ExtArgs>
  }, ExtArgs["result"]["userPost"]>

  export type UserPostSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    authorId?: boolean
    linkId?: boolean
    author?: boolean | ProfileDefaultArgs<ExtArgs>
    link?: boolean | UserPost$linkArgs<ExtArgs>
  }, ExtArgs["result"]["userPost"]>

  export type UserPostSelectScalar = {
    id?: boolean
    title?: boolean
    content?: boolean
    authorId?: boolean
    linkId?: boolean
  }

  export type UserPostOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "content" | "authorId" | "linkId", ExtArgs["result"]["userPost"]>
  export type UserPostInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tags?: boolean | UserPost$tagsArgs<ExtArgs>
    images?: boolean | UserPost$imagesArgs<ExtArgs>
    views?: boolean | UserPost$viewsArgs<ExtArgs>
    likes?: boolean | UserPost$likesArgs<ExtArgs>
    author?: boolean | ProfileDefaultArgs<ExtArgs>
    link?: boolean | UserPost$linkArgs<ExtArgs>
    _count?: boolean | UserPostCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserPostIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | ProfileDefaultArgs<ExtArgs>
    link?: boolean | UserPost$linkArgs<ExtArgs>
  }
  export type UserPostIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | ProfileDefaultArgs<ExtArgs>
    link?: boolean | UserPost$linkArgs<ExtArgs>
  }

  export type $UserPostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserPost"
    objects: {
      tags: Prisma.$TagsPayload<ExtArgs>[]
      images: Prisma.$ImagePayload<ExtArgs>[]
      views: Prisma.$ProfilePayload<ExtArgs>[]
      likes: Prisma.$ProfilePayload<ExtArgs>[]
      author: Prisma.$ProfilePayload<ExtArgs>
      link: Prisma.$LinkPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      content: string
      authorId: number
      linkId: number | null
    }, ExtArgs["result"]["userPost"]>
    composites: {}
  }

  type UserPostGetPayload<S extends boolean | null | undefined | UserPostDefaultArgs> = $Result.GetResult<Prisma.$UserPostPayload, S>

  type UserPostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserPostFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserPostCountAggregateInputType | true
    }

  export interface UserPostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserPost'], meta: { name: 'UserPost' } }
    /**
     * Find zero or one UserPost that matches the filter.
     * @param {UserPostFindUniqueArgs} args - Arguments to find a UserPost
     * @example
     * // Get one UserPost
     * const userPost = await prisma.userPost.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserPostFindUniqueArgs>(args: SelectSubset<T, UserPostFindUniqueArgs<ExtArgs>>): Prisma__UserPostClient<$Result.GetResult<Prisma.$UserPostPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserPost that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserPostFindUniqueOrThrowArgs} args - Arguments to find a UserPost
     * @example
     * // Get one UserPost
     * const userPost = await prisma.userPost.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserPostFindUniqueOrThrowArgs>(args: SelectSubset<T, UserPostFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserPostClient<$Result.GetResult<Prisma.$UserPostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserPost that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPostFindFirstArgs} args - Arguments to find a UserPost
     * @example
     * // Get one UserPost
     * const userPost = await prisma.userPost.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserPostFindFirstArgs>(args?: SelectSubset<T, UserPostFindFirstArgs<ExtArgs>>): Prisma__UserPostClient<$Result.GetResult<Prisma.$UserPostPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserPost that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPostFindFirstOrThrowArgs} args - Arguments to find a UserPost
     * @example
     * // Get one UserPost
     * const userPost = await prisma.userPost.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserPostFindFirstOrThrowArgs>(args?: SelectSubset<T, UserPostFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserPostClient<$Result.GetResult<Prisma.$UserPostPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserPosts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserPosts
     * const userPosts = await prisma.userPost.findMany()
     * 
     * // Get first 10 UserPosts
     * const userPosts = await prisma.userPost.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userPostWithIdOnly = await prisma.userPost.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserPostFindManyArgs>(args?: SelectSubset<T, UserPostFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserPost.
     * @param {UserPostCreateArgs} args - Arguments to create a UserPost.
     * @example
     * // Create one UserPost
     * const UserPost = await prisma.userPost.create({
     *   data: {
     *     // ... data to create a UserPost
     *   }
     * })
     * 
     */
    create<T extends UserPostCreateArgs>(args: SelectSubset<T, UserPostCreateArgs<ExtArgs>>): Prisma__UserPostClient<$Result.GetResult<Prisma.$UserPostPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserPosts.
     * @param {UserPostCreateManyArgs} args - Arguments to create many UserPosts.
     * @example
     * // Create many UserPosts
     * const userPost = await prisma.userPost.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserPostCreateManyArgs>(args?: SelectSubset<T, UserPostCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserPosts and returns the data saved in the database.
     * @param {UserPostCreateManyAndReturnArgs} args - Arguments to create many UserPosts.
     * @example
     * // Create many UserPosts
     * const userPost = await prisma.userPost.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserPosts and only return the `id`
     * const userPostWithIdOnly = await prisma.userPost.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserPostCreateManyAndReturnArgs>(args?: SelectSubset<T, UserPostCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPostPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserPost.
     * @param {UserPostDeleteArgs} args - Arguments to delete one UserPost.
     * @example
     * // Delete one UserPost
     * const UserPost = await prisma.userPost.delete({
     *   where: {
     *     // ... filter to delete one UserPost
     *   }
     * })
     * 
     */
    delete<T extends UserPostDeleteArgs>(args: SelectSubset<T, UserPostDeleteArgs<ExtArgs>>): Prisma__UserPostClient<$Result.GetResult<Prisma.$UserPostPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserPost.
     * @param {UserPostUpdateArgs} args - Arguments to update one UserPost.
     * @example
     * // Update one UserPost
     * const userPost = await prisma.userPost.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserPostUpdateArgs>(args: SelectSubset<T, UserPostUpdateArgs<ExtArgs>>): Prisma__UserPostClient<$Result.GetResult<Prisma.$UserPostPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserPosts.
     * @param {UserPostDeleteManyArgs} args - Arguments to filter UserPosts to delete.
     * @example
     * // Delete a few UserPosts
     * const { count } = await prisma.userPost.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserPostDeleteManyArgs>(args?: SelectSubset<T, UserPostDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserPosts
     * const userPost = await prisma.userPost.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserPostUpdateManyArgs>(args: SelectSubset<T, UserPostUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserPosts and returns the data updated in the database.
     * @param {UserPostUpdateManyAndReturnArgs} args - Arguments to update many UserPosts.
     * @example
     * // Update many UserPosts
     * const userPost = await prisma.userPost.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserPosts and only return the `id`
     * const userPostWithIdOnly = await prisma.userPost.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserPostUpdateManyAndReturnArgs>(args: SelectSubset<T, UserPostUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPostPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserPost.
     * @param {UserPostUpsertArgs} args - Arguments to update or create a UserPost.
     * @example
     * // Update or create a UserPost
     * const userPost = await prisma.userPost.upsert({
     *   create: {
     *     // ... data to create a UserPost
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserPost we want to update
     *   }
     * })
     */
    upsert<T extends UserPostUpsertArgs>(args: SelectSubset<T, UserPostUpsertArgs<ExtArgs>>): Prisma__UserPostClient<$Result.GetResult<Prisma.$UserPostPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPostCountArgs} args - Arguments to filter UserPosts to count.
     * @example
     * // Count the number of UserPosts
     * const count = await prisma.userPost.count({
     *   where: {
     *     // ... the filter for the UserPosts we want to count
     *   }
     * })
    **/
    count<T extends UserPostCountArgs>(
      args?: Subset<T, UserPostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserPostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserPost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserPostAggregateArgs>(args: Subset<T, UserPostAggregateArgs>): Prisma.PrismaPromise<GetUserPostAggregateType<T>>

    /**
     * Group by UserPost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPostGroupByArgs} args - Group by arguments.
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
      T extends UserPostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserPostGroupByArgs['orderBy'] }
        : { orderBy?: UserPostGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserPostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserPost model
   */
  readonly fields: UserPostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserPost.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserPostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tags<T extends UserPost$tagsArgs<ExtArgs> = {}>(args?: Subset<T, UserPost$tagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    images<T extends UserPost$imagesArgs<ExtArgs> = {}>(args?: Subset<T, UserPost$imagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    views<T extends UserPost$viewsArgs<ExtArgs> = {}>(args?: Subset<T, UserPost$viewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    likes<T extends UserPost$likesArgs<ExtArgs> = {}>(args?: Subset<T, UserPost$likesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    author<T extends ProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProfileDefaultArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    link<T extends UserPost$linkArgs<ExtArgs> = {}>(args?: Subset<T, UserPost$linkArgs<ExtArgs>>): Prisma__LinkClient<$Result.GetResult<Prisma.$LinkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UserPost model
   */
  interface UserPostFieldRefs {
    readonly id: FieldRef<"UserPost", 'Int'>
    readonly title: FieldRef<"UserPost", 'String'>
    readonly content: FieldRef<"UserPost", 'String'>
    readonly authorId: FieldRef<"UserPost", 'Int'>
    readonly linkId: FieldRef<"UserPost", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * UserPost findUnique
   */
  export type UserPostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPost
     */
    select?: UserPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPost
     */
    omit?: UserPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPostInclude<ExtArgs> | null
    /**
     * Filter, which UserPost to fetch.
     */
    where: UserPostWhereUniqueInput
  }

  /**
   * UserPost findUniqueOrThrow
   */
  export type UserPostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPost
     */
    select?: UserPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPost
     */
    omit?: UserPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPostInclude<ExtArgs> | null
    /**
     * Filter, which UserPost to fetch.
     */
    where: UserPostWhereUniqueInput
  }

  /**
   * UserPost findFirst
   */
  export type UserPostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPost
     */
    select?: UserPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPost
     */
    omit?: UserPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPostInclude<ExtArgs> | null
    /**
     * Filter, which UserPost to fetch.
     */
    where?: UserPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPosts to fetch.
     */
    orderBy?: UserPostOrderByWithRelationInput | UserPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserPosts.
     */
    cursor?: UserPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserPosts.
     */
    distinct?: UserPostScalarFieldEnum | UserPostScalarFieldEnum[]
  }

  /**
   * UserPost findFirstOrThrow
   */
  export type UserPostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPost
     */
    select?: UserPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPost
     */
    omit?: UserPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPostInclude<ExtArgs> | null
    /**
     * Filter, which UserPost to fetch.
     */
    where?: UserPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPosts to fetch.
     */
    orderBy?: UserPostOrderByWithRelationInput | UserPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserPosts.
     */
    cursor?: UserPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserPosts.
     */
    distinct?: UserPostScalarFieldEnum | UserPostScalarFieldEnum[]
  }

  /**
   * UserPost findMany
   */
  export type UserPostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPost
     */
    select?: UserPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPost
     */
    omit?: UserPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPostInclude<ExtArgs> | null
    /**
     * Filter, which UserPosts to fetch.
     */
    where?: UserPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPosts to fetch.
     */
    orderBy?: UserPostOrderByWithRelationInput | UserPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserPosts.
     */
    cursor?: UserPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPosts.
     */
    skip?: number
    distinct?: UserPostScalarFieldEnum | UserPostScalarFieldEnum[]
  }

  /**
   * UserPost create
   */
  export type UserPostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPost
     */
    select?: UserPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPost
     */
    omit?: UserPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPostInclude<ExtArgs> | null
    /**
     * The data needed to create a UserPost.
     */
    data: XOR<UserPostCreateInput, UserPostUncheckedCreateInput>
  }

  /**
   * UserPost createMany
   */
  export type UserPostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserPosts.
     */
    data: UserPostCreateManyInput | UserPostCreateManyInput[]
  }

  /**
   * UserPost createManyAndReturn
   */
  export type UserPostCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPost
     */
    select?: UserPostSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserPost
     */
    omit?: UserPostOmit<ExtArgs> | null
    /**
     * The data used to create many UserPosts.
     */
    data: UserPostCreateManyInput | UserPostCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPostIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserPost update
   */
  export type UserPostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPost
     */
    select?: UserPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPost
     */
    omit?: UserPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPostInclude<ExtArgs> | null
    /**
     * The data needed to update a UserPost.
     */
    data: XOR<UserPostUpdateInput, UserPostUncheckedUpdateInput>
    /**
     * Choose, which UserPost to update.
     */
    where: UserPostWhereUniqueInput
  }

  /**
   * UserPost updateMany
   */
  export type UserPostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserPosts.
     */
    data: XOR<UserPostUpdateManyMutationInput, UserPostUncheckedUpdateManyInput>
    /**
     * Filter which UserPosts to update
     */
    where?: UserPostWhereInput
    /**
     * Limit how many UserPosts to update.
     */
    limit?: number
  }

  /**
   * UserPost updateManyAndReturn
   */
  export type UserPostUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPost
     */
    select?: UserPostSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserPost
     */
    omit?: UserPostOmit<ExtArgs> | null
    /**
     * The data used to update UserPosts.
     */
    data: XOR<UserPostUpdateManyMutationInput, UserPostUncheckedUpdateManyInput>
    /**
     * Filter which UserPosts to update
     */
    where?: UserPostWhereInput
    /**
     * Limit how many UserPosts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPostIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserPost upsert
   */
  export type UserPostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPost
     */
    select?: UserPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPost
     */
    omit?: UserPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPostInclude<ExtArgs> | null
    /**
     * The filter to search for the UserPost to update in case it exists.
     */
    where: UserPostWhereUniqueInput
    /**
     * In case the UserPost found by the `where` argument doesn't exist, create a new UserPost with this data.
     */
    create: XOR<UserPostCreateInput, UserPostUncheckedCreateInput>
    /**
     * In case the UserPost was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserPostUpdateInput, UserPostUncheckedUpdateInput>
  }

  /**
   * UserPost delete
   */
  export type UserPostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPost
     */
    select?: UserPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPost
     */
    omit?: UserPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPostInclude<ExtArgs> | null
    /**
     * Filter which UserPost to delete.
     */
    where: UserPostWhereUniqueInput
  }

  /**
   * UserPost deleteMany
   */
  export type UserPostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserPosts to delete
     */
    where?: UserPostWhereInput
    /**
     * Limit how many UserPosts to delete.
     */
    limit?: number
  }

  /**
   * UserPost.tags
   */
  export type UserPost$tagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tags
     */
    select?: TagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tags
     */
    omit?: TagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagsInclude<ExtArgs> | null
    where?: TagsWhereInput
    orderBy?: TagsOrderByWithRelationInput | TagsOrderByWithRelationInput[]
    cursor?: TagsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TagsScalarFieldEnum | TagsScalarFieldEnum[]
  }

  /**
   * UserPost.images
   */
  export type UserPost$imagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    where?: ImageWhereInput
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    cursor?: ImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }

  /**
   * UserPost.views
   */
  export type UserPost$viewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    where?: ProfileWhereInput
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    cursor?: ProfileWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * UserPost.likes
   */
  export type UserPost$likesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    where?: ProfileWhereInput
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    cursor?: ProfileWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * UserPost.link
   */
  export type UserPost$linkArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Link
     */
    select?: LinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Link
     */
    omit?: LinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkInclude<ExtArgs> | null
    where?: LinkWhereInput
  }

  /**
   * UserPost without action
   */
  export type UserPostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPost
     */
    select?: UserPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPost
     */
    omit?: UserPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPostInclude<ExtArgs> | null
  }


  /**
   * Model Tags
   */

  export type AggregateTags = {
    _count: TagsCountAggregateOutputType | null
    _avg: TagsAvgAggregateOutputType | null
    _sum: TagsSumAggregateOutputType | null
    _min: TagsMinAggregateOutputType | null
    _max: TagsMaxAggregateOutputType | null
  }

  export type TagsAvgAggregateOutputType = {
    id: number | null
  }

  export type TagsSumAggregateOutputType = {
    id: number | null
  }

  export type TagsMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type TagsMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type TagsCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type TagsAvgAggregateInputType = {
    id?: true
  }

  export type TagsSumAggregateInputType = {
    id?: true
  }

  export type TagsMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type TagsMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type TagsCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type TagsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tags to aggregate.
     */
    where?: TagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagsOrderByWithRelationInput | TagsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tags
    **/
    _count?: true | TagsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TagsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TagsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TagsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TagsMaxAggregateInputType
  }

  export type GetTagsAggregateType<T extends TagsAggregateArgs> = {
        [P in keyof T & keyof AggregateTags]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTags[P]>
      : GetScalarType<T[P], AggregateTags[P]>
  }




  export type TagsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TagsWhereInput
    orderBy?: TagsOrderByWithAggregationInput | TagsOrderByWithAggregationInput[]
    by: TagsScalarFieldEnum[] | TagsScalarFieldEnum
    having?: TagsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TagsCountAggregateInputType | true
    _avg?: TagsAvgAggregateInputType
    _sum?: TagsSumAggregateInputType
    _min?: TagsMinAggregateInputType
    _max?: TagsMaxAggregateInputType
  }

  export type TagsGroupByOutputType = {
    id: number
    name: string
    _count: TagsCountAggregateOutputType | null
    _avg: TagsAvgAggregateOutputType | null
    _sum: TagsSumAggregateOutputType | null
    _min: TagsMinAggregateOutputType | null
    _max: TagsMaxAggregateOutputType | null
  }

  type GetTagsGroupByPayload<T extends TagsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TagsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TagsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TagsGroupByOutputType[P]>
            : GetScalarType<T[P], TagsGroupByOutputType[P]>
        }
      >
    >


  export type TagsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    UserPost?: boolean | Tags$UserPostArgs<ExtArgs>
    _count?: boolean | TagsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tags"]>

  export type TagsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["tags"]>

  export type TagsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["tags"]>

  export type TagsSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type TagsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["tags"]>
  export type TagsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    UserPost?: boolean | Tags$UserPostArgs<ExtArgs>
    _count?: boolean | TagsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TagsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TagsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TagsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tags"
    objects: {
      UserPost: Prisma.$UserPostPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["tags"]>
    composites: {}
  }

  type TagsGetPayload<S extends boolean | null | undefined | TagsDefaultArgs> = $Result.GetResult<Prisma.$TagsPayload, S>

  type TagsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TagsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TagsCountAggregateInputType | true
    }

  export interface TagsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tags'], meta: { name: 'Tags' } }
    /**
     * Find zero or one Tags that matches the filter.
     * @param {TagsFindUniqueArgs} args - Arguments to find a Tags
     * @example
     * // Get one Tags
     * const tags = await prisma.tags.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TagsFindUniqueArgs>(args: SelectSubset<T, TagsFindUniqueArgs<ExtArgs>>): Prisma__TagsClient<$Result.GetResult<Prisma.$TagsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tags that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TagsFindUniqueOrThrowArgs} args - Arguments to find a Tags
     * @example
     * // Get one Tags
     * const tags = await prisma.tags.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TagsFindUniqueOrThrowArgs>(args: SelectSubset<T, TagsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TagsClient<$Result.GetResult<Prisma.$TagsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagsFindFirstArgs} args - Arguments to find a Tags
     * @example
     * // Get one Tags
     * const tags = await prisma.tags.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TagsFindFirstArgs>(args?: SelectSubset<T, TagsFindFirstArgs<ExtArgs>>): Prisma__TagsClient<$Result.GetResult<Prisma.$TagsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tags that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagsFindFirstOrThrowArgs} args - Arguments to find a Tags
     * @example
     * // Get one Tags
     * const tags = await prisma.tags.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TagsFindFirstOrThrowArgs>(args?: SelectSubset<T, TagsFindFirstOrThrowArgs<ExtArgs>>): Prisma__TagsClient<$Result.GetResult<Prisma.$TagsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tags
     * const tags = await prisma.tags.findMany()
     * 
     * // Get first 10 Tags
     * const tags = await prisma.tags.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tagsWithIdOnly = await prisma.tags.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TagsFindManyArgs>(args?: SelectSubset<T, TagsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tags.
     * @param {TagsCreateArgs} args - Arguments to create a Tags.
     * @example
     * // Create one Tags
     * const Tags = await prisma.tags.create({
     *   data: {
     *     // ... data to create a Tags
     *   }
     * })
     * 
     */
    create<T extends TagsCreateArgs>(args: SelectSubset<T, TagsCreateArgs<ExtArgs>>): Prisma__TagsClient<$Result.GetResult<Prisma.$TagsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tags.
     * @param {TagsCreateManyArgs} args - Arguments to create many Tags.
     * @example
     * // Create many Tags
     * const tags = await prisma.tags.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TagsCreateManyArgs>(args?: SelectSubset<T, TagsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tags and returns the data saved in the database.
     * @param {TagsCreateManyAndReturnArgs} args - Arguments to create many Tags.
     * @example
     * // Create many Tags
     * const tags = await prisma.tags.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tags and only return the `id`
     * const tagsWithIdOnly = await prisma.tags.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TagsCreateManyAndReturnArgs>(args?: SelectSubset<T, TagsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tags.
     * @param {TagsDeleteArgs} args - Arguments to delete one Tags.
     * @example
     * // Delete one Tags
     * const Tags = await prisma.tags.delete({
     *   where: {
     *     // ... filter to delete one Tags
     *   }
     * })
     * 
     */
    delete<T extends TagsDeleteArgs>(args: SelectSubset<T, TagsDeleteArgs<ExtArgs>>): Prisma__TagsClient<$Result.GetResult<Prisma.$TagsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tags.
     * @param {TagsUpdateArgs} args - Arguments to update one Tags.
     * @example
     * // Update one Tags
     * const tags = await prisma.tags.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TagsUpdateArgs>(args: SelectSubset<T, TagsUpdateArgs<ExtArgs>>): Prisma__TagsClient<$Result.GetResult<Prisma.$TagsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tags.
     * @param {TagsDeleteManyArgs} args - Arguments to filter Tags to delete.
     * @example
     * // Delete a few Tags
     * const { count } = await prisma.tags.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TagsDeleteManyArgs>(args?: SelectSubset<T, TagsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tags
     * const tags = await prisma.tags.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TagsUpdateManyArgs>(args: SelectSubset<T, TagsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tags and returns the data updated in the database.
     * @param {TagsUpdateManyAndReturnArgs} args - Arguments to update many Tags.
     * @example
     * // Update many Tags
     * const tags = await prisma.tags.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tags and only return the `id`
     * const tagsWithIdOnly = await prisma.tags.updateManyAndReturn({
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
    updateManyAndReturn<T extends TagsUpdateManyAndReturnArgs>(args: SelectSubset<T, TagsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tags.
     * @param {TagsUpsertArgs} args - Arguments to update or create a Tags.
     * @example
     * // Update or create a Tags
     * const tags = await prisma.tags.upsert({
     *   create: {
     *     // ... data to create a Tags
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tags we want to update
     *   }
     * })
     */
    upsert<T extends TagsUpsertArgs>(args: SelectSubset<T, TagsUpsertArgs<ExtArgs>>): Prisma__TagsClient<$Result.GetResult<Prisma.$TagsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagsCountArgs} args - Arguments to filter Tags to count.
     * @example
     * // Count the number of Tags
     * const count = await prisma.tags.count({
     *   where: {
     *     // ... the filter for the Tags we want to count
     *   }
     * })
    **/
    count<T extends TagsCountArgs>(
      args?: Subset<T, TagsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TagsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TagsAggregateArgs>(args: Subset<T, TagsAggregateArgs>): Prisma.PrismaPromise<GetTagsAggregateType<T>>

    /**
     * Group by Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagsGroupByArgs} args - Group by arguments.
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
      T extends TagsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TagsGroupByArgs['orderBy'] }
        : { orderBy?: TagsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TagsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTagsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tags model
   */
  readonly fields: TagsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tags.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TagsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    UserPost<T extends Tags$UserPostArgs<ExtArgs> = {}>(args?: Subset<T, Tags$UserPostArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Tags model
   */
  interface TagsFieldRefs {
    readonly id: FieldRef<"Tags", 'Int'>
    readonly name: FieldRef<"Tags", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Tags findUnique
   */
  export type TagsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tags
     */
    select?: TagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tags
     */
    omit?: TagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagsInclude<ExtArgs> | null
    /**
     * Filter, which Tags to fetch.
     */
    where: TagsWhereUniqueInput
  }

  /**
   * Tags findUniqueOrThrow
   */
  export type TagsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tags
     */
    select?: TagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tags
     */
    omit?: TagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagsInclude<ExtArgs> | null
    /**
     * Filter, which Tags to fetch.
     */
    where: TagsWhereUniqueInput
  }

  /**
   * Tags findFirst
   */
  export type TagsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tags
     */
    select?: TagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tags
     */
    omit?: TagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagsInclude<ExtArgs> | null
    /**
     * Filter, which Tags to fetch.
     */
    where?: TagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagsOrderByWithRelationInput | TagsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tags.
     */
    cursor?: TagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tags.
     */
    distinct?: TagsScalarFieldEnum | TagsScalarFieldEnum[]
  }

  /**
   * Tags findFirstOrThrow
   */
  export type TagsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tags
     */
    select?: TagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tags
     */
    omit?: TagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagsInclude<ExtArgs> | null
    /**
     * Filter, which Tags to fetch.
     */
    where?: TagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagsOrderByWithRelationInput | TagsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tags.
     */
    cursor?: TagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tags.
     */
    distinct?: TagsScalarFieldEnum | TagsScalarFieldEnum[]
  }

  /**
   * Tags findMany
   */
  export type TagsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tags
     */
    select?: TagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tags
     */
    omit?: TagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagsInclude<ExtArgs> | null
    /**
     * Filter, which Tags to fetch.
     */
    where?: TagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagsOrderByWithRelationInput | TagsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tags.
     */
    cursor?: TagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    distinct?: TagsScalarFieldEnum | TagsScalarFieldEnum[]
  }

  /**
   * Tags create
   */
  export type TagsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tags
     */
    select?: TagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tags
     */
    omit?: TagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagsInclude<ExtArgs> | null
    /**
     * The data needed to create a Tags.
     */
    data: XOR<TagsCreateInput, TagsUncheckedCreateInput>
  }

  /**
   * Tags createMany
   */
  export type TagsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tags.
     */
    data: TagsCreateManyInput | TagsCreateManyInput[]
  }

  /**
   * Tags createManyAndReturn
   */
  export type TagsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tags
     */
    select?: TagsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tags
     */
    omit?: TagsOmit<ExtArgs> | null
    /**
     * The data used to create many Tags.
     */
    data: TagsCreateManyInput | TagsCreateManyInput[]
  }

  /**
   * Tags update
   */
  export type TagsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tags
     */
    select?: TagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tags
     */
    omit?: TagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagsInclude<ExtArgs> | null
    /**
     * The data needed to update a Tags.
     */
    data: XOR<TagsUpdateInput, TagsUncheckedUpdateInput>
    /**
     * Choose, which Tags to update.
     */
    where: TagsWhereUniqueInput
  }

  /**
   * Tags updateMany
   */
  export type TagsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tags.
     */
    data: XOR<TagsUpdateManyMutationInput, TagsUncheckedUpdateManyInput>
    /**
     * Filter which Tags to update
     */
    where?: TagsWhereInput
    /**
     * Limit how many Tags to update.
     */
    limit?: number
  }

  /**
   * Tags updateManyAndReturn
   */
  export type TagsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tags
     */
    select?: TagsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tags
     */
    omit?: TagsOmit<ExtArgs> | null
    /**
     * The data used to update Tags.
     */
    data: XOR<TagsUpdateManyMutationInput, TagsUncheckedUpdateManyInput>
    /**
     * Filter which Tags to update
     */
    where?: TagsWhereInput
    /**
     * Limit how many Tags to update.
     */
    limit?: number
  }

  /**
   * Tags upsert
   */
  export type TagsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tags
     */
    select?: TagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tags
     */
    omit?: TagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagsInclude<ExtArgs> | null
    /**
     * The filter to search for the Tags to update in case it exists.
     */
    where: TagsWhereUniqueInput
    /**
     * In case the Tags found by the `where` argument doesn't exist, create a new Tags with this data.
     */
    create: XOR<TagsCreateInput, TagsUncheckedCreateInput>
    /**
     * In case the Tags was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TagsUpdateInput, TagsUncheckedUpdateInput>
  }

  /**
   * Tags delete
   */
  export type TagsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tags
     */
    select?: TagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tags
     */
    omit?: TagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagsInclude<ExtArgs> | null
    /**
     * Filter which Tags to delete.
     */
    where: TagsWhereUniqueInput
  }

  /**
   * Tags deleteMany
   */
  export type TagsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tags to delete
     */
    where?: TagsWhereInput
    /**
     * Limit how many Tags to delete.
     */
    limit?: number
  }

  /**
   * Tags.UserPost
   */
  export type Tags$UserPostArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPost
     */
    select?: UserPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPost
     */
    omit?: UserPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPostInclude<ExtArgs> | null
    where?: UserPostWhereInput
    orderBy?: UserPostOrderByWithRelationInput | UserPostOrderByWithRelationInput[]
    cursor?: UserPostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserPostScalarFieldEnum | UserPostScalarFieldEnum[]
  }

  /**
   * Tags without action
   */
  export type TagsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tags
     */
    select?: TagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tags
     */
    omit?: TagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagsInclude<ExtArgs> | null
  }


  /**
   * Model Link
   */

  export type AggregateLink = {
    _count: LinkCountAggregateOutputType | null
    _avg: LinkAvgAggregateOutputType | null
    _sum: LinkSumAggregateOutputType | null
    _min: LinkMinAggregateOutputType | null
    _max: LinkMaxAggregateOutputType | null
  }

  export type LinkAvgAggregateOutputType = {
    id: number | null
  }

  export type LinkSumAggregateOutputType = {
    id: number | null
  }

  export type LinkMinAggregateOutputType = {
    id: number | null
    url: string | null
  }

  export type LinkMaxAggregateOutputType = {
    id: number | null
    url: string | null
  }

  export type LinkCountAggregateOutputType = {
    id: number
    url: number
    _all: number
  }


  export type LinkAvgAggregateInputType = {
    id?: true
  }

  export type LinkSumAggregateInputType = {
    id?: true
  }

  export type LinkMinAggregateInputType = {
    id?: true
    url?: true
  }

  export type LinkMaxAggregateInputType = {
    id?: true
    url?: true
  }

  export type LinkCountAggregateInputType = {
    id?: true
    url?: true
    _all?: true
  }

  export type LinkAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Link to aggregate.
     */
    where?: LinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Links to fetch.
     */
    orderBy?: LinkOrderByWithRelationInput | LinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Links from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Links.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Links
    **/
    _count?: true | LinkCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LinkAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LinkSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LinkMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LinkMaxAggregateInputType
  }

  export type GetLinkAggregateType<T extends LinkAggregateArgs> = {
        [P in keyof T & keyof AggregateLink]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLink[P]>
      : GetScalarType<T[P], AggregateLink[P]>
  }




  export type LinkGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LinkWhereInput
    orderBy?: LinkOrderByWithAggregationInput | LinkOrderByWithAggregationInput[]
    by: LinkScalarFieldEnum[] | LinkScalarFieldEnum
    having?: LinkScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LinkCountAggregateInputType | true
    _avg?: LinkAvgAggregateInputType
    _sum?: LinkSumAggregateInputType
    _min?: LinkMinAggregateInputType
    _max?: LinkMaxAggregateInputType
  }

  export type LinkGroupByOutputType = {
    id: number
    url: string
    _count: LinkCountAggregateOutputType | null
    _avg: LinkAvgAggregateOutputType | null
    _sum: LinkSumAggregateOutputType | null
    _min: LinkMinAggregateOutputType | null
    _max: LinkMaxAggregateOutputType | null
  }

  type GetLinkGroupByPayload<T extends LinkGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LinkGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LinkGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LinkGroupByOutputType[P]>
            : GetScalarType<T[P], LinkGroupByOutputType[P]>
        }
      >
    >


  export type LinkSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    userPost?: boolean | Link$userPostArgs<ExtArgs>
    _count?: boolean | LinkCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["link"]>

  export type LinkSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
  }, ExtArgs["result"]["link"]>

  export type LinkSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
  }, ExtArgs["result"]["link"]>

  export type LinkSelectScalar = {
    id?: boolean
    url?: boolean
  }

  export type LinkOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "url", ExtArgs["result"]["link"]>
  export type LinkInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userPost?: boolean | Link$userPostArgs<ExtArgs>
    _count?: boolean | LinkCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LinkIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type LinkIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $LinkPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Link"
    objects: {
      userPost: Prisma.$UserPostPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      url: string
    }, ExtArgs["result"]["link"]>
    composites: {}
  }

  type LinkGetPayload<S extends boolean | null | undefined | LinkDefaultArgs> = $Result.GetResult<Prisma.$LinkPayload, S>

  type LinkCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LinkFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LinkCountAggregateInputType | true
    }

  export interface LinkDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Link'], meta: { name: 'Link' } }
    /**
     * Find zero or one Link that matches the filter.
     * @param {LinkFindUniqueArgs} args - Arguments to find a Link
     * @example
     * // Get one Link
     * const link = await prisma.link.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LinkFindUniqueArgs>(args: SelectSubset<T, LinkFindUniqueArgs<ExtArgs>>): Prisma__LinkClient<$Result.GetResult<Prisma.$LinkPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Link that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LinkFindUniqueOrThrowArgs} args - Arguments to find a Link
     * @example
     * // Get one Link
     * const link = await prisma.link.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LinkFindUniqueOrThrowArgs>(args: SelectSubset<T, LinkFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LinkClient<$Result.GetResult<Prisma.$LinkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Link that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkFindFirstArgs} args - Arguments to find a Link
     * @example
     * // Get one Link
     * const link = await prisma.link.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LinkFindFirstArgs>(args?: SelectSubset<T, LinkFindFirstArgs<ExtArgs>>): Prisma__LinkClient<$Result.GetResult<Prisma.$LinkPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Link that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkFindFirstOrThrowArgs} args - Arguments to find a Link
     * @example
     * // Get one Link
     * const link = await prisma.link.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LinkFindFirstOrThrowArgs>(args?: SelectSubset<T, LinkFindFirstOrThrowArgs<ExtArgs>>): Prisma__LinkClient<$Result.GetResult<Prisma.$LinkPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Links that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Links
     * const links = await prisma.link.findMany()
     * 
     * // Get first 10 Links
     * const links = await prisma.link.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const linkWithIdOnly = await prisma.link.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LinkFindManyArgs>(args?: SelectSubset<T, LinkFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LinkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Link.
     * @param {LinkCreateArgs} args - Arguments to create a Link.
     * @example
     * // Create one Link
     * const Link = await prisma.link.create({
     *   data: {
     *     // ... data to create a Link
     *   }
     * })
     * 
     */
    create<T extends LinkCreateArgs>(args: SelectSubset<T, LinkCreateArgs<ExtArgs>>): Prisma__LinkClient<$Result.GetResult<Prisma.$LinkPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Links.
     * @param {LinkCreateManyArgs} args - Arguments to create many Links.
     * @example
     * // Create many Links
     * const link = await prisma.link.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LinkCreateManyArgs>(args?: SelectSubset<T, LinkCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Links and returns the data saved in the database.
     * @param {LinkCreateManyAndReturnArgs} args - Arguments to create many Links.
     * @example
     * // Create many Links
     * const link = await prisma.link.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Links and only return the `id`
     * const linkWithIdOnly = await prisma.link.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LinkCreateManyAndReturnArgs>(args?: SelectSubset<T, LinkCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LinkPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Link.
     * @param {LinkDeleteArgs} args - Arguments to delete one Link.
     * @example
     * // Delete one Link
     * const Link = await prisma.link.delete({
     *   where: {
     *     // ... filter to delete one Link
     *   }
     * })
     * 
     */
    delete<T extends LinkDeleteArgs>(args: SelectSubset<T, LinkDeleteArgs<ExtArgs>>): Prisma__LinkClient<$Result.GetResult<Prisma.$LinkPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Link.
     * @param {LinkUpdateArgs} args - Arguments to update one Link.
     * @example
     * // Update one Link
     * const link = await prisma.link.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LinkUpdateArgs>(args: SelectSubset<T, LinkUpdateArgs<ExtArgs>>): Prisma__LinkClient<$Result.GetResult<Prisma.$LinkPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Links.
     * @param {LinkDeleteManyArgs} args - Arguments to filter Links to delete.
     * @example
     * // Delete a few Links
     * const { count } = await prisma.link.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LinkDeleteManyArgs>(args?: SelectSubset<T, LinkDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Links.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Links
     * const link = await prisma.link.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LinkUpdateManyArgs>(args: SelectSubset<T, LinkUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Links and returns the data updated in the database.
     * @param {LinkUpdateManyAndReturnArgs} args - Arguments to update many Links.
     * @example
     * // Update many Links
     * const link = await prisma.link.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Links and only return the `id`
     * const linkWithIdOnly = await prisma.link.updateManyAndReturn({
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
    updateManyAndReturn<T extends LinkUpdateManyAndReturnArgs>(args: SelectSubset<T, LinkUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LinkPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Link.
     * @param {LinkUpsertArgs} args - Arguments to update or create a Link.
     * @example
     * // Update or create a Link
     * const link = await prisma.link.upsert({
     *   create: {
     *     // ... data to create a Link
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Link we want to update
     *   }
     * })
     */
    upsert<T extends LinkUpsertArgs>(args: SelectSubset<T, LinkUpsertArgs<ExtArgs>>): Prisma__LinkClient<$Result.GetResult<Prisma.$LinkPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Links.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkCountArgs} args - Arguments to filter Links to count.
     * @example
     * // Count the number of Links
     * const count = await prisma.link.count({
     *   where: {
     *     // ... the filter for the Links we want to count
     *   }
     * })
    **/
    count<T extends LinkCountArgs>(
      args?: Subset<T, LinkCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LinkCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Link.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LinkAggregateArgs>(args: Subset<T, LinkAggregateArgs>): Prisma.PrismaPromise<GetLinkAggregateType<T>>

    /**
     * Group by Link.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkGroupByArgs} args - Group by arguments.
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
      T extends LinkGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LinkGroupByArgs['orderBy'] }
        : { orderBy?: LinkGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LinkGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLinkGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Link model
   */
  readonly fields: LinkFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Link.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LinkClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    userPost<T extends Link$userPostArgs<ExtArgs> = {}>(args?: Subset<T, Link$userPostArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Link model
   */
  interface LinkFieldRefs {
    readonly id: FieldRef<"Link", 'Int'>
    readonly url: FieldRef<"Link", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Link findUnique
   */
  export type LinkFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Link
     */
    select?: LinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Link
     */
    omit?: LinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkInclude<ExtArgs> | null
    /**
     * Filter, which Link to fetch.
     */
    where: LinkWhereUniqueInput
  }

  /**
   * Link findUniqueOrThrow
   */
  export type LinkFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Link
     */
    select?: LinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Link
     */
    omit?: LinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkInclude<ExtArgs> | null
    /**
     * Filter, which Link to fetch.
     */
    where: LinkWhereUniqueInput
  }

  /**
   * Link findFirst
   */
  export type LinkFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Link
     */
    select?: LinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Link
     */
    omit?: LinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkInclude<ExtArgs> | null
    /**
     * Filter, which Link to fetch.
     */
    where?: LinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Links to fetch.
     */
    orderBy?: LinkOrderByWithRelationInput | LinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Links.
     */
    cursor?: LinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Links from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Links.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Links.
     */
    distinct?: LinkScalarFieldEnum | LinkScalarFieldEnum[]
  }

  /**
   * Link findFirstOrThrow
   */
  export type LinkFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Link
     */
    select?: LinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Link
     */
    omit?: LinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkInclude<ExtArgs> | null
    /**
     * Filter, which Link to fetch.
     */
    where?: LinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Links to fetch.
     */
    orderBy?: LinkOrderByWithRelationInput | LinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Links.
     */
    cursor?: LinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Links from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Links.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Links.
     */
    distinct?: LinkScalarFieldEnum | LinkScalarFieldEnum[]
  }

  /**
   * Link findMany
   */
  export type LinkFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Link
     */
    select?: LinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Link
     */
    omit?: LinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkInclude<ExtArgs> | null
    /**
     * Filter, which Links to fetch.
     */
    where?: LinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Links to fetch.
     */
    orderBy?: LinkOrderByWithRelationInput | LinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Links.
     */
    cursor?: LinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Links from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Links.
     */
    skip?: number
    distinct?: LinkScalarFieldEnum | LinkScalarFieldEnum[]
  }

  /**
   * Link create
   */
  export type LinkCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Link
     */
    select?: LinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Link
     */
    omit?: LinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkInclude<ExtArgs> | null
    /**
     * The data needed to create a Link.
     */
    data: XOR<LinkCreateInput, LinkUncheckedCreateInput>
  }

  /**
   * Link createMany
   */
  export type LinkCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Links.
     */
    data: LinkCreateManyInput | LinkCreateManyInput[]
  }

  /**
   * Link createManyAndReturn
   */
  export type LinkCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Link
     */
    select?: LinkSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Link
     */
    omit?: LinkOmit<ExtArgs> | null
    /**
     * The data used to create many Links.
     */
    data: LinkCreateManyInput | LinkCreateManyInput[]
  }

  /**
   * Link update
   */
  export type LinkUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Link
     */
    select?: LinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Link
     */
    omit?: LinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkInclude<ExtArgs> | null
    /**
     * The data needed to update a Link.
     */
    data: XOR<LinkUpdateInput, LinkUncheckedUpdateInput>
    /**
     * Choose, which Link to update.
     */
    where: LinkWhereUniqueInput
  }

  /**
   * Link updateMany
   */
  export type LinkUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Links.
     */
    data: XOR<LinkUpdateManyMutationInput, LinkUncheckedUpdateManyInput>
    /**
     * Filter which Links to update
     */
    where?: LinkWhereInput
    /**
     * Limit how many Links to update.
     */
    limit?: number
  }

  /**
   * Link updateManyAndReturn
   */
  export type LinkUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Link
     */
    select?: LinkSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Link
     */
    omit?: LinkOmit<ExtArgs> | null
    /**
     * The data used to update Links.
     */
    data: XOR<LinkUpdateManyMutationInput, LinkUncheckedUpdateManyInput>
    /**
     * Filter which Links to update
     */
    where?: LinkWhereInput
    /**
     * Limit how many Links to update.
     */
    limit?: number
  }

  /**
   * Link upsert
   */
  export type LinkUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Link
     */
    select?: LinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Link
     */
    omit?: LinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkInclude<ExtArgs> | null
    /**
     * The filter to search for the Link to update in case it exists.
     */
    where: LinkWhereUniqueInput
    /**
     * In case the Link found by the `where` argument doesn't exist, create a new Link with this data.
     */
    create: XOR<LinkCreateInput, LinkUncheckedCreateInput>
    /**
     * In case the Link was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LinkUpdateInput, LinkUncheckedUpdateInput>
  }

  /**
   * Link delete
   */
  export type LinkDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Link
     */
    select?: LinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Link
     */
    omit?: LinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkInclude<ExtArgs> | null
    /**
     * Filter which Link to delete.
     */
    where: LinkWhereUniqueInput
  }

  /**
   * Link deleteMany
   */
  export type LinkDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Links to delete
     */
    where?: LinkWhereInput
    /**
     * Limit how many Links to delete.
     */
    limit?: number
  }

  /**
   * Link.userPost
   */
  export type Link$userPostArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPost
     */
    select?: UserPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPost
     */
    omit?: UserPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPostInclude<ExtArgs> | null
    where?: UserPostWhereInput
    orderBy?: UserPostOrderByWithRelationInput | UserPostOrderByWithRelationInput[]
    cursor?: UserPostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserPostScalarFieldEnum | UserPostScalarFieldEnum[]
  }

  /**
   * Link without action
   */
  export type LinkDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Link
     */
    select?: LinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Link
     */
    omit?: LinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkInclude<ExtArgs> | null
  }


  /**
   * Model Profile
   */

  export type AggregateProfile = {
    _count: ProfileCountAggregateOutputType | null
    _avg: ProfileAvgAggregateOutputType | null
    _sum: ProfileSumAggregateOutputType | null
    _min: ProfileMinAggregateOutputType | null
    _max: ProfileMaxAggregateOutputType | null
  }

  export type ProfileAvgAggregateOutputType = {
    id: number | null
  }

  export type ProfileSumAggregateOutputType = {
    id: number | null
  }

  export type ProfileMinAggregateOutputType = {
    id: number | null
    name: string | null
    username: string | null
    surname: string | null
    dateOfBirth: Date | null
    email: string | null
    password: string | null
    image: string | null
    about: string | null
    signature: string | null
  }

  export type ProfileMaxAggregateOutputType = {
    id: number | null
    name: string | null
    username: string | null
    surname: string | null
    dateOfBirth: Date | null
    email: string | null
    password: string | null
    image: string | null
    about: string | null
    signature: string | null
  }

  export type ProfileCountAggregateOutputType = {
    id: number
    name: number
    username: number
    surname: number
    dateOfBirth: number
    email: number
    password: number
    image: number
    about: number
    signature: number
    _all: number
  }


  export type ProfileAvgAggregateInputType = {
    id?: true
  }

  export type ProfileSumAggregateInputType = {
    id?: true
  }

  export type ProfileMinAggregateInputType = {
    id?: true
    name?: true
    username?: true
    surname?: true
    dateOfBirth?: true
    email?: true
    password?: true
    image?: true
    about?: true
    signature?: true
  }

  export type ProfileMaxAggregateInputType = {
    id?: true
    name?: true
    username?: true
    surname?: true
    dateOfBirth?: true
    email?: true
    password?: true
    image?: true
    about?: true
    signature?: true
  }

  export type ProfileCountAggregateInputType = {
    id?: true
    name?: true
    username?: true
    surname?: true
    dateOfBirth?: true
    email?: true
    password?: true
    image?: true
    about?: true
    signature?: true
    _all?: true
  }

  export type ProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Profile to aggregate.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Profiles
    **/
    _count?: true | ProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProfileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProfileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProfileMaxAggregateInputType
  }

  export type GetProfileAggregateType<T extends ProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfile[P]>
      : GetScalarType<T[P], AggregateProfile[P]>
  }




  export type ProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfileWhereInput
    orderBy?: ProfileOrderByWithAggregationInput | ProfileOrderByWithAggregationInput[]
    by: ProfileScalarFieldEnum[] | ProfileScalarFieldEnum
    having?: ProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProfileCountAggregateInputType | true
    _avg?: ProfileAvgAggregateInputType
    _sum?: ProfileSumAggregateInputType
    _min?: ProfileMinAggregateInputType
    _max?: ProfileMaxAggregateInputType
  }

  export type ProfileGroupByOutputType = {
    id: number
    name: string | null
    username: string | null
    surname: string | null
    dateOfBirth: Date | null
    email: string
    password: string
    image: string | null
    about: string | null
    signature: string | null
    _count: ProfileCountAggregateOutputType | null
    _avg: ProfileAvgAggregateOutputType | null
    _sum: ProfileSumAggregateOutputType | null
    _min: ProfileMinAggregateOutputType | null
    _max: ProfileMaxAggregateOutputType | null
  }

  type GetProfileGroupByPayload<T extends ProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProfileGroupByOutputType[P]>
            : GetScalarType<T[P], ProfileGroupByOutputType[P]>
        }
      >
    >


  export type ProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    username?: boolean
    surname?: boolean
    dateOfBirth?: boolean
    email?: boolean
    password?: boolean
    image?: boolean
    about?: boolean
    signature?: boolean
    post?: boolean | Profile$postArgs<ExtArgs>
    album?: boolean | Profile$albumArgs<ExtArgs>
    chats?: boolean | Profile$chatsArgs<ExtArgs>
    administeredGroups?: boolean | Profile$administeredGroupsArgs<ExtArgs>
    chatMessages?: boolean | Profile$chatMessagesArgs<ExtArgs>
    userPostViews?: boolean | Profile$userPostViewsArgs<ExtArgs>
    userPostLikes?: boolean | Profile$userPostLikesArgs<ExtArgs>
    avatar?: boolean | Profile$avatarArgs<ExtArgs>
    friendshipFrom?: boolean | Profile$friendshipFromArgs<ExtArgs>
    friendshipTo?: boolean | Profile$friendshipToArgs<ExtArgs>
    _count?: boolean | ProfileCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profile"]>

  export type ProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    username?: boolean
    surname?: boolean
    dateOfBirth?: boolean
    email?: boolean
    password?: boolean
    image?: boolean
    about?: boolean
    signature?: boolean
  }, ExtArgs["result"]["profile"]>

  export type ProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    username?: boolean
    surname?: boolean
    dateOfBirth?: boolean
    email?: boolean
    password?: boolean
    image?: boolean
    about?: boolean
    signature?: boolean
  }, ExtArgs["result"]["profile"]>

  export type ProfileSelectScalar = {
    id?: boolean
    name?: boolean
    username?: boolean
    surname?: boolean
    dateOfBirth?: boolean
    email?: boolean
    password?: boolean
    image?: boolean
    about?: boolean
    signature?: boolean
  }

  export type ProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "username" | "surname" | "dateOfBirth" | "email" | "password" | "image" | "about" | "signature", ExtArgs["result"]["profile"]>
  export type ProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | Profile$postArgs<ExtArgs>
    album?: boolean | Profile$albumArgs<ExtArgs>
    chats?: boolean | Profile$chatsArgs<ExtArgs>
    administeredGroups?: boolean | Profile$administeredGroupsArgs<ExtArgs>
    chatMessages?: boolean | Profile$chatMessagesArgs<ExtArgs>
    userPostViews?: boolean | Profile$userPostViewsArgs<ExtArgs>
    userPostLikes?: boolean | Profile$userPostLikesArgs<ExtArgs>
    avatar?: boolean | Profile$avatarArgs<ExtArgs>
    friendshipFrom?: boolean | Profile$friendshipFromArgs<ExtArgs>
    friendshipTo?: boolean | Profile$friendshipToArgs<ExtArgs>
    _count?: boolean | ProfileCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Profile"
    objects: {
      post: Prisma.$UserPostPayload<ExtArgs>[]
      album: Prisma.$AlbumPayload<ExtArgs>[]
      chats: Prisma.$ChatGroupPayload<ExtArgs>[]
      administeredGroups: Prisma.$ChatGroupPayload<ExtArgs>[]
      chatMessages: Prisma.$ChatMessagePayload<ExtArgs>[]
      userPostViews: Prisma.$UserPostPayload<ExtArgs>[]
      userPostLikes: Prisma.$UserPostPayload<ExtArgs>[]
      avatar: Prisma.$AvatarPayload<ExtArgs> | null
      friendshipFrom: Prisma.$FriendshipPayload<ExtArgs>[]
      friendshipTo: Prisma.$FriendshipPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string | null
      username: string | null
      surname: string | null
      dateOfBirth: Date | null
      email: string
      password: string
      image: string | null
      about: string | null
      signature: string | null
    }, ExtArgs["result"]["profile"]>
    composites: {}
  }

  type ProfileGetPayload<S extends boolean | null | undefined | ProfileDefaultArgs> = $Result.GetResult<Prisma.$ProfilePayload, S>

  type ProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProfileCountAggregateInputType | true
    }

  export interface ProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Profile'], meta: { name: 'Profile' } }
    /**
     * Find zero or one Profile that matches the filter.
     * @param {ProfileFindUniqueArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProfileFindUniqueArgs>(args: SelectSubset<T, ProfileFindUniqueArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Profile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProfileFindUniqueOrThrowArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, ProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindFirstArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProfileFindFirstArgs>(args?: SelectSubset<T, ProfileFindFirstArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindFirstOrThrowArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, ProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Profiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Profiles
     * const profiles = await prisma.profile.findMany()
     * 
     * // Get first 10 Profiles
     * const profiles = await prisma.profile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const profileWithIdOnly = await prisma.profile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProfileFindManyArgs>(args?: SelectSubset<T, ProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Profile.
     * @param {ProfileCreateArgs} args - Arguments to create a Profile.
     * @example
     * // Create one Profile
     * const Profile = await prisma.profile.create({
     *   data: {
     *     // ... data to create a Profile
     *   }
     * })
     * 
     */
    create<T extends ProfileCreateArgs>(args: SelectSubset<T, ProfileCreateArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Profiles.
     * @param {ProfileCreateManyArgs} args - Arguments to create many Profiles.
     * @example
     * // Create many Profiles
     * const profile = await prisma.profile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProfileCreateManyArgs>(args?: SelectSubset<T, ProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Profiles and returns the data saved in the database.
     * @param {ProfileCreateManyAndReturnArgs} args - Arguments to create many Profiles.
     * @example
     * // Create many Profiles
     * const profile = await prisma.profile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Profiles and only return the `id`
     * const profileWithIdOnly = await prisma.profile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, ProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Profile.
     * @param {ProfileDeleteArgs} args - Arguments to delete one Profile.
     * @example
     * // Delete one Profile
     * const Profile = await prisma.profile.delete({
     *   where: {
     *     // ... filter to delete one Profile
     *   }
     * })
     * 
     */
    delete<T extends ProfileDeleteArgs>(args: SelectSubset<T, ProfileDeleteArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Profile.
     * @param {ProfileUpdateArgs} args - Arguments to update one Profile.
     * @example
     * // Update one Profile
     * const profile = await prisma.profile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProfileUpdateArgs>(args: SelectSubset<T, ProfileUpdateArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Profiles.
     * @param {ProfileDeleteManyArgs} args - Arguments to filter Profiles to delete.
     * @example
     * // Delete a few Profiles
     * const { count } = await prisma.profile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProfileDeleteManyArgs>(args?: SelectSubset<T, ProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Profiles
     * const profile = await prisma.profile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProfileUpdateManyArgs>(args: SelectSubset<T, ProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profiles and returns the data updated in the database.
     * @param {ProfileUpdateManyAndReturnArgs} args - Arguments to update many Profiles.
     * @example
     * // Update many Profiles
     * const profile = await prisma.profile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Profiles and only return the `id`
     * const profileWithIdOnly = await prisma.profile.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, ProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Profile.
     * @param {ProfileUpsertArgs} args - Arguments to update or create a Profile.
     * @example
     * // Update or create a Profile
     * const profile = await prisma.profile.upsert({
     *   create: {
     *     // ... data to create a Profile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Profile we want to update
     *   }
     * })
     */
    upsert<T extends ProfileUpsertArgs>(args: SelectSubset<T, ProfileUpsertArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileCountArgs} args - Arguments to filter Profiles to count.
     * @example
     * // Count the number of Profiles
     * const count = await prisma.profile.count({
     *   where: {
     *     // ... the filter for the Profiles we want to count
     *   }
     * })
    **/
    count<T extends ProfileCountArgs>(
      args?: Subset<T, ProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProfileAggregateArgs>(args: Subset<T, ProfileAggregateArgs>): Prisma.PrismaPromise<GetProfileAggregateType<T>>

    /**
     * Group by Profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileGroupByArgs} args - Group by arguments.
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
      T extends ProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProfileGroupByArgs['orderBy'] }
        : { orderBy?: ProfileGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Profile model
   */
  readonly fields: ProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Profile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    post<T extends Profile$postArgs<ExtArgs> = {}>(args?: Subset<T, Profile$postArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    album<T extends Profile$albumArgs<ExtArgs> = {}>(args?: Subset<T, Profile$albumArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    chats<T extends Profile$chatsArgs<ExtArgs> = {}>(args?: Subset<T, Profile$chatsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatGroupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    administeredGroups<T extends Profile$administeredGroupsArgs<ExtArgs> = {}>(args?: Subset<T, Profile$administeredGroupsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatGroupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    chatMessages<T extends Profile$chatMessagesArgs<ExtArgs> = {}>(args?: Subset<T, Profile$chatMessagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    userPostViews<T extends Profile$userPostViewsArgs<ExtArgs> = {}>(args?: Subset<T, Profile$userPostViewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    userPostLikes<T extends Profile$userPostLikesArgs<ExtArgs> = {}>(args?: Subset<T, Profile$userPostLikesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    avatar<T extends Profile$avatarArgs<ExtArgs> = {}>(args?: Subset<T, Profile$avatarArgs<ExtArgs>>): Prisma__AvatarClient<$Result.GetResult<Prisma.$AvatarPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    friendshipFrom<T extends Profile$friendshipFromArgs<ExtArgs> = {}>(args?: Subset<T, Profile$friendshipFromArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FriendshipPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    friendshipTo<T extends Profile$friendshipToArgs<ExtArgs> = {}>(args?: Subset<T, Profile$friendshipToArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FriendshipPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Profile model
   */
  interface ProfileFieldRefs {
    readonly id: FieldRef<"Profile", 'Int'>
    readonly name: FieldRef<"Profile", 'String'>
    readonly username: FieldRef<"Profile", 'String'>
    readonly surname: FieldRef<"Profile", 'String'>
    readonly dateOfBirth: FieldRef<"Profile", 'DateTime'>
    readonly email: FieldRef<"Profile", 'String'>
    readonly password: FieldRef<"Profile", 'String'>
    readonly image: FieldRef<"Profile", 'String'>
    readonly about: FieldRef<"Profile", 'String'>
    readonly signature: FieldRef<"Profile", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Profile findUnique
   */
  export type ProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile findUniqueOrThrow
   */
  export type ProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile findFirst
   */
  export type ProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profiles.
     */
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * Profile findFirstOrThrow
   */
  export type ProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profiles.
     */
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * Profile findMany
   */
  export type ProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profiles to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * Profile create
   */
  export type ProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a Profile.
     */
    data: XOR<ProfileCreateInput, ProfileUncheckedCreateInput>
  }

  /**
   * Profile createMany
   */
  export type ProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Profiles.
     */
    data: ProfileCreateManyInput | ProfileCreateManyInput[]
  }

  /**
   * Profile createManyAndReturn
   */
  export type ProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * The data used to create many Profiles.
     */
    data: ProfileCreateManyInput | ProfileCreateManyInput[]
  }

  /**
   * Profile update
   */
  export type ProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a Profile.
     */
    data: XOR<ProfileUpdateInput, ProfileUncheckedUpdateInput>
    /**
     * Choose, which Profile to update.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile updateMany
   */
  export type ProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Profiles.
     */
    data: XOR<ProfileUpdateManyMutationInput, ProfileUncheckedUpdateManyInput>
    /**
     * Filter which Profiles to update
     */
    where?: ProfileWhereInput
    /**
     * Limit how many Profiles to update.
     */
    limit?: number
  }

  /**
   * Profile updateManyAndReturn
   */
  export type ProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * The data used to update Profiles.
     */
    data: XOR<ProfileUpdateManyMutationInput, ProfileUncheckedUpdateManyInput>
    /**
     * Filter which Profiles to update
     */
    where?: ProfileWhereInput
    /**
     * Limit how many Profiles to update.
     */
    limit?: number
  }

  /**
   * Profile upsert
   */
  export type ProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the Profile to update in case it exists.
     */
    where: ProfileWhereUniqueInput
    /**
     * In case the Profile found by the `where` argument doesn't exist, create a new Profile with this data.
     */
    create: XOR<ProfileCreateInput, ProfileUncheckedCreateInput>
    /**
     * In case the Profile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProfileUpdateInput, ProfileUncheckedUpdateInput>
  }

  /**
   * Profile delete
   */
  export type ProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter which Profile to delete.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile deleteMany
   */
  export type ProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Profiles to delete
     */
    where?: ProfileWhereInput
    /**
     * Limit how many Profiles to delete.
     */
    limit?: number
  }

  /**
   * Profile.post
   */
  export type Profile$postArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPost
     */
    select?: UserPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPost
     */
    omit?: UserPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPostInclude<ExtArgs> | null
    where?: UserPostWhereInput
    orderBy?: UserPostOrderByWithRelationInput | UserPostOrderByWithRelationInput[]
    cursor?: UserPostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserPostScalarFieldEnum | UserPostScalarFieldEnum[]
  }

  /**
   * Profile.album
   */
  export type Profile$albumArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Album
     */
    omit?: AlbumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumInclude<ExtArgs> | null
    where?: AlbumWhereInput
    orderBy?: AlbumOrderByWithRelationInput | AlbumOrderByWithRelationInput[]
    cursor?: AlbumWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AlbumScalarFieldEnum | AlbumScalarFieldEnum[]
  }

  /**
   * Profile.chats
   */
  export type Profile$chatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatGroup
     */
    select?: ChatGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatGroup
     */
    omit?: ChatGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatGroupInclude<ExtArgs> | null
    where?: ChatGroupWhereInput
    orderBy?: ChatGroupOrderByWithRelationInput | ChatGroupOrderByWithRelationInput[]
    cursor?: ChatGroupWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatGroupScalarFieldEnum | ChatGroupScalarFieldEnum[]
  }

  /**
   * Profile.administeredGroups
   */
  export type Profile$administeredGroupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatGroup
     */
    select?: ChatGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatGroup
     */
    omit?: ChatGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatGroupInclude<ExtArgs> | null
    where?: ChatGroupWhereInput
    orderBy?: ChatGroupOrderByWithRelationInput | ChatGroupOrderByWithRelationInput[]
    cursor?: ChatGroupWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatGroupScalarFieldEnum | ChatGroupScalarFieldEnum[]
  }

  /**
   * Profile.chatMessages
   */
  export type Profile$chatMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    where?: ChatMessageWhereInput
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    cursor?: ChatMessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[]
  }

  /**
   * Profile.userPostViews
   */
  export type Profile$userPostViewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPost
     */
    select?: UserPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPost
     */
    omit?: UserPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPostInclude<ExtArgs> | null
    where?: UserPostWhereInput
    orderBy?: UserPostOrderByWithRelationInput | UserPostOrderByWithRelationInput[]
    cursor?: UserPostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserPostScalarFieldEnum | UserPostScalarFieldEnum[]
  }

  /**
   * Profile.userPostLikes
   */
  export type Profile$userPostLikesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPost
     */
    select?: UserPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPost
     */
    omit?: UserPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPostInclude<ExtArgs> | null
    where?: UserPostWhereInput
    orderBy?: UserPostOrderByWithRelationInput | UserPostOrderByWithRelationInput[]
    cursor?: UserPostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserPostScalarFieldEnum | UserPostScalarFieldEnum[]
  }

  /**
   * Profile.avatar
   */
  export type Profile$avatarArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avatar
     */
    select?: AvatarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avatar
     */
    omit?: AvatarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvatarInclude<ExtArgs> | null
    where?: AvatarWhereInput
  }

  /**
   * Profile.friendshipFrom
   */
  export type Profile$friendshipFromArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friendship
     */
    select?: FriendshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friendship
     */
    omit?: FriendshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendshipInclude<ExtArgs> | null
    where?: FriendshipWhereInput
    orderBy?: FriendshipOrderByWithRelationInput | FriendshipOrderByWithRelationInput[]
    cursor?: FriendshipWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FriendshipScalarFieldEnum | FriendshipScalarFieldEnum[]
  }

  /**
   * Profile.friendshipTo
   */
  export type Profile$friendshipToArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friendship
     */
    select?: FriendshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friendship
     */
    omit?: FriendshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendshipInclude<ExtArgs> | null
    where?: FriendshipWhereInput
    orderBy?: FriendshipOrderByWithRelationInput | FriendshipOrderByWithRelationInput[]
    cursor?: FriendshipWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FriendshipScalarFieldEnum | FriendshipScalarFieldEnum[]
  }

  /**
   * Profile without action
   */
  export type ProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
  }


  /**
   * Model Avatar
   */

  export type AggregateAvatar = {
    _count: AvatarCountAggregateOutputType | null
    _avg: AvatarAvgAggregateOutputType | null
    _sum: AvatarSumAggregateOutputType | null
    _min: AvatarMinAggregateOutputType | null
    _max: AvatarMaxAggregateOutputType | null
  }

  export type AvatarAvgAggregateOutputType = {
    id: number | null
    profileId: number | null
  }

  export type AvatarSumAggregateOutputType = {
    id: number | null
    profileId: number | null
  }

  export type AvatarMinAggregateOutputType = {
    id: number | null
    image: string | null
    profileId: number | null
    shown: boolean | null
    active: boolean | null
  }

  export type AvatarMaxAggregateOutputType = {
    id: number | null
    image: string | null
    profileId: number | null
    shown: boolean | null
    active: boolean | null
  }

  export type AvatarCountAggregateOutputType = {
    id: number
    image: number
    profileId: number
    shown: number
    active: number
    _all: number
  }


  export type AvatarAvgAggregateInputType = {
    id?: true
    profileId?: true
  }

  export type AvatarSumAggregateInputType = {
    id?: true
    profileId?: true
  }

  export type AvatarMinAggregateInputType = {
    id?: true
    image?: true
    profileId?: true
    shown?: true
    active?: true
  }

  export type AvatarMaxAggregateInputType = {
    id?: true
    image?: true
    profileId?: true
    shown?: true
    active?: true
  }

  export type AvatarCountAggregateInputType = {
    id?: true
    image?: true
    profileId?: true
    shown?: true
    active?: true
    _all?: true
  }

  export type AvatarAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Avatar to aggregate.
     */
    where?: AvatarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Avatars to fetch.
     */
    orderBy?: AvatarOrderByWithRelationInput | AvatarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AvatarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Avatars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Avatars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Avatars
    **/
    _count?: true | AvatarCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AvatarAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AvatarSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AvatarMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AvatarMaxAggregateInputType
  }

  export type GetAvatarAggregateType<T extends AvatarAggregateArgs> = {
        [P in keyof T & keyof AggregateAvatar]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAvatar[P]>
      : GetScalarType<T[P], AggregateAvatar[P]>
  }




  export type AvatarGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AvatarWhereInput
    orderBy?: AvatarOrderByWithAggregationInput | AvatarOrderByWithAggregationInput[]
    by: AvatarScalarFieldEnum[] | AvatarScalarFieldEnum
    having?: AvatarScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AvatarCountAggregateInputType | true
    _avg?: AvatarAvgAggregateInputType
    _sum?: AvatarSumAggregateInputType
    _min?: AvatarMinAggregateInputType
    _max?: AvatarMaxAggregateInputType
  }

  export type AvatarGroupByOutputType = {
    id: number
    image: string
    profileId: number
    shown: boolean
    active: boolean
    _count: AvatarCountAggregateOutputType | null
    _avg: AvatarAvgAggregateOutputType | null
    _sum: AvatarSumAggregateOutputType | null
    _min: AvatarMinAggregateOutputType | null
    _max: AvatarMaxAggregateOutputType | null
  }

  type GetAvatarGroupByPayload<T extends AvatarGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AvatarGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AvatarGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AvatarGroupByOutputType[P]>
            : GetScalarType<T[P], AvatarGroupByOutputType[P]>
        }
      >
    >


  export type AvatarSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    image?: boolean
    profileId?: boolean
    shown?: boolean
    active?: boolean
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["avatar"]>

  export type AvatarSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    image?: boolean
    profileId?: boolean
    shown?: boolean
    active?: boolean
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["avatar"]>

  export type AvatarSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    image?: boolean
    profileId?: boolean
    shown?: boolean
    active?: boolean
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["avatar"]>

  export type AvatarSelectScalar = {
    id?: boolean
    image?: boolean
    profileId?: boolean
    shown?: boolean
    active?: boolean
  }

  export type AvatarOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "image" | "profileId" | "shown" | "active", ExtArgs["result"]["avatar"]>
  export type AvatarInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }
  export type AvatarIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }
  export type AvatarIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }

  export type $AvatarPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Avatar"
    objects: {
      profile: Prisma.$ProfilePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      image: string
      profileId: number
      shown: boolean
      active: boolean
    }, ExtArgs["result"]["avatar"]>
    composites: {}
  }

  type AvatarGetPayload<S extends boolean | null | undefined | AvatarDefaultArgs> = $Result.GetResult<Prisma.$AvatarPayload, S>

  type AvatarCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AvatarFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AvatarCountAggregateInputType | true
    }

  export interface AvatarDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Avatar'], meta: { name: 'Avatar' } }
    /**
     * Find zero or one Avatar that matches the filter.
     * @param {AvatarFindUniqueArgs} args - Arguments to find a Avatar
     * @example
     * // Get one Avatar
     * const avatar = await prisma.avatar.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AvatarFindUniqueArgs>(args: SelectSubset<T, AvatarFindUniqueArgs<ExtArgs>>): Prisma__AvatarClient<$Result.GetResult<Prisma.$AvatarPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Avatar that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AvatarFindUniqueOrThrowArgs} args - Arguments to find a Avatar
     * @example
     * // Get one Avatar
     * const avatar = await prisma.avatar.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AvatarFindUniqueOrThrowArgs>(args: SelectSubset<T, AvatarFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AvatarClient<$Result.GetResult<Prisma.$AvatarPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Avatar that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvatarFindFirstArgs} args - Arguments to find a Avatar
     * @example
     * // Get one Avatar
     * const avatar = await prisma.avatar.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AvatarFindFirstArgs>(args?: SelectSubset<T, AvatarFindFirstArgs<ExtArgs>>): Prisma__AvatarClient<$Result.GetResult<Prisma.$AvatarPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Avatar that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvatarFindFirstOrThrowArgs} args - Arguments to find a Avatar
     * @example
     * // Get one Avatar
     * const avatar = await prisma.avatar.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AvatarFindFirstOrThrowArgs>(args?: SelectSubset<T, AvatarFindFirstOrThrowArgs<ExtArgs>>): Prisma__AvatarClient<$Result.GetResult<Prisma.$AvatarPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Avatars that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvatarFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Avatars
     * const avatars = await prisma.avatar.findMany()
     * 
     * // Get first 10 Avatars
     * const avatars = await prisma.avatar.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const avatarWithIdOnly = await prisma.avatar.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AvatarFindManyArgs>(args?: SelectSubset<T, AvatarFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvatarPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Avatar.
     * @param {AvatarCreateArgs} args - Arguments to create a Avatar.
     * @example
     * // Create one Avatar
     * const Avatar = await prisma.avatar.create({
     *   data: {
     *     // ... data to create a Avatar
     *   }
     * })
     * 
     */
    create<T extends AvatarCreateArgs>(args: SelectSubset<T, AvatarCreateArgs<ExtArgs>>): Prisma__AvatarClient<$Result.GetResult<Prisma.$AvatarPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Avatars.
     * @param {AvatarCreateManyArgs} args - Arguments to create many Avatars.
     * @example
     * // Create many Avatars
     * const avatar = await prisma.avatar.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AvatarCreateManyArgs>(args?: SelectSubset<T, AvatarCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Avatars and returns the data saved in the database.
     * @param {AvatarCreateManyAndReturnArgs} args - Arguments to create many Avatars.
     * @example
     * // Create many Avatars
     * const avatar = await prisma.avatar.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Avatars and only return the `id`
     * const avatarWithIdOnly = await prisma.avatar.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AvatarCreateManyAndReturnArgs>(args?: SelectSubset<T, AvatarCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvatarPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Avatar.
     * @param {AvatarDeleteArgs} args - Arguments to delete one Avatar.
     * @example
     * // Delete one Avatar
     * const Avatar = await prisma.avatar.delete({
     *   where: {
     *     // ... filter to delete one Avatar
     *   }
     * })
     * 
     */
    delete<T extends AvatarDeleteArgs>(args: SelectSubset<T, AvatarDeleteArgs<ExtArgs>>): Prisma__AvatarClient<$Result.GetResult<Prisma.$AvatarPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Avatar.
     * @param {AvatarUpdateArgs} args - Arguments to update one Avatar.
     * @example
     * // Update one Avatar
     * const avatar = await prisma.avatar.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AvatarUpdateArgs>(args: SelectSubset<T, AvatarUpdateArgs<ExtArgs>>): Prisma__AvatarClient<$Result.GetResult<Prisma.$AvatarPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Avatars.
     * @param {AvatarDeleteManyArgs} args - Arguments to filter Avatars to delete.
     * @example
     * // Delete a few Avatars
     * const { count } = await prisma.avatar.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AvatarDeleteManyArgs>(args?: SelectSubset<T, AvatarDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Avatars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvatarUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Avatars
     * const avatar = await prisma.avatar.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AvatarUpdateManyArgs>(args: SelectSubset<T, AvatarUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Avatars and returns the data updated in the database.
     * @param {AvatarUpdateManyAndReturnArgs} args - Arguments to update many Avatars.
     * @example
     * // Update many Avatars
     * const avatar = await prisma.avatar.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Avatars and only return the `id`
     * const avatarWithIdOnly = await prisma.avatar.updateManyAndReturn({
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
    updateManyAndReturn<T extends AvatarUpdateManyAndReturnArgs>(args: SelectSubset<T, AvatarUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvatarPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Avatar.
     * @param {AvatarUpsertArgs} args - Arguments to update or create a Avatar.
     * @example
     * // Update or create a Avatar
     * const avatar = await prisma.avatar.upsert({
     *   create: {
     *     // ... data to create a Avatar
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Avatar we want to update
     *   }
     * })
     */
    upsert<T extends AvatarUpsertArgs>(args: SelectSubset<T, AvatarUpsertArgs<ExtArgs>>): Prisma__AvatarClient<$Result.GetResult<Prisma.$AvatarPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Avatars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvatarCountArgs} args - Arguments to filter Avatars to count.
     * @example
     * // Count the number of Avatars
     * const count = await prisma.avatar.count({
     *   where: {
     *     // ... the filter for the Avatars we want to count
     *   }
     * })
    **/
    count<T extends AvatarCountArgs>(
      args?: Subset<T, AvatarCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AvatarCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Avatar.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvatarAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AvatarAggregateArgs>(args: Subset<T, AvatarAggregateArgs>): Prisma.PrismaPromise<GetAvatarAggregateType<T>>

    /**
     * Group by Avatar.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvatarGroupByArgs} args - Group by arguments.
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
      T extends AvatarGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AvatarGroupByArgs['orderBy'] }
        : { orderBy?: AvatarGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AvatarGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAvatarGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Avatar model
   */
  readonly fields: AvatarFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Avatar.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AvatarClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    profile<T extends ProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProfileDefaultArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Avatar model
   */
  interface AvatarFieldRefs {
    readonly id: FieldRef<"Avatar", 'Int'>
    readonly image: FieldRef<"Avatar", 'String'>
    readonly profileId: FieldRef<"Avatar", 'Int'>
    readonly shown: FieldRef<"Avatar", 'Boolean'>
    readonly active: FieldRef<"Avatar", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Avatar findUnique
   */
  export type AvatarFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avatar
     */
    select?: AvatarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avatar
     */
    omit?: AvatarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvatarInclude<ExtArgs> | null
    /**
     * Filter, which Avatar to fetch.
     */
    where: AvatarWhereUniqueInput
  }

  /**
   * Avatar findUniqueOrThrow
   */
  export type AvatarFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avatar
     */
    select?: AvatarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avatar
     */
    omit?: AvatarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvatarInclude<ExtArgs> | null
    /**
     * Filter, which Avatar to fetch.
     */
    where: AvatarWhereUniqueInput
  }

  /**
   * Avatar findFirst
   */
  export type AvatarFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avatar
     */
    select?: AvatarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avatar
     */
    omit?: AvatarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvatarInclude<ExtArgs> | null
    /**
     * Filter, which Avatar to fetch.
     */
    where?: AvatarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Avatars to fetch.
     */
    orderBy?: AvatarOrderByWithRelationInput | AvatarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Avatars.
     */
    cursor?: AvatarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Avatars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Avatars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Avatars.
     */
    distinct?: AvatarScalarFieldEnum | AvatarScalarFieldEnum[]
  }

  /**
   * Avatar findFirstOrThrow
   */
  export type AvatarFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avatar
     */
    select?: AvatarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avatar
     */
    omit?: AvatarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvatarInclude<ExtArgs> | null
    /**
     * Filter, which Avatar to fetch.
     */
    where?: AvatarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Avatars to fetch.
     */
    orderBy?: AvatarOrderByWithRelationInput | AvatarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Avatars.
     */
    cursor?: AvatarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Avatars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Avatars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Avatars.
     */
    distinct?: AvatarScalarFieldEnum | AvatarScalarFieldEnum[]
  }

  /**
   * Avatar findMany
   */
  export type AvatarFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avatar
     */
    select?: AvatarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avatar
     */
    omit?: AvatarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvatarInclude<ExtArgs> | null
    /**
     * Filter, which Avatars to fetch.
     */
    where?: AvatarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Avatars to fetch.
     */
    orderBy?: AvatarOrderByWithRelationInput | AvatarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Avatars.
     */
    cursor?: AvatarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Avatars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Avatars.
     */
    skip?: number
    distinct?: AvatarScalarFieldEnum | AvatarScalarFieldEnum[]
  }

  /**
   * Avatar create
   */
  export type AvatarCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avatar
     */
    select?: AvatarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avatar
     */
    omit?: AvatarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvatarInclude<ExtArgs> | null
    /**
     * The data needed to create a Avatar.
     */
    data: XOR<AvatarCreateInput, AvatarUncheckedCreateInput>
  }

  /**
   * Avatar createMany
   */
  export type AvatarCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Avatars.
     */
    data: AvatarCreateManyInput | AvatarCreateManyInput[]
  }

  /**
   * Avatar createManyAndReturn
   */
  export type AvatarCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avatar
     */
    select?: AvatarSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Avatar
     */
    omit?: AvatarOmit<ExtArgs> | null
    /**
     * The data used to create many Avatars.
     */
    data: AvatarCreateManyInput | AvatarCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvatarIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Avatar update
   */
  export type AvatarUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avatar
     */
    select?: AvatarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avatar
     */
    omit?: AvatarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvatarInclude<ExtArgs> | null
    /**
     * The data needed to update a Avatar.
     */
    data: XOR<AvatarUpdateInput, AvatarUncheckedUpdateInput>
    /**
     * Choose, which Avatar to update.
     */
    where: AvatarWhereUniqueInput
  }

  /**
   * Avatar updateMany
   */
  export type AvatarUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Avatars.
     */
    data: XOR<AvatarUpdateManyMutationInput, AvatarUncheckedUpdateManyInput>
    /**
     * Filter which Avatars to update
     */
    where?: AvatarWhereInput
    /**
     * Limit how many Avatars to update.
     */
    limit?: number
  }

  /**
   * Avatar updateManyAndReturn
   */
  export type AvatarUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avatar
     */
    select?: AvatarSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Avatar
     */
    omit?: AvatarOmit<ExtArgs> | null
    /**
     * The data used to update Avatars.
     */
    data: XOR<AvatarUpdateManyMutationInput, AvatarUncheckedUpdateManyInput>
    /**
     * Filter which Avatars to update
     */
    where?: AvatarWhereInput
    /**
     * Limit how many Avatars to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvatarIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Avatar upsert
   */
  export type AvatarUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avatar
     */
    select?: AvatarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avatar
     */
    omit?: AvatarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvatarInclude<ExtArgs> | null
    /**
     * The filter to search for the Avatar to update in case it exists.
     */
    where: AvatarWhereUniqueInput
    /**
     * In case the Avatar found by the `where` argument doesn't exist, create a new Avatar with this data.
     */
    create: XOR<AvatarCreateInput, AvatarUncheckedCreateInput>
    /**
     * In case the Avatar was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AvatarUpdateInput, AvatarUncheckedUpdateInput>
  }

  /**
   * Avatar delete
   */
  export type AvatarDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avatar
     */
    select?: AvatarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avatar
     */
    omit?: AvatarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvatarInclude<ExtArgs> | null
    /**
     * Filter which Avatar to delete.
     */
    where: AvatarWhereUniqueInput
  }

  /**
   * Avatar deleteMany
   */
  export type AvatarDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Avatars to delete
     */
    where?: AvatarWhereInput
    /**
     * Limit how many Avatars to delete.
     */
    limit?: number
  }

  /**
   * Avatar without action
   */
  export type AvatarDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avatar
     */
    select?: AvatarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avatar
     */
    omit?: AvatarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvatarInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AlbumScalarFieldEnum: {
    id: 'id',
    name: 'name',
    created_at: 'created_at',
    shown: 'shown',
    topic: 'topic',
    authorId: 'authorId'
  };

  export type AlbumScalarFieldEnum = (typeof AlbumScalarFieldEnum)[keyof typeof AlbumScalarFieldEnum]


  export const ChatGroupScalarFieldEnum: {
    id: 'id',
    name: 'name',
    isPersonalChat: 'isPersonalChat',
    adminId: 'adminId',
    avatar: 'avatar'
  };

  export type ChatGroupScalarFieldEnum = (typeof ChatGroupScalarFieldEnum)[keyof typeof ChatGroupScalarFieldEnum]


  export const ChatMessageScalarFieldEnum: {
    id: 'id',
    content: 'content',
    sentAt: 'sentAt',
    authorId: 'authorId',
    chatGroupId: 'chatGroupId',
    attachedImage: 'attachedImage'
  };

  export type ChatMessageScalarFieldEnum = (typeof ChatMessageScalarFieldEnum)[keyof typeof ChatMessageScalarFieldEnum]


  export const FriendshipScalarFieldEnum: {
    id: 'id',
    idTo: 'idTo',
    idFromId: 'idFromId',
    accepted: 'accepted'
  };

  export type FriendshipScalarFieldEnum = (typeof FriendshipScalarFieldEnum)[keyof typeof FriendshipScalarFieldEnum]


  export const ImageScalarFieldEnum: {
    id: 'id',
    url: 'url',
    uploadedAt: 'uploadedAt'
  };

  export type ImageScalarFieldEnum = (typeof ImageScalarFieldEnum)[keyof typeof ImageScalarFieldEnum]


  export const UserPostScalarFieldEnum: {
    id: 'id',
    title: 'title',
    content: 'content',
    authorId: 'authorId',
    linkId: 'linkId'
  };

  export type UserPostScalarFieldEnum = (typeof UserPostScalarFieldEnum)[keyof typeof UserPostScalarFieldEnum]


  export const TagsScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type TagsScalarFieldEnum = (typeof TagsScalarFieldEnum)[keyof typeof TagsScalarFieldEnum]


  export const LinkScalarFieldEnum: {
    id: 'id',
    url: 'url'
  };

  export type LinkScalarFieldEnum = (typeof LinkScalarFieldEnum)[keyof typeof LinkScalarFieldEnum]


  export const ProfileScalarFieldEnum: {
    id: 'id',
    name: 'name',
    username: 'username',
    surname: 'surname',
    dateOfBirth: 'dateOfBirth',
    email: 'email',
    password: 'password',
    image: 'image',
    about: 'about',
    signature: 'signature'
  };

  export type ProfileScalarFieldEnum = (typeof ProfileScalarFieldEnum)[keyof typeof ProfileScalarFieldEnum]


  export const AvatarScalarFieldEnum: {
    id: 'id',
    image: 'image',
    profileId: 'profileId',
    shown: 'shown',
    active: 'active'
  };

  export type AvatarScalarFieldEnum = (typeof AvatarScalarFieldEnum)[keyof typeof AvatarScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type AlbumWhereInput = {
    AND?: AlbumWhereInput | AlbumWhereInput[]
    OR?: AlbumWhereInput[]
    NOT?: AlbumWhereInput | AlbumWhereInput[]
    id?: IntFilter<"Album"> | number
    name?: StringFilter<"Album"> | string
    created_at?: DateTimeFilter<"Album"> | Date | string
    shown?: BoolFilter<"Album"> | boolean
    topic?: StringNullableFilter<"Album"> | string | null
    authorId?: IntFilter<"Album"> | number
    images?: ImageListRelationFilter
    author?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
  }

  export type AlbumOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    shown?: SortOrder
    topic?: SortOrderInput | SortOrder
    authorId?: SortOrder
    images?: ImageOrderByRelationAggregateInput
    author?: ProfileOrderByWithRelationInput
  }

  export type AlbumWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AlbumWhereInput | AlbumWhereInput[]
    OR?: AlbumWhereInput[]
    NOT?: AlbumWhereInput | AlbumWhereInput[]
    name?: StringFilter<"Album"> | string
    created_at?: DateTimeFilter<"Album"> | Date | string
    shown?: BoolFilter<"Album"> | boolean
    topic?: StringNullableFilter<"Album"> | string | null
    authorId?: IntFilter<"Album"> | number
    images?: ImageListRelationFilter
    author?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
  }, "id">

  export type AlbumOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    shown?: SortOrder
    topic?: SortOrderInput | SortOrder
    authorId?: SortOrder
    _count?: AlbumCountOrderByAggregateInput
    _avg?: AlbumAvgOrderByAggregateInput
    _max?: AlbumMaxOrderByAggregateInput
    _min?: AlbumMinOrderByAggregateInput
    _sum?: AlbumSumOrderByAggregateInput
  }

  export type AlbumScalarWhereWithAggregatesInput = {
    AND?: AlbumScalarWhereWithAggregatesInput | AlbumScalarWhereWithAggregatesInput[]
    OR?: AlbumScalarWhereWithAggregatesInput[]
    NOT?: AlbumScalarWhereWithAggregatesInput | AlbumScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Album"> | number
    name?: StringWithAggregatesFilter<"Album"> | string
    created_at?: DateTimeWithAggregatesFilter<"Album"> | Date | string
    shown?: BoolWithAggregatesFilter<"Album"> | boolean
    topic?: StringNullableWithAggregatesFilter<"Album"> | string | null
    authorId?: IntWithAggregatesFilter<"Album"> | number
  }

  export type ChatGroupWhereInput = {
    AND?: ChatGroupWhereInput | ChatGroupWhereInput[]
    OR?: ChatGroupWhereInput[]
    NOT?: ChatGroupWhereInput | ChatGroupWhereInput[]
    id?: IntFilter<"ChatGroup"> | number
    name?: StringFilter<"ChatGroup"> | string
    isPersonalChat?: BoolFilter<"ChatGroup"> | boolean
    adminId?: IntFilter<"ChatGroup"> | number
    avatar?: StringFilter<"ChatGroup"> | string
    members?: ProfileListRelationFilter
    admin?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
    chatMessages?: ChatMessageListRelationFilter
  }

  export type ChatGroupOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    isPersonalChat?: SortOrder
    adminId?: SortOrder
    avatar?: SortOrder
    members?: ProfileOrderByRelationAggregateInput
    admin?: ProfileOrderByWithRelationInput
    chatMessages?: ChatMessageOrderByRelationAggregateInput
  }

  export type ChatGroupWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ChatGroupWhereInput | ChatGroupWhereInput[]
    OR?: ChatGroupWhereInput[]
    NOT?: ChatGroupWhereInput | ChatGroupWhereInput[]
    name?: StringFilter<"ChatGroup"> | string
    isPersonalChat?: BoolFilter<"ChatGroup"> | boolean
    adminId?: IntFilter<"ChatGroup"> | number
    avatar?: StringFilter<"ChatGroup"> | string
    members?: ProfileListRelationFilter
    admin?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
    chatMessages?: ChatMessageListRelationFilter
  }, "id">

  export type ChatGroupOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    isPersonalChat?: SortOrder
    adminId?: SortOrder
    avatar?: SortOrder
    _count?: ChatGroupCountOrderByAggregateInput
    _avg?: ChatGroupAvgOrderByAggregateInput
    _max?: ChatGroupMaxOrderByAggregateInput
    _min?: ChatGroupMinOrderByAggregateInput
    _sum?: ChatGroupSumOrderByAggregateInput
  }

  export type ChatGroupScalarWhereWithAggregatesInput = {
    AND?: ChatGroupScalarWhereWithAggregatesInput | ChatGroupScalarWhereWithAggregatesInput[]
    OR?: ChatGroupScalarWhereWithAggregatesInput[]
    NOT?: ChatGroupScalarWhereWithAggregatesInput | ChatGroupScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ChatGroup"> | number
    name?: StringWithAggregatesFilter<"ChatGroup"> | string
    isPersonalChat?: BoolWithAggregatesFilter<"ChatGroup"> | boolean
    adminId?: IntWithAggregatesFilter<"ChatGroup"> | number
    avatar?: StringWithAggregatesFilter<"ChatGroup"> | string
  }

  export type ChatMessageWhereInput = {
    AND?: ChatMessageWhereInput | ChatMessageWhereInput[]
    OR?: ChatMessageWhereInput[]
    NOT?: ChatMessageWhereInput | ChatMessageWhereInput[]
    id?: IntFilter<"ChatMessage"> | number
    content?: StringFilter<"ChatMessage"> | string
    sentAt?: DateTimeFilter<"ChatMessage"> | Date | string
    authorId?: IntFilter<"ChatMessage"> | number
    chatGroupId?: IntFilter<"ChatMessage"> | number
    attachedImage?: StringFilter<"ChatMessage"> | string
    author?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
    chatGroup?: XOR<ChatGroupScalarRelationFilter, ChatGroupWhereInput>
  }

  export type ChatMessageOrderByWithRelationInput = {
    id?: SortOrder
    content?: SortOrder
    sentAt?: SortOrder
    authorId?: SortOrder
    chatGroupId?: SortOrder
    attachedImage?: SortOrder
    author?: ProfileOrderByWithRelationInput
    chatGroup?: ChatGroupOrderByWithRelationInput
  }

  export type ChatMessageWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ChatMessageWhereInput | ChatMessageWhereInput[]
    OR?: ChatMessageWhereInput[]
    NOT?: ChatMessageWhereInput | ChatMessageWhereInput[]
    content?: StringFilter<"ChatMessage"> | string
    sentAt?: DateTimeFilter<"ChatMessage"> | Date | string
    authorId?: IntFilter<"ChatMessage"> | number
    chatGroupId?: IntFilter<"ChatMessage"> | number
    attachedImage?: StringFilter<"ChatMessage"> | string
    author?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
    chatGroup?: XOR<ChatGroupScalarRelationFilter, ChatGroupWhereInput>
  }, "id">

  export type ChatMessageOrderByWithAggregationInput = {
    id?: SortOrder
    content?: SortOrder
    sentAt?: SortOrder
    authorId?: SortOrder
    chatGroupId?: SortOrder
    attachedImage?: SortOrder
    _count?: ChatMessageCountOrderByAggregateInput
    _avg?: ChatMessageAvgOrderByAggregateInput
    _max?: ChatMessageMaxOrderByAggregateInput
    _min?: ChatMessageMinOrderByAggregateInput
    _sum?: ChatMessageSumOrderByAggregateInput
  }

  export type ChatMessageScalarWhereWithAggregatesInput = {
    AND?: ChatMessageScalarWhereWithAggregatesInput | ChatMessageScalarWhereWithAggregatesInput[]
    OR?: ChatMessageScalarWhereWithAggregatesInput[]
    NOT?: ChatMessageScalarWhereWithAggregatesInput | ChatMessageScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ChatMessage"> | number
    content?: StringWithAggregatesFilter<"ChatMessage"> | string
    sentAt?: DateTimeWithAggregatesFilter<"ChatMessage"> | Date | string
    authorId?: IntWithAggregatesFilter<"ChatMessage"> | number
    chatGroupId?: IntWithAggregatesFilter<"ChatMessage"> | number
    attachedImage?: StringWithAggregatesFilter<"ChatMessage"> | string
  }

  export type FriendshipWhereInput = {
    AND?: FriendshipWhereInput | FriendshipWhereInput[]
    OR?: FriendshipWhereInput[]
    NOT?: FriendshipWhereInput | FriendshipWhereInput[]
    id?: IntFilter<"Friendship"> | number
    idTo?: IntFilter<"Friendship"> | number
    idFromId?: IntFilter<"Friendship"> | number
    accepted?: BoolFilter<"Friendship"> | boolean
    profile1?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
    profile2?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
  }

  export type FriendshipOrderByWithRelationInput = {
    id?: SortOrder
    idTo?: SortOrder
    idFromId?: SortOrder
    accepted?: SortOrder
    profile1?: ProfileOrderByWithRelationInput
    profile2?: ProfileOrderByWithRelationInput
  }

  export type FriendshipWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FriendshipWhereInput | FriendshipWhereInput[]
    OR?: FriendshipWhereInput[]
    NOT?: FriendshipWhereInput | FriendshipWhereInput[]
    idTo?: IntFilter<"Friendship"> | number
    idFromId?: IntFilter<"Friendship"> | number
    accepted?: BoolFilter<"Friendship"> | boolean
    profile1?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
    profile2?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
  }, "id">

  export type FriendshipOrderByWithAggregationInput = {
    id?: SortOrder
    idTo?: SortOrder
    idFromId?: SortOrder
    accepted?: SortOrder
    _count?: FriendshipCountOrderByAggregateInput
    _avg?: FriendshipAvgOrderByAggregateInput
    _max?: FriendshipMaxOrderByAggregateInput
    _min?: FriendshipMinOrderByAggregateInput
    _sum?: FriendshipSumOrderByAggregateInput
  }

  export type FriendshipScalarWhereWithAggregatesInput = {
    AND?: FriendshipScalarWhereWithAggregatesInput | FriendshipScalarWhereWithAggregatesInput[]
    OR?: FriendshipScalarWhereWithAggregatesInput[]
    NOT?: FriendshipScalarWhereWithAggregatesInput | FriendshipScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Friendship"> | number
    idTo?: IntWithAggregatesFilter<"Friendship"> | number
    idFromId?: IntWithAggregatesFilter<"Friendship"> | number
    accepted?: BoolWithAggregatesFilter<"Friendship"> | boolean
  }

  export type ImageWhereInput = {
    AND?: ImageWhereInput | ImageWhereInput[]
    OR?: ImageWhereInput[]
    NOT?: ImageWhereInput | ImageWhereInput[]
    id?: IntFilter<"Image"> | number
    url?: StringFilter<"Image"> | string
    uploadedAt?: DateTimeFilter<"Image"> | Date | string
    UserPost?: UserPostListRelationFilter
    Album?: AlbumListRelationFilter
  }

  export type ImageOrderByWithRelationInput = {
    id?: SortOrder
    url?: SortOrder
    uploadedAt?: SortOrder
    UserPost?: UserPostOrderByRelationAggregateInput
    Album?: AlbumOrderByRelationAggregateInput
  }

  export type ImageWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ImageWhereInput | ImageWhereInput[]
    OR?: ImageWhereInput[]
    NOT?: ImageWhereInput | ImageWhereInput[]
    url?: StringFilter<"Image"> | string
    uploadedAt?: DateTimeFilter<"Image"> | Date | string
    UserPost?: UserPostListRelationFilter
    Album?: AlbumListRelationFilter
  }, "id">

  export type ImageOrderByWithAggregationInput = {
    id?: SortOrder
    url?: SortOrder
    uploadedAt?: SortOrder
    _count?: ImageCountOrderByAggregateInput
    _avg?: ImageAvgOrderByAggregateInput
    _max?: ImageMaxOrderByAggregateInput
    _min?: ImageMinOrderByAggregateInput
    _sum?: ImageSumOrderByAggregateInput
  }

  export type ImageScalarWhereWithAggregatesInput = {
    AND?: ImageScalarWhereWithAggregatesInput | ImageScalarWhereWithAggregatesInput[]
    OR?: ImageScalarWhereWithAggregatesInput[]
    NOT?: ImageScalarWhereWithAggregatesInput | ImageScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Image"> | number
    url?: StringWithAggregatesFilter<"Image"> | string
    uploadedAt?: DateTimeWithAggregatesFilter<"Image"> | Date | string
  }

  export type UserPostWhereInput = {
    AND?: UserPostWhereInput | UserPostWhereInput[]
    OR?: UserPostWhereInput[]
    NOT?: UserPostWhereInput | UserPostWhereInput[]
    id?: IntFilter<"UserPost"> | number
    title?: StringFilter<"UserPost"> | string
    content?: StringFilter<"UserPost"> | string
    authorId?: IntFilter<"UserPost"> | number
    linkId?: IntNullableFilter<"UserPost"> | number | null
    tags?: TagsListRelationFilter
    images?: ImageListRelationFilter
    views?: ProfileListRelationFilter
    likes?: ProfileListRelationFilter
    author?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
    link?: XOR<LinkNullableScalarRelationFilter, LinkWhereInput> | null
  }

  export type UserPostOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    authorId?: SortOrder
    linkId?: SortOrderInput | SortOrder
    tags?: TagsOrderByRelationAggregateInput
    images?: ImageOrderByRelationAggregateInput
    views?: ProfileOrderByRelationAggregateInput
    likes?: ProfileOrderByRelationAggregateInput
    author?: ProfileOrderByWithRelationInput
    link?: LinkOrderByWithRelationInput
  }

  export type UserPostWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: UserPostWhereInput | UserPostWhereInput[]
    OR?: UserPostWhereInput[]
    NOT?: UserPostWhereInput | UserPostWhereInput[]
    title?: StringFilter<"UserPost"> | string
    content?: StringFilter<"UserPost"> | string
    authorId?: IntFilter<"UserPost"> | number
    linkId?: IntNullableFilter<"UserPost"> | number | null
    tags?: TagsListRelationFilter
    images?: ImageListRelationFilter
    views?: ProfileListRelationFilter
    likes?: ProfileListRelationFilter
    author?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
    link?: XOR<LinkNullableScalarRelationFilter, LinkWhereInput> | null
  }, "id">

  export type UserPostOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    authorId?: SortOrder
    linkId?: SortOrderInput | SortOrder
    _count?: UserPostCountOrderByAggregateInput
    _avg?: UserPostAvgOrderByAggregateInput
    _max?: UserPostMaxOrderByAggregateInput
    _min?: UserPostMinOrderByAggregateInput
    _sum?: UserPostSumOrderByAggregateInput
  }

  export type UserPostScalarWhereWithAggregatesInput = {
    AND?: UserPostScalarWhereWithAggregatesInput | UserPostScalarWhereWithAggregatesInput[]
    OR?: UserPostScalarWhereWithAggregatesInput[]
    NOT?: UserPostScalarWhereWithAggregatesInput | UserPostScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UserPost"> | number
    title?: StringWithAggregatesFilter<"UserPost"> | string
    content?: StringWithAggregatesFilter<"UserPost"> | string
    authorId?: IntWithAggregatesFilter<"UserPost"> | number
    linkId?: IntNullableWithAggregatesFilter<"UserPost"> | number | null
  }

  export type TagsWhereInput = {
    AND?: TagsWhereInput | TagsWhereInput[]
    OR?: TagsWhereInput[]
    NOT?: TagsWhereInput | TagsWhereInput[]
    id?: IntFilter<"Tags"> | number
    name?: StringFilter<"Tags"> | string
    UserPost?: UserPostListRelationFilter
  }

  export type TagsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    UserPost?: UserPostOrderByRelationAggregateInput
  }

  export type TagsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TagsWhereInput | TagsWhereInput[]
    OR?: TagsWhereInput[]
    NOT?: TagsWhereInput | TagsWhereInput[]
    name?: StringFilter<"Tags"> | string
    UserPost?: UserPostListRelationFilter
  }, "id">

  export type TagsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: TagsCountOrderByAggregateInput
    _avg?: TagsAvgOrderByAggregateInput
    _max?: TagsMaxOrderByAggregateInput
    _min?: TagsMinOrderByAggregateInput
    _sum?: TagsSumOrderByAggregateInput
  }

  export type TagsScalarWhereWithAggregatesInput = {
    AND?: TagsScalarWhereWithAggregatesInput | TagsScalarWhereWithAggregatesInput[]
    OR?: TagsScalarWhereWithAggregatesInput[]
    NOT?: TagsScalarWhereWithAggregatesInput | TagsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Tags"> | number
    name?: StringWithAggregatesFilter<"Tags"> | string
  }

  export type LinkWhereInput = {
    AND?: LinkWhereInput | LinkWhereInput[]
    OR?: LinkWhereInput[]
    NOT?: LinkWhereInput | LinkWhereInput[]
    id?: IntFilter<"Link"> | number
    url?: StringFilter<"Link"> | string
    userPost?: UserPostListRelationFilter
  }

  export type LinkOrderByWithRelationInput = {
    id?: SortOrder
    url?: SortOrder
    userPost?: UserPostOrderByRelationAggregateInput
  }

  export type LinkWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: LinkWhereInput | LinkWhereInput[]
    OR?: LinkWhereInput[]
    NOT?: LinkWhereInput | LinkWhereInput[]
    url?: StringFilter<"Link"> | string
    userPost?: UserPostListRelationFilter
  }, "id">

  export type LinkOrderByWithAggregationInput = {
    id?: SortOrder
    url?: SortOrder
    _count?: LinkCountOrderByAggregateInput
    _avg?: LinkAvgOrderByAggregateInput
    _max?: LinkMaxOrderByAggregateInput
    _min?: LinkMinOrderByAggregateInput
    _sum?: LinkSumOrderByAggregateInput
  }

  export type LinkScalarWhereWithAggregatesInput = {
    AND?: LinkScalarWhereWithAggregatesInput | LinkScalarWhereWithAggregatesInput[]
    OR?: LinkScalarWhereWithAggregatesInput[]
    NOT?: LinkScalarWhereWithAggregatesInput | LinkScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Link"> | number
    url?: StringWithAggregatesFilter<"Link"> | string
  }

  export type ProfileWhereInput = {
    AND?: ProfileWhereInput | ProfileWhereInput[]
    OR?: ProfileWhereInput[]
    NOT?: ProfileWhereInput | ProfileWhereInput[]
    id?: IntFilter<"Profile"> | number
    name?: StringNullableFilter<"Profile"> | string | null
    username?: StringNullableFilter<"Profile"> | string | null
    surname?: StringNullableFilter<"Profile"> | string | null
    dateOfBirth?: DateTimeNullableFilter<"Profile"> | Date | string | null
    email?: StringFilter<"Profile"> | string
    password?: StringFilter<"Profile"> | string
    image?: StringNullableFilter<"Profile"> | string | null
    about?: StringNullableFilter<"Profile"> | string | null
    signature?: StringNullableFilter<"Profile"> | string | null
    post?: UserPostListRelationFilter
    album?: AlbumListRelationFilter
    chats?: ChatGroupListRelationFilter
    administeredGroups?: ChatGroupListRelationFilter
    chatMessages?: ChatMessageListRelationFilter
    userPostViews?: UserPostListRelationFilter
    userPostLikes?: UserPostListRelationFilter
    avatar?: XOR<AvatarNullableScalarRelationFilter, AvatarWhereInput> | null
    friendshipFrom?: FriendshipListRelationFilter
    friendshipTo?: FriendshipListRelationFilter
  }

  export type ProfileOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    username?: SortOrderInput | SortOrder
    surname?: SortOrderInput | SortOrder
    dateOfBirth?: SortOrderInput | SortOrder
    email?: SortOrder
    password?: SortOrder
    image?: SortOrderInput | SortOrder
    about?: SortOrderInput | SortOrder
    signature?: SortOrderInput | SortOrder
    post?: UserPostOrderByRelationAggregateInput
    album?: AlbumOrderByRelationAggregateInput
    chats?: ChatGroupOrderByRelationAggregateInput
    administeredGroups?: ChatGroupOrderByRelationAggregateInput
    chatMessages?: ChatMessageOrderByRelationAggregateInput
    userPostViews?: UserPostOrderByRelationAggregateInput
    userPostLikes?: UserPostOrderByRelationAggregateInput
    avatar?: AvatarOrderByWithRelationInput
    friendshipFrom?: FriendshipOrderByRelationAggregateInput
    friendshipTo?: FriendshipOrderByRelationAggregateInput
  }

  export type ProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    email?: string
    AND?: ProfileWhereInput | ProfileWhereInput[]
    OR?: ProfileWhereInput[]
    NOT?: ProfileWhereInput | ProfileWhereInput[]
    name?: StringNullableFilter<"Profile"> | string | null
    surname?: StringNullableFilter<"Profile"> | string | null
    dateOfBirth?: DateTimeNullableFilter<"Profile"> | Date | string | null
    password?: StringFilter<"Profile"> | string
    image?: StringNullableFilter<"Profile"> | string | null
    about?: StringNullableFilter<"Profile"> | string | null
    signature?: StringNullableFilter<"Profile"> | string | null
    post?: UserPostListRelationFilter
    album?: AlbumListRelationFilter
    chats?: ChatGroupListRelationFilter
    administeredGroups?: ChatGroupListRelationFilter
    chatMessages?: ChatMessageListRelationFilter
    userPostViews?: UserPostListRelationFilter
    userPostLikes?: UserPostListRelationFilter
    avatar?: XOR<AvatarNullableScalarRelationFilter, AvatarWhereInput> | null
    friendshipFrom?: FriendshipListRelationFilter
    friendshipTo?: FriendshipListRelationFilter
  }, "id" | "username" | "email">

  export type ProfileOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    username?: SortOrderInput | SortOrder
    surname?: SortOrderInput | SortOrder
    dateOfBirth?: SortOrderInput | SortOrder
    email?: SortOrder
    password?: SortOrder
    image?: SortOrderInput | SortOrder
    about?: SortOrderInput | SortOrder
    signature?: SortOrderInput | SortOrder
    _count?: ProfileCountOrderByAggregateInput
    _avg?: ProfileAvgOrderByAggregateInput
    _max?: ProfileMaxOrderByAggregateInput
    _min?: ProfileMinOrderByAggregateInput
    _sum?: ProfileSumOrderByAggregateInput
  }

  export type ProfileScalarWhereWithAggregatesInput = {
    AND?: ProfileScalarWhereWithAggregatesInput | ProfileScalarWhereWithAggregatesInput[]
    OR?: ProfileScalarWhereWithAggregatesInput[]
    NOT?: ProfileScalarWhereWithAggregatesInput | ProfileScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Profile"> | number
    name?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    username?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    surname?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    dateOfBirth?: DateTimeNullableWithAggregatesFilter<"Profile"> | Date | string | null
    email?: StringWithAggregatesFilter<"Profile"> | string
    password?: StringWithAggregatesFilter<"Profile"> | string
    image?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    about?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    signature?: StringNullableWithAggregatesFilter<"Profile"> | string | null
  }

  export type AvatarWhereInput = {
    AND?: AvatarWhereInput | AvatarWhereInput[]
    OR?: AvatarWhereInput[]
    NOT?: AvatarWhereInput | AvatarWhereInput[]
    id?: IntFilter<"Avatar"> | number
    image?: StringFilter<"Avatar"> | string
    profileId?: IntFilter<"Avatar"> | number
    shown?: BoolFilter<"Avatar"> | boolean
    active?: BoolFilter<"Avatar"> | boolean
    profile?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
  }

  export type AvatarOrderByWithRelationInput = {
    id?: SortOrder
    image?: SortOrder
    profileId?: SortOrder
    shown?: SortOrder
    active?: SortOrder
    profile?: ProfileOrderByWithRelationInput
  }

  export type AvatarWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    profileId?: number
    AND?: AvatarWhereInput | AvatarWhereInput[]
    OR?: AvatarWhereInput[]
    NOT?: AvatarWhereInput | AvatarWhereInput[]
    image?: StringFilter<"Avatar"> | string
    shown?: BoolFilter<"Avatar"> | boolean
    active?: BoolFilter<"Avatar"> | boolean
    profile?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
  }, "id" | "profileId">

  export type AvatarOrderByWithAggregationInput = {
    id?: SortOrder
    image?: SortOrder
    profileId?: SortOrder
    shown?: SortOrder
    active?: SortOrder
    _count?: AvatarCountOrderByAggregateInput
    _avg?: AvatarAvgOrderByAggregateInput
    _max?: AvatarMaxOrderByAggregateInput
    _min?: AvatarMinOrderByAggregateInput
    _sum?: AvatarSumOrderByAggregateInput
  }

  export type AvatarScalarWhereWithAggregatesInput = {
    AND?: AvatarScalarWhereWithAggregatesInput | AvatarScalarWhereWithAggregatesInput[]
    OR?: AvatarScalarWhereWithAggregatesInput[]
    NOT?: AvatarScalarWhereWithAggregatesInput | AvatarScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Avatar"> | number
    image?: StringWithAggregatesFilter<"Avatar"> | string
    profileId?: IntWithAggregatesFilter<"Avatar"> | number
    shown?: BoolWithAggregatesFilter<"Avatar"> | boolean
    active?: BoolWithAggregatesFilter<"Avatar"> | boolean
  }

  export type AlbumCreateInput = {
    name: string
    created_at?: Date | string
    shown?: boolean
    topic?: string | null
    images?: ImageCreateNestedManyWithoutAlbumInput
    author: ProfileCreateNestedOneWithoutAlbumInput
  }

  export type AlbumUncheckedCreateInput = {
    id?: number
    name: string
    created_at?: Date | string
    shown?: boolean
    topic?: string | null
    authorId: number
    images?: ImageUncheckedCreateNestedManyWithoutAlbumInput
  }

  export type AlbumUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    shown?: BoolFieldUpdateOperationsInput | boolean
    topic?: NullableStringFieldUpdateOperationsInput | string | null
    images?: ImageUpdateManyWithoutAlbumNestedInput
    author?: ProfileUpdateOneRequiredWithoutAlbumNestedInput
  }

  export type AlbumUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    shown?: BoolFieldUpdateOperationsInput | boolean
    topic?: NullableStringFieldUpdateOperationsInput | string | null
    authorId?: IntFieldUpdateOperationsInput | number
    images?: ImageUncheckedUpdateManyWithoutAlbumNestedInput
  }

  export type AlbumCreateManyInput = {
    id?: number
    name: string
    created_at?: Date | string
    shown?: boolean
    topic?: string | null
    authorId: number
  }

  export type AlbumUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    shown?: BoolFieldUpdateOperationsInput | boolean
    topic?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AlbumUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    shown?: BoolFieldUpdateOperationsInput | boolean
    topic?: NullableStringFieldUpdateOperationsInput | string | null
    authorId?: IntFieldUpdateOperationsInput | number
  }

  export type ChatGroupCreateInput = {
    name: string
    isPersonalChat?: boolean
    avatar: string
    members?: ProfileCreateNestedManyWithoutChatsInput
    admin: ProfileCreateNestedOneWithoutAdministeredGroupsInput
    chatMessages?: ChatMessageCreateNestedManyWithoutChatGroupInput
  }

  export type ChatGroupUncheckedCreateInput = {
    id?: number
    name: string
    isPersonalChat?: boolean
    adminId: number
    avatar: string
    members?: ProfileUncheckedCreateNestedManyWithoutChatsInput
    chatMessages?: ChatMessageUncheckedCreateNestedManyWithoutChatGroupInput
  }

  export type ChatGroupUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    isPersonalChat?: BoolFieldUpdateOperationsInput | boolean
    avatar?: StringFieldUpdateOperationsInput | string
    members?: ProfileUpdateManyWithoutChatsNestedInput
    admin?: ProfileUpdateOneRequiredWithoutAdministeredGroupsNestedInput
    chatMessages?: ChatMessageUpdateManyWithoutChatGroupNestedInput
  }

  export type ChatGroupUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    isPersonalChat?: BoolFieldUpdateOperationsInput | boolean
    adminId?: IntFieldUpdateOperationsInput | number
    avatar?: StringFieldUpdateOperationsInput | string
    members?: ProfileUncheckedUpdateManyWithoutChatsNestedInput
    chatMessages?: ChatMessageUncheckedUpdateManyWithoutChatGroupNestedInput
  }

  export type ChatGroupCreateManyInput = {
    id?: number
    name: string
    isPersonalChat?: boolean
    adminId: number
    avatar: string
  }

  export type ChatGroupUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    isPersonalChat?: BoolFieldUpdateOperationsInput | boolean
    avatar?: StringFieldUpdateOperationsInput | string
  }

  export type ChatGroupUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    isPersonalChat?: BoolFieldUpdateOperationsInput | boolean
    adminId?: IntFieldUpdateOperationsInput | number
    avatar?: StringFieldUpdateOperationsInput | string
  }

  export type ChatMessageCreateInput = {
    content: string
    sentAt?: Date | string
    attachedImage: string
    author: ProfileCreateNestedOneWithoutChatMessagesInput
    chatGroup: ChatGroupCreateNestedOneWithoutChatMessagesInput
  }

  export type ChatMessageUncheckedCreateInput = {
    id?: number
    content: string
    sentAt?: Date | string
    authorId: number
    chatGroupId: number
    attachedImage: string
  }

  export type ChatMessageUpdateInput = {
    content?: StringFieldUpdateOperationsInput | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attachedImage?: StringFieldUpdateOperationsInput | string
    author?: ProfileUpdateOneRequiredWithoutChatMessagesNestedInput
    chatGroup?: ChatGroupUpdateOneRequiredWithoutChatMessagesNestedInput
  }

  export type ChatMessageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authorId?: IntFieldUpdateOperationsInput | number
    chatGroupId?: IntFieldUpdateOperationsInput | number
    attachedImage?: StringFieldUpdateOperationsInput | string
  }

  export type ChatMessageCreateManyInput = {
    id?: number
    content: string
    sentAt?: Date | string
    authorId: number
    chatGroupId: number
    attachedImage: string
  }

  export type ChatMessageUpdateManyMutationInput = {
    content?: StringFieldUpdateOperationsInput | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attachedImage?: StringFieldUpdateOperationsInput | string
  }

  export type ChatMessageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authorId?: IntFieldUpdateOperationsInput | number
    chatGroupId?: IntFieldUpdateOperationsInput | number
    attachedImage?: StringFieldUpdateOperationsInput | string
  }

  export type FriendshipCreateInput = {
    accepted?: boolean
    profile1: ProfileCreateNestedOneWithoutFriendshipFromInput
    profile2: ProfileCreateNestedOneWithoutFriendshipToInput
  }

  export type FriendshipUncheckedCreateInput = {
    id?: number
    idTo: number
    idFromId: number
    accepted?: boolean
  }

  export type FriendshipUpdateInput = {
    accepted?: BoolFieldUpdateOperationsInput | boolean
    profile1?: ProfileUpdateOneRequiredWithoutFriendshipFromNestedInput
    profile2?: ProfileUpdateOneRequiredWithoutFriendshipToNestedInput
  }

  export type FriendshipUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    idTo?: IntFieldUpdateOperationsInput | number
    idFromId?: IntFieldUpdateOperationsInput | number
    accepted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type FriendshipCreateManyInput = {
    id?: number
    idTo: number
    idFromId: number
    accepted?: boolean
  }

  export type FriendshipUpdateManyMutationInput = {
    accepted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type FriendshipUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    idTo?: IntFieldUpdateOperationsInput | number
    idFromId?: IntFieldUpdateOperationsInput | number
    accepted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ImageCreateInput = {
    url: string
    uploadedAt?: Date | string
    UserPost?: UserPostCreateNestedManyWithoutImagesInput
    Album?: AlbumCreateNestedManyWithoutImagesInput
  }

  export type ImageUncheckedCreateInput = {
    id?: number
    url: string
    uploadedAt?: Date | string
    UserPost?: UserPostUncheckedCreateNestedManyWithoutImagesInput
    Album?: AlbumUncheckedCreateNestedManyWithoutImagesInput
  }

  export type ImageUpdateInput = {
    url?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UserPost?: UserPostUpdateManyWithoutImagesNestedInput
    Album?: AlbumUpdateManyWithoutImagesNestedInput
  }

  export type ImageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UserPost?: UserPostUncheckedUpdateManyWithoutImagesNestedInput
    Album?: AlbumUncheckedUpdateManyWithoutImagesNestedInput
  }

  export type ImageCreateManyInput = {
    id?: number
    url: string
    uploadedAt?: Date | string
  }

  export type ImageUpdateManyMutationInput = {
    url?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserPostCreateInput = {
    title: string
    content: string
    tags?: TagsCreateNestedManyWithoutUserPostInput
    images?: ImageCreateNestedManyWithoutUserPostInput
    views?: ProfileCreateNestedManyWithoutUserPostViewsInput
    likes?: ProfileCreateNestedManyWithoutUserPostLikesInput
    author: ProfileCreateNestedOneWithoutPostInput
    link?: LinkCreateNestedOneWithoutUserPostInput
  }

  export type UserPostUncheckedCreateInput = {
    id?: number
    title: string
    content: string
    authorId: number
    linkId?: number | null
    tags?: TagsUncheckedCreateNestedManyWithoutUserPostInput
    images?: ImageUncheckedCreateNestedManyWithoutUserPostInput
    views?: ProfileUncheckedCreateNestedManyWithoutUserPostViewsInput
    likes?: ProfileUncheckedCreateNestedManyWithoutUserPostLikesInput
  }

  export type UserPostUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    tags?: TagsUpdateManyWithoutUserPostNestedInput
    images?: ImageUpdateManyWithoutUserPostNestedInput
    views?: ProfileUpdateManyWithoutUserPostViewsNestedInput
    likes?: ProfileUpdateManyWithoutUserPostLikesNestedInput
    author?: ProfileUpdateOneRequiredWithoutPostNestedInput
    link?: LinkUpdateOneWithoutUserPostNestedInput
  }

  export type UserPostUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    authorId?: IntFieldUpdateOperationsInput | number
    linkId?: NullableIntFieldUpdateOperationsInput | number | null
    tags?: TagsUncheckedUpdateManyWithoutUserPostNestedInput
    images?: ImageUncheckedUpdateManyWithoutUserPostNestedInput
    views?: ProfileUncheckedUpdateManyWithoutUserPostViewsNestedInput
    likes?: ProfileUncheckedUpdateManyWithoutUserPostLikesNestedInput
  }

  export type UserPostCreateManyInput = {
    id?: number
    title: string
    content: string
    authorId: number
    linkId?: number | null
  }

  export type UserPostUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
  }

  export type UserPostUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    authorId?: IntFieldUpdateOperationsInput | number
    linkId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TagsCreateInput = {
    name: string
    UserPost?: UserPostCreateNestedManyWithoutTagsInput
  }

  export type TagsUncheckedCreateInput = {
    id?: number
    name: string
    UserPost?: UserPostUncheckedCreateNestedManyWithoutTagsInput
  }

  export type TagsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    UserPost?: UserPostUpdateManyWithoutTagsNestedInput
  }

  export type TagsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    UserPost?: UserPostUncheckedUpdateManyWithoutTagsNestedInput
  }

  export type TagsCreateManyInput = {
    id?: number
    name: string
  }

  export type TagsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TagsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type LinkCreateInput = {
    url: string
    userPost?: UserPostCreateNestedManyWithoutLinkInput
  }

  export type LinkUncheckedCreateInput = {
    id?: number
    url: string
    userPost?: UserPostUncheckedCreateNestedManyWithoutLinkInput
  }

  export type LinkUpdateInput = {
    url?: StringFieldUpdateOperationsInput | string
    userPost?: UserPostUpdateManyWithoutLinkNestedInput
  }

  export type LinkUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    userPost?: UserPostUncheckedUpdateManyWithoutLinkNestedInput
  }

  export type LinkCreateManyInput = {
    id?: number
    url: string
  }

  export type LinkUpdateManyMutationInput = {
    url?: StringFieldUpdateOperationsInput | string
  }

  export type LinkUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
  }

  export type ProfileCreateInput = {
    name?: string | null
    username?: string | null
    surname?: string | null
    dateOfBirth?: Date | string | null
    email: string
    password: string
    image?: string | null
    about?: string | null
    signature?: string | null
    post?: UserPostCreateNestedManyWithoutAuthorInput
    album?: AlbumCreateNestedManyWithoutAuthorInput
    chats?: ChatGroupCreateNestedManyWithoutMembersInput
    administeredGroups?: ChatGroupCreateNestedManyWithoutAdminInput
    chatMessages?: ChatMessageCreateNestedManyWithoutAuthorInput
    userPostViews?: UserPostCreateNestedManyWithoutViewsInput
    userPostLikes?: UserPostCreateNestedManyWithoutLikesInput
    avatar?: AvatarCreateNestedOneWithoutProfileInput
    friendshipFrom?: FriendshipCreateNestedManyWithoutProfile1Input
    friendshipTo?: FriendshipCreateNestedManyWithoutProfile2Input
  }

  export type ProfileUncheckedCreateInput = {
    id?: number
    name?: string | null
    username?: string | null
    surname?: string | null
    dateOfBirth?: Date | string | null
    email: string
    password: string
    image?: string | null
    about?: string | null
    signature?: string | null
    post?: UserPostUncheckedCreateNestedManyWithoutAuthorInput
    album?: AlbumUncheckedCreateNestedManyWithoutAuthorInput
    chats?: ChatGroupUncheckedCreateNestedManyWithoutMembersInput
    administeredGroups?: ChatGroupUncheckedCreateNestedManyWithoutAdminInput
    chatMessages?: ChatMessageUncheckedCreateNestedManyWithoutAuthorInput
    userPostViews?: UserPostUncheckedCreateNestedManyWithoutViewsInput
    userPostLikes?: UserPostUncheckedCreateNestedManyWithoutLikesInput
    avatar?: AvatarUncheckedCreateNestedOneWithoutProfileInput
    friendshipFrom?: FriendshipUncheckedCreateNestedManyWithoutProfile1Input
    friendshipTo?: FriendshipUncheckedCreateNestedManyWithoutProfile2Input
  }

  export type ProfileUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    signature?: NullableStringFieldUpdateOperationsInput | string | null
    post?: UserPostUpdateManyWithoutAuthorNestedInput
    album?: AlbumUpdateManyWithoutAuthorNestedInput
    chats?: ChatGroupUpdateManyWithoutMembersNestedInput
    administeredGroups?: ChatGroupUpdateManyWithoutAdminNestedInput
    chatMessages?: ChatMessageUpdateManyWithoutAuthorNestedInput
    userPostViews?: UserPostUpdateManyWithoutViewsNestedInput
    userPostLikes?: UserPostUpdateManyWithoutLikesNestedInput
    avatar?: AvatarUpdateOneWithoutProfileNestedInput
    friendshipFrom?: FriendshipUpdateManyWithoutProfile1NestedInput
    friendshipTo?: FriendshipUpdateManyWithoutProfile2NestedInput
  }

  export type ProfileUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    signature?: NullableStringFieldUpdateOperationsInput | string | null
    post?: UserPostUncheckedUpdateManyWithoutAuthorNestedInput
    album?: AlbumUncheckedUpdateManyWithoutAuthorNestedInput
    chats?: ChatGroupUncheckedUpdateManyWithoutMembersNestedInput
    administeredGroups?: ChatGroupUncheckedUpdateManyWithoutAdminNestedInput
    chatMessages?: ChatMessageUncheckedUpdateManyWithoutAuthorNestedInput
    userPostViews?: UserPostUncheckedUpdateManyWithoutViewsNestedInput
    userPostLikes?: UserPostUncheckedUpdateManyWithoutLikesNestedInput
    avatar?: AvatarUncheckedUpdateOneWithoutProfileNestedInput
    friendshipFrom?: FriendshipUncheckedUpdateManyWithoutProfile1NestedInput
    friendshipTo?: FriendshipUncheckedUpdateManyWithoutProfile2NestedInput
  }

  export type ProfileCreateManyInput = {
    id?: number
    name?: string | null
    username?: string | null
    surname?: string | null
    dateOfBirth?: Date | string | null
    email: string
    password: string
    image?: string | null
    about?: string | null
    signature?: string | null
  }

  export type ProfileUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    signature?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProfileUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    signature?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AvatarCreateInput = {
    image: string
    shown?: boolean
    active?: boolean
    profile: ProfileCreateNestedOneWithoutAvatarInput
  }

  export type AvatarUncheckedCreateInput = {
    id?: number
    image: string
    profileId: number
    shown?: boolean
    active?: boolean
  }

  export type AvatarUpdateInput = {
    image?: StringFieldUpdateOperationsInput | string
    shown?: BoolFieldUpdateOperationsInput | boolean
    active?: BoolFieldUpdateOperationsInput | boolean
    profile?: ProfileUpdateOneRequiredWithoutAvatarNestedInput
  }

  export type AvatarUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    profileId?: IntFieldUpdateOperationsInput | number
    shown?: BoolFieldUpdateOperationsInput | boolean
    active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AvatarCreateManyInput = {
    id?: number
    image: string
    profileId: number
    shown?: boolean
    active?: boolean
  }

  export type AvatarUpdateManyMutationInput = {
    image?: StringFieldUpdateOperationsInput | string
    shown?: BoolFieldUpdateOperationsInput | boolean
    active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AvatarUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    profileId?: IntFieldUpdateOperationsInput | number
    shown?: BoolFieldUpdateOperationsInput | boolean
    active?: BoolFieldUpdateOperationsInput | boolean
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

  export type ImageListRelationFilter = {
    every?: ImageWhereInput
    some?: ImageWhereInput
    none?: ImageWhereInput
  }

  export type ProfileScalarRelationFilter = {
    is?: ProfileWhereInput
    isNot?: ProfileWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ImageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AlbumCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    shown?: SortOrder
    topic?: SortOrder
    authorId?: SortOrder
  }

  export type AlbumAvgOrderByAggregateInput = {
    id?: SortOrder
    authorId?: SortOrder
  }

  export type AlbumMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    shown?: SortOrder
    topic?: SortOrder
    authorId?: SortOrder
  }

  export type AlbumMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    shown?: SortOrder
    topic?: SortOrder
    authorId?: SortOrder
  }

  export type AlbumSumOrderByAggregateInput = {
    id?: SortOrder
    authorId?: SortOrder
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

  export type ProfileListRelationFilter = {
    every?: ProfileWhereInput
    some?: ProfileWhereInput
    none?: ProfileWhereInput
  }

  export type ChatMessageListRelationFilter = {
    every?: ChatMessageWhereInput
    some?: ChatMessageWhereInput
    none?: ChatMessageWhereInput
  }

  export type ProfileOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChatMessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChatGroupCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    isPersonalChat?: SortOrder
    adminId?: SortOrder
    avatar?: SortOrder
  }

  export type ChatGroupAvgOrderByAggregateInput = {
    id?: SortOrder
    adminId?: SortOrder
  }

  export type ChatGroupMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    isPersonalChat?: SortOrder
    adminId?: SortOrder
    avatar?: SortOrder
  }

  export type ChatGroupMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    isPersonalChat?: SortOrder
    adminId?: SortOrder
    avatar?: SortOrder
  }

  export type ChatGroupSumOrderByAggregateInput = {
    id?: SortOrder
    adminId?: SortOrder
  }

  export type ChatGroupScalarRelationFilter = {
    is?: ChatGroupWhereInput
    isNot?: ChatGroupWhereInput
  }

  export type ChatMessageCountOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    sentAt?: SortOrder
    authorId?: SortOrder
    chatGroupId?: SortOrder
    attachedImage?: SortOrder
  }

  export type ChatMessageAvgOrderByAggregateInput = {
    id?: SortOrder
    authorId?: SortOrder
    chatGroupId?: SortOrder
  }

  export type ChatMessageMaxOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    sentAt?: SortOrder
    authorId?: SortOrder
    chatGroupId?: SortOrder
    attachedImage?: SortOrder
  }

  export type ChatMessageMinOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    sentAt?: SortOrder
    authorId?: SortOrder
    chatGroupId?: SortOrder
    attachedImage?: SortOrder
  }

  export type ChatMessageSumOrderByAggregateInput = {
    id?: SortOrder
    authorId?: SortOrder
    chatGroupId?: SortOrder
  }

  export type FriendshipCountOrderByAggregateInput = {
    id?: SortOrder
    idTo?: SortOrder
    idFromId?: SortOrder
    accepted?: SortOrder
  }

  export type FriendshipAvgOrderByAggregateInput = {
    id?: SortOrder
    idTo?: SortOrder
    idFromId?: SortOrder
  }

  export type FriendshipMaxOrderByAggregateInput = {
    id?: SortOrder
    idTo?: SortOrder
    idFromId?: SortOrder
    accepted?: SortOrder
  }

  export type FriendshipMinOrderByAggregateInput = {
    id?: SortOrder
    idTo?: SortOrder
    idFromId?: SortOrder
    accepted?: SortOrder
  }

  export type FriendshipSumOrderByAggregateInput = {
    id?: SortOrder
    idTo?: SortOrder
    idFromId?: SortOrder
  }

  export type UserPostListRelationFilter = {
    every?: UserPostWhereInput
    some?: UserPostWhereInput
    none?: UserPostWhereInput
  }

  export type AlbumListRelationFilter = {
    every?: AlbumWhereInput
    some?: AlbumWhereInput
    none?: AlbumWhereInput
  }

  export type UserPostOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AlbumOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ImageCountOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    uploadedAt?: SortOrder
  }

  export type ImageAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ImageMaxOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    uploadedAt?: SortOrder
  }

  export type ImageMinOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    uploadedAt?: SortOrder
  }

  export type ImageSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type TagsListRelationFilter = {
    every?: TagsWhereInput
    some?: TagsWhereInput
    none?: TagsWhereInput
  }

  export type LinkNullableScalarRelationFilter = {
    is?: LinkWhereInput | null
    isNot?: LinkWhereInput | null
  }

  export type TagsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserPostCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    authorId?: SortOrder
    linkId?: SortOrder
  }

  export type UserPostAvgOrderByAggregateInput = {
    id?: SortOrder
    authorId?: SortOrder
    linkId?: SortOrder
  }

  export type UserPostMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    authorId?: SortOrder
    linkId?: SortOrder
  }

  export type UserPostMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    authorId?: SortOrder
    linkId?: SortOrder
  }

  export type UserPostSumOrderByAggregateInput = {
    id?: SortOrder
    authorId?: SortOrder
    linkId?: SortOrder
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

  export type TagsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type TagsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TagsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type TagsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type TagsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type LinkCountOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
  }

  export type LinkAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type LinkMaxOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
  }

  export type LinkMinOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
  }

  export type LinkSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type ChatGroupListRelationFilter = {
    every?: ChatGroupWhereInput
    some?: ChatGroupWhereInput
    none?: ChatGroupWhereInput
  }

  export type AvatarNullableScalarRelationFilter = {
    is?: AvatarWhereInput | null
    isNot?: AvatarWhereInput | null
  }

  export type FriendshipListRelationFilter = {
    every?: FriendshipWhereInput
    some?: FriendshipWhereInput
    none?: FriendshipWhereInput
  }

  export type ChatGroupOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FriendshipOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProfileCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    surname?: SortOrder
    dateOfBirth?: SortOrder
    email?: SortOrder
    password?: SortOrder
    image?: SortOrder
    about?: SortOrder
    signature?: SortOrder
  }

  export type ProfileAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    surname?: SortOrder
    dateOfBirth?: SortOrder
    email?: SortOrder
    password?: SortOrder
    image?: SortOrder
    about?: SortOrder
    signature?: SortOrder
  }

  export type ProfileMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    surname?: SortOrder
    dateOfBirth?: SortOrder
    email?: SortOrder
    password?: SortOrder
    image?: SortOrder
    about?: SortOrder
    signature?: SortOrder
  }

  export type ProfileSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type AvatarCountOrderByAggregateInput = {
    id?: SortOrder
    image?: SortOrder
    profileId?: SortOrder
    shown?: SortOrder
    active?: SortOrder
  }

  export type AvatarAvgOrderByAggregateInput = {
    id?: SortOrder
    profileId?: SortOrder
  }

  export type AvatarMaxOrderByAggregateInput = {
    id?: SortOrder
    image?: SortOrder
    profileId?: SortOrder
    shown?: SortOrder
    active?: SortOrder
  }

  export type AvatarMinOrderByAggregateInput = {
    id?: SortOrder
    image?: SortOrder
    profileId?: SortOrder
    shown?: SortOrder
    active?: SortOrder
  }

  export type AvatarSumOrderByAggregateInput = {
    id?: SortOrder
    profileId?: SortOrder
  }

  export type ImageCreateNestedManyWithoutAlbumInput = {
    create?: XOR<ImageCreateWithoutAlbumInput, ImageUncheckedCreateWithoutAlbumInput> | ImageCreateWithoutAlbumInput[] | ImageUncheckedCreateWithoutAlbumInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutAlbumInput | ImageCreateOrConnectWithoutAlbumInput[]
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
  }

  export type ProfileCreateNestedOneWithoutAlbumInput = {
    create?: XOR<ProfileCreateWithoutAlbumInput, ProfileUncheckedCreateWithoutAlbumInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutAlbumInput
    connect?: ProfileWhereUniqueInput
  }

  export type ImageUncheckedCreateNestedManyWithoutAlbumInput = {
    create?: XOR<ImageCreateWithoutAlbumInput, ImageUncheckedCreateWithoutAlbumInput> | ImageCreateWithoutAlbumInput[] | ImageUncheckedCreateWithoutAlbumInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutAlbumInput | ImageCreateOrConnectWithoutAlbumInput[]
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type ImageUpdateManyWithoutAlbumNestedInput = {
    create?: XOR<ImageCreateWithoutAlbumInput, ImageUncheckedCreateWithoutAlbumInput> | ImageCreateWithoutAlbumInput[] | ImageUncheckedCreateWithoutAlbumInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutAlbumInput | ImageCreateOrConnectWithoutAlbumInput[]
    upsert?: ImageUpsertWithWhereUniqueWithoutAlbumInput | ImageUpsertWithWhereUniqueWithoutAlbumInput[]
    set?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    disconnect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    delete?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    update?: ImageUpdateWithWhereUniqueWithoutAlbumInput | ImageUpdateWithWhereUniqueWithoutAlbumInput[]
    updateMany?: ImageUpdateManyWithWhereWithoutAlbumInput | ImageUpdateManyWithWhereWithoutAlbumInput[]
    deleteMany?: ImageScalarWhereInput | ImageScalarWhereInput[]
  }

  export type ProfileUpdateOneRequiredWithoutAlbumNestedInput = {
    create?: XOR<ProfileCreateWithoutAlbumInput, ProfileUncheckedCreateWithoutAlbumInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutAlbumInput
    upsert?: ProfileUpsertWithoutAlbumInput
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutAlbumInput, ProfileUpdateWithoutAlbumInput>, ProfileUncheckedUpdateWithoutAlbumInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ImageUncheckedUpdateManyWithoutAlbumNestedInput = {
    create?: XOR<ImageCreateWithoutAlbumInput, ImageUncheckedCreateWithoutAlbumInput> | ImageCreateWithoutAlbumInput[] | ImageUncheckedCreateWithoutAlbumInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutAlbumInput | ImageCreateOrConnectWithoutAlbumInput[]
    upsert?: ImageUpsertWithWhereUniqueWithoutAlbumInput | ImageUpsertWithWhereUniqueWithoutAlbumInput[]
    set?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    disconnect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    delete?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    update?: ImageUpdateWithWhereUniqueWithoutAlbumInput | ImageUpdateWithWhereUniqueWithoutAlbumInput[]
    updateMany?: ImageUpdateManyWithWhereWithoutAlbumInput | ImageUpdateManyWithWhereWithoutAlbumInput[]
    deleteMany?: ImageScalarWhereInput | ImageScalarWhereInput[]
  }

  export type ProfileCreateNestedManyWithoutChatsInput = {
    create?: XOR<ProfileCreateWithoutChatsInput, ProfileUncheckedCreateWithoutChatsInput> | ProfileCreateWithoutChatsInput[] | ProfileUncheckedCreateWithoutChatsInput[]
    connectOrCreate?: ProfileCreateOrConnectWithoutChatsInput | ProfileCreateOrConnectWithoutChatsInput[]
    connect?: ProfileWhereUniqueInput | ProfileWhereUniqueInput[]
  }

  export type ProfileCreateNestedOneWithoutAdministeredGroupsInput = {
    create?: XOR<ProfileCreateWithoutAdministeredGroupsInput, ProfileUncheckedCreateWithoutAdministeredGroupsInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutAdministeredGroupsInput
    connect?: ProfileWhereUniqueInput
  }

  export type ChatMessageCreateNestedManyWithoutChatGroupInput = {
    create?: XOR<ChatMessageCreateWithoutChatGroupInput, ChatMessageUncheckedCreateWithoutChatGroupInput> | ChatMessageCreateWithoutChatGroupInput[] | ChatMessageUncheckedCreateWithoutChatGroupInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutChatGroupInput | ChatMessageCreateOrConnectWithoutChatGroupInput[]
    createMany?: ChatMessageCreateManyChatGroupInputEnvelope
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
  }

  export type ProfileUncheckedCreateNestedManyWithoutChatsInput = {
    create?: XOR<ProfileCreateWithoutChatsInput, ProfileUncheckedCreateWithoutChatsInput> | ProfileCreateWithoutChatsInput[] | ProfileUncheckedCreateWithoutChatsInput[]
    connectOrCreate?: ProfileCreateOrConnectWithoutChatsInput | ProfileCreateOrConnectWithoutChatsInput[]
    connect?: ProfileWhereUniqueInput | ProfileWhereUniqueInput[]
  }

  export type ChatMessageUncheckedCreateNestedManyWithoutChatGroupInput = {
    create?: XOR<ChatMessageCreateWithoutChatGroupInput, ChatMessageUncheckedCreateWithoutChatGroupInput> | ChatMessageCreateWithoutChatGroupInput[] | ChatMessageUncheckedCreateWithoutChatGroupInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutChatGroupInput | ChatMessageCreateOrConnectWithoutChatGroupInput[]
    createMany?: ChatMessageCreateManyChatGroupInputEnvelope
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
  }

  export type ProfileUpdateManyWithoutChatsNestedInput = {
    create?: XOR<ProfileCreateWithoutChatsInput, ProfileUncheckedCreateWithoutChatsInput> | ProfileCreateWithoutChatsInput[] | ProfileUncheckedCreateWithoutChatsInput[]
    connectOrCreate?: ProfileCreateOrConnectWithoutChatsInput | ProfileCreateOrConnectWithoutChatsInput[]
    upsert?: ProfileUpsertWithWhereUniqueWithoutChatsInput | ProfileUpsertWithWhereUniqueWithoutChatsInput[]
    set?: ProfileWhereUniqueInput | ProfileWhereUniqueInput[]
    disconnect?: ProfileWhereUniqueInput | ProfileWhereUniqueInput[]
    delete?: ProfileWhereUniqueInput | ProfileWhereUniqueInput[]
    connect?: ProfileWhereUniqueInput | ProfileWhereUniqueInput[]
    update?: ProfileUpdateWithWhereUniqueWithoutChatsInput | ProfileUpdateWithWhereUniqueWithoutChatsInput[]
    updateMany?: ProfileUpdateManyWithWhereWithoutChatsInput | ProfileUpdateManyWithWhereWithoutChatsInput[]
    deleteMany?: ProfileScalarWhereInput | ProfileScalarWhereInput[]
  }

  export type ProfileUpdateOneRequiredWithoutAdministeredGroupsNestedInput = {
    create?: XOR<ProfileCreateWithoutAdministeredGroupsInput, ProfileUncheckedCreateWithoutAdministeredGroupsInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutAdministeredGroupsInput
    upsert?: ProfileUpsertWithoutAdministeredGroupsInput
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutAdministeredGroupsInput, ProfileUpdateWithoutAdministeredGroupsInput>, ProfileUncheckedUpdateWithoutAdministeredGroupsInput>
  }

  export type ChatMessageUpdateManyWithoutChatGroupNestedInput = {
    create?: XOR<ChatMessageCreateWithoutChatGroupInput, ChatMessageUncheckedCreateWithoutChatGroupInput> | ChatMessageCreateWithoutChatGroupInput[] | ChatMessageUncheckedCreateWithoutChatGroupInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutChatGroupInput | ChatMessageCreateOrConnectWithoutChatGroupInput[]
    upsert?: ChatMessageUpsertWithWhereUniqueWithoutChatGroupInput | ChatMessageUpsertWithWhereUniqueWithoutChatGroupInput[]
    createMany?: ChatMessageCreateManyChatGroupInputEnvelope
    set?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    disconnect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    delete?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    update?: ChatMessageUpdateWithWhereUniqueWithoutChatGroupInput | ChatMessageUpdateWithWhereUniqueWithoutChatGroupInput[]
    updateMany?: ChatMessageUpdateManyWithWhereWithoutChatGroupInput | ChatMessageUpdateManyWithWhereWithoutChatGroupInput[]
    deleteMany?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[]
  }

  export type ProfileUncheckedUpdateManyWithoutChatsNestedInput = {
    create?: XOR<ProfileCreateWithoutChatsInput, ProfileUncheckedCreateWithoutChatsInput> | ProfileCreateWithoutChatsInput[] | ProfileUncheckedCreateWithoutChatsInput[]
    connectOrCreate?: ProfileCreateOrConnectWithoutChatsInput | ProfileCreateOrConnectWithoutChatsInput[]
    upsert?: ProfileUpsertWithWhereUniqueWithoutChatsInput | ProfileUpsertWithWhereUniqueWithoutChatsInput[]
    set?: ProfileWhereUniqueInput | ProfileWhereUniqueInput[]
    disconnect?: ProfileWhereUniqueInput | ProfileWhereUniqueInput[]
    delete?: ProfileWhereUniqueInput | ProfileWhereUniqueInput[]
    connect?: ProfileWhereUniqueInput | ProfileWhereUniqueInput[]
    update?: ProfileUpdateWithWhereUniqueWithoutChatsInput | ProfileUpdateWithWhereUniqueWithoutChatsInput[]
    updateMany?: ProfileUpdateManyWithWhereWithoutChatsInput | ProfileUpdateManyWithWhereWithoutChatsInput[]
    deleteMany?: ProfileScalarWhereInput | ProfileScalarWhereInput[]
  }

  export type ChatMessageUncheckedUpdateManyWithoutChatGroupNestedInput = {
    create?: XOR<ChatMessageCreateWithoutChatGroupInput, ChatMessageUncheckedCreateWithoutChatGroupInput> | ChatMessageCreateWithoutChatGroupInput[] | ChatMessageUncheckedCreateWithoutChatGroupInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutChatGroupInput | ChatMessageCreateOrConnectWithoutChatGroupInput[]
    upsert?: ChatMessageUpsertWithWhereUniqueWithoutChatGroupInput | ChatMessageUpsertWithWhereUniqueWithoutChatGroupInput[]
    createMany?: ChatMessageCreateManyChatGroupInputEnvelope
    set?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    disconnect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    delete?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    update?: ChatMessageUpdateWithWhereUniqueWithoutChatGroupInput | ChatMessageUpdateWithWhereUniqueWithoutChatGroupInput[]
    updateMany?: ChatMessageUpdateManyWithWhereWithoutChatGroupInput | ChatMessageUpdateManyWithWhereWithoutChatGroupInput[]
    deleteMany?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[]
  }

  export type ProfileCreateNestedOneWithoutChatMessagesInput = {
    create?: XOR<ProfileCreateWithoutChatMessagesInput, ProfileUncheckedCreateWithoutChatMessagesInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutChatMessagesInput
    connect?: ProfileWhereUniqueInput
  }

  export type ChatGroupCreateNestedOneWithoutChatMessagesInput = {
    create?: XOR<ChatGroupCreateWithoutChatMessagesInput, ChatGroupUncheckedCreateWithoutChatMessagesInput>
    connectOrCreate?: ChatGroupCreateOrConnectWithoutChatMessagesInput
    connect?: ChatGroupWhereUniqueInput
  }

  export type ProfileUpdateOneRequiredWithoutChatMessagesNestedInput = {
    create?: XOR<ProfileCreateWithoutChatMessagesInput, ProfileUncheckedCreateWithoutChatMessagesInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutChatMessagesInput
    upsert?: ProfileUpsertWithoutChatMessagesInput
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutChatMessagesInput, ProfileUpdateWithoutChatMessagesInput>, ProfileUncheckedUpdateWithoutChatMessagesInput>
  }

  export type ChatGroupUpdateOneRequiredWithoutChatMessagesNestedInput = {
    create?: XOR<ChatGroupCreateWithoutChatMessagesInput, ChatGroupUncheckedCreateWithoutChatMessagesInput>
    connectOrCreate?: ChatGroupCreateOrConnectWithoutChatMessagesInput
    upsert?: ChatGroupUpsertWithoutChatMessagesInput
    connect?: ChatGroupWhereUniqueInput
    update?: XOR<XOR<ChatGroupUpdateToOneWithWhereWithoutChatMessagesInput, ChatGroupUpdateWithoutChatMessagesInput>, ChatGroupUncheckedUpdateWithoutChatMessagesInput>
  }

  export type ProfileCreateNestedOneWithoutFriendshipFromInput = {
    create?: XOR<ProfileCreateWithoutFriendshipFromInput, ProfileUncheckedCreateWithoutFriendshipFromInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutFriendshipFromInput
    connect?: ProfileWhereUniqueInput
  }

  export type ProfileCreateNestedOneWithoutFriendshipToInput = {
    create?: XOR<ProfileCreateWithoutFriendshipToInput, ProfileUncheckedCreateWithoutFriendshipToInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutFriendshipToInput
    connect?: ProfileWhereUniqueInput
  }

  export type ProfileUpdateOneRequiredWithoutFriendshipFromNestedInput = {
    create?: XOR<ProfileCreateWithoutFriendshipFromInput, ProfileUncheckedCreateWithoutFriendshipFromInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutFriendshipFromInput
    upsert?: ProfileUpsertWithoutFriendshipFromInput
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutFriendshipFromInput, ProfileUpdateWithoutFriendshipFromInput>, ProfileUncheckedUpdateWithoutFriendshipFromInput>
  }

  export type ProfileUpdateOneRequiredWithoutFriendshipToNestedInput = {
    create?: XOR<ProfileCreateWithoutFriendshipToInput, ProfileUncheckedCreateWithoutFriendshipToInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutFriendshipToInput
    upsert?: ProfileUpsertWithoutFriendshipToInput
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutFriendshipToInput, ProfileUpdateWithoutFriendshipToInput>, ProfileUncheckedUpdateWithoutFriendshipToInput>
  }

  export type UserPostCreateNestedManyWithoutImagesInput = {
    create?: XOR<UserPostCreateWithoutImagesInput, UserPostUncheckedCreateWithoutImagesInput> | UserPostCreateWithoutImagesInput[] | UserPostUncheckedCreateWithoutImagesInput[]
    connectOrCreate?: UserPostCreateOrConnectWithoutImagesInput | UserPostCreateOrConnectWithoutImagesInput[]
    connect?: UserPostWhereUniqueInput | UserPostWhereUniqueInput[]
  }

  export type AlbumCreateNestedManyWithoutImagesInput = {
    create?: XOR<AlbumCreateWithoutImagesInput, AlbumUncheckedCreateWithoutImagesInput> | AlbumCreateWithoutImagesInput[] | AlbumUncheckedCreateWithoutImagesInput[]
    connectOrCreate?: AlbumCreateOrConnectWithoutImagesInput | AlbumCreateOrConnectWithoutImagesInput[]
    connect?: AlbumWhereUniqueInput | AlbumWhereUniqueInput[]
  }

  export type UserPostUncheckedCreateNestedManyWithoutImagesInput = {
    create?: XOR<UserPostCreateWithoutImagesInput, UserPostUncheckedCreateWithoutImagesInput> | UserPostCreateWithoutImagesInput[] | UserPostUncheckedCreateWithoutImagesInput[]
    connectOrCreate?: UserPostCreateOrConnectWithoutImagesInput | UserPostCreateOrConnectWithoutImagesInput[]
    connect?: UserPostWhereUniqueInput | UserPostWhereUniqueInput[]
  }

  export type AlbumUncheckedCreateNestedManyWithoutImagesInput = {
    create?: XOR<AlbumCreateWithoutImagesInput, AlbumUncheckedCreateWithoutImagesInput> | AlbumCreateWithoutImagesInput[] | AlbumUncheckedCreateWithoutImagesInput[]
    connectOrCreate?: AlbumCreateOrConnectWithoutImagesInput | AlbumCreateOrConnectWithoutImagesInput[]
    connect?: AlbumWhereUniqueInput | AlbumWhereUniqueInput[]
  }

  export type UserPostUpdateManyWithoutImagesNestedInput = {
    create?: XOR<UserPostCreateWithoutImagesInput, UserPostUncheckedCreateWithoutImagesInput> | UserPostCreateWithoutImagesInput[] | UserPostUncheckedCreateWithoutImagesInput[]
    connectOrCreate?: UserPostCreateOrConnectWithoutImagesInput | UserPostCreateOrConnectWithoutImagesInput[]
    upsert?: UserPostUpsertWithWhereUniqueWithoutImagesInput | UserPostUpsertWithWhereUniqueWithoutImagesInput[]
    set?: UserPostWhereUniqueInput | UserPostWhereUniqueInput[]
    disconnect?: UserPostWhereUniqueInput | UserPostWhereUniqueInput[]
    delete?: UserPostWhereUniqueInput | UserPostWhereUniqueInput[]
    connect?: UserPostWhereUniqueInput | UserPostWhereUniqueInput[]
    update?: UserPostUpdateWithWhereUniqueWithoutImagesInput | UserPostUpdateWithWhereUniqueWithoutImagesInput[]
    updateMany?: UserPostUpdateManyWithWhereWithoutImagesInput | UserPostUpdateManyWithWhereWithoutImagesInput[]
    deleteMany?: UserPostScalarWhereInput | UserPostScalarWhereInput[]
  }

  export type AlbumUpdateManyWithoutImagesNestedInput = {
    create?: XOR<AlbumCreateWithoutImagesInput, AlbumUncheckedCreateWithoutImagesInput> | AlbumCreateWithoutImagesInput[] | AlbumUncheckedCreateWithoutImagesInput[]
    connectOrCreate?: AlbumCreateOrConnectWithoutImagesInput | AlbumCreateOrConnectWithoutImagesInput[]
    upsert?: AlbumUpsertWithWhereUniqueWithoutImagesInput | AlbumUpsertWithWhereUniqueWithoutImagesInput[]
    set?: AlbumWhereUniqueInput | AlbumWhereUniqueInput[]
    disconnect?: AlbumWhereUniqueInput | AlbumWhereUniqueInput[]
    delete?: AlbumWhereUniqueInput | AlbumWhereUniqueInput[]
    connect?: AlbumWhereUniqueInput | AlbumWhereUniqueInput[]
    update?: AlbumUpdateWithWhereUniqueWithoutImagesInput | AlbumUpdateWithWhereUniqueWithoutImagesInput[]
    updateMany?: AlbumUpdateManyWithWhereWithoutImagesInput | AlbumUpdateManyWithWhereWithoutImagesInput[]
    deleteMany?: AlbumScalarWhereInput | AlbumScalarWhereInput[]
  }

  export type UserPostUncheckedUpdateManyWithoutImagesNestedInput = {
    create?: XOR<UserPostCreateWithoutImagesInput, UserPostUncheckedCreateWithoutImagesInput> | UserPostCreateWithoutImagesInput[] | UserPostUncheckedCreateWithoutImagesInput[]
    connectOrCreate?: UserPostCreateOrConnectWithoutImagesInput | UserPostCreateOrConnectWithoutImagesInput[]
    upsert?: UserPostUpsertWithWhereUniqueWithoutImagesInput | UserPostUpsertWithWhereUniqueWithoutImagesInput[]
    set?: UserPostWhereUniqueInput | UserPostWhereUniqueInput[]
    disconnect?: UserPostWhereUniqueInput | UserPostWhereUniqueInput[]
    delete?: UserPostWhereUniqueInput | UserPostWhereUniqueInput[]
    connect?: UserPostWhereUniqueInput | UserPostWhereUniqueInput[]
    update?: UserPostUpdateWithWhereUniqueWithoutImagesInput | UserPostUpdateWithWhereUniqueWithoutImagesInput[]
    updateMany?: UserPostUpdateManyWithWhereWithoutImagesInput | UserPostUpdateManyWithWhereWithoutImagesInput[]
    deleteMany?: UserPostScalarWhereInput | UserPostScalarWhereInput[]
  }

  export type AlbumUncheckedUpdateManyWithoutImagesNestedInput = {
    create?: XOR<AlbumCreateWithoutImagesInput, AlbumUncheckedCreateWithoutImagesInput> | AlbumCreateWithoutImagesInput[] | AlbumUncheckedCreateWithoutImagesInput[]
    connectOrCreate?: AlbumCreateOrConnectWithoutImagesInput | AlbumCreateOrConnectWithoutImagesInput[]
    upsert?: AlbumUpsertWithWhereUniqueWithoutImagesInput | AlbumUpsertWithWhereUniqueWithoutImagesInput[]
    set?: AlbumWhereUniqueInput | AlbumWhereUniqueInput[]
    disconnect?: AlbumWhereUniqueInput | AlbumWhereUniqueInput[]
    delete?: AlbumWhereUniqueInput | AlbumWhereUniqueInput[]
    connect?: AlbumWhereUniqueInput | AlbumWhereUniqueInput[]
    update?: AlbumUpdateWithWhereUniqueWithoutImagesInput | AlbumUpdateWithWhereUniqueWithoutImagesInput[]
    updateMany?: AlbumUpdateManyWithWhereWithoutImagesInput | AlbumUpdateManyWithWhereWithoutImagesInput[]
    deleteMany?: AlbumScalarWhereInput | AlbumScalarWhereInput[]
  }

  export type TagsCreateNestedManyWithoutUserPostInput = {
    create?: XOR<TagsCreateWithoutUserPostInput, TagsUncheckedCreateWithoutUserPostInput> | TagsCreateWithoutUserPostInput[] | TagsUncheckedCreateWithoutUserPostInput[]
    connectOrCreate?: TagsCreateOrConnectWithoutUserPostInput | TagsCreateOrConnectWithoutUserPostInput[]
    connect?: TagsWhereUniqueInput | TagsWhereUniqueInput[]
  }

  export type ImageCreateNestedManyWithoutUserPostInput = {
    create?: XOR<ImageCreateWithoutUserPostInput, ImageUncheckedCreateWithoutUserPostInput> | ImageCreateWithoutUserPostInput[] | ImageUncheckedCreateWithoutUserPostInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutUserPostInput | ImageCreateOrConnectWithoutUserPostInput[]
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
  }

  export type ProfileCreateNestedManyWithoutUserPostViewsInput = {
    create?: XOR<ProfileCreateWithoutUserPostViewsInput, ProfileUncheckedCreateWithoutUserPostViewsInput> | ProfileCreateWithoutUserPostViewsInput[] | ProfileUncheckedCreateWithoutUserPostViewsInput[]
    connectOrCreate?: ProfileCreateOrConnectWithoutUserPostViewsInput | ProfileCreateOrConnectWithoutUserPostViewsInput[]
    connect?: ProfileWhereUniqueInput | ProfileWhereUniqueInput[]
  }

  export type ProfileCreateNestedManyWithoutUserPostLikesInput = {
    create?: XOR<ProfileCreateWithoutUserPostLikesInput, ProfileUncheckedCreateWithoutUserPostLikesInput> | ProfileCreateWithoutUserPostLikesInput[] | ProfileUncheckedCreateWithoutUserPostLikesInput[]
    connectOrCreate?: ProfileCreateOrConnectWithoutUserPostLikesInput | ProfileCreateOrConnectWithoutUserPostLikesInput[]
    connect?: ProfileWhereUniqueInput | ProfileWhereUniqueInput[]
  }

  export type ProfileCreateNestedOneWithoutPostInput = {
    create?: XOR<ProfileCreateWithoutPostInput, ProfileUncheckedCreateWithoutPostInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutPostInput
    connect?: ProfileWhereUniqueInput
  }

  export type LinkCreateNestedOneWithoutUserPostInput = {
    create?: XOR<LinkCreateWithoutUserPostInput, LinkUncheckedCreateWithoutUserPostInput>
    connectOrCreate?: LinkCreateOrConnectWithoutUserPostInput
    connect?: LinkWhereUniqueInput
  }

  export type TagsUncheckedCreateNestedManyWithoutUserPostInput = {
    create?: XOR<TagsCreateWithoutUserPostInput, TagsUncheckedCreateWithoutUserPostInput> | TagsCreateWithoutUserPostInput[] | TagsUncheckedCreateWithoutUserPostInput[]
    connectOrCreate?: TagsCreateOrConnectWithoutUserPostInput | TagsCreateOrConnectWithoutUserPostInput[]
    connect?: TagsWhereUniqueInput | TagsWhereUniqueInput[]
  }

  export type ImageUncheckedCreateNestedManyWithoutUserPostInput = {
    create?: XOR<ImageCreateWithoutUserPostInput, ImageUncheckedCreateWithoutUserPostInput> | ImageCreateWithoutUserPostInput[] | ImageUncheckedCreateWithoutUserPostInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutUserPostInput | ImageCreateOrConnectWithoutUserPostInput[]
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
  }

  export type ProfileUncheckedCreateNestedManyWithoutUserPostViewsInput = {
    create?: XOR<ProfileCreateWithoutUserPostViewsInput, ProfileUncheckedCreateWithoutUserPostViewsInput> | ProfileCreateWithoutUserPostViewsInput[] | ProfileUncheckedCreateWithoutUserPostViewsInput[]
    connectOrCreate?: ProfileCreateOrConnectWithoutUserPostViewsInput | ProfileCreateOrConnectWithoutUserPostViewsInput[]
    connect?: ProfileWhereUniqueInput | ProfileWhereUniqueInput[]
  }

  export type ProfileUncheckedCreateNestedManyWithoutUserPostLikesInput = {
    create?: XOR<ProfileCreateWithoutUserPostLikesInput, ProfileUncheckedCreateWithoutUserPostLikesInput> | ProfileCreateWithoutUserPostLikesInput[] | ProfileUncheckedCreateWithoutUserPostLikesInput[]
    connectOrCreate?: ProfileCreateOrConnectWithoutUserPostLikesInput | ProfileCreateOrConnectWithoutUserPostLikesInput[]
    connect?: ProfileWhereUniqueInput | ProfileWhereUniqueInput[]
  }

  export type TagsUpdateManyWithoutUserPostNestedInput = {
    create?: XOR<TagsCreateWithoutUserPostInput, TagsUncheckedCreateWithoutUserPostInput> | TagsCreateWithoutUserPostInput[] | TagsUncheckedCreateWithoutUserPostInput[]
    connectOrCreate?: TagsCreateOrConnectWithoutUserPostInput | TagsCreateOrConnectWithoutUserPostInput[]
    upsert?: TagsUpsertWithWhereUniqueWithoutUserPostInput | TagsUpsertWithWhereUniqueWithoutUserPostInput[]
    set?: TagsWhereUniqueInput | TagsWhereUniqueInput[]
    disconnect?: TagsWhereUniqueInput | TagsWhereUniqueInput[]
    delete?: TagsWhereUniqueInput | TagsWhereUniqueInput[]
    connect?: TagsWhereUniqueInput | TagsWhereUniqueInput[]
    update?: TagsUpdateWithWhereUniqueWithoutUserPostInput | TagsUpdateWithWhereUniqueWithoutUserPostInput[]
    updateMany?: TagsUpdateManyWithWhereWithoutUserPostInput | TagsUpdateManyWithWhereWithoutUserPostInput[]
    deleteMany?: TagsScalarWhereInput | TagsScalarWhereInput[]
  }

  export type ImageUpdateManyWithoutUserPostNestedInput = {
    create?: XOR<ImageCreateWithoutUserPostInput, ImageUncheckedCreateWithoutUserPostInput> | ImageCreateWithoutUserPostInput[] | ImageUncheckedCreateWithoutUserPostInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutUserPostInput | ImageCreateOrConnectWithoutUserPostInput[]
    upsert?: ImageUpsertWithWhereUniqueWithoutUserPostInput | ImageUpsertWithWhereUniqueWithoutUserPostInput[]
    set?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    disconnect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    delete?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    update?: ImageUpdateWithWhereUniqueWithoutUserPostInput | ImageUpdateWithWhereUniqueWithoutUserPostInput[]
    updateMany?: ImageUpdateManyWithWhereWithoutUserPostInput | ImageUpdateManyWithWhereWithoutUserPostInput[]
    deleteMany?: ImageScalarWhereInput | ImageScalarWhereInput[]
  }

  export type ProfileUpdateManyWithoutUserPostViewsNestedInput = {
    create?: XOR<ProfileCreateWithoutUserPostViewsInput, ProfileUncheckedCreateWithoutUserPostViewsInput> | ProfileCreateWithoutUserPostViewsInput[] | ProfileUncheckedCreateWithoutUserPostViewsInput[]
    connectOrCreate?: ProfileCreateOrConnectWithoutUserPostViewsInput | ProfileCreateOrConnectWithoutUserPostViewsInput[]
    upsert?: ProfileUpsertWithWhereUniqueWithoutUserPostViewsInput | ProfileUpsertWithWhereUniqueWithoutUserPostViewsInput[]
    set?: ProfileWhereUniqueInput | ProfileWhereUniqueInput[]
    disconnect?: ProfileWhereUniqueInput | ProfileWhereUniqueInput[]
    delete?: ProfileWhereUniqueInput | ProfileWhereUniqueInput[]
    connect?: ProfileWhereUniqueInput | ProfileWhereUniqueInput[]
    update?: ProfileUpdateWithWhereUniqueWithoutUserPostViewsInput | ProfileUpdateWithWhereUniqueWithoutUserPostViewsInput[]
    updateMany?: ProfileUpdateManyWithWhereWithoutUserPostViewsInput | ProfileUpdateManyWithWhereWithoutUserPostViewsInput[]
    deleteMany?: ProfileScalarWhereInput | ProfileScalarWhereInput[]
  }

  export type ProfileUpdateManyWithoutUserPostLikesNestedInput = {
    create?: XOR<ProfileCreateWithoutUserPostLikesInput, ProfileUncheckedCreateWithoutUserPostLikesInput> | ProfileCreateWithoutUserPostLikesInput[] | ProfileUncheckedCreateWithoutUserPostLikesInput[]
    connectOrCreate?: ProfileCreateOrConnectWithoutUserPostLikesInput | ProfileCreateOrConnectWithoutUserPostLikesInput[]
    upsert?: ProfileUpsertWithWhereUniqueWithoutUserPostLikesInput | ProfileUpsertWithWhereUniqueWithoutUserPostLikesInput[]
    set?: ProfileWhereUniqueInput | ProfileWhereUniqueInput[]
    disconnect?: ProfileWhereUniqueInput | ProfileWhereUniqueInput[]
    delete?: ProfileWhereUniqueInput | ProfileWhereUniqueInput[]
    connect?: ProfileWhereUniqueInput | ProfileWhereUniqueInput[]
    update?: ProfileUpdateWithWhereUniqueWithoutUserPostLikesInput | ProfileUpdateWithWhereUniqueWithoutUserPostLikesInput[]
    updateMany?: ProfileUpdateManyWithWhereWithoutUserPostLikesInput | ProfileUpdateManyWithWhereWithoutUserPostLikesInput[]
    deleteMany?: ProfileScalarWhereInput | ProfileScalarWhereInput[]
  }

  export type ProfileUpdateOneRequiredWithoutPostNestedInput = {
    create?: XOR<ProfileCreateWithoutPostInput, ProfileUncheckedCreateWithoutPostInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutPostInput
    upsert?: ProfileUpsertWithoutPostInput
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutPostInput, ProfileUpdateWithoutPostInput>, ProfileUncheckedUpdateWithoutPostInput>
  }

  export type LinkUpdateOneWithoutUserPostNestedInput = {
    create?: XOR<LinkCreateWithoutUserPostInput, LinkUncheckedCreateWithoutUserPostInput>
    connectOrCreate?: LinkCreateOrConnectWithoutUserPostInput
    upsert?: LinkUpsertWithoutUserPostInput
    disconnect?: LinkWhereInput | boolean
    delete?: LinkWhereInput | boolean
    connect?: LinkWhereUniqueInput
    update?: XOR<XOR<LinkUpdateToOneWithWhereWithoutUserPostInput, LinkUpdateWithoutUserPostInput>, LinkUncheckedUpdateWithoutUserPostInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TagsUncheckedUpdateManyWithoutUserPostNestedInput = {
    create?: XOR<TagsCreateWithoutUserPostInput, TagsUncheckedCreateWithoutUserPostInput> | TagsCreateWithoutUserPostInput[] | TagsUncheckedCreateWithoutUserPostInput[]
    connectOrCreate?: TagsCreateOrConnectWithoutUserPostInput | TagsCreateOrConnectWithoutUserPostInput[]
    upsert?: TagsUpsertWithWhereUniqueWithoutUserPostInput | TagsUpsertWithWhereUniqueWithoutUserPostInput[]
    set?: TagsWhereUniqueInput | TagsWhereUniqueInput[]
    disconnect?: TagsWhereUniqueInput | TagsWhereUniqueInput[]
    delete?: TagsWhereUniqueInput | TagsWhereUniqueInput[]
    connect?: TagsWhereUniqueInput | TagsWhereUniqueInput[]
    update?: TagsUpdateWithWhereUniqueWithoutUserPostInput | TagsUpdateWithWhereUniqueWithoutUserPostInput[]
    updateMany?: TagsUpdateManyWithWhereWithoutUserPostInput | TagsUpdateManyWithWhereWithoutUserPostInput[]
    deleteMany?: TagsScalarWhereInput | TagsScalarWhereInput[]
  }

  export type ImageUncheckedUpdateManyWithoutUserPostNestedInput = {
    create?: XOR<ImageCreateWithoutUserPostInput, ImageUncheckedCreateWithoutUserPostInput> | ImageCreateWithoutUserPostInput[] | ImageUncheckedCreateWithoutUserPostInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutUserPostInput | ImageCreateOrConnectWithoutUserPostInput[]
    upsert?: ImageUpsertWithWhereUniqueWithoutUserPostInput | ImageUpsertWithWhereUniqueWithoutUserPostInput[]
    set?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    disconnect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    delete?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    update?: ImageUpdateWithWhereUniqueWithoutUserPostInput | ImageUpdateWithWhereUniqueWithoutUserPostInput[]
    updateMany?: ImageUpdateManyWithWhereWithoutUserPostInput | ImageUpdateManyWithWhereWithoutUserPostInput[]
    deleteMany?: ImageScalarWhereInput | ImageScalarWhereInput[]
  }

  export type ProfileUncheckedUpdateManyWithoutUserPostViewsNestedInput = {
    create?: XOR<ProfileCreateWithoutUserPostViewsInput, ProfileUncheckedCreateWithoutUserPostViewsInput> | ProfileCreateWithoutUserPostViewsInput[] | ProfileUncheckedCreateWithoutUserPostViewsInput[]
    connectOrCreate?: ProfileCreateOrConnectWithoutUserPostViewsInput | ProfileCreateOrConnectWithoutUserPostViewsInput[]
    upsert?: ProfileUpsertWithWhereUniqueWithoutUserPostViewsInput | ProfileUpsertWithWhereUniqueWithoutUserPostViewsInput[]
    set?: ProfileWhereUniqueInput | ProfileWhereUniqueInput[]
    disconnect?: ProfileWhereUniqueInput | ProfileWhereUniqueInput[]
    delete?: ProfileWhereUniqueInput | ProfileWhereUniqueInput[]
    connect?: ProfileWhereUniqueInput | ProfileWhereUniqueInput[]
    update?: ProfileUpdateWithWhereUniqueWithoutUserPostViewsInput | ProfileUpdateWithWhereUniqueWithoutUserPostViewsInput[]
    updateMany?: ProfileUpdateManyWithWhereWithoutUserPostViewsInput | ProfileUpdateManyWithWhereWithoutUserPostViewsInput[]
    deleteMany?: ProfileScalarWhereInput | ProfileScalarWhereInput[]
  }

  export type ProfileUncheckedUpdateManyWithoutUserPostLikesNestedInput = {
    create?: XOR<ProfileCreateWithoutUserPostLikesInput, ProfileUncheckedCreateWithoutUserPostLikesInput> | ProfileCreateWithoutUserPostLikesInput[] | ProfileUncheckedCreateWithoutUserPostLikesInput[]
    connectOrCreate?: ProfileCreateOrConnectWithoutUserPostLikesInput | ProfileCreateOrConnectWithoutUserPostLikesInput[]
    upsert?: ProfileUpsertWithWhereUniqueWithoutUserPostLikesInput | ProfileUpsertWithWhereUniqueWithoutUserPostLikesInput[]
    set?: ProfileWhereUniqueInput | ProfileWhereUniqueInput[]
    disconnect?: ProfileWhereUniqueInput | ProfileWhereUniqueInput[]
    delete?: ProfileWhereUniqueInput | ProfileWhereUniqueInput[]
    connect?: ProfileWhereUniqueInput | ProfileWhereUniqueInput[]
    update?: ProfileUpdateWithWhereUniqueWithoutUserPostLikesInput | ProfileUpdateWithWhereUniqueWithoutUserPostLikesInput[]
    updateMany?: ProfileUpdateManyWithWhereWithoutUserPostLikesInput | ProfileUpdateManyWithWhereWithoutUserPostLikesInput[]
    deleteMany?: ProfileScalarWhereInput | ProfileScalarWhereInput[]
  }

  export type UserPostCreateNestedManyWithoutTagsInput = {
    create?: XOR<UserPostCreateWithoutTagsInput, UserPostUncheckedCreateWithoutTagsInput> | UserPostCreateWithoutTagsInput[] | UserPostUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: UserPostCreateOrConnectWithoutTagsInput | UserPostCreateOrConnectWithoutTagsInput[]
    connect?: UserPostWhereUniqueInput | UserPostWhereUniqueInput[]
  }

  export type UserPostUncheckedCreateNestedManyWithoutTagsInput = {
    create?: XOR<UserPostCreateWithoutTagsInput, UserPostUncheckedCreateWithoutTagsInput> | UserPostCreateWithoutTagsInput[] | UserPostUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: UserPostCreateOrConnectWithoutTagsInput | UserPostCreateOrConnectWithoutTagsInput[]
    connect?: UserPostWhereUniqueInput | UserPostWhereUniqueInput[]
  }

  export type UserPostUpdateManyWithoutTagsNestedInput = {
    create?: XOR<UserPostCreateWithoutTagsInput, UserPostUncheckedCreateWithoutTagsInput> | UserPostCreateWithoutTagsInput[] | UserPostUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: UserPostCreateOrConnectWithoutTagsInput | UserPostCreateOrConnectWithoutTagsInput[]
    upsert?: UserPostUpsertWithWhereUniqueWithoutTagsInput | UserPostUpsertWithWhereUniqueWithoutTagsInput[]
    set?: UserPostWhereUniqueInput | UserPostWhereUniqueInput[]
    disconnect?: UserPostWhereUniqueInput | UserPostWhereUniqueInput[]
    delete?: UserPostWhereUniqueInput | UserPostWhereUniqueInput[]
    connect?: UserPostWhereUniqueInput | UserPostWhereUniqueInput[]
    update?: UserPostUpdateWithWhereUniqueWithoutTagsInput | UserPostUpdateWithWhereUniqueWithoutTagsInput[]
    updateMany?: UserPostUpdateManyWithWhereWithoutTagsInput | UserPostUpdateManyWithWhereWithoutTagsInput[]
    deleteMany?: UserPostScalarWhereInput | UserPostScalarWhereInput[]
  }

  export type UserPostUncheckedUpdateManyWithoutTagsNestedInput = {
    create?: XOR<UserPostCreateWithoutTagsInput, UserPostUncheckedCreateWithoutTagsInput> | UserPostCreateWithoutTagsInput[] | UserPostUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: UserPostCreateOrConnectWithoutTagsInput | UserPostCreateOrConnectWithoutTagsInput[]
    upsert?: UserPostUpsertWithWhereUniqueWithoutTagsInput | UserPostUpsertWithWhereUniqueWithoutTagsInput[]
    set?: UserPostWhereUniqueInput | UserPostWhereUniqueInput[]
    disconnect?: UserPostWhereUniqueInput | UserPostWhereUniqueInput[]
    delete?: UserPostWhereUniqueInput | UserPostWhereUniqueInput[]
    connect?: UserPostWhereUniqueInput | UserPostWhereUniqueInput[]
    update?: UserPostUpdateWithWhereUniqueWithoutTagsInput | UserPostUpdateWithWhereUniqueWithoutTagsInput[]
    updateMany?: UserPostUpdateManyWithWhereWithoutTagsInput | UserPostUpdateManyWithWhereWithoutTagsInput[]
    deleteMany?: UserPostScalarWhereInput | UserPostScalarWhereInput[]
  }

  export type UserPostCreateNestedManyWithoutLinkInput = {
    create?: XOR<UserPostCreateWithoutLinkInput, UserPostUncheckedCreateWithoutLinkInput> | UserPostCreateWithoutLinkInput[] | UserPostUncheckedCreateWithoutLinkInput[]
    connectOrCreate?: UserPostCreateOrConnectWithoutLinkInput | UserPostCreateOrConnectWithoutLinkInput[]
    createMany?: UserPostCreateManyLinkInputEnvelope
    connect?: UserPostWhereUniqueInput | UserPostWhereUniqueInput[]
  }

  export type UserPostUncheckedCreateNestedManyWithoutLinkInput = {
    create?: XOR<UserPostCreateWithoutLinkInput, UserPostUncheckedCreateWithoutLinkInput> | UserPostCreateWithoutLinkInput[] | UserPostUncheckedCreateWithoutLinkInput[]
    connectOrCreate?: UserPostCreateOrConnectWithoutLinkInput | UserPostCreateOrConnectWithoutLinkInput[]
    createMany?: UserPostCreateManyLinkInputEnvelope
    connect?: UserPostWhereUniqueInput | UserPostWhereUniqueInput[]
  }

  export type UserPostUpdateManyWithoutLinkNestedInput = {
    create?: XOR<UserPostCreateWithoutLinkInput, UserPostUncheckedCreateWithoutLinkInput> | UserPostCreateWithoutLinkInput[] | UserPostUncheckedCreateWithoutLinkInput[]
    connectOrCreate?: UserPostCreateOrConnectWithoutLinkInput | UserPostCreateOrConnectWithoutLinkInput[]
    upsert?: UserPostUpsertWithWhereUniqueWithoutLinkInput | UserPostUpsertWithWhereUniqueWithoutLinkInput[]
    createMany?: UserPostCreateManyLinkInputEnvelope
    set?: UserPostWhereUniqueInput | UserPostWhereUniqueInput[]
    disconnect?: UserPostWhereUniqueInput | UserPostWhereUniqueInput[]
    delete?: UserPostWhereUniqueInput | UserPostWhereUniqueInput[]
    connect?: UserPostWhereUniqueInput | UserPostWhereUniqueInput[]
    update?: UserPostUpdateWithWhereUniqueWithoutLinkInput | UserPostUpdateWithWhereUniqueWithoutLinkInput[]
    updateMany?: UserPostUpdateManyWithWhereWithoutLinkInput | UserPostUpdateManyWithWhereWithoutLinkInput[]
    deleteMany?: UserPostScalarWhereInput | UserPostScalarWhereInput[]
  }

  export type UserPostUncheckedUpdateManyWithoutLinkNestedInput = {
    create?: XOR<UserPostCreateWithoutLinkInput, UserPostUncheckedCreateWithoutLinkInput> | UserPostCreateWithoutLinkInput[] | UserPostUncheckedCreateWithoutLinkInput[]
    connectOrCreate?: UserPostCreateOrConnectWithoutLinkInput | UserPostCreateOrConnectWithoutLinkInput[]
    upsert?: UserPostUpsertWithWhereUniqueWithoutLinkInput | UserPostUpsertWithWhereUniqueWithoutLinkInput[]
    createMany?: UserPostCreateManyLinkInputEnvelope
    set?: UserPostWhereUniqueInput | UserPostWhereUniqueInput[]
    disconnect?: UserPostWhereUniqueInput | UserPostWhereUniqueInput[]
    delete?: UserPostWhereUniqueInput | UserPostWhereUniqueInput[]
    connect?: UserPostWhereUniqueInput | UserPostWhereUniqueInput[]
    update?: UserPostUpdateWithWhereUniqueWithoutLinkInput | UserPostUpdateWithWhereUniqueWithoutLinkInput[]
    updateMany?: UserPostUpdateManyWithWhereWithoutLinkInput | UserPostUpdateManyWithWhereWithoutLinkInput[]
    deleteMany?: UserPostScalarWhereInput | UserPostScalarWhereInput[]
  }

  export type UserPostCreateNestedManyWithoutAuthorInput = {
    create?: XOR<UserPostCreateWithoutAuthorInput, UserPostUncheckedCreateWithoutAuthorInput> | UserPostCreateWithoutAuthorInput[] | UserPostUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: UserPostCreateOrConnectWithoutAuthorInput | UserPostCreateOrConnectWithoutAuthorInput[]
    createMany?: UserPostCreateManyAuthorInputEnvelope
    connect?: UserPostWhereUniqueInput | UserPostWhereUniqueInput[]
  }

  export type AlbumCreateNestedManyWithoutAuthorInput = {
    create?: XOR<AlbumCreateWithoutAuthorInput, AlbumUncheckedCreateWithoutAuthorInput> | AlbumCreateWithoutAuthorInput[] | AlbumUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: AlbumCreateOrConnectWithoutAuthorInput | AlbumCreateOrConnectWithoutAuthorInput[]
    createMany?: AlbumCreateManyAuthorInputEnvelope
    connect?: AlbumWhereUniqueInput | AlbumWhereUniqueInput[]
  }

  export type ChatGroupCreateNestedManyWithoutMembersInput = {
    create?: XOR<ChatGroupCreateWithoutMembersInput, ChatGroupUncheckedCreateWithoutMembersInput> | ChatGroupCreateWithoutMembersInput[] | ChatGroupUncheckedCreateWithoutMembersInput[]
    connectOrCreate?: ChatGroupCreateOrConnectWithoutMembersInput | ChatGroupCreateOrConnectWithoutMembersInput[]
    connect?: ChatGroupWhereUniqueInput | ChatGroupWhereUniqueInput[]
  }

  export type ChatGroupCreateNestedManyWithoutAdminInput = {
    create?: XOR<ChatGroupCreateWithoutAdminInput, ChatGroupUncheckedCreateWithoutAdminInput> | ChatGroupCreateWithoutAdminInput[] | ChatGroupUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: ChatGroupCreateOrConnectWithoutAdminInput | ChatGroupCreateOrConnectWithoutAdminInput[]
    createMany?: ChatGroupCreateManyAdminInputEnvelope
    connect?: ChatGroupWhereUniqueInput | ChatGroupWhereUniqueInput[]
  }

  export type ChatMessageCreateNestedManyWithoutAuthorInput = {
    create?: XOR<ChatMessageCreateWithoutAuthorInput, ChatMessageUncheckedCreateWithoutAuthorInput> | ChatMessageCreateWithoutAuthorInput[] | ChatMessageUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutAuthorInput | ChatMessageCreateOrConnectWithoutAuthorInput[]
    createMany?: ChatMessageCreateManyAuthorInputEnvelope
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
  }

  export type UserPostCreateNestedManyWithoutViewsInput = {
    create?: XOR<UserPostCreateWithoutViewsInput, UserPostUncheckedCreateWithoutViewsInput> | UserPostCreateWithoutViewsInput[] | UserPostUncheckedCreateWithoutViewsInput[]
    connectOrCreate?: UserPostCreateOrConnectWithoutViewsInput | UserPostCreateOrConnectWithoutViewsInput[]
    connect?: UserPostWhereUniqueInput | UserPostWhereUniqueInput[]
  }

  export type UserPostCreateNestedManyWithoutLikesInput = {
    create?: XOR<UserPostCreateWithoutLikesInput, UserPostUncheckedCreateWithoutLikesInput> | UserPostCreateWithoutLikesInput[] | UserPostUncheckedCreateWithoutLikesInput[]
    connectOrCreate?: UserPostCreateOrConnectWithoutLikesInput | UserPostCreateOrConnectWithoutLikesInput[]
    connect?: UserPostWhereUniqueInput | UserPostWhereUniqueInput[]
  }

  export type AvatarCreateNestedOneWithoutProfileInput = {
    create?: XOR<AvatarCreateWithoutProfileInput, AvatarUncheckedCreateWithoutProfileInput>
    connectOrCreate?: AvatarCreateOrConnectWithoutProfileInput
    connect?: AvatarWhereUniqueInput
  }

  export type FriendshipCreateNestedManyWithoutProfile1Input = {
    create?: XOR<FriendshipCreateWithoutProfile1Input, FriendshipUncheckedCreateWithoutProfile1Input> | FriendshipCreateWithoutProfile1Input[] | FriendshipUncheckedCreateWithoutProfile1Input[]
    connectOrCreate?: FriendshipCreateOrConnectWithoutProfile1Input | FriendshipCreateOrConnectWithoutProfile1Input[]
    createMany?: FriendshipCreateManyProfile1InputEnvelope
    connect?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
  }

  export type FriendshipCreateNestedManyWithoutProfile2Input = {
    create?: XOR<FriendshipCreateWithoutProfile2Input, FriendshipUncheckedCreateWithoutProfile2Input> | FriendshipCreateWithoutProfile2Input[] | FriendshipUncheckedCreateWithoutProfile2Input[]
    connectOrCreate?: FriendshipCreateOrConnectWithoutProfile2Input | FriendshipCreateOrConnectWithoutProfile2Input[]
    createMany?: FriendshipCreateManyProfile2InputEnvelope
    connect?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
  }

  export type UserPostUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<UserPostCreateWithoutAuthorInput, UserPostUncheckedCreateWithoutAuthorInput> | UserPostCreateWithoutAuthorInput[] | UserPostUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: UserPostCreateOrConnectWithoutAuthorInput | UserPostCreateOrConnectWithoutAuthorInput[]
    createMany?: UserPostCreateManyAuthorInputEnvelope
    connect?: UserPostWhereUniqueInput | UserPostWhereUniqueInput[]
  }

  export type AlbumUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<AlbumCreateWithoutAuthorInput, AlbumUncheckedCreateWithoutAuthorInput> | AlbumCreateWithoutAuthorInput[] | AlbumUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: AlbumCreateOrConnectWithoutAuthorInput | AlbumCreateOrConnectWithoutAuthorInput[]
    createMany?: AlbumCreateManyAuthorInputEnvelope
    connect?: AlbumWhereUniqueInput | AlbumWhereUniqueInput[]
  }

  export type ChatGroupUncheckedCreateNestedManyWithoutMembersInput = {
    create?: XOR<ChatGroupCreateWithoutMembersInput, ChatGroupUncheckedCreateWithoutMembersInput> | ChatGroupCreateWithoutMembersInput[] | ChatGroupUncheckedCreateWithoutMembersInput[]
    connectOrCreate?: ChatGroupCreateOrConnectWithoutMembersInput | ChatGroupCreateOrConnectWithoutMembersInput[]
    connect?: ChatGroupWhereUniqueInput | ChatGroupWhereUniqueInput[]
  }

  export type ChatGroupUncheckedCreateNestedManyWithoutAdminInput = {
    create?: XOR<ChatGroupCreateWithoutAdminInput, ChatGroupUncheckedCreateWithoutAdminInput> | ChatGroupCreateWithoutAdminInput[] | ChatGroupUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: ChatGroupCreateOrConnectWithoutAdminInput | ChatGroupCreateOrConnectWithoutAdminInput[]
    createMany?: ChatGroupCreateManyAdminInputEnvelope
    connect?: ChatGroupWhereUniqueInput | ChatGroupWhereUniqueInput[]
  }

  export type ChatMessageUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<ChatMessageCreateWithoutAuthorInput, ChatMessageUncheckedCreateWithoutAuthorInput> | ChatMessageCreateWithoutAuthorInput[] | ChatMessageUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutAuthorInput | ChatMessageCreateOrConnectWithoutAuthorInput[]
    createMany?: ChatMessageCreateManyAuthorInputEnvelope
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
  }

  export type UserPostUncheckedCreateNestedManyWithoutViewsInput = {
    create?: XOR<UserPostCreateWithoutViewsInput, UserPostUncheckedCreateWithoutViewsInput> | UserPostCreateWithoutViewsInput[] | UserPostUncheckedCreateWithoutViewsInput[]
    connectOrCreate?: UserPostCreateOrConnectWithoutViewsInput | UserPostCreateOrConnectWithoutViewsInput[]
    connect?: UserPostWhereUniqueInput | UserPostWhereUniqueInput[]
  }

  export type UserPostUncheckedCreateNestedManyWithoutLikesInput = {
    create?: XOR<UserPostCreateWithoutLikesInput, UserPostUncheckedCreateWithoutLikesInput> | UserPostCreateWithoutLikesInput[] | UserPostUncheckedCreateWithoutLikesInput[]
    connectOrCreate?: UserPostCreateOrConnectWithoutLikesInput | UserPostCreateOrConnectWithoutLikesInput[]
    connect?: UserPostWhereUniqueInput | UserPostWhereUniqueInput[]
  }

  export type AvatarUncheckedCreateNestedOneWithoutProfileInput = {
    create?: XOR<AvatarCreateWithoutProfileInput, AvatarUncheckedCreateWithoutProfileInput>
    connectOrCreate?: AvatarCreateOrConnectWithoutProfileInput
    connect?: AvatarWhereUniqueInput
  }

  export type FriendshipUncheckedCreateNestedManyWithoutProfile1Input = {
    create?: XOR<FriendshipCreateWithoutProfile1Input, FriendshipUncheckedCreateWithoutProfile1Input> | FriendshipCreateWithoutProfile1Input[] | FriendshipUncheckedCreateWithoutProfile1Input[]
    connectOrCreate?: FriendshipCreateOrConnectWithoutProfile1Input | FriendshipCreateOrConnectWithoutProfile1Input[]
    createMany?: FriendshipCreateManyProfile1InputEnvelope
    connect?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
  }

  export type FriendshipUncheckedCreateNestedManyWithoutProfile2Input = {
    create?: XOR<FriendshipCreateWithoutProfile2Input, FriendshipUncheckedCreateWithoutProfile2Input> | FriendshipCreateWithoutProfile2Input[] | FriendshipUncheckedCreateWithoutProfile2Input[]
    connectOrCreate?: FriendshipCreateOrConnectWithoutProfile2Input | FriendshipCreateOrConnectWithoutProfile2Input[]
    createMany?: FriendshipCreateManyProfile2InputEnvelope
    connect?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserPostUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<UserPostCreateWithoutAuthorInput, UserPostUncheckedCreateWithoutAuthorInput> | UserPostCreateWithoutAuthorInput[] | UserPostUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: UserPostCreateOrConnectWithoutAuthorInput | UserPostCreateOrConnectWithoutAuthorInput[]
    upsert?: UserPostUpsertWithWhereUniqueWithoutAuthorInput | UserPostUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: UserPostCreateManyAuthorInputEnvelope
    set?: UserPostWhereUniqueInput | UserPostWhereUniqueInput[]
    disconnect?: UserPostWhereUniqueInput | UserPostWhereUniqueInput[]
    delete?: UserPostWhereUniqueInput | UserPostWhereUniqueInput[]
    connect?: UserPostWhereUniqueInput | UserPostWhereUniqueInput[]
    update?: UserPostUpdateWithWhereUniqueWithoutAuthorInput | UserPostUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: UserPostUpdateManyWithWhereWithoutAuthorInput | UserPostUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: UserPostScalarWhereInput | UserPostScalarWhereInput[]
  }

  export type AlbumUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<AlbumCreateWithoutAuthorInput, AlbumUncheckedCreateWithoutAuthorInput> | AlbumCreateWithoutAuthorInput[] | AlbumUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: AlbumCreateOrConnectWithoutAuthorInput | AlbumCreateOrConnectWithoutAuthorInput[]
    upsert?: AlbumUpsertWithWhereUniqueWithoutAuthorInput | AlbumUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: AlbumCreateManyAuthorInputEnvelope
    set?: AlbumWhereUniqueInput | AlbumWhereUniqueInput[]
    disconnect?: AlbumWhereUniqueInput | AlbumWhereUniqueInput[]
    delete?: AlbumWhereUniqueInput | AlbumWhereUniqueInput[]
    connect?: AlbumWhereUniqueInput | AlbumWhereUniqueInput[]
    update?: AlbumUpdateWithWhereUniqueWithoutAuthorInput | AlbumUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: AlbumUpdateManyWithWhereWithoutAuthorInput | AlbumUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: AlbumScalarWhereInput | AlbumScalarWhereInput[]
  }

  export type ChatGroupUpdateManyWithoutMembersNestedInput = {
    create?: XOR<ChatGroupCreateWithoutMembersInput, ChatGroupUncheckedCreateWithoutMembersInput> | ChatGroupCreateWithoutMembersInput[] | ChatGroupUncheckedCreateWithoutMembersInput[]
    connectOrCreate?: ChatGroupCreateOrConnectWithoutMembersInput | ChatGroupCreateOrConnectWithoutMembersInput[]
    upsert?: ChatGroupUpsertWithWhereUniqueWithoutMembersInput | ChatGroupUpsertWithWhereUniqueWithoutMembersInput[]
    set?: ChatGroupWhereUniqueInput | ChatGroupWhereUniqueInput[]
    disconnect?: ChatGroupWhereUniqueInput | ChatGroupWhereUniqueInput[]
    delete?: ChatGroupWhereUniqueInput | ChatGroupWhereUniqueInput[]
    connect?: ChatGroupWhereUniqueInput | ChatGroupWhereUniqueInput[]
    update?: ChatGroupUpdateWithWhereUniqueWithoutMembersInput | ChatGroupUpdateWithWhereUniqueWithoutMembersInput[]
    updateMany?: ChatGroupUpdateManyWithWhereWithoutMembersInput | ChatGroupUpdateManyWithWhereWithoutMembersInput[]
    deleteMany?: ChatGroupScalarWhereInput | ChatGroupScalarWhereInput[]
  }

  export type ChatGroupUpdateManyWithoutAdminNestedInput = {
    create?: XOR<ChatGroupCreateWithoutAdminInput, ChatGroupUncheckedCreateWithoutAdminInput> | ChatGroupCreateWithoutAdminInput[] | ChatGroupUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: ChatGroupCreateOrConnectWithoutAdminInput | ChatGroupCreateOrConnectWithoutAdminInput[]
    upsert?: ChatGroupUpsertWithWhereUniqueWithoutAdminInput | ChatGroupUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: ChatGroupCreateManyAdminInputEnvelope
    set?: ChatGroupWhereUniqueInput | ChatGroupWhereUniqueInput[]
    disconnect?: ChatGroupWhereUniqueInput | ChatGroupWhereUniqueInput[]
    delete?: ChatGroupWhereUniqueInput | ChatGroupWhereUniqueInput[]
    connect?: ChatGroupWhereUniqueInput | ChatGroupWhereUniqueInput[]
    update?: ChatGroupUpdateWithWhereUniqueWithoutAdminInput | ChatGroupUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: ChatGroupUpdateManyWithWhereWithoutAdminInput | ChatGroupUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: ChatGroupScalarWhereInput | ChatGroupScalarWhereInput[]
  }

  export type ChatMessageUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<ChatMessageCreateWithoutAuthorInput, ChatMessageUncheckedCreateWithoutAuthorInput> | ChatMessageCreateWithoutAuthorInput[] | ChatMessageUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutAuthorInput | ChatMessageCreateOrConnectWithoutAuthorInput[]
    upsert?: ChatMessageUpsertWithWhereUniqueWithoutAuthorInput | ChatMessageUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: ChatMessageCreateManyAuthorInputEnvelope
    set?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    disconnect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    delete?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    update?: ChatMessageUpdateWithWhereUniqueWithoutAuthorInput | ChatMessageUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: ChatMessageUpdateManyWithWhereWithoutAuthorInput | ChatMessageUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[]
  }

  export type UserPostUpdateManyWithoutViewsNestedInput = {
    create?: XOR<UserPostCreateWithoutViewsInput, UserPostUncheckedCreateWithoutViewsInput> | UserPostCreateWithoutViewsInput[] | UserPostUncheckedCreateWithoutViewsInput[]
    connectOrCreate?: UserPostCreateOrConnectWithoutViewsInput | UserPostCreateOrConnectWithoutViewsInput[]
    upsert?: UserPostUpsertWithWhereUniqueWithoutViewsInput | UserPostUpsertWithWhereUniqueWithoutViewsInput[]
    set?: UserPostWhereUniqueInput | UserPostWhereUniqueInput[]
    disconnect?: UserPostWhereUniqueInput | UserPostWhereUniqueInput[]
    delete?: UserPostWhereUniqueInput | UserPostWhereUniqueInput[]
    connect?: UserPostWhereUniqueInput | UserPostWhereUniqueInput[]
    update?: UserPostUpdateWithWhereUniqueWithoutViewsInput | UserPostUpdateWithWhereUniqueWithoutViewsInput[]
    updateMany?: UserPostUpdateManyWithWhereWithoutViewsInput | UserPostUpdateManyWithWhereWithoutViewsInput[]
    deleteMany?: UserPostScalarWhereInput | UserPostScalarWhereInput[]
  }

  export type UserPostUpdateManyWithoutLikesNestedInput = {
    create?: XOR<UserPostCreateWithoutLikesInput, UserPostUncheckedCreateWithoutLikesInput> | UserPostCreateWithoutLikesInput[] | UserPostUncheckedCreateWithoutLikesInput[]
    connectOrCreate?: UserPostCreateOrConnectWithoutLikesInput | UserPostCreateOrConnectWithoutLikesInput[]
    upsert?: UserPostUpsertWithWhereUniqueWithoutLikesInput | UserPostUpsertWithWhereUniqueWithoutLikesInput[]
    set?: UserPostWhereUniqueInput | UserPostWhereUniqueInput[]
    disconnect?: UserPostWhereUniqueInput | UserPostWhereUniqueInput[]
    delete?: UserPostWhereUniqueInput | UserPostWhereUniqueInput[]
    connect?: UserPostWhereUniqueInput | UserPostWhereUniqueInput[]
    update?: UserPostUpdateWithWhereUniqueWithoutLikesInput | UserPostUpdateWithWhereUniqueWithoutLikesInput[]
    updateMany?: UserPostUpdateManyWithWhereWithoutLikesInput | UserPostUpdateManyWithWhereWithoutLikesInput[]
    deleteMany?: UserPostScalarWhereInput | UserPostScalarWhereInput[]
  }

  export type AvatarUpdateOneWithoutProfileNestedInput = {
    create?: XOR<AvatarCreateWithoutProfileInput, AvatarUncheckedCreateWithoutProfileInput>
    connectOrCreate?: AvatarCreateOrConnectWithoutProfileInput
    upsert?: AvatarUpsertWithoutProfileInput
    disconnect?: AvatarWhereInput | boolean
    delete?: AvatarWhereInput | boolean
    connect?: AvatarWhereUniqueInput
    update?: XOR<XOR<AvatarUpdateToOneWithWhereWithoutProfileInput, AvatarUpdateWithoutProfileInput>, AvatarUncheckedUpdateWithoutProfileInput>
  }

  export type FriendshipUpdateManyWithoutProfile1NestedInput = {
    create?: XOR<FriendshipCreateWithoutProfile1Input, FriendshipUncheckedCreateWithoutProfile1Input> | FriendshipCreateWithoutProfile1Input[] | FriendshipUncheckedCreateWithoutProfile1Input[]
    connectOrCreate?: FriendshipCreateOrConnectWithoutProfile1Input | FriendshipCreateOrConnectWithoutProfile1Input[]
    upsert?: FriendshipUpsertWithWhereUniqueWithoutProfile1Input | FriendshipUpsertWithWhereUniqueWithoutProfile1Input[]
    createMany?: FriendshipCreateManyProfile1InputEnvelope
    set?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
    disconnect?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
    delete?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
    connect?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
    update?: FriendshipUpdateWithWhereUniqueWithoutProfile1Input | FriendshipUpdateWithWhereUniqueWithoutProfile1Input[]
    updateMany?: FriendshipUpdateManyWithWhereWithoutProfile1Input | FriendshipUpdateManyWithWhereWithoutProfile1Input[]
    deleteMany?: FriendshipScalarWhereInput | FriendshipScalarWhereInput[]
  }

  export type FriendshipUpdateManyWithoutProfile2NestedInput = {
    create?: XOR<FriendshipCreateWithoutProfile2Input, FriendshipUncheckedCreateWithoutProfile2Input> | FriendshipCreateWithoutProfile2Input[] | FriendshipUncheckedCreateWithoutProfile2Input[]
    connectOrCreate?: FriendshipCreateOrConnectWithoutProfile2Input | FriendshipCreateOrConnectWithoutProfile2Input[]
    upsert?: FriendshipUpsertWithWhereUniqueWithoutProfile2Input | FriendshipUpsertWithWhereUniqueWithoutProfile2Input[]
    createMany?: FriendshipCreateManyProfile2InputEnvelope
    set?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
    disconnect?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
    delete?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
    connect?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
    update?: FriendshipUpdateWithWhereUniqueWithoutProfile2Input | FriendshipUpdateWithWhereUniqueWithoutProfile2Input[]
    updateMany?: FriendshipUpdateManyWithWhereWithoutProfile2Input | FriendshipUpdateManyWithWhereWithoutProfile2Input[]
    deleteMany?: FriendshipScalarWhereInput | FriendshipScalarWhereInput[]
  }

  export type UserPostUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<UserPostCreateWithoutAuthorInput, UserPostUncheckedCreateWithoutAuthorInput> | UserPostCreateWithoutAuthorInput[] | UserPostUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: UserPostCreateOrConnectWithoutAuthorInput | UserPostCreateOrConnectWithoutAuthorInput[]
    upsert?: UserPostUpsertWithWhereUniqueWithoutAuthorInput | UserPostUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: UserPostCreateManyAuthorInputEnvelope
    set?: UserPostWhereUniqueInput | UserPostWhereUniqueInput[]
    disconnect?: UserPostWhereUniqueInput | UserPostWhereUniqueInput[]
    delete?: UserPostWhereUniqueInput | UserPostWhereUniqueInput[]
    connect?: UserPostWhereUniqueInput | UserPostWhereUniqueInput[]
    update?: UserPostUpdateWithWhereUniqueWithoutAuthorInput | UserPostUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: UserPostUpdateManyWithWhereWithoutAuthorInput | UserPostUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: UserPostScalarWhereInput | UserPostScalarWhereInput[]
  }

  export type AlbumUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<AlbumCreateWithoutAuthorInput, AlbumUncheckedCreateWithoutAuthorInput> | AlbumCreateWithoutAuthorInput[] | AlbumUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: AlbumCreateOrConnectWithoutAuthorInput | AlbumCreateOrConnectWithoutAuthorInput[]
    upsert?: AlbumUpsertWithWhereUniqueWithoutAuthorInput | AlbumUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: AlbumCreateManyAuthorInputEnvelope
    set?: AlbumWhereUniqueInput | AlbumWhereUniqueInput[]
    disconnect?: AlbumWhereUniqueInput | AlbumWhereUniqueInput[]
    delete?: AlbumWhereUniqueInput | AlbumWhereUniqueInput[]
    connect?: AlbumWhereUniqueInput | AlbumWhereUniqueInput[]
    update?: AlbumUpdateWithWhereUniqueWithoutAuthorInput | AlbumUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: AlbumUpdateManyWithWhereWithoutAuthorInput | AlbumUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: AlbumScalarWhereInput | AlbumScalarWhereInput[]
  }

  export type ChatGroupUncheckedUpdateManyWithoutMembersNestedInput = {
    create?: XOR<ChatGroupCreateWithoutMembersInput, ChatGroupUncheckedCreateWithoutMembersInput> | ChatGroupCreateWithoutMembersInput[] | ChatGroupUncheckedCreateWithoutMembersInput[]
    connectOrCreate?: ChatGroupCreateOrConnectWithoutMembersInput | ChatGroupCreateOrConnectWithoutMembersInput[]
    upsert?: ChatGroupUpsertWithWhereUniqueWithoutMembersInput | ChatGroupUpsertWithWhereUniqueWithoutMembersInput[]
    set?: ChatGroupWhereUniqueInput | ChatGroupWhereUniqueInput[]
    disconnect?: ChatGroupWhereUniqueInput | ChatGroupWhereUniqueInput[]
    delete?: ChatGroupWhereUniqueInput | ChatGroupWhereUniqueInput[]
    connect?: ChatGroupWhereUniqueInput | ChatGroupWhereUniqueInput[]
    update?: ChatGroupUpdateWithWhereUniqueWithoutMembersInput | ChatGroupUpdateWithWhereUniqueWithoutMembersInput[]
    updateMany?: ChatGroupUpdateManyWithWhereWithoutMembersInput | ChatGroupUpdateManyWithWhereWithoutMembersInput[]
    deleteMany?: ChatGroupScalarWhereInput | ChatGroupScalarWhereInput[]
  }

  export type ChatGroupUncheckedUpdateManyWithoutAdminNestedInput = {
    create?: XOR<ChatGroupCreateWithoutAdminInput, ChatGroupUncheckedCreateWithoutAdminInput> | ChatGroupCreateWithoutAdminInput[] | ChatGroupUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: ChatGroupCreateOrConnectWithoutAdminInput | ChatGroupCreateOrConnectWithoutAdminInput[]
    upsert?: ChatGroupUpsertWithWhereUniqueWithoutAdminInput | ChatGroupUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: ChatGroupCreateManyAdminInputEnvelope
    set?: ChatGroupWhereUniqueInput | ChatGroupWhereUniqueInput[]
    disconnect?: ChatGroupWhereUniqueInput | ChatGroupWhereUniqueInput[]
    delete?: ChatGroupWhereUniqueInput | ChatGroupWhereUniqueInput[]
    connect?: ChatGroupWhereUniqueInput | ChatGroupWhereUniqueInput[]
    update?: ChatGroupUpdateWithWhereUniqueWithoutAdminInput | ChatGroupUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: ChatGroupUpdateManyWithWhereWithoutAdminInput | ChatGroupUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: ChatGroupScalarWhereInput | ChatGroupScalarWhereInput[]
  }

  export type ChatMessageUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<ChatMessageCreateWithoutAuthorInput, ChatMessageUncheckedCreateWithoutAuthorInput> | ChatMessageCreateWithoutAuthorInput[] | ChatMessageUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutAuthorInput | ChatMessageCreateOrConnectWithoutAuthorInput[]
    upsert?: ChatMessageUpsertWithWhereUniqueWithoutAuthorInput | ChatMessageUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: ChatMessageCreateManyAuthorInputEnvelope
    set?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    disconnect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    delete?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    update?: ChatMessageUpdateWithWhereUniqueWithoutAuthorInput | ChatMessageUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: ChatMessageUpdateManyWithWhereWithoutAuthorInput | ChatMessageUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[]
  }

  export type UserPostUncheckedUpdateManyWithoutViewsNestedInput = {
    create?: XOR<UserPostCreateWithoutViewsInput, UserPostUncheckedCreateWithoutViewsInput> | UserPostCreateWithoutViewsInput[] | UserPostUncheckedCreateWithoutViewsInput[]
    connectOrCreate?: UserPostCreateOrConnectWithoutViewsInput | UserPostCreateOrConnectWithoutViewsInput[]
    upsert?: UserPostUpsertWithWhereUniqueWithoutViewsInput | UserPostUpsertWithWhereUniqueWithoutViewsInput[]
    set?: UserPostWhereUniqueInput | UserPostWhereUniqueInput[]
    disconnect?: UserPostWhereUniqueInput | UserPostWhereUniqueInput[]
    delete?: UserPostWhereUniqueInput | UserPostWhereUniqueInput[]
    connect?: UserPostWhereUniqueInput | UserPostWhereUniqueInput[]
    update?: UserPostUpdateWithWhereUniqueWithoutViewsInput | UserPostUpdateWithWhereUniqueWithoutViewsInput[]
    updateMany?: UserPostUpdateManyWithWhereWithoutViewsInput | UserPostUpdateManyWithWhereWithoutViewsInput[]
    deleteMany?: UserPostScalarWhereInput | UserPostScalarWhereInput[]
  }

  export type UserPostUncheckedUpdateManyWithoutLikesNestedInput = {
    create?: XOR<UserPostCreateWithoutLikesInput, UserPostUncheckedCreateWithoutLikesInput> | UserPostCreateWithoutLikesInput[] | UserPostUncheckedCreateWithoutLikesInput[]
    connectOrCreate?: UserPostCreateOrConnectWithoutLikesInput | UserPostCreateOrConnectWithoutLikesInput[]
    upsert?: UserPostUpsertWithWhereUniqueWithoutLikesInput | UserPostUpsertWithWhereUniqueWithoutLikesInput[]
    set?: UserPostWhereUniqueInput | UserPostWhereUniqueInput[]
    disconnect?: UserPostWhereUniqueInput | UserPostWhereUniqueInput[]
    delete?: UserPostWhereUniqueInput | UserPostWhereUniqueInput[]
    connect?: UserPostWhereUniqueInput | UserPostWhereUniqueInput[]
    update?: UserPostUpdateWithWhereUniqueWithoutLikesInput | UserPostUpdateWithWhereUniqueWithoutLikesInput[]
    updateMany?: UserPostUpdateManyWithWhereWithoutLikesInput | UserPostUpdateManyWithWhereWithoutLikesInput[]
    deleteMany?: UserPostScalarWhereInput | UserPostScalarWhereInput[]
  }

  export type AvatarUncheckedUpdateOneWithoutProfileNestedInput = {
    create?: XOR<AvatarCreateWithoutProfileInput, AvatarUncheckedCreateWithoutProfileInput>
    connectOrCreate?: AvatarCreateOrConnectWithoutProfileInput
    upsert?: AvatarUpsertWithoutProfileInput
    disconnect?: AvatarWhereInput | boolean
    delete?: AvatarWhereInput | boolean
    connect?: AvatarWhereUniqueInput
    update?: XOR<XOR<AvatarUpdateToOneWithWhereWithoutProfileInput, AvatarUpdateWithoutProfileInput>, AvatarUncheckedUpdateWithoutProfileInput>
  }

  export type FriendshipUncheckedUpdateManyWithoutProfile1NestedInput = {
    create?: XOR<FriendshipCreateWithoutProfile1Input, FriendshipUncheckedCreateWithoutProfile1Input> | FriendshipCreateWithoutProfile1Input[] | FriendshipUncheckedCreateWithoutProfile1Input[]
    connectOrCreate?: FriendshipCreateOrConnectWithoutProfile1Input | FriendshipCreateOrConnectWithoutProfile1Input[]
    upsert?: FriendshipUpsertWithWhereUniqueWithoutProfile1Input | FriendshipUpsertWithWhereUniqueWithoutProfile1Input[]
    createMany?: FriendshipCreateManyProfile1InputEnvelope
    set?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
    disconnect?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
    delete?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
    connect?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
    update?: FriendshipUpdateWithWhereUniqueWithoutProfile1Input | FriendshipUpdateWithWhereUniqueWithoutProfile1Input[]
    updateMany?: FriendshipUpdateManyWithWhereWithoutProfile1Input | FriendshipUpdateManyWithWhereWithoutProfile1Input[]
    deleteMany?: FriendshipScalarWhereInput | FriendshipScalarWhereInput[]
  }

  export type FriendshipUncheckedUpdateManyWithoutProfile2NestedInput = {
    create?: XOR<FriendshipCreateWithoutProfile2Input, FriendshipUncheckedCreateWithoutProfile2Input> | FriendshipCreateWithoutProfile2Input[] | FriendshipUncheckedCreateWithoutProfile2Input[]
    connectOrCreate?: FriendshipCreateOrConnectWithoutProfile2Input | FriendshipCreateOrConnectWithoutProfile2Input[]
    upsert?: FriendshipUpsertWithWhereUniqueWithoutProfile2Input | FriendshipUpsertWithWhereUniqueWithoutProfile2Input[]
    createMany?: FriendshipCreateManyProfile2InputEnvelope
    set?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
    disconnect?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
    delete?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
    connect?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
    update?: FriendshipUpdateWithWhereUniqueWithoutProfile2Input | FriendshipUpdateWithWhereUniqueWithoutProfile2Input[]
    updateMany?: FriendshipUpdateManyWithWhereWithoutProfile2Input | FriendshipUpdateManyWithWhereWithoutProfile2Input[]
    deleteMany?: FriendshipScalarWhereInput | FriendshipScalarWhereInput[]
  }

  export type ProfileCreateNestedOneWithoutAvatarInput = {
    create?: XOR<ProfileCreateWithoutAvatarInput, ProfileUncheckedCreateWithoutAvatarInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutAvatarInput
    connect?: ProfileWhereUniqueInput
  }

  export type ProfileUpdateOneRequiredWithoutAvatarNestedInput = {
    create?: XOR<ProfileCreateWithoutAvatarInput, ProfileUncheckedCreateWithoutAvatarInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutAvatarInput
    upsert?: ProfileUpsertWithoutAvatarInput
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutAvatarInput, ProfileUpdateWithoutAvatarInput>, ProfileUncheckedUpdateWithoutAvatarInput>
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

  export type ImageCreateWithoutAlbumInput = {
    url: string
    uploadedAt?: Date | string
    UserPost?: UserPostCreateNestedManyWithoutImagesInput
  }

  export type ImageUncheckedCreateWithoutAlbumInput = {
    id?: number
    url: string
    uploadedAt?: Date | string
    UserPost?: UserPostUncheckedCreateNestedManyWithoutImagesInput
  }

  export type ImageCreateOrConnectWithoutAlbumInput = {
    where: ImageWhereUniqueInput
    create: XOR<ImageCreateWithoutAlbumInput, ImageUncheckedCreateWithoutAlbumInput>
  }

  export type ProfileCreateWithoutAlbumInput = {
    name?: string | null
    username?: string | null
    surname?: string | null
    dateOfBirth?: Date | string | null
    email: string
    password: string
    image?: string | null
    about?: string | null
    signature?: string | null
    post?: UserPostCreateNestedManyWithoutAuthorInput
    chats?: ChatGroupCreateNestedManyWithoutMembersInput
    administeredGroups?: ChatGroupCreateNestedManyWithoutAdminInput
    chatMessages?: ChatMessageCreateNestedManyWithoutAuthorInput
    userPostViews?: UserPostCreateNestedManyWithoutViewsInput
    userPostLikes?: UserPostCreateNestedManyWithoutLikesInput
    avatar?: AvatarCreateNestedOneWithoutProfileInput
    friendshipFrom?: FriendshipCreateNestedManyWithoutProfile1Input
    friendshipTo?: FriendshipCreateNestedManyWithoutProfile2Input
  }

  export type ProfileUncheckedCreateWithoutAlbumInput = {
    id?: number
    name?: string | null
    username?: string | null
    surname?: string | null
    dateOfBirth?: Date | string | null
    email: string
    password: string
    image?: string | null
    about?: string | null
    signature?: string | null
    post?: UserPostUncheckedCreateNestedManyWithoutAuthorInput
    chats?: ChatGroupUncheckedCreateNestedManyWithoutMembersInput
    administeredGroups?: ChatGroupUncheckedCreateNestedManyWithoutAdminInput
    chatMessages?: ChatMessageUncheckedCreateNestedManyWithoutAuthorInput
    userPostViews?: UserPostUncheckedCreateNestedManyWithoutViewsInput
    userPostLikes?: UserPostUncheckedCreateNestedManyWithoutLikesInput
    avatar?: AvatarUncheckedCreateNestedOneWithoutProfileInput
    friendshipFrom?: FriendshipUncheckedCreateNestedManyWithoutProfile1Input
    friendshipTo?: FriendshipUncheckedCreateNestedManyWithoutProfile2Input
  }

  export type ProfileCreateOrConnectWithoutAlbumInput = {
    where: ProfileWhereUniqueInput
    create: XOR<ProfileCreateWithoutAlbumInput, ProfileUncheckedCreateWithoutAlbumInput>
  }

  export type ImageUpsertWithWhereUniqueWithoutAlbumInput = {
    where: ImageWhereUniqueInput
    update: XOR<ImageUpdateWithoutAlbumInput, ImageUncheckedUpdateWithoutAlbumInput>
    create: XOR<ImageCreateWithoutAlbumInput, ImageUncheckedCreateWithoutAlbumInput>
  }

  export type ImageUpdateWithWhereUniqueWithoutAlbumInput = {
    where: ImageWhereUniqueInput
    data: XOR<ImageUpdateWithoutAlbumInput, ImageUncheckedUpdateWithoutAlbumInput>
  }

  export type ImageUpdateManyWithWhereWithoutAlbumInput = {
    where: ImageScalarWhereInput
    data: XOR<ImageUpdateManyMutationInput, ImageUncheckedUpdateManyWithoutAlbumInput>
  }

  export type ImageScalarWhereInput = {
    AND?: ImageScalarWhereInput | ImageScalarWhereInput[]
    OR?: ImageScalarWhereInput[]
    NOT?: ImageScalarWhereInput | ImageScalarWhereInput[]
    id?: IntFilter<"Image"> | number
    url?: StringFilter<"Image"> | string
    uploadedAt?: DateTimeFilter<"Image"> | Date | string
  }

  export type ProfileUpsertWithoutAlbumInput = {
    update: XOR<ProfileUpdateWithoutAlbumInput, ProfileUncheckedUpdateWithoutAlbumInput>
    create: XOR<ProfileCreateWithoutAlbumInput, ProfileUncheckedCreateWithoutAlbumInput>
    where?: ProfileWhereInput
  }

  export type ProfileUpdateToOneWithWhereWithoutAlbumInput = {
    where?: ProfileWhereInput
    data: XOR<ProfileUpdateWithoutAlbumInput, ProfileUncheckedUpdateWithoutAlbumInput>
  }

  export type ProfileUpdateWithoutAlbumInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    signature?: NullableStringFieldUpdateOperationsInput | string | null
    post?: UserPostUpdateManyWithoutAuthorNestedInput
    chats?: ChatGroupUpdateManyWithoutMembersNestedInput
    administeredGroups?: ChatGroupUpdateManyWithoutAdminNestedInput
    chatMessages?: ChatMessageUpdateManyWithoutAuthorNestedInput
    userPostViews?: UserPostUpdateManyWithoutViewsNestedInput
    userPostLikes?: UserPostUpdateManyWithoutLikesNestedInput
    avatar?: AvatarUpdateOneWithoutProfileNestedInput
    friendshipFrom?: FriendshipUpdateManyWithoutProfile1NestedInput
    friendshipTo?: FriendshipUpdateManyWithoutProfile2NestedInput
  }

  export type ProfileUncheckedUpdateWithoutAlbumInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    signature?: NullableStringFieldUpdateOperationsInput | string | null
    post?: UserPostUncheckedUpdateManyWithoutAuthorNestedInput
    chats?: ChatGroupUncheckedUpdateManyWithoutMembersNestedInput
    administeredGroups?: ChatGroupUncheckedUpdateManyWithoutAdminNestedInput
    chatMessages?: ChatMessageUncheckedUpdateManyWithoutAuthorNestedInput
    userPostViews?: UserPostUncheckedUpdateManyWithoutViewsNestedInput
    userPostLikes?: UserPostUncheckedUpdateManyWithoutLikesNestedInput
    avatar?: AvatarUncheckedUpdateOneWithoutProfileNestedInput
    friendshipFrom?: FriendshipUncheckedUpdateManyWithoutProfile1NestedInput
    friendshipTo?: FriendshipUncheckedUpdateManyWithoutProfile2NestedInput
  }

  export type ProfileCreateWithoutChatsInput = {
    name?: string | null
    username?: string | null
    surname?: string | null
    dateOfBirth?: Date | string | null
    email: string
    password: string
    image?: string | null
    about?: string | null
    signature?: string | null
    post?: UserPostCreateNestedManyWithoutAuthorInput
    album?: AlbumCreateNestedManyWithoutAuthorInput
    administeredGroups?: ChatGroupCreateNestedManyWithoutAdminInput
    chatMessages?: ChatMessageCreateNestedManyWithoutAuthorInput
    userPostViews?: UserPostCreateNestedManyWithoutViewsInput
    userPostLikes?: UserPostCreateNestedManyWithoutLikesInput
    avatar?: AvatarCreateNestedOneWithoutProfileInput
    friendshipFrom?: FriendshipCreateNestedManyWithoutProfile1Input
    friendshipTo?: FriendshipCreateNestedManyWithoutProfile2Input
  }

  export type ProfileUncheckedCreateWithoutChatsInput = {
    id?: number
    name?: string | null
    username?: string | null
    surname?: string | null
    dateOfBirth?: Date | string | null
    email: string
    password: string
    image?: string | null
    about?: string | null
    signature?: string | null
    post?: UserPostUncheckedCreateNestedManyWithoutAuthorInput
    album?: AlbumUncheckedCreateNestedManyWithoutAuthorInput
    administeredGroups?: ChatGroupUncheckedCreateNestedManyWithoutAdminInput
    chatMessages?: ChatMessageUncheckedCreateNestedManyWithoutAuthorInput
    userPostViews?: UserPostUncheckedCreateNestedManyWithoutViewsInput
    userPostLikes?: UserPostUncheckedCreateNestedManyWithoutLikesInput
    avatar?: AvatarUncheckedCreateNestedOneWithoutProfileInput
    friendshipFrom?: FriendshipUncheckedCreateNestedManyWithoutProfile1Input
    friendshipTo?: FriendshipUncheckedCreateNestedManyWithoutProfile2Input
  }

  export type ProfileCreateOrConnectWithoutChatsInput = {
    where: ProfileWhereUniqueInput
    create: XOR<ProfileCreateWithoutChatsInput, ProfileUncheckedCreateWithoutChatsInput>
  }

  export type ProfileCreateWithoutAdministeredGroupsInput = {
    name?: string | null
    username?: string | null
    surname?: string | null
    dateOfBirth?: Date | string | null
    email: string
    password: string
    image?: string | null
    about?: string | null
    signature?: string | null
    post?: UserPostCreateNestedManyWithoutAuthorInput
    album?: AlbumCreateNestedManyWithoutAuthorInput
    chats?: ChatGroupCreateNestedManyWithoutMembersInput
    chatMessages?: ChatMessageCreateNestedManyWithoutAuthorInput
    userPostViews?: UserPostCreateNestedManyWithoutViewsInput
    userPostLikes?: UserPostCreateNestedManyWithoutLikesInput
    avatar?: AvatarCreateNestedOneWithoutProfileInput
    friendshipFrom?: FriendshipCreateNestedManyWithoutProfile1Input
    friendshipTo?: FriendshipCreateNestedManyWithoutProfile2Input
  }

  export type ProfileUncheckedCreateWithoutAdministeredGroupsInput = {
    id?: number
    name?: string | null
    username?: string | null
    surname?: string | null
    dateOfBirth?: Date | string | null
    email: string
    password: string
    image?: string | null
    about?: string | null
    signature?: string | null
    post?: UserPostUncheckedCreateNestedManyWithoutAuthorInput
    album?: AlbumUncheckedCreateNestedManyWithoutAuthorInput
    chats?: ChatGroupUncheckedCreateNestedManyWithoutMembersInput
    chatMessages?: ChatMessageUncheckedCreateNestedManyWithoutAuthorInput
    userPostViews?: UserPostUncheckedCreateNestedManyWithoutViewsInput
    userPostLikes?: UserPostUncheckedCreateNestedManyWithoutLikesInput
    avatar?: AvatarUncheckedCreateNestedOneWithoutProfileInput
    friendshipFrom?: FriendshipUncheckedCreateNestedManyWithoutProfile1Input
    friendshipTo?: FriendshipUncheckedCreateNestedManyWithoutProfile2Input
  }

  export type ProfileCreateOrConnectWithoutAdministeredGroupsInput = {
    where: ProfileWhereUniqueInput
    create: XOR<ProfileCreateWithoutAdministeredGroupsInput, ProfileUncheckedCreateWithoutAdministeredGroupsInput>
  }

  export type ChatMessageCreateWithoutChatGroupInput = {
    content: string
    sentAt?: Date | string
    attachedImage: string
    author: ProfileCreateNestedOneWithoutChatMessagesInput
  }

  export type ChatMessageUncheckedCreateWithoutChatGroupInput = {
    id?: number
    content: string
    sentAt?: Date | string
    authorId: number
    attachedImage: string
  }

  export type ChatMessageCreateOrConnectWithoutChatGroupInput = {
    where: ChatMessageWhereUniqueInput
    create: XOR<ChatMessageCreateWithoutChatGroupInput, ChatMessageUncheckedCreateWithoutChatGroupInput>
  }

  export type ChatMessageCreateManyChatGroupInputEnvelope = {
    data: ChatMessageCreateManyChatGroupInput | ChatMessageCreateManyChatGroupInput[]
  }

  export type ProfileUpsertWithWhereUniqueWithoutChatsInput = {
    where: ProfileWhereUniqueInput
    update: XOR<ProfileUpdateWithoutChatsInput, ProfileUncheckedUpdateWithoutChatsInput>
    create: XOR<ProfileCreateWithoutChatsInput, ProfileUncheckedCreateWithoutChatsInput>
  }

  export type ProfileUpdateWithWhereUniqueWithoutChatsInput = {
    where: ProfileWhereUniqueInput
    data: XOR<ProfileUpdateWithoutChatsInput, ProfileUncheckedUpdateWithoutChatsInput>
  }

  export type ProfileUpdateManyWithWhereWithoutChatsInput = {
    where: ProfileScalarWhereInput
    data: XOR<ProfileUpdateManyMutationInput, ProfileUncheckedUpdateManyWithoutChatsInput>
  }

  export type ProfileScalarWhereInput = {
    AND?: ProfileScalarWhereInput | ProfileScalarWhereInput[]
    OR?: ProfileScalarWhereInput[]
    NOT?: ProfileScalarWhereInput | ProfileScalarWhereInput[]
    id?: IntFilter<"Profile"> | number
    name?: StringNullableFilter<"Profile"> | string | null
    username?: StringNullableFilter<"Profile"> | string | null
    surname?: StringNullableFilter<"Profile"> | string | null
    dateOfBirth?: DateTimeNullableFilter<"Profile"> | Date | string | null
    email?: StringFilter<"Profile"> | string
    password?: StringFilter<"Profile"> | string
    image?: StringNullableFilter<"Profile"> | string | null
    about?: StringNullableFilter<"Profile"> | string | null
    signature?: StringNullableFilter<"Profile"> | string | null
  }

  export type ProfileUpsertWithoutAdministeredGroupsInput = {
    update: XOR<ProfileUpdateWithoutAdministeredGroupsInput, ProfileUncheckedUpdateWithoutAdministeredGroupsInput>
    create: XOR<ProfileCreateWithoutAdministeredGroupsInput, ProfileUncheckedCreateWithoutAdministeredGroupsInput>
    where?: ProfileWhereInput
  }

  export type ProfileUpdateToOneWithWhereWithoutAdministeredGroupsInput = {
    where?: ProfileWhereInput
    data: XOR<ProfileUpdateWithoutAdministeredGroupsInput, ProfileUncheckedUpdateWithoutAdministeredGroupsInput>
  }

  export type ProfileUpdateWithoutAdministeredGroupsInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    signature?: NullableStringFieldUpdateOperationsInput | string | null
    post?: UserPostUpdateManyWithoutAuthorNestedInput
    album?: AlbumUpdateManyWithoutAuthorNestedInput
    chats?: ChatGroupUpdateManyWithoutMembersNestedInput
    chatMessages?: ChatMessageUpdateManyWithoutAuthorNestedInput
    userPostViews?: UserPostUpdateManyWithoutViewsNestedInput
    userPostLikes?: UserPostUpdateManyWithoutLikesNestedInput
    avatar?: AvatarUpdateOneWithoutProfileNestedInput
    friendshipFrom?: FriendshipUpdateManyWithoutProfile1NestedInput
    friendshipTo?: FriendshipUpdateManyWithoutProfile2NestedInput
  }

  export type ProfileUncheckedUpdateWithoutAdministeredGroupsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    signature?: NullableStringFieldUpdateOperationsInput | string | null
    post?: UserPostUncheckedUpdateManyWithoutAuthorNestedInput
    album?: AlbumUncheckedUpdateManyWithoutAuthorNestedInput
    chats?: ChatGroupUncheckedUpdateManyWithoutMembersNestedInput
    chatMessages?: ChatMessageUncheckedUpdateManyWithoutAuthorNestedInput
    userPostViews?: UserPostUncheckedUpdateManyWithoutViewsNestedInput
    userPostLikes?: UserPostUncheckedUpdateManyWithoutLikesNestedInput
    avatar?: AvatarUncheckedUpdateOneWithoutProfileNestedInput
    friendshipFrom?: FriendshipUncheckedUpdateManyWithoutProfile1NestedInput
    friendshipTo?: FriendshipUncheckedUpdateManyWithoutProfile2NestedInput
  }

  export type ChatMessageUpsertWithWhereUniqueWithoutChatGroupInput = {
    where: ChatMessageWhereUniqueInput
    update: XOR<ChatMessageUpdateWithoutChatGroupInput, ChatMessageUncheckedUpdateWithoutChatGroupInput>
    create: XOR<ChatMessageCreateWithoutChatGroupInput, ChatMessageUncheckedCreateWithoutChatGroupInput>
  }

  export type ChatMessageUpdateWithWhereUniqueWithoutChatGroupInput = {
    where: ChatMessageWhereUniqueInput
    data: XOR<ChatMessageUpdateWithoutChatGroupInput, ChatMessageUncheckedUpdateWithoutChatGroupInput>
  }

  export type ChatMessageUpdateManyWithWhereWithoutChatGroupInput = {
    where: ChatMessageScalarWhereInput
    data: XOR<ChatMessageUpdateManyMutationInput, ChatMessageUncheckedUpdateManyWithoutChatGroupInput>
  }

  export type ChatMessageScalarWhereInput = {
    AND?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[]
    OR?: ChatMessageScalarWhereInput[]
    NOT?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[]
    id?: IntFilter<"ChatMessage"> | number
    content?: StringFilter<"ChatMessage"> | string
    sentAt?: DateTimeFilter<"ChatMessage"> | Date | string
    authorId?: IntFilter<"ChatMessage"> | number
    chatGroupId?: IntFilter<"ChatMessage"> | number
    attachedImage?: StringFilter<"ChatMessage"> | string
  }

  export type ProfileCreateWithoutChatMessagesInput = {
    name?: string | null
    username?: string | null
    surname?: string | null
    dateOfBirth?: Date | string | null
    email: string
    password: string
    image?: string | null
    about?: string | null
    signature?: string | null
    post?: UserPostCreateNestedManyWithoutAuthorInput
    album?: AlbumCreateNestedManyWithoutAuthorInput
    chats?: ChatGroupCreateNestedManyWithoutMembersInput
    administeredGroups?: ChatGroupCreateNestedManyWithoutAdminInput
    userPostViews?: UserPostCreateNestedManyWithoutViewsInput
    userPostLikes?: UserPostCreateNestedManyWithoutLikesInput
    avatar?: AvatarCreateNestedOneWithoutProfileInput
    friendshipFrom?: FriendshipCreateNestedManyWithoutProfile1Input
    friendshipTo?: FriendshipCreateNestedManyWithoutProfile2Input
  }

  export type ProfileUncheckedCreateWithoutChatMessagesInput = {
    id?: number
    name?: string | null
    username?: string | null
    surname?: string | null
    dateOfBirth?: Date | string | null
    email: string
    password: string
    image?: string | null
    about?: string | null
    signature?: string | null
    post?: UserPostUncheckedCreateNestedManyWithoutAuthorInput
    album?: AlbumUncheckedCreateNestedManyWithoutAuthorInput
    chats?: ChatGroupUncheckedCreateNestedManyWithoutMembersInput
    administeredGroups?: ChatGroupUncheckedCreateNestedManyWithoutAdminInput
    userPostViews?: UserPostUncheckedCreateNestedManyWithoutViewsInput
    userPostLikes?: UserPostUncheckedCreateNestedManyWithoutLikesInput
    avatar?: AvatarUncheckedCreateNestedOneWithoutProfileInput
    friendshipFrom?: FriendshipUncheckedCreateNestedManyWithoutProfile1Input
    friendshipTo?: FriendshipUncheckedCreateNestedManyWithoutProfile2Input
  }

  export type ProfileCreateOrConnectWithoutChatMessagesInput = {
    where: ProfileWhereUniqueInput
    create: XOR<ProfileCreateWithoutChatMessagesInput, ProfileUncheckedCreateWithoutChatMessagesInput>
  }

  export type ChatGroupCreateWithoutChatMessagesInput = {
    name: string
    isPersonalChat?: boolean
    avatar: string
    members?: ProfileCreateNestedManyWithoutChatsInput
    admin: ProfileCreateNestedOneWithoutAdministeredGroupsInput
  }

  export type ChatGroupUncheckedCreateWithoutChatMessagesInput = {
    id?: number
    name: string
    isPersonalChat?: boolean
    adminId: number
    avatar: string
    members?: ProfileUncheckedCreateNestedManyWithoutChatsInput
  }

  export type ChatGroupCreateOrConnectWithoutChatMessagesInput = {
    where: ChatGroupWhereUniqueInput
    create: XOR<ChatGroupCreateWithoutChatMessagesInput, ChatGroupUncheckedCreateWithoutChatMessagesInput>
  }

  export type ProfileUpsertWithoutChatMessagesInput = {
    update: XOR<ProfileUpdateWithoutChatMessagesInput, ProfileUncheckedUpdateWithoutChatMessagesInput>
    create: XOR<ProfileCreateWithoutChatMessagesInput, ProfileUncheckedCreateWithoutChatMessagesInput>
    where?: ProfileWhereInput
  }

  export type ProfileUpdateToOneWithWhereWithoutChatMessagesInput = {
    where?: ProfileWhereInput
    data: XOR<ProfileUpdateWithoutChatMessagesInput, ProfileUncheckedUpdateWithoutChatMessagesInput>
  }

  export type ProfileUpdateWithoutChatMessagesInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    signature?: NullableStringFieldUpdateOperationsInput | string | null
    post?: UserPostUpdateManyWithoutAuthorNestedInput
    album?: AlbumUpdateManyWithoutAuthorNestedInput
    chats?: ChatGroupUpdateManyWithoutMembersNestedInput
    administeredGroups?: ChatGroupUpdateManyWithoutAdminNestedInput
    userPostViews?: UserPostUpdateManyWithoutViewsNestedInput
    userPostLikes?: UserPostUpdateManyWithoutLikesNestedInput
    avatar?: AvatarUpdateOneWithoutProfileNestedInput
    friendshipFrom?: FriendshipUpdateManyWithoutProfile1NestedInput
    friendshipTo?: FriendshipUpdateManyWithoutProfile2NestedInput
  }

  export type ProfileUncheckedUpdateWithoutChatMessagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    signature?: NullableStringFieldUpdateOperationsInput | string | null
    post?: UserPostUncheckedUpdateManyWithoutAuthorNestedInput
    album?: AlbumUncheckedUpdateManyWithoutAuthorNestedInput
    chats?: ChatGroupUncheckedUpdateManyWithoutMembersNestedInput
    administeredGroups?: ChatGroupUncheckedUpdateManyWithoutAdminNestedInput
    userPostViews?: UserPostUncheckedUpdateManyWithoutViewsNestedInput
    userPostLikes?: UserPostUncheckedUpdateManyWithoutLikesNestedInput
    avatar?: AvatarUncheckedUpdateOneWithoutProfileNestedInput
    friendshipFrom?: FriendshipUncheckedUpdateManyWithoutProfile1NestedInput
    friendshipTo?: FriendshipUncheckedUpdateManyWithoutProfile2NestedInput
  }

  export type ChatGroupUpsertWithoutChatMessagesInput = {
    update: XOR<ChatGroupUpdateWithoutChatMessagesInput, ChatGroupUncheckedUpdateWithoutChatMessagesInput>
    create: XOR<ChatGroupCreateWithoutChatMessagesInput, ChatGroupUncheckedCreateWithoutChatMessagesInput>
    where?: ChatGroupWhereInput
  }

  export type ChatGroupUpdateToOneWithWhereWithoutChatMessagesInput = {
    where?: ChatGroupWhereInput
    data: XOR<ChatGroupUpdateWithoutChatMessagesInput, ChatGroupUncheckedUpdateWithoutChatMessagesInput>
  }

  export type ChatGroupUpdateWithoutChatMessagesInput = {
    name?: StringFieldUpdateOperationsInput | string
    isPersonalChat?: BoolFieldUpdateOperationsInput | boolean
    avatar?: StringFieldUpdateOperationsInput | string
    members?: ProfileUpdateManyWithoutChatsNestedInput
    admin?: ProfileUpdateOneRequiredWithoutAdministeredGroupsNestedInput
  }

  export type ChatGroupUncheckedUpdateWithoutChatMessagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    isPersonalChat?: BoolFieldUpdateOperationsInput | boolean
    adminId?: IntFieldUpdateOperationsInput | number
    avatar?: StringFieldUpdateOperationsInput | string
    members?: ProfileUncheckedUpdateManyWithoutChatsNestedInput
  }

  export type ProfileCreateWithoutFriendshipFromInput = {
    name?: string | null
    username?: string | null
    surname?: string | null
    dateOfBirth?: Date | string | null
    email: string
    password: string
    image?: string | null
    about?: string | null
    signature?: string | null
    post?: UserPostCreateNestedManyWithoutAuthorInput
    album?: AlbumCreateNestedManyWithoutAuthorInput
    chats?: ChatGroupCreateNestedManyWithoutMembersInput
    administeredGroups?: ChatGroupCreateNestedManyWithoutAdminInput
    chatMessages?: ChatMessageCreateNestedManyWithoutAuthorInput
    userPostViews?: UserPostCreateNestedManyWithoutViewsInput
    userPostLikes?: UserPostCreateNestedManyWithoutLikesInput
    avatar?: AvatarCreateNestedOneWithoutProfileInput
    friendshipTo?: FriendshipCreateNestedManyWithoutProfile2Input
  }

  export type ProfileUncheckedCreateWithoutFriendshipFromInput = {
    id?: number
    name?: string | null
    username?: string | null
    surname?: string | null
    dateOfBirth?: Date | string | null
    email: string
    password: string
    image?: string | null
    about?: string | null
    signature?: string | null
    post?: UserPostUncheckedCreateNestedManyWithoutAuthorInput
    album?: AlbumUncheckedCreateNestedManyWithoutAuthorInput
    chats?: ChatGroupUncheckedCreateNestedManyWithoutMembersInput
    administeredGroups?: ChatGroupUncheckedCreateNestedManyWithoutAdminInput
    chatMessages?: ChatMessageUncheckedCreateNestedManyWithoutAuthorInput
    userPostViews?: UserPostUncheckedCreateNestedManyWithoutViewsInput
    userPostLikes?: UserPostUncheckedCreateNestedManyWithoutLikesInput
    avatar?: AvatarUncheckedCreateNestedOneWithoutProfileInput
    friendshipTo?: FriendshipUncheckedCreateNestedManyWithoutProfile2Input
  }

  export type ProfileCreateOrConnectWithoutFriendshipFromInput = {
    where: ProfileWhereUniqueInput
    create: XOR<ProfileCreateWithoutFriendshipFromInput, ProfileUncheckedCreateWithoutFriendshipFromInput>
  }

  export type ProfileCreateWithoutFriendshipToInput = {
    name?: string | null
    username?: string | null
    surname?: string | null
    dateOfBirth?: Date | string | null
    email: string
    password: string
    image?: string | null
    about?: string | null
    signature?: string | null
    post?: UserPostCreateNestedManyWithoutAuthorInput
    album?: AlbumCreateNestedManyWithoutAuthorInput
    chats?: ChatGroupCreateNestedManyWithoutMembersInput
    administeredGroups?: ChatGroupCreateNestedManyWithoutAdminInput
    chatMessages?: ChatMessageCreateNestedManyWithoutAuthorInput
    userPostViews?: UserPostCreateNestedManyWithoutViewsInput
    userPostLikes?: UserPostCreateNestedManyWithoutLikesInput
    avatar?: AvatarCreateNestedOneWithoutProfileInput
    friendshipFrom?: FriendshipCreateNestedManyWithoutProfile1Input
  }

  export type ProfileUncheckedCreateWithoutFriendshipToInput = {
    id?: number
    name?: string | null
    username?: string | null
    surname?: string | null
    dateOfBirth?: Date | string | null
    email: string
    password: string
    image?: string | null
    about?: string | null
    signature?: string | null
    post?: UserPostUncheckedCreateNestedManyWithoutAuthorInput
    album?: AlbumUncheckedCreateNestedManyWithoutAuthorInput
    chats?: ChatGroupUncheckedCreateNestedManyWithoutMembersInput
    administeredGroups?: ChatGroupUncheckedCreateNestedManyWithoutAdminInput
    chatMessages?: ChatMessageUncheckedCreateNestedManyWithoutAuthorInput
    userPostViews?: UserPostUncheckedCreateNestedManyWithoutViewsInput
    userPostLikes?: UserPostUncheckedCreateNestedManyWithoutLikesInput
    avatar?: AvatarUncheckedCreateNestedOneWithoutProfileInput
    friendshipFrom?: FriendshipUncheckedCreateNestedManyWithoutProfile1Input
  }

  export type ProfileCreateOrConnectWithoutFriendshipToInput = {
    where: ProfileWhereUniqueInput
    create: XOR<ProfileCreateWithoutFriendshipToInput, ProfileUncheckedCreateWithoutFriendshipToInput>
  }

  export type ProfileUpsertWithoutFriendshipFromInput = {
    update: XOR<ProfileUpdateWithoutFriendshipFromInput, ProfileUncheckedUpdateWithoutFriendshipFromInput>
    create: XOR<ProfileCreateWithoutFriendshipFromInput, ProfileUncheckedCreateWithoutFriendshipFromInput>
    where?: ProfileWhereInput
  }

  export type ProfileUpdateToOneWithWhereWithoutFriendshipFromInput = {
    where?: ProfileWhereInput
    data: XOR<ProfileUpdateWithoutFriendshipFromInput, ProfileUncheckedUpdateWithoutFriendshipFromInput>
  }

  export type ProfileUpdateWithoutFriendshipFromInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    signature?: NullableStringFieldUpdateOperationsInput | string | null
    post?: UserPostUpdateManyWithoutAuthorNestedInput
    album?: AlbumUpdateManyWithoutAuthorNestedInput
    chats?: ChatGroupUpdateManyWithoutMembersNestedInput
    administeredGroups?: ChatGroupUpdateManyWithoutAdminNestedInput
    chatMessages?: ChatMessageUpdateManyWithoutAuthorNestedInput
    userPostViews?: UserPostUpdateManyWithoutViewsNestedInput
    userPostLikes?: UserPostUpdateManyWithoutLikesNestedInput
    avatar?: AvatarUpdateOneWithoutProfileNestedInput
    friendshipTo?: FriendshipUpdateManyWithoutProfile2NestedInput
  }

  export type ProfileUncheckedUpdateWithoutFriendshipFromInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    signature?: NullableStringFieldUpdateOperationsInput | string | null
    post?: UserPostUncheckedUpdateManyWithoutAuthorNestedInput
    album?: AlbumUncheckedUpdateManyWithoutAuthorNestedInput
    chats?: ChatGroupUncheckedUpdateManyWithoutMembersNestedInput
    administeredGroups?: ChatGroupUncheckedUpdateManyWithoutAdminNestedInput
    chatMessages?: ChatMessageUncheckedUpdateManyWithoutAuthorNestedInput
    userPostViews?: UserPostUncheckedUpdateManyWithoutViewsNestedInput
    userPostLikes?: UserPostUncheckedUpdateManyWithoutLikesNestedInput
    avatar?: AvatarUncheckedUpdateOneWithoutProfileNestedInput
    friendshipTo?: FriendshipUncheckedUpdateManyWithoutProfile2NestedInput
  }

  export type ProfileUpsertWithoutFriendshipToInput = {
    update: XOR<ProfileUpdateWithoutFriendshipToInput, ProfileUncheckedUpdateWithoutFriendshipToInput>
    create: XOR<ProfileCreateWithoutFriendshipToInput, ProfileUncheckedCreateWithoutFriendshipToInput>
    where?: ProfileWhereInput
  }

  export type ProfileUpdateToOneWithWhereWithoutFriendshipToInput = {
    where?: ProfileWhereInput
    data: XOR<ProfileUpdateWithoutFriendshipToInput, ProfileUncheckedUpdateWithoutFriendshipToInput>
  }

  export type ProfileUpdateWithoutFriendshipToInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    signature?: NullableStringFieldUpdateOperationsInput | string | null
    post?: UserPostUpdateManyWithoutAuthorNestedInput
    album?: AlbumUpdateManyWithoutAuthorNestedInput
    chats?: ChatGroupUpdateManyWithoutMembersNestedInput
    administeredGroups?: ChatGroupUpdateManyWithoutAdminNestedInput
    chatMessages?: ChatMessageUpdateManyWithoutAuthorNestedInput
    userPostViews?: UserPostUpdateManyWithoutViewsNestedInput
    userPostLikes?: UserPostUpdateManyWithoutLikesNestedInput
    avatar?: AvatarUpdateOneWithoutProfileNestedInput
    friendshipFrom?: FriendshipUpdateManyWithoutProfile1NestedInput
  }

  export type ProfileUncheckedUpdateWithoutFriendshipToInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    signature?: NullableStringFieldUpdateOperationsInput | string | null
    post?: UserPostUncheckedUpdateManyWithoutAuthorNestedInput
    album?: AlbumUncheckedUpdateManyWithoutAuthorNestedInput
    chats?: ChatGroupUncheckedUpdateManyWithoutMembersNestedInput
    administeredGroups?: ChatGroupUncheckedUpdateManyWithoutAdminNestedInput
    chatMessages?: ChatMessageUncheckedUpdateManyWithoutAuthorNestedInput
    userPostViews?: UserPostUncheckedUpdateManyWithoutViewsNestedInput
    userPostLikes?: UserPostUncheckedUpdateManyWithoutLikesNestedInput
    avatar?: AvatarUncheckedUpdateOneWithoutProfileNestedInput
    friendshipFrom?: FriendshipUncheckedUpdateManyWithoutProfile1NestedInput
  }

  export type UserPostCreateWithoutImagesInput = {
    title: string
    content: string
    tags?: TagsCreateNestedManyWithoutUserPostInput
    views?: ProfileCreateNestedManyWithoutUserPostViewsInput
    likes?: ProfileCreateNestedManyWithoutUserPostLikesInput
    author: ProfileCreateNestedOneWithoutPostInput
    link?: LinkCreateNestedOneWithoutUserPostInput
  }

  export type UserPostUncheckedCreateWithoutImagesInput = {
    id?: number
    title: string
    content: string
    authorId: number
    linkId?: number | null
    tags?: TagsUncheckedCreateNestedManyWithoutUserPostInput
    views?: ProfileUncheckedCreateNestedManyWithoutUserPostViewsInput
    likes?: ProfileUncheckedCreateNestedManyWithoutUserPostLikesInput
  }

  export type UserPostCreateOrConnectWithoutImagesInput = {
    where: UserPostWhereUniqueInput
    create: XOR<UserPostCreateWithoutImagesInput, UserPostUncheckedCreateWithoutImagesInput>
  }

  export type AlbumCreateWithoutImagesInput = {
    name: string
    created_at?: Date | string
    shown?: boolean
    topic?: string | null
    author: ProfileCreateNestedOneWithoutAlbumInput
  }

  export type AlbumUncheckedCreateWithoutImagesInput = {
    id?: number
    name: string
    created_at?: Date | string
    shown?: boolean
    topic?: string | null
    authorId: number
  }

  export type AlbumCreateOrConnectWithoutImagesInput = {
    where: AlbumWhereUniqueInput
    create: XOR<AlbumCreateWithoutImagesInput, AlbumUncheckedCreateWithoutImagesInput>
  }

  export type UserPostUpsertWithWhereUniqueWithoutImagesInput = {
    where: UserPostWhereUniqueInput
    update: XOR<UserPostUpdateWithoutImagesInput, UserPostUncheckedUpdateWithoutImagesInput>
    create: XOR<UserPostCreateWithoutImagesInput, UserPostUncheckedCreateWithoutImagesInput>
  }

  export type UserPostUpdateWithWhereUniqueWithoutImagesInput = {
    where: UserPostWhereUniqueInput
    data: XOR<UserPostUpdateWithoutImagesInput, UserPostUncheckedUpdateWithoutImagesInput>
  }

  export type UserPostUpdateManyWithWhereWithoutImagesInput = {
    where: UserPostScalarWhereInput
    data: XOR<UserPostUpdateManyMutationInput, UserPostUncheckedUpdateManyWithoutImagesInput>
  }

  export type UserPostScalarWhereInput = {
    AND?: UserPostScalarWhereInput | UserPostScalarWhereInput[]
    OR?: UserPostScalarWhereInput[]
    NOT?: UserPostScalarWhereInput | UserPostScalarWhereInput[]
    id?: IntFilter<"UserPost"> | number
    title?: StringFilter<"UserPost"> | string
    content?: StringFilter<"UserPost"> | string
    authorId?: IntFilter<"UserPost"> | number
    linkId?: IntNullableFilter<"UserPost"> | number | null
  }

  export type AlbumUpsertWithWhereUniqueWithoutImagesInput = {
    where: AlbumWhereUniqueInput
    update: XOR<AlbumUpdateWithoutImagesInput, AlbumUncheckedUpdateWithoutImagesInput>
    create: XOR<AlbumCreateWithoutImagesInput, AlbumUncheckedCreateWithoutImagesInput>
  }

  export type AlbumUpdateWithWhereUniqueWithoutImagesInput = {
    where: AlbumWhereUniqueInput
    data: XOR<AlbumUpdateWithoutImagesInput, AlbumUncheckedUpdateWithoutImagesInput>
  }

  export type AlbumUpdateManyWithWhereWithoutImagesInput = {
    where: AlbumScalarWhereInput
    data: XOR<AlbumUpdateManyMutationInput, AlbumUncheckedUpdateManyWithoutImagesInput>
  }

  export type AlbumScalarWhereInput = {
    AND?: AlbumScalarWhereInput | AlbumScalarWhereInput[]
    OR?: AlbumScalarWhereInput[]
    NOT?: AlbumScalarWhereInput | AlbumScalarWhereInput[]
    id?: IntFilter<"Album"> | number
    name?: StringFilter<"Album"> | string
    created_at?: DateTimeFilter<"Album"> | Date | string
    shown?: BoolFilter<"Album"> | boolean
    topic?: StringNullableFilter<"Album"> | string | null
    authorId?: IntFilter<"Album"> | number
  }

  export type TagsCreateWithoutUserPostInput = {
    name: string
  }

  export type TagsUncheckedCreateWithoutUserPostInput = {
    id?: number
    name: string
  }

  export type TagsCreateOrConnectWithoutUserPostInput = {
    where: TagsWhereUniqueInput
    create: XOR<TagsCreateWithoutUserPostInput, TagsUncheckedCreateWithoutUserPostInput>
  }

  export type ImageCreateWithoutUserPostInput = {
    url: string
    uploadedAt?: Date | string
    Album?: AlbumCreateNestedManyWithoutImagesInput
  }

  export type ImageUncheckedCreateWithoutUserPostInput = {
    id?: number
    url: string
    uploadedAt?: Date | string
    Album?: AlbumUncheckedCreateNestedManyWithoutImagesInput
  }

  export type ImageCreateOrConnectWithoutUserPostInput = {
    where: ImageWhereUniqueInput
    create: XOR<ImageCreateWithoutUserPostInput, ImageUncheckedCreateWithoutUserPostInput>
  }

  export type ProfileCreateWithoutUserPostViewsInput = {
    name?: string | null
    username?: string | null
    surname?: string | null
    dateOfBirth?: Date | string | null
    email: string
    password: string
    image?: string | null
    about?: string | null
    signature?: string | null
    post?: UserPostCreateNestedManyWithoutAuthorInput
    album?: AlbumCreateNestedManyWithoutAuthorInput
    chats?: ChatGroupCreateNestedManyWithoutMembersInput
    administeredGroups?: ChatGroupCreateNestedManyWithoutAdminInput
    chatMessages?: ChatMessageCreateNestedManyWithoutAuthorInput
    userPostLikes?: UserPostCreateNestedManyWithoutLikesInput
    avatar?: AvatarCreateNestedOneWithoutProfileInput
    friendshipFrom?: FriendshipCreateNestedManyWithoutProfile1Input
    friendshipTo?: FriendshipCreateNestedManyWithoutProfile2Input
  }

  export type ProfileUncheckedCreateWithoutUserPostViewsInput = {
    id?: number
    name?: string | null
    username?: string | null
    surname?: string | null
    dateOfBirth?: Date | string | null
    email: string
    password: string
    image?: string | null
    about?: string | null
    signature?: string | null
    post?: UserPostUncheckedCreateNestedManyWithoutAuthorInput
    album?: AlbumUncheckedCreateNestedManyWithoutAuthorInput
    chats?: ChatGroupUncheckedCreateNestedManyWithoutMembersInput
    administeredGroups?: ChatGroupUncheckedCreateNestedManyWithoutAdminInput
    chatMessages?: ChatMessageUncheckedCreateNestedManyWithoutAuthorInput
    userPostLikes?: UserPostUncheckedCreateNestedManyWithoutLikesInput
    avatar?: AvatarUncheckedCreateNestedOneWithoutProfileInput
    friendshipFrom?: FriendshipUncheckedCreateNestedManyWithoutProfile1Input
    friendshipTo?: FriendshipUncheckedCreateNestedManyWithoutProfile2Input
  }

  export type ProfileCreateOrConnectWithoutUserPostViewsInput = {
    where: ProfileWhereUniqueInput
    create: XOR<ProfileCreateWithoutUserPostViewsInput, ProfileUncheckedCreateWithoutUserPostViewsInput>
  }

  export type ProfileCreateWithoutUserPostLikesInput = {
    name?: string | null
    username?: string | null
    surname?: string | null
    dateOfBirth?: Date | string | null
    email: string
    password: string
    image?: string | null
    about?: string | null
    signature?: string | null
    post?: UserPostCreateNestedManyWithoutAuthorInput
    album?: AlbumCreateNestedManyWithoutAuthorInput
    chats?: ChatGroupCreateNestedManyWithoutMembersInput
    administeredGroups?: ChatGroupCreateNestedManyWithoutAdminInput
    chatMessages?: ChatMessageCreateNestedManyWithoutAuthorInput
    userPostViews?: UserPostCreateNestedManyWithoutViewsInput
    avatar?: AvatarCreateNestedOneWithoutProfileInput
    friendshipFrom?: FriendshipCreateNestedManyWithoutProfile1Input
    friendshipTo?: FriendshipCreateNestedManyWithoutProfile2Input
  }

  export type ProfileUncheckedCreateWithoutUserPostLikesInput = {
    id?: number
    name?: string | null
    username?: string | null
    surname?: string | null
    dateOfBirth?: Date | string | null
    email: string
    password: string
    image?: string | null
    about?: string | null
    signature?: string | null
    post?: UserPostUncheckedCreateNestedManyWithoutAuthorInput
    album?: AlbumUncheckedCreateNestedManyWithoutAuthorInput
    chats?: ChatGroupUncheckedCreateNestedManyWithoutMembersInput
    administeredGroups?: ChatGroupUncheckedCreateNestedManyWithoutAdminInput
    chatMessages?: ChatMessageUncheckedCreateNestedManyWithoutAuthorInput
    userPostViews?: UserPostUncheckedCreateNestedManyWithoutViewsInput
    avatar?: AvatarUncheckedCreateNestedOneWithoutProfileInput
    friendshipFrom?: FriendshipUncheckedCreateNestedManyWithoutProfile1Input
    friendshipTo?: FriendshipUncheckedCreateNestedManyWithoutProfile2Input
  }

  export type ProfileCreateOrConnectWithoutUserPostLikesInput = {
    where: ProfileWhereUniqueInput
    create: XOR<ProfileCreateWithoutUserPostLikesInput, ProfileUncheckedCreateWithoutUserPostLikesInput>
  }

  export type ProfileCreateWithoutPostInput = {
    name?: string | null
    username?: string | null
    surname?: string | null
    dateOfBirth?: Date | string | null
    email: string
    password: string
    image?: string | null
    about?: string | null
    signature?: string | null
    album?: AlbumCreateNestedManyWithoutAuthorInput
    chats?: ChatGroupCreateNestedManyWithoutMembersInput
    administeredGroups?: ChatGroupCreateNestedManyWithoutAdminInput
    chatMessages?: ChatMessageCreateNestedManyWithoutAuthorInput
    userPostViews?: UserPostCreateNestedManyWithoutViewsInput
    userPostLikes?: UserPostCreateNestedManyWithoutLikesInput
    avatar?: AvatarCreateNestedOneWithoutProfileInput
    friendshipFrom?: FriendshipCreateNestedManyWithoutProfile1Input
    friendshipTo?: FriendshipCreateNestedManyWithoutProfile2Input
  }

  export type ProfileUncheckedCreateWithoutPostInput = {
    id?: number
    name?: string | null
    username?: string | null
    surname?: string | null
    dateOfBirth?: Date | string | null
    email: string
    password: string
    image?: string | null
    about?: string | null
    signature?: string | null
    album?: AlbumUncheckedCreateNestedManyWithoutAuthorInput
    chats?: ChatGroupUncheckedCreateNestedManyWithoutMembersInput
    administeredGroups?: ChatGroupUncheckedCreateNestedManyWithoutAdminInput
    chatMessages?: ChatMessageUncheckedCreateNestedManyWithoutAuthorInput
    userPostViews?: UserPostUncheckedCreateNestedManyWithoutViewsInput
    userPostLikes?: UserPostUncheckedCreateNestedManyWithoutLikesInput
    avatar?: AvatarUncheckedCreateNestedOneWithoutProfileInput
    friendshipFrom?: FriendshipUncheckedCreateNestedManyWithoutProfile1Input
    friendshipTo?: FriendshipUncheckedCreateNestedManyWithoutProfile2Input
  }

  export type ProfileCreateOrConnectWithoutPostInput = {
    where: ProfileWhereUniqueInput
    create: XOR<ProfileCreateWithoutPostInput, ProfileUncheckedCreateWithoutPostInput>
  }

  export type LinkCreateWithoutUserPostInput = {
    url: string
  }

  export type LinkUncheckedCreateWithoutUserPostInput = {
    id?: number
    url: string
  }

  export type LinkCreateOrConnectWithoutUserPostInput = {
    where: LinkWhereUniqueInput
    create: XOR<LinkCreateWithoutUserPostInput, LinkUncheckedCreateWithoutUserPostInput>
  }

  export type TagsUpsertWithWhereUniqueWithoutUserPostInput = {
    where: TagsWhereUniqueInput
    update: XOR<TagsUpdateWithoutUserPostInput, TagsUncheckedUpdateWithoutUserPostInput>
    create: XOR<TagsCreateWithoutUserPostInput, TagsUncheckedCreateWithoutUserPostInput>
  }

  export type TagsUpdateWithWhereUniqueWithoutUserPostInput = {
    where: TagsWhereUniqueInput
    data: XOR<TagsUpdateWithoutUserPostInput, TagsUncheckedUpdateWithoutUserPostInput>
  }

  export type TagsUpdateManyWithWhereWithoutUserPostInput = {
    where: TagsScalarWhereInput
    data: XOR<TagsUpdateManyMutationInput, TagsUncheckedUpdateManyWithoutUserPostInput>
  }

  export type TagsScalarWhereInput = {
    AND?: TagsScalarWhereInput | TagsScalarWhereInput[]
    OR?: TagsScalarWhereInput[]
    NOT?: TagsScalarWhereInput | TagsScalarWhereInput[]
    id?: IntFilter<"Tags"> | number
    name?: StringFilter<"Tags"> | string
  }

  export type ImageUpsertWithWhereUniqueWithoutUserPostInput = {
    where: ImageWhereUniqueInput
    update: XOR<ImageUpdateWithoutUserPostInput, ImageUncheckedUpdateWithoutUserPostInput>
    create: XOR<ImageCreateWithoutUserPostInput, ImageUncheckedCreateWithoutUserPostInput>
  }

  export type ImageUpdateWithWhereUniqueWithoutUserPostInput = {
    where: ImageWhereUniqueInput
    data: XOR<ImageUpdateWithoutUserPostInput, ImageUncheckedUpdateWithoutUserPostInput>
  }

  export type ImageUpdateManyWithWhereWithoutUserPostInput = {
    where: ImageScalarWhereInput
    data: XOR<ImageUpdateManyMutationInput, ImageUncheckedUpdateManyWithoutUserPostInput>
  }

  export type ProfileUpsertWithWhereUniqueWithoutUserPostViewsInput = {
    where: ProfileWhereUniqueInput
    update: XOR<ProfileUpdateWithoutUserPostViewsInput, ProfileUncheckedUpdateWithoutUserPostViewsInput>
    create: XOR<ProfileCreateWithoutUserPostViewsInput, ProfileUncheckedCreateWithoutUserPostViewsInput>
  }

  export type ProfileUpdateWithWhereUniqueWithoutUserPostViewsInput = {
    where: ProfileWhereUniqueInput
    data: XOR<ProfileUpdateWithoutUserPostViewsInput, ProfileUncheckedUpdateWithoutUserPostViewsInput>
  }

  export type ProfileUpdateManyWithWhereWithoutUserPostViewsInput = {
    where: ProfileScalarWhereInput
    data: XOR<ProfileUpdateManyMutationInput, ProfileUncheckedUpdateManyWithoutUserPostViewsInput>
  }

  export type ProfileUpsertWithWhereUniqueWithoutUserPostLikesInput = {
    where: ProfileWhereUniqueInput
    update: XOR<ProfileUpdateWithoutUserPostLikesInput, ProfileUncheckedUpdateWithoutUserPostLikesInput>
    create: XOR<ProfileCreateWithoutUserPostLikesInput, ProfileUncheckedCreateWithoutUserPostLikesInput>
  }

  export type ProfileUpdateWithWhereUniqueWithoutUserPostLikesInput = {
    where: ProfileWhereUniqueInput
    data: XOR<ProfileUpdateWithoutUserPostLikesInput, ProfileUncheckedUpdateWithoutUserPostLikesInput>
  }

  export type ProfileUpdateManyWithWhereWithoutUserPostLikesInput = {
    where: ProfileScalarWhereInput
    data: XOR<ProfileUpdateManyMutationInput, ProfileUncheckedUpdateManyWithoutUserPostLikesInput>
  }

  export type ProfileUpsertWithoutPostInput = {
    update: XOR<ProfileUpdateWithoutPostInput, ProfileUncheckedUpdateWithoutPostInput>
    create: XOR<ProfileCreateWithoutPostInput, ProfileUncheckedCreateWithoutPostInput>
    where?: ProfileWhereInput
  }

  export type ProfileUpdateToOneWithWhereWithoutPostInput = {
    where?: ProfileWhereInput
    data: XOR<ProfileUpdateWithoutPostInput, ProfileUncheckedUpdateWithoutPostInput>
  }

  export type ProfileUpdateWithoutPostInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    signature?: NullableStringFieldUpdateOperationsInput | string | null
    album?: AlbumUpdateManyWithoutAuthorNestedInput
    chats?: ChatGroupUpdateManyWithoutMembersNestedInput
    administeredGroups?: ChatGroupUpdateManyWithoutAdminNestedInput
    chatMessages?: ChatMessageUpdateManyWithoutAuthorNestedInput
    userPostViews?: UserPostUpdateManyWithoutViewsNestedInput
    userPostLikes?: UserPostUpdateManyWithoutLikesNestedInput
    avatar?: AvatarUpdateOneWithoutProfileNestedInput
    friendshipFrom?: FriendshipUpdateManyWithoutProfile1NestedInput
    friendshipTo?: FriendshipUpdateManyWithoutProfile2NestedInput
  }

  export type ProfileUncheckedUpdateWithoutPostInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    signature?: NullableStringFieldUpdateOperationsInput | string | null
    album?: AlbumUncheckedUpdateManyWithoutAuthorNestedInput
    chats?: ChatGroupUncheckedUpdateManyWithoutMembersNestedInput
    administeredGroups?: ChatGroupUncheckedUpdateManyWithoutAdminNestedInput
    chatMessages?: ChatMessageUncheckedUpdateManyWithoutAuthorNestedInput
    userPostViews?: UserPostUncheckedUpdateManyWithoutViewsNestedInput
    userPostLikes?: UserPostUncheckedUpdateManyWithoutLikesNestedInput
    avatar?: AvatarUncheckedUpdateOneWithoutProfileNestedInput
    friendshipFrom?: FriendshipUncheckedUpdateManyWithoutProfile1NestedInput
    friendshipTo?: FriendshipUncheckedUpdateManyWithoutProfile2NestedInput
  }

  export type LinkUpsertWithoutUserPostInput = {
    update: XOR<LinkUpdateWithoutUserPostInput, LinkUncheckedUpdateWithoutUserPostInput>
    create: XOR<LinkCreateWithoutUserPostInput, LinkUncheckedCreateWithoutUserPostInput>
    where?: LinkWhereInput
  }

  export type LinkUpdateToOneWithWhereWithoutUserPostInput = {
    where?: LinkWhereInput
    data: XOR<LinkUpdateWithoutUserPostInput, LinkUncheckedUpdateWithoutUserPostInput>
  }

  export type LinkUpdateWithoutUserPostInput = {
    url?: StringFieldUpdateOperationsInput | string
  }

  export type LinkUncheckedUpdateWithoutUserPostInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
  }

  export type UserPostCreateWithoutTagsInput = {
    title: string
    content: string
    images?: ImageCreateNestedManyWithoutUserPostInput
    views?: ProfileCreateNestedManyWithoutUserPostViewsInput
    likes?: ProfileCreateNestedManyWithoutUserPostLikesInput
    author: ProfileCreateNestedOneWithoutPostInput
    link?: LinkCreateNestedOneWithoutUserPostInput
  }

  export type UserPostUncheckedCreateWithoutTagsInput = {
    id?: number
    title: string
    content: string
    authorId: number
    linkId?: number | null
    images?: ImageUncheckedCreateNestedManyWithoutUserPostInput
    views?: ProfileUncheckedCreateNestedManyWithoutUserPostViewsInput
    likes?: ProfileUncheckedCreateNestedManyWithoutUserPostLikesInput
  }

  export type UserPostCreateOrConnectWithoutTagsInput = {
    where: UserPostWhereUniqueInput
    create: XOR<UserPostCreateWithoutTagsInput, UserPostUncheckedCreateWithoutTagsInput>
  }

  export type UserPostUpsertWithWhereUniqueWithoutTagsInput = {
    where: UserPostWhereUniqueInput
    update: XOR<UserPostUpdateWithoutTagsInput, UserPostUncheckedUpdateWithoutTagsInput>
    create: XOR<UserPostCreateWithoutTagsInput, UserPostUncheckedCreateWithoutTagsInput>
  }

  export type UserPostUpdateWithWhereUniqueWithoutTagsInput = {
    where: UserPostWhereUniqueInput
    data: XOR<UserPostUpdateWithoutTagsInput, UserPostUncheckedUpdateWithoutTagsInput>
  }

  export type UserPostUpdateManyWithWhereWithoutTagsInput = {
    where: UserPostScalarWhereInput
    data: XOR<UserPostUpdateManyMutationInput, UserPostUncheckedUpdateManyWithoutTagsInput>
  }

  export type UserPostCreateWithoutLinkInput = {
    title: string
    content: string
    tags?: TagsCreateNestedManyWithoutUserPostInput
    images?: ImageCreateNestedManyWithoutUserPostInput
    views?: ProfileCreateNestedManyWithoutUserPostViewsInput
    likes?: ProfileCreateNestedManyWithoutUserPostLikesInput
    author: ProfileCreateNestedOneWithoutPostInput
  }

  export type UserPostUncheckedCreateWithoutLinkInput = {
    id?: number
    title: string
    content: string
    authorId: number
    tags?: TagsUncheckedCreateNestedManyWithoutUserPostInput
    images?: ImageUncheckedCreateNestedManyWithoutUserPostInput
    views?: ProfileUncheckedCreateNestedManyWithoutUserPostViewsInput
    likes?: ProfileUncheckedCreateNestedManyWithoutUserPostLikesInput
  }

  export type UserPostCreateOrConnectWithoutLinkInput = {
    where: UserPostWhereUniqueInput
    create: XOR<UserPostCreateWithoutLinkInput, UserPostUncheckedCreateWithoutLinkInput>
  }

  export type UserPostCreateManyLinkInputEnvelope = {
    data: UserPostCreateManyLinkInput | UserPostCreateManyLinkInput[]
  }

  export type UserPostUpsertWithWhereUniqueWithoutLinkInput = {
    where: UserPostWhereUniqueInput
    update: XOR<UserPostUpdateWithoutLinkInput, UserPostUncheckedUpdateWithoutLinkInput>
    create: XOR<UserPostCreateWithoutLinkInput, UserPostUncheckedCreateWithoutLinkInput>
  }

  export type UserPostUpdateWithWhereUniqueWithoutLinkInput = {
    where: UserPostWhereUniqueInput
    data: XOR<UserPostUpdateWithoutLinkInput, UserPostUncheckedUpdateWithoutLinkInput>
  }

  export type UserPostUpdateManyWithWhereWithoutLinkInput = {
    where: UserPostScalarWhereInput
    data: XOR<UserPostUpdateManyMutationInput, UserPostUncheckedUpdateManyWithoutLinkInput>
  }

  export type UserPostCreateWithoutAuthorInput = {
    title: string
    content: string
    tags?: TagsCreateNestedManyWithoutUserPostInput
    images?: ImageCreateNestedManyWithoutUserPostInput
    views?: ProfileCreateNestedManyWithoutUserPostViewsInput
    likes?: ProfileCreateNestedManyWithoutUserPostLikesInput
    link?: LinkCreateNestedOneWithoutUserPostInput
  }

  export type UserPostUncheckedCreateWithoutAuthorInput = {
    id?: number
    title: string
    content: string
    linkId?: number | null
    tags?: TagsUncheckedCreateNestedManyWithoutUserPostInput
    images?: ImageUncheckedCreateNestedManyWithoutUserPostInput
    views?: ProfileUncheckedCreateNestedManyWithoutUserPostViewsInput
    likes?: ProfileUncheckedCreateNestedManyWithoutUserPostLikesInput
  }

  export type UserPostCreateOrConnectWithoutAuthorInput = {
    where: UserPostWhereUniqueInput
    create: XOR<UserPostCreateWithoutAuthorInput, UserPostUncheckedCreateWithoutAuthorInput>
  }

  export type UserPostCreateManyAuthorInputEnvelope = {
    data: UserPostCreateManyAuthorInput | UserPostCreateManyAuthorInput[]
  }

  export type AlbumCreateWithoutAuthorInput = {
    name: string
    created_at?: Date | string
    shown?: boolean
    topic?: string | null
    images?: ImageCreateNestedManyWithoutAlbumInput
  }

  export type AlbumUncheckedCreateWithoutAuthorInput = {
    id?: number
    name: string
    created_at?: Date | string
    shown?: boolean
    topic?: string | null
    images?: ImageUncheckedCreateNestedManyWithoutAlbumInput
  }

  export type AlbumCreateOrConnectWithoutAuthorInput = {
    where: AlbumWhereUniqueInput
    create: XOR<AlbumCreateWithoutAuthorInput, AlbumUncheckedCreateWithoutAuthorInput>
  }

  export type AlbumCreateManyAuthorInputEnvelope = {
    data: AlbumCreateManyAuthorInput | AlbumCreateManyAuthorInput[]
  }

  export type ChatGroupCreateWithoutMembersInput = {
    name: string
    isPersonalChat?: boolean
    avatar: string
    admin: ProfileCreateNestedOneWithoutAdministeredGroupsInput
    chatMessages?: ChatMessageCreateNestedManyWithoutChatGroupInput
  }

  export type ChatGroupUncheckedCreateWithoutMembersInput = {
    id?: number
    name: string
    isPersonalChat?: boolean
    adminId: number
    avatar: string
    chatMessages?: ChatMessageUncheckedCreateNestedManyWithoutChatGroupInput
  }

  export type ChatGroupCreateOrConnectWithoutMembersInput = {
    where: ChatGroupWhereUniqueInput
    create: XOR<ChatGroupCreateWithoutMembersInput, ChatGroupUncheckedCreateWithoutMembersInput>
  }

  export type ChatGroupCreateWithoutAdminInput = {
    name: string
    isPersonalChat?: boolean
    avatar: string
    members?: ProfileCreateNestedManyWithoutChatsInput
    chatMessages?: ChatMessageCreateNestedManyWithoutChatGroupInput
  }

  export type ChatGroupUncheckedCreateWithoutAdminInput = {
    id?: number
    name: string
    isPersonalChat?: boolean
    avatar: string
    members?: ProfileUncheckedCreateNestedManyWithoutChatsInput
    chatMessages?: ChatMessageUncheckedCreateNestedManyWithoutChatGroupInput
  }

  export type ChatGroupCreateOrConnectWithoutAdminInput = {
    where: ChatGroupWhereUniqueInput
    create: XOR<ChatGroupCreateWithoutAdminInput, ChatGroupUncheckedCreateWithoutAdminInput>
  }

  export type ChatGroupCreateManyAdminInputEnvelope = {
    data: ChatGroupCreateManyAdminInput | ChatGroupCreateManyAdminInput[]
  }

  export type ChatMessageCreateWithoutAuthorInput = {
    content: string
    sentAt?: Date | string
    attachedImage: string
    chatGroup: ChatGroupCreateNestedOneWithoutChatMessagesInput
  }

  export type ChatMessageUncheckedCreateWithoutAuthorInput = {
    id?: number
    content: string
    sentAt?: Date | string
    chatGroupId: number
    attachedImage: string
  }

  export type ChatMessageCreateOrConnectWithoutAuthorInput = {
    where: ChatMessageWhereUniqueInput
    create: XOR<ChatMessageCreateWithoutAuthorInput, ChatMessageUncheckedCreateWithoutAuthorInput>
  }

  export type ChatMessageCreateManyAuthorInputEnvelope = {
    data: ChatMessageCreateManyAuthorInput | ChatMessageCreateManyAuthorInput[]
  }

  export type UserPostCreateWithoutViewsInput = {
    title: string
    content: string
    tags?: TagsCreateNestedManyWithoutUserPostInput
    images?: ImageCreateNestedManyWithoutUserPostInput
    likes?: ProfileCreateNestedManyWithoutUserPostLikesInput
    author: ProfileCreateNestedOneWithoutPostInput
    link?: LinkCreateNestedOneWithoutUserPostInput
  }

  export type UserPostUncheckedCreateWithoutViewsInput = {
    id?: number
    title: string
    content: string
    authorId: number
    linkId?: number | null
    tags?: TagsUncheckedCreateNestedManyWithoutUserPostInput
    images?: ImageUncheckedCreateNestedManyWithoutUserPostInput
    likes?: ProfileUncheckedCreateNestedManyWithoutUserPostLikesInput
  }

  export type UserPostCreateOrConnectWithoutViewsInput = {
    where: UserPostWhereUniqueInput
    create: XOR<UserPostCreateWithoutViewsInput, UserPostUncheckedCreateWithoutViewsInput>
  }

  export type UserPostCreateWithoutLikesInput = {
    title: string
    content: string
    tags?: TagsCreateNestedManyWithoutUserPostInput
    images?: ImageCreateNestedManyWithoutUserPostInput
    views?: ProfileCreateNestedManyWithoutUserPostViewsInput
    author: ProfileCreateNestedOneWithoutPostInput
    link?: LinkCreateNestedOneWithoutUserPostInput
  }

  export type UserPostUncheckedCreateWithoutLikesInput = {
    id?: number
    title: string
    content: string
    authorId: number
    linkId?: number | null
    tags?: TagsUncheckedCreateNestedManyWithoutUserPostInput
    images?: ImageUncheckedCreateNestedManyWithoutUserPostInput
    views?: ProfileUncheckedCreateNestedManyWithoutUserPostViewsInput
  }

  export type UserPostCreateOrConnectWithoutLikesInput = {
    where: UserPostWhereUniqueInput
    create: XOR<UserPostCreateWithoutLikesInput, UserPostUncheckedCreateWithoutLikesInput>
  }

  export type AvatarCreateWithoutProfileInput = {
    image: string
    shown?: boolean
    active?: boolean
  }

  export type AvatarUncheckedCreateWithoutProfileInput = {
    id?: number
    image: string
    shown?: boolean
    active?: boolean
  }

  export type AvatarCreateOrConnectWithoutProfileInput = {
    where: AvatarWhereUniqueInput
    create: XOR<AvatarCreateWithoutProfileInput, AvatarUncheckedCreateWithoutProfileInput>
  }

  export type FriendshipCreateWithoutProfile1Input = {
    accepted?: boolean
    profile2: ProfileCreateNestedOneWithoutFriendshipToInput
  }

  export type FriendshipUncheckedCreateWithoutProfile1Input = {
    id?: number
    idTo: number
    accepted?: boolean
  }

  export type FriendshipCreateOrConnectWithoutProfile1Input = {
    where: FriendshipWhereUniqueInput
    create: XOR<FriendshipCreateWithoutProfile1Input, FriendshipUncheckedCreateWithoutProfile1Input>
  }

  export type FriendshipCreateManyProfile1InputEnvelope = {
    data: FriendshipCreateManyProfile1Input | FriendshipCreateManyProfile1Input[]
  }

  export type FriendshipCreateWithoutProfile2Input = {
    accepted?: boolean
    profile1: ProfileCreateNestedOneWithoutFriendshipFromInput
  }

  export type FriendshipUncheckedCreateWithoutProfile2Input = {
    id?: number
    idFromId: number
    accepted?: boolean
  }

  export type FriendshipCreateOrConnectWithoutProfile2Input = {
    where: FriendshipWhereUniqueInput
    create: XOR<FriendshipCreateWithoutProfile2Input, FriendshipUncheckedCreateWithoutProfile2Input>
  }

  export type FriendshipCreateManyProfile2InputEnvelope = {
    data: FriendshipCreateManyProfile2Input | FriendshipCreateManyProfile2Input[]
  }

  export type UserPostUpsertWithWhereUniqueWithoutAuthorInput = {
    where: UserPostWhereUniqueInput
    update: XOR<UserPostUpdateWithoutAuthorInput, UserPostUncheckedUpdateWithoutAuthorInput>
    create: XOR<UserPostCreateWithoutAuthorInput, UserPostUncheckedCreateWithoutAuthorInput>
  }

  export type UserPostUpdateWithWhereUniqueWithoutAuthorInput = {
    where: UserPostWhereUniqueInput
    data: XOR<UserPostUpdateWithoutAuthorInput, UserPostUncheckedUpdateWithoutAuthorInput>
  }

  export type UserPostUpdateManyWithWhereWithoutAuthorInput = {
    where: UserPostScalarWhereInput
    data: XOR<UserPostUpdateManyMutationInput, UserPostUncheckedUpdateManyWithoutAuthorInput>
  }

  export type AlbumUpsertWithWhereUniqueWithoutAuthorInput = {
    where: AlbumWhereUniqueInput
    update: XOR<AlbumUpdateWithoutAuthorInput, AlbumUncheckedUpdateWithoutAuthorInput>
    create: XOR<AlbumCreateWithoutAuthorInput, AlbumUncheckedCreateWithoutAuthorInput>
  }

  export type AlbumUpdateWithWhereUniqueWithoutAuthorInput = {
    where: AlbumWhereUniqueInput
    data: XOR<AlbumUpdateWithoutAuthorInput, AlbumUncheckedUpdateWithoutAuthorInput>
  }

  export type AlbumUpdateManyWithWhereWithoutAuthorInput = {
    where: AlbumScalarWhereInput
    data: XOR<AlbumUpdateManyMutationInput, AlbumUncheckedUpdateManyWithoutAuthorInput>
  }

  export type ChatGroupUpsertWithWhereUniqueWithoutMembersInput = {
    where: ChatGroupWhereUniqueInput
    update: XOR<ChatGroupUpdateWithoutMembersInput, ChatGroupUncheckedUpdateWithoutMembersInput>
    create: XOR<ChatGroupCreateWithoutMembersInput, ChatGroupUncheckedCreateWithoutMembersInput>
  }

  export type ChatGroupUpdateWithWhereUniqueWithoutMembersInput = {
    where: ChatGroupWhereUniqueInput
    data: XOR<ChatGroupUpdateWithoutMembersInput, ChatGroupUncheckedUpdateWithoutMembersInput>
  }

  export type ChatGroupUpdateManyWithWhereWithoutMembersInput = {
    where: ChatGroupScalarWhereInput
    data: XOR<ChatGroupUpdateManyMutationInput, ChatGroupUncheckedUpdateManyWithoutMembersInput>
  }

  export type ChatGroupScalarWhereInput = {
    AND?: ChatGroupScalarWhereInput | ChatGroupScalarWhereInput[]
    OR?: ChatGroupScalarWhereInput[]
    NOT?: ChatGroupScalarWhereInput | ChatGroupScalarWhereInput[]
    id?: IntFilter<"ChatGroup"> | number
    name?: StringFilter<"ChatGroup"> | string
    isPersonalChat?: BoolFilter<"ChatGroup"> | boolean
    adminId?: IntFilter<"ChatGroup"> | number
    avatar?: StringFilter<"ChatGroup"> | string
  }

  export type ChatGroupUpsertWithWhereUniqueWithoutAdminInput = {
    where: ChatGroupWhereUniqueInput
    update: XOR<ChatGroupUpdateWithoutAdminInput, ChatGroupUncheckedUpdateWithoutAdminInput>
    create: XOR<ChatGroupCreateWithoutAdminInput, ChatGroupUncheckedCreateWithoutAdminInput>
  }

  export type ChatGroupUpdateWithWhereUniqueWithoutAdminInput = {
    where: ChatGroupWhereUniqueInput
    data: XOR<ChatGroupUpdateWithoutAdminInput, ChatGroupUncheckedUpdateWithoutAdminInput>
  }

  export type ChatGroupUpdateManyWithWhereWithoutAdminInput = {
    where: ChatGroupScalarWhereInput
    data: XOR<ChatGroupUpdateManyMutationInput, ChatGroupUncheckedUpdateManyWithoutAdminInput>
  }

  export type ChatMessageUpsertWithWhereUniqueWithoutAuthorInput = {
    where: ChatMessageWhereUniqueInput
    update: XOR<ChatMessageUpdateWithoutAuthorInput, ChatMessageUncheckedUpdateWithoutAuthorInput>
    create: XOR<ChatMessageCreateWithoutAuthorInput, ChatMessageUncheckedCreateWithoutAuthorInput>
  }

  export type ChatMessageUpdateWithWhereUniqueWithoutAuthorInput = {
    where: ChatMessageWhereUniqueInput
    data: XOR<ChatMessageUpdateWithoutAuthorInput, ChatMessageUncheckedUpdateWithoutAuthorInput>
  }

  export type ChatMessageUpdateManyWithWhereWithoutAuthorInput = {
    where: ChatMessageScalarWhereInput
    data: XOR<ChatMessageUpdateManyMutationInput, ChatMessageUncheckedUpdateManyWithoutAuthorInput>
  }

  export type UserPostUpsertWithWhereUniqueWithoutViewsInput = {
    where: UserPostWhereUniqueInput
    update: XOR<UserPostUpdateWithoutViewsInput, UserPostUncheckedUpdateWithoutViewsInput>
    create: XOR<UserPostCreateWithoutViewsInput, UserPostUncheckedCreateWithoutViewsInput>
  }

  export type UserPostUpdateWithWhereUniqueWithoutViewsInput = {
    where: UserPostWhereUniqueInput
    data: XOR<UserPostUpdateWithoutViewsInput, UserPostUncheckedUpdateWithoutViewsInput>
  }

  export type UserPostUpdateManyWithWhereWithoutViewsInput = {
    where: UserPostScalarWhereInput
    data: XOR<UserPostUpdateManyMutationInput, UserPostUncheckedUpdateManyWithoutViewsInput>
  }

  export type UserPostUpsertWithWhereUniqueWithoutLikesInput = {
    where: UserPostWhereUniqueInput
    update: XOR<UserPostUpdateWithoutLikesInput, UserPostUncheckedUpdateWithoutLikesInput>
    create: XOR<UserPostCreateWithoutLikesInput, UserPostUncheckedCreateWithoutLikesInput>
  }

  export type UserPostUpdateWithWhereUniqueWithoutLikesInput = {
    where: UserPostWhereUniqueInput
    data: XOR<UserPostUpdateWithoutLikesInput, UserPostUncheckedUpdateWithoutLikesInput>
  }

  export type UserPostUpdateManyWithWhereWithoutLikesInput = {
    where: UserPostScalarWhereInput
    data: XOR<UserPostUpdateManyMutationInput, UserPostUncheckedUpdateManyWithoutLikesInput>
  }

  export type AvatarUpsertWithoutProfileInput = {
    update: XOR<AvatarUpdateWithoutProfileInput, AvatarUncheckedUpdateWithoutProfileInput>
    create: XOR<AvatarCreateWithoutProfileInput, AvatarUncheckedCreateWithoutProfileInput>
    where?: AvatarWhereInput
  }

  export type AvatarUpdateToOneWithWhereWithoutProfileInput = {
    where?: AvatarWhereInput
    data: XOR<AvatarUpdateWithoutProfileInput, AvatarUncheckedUpdateWithoutProfileInput>
  }

  export type AvatarUpdateWithoutProfileInput = {
    image?: StringFieldUpdateOperationsInput | string
    shown?: BoolFieldUpdateOperationsInput | boolean
    active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AvatarUncheckedUpdateWithoutProfileInput = {
    id?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    shown?: BoolFieldUpdateOperationsInput | boolean
    active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type FriendshipUpsertWithWhereUniqueWithoutProfile1Input = {
    where: FriendshipWhereUniqueInput
    update: XOR<FriendshipUpdateWithoutProfile1Input, FriendshipUncheckedUpdateWithoutProfile1Input>
    create: XOR<FriendshipCreateWithoutProfile1Input, FriendshipUncheckedCreateWithoutProfile1Input>
  }

  export type FriendshipUpdateWithWhereUniqueWithoutProfile1Input = {
    where: FriendshipWhereUniqueInput
    data: XOR<FriendshipUpdateWithoutProfile1Input, FriendshipUncheckedUpdateWithoutProfile1Input>
  }

  export type FriendshipUpdateManyWithWhereWithoutProfile1Input = {
    where: FriendshipScalarWhereInput
    data: XOR<FriendshipUpdateManyMutationInput, FriendshipUncheckedUpdateManyWithoutProfile1Input>
  }

  export type FriendshipScalarWhereInput = {
    AND?: FriendshipScalarWhereInput | FriendshipScalarWhereInput[]
    OR?: FriendshipScalarWhereInput[]
    NOT?: FriendshipScalarWhereInput | FriendshipScalarWhereInput[]
    id?: IntFilter<"Friendship"> | number
    idTo?: IntFilter<"Friendship"> | number
    idFromId?: IntFilter<"Friendship"> | number
    accepted?: BoolFilter<"Friendship"> | boolean
  }

  export type FriendshipUpsertWithWhereUniqueWithoutProfile2Input = {
    where: FriendshipWhereUniqueInput
    update: XOR<FriendshipUpdateWithoutProfile2Input, FriendshipUncheckedUpdateWithoutProfile2Input>
    create: XOR<FriendshipCreateWithoutProfile2Input, FriendshipUncheckedCreateWithoutProfile2Input>
  }

  export type FriendshipUpdateWithWhereUniqueWithoutProfile2Input = {
    where: FriendshipWhereUniqueInput
    data: XOR<FriendshipUpdateWithoutProfile2Input, FriendshipUncheckedUpdateWithoutProfile2Input>
  }

  export type FriendshipUpdateManyWithWhereWithoutProfile2Input = {
    where: FriendshipScalarWhereInput
    data: XOR<FriendshipUpdateManyMutationInput, FriendshipUncheckedUpdateManyWithoutProfile2Input>
  }

  export type ProfileCreateWithoutAvatarInput = {
    name?: string | null
    username?: string | null
    surname?: string | null
    dateOfBirth?: Date | string | null
    email: string
    password: string
    image?: string | null
    about?: string | null
    signature?: string | null
    post?: UserPostCreateNestedManyWithoutAuthorInput
    album?: AlbumCreateNestedManyWithoutAuthorInput
    chats?: ChatGroupCreateNestedManyWithoutMembersInput
    administeredGroups?: ChatGroupCreateNestedManyWithoutAdminInput
    chatMessages?: ChatMessageCreateNestedManyWithoutAuthorInput
    userPostViews?: UserPostCreateNestedManyWithoutViewsInput
    userPostLikes?: UserPostCreateNestedManyWithoutLikesInput
    friendshipFrom?: FriendshipCreateNestedManyWithoutProfile1Input
    friendshipTo?: FriendshipCreateNestedManyWithoutProfile2Input
  }

  export type ProfileUncheckedCreateWithoutAvatarInput = {
    id?: number
    name?: string | null
    username?: string | null
    surname?: string | null
    dateOfBirth?: Date | string | null
    email: string
    password: string
    image?: string | null
    about?: string | null
    signature?: string | null
    post?: UserPostUncheckedCreateNestedManyWithoutAuthorInput
    album?: AlbumUncheckedCreateNestedManyWithoutAuthorInput
    chats?: ChatGroupUncheckedCreateNestedManyWithoutMembersInput
    administeredGroups?: ChatGroupUncheckedCreateNestedManyWithoutAdminInput
    chatMessages?: ChatMessageUncheckedCreateNestedManyWithoutAuthorInput
    userPostViews?: UserPostUncheckedCreateNestedManyWithoutViewsInput
    userPostLikes?: UserPostUncheckedCreateNestedManyWithoutLikesInput
    friendshipFrom?: FriendshipUncheckedCreateNestedManyWithoutProfile1Input
    friendshipTo?: FriendshipUncheckedCreateNestedManyWithoutProfile2Input
  }

  export type ProfileCreateOrConnectWithoutAvatarInput = {
    where: ProfileWhereUniqueInput
    create: XOR<ProfileCreateWithoutAvatarInput, ProfileUncheckedCreateWithoutAvatarInput>
  }

  export type ProfileUpsertWithoutAvatarInput = {
    update: XOR<ProfileUpdateWithoutAvatarInput, ProfileUncheckedUpdateWithoutAvatarInput>
    create: XOR<ProfileCreateWithoutAvatarInput, ProfileUncheckedCreateWithoutAvatarInput>
    where?: ProfileWhereInput
  }

  export type ProfileUpdateToOneWithWhereWithoutAvatarInput = {
    where?: ProfileWhereInput
    data: XOR<ProfileUpdateWithoutAvatarInput, ProfileUncheckedUpdateWithoutAvatarInput>
  }

  export type ProfileUpdateWithoutAvatarInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    signature?: NullableStringFieldUpdateOperationsInput | string | null
    post?: UserPostUpdateManyWithoutAuthorNestedInput
    album?: AlbumUpdateManyWithoutAuthorNestedInput
    chats?: ChatGroupUpdateManyWithoutMembersNestedInput
    administeredGroups?: ChatGroupUpdateManyWithoutAdminNestedInput
    chatMessages?: ChatMessageUpdateManyWithoutAuthorNestedInput
    userPostViews?: UserPostUpdateManyWithoutViewsNestedInput
    userPostLikes?: UserPostUpdateManyWithoutLikesNestedInput
    friendshipFrom?: FriendshipUpdateManyWithoutProfile1NestedInput
    friendshipTo?: FriendshipUpdateManyWithoutProfile2NestedInput
  }

  export type ProfileUncheckedUpdateWithoutAvatarInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    signature?: NullableStringFieldUpdateOperationsInput | string | null
    post?: UserPostUncheckedUpdateManyWithoutAuthorNestedInput
    album?: AlbumUncheckedUpdateManyWithoutAuthorNestedInput
    chats?: ChatGroupUncheckedUpdateManyWithoutMembersNestedInput
    administeredGroups?: ChatGroupUncheckedUpdateManyWithoutAdminNestedInput
    chatMessages?: ChatMessageUncheckedUpdateManyWithoutAuthorNestedInput
    userPostViews?: UserPostUncheckedUpdateManyWithoutViewsNestedInput
    userPostLikes?: UserPostUncheckedUpdateManyWithoutLikesNestedInput
    friendshipFrom?: FriendshipUncheckedUpdateManyWithoutProfile1NestedInput
    friendshipTo?: FriendshipUncheckedUpdateManyWithoutProfile2NestedInput
  }

  export type ImageUpdateWithoutAlbumInput = {
    url?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UserPost?: UserPostUpdateManyWithoutImagesNestedInput
  }

  export type ImageUncheckedUpdateWithoutAlbumInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UserPost?: UserPostUncheckedUpdateManyWithoutImagesNestedInput
  }

  export type ImageUncheckedUpdateManyWithoutAlbumInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessageCreateManyChatGroupInput = {
    id?: number
    content: string
    sentAt?: Date | string
    authorId: number
    attachedImage: string
  }

  export type ProfileUpdateWithoutChatsInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    signature?: NullableStringFieldUpdateOperationsInput | string | null
    post?: UserPostUpdateManyWithoutAuthorNestedInput
    album?: AlbumUpdateManyWithoutAuthorNestedInput
    administeredGroups?: ChatGroupUpdateManyWithoutAdminNestedInput
    chatMessages?: ChatMessageUpdateManyWithoutAuthorNestedInput
    userPostViews?: UserPostUpdateManyWithoutViewsNestedInput
    userPostLikes?: UserPostUpdateManyWithoutLikesNestedInput
    avatar?: AvatarUpdateOneWithoutProfileNestedInput
    friendshipFrom?: FriendshipUpdateManyWithoutProfile1NestedInput
    friendshipTo?: FriendshipUpdateManyWithoutProfile2NestedInput
  }

  export type ProfileUncheckedUpdateWithoutChatsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    signature?: NullableStringFieldUpdateOperationsInput | string | null
    post?: UserPostUncheckedUpdateManyWithoutAuthorNestedInput
    album?: AlbumUncheckedUpdateManyWithoutAuthorNestedInput
    administeredGroups?: ChatGroupUncheckedUpdateManyWithoutAdminNestedInput
    chatMessages?: ChatMessageUncheckedUpdateManyWithoutAuthorNestedInput
    userPostViews?: UserPostUncheckedUpdateManyWithoutViewsNestedInput
    userPostLikes?: UserPostUncheckedUpdateManyWithoutLikesNestedInput
    avatar?: AvatarUncheckedUpdateOneWithoutProfileNestedInput
    friendshipFrom?: FriendshipUncheckedUpdateManyWithoutProfile1NestedInput
    friendshipTo?: FriendshipUncheckedUpdateManyWithoutProfile2NestedInput
  }

  export type ProfileUncheckedUpdateManyWithoutChatsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    signature?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ChatMessageUpdateWithoutChatGroupInput = {
    content?: StringFieldUpdateOperationsInput | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attachedImage?: StringFieldUpdateOperationsInput | string
    author?: ProfileUpdateOneRequiredWithoutChatMessagesNestedInput
  }

  export type ChatMessageUncheckedUpdateWithoutChatGroupInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authorId?: IntFieldUpdateOperationsInput | number
    attachedImage?: StringFieldUpdateOperationsInput | string
  }

  export type ChatMessageUncheckedUpdateManyWithoutChatGroupInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authorId?: IntFieldUpdateOperationsInput | number
    attachedImage?: StringFieldUpdateOperationsInput | string
  }

  export type UserPostUpdateWithoutImagesInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    tags?: TagsUpdateManyWithoutUserPostNestedInput
    views?: ProfileUpdateManyWithoutUserPostViewsNestedInput
    likes?: ProfileUpdateManyWithoutUserPostLikesNestedInput
    author?: ProfileUpdateOneRequiredWithoutPostNestedInput
    link?: LinkUpdateOneWithoutUserPostNestedInput
  }

  export type UserPostUncheckedUpdateWithoutImagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    authorId?: IntFieldUpdateOperationsInput | number
    linkId?: NullableIntFieldUpdateOperationsInput | number | null
    tags?: TagsUncheckedUpdateManyWithoutUserPostNestedInput
    views?: ProfileUncheckedUpdateManyWithoutUserPostViewsNestedInput
    likes?: ProfileUncheckedUpdateManyWithoutUserPostLikesNestedInput
  }

  export type UserPostUncheckedUpdateManyWithoutImagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    authorId?: IntFieldUpdateOperationsInput | number
    linkId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AlbumUpdateWithoutImagesInput = {
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    shown?: BoolFieldUpdateOperationsInput | boolean
    topic?: NullableStringFieldUpdateOperationsInput | string | null
    author?: ProfileUpdateOneRequiredWithoutAlbumNestedInput
  }

  export type AlbumUncheckedUpdateWithoutImagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    shown?: BoolFieldUpdateOperationsInput | boolean
    topic?: NullableStringFieldUpdateOperationsInput | string | null
    authorId?: IntFieldUpdateOperationsInput | number
  }

  export type AlbumUncheckedUpdateManyWithoutImagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    shown?: BoolFieldUpdateOperationsInput | boolean
    topic?: NullableStringFieldUpdateOperationsInput | string | null
    authorId?: IntFieldUpdateOperationsInput | number
  }

  export type TagsUpdateWithoutUserPostInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TagsUncheckedUpdateWithoutUserPostInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TagsUncheckedUpdateManyWithoutUserPostInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ImageUpdateWithoutUserPostInput = {
    url?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Album?: AlbumUpdateManyWithoutImagesNestedInput
  }

  export type ImageUncheckedUpdateWithoutUserPostInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Album?: AlbumUncheckedUpdateManyWithoutImagesNestedInput
  }

  export type ImageUncheckedUpdateManyWithoutUserPostInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfileUpdateWithoutUserPostViewsInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    signature?: NullableStringFieldUpdateOperationsInput | string | null
    post?: UserPostUpdateManyWithoutAuthorNestedInput
    album?: AlbumUpdateManyWithoutAuthorNestedInput
    chats?: ChatGroupUpdateManyWithoutMembersNestedInput
    administeredGroups?: ChatGroupUpdateManyWithoutAdminNestedInput
    chatMessages?: ChatMessageUpdateManyWithoutAuthorNestedInput
    userPostLikes?: UserPostUpdateManyWithoutLikesNestedInput
    avatar?: AvatarUpdateOneWithoutProfileNestedInput
    friendshipFrom?: FriendshipUpdateManyWithoutProfile1NestedInput
    friendshipTo?: FriendshipUpdateManyWithoutProfile2NestedInput
  }

  export type ProfileUncheckedUpdateWithoutUserPostViewsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    signature?: NullableStringFieldUpdateOperationsInput | string | null
    post?: UserPostUncheckedUpdateManyWithoutAuthorNestedInput
    album?: AlbumUncheckedUpdateManyWithoutAuthorNestedInput
    chats?: ChatGroupUncheckedUpdateManyWithoutMembersNestedInput
    administeredGroups?: ChatGroupUncheckedUpdateManyWithoutAdminNestedInput
    chatMessages?: ChatMessageUncheckedUpdateManyWithoutAuthorNestedInput
    userPostLikes?: UserPostUncheckedUpdateManyWithoutLikesNestedInput
    avatar?: AvatarUncheckedUpdateOneWithoutProfileNestedInput
    friendshipFrom?: FriendshipUncheckedUpdateManyWithoutProfile1NestedInput
    friendshipTo?: FriendshipUncheckedUpdateManyWithoutProfile2NestedInput
  }

  export type ProfileUncheckedUpdateManyWithoutUserPostViewsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    signature?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProfileUpdateWithoutUserPostLikesInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    signature?: NullableStringFieldUpdateOperationsInput | string | null
    post?: UserPostUpdateManyWithoutAuthorNestedInput
    album?: AlbumUpdateManyWithoutAuthorNestedInput
    chats?: ChatGroupUpdateManyWithoutMembersNestedInput
    administeredGroups?: ChatGroupUpdateManyWithoutAdminNestedInput
    chatMessages?: ChatMessageUpdateManyWithoutAuthorNestedInput
    userPostViews?: UserPostUpdateManyWithoutViewsNestedInput
    avatar?: AvatarUpdateOneWithoutProfileNestedInput
    friendshipFrom?: FriendshipUpdateManyWithoutProfile1NestedInput
    friendshipTo?: FriendshipUpdateManyWithoutProfile2NestedInput
  }

  export type ProfileUncheckedUpdateWithoutUserPostLikesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    signature?: NullableStringFieldUpdateOperationsInput | string | null
    post?: UserPostUncheckedUpdateManyWithoutAuthorNestedInput
    album?: AlbumUncheckedUpdateManyWithoutAuthorNestedInput
    chats?: ChatGroupUncheckedUpdateManyWithoutMembersNestedInput
    administeredGroups?: ChatGroupUncheckedUpdateManyWithoutAdminNestedInput
    chatMessages?: ChatMessageUncheckedUpdateManyWithoutAuthorNestedInput
    userPostViews?: UserPostUncheckedUpdateManyWithoutViewsNestedInput
    avatar?: AvatarUncheckedUpdateOneWithoutProfileNestedInput
    friendshipFrom?: FriendshipUncheckedUpdateManyWithoutProfile1NestedInput
    friendshipTo?: FriendshipUncheckedUpdateManyWithoutProfile2NestedInput
  }

  export type ProfileUncheckedUpdateManyWithoutUserPostLikesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    signature?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserPostUpdateWithoutTagsInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    images?: ImageUpdateManyWithoutUserPostNestedInput
    views?: ProfileUpdateManyWithoutUserPostViewsNestedInput
    likes?: ProfileUpdateManyWithoutUserPostLikesNestedInput
    author?: ProfileUpdateOneRequiredWithoutPostNestedInput
    link?: LinkUpdateOneWithoutUserPostNestedInput
  }

  export type UserPostUncheckedUpdateWithoutTagsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    authorId?: IntFieldUpdateOperationsInput | number
    linkId?: NullableIntFieldUpdateOperationsInput | number | null
    images?: ImageUncheckedUpdateManyWithoutUserPostNestedInput
    views?: ProfileUncheckedUpdateManyWithoutUserPostViewsNestedInput
    likes?: ProfileUncheckedUpdateManyWithoutUserPostLikesNestedInput
  }

  export type UserPostUncheckedUpdateManyWithoutTagsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    authorId?: IntFieldUpdateOperationsInput | number
    linkId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type UserPostCreateManyLinkInput = {
    id?: number
    title: string
    content: string
    authorId: number
  }

  export type UserPostUpdateWithoutLinkInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    tags?: TagsUpdateManyWithoutUserPostNestedInput
    images?: ImageUpdateManyWithoutUserPostNestedInput
    views?: ProfileUpdateManyWithoutUserPostViewsNestedInput
    likes?: ProfileUpdateManyWithoutUserPostLikesNestedInput
    author?: ProfileUpdateOneRequiredWithoutPostNestedInput
  }

  export type UserPostUncheckedUpdateWithoutLinkInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    authorId?: IntFieldUpdateOperationsInput | number
    tags?: TagsUncheckedUpdateManyWithoutUserPostNestedInput
    images?: ImageUncheckedUpdateManyWithoutUserPostNestedInput
    views?: ProfileUncheckedUpdateManyWithoutUserPostViewsNestedInput
    likes?: ProfileUncheckedUpdateManyWithoutUserPostLikesNestedInput
  }

  export type UserPostUncheckedUpdateManyWithoutLinkInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    authorId?: IntFieldUpdateOperationsInput | number
  }

  export type UserPostCreateManyAuthorInput = {
    id?: number
    title: string
    content: string
    linkId?: number | null
  }

  export type AlbumCreateManyAuthorInput = {
    id?: number
    name: string
    created_at?: Date | string
    shown?: boolean
    topic?: string | null
  }

  export type ChatGroupCreateManyAdminInput = {
    id?: number
    name: string
    isPersonalChat?: boolean
    avatar: string
  }

  export type ChatMessageCreateManyAuthorInput = {
    id?: number
    content: string
    sentAt?: Date | string
    chatGroupId: number
    attachedImage: string
  }

  export type FriendshipCreateManyProfile1Input = {
    id?: number
    idTo: number
    accepted?: boolean
  }

  export type FriendshipCreateManyProfile2Input = {
    id?: number
    idFromId: number
    accepted?: boolean
  }

  export type UserPostUpdateWithoutAuthorInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    tags?: TagsUpdateManyWithoutUserPostNestedInput
    images?: ImageUpdateManyWithoutUserPostNestedInput
    views?: ProfileUpdateManyWithoutUserPostViewsNestedInput
    likes?: ProfileUpdateManyWithoutUserPostLikesNestedInput
    link?: LinkUpdateOneWithoutUserPostNestedInput
  }

  export type UserPostUncheckedUpdateWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    linkId?: NullableIntFieldUpdateOperationsInput | number | null
    tags?: TagsUncheckedUpdateManyWithoutUserPostNestedInput
    images?: ImageUncheckedUpdateManyWithoutUserPostNestedInput
    views?: ProfileUncheckedUpdateManyWithoutUserPostViewsNestedInput
    likes?: ProfileUncheckedUpdateManyWithoutUserPostLikesNestedInput
  }

  export type UserPostUncheckedUpdateManyWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    linkId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AlbumUpdateWithoutAuthorInput = {
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    shown?: BoolFieldUpdateOperationsInput | boolean
    topic?: NullableStringFieldUpdateOperationsInput | string | null
    images?: ImageUpdateManyWithoutAlbumNestedInput
  }

  export type AlbumUncheckedUpdateWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    shown?: BoolFieldUpdateOperationsInput | boolean
    topic?: NullableStringFieldUpdateOperationsInput | string | null
    images?: ImageUncheckedUpdateManyWithoutAlbumNestedInput
  }

  export type AlbumUncheckedUpdateManyWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    shown?: BoolFieldUpdateOperationsInput | boolean
    topic?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ChatGroupUpdateWithoutMembersInput = {
    name?: StringFieldUpdateOperationsInput | string
    isPersonalChat?: BoolFieldUpdateOperationsInput | boolean
    avatar?: StringFieldUpdateOperationsInput | string
    admin?: ProfileUpdateOneRequiredWithoutAdministeredGroupsNestedInput
    chatMessages?: ChatMessageUpdateManyWithoutChatGroupNestedInput
  }

  export type ChatGroupUncheckedUpdateWithoutMembersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    isPersonalChat?: BoolFieldUpdateOperationsInput | boolean
    adminId?: IntFieldUpdateOperationsInput | number
    avatar?: StringFieldUpdateOperationsInput | string
    chatMessages?: ChatMessageUncheckedUpdateManyWithoutChatGroupNestedInput
  }

  export type ChatGroupUncheckedUpdateManyWithoutMembersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    isPersonalChat?: BoolFieldUpdateOperationsInput | boolean
    adminId?: IntFieldUpdateOperationsInput | number
    avatar?: StringFieldUpdateOperationsInput | string
  }

  export type ChatGroupUpdateWithoutAdminInput = {
    name?: StringFieldUpdateOperationsInput | string
    isPersonalChat?: BoolFieldUpdateOperationsInput | boolean
    avatar?: StringFieldUpdateOperationsInput | string
    members?: ProfileUpdateManyWithoutChatsNestedInput
    chatMessages?: ChatMessageUpdateManyWithoutChatGroupNestedInput
  }

  export type ChatGroupUncheckedUpdateWithoutAdminInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    isPersonalChat?: BoolFieldUpdateOperationsInput | boolean
    avatar?: StringFieldUpdateOperationsInput | string
    members?: ProfileUncheckedUpdateManyWithoutChatsNestedInput
    chatMessages?: ChatMessageUncheckedUpdateManyWithoutChatGroupNestedInput
  }

  export type ChatGroupUncheckedUpdateManyWithoutAdminInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    isPersonalChat?: BoolFieldUpdateOperationsInput | boolean
    avatar?: StringFieldUpdateOperationsInput | string
  }

  export type ChatMessageUpdateWithoutAuthorInput = {
    content?: StringFieldUpdateOperationsInput | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attachedImage?: StringFieldUpdateOperationsInput | string
    chatGroup?: ChatGroupUpdateOneRequiredWithoutChatMessagesNestedInput
  }

  export type ChatMessageUncheckedUpdateWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chatGroupId?: IntFieldUpdateOperationsInput | number
    attachedImage?: StringFieldUpdateOperationsInput | string
  }

  export type ChatMessageUncheckedUpdateManyWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chatGroupId?: IntFieldUpdateOperationsInput | number
    attachedImage?: StringFieldUpdateOperationsInput | string
  }

  export type UserPostUpdateWithoutViewsInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    tags?: TagsUpdateManyWithoutUserPostNestedInput
    images?: ImageUpdateManyWithoutUserPostNestedInput
    likes?: ProfileUpdateManyWithoutUserPostLikesNestedInput
    author?: ProfileUpdateOneRequiredWithoutPostNestedInput
    link?: LinkUpdateOneWithoutUserPostNestedInput
  }

  export type UserPostUncheckedUpdateWithoutViewsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    authorId?: IntFieldUpdateOperationsInput | number
    linkId?: NullableIntFieldUpdateOperationsInput | number | null
    tags?: TagsUncheckedUpdateManyWithoutUserPostNestedInput
    images?: ImageUncheckedUpdateManyWithoutUserPostNestedInput
    likes?: ProfileUncheckedUpdateManyWithoutUserPostLikesNestedInput
  }

  export type UserPostUncheckedUpdateManyWithoutViewsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    authorId?: IntFieldUpdateOperationsInput | number
    linkId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type UserPostUpdateWithoutLikesInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    tags?: TagsUpdateManyWithoutUserPostNestedInput
    images?: ImageUpdateManyWithoutUserPostNestedInput
    views?: ProfileUpdateManyWithoutUserPostViewsNestedInput
    author?: ProfileUpdateOneRequiredWithoutPostNestedInput
    link?: LinkUpdateOneWithoutUserPostNestedInput
  }

  export type UserPostUncheckedUpdateWithoutLikesInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    authorId?: IntFieldUpdateOperationsInput | number
    linkId?: NullableIntFieldUpdateOperationsInput | number | null
    tags?: TagsUncheckedUpdateManyWithoutUserPostNestedInput
    images?: ImageUncheckedUpdateManyWithoutUserPostNestedInput
    views?: ProfileUncheckedUpdateManyWithoutUserPostViewsNestedInput
  }

  export type UserPostUncheckedUpdateManyWithoutLikesInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    authorId?: IntFieldUpdateOperationsInput | number
    linkId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type FriendshipUpdateWithoutProfile1Input = {
    accepted?: BoolFieldUpdateOperationsInput | boolean
    profile2?: ProfileUpdateOneRequiredWithoutFriendshipToNestedInput
  }

  export type FriendshipUncheckedUpdateWithoutProfile1Input = {
    id?: IntFieldUpdateOperationsInput | number
    idTo?: IntFieldUpdateOperationsInput | number
    accepted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type FriendshipUncheckedUpdateManyWithoutProfile1Input = {
    id?: IntFieldUpdateOperationsInput | number
    idTo?: IntFieldUpdateOperationsInput | number
    accepted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type FriendshipUpdateWithoutProfile2Input = {
    accepted?: BoolFieldUpdateOperationsInput | boolean
    profile1?: ProfileUpdateOneRequiredWithoutFriendshipFromNestedInput
  }

  export type FriendshipUncheckedUpdateWithoutProfile2Input = {
    id?: IntFieldUpdateOperationsInput | number
    idFromId?: IntFieldUpdateOperationsInput | number
    accepted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type FriendshipUncheckedUpdateManyWithoutProfile2Input = {
    id?: IntFieldUpdateOperationsInput | number
    idFromId?: IntFieldUpdateOperationsInput | number
    accepted?: BoolFieldUpdateOperationsInput | boolean
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