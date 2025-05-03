
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
 * Model Admin
 * 
 */
export type Admin = $Result.DefaultSelection<Prisma.$AdminPayload>
/**
 * Model Teacher
 * 
 */
export type Teacher = $Result.DefaultSelection<Prisma.$TeacherPayload>
/**
 * Model Student
 * 
 */
export type Student = $Result.DefaultSelection<Prisma.$StudentPayload>
/**
 * Model Course
 * 
 */
export type Course = $Result.DefaultSelection<Prisma.$CoursePayload>
/**
 * Model Lesson
 * 
 */
export type Lesson = $Result.DefaultSelection<Prisma.$LessonPayload>
/**
 * Model Quiz
 * 
 */
export type Quiz = $Result.DefaultSelection<Prisma.$QuizPayload>
/**
 * Model Question
 * 
 */
export type Question = $Result.DefaultSelection<Prisma.$QuestionPayload>
/**
 * Model QuestionOption
 * 
 */
export type QuestionOption = $Result.DefaultSelection<Prisma.$QuestionOptionPayload>
/**
 * Model QuestionAnswer
 * 
 */
export type QuestionAnswer = $Result.DefaultSelection<Prisma.$QuestionAnswerPayload>
/**
 * Model StudentQuiz
 * 
 */
export type StudentQuiz = $Result.DefaultSelection<Prisma.$StudentQuizPayload>
/**
 * Model StudentQuizAnswer
 * 
 */
export type StudentQuizAnswer = $Result.DefaultSelection<Prisma.$StudentQuizAnswerPayload>
/**
 * Model StudentProgress
 * 
 */
export type StudentProgress = $Result.DefaultSelection<Prisma.$StudentProgressPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Admins
 * const admins = await prisma.admin.findMany()
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
   * // Fetch zero or more Admins
   * const admins = await prisma.admin.findMany()
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
   * `prisma.admin`: Exposes CRUD operations for the **Admin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Admins
    * const admins = await prisma.admin.findMany()
    * ```
    */
  get admin(): Prisma.AdminDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.teacher`: Exposes CRUD operations for the **Teacher** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Teachers
    * const teachers = await prisma.teacher.findMany()
    * ```
    */
  get teacher(): Prisma.TeacherDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.student`: Exposes CRUD operations for the **Student** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Students
    * const students = await prisma.student.findMany()
    * ```
    */
  get student(): Prisma.StudentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.course`: Exposes CRUD operations for the **Course** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Courses
    * const courses = await prisma.course.findMany()
    * ```
    */
  get course(): Prisma.CourseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.lesson`: Exposes CRUD operations for the **Lesson** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Lessons
    * const lessons = await prisma.lesson.findMany()
    * ```
    */
  get lesson(): Prisma.LessonDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.quiz`: Exposes CRUD operations for the **Quiz** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Quizzes
    * const quizzes = await prisma.quiz.findMany()
    * ```
    */
  get quiz(): Prisma.QuizDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.question`: Exposes CRUD operations for the **Question** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Questions
    * const questions = await prisma.question.findMany()
    * ```
    */
  get question(): Prisma.QuestionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.questionOption`: Exposes CRUD operations for the **QuestionOption** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more QuestionOptions
    * const questionOptions = await prisma.questionOption.findMany()
    * ```
    */
  get questionOption(): Prisma.QuestionOptionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.questionAnswer`: Exposes CRUD operations for the **QuestionAnswer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more QuestionAnswers
    * const questionAnswers = await prisma.questionAnswer.findMany()
    * ```
    */
  get questionAnswer(): Prisma.QuestionAnswerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.studentQuiz`: Exposes CRUD operations for the **StudentQuiz** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StudentQuizs
    * const studentQuizs = await prisma.studentQuiz.findMany()
    * ```
    */
  get studentQuiz(): Prisma.StudentQuizDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.studentQuizAnswer`: Exposes CRUD operations for the **StudentQuizAnswer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StudentQuizAnswers
    * const studentQuizAnswers = await prisma.studentQuizAnswer.findMany()
    * ```
    */
  get studentQuizAnswer(): Prisma.StudentQuizAnswerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.studentProgress`: Exposes CRUD operations for the **StudentProgress** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StudentProgresses
    * const studentProgresses = await prisma.studentProgress.findMany()
    * ```
    */
  get studentProgress(): Prisma.StudentProgressDelegate<ExtArgs, ClientOptions>;
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
    Admin: 'Admin',
    Teacher: 'Teacher',
    Student: 'Student',
    Course: 'Course',
    Lesson: 'Lesson',
    Quiz: 'Quiz',
    Question: 'Question',
    QuestionOption: 'QuestionOption',
    QuestionAnswer: 'QuestionAnswer',
    StudentQuiz: 'StudentQuiz',
    StudentQuizAnswer: 'StudentQuizAnswer',
    StudentProgress: 'StudentProgress'
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
      modelProps: "admin" | "teacher" | "student" | "course" | "lesson" | "quiz" | "question" | "questionOption" | "questionAnswer" | "studentQuiz" | "studentQuizAnswer" | "studentProgress"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Admin: {
        payload: Prisma.$AdminPayload<ExtArgs>
        fields: Prisma.AdminFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdminFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdminFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findFirst: {
            args: Prisma.AdminFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdminFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findMany: {
            args: Prisma.AdminFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          create: {
            args: Prisma.AdminCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          createMany: {
            args: Prisma.AdminCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AdminDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          update: {
            args: Prisma.AdminUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          deleteMany: {
            args: Prisma.AdminDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdminUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AdminUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          aggregate: {
            args: Prisma.AdminAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdmin>
          }
          groupBy: {
            args: Prisma.AdminGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdminCountArgs<ExtArgs>
            result: $Utils.Optional<AdminCountAggregateOutputType> | number
          }
        }
      }
      Teacher: {
        payload: Prisma.$TeacherPayload<ExtArgs>
        fields: Prisma.TeacherFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TeacherFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TeacherFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>
          }
          findFirst: {
            args: Prisma.TeacherFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TeacherFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>
          }
          findMany: {
            args: Prisma.TeacherFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>[]
          }
          create: {
            args: Prisma.TeacherCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>
          }
          createMany: {
            args: Prisma.TeacherCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TeacherDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>
          }
          update: {
            args: Prisma.TeacherUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>
          }
          deleteMany: {
            args: Prisma.TeacherDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TeacherUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TeacherUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>
          }
          aggregate: {
            args: Prisma.TeacherAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTeacher>
          }
          groupBy: {
            args: Prisma.TeacherGroupByArgs<ExtArgs>
            result: $Utils.Optional<TeacherGroupByOutputType>[]
          }
          count: {
            args: Prisma.TeacherCountArgs<ExtArgs>
            result: $Utils.Optional<TeacherCountAggregateOutputType> | number
          }
        }
      }
      Student: {
        payload: Prisma.$StudentPayload<ExtArgs>
        fields: Prisma.StudentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StudentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StudentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          findFirst: {
            args: Prisma.StudentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StudentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          findMany: {
            args: Prisma.StudentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>[]
          }
          create: {
            args: Prisma.StudentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          createMany: {
            args: Prisma.StudentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.StudentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          update: {
            args: Prisma.StudentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          deleteMany: {
            args: Prisma.StudentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StudentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.StudentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          aggregate: {
            args: Prisma.StudentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStudent>
          }
          groupBy: {
            args: Prisma.StudentGroupByArgs<ExtArgs>
            result: $Utils.Optional<StudentGroupByOutputType>[]
          }
          count: {
            args: Prisma.StudentCountArgs<ExtArgs>
            result: $Utils.Optional<StudentCountAggregateOutputType> | number
          }
        }
      }
      Course: {
        payload: Prisma.$CoursePayload<ExtArgs>
        fields: Prisma.CourseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CourseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CourseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          findFirst: {
            args: Prisma.CourseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CourseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          findMany: {
            args: Prisma.CourseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>[]
          }
          create: {
            args: Prisma.CourseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          createMany: {
            args: Prisma.CourseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CourseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          update: {
            args: Prisma.CourseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          deleteMany: {
            args: Prisma.CourseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CourseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CourseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          aggregate: {
            args: Prisma.CourseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCourse>
          }
          groupBy: {
            args: Prisma.CourseGroupByArgs<ExtArgs>
            result: $Utils.Optional<CourseGroupByOutputType>[]
          }
          count: {
            args: Prisma.CourseCountArgs<ExtArgs>
            result: $Utils.Optional<CourseCountAggregateOutputType> | number
          }
        }
      }
      Lesson: {
        payload: Prisma.$LessonPayload<ExtArgs>
        fields: Prisma.LessonFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LessonFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LessonFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonPayload>
          }
          findFirst: {
            args: Prisma.LessonFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LessonFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonPayload>
          }
          findMany: {
            args: Prisma.LessonFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonPayload>[]
          }
          create: {
            args: Prisma.LessonCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonPayload>
          }
          createMany: {
            args: Prisma.LessonCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.LessonDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonPayload>
          }
          update: {
            args: Prisma.LessonUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonPayload>
          }
          deleteMany: {
            args: Prisma.LessonDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LessonUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.LessonUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonPayload>
          }
          aggregate: {
            args: Prisma.LessonAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLesson>
          }
          groupBy: {
            args: Prisma.LessonGroupByArgs<ExtArgs>
            result: $Utils.Optional<LessonGroupByOutputType>[]
          }
          count: {
            args: Prisma.LessonCountArgs<ExtArgs>
            result: $Utils.Optional<LessonCountAggregateOutputType> | number
          }
        }
      }
      Quiz: {
        payload: Prisma.$QuizPayload<ExtArgs>
        fields: Prisma.QuizFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuizFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuizFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload>
          }
          findFirst: {
            args: Prisma.QuizFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuizFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload>
          }
          findMany: {
            args: Prisma.QuizFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload>[]
          }
          create: {
            args: Prisma.QuizCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload>
          }
          createMany: {
            args: Prisma.QuizCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.QuizDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload>
          }
          update: {
            args: Prisma.QuizUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload>
          }
          deleteMany: {
            args: Prisma.QuizDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuizUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.QuizUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload>
          }
          aggregate: {
            args: Prisma.QuizAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuiz>
          }
          groupBy: {
            args: Prisma.QuizGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuizGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuizCountArgs<ExtArgs>
            result: $Utils.Optional<QuizCountAggregateOutputType> | number
          }
        }
      }
      Question: {
        payload: Prisma.$QuestionPayload<ExtArgs>
        fields: Prisma.QuestionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuestionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuestionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          findFirst: {
            args: Prisma.QuestionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuestionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          findMany: {
            args: Prisma.QuestionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>[]
          }
          create: {
            args: Prisma.QuestionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          createMany: {
            args: Prisma.QuestionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.QuestionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          update: {
            args: Prisma.QuestionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          deleteMany: {
            args: Prisma.QuestionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuestionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.QuestionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          aggregate: {
            args: Prisma.QuestionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuestion>
          }
          groupBy: {
            args: Prisma.QuestionGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuestionGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuestionCountArgs<ExtArgs>
            result: $Utils.Optional<QuestionCountAggregateOutputType> | number
          }
        }
      }
      QuestionOption: {
        payload: Prisma.$QuestionOptionPayload<ExtArgs>
        fields: Prisma.QuestionOptionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuestionOptionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionOptionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuestionOptionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionOptionPayload>
          }
          findFirst: {
            args: Prisma.QuestionOptionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionOptionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuestionOptionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionOptionPayload>
          }
          findMany: {
            args: Prisma.QuestionOptionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionOptionPayload>[]
          }
          create: {
            args: Prisma.QuestionOptionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionOptionPayload>
          }
          createMany: {
            args: Prisma.QuestionOptionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.QuestionOptionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionOptionPayload>
          }
          update: {
            args: Prisma.QuestionOptionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionOptionPayload>
          }
          deleteMany: {
            args: Prisma.QuestionOptionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuestionOptionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.QuestionOptionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionOptionPayload>
          }
          aggregate: {
            args: Prisma.QuestionOptionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuestionOption>
          }
          groupBy: {
            args: Prisma.QuestionOptionGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuestionOptionGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuestionOptionCountArgs<ExtArgs>
            result: $Utils.Optional<QuestionOptionCountAggregateOutputType> | number
          }
        }
      }
      QuestionAnswer: {
        payload: Prisma.$QuestionAnswerPayload<ExtArgs>
        fields: Prisma.QuestionAnswerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuestionAnswerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionAnswerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuestionAnswerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionAnswerPayload>
          }
          findFirst: {
            args: Prisma.QuestionAnswerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionAnswerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuestionAnswerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionAnswerPayload>
          }
          findMany: {
            args: Prisma.QuestionAnswerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionAnswerPayload>[]
          }
          create: {
            args: Prisma.QuestionAnswerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionAnswerPayload>
          }
          createMany: {
            args: Prisma.QuestionAnswerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.QuestionAnswerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionAnswerPayload>
          }
          update: {
            args: Prisma.QuestionAnswerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionAnswerPayload>
          }
          deleteMany: {
            args: Prisma.QuestionAnswerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuestionAnswerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.QuestionAnswerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionAnswerPayload>
          }
          aggregate: {
            args: Prisma.QuestionAnswerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuestionAnswer>
          }
          groupBy: {
            args: Prisma.QuestionAnswerGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuestionAnswerGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuestionAnswerCountArgs<ExtArgs>
            result: $Utils.Optional<QuestionAnswerCountAggregateOutputType> | number
          }
        }
      }
      StudentQuiz: {
        payload: Prisma.$StudentQuizPayload<ExtArgs>
        fields: Prisma.StudentQuizFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StudentQuizFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentQuizPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StudentQuizFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentQuizPayload>
          }
          findFirst: {
            args: Prisma.StudentQuizFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentQuizPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StudentQuizFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentQuizPayload>
          }
          findMany: {
            args: Prisma.StudentQuizFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentQuizPayload>[]
          }
          create: {
            args: Prisma.StudentQuizCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentQuizPayload>
          }
          createMany: {
            args: Prisma.StudentQuizCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.StudentQuizDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentQuizPayload>
          }
          update: {
            args: Prisma.StudentQuizUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentQuizPayload>
          }
          deleteMany: {
            args: Prisma.StudentQuizDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StudentQuizUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.StudentQuizUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentQuizPayload>
          }
          aggregate: {
            args: Prisma.StudentQuizAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStudentQuiz>
          }
          groupBy: {
            args: Prisma.StudentQuizGroupByArgs<ExtArgs>
            result: $Utils.Optional<StudentQuizGroupByOutputType>[]
          }
          count: {
            args: Prisma.StudentQuizCountArgs<ExtArgs>
            result: $Utils.Optional<StudentQuizCountAggregateOutputType> | number
          }
        }
      }
      StudentQuizAnswer: {
        payload: Prisma.$StudentQuizAnswerPayload<ExtArgs>
        fields: Prisma.StudentQuizAnswerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StudentQuizAnswerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentQuizAnswerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StudentQuizAnswerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentQuizAnswerPayload>
          }
          findFirst: {
            args: Prisma.StudentQuizAnswerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentQuizAnswerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StudentQuizAnswerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentQuizAnswerPayload>
          }
          findMany: {
            args: Prisma.StudentQuizAnswerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentQuizAnswerPayload>[]
          }
          create: {
            args: Prisma.StudentQuizAnswerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentQuizAnswerPayload>
          }
          createMany: {
            args: Prisma.StudentQuizAnswerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.StudentQuizAnswerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentQuizAnswerPayload>
          }
          update: {
            args: Prisma.StudentQuizAnswerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentQuizAnswerPayload>
          }
          deleteMany: {
            args: Prisma.StudentQuizAnswerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StudentQuizAnswerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.StudentQuizAnswerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentQuizAnswerPayload>
          }
          aggregate: {
            args: Prisma.StudentQuizAnswerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStudentQuizAnswer>
          }
          groupBy: {
            args: Prisma.StudentQuizAnswerGroupByArgs<ExtArgs>
            result: $Utils.Optional<StudentQuizAnswerGroupByOutputType>[]
          }
          count: {
            args: Prisma.StudentQuizAnswerCountArgs<ExtArgs>
            result: $Utils.Optional<StudentQuizAnswerCountAggregateOutputType> | number
          }
        }
      }
      StudentProgress: {
        payload: Prisma.$StudentProgressPayload<ExtArgs>
        fields: Prisma.StudentProgressFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StudentProgressFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentProgressPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StudentProgressFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentProgressPayload>
          }
          findFirst: {
            args: Prisma.StudentProgressFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentProgressPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StudentProgressFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentProgressPayload>
          }
          findMany: {
            args: Prisma.StudentProgressFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentProgressPayload>[]
          }
          create: {
            args: Prisma.StudentProgressCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentProgressPayload>
          }
          createMany: {
            args: Prisma.StudentProgressCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.StudentProgressDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentProgressPayload>
          }
          update: {
            args: Prisma.StudentProgressUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentProgressPayload>
          }
          deleteMany: {
            args: Prisma.StudentProgressDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StudentProgressUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.StudentProgressUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentProgressPayload>
          }
          aggregate: {
            args: Prisma.StudentProgressAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStudentProgress>
          }
          groupBy: {
            args: Prisma.StudentProgressGroupByArgs<ExtArgs>
            result: $Utils.Optional<StudentProgressGroupByOutputType>[]
          }
          count: {
            args: Prisma.StudentProgressCountArgs<ExtArgs>
            result: $Utils.Optional<StudentProgressCountAggregateOutputType> | number
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
    admin?: AdminOmit
    teacher?: TeacherOmit
    student?: StudentOmit
    course?: CourseOmit
    lesson?: LessonOmit
    quiz?: QuizOmit
    question?: QuestionOmit
    questionOption?: QuestionOptionOmit
    questionAnswer?: QuestionAnswerOmit
    studentQuiz?: StudentQuizOmit
    studentQuizAnswer?: StudentQuizAnswerOmit
    studentProgress?: StudentProgressOmit
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
   * Count Type TeacherCountOutputType
   */

  export type TeacherCountOutputType = {
    courses: number
  }

  export type TeacherCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    courses?: boolean | TeacherCountOutputTypeCountCoursesArgs
  }

  // Custom InputTypes
  /**
   * TeacherCountOutputType without action
   */
  export type TeacherCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherCountOutputType
     */
    select?: TeacherCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TeacherCountOutputType without action
   */
  export type TeacherCountOutputTypeCountCoursesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseWhereInput
  }


  /**
   * Count Type StudentCountOutputType
   */

  export type StudentCountOutputType = {
    progress: number
    studentQuizzes: number
  }

  export type StudentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    progress?: boolean | StudentCountOutputTypeCountProgressArgs
    studentQuizzes?: boolean | StudentCountOutputTypeCountStudentQuizzesArgs
  }

  // Custom InputTypes
  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentCountOutputType
     */
    select?: StudentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeCountProgressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentProgressWhereInput
  }

  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeCountStudentQuizzesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentQuizWhereInput
  }


  /**
   * Count Type CourseCountOutputType
   */

  export type CourseCountOutputType = {
    lessons: number
  }

  export type CourseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lessons?: boolean | CourseCountOutputTypeCountLessonsArgs
  }

  // Custom InputTypes
  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseCountOutputType
     */
    select?: CourseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeCountLessonsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LessonWhereInput
  }


  /**
   * Count Type LessonCountOutputType
   */

  export type LessonCountOutputType = {
    StudentProgress: number
  }

  export type LessonCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    StudentProgress?: boolean | LessonCountOutputTypeCountStudentProgressArgs
  }

  // Custom InputTypes
  /**
   * LessonCountOutputType without action
   */
  export type LessonCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonCountOutputType
     */
    select?: LessonCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LessonCountOutputType without action
   */
  export type LessonCountOutputTypeCountStudentProgressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentProgressWhereInput
  }


  /**
   * Count Type QuizCountOutputType
   */

  export type QuizCountOutputType = {
    questions: number
    StudentQuiz: number
  }

  export type QuizCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    questions?: boolean | QuizCountOutputTypeCountQuestionsArgs
    StudentQuiz?: boolean | QuizCountOutputTypeCountStudentQuizArgs
  }

  // Custom InputTypes
  /**
   * QuizCountOutputType without action
   */
  export type QuizCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizCountOutputType
     */
    select?: QuizCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * QuizCountOutputType without action
   */
  export type QuizCountOutputTypeCountQuestionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionWhereInput
  }

  /**
   * QuizCountOutputType without action
   */
  export type QuizCountOutputTypeCountStudentQuizArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentQuizWhereInput
  }


  /**
   * Count Type QuestionCountOutputType
   */

  export type QuestionCountOutputType = {
    questionOptions: number
    questionAnswer: number
    StudentQuizAnswer: number
  }

  export type QuestionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    questionOptions?: boolean | QuestionCountOutputTypeCountQuestionOptionsArgs
    questionAnswer?: boolean | QuestionCountOutputTypeCountQuestionAnswerArgs
    StudentQuizAnswer?: boolean | QuestionCountOutputTypeCountStudentQuizAnswerArgs
  }

  // Custom InputTypes
  /**
   * QuestionCountOutputType without action
   */
  export type QuestionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionCountOutputType
     */
    select?: QuestionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * QuestionCountOutputType without action
   */
  export type QuestionCountOutputTypeCountQuestionOptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionOptionWhereInput
  }

  /**
   * QuestionCountOutputType without action
   */
  export type QuestionCountOutputTypeCountQuestionAnswerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionAnswerWhereInput
  }

  /**
   * QuestionCountOutputType without action
   */
  export type QuestionCountOutputTypeCountStudentQuizAnswerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentQuizAnswerWhereInput
  }


  /**
   * Count Type QuestionOptionCountOutputType
   */

  export type QuestionOptionCountOutputType = {
    questionAnswer: number
    studentQuizAnswers: number
  }

  export type QuestionOptionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    questionAnswer?: boolean | QuestionOptionCountOutputTypeCountQuestionAnswerArgs
    studentQuizAnswers?: boolean | QuestionOptionCountOutputTypeCountStudentQuizAnswersArgs
  }

  // Custom InputTypes
  /**
   * QuestionOptionCountOutputType without action
   */
  export type QuestionOptionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionOptionCountOutputType
     */
    select?: QuestionOptionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * QuestionOptionCountOutputType without action
   */
  export type QuestionOptionCountOutputTypeCountQuestionAnswerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionAnswerWhereInput
  }

  /**
   * QuestionOptionCountOutputType without action
   */
  export type QuestionOptionCountOutputTypeCountStudentQuizAnswersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentQuizAnswerWhereInput
  }


  /**
   * Count Type StudentQuizCountOutputType
   */

  export type StudentQuizCountOutputType = {
    studentQuizAnswers: number
  }

  export type StudentQuizCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    studentQuizAnswers?: boolean | StudentQuizCountOutputTypeCountStudentQuizAnswersArgs
  }

  // Custom InputTypes
  /**
   * StudentQuizCountOutputType without action
   */
  export type StudentQuizCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentQuizCountOutputType
     */
    select?: StudentQuizCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StudentQuizCountOutputType without action
   */
  export type StudentQuizCountOutputTypeCountStudentQuizAnswersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentQuizAnswerWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Admin
   */

  export type AggregateAdmin = {
    _count: AdminCountAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  export type AdminMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    passcode: string | null
    createdAt: Date | null
  }

  export type AdminMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    passcode: string | null
    createdAt: Date | null
  }

  export type AdminCountAggregateOutputType = {
    id: number
    name: number
    email: number
    passcode: number
    createdAt: number
    _all: number
  }


  export type AdminMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    passcode?: true
    createdAt?: true
  }

  export type AdminMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    passcode?: true
    createdAt?: true
  }

  export type AdminCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    passcode?: true
    createdAt?: true
    _all?: true
  }

  export type AdminAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admin to aggregate.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Admins
    **/
    _count?: true | AdminCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminMaxAggregateInputType
  }

  export type GetAdminAggregateType<T extends AdminAggregateArgs> = {
        [P in keyof T & keyof AggregateAdmin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmin[P]>
      : GetScalarType<T[P], AggregateAdmin[P]>
  }




  export type AdminGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminWhereInput
    orderBy?: AdminOrderByWithAggregationInput | AdminOrderByWithAggregationInput[]
    by: AdminScalarFieldEnum[] | AdminScalarFieldEnum
    having?: AdminScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminCountAggregateInputType | true
    _min?: AdminMinAggregateInputType
    _max?: AdminMaxAggregateInputType
  }

  export type AdminGroupByOutputType = {
    id: string
    name: string
    email: string
    passcode: string
    createdAt: Date
    _count: AdminCountAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  type GetAdminGroupByPayload<T extends AdminGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminGroupByOutputType[P]>
            : GetScalarType<T[P], AdminGroupByOutputType[P]>
        }
      >
    >


  export type AdminSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    passcode?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["admin"]>



  export type AdminSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    passcode?: boolean
    createdAt?: boolean
  }

  export type AdminOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "passcode" | "createdAt", ExtArgs["result"]["admin"]>

  export type $AdminPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Admin"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      passcode: string
      createdAt: Date
    }, ExtArgs["result"]["admin"]>
    composites: {}
  }

  type AdminGetPayload<S extends boolean | null | undefined | AdminDefaultArgs> = $Result.GetResult<Prisma.$AdminPayload, S>

  type AdminCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdminFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdminCountAggregateInputType | true
    }

  export interface AdminDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Admin'], meta: { name: 'Admin' } }
    /**
     * Find zero or one Admin that matches the filter.
     * @param {AdminFindUniqueArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdminFindUniqueArgs>(args: SelectSubset<T, AdminFindUniqueArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Admin that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdminFindUniqueOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdminFindUniqueOrThrowArgs>(args: SelectSubset<T, AdminFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdminFindFirstArgs>(args?: SelectSubset<T, AdminFindFirstArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdminFindFirstOrThrowArgs>(args?: SelectSubset<T, AdminFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Admins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Admins
     * const admins = await prisma.admin.findMany()
     * 
     * // Get first 10 Admins
     * const admins = await prisma.admin.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminWithIdOnly = await prisma.admin.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdminFindManyArgs>(args?: SelectSubset<T, AdminFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Admin.
     * @param {AdminCreateArgs} args - Arguments to create a Admin.
     * @example
     * // Create one Admin
     * const Admin = await prisma.admin.create({
     *   data: {
     *     // ... data to create a Admin
     *   }
     * })
     * 
     */
    create<T extends AdminCreateArgs>(args: SelectSubset<T, AdminCreateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Admins.
     * @param {AdminCreateManyArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdminCreateManyArgs>(args?: SelectSubset<T, AdminCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Admin.
     * @param {AdminDeleteArgs} args - Arguments to delete one Admin.
     * @example
     * // Delete one Admin
     * const Admin = await prisma.admin.delete({
     *   where: {
     *     // ... filter to delete one Admin
     *   }
     * })
     * 
     */
    delete<T extends AdminDeleteArgs>(args: SelectSubset<T, AdminDeleteArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Admin.
     * @param {AdminUpdateArgs} args - Arguments to update one Admin.
     * @example
     * // Update one Admin
     * const admin = await prisma.admin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdminUpdateArgs>(args: SelectSubset<T, AdminUpdateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Admins.
     * @param {AdminDeleteManyArgs} args - Arguments to filter Admins to delete.
     * @example
     * // Delete a few Admins
     * const { count } = await prisma.admin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdminDeleteManyArgs>(args?: SelectSubset<T, AdminDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdminUpdateManyArgs>(args: SelectSubset<T, AdminUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Admin.
     * @param {AdminUpsertArgs} args - Arguments to update or create a Admin.
     * @example
     * // Update or create a Admin
     * const admin = await prisma.admin.upsert({
     *   create: {
     *     // ... data to create a Admin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Admin we want to update
     *   }
     * })
     */
    upsert<T extends AdminUpsertArgs>(args: SelectSubset<T, AdminUpsertArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminCountArgs} args - Arguments to filter Admins to count.
     * @example
     * // Count the number of Admins
     * const count = await prisma.admin.count({
     *   where: {
     *     // ... the filter for the Admins we want to count
     *   }
     * })
    **/
    count<T extends AdminCountArgs>(
      args?: Subset<T, AdminCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AdminAggregateArgs>(args: Subset<T, AdminAggregateArgs>): Prisma.PrismaPromise<GetAdminAggregateType<T>>

    /**
     * Group by Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminGroupByArgs} args - Group by arguments.
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
      T extends AdminGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminGroupByArgs['orderBy'] }
        : { orderBy?: AdminGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AdminGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Admin model
   */
  readonly fields: AdminFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Admin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdminClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Admin model
   */
  interface AdminFieldRefs {
    readonly id: FieldRef<"Admin", 'String'>
    readonly name: FieldRef<"Admin", 'String'>
    readonly email: FieldRef<"Admin", 'String'>
    readonly passcode: FieldRef<"Admin", 'String'>
    readonly createdAt: FieldRef<"Admin", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Admin findUnique
   */
  export type AdminFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findUniqueOrThrow
   */
  export type AdminFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findFirst
   */
  export type AdminFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findFirstOrThrow
   */
  export type AdminFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findMany
   */
  export type AdminFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter, which Admins to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin create
   */
  export type AdminCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The data needed to create a Admin.
     */
    data: XOR<AdminCreateInput, AdminUncheckedCreateInput>
  }

  /**
   * Admin createMany
   */
  export type AdminCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Admins.
     */
    data: AdminCreateManyInput | AdminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Admin update
   */
  export type AdminUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The data needed to update a Admin.
     */
    data: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
    /**
     * Choose, which Admin to update.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin updateMany
   */
  export type AdminUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Admins.
     */
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyInput>
    /**
     * Filter which Admins to update
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to update.
     */
    limit?: number
  }

  /**
   * Admin upsert
   */
  export type AdminUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The filter to search for the Admin to update in case it exists.
     */
    where: AdminWhereUniqueInput
    /**
     * In case the Admin found by the `where` argument doesn't exist, create a new Admin with this data.
     */
    create: XOR<AdminCreateInput, AdminUncheckedCreateInput>
    /**
     * In case the Admin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
  }

  /**
   * Admin delete
   */
  export type AdminDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter which Admin to delete.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin deleteMany
   */
  export type AdminDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admins to delete
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to delete.
     */
    limit?: number
  }

  /**
   * Admin without action
   */
  export type AdminDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
  }


  /**
   * Model Teacher
   */

  export type AggregateTeacher = {
    _count: TeacherCountAggregateOutputType | null
    _min: TeacherMinAggregateOutputType | null
    _max: TeacherMaxAggregateOutputType | null
  }

  export type TeacherMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    passcode: string | null
    isActive: boolean | null
    createdAt: Date | null
  }

  export type TeacherMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    passcode: string | null
    isActive: boolean | null
    createdAt: Date | null
  }

  export type TeacherCountAggregateOutputType = {
    id: number
    name: number
    email: number
    passcode: number
    isActive: number
    createdAt: number
    _all: number
  }


  export type TeacherMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    passcode?: true
    isActive?: true
    createdAt?: true
  }

  export type TeacherMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    passcode?: true
    isActive?: true
    createdAt?: true
  }

  export type TeacherCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    passcode?: true
    isActive?: true
    createdAt?: true
    _all?: true
  }

  export type TeacherAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Teacher to aggregate.
     */
    where?: TeacherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teachers to fetch.
     */
    orderBy?: TeacherOrderByWithRelationInput | TeacherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TeacherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teachers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teachers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Teachers
    **/
    _count?: true | TeacherCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TeacherMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TeacherMaxAggregateInputType
  }

  export type GetTeacherAggregateType<T extends TeacherAggregateArgs> = {
        [P in keyof T & keyof AggregateTeacher]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeacher[P]>
      : GetScalarType<T[P], AggregateTeacher[P]>
  }




  export type TeacherGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeacherWhereInput
    orderBy?: TeacherOrderByWithAggregationInput | TeacherOrderByWithAggregationInput[]
    by: TeacherScalarFieldEnum[] | TeacherScalarFieldEnum
    having?: TeacherScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TeacherCountAggregateInputType | true
    _min?: TeacherMinAggregateInputType
    _max?: TeacherMaxAggregateInputType
  }

  export type TeacherGroupByOutputType = {
    id: string
    name: string
    email: string
    passcode: string
    isActive: boolean
    createdAt: Date
    _count: TeacherCountAggregateOutputType | null
    _min: TeacherMinAggregateOutputType | null
    _max: TeacherMaxAggregateOutputType | null
  }

  type GetTeacherGroupByPayload<T extends TeacherGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeacherGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TeacherGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TeacherGroupByOutputType[P]>
            : GetScalarType<T[P], TeacherGroupByOutputType[P]>
        }
      >
    >


  export type TeacherSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    passcode?: boolean
    isActive?: boolean
    createdAt?: boolean
    courses?: boolean | Teacher$coursesArgs<ExtArgs>
    _count?: boolean | TeacherCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teacher"]>



  export type TeacherSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    passcode?: boolean
    isActive?: boolean
    createdAt?: boolean
  }

  export type TeacherOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "passcode" | "isActive" | "createdAt", ExtArgs["result"]["teacher"]>
  export type TeacherInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    courses?: boolean | Teacher$coursesArgs<ExtArgs>
    _count?: boolean | TeacherCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $TeacherPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Teacher"
    objects: {
      courses: Prisma.$CoursePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      passcode: string
      isActive: boolean
      createdAt: Date
    }, ExtArgs["result"]["teacher"]>
    composites: {}
  }

  type TeacherGetPayload<S extends boolean | null | undefined | TeacherDefaultArgs> = $Result.GetResult<Prisma.$TeacherPayload, S>

  type TeacherCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TeacherFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TeacherCountAggregateInputType | true
    }

  export interface TeacherDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Teacher'], meta: { name: 'Teacher' } }
    /**
     * Find zero or one Teacher that matches the filter.
     * @param {TeacherFindUniqueArgs} args - Arguments to find a Teacher
     * @example
     * // Get one Teacher
     * const teacher = await prisma.teacher.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TeacherFindUniqueArgs>(args: SelectSubset<T, TeacherFindUniqueArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Teacher that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TeacherFindUniqueOrThrowArgs} args - Arguments to find a Teacher
     * @example
     * // Get one Teacher
     * const teacher = await prisma.teacher.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TeacherFindUniqueOrThrowArgs>(args: SelectSubset<T, TeacherFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Teacher that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherFindFirstArgs} args - Arguments to find a Teacher
     * @example
     * // Get one Teacher
     * const teacher = await prisma.teacher.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TeacherFindFirstArgs>(args?: SelectSubset<T, TeacherFindFirstArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Teacher that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherFindFirstOrThrowArgs} args - Arguments to find a Teacher
     * @example
     * // Get one Teacher
     * const teacher = await prisma.teacher.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TeacherFindFirstOrThrowArgs>(args?: SelectSubset<T, TeacherFindFirstOrThrowArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Teachers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Teachers
     * const teachers = await prisma.teacher.findMany()
     * 
     * // Get first 10 Teachers
     * const teachers = await prisma.teacher.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const teacherWithIdOnly = await prisma.teacher.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TeacherFindManyArgs>(args?: SelectSubset<T, TeacherFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Teacher.
     * @param {TeacherCreateArgs} args - Arguments to create a Teacher.
     * @example
     * // Create one Teacher
     * const Teacher = await prisma.teacher.create({
     *   data: {
     *     // ... data to create a Teacher
     *   }
     * })
     * 
     */
    create<T extends TeacherCreateArgs>(args: SelectSubset<T, TeacherCreateArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Teachers.
     * @param {TeacherCreateManyArgs} args - Arguments to create many Teachers.
     * @example
     * // Create many Teachers
     * const teacher = await prisma.teacher.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TeacherCreateManyArgs>(args?: SelectSubset<T, TeacherCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Teacher.
     * @param {TeacherDeleteArgs} args - Arguments to delete one Teacher.
     * @example
     * // Delete one Teacher
     * const Teacher = await prisma.teacher.delete({
     *   where: {
     *     // ... filter to delete one Teacher
     *   }
     * })
     * 
     */
    delete<T extends TeacherDeleteArgs>(args: SelectSubset<T, TeacherDeleteArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Teacher.
     * @param {TeacherUpdateArgs} args - Arguments to update one Teacher.
     * @example
     * // Update one Teacher
     * const teacher = await prisma.teacher.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TeacherUpdateArgs>(args: SelectSubset<T, TeacherUpdateArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Teachers.
     * @param {TeacherDeleteManyArgs} args - Arguments to filter Teachers to delete.
     * @example
     * // Delete a few Teachers
     * const { count } = await prisma.teacher.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TeacherDeleteManyArgs>(args?: SelectSubset<T, TeacherDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Teachers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Teachers
     * const teacher = await prisma.teacher.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TeacherUpdateManyArgs>(args: SelectSubset<T, TeacherUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Teacher.
     * @param {TeacherUpsertArgs} args - Arguments to update or create a Teacher.
     * @example
     * // Update or create a Teacher
     * const teacher = await prisma.teacher.upsert({
     *   create: {
     *     // ... data to create a Teacher
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Teacher we want to update
     *   }
     * })
     */
    upsert<T extends TeacherUpsertArgs>(args: SelectSubset<T, TeacherUpsertArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Teachers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherCountArgs} args - Arguments to filter Teachers to count.
     * @example
     * // Count the number of Teachers
     * const count = await prisma.teacher.count({
     *   where: {
     *     // ... the filter for the Teachers we want to count
     *   }
     * })
    **/
    count<T extends TeacherCountArgs>(
      args?: Subset<T, TeacherCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeacherCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Teacher.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TeacherAggregateArgs>(args: Subset<T, TeacherAggregateArgs>): Prisma.PrismaPromise<GetTeacherAggregateType<T>>

    /**
     * Group by Teacher.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherGroupByArgs} args - Group by arguments.
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
      T extends TeacherGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TeacherGroupByArgs['orderBy'] }
        : { orderBy?: TeacherGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TeacherGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeacherGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Teacher model
   */
  readonly fields: TeacherFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Teacher.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TeacherClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    courses<T extends Teacher$coursesArgs<ExtArgs> = {}>(args?: Subset<T, Teacher$coursesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Teacher model
   */
  interface TeacherFieldRefs {
    readonly id: FieldRef<"Teacher", 'String'>
    readonly name: FieldRef<"Teacher", 'String'>
    readonly email: FieldRef<"Teacher", 'String'>
    readonly passcode: FieldRef<"Teacher", 'String'>
    readonly isActive: FieldRef<"Teacher", 'Boolean'>
    readonly createdAt: FieldRef<"Teacher", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Teacher findUnique
   */
  export type TeacherFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * Filter, which Teacher to fetch.
     */
    where: TeacherWhereUniqueInput
  }

  /**
   * Teacher findUniqueOrThrow
   */
  export type TeacherFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * Filter, which Teacher to fetch.
     */
    where: TeacherWhereUniqueInput
  }

  /**
   * Teacher findFirst
   */
  export type TeacherFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * Filter, which Teacher to fetch.
     */
    where?: TeacherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teachers to fetch.
     */
    orderBy?: TeacherOrderByWithRelationInput | TeacherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Teachers.
     */
    cursor?: TeacherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teachers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teachers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Teachers.
     */
    distinct?: TeacherScalarFieldEnum | TeacherScalarFieldEnum[]
  }

  /**
   * Teacher findFirstOrThrow
   */
  export type TeacherFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * Filter, which Teacher to fetch.
     */
    where?: TeacherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teachers to fetch.
     */
    orderBy?: TeacherOrderByWithRelationInput | TeacherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Teachers.
     */
    cursor?: TeacherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teachers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teachers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Teachers.
     */
    distinct?: TeacherScalarFieldEnum | TeacherScalarFieldEnum[]
  }

  /**
   * Teacher findMany
   */
  export type TeacherFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * Filter, which Teachers to fetch.
     */
    where?: TeacherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teachers to fetch.
     */
    orderBy?: TeacherOrderByWithRelationInput | TeacherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Teachers.
     */
    cursor?: TeacherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teachers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teachers.
     */
    skip?: number
    distinct?: TeacherScalarFieldEnum | TeacherScalarFieldEnum[]
  }

  /**
   * Teacher create
   */
  export type TeacherCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * The data needed to create a Teacher.
     */
    data: XOR<TeacherCreateInput, TeacherUncheckedCreateInput>
  }

  /**
   * Teacher createMany
   */
  export type TeacherCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Teachers.
     */
    data: TeacherCreateManyInput | TeacherCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Teacher update
   */
  export type TeacherUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * The data needed to update a Teacher.
     */
    data: XOR<TeacherUpdateInput, TeacherUncheckedUpdateInput>
    /**
     * Choose, which Teacher to update.
     */
    where: TeacherWhereUniqueInput
  }

  /**
   * Teacher updateMany
   */
  export type TeacherUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Teachers.
     */
    data: XOR<TeacherUpdateManyMutationInput, TeacherUncheckedUpdateManyInput>
    /**
     * Filter which Teachers to update
     */
    where?: TeacherWhereInput
    /**
     * Limit how many Teachers to update.
     */
    limit?: number
  }

  /**
   * Teacher upsert
   */
  export type TeacherUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * The filter to search for the Teacher to update in case it exists.
     */
    where: TeacherWhereUniqueInput
    /**
     * In case the Teacher found by the `where` argument doesn't exist, create a new Teacher with this data.
     */
    create: XOR<TeacherCreateInput, TeacherUncheckedCreateInput>
    /**
     * In case the Teacher was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TeacherUpdateInput, TeacherUncheckedUpdateInput>
  }

  /**
   * Teacher delete
   */
  export type TeacherDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * Filter which Teacher to delete.
     */
    where: TeacherWhereUniqueInput
  }

  /**
   * Teacher deleteMany
   */
  export type TeacherDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Teachers to delete
     */
    where?: TeacherWhereInput
    /**
     * Limit how many Teachers to delete.
     */
    limit?: number
  }

  /**
   * Teacher.courses
   */
  export type Teacher$coursesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    where?: CourseWhereInput
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    cursor?: CourseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Teacher without action
   */
  export type TeacherDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
  }


  /**
   * Model Student
   */

  export type AggregateStudent = {
    _count: StudentCountAggregateOutputType | null
    _min: StudentMinAggregateOutputType | null
    _max: StudentMaxAggregateOutputType | null
  }

  export type StudentMinAggregateOutputType = {
    id: string | null
    name: string | null
    passcode: string | null
    phoneNo: string | null
    status: boolean | null
    startDate: Date | null
    chatId: string | null
    createdAt: Date | null
  }

  export type StudentMaxAggregateOutputType = {
    id: string | null
    name: string | null
    passcode: string | null
    phoneNo: string | null
    status: boolean | null
    startDate: Date | null
    chatId: string | null
    createdAt: Date | null
  }

  export type StudentCountAggregateOutputType = {
    id: number
    name: number
    passcode: number
    phoneNo: number
    status: number
    startDate: number
    chatId: number
    createdAt: number
    _all: number
  }


  export type StudentMinAggregateInputType = {
    id?: true
    name?: true
    passcode?: true
    phoneNo?: true
    status?: true
    startDate?: true
    chatId?: true
    createdAt?: true
  }

  export type StudentMaxAggregateInputType = {
    id?: true
    name?: true
    passcode?: true
    phoneNo?: true
    status?: true
    startDate?: true
    chatId?: true
    createdAt?: true
  }

  export type StudentCountAggregateInputType = {
    id?: true
    name?: true
    passcode?: true
    phoneNo?: true
    status?: true
    startDate?: true
    chatId?: true
    createdAt?: true
    _all?: true
  }

  export type StudentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Student to aggregate.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Students
    **/
    _count?: true | StudentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudentMaxAggregateInputType
  }

  export type GetStudentAggregateType<T extends StudentAggregateArgs> = {
        [P in keyof T & keyof AggregateStudent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudent[P]>
      : GetScalarType<T[P], AggregateStudent[P]>
  }




  export type StudentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentWhereInput
    orderBy?: StudentOrderByWithAggregationInput | StudentOrderByWithAggregationInput[]
    by: StudentScalarFieldEnum[] | StudentScalarFieldEnum
    having?: StudentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudentCountAggregateInputType | true
    _min?: StudentMinAggregateInputType
    _max?: StudentMaxAggregateInputType
  }

  export type StudentGroupByOutputType = {
    id: string
    name: string
    passcode: string
    phoneNo: string
    status: boolean
    startDate: Date
    chatId: string
    createdAt: Date
    _count: StudentCountAggregateOutputType | null
    _min: StudentMinAggregateOutputType | null
    _max: StudentMaxAggregateOutputType | null
  }

  type GetStudentGroupByPayload<T extends StudentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudentGroupByOutputType[P]>
            : GetScalarType<T[P], StudentGroupByOutputType[P]>
        }
      >
    >


  export type StudentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    passcode?: boolean
    phoneNo?: boolean
    status?: boolean
    startDate?: boolean
    chatId?: boolean
    createdAt?: boolean
    progress?: boolean | Student$progressArgs<ExtArgs>
    studentQuizzes?: boolean | Student$studentQuizzesArgs<ExtArgs>
    _count?: boolean | StudentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["student"]>



  export type StudentSelectScalar = {
    id?: boolean
    name?: boolean
    passcode?: boolean
    phoneNo?: boolean
    status?: boolean
    startDate?: boolean
    chatId?: boolean
    createdAt?: boolean
  }

  export type StudentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "passcode" | "phoneNo" | "status" | "startDate" | "chatId" | "createdAt", ExtArgs["result"]["student"]>
  export type StudentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    progress?: boolean | Student$progressArgs<ExtArgs>
    studentQuizzes?: boolean | Student$studentQuizzesArgs<ExtArgs>
    _count?: boolean | StudentCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $StudentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Student"
    objects: {
      progress: Prisma.$StudentProgressPayload<ExtArgs>[]
      studentQuizzes: Prisma.$StudentQuizPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      passcode: string
      phoneNo: string
      status: boolean
      startDate: Date
      chatId: string
      createdAt: Date
    }, ExtArgs["result"]["student"]>
    composites: {}
  }

  type StudentGetPayload<S extends boolean | null | undefined | StudentDefaultArgs> = $Result.GetResult<Prisma.$StudentPayload, S>

  type StudentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StudentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StudentCountAggregateInputType | true
    }

  export interface StudentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Student'], meta: { name: 'Student' } }
    /**
     * Find zero or one Student that matches the filter.
     * @param {StudentFindUniqueArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StudentFindUniqueArgs>(args: SelectSubset<T, StudentFindUniqueArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Student that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StudentFindUniqueOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StudentFindUniqueOrThrowArgs>(args: SelectSubset<T, StudentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Student that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindFirstArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StudentFindFirstArgs>(args?: SelectSubset<T, StudentFindFirstArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Student that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindFirstOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StudentFindFirstOrThrowArgs>(args?: SelectSubset<T, StudentFindFirstOrThrowArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Students that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Students
     * const students = await prisma.student.findMany()
     * 
     * // Get first 10 Students
     * const students = await prisma.student.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const studentWithIdOnly = await prisma.student.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StudentFindManyArgs>(args?: SelectSubset<T, StudentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Student.
     * @param {StudentCreateArgs} args - Arguments to create a Student.
     * @example
     * // Create one Student
     * const Student = await prisma.student.create({
     *   data: {
     *     // ... data to create a Student
     *   }
     * })
     * 
     */
    create<T extends StudentCreateArgs>(args: SelectSubset<T, StudentCreateArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Students.
     * @param {StudentCreateManyArgs} args - Arguments to create many Students.
     * @example
     * // Create many Students
     * const student = await prisma.student.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StudentCreateManyArgs>(args?: SelectSubset<T, StudentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Student.
     * @param {StudentDeleteArgs} args - Arguments to delete one Student.
     * @example
     * // Delete one Student
     * const Student = await prisma.student.delete({
     *   where: {
     *     // ... filter to delete one Student
     *   }
     * })
     * 
     */
    delete<T extends StudentDeleteArgs>(args: SelectSubset<T, StudentDeleteArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Student.
     * @param {StudentUpdateArgs} args - Arguments to update one Student.
     * @example
     * // Update one Student
     * const student = await prisma.student.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StudentUpdateArgs>(args: SelectSubset<T, StudentUpdateArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Students.
     * @param {StudentDeleteManyArgs} args - Arguments to filter Students to delete.
     * @example
     * // Delete a few Students
     * const { count } = await prisma.student.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StudentDeleteManyArgs>(args?: SelectSubset<T, StudentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Students
     * const student = await prisma.student.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StudentUpdateManyArgs>(args: SelectSubset<T, StudentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Student.
     * @param {StudentUpsertArgs} args - Arguments to update or create a Student.
     * @example
     * // Update or create a Student
     * const student = await prisma.student.upsert({
     *   create: {
     *     // ... data to create a Student
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Student we want to update
     *   }
     * })
     */
    upsert<T extends StudentUpsertArgs>(args: SelectSubset<T, StudentUpsertArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentCountArgs} args - Arguments to filter Students to count.
     * @example
     * // Count the number of Students
     * const count = await prisma.student.count({
     *   where: {
     *     // ... the filter for the Students we want to count
     *   }
     * })
    **/
    count<T extends StudentCountArgs>(
      args?: Subset<T, StudentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StudentAggregateArgs>(args: Subset<T, StudentAggregateArgs>): Prisma.PrismaPromise<GetStudentAggregateType<T>>

    /**
     * Group by Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentGroupByArgs} args - Group by arguments.
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
      T extends StudentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StudentGroupByArgs['orderBy'] }
        : { orderBy?: StudentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StudentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Student model
   */
  readonly fields: StudentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Student.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StudentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    progress<T extends Student$progressArgs<ExtArgs> = {}>(args?: Subset<T, Student$progressArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentProgressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    studentQuizzes<T extends Student$studentQuizzesArgs<ExtArgs> = {}>(args?: Subset<T, Student$studentQuizzesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentQuizPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Student model
   */
  interface StudentFieldRefs {
    readonly id: FieldRef<"Student", 'String'>
    readonly name: FieldRef<"Student", 'String'>
    readonly passcode: FieldRef<"Student", 'String'>
    readonly phoneNo: FieldRef<"Student", 'String'>
    readonly status: FieldRef<"Student", 'Boolean'>
    readonly startDate: FieldRef<"Student", 'DateTime'>
    readonly chatId: FieldRef<"Student", 'String'>
    readonly createdAt: FieldRef<"Student", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Student findUnique
   */
  export type StudentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student findUniqueOrThrow
   */
  export type StudentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student findFirst
   */
  export type StudentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Students.
     */
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student findFirstOrThrow
   */
  export type StudentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Students.
     */
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student findMany
   */
  export type StudentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Students to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student create
   */
  export type StudentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The data needed to create a Student.
     */
    data: XOR<StudentCreateInput, StudentUncheckedCreateInput>
  }

  /**
   * Student createMany
   */
  export type StudentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Students.
     */
    data: StudentCreateManyInput | StudentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Student update
   */
  export type StudentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The data needed to update a Student.
     */
    data: XOR<StudentUpdateInput, StudentUncheckedUpdateInput>
    /**
     * Choose, which Student to update.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student updateMany
   */
  export type StudentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Students.
     */
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyInput>
    /**
     * Filter which Students to update
     */
    where?: StudentWhereInput
    /**
     * Limit how many Students to update.
     */
    limit?: number
  }

  /**
   * Student upsert
   */
  export type StudentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The filter to search for the Student to update in case it exists.
     */
    where: StudentWhereUniqueInput
    /**
     * In case the Student found by the `where` argument doesn't exist, create a new Student with this data.
     */
    create: XOR<StudentCreateInput, StudentUncheckedCreateInput>
    /**
     * In case the Student was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StudentUpdateInput, StudentUncheckedUpdateInput>
  }

  /**
   * Student delete
   */
  export type StudentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter which Student to delete.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student deleteMany
   */
  export type StudentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Students to delete
     */
    where?: StudentWhereInput
    /**
     * Limit how many Students to delete.
     */
    limit?: number
  }

  /**
   * Student.progress
   */
  export type Student$progressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentProgress
     */
    select?: StudentProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentProgress
     */
    omit?: StudentProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentProgressInclude<ExtArgs> | null
    where?: StudentProgressWhereInput
    orderBy?: StudentProgressOrderByWithRelationInput | StudentProgressOrderByWithRelationInput[]
    cursor?: StudentProgressWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StudentProgressScalarFieldEnum | StudentProgressScalarFieldEnum[]
  }

  /**
   * Student.studentQuizzes
   */
  export type Student$studentQuizzesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentQuiz
     */
    select?: StudentQuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentQuiz
     */
    omit?: StudentQuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentQuizInclude<ExtArgs> | null
    where?: StudentQuizWhereInput
    orderBy?: StudentQuizOrderByWithRelationInput | StudentQuizOrderByWithRelationInput[]
    cursor?: StudentQuizWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StudentQuizScalarFieldEnum | StudentQuizScalarFieldEnum[]
  }

  /**
   * Student without action
   */
  export type StudentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
  }


  /**
   * Model Course
   */

  export type AggregateCourse = {
    _count: CourseCountAggregateOutputType | null
    _min: CourseMinAggregateOutputType | null
    _max: CourseMaxAggregateOutputType | null
  }

  export type CourseMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    teacherId: string | null
    createdAt: Date | null
  }

  export type CourseMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    teacherId: string | null
    createdAt: Date | null
  }

  export type CourseCountAggregateOutputType = {
    id: number
    title: number
    description: number
    teacherId: number
    createdAt: number
    _all: number
  }


  export type CourseMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    teacherId?: true
    createdAt?: true
  }

  export type CourseMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    teacherId?: true
    createdAt?: true
  }

  export type CourseCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    teacherId?: true
    createdAt?: true
    _all?: true
  }

  export type CourseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Course to aggregate.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Courses
    **/
    _count?: true | CourseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CourseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CourseMaxAggregateInputType
  }

  export type GetCourseAggregateType<T extends CourseAggregateArgs> = {
        [P in keyof T & keyof AggregateCourse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCourse[P]>
      : GetScalarType<T[P], AggregateCourse[P]>
  }




  export type CourseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseWhereInput
    orderBy?: CourseOrderByWithAggregationInput | CourseOrderByWithAggregationInput[]
    by: CourseScalarFieldEnum[] | CourseScalarFieldEnum
    having?: CourseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CourseCountAggregateInputType | true
    _min?: CourseMinAggregateInputType
    _max?: CourseMaxAggregateInputType
  }

  export type CourseGroupByOutputType = {
    id: string
    title: string
    description: string
    teacherId: string
    createdAt: Date
    _count: CourseCountAggregateOutputType | null
    _min: CourseMinAggregateOutputType | null
    _max: CourseMaxAggregateOutputType | null
  }

  type GetCourseGroupByPayload<T extends CourseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CourseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CourseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CourseGroupByOutputType[P]>
            : GetScalarType<T[P], CourseGroupByOutputType[P]>
        }
      >
    >


  export type CourseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    teacherId?: boolean
    createdAt?: boolean
    teacher?: boolean | TeacherDefaultArgs<ExtArgs>
    lessons?: boolean | Course$lessonsArgs<ExtArgs>
    _count?: boolean | CourseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["course"]>



  export type CourseSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    teacherId?: boolean
    createdAt?: boolean
  }

  export type CourseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "teacherId" | "createdAt", ExtArgs["result"]["course"]>
  export type CourseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teacher?: boolean | TeacherDefaultArgs<ExtArgs>
    lessons?: boolean | Course$lessonsArgs<ExtArgs>
    _count?: boolean | CourseCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $CoursePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Course"
    objects: {
      teacher: Prisma.$TeacherPayload<ExtArgs>
      lessons: Prisma.$LessonPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string
      teacherId: string
      createdAt: Date
    }, ExtArgs["result"]["course"]>
    composites: {}
  }

  type CourseGetPayload<S extends boolean | null | undefined | CourseDefaultArgs> = $Result.GetResult<Prisma.$CoursePayload, S>

  type CourseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CourseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CourseCountAggregateInputType | true
    }

  export interface CourseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Course'], meta: { name: 'Course' } }
    /**
     * Find zero or one Course that matches the filter.
     * @param {CourseFindUniqueArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CourseFindUniqueArgs>(args: SelectSubset<T, CourseFindUniqueArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Course that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CourseFindUniqueOrThrowArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CourseFindUniqueOrThrowArgs>(args: SelectSubset<T, CourseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Course that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindFirstArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CourseFindFirstArgs>(args?: SelectSubset<T, CourseFindFirstArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Course that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindFirstOrThrowArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CourseFindFirstOrThrowArgs>(args?: SelectSubset<T, CourseFindFirstOrThrowArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Courses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Courses
     * const courses = await prisma.course.findMany()
     * 
     * // Get first 10 Courses
     * const courses = await prisma.course.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const courseWithIdOnly = await prisma.course.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CourseFindManyArgs>(args?: SelectSubset<T, CourseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Course.
     * @param {CourseCreateArgs} args - Arguments to create a Course.
     * @example
     * // Create one Course
     * const Course = await prisma.course.create({
     *   data: {
     *     // ... data to create a Course
     *   }
     * })
     * 
     */
    create<T extends CourseCreateArgs>(args: SelectSubset<T, CourseCreateArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Courses.
     * @param {CourseCreateManyArgs} args - Arguments to create many Courses.
     * @example
     * // Create many Courses
     * const course = await prisma.course.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CourseCreateManyArgs>(args?: SelectSubset<T, CourseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Course.
     * @param {CourseDeleteArgs} args - Arguments to delete one Course.
     * @example
     * // Delete one Course
     * const Course = await prisma.course.delete({
     *   where: {
     *     // ... filter to delete one Course
     *   }
     * })
     * 
     */
    delete<T extends CourseDeleteArgs>(args: SelectSubset<T, CourseDeleteArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Course.
     * @param {CourseUpdateArgs} args - Arguments to update one Course.
     * @example
     * // Update one Course
     * const course = await prisma.course.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CourseUpdateArgs>(args: SelectSubset<T, CourseUpdateArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Courses.
     * @param {CourseDeleteManyArgs} args - Arguments to filter Courses to delete.
     * @example
     * // Delete a few Courses
     * const { count } = await prisma.course.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CourseDeleteManyArgs>(args?: SelectSubset<T, CourseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Courses
     * const course = await prisma.course.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CourseUpdateManyArgs>(args: SelectSubset<T, CourseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Course.
     * @param {CourseUpsertArgs} args - Arguments to update or create a Course.
     * @example
     * // Update or create a Course
     * const course = await prisma.course.upsert({
     *   create: {
     *     // ... data to create a Course
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Course we want to update
     *   }
     * })
     */
    upsert<T extends CourseUpsertArgs>(args: SelectSubset<T, CourseUpsertArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseCountArgs} args - Arguments to filter Courses to count.
     * @example
     * // Count the number of Courses
     * const count = await prisma.course.count({
     *   where: {
     *     // ... the filter for the Courses we want to count
     *   }
     * })
    **/
    count<T extends CourseCountArgs>(
      args?: Subset<T, CourseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CourseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Course.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CourseAggregateArgs>(args: Subset<T, CourseAggregateArgs>): Prisma.PrismaPromise<GetCourseAggregateType<T>>

    /**
     * Group by Course.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseGroupByArgs} args - Group by arguments.
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
      T extends CourseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CourseGroupByArgs['orderBy'] }
        : { orderBy?: CourseGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CourseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCourseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Course model
   */
  readonly fields: CourseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Course.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CourseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    teacher<T extends TeacherDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TeacherDefaultArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    lessons<T extends Course$lessonsArgs<ExtArgs> = {}>(args?: Subset<T, Course$lessonsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Course model
   */
  interface CourseFieldRefs {
    readonly id: FieldRef<"Course", 'String'>
    readonly title: FieldRef<"Course", 'String'>
    readonly description: FieldRef<"Course", 'String'>
    readonly teacherId: FieldRef<"Course", 'String'>
    readonly createdAt: FieldRef<"Course", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Course findUnique
   */
  export type CourseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course findUniqueOrThrow
   */
  export type CourseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course findFirst
   */
  export type CourseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Courses.
     */
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Course findFirstOrThrow
   */
  export type CourseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Courses.
     */
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Course findMany
   */
  export type CourseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Courses to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Course create
   */
  export type CourseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * The data needed to create a Course.
     */
    data: XOR<CourseCreateInput, CourseUncheckedCreateInput>
  }

  /**
   * Course createMany
   */
  export type CourseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Courses.
     */
    data: CourseCreateManyInput | CourseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Course update
   */
  export type CourseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * The data needed to update a Course.
     */
    data: XOR<CourseUpdateInput, CourseUncheckedUpdateInput>
    /**
     * Choose, which Course to update.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course updateMany
   */
  export type CourseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Courses.
     */
    data: XOR<CourseUpdateManyMutationInput, CourseUncheckedUpdateManyInput>
    /**
     * Filter which Courses to update
     */
    where?: CourseWhereInput
    /**
     * Limit how many Courses to update.
     */
    limit?: number
  }

  /**
   * Course upsert
   */
  export type CourseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * The filter to search for the Course to update in case it exists.
     */
    where: CourseWhereUniqueInput
    /**
     * In case the Course found by the `where` argument doesn't exist, create a new Course with this data.
     */
    create: XOR<CourseCreateInput, CourseUncheckedCreateInput>
    /**
     * In case the Course was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CourseUpdateInput, CourseUncheckedUpdateInput>
  }

  /**
   * Course delete
   */
  export type CourseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter which Course to delete.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course deleteMany
   */
  export type CourseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Courses to delete
     */
    where?: CourseWhereInput
    /**
     * Limit how many Courses to delete.
     */
    limit?: number
  }

  /**
   * Course.lessons
   */
  export type Course$lessonsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
    where?: LessonWhereInput
    orderBy?: LessonOrderByWithRelationInput | LessonOrderByWithRelationInput[]
    cursor?: LessonWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LessonScalarFieldEnum | LessonScalarFieldEnum[]
  }

  /**
   * Course without action
   */
  export type CourseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
  }


  /**
   * Model Lesson
   */

  export type AggregateLesson = {
    _count: LessonCountAggregateOutputType | null
    _avg: LessonAvgAggregateOutputType | null
    _sum: LessonSumAggregateOutputType | null
    _min: LessonMinAggregateOutputType | null
    _max: LessonMaxAggregateOutputType | null
  }

  export type LessonAvgAggregateOutputType = {
    order: number | null
  }

  export type LessonSumAggregateOutputType = {
    order: number | null
  }

  export type LessonMinAggregateOutputType = {
    id: string | null
    title: string | null
    videoUrl: string | null
    courseId: string | null
    order: number | null
    createdAt: Date | null
  }

  export type LessonMaxAggregateOutputType = {
    id: string | null
    title: string | null
    videoUrl: string | null
    courseId: string | null
    order: number | null
    createdAt: Date | null
  }

  export type LessonCountAggregateOutputType = {
    id: number
    title: number
    videoUrl: number
    courseId: number
    order: number
    createdAt: number
    _all: number
  }


  export type LessonAvgAggregateInputType = {
    order?: true
  }

  export type LessonSumAggregateInputType = {
    order?: true
  }

  export type LessonMinAggregateInputType = {
    id?: true
    title?: true
    videoUrl?: true
    courseId?: true
    order?: true
    createdAt?: true
  }

  export type LessonMaxAggregateInputType = {
    id?: true
    title?: true
    videoUrl?: true
    courseId?: true
    order?: true
    createdAt?: true
  }

  export type LessonCountAggregateInputType = {
    id?: true
    title?: true
    videoUrl?: true
    courseId?: true
    order?: true
    createdAt?: true
    _all?: true
  }

  export type LessonAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Lesson to aggregate.
     */
    where?: LessonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lessons to fetch.
     */
    orderBy?: LessonOrderByWithRelationInput | LessonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LessonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lessons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lessons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Lessons
    **/
    _count?: true | LessonCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LessonAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LessonSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LessonMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LessonMaxAggregateInputType
  }

  export type GetLessonAggregateType<T extends LessonAggregateArgs> = {
        [P in keyof T & keyof AggregateLesson]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLesson[P]>
      : GetScalarType<T[P], AggregateLesson[P]>
  }




  export type LessonGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LessonWhereInput
    orderBy?: LessonOrderByWithAggregationInput | LessonOrderByWithAggregationInput[]
    by: LessonScalarFieldEnum[] | LessonScalarFieldEnum
    having?: LessonScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LessonCountAggregateInputType | true
    _avg?: LessonAvgAggregateInputType
    _sum?: LessonSumAggregateInputType
    _min?: LessonMinAggregateInputType
    _max?: LessonMaxAggregateInputType
  }

  export type LessonGroupByOutputType = {
    id: string
    title: string
    videoUrl: string
    courseId: string
    order: number
    createdAt: Date
    _count: LessonCountAggregateOutputType | null
    _avg: LessonAvgAggregateOutputType | null
    _sum: LessonSumAggregateOutputType | null
    _min: LessonMinAggregateOutputType | null
    _max: LessonMaxAggregateOutputType | null
  }

  type GetLessonGroupByPayload<T extends LessonGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LessonGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LessonGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LessonGroupByOutputType[P]>
            : GetScalarType<T[P], LessonGroupByOutputType[P]>
        }
      >
    >


  export type LessonSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    videoUrl?: boolean
    courseId?: boolean
    order?: boolean
    createdAt?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
    quiz?: boolean | Lesson$quizArgs<ExtArgs>
    StudentProgress?: boolean | Lesson$StudentProgressArgs<ExtArgs>
    _count?: boolean | LessonCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lesson"]>



  export type LessonSelectScalar = {
    id?: boolean
    title?: boolean
    videoUrl?: boolean
    courseId?: boolean
    order?: boolean
    createdAt?: boolean
  }

  export type LessonOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "videoUrl" | "courseId" | "order" | "createdAt", ExtArgs["result"]["lesson"]>
  export type LessonInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
    quiz?: boolean | Lesson$quizArgs<ExtArgs>
    StudentProgress?: boolean | Lesson$StudentProgressArgs<ExtArgs>
    _count?: boolean | LessonCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $LessonPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Lesson"
    objects: {
      course: Prisma.$CoursePayload<ExtArgs>
      quiz: Prisma.$QuizPayload<ExtArgs> | null
      StudentProgress: Prisma.$StudentProgressPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      videoUrl: string
      courseId: string
      order: number
      createdAt: Date
    }, ExtArgs["result"]["lesson"]>
    composites: {}
  }

  type LessonGetPayload<S extends boolean | null | undefined | LessonDefaultArgs> = $Result.GetResult<Prisma.$LessonPayload, S>

  type LessonCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LessonFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LessonCountAggregateInputType | true
    }

  export interface LessonDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Lesson'], meta: { name: 'Lesson' } }
    /**
     * Find zero or one Lesson that matches the filter.
     * @param {LessonFindUniqueArgs} args - Arguments to find a Lesson
     * @example
     * // Get one Lesson
     * const lesson = await prisma.lesson.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LessonFindUniqueArgs>(args: SelectSubset<T, LessonFindUniqueArgs<ExtArgs>>): Prisma__LessonClient<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Lesson that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LessonFindUniqueOrThrowArgs} args - Arguments to find a Lesson
     * @example
     * // Get one Lesson
     * const lesson = await prisma.lesson.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LessonFindUniqueOrThrowArgs>(args: SelectSubset<T, LessonFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LessonClient<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lesson that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonFindFirstArgs} args - Arguments to find a Lesson
     * @example
     * // Get one Lesson
     * const lesson = await prisma.lesson.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LessonFindFirstArgs>(args?: SelectSubset<T, LessonFindFirstArgs<ExtArgs>>): Prisma__LessonClient<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lesson that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonFindFirstOrThrowArgs} args - Arguments to find a Lesson
     * @example
     * // Get one Lesson
     * const lesson = await prisma.lesson.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LessonFindFirstOrThrowArgs>(args?: SelectSubset<T, LessonFindFirstOrThrowArgs<ExtArgs>>): Prisma__LessonClient<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Lessons that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Lessons
     * const lessons = await prisma.lesson.findMany()
     * 
     * // Get first 10 Lessons
     * const lessons = await prisma.lesson.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const lessonWithIdOnly = await prisma.lesson.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LessonFindManyArgs>(args?: SelectSubset<T, LessonFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Lesson.
     * @param {LessonCreateArgs} args - Arguments to create a Lesson.
     * @example
     * // Create one Lesson
     * const Lesson = await prisma.lesson.create({
     *   data: {
     *     // ... data to create a Lesson
     *   }
     * })
     * 
     */
    create<T extends LessonCreateArgs>(args: SelectSubset<T, LessonCreateArgs<ExtArgs>>): Prisma__LessonClient<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Lessons.
     * @param {LessonCreateManyArgs} args - Arguments to create many Lessons.
     * @example
     * // Create many Lessons
     * const lesson = await prisma.lesson.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LessonCreateManyArgs>(args?: SelectSubset<T, LessonCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Lesson.
     * @param {LessonDeleteArgs} args - Arguments to delete one Lesson.
     * @example
     * // Delete one Lesson
     * const Lesson = await prisma.lesson.delete({
     *   where: {
     *     // ... filter to delete one Lesson
     *   }
     * })
     * 
     */
    delete<T extends LessonDeleteArgs>(args: SelectSubset<T, LessonDeleteArgs<ExtArgs>>): Prisma__LessonClient<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Lesson.
     * @param {LessonUpdateArgs} args - Arguments to update one Lesson.
     * @example
     * // Update one Lesson
     * const lesson = await prisma.lesson.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LessonUpdateArgs>(args: SelectSubset<T, LessonUpdateArgs<ExtArgs>>): Prisma__LessonClient<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Lessons.
     * @param {LessonDeleteManyArgs} args - Arguments to filter Lessons to delete.
     * @example
     * // Delete a few Lessons
     * const { count } = await prisma.lesson.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LessonDeleteManyArgs>(args?: SelectSubset<T, LessonDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lessons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Lessons
     * const lesson = await prisma.lesson.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LessonUpdateManyArgs>(args: SelectSubset<T, LessonUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Lesson.
     * @param {LessonUpsertArgs} args - Arguments to update or create a Lesson.
     * @example
     * // Update or create a Lesson
     * const lesson = await prisma.lesson.upsert({
     *   create: {
     *     // ... data to create a Lesson
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Lesson we want to update
     *   }
     * })
     */
    upsert<T extends LessonUpsertArgs>(args: SelectSubset<T, LessonUpsertArgs<ExtArgs>>): Prisma__LessonClient<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Lessons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonCountArgs} args - Arguments to filter Lessons to count.
     * @example
     * // Count the number of Lessons
     * const count = await prisma.lesson.count({
     *   where: {
     *     // ... the filter for the Lessons we want to count
     *   }
     * })
    **/
    count<T extends LessonCountArgs>(
      args?: Subset<T, LessonCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LessonCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Lesson.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LessonAggregateArgs>(args: Subset<T, LessonAggregateArgs>): Prisma.PrismaPromise<GetLessonAggregateType<T>>

    /**
     * Group by Lesson.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonGroupByArgs} args - Group by arguments.
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
      T extends LessonGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LessonGroupByArgs['orderBy'] }
        : { orderBy?: LessonGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LessonGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLessonGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Lesson model
   */
  readonly fields: LessonFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Lesson.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LessonClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    course<T extends CourseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CourseDefaultArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    quiz<T extends Lesson$quizArgs<ExtArgs> = {}>(args?: Subset<T, Lesson$quizArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    StudentProgress<T extends Lesson$StudentProgressArgs<ExtArgs> = {}>(args?: Subset<T, Lesson$StudentProgressArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentProgressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Lesson model
   */
  interface LessonFieldRefs {
    readonly id: FieldRef<"Lesson", 'String'>
    readonly title: FieldRef<"Lesson", 'String'>
    readonly videoUrl: FieldRef<"Lesson", 'String'>
    readonly courseId: FieldRef<"Lesson", 'String'>
    readonly order: FieldRef<"Lesson", 'Int'>
    readonly createdAt: FieldRef<"Lesson", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Lesson findUnique
   */
  export type LessonFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
    /**
     * Filter, which Lesson to fetch.
     */
    where: LessonWhereUniqueInput
  }

  /**
   * Lesson findUniqueOrThrow
   */
  export type LessonFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
    /**
     * Filter, which Lesson to fetch.
     */
    where: LessonWhereUniqueInput
  }

  /**
   * Lesson findFirst
   */
  export type LessonFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
    /**
     * Filter, which Lesson to fetch.
     */
    where?: LessonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lessons to fetch.
     */
    orderBy?: LessonOrderByWithRelationInput | LessonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Lessons.
     */
    cursor?: LessonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lessons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lessons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lessons.
     */
    distinct?: LessonScalarFieldEnum | LessonScalarFieldEnum[]
  }

  /**
   * Lesson findFirstOrThrow
   */
  export type LessonFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
    /**
     * Filter, which Lesson to fetch.
     */
    where?: LessonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lessons to fetch.
     */
    orderBy?: LessonOrderByWithRelationInput | LessonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Lessons.
     */
    cursor?: LessonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lessons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lessons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lessons.
     */
    distinct?: LessonScalarFieldEnum | LessonScalarFieldEnum[]
  }

  /**
   * Lesson findMany
   */
  export type LessonFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
    /**
     * Filter, which Lessons to fetch.
     */
    where?: LessonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lessons to fetch.
     */
    orderBy?: LessonOrderByWithRelationInput | LessonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Lessons.
     */
    cursor?: LessonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lessons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lessons.
     */
    skip?: number
    distinct?: LessonScalarFieldEnum | LessonScalarFieldEnum[]
  }

  /**
   * Lesson create
   */
  export type LessonCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
    /**
     * The data needed to create a Lesson.
     */
    data: XOR<LessonCreateInput, LessonUncheckedCreateInput>
  }

  /**
   * Lesson createMany
   */
  export type LessonCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Lessons.
     */
    data: LessonCreateManyInput | LessonCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Lesson update
   */
  export type LessonUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
    /**
     * The data needed to update a Lesson.
     */
    data: XOR<LessonUpdateInput, LessonUncheckedUpdateInput>
    /**
     * Choose, which Lesson to update.
     */
    where: LessonWhereUniqueInput
  }

  /**
   * Lesson updateMany
   */
  export type LessonUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Lessons.
     */
    data: XOR<LessonUpdateManyMutationInput, LessonUncheckedUpdateManyInput>
    /**
     * Filter which Lessons to update
     */
    where?: LessonWhereInput
    /**
     * Limit how many Lessons to update.
     */
    limit?: number
  }

  /**
   * Lesson upsert
   */
  export type LessonUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
    /**
     * The filter to search for the Lesson to update in case it exists.
     */
    where: LessonWhereUniqueInput
    /**
     * In case the Lesson found by the `where` argument doesn't exist, create a new Lesson with this data.
     */
    create: XOR<LessonCreateInput, LessonUncheckedCreateInput>
    /**
     * In case the Lesson was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LessonUpdateInput, LessonUncheckedUpdateInput>
  }

  /**
   * Lesson delete
   */
  export type LessonDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
    /**
     * Filter which Lesson to delete.
     */
    where: LessonWhereUniqueInput
  }

  /**
   * Lesson deleteMany
   */
  export type LessonDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Lessons to delete
     */
    where?: LessonWhereInput
    /**
     * Limit how many Lessons to delete.
     */
    limit?: number
  }

  /**
   * Lesson.quiz
   */
  export type Lesson$quizArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    where?: QuizWhereInput
  }

  /**
   * Lesson.StudentProgress
   */
  export type Lesson$StudentProgressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentProgress
     */
    select?: StudentProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentProgress
     */
    omit?: StudentProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentProgressInclude<ExtArgs> | null
    where?: StudentProgressWhereInput
    orderBy?: StudentProgressOrderByWithRelationInput | StudentProgressOrderByWithRelationInput[]
    cursor?: StudentProgressWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StudentProgressScalarFieldEnum | StudentProgressScalarFieldEnum[]
  }

  /**
   * Lesson without action
   */
  export type LessonDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
  }


  /**
   * Model Quiz
   */

  export type AggregateQuiz = {
    _count: QuizCountAggregateOutputType | null
    _min: QuizMinAggregateOutputType | null
    _max: QuizMaxAggregateOutputType | null
  }

  export type QuizMinAggregateOutputType = {
    id: string | null
    lessonId: string | null
  }

  export type QuizMaxAggregateOutputType = {
    id: string | null
    lessonId: string | null
  }

  export type QuizCountAggregateOutputType = {
    id: number
    lessonId: number
    _all: number
  }


  export type QuizMinAggregateInputType = {
    id?: true
    lessonId?: true
  }

  export type QuizMaxAggregateInputType = {
    id?: true
    lessonId?: true
  }

  export type QuizCountAggregateInputType = {
    id?: true
    lessonId?: true
    _all?: true
  }

  export type QuizAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Quiz to aggregate.
     */
    where?: QuizWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quizzes to fetch.
     */
    orderBy?: QuizOrderByWithRelationInput | QuizOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuizWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quizzes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quizzes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Quizzes
    **/
    _count?: true | QuizCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuizMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuizMaxAggregateInputType
  }

  export type GetQuizAggregateType<T extends QuizAggregateArgs> = {
        [P in keyof T & keyof AggregateQuiz]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuiz[P]>
      : GetScalarType<T[P], AggregateQuiz[P]>
  }




  export type QuizGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuizWhereInput
    orderBy?: QuizOrderByWithAggregationInput | QuizOrderByWithAggregationInput[]
    by: QuizScalarFieldEnum[] | QuizScalarFieldEnum
    having?: QuizScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuizCountAggregateInputType | true
    _min?: QuizMinAggregateInputType
    _max?: QuizMaxAggregateInputType
  }

  export type QuizGroupByOutputType = {
    id: string
    lessonId: string
    _count: QuizCountAggregateOutputType | null
    _min: QuizMinAggregateOutputType | null
    _max: QuizMaxAggregateOutputType | null
  }

  type GetQuizGroupByPayload<T extends QuizGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuizGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuizGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuizGroupByOutputType[P]>
            : GetScalarType<T[P], QuizGroupByOutputType[P]>
        }
      >
    >


  export type QuizSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lessonId?: boolean
    lesson?: boolean | LessonDefaultArgs<ExtArgs>
    questions?: boolean | Quiz$questionsArgs<ExtArgs>
    StudentQuiz?: boolean | Quiz$StudentQuizArgs<ExtArgs>
    _count?: boolean | QuizCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quiz"]>



  export type QuizSelectScalar = {
    id?: boolean
    lessonId?: boolean
  }

  export type QuizOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "lessonId", ExtArgs["result"]["quiz"]>
  export type QuizInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lesson?: boolean | LessonDefaultArgs<ExtArgs>
    questions?: boolean | Quiz$questionsArgs<ExtArgs>
    StudentQuiz?: boolean | Quiz$StudentQuizArgs<ExtArgs>
    _count?: boolean | QuizCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $QuizPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Quiz"
    objects: {
      lesson: Prisma.$LessonPayload<ExtArgs>
      questions: Prisma.$QuestionPayload<ExtArgs>[]
      StudentQuiz: Prisma.$StudentQuizPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      lessonId: string
    }, ExtArgs["result"]["quiz"]>
    composites: {}
  }

  type QuizGetPayload<S extends boolean | null | undefined | QuizDefaultArgs> = $Result.GetResult<Prisma.$QuizPayload, S>

  type QuizCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QuizFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuizCountAggregateInputType | true
    }

  export interface QuizDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Quiz'], meta: { name: 'Quiz' } }
    /**
     * Find zero or one Quiz that matches the filter.
     * @param {QuizFindUniqueArgs} args - Arguments to find a Quiz
     * @example
     * // Get one Quiz
     * const quiz = await prisma.quiz.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuizFindUniqueArgs>(args: SelectSubset<T, QuizFindUniqueArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Quiz that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QuizFindUniqueOrThrowArgs} args - Arguments to find a Quiz
     * @example
     * // Get one Quiz
     * const quiz = await prisma.quiz.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuizFindUniqueOrThrowArgs>(args: SelectSubset<T, QuizFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Quiz that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizFindFirstArgs} args - Arguments to find a Quiz
     * @example
     * // Get one Quiz
     * const quiz = await prisma.quiz.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuizFindFirstArgs>(args?: SelectSubset<T, QuizFindFirstArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Quiz that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizFindFirstOrThrowArgs} args - Arguments to find a Quiz
     * @example
     * // Get one Quiz
     * const quiz = await prisma.quiz.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuizFindFirstOrThrowArgs>(args?: SelectSubset<T, QuizFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Quizzes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Quizzes
     * const quizzes = await prisma.quiz.findMany()
     * 
     * // Get first 10 Quizzes
     * const quizzes = await prisma.quiz.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const quizWithIdOnly = await prisma.quiz.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QuizFindManyArgs>(args?: SelectSubset<T, QuizFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Quiz.
     * @param {QuizCreateArgs} args - Arguments to create a Quiz.
     * @example
     * // Create one Quiz
     * const Quiz = await prisma.quiz.create({
     *   data: {
     *     // ... data to create a Quiz
     *   }
     * })
     * 
     */
    create<T extends QuizCreateArgs>(args: SelectSubset<T, QuizCreateArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Quizzes.
     * @param {QuizCreateManyArgs} args - Arguments to create many Quizzes.
     * @example
     * // Create many Quizzes
     * const quiz = await prisma.quiz.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuizCreateManyArgs>(args?: SelectSubset<T, QuizCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Quiz.
     * @param {QuizDeleteArgs} args - Arguments to delete one Quiz.
     * @example
     * // Delete one Quiz
     * const Quiz = await prisma.quiz.delete({
     *   where: {
     *     // ... filter to delete one Quiz
     *   }
     * })
     * 
     */
    delete<T extends QuizDeleteArgs>(args: SelectSubset<T, QuizDeleteArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Quiz.
     * @param {QuizUpdateArgs} args - Arguments to update one Quiz.
     * @example
     * // Update one Quiz
     * const quiz = await prisma.quiz.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuizUpdateArgs>(args: SelectSubset<T, QuizUpdateArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Quizzes.
     * @param {QuizDeleteManyArgs} args - Arguments to filter Quizzes to delete.
     * @example
     * // Delete a few Quizzes
     * const { count } = await prisma.quiz.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuizDeleteManyArgs>(args?: SelectSubset<T, QuizDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Quizzes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Quizzes
     * const quiz = await prisma.quiz.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuizUpdateManyArgs>(args: SelectSubset<T, QuizUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Quiz.
     * @param {QuizUpsertArgs} args - Arguments to update or create a Quiz.
     * @example
     * // Update or create a Quiz
     * const quiz = await prisma.quiz.upsert({
     *   create: {
     *     // ... data to create a Quiz
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Quiz we want to update
     *   }
     * })
     */
    upsert<T extends QuizUpsertArgs>(args: SelectSubset<T, QuizUpsertArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Quizzes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizCountArgs} args - Arguments to filter Quizzes to count.
     * @example
     * // Count the number of Quizzes
     * const count = await prisma.quiz.count({
     *   where: {
     *     // ... the filter for the Quizzes we want to count
     *   }
     * })
    **/
    count<T extends QuizCountArgs>(
      args?: Subset<T, QuizCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuizCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Quiz.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QuizAggregateArgs>(args: Subset<T, QuizAggregateArgs>): Prisma.PrismaPromise<GetQuizAggregateType<T>>

    /**
     * Group by Quiz.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizGroupByArgs} args - Group by arguments.
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
      T extends QuizGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuizGroupByArgs['orderBy'] }
        : { orderBy?: QuizGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, QuizGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuizGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Quiz model
   */
  readonly fields: QuizFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Quiz.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuizClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    lesson<T extends LessonDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LessonDefaultArgs<ExtArgs>>): Prisma__LessonClient<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    questions<T extends Quiz$questionsArgs<ExtArgs> = {}>(args?: Subset<T, Quiz$questionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    StudentQuiz<T extends Quiz$StudentQuizArgs<ExtArgs> = {}>(args?: Subset<T, Quiz$StudentQuizArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentQuizPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Quiz model
   */
  interface QuizFieldRefs {
    readonly id: FieldRef<"Quiz", 'String'>
    readonly lessonId: FieldRef<"Quiz", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Quiz findUnique
   */
  export type QuizFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * Filter, which Quiz to fetch.
     */
    where: QuizWhereUniqueInput
  }

  /**
   * Quiz findUniqueOrThrow
   */
  export type QuizFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * Filter, which Quiz to fetch.
     */
    where: QuizWhereUniqueInput
  }

  /**
   * Quiz findFirst
   */
  export type QuizFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * Filter, which Quiz to fetch.
     */
    where?: QuizWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quizzes to fetch.
     */
    orderBy?: QuizOrderByWithRelationInput | QuizOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Quizzes.
     */
    cursor?: QuizWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quizzes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quizzes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Quizzes.
     */
    distinct?: QuizScalarFieldEnum | QuizScalarFieldEnum[]
  }

  /**
   * Quiz findFirstOrThrow
   */
  export type QuizFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * Filter, which Quiz to fetch.
     */
    where?: QuizWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quizzes to fetch.
     */
    orderBy?: QuizOrderByWithRelationInput | QuizOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Quizzes.
     */
    cursor?: QuizWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quizzes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quizzes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Quizzes.
     */
    distinct?: QuizScalarFieldEnum | QuizScalarFieldEnum[]
  }

  /**
   * Quiz findMany
   */
  export type QuizFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * Filter, which Quizzes to fetch.
     */
    where?: QuizWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quizzes to fetch.
     */
    orderBy?: QuizOrderByWithRelationInput | QuizOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Quizzes.
     */
    cursor?: QuizWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quizzes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quizzes.
     */
    skip?: number
    distinct?: QuizScalarFieldEnum | QuizScalarFieldEnum[]
  }

  /**
   * Quiz create
   */
  export type QuizCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * The data needed to create a Quiz.
     */
    data: XOR<QuizCreateInput, QuizUncheckedCreateInput>
  }

  /**
   * Quiz createMany
   */
  export type QuizCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Quizzes.
     */
    data: QuizCreateManyInput | QuizCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Quiz update
   */
  export type QuizUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * The data needed to update a Quiz.
     */
    data: XOR<QuizUpdateInput, QuizUncheckedUpdateInput>
    /**
     * Choose, which Quiz to update.
     */
    where: QuizWhereUniqueInput
  }

  /**
   * Quiz updateMany
   */
  export type QuizUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Quizzes.
     */
    data: XOR<QuizUpdateManyMutationInput, QuizUncheckedUpdateManyInput>
    /**
     * Filter which Quizzes to update
     */
    where?: QuizWhereInput
    /**
     * Limit how many Quizzes to update.
     */
    limit?: number
  }

  /**
   * Quiz upsert
   */
  export type QuizUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * The filter to search for the Quiz to update in case it exists.
     */
    where: QuizWhereUniqueInput
    /**
     * In case the Quiz found by the `where` argument doesn't exist, create a new Quiz with this data.
     */
    create: XOR<QuizCreateInput, QuizUncheckedCreateInput>
    /**
     * In case the Quiz was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuizUpdateInput, QuizUncheckedUpdateInput>
  }

  /**
   * Quiz delete
   */
  export type QuizDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * Filter which Quiz to delete.
     */
    where: QuizWhereUniqueInput
  }

  /**
   * Quiz deleteMany
   */
  export type QuizDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Quizzes to delete
     */
    where?: QuizWhereInput
    /**
     * Limit how many Quizzes to delete.
     */
    limit?: number
  }

  /**
   * Quiz.questions
   */
  export type Quiz$questionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    where?: QuestionWhereInput
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    cursor?: QuestionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Quiz.StudentQuiz
   */
  export type Quiz$StudentQuizArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentQuiz
     */
    select?: StudentQuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentQuiz
     */
    omit?: StudentQuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentQuizInclude<ExtArgs> | null
    where?: StudentQuizWhereInput
    orderBy?: StudentQuizOrderByWithRelationInput | StudentQuizOrderByWithRelationInput[]
    cursor?: StudentQuizWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StudentQuizScalarFieldEnum | StudentQuizScalarFieldEnum[]
  }

  /**
   * Quiz without action
   */
  export type QuizDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
  }


  /**
   * Model Question
   */

  export type AggregateQuestion = {
    _count: QuestionCountAggregateOutputType | null
    _min: QuestionMinAggregateOutputType | null
    _max: QuestionMaxAggregateOutputType | null
  }

  export type QuestionMinAggregateOutputType = {
    id: string | null
    quizId: string | null
    question: string | null
  }

  export type QuestionMaxAggregateOutputType = {
    id: string | null
    quizId: string | null
    question: string | null
  }

  export type QuestionCountAggregateOutputType = {
    id: number
    quizId: number
    question: number
    _all: number
  }


  export type QuestionMinAggregateInputType = {
    id?: true
    quizId?: true
    question?: true
  }

  export type QuestionMaxAggregateInputType = {
    id?: true
    quizId?: true
    question?: true
  }

  export type QuestionCountAggregateInputType = {
    id?: true
    quizId?: true
    question?: true
    _all?: true
  }

  export type QuestionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Question to aggregate.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Questions
    **/
    _count?: true | QuestionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuestionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuestionMaxAggregateInputType
  }

  export type GetQuestionAggregateType<T extends QuestionAggregateArgs> = {
        [P in keyof T & keyof AggregateQuestion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuestion[P]>
      : GetScalarType<T[P], AggregateQuestion[P]>
  }




  export type QuestionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionWhereInput
    orderBy?: QuestionOrderByWithAggregationInput | QuestionOrderByWithAggregationInput[]
    by: QuestionScalarFieldEnum[] | QuestionScalarFieldEnum
    having?: QuestionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuestionCountAggregateInputType | true
    _min?: QuestionMinAggregateInputType
    _max?: QuestionMaxAggregateInputType
  }

  export type QuestionGroupByOutputType = {
    id: string
    quizId: string
    question: string
    _count: QuestionCountAggregateOutputType | null
    _min: QuestionMinAggregateOutputType | null
    _max: QuestionMaxAggregateOutputType | null
  }

  type GetQuestionGroupByPayload<T extends QuestionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuestionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuestionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuestionGroupByOutputType[P]>
            : GetScalarType<T[P], QuestionGroupByOutputType[P]>
        }
      >
    >


  export type QuestionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quizId?: boolean
    question?: boolean
    quiz?: boolean | QuizDefaultArgs<ExtArgs>
    questionOptions?: boolean | Question$questionOptionsArgs<ExtArgs>
    questionAnswer?: boolean | Question$questionAnswerArgs<ExtArgs>
    StudentQuizAnswer?: boolean | Question$StudentQuizAnswerArgs<ExtArgs>
    _count?: boolean | QuestionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["question"]>



  export type QuestionSelectScalar = {
    id?: boolean
    quizId?: boolean
    question?: boolean
  }

  export type QuestionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "quizId" | "question", ExtArgs["result"]["question"]>
  export type QuestionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    quiz?: boolean | QuizDefaultArgs<ExtArgs>
    questionOptions?: boolean | Question$questionOptionsArgs<ExtArgs>
    questionAnswer?: boolean | Question$questionAnswerArgs<ExtArgs>
    StudentQuizAnswer?: boolean | Question$StudentQuizAnswerArgs<ExtArgs>
    _count?: boolean | QuestionCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $QuestionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Question"
    objects: {
      quiz: Prisma.$QuizPayload<ExtArgs>
      questionOptions: Prisma.$QuestionOptionPayload<ExtArgs>[]
      questionAnswer: Prisma.$QuestionAnswerPayload<ExtArgs>[]
      StudentQuizAnswer: Prisma.$StudentQuizAnswerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      quizId: string
      question: string
    }, ExtArgs["result"]["question"]>
    composites: {}
  }

  type QuestionGetPayload<S extends boolean | null | undefined | QuestionDefaultArgs> = $Result.GetResult<Prisma.$QuestionPayload, S>

  type QuestionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QuestionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuestionCountAggregateInputType | true
    }

  export interface QuestionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Question'], meta: { name: 'Question' } }
    /**
     * Find zero or one Question that matches the filter.
     * @param {QuestionFindUniqueArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuestionFindUniqueArgs>(args: SelectSubset<T, QuestionFindUniqueArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Question that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QuestionFindUniqueOrThrowArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuestionFindUniqueOrThrowArgs>(args: SelectSubset<T, QuestionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Question that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindFirstArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuestionFindFirstArgs>(args?: SelectSubset<T, QuestionFindFirstArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Question that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindFirstOrThrowArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuestionFindFirstOrThrowArgs>(args?: SelectSubset<T, QuestionFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Questions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Questions
     * const questions = await prisma.question.findMany()
     * 
     * // Get first 10 Questions
     * const questions = await prisma.question.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const questionWithIdOnly = await prisma.question.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QuestionFindManyArgs>(args?: SelectSubset<T, QuestionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Question.
     * @param {QuestionCreateArgs} args - Arguments to create a Question.
     * @example
     * // Create one Question
     * const Question = await prisma.question.create({
     *   data: {
     *     // ... data to create a Question
     *   }
     * })
     * 
     */
    create<T extends QuestionCreateArgs>(args: SelectSubset<T, QuestionCreateArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Questions.
     * @param {QuestionCreateManyArgs} args - Arguments to create many Questions.
     * @example
     * // Create many Questions
     * const question = await prisma.question.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuestionCreateManyArgs>(args?: SelectSubset<T, QuestionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Question.
     * @param {QuestionDeleteArgs} args - Arguments to delete one Question.
     * @example
     * // Delete one Question
     * const Question = await prisma.question.delete({
     *   where: {
     *     // ... filter to delete one Question
     *   }
     * })
     * 
     */
    delete<T extends QuestionDeleteArgs>(args: SelectSubset<T, QuestionDeleteArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Question.
     * @param {QuestionUpdateArgs} args - Arguments to update one Question.
     * @example
     * // Update one Question
     * const question = await prisma.question.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuestionUpdateArgs>(args: SelectSubset<T, QuestionUpdateArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Questions.
     * @param {QuestionDeleteManyArgs} args - Arguments to filter Questions to delete.
     * @example
     * // Delete a few Questions
     * const { count } = await prisma.question.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuestionDeleteManyArgs>(args?: SelectSubset<T, QuestionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Questions
     * const question = await prisma.question.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuestionUpdateManyArgs>(args: SelectSubset<T, QuestionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Question.
     * @param {QuestionUpsertArgs} args - Arguments to update or create a Question.
     * @example
     * // Update or create a Question
     * const question = await prisma.question.upsert({
     *   create: {
     *     // ... data to create a Question
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Question we want to update
     *   }
     * })
     */
    upsert<T extends QuestionUpsertArgs>(args: SelectSubset<T, QuestionUpsertArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionCountArgs} args - Arguments to filter Questions to count.
     * @example
     * // Count the number of Questions
     * const count = await prisma.question.count({
     *   where: {
     *     // ... the filter for the Questions we want to count
     *   }
     * })
    **/
    count<T extends QuestionCountArgs>(
      args?: Subset<T, QuestionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuestionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Question.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QuestionAggregateArgs>(args: Subset<T, QuestionAggregateArgs>): Prisma.PrismaPromise<GetQuestionAggregateType<T>>

    /**
     * Group by Question.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionGroupByArgs} args - Group by arguments.
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
      T extends QuestionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuestionGroupByArgs['orderBy'] }
        : { orderBy?: QuestionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, QuestionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuestionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Question model
   */
  readonly fields: QuestionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Question.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuestionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    quiz<T extends QuizDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuizDefaultArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    questionOptions<T extends Question$questionOptionsArgs<ExtArgs> = {}>(args?: Subset<T, Question$questionOptionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionOptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    questionAnswer<T extends Question$questionAnswerArgs<ExtArgs> = {}>(args?: Subset<T, Question$questionAnswerArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionAnswerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    StudentQuizAnswer<T extends Question$StudentQuizAnswerArgs<ExtArgs> = {}>(args?: Subset<T, Question$StudentQuizAnswerArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentQuizAnswerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Question model
   */
  interface QuestionFieldRefs {
    readonly id: FieldRef<"Question", 'String'>
    readonly quizId: FieldRef<"Question", 'String'>
    readonly question: FieldRef<"Question", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Question findUnique
   */
  export type QuestionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question findUniqueOrThrow
   */
  export type QuestionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question findFirst
   */
  export type QuestionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Questions.
     */
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Question findFirstOrThrow
   */
  export type QuestionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Questions.
     */
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Question findMany
   */
  export type QuestionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Questions to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Question create
   */
  export type QuestionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * The data needed to create a Question.
     */
    data: XOR<QuestionCreateInput, QuestionUncheckedCreateInput>
  }

  /**
   * Question createMany
   */
  export type QuestionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Questions.
     */
    data: QuestionCreateManyInput | QuestionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Question update
   */
  export type QuestionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * The data needed to update a Question.
     */
    data: XOR<QuestionUpdateInput, QuestionUncheckedUpdateInput>
    /**
     * Choose, which Question to update.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question updateMany
   */
  export type QuestionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Questions.
     */
    data: XOR<QuestionUpdateManyMutationInput, QuestionUncheckedUpdateManyInput>
    /**
     * Filter which Questions to update
     */
    where?: QuestionWhereInput
    /**
     * Limit how many Questions to update.
     */
    limit?: number
  }

  /**
   * Question upsert
   */
  export type QuestionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * The filter to search for the Question to update in case it exists.
     */
    where: QuestionWhereUniqueInput
    /**
     * In case the Question found by the `where` argument doesn't exist, create a new Question with this data.
     */
    create: XOR<QuestionCreateInput, QuestionUncheckedCreateInput>
    /**
     * In case the Question was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuestionUpdateInput, QuestionUncheckedUpdateInput>
  }

  /**
   * Question delete
   */
  export type QuestionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter which Question to delete.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question deleteMany
   */
  export type QuestionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Questions to delete
     */
    where?: QuestionWhereInput
    /**
     * Limit how many Questions to delete.
     */
    limit?: number
  }

  /**
   * Question.questionOptions
   */
  export type Question$questionOptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionOption
     */
    select?: QuestionOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionOption
     */
    omit?: QuestionOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionOptionInclude<ExtArgs> | null
    where?: QuestionOptionWhereInput
    orderBy?: QuestionOptionOrderByWithRelationInput | QuestionOptionOrderByWithRelationInput[]
    cursor?: QuestionOptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuestionOptionScalarFieldEnum | QuestionOptionScalarFieldEnum[]
  }

  /**
   * Question.questionAnswer
   */
  export type Question$questionAnswerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionAnswer
     */
    select?: QuestionAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionAnswer
     */
    omit?: QuestionAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionAnswerInclude<ExtArgs> | null
    where?: QuestionAnswerWhereInput
    orderBy?: QuestionAnswerOrderByWithRelationInput | QuestionAnswerOrderByWithRelationInput[]
    cursor?: QuestionAnswerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuestionAnswerScalarFieldEnum | QuestionAnswerScalarFieldEnum[]
  }

  /**
   * Question.StudentQuizAnswer
   */
  export type Question$StudentQuizAnswerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentQuizAnswer
     */
    select?: StudentQuizAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentQuizAnswer
     */
    omit?: StudentQuizAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentQuizAnswerInclude<ExtArgs> | null
    where?: StudentQuizAnswerWhereInput
    orderBy?: StudentQuizAnswerOrderByWithRelationInput | StudentQuizAnswerOrderByWithRelationInput[]
    cursor?: StudentQuizAnswerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StudentQuizAnswerScalarFieldEnum | StudentQuizAnswerScalarFieldEnum[]
  }

  /**
   * Question without action
   */
  export type QuestionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
  }


  /**
   * Model QuestionOption
   */

  export type AggregateQuestionOption = {
    _count: QuestionOptionCountAggregateOutputType | null
    _min: QuestionOptionMinAggregateOutputType | null
    _max: QuestionOptionMaxAggregateOutputType | null
  }

  export type QuestionOptionMinAggregateOutputType = {
    id: string | null
    questionId: string | null
    option: string | null
  }

  export type QuestionOptionMaxAggregateOutputType = {
    id: string | null
    questionId: string | null
    option: string | null
  }

  export type QuestionOptionCountAggregateOutputType = {
    id: number
    questionId: number
    option: number
    _all: number
  }


  export type QuestionOptionMinAggregateInputType = {
    id?: true
    questionId?: true
    option?: true
  }

  export type QuestionOptionMaxAggregateInputType = {
    id?: true
    questionId?: true
    option?: true
  }

  export type QuestionOptionCountAggregateInputType = {
    id?: true
    questionId?: true
    option?: true
    _all?: true
  }

  export type QuestionOptionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuestionOption to aggregate.
     */
    where?: QuestionOptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuestionOptions to fetch.
     */
    orderBy?: QuestionOptionOrderByWithRelationInput | QuestionOptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuestionOptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuestionOptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuestionOptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned QuestionOptions
    **/
    _count?: true | QuestionOptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuestionOptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuestionOptionMaxAggregateInputType
  }

  export type GetQuestionOptionAggregateType<T extends QuestionOptionAggregateArgs> = {
        [P in keyof T & keyof AggregateQuestionOption]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuestionOption[P]>
      : GetScalarType<T[P], AggregateQuestionOption[P]>
  }




  export type QuestionOptionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionOptionWhereInput
    orderBy?: QuestionOptionOrderByWithAggregationInput | QuestionOptionOrderByWithAggregationInput[]
    by: QuestionOptionScalarFieldEnum[] | QuestionOptionScalarFieldEnum
    having?: QuestionOptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuestionOptionCountAggregateInputType | true
    _min?: QuestionOptionMinAggregateInputType
    _max?: QuestionOptionMaxAggregateInputType
  }

  export type QuestionOptionGroupByOutputType = {
    id: string
    questionId: string
    option: string
    _count: QuestionOptionCountAggregateOutputType | null
    _min: QuestionOptionMinAggregateOutputType | null
    _max: QuestionOptionMaxAggregateOutputType | null
  }

  type GetQuestionOptionGroupByPayload<T extends QuestionOptionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuestionOptionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuestionOptionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuestionOptionGroupByOutputType[P]>
            : GetScalarType<T[P], QuestionOptionGroupByOutputType[P]>
        }
      >
    >


  export type QuestionOptionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    questionId?: boolean
    option?: boolean
    question?: boolean | QuestionDefaultArgs<ExtArgs>
    questionAnswer?: boolean | QuestionOption$questionAnswerArgs<ExtArgs>
    studentQuizAnswers?: boolean | QuestionOption$studentQuizAnswersArgs<ExtArgs>
    _count?: boolean | QuestionOptionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["questionOption"]>



  export type QuestionOptionSelectScalar = {
    id?: boolean
    questionId?: boolean
    option?: boolean
  }

  export type QuestionOptionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "questionId" | "option", ExtArgs["result"]["questionOption"]>
  export type QuestionOptionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    question?: boolean | QuestionDefaultArgs<ExtArgs>
    questionAnswer?: boolean | QuestionOption$questionAnswerArgs<ExtArgs>
    studentQuizAnswers?: boolean | QuestionOption$studentQuizAnswersArgs<ExtArgs>
    _count?: boolean | QuestionOptionCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $QuestionOptionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "QuestionOption"
    objects: {
      question: Prisma.$QuestionPayload<ExtArgs>
      questionAnswer: Prisma.$QuestionAnswerPayload<ExtArgs>[]
      studentQuizAnswers: Prisma.$StudentQuizAnswerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      questionId: string
      option: string
    }, ExtArgs["result"]["questionOption"]>
    composites: {}
  }

  type QuestionOptionGetPayload<S extends boolean | null | undefined | QuestionOptionDefaultArgs> = $Result.GetResult<Prisma.$QuestionOptionPayload, S>

  type QuestionOptionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QuestionOptionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuestionOptionCountAggregateInputType | true
    }

  export interface QuestionOptionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['QuestionOption'], meta: { name: 'QuestionOption' } }
    /**
     * Find zero or one QuestionOption that matches the filter.
     * @param {QuestionOptionFindUniqueArgs} args - Arguments to find a QuestionOption
     * @example
     * // Get one QuestionOption
     * const questionOption = await prisma.questionOption.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuestionOptionFindUniqueArgs>(args: SelectSubset<T, QuestionOptionFindUniqueArgs<ExtArgs>>): Prisma__QuestionOptionClient<$Result.GetResult<Prisma.$QuestionOptionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one QuestionOption that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QuestionOptionFindUniqueOrThrowArgs} args - Arguments to find a QuestionOption
     * @example
     * // Get one QuestionOption
     * const questionOption = await prisma.questionOption.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuestionOptionFindUniqueOrThrowArgs>(args: SelectSubset<T, QuestionOptionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuestionOptionClient<$Result.GetResult<Prisma.$QuestionOptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QuestionOption that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionOptionFindFirstArgs} args - Arguments to find a QuestionOption
     * @example
     * // Get one QuestionOption
     * const questionOption = await prisma.questionOption.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuestionOptionFindFirstArgs>(args?: SelectSubset<T, QuestionOptionFindFirstArgs<ExtArgs>>): Prisma__QuestionOptionClient<$Result.GetResult<Prisma.$QuestionOptionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QuestionOption that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionOptionFindFirstOrThrowArgs} args - Arguments to find a QuestionOption
     * @example
     * // Get one QuestionOption
     * const questionOption = await prisma.questionOption.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuestionOptionFindFirstOrThrowArgs>(args?: SelectSubset<T, QuestionOptionFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuestionOptionClient<$Result.GetResult<Prisma.$QuestionOptionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more QuestionOptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionOptionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all QuestionOptions
     * const questionOptions = await prisma.questionOption.findMany()
     * 
     * // Get first 10 QuestionOptions
     * const questionOptions = await prisma.questionOption.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const questionOptionWithIdOnly = await prisma.questionOption.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QuestionOptionFindManyArgs>(args?: SelectSubset<T, QuestionOptionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionOptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a QuestionOption.
     * @param {QuestionOptionCreateArgs} args - Arguments to create a QuestionOption.
     * @example
     * // Create one QuestionOption
     * const QuestionOption = await prisma.questionOption.create({
     *   data: {
     *     // ... data to create a QuestionOption
     *   }
     * })
     * 
     */
    create<T extends QuestionOptionCreateArgs>(args: SelectSubset<T, QuestionOptionCreateArgs<ExtArgs>>): Prisma__QuestionOptionClient<$Result.GetResult<Prisma.$QuestionOptionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many QuestionOptions.
     * @param {QuestionOptionCreateManyArgs} args - Arguments to create many QuestionOptions.
     * @example
     * // Create many QuestionOptions
     * const questionOption = await prisma.questionOption.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuestionOptionCreateManyArgs>(args?: SelectSubset<T, QuestionOptionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a QuestionOption.
     * @param {QuestionOptionDeleteArgs} args - Arguments to delete one QuestionOption.
     * @example
     * // Delete one QuestionOption
     * const QuestionOption = await prisma.questionOption.delete({
     *   where: {
     *     // ... filter to delete one QuestionOption
     *   }
     * })
     * 
     */
    delete<T extends QuestionOptionDeleteArgs>(args: SelectSubset<T, QuestionOptionDeleteArgs<ExtArgs>>): Prisma__QuestionOptionClient<$Result.GetResult<Prisma.$QuestionOptionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one QuestionOption.
     * @param {QuestionOptionUpdateArgs} args - Arguments to update one QuestionOption.
     * @example
     * // Update one QuestionOption
     * const questionOption = await prisma.questionOption.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuestionOptionUpdateArgs>(args: SelectSubset<T, QuestionOptionUpdateArgs<ExtArgs>>): Prisma__QuestionOptionClient<$Result.GetResult<Prisma.$QuestionOptionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more QuestionOptions.
     * @param {QuestionOptionDeleteManyArgs} args - Arguments to filter QuestionOptions to delete.
     * @example
     * // Delete a few QuestionOptions
     * const { count } = await prisma.questionOption.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuestionOptionDeleteManyArgs>(args?: SelectSubset<T, QuestionOptionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QuestionOptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionOptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many QuestionOptions
     * const questionOption = await prisma.questionOption.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuestionOptionUpdateManyArgs>(args: SelectSubset<T, QuestionOptionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one QuestionOption.
     * @param {QuestionOptionUpsertArgs} args - Arguments to update or create a QuestionOption.
     * @example
     * // Update or create a QuestionOption
     * const questionOption = await prisma.questionOption.upsert({
     *   create: {
     *     // ... data to create a QuestionOption
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the QuestionOption we want to update
     *   }
     * })
     */
    upsert<T extends QuestionOptionUpsertArgs>(args: SelectSubset<T, QuestionOptionUpsertArgs<ExtArgs>>): Prisma__QuestionOptionClient<$Result.GetResult<Prisma.$QuestionOptionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of QuestionOptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionOptionCountArgs} args - Arguments to filter QuestionOptions to count.
     * @example
     * // Count the number of QuestionOptions
     * const count = await prisma.questionOption.count({
     *   where: {
     *     // ... the filter for the QuestionOptions we want to count
     *   }
     * })
    **/
    count<T extends QuestionOptionCountArgs>(
      args?: Subset<T, QuestionOptionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuestionOptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a QuestionOption.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionOptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QuestionOptionAggregateArgs>(args: Subset<T, QuestionOptionAggregateArgs>): Prisma.PrismaPromise<GetQuestionOptionAggregateType<T>>

    /**
     * Group by QuestionOption.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionOptionGroupByArgs} args - Group by arguments.
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
      T extends QuestionOptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuestionOptionGroupByArgs['orderBy'] }
        : { orderBy?: QuestionOptionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, QuestionOptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuestionOptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the QuestionOption model
   */
  readonly fields: QuestionOptionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for QuestionOption.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuestionOptionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    question<T extends QuestionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuestionDefaultArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    questionAnswer<T extends QuestionOption$questionAnswerArgs<ExtArgs> = {}>(args?: Subset<T, QuestionOption$questionAnswerArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionAnswerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    studentQuizAnswers<T extends QuestionOption$studentQuizAnswersArgs<ExtArgs> = {}>(args?: Subset<T, QuestionOption$studentQuizAnswersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentQuizAnswerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the QuestionOption model
   */
  interface QuestionOptionFieldRefs {
    readonly id: FieldRef<"QuestionOption", 'String'>
    readonly questionId: FieldRef<"QuestionOption", 'String'>
    readonly option: FieldRef<"QuestionOption", 'String'>
  }
    

  // Custom InputTypes
  /**
   * QuestionOption findUnique
   */
  export type QuestionOptionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionOption
     */
    select?: QuestionOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionOption
     */
    omit?: QuestionOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionOptionInclude<ExtArgs> | null
    /**
     * Filter, which QuestionOption to fetch.
     */
    where: QuestionOptionWhereUniqueInput
  }

  /**
   * QuestionOption findUniqueOrThrow
   */
  export type QuestionOptionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionOption
     */
    select?: QuestionOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionOption
     */
    omit?: QuestionOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionOptionInclude<ExtArgs> | null
    /**
     * Filter, which QuestionOption to fetch.
     */
    where: QuestionOptionWhereUniqueInput
  }

  /**
   * QuestionOption findFirst
   */
  export type QuestionOptionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionOption
     */
    select?: QuestionOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionOption
     */
    omit?: QuestionOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionOptionInclude<ExtArgs> | null
    /**
     * Filter, which QuestionOption to fetch.
     */
    where?: QuestionOptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuestionOptions to fetch.
     */
    orderBy?: QuestionOptionOrderByWithRelationInput | QuestionOptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuestionOptions.
     */
    cursor?: QuestionOptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuestionOptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuestionOptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuestionOptions.
     */
    distinct?: QuestionOptionScalarFieldEnum | QuestionOptionScalarFieldEnum[]
  }

  /**
   * QuestionOption findFirstOrThrow
   */
  export type QuestionOptionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionOption
     */
    select?: QuestionOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionOption
     */
    omit?: QuestionOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionOptionInclude<ExtArgs> | null
    /**
     * Filter, which QuestionOption to fetch.
     */
    where?: QuestionOptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuestionOptions to fetch.
     */
    orderBy?: QuestionOptionOrderByWithRelationInput | QuestionOptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuestionOptions.
     */
    cursor?: QuestionOptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuestionOptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuestionOptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuestionOptions.
     */
    distinct?: QuestionOptionScalarFieldEnum | QuestionOptionScalarFieldEnum[]
  }

  /**
   * QuestionOption findMany
   */
  export type QuestionOptionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionOption
     */
    select?: QuestionOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionOption
     */
    omit?: QuestionOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionOptionInclude<ExtArgs> | null
    /**
     * Filter, which QuestionOptions to fetch.
     */
    where?: QuestionOptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuestionOptions to fetch.
     */
    orderBy?: QuestionOptionOrderByWithRelationInput | QuestionOptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing QuestionOptions.
     */
    cursor?: QuestionOptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuestionOptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuestionOptions.
     */
    skip?: number
    distinct?: QuestionOptionScalarFieldEnum | QuestionOptionScalarFieldEnum[]
  }

  /**
   * QuestionOption create
   */
  export type QuestionOptionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionOption
     */
    select?: QuestionOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionOption
     */
    omit?: QuestionOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionOptionInclude<ExtArgs> | null
    /**
     * The data needed to create a QuestionOption.
     */
    data: XOR<QuestionOptionCreateInput, QuestionOptionUncheckedCreateInput>
  }

  /**
   * QuestionOption createMany
   */
  export type QuestionOptionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many QuestionOptions.
     */
    data: QuestionOptionCreateManyInput | QuestionOptionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * QuestionOption update
   */
  export type QuestionOptionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionOption
     */
    select?: QuestionOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionOption
     */
    omit?: QuestionOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionOptionInclude<ExtArgs> | null
    /**
     * The data needed to update a QuestionOption.
     */
    data: XOR<QuestionOptionUpdateInput, QuestionOptionUncheckedUpdateInput>
    /**
     * Choose, which QuestionOption to update.
     */
    where: QuestionOptionWhereUniqueInput
  }

  /**
   * QuestionOption updateMany
   */
  export type QuestionOptionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update QuestionOptions.
     */
    data: XOR<QuestionOptionUpdateManyMutationInput, QuestionOptionUncheckedUpdateManyInput>
    /**
     * Filter which QuestionOptions to update
     */
    where?: QuestionOptionWhereInput
    /**
     * Limit how many QuestionOptions to update.
     */
    limit?: number
  }

  /**
   * QuestionOption upsert
   */
  export type QuestionOptionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionOption
     */
    select?: QuestionOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionOption
     */
    omit?: QuestionOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionOptionInclude<ExtArgs> | null
    /**
     * The filter to search for the QuestionOption to update in case it exists.
     */
    where: QuestionOptionWhereUniqueInput
    /**
     * In case the QuestionOption found by the `where` argument doesn't exist, create a new QuestionOption with this data.
     */
    create: XOR<QuestionOptionCreateInput, QuestionOptionUncheckedCreateInput>
    /**
     * In case the QuestionOption was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuestionOptionUpdateInput, QuestionOptionUncheckedUpdateInput>
  }

  /**
   * QuestionOption delete
   */
  export type QuestionOptionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionOption
     */
    select?: QuestionOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionOption
     */
    omit?: QuestionOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionOptionInclude<ExtArgs> | null
    /**
     * Filter which QuestionOption to delete.
     */
    where: QuestionOptionWhereUniqueInput
  }

  /**
   * QuestionOption deleteMany
   */
  export type QuestionOptionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuestionOptions to delete
     */
    where?: QuestionOptionWhereInput
    /**
     * Limit how many QuestionOptions to delete.
     */
    limit?: number
  }

  /**
   * QuestionOption.questionAnswer
   */
  export type QuestionOption$questionAnswerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionAnswer
     */
    select?: QuestionAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionAnswer
     */
    omit?: QuestionAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionAnswerInclude<ExtArgs> | null
    where?: QuestionAnswerWhereInput
    orderBy?: QuestionAnswerOrderByWithRelationInput | QuestionAnswerOrderByWithRelationInput[]
    cursor?: QuestionAnswerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuestionAnswerScalarFieldEnum | QuestionAnswerScalarFieldEnum[]
  }

  /**
   * QuestionOption.studentQuizAnswers
   */
  export type QuestionOption$studentQuizAnswersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentQuizAnswer
     */
    select?: StudentQuizAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentQuizAnswer
     */
    omit?: StudentQuizAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentQuizAnswerInclude<ExtArgs> | null
    where?: StudentQuizAnswerWhereInput
    orderBy?: StudentQuizAnswerOrderByWithRelationInput | StudentQuizAnswerOrderByWithRelationInput[]
    cursor?: StudentQuizAnswerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StudentQuizAnswerScalarFieldEnum | StudentQuizAnswerScalarFieldEnum[]
  }

  /**
   * QuestionOption without action
   */
  export type QuestionOptionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionOption
     */
    select?: QuestionOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionOption
     */
    omit?: QuestionOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionOptionInclude<ExtArgs> | null
  }


  /**
   * Model QuestionAnswer
   */

  export type AggregateQuestionAnswer = {
    _count: QuestionAnswerCountAggregateOutputType | null
    _min: QuestionAnswerMinAggregateOutputType | null
    _max: QuestionAnswerMaxAggregateOutputType | null
  }

  export type QuestionAnswerMinAggregateOutputType = {
    id: string | null
    questionId: string | null
    answerId: string | null
  }

  export type QuestionAnswerMaxAggregateOutputType = {
    id: string | null
    questionId: string | null
    answerId: string | null
  }

  export type QuestionAnswerCountAggregateOutputType = {
    id: number
    questionId: number
    answerId: number
    _all: number
  }


  export type QuestionAnswerMinAggregateInputType = {
    id?: true
    questionId?: true
    answerId?: true
  }

  export type QuestionAnswerMaxAggregateInputType = {
    id?: true
    questionId?: true
    answerId?: true
  }

  export type QuestionAnswerCountAggregateInputType = {
    id?: true
    questionId?: true
    answerId?: true
    _all?: true
  }

  export type QuestionAnswerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuestionAnswer to aggregate.
     */
    where?: QuestionAnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuestionAnswers to fetch.
     */
    orderBy?: QuestionAnswerOrderByWithRelationInput | QuestionAnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuestionAnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuestionAnswers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuestionAnswers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned QuestionAnswers
    **/
    _count?: true | QuestionAnswerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuestionAnswerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuestionAnswerMaxAggregateInputType
  }

  export type GetQuestionAnswerAggregateType<T extends QuestionAnswerAggregateArgs> = {
        [P in keyof T & keyof AggregateQuestionAnswer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuestionAnswer[P]>
      : GetScalarType<T[P], AggregateQuestionAnswer[P]>
  }




  export type QuestionAnswerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionAnswerWhereInput
    orderBy?: QuestionAnswerOrderByWithAggregationInput | QuestionAnswerOrderByWithAggregationInput[]
    by: QuestionAnswerScalarFieldEnum[] | QuestionAnswerScalarFieldEnum
    having?: QuestionAnswerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuestionAnswerCountAggregateInputType | true
    _min?: QuestionAnswerMinAggregateInputType
    _max?: QuestionAnswerMaxAggregateInputType
  }

  export type QuestionAnswerGroupByOutputType = {
    id: string
    questionId: string
    answerId: string
    _count: QuestionAnswerCountAggregateOutputType | null
    _min: QuestionAnswerMinAggregateOutputType | null
    _max: QuestionAnswerMaxAggregateOutputType | null
  }

  type GetQuestionAnswerGroupByPayload<T extends QuestionAnswerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuestionAnswerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuestionAnswerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuestionAnswerGroupByOutputType[P]>
            : GetScalarType<T[P], QuestionAnswerGroupByOutputType[P]>
        }
      >
    >


  export type QuestionAnswerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    questionId?: boolean
    answerId?: boolean
    question?: boolean | QuestionDefaultArgs<ExtArgs>
    answer?: boolean | QuestionOptionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["questionAnswer"]>



  export type QuestionAnswerSelectScalar = {
    id?: boolean
    questionId?: boolean
    answerId?: boolean
  }

  export type QuestionAnswerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "questionId" | "answerId", ExtArgs["result"]["questionAnswer"]>
  export type QuestionAnswerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    question?: boolean | QuestionDefaultArgs<ExtArgs>
    answer?: boolean | QuestionOptionDefaultArgs<ExtArgs>
  }

  export type $QuestionAnswerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "QuestionAnswer"
    objects: {
      question: Prisma.$QuestionPayload<ExtArgs>
      answer: Prisma.$QuestionOptionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      questionId: string
      answerId: string
    }, ExtArgs["result"]["questionAnswer"]>
    composites: {}
  }

  type QuestionAnswerGetPayload<S extends boolean | null | undefined | QuestionAnswerDefaultArgs> = $Result.GetResult<Prisma.$QuestionAnswerPayload, S>

  type QuestionAnswerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QuestionAnswerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuestionAnswerCountAggregateInputType | true
    }

  export interface QuestionAnswerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['QuestionAnswer'], meta: { name: 'QuestionAnswer' } }
    /**
     * Find zero or one QuestionAnswer that matches the filter.
     * @param {QuestionAnswerFindUniqueArgs} args - Arguments to find a QuestionAnswer
     * @example
     * // Get one QuestionAnswer
     * const questionAnswer = await prisma.questionAnswer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuestionAnswerFindUniqueArgs>(args: SelectSubset<T, QuestionAnswerFindUniqueArgs<ExtArgs>>): Prisma__QuestionAnswerClient<$Result.GetResult<Prisma.$QuestionAnswerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one QuestionAnswer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QuestionAnswerFindUniqueOrThrowArgs} args - Arguments to find a QuestionAnswer
     * @example
     * // Get one QuestionAnswer
     * const questionAnswer = await prisma.questionAnswer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuestionAnswerFindUniqueOrThrowArgs>(args: SelectSubset<T, QuestionAnswerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuestionAnswerClient<$Result.GetResult<Prisma.$QuestionAnswerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QuestionAnswer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionAnswerFindFirstArgs} args - Arguments to find a QuestionAnswer
     * @example
     * // Get one QuestionAnswer
     * const questionAnswer = await prisma.questionAnswer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuestionAnswerFindFirstArgs>(args?: SelectSubset<T, QuestionAnswerFindFirstArgs<ExtArgs>>): Prisma__QuestionAnswerClient<$Result.GetResult<Prisma.$QuestionAnswerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QuestionAnswer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionAnswerFindFirstOrThrowArgs} args - Arguments to find a QuestionAnswer
     * @example
     * // Get one QuestionAnswer
     * const questionAnswer = await prisma.questionAnswer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuestionAnswerFindFirstOrThrowArgs>(args?: SelectSubset<T, QuestionAnswerFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuestionAnswerClient<$Result.GetResult<Prisma.$QuestionAnswerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more QuestionAnswers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionAnswerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all QuestionAnswers
     * const questionAnswers = await prisma.questionAnswer.findMany()
     * 
     * // Get first 10 QuestionAnswers
     * const questionAnswers = await prisma.questionAnswer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const questionAnswerWithIdOnly = await prisma.questionAnswer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QuestionAnswerFindManyArgs>(args?: SelectSubset<T, QuestionAnswerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionAnswerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a QuestionAnswer.
     * @param {QuestionAnswerCreateArgs} args - Arguments to create a QuestionAnswer.
     * @example
     * // Create one QuestionAnswer
     * const QuestionAnswer = await prisma.questionAnswer.create({
     *   data: {
     *     // ... data to create a QuestionAnswer
     *   }
     * })
     * 
     */
    create<T extends QuestionAnswerCreateArgs>(args: SelectSubset<T, QuestionAnswerCreateArgs<ExtArgs>>): Prisma__QuestionAnswerClient<$Result.GetResult<Prisma.$QuestionAnswerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many QuestionAnswers.
     * @param {QuestionAnswerCreateManyArgs} args - Arguments to create many QuestionAnswers.
     * @example
     * // Create many QuestionAnswers
     * const questionAnswer = await prisma.questionAnswer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuestionAnswerCreateManyArgs>(args?: SelectSubset<T, QuestionAnswerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a QuestionAnswer.
     * @param {QuestionAnswerDeleteArgs} args - Arguments to delete one QuestionAnswer.
     * @example
     * // Delete one QuestionAnswer
     * const QuestionAnswer = await prisma.questionAnswer.delete({
     *   where: {
     *     // ... filter to delete one QuestionAnswer
     *   }
     * })
     * 
     */
    delete<T extends QuestionAnswerDeleteArgs>(args: SelectSubset<T, QuestionAnswerDeleteArgs<ExtArgs>>): Prisma__QuestionAnswerClient<$Result.GetResult<Prisma.$QuestionAnswerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one QuestionAnswer.
     * @param {QuestionAnswerUpdateArgs} args - Arguments to update one QuestionAnswer.
     * @example
     * // Update one QuestionAnswer
     * const questionAnswer = await prisma.questionAnswer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuestionAnswerUpdateArgs>(args: SelectSubset<T, QuestionAnswerUpdateArgs<ExtArgs>>): Prisma__QuestionAnswerClient<$Result.GetResult<Prisma.$QuestionAnswerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more QuestionAnswers.
     * @param {QuestionAnswerDeleteManyArgs} args - Arguments to filter QuestionAnswers to delete.
     * @example
     * // Delete a few QuestionAnswers
     * const { count } = await prisma.questionAnswer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuestionAnswerDeleteManyArgs>(args?: SelectSubset<T, QuestionAnswerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QuestionAnswers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionAnswerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many QuestionAnswers
     * const questionAnswer = await prisma.questionAnswer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuestionAnswerUpdateManyArgs>(args: SelectSubset<T, QuestionAnswerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one QuestionAnswer.
     * @param {QuestionAnswerUpsertArgs} args - Arguments to update or create a QuestionAnswer.
     * @example
     * // Update or create a QuestionAnswer
     * const questionAnswer = await prisma.questionAnswer.upsert({
     *   create: {
     *     // ... data to create a QuestionAnswer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the QuestionAnswer we want to update
     *   }
     * })
     */
    upsert<T extends QuestionAnswerUpsertArgs>(args: SelectSubset<T, QuestionAnswerUpsertArgs<ExtArgs>>): Prisma__QuestionAnswerClient<$Result.GetResult<Prisma.$QuestionAnswerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of QuestionAnswers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionAnswerCountArgs} args - Arguments to filter QuestionAnswers to count.
     * @example
     * // Count the number of QuestionAnswers
     * const count = await prisma.questionAnswer.count({
     *   where: {
     *     // ... the filter for the QuestionAnswers we want to count
     *   }
     * })
    **/
    count<T extends QuestionAnswerCountArgs>(
      args?: Subset<T, QuestionAnswerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuestionAnswerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a QuestionAnswer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionAnswerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QuestionAnswerAggregateArgs>(args: Subset<T, QuestionAnswerAggregateArgs>): Prisma.PrismaPromise<GetQuestionAnswerAggregateType<T>>

    /**
     * Group by QuestionAnswer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionAnswerGroupByArgs} args - Group by arguments.
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
      T extends QuestionAnswerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuestionAnswerGroupByArgs['orderBy'] }
        : { orderBy?: QuestionAnswerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, QuestionAnswerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuestionAnswerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the QuestionAnswer model
   */
  readonly fields: QuestionAnswerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for QuestionAnswer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuestionAnswerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    question<T extends QuestionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuestionDefaultArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    answer<T extends QuestionOptionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuestionOptionDefaultArgs<ExtArgs>>): Prisma__QuestionOptionClient<$Result.GetResult<Prisma.$QuestionOptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the QuestionAnswer model
   */
  interface QuestionAnswerFieldRefs {
    readonly id: FieldRef<"QuestionAnswer", 'String'>
    readonly questionId: FieldRef<"QuestionAnswer", 'String'>
    readonly answerId: FieldRef<"QuestionAnswer", 'String'>
  }
    

  // Custom InputTypes
  /**
   * QuestionAnswer findUnique
   */
  export type QuestionAnswerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionAnswer
     */
    select?: QuestionAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionAnswer
     */
    omit?: QuestionAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionAnswerInclude<ExtArgs> | null
    /**
     * Filter, which QuestionAnswer to fetch.
     */
    where: QuestionAnswerWhereUniqueInput
  }

  /**
   * QuestionAnswer findUniqueOrThrow
   */
  export type QuestionAnswerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionAnswer
     */
    select?: QuestionAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionAnswer
     */
    omit?: QuestionAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionAnswerInclude<ExtArgs> | null
    /**
     * Filter, which QuestionAnswer to fetch.
     */
    where: QuestionAnswerWhereUniqueInput
  }

  /**
   * QuestionAnswer findFirst
   */
  export type QuestionAnswerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionAnswer
     */
    select?: QuestionAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionAnswer
     */
    omit?: QuestionAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionAnswerInclude<ExtArgs> | null
    /**
     * Filter, which QuestionAnswer to fetch.
     */
    where?: QuestionAnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuestionAnswers to fetch.
     */
    orderBy?: QuestionAnswerOrderByWithRelationInput | QuestionAnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuestionAnswers.
     */
    cursor?: QuestionAnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuestionAnswers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuestionAnswers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuestionAnswers.
     */
    distinct?: QuestionAnswerScalarFieldEnum | QuestionAnswerScalarFieldEnum[]
  }

  /**
   * QuestionAnswer findFirstOrThrow
   */
  export type QuestionAnswerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionAnswer
     */
    select?: QuestionAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionAnswer
     */
    omit?: QuestionAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionAnswerInclude<ExtArgs> | null
    /**
     * Filter, which QuestionAnswer to fetch.
     */
    where?: QuestionAnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuestionAnswers to fetch.
     */
    orderBy?: QuestionAnswerOrderByWithRelationInput | QuestionAnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuestionAnswers.
     */
    cursor?: QuestionAnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuestionAnswers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuestionAnswers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuestionAnswers.
     */
    distinct?: QuestionAnswerScalarFieldEnum | QuestionAnswerScalarFieldEnum[]
  }

  /**
   * QuestionAnswer findMany
   */
  export type QuestionAnswerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionAnswer
     */
    select?: QuestionAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionAnswer
     */
    omit?: QuestionAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionAnswerInclude<ExtArgs> | null
    /**
     * Filter, which QuestionAnswers to fetch.
     */
    where?: QuestionAnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuestionAnswers to fetch.
     */
    orderBy?: QuestionAnswerOrderByWithRelationInput | QuestionAnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing QuestionAnswers.
     */
    cursor?: QuestionAnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuestionAnswers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuestionAnswers.
     */
    skip?: number
    distinct?: QuestionAnswerScalarFieldEnum | QuestionAnswerScalarFieldEnum[]
  }

  /**
   * QuestionAnswer create
   */
  export type QuestionAnswerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionAnswer
     */
    select?: QuestionAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionAnswer
     */
    omit?: QuestionAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionAnswerInclude<ExtArgs> | null
    /**
     * The data needed to create a QuestionAnswer.
     */
    data: XOR<QuestionAnswerCreateInput, QuestionAnswerUncheckedCreateInput>
  }

  /**
   * QuestionAnswer createMany
   */
  export type QuestionAnswerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many QuestionAnswers.
     */
    data: QuestionAnswerCreateManyInput | QuestionAnswerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * QuestionAnswer update
   */
  export type QuestionAnswerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionAnswer
     */
    select?: QuestionAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionAnswer
     */
    omit?: QuestionAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionAnswerInclude<ExtArgs> | null
    /**
     * The data needed to update a QuestionAnswer.
     */
    data: XOR<QuestionAnswerUpdateInput, QuestionAnswerUncheckedUpdateInput>
    /**
     * Choose, which QuestionAnswer to update.
     */
    where: QuestionAnswerWhereUniqueInput
  }

  /**
   * QuestionAnswer updateMany
   */
  export type QuestionAnswerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update QuestionAnswers.
     */
    data: XOR<QuestionAnswerUpdateManyMutationInput, QuestionAnswerUncheckedUpdateManyInput>
    /**
     * Filter which QuestionAnswers to update
     */
    where?: QuestionAnswerWhereInput
    /**
     * Limit how many QuestionAnswers to update.
     */
    limit?: number
  }

  /**
   * QuestionAnswer upsert
   */
  export type QuestionAnswerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionAnswer
     */
    select?: QuestionAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionAnswer
     */
    omit?: QuestionAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionAnswerInclude<ExtArgs> | null
    /**
     * The filter to search for the QuestionAnswer to update in case it exists.
     */
    where: QuestionAnswerWhereUniqueInput
    /**
     * In case the QuestionAnswer found by the `where` argument doesn't exist, create a new QuestionAnswer with this data.
     */
    create: XOR<QuestionAnswerCreateInput, QuestionAnswerUncheckedCreateInput>
    /**
     * In case the QuestionAnswer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuestionAnswerUpdateInput, QuestionAnswerUncheckedUpdateInput>
  }

  /**
   * QuestionAnswer delete
   */
  export type QuestionAnswerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionAnswer
     */
    select?: QuestionAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionAnswer
     */
    omit?: QuestionAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionAnswerInclude<ExtArgs> | null
    /**
     * Filter which QuestionAnswer to delete.
     */
    where: QuestionAnswerWhereUniqueInput
  }

  /**
   * QuestionAnswer deleteMany
   */
  export type QuestionAnswerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuestionAnswers to delete
     */
    where?: QuestionAnswerWhereInput
    /**
     * Limit how many QuestionAnswers to delete.
     */
    limit?: number
  }

  /**
   * QuestionAnswer without action
   */
  export type QuestionAnswerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionAnswer
     */
    select?: QuestionAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionAnswer
     */
    omit?: QuestionAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionAnswerInclude<ExtArgs> | null
  }


  /**
   * Model StudentQuiz
   */

  export type AggregateStudentQuiz = {
    _count: StudentQuizCountAggregateOutputType | null
    _avg: StudentQuizAvgAggregateOutputType | null
    _sum: StudentQuizSumAggregateOutputType | null
    _min: StudentQuizMinAggregateOutputType | null
    _max: StudentQuizMaxAggregateOutputType | null
  }

  export type StudentQuizAvgAggregateOutputType = {
    score: number | null
  }

  export type StudentQuizSumAggregateOutputType = {
    score: number | null
  }

  export type StudentQuizMinAggregateOutputType = {
    id: string | null
    studentId: string | null
    quizId: string | null
    score: number | null
    passed: boolean | null
    takenAt: Date | null
  }

  export type StudentQuizMaxAggregateOutputType = {
    id: string | null
    studentId: string | null
    quizId: string | null
    score: number | null
    passed: boolean | null
    takenAt: Date | null
  }

  export type StudentQuizCountAggregateOutputType = {
    id: number
    studentId: number
    quizId: number
    score: number
    passed: number
    takenAt: number
    _all: number
  }


  export type StudentQuizAvgAggregateInputType = {
    score?: true
  }

  export type StudentQuizSumAggregateInputType = {
    score?: true
  }

  export type StudentQuizMinAggregateInputType = {
    id?: true
    studentId?: true
    quizId?: true
    score?: true
    passed?: true
    takenAt?: true
  }

  export type StudentQuizMaxAggregateInputType = {
    id?: true
    studentId?: true
    quizId?: true
    score?: true
    passed?: true
    takenAt?: true
  }

  export type StudentQuizCountAggregateInputType = {
    id?: true
    studentId?: true
    quizId?: true
    score?: true
    passed?: true
    takenAt?: true
    _all?: true
  }

  export type StudentQuizAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StudentQuiz to aggregate.
     */
    where?: StudentQuizWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentQuizs to fetch.
     */
    orderBy?: StudentQuizOrderByWithRelationInput | StudentQuizOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StudentQuizWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentQuizs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentQuizs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StudentQuizs
    **/
    _count?: true | StudentQuizCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StudentQuizAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StudentQuizSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudentQuizMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudentQuizMaxAggregateInputType
  }

  export type GetStudentQuizAggregateType<T extends StudentQuizAggregateArgs> = {
        [P in keyof T & keyof AggregateStudentQuiz]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudentQuiz[P]>
      : GetScalarType<T[P], AggregateStudentQuiz[P]>
  }




  export type StudentQuizGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentQuizWhereInput
    orderBy?: StudentQuizOrderByWithAggregationInput | StudentQuizOrderByWithAggregationInput[]
    by: StudentQuizScalarFieldEnum[] | StudentQuizScalarFieldEnum
    having?: StudentQuizScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudentQuizCountAggregateInputType | true
    _avg?: StudentQuizAvgAggregateInputType
    _sum?: StudentQuizSumAggregateInputType
    _min?: StudentQuizMinAggregateInputType
    _max?: StudentQuizMaxAggregateInputType
  }

  export type StudentQuizGroupByOutputType = {
    id: string
    studentId: string
    quizId: string
    score: number | null
    passed: boolean
    takenAt: Date
    _count: StudentQuizCountAggregateOutputType | null
    _avg: StudentQuizAvgAggregateOutputType | null
    _sum: StudentQuizSumAggregateOutputType | null
    _min: StudentQuizMinAggregateOutputType | null
    _max: StudentQuizMaxAggregateOutputType | null
  }

  type GetStudentQuizGroupByPayload<T extends StudentQuizGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudentQuizGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudentQuizGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudentQuizGroupByOutputType[P]>
            : GetScalarType<T[P], StudentQuizGroupByOutputType[P]>
        }
      >
    >


  export type StudentQuizSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    quizId?: boolean
    score?: boolean
    passed?: boolean
    takenAt?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
    quiz?: boolean | QuizDefaultArgs<ExtArgs>
    studentQuizAnswers?: boolean | StudentQuiz$studentQuizAnswersArgs<ExtArgs>
    _count?: boolean | StudentQuizCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["studentQuiz"]>



  export type StudentQuizSelectScalar = {
    id?: boolean
    studentId?: boolean
    quizId?: boolean
    score?: boolean
    passed?: boolean
    takenAt?: boolean
  }

  export type StudentQuizOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "studentId" | "quizId" | "score" | "passed" | "takenAt", ExtArgs["result"]["studentQuiz"]>
  export type StudentQuizInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
    quiz?: boolean | QuizDefaultArgs<ExtArgs>
    studentQuizAnswers?: boolean | StudentQuiz$studentQuizAnswersArgs<ExtArgs>
    _count?: boolean | StudentQuizCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $StudentQuizPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StudentQuiz"
    objects: {
      student: Prisma.$StudentPayload<ExtArgs>
      quiz: Prisma.$QuizPayload<ExtArgs>
      studentQuizAnswers: Prisma.$StudentQuizAnswerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      studentId: string
      quizId: string
      score: number | null
      passed: boolean
      takenAt: Date
    }, ExtArgs["result"]["studentQuiz"]>
    composites: {}
  }

  type StudentQuizGetPayload<S extends boolean | null | undefined | StudentQuizDefaultArgs> = $Result.GetResult<Prisma.$StudentQuizPayload, S>

  type StudentQuizCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StudentQuizFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StudentQuizCountAggregateInputType | true
    }

  export interface StudentQuizDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StudentQuiz'], meta: { name: 'StudentQuiz' } }
    /**
     * Find zero or one StudentQuiz that matches the filter.
     * @param {StudentQuizFindUniqueArgs} args - Arguments to find a StudentQuiz
     * @example
     * // Get one StudentQuiz
     * const studentQuiz = await prisma.studentQuiz.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StudentQuizFindUniqueArgs>(args: SelectSubset<T, StudentQuizFindUniqueArgs<ExtArgs>>): Prisma__StudentQuizClient<$Result.GetResult<Prisma.$StudentQuizPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StudentQuiz that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StudentQuizFindUniqueOrThrowArgs} args - Arguments to find a StudentQuiz
     * @example
     * // Get one StudentQuiz
     * const studentQuiz = await prisma.studentQuiz.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StudentQuizFindUniqueOrThrowArgs>(args: SelectSubset<T, StudentQuizFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StudentQuizClient<$Result.GetResult<Prisma.$StudentQuizPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StudentQuiz that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentQuizFindFirstArgs} args - Arguments to find a StudentQuiz
     * @example
     * // Get one StudentQuiz
     * const studentQuiz = await prisma.studentQuiz.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StudentQuizFindFirstArgs>(args?: SelectSubset<T, StudentQuizFindFirstArgs<ExtArgs>>): Prisma__StudentQuizClient<$Result.GetResult<Prisma.$StudentQuizPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StudentQuiz that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentQuizFindFirstOrThrowArgs} args - Arguments to find a StudentQuiz
     * @example
     * // Get one StudentQuiz
     * const studentQuiz = await prisma.studentQuiz.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StudentQuizFindFirstOrThrowArgs>(args?: SelectSubset<T, StudentQuizFindFirstOrThrowArgs<ExtArgs>>): Prisma__StudentQuizClient<$Result.GetResult<Prisma.$StudentQuizPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StudentQuizs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentQuizFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StudentQuizs
     * const studentQuizs = await prisma.studentQuiz.findMany()
     * 
     * // Get first 10 StudentQuizs
     * const studentQuizs = await prisma.studentQuiz.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const studentQuizWithIdOnly = await prisma.studentQuiz.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StudentQuizFindManyArgs>(args?: SelectSubset<T, StudentQuizFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentQuizPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StudentQuiz.
     * @param {StudentQuizCreateArgs} args - Arguments to create a StudentQuiz.
     * @example
     * // Create one StudentQuiz
     * const StudentQuiz = await prisma.studentQuiz.create({
     *   data: {
     *     // ... data to create a StudentQuiz
     *   }
     * })
     * 
     */
    create<T extends StudentQuizCreateArgs>(args: SelectSubset<T, StudentQuizCreateArgs<ExtArgs>>): Prisma__StudentQuizClient<$Result.GetResult<Prisma.$StudentQuizPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StudentQuizs.
     * @param {StudentQuizCreateManyArgs} args - Arguments to create many StudentQuizs.
     * @example
     * // Create many StudentQuizs
     * const studentQuiz = await prisma.studentQuiz.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StudentQuizCreateManyArgs>(args?: SelectSubset<T, StudentQuizCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a StudentQuiz.
     * @param {StudentQuizDeleteArgs} args - Arguments to delete one StudentQuiz.
     * @example
     * // Delete one StudentQuiz
     * const StudentQuiz = await prisma.studentQuiz.delete({
     *   where: {
     *     // ... filter to delete one StudentQuiz
     *   }
     * })
     * 
     */
    delete<T extends StudentQuizDeleteArgs>(args: SelectSubset<T, StudentQuizDeleteArgs<ExtArgs>>): Prisma__StudentQuizClient<$Result.GetResult<Prisma.$StudentQuizPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StudentQuiz.
     * @param {StudentQuizUpdateArgs} args - Arguments to update one StudentQuiz.
     * @example
     * // Update one StudentQuiz
     * const studentQuiz = await prisma.studentQuiz.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StudentQuizUpdateArgs>(args: SelectSubset<T, StudentQuizUpdateArgs<ExtArgs>>): Prisma__StudentQuizClient<$Result.GetResult<Prisma.$StudentQuizPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StudentQuizs.
     * @param {StudentQuizDeleteManyArgs} args - Arguments to filter StudentQuizs to delete.
     * @example
     * // Delete a few StudentQuizs
     * const { count } = await prisma.studentQuiz.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StudentQuizDeleteManyArgs>(args?: SelectSubset<T, StudentQuizDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StudentQuizs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentQuizUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StudentQuizs
     * const studentQuiz = await prisma.studentQuiz.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StudentQuizUpdateManyArgs>(args: SelectSubset<T, StudentQuizUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one StudentQuiz.
     * @param {StudentQuizUpsertArgs} args - Arguments to update or create a StudentQuiz.
     * @example
     * // Update or create a StudentQuiz
     * const studentQuiz = await prisma.studentQuiz.upsert({
     *   create: {
     *     // ... data to create a StudentQuiz
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StudentQuiz we want to update
     *   }
     * })
     */
    upsert<T extends StudentQuizUpsertArgs>(args: SelectSubset<T, StudentQuizUpsertArgs<ExtArgs>>): Prisma__StudentQuizClient<$Result.GetResult<Prisma.$StudentQuizPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StudentQuizs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentQuizCountArgs} args - Arguments to filter StudentQuizs to count.
     * @example
     * // Count the number of StudentQuizs
     * const count = await prisma.studentQuiz.count({
     *   where: {
     *     // ... the filter for the StudentQuizs we want to count
     *   }
     * })
    **/
    count<T extends StudentQuizCountArgs>(
      args?: Subset<T, StudentQuizCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudentQuizCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StudentQuiz.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentQuizAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StudentQuizAggregateArgs>(args: Subset<T, StudentQuizAggregateArgs>): Prisma.PrismaPromise<GetStudentQuizAggregateType<T>>

    /**
     * Group by StudentQuiz.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentQuizGroupByArgs} args - Group by arguments.
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
      T extends StudentQuizGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StudentQuizGroupByArgs['orderBy'] }
        : { orderBy?: StudentQuizGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StudentQuizGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentQuizGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StudentQuiz model
   */
  readonly fields: StudentQuizFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StudentQuiz.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StudentQuizClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    student<T extends StudentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StudentDefaultArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    quiz<T extends QuizDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuizDefaultArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    studentQuizAnswers<T extends StudentQuiz$studentQuizAnswersArgs<ExtArgs> = {}>(args?: Subset<T, StudentQuiz$studentQuizAnswersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentQuizAnswerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the StudentQuiz model
   */
  interface StudentQuizFieldRefs {
    readonly id: FieldRef<"StudentQuiz", 'String'>
    readonly studentId: FieldRef<"StudentQuiz", 'String'>
    readonly quizId: FieldRef<"StudentQuiz", 'String'>
    readonly score: FieldRef<"StudentQuiz", 'Float'>
    readonly passed: FieldRef<"StudentQuiz", 'Boolean'>
    readonly takenAt: FieldRef<"StudentQuiz", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * StudentQuiz findUnique
   */
  export type StudentQuizFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentQuiz
     */
    select?: StudentQuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentQuiz
     */
    omit?: StudentQuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentQuizInclude<ExtArgs> | null
    /**
     * Filter, which StudentQuiz to fetch.
     */
    where: StudentQuizWhereUniqueInput
  }

  /**
   * StudentQuiz findUniqueOrThrow
   */
  export type StudentQuizFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentQuiz
     */
    select?: StudentQuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentQuiz
     */
    omit?: StudentQuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentQuizInclude<ExtArgs> | null
    /**
     * Filter, which StudentQuiz to fetch.
     */
    where: StudentQuizWhereUniqueInput
  }

  /**
   * StudentQuiz findFirst
   */
  export type StudentQuizFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentQuiz
     */
    select?: StudentQuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentQuiz
     */
    omit?: StudentQuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentQuizInclude<ExtArgs> | null
    /**
     * Filter, which StudentQuiz to fetch.
     */
    where?: StudentQuizWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentQuizs to fetch.
     */
    orderBy?: StudentQuizOrderByWithRelationInput | StudentQuizOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StudentQuizs.
     */
    cursor?: StudentQuizWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentQuizs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentQuizs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StudentQuizs.
     */
    distinct?: StudentQuizScalarFieldEnum | StudentQuizScalarFieldEnum[]
  }

  /**
   * StudentQuiz findFirstOrThrow
   */
  export type StudentQuizFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentQuiz
     */
    select?: StudentQuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentQuiz
     */
    omit?: StudentQuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentQuizInclude<ExtArgs> | null
    /**
     * Filter, which StudentQuiz to fetch.
     */
    where?: StudentQuizWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentQuizs to fetch.
     */
    orderBy?: StudentQuizOrderByWithRelationInput | StudentQuizOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StudentQuizs.
     */
    cursor?: StudentQuizWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentQuizs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentQuizs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StudentQuizs.
     */
    distinct?: StudentQuizScalarFieldEnum | StudentQuizScalarFieldEnum[]
  }

  /**
   * StudentQuiz findMany
   */
  export type StudentQuizFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentQuiz
     */
    select?: StudentQuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentQuiz
     */
    omit?: StudentQuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentQuizInclude<ExtArgs> | null
    /**
     * Filter, which StudentQuizs to fetch.
     */
    where?: StudentQuizWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentQuizs to fetch.
     */
    orderBy?: StudentQuizOrderByWithRelationInput | StudentQuizOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StudentQuizs.
     */
    cursor?: StudentQuizWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentQuizs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentQuizs.
     */
    skip?: number
    distinct?: StudentQuizScalarFieldEnum | StudentQuizScalarFieldEnum[]
  }

  /**
   * StudentQuiz create
   */
  export type StudentQuizCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentQuiz
     */
    select?: StudentQuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentQuiz
     */
    omit?: StudentQuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentQuizInclude<ExtArgs> | null
    /**
     * The data needed to create a StudentQuiz.
     */
    data: XOR<StudentQuizCreateInput, StudentQuizUncheckedCreateInput>
  }

  /**
   * StudentQuiz createMany
   */
  export type StudentQuizCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StudentQuizs.
     */
    data: StudentQuizCreateManyInput | StudentQuizCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StudentQuiz update
   */
  export type StudentQuizUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentQuiz
     */
    select?: StudentQuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentQuiz
     */
    omit?: StudentQuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentQuizInclude<ExtArgs> | null
    /**
     * The data needed to update a StudentQuiz.
     */
    data: XOR<StudentQuizUpdateInput, StudentQuizUncheckedUpdateInput>
    /**
     * Choose, which StudentQuiz to update.
     */
    where: StudentQuizWhereUniqueInput
  }

  /**
   * StudentQuiz updateMany
   */
  export type StudentQuizUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StudentQuizs.
     */
    data: XOR<StudentQuizUpdateManyMutationInput, StudentQuizUncheckedUpdateManyInput>
    /**
     * Filter which StudentQuizs to update
     */
    where?: StudentQuizWhereInput
    /**
     * Limit how many StudentQuizs to update.
     */
    limit?: number
  }

  /**
   * StudentQuiz upsert
   */
  export type StudentQuizUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentQuiz
     */
    select?: StudentQuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentQuiz
     */
    omit?: StudentQuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentQuizInclude<ExtArgs> | null
    /**
     * The filter to search for the StudentQuiz to update in case it exists.
     */
    where: StudentQuizWhereUniqueInput
    /**
     * In case the StudentQuiz found by the `where` argument doesn't exist, create a new StudentQuiz with this data.
     */
    create: XOR<StudentQuizCreateInput, StudentQuizUncheckedCreateInput>
    /**
     * In case the StudentQuiz was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StudentQuizUpdateInput, StudentQuizUncheckedUpdateInput>
  }

  /**
   * StudentQuiz delete
   */
  export type StudentQuizDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentQuiz
     */
    select?: StudentQuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentQuiz
     */
    omit?: StudentQuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentQuizInclude<ExtArgs> | null
    /**
     * Filter which StudentQuiz to delete.
     */
    where: StudentQuizWhereUniqueInput
  }

  /**
   * StudentQuiz deleteMany
   */
  export type StudentQuizDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StudentQuizs to delete
     */
    where?: StudentQuizWhereInput
    /**
     * Limit how many StudentQuizs to delete.
     */
    limit?: number
  }

  /**
   * StudentQuiz.studentQuizAnswers
   */
  export type StudentQuiz$studentQuizAnswersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentQuizAnswer
     */
    select?: StudentQuizAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentQuizAnswer
     */
    omit?: StudentQuizAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentQuizAnswerInclude<ExtArgs> | null
    where?: StudentQuizAnswerWhereInput
    orderBy?: StudentQuizAnswerOrderByWithRelationInput | StudentQuizAnswerOrderByWithRelationInput[]
    cursor?: StudentQuizAnswerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StudentQuizAnswerScalarFieldEnum | StudentQuizAnswerScalarFieldEnum[]
  }

  /**
   * StudentQuiz without action
   */
  export type StudentQuizDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentQuiz
     */
    select?: StudentQuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentQuiz
     */
    omit?: StudentQuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentQuizInclude<ExtArgs> | null
  }


  /**
   * Model StudentQuizAnswer
   */

  export type AggregateStudentQuizAnswer = {
    _count: StudentQuizAnswerCountAggregateOutputType | null
    _min: StudentQuizAnswerMinAggregateOutputType | null
    _max: StudentQuizAnswerMaxAggregateOutputType | null
  }

  export type StudentQuizAnswerMinAggregateOutputType = {
    id: string | null
    studentQuizId: string | null
    questionId: string | null
    optionId: string | null
  }

  export type StudentQuizAnswerMaxAggregateOutputType = {
    id: string | null
    studentQuizId: string | null
    questionId: string | null
    optionId: string | null
  }

  export type StudentQuizAnswerCountAggregateOutputType = {
    id: number
    studentQuizId: number
    questionId: number
    optionId: number
    _all: number
  }


  export type StudentQuizAnswerMinAggregateInputType = {
    id?: true
    studentQuizId?: true
    questionId?: true
    optionId?: true
  }

  export type StudentQuizAnswerMaxAggregateInputType = {
    id?: true
    studentQuizId?: true
    questionId?: true
    optionId?: true
  }

  export type StudentQuizAnswerCountAggregateInputType = {
    id?: true
    studentQuizId?: true
    questionId?: true
    optionId?: true
    _all?: true
  }

  export type StudentQuizAnswerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StudentQuizAnswer to aggregate.
     */
    where?: StudentQuizAnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentQuizAnswers to fetch.
     */
    orderBy?: StudentQuizAnswerOrderByWithRelationInput | StudentQuizAnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StudentQuizAnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentQuizAnswers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentQuizAnswers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StudentQuizAnswers
    **/
    _count?: true | StudentQuizAnswerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudentQuizAnswerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudentQuizAnswerMaxAggregateInputType
  }

  export type GetStudentQuizAnswerAggregateType<T extends StudentQuizAnswerAggregateArgs> = {
        [P in keyof T & keyof AggregateStudentQuizAnswer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudentQuizAnswer[P]>
      : GetScalarType<T[P], AggregateStudentQuizAnswer[P]>
  }




  export type StudentQuizAnswerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentQuizAnswerWhereInput
    orderBy?: StudentQuizAnswerOrderByWithAggregationInput | StudentQuizAnswerOrderByWithAggregationInput[]
    by: StudentQuizAnswerScalarFieldEnum[] | StudentQuizAnswerScalarFieldEnum
    having?: StudentQuizAnswerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudentQuizAnswerCountAggregateInputType | true
    _min?: StudentQuizAnswerMinAggregateInputType
    _max?: StudentQuizAnswerMaxAggregateInputType
  }

  export type StudentQuizAnswerGroupByOutputType = {
    id: string
    studentQuizId: string
    questionId: string
    optionId: string
    _count: StudentQuizAnswerCountAggregateOutputType | null
    _min: StudentQuizAnswerMinAggregateOutputType | null
    _max: StudentQuizAnswerMaxAggregateOutputType | null
  }

  type GetStudentQuizAnswerGroupByPayload<T extends StudentQuizAnswerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudentQuizAnswerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudentQuizAnswerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudentQuizAnswerGroupByOutputType[P]>
            : GetScalarType<T[P], StudentQuizAnswerGroupByOutputType[P]>
        }
      >
    >


  export type StudentQuizAnswerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentQuizId?: boolean
    questionId?: boolean
    optionId?: boolean
    studentQuiz?: boolean | StudentQuizDefaultArgs<ExtArgs>
    question?: boolean | QuestionDefaultArgs<ExtArgs>
    selectedOption?: boolean | QuestionOptionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["studentQuizAnswer"]>



  export type StudentQuizAnswerSelectScalar = {
    id?: boolean
    studentQuizId?: boolean
    questionId?: boolean
    optionId?: boolean
  }

  export type StudentQuizAnswerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "studentQuizId" | "questionId" | "optionId", ExtArgs["result"]["studentQuizAnswer"]>
  export type StudentQuizAnswerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    studentQuiz?: boolean | StudentQuizDefaultArgs<ExtArgs>
    question?: boolean | QuestionDefaultArgs<ExtArgs>
    selectedOption?: boolean | QuestionOptionDefaultArgs<ExtArgs>
  }

  export type $StudentQuizAnswerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StudentQuizAnswer"
    objects: {
      studentQuiz: Prisma.$StudentQuizPayload<ExtArgs>
      question: Prisma.$QuestionPayload<ExtArgs>
      selectedOption: Prisma.$QuestionOptionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      studentQuizId: string
      questionId: string
      optionId: string
    }, ExtArgs["result"]["studentQuizAnswer"]>
    composites: {}
  }

  type StudentQuizAnswerGetPayload<S extends boolean | null | undefined | StudentQuizAnswerDefaultArgs> = $Result.GetResult<Prisma.$StudentQuizAnswerPayload, S>

  type StudentQuizAnswerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StudentQuizAnswerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StudentQuizAnswerCountAggregateInputType | true
    }

  export interface StudentQuizAnswerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StudentQuizAnswer'], meta: { name: 'StudentQuizAnswer' } }
    /**
     * Find zero or one StudentQuizAnswer that matches the filter.
     * @param {StudentQuizAnswerFindUniqueArgs} args - Arguments to find a StudentQuizAnswer
     * @example
     * // Get one StudentQuizAnswer
     * const studentQuizAnswer = await prisma.studentQuizAnswer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StudentQuizAnswerFindUniqueArgs>(args: SelectSubset<T, StudentQuizAnswerFindUniqueArgs<ExtArgs>>): Prisma__StudentQuizAnswerClient<$Result.GetResult<Prisma.$StudentQuizAnswerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StudentQuizAnswer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StudentQuizAnswerFindUniqueOrThrowArgs} args - Arguments to find a StudentQuizAnswer
     * @example
     * // Get one StudentQuizAnswer
     * const studentQuizAnswer = await prisma.studentQuizAnswer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StudentQuizAnswerFindUniqueOrThrowArgs>(args: SelectSubset<T, StudentQuizAnswerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StudentQuizAnswerClient<$Result.GetResult<Prisma.$StudentQuizAnswerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StudentQuizAnswer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentQuizAnswerFindFirstArgs} args - Arguments to find a StudentQuizAnswer
     * @example
     * // Get one StudentQuizAnswer
     * const studentQuizAnswer = await prisma.studentQuizAnswer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StudentQuizAnswerFindFirstArgs>(args?: SelectSubset<T, StudentQuizAnswerFindFirstArgs<ExtArgs>>): Prisma__StudentQuizAnswerClient<$Result.GetResult<Prisma.$StudentQuizAnswerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StudentQuizAnswer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentQuizAnswerFindFirstOrThrowArgs} args - Arguments to find a StudentQuizAnswer
     * @example
     * // Get one StudentQuizAnswer
     * const studentQuizAnswer = await prisma.studentQuizAnswer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StudentQuizAnswerFindFirstOrThrowArgs>(args?: SelectSubset<T, StudentQuizAnswerFindFirstOrThrowArgs<ExtArgs>>): Prisma__StudentQuizAnswerClient<$Result.GetResult<Prisma.$StudentQuizAnswerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StudentQuizAnswers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentQuizAnswerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StudentQuizAnswers
     * const studentQuizAnswers = await prisma.studentQuizAnswer.findMany()
     * 
     * // Get first 10 StudentQuizAnswers
     * const studentQuizAnswers = await prisma.studentQuizAnswer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const studentQuizAnswerWithIdOnly = await prisma.studentQuizAnswer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StudentQuizAnswerFindManyArgs>(args?: SelectSubset<T, StudentQuizAnswerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentQuizAnswerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StudentQuizAnswer.
     * @param {StudentQuizAnswerCreateArgs} args - Arguments to create a StudentQuizAnswer.
     * @example
     * // Create one StudentQuizAnswer
     * const StudentQuizAnswer = await prisma.studentQuizAnswer.create({
     *   data: {
     *     // ... data to create a StudentQuizAnswer
     *   }
     * })
     * 
     */
    create<T extends StudentQuizAnswerCreateArgs>(args: SelectSubset<T, StudentQuizAnswerCreateArgs<ExtArgs>>): Prisma__StudentQuizAnswerClient<$Result.GetResult<Prisma.$StudentQuizAnswerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StudentQuizAnswers.
     * @param {StudentQuizAnswerCreateManyArgs} args - Arguments to create many StudentQuizAnswers.
     * @example
     * // Create many StudentQuizAnswers
     * const studentQuizAnswer = await prisma.studentQuizAnswer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StudentQuizAnswerCreateManyArgs>(args?: SelectSubset<T, StudentQuizAnswerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a StudentQuizAnswer.
     * @param {StudentQuizAnswerDeleteArgs} args - Arguments to delete one StudentQuizAnswer.
     * @example
     * // Delete one StudentQuizAnswer
     * const StudentQuizAnswer = await prisma.studentQuizAnswer.delete({
     *   where: {
     *     // ... filter to delete one StudentQuizAnswer
     *   }
     * })
     * 
     */
    delete<T extends StudentQuizAnswerDeleteArgs>(args: SelectSubset<T, StudentQuizAnswerDeleteArgs<ExtArgs>>): Prisma__StudentQuizAnswerClient<$Result.GetResult<Prisma.$StudentQuizAnswerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StudentQuizAnswer.
     * @param {StudentQuizAnswerUpdateArgs} args - Arguments to update one StudentQuizAnswer.
     * @example
     * // Update one StudentQuizAnswer
     * const studentQuizAnswer = await prisma.studentQuizAnswer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StudentQuizAnswerUpdateArgs>(args: SelectSubset<T, StudentQuizAnswerUpdateArgs<ExtArgs>>): Prisma__StudentQuizAnswerClient<$Result.GetResult<Prisma.$StudentQuizAnswerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StudentQuizAnswers.
     * @param {StudentQuizAnswerDeleteManyArgs} args - Arguments to filter StudentQuizAnswers to delete.
     * @example
     * // Delete a few StudentQuizAnswers
     * const { count } = await prisma.studentQuizAnswer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StudentQuizAnswerDeleteManyArgs>(args?: SelectSubset<T, StudentQuizAnswerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StudentQuizAnswers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentQuizAnswerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StudentQuizAnswers
     * const studentQuizAnswer = await prisma.studentQuizAnswer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StudentQuizAnswerUpdateManyArgs>(args: SelectSubset<T, StudentQuizAnswerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one StudentQuizAnswer.
     * @param {StudentQuizAnswerUpsertArgs} args - Arguments to update or create a StudentQuizAnswer.
     * @example
     * // Update or create a StudentQuizAnswer
     * const studentQuizAnswer = await prisma.studentQuizAnswer.upsert({
     *   create: {
     *     // ... data to create a StudentQuizAnswer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StudentQuizAnswer we want to update
     *   }
     * })
     */
    upsert<T extends StudentQuizAnswerUpsertArgs>(args: SelectSubset<T, StudentQuizAnswerUpsertArgs<ExtArgs>>): Prisma__StudentQuizAnswerClient<$Result.GetResult<Prisma.$StudentQuizAnswerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StudentQuizAnswers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentQuizAnswerCountArgs} args - Arguments to filter StudentQuizAnswers to count.
     * @example
     * // Count the number of StudentQuizAnswers
     * const count = await prisma.studentQuizAnswer.count({
     *   where: {
     *     // ... the filter for the StudentQuizAnswers we want to count
     *   }
     * })
    **/
    count<T extends StudentQuizAnswerCountArgs>(
      args?: Subset<T, StudentQuizAnswerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudentQuizAnswerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StudentQuizAnswer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentQuizAnswerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StudentQuizAnswerAggregateArgs>(args: Subset<T, StudentQuizAnswerAggregateArgs>): Prisma.PrismaPromise<GetStudentQuizAnswerAggregateType<T>>

    /**
     * Group by StudentQuizAnswer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentQuizAnswerGroupByArgs} args - Group by arguments.
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
      T extends StudentQuizAnswerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StudentQuizAnswerGroupByArgs['orderBy'] }
        : { orderBy?: StudentQuizAnswerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StudentQuizAnswerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentQuizAnswerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StudentQuizAnswer model
   */
  readonly fields: StudentQuizAnswerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StudentQuizAnswer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StudentQuizAnswerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    studentQuiz<T extends StudentQuizDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StudentQuizDefaultArgs<ExtArgs>>): Prisma__StudentQuizClient<$Result.GetResult<Prisma.$StudentQuizPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    question<T extends QuestionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuestionDefaultArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    selectedOption<T extends QuestionOptionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuestionOptionDefaultArgs<ExtArgs>>): Prisma__QuestionOptionClient<$Result.GetResult<Prisma.$QuestionOptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the StudentQuizAnswer model
   */
  interface StudentQuizAnswerFieldRefs {
    readonly id: FieldRef<"StudentQuizAnswer", 'String'>
    readonly studentQuizId: FieldRef<"StudentQuizAnswer", 'String'>
    readonly questionId: FieldRef<"StudentQuizAnswer", 'String'>
    readonly optionId: FieldRef<"StudentQuizAnswer", 'String'>
  }
    

  // Custom InputTypes
  /**
   * StudentQuizAnswer findUnique
   */
  export type StudentQuizAnswerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentQuizAnswer
     */
    select?: StudentQuizAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentQuizAnswer
     */
    omit?: StudentQuizAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentQuizAnswerInclude<ExtArgs> | null
    /**
     * Filter, which StudentQuizAnswer to fetch.
     */
    where: StudentQuizAnswerWhereUniqueInput
  }

  /**
   * StudentQuizAnswer findUniqueOrThrow
   */
  export type StudentQuizAnswerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentQuizAnswer
     */
    select?: StudentQuizAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentQuizAnswer
     */
    omit?: StudentQuizAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentQuizAnswerInclude<ExtArgs> | null
    /**
     * Filter, which StudentQuizAnswer to fetch.
     */
    where: StudentQuizAnswerWhereUniqueInput
  }

  /**
   * StudentQuizAnswer findFirst
   */
  export type StudentQuizAnswerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentQuizAnswer
     */
    select?: StudentQuizAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentQuizAnswer
     */
    omit?: StudentQuizAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentQuizAnswerInclude<ExtArgs> | null
    /**
     * Filter, which StudentQuizAnswer to fetch.
     */
    where?: StudentQuizAnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentQuizAnswers to fetch.
     */
    orderBy?: StudentQuizAnswerOrderByWithRelationInput | StudentQuizAnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StudentQuizAnswers.
     */
    cursor?: StudentQuizAnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentQuizAnswers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentQuizAnswers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StudentQuizAnswers.
     */
    distinct?: StudentQuizAnswerScalarFieldEnum | StudentQuizAnswerScalarFieldEnum[]
  }

  /**
   * StudentQuizAnswer findFirstOrThrow
   */
  export type StudentQuizAnswerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentQuizAnswer
     */
    select?: StudentQuizAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentQuizAnswer
     */
    omit?: StudentQuizAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentQuizAnswerInclude<ExtArgs> | null
    /**
     * Filter, which StudentQuizAnswer to fetch.
     */
    where?: StudentQuizAnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentQuizAnswers to fetch.
     */
    orderBy?: StudentQuizAnswerOrderByWithRelationInput | StudentQuizAnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StudentQuizAnswers.
     */
    cursor?: StudentQuizAnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentQuizAnswers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentQuizAnswers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StudentQuizAnswers.
     */
    distinct?: StudentQuizAnswerScalarFieldEnum | StudentQuizAnswerScalarFieldEnum[]
  }

  /**
   * StudentQuizAnswer findMany
   */
  export type StudentQuizAnswerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentQuizAnswer
     */
    select?: StudentQuizAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentQuizAnswer
     */
    omit?: StudentQuizAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentQuizAnswerInclude<ExtArgs> | null
    /**
     * Filter, which StudentQuizAnswers to fetch.
     */
    where?: StudentQuizAnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentQuizAnswers to fetch.
     */
    orderBy?: StudentQuizAnswerOrderByWithRelationInput | StudentQuizAnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StudentQuizAnswers.
     */
    cursor?: StudentQuizAnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentQuizAnswers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentQuizAnswers.
     */
    skip?: number
    distinct?: StudentQuizAnswerScalarFieldEnum | StudentQuizAnswerScalarFieldEnum[]
  }

  /**
   * StudentQuizAnswer create
   */
  export type StudentQuizAnswerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentQuizAnswer
     */
    select?: StudentQuizAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentQuizAnswer
     */
    omit?: StudentQuizAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentQuizAnswerInclude<ExtArgs> | null
    /**
     * The data needed to create a StudentQuizAnswer.
     */
    data: XOR<StudentQuizAnswerCreateInput, StudentQuizAnswerUncheckedCreateInput>
  }

  /**
   * StudentQuizAnswer createMany
   */
  export type StudentQuizAnswerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StudentQuizAnswers.
     */
    data: StudentQuizAnswerCreateManyInput | StudentQuizAnswerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StudentQuizAnswer update
   */
  export type StudentQuizAnswerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentQuizAnswer
     */
    select?: StudentQuizAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentQuizAnswer
     */
    omit?: StudentQuizAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentQuizAnswerInclude<ExtArgs> | null
    /**
     * The data needed to update a StudentQuizAnswer.
     */
    data: XOR<StudentQuizAnswerUpdateInput, StudentQuizAnswerUncheckedUpdateInput>
    /**
     * Choose, which StudentQuizAnswer to update.
     */
    where: StudentQuizAnswerWhereUniqueInput
  }

  /**
   * StudentQuizAnswer updateMany
   */
  export type StudentQuizAnswerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StudentQuizAnswers.
     */
    data: XOR<StudentQuizAnswerUpdateManyMutationInput, StudentQuizAnswerUncheckedUpdateManyInput>
    /**
     * Filter which StudentQuizAnswers to update
     */
    where?: StudentQuizAnswerWhereInput
    /**
     * Limit how many StudentQuizAnswers to update.
     */
    limit?: number
  }

  /**
   * StudentQuizAnswer upsert
   */
  export type StudentQuizAnswerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentQuizAnswer
     */
    select?: StudentQuizAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentQuizAnswer
     */
    omit?: StudentQuizAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentQuizAnswerInclude<ExtArgs> | null
    /**
     * The filter to search for the StudentQuizAnswer to update in case it exists.
     */
    where: StudentQuizAnswerWhereUniqueInput
    /**
     * In case the StudentQuizAnswer found by the `where` argument doesn't exist, create a new StudentQuizAnswer with this data.
     */
    create: XOR<StudentQuizAnswerCreateInput, StudentQuizAnswerUncheckedCreateInput>
    /**
     * In case the StudentQuizAnswer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StudentQuizAnswerUpdateInput, StudentQuizAnswerUncheckedUpdateInput>
  }

  /**
   * StudentQuizAnswer delete
   */
  export type StudentQuizAnswerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentQuizAnswer
     */
    select?: StudentQuizAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentQuizAnswer
     */
    omit?: StudentQuizAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentQuizAnswerInclude<ExtArgs> | null
    /**
     * Filter which StudentQuizAnswer to delete.
     */
    where: StudentQuizAnswerWhereUniqueInput
  }

  /**
   * StudentQuizAnswer deleteMany
   */
  export type StudentQuizAnswerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StudentQuizAnswers to delete
     */
    where?: StudentQuizAnswerWhereInput
    /**
     * Limit how many StudentQuizAnswers to delete.
     */
    limit?: number
  }

  /**
   * StudentQuizAnswer without action
   */
  export type StudentQuizAnswerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentQuizAnswer
     */
    select?: StudentQuizAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentQuizAnswer
     */
    omit?: StudentQuizAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentQuizAnswerInclude<ExtArgs> | null
  }


  /**
   * Model StudentProgress
   */

  export type AggregateStudentProgress = {
    _count: StudentProgressCountAggregateOutputType | null
    _min: StudentProgressMinAggregateOutputType | null
    _max: StudentProgressMaxAggregateOutputType | null
  }

  export type StudentProgressMinAggregateOutputType = {
    id: string | null
    studentId: string | null
    lessonId: string | null
    completed: boolean | null
    completedAt: Date | null
  }

  export type StudentProgressMaxAggregateOutputType = {
    id: string | null
    studentId: string | null
    lessonId: string | null
    completed: boolean | null
    completedAt: Date | null
  }

  export type StudentProgressCountAggregateOutputType = {
    id: number
    studentId: number
    lessonId: number
    completed: number
    completedAt: number
    _all: number
  }


  export type StudentProgressMinAggregateInputType = {
    id?: true
    studentId?: true
    lessonId?: true
    completed?: true
    completedAt?: true
  }

  export type StudentProgressMaxAggregateInputType = {
    id?: true
    studentId?: true
    lessonId?: true
    completed?: true
    completedAt?: true
  }

  export type StudentProgressCountAggregateInputType = {
    id?: true
    studentId?: true
    lessonId?: true
    completed?: true
    completedAt?: true
    _all?: true
  }

  export type StudentProgressAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StudentProgress to aggregate.
     */
    where?: StudentProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentProgresses to fetch.
     */
    orderBy?: StudentProgressOrderByWithRelationInput | StudentProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StudentProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StudentProgresses
    **/
    _count?: true | StudentProgressCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudentProgressMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudentProgressMaxAggregateInputType
  }

  export type GetStudentProgressAggregateType<T extends StudentProgressAggregateArgs> = {
        [P in keyof T & keyof AggregateStudentProgress]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudentProgress[P]>
      : GetScalarType<T[P], AggregateStudentProgress[P]>
  }




  export type StudentProgressGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentProgressWhereInput
    orderBy?: StudentProgressOrderByWithAggregationInput | StudentProgressOrderByWithAggregationInput[]
    by: StudentProgressScalarFieldEnum[] | StudentProgressScalarFieldEnum
    having?: StudentProgressScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudentProgressCountAggregateInputType | true
    _min?: StudentProgressMinAggregateInputType
    _max?: StudentProgressMaxAggregateInputType
  }

  export type StudentProgressGroupByOutputType = {
    id: string
    studentId: string
    lessonId: string
    completed: boolean
    completedAt: Date | null
    _count: StudentProgressCountAggregateOutputType | null
    _min: StudentProgressMinAggregateOutputType | null
    _max: StudentProgressMaxAggregateOutputType | null
  }

  type GetStudentProgressGroupByPayload<T extends StudentProgressGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudentProgressGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudentProgressGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudentProgressGroupByOutputType[P]>
            : GetScalarType<T[P], StudentProgressGroupByOutputType[P]>
        }
      >
    >


  export type StudentProgressSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    lessonId?: boolean
    completed?: boolean
    completedAt?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
    lesson?: boolean | LessonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["studentProgress"]>



  export type StudentProgressSelectScalar = {
    id?: boolean
    studentId?: boolean
    lessonId?: boolean
    completed?: boolean
    completedAt?: boolean
  }

  export type StudentProgressOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "studentId" | "lessonId" | "completed" | "completedAt", ExtArgs["result"]["studentProgress"]>
  export type StudentProgressInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
    lesson?: boolean | LessonDefaultArgs<ExtArgs>
  }

  export type $StudentProgressPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StudentProgress"
    objects: {
      student: Prisma.$StudentPayload<ExtArgs>
      lesson: Prisma.$LessonPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      studentId: string
      lessonId: string
      completed: boolean
      completedAt: Date | null
    }, ExtArgs["result"]["studentProgress"]>
    composites: {}
  }

  type StudentProgressGetPayload<S extends boolean | null | undefined | StudentProgressDefaultArgs> = $Result.GetResult<Prisma.$StudentProgressPayload, S>

  type StudentProgressCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StudentProgressFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StudentProgressCountAggregateInputType | true
    }

  export interface StudentProgressDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StudentProgress'], meta: { name: 'StudentProgress' } }
    /**
     * Find zero or one StudentProgress that matches the filter.
     * @param {StudentProgressFindUniqueArgs} args - Arguments to find a StudentProgress
     * @example
     * // Get one StudentProgress
     * const studentProgress = await prisma.studentProgress.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StudentProgressFindUniqueArgs>(args: SelectSubset<T, StudentProgressFindUniqueArgs<ExtArgs>>): Prisma__StudentProgressClient<$Result.GetResult<Prisma.$StudentProgressPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StudentProgress that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StudentProgressFindUniqueOrThrowArgs} args - Arguments to find a StudentProgress
     * @example
     * // Get one StudentProgress
     * const studentProgress = await prisma.studentProgress.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StudentProgressFindUniqueOrThrowArgs>(args: SelectSubset<T, StudentProgressFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StudentProgressClient<$Result.GetResult<Prisma.$StudentProgressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StudentProgress that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentProgressFindFirstArgs} args - Arguments to find a StudentProgress
     * @example
     * // Get one StudentProgress
     * const studentProgress = await prisma.studentProgress.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StudentProgressFindFirstArgs>(args?: SelectSubset<T, StudentProgressFindFirstArgs<ExtArgs>>): Prisma__StudentProgressClient<$Result.GetResult<Prisma.$StudentProgressPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StudentProgress that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentProgressFindFirstOrThrowArgs} args - Arguments to find a StudentProgress
     * @example
     * // Get one StudentProgress
     * const studentProgress = await prisma.studentProgress.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StudentProgressFindFirstOrThrowArgs>(args?: SelectSubset<T, StudentProgressFindFirstOrThrowArgs<ExtArgs>>): Prisma__StudentProgressClient<$Result.GetResult<Prisma.$StudentProgressPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StudentProgresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentProgressFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StudentProgresses
     * const studentProgresses = await prisma.studentProgress.findMany()
     * 
     * // Get first 10 StudentProgresses
     * const studentProgresses = await prisma.studentProgress.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const studentProgressWithIdOnly = await prisma.studentProgress.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StudentProgressFindManyArgs>(args?: SelectSubset<T, StudentProgressFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentProgressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StudentProgress.
     * @param {StudentProgressCreateArgs} args - Arguments to create a StudentProgress.
     * @example
     * // Create one StudentProgress
     * const StudentProgress = await prisma.studentProgress.create({
     *   data: {
     *     // ... data to create a StudentProgress
     *   }
     * })
     * 
     */
    create<T extends StudentProgressCreateArgs>(args: SelectSubset<T, StudentProgressCreateArgs<ExtArgs>>): Prisma__StudentProgressClient<$Result.GetResult<Prisma.$StudentProgressPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StudentProgresses.
     * @param {StudentProgressCreateManyArgs} args - Arguments to create many StudentProgresses.
     * @example
     * // Create many StudentProgresses
     * const studentProgress = await prisma.studentProgress.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StudentProgressCreateManyArgs>(args?: SelectSubset<T, StudentProgressCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a StudentProgress.
     * @param {StudentProgressDeleteArgs} args - Arguments to delete one StudentProgress.
     * @example
     * // Delete one StudentProgress
     * const StudentProgress = await prisma.studentProgress.delete({
     *   where: {
     *     // ... filter to delete one StudentProgress
     *   }
     * })
     * 
     */
    delete<T extends StudentProgressDeleteArgs>(args: SelectSubset<T, StudentProgressDeleteArgs<ExtArgs>>): Prisma__StudentProgressClient<$Result.GetResult<Prisma.$StudentProgressPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StudentProgress.
     * @param {StudentProgressUpdateArgs} args - Arguments to update one StudentProgress.
     * @example
     * // Update one StudentProgress
     * const studentProgress = await prisma.studentProgress.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StudentProgressUpdateArgs>(args: SelectSubset<T, StudentProgressUpdateArgs<ExtArgs>>): Prisma__StudentProgressClient<$Result.GetResult<Prisma.$StudentProgressPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StudentProgresses.
     * @param {StudentProgressDeleteManyArgs} args - Arguments to filter StudentProgresses to delete.
     * @example
     * // Delete a few StudentProgresses
     * const { count } = await prisma.studentProgress.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StudentProgressDeleteManyArgs>(args?: SelectSubset<T, StudentProgressDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StudentProgresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentProgressUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StudentProgresses
     * const studentProgress = await prisma.studentProgress.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StudentProgressUpdateManyArgs>(args: SelectSubset<T, StudentProgressUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one StudentProgress.
     * @param {StudentProgressUpsertArgs} args - Arguments to update or create a StudentProgress.
     * @example
     * // Update or create a StudentProgress
     * const studentProgress = await prisma.studentProgress.upsert({
     *   create: {
     *     // ... data to create a StudentProgress
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StudentProgress we want to update
     *   }
     * })
     */
    upsert<T extends StudentProgressUpsertArgs>(args: SelectSubset<T, StudentProgressUpsertArgs<ExtArgs>>): Prisma__StudentProgressClient<$Result.GetResult<Prisma.$StudentProgressPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StudentProgresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentProgressCountArgs} args - Arguments to filter StudentProgresses to count.
     * @example
     * // Count the number of StudentProgresses
     * const count = await prisma.studentProgress.count({
     *   where: {
     *     // ... the filter for the StudentProgresses we want to count
     *   }
     * })
    **/
    count<T extends StudentProgressCountArgs>(
      args?: Subset<T, StudentProgressCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudentProgressCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StudentProgress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentProgressAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StudentProgressAggregateArgs>(args: Subset<T, StudentProgressAggregateArgs>): Prisma.PrismaPromise<GetStudentProgressAggregateType<T>>

    /**
     * Group by StudentProgress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentProgressGroupByArgs} args - Group by arguments.
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
      T extends StudentProgressGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StudentProgressGroupByArgs['orderBy'] }
        : { orderBy?: StudentProgressGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StudentProgressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentProgressGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StudentProgress model
   */
  readonly fields: StudentProgressFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StudentProgress.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StudentProgressClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    student<T extends StudentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StudentDefaultArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    lesson<T extends LessonDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LessonDefaultArgs<ExtArgs>>): Prisma__LessonClient<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the StudentProgress model
   */
  interface StudentProgressFieldRefs {
    readonly id: FieldRef<"StudentProgress", 'String'>
    readonly studentId: FieldRef<"StudentProgress", 'String'>
    readonly lessonId: FieldRef<"StudentProgress", 'String'>
    readonly completed: FieldRef<"StudentProgress", 'Boolean'>
    readonly completedAt: FieldRef<"StudentProgress", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * StudentProgress findUnique
   */
  export type StudentProgressFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentProgress
     */
    select?: StudentProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentProgress
     */
    omit?: StudentProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentProgressInclude<ExtArgs> | null
    /**
     * Filter, which StudentProgress to fetch.
     */
    where: StudentProgressWhereUniqueInput
  }

  /**
   * StudentProgress findUniqueOrThrow
   */
  export type StudentProgressFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentProgress
     */
    select?: StudentProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentProgress
     */
    omit?: StudentProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentProgressInclude<ExtArgs> | null
    /**
     * Filter, which StudentProgress to fetch.
     */
    where: StudentProgressWhereUniqueInput
  }

  /**
   * StudentProgress findFirst
   */
  export type StudentProgressFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentProgress
     */
    select?: StudentProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentProgress
     */
    omit?: StudentProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentProgressInclude<ExtArgs> | null
    /**
     * Filter, which StudentProgress to fetch.
     */
    where?: StudentProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentProgresses to fetch.
     */
    orderBy?: StudentProgressOrderByWithRelationInput | StudentProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StudentProgresses.
     */
    cursor?: StudentProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StudentProgresses.
     */
    distinct?: StudentProgressScalarFieldEnum | StudentProgressScalarFieldEnum[]
  }

  /**
   * StudentProgress findFirstOrThrow
   */
  export type StudentProgressFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentProgress
     */
    select?: StudentProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentProgress
     */
    omit?: StudentProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentProgressInclude<ExtArgs> | null
    /**
     * Filter, which StudentProgress to fetch.
     */
    where?: StudentProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentProgresses to fetch.
     */
    orderBy?: StudentProgressOrderByWithRelationInput | StudentProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StudentProgresses.
     */
    cursor?: StudentProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StudentProgresses.
     */
    distinct?: StudentProgressScalarFieldEnum | StudentProgressScalarFieldEnum[]
  }

  /**
   * StudentProgress findMany
   */
  export type StudentProgressFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentProgress
     */
    select?: StudentProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentProgress
     */
    omit?: StudentProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentProgressInclude<ExtArgs> | null
    /**
     * Filter, which StudentProgresses to fetch.
     */
    where?: StudentProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentProgresses to fetch.
     */
    orderBy?: StudentProgressOrderByWithRelationInput | StudentProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StudentProgresses.
     */
    cursor?: StudentProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentProgresses.
     */
    skip?: number
    distinct?: StudentProgressScalarFieldEnum | StudentProgressScalarFieldEnum[]
  }

  /**
   * StudentProgress create
   */
  export type StudentProgressCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentProgress
     */
    select?: StudentProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentProgress
     */
    omit?: StudentProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentProgressInclude<ExtArgs> | null
    /**
     * The data needed to create a StudentProgress.
     */
    data: XOR<StudentProgressCreateInput, StudentProgressUncheckedCreateInput>
  }

  /**
   * StudentProgress createMany
   */
  export type StudentProgressCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StudentProgresses.
     */
    data: StudentProgressCreateManyInput | StudentProgressCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StudentProgress update
   */
  export type StudentProgressUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentProgress
     */
    select?: StudentProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentProgress
     */
    omit?: StudentProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentProgressInclude<ExtArgs> | null
    /**
     * The data needed to update a StudentProgress.
     */
    data: XOR<StudentProgressUpdateInput, StudentProgressUncheckedUpdateInput>
    /**
     * Choose, which StudentProgress to update.
     */
    where: StudentProgressWhereUniqueInput
  }

  /**
   * StudentProgress updateMany
   */
  export type StudentProgressUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StudentProgresses.
     */
    data: XOR<StudentProgressUpdateManyMutationInput, StudentProgressUncheckedUpdateManyInput>
    /**
     * Filter which StudentProgresses to update
     */
    where?: StudentProgressWhereInput
    /**
     * Limit how many StudentProgresses to update.
     */
    limit?: number
  }

  /**
   * StudentProgress upsert
   */
  export type StudentProgressUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentProgress
     */
    select?: StudentProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentProgress
     */
    omit?: StudentProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentProgressInclude<ExtArgs> | null
    /**
     * The filter to search for the StudentProgress to update in case it exists.
     */
    where: StudentProgressWhereUniqueInput
    /**
     * In case the StudentProgress found by the `where` argument doesn't exist, create a new StudentProgress with this data.
     */
    create: XOR<StudentProgressCreateInput, StudentProgressUncheckedCreateInput>
    /**
     * In case the StudentProgress was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StudentProgressUpdateInput, StudentProgressUncheckedUpdateInput>
  }

  /**
   * StudentProgress delete
   */
  export type StudentProgressDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentProgress
     */
    select?: StudentProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentProgress
     */
    omit?: StudentProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentProgressInclude<ExtArgs> | null
    /**
     * Filter which StudentProgress to delete.
     */
    where: StudentProgressWhereUniqueInput
  }

  /**
   * StudentProgress deleteMany
   */
  export type StudentProgressDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StudentProgresses to delete
     */
    where?: StudentProgressWhereInput
    /**
     * Limit how many StudentProgresses to delete.
     */
    limit?: number
  }

  /**
   * StudentProgress without action
   */
  export type StudentProgressDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentProgress
     */
    select?: StudentProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentProgress
     */
    omit?: StudentProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentProgressInclude<ExtArgs> | null
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


  export const AdminScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    passcode: 'passcode',
    createdAt: 'createdAt'
  };

  export type AdminScalarFieldEnum = (typeof AdminScalarFieldEnum)[keyof typeof AdminScalarFieldEnum]


  export const TeacherScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    passcode: 'passcode',
    isActive: 'isActive',
    createdAt: 'createdAt'
  };

  export type TeacherScalarFieldEnum = (typeof TeacherScalarFieldEnum)[keyof typeof TeacherScalarFieldEnum]


  export const StudentScalarFieldEnum: {
    id: 'id',
    name: 'name',
    passcode: 'passcode',
    phoneNo: 'phoneNo',
    status: 'status',
    startDate: 'startDate',
    chatId: 'chatId',
    createdAt: 'createdAt'
  };

  export type StudentScalarFieldEnum = (typeof StudentScalarFieldEnum)[keyof typeof StudentScalarFieldEnum]


  export const CourseScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    teacherId: 'teacherId',
    createdAt: 'createdAt'
  };

  export type CourseScalarFieldEnum = (typeof CourseScalarFieldEnum)[keyof typeof CourseScalarFieldEnum]


  export const LessonScalarFieldEnum: {
    id: 'id',
    title: 'title',
    videoUrl: 'videoUrl',
    courseId: 'courseId',
    order: 'order',
    createdAt: 'createdAt'
  };

  export type LessonScalarFieldEnum = (typeof LessonScalarFieldEnum)[keyof typeof LessonScalarFieldEnum]


  export const QuizScalarFieldEnum: {
    id: 'id',
    lessonId: 'lessonId'
  };

  export type QuizScalarFieldEnum = (typeof QuizScalarFieldEnum)[keyof typeof QuizScalarFieldEnum]


  export const QuestionScalarFieldEnum: {
    id: 'id',
    quizId: 'quizId',
    question: 'question'
  };

  export type QuestionScalarFieldEnum = (typeof QuestionScalarFieldEnum)[keyof typeof QuestionScalarFieldEnum]


  export const QuestionOptionScalarFieldEnum: {
    id: 'id',
    questionId: 'questionId',
    option: 'option'
  };

  export type QuestionOptionScalarFieldEnum = (typeof QuestionOptionScalarFieldEnum)[keyof typeof QuestionOptionScalarFieldEnum]


  export const QuestionAnswerScalarFieldEnum: {
    id: 'id',
    questionId: 'questionId',
    answerId: 'answerId'
  };

  export type QuestionAnswerScalarFieldEnum = (typeof QuestionAnswerScalarFieldEnum)[keyof typeof QuestionAnswerScalarFieldEnum]


  export const StudentQuizScalarFieldEnum: {
    id: 'id',
    studentId: 'studentId',
    quizId: 'quizId',
    score: 'score',
    passed: 'passed',
    takenAt: 'takenAt'
  };

  export type StudentQuizScalarFieldEnum = (typeof StudentQuizScalarFieldEnum)[keyof typeof StudentQuizScalarFieldEnum]


  export const StudentQuizAnswerScalarFieldEnum: {
    id: 'id',
    studentQuizId: 'studentQuizId',
    questionId: 'questionId',
    optionId: 'optionId'
  };

  export type StudentQuizAnswerScalarFieldEnum = (typeof StudentQuizAnswerScalarFieldEnum)[keyof typeof StudentQuizAnswerScalarFieldEnum]


  export const StudentProgressScalarFieldEnum: {
    id: 'id',
    studentId: 'studentId',
    lessonId: 'lessonId',
    completed: 'completed',
    completedAt: 'completedAt'
  };

  export type StudentProgressScalarFieldEnum = (typeof StudentProgressScalarFieldEnum)[keyof typeof StudentProgressScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const AdminOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    passcode: 'passcode'
  };

  export type AdminOrderByRelevanceFieldEnum = (typeof AdminOrderByRelevanceFieldEnum)[keyof typeof AdminOrderByRelevanceFieldEnum]


  export const TeacherOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    passcode: 'passcode'
  };

  export type TeacherOrderByRelevanceFieldEnum = (typeof TeacherOrderByRelevanceFieldEnum)[keyof typeof TeacherOrderByRelevanceFieldEnum]


  export const StudentOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    passcode: 'passcode',
    phoneNo: 'phoneNo',
    chatId: 'chatId'
  };

  export type StudentOrderByRelevanceFieldEnum = (typeof StudentOrderByRelevanceFieldEnum)[keyof typeof StudentOrderByRelevanceFieldEnum]


  export const CourseOrderByRelevanceFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    teacherId: 'teacherId'
  };

  export type CourseOrderByRelevanceFieldEnum = (typeof CourseOrderByRelevanceFieldEnum)[keyof typeof CourseOrderByRelevanceFieldEnum]


  export const LessonOrderByRelevanceFieldEnum: {
    id: 'id',
    title: 'title',
    videoUrl: 'videoUrl',
    courseId: 'courseId'
  };

  export type LessonOrderByRelevanceFieldEnum = (typeof LessonOrderByRelevanceFieldEnum)[keyof typeof LessonOrderByRelevanceFieldEnum]


  export const QuizOrderByRelevanceFieldEnum: {
    id: 'id',
    lessonId: 'lessonId'
  };

  export type QuizOrderByRelevanceFieldEnum = (typeof QuizOrderByRelevanceFieldEnum)[keyof typeof QuizOrderByRelevanceFieldEnum]


  export const QuestionOrderByRelevanceFieldEnum: {
    id: 'id',
    quizId: 'quizId',
    question: 'question'
  };

  export type QuestionOrderByRelevanceFieldEnum = (typeof QuestionOrderByRelevanceFieldEnum)[keyof typeof QuestionOrderByRelevanceFieldEnum]


  export const QuestionOptionOrderByRelevanceFieldEnum: {
    id: 'id',
    questionId: 'questionId',
    option: 'option'
  };

  export type QuestionOptionOrderByRelevanceFieldEnum = (typeof QuestionOptionOrderByRelevanceFieldEnum)[keyof typeof QuestionOptionOrderByRelevanceFieldEnum]


  export const QuestionAnswerOrderByRelevanceFieldEnum: {
    id: 'id',
    questionId: 'questionId',
    answerId: 'answerId'
  };

  export type QuestionAnswerOrderByRelevanceFieldEnum = (typeof QuestionAnswerOrderByRelevanceFieldEnum)[keyof typeof QuestionAnswerOrderByRelevanceFieldEnum]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const StudentQuizOrderByRelevanceFieldEnum: {
    id: 'id',
    studentId: 'studentId',
    quizId: 'quizId'
  };

  export type StudentQuizOrderByRelevanceFieldEnum = (typeof StudentQuizOrderByRelevanceFieldEnum)[keyof typeof StudentQuizOrderByRelevanceFieldEnum]


  export const StudentQuizAnswerOrderByRelevanceFieldEnum: {
    id: 'id',
    studentQuizId: 'studentQuizId',
    questionId: 'questionId',
    optionId: 'optionId'
  };

  export type StudentQuizAnswerOrderByRelevanceFieldEnum = (typeof StudentQuizAnswerOrderByRelevanceFieldEnum)[keyof typeof StudentQuizAnswerOrderByRelevanceFieldEnum]


  export const StudentProgressOrderByRelevanceFieldEnum: {
    id: 'id',
    studentId: 'studentId',
    lessonId: 'lessonId'
  };

  export type StudentProgressOrderByRelevanceFieldEnum = (typeof StudentProgressOrderByRelevanceFieldEnum)[keyof typeof StudentProgressOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


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


  export type AdminWhereInput = {
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    id?: StringFilter<"Admin"> | string
    name?: StringFilter<"Admin"> | string
    email?: StringFilter<"Admin"> | string
    passcode?: StringFilter<"Admin"> | string
    createdAt?: DateTimeFilter<"Admin"> | Date | string
  }

  export type AdminOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passcode?: SortOrder
    createdAt?: SortOrder
    _relevance?: AdminOrderByRelevanceInput
  }

  export type AdminWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    name?: StringFilter<"Admin"> | string
    passcode?: StringFilter<"Admin"> | string
    createdAt?: DateTimeFilter<"Admin"> | Date | string
  }, "id" | "email">

  export type AdminOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passcode?: SortOrder
    createdAt?: SortOrder
    _count?: AdminCountOrderByAggregateInput
    _max?: AdminMaxOrderByAggregateInput
    _min?: AdminMinOrderByAggregateInput
  }

  export type AdminScalarWhereWithAggregatesInput = {
    AND?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    OR?: AdminScalarWhereWithAggregatesInput[]
    NOT?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Admin"> | string
    name?: StringWithAggregatesFilter<"Admin"> | string
    email?: StringWithAggregatesFilter<"Admin"> | string
    passcode?: StringWithAggregatesFilter<"Admin"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Admin"> | Date | string
  }

  export type TeacherWhereInput = {
    AND?: TeacherWhereInput | TeacherWhereInput[]
    OR?: TeacherWhereInput[]
    NOT?: TeacherWhereInput | TeacherWhereInput[]
    id?: StringFilter<"Teacher"> | string
    name?: StringFilter<"Teacher"> | string
    email?: StringFilter<"Teacher"> | string
    passcode?: StringFilter<"Teacher"> | string
    isActive?: BoolFilter<"Teacher"> | boolean
    createdAt?: DateTimeFilter<"Teacher"> | Date | string
    courses?: CourseListRelationFilter
  }

  export type TeacherOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passcode?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    courses?: CourseOrderByRelationAggregateInput
    _relevance?: TeacherOrderByRelevanceInput
  }

  export type TeacherWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: TeacherWhereInput | TeacherWhereInput[]
    OR?: TeacherWhereInput[]
    NOT?: TeacherWhereInput | TeacherWhereInput[]
    name?: StringFilter<"Teacher"> | string
    passcode?: StringFilter<"Teacher"> | string
    isActive?: BoolFilter<"Teacher"> | boolean
    createdAt?: DateTimeFilter<"Teacher"> | Date | string
    courses?: CourseListRelationFilter
  }, "id" | "email">

  export type TeacherOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passcode?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    _count?: TeacherCountOrderByAggregateInput
    _max?: TeacherMaxOrderByAggregateInput
    _min?: TeacherMinOrderByAggregateInput
  }

  export type TeacherScalarWhereWithAggregatesInput = {
    AND?: TeacherScalarWhereWithAggregatesInput | TeacherScalarWhereWithAggregatesInput[]
    OR?: TeacherScalarWhereWithAggregatesInput[]
    NOT?: TeacherScalarWhereWithAggregatesInput | TeacherScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Teacher"> | string
    name?: StringWithAggregatesFilter<"Teacher"> | string
    email?: StringWithAggregatesFilter<"Teacher"> | string
    passcode?: StringWithAggregatesFilter<"Teacher"> | string
    isActive?: BoolWithAggregatesFilter<"Teacher"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Teacher"> | Date | string
  }

  export type StudentWhereInput = {
    AND?: StudentWhereInput | StudentWhereInput[]
    OR?: StudentWhereInput[]
    NOT?: StudentWhereInput | StudentWhereInput[]
    id?: StringFilter<"Student"> | string
    name?: StringFilter<"Student"> | string
    passcode?: StringFilter<"Student"> | string
    phoneNo?: StringFilter<"Student"> | string
    status?: BoolFilter<"Student"> | boolean
    startDate?: DateTimeFilter<"Student"> | Date | string
    chatId?: StringFilter<"Student"> | string
    createdAt?: DateTimeFilter<"Student"> | Date | string
    progress?: StudentProgressListRelationFilter
    studentQuizzes?: StudentQuizListRelationFilter
  }

  export type StudentOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    passcode?: SortOrder
    phoneNo?: SortOrder
    status?: SortOrder
    startDate?: SortOrder
    chatId?: SortOrder
    createdAt?: SortOrder
    progress?: StudentProgressOrderByRelationAggregateInput
    studentQuizzes?: StudentQuizOrderByRelationAggregateInput
    _relevance?: StudentOrderByRelevanceInput
  }

  export type StudentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    passcode?: string
    AND?: StudentWhereInput | StudentWhereInput[]
    OR?: StudentWhereInput[]
    NOT?: StudentWhereInput | StudentWhereInput[]
    name?: StringFilter<"Student"> | string
    phoneNo?: StringFilter<"Student"> | string
    status?: BoolFilter<"Student"> | boolean
    startDate?: DateTimeFilter<"Student"> | Date | string
    chatId?: StringFilter<"Student"> | string
    createdAt?: DateTimeFilter<"Student"> | Date | string
    progress?: StudentProgressListRelationFilter
    studentQuizzes?: StudentQuizListRelationFilter
  }, "id" | "passcode">

  export type StudentOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    passcode?: SortOrder
    phoneNo?: SortOrder
    status?: SortOrder
    startDate?: SortOrder
    chatId?: SortOrder
    createdAt?: SortOrder
    _count?: StudentCountOrderByAggregateInput
    _max?: StudentMaxOrderByAggregateInput
    _min?: StudentMinOrderByAggregateInput
  }

  export type StudentScalarWhereWithAggregatesInput = {
    AND?: StudentScalarWhereWithAggregatesInput | StudentScalarWhereWithAggregatesInput[]
    OR?: StudentScalarWhereWithAggregatesInput[]
    NOT?: StudentScalarWhereWithAggregatesInput | StudentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Student"> | string
    name?: StringWithAggregatesFilter<"Student"> | string
    passcode?: StringWithAggregatesFilter<"Student"> | string
    phoneNo?: StringWithAggregatesFilter<"Student"> | string
    status?: BoolWithAggregatesFilter<"Student"> | boolean
    startDate?: DateTimeWithAggregatesFilter<"Student"> | Date | string
    chatId?: StringWithAggregatesFilter<"Student"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Student"> | Date | string
  }

  export type CourseWhereInput = {
    AND?: CourseWhereInput | CourseWhereInput[]
    OR?: CourseWhereInput[]
    NOT?: CourseWhereInput | CourseWhereInput[]
    id?: StringFilter<"Course"> | string
    title?: StringFilter<"Course"> | string
    description?: StringFilter<"Course"> | string
    teacherId?: StringFilter<"Course"> | string
    createdAt?: DateTimeFilter<"Course"> | Date | string
    teacher?: XOR<TeacherScalarRelationFilter, TeacherWhereInput>
    lessons?: LessonListRelationFilter
  }

  export type CourseOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    teacherId?: SortOrder
    createdAt?: SortOrder
    teacher?: TeacherOrderByWithRelationInput
    lessons?: LessonOrderByRelationAggregateInput
    _relevance?: CourseOrderByRelevanceInput
  }

  export type CourseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CourseWhereInput | CourseWhereInput[]
    OR?: CourseWhereInput[]
    NOT?: CourseWhereInput | CourseWhereInput[]
    title?: StringFilter<"Course"> | string
    description?: StringFilter<"Course"> | string
    teacherId?: StringFilter<"Course"> | string
    createdAt?: DateTimeFilter<"Course"> | Date | string
    teacher?: XOR<TeacherScalarRelationFilter, TeacherWhereInput>
    lessons?: LessonListRelationFilter
  }, "id">

  export type CourseOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    teacherId?: SortOrder
    createdAt?: SortOrder
    _count?: CourseCountOrderByAggregateInput
    _max?: CourseMaxOrderByAggregateInput
    _min?: CourseMinOrderByAggregateInput
  }

  export type CourseScalarWhereWithAggregatesInput = {
    AND?: CourseScalarWhereWithAggregatesInput | CourseScalarWhereWithAggregatesInput[]
    OR?: CourseScalarWhereWithAggregatesInput[]
    NOT?: CourseScalarWhereWithAggregatesInput | CourseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Course"> | string
    title?: StringWithAggregatesFilter<"Course"> | string
    description?: StringWithAggregatesFilter<"Course"> | string
    teacherId?: StringWithAggregatesFilter<"Course"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Course"> | Date | string
  }

  export type LessonWhereInput = {
    AND?: LessonWhereInput | LessonWhereInput[]
    OR?: LessonWhereInput[]
    NOT?: LessonWhereInput | LessonWhereInput[]
    id?: StringFilter<"Lesson"> | string
    title?: StringFilter<"Lesson"> | string
    videoUrl?: StringFilter<"Lesson"> | string
    courseId?: StringFilter<"Lesson"> | string
    order?: IntFilter<"Lesson"> | number
    createdAt?: DateTimeFilter<"Lesson"> | Date | string
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
    quiz?: XOR<QuizNullableScalarRelationFilter, QuizWhereInput> | null
    StudentProgress?: StudentProgressListRelationFilter
  }

  export type LessonOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    videoUrl?: SortOrder
    courseId?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    course?: CourseOrderByWithRelationInput
    quiz?: QuizOrderByWithRelationInput
    StudentProgress?: StudentProgressOrderByRelationAggregateInput
    _relevance?: LessonOrderByRelevanceInput
  }

  export type LessonWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LessonWhereInput | LessonWhereInput[]
    OR?: LessonWhereInput[]
    NOT?: LessonWhereInput | LessonWhereInput[]
    title?: StringFilter<"Lesson"> | string
    videoUrl?: StringFilter<"Lesson"> | string
    courseId?: StringFilter<"Lesson"> | string
    order?: IntFilter<"Lesson"> | number
    createdAt?: DateTimeFilter<"Lesson"> | Date | string
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
    quiz?: XOR<QuizNullableScalarRelationFilter, QuizWhereInput> | null
    StudentProgress?: StudentProgressListRelationFilter
  }, "id">

  export type LessonOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    videoUrl?: SortOrder
    courseId?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    _count?: LessonCountOrderByAggregateInput
    _avg?: LessonAvgOrderByAggregateInput
    _max?: LessonMaxOrderByAggregateInput
    _min?: LessonMinOrderByAggregateInput
    _sum?: LessonSumOrderByAggregateInput
  }

  export type LessonScalarWhereWithAggregatesInput = {
    AND?: LessonScalarWhereWithAggregatesInput | LessonScalarWhereWithAggregatesInput[]
    OR?: LessonScalarWhereWithAggregatesInput[]
    NOT?: LessonScalarWhereWithAggregatesInput | LessonScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Lesson"> | string
    title?: StringWithAggregatesFilter<"Lesson"> | string
    videoUrl?: StringWithAggregatesFilter<"Lesson"> | string
    courseId?: StringWithAggregatesFilter<"Lesson"> | string
    order?: IntWithAggregatesFilter<"Lesson"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Lesson"> | Date | string
  }

  export type QuizWhereInput = {
    AND?: QuizWhereInput | QuizWhereInput[]
    OR?: QuizWhereInput[]
    NOT?: QuizWhereInput | QuizWhereInput[]
    id?: StringFilter<"Quiz"> | string
    lessonId?: StringFilter<"Quiz"> | string
    lesson?: XOR<LessonScalarRelationFilter, LessonWhereInput>
    questions?: QuestionListRelationFilter
    StudentQuiz?: StudentQuizListRelationFilter
  }

  export type QuizOrderByWithRelationInput = {
    id?: SortOrder
    lessonId?: SortOrder
    lesson?: LessonOrderByWithRelationInput
    questions?: QuestionOrderByRelationAggregateInput
    StudentQuiz?: StudentQuizOrderByRelationAggregateInput
    _relevance?: QuizOrderByRelevanceInput
  }

  export type QuizWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    lessonId?: string
    AND?: QuizWhereInput | QuizWhereInput[]
    OR?: QuizWhereInput[]
    NOT?: QuizWhereInput | QuizWhereInput[]
    lesson?: XOR<LessonScalarRelationFilter, LessonWhereInput>
    questions?: QuestionListRelationFilter
    StudentQuiz?: StudentQuizListRelationFilter
  }, "id" | "lessonId">

  export type QuizOrderByWithAggregationInput = {
    id?: SortOrder
    lessonId?: SortOrder
    _count?: QuizCountOrderByAggregateInput
    _max?: QuizMaxOrderByAggregateInput
    _min?: QuizMinOrderByAggregateInput
  }

  export type QuizScalarWhereWithAggregatesInput = {
    AND?: QuizScalarWhereWithAggregatesInput | QuizScalarWhereWithAggregatesInput[]
    OR?: QuizScalarWhereWithAggregatesInput[]
    NOT?: QuizScalarWhereWithAggregatesInput | QuizScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Quiz"> | string
    lessonId?: StringWithAggregatesFilter<"Quiz"> | string
  }

  export type QuestionWhereInput = {
    AND?: QuestionWhereInput | QuestionWhereInput[]
    OR?: QuestionWhereInput[]
    NOT?: QuestionWhereInput | QuestionWhereInput[]
    id?: StringFilter<"Question"> | string
    quizId?: StringFilter<"Question"> | string
    question?: StringFilter<"Question"> | string
    quiz?: XOR<QuizScalarRelationFilter, QuizWhereInput>
    questionOptions?: QuestionOptionListRelationFilter
    questionAnswer?: QuestionAnswerListRelationFilter
    StudentQuizAnswer?: StudentQuizAnswerListRelationFilter
  }

  export type QuestionOrderByWithRelationInput = {
    id?: SortOrder
    quizId?: SortOrder
    question?: SortOrder
    quiz?: QuizOrderByWithRelationInput
    questionOptions?: QuestionOptionOrderByRelationAggregateInput
    questionAnswer?: QuestionAnswerOrderByRelationAggregateInput
    StudentQuizAnswer?: StudentQuizAnswerOrderByRelationAggregateInput
    _relevance?: QuestionOrderByRelevanceInput
  }

  export type QuestionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: QuestionWhereInput | QuestionWhereInput[]
    OR?: QuestionWhereInput[]
    NOT?: QuestionWhereInput | QuestionWhereInput[]
    quizId?: StringFilter<"Question"> | string
    question?: StringFilter<"Question"> | string
    quiz?: XOR<QuizScalarRelationFilter, QuizWhereInput>
    questionOptions?: QuestionOptionListRelationFilter
    questionAnswer?: QuestionAnswerListRelationFilter
    StudentQuizAnswer?: StudentQuizAnswerListRelationFilter
  }, "id">

  export type QuestionOrderByWithAggregationInput = {
    id?: SortOrder
    quizId?: SortOrder
    question?: SortOrder
    _count?: QuestionCountOrderByAggregateInput
    _max?: QuestionMaxOrderByAggregateInput
    _min?: QuestionMinOrderByAggregateInput
  }

  export type QuestionScalarWhereWithAggregatesInput = {
    AND?: QuestionScalarWhereWithAggregatesInput | QuestionScalarWhereWithAggregatesInput[]
    OR?: QuestionScalarWhereWithAggregatesInput[]
    NOT?: QuestionScalarWhereWithAggregatesInput | QuestionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Question"> | string
    quizId?: StringWithAggregatesFilter<"Question"> | string
    question?: StringWithAggregatesFilter<"Question"> | string
  }

  export type QuestionOptionWhereInput = {
    AND?: QuestionOptionWhereInput | QuestionOptionWhereInput[]
    OR?: QuestionOptionWhereInput[]
    NOT?: QuestionOptionWhereInput | QuestionOptionWhereInput[]
    id?: StringFilter<"QuestionOption"> | string
    questionId?: StringFilter<"QuestionOption"> | string
    option?: StringFilter<"QuestionOption"> | string
    question?: XOR<QuestionScalarRelationFilter, QuestionWhereInput>
    questionAnswer?: QuestionAnswerListRelationFilter
    studentQuizAnswers?: StudentQuizAnswerListRelationFilter
  }

  export type QuestionOptionOrderByWithRelationInput = {
    id?: SortOrder
    questionId?: SortOrder
    option?: SortOrder
    question?: QuestionOrderByWithRelationInput
    questionAnswer?: QuestionAnswerOrderByRelationAggregateInput
    studentQuizAnswers?: StudentQuizAnswerOrderByRelationAggregateInput
    _relevance?: QuestionOptionOrderByRelevanceInput
  }

  export type QuestionOptionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: QuestionOptionWhereInput | QuestionOptionWhereInput[]
    OR?: QuestionOptionWhereInput[]
    NOT?: QuestionOptionWhereInput | QuestionOptionWhereInput[]
    questionId?: StringFilter<"QuestionOption"> | string
    option?: StringFilter<"QuestionOption"> | string
    question?: XOR<QuestionScalarRelationFilter, QuestionWhereInput>
    questionAnswer?: QuestionAnswerListRelationFilter
    studentQuizAnswers?: StudentQuizAnswerListRelationFilter
  }, "id">

  export type QuestionOptionOrderByWithAggregationInput = {
    id?: SortOrder
    questionId?: SortOrder
    option?: SortOrder
    _count?: QuestionOptionCountOrderByAggregateInput
    _max?: QuestionOptionMaxOrderByAggregateInput
    _min?: QuestionOptionMinOrderByAggregateInput
  }

  export type QuestionOptionScalarWhereWithAggregatesInput = {
    AND?: QuestionOptionScalarWhereWithAggregatesInput | QuestionOptionScalarWhereWithAggregatesInput[]
    OR?: QuestionOptionScalarWhereWithAggregatesInput[]
    NOT?: QuestionOptionScalarWhereWithAggregatesInput | QuestionOptionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"QuestionOption"> | string
    questionId?: StringWithAggregatesFilter<"QuestionOption"> | string
    option?: StringWithAggregatesFilter<"QuestionOption"> | string
  }

  export type QuestionAnswerWhereInput = {
    AND?: QuestionAnswerWhereInput | QuestionAnswerWhereInput[]
    OR?: QuestionAnswerWhereInput[]
    NOT?: QuestionAnswerWhereInput | QuestionAnswerWhereInput[]
    id?: StringFilter<"QuestionAnswer"> | string
    questionId?: StringFilter<"QuestionAnswer"> | string
    answerId?: StringFilter<"QuestionAnswer"> | string
    question?: XOR<QuestionScalarRelationFilter, QuestionWhereInput>
    answer?: XOR<QuestionOptionScalarRelationFilter, QuestionOptionWhereInput>
  }

  export type QuestionAnswerOrderByWithRelationInput = {
    id?: SortOrder
    questionId?: SortOrder
    answerId?: SortOrder
    question?: QuestionOrderByWithRelationInput
    answer?: QuestionOptionOrderByWithRelationInput
    _relevance?: QuestionAnswerOrderByRelevanceInput
  }

  export type QuestionAnswerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: QuestionAnswerWhereInput | QuestionAnswerWhereInput[]
    OR?: QuestionAnswerWhereInput[]
    NOT?: QuestionAnswerWhereInput | QuestionAnswerWhereInput[]
    questionId?: StringFilter<"QuestionAnswer"> | string
    answerId?: StringFilter<"QuestionAnswer"> | string
    question?: XOR<QuestionScalarRelationFilter, QuestionWhereInput>
    answer?: XOR<QuestionOptionScalarRelationFilter, QuestionOptionWhereInput>
  }, "id">

  export type QuestionAnswerOrderByWithAggregationInput = {
    id?: SortOrder
    questionId?: SortOrder
    answerId?: SortOrder
    _count?: QuestionAnswerCountOrderByAggregateInput
    _max?: QuestionAnswerMaxOrderByAggregateInput
    _min?: QuestionAnswerMinOrderByAggregateInput
  }

  export type QuestionAnswerScalarWhereWithAggregatesInput = {
    AND?: QuestionAnswerScalarWhereWithAggregatesInput | QuestionAnswerScalarWhereWithAggregatesInput[]
    OR?: QuestionAnswerScalarWhereWithAggregatesInput[]
    NOT?: QuestionAnswerScalarWhereWithAggregatesInput | QuestionAnswerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"QuestionAnswer"> | string
    questionId?: StringWithAggregatesFilter<"QuestionAnswer"> | string
    answerId?: StringWithAggregatesFilter<"QuestionAnswer"> | string
  }

  export type StudentQuizWhereInput = {
    AND?: StudentQuizWhereInput | StudentQuizWhereInput[]
    OR?: StudentQuizWhereInput[]
    NOT?: StudentQuizWhereInput | StudentQuizWhereInput[]
    id?: StringFilter<"StudentQuiz"> | string
    studentId?: StringFilter<"StudentQuiz"> | string
    quizId?: StringFilter<"StudentQuiz"> | string
    score?: FloatNullableFilter<"StudentQuiz"> | number | null
    passed?: BoolFilter<"StudentQuiz"> | boolean
    takenAt?: DateTimeFilter<"StudentQuiz"> | Date | string
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
    quiz?: XOR<QuizScalarRelationFilter, QuizWhereInput>
    studentQuizAnswers?: StudentQuizAnswerListRelationFilter
  }

  export type StudentQuizOrderByWithRelationInput = {
    id?: SortOrder
    studentId?: SortOrder
    quizId?: SortOrder
    score?: SortOrderInput | SortOrder
    passed?: SortOrder
    takenAt?: SortOrder
    student?: StudentOrderByWithRelationInput
    quiz?: QuizOrderByWithRelationInput
    studentQuizAnswers?: StudentQuizAnswerOrderByRelationAggregateInput
    _relevance?: StudentQuizOrderByRelevanceInput
  }

  export type StudentQuizWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    studentId_quizId?: StudentQuizStudentIdQuizIdCompoundUniqueInput
    AND?: StudentQuizWhereInput | StudentQuizWhereInput[]
    OR?: StudentQuizWhereInput[]
    NOT?: StudentQuizWhereInput | StudentQuizWhereInput[]
    studentId?: StringFilter<"StudentQuiz"> | string
    quizId?: StringFilter<"StudentQuiz"> | string
    score?: FloatNullableFilter<"StudentQuiz"> | number | null
    passed?: BoolFilter<"StudentQuiz"> | boolean
    takenAt?: DateTimeFilter<"StudentQuiz"> | Date | string
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
    quiz?: XOR<QuizScalarRelationFilter, QuizWhereInput>
    studentQuizAnswers?: StudentQuizAnswerListRelationFilter
  }, "id" | "studentId_quizId">

  export type StudentQuizOrderByWithAggregationInput = {
    id?: SortOrder
    studentId?: SortOrder
    quizId?: SortOrder
    score?: SortOrderInput | SortOrder
    passed?: SortOrder
    takenAt?: SortOrder
    _count?: StudentQuizCountOrderByAggregateInput
    _avg?: StudentQuizAvgOrderByAggregateInput
    _max?: StudentQuizMaxOrderByAggregateInput
    _min?: StudentQuizMinOrderByAggregateInput
    _sum?: StudentQuizSumOrderByAggregateInput
  }

  export type StudentQuizScalarWhereWithAggregatesInput = {
    AND?: StudentQuizScalarWhereWithAggregatesInput | StudentQuizScalarWhereWithAggregatesInput[]
    OR?: StudentQuizScalarWhereWithAggregatesInput[]
    NOT?: StudentQuizScalarWhereWithAggregatesInput | StudentQuizScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"StudentQuiz"> | string
    studentId?: StringWithAggregatesFilter<"StudentQuiz"> | string
    quizId?: StringWithAggregatesFilter<"StudentQuiz"> | string
    score?: FloatNullableWithAggregatesFilter<"StudentQuiz"> | number | null
    passed?: BoolWithAggregatesFilter<"StudentQuiz"> | boolean
    takenAt?: DateTimeWithAggregatesFilter<"StudentQuiz"> | Date | string
  }

  export type StudentQuizAnswerWhereInput = {
    AND?: StudentQuizAnswerWhereInput | StudentQuizAnswerWhereInput[]
    OR?: StudentQuizAnswerWhereInput[]
    NOT?: StudentQuizAnswerWhereInput | StudentQuizAnswerWhereInput[]
    id?: StringFilter<"StudentQuizAnswer"> | string
    studentQuizId?: StringFilter<"StudentQuizAnswer"> | string
    questionId?: StringFilter<"StudentQuizAnswer"> | string
    optionId?: StringFilter<"StudentQuizAnswer"> | string
    studentQuiz?: XOR<StudentQuizScalarRelationFilter, StudentQuizWhereInput>
    question?: XOR<QuestionScalarRelationFilter, QuestionWhereInput>
    selectedOption?: XOR<QuestionOptionScalarRelationFilter, QuestionOptionWhereInput>
  }

  export type StudentQuizAnswerOrderByWithRelationInput = {
    id?: SortOrder
    studentQuizId?: SortOrder
    questionId?: SortOrder
    optionId?: SortOrder
    studentQuiz?: StudentQuizOrderByWithRelationInput
    question?: QuestionOrderByWithRelationInput
    selectedOption?: QuestionOptionOrderByWithRelationInput
    _relevance?: StudentQuizAnswerOrderByRelevanceInput
  }

  export type StudentQuizAnswerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    studentQuizId_questionId?: StudentQuizAnswerStudentQuizIdQuestionIdCompoundUniqueInput
    AND?: StudentQuizAnswerWhereInput | StudentQuizAnswerWhereInput[]
    OR?: StudentQuizAnswerWhereInput[]
    NOT?: StudentQuizAnswerWhereInput | StudentQuizAnswerWhereInput[]
    studentQuizId?: StringFilter<"StudentQuizAnswer"> | string
    questionId?: StringFilter<"StudentQuizAnswer"> | string
    optionId?: StringFilter<"StudentQuizAnswer"> | string
    studentQuiz?: XOR<StudentQuizScalarRelationFilter, StudentQuizWhereInput>
    question?: XOR<QuestionScalarRelationFilter, QuestionWhereInput>
    selectedOption?: XOR<QuestionOptionScalarRelationFilter, QuestionOptionWhereInput>
  }, "id" | "studentQuizId_questionId">

  export type StudentQuizAnswerOrderByWithAggregationInput = {
    id?: SortOrder
    studentQuizId?: SortOrder
    questionId?: SortOrder
    optionId?: SortOrder
    _count?: StudentQuizAnswerCountOrderByAggregateInput
    _max?: StudentQuizAnswerMaxOrderByAggregateInput
    _min?: StudentQuizAnswerMinOrderByAggregateInput
  }

  export type StudentQuizAnswerScalarWhereWithAggregatesInput = {
    AND?: StudentQuizAnswerScalarWhereWithAggregatesInput | StudentQuizAnswerScalarWhereWithAggregatesInput[]
    OR?: StudentQuizAnswerScalarWhereWithAggregatesInput[]
    NOT?: StudentQuizAnswerScalarWhereWithAggregatesInput | StudentQuizAnswerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"StudentQuizAnswer"> | string
    studentQuizId?: StringWithAggregatesFilter<"StudentQuizAnswer"> | string
    questionId?: StringWithAggregatesFilter<"StudentQuizAnswer"> | string
    optionId?: StringWithAggregatesFilter<"StudentQuizAnswer"> | string
  }

  export type StudentProgressWhereInput = {
    AND?: StudentProgressWhereInput | StudentProgressWhereInput[]
    OR?: StudentProgressWhereInput[]
    NOT?: StudentProgressWhereInput | StudentProgressWhereInput[]
    id?: StringFilter<"StudentProgress"> | string
    studentId?: StringFilter<"StudentProgress"> | string
    lessonId?: StringFilter<"StudentProgress"> | string
    completed?: BoolFilter<"StudentProgress"> | boolean
    completedAt?: DateTimeNullableFilter<"StudentProgress"> | Date | string | null
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
    lesson?: XOR<LessonScalarRelationFilter, LessonWhereInput>
  }

  export type StudentProgressOrderByWithRelationInput = {
    id?: SortOrder
    studentId?: SortOrder
    lessonId?: SortOrder
    completed?: SortOrder
    completedAt?: SortOrderInput | SortOrder
    student?: StudentOrderByWithRelationInput
    lesson?: LessonOrderByWithRelationInput
    _relevance?: StudentProgressOrderByRelevanceInput
  }

  export type StudentProgressWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    studentId_lessonId?: StudentProgressStudentIdLessonIdCompoundUniqueInput
    AND?: StudentProgressWhereInput | StudentProgressWhereInput[]
    OR?: StudentProgressWhereInput[]
    NOT?: StudentProgressWhereInput | StudentProgressWhereInput[]
    studentId?: StringFilter<"StudentProgress"> | string
    lessonId?: StringFilter<"StudentProgress"> | string
    completed?: BoolFilter<"StudentProgress"> | boolean
    completedAt?: DateTimeNullableFilter<"StudentProgress"> | Date | string | null
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
    lesson?: XOR<LessonScalarRelationFilter, LessonWhereInput>
  }, "id" | "studentId_lessonId">

  export type StudentProgressOrderByWithAggregationInput = {
    id?: SortOrder
    studentId?: SortOrder
    lessonId?: SortOrder
    completed?: SortOrder
    completedAt?: SortOrderInput | SortOrder
    _count?: StudentProgressCountOrderByAggregateInput
    _max?: StudentProgressMaxOrderByAggregateInput
    _min?: StudentProgressMinOrderByAggregateInput
  }

  export type StudentProgressScalarWhereWithAggregatesInput = {
    AND?: StudentProgressScalarWhereWithAggregatesInput | StudentProgressScalarWhereWithAggregatesInput[]
    OR?: StudentProgressScalarWhereWithAggregatesInput[]
    NOT?: StudentProgressScalarWhereWithAggregatesInput | StudentProgressScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"StudentProgress"> | string
    studentId?: StringWithAggregatesFilter<"StudentProgress"> | string
    lessonId?: StringWithAggregatesFilter<"StudentProgress"> | string
    completed?: BoolWithAggregatesFilter<"StudentProgress"> | boolean
    completedAt?: DateTimeNullableWithAggregatesFilter<"StudentProgress"> | Date | string | null
  }

  export type AdminCreateInput = {
    id?: string
    name: string
    email: string
    passcode: string
    createdAt?: Date | string
  }

  export type AdminUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    passcode: string
    createdAt?: Date | string
  }

  export type AdminUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passcode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passcode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminCreateManyInput = {
    id?: string
    name: string
    email: string
    passcode: string
    createdAt?: Date | string
  }

  export type AdminUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passcode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passcode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeacherCreateInput = {
    id?: string
    name: string
    email: string
    passcode: string
    isActive?: boolean
    createdAt?: Date | string
    courses?: CourseCreateNestedManyWithoutTeacherInput
  }

  export type TeacherUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    passcode: string
    isActive?: boolean
    createdAt?: Date | string
    courses?: CourseUncheckedCreateNestedManyWithoutTeacherInput
  }

  export type TeacherUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passcode?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    courses?: CourseUpdateManyWithoutTeacherNestedInput
  }

  export type TeacherUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passcode?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    courses?: CourseUncheckedUpdateManyWithoutTeacherNestedInput
  }

  export type TeacherCreateManyInput = {
    id?: string
    name: string
    email: string
    passcode: string
    isActive?: boolean
    createdAt?: Date | string
  }

  export type TeacherUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passcode?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeacherUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passcode?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentCreateInput = {
    id?: string
    name: string
    passcode: string
    phoneNo: string
    status?: boolean
    startDate: Date | string
    chatId: string
    createdAt?: Date | string
    progress?: StudentProgressCreateNestedManyWithoutStudentInput
    studentQuizzes?: StudentQuizCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateInput = {
    id?: string
    name: string
    passcode: string
    phoneNo: string
    status?: boolean
    startDate: Date | string
    chatId: string
    createdAt?: Date | string
    progress?: StudentProgressUncheckedCreateNestedManyWithoutStudentInput
    studentQuizzes?: StudentQuizUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    passcode?: StringFieldUpdateOperationsInput | string
    phoneNo?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    chatId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    progress?: StudentProgressUpdateManyWithoutStudentNestedInput
    studentQuizzes?: StudentQuizUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    passcode?: StringFieldUpdateOperationsInput | string
    phoneNo?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    chatId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    progress?: StudentProgressUncheckedUpdateManyWithoutStudentNestedInput
    studentQuizzes?: StudentQuizUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type StudentCreateManyInput = {
    id?: string
    name: string
    passcode: string
    phoneNo: string
    status?: boolean
    startDate: Date | string
    chatId: string
    createdAt?: Date | string
  }

  export type StudentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    passcode?: StringFieldUpdateOperationsInput | string
    phoneNo?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    chatId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    passcode?: StringFieldUpdateOperationsInput | string
    phoneNo?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    chatId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseCreateInput = {
    id?: string
    title: string
    description: string
    createdAt?: Date | string
    teacher: TeacherCreateNestedOneWithoutCoursesInput
    lessons?: LessonCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateInput = {
    id?: string
    title: string
    description: string
    teacherId: string
    createdAt?: Date | string
    lessons?: LessonUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teacher?: TeacherUpdateOneRequiredWithoutCoursesNestedInput
    lessons?: LessonUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    teacherId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lessons?: LessonUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type CourseCreateManyInput = {
    id?: string
    title: string
    description: string
    teacherId: string
    createdAt?: Date | string
  }

  export type CourseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    teacherId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LessonCreateInput = {
    id?: string
    title: string
    videoUrl: string
    order: number
    createdAt?: Date | string
    course: CourseCreateNestedOneWithoutLessonsInput
    quiz?: QuizCreateNestedOneWithoutLessonInput
    StudentProgress?: StudentProgressCreateNestedManyWithoutLessonInput
  }

  export type LessonUncheckedCreateInput = {
    id?: string
    title: string
    videoUrl: string
    courseId: string
    order: number
    createdAt?: Date | string
    quiz?: QuizUncheckedCreateNestedOneWithoutLessonInput
    StudentProgress?: StudentProgressUncheckedCreateNestedManyWithoutLessonInput
  }

  export type LessonUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    videoUrl?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    course?: CourseUpdateOneRequiredWithoutLessonsNestedInput
    quiz?: QuizUpdateOneWithoutLessonNestedInput
    StudentProgress?: StudentProgressUpdateManyWithoutLessonNestedInput
  }

  export type LessonUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    videoUrl?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quiz?: QuizUncheckedUpdateOneWithoutLessonNestedInput
    StudentProgress?: StudentProgressUncheckedUpdateManyWithoutLessonNestedInput
  }

  export type LessonCreateManyInput = {
    id?: string
    title: string
    videoUrl: string
    courseId: string
    order: number
    createdAt?: Date | string
  }

  export type LessonUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    videoUrl?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LessonUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    videoUrl?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuizCreateInput = {
    id?: string
    lesson: LessonCreateNestedOneWithoutQuizInput
    questions?: QuestionCreateNestedManyWithoutQuizInput
    StudentQuiz?: StudentQuizCreateNestedManyWithoutQuizInput
  }

  export type QuizUncheckedCreateInput = {
    id?: string
    lessonId: string
    questions?: QuestionUncheckedCreateNestedManyWithoutQuizInput
    StudentQuiz?: StudentQuizUncheckedCreateNestedManyWithoutQuizInput
  }

  export type QuizUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    lesson?: LessonUpdateOneRequiredWithoutQuizNestedInput
    questions?: QuestionUpdateManyWithoutQuizNestedInput
    StudentQuiz?: StudentQuizUpdateManyWithoutQuizNestedInput
  }

  export type QuizUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    lessonId?: StringFieldUpdateOperationsInput | string
    questions?: QuestionUncheckedUpdateManyWithoutQuizNestedInput
    StudentQuiz?: StudentQuizUncheckedUpdateManyWithoutQuizNestedInput
  }

  export type QuizCreateManyInput = {
    id?: string
    lessonId: string
  }

  export type QuizUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type QuizUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    lessonId?: StringFieldUpdateOperationsInput | string
  }

  export type QuestionCreateInput = {
    id?: string
    question: string
    quiz: QuizCreateNestedOneWithoutQuestionsInput
    questionOptions?: QuestionOptionCreateNestedManyWithoutQuestionInput
    questionAnswer?: QuestionAnswerCreateNestedManyWithoutQuestionInput
    StudentQuizAnswer?: StudentQuizAnswerCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUncheckedCreateInput = {
    id?: string
    quizId: string
    question: string
    questionOptions?: QuestionOptionUncheckedCreateNestedManyWithoutQuestionInput
    questionAnswer?: QuestionAnswerUncheckedCreateNestedManyWithoutQuestionInput
    StudentQuizAnswer?: StudentQuizAnswerUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    quiz?: QuizUpdateOneRequiredWithoutQuestionsNestedInput
    questionOptions?: QuestionOptionUpdateManyWithoutQuestionNestedInput
    questionAnswer?: QuestionAnswerUpdateManyWithoutQuestionNestedInput
    StudentQuizAnswer?: StudentQuizAnswerUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    quizId?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    questionOptions?: QuestionOptionUncheckedUpdateManyWithoutQuestionNestedInput
    questionAnswer?: QuestionAnswerUncheckedUpdateManyWithoutQuestionNestedInput
    StudentQuizAnswer?: StudentQuizAnswerUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionCreateManyInput = {
    id?: string
    quizId: string
    question: string
  }

  export type QuestionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
  }

  export type QuestionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    quizId?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
  }

  export type QuestionOptionCreateInput = {
    id?: string
    option: string
    question: QuestionCreateNestedOneWithoutQuestionOptionsInput
    questionAnswer?: QuestionAnswerCreateNestedManyWithoutAnswerInput
    studentQuizAnswers?: StudentQuizAnswerCreateNestedManyWithoutSelectedOptionInput
  }

  export type QuestionOptionUncheckedCreateInput = {
    id?: string
    questionId: string
    option: string
    questionAnswer?: QuestionAnswerUncheckedCreateNestedManyWithoutAnswerInput
    studentQuizAnswers?: StudentQuizAnswerUncheckedCreateNestedManyWithoutSelectedOptionInput
  }

  export type QuestionOptionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    option?: StringFieldUpdateOperationsInput | string
    question?: QuestionUpdateOneRequiredWithoutQuestionOptionsNestedInput
    questionAnswer?: QuestionAnswerUpdateManyWithoutAnswerNestedInput
    studentQuizAnswers?: StudentQuizAnswerUpdateManyWithoutSelectedOptionNestedInput
  }

  export type QuestionOptionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    option?: StringFieldUpdateOperationsInput | string
    questionAnswer?: QuestionAnswerUncheckedUpdateManyWithoutAnswerNestedInput
    studentQuizAnswers?: StudentQuizAnswerUncheckedUpdateManyWithoutSelectedOptionNestedInput
  }

  export type QuestionOptionCreateManyInput = {
    id?: string
    questionId: string
    option: string
  }

  export type QuestionOptionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    option?: StringFieldUpdateOperationsInput | string
  }

  export type QuestionOptionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    option?: StringFieldUpdateOperationsInput | string
  }

  export type QuestionAnswerCreateInput = {
    id?: string
    question: QuestionCreateNestedOneWithoutQuestionAnswerInput
    answer: QuestionOptionCreateNestedOneWithoutQuestionAnswerInput
  }

  export type QuestionAnswerUncheckedCreateInput = {
    id?: string
    questionId: string
    answerId: string
  }

  export type QuestionAnswerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    question?: QuestionUpdateOneRequiredWithoutQuestionAnswerNestedInput
    answer?: QuestionOptionUpdateOneRequiredWithoutQuestionAnswerNestedInput
  }

  export type QuestionAnswerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    answerId?: StringFieldUpdateOperationsInput | string
  }

  export type QuestionAnswerCreateManyInput = {
    id?: string
    questionId: string
    answerId: string
  }

  export type QuestionAnswerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type QuestionAnswerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    answerId?: StringFieldUpdateOperationsInput | string
  }

  export type StudentQuizCreateInput = {
    id?: string
    score?: number | null
    passed?: boolean
    takenAt?: Date | string
    student: StudentCreateNestedOneWithoutStudentQuizzesInput
    quiz: QuizCreateNestedOneWithoutStudentQuizInput
    studentQuizAnswers?: StudentQuizAnswerCreateNestedManyWithoutStudentQuizInput
  }

  export type StudentQuizUncheckedCreateInput = {
    id?: string
    studentId: string
    quizId: string
    score?: number | null
    passed?: boolean
    takenAt?: Date | string
    studentQuizAnswers?: StudentQuizAnswerUncheckedCreateNestedManyWithoutStudentQuizInput
  }

  export type StudentQuizUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    passed?: BoolFieldUpdateOperationsInput | boolean
    takenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: StudentUpdateOneRequiredWithoutStudentQuizzesNestedInput
    quiz?: QuizUpdateOneRequiredWithoutStudentQuizNestedInput
    studentQuizAnswers?: StudentQuizAnswerUpdateManyWithoutStudentQuizNestedInput
  }

  export type StudentQuizUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    quizId?: StringFieldUpdateOperationsInput | string
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    passed?: BoolFieldUpdateOperationsInput | boolean
    takenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    studentQuizAnswers?: StudentQuizAnswerUncheckedUpdateManyWithoutStudentQuizNestedInput
  }

  export type StudentQuizCreateManyInput = {
    id?: string
    studentId: string
    quizId: string
    score?: number | null
    passed?: boolean
    takenAt?: Date | string
  }

  export type StudentQuizUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    passed?: BoolFieldUpdateOperationsInput | boolean
    takenAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentQuizUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    quizId?: StringFieldUpdateOperationsInput | string
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    passed?: BoolFieldUpdateOperationsInput | boolean
    takenAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentQuizAnswerCreateInput = {
    id?: string
    studentQuiz: StudentQuizCreateNestedOneWithoutStudentQuizAnswersInput
    question: QuestionCreateNestedOneWithoutStudentQuizAnswerInput
    selectedOption: QuestionOptionCreateNestedOneWithoutStudentQuizAnswersInput
  }

  export type StudentQuizAnswerUncheckedCreateInput = {
    id?: string
    studentQuizId: string
    questionId: string
    optionId: string
  }

  export type StudentQuizAnswerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentQuiz?: StudentQuizUpdateOneRequiredWithoutStudentQuizAnswersNestedInput
    question?: QuestionUpdateOneRequiredWithoutStudentQuizAnswerNestedInput
    selectedOption?: QuestionOptionUpdateOneRequiredWithoutStudentQuizAnswersNestedInput
  }

  export type StudentQuizAnswerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentQuizId?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    optionId?: StringFieldUpdateOperationsInput | string
  }

  export type StudentQuizAnswerCreateManyInput = {
    id?: string
    studentQuizId: string
    questionId: string
    optionId: string
  }

  export type StudentQuizAnswerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type StudentQuizAnswerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentQuizId?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    optionId?: StringFieldUpdateOperationsInput | string
  }

  export type StudentProgressCreateInput = {
    id?: string
    completed?: boolean
    completedAt?: Date | string | null
    student: StudentCreateNestedOneWithoutProgressInput
    lesson: LessonCreateNestedOneWithoutStudentProgressInput
  }

  export type StudentProgressUncheckedCreateInput = {
    id?: string
    studentId: string
    lessonId: string
    completed?: boolean
    completedAt?: Date | string | null
  }

  export type StudentProgressUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    student?: StudentUpdateOneRequiredWithoutProgressNestedInput
    lesson?: LessonUpdateOneRequiredWithoutStudentProgressNestedInput
  }

  export type StudentProgressUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    lessonId?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StudentProgressCreateManyInput = {
    id?: string
    studentId: string
    lessonId: string
    completed?: boolean
    completedAt?: Date | string | null
  }

  export type StudentProgressUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StudentProgressUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    lessonId?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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
    search?: string
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

  export type AdminOrderByRelevanceInput = {
    fields: AdminOrderByRelevanceFieldEnum | AdminOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AdminCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passcode?: SortOrder
    createdAt?: SortOrder
  }

  export type AdminMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passcode?: SortOrder
    createdAt?: SortOrder
  }

  export type AdminMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passcode?: SortOrder
    createdAt?: SortOrder
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
    search?: string
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type CourseListRelationFilter = {
    every?: CourseWhereInput
    some?: CourseWhereInput
    none?: CourseWhereInput
  }

  export type CourseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TeacherOrderByRelevanceInput = {
    fields: TeacherOrderByRelevanceFieldEnum | TeacherOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type TeacherCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passcode?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type TeacherMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passcode?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type TeacherMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passcode?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StudentProgressListRelationFilter = {
    every?: StudentProgressWhereInput
    some?: StudentProgressWhereInput
    none?: StudentProgressWhereInput
  }

  export type StudentQuizListRelationFilter = {
    every?: StudentQuizWhereInput
    some?: StudentQuizWhereInput
    none?: StudentQuizWhereInput
  }

  export type StudentProgressOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StudentQuizOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StudentOrderByRelevanceInput = {
    fields: StudentOrderByRelevanceFieldEnum | StudentOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type StudentCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    passcode?: SortOrder
    phoneNo?: SortOrder
    status?: SortOrder
    startDate?: SortOrder
    chatId?: SortOrder
    createdAt?: SortOrder
  }

  export type StudentMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    passcode?: SortOrder
    phoneNo?: SortOrder
    status?: SortOrder
    startDate?: SortOrder
    chatId?: SortOrder
    createdAt?: SortOrder
  }

  export type StudentMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    passcode?: SortOrder
    phoneNo?: SortOrder
    status?: SortOrder
    startDate?: SortOrder
    chatId?: SortOrder
    createdAt?: SortOrder
  }

  export type TeacherScalarRelationFilter = {
    is?: TeacherWhereInput
    isNot?: TeacherWhereInput
  }

  export type LessonListRelationFilter = {
    every?: LessonWhereInput
    some?: LessonWhereInput
    none?: LessonWhereInput
  }

  export type LessonOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CourseOrderByRelevanceInput = {
    fields: CourseOrderByRelevanceFieldEnum | CourseOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CourseCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    teacherId?: SortOrder
    createdAt?: SortOrder
  }

  export type CourseMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    teacherId?: SortOrder
    createdAt?: SortOrder
  }

  export type CourseMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    teacherId?: SortOrder
    createdAt?: SortOrder
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

  export type CourseScalarRelationFilter = {
    is?: CourseWhereInput
    isNot?: CourseWhereInput
  }

  export type QuizNullableScalarRelationFilter = {
    is?: QuizWhereInput | null
    isNot?: QuizWhereInput | null
  }

  export type LessonOrderByRelevanceInput = {
    fields: LessonOrderByRelevanceFieldEnum | LessonOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type LessonCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    videoUrl?: SortOrder
    courseId?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
  }

  export type LessonAvgOrderByAggregateInput = {
    order?: SortOrder
  }

  export type LessonMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    videoUrl?: SortOrder
    courseId?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
  }

  export type LessonMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    videoUrl?: SortOrder
    courseId?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
  }

  export type LessonSumOrderByAggregateInput = {
    order?: SortOrder
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

  export type LessonScalarRelationFilter = {
    is?: LessonWhereInput
    isNot?: LessonWhereInput
  }

  export type QuestionListRelationFilter = {
    every?: QuestionWhereInput
    some?: QuestionWhereInput
    none?: QuestionWhereInput
  }

  export type QuestionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type QuizOrderByRelevanceInput = {
    fields: QuizOrderByRelevanceFieldEnum | QuizOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type QuizCountOrderByAggregateInput = {
    id?: SortOrder
    lessonId?: SortOrder
  }

  export type QuizMaxOrderByAggregateInput = {
    id?: SortOrder
    lessonId?: SortOrder
  }

  export type QuizMinOrderByAggregateInput = {
    id?: SortOrder
    lessonId?: SortOrder
  }

  export type QuizScalarRelationFilter = {
    is?: QuizWhereInput
    isNot?: QuizWhereInput
  }

  export type QuestionOptionListRelationFilter = {
    every?: QuestionOptionWhereInput
    some?: QuestionOptionWhereInput
    none?: QuestionOptionWhereInput
  }

  export type QuestionAnswerListRelationFilter = {
    every?: QuestionAnswerWhereInput
    some?: QuestionAnswerWhereInput
    none?: QuestionAnswerWhereInput
  }

  export type StudentQuizAnswerListRelationFilter = {
    every?: StudentQuizAnswerWhereInput
    some?: StudentQuizAnswerWhereInput
    none?: StudentQuizAnswerWhereInput
  }

  export type QuestionOptionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type QuestionAnswerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StudentQuizAnswerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type QuestionOrderByRelevanceInput = {
    fields: QuestionOrderByRelevanceFieldEnum | QuestionOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type QuestionCountOrderByAggregateInput = {
    id?: SortOrder
    quizId?: SortOrder
    question?: SortOrder
  }

  export type QuestionMaxOrderByAggregateInput = {
    id?: SortOrder
    quizId?: SortOrder
    question?: SortOrder
  }

  export type QuestionMinOrderByAggregateInput = {
    id?: SortOrder
    quizId?: SortOrder
    question?: SortOrder
  }

  export type QuestionScalarRelationFilter = {
    is?: QuestionWhereInput
    isNot?: QuestionWhereInput
  }

  export type QuestionOptionOrderByRelevanceInput = {
    fields: QuestionOptionOrderByRelevanceFieldEnum | QuestionOptionOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type QuestionOptionCountOrderByAggregateInput = {
    id?: SortOrder
    questionId?: SortOrder
    option?: SortOrder
  }

  export type QuestionOptionMaxOrderByAggregateInput = {
    id?: SortOrder
    questionId?: SortOrder
    option?: SortOrder
  }

  export type QuestionOptionMinOrderByAggregateInput = {
    id?: SortOrder
    questionId?: SortOrder
    option?: SortOrder
  }

  export type QuestionOptionScalarRelationFilter = {
    is?: QuestionOptionWhereInput
    isNot?: QuestionOptionWhereInput
  }

  export type QuestionAnswerOrderByRelevanceInput = {
    fields: QuestionAnswerOrderByRelevanceFieldEnum | QuestionAnswerOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type QuestionAnswerCountOrderByAggregateInput = {
    id?: SortOrder
    questionId?: SortOrder
    answerId?: SortOrder
  }

  export type QuestionAnswerMaxOrderByAggregateInput = {
    id?: SortOrder
    questionId?: SortOrder
    answerId?: SortOrder
  }

  export type QuestionAnswerMinOrderByAggregateInput = {
    id?: SortOrder
    questionId?: SortOrder
    answerId?: SortOrder
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

  export type StudentScalarRelationFilter = {
    is?: StudentWhereInput
    isNot?: StudentWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type StudentQuizOrderByRelevanceInput = {
    fields: StudentQuizOrderByRelevanceFieldEnum | StudentQuizOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type StudentQuizStudentIdQuizIdCompoundUniqueInput = {
    studentId: string
    quizId: string
  }

  export type StudentQuizCountOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    quizId?: SortOrder
    score?: SortOrder
    passed?: SortOrder
    takenAt?: SortOrder
  }

  export type StudentQuizAvgOrderByAggregateInput = {
    score?: SortOrder
  }

  export type StudentQuizMaxOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    quizId?: SortOrder
    score?: SortOrder
    passed?: SortOrder
    takenAt?: SortOrder
  }

  export type StudentQuizMinOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    quizId?: SortOrder
    score?: SortOrder
    passed?: SortOrder
    takenAt?: SortOrder
  }

  export type StudentQuizSumOrderByAggregateInput = {
    score?: SortOrder
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

  export type StudentQuizScalarRelationFilter = {
    is?: StudentQuizWhereInput
    isNot?: StudentQuizWhereInput
  }

  export type StudentQuizAnswerOrderByRelevanceInput = {
    fields: StudentQuizAnswerOrderByRelevanceFieldEnum | StudentQuizAnswerOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type StudentQuizAnswerStudentQuizIdQuestionIdCompoundUniqueInput = {
    studentQuizId: string
    questionId: string
  }

  export type StudentQuizAnswerCountOrderByAggregateInput = {
    id?: SortOrder
    studentQuizId?: SortOrder
    questionId?: SortOrder
    optionId?: SortOrder
  }

  export type StudentQuizAnswerMaxOrderByAggregateInput = {
    id?: SortOrder
    studentQuizId?: SortOrder
    questionId?: SortOrder
    optionId?: SortOrder
  }

  export type StudentQuizAnswerMinOrderByAggregateInput = {
    id?: SortOrder
    studentQuizId?: SortOrder
    questionId?: SortOrder
    optionId?: SortOrder
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

  export type StudentProgressOrderByRelevanceInput = {
    fields: StudentProgressOrderByRelevanceFieldEnum | StudentProgressOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type StudentProgressStudentIdLessonIdCompoundUniqueInput = {
    studentId: string
    lessonId: string
  }

  export type StudentProgressCountOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    lessonId?: SortOrder
    completed?: SortOrder
    completedAt?: SortOrder
  }

  export type StudentProgressMaxOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    lessonId?: SortOrder
    completed?: SortOrder
    completedAt?: SortOrder
  }

  export type StudentProgressMinOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    lessonId?: SortOrder
    completed?: SortOrder
    completedAt?: SortOrder
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

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type CourseCreateNestedManyWithoutTeacherInput = {
    create?: XOR<CourseCreateWithoutTeacherInput, CourseUncheckedCreateWithoutTeacherInput> | CourseCreateWithoutTeacherInput[] | CourseUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutTeacherInput | CourseCreateOrConnectWithoutTeacherInput[]
    createMany?: CourseCreateManyTeacherInputEnvelope
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
  }

  export type CourseUncheckedCreateNestedManyWithoutTeacherInput = {
    create?: XOR<CourseCreateWithoutTeacherInput, CourseUncheckedCreateWithoutTeacherInput> | CourseCreateWithoutTeacherInput[] | CourseUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutTeacherInput | CourseCreateOrConnectWithoutTeacherInput[]
    createMany?: CourseCreateManyTeacherInputEnvelope
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type CourseUpdateManyWithoutTeacherNestedInput = {
    create?: XOR<CourseCreateWithoutTeacherInput, CourseUncheckedCreateWithoutTeacherInput> | CourseCreateWithoutTeacherInput[] | CourseUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutTeacherInput | CourseCreateOrConnectWithoutTeacherInput[]
    upsert?: CourseUpsertWithWhereUniqueWithoutTeacherInput | CourseUpsertWithWhereUniqueWithoutTeacherInput[]
    createMany?: CourseCreateManyTeacherInputEnvelope
    set?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    disconnect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    delete?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    update?: CourseUpdateWithWhereUniqueWithoutTeacherInput | CourseUpdateWithWhereUniqueWithoutTeacherInput[]
    updateMany?: CourseUpdateManyWithWhereWithoutTeacherInput | CourseUpdateManyWithWhereWithoutTeacherInput[]
    deleteMany?: CourseScalarWhereInput | CourseScalarWhereInput[]
  }

  export type CourseUncheckedUpdateManyWithoutTeacherNestedInput = {
    create?: XOR<CourseCreateWithoutTeacherInput, CourseUncheckedCreateWithoutTeacherInput> | CourseCreateWithoutTeacherInput[] | CourseUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutTeacherInput | CourseCreateOrConnectWithoutTeacherInput[]
    upsert?: CourseUpsertWithWhereUniqueWithoutTeacherInput | CourseUpsertWithWhereUniqueWithoutTeacherInput[]
    createMany?: CourseCreateManyTeacherInputEnvelope
    set?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    disconnect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    delete?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    update?: CourseUpdateWithWhereUniqueWithoutTeacherInput | CourseUpdateWithWhereUniqueWithoutTeacherInput[]
    updateMany?: CourseUpdateManyWithWhereWithoutTeacherInput | CourseUpdateManyWithWhereWithoutTeacherInput[]
    deleteMany?: CourseScalarWhereInput | CourseScalarWhereInput[]
  }

  export type StudentProgressCreateNestedManyWithoutStudentInput = {
    create?: XOR<StudentProgressCreateWithoutStudentInput, StudentProgressUncheckedCreateWithoutStudentInput> | StudentProgressCreateWithoutStudentInput[] | StudentProgressUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: StudentProgressCreateOrConnectWithoutStudentInput | StudentProgressCreateOrConnectWithoutStudentInput[]
    createMany?: StudentProgressCreateManyStudentInputEnvelope
    connect?: StudentProgressWhereUniqueInput | StudentProgressWhereUniqueInput[]
  }

  export type StudentQuizCreateNestedManyWithoutStudentInput = {
    create?: XOR<StudentQuizCreateWithoutStudentInput, StudentQuizUncheckedCreateWithoutStudentInput> | StudentQuizCreateWithoutStudentInput[] | StudentQuizUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: StudentQuizCreateOrConnectWithoutStudentInput | StudentQuizCreateOrConnectWithoutStudentInput[]
    createMany?: StudentQuizCreateManyStudentInputEnvelope
    connect?: StudentQuizWhereUniqueInput | StudentQuizWhereUniqueInput[]
  }

  export type StudentProgressUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<StudentProgressCreateWithoutStudentInput, StudentProgressUncheckedCreateWithoutStudentInput> | StudentProgressCreateWithoutStudentInput[] | StudentProgressUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: StudentProgressCreateOrConnectWithoutStudentInput | StudentProgressCreateOrConnectWithoutStudentInput[]
    createMany?: StudentProgressCreateManyStudentInputEnvelope
    connect?: StudentProgressWhereUniqueInput | StudentProgressWhereUniqueInput[]
  }

  export type StudentQuizUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<StudentQuizCreateWithoutStudentInput, StudentQuizUncheckedCreateWithoutStudentInput> | StudentQuizCreateWithoutStudentInput[] | StudentQuizUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: StudentQuizCreateOrConnectWithoutStudentInput | StudentQuizCreateOrConnectWithoutStudentInput[]
    createMany?: StudentQuizCreateManyStudentInputEnvelope
    connect?: StudentQuizWhereUniqueInput | StudentQuizWhereUniqueInput[]
  }

  export type StudentProgressUpdateManyWithoutStudentNestedInput = {
    create?: XOR<StudentProgressCreateWithoutStudentInput, StudentProgressUncheckedCreateWithoutStudentInput> | StudentProgressCreateWithoutStudentInput[] | StudentProgressUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: StudentProgressCreateOrConnectWithoutStudentInput | StudentProgressCreateOrConnectWithoutStudentInput[]
    upsert?: StudentProgressUpsertWithWhereUniqueWithoutStudentInput | StudentProgressUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: StudentProgressCreateManyStudentInputEnvelope
    set?: StudentProgressWhereUniqueInput | StudentProgressWhereUniqueInput[]
    disconnect?: StudentProgressWhereUniqueInput | StudentProgressWhereUniqueInput[]
    delete?: StudentProgressWhereUniqueInput | StudentProgressWhereUniqueInput[]
    connect?: StudentProgressWhereUniqueInput | StudentProgressWhereUniqueInput[]
    update?: StudentProgressUpdateWithWhereUniqueWithoutStudentInput | StudentProgressUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: StudentProgressUpdateManyWithWhereWithoutStudentInput | StudentProgressUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: StudentProgressScalarWhereInput | StudentProgressScalarWhereInput[]
  }

  export type StudentQuizUpdateManyWithoutStudentNestedInput = {
    create?: XOR<StudentQuizCreateWithoutStudentInput, StudentQuizUncheckedCreateWithoutStudentInput> | StudentQuizCreateWithoutStudentInput[] | StudentQuizUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: StudentQuizCreateOrConnectWithoutStudentInput | StudentQuizCreateOrConnectWithoutStudentInput[]
    upsert?: StudentQuizUpsertWithWhereUniqueWithoutStudentInput | StudentQuizUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: StudentQuizCreateManyStudentInputEnvelope
    set?: StudentQuizWhereUniqueInput | StudentQuizWhereUniqueInput[]
    disconnect?: StudentQuizWhereUniqueInput | StudentQuizWhereUniqueInput[]
    delete?: StudentQuizWhereUniqueInput | StudentQuizWhereUniqueInput[]
    connect?: StudentQuizWhereUniqueInput | StudentQuizWhereUniqueInput[]
    update?: StudentQuizUpdateWithWhereUniqueWithoutStudentInput | StudentQuizUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: StudentQuizUpdateManyWithWhereWithoutStudentInput | StudentQuizUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: StudentQuizScalarWhereInput | StudentQuizScalarWhereInput[]
  }

  export type StudentProgressUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<StudentProgressCreateWithoutStudentInput, StudentProgressUncheckedCreateWithoutStudentInput> | StudentProgressCreateWithoutStudentInput[] | StudentProgressUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: StudentProgressCreateOrConnectWithoutStudentInput | StudentProgressCreateOrConnectWithoutStudentInput[]
    upsert?: StudentProgressUpsertWithWhereUniqueWithoutStudentInput | StudentProgressUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: StudentProgressCreateManyStudentInputEnvelope
    set?: StudentProgressWhereUniqueInput | StudentProgressWhereUniqueInput[]
    disconnect?: StudentProgressWhereUniqueInput | StudentProgressWhereUniqueInput[]
    delete?: StudentProgressWhereUniqueInput | StudentProgressWhereUniqueInput[]
    connect?: StudentProgressWhereUniqueInput | StudentProgressWhereUniqueInput[]
    update?: StudentProgressUpdateWithWhereUniqueWithoutStudentInput | StudentProgressUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: StudentProgressUpdateManyWithWhereWithoutStudentInput | StudentProgressUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: StudentProgressScalarWhereInput | StudentProgressScalarWhereInput[]
  }

  export type StudentQuizUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<StudentQuizCreateWithoutStudentInput, StudentQuizUncheckedCreateWithoutStudentInput> | StudentQuizCreateWithoutStudentInput[] | StudentQuizUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: StudentQuizCreateOrConnectWithoutStudentInput | StudentQuizCreateOrConnectWithoutStudentInput[]
    upsert?: StudentQuizUpsertWithWhereUniqueWithoutStudentInput | StudentQuizUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: StudentQuizCreateManyStudentInputEnvelope
    set?: StudentQuizWhereUniqueInput | StudentQuizWhereUniqueInput[]
    disconnect?: StudentQuizWhereUniqueInput | StudentQuizWhereUniqueInput[]
    delete?: StudentQuizWhereUniqueInput | StudentQuizWhereUniqueInput[]
    connect?: StudentQuizWhereUniqueInput | StudentQuizWhereUniqueInput[]
    update?: StudentQuizUpdateWithWhereUniqueWithoutStudentInput | StudentQuizUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: StudentQuizUpdateManyWithWhereWithoutStudentInput | StudentQuizUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: StudentQuizScalarWhereInput | StudentQuizScalarWhereInput[]
  }

  export type TeacherCreateNestedOneWithoutCoursesInput = {
    create?: XOR<TeacherCreateWithoutCoursesInput, TeacherUncheckedCreateWithoutCoursesInput>
    connectOrCreate?: TeacherCreateOrConnectWithoutCoursesInput
    connect?: TeacherWhereUniqueInput
  }

  export type LessonCreateNestedManyWithoutCourseInput = {
    create?: XOR<LessonCreateWithoutCourseInput, LessonUncheckedCreateWithoutCourseInput> | LessonCreateWithoutCourseInput[] | LessonUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: LessonCreateOrConnectWithoutCourseInput | LessonCreateOrConnectWithoutCourseInput[]
    createMany?: LessonCreateManyCourseInputEnvelope
    connect?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
  }

  export type LessonUncheckedCreateNestedManyWithoutCourseInput = {
    create?: XOR<LessonCreateWithoutCourseInput, LessonUncheckedCreateWithoutCourseInput> | LessonCreateWithoutCourseInput[] | LessonUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: LessonCreateOrConnectWithoutCourseInput | LessonCreateOrConnectWithoutCourseInput[]
    createMany?: LessonCreateManyCourseInputEnvelope
    connect?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
  }

  export type TeacherUpdateOneRequiredWithoutCoursesNestedInput = {
    create?: XOR<TeacherCreateWithoutCoursesInput, TeacherUncheckedCreateWithoutCoursesInput>
    connectOrCreate?: TeacherCreateOrConnectWithoutCoursesInput
    upsert?: TeacherUpsertWithoutCoursesInput
    connect?: TeacherWhereUniqueInput
    update?: XOR<XOR<TeacherUpdateToOneWithWhereWithoutCoursesInput, TeacherUpdateWithoutCoursesInput>, TeacherUncheckedUpdateWithoutCoursesInput>
  }

  export type LessonUpdateManyWithoutCourseNestedInput = {
    create?: XOR<LessonCreateWithoutCourseInput, LessonUncheckedCreateWithoutCourseInput> | LessonCreateWithoutCourseInput[] | LessonUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: LessonCreateOrConnectWithoutCourseInput | LessonCreateOrConnectWithoutCourseInput[]
    upsert?: LessonUpsertWithWhereUniqueWithoutCourseInput | LessonUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: LessonCreateManyCourseInputEnvelope
    set?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
    disconnect?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
    delete?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
    connect?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
    update?: LessonUpdateWithWhereUniqueWithoutCourseInput | LessonUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: LessonUpdateManyWithWhereWithoutCourseInput | LessonUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: LessonScalarWhereInput | LessonScalarWhereInput[]
  }

  export type LessonUncheckedUpdateManyWithoutCourseNestedInput = {
    create?: XOR<LessonCreateWithoutCourseInput, LessonUncheckedCreateWithoutCourseInput> | LessonCreateWithoutCourseInput[] | LessonUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: LessonCreateOrConnectWithoutCourseInput | LessonCreateOrConnectWithoutCourseInput[]
    upsert?: LessonUpsertWithWhereUniqueWithoutCourseInput | LessonUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: LessonCreateManyCourseInputEnvelope
    set?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
    disconnect?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
    delete?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
    connect?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
    update?: LessonUpdateWithWhereUniqueWithoutCourseInput | LessonUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: LessonUpdateManyWithWhereWithoutCourseInput | LessonUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: LessonScalarWhereInput | LessonScalarWhereInput[]
  }

  export type CourseCreateNestedOneWithoutLessonsInput = {
    create?: XOR<CourseCreateWithoutLessonsInput, CourseUncheckedCreateWithoutLessonsInput>
    connectOrCreate?: CourseCreateOrConnectWithoutLessonsInput
    connect?: CourseWhereUniqueInput
  }

  export type QuizCreateNestedOneWithoutLessonInput = {
    create?: XOR<QuizCreateWithoutLessonInput, QuizUncheckedCreateWithoutLessonInput>
    connectOrCreate?: QuizCreateOrConnectWithoutLessonInput
    connect?: QuizWhereUniqueInput
  }

  export type StudentProgressCreateNestedManyWithoutLessonInput = {
    create?: XOR<StudentProgressCreateWithoutLessonInput, StudentProgressUncheckedCreateWithoutLessonInput> | StudentProgressCreateWithoutLessonInput[] | StudentProgressUncheckedCreateWithoutLessonInput[]
    connectOrCreate?: StudentProgressCreateOrConnectWithoutLessonInput | StudentProgressCreateOrConnectWithoutLessonInput[]
    createMany?: StudentProgressCreateManyLessonInputEnvelope
    connect?: StudentProgressWhereUniqueInput | StudentProgressWhereUniqueInput[]
  }

  export type QuizUncheckedCreateNestedOneWithoutLessonInput = {
    create?: XOR<QuizCreateWithoutLessonInput, QuizUncheckedCreateWithoutLessonInput>
    connectOrCreate?: QuizCreateOrConnectWithoutLessonInput
    connect?: QuizWhereUniqueInput
  }

  export type StudentProgressUncheckedCreateNestedManyWithoutLessonInput = {
    create?: XOR<StudentProgressCreateWithoutLessonInput, StudentProgressUncheckedCreateWithoutLessonInput> | StudentProgressCreateWithoutLessonInput[] | StudentProgressUncheckedCreateWithoutLessonInput[]
    connectOrCreate?: StudentProgressCreateOrConnectWithoutLessonInput | StudentProgressCreateOrConnectWithoutLessonInput[]
    createMany?: StudentProgressCreateManyLessonInputEnvelope
    connect?: StudentProgressWhereUniqueInput | StudentProgressWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CourseUpdateOneRequiredWithoutLessonsNestedInput = {
    create?: XOR<CourseCreateWithoutLessonsInput, CourseUncheckedCreateWithoutLessonsInput>
    connectOrCreate?: CourseCreateOrConnectWithoutLessonsInput
    upsert?: CourseUpsertWithoutLessonsInput
    connect?: CourseWhereUniqueInput
    update?: XOR<XOR<CourseUpdateToOneWithWhereWithoutLessonsInput, CourseUpdateWithoutLessonsInput>, CourseUncheckedUpdateWithoutLessonsInput>
  }

  export type QuizUpdateOneWithoutLessonNestedInput = {
    create?: XOR<QuizCreateWithoutLessonInput, QuizUncheckedCreateWithoutLessonInput>
    connectOrCreate?: QuizCreateOrConnectWithoutLessonInput
    upsert?: QuizUpsertWithoutLessonInput
    disconnect?: QuizWhereInput | boolean
    delete?: QuizWhereInput | boolean
    connect?: QuizWhereUniqueInput
    update?: XOR<XOR<QuizUpdateToOneWithWhereWithoutLessonInput, QuizUpdateWithoutLessonInput>, QuizUncheckedUpdateWithoutLessonInput>
  }

  export type StudentProgressUpdateManyWithoutLessonNestedInput = {
    create?: XOR<StudentProgressCreateWithoutLessonInput, StudentProgressUncheckedCreateWithoutLessonInput> | StudentProgressCreateWithoutLessonInput[] | StudentProgressUncheckedCreateWithoutLessonInput[]
    connectOrCreate?: StudentProgressCreateOrConnectWithoutLessonInput | StudentProgressCreateOrConnectWithoutLessonInput[]
    upsert?: StudentProgressUpsertWithWhereUniqueWithoutLessonInput | StudentProgressUpsertWithWhereUniqueWithoutLessonInput[]
    createMany?: StudentProgressCreateManyLessonInputEnvelope
    set?: StudentProgressWhereUniqueInput | StudentProgressWhereUniqueInput[]
    disconnect?: StudentProgressWhereUniqueInput | StudentProgressWhereUniqueInput[]
    delete?: StudentProgressWhereUniqueInput | StudentProgressWhereUniqueInput[]
    connect?: StudentProgressWhereUniqueInput | StudentProgressWhereUniqueInput[]
    update?: StudentProgressUpdateWithWhereUniqueWithoutLessonInput | StudentProgressUpdateWithWhereUniqueWithoutLessonInput[]
    updateMany?: StudentProgressUpdateManyWithWhereWithoutLessonInput | StudentProgressUpdateManyWithWhereWithoutLessonInput[]
    deleteMany?: StudentProgressScalarWhereInput | StudentProgressScalarWhereInput[]
  }

  export type QuizUncheckedUpdateOneWithoutLessonNestedInput = {
    create?: XOR<QuizCreateWithoutLessonInput, QuizUncheckedCreateWithoutLessonInput>
    connectOrCreate?: QuizCreateOrConnectWithoutLessonInput
    upsert?: QuizUpsertWithoutLessonInput
    disconnect?: QuizWhereInput | boolean
    delete?: QuizWhereInput | boolean
    connect?: QuizWhereUniqueInput
    update?: XOR<XOR<QuizUpdateToOneWithWhereWithoutLessonInput, QuizUpdateWithoutLessonInput>, QuizUncheckedUpdateWithoutLessonInput>
  }

  export type StudentProgressUncheckedUpdateManyWithoutLessonNestedInput = {
    create?: XOR<StudentProgressCreateWithoutLessonInput, StudentProgressUncheckedCreateWithoutLessonInput> | StudentProgressCreateWithoutLessonInput[] | StudentProgressUncheckedCreateWithoutLessonInput[]
    connectOrCreate?: StudentProgressCreateOrConnectWithoutLessonInput | StudentProgressCreateOrConnectWithoutLessonInput[]
    upsert?: StudentProgressUpsertWithWhereUniqueWithoutLessonInput | StudentProgressUpsertWithWhereUniqueWithoutLessonInput[]
    createMany?: StudentProgressCreateManyLessonInputEnvelope
    set?: StudentProgressWhereUniqueInput | StudentProgressWhereUniqueInput[]
    disconnect?: StudentProgressWhereUniqueInput | StudentProgressWhereUniqueInput[]
    delete?: StudentProgressWhereUniqueInput | StudentProgressWhereUniqueInput[]
    connect?: StudentProgressWhereUniqueInput | StudentProgressWhereUniqueInput[]
    update?: StudentProgressUpdateWithWhereUniqueWithoutLessonInput | StudentProgressUpdateWithWhereUniqueWithoutLessonInput[]
    updateMany?: StudentProgressUpdateManyWithWhereWithoutLessonInput | StudentProgressUpdateManyWithWhereWithoutLessonInput[]
    deleteMany?: StudentProgressScalarWhereInput | StudentProgressScalarWhereInput[]
  }

  export type LessonCreateNestedOneWithoutQuizInput = {
    create?: XOR<LessonCreateWithoutQuizInput, LessonUncheckedCreateWithoutQuizInput>
    connectOrCreate?: LessonCreateOrConnectWithoutQuizInput
    connect?: LessonWhereUniqueInput
  }

  export type QuestionCreateNestedManyWithoutQuizInput = {
    create?: XOR<QuestionCreateWithoutQuizInput, QuestionUncheckedCreateWithoutQuizInput> | QuestionCreateWithoutQuizInput[] | QuestionUncheckedCreateWithoutQuizInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutQuizInput | QuestionCreateOrConnectWithoutQuizInput[]
    createMany?: QuestionCreateManyQuizInputEnvelope
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
  }

  export type StudentQuizCreateNestedManyWithoutQuizInput = {
    create?: XOR<StudentQuizCreateWithoutQuizInput, StudentQuizUncheckedCreateWithoutQuizInput> | StudentQuizCreateWithoutQuizInput[] | StudentQuizUncheckedCreateWithoutQuizInput[]
    connectOrCreate?: StudentQuizCreateOrConnectWithoutQuizInput | StudentQuizCreateOrConnectWithoutQuizInput[]
    createMany?: StudentQuizCreateManyQuizInputEnvelope
    connect?: StudentQuizWhereUniqueInput | StudentQuizWhereUniqueInput[]
  }

  export type QuestionUncheckedCreateNestedManyWithoutQuizInput = {
    create?: XOR<QuestionCreateWithoutQuizInput, QuestionUncheckedCreateWithoutQuizInput> | QuestionCreateWithoutQuizInput[] | QuestionUncheckedCreateWithoutQuizInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutQuizInput | QuestionCreateOrConnectWithoutQuizInput[]
    createMany?: QuestionCreateManyQuizInputEnvelope
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
  }

  export type StudentQuizUncheckedCreateNestedManyWithoutQuizInput = {
    create?: XOR<StudentQuizCreateWithoutQuizInput, StudentQuizUncheckedCreateWithoutQuizInput> | StudentQuizCreateWithoutQuizInput[] | StudentQuizUncheckedCreateWithoutQuizInput[]
    connectOrCreate?: StudentQuizCreateOrConnectWithoutQuizInput | StudentQuizCreateOrConnectWithoutQuizInput[]
    createMany?: StudentQuizCreateManyQuizInputEnvelope
    connect?: StudentQuizWhereUniqueInput | StudentQuizWhereUniqueInput[]
  }

  export type LessonUpdateOneRequiredWithoutQuizNestedInput = {
    create?: XOR<LessonCreateWithoutQuizInput, LessonUncheckedCreateWithoutQuizInput>
    connectOrCreate?: LessonCreateOrConnectWithoutQuizInput
    upsert?: LessonUpsertWithoutQuizInput
    connect?: LessonWhereUniqueInput
    update?: XOR<XOR<LessonUpdateToOneWithWhereWithoutQuizInput, LessonUpdateWithoutQuizInput>, LessonUncheckedUpdateWithoutQuizInput>
  }

  export type QuestionUpdateManyWithoutQuizNestedInput = {
    create?: XOR<QuestionCreateWithoutQuizInput, QuestionUncheckedCreateWithoutQuizInput> | QuestionCreateWithoutQuizInput[] | QuestionUncheckedCreateWithoutQuizInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutQuizInput | QuestionCreateOrConnectWithoutQuizInput[]
    upsert?: QuestionUpsertWithWhereUniqueWithoutQuizInput | QuestionUpsertWithWhereUniqueWithoutQuizInput[]
    createMany?: QuestionCreateManyQuizInputEnvelope
    set?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    disconnect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    delete?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    update?: QuestionUpdateWithWhereUniqueWithoutQuizInput | QuestionUpdateWithWhereUniqueWithoutQuizInput[]
    updateMany?: QuestionUpdateManyWithWhereWithoutQuizInput | QuestionUpdateManyWithWhereWithoutQuizInput[]
    deleteMany?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
  }

  export type StudentQuizUpdateManyWithoutQuizNestedInput = {
    create?: XOR<StudentQuizCreateWithoutQuizInput, StudentQuizUncheckedCreateWithoutQuizInput> | StudentQuizCreateWithoutQuizInput[] | StudentQuizUncheckedCreateWithoutQuizInput[]
    connectOrCreate?: StudentQuizCreateOrConnectWithoutQuizInput | StudentQuizCreateOrConnectWithoutQuizInput[]
    upsert?: StudentQuizUpsertWithWhereUniqueWithoutQuizInput | StudentQuizUpsertWithWhereUniqueWithoutQuizInput[]
    createMany?: StudentQuizCreateManyQuizInputEnvelope
    set?: StudentQuizWhereUniqueInput | StudentQuizWhereUniqueInput[]
    disconnect?: StudentQuizWhereUniqueInput | StudentQuizWhereUniqueInput[]
    delete?: StudentQuizWhereUniqueInput | StudentQuizWhereUniqueInput[]
    connect?: StudentQuizWhereUniqueInput | StudentQuizWhereUniqueInput[]
    update?: StudentQuizUpdateWithWhereUniqueWithoutQuizInput | StudentQuizUpdateWithWhereUniqueWithoutQuizInput[]
    updateMany?: StudentQuizUpdateManyWithWhereWithoutQuizInput | StudentQuizUpdateManyWithWhereWithoutQuizInput[]
    deleteMany?: StudentQuizScalarWhereInput | StudentQuizScalarWhereInput[]
  }

  export type QuestionUncheckedUpdateManyWithoutQuizNestedInput = {
    create?: XOR<QuestionCreateWithoutQuizInput, QuestionUncheckedCreateWithoutQuizInput> | QuestionCreateWithoutQuizInput[] | QuestionUncheckedCreateWithoutQuizInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutQuizInput | QuestionCreateOrConnectWithoutQuizInput[]
    upsert?: QuestionUpsertWithWhereUniqueWithoutQuizInput | QuestionUpsertWithWhereUniqueWithoutQuizInput[]
    createMany?: QuestionCreateManyQuizInputEnvelope
    set?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    disconnect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    delete?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    update?: QuestionUpdateWithWhereUniqueWithoutQuizInput | QuestionUpdateWithWhereUniqueWithoutQuizInput[]
    updateMany?: QuestionUpdateManyWithWhereWithoutQuizInput | QuestionUpdateManyWithWhereWithoutQuizInput[]
    deleteMany?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
  }

  export type StudentQuizUncheckedUpdateManyWithoutQuizNestedInput = {
    create?: XOR<StudentQuizCreateWithoutQuizInput, StudentQuizUncheckedCreateWithoutQuizInput> | StudentQuizCreateWithoutQuizInput[] | StudentQuizUncheckedCreateWithoutQuizInput[]
    connectOrCreate?: StudentQuizCreateOrConnectWithoutQuizInput | StudentQuizCreateOrConnectWithoutQuizInput[]
    upsert?: StudentQuizUpsertWithWhereUniqueWithoutQuizInput | StudentQuizUpsertWithWhereUniqueWithoutQuizInput[]
    createMany?: StudentQuizCreateManyQuizInputEnvelope
    set?: StudentQuizWhereUniqueInput | StudentQuizWhereUniqueInput[]
    disconnect?: StudentQuizWhereUniqueInput | StudentQuizWhereUniqueInput[]
    delete?: StudentQuizWhereUniqueInput | StudentQuizWhereUniqueInput[]
    connect?: StudentQuizWhereUniqueInput | StudentQuizWhereUniqueInput[]
    update?: StudentQuizUpdateWithWhereUniqueWithoutQuizInput | StudentQuizUpdateWithWhereUniqueWithoutQuizInput[]
    updateMany?: StudentQuizUpdateManyWithWhereWithoutQuizInput | StudentQuizUpdateManyWithWhereWithoutQuizInput[]
    deleteMany?: StudentQuizScalarWhereInput | StudentQuizScalarWhereInput[]
  }

  export type QuizCreateNestedOneWithoutQuestionsInput = {
    create?: XOR<QuizCreateWithoutQuestionsInput, QuizUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: QuizCreateOrConnectWithoutQuestionsInput
    connect?: QuizWhereUniqueInput
  }

  export type QuestionOptionCreateNestedManyWithoutQuestionInput = {
    create?: XOR<QuestionOptionCreateWithoutQuestionInput, QuestionOptionUncheckedCreateWithoutQuestionInput> | QuestionOptionCreateWithoutQuestionInput[] | QuestionOptionUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: QuestionOptionCreateOrConnectWithoutQuestionInput | QuestionOptionCreateOrConnectWithoutQuestionInput[]
    createMany?: QuestionOptionCreateManyQuestionInputEnvelope
    connect?: QuestionOptionWhereUniqueInput | QuestionOptionWhereUniqueInput[]
  }

  export type QuestionAnswerCreateNestedManyWithoutQuestionInput = {
    create?: XOR<QuestionAnswerCreateWithoutQuestionInput, QuestionAnswerUncheckedCreateWithoutQuestionInput> | QuestionAnswerCreateWithoutQuestionInput[] | QuestionAnswerUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: QuestionAnswerCreateOrConnectWithoutQuestionInput | QuestionAnswerCreateOrConnectWithoutQuestionInput[]
    createMany?: QuestionAnswerCreateManyQuestionInputEnvelope
    connect?: QuestionAnswerWhereUniqueInput | QuestionAnswerWhereUniqueInput[]
  }

  export type StudentQuizAnswerCreateNestedManyWithoutQuestionInput = {
    create?: XOR<StudentQuizAnswerCreateWithoutQuestionInput, StudentQuizAnswerUncheckedCreateWithoutQuestionInput> | StudentQuizAnswerCreateWithoutQuestionInput[] | StudentQuizAnswerUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: StudentQuizAnswerCreateOrConnectWithoutQuestionInput | StudentQuizAnswerCreateOrConnectWithoutQuestionInput[]
    createMany?: StudentQuizAnswerCreateManyQuestionInputEnvelope
    connect?: StudentQuizAnswerWhereUniqueInput | StudentQuizAnswerWhereUniqueInput[]
  }

  export type QuestionOptionUncheckedCreateNestedManyWithoutQuestionInput = {
    create?: XOR<QuestionOptionCreateWithoutQuestionInput, QuestionOptionUncheckedCreateWithoutQuestionInput> | QuestionOptionCreateWithoutQuestionInput[] | QuestionOptionUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: QuestionOptionCreateOrConnectWithoutQuestionInput | QuestionOptionCreateOrConnectWithoutQuestionInput[]
    createMany?: QuestionOptionCreateManyQuestionInputEnvelope
    connect?: QuestionOptionWhereUniqueInput | QuestionOptionWhereUniqueInput[]
  }

  export type QuestionAnswerUncheckedCreateNestedManyWithoutQuestionInput = {
    create?: XOR<QuestionAnswerCreateWithoutQuestionInput, QuestionAnswerUncheckedCreateWithoutQuestionInput> | QuestionAnswerCreateWithoutQuestionInput[] | QuestionAnswerUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: QuestionAnswerCreateOrConnectWithoutQuestionInput | QuestionAnswerCreateOrConnectWithoutQuestionInput[]
    createMany?: QuestionAnswerCreateManyQuestionInputEnvelope
    connect?: QuestionAnswerWhereUniqueInput | QuestionAnswerWhereUniqueInput[]
  }

  export type StudentQuizAnswerUncheckedCreateNestedManyWithoutQuestionInput = {
    create?: XOR<StudentQuizAnswerCreateWithoutQuestionInput, StudentQuizAnswerUncheckedCreateWithoutQuestionInput> | StudentQuizAnswerCreateWithoutQuestionInput[] | StudentQuizAnswerUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: StudentQuizAnswerCreateOrConnectWithoutQuestionInput | StudentQuizAnswerCreateOrConnectWithoutQuestionInput[]
    createMany?: StudentQuizAnswerCreateManyQuestionInputEnvelope
    connect?: StudentQuizAnswerWhereUniqueInput | StudentQuizAnswerWhereUniqueInput[]
  }

  export type QuizUpdateOneRequiredWithoutQuestionsNestedInput = {
    create?: XOR<QuizCreateWithoutQuestionsInput, QuizUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: QuizCreateOrConnectWithoutQuestionsInput
    upsert?: QuizUpsertWithoutQuestionsInput
    connect?: QuizWhereUniqueInput
    update?: XOR<XOR<QuizUpdateToOneWithWhereWithoutQuestionsInput, QuizUpdateWithoutQuestionsInput>, QuizUncheckedUpdateWithoutQuestionsInput>
  }

  export type QuestionOptionUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<QuestionOptionCreateWithoutQuestionInput, QuestionOptionUncheckedCreateWithoutQuestionInput> | QuestionOptionCreateWithoutQuestionInput[] | QuestionOptionUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: QuestionOptionCreateOrConnectWithoutQuestionInput | QuestionOptionCreateOrConnectWithoutQuestionInput[]
    upsert?: QuestionOptionUpsertWithWhereUniqueWithoutQuestionInput | QuestionOptionUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: QuestionOptionCreateManyQuestionInputEnvelope
    set?: QuestionOptionWhereUniqueInput | QuestionOptionWhereUniqueInput[]
    disconnect?: QuestionOptionWhereUniqueInput | QuestionOptionWhereUniqueInput[]
    delete?: QuestionOptionWhereUniqueInput | QuestionOptionWhereUniqueInput[]
    connect?: QuestionOptionWhereUniqueInput | QuestionOptionWhereUniqueInput[]
    update?: QuestionOptionUpdateWithWhereUniqueWithoutQuestionInput | QuestionOptionUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: QuestionOptionUpdateManyWithWhereWithoutQuestionInput | QuestionOptionUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: QuestionOptionScalarWhereInput | QuestionOptionScalarWhereInput[]
  }

  export type QuestionAnswerUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<QuestionAnswerCreateWithoutQuestionInput, QuestionAnswerUncheckedCreateWithoutQuestionInput> | QuestionAnswerCreateWithoutQuestionInput[] | QuestionAnswerUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: QuestionAnswerCreateOrConnectWithoutQuestionInput | QuestionAnswerCreateOrConnectWithoutQuestionInput[]
    upsert?: QuestionAnswerUpsertWithWhereUniqueWithoutQuestionInput | QuestionAnswerUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: QuestionAnswerCreateManyQuestionInputEnvelope
    set?: QuestionAnswerWhereUniqueInput | QuestionAnswerWhereUniqueInput[]
    disconnect?: QuestionAnswerWhereUniqueInput | QuestionAnswerWhereUniqueInput[]
    delete?: QuestionAnswerWhereUniqueInput | QuestionAnswerWhereUniqueInput[]
    connect?: QuestionAnswerWhereUniqueInput | QuestionAnswerWhereUniqueInput[]
    update?: QuestionAnswerUpdateWithWhereUniqueWithoutQuestionInput | QuestionAnswerUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: QuestionAnswerUpdateManyWithWhereWithoutQuestionInput | QuestionAnswerUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: QuestionAnswerScalarWhereInput | QuestionAnswerScalarWhereInput[]
  }

  export type StudentQuizAnswerUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<StudentQuizAnswerCreateWithoutQuestionInput, StudentQuizAnswerUncheckedCreateWithoutQuestionInput> | StudentQuizAnswerCreateWithoutQuestionInput[] | StudentQuizAnswerUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: StudentQuizAnswerCreateOrConnectWithoutQuestionInput | StudentQuizAnswerCreateOrConnectWithoutQuestionInput[]
    upsert?: StudentQuizAnswerUpsertWithWhereUniqueWithoutQuestionInput | StudentQuizAnswerUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: StudentQuizAnswerCreateManyQuestionInputEnvelope
    set?: StudentQuizAnswerWhereUniqueInput | StudentQuizAnswerWhereUniqueInput[]
    disconnect?: StudentQuizAnswerWhereUniqueInput | StudentQuizAnswerWhereUniqueInput[]
    delete?: StudentQuizAnswerWhereUniqueInput | StudentQuizAnswerWhereUniqueInput[]
    connect?: StudentQuizAnswerWhereUniqueInput | StudentQuizAnswerWhereUniqueInput[]
    update?: StudentQuizAnswerUpdateWithWhereUniqueWithoutQuestionInput | StudentQuizAnswerUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: StudentQuizAnswerUpdateManyWithWhereWithoutQuestionInput | StudentQuizAnswerUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: StudentQuizAnswerScalarWhereInput | StudentQuizAnswerScalarWhereInput[]
  }

  export type QuestionOptionUncheckedUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<QuestionOptionCreateWithoutQuestionInput, QuestionOptionUncheckedCreateWithoutQuestionInput> | QuestionOptionCreateWithoutQuestionInput[] | QuestionOptionUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: QuestionOptionCreateOrConnectWithoutQuestionInput | QuestionOptionCreateOrConnectWithoutQuestionInput[]
    upsert?: QuestionOptionUpsertWithWhereUniqueWithoutQuestionInput | QuestionOptionUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: QuestionOptionCreateManyQuestionInputEnvelope
    set?: QuestionOptionWhereUniqueInput | QuestionOptionWhereUniqueInput[]
    disconnect?: QuestionOptionWhereUniqueInput | QuestionOptionWhereUniqueInput[]
    delete?: QuestionOptionWhereUniqueInput | QuestionOptionWhereUniqueInput[]
    connect?: QuestionOptionWhereUniqueInput | QuestionOptionWhereUniqueInput[]
    update?: QuestionOptionUpdateWithWhereUniqueWithoutQuestionInput | QuestionOptionUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: QuestionOptionUpdateManyWithWhereWithoutQuestionInput | QuestionOptionUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: QuestionOptionScalarWhereInput | QuestionOptionScalarWhereInput[]
  }

  export type QuestionAnswerUncheckedUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<QuestionAnswerCreateWithoutQuestionInput, QuestionAnswerUncheckedCreateWithoutQuestionInput> | QuestionAnswerCreateWithoutQuestionInput[] | QuestionAnswerUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: QuestionAnswerCreateOrConnectWithoutQuestionInput | QuestionAnswerCreateOrConnectWithoutQuestionInput[]
    upsert?: QuestionAnswerUpsertWithWhereUniqueWithoutQuestionInput | QuestionAnswerUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: QuestionAnswerCreateManyQuestionInputEnvelope
    set?: QuestionAnswerWhereUniqueInput | QuestionAnswerWhereUniqueInput[]
    disconnect?: QuestionAnswerWhereUniqueInput | QuestionAnswerWhereUniqueInput[]
    delete?: QuestionAnswerWhereUniqueInput | QuestionAnswerWhereUniqueInput[]
    connect?: QuestionAnswerWhereUniqueInput | QuestionAnswerWhereUniqueInput[]
    update?: QuestionAnswerUpdateWithWhereUniqueWithoutQuestionInput | QuestionAnswerUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: QuestionAnswerUpdateManyWithWhereWithoutQuestionInput | QuestionAnswerUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: QuestionAnswerScalarWhereInput | QuestionAnswerScalarWhereInput[]
  }

  export type StudentQuizAnswerUncheckedUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<StudentQuizAnswerCreateWithoutQuestionInput, StudentQuizAnswerUncheckedCreateWithoutQuestionInput> | StudentQuizAnswerCreateWithoutQuestionInput[] | StudentQuizAnswerUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: StudentQuizAnswerCreateOrConnectWithoutQuestionInput | StudentQuizAnswerCreateOrConnectWithoutQuestionInput[]
    upsert?: StudentQuizAnswerUpsertWithWhereUniqueWithoutQuestionInput | StudentQuizAnswerUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: StudentQuizAnswerCreateManyQuestionInputEnvelope
    set?: StudentQuizAnswerWhereUniqueInput | StudentQuizAnswerWhereUniqueInput[]
    disconnect?: StudentQuizAnswerWhereUniqueInput | StudentQuizAnswerWhereUniqueInput[]
    delete?: StudentQuizAnswerWhereUniqueInput | StudentQuizAnswerWhereUniqueInput[]
    connect?: StudentQuizAnswerWhereUniqueInput | StudentQuizAnswerWhereUniqueInput[]
    update?: StudentQuizAnswerUpdateWithWhereUniqueWithoutQuestionInput | StudentQuizAnswerUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: StudentQuizAnswerUpdateManyWithWhereWithoutQuestionInput | StudentQuizAnswerUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: StudentQuizAnswerScalarWhereInput | StudentQuizAnswerScalarWhereInput[]
  }

  export type QuestionCreateNestedOneWithoutQuestionOptionsInput = {
    create?: XOR<QuestionCreateWithoutQuestionOptionsInput, QuestionUncheckedCreateWithoutQuestionOptionsInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutQuestionOptionsInput
    connect?: QuestionWhereUniqueInput
  }

  export type QuestionAnswerCreateNestedManyWithoutAnswerInput = {
    create?: XOR<QuestionAnswerCreateWithoutAnswerInput, QuestionAnswerUncheckedCreateWithoutAnswerInput> | QuestionAnswerCreateWithoutAnswerInput[] | QuestionAnswerUncheckedCreateWithoutAnswerInput[]
    connectOrCreate?: QuestionAnswerCreateOrConnectWithoutAnswerInput | QuestionAnswerCreateOrConnectWithoutAnswerInput[]
    createMany?: QuestionAnswerCreateManyAnswerInputEnvelope
    connect?: QuestionAnswerWhereUniqueInput | QuestionAnswerWhereUniqueInput[]
  }

  export type StudentQuizAnswerCreateNestedManyWithoutSelectedOptionInput = {
    create?: XOR<StudentQuizAnswerCreateWithoutSelectedOptionInput, StudentQuizAnswerUncheckedCreateWithoutSelectedOptionInput> | StudentQuizAnswerCreateWithoutSelectedOptionInput[] | StudentQuizAnswerUncheckedCreateWithoutSelectedOptionInput[]
    connectOrCreate?: StudentQuizAnswerCreateOrConnectWithoutSelectedOptionInput | StudentQuizAnswerCreateOrConnectWithoutSelectedOptionInput[]
    createMany?: StudentQuizAnswerCreateManySelectedOptionInputEnvelope
    connect?: StudentQuizAnswerWhereUniqueInput | StudentQuizAnswerWhereUniqueInput[]
  }

  export type QuestionAnswerUncheckedCreateNestedManyWithoutAnswerInput = {
    create?: XOR<QuestionAnswerCreateWithoutAnswerInput, QuestionAnswerUncheckedCreateWithoutAnswerInput> | QuestionAnswerCreateWithoutAnswerInput[] | QuestionAnswerUncheckedCreateWithoutAnswerInput[]
    connectOrCreate?: QuestionAnswerCreateOrConnectWithoutAnswerInput | QuestionAnswerCreateOrConnectWithoutAnswerInput[]
    createMany?: QuestionAnswerCreateManyAnswerInputEnvelope
    connect?: QuestionAnswerWhereUniqueInput | QuestionAnswerWhereUniqueInput[]
  }

  export type StudentQuizAnswerUncheckedCreateNestedManyWithoutSelectedOptionInput = {
    create?: XOR<StudentQuizAnswerCreateWithoutSelectedOptionInput, StudentQuizAnswerUncheckedCreateWithoutSelectedOptionInput> | StudentQuizAnswerCreateWithoutSelectedOptionInput[] | StudentQuizAnswerUncheckedCreateWithoutSelectedOptionInput[]
    connectOrCreate?: StudentQuizAnswerCreateOrConnectWithoutSelectedOptionInput | StudentQuizAnswerCreateOrConnectWithoutSelectedOptionInput[]
    createMany?: StudentQuizAnswerCreateManySelectedOptionInputEnvelope
    connect?: StudentQuizAnswerWhereUniqueInput | StudentQuizAnswerWhereUniqueInput[]
  }

  export type QuestionUpdateOneRequiredWithoutQuestionOptionsNestedInput = {
    create?: XOR<QuestionCreateWithoutQuestionOptionsInput, QuestionUncheckedCreateWithoutQuestionOptionsInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutQuestionOptionsInput
    upsert?: QuestionUpsertWithoutQuestionOptionsInput
    connect?: QuestionWhereUniqueInput
    update?: XOR<XOR<QuestionUpdateToOneWithWhereWithoutQuestionOptionsInput, QuestionUpdateWithoutQuestionOptionsInput>, QuestionUncheckedUpdateWithoutQuestionOptionsInput>
  }

  export type QuestionAnswerUpdateManyWithoutAnswerNestedInput = {
    create?: XOR<QuestionAnswerCreateWithoutAnswerInput, QuestionAnswerUncheckedCreateWithoutAnswerInput> | QuestionAnswerCreateWithoutAnswerInput[] | QuestionAnswerUncheckedCreateWithoutAnswerInput[]
    connectOrCreate?: QuestionAnswerCreateOrConnectWithoutAnswerInput | QuestionAnswerCreateOrConnectWithoutAnswerInput[]
    upsert?: QuestionAnswerUpsertWithWhereUniqueWithoutAnswerInput | QuestionAnswerUpsertWithWhereUniqueWithoutAnswerInput[]
    createMany?: QuestionAnswerCreateManyAnswerInputEnvelope
    set?: QuestionAnswerWhereUniqueInput | QuestionAnswerWhereUniqueInput[]
    disconnect?: QuestionAnswerWhereUniqueInput | QuestionAnswerWhereUniqueInput[]
    delete?: QuestionAnswerWhereUniqueInput | QuestionAnswerWhereUniqueInput[]
    connect?: QuestionAnswerWhereUniqueInput | QuestionAnswerWhereUniqueInput[]
    update?: QuestionAnswerUpdateWithWhereUniqueWithoutAnswerInput | QuestionAnswerUpdateWithWhereUniqueWithoutAnswerInput[]
    updateMany?: QuestionAnswerUpdateManyWithWhereWithoutAnswerInput | QuestionAnswerUpdateManyWithWhereWithoutAnswerInput[]
    deleteMany?: QuestionAnswerScalarWhereInput | QuestionAnswerScalarWhereInput[]
  }

  export type StudentQuizAnswerUpdateManyWithoutSelectedOptionNestedInput = {
    create?: XOR<StudentQuizAnswerCreateWithoutSelectedOptionInput, StudentQuizAnswerUncheckedCreateWithoutSelectedOptionInput> | StudentQuizAnswerCreateWithoutSelectedOptionInput[] | StudentQuizAnswerUncheckedCreateWithoutSelectedOptionInput[]
    connectOrCreate?: StudentQuizAnswerCreateOrConnectWithoutSelectedOptionInput | StudentQuizAnswerCreateOrConnectWithoutSelectedOptionInput[]
    upsert?: StudentQuizAnswerUpsertWithWhereUniqueWithoutSelectedOptionInput | StudentQuizAnswerUpsertWithWhereUniqueWithoutSelectedOptionInput[]
    createMany?: StudentQuizAnswerCreateManySelectedOptionInputEnvelope
    set?: StudentQuizAnswerWhereUniqueInput | StudentQuizAnswerWhereUniqueInput[]
    disconnect?: StudentQuizAnswerWhereUniqueInput | StudentQuizAnswerWhereUniqueInput[]
    delete?: StudentQuizAnswerWhereUniqueInput | StudentQuizAnswerWhereUniqueInput[]
    connect?: StudentQuizAnswerWhereUniqueInput | StudentQuizAnswerWhereUniqueInput[]
    update?: StudentQuizAnswerUpdateWithWhereUniqueWithoutSelectedOptionInput | StudentQuizAnswerUpdateWithWhereUniqueWithoutSelectedOptionInput[]
    updateMany?: StudentQuizAnswerUpdateManyWithWhereWithoutSelectedOptionInput | StudentQuizAnswerUpdateManyWithWhereWithoutSelectedOptionInput[]
    deleteMany?: StudentQuizAnswerScalarWhereInput | StudentQuizAnswerScalarWhereInput[]
  }

  export type QuestionAnswerUncheckedUpdateManyWithoutAnswerNestedInput = {
    create?: XOR<QuestionAnswerCreateWithoutAnswerInput, QuestionAnswerUncheckedCreateWithoutAnswerInput> | QuestionAnswerCreateWithoutAnswerInput[] | QuestionAnswerUncheckedCreateWithoutAnswerInput[]
    connectOrCreate?: QuestionAnswerCreateOrConnectWithoutAnswerInput | QuestionAnswerCreateOrConnectWithoutAnswerInput[]
    upsert?: QuestionAnswerUpsertWithWhereUniqueWithoutAnswerInput | QuestionAnswerUpsertWithWhereUniqueWithoutAnswerInput[]
    createMany?: QuestionAnswerCreateManyAnswerInputEnvelope
    set?: QuestionAnswerWhereUniqueInput | QuestionAnswerWhereUniqueInput[]
    disconnect?: QuestionAnswerWhereUniqueInput | QuestionAnswerWhereUniqueInput[]
    delete?: QuestionAnswerWhereUniqueInput | QuestionAnswerWhereUniqueInput[]
    connect?: QuestionAnswerWhereUniqueInput | QuestionAnswerWhereUniqueInput[]
    update?: QuestionAnswerUpdateWithWhereUniqueWithoutAnswerInput | QuestionAnswerUpdateWithWhereUniqueWithoutAnswerInput[]
    updateMany?: QuestionAnswerUpdateManyWithWhereWithoutAnswerInput | QuestionAnswerUpdateManyWithWhereWithoutAnswerInput[]
    deleteMany?: QuestionAnswerScalarWhereInput | QuestionAnswerScalarWhereInput[]
  }

  export type StudentQuizAnswerUncheckedUpdateManyWithoutSelectedOptionNestedInput = {
    create?: XOR<StudentQuizAnswerCreateWithoutSelectedOptionInput, StudentQuizAnswerUncheckedCreateWithoutSelectedOptionInput> | StudentQuizAnswerCreateWithoutSelectedOptionInput[] | StudentQuizAnswerUncheckedCreateWithoutSelectedOptionInput[]
    connectOrCreate?: StudentQuizAnswerCreateOrConnectWithoutSelectedOptionInput | StudentQuizAnswerCreateOrConnectWithoutSelectedOptionInput[]
    upsert?: StudentQuizAnswerUpsertWithWhereUniqueWithoutSelectedOptionInput | StudentQuizAnswerUpsertWithWhereUniqueWithoutSelectedOptionInput[]
    createMany?: StudentQuizAnswerCreateManySelectedOptionInputEnvelope
    set?: StudentQuizAnswerWhereUniqueInput | StudentQuizAnswerWhereUniqueInput[]
    disconnect?: StudentQuizAnswerWhereUniqueInput | StudentQuizAnswerWhereUniqueInput[]
    delete?: StudentQuizAnswerWhereUniqueInput | StudentQuizAnswerWhereUniqueInput[]
    connect?: StudentQuizAnswerWhereUniqueInput | StudentQuizAnswerWhereUniqueInput[]
    update?: StudentQuizAnswerUpdateWithWhereUniqueWithoutSelectedOptionInput | StudentQuizAnswerUpdateWithWhereUniqueWithoutSelectedOptionInput[]
    updateMany?: StudentQuizAnswerUpdateManyWithWhereWithoutSelectedOptionInput | StudentQuizAnswerUpdateManyWithWhereWithoutSelectedOptionInput[]
    deleteMany?: StudentQuizAnswerScalarWhereInput | StudentQuizAnswerScalarWhereInput[]
  }

  export type QuestionCreateNestedOneWithoutQuestionAnswerInput = {
    create?: XOR<QuestionCreateWithoutQuestionAnswerInput, QuestionUncheckedCreateWithoutQuestionAnswerInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutQuestionAnswerInput
    connect?: QuestionWhereUniqueInput
  }

  export type QuestionOptionCreateNestedOneWithoutQuestionAnswerInput = {
    create?: XOR<QuestionOptionCreateWithoutQuestionAnswerInput, QuestionOptionUncheckedCreateWithoutQuestionAnswerInput>
    connectOrCreate?: QuestionOptionCreateOrConnectWithoutQuestionAnswerInput
    connect?: QuestionOptionWhereUniqueInput
  }

  export type QuestionUpdateOneRequiredWithoutQuestionAnswerNestedInput = {
    create?: XOR<QuestionCreateWithoutQuestionAnswerInput, QuestionUncheckedCreateWithoutQuestionAnswerInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutQuestionAnswerInput
    upsert?: QuestionUpsertWithoutQuestionAnswerInput
    connect?: QuestionWhereUniqueInput
    update?: XOR<XOR<QuestionUpdateToOneWithWhereWithoutQuestionAnswerInput, QuestionUpdateWithoutQuestionAnswerInput>, QuestionUncheckedUpdateWithoutQuestionAnswerInput>
  }

  export type QuestionOptionUpdateOneRequiredWithoutQuestionAnswerNestedInput = {
    create?: XOR<QuestionOptionCreateWithoutQuestionAnswerInput, QuestionOptionUncheckedCreateWithoutQuestionAnswerInput>
    connectOrCreate?: QuestionOptionCreateOrConnectWithoutQuestionAnswerInput
    upsert?: QuestionOptionUpsertWithoutQuestionAnswerInput
    connect?: QuestionOptionWhereUniqueInput
    update?: XOR<XOR<QuestionOptionUpdateToOneWithWhereWithoutQuestionAnswerInput, QuestionOptionUpdateWithoutQuestionAnswerInput>, QuestionOptionUncheckedUpdateWithoutQuestionAnswerInput>
  }

  export type StudentCreateNestedOneWithoutStudentQuizzesInput = {
    create?: XOR<StudentCreateWithoutStudentQuizzesInput, StudentUncheckedCreateWithoutStudentQuizzesInput>
    connectOrCreate?: StudentCreateOrConnectWithoutStudentQuizzesInput
    connect?: StudentWhereUniqueInput
  }

  export type QuizCreateNestedOneWithoutStudentQuizInput = {
    create?: XOR<QuizCreateWithoutStudentQuizInput, QuizUncheckedCreateWithoutStudentQuizInput>
    connectOrCreate?: QuizCreateOrConnectWithoutStudentQuizInput
    connect?: QuizWhereUniqueInput
  }

  export type StudentQuizAnswerCreateNestedManyWithoutStudentQuizInput = {
    create?: XOR<StudentQuizAnswerCreateWithoutStudentQuizInput, StudentQuizAnswerUncheckedCreateWithoutStudentQuizInput> | StudentQuizAnswerCreateWithoutStudentQuizInput[] | StudentQuizAnswerUncheckedCreateWithoutStudentQuizInput[]
    connectOrCreate?: StudentQuizAnswerCreateOrConnectWithoutStudentQuizInput | StudentQuizAnswerCreateOrConnectWithoutStudentQuizInput[]
    createMany?: StudentQuizAnswerCreateManyStudentQuizInputEnvelope
    connect?: StudentQuizAnswerWhereUniqueInput | StudentQuizAnswerWhereUniqueInput[]
  }

  export type StudentQuizAnswerUncheckedCreateNestedManyWithoutStudentQuizInput = {
    create?: XOR<StudentQuizAnswerCreateWithoutStudentQuizInput, StudentQuizAnswerUncheckedCreateWithoutStudentQuizInput> | StudentQuizAnswerCreateWithoutStudentQuizInput[] | StudentQuizAnswerUncheckedCreateWithoutStudentQuizInput[]
    connectOrCreate?: StudentQuizAnswerCreateOrConnectWithoutStudentQuizInput | StudentQuizAnswerCreateOrConnectWithoutStudentQuizInput[]
    createMany?: StudentQuizAnswerCreateManyStudentQuizInputEnvelope
    connect?: StudentQuizAnswerWhereUniqueInput | StudentQuizAnswerWhereUniqueInput[]
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StudentUpdateOneRequiredWithoutStudentQuizzesNestedInput = {
    create?: XOR<StudentCreateWithoutStudentQuizzesInput, StudentUncheckedCreateWithoutStudentQuizzesInput>
    connectOrCreate?: StudentCreateOrConnectWithoutStudentQuizzesInput
    upsert?: StudentUpsertWithoutStudentQuizzesInput
    connect?: StudentWhereUniqueInput
    update?: XOR<XOR<StudentUpdateToOneWithWhereWithoutStudentQuizzesInput, StudentUpdateWithoutStudentQuizzesInput>, StudentUncheckedUpdateWithoutStudentQuizzesInput>
  }

  export type QuizUpdateOneRequiredWithoutStudentQuizNestedInput = {
    create?: XOR<QuizCreateWithoutStudentQuizInput, QuizUncheckedCreateWithoutStudentQuizInput>
    connectOrCreate?: QuizCreateOrConnectWithoutStudentQuizInput
    upsert?: QuizUpsertWithoutStudentQuizInput
    connect?: QuizWhereUniqueInput
    update?: XOR<XOR<QuizUpdateToOneWithWhereWithoutStudentQuizInput, QuizUpdateWithoutStudentQuizInput>, QuizUncheckedUpdateWithoutStudentQuizInput>
  }

  export type StudentQuizAnswerUpdateManyWithoutStudentQuizNestedInput = {
    create?: XOR<StudentQuizAnswerCreateWithoutStudentQuizInput, StudentQuizAnswerUncheckedCreateWithoutStudentQuizInput> | StudentQuizAnswerCreateWithoutStudentQuizInput[] | StudentQuizAnswerUncheckedCreateWithoutStudentQuizInput[]
    connectOrCreate?: StudentQuizAnswerCreateOrConnectWithoutStudentQuizInput | StudentQuizAnswerCreateOrConnectWithoutStudentQuizInput[]
    upsert?: StudentQuizAnswerUpsertWithWhereUniqueWithoutStudentQuizInput | StudentQuizAnswerUpsertWithWhereUniqueWithoutStudentQuizInput[]
    createMany?: StudentQuizAnswerCreateManyStudentQuizInputEnvelope
    set?: StudentQuizAnswerWhereUniqueInput | StudentQuizAnswerWhereUniqueInput[]
    disconnect?: StudentQuizAnswerWhereUniqueInput | StudentQuizAnswerWhereUniqueInput[]
    delete?: StudentQuizAnswerWhereUniqueInput | StudentQuizAnswerWhereUniqueInput[]
    connect?: StudentQuizAnswerWhereUniqueInput | StudentQuizAnswerWhereUniqueInput[]
    update?: StudentQuizAnswerUpdateWithWhereUniqueWithoutStudentQuizInput | StudentQuizAnswerUpdateWithWhereUniqueWithoutStudentQuizInput[]
    updateMany?: StudentQuizAnswerUpdateManyWithWhereWithoutStudentQuizInput | StudentQuizAnswerUpdateManyWithWhereWithoutStudentQuizInput[]
    deleteMany?: StudentQuizAnswerScalarWhereInput | StudentQuizAnswerScalarWhereInput[]
  }

  export type StudentQuizAnswerUncheckedUpdateManyWithoutStudentQuizNestedInput = {
    create?: XOR<StudentQuizAnswerCreateWithoutStudentQuizInput, StudentQuizAnswerUncheckedCreateWithoutStudentQuizInput> | StudentQuizAnswerCreateWithoutStudentQuizInput[] | StudentQuizAnswerUncheckedCreateWithoutStudentQuizInput[]
    connectOrCreate?: StudentQuizAnswerCreateOrConnectWithoutStudentQuizInput | StudentQuizAnswerCreateOrConnectWithoutStudentQuizInput[]
    upsert?: StudentQuizAnswerUpsertWithWhereUniqueWithoutStudentQuizInput | StudentQuizAnswerUpsertWithWhereUniqueWithoutStudentQuizInput[]
    createMany?: StudentQuizAnswerCreateManyStudentQuizInputEnvelope
    set?: StudentQuizAnswerWhereUniqueInput | StudentQuizAnswerWhereUniqueInput[]
    disconnect?: StudentQuizAnswerWhereUniqueInput | StudentQuizAnswerWhereUniqueInput[]
    delete?: StudentQuizAnswerWhereUniqueInput | StudentQuizAnswerWhereUniqueInput[]
    connect?: StudentQuizAnswerWhereUniqueInput | StudentQuizAnswerWhereUniqueInput[]
    update?: StudentQuizAnswerUpdateWithWhereUniqueWithoutStudentQuizInput | StudentQuizAnswerUpdateWithWhereUniqueWithoutStudentQuizInput[]
    updateMany?: StudentQuizAnswerUpdateManyWithWhereWithoutStudentQuizInput | StudentQuizAnswerUpdateManyWithWhereWithoutStudentQuizInput[]
    deleteMany?: StudentQuizAnswerScalarWhereInput | StudentQuizAnswerScalarWhereInput[]
  }

  export type StudentQuizCreateNestedOneWithoutStudentQuizAnswersInput = {
    create?: XOR<StudentQuizCreateWithoutStudentQuizAnswersInput, StudentQuizUncheckedCreateWithoutStudentQuizAnswersInput>
    connectOrCreate?: StudentQuizCreateOrConnectWithoutStudentQuizAnswersInput
    connect?: StudentQuizWhereUniqueInput
  }

  export type QuestionCreateNestedOneWithoutStudentQuizAnswerInput = {
    create?: XOR<QuestionCreateWithoutStudentQuizAnswerInput, QuestionUncheckedCreateWithoutStudentQuizAnswerInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutStudentQuizAnswerInput
    connect?: QuestionWhereUniqueInput
  }

  export type QuestionOptionCreateNestedOneWithoutStudentQuizAnswersInput = {
    create?: XOR<QuestionOptionCreateWithoutStudentQuizAnswersInput, QuestionOptionUncheckedCreateWithoutStudentQuizAnswersInput>
    connectOrCreate?: QuestionOptionCreateOrConnectWithoutStudentQuizAnswersInput
    connect?: QuestionOptionWhereUniqueInput
  }

  export type StudentQuizUpdateOneRequiredWithoutStudentQuizAnswersNestedInput = {
    create?: XOR<StudentQuizCreateWithoutStudentQuizAnswersInput, StudentQuizUncheckedCreateWithoutStudentQuizAnswersInput>
    connectOrCreate?: StudentQuizCreateOrConnectWithoutStudentQuizAnswersInput
    upsert?: StudentQuizUpsertWithoutStudentQuizAnswersInput
    connect?: StudentQuizWhereUniqueInput
    update?: XOR<XOR<StudentQuizUpdateToOneWithWhereWithoutStudentQuizAnswersInput, StudentQuizUpdateWithoutStudentQuizAnswersInput>, StudentQuizUncheckedUpdateWithoutStudentQuizAnswersInput>
  }

  export type QuestionUpdateOneRequiredWithoutStudentQuizAnswerNestedInput = {
    create?: XOR<QuestionCreateWithoutStudentQuizAnswerInput, QuestionUncheckedCreateWithoutStudentQuizAnswerInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutStudentQuizAnswerInput
    upsert?: QuestionUpsertWithoutStudentQuizAnswerInput
    connect?: QuestionWhereUniqueInput
    update?: XOR<XOR<QuestionUpdateToOneWithWhereWithoutStudentQuizAnswerInput, QuestionUpdateWithoutStudentQuizAnswerInput>, QuestionUncheckedUpdateWithoutStudentQuizAnswerInput>
  }

  export type QuestionOptionUpdateOneRequiredWithoutStudentQuizAnswersNestedInput = {
    create?: XOR<QuestionOptionCreateWithoutStudentQuizAnswersInput, QuestionOptionUncheckedCreateWithoutStudentQuizAnswersInput>
    connectOrCreate?: QuestionOptionCreateOrConnectWithoutStudentQuizAnswersInput
    upsert?: QuestionOptionUpsertWithoutStudentQuizAnswersInput
    connect?: QuestionOptionWhereUniqueInput
    update?: XOR<XOR<QuestionOptionUpdateToOneWithWhereWithoutStudentQuizAnswersInput, QuestionOptionUpdateWithoutStudentQuizAnswersInput>, QuestionOptionUncheckedUpdateWithoutStudentQuizAnswersInput>
  }

  export type StudentCreateNestedOneWithoutProgressInput = {
    create?: XOR<StudentCreateWithoutProgressInput, StudentUncheckedCreateWithoutProgressInput>
    connectOrCreate?: StudentCreateOrConnectWithoutProgressInput
    connect?: StudentWhereUniqueInput
  }

  export type LessonCreateNestedOneWithoutStudentProgressInput = {
    create?: XOR<LessonCreateWithoutStudentProgressInput, LessonUncheckedCreateWithoutStudentProgressInput>
    connectOrCreate?: LessonCreateOrConnectWithoutStudentProgressInput
    connect?: LessonWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type StudentUpdateOneRequiredWithoutProgressNestedInput = {
    create?: XOR<StudentCreateWithoutProgressInput, StudentUncheckedCreateWithoutProgressInput>
    connectOrCreate?: StudentCreateOrConnectWithoutProgressInput
    upsert?: StudentUpsertWithoutProgressInput
    connect?: StudentWhereUniqueInput
    update?: XOR<XOR<StudentUpdateToOneWithWhereWithoutProgressInput, StudentUpdateWithoutProgressInput>, StudentUncheckedUpdateWithoutProgressInput>
  }

  export type LessonUpdateOneRequiredWithoutStudentProgressNestedInput = {
    create?: XOR<LessonCreateWithoutStudentProgressInput, LessonUncheckedCreateWithoutStudentProgressInput>
    connectOrCreate?: LessonCreateOrConnectWithoutStudentProgressInput
    upsert?: LessonUpsertWithoutStudentProgressInput
    connect?: LessonWhereUniqueInput
    update?: XOR<XOR<LessonUpdateToOneWithWhereWithoutStudentProgressInput, LessonUpdateWithoutStudentProgressInput>, LessonUncheckedUpdateWithoutStudentProgressInput>
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
    search?: string
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
    search?: string
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type CourseCreateWithoutTeacherInput = {
    id?: string
    title: string
    description: string
    createdAt?: Date | string
    lessons?: LessonCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateWithoutTeacherInput = {
    id?: string
    title: string
    description: string
    createdAt?: Date | string
    lessons?: LessonUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseCreateOrConnectWithoutTeacherInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutTeacherInput, CourseUncheckedCreateWithoutTeacherInput>
  }

  export type CourseCreateManyTeacherInputEnvelope = {
    data: CourseCreateManyTeacherInput | CourseCreateManyTeacherInput[]
    skipDuplicates?: boolean
  }

  export type CourseUpsertWithWhereUniqueWithoutTeacherInput = {
    where: CourseWhereUniqueInput
    update: XOR<CourseUpdateWithoutTeacherInput, CourseUncheckedUpdateWithoutTeacherInput>
    create: XOR<CourseCreateWithoutTeacherInput, CourseUncheckedCreateWithoutTeacherInput>
  }

  export type CourseUpdateWithWhereUniqueWithoutTeacherInput = {
    where: CourseWhereUniqueInput
    data: XOR<CourseUpdateWithoutTeacherInput, CourseUncheckedUpdateWithoutTeacherInput>
  }

  export type CourseUpdateManyWithWhereWithoutTeacherInput = {
    where: CourseScalarWhereInput
    data: XOR<CourseUpdateManyMutationInput, CourseUncheckedUpdateManyWithoutTeacherInput>
  }

  export type CourseScalarWhereInput = {
    AND?: CourseScalarWhereInput | CourseScalarWhereInput[]
    OR?: CourseScalarWhereInput[]
    NOT?: CourseScalarWhereInput | CourseScalarWhereInput[]
    id?: StringFilter<"Course"> | string
    title?: StringFilter<"Course"> | string
    description?: StringFilter<"Course"> | string
    teacherId?: StringFilter<"Course"> | string
    createdAt?: DateTimeFilter<"Course"> | Date | string
  }

  export type StudentProgressCreateWithoutStudentInput = {
    id?: string
    completed?: boolean
    completedAt?: Date | string | null
    lesson: LessonCreateNestedOneWithoutStudentProgressInput
  }

  export type StudentProgressUncheckedCreateWithoutStudentInput = {
    id?: string
    lessonId: string
    completed?: boolean
    completedAt?: Date | string | null
  }

  export type StudentProgressCreateOrConnectWithoutStudentInput = {
    where: StudentProgressWhereUniqueInput
    create: XOR<StudentProgressCreateWithoutStudentInput, StudentProgressUncheckedCreateWithoutStudentInput>
  }

  export type StudentProgressCreateManyStudentInputEnvelope = {
    data: StudentProgressCreateManyStudentInput | StudentProgressCreateManyStudentInput[]
    skipDuplicates?: boolean
  }

  export type StudentQuizCreateWithoutStudentInput = {
    id?: string
    score?: number | null
    passed?: boolean
    takenAt?: Date | string
    quiz: QuizCreateNestedOneWithoutStudentQuizInput
    studentQuizAnswers?: StudentQuizAnswerCreateNestedManyWithoutStudentQuizInput
  }

  export type StudentQuizUncheckedCreateWithoutStudentInput = {
    id?: string
    quizId: string
    score?: number | null
    passed?: boolean
    takenAt?: Date | string
    studentQuizAnswers?: StudentQuizAnswerUncheckedCreateNestedManyWithoutStudentQuizInput
  }

  export type StudentQuizCreateOrConnectWithoutStudentInput = {
    where: StudentQuizWhereUniqueInput
    create: XOR<StudentQuizCreateWithoutStudentInput, StudentQuizUncheckedCreateWithoutStudentInput>
  }

  export type StudentQuizCreateManyStudentInputEnvelope = {
    data: StudentQuizCreateManyStudentInput | StudentQuizCreateManyStudentInput[]
    skipDuplicates?: boolean
  }

  export type StudentProgressUpsertWithWhereUniqueWithoutStudentInput = {
    where: StudentProgressWhereUniqueInput
    update: XOR<StudentProgressUpdateWithoutStudentInput, StudentProgressUncheckedUpdateWithoutStudentInput>
    create: XOR<StudentProgressCreateWithoutStudentInput, StudentProgressUncheckedCreateWithoutStudentInput>
  }

  export type StudentProgressUpdateWithWhereUniqueWithoutStudentInput = {
    where: StudentProgressWhereUniqueInput
    data: XOR<StudentProgressUpdateWithoutStudentInput, StudentProgressUncheckedUpdateWithoutStudentInput>
  }

  export type StudentProgressUpdateManyWithWhereWithoutStudentInput = {
    where: StudentProgressScalarWhereInput
    data: XOR<StudentProgressUpdateManyMutationInput, StudentProgressUncheckedUpdateManyWithoutStudentInput>
  }

  export type StudentProgressScalarWhereInput = {
    AND?: StudentProgressScalarWhereInput | StudentProgressScalarWhereInput[]
    OR?: StudentProgressScalarWhereInput[]
    NOT?: StudentProgressScalarWhereInput | StudentProgressScalarWhereInput[]
    id?: StringFilter<"StudentProgress"> | string
    studentId?: StringFilter<"StudentProgress"> | string
    lessonId?: StringFilter<"StudentProgress"> | string
    completed?: BoolFilter<"StudentProgress"> | boolean
    completedAt?: DateTimeNullableFilter<"StudentProgress"> | Date | string | null
  }

  export type StudentQuizUpsertWithWhereUniqueWithoutStudentInput = {
    where: StudentQuizWhereUniqueInput
    update: XOR<StudentQuizUpdateWithoutStudentInput, StudentQuizUncheckedUpdateWithoutStudentInput>
    create: XOR<StudentQuizCreateWithoutStudentInput, StudentQuizUncheckedCreateWithoutStudentInput>
  }

  export type StudentQuizUpdateWithWhereUniqueWithoutStudentInput = {
    where: StudentQuizWhereUniqueInput
    data: XOR<StudentQuizUpdateWithoutStudentInput, StudentQuizUncheckedUpdateWithoutStudentInput>
  }

  export type StudentQuizUpdateManyWithWhereWithoutStudentInput = {
    where: StudentQuizScalarWhereInput
    data: XOR<StudentQuizUpdateManyMutationInput, StudentQuizUncheckedUpdateManyWithoutStudentInput>
  }

  export type StudentQuizScalarWhereInput = {
    AND?: StudentQuizScalarWhereInput | StudentQuizScalarWhereInput[]
    OR?: StudentQuizScalarWhereInput[]
    NOT?: StudentQuizScalarWhereInput | StudentQuizScalarWhereInput[]
    id?: StringFilter<"StudentQuiz"> | string
    studentId?: StringFilter<"StudentQuiz"> | string
    quizId?: StringFilter<"StudentQuiz"> | string
    score?: FloatNullableFilter<"StudentQuiz"> | number | null
    passed?: BoolFilter<"StudentQuiz"> | boolean
    takenAt?: DateTimeFilter<"StudentQuiz"> | Date | string
  }

  export type TeacherCreateWithoutCoursesInput = {
    id?: string
    name: string
    email: string
    passcode: string
    isActive?: boolean
    createdAt?: Date | string
  }

  export type TeacherUncheckedCreateWithoutCoursesInput = {
    id?: string
    name: string
    email: string
    passcode: string
    isActive?: boolean
    createdAt?: Date | string
  }

  export type TeacherCreateOrConnectWithoutCoursesInput = {
    where: TeacherWhereUniqueInput
    create: XOR<TeacherCreateWithoutCoursesInput, TeacherUncheckedCreateWithoutCoursesInput>
  }

  export type LessonCreateWithoutCourseInput = {
    id?: string
    title: string
    videoUrl: string
    order: number
    createdAt?: Date | string
    quiz?: QuizCreateNestedOneWithoutLessonInput
    StudentProgress?: StudentProgressCreateNestedManyWithoutLessonInput
  }

  export type LessonUncheckedCreateWithoutCourseInput = {
    id?: string
    title: string
    videoUrl: string
    order: number
    createdAt?: Date | string
    quiz?: QuizUncheckedCreateNestedOneWithoutLessonInput
    StudentProgress?: StudentProgressUncheckedCreateNestedManyWithoutLessonInput
  }

  export type LessonCreateOrConnectWithoutCourseInput = {
    where: LessonWhereUniqueInput
    create: XOR<LessonCreateWithoutCourseInput, LessonUncheckedCreateWithoutCourseInput>
  }

  export type LessonCreateManyCourseInputEnvelope = {
    data: LessonCreateManyCourseInput | LessonCreateManyCourseInput[]
    skipDuplicates?: boolean
  }

  export type TeacherUpsertWithoutCoursesInput = {
    update: XOR<TeacherUpdateWithoutCoursesInput, TeacherUncheckedUpdateWithoutCoursesInput>
    create: XOR<TeacherCreateWithoutCoursesInput, TeacherUncheckedCreateWithoutCoursesInput>
    where?: TeacherWhereInput
  }

  export type TeacherUpdateToOneWithWhereWithoutCoursesInput = {
    where?: TeacherWhereInput
    data: XOR<TeacherUpdateWithoutCoursesInput, TeacherUncheckedUpdateWithoutCoursesInput>
  }

  export type TeacherUpdateWithoutCoursesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passcode?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeacherUncheckedUpdateWithoutCoursesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passcode?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LessonUpsertWithWhereUniqueWithoutCourseInput = {
    where: LessonWhereUniqueInput
    update: XOR<LessonUpdateWithoutCourseInput, LessonUncheckedUpdateWithoutCourseInput>
    create: XOR<LessonCreateWithoutCourseInput, LessonUncheckedCreateWithoutCourseInput>
  }

  export type LessonUpdateWithWhereUniqueWithoutCourseInput = {
    where: LessonWhereUniqueInput
    data: XOR<LessonUpdateWithoutCourseInput, LessonUncheckedUpdateWithoutCourseInput>
  }

  export type LessonUpdateManyWithWhereWithoutCourseInput = {
    where: LessonScalarWhereInput
    data: XOR<LessonUpdateManyMutationInput, LessonUncheckedUpdateManyWithoutCourseInput>
  }

  export type LessonScalarWhereInput = {
    AND?: LessonScalarWhereInput | LessonScalarWhereInput[]
    OR?: LessonScalarWhereInput[]
    NOT?: LessonScalarWhereInput | LessonScalarWhereInput[]
    id?: StringFilter<"Lesson"> | string
    title?: StringFilter<"Lesson"> | string
    videoUrl?: StringFilter<"Lesson"> | string
    courseId?: StringFilter<"Lesson"> | string
    order?: IntFilter<"Lesson"> | number
    createdAt?: DateTimeFilter<"Lesson"> | Date | string
  }

  export type CourseCreateWithoutLessonsInput = {
    id?: string
    title: string
    description: string
    createdAt?: Date | string
    teacher: TeacherCreateNestedOneWithoutCoursesInput
  }

  export type CourseUncheckedCreateWithoutLessonsInput = {
    id?: string
    title: string
    description: string
    teacherId: string
    createdAt?: Date | string
  }

  export type CourseCreateOrConnectWithoutLessonsInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutLessonsInput, CourseUncheckedCreateWithoutLessonsInput>
  }

  export type QuizCreateWithoutLessonInput = {
    id?: string
    questions?: QuestionCreateNestedManyWithoutQuizInput
    StudentQuiz?: StudentQuizCreateNestedManyWithoutQuizInput
  }

  export type QuizUncheckedCreateWithoutLessonInput = {
    id?: string
    questions?: QuestionUncheckedCreateNestedManyWithoutQuizInput
    StudentQuiz?: StudentQuizUncheckedCreateNestedManyWithoutQuizInput
  }

  export type QuizCreateOrConnectWithoutLessonInput = {
    where: QuizWhereUniqueInput
    create: XOR<QuizCreateWithoutLessonInput, QuizUncheckedCreateWithoutLessonInput>
  }

  export type StudentProgressCreateWithoutLessonInput = {
    id?: string
    completed?: boolean
    completedAt?: Date | string | null
    student: StudentCreateNestedOneWithoutProgressInput
  }

  export type StudentProgressUncheckedCreateWithoutLessonInput = {
    id?: string
    studentId: string
    completed?: boolean
    completedAt?: Date | string | null
  }

  export type StudentProgressCreateOrConnectWithoutLessonInput = {
    where: StudentProgressWhereUniqueInput
    create: XOR<StudentProgressCreateWithoutLessonInput, StudentProgressUncheckedCreateWithoutLessonInput>
  }

  export type StudentProgressCreateManyLessonInputEnvelope = {
    data: StudentProgressCreateManyLessonInput | StudentProgressCreateManyLessonInput[]
    skipDuplicates?: boolean
  }

  export type CourseUpsertWithoutLessonsInput = {
    update: XOR<CourseUpdateWithoutLessonsInput, CourseUncheckedUpdateWithoutLessonsInput>
    create: XOR<CourseCreateWithoutLessonsInput, CourseUncheckedCreateWithoutLessonsInput>
    where?: CourseWhereInput
  }

  export type CourseUpdateToOneWithWhereWithoutLessonsInput = {
    where?: CourseWhereInput
    data: XOR<CourseUpdateWithoutLessonsInput, CourseUncheckedUpdateWithoutLessonsInput>
  }

  export type CourseUpdateWithoutLessonsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teacher?: TeacherUpdateOneRequiredWithoutCoursesNestedInput
  }

  export type CourseUncheckedUpdateWithoutLessonsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    teacherId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuizUpsertWithoutLessonInput = {
    update: XOR<QuizUpdateWithoutLessonInput, QuizUncheckedUpdateWithoutLessonInput>
    create: XOR<QuizCreateWithoutLessonInput, QuizUncheckedCreateWithoutLessonInput>
    where?: QuizWhereInput
  }

  export type QuizUpdateToOneWithWhereWithoutLessonInput = {
    where?: QuizWhereInput
    data: XOR<QuizUpdateWithoutLessonInput, QuizUncheckedUpdateWithoutLessonInput>
  }

  export type QuizUpdateWithoutLessonInput = {
    id?: StringFieldUpdateOperationsInput | string
    questions?: QuestionUpdateManyWithoutQuizNestedInput
    StudentQuiz?: StudentQuizUpdateManyWithoutQuizNestedInput
  }

  export type QuizUncheckedUpdateWithoutLessonInput = {
    id?: StringFieldUpdateOperationsInput | string
    questions?: QuestionUncheckedUpdateManyWithoutQuizNestedInput
    StudentQuiz?: StudentQuizUncheckedUpdateManyWithoutQuizNestedInput
  }

  export type StudentProgressUpsertWithWhereUniqueWithoutLessonInput = {
    where: StudentProgressWhereUniqueInput
    update: XOR<StudentProgressUpdateWithoutLessonInput, StudentProgressUncheckedUpdateWithoutLessonInput>
    create: XOR<StudentProgressCreateWithoutLessonInput, StudentProgressUncheckedCreateWithoutLessonInput>
  }

  export type StudentProgressUpdateWithWhereUniqueWithoutLessonInput = {
    where: StudentProgressWhereUniqueInput
    data: XOR<StudentProgressUpdateWithoutLessonInput, StudentProgressUncheckedUpdateWithoutLessonInput>
  }

  export type StudentProgressUpdateManyWithWhereWithoutLessonInput = {
    where: StudentProgressScalarWhereInput
    data: XOR<StudentProgressUpdateManyMutationInput, StudentProgressUncheckedUpdateManyWithoutLessonInput>
  }

  export type LessonCreateWithoutQuizInput = {
    id?: string
    title: string
    videoUrl: string
    order: number
    createdAt?: Date | string
    course: CourseCreateNestedOneWithoutLessonsInput
    StudentProgress?: StudentProgressCreateNestedManyWithoutLessonInput
  }

  export type LessonUncheckedCreateWithoutQuizInput = {
    id?: string
    title: string
    videoUrl: string
    courseId: string
    order: number
    createdAt?: Date | string
    StudentProgress?: StudentProgressUncheckedCreateNestedManyWithoutLessonInput
  }

  export type LessonCreateOrConnectWithoutQuizInput = {
    where: LessonWhereUniqueInput
    create: XOR<LessonCreateWithoutQuizInput, LessonUncheckedCreateWithoutQuizInput>
  }

  export type QuestionCreateWithoutQuizInput = {
    id?: string
    question: string
    questionOptions?: QuestionOptionCreateNestedManyWithoutQuestionInput
    questionAnswer?: QuestionAnswerCreateNestedManyWithoutQuestionInput
    StudentQuizAnswer?: StudentQuizAnswerCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUncheckedCreateWithoutQuizInput = {
    id?: string
    question: string
    questionOptions?: QuestionOptionUncheckedCreateNestedManyWithoutQuestionInput
    questionAnswer?: QuestionAnswerUncheckedCreateNestedManyWithoutQuestionInput
    StudentQuizAnswer?: StudentQuizAnswerUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type QuestionCreateOrConnectWithoutQuizInput = {
    where: QuestionWhereUniqueInput
    create: XOR<QuestionCreateWithoutQuizInput, QuestionUncheckedCreateWithoutQuizInput>
  }

  export type QuestionCreateManyQuizInputEnvelope = {
    data: QuestionCreateManyQuizInput | QuestionCreateManyQuizInput[]
    skipDuplicates?: boolean
  }

  export type StudentQuizCreateWithoutQuizInput = {
    id?: string
    score?: number | null
    passed?: boolean
    takenAt?: Date | string
    student: StudentCreateNestedOneWithoutStudentQuizzesInput
    studentQuizAnswers?: StudentQuizAnswerCreateNestedManyWithoutStudentQuizInput
  }

  export type StudentQuizUncheckedCreateWithoutQuizInput = {
    id?: string
    studentId: string
    score?: number | null
    passed?: boolean
    takenAt?: Date | string
    studentQuizAnswers?: StudentQuizAnswerUncheckedCreateNestedManyWithoutStudentQuizInput
  }

  export type StudentQuizCreateOrConnectWithoutQuizInput = {
    where: StudentQuizWhereUniqueInput
    create: XOR<StudentQuizCreateWithoutQuizInput, StudentQuizUncheckedCreateWithoutQuizInput>
  }

  export type StudentQuizCreateManyQuizInputEnvelope = {
    data: StudentQuizCreateManyQuizInput | StudentQuizCreateManyQuizInput[]
    skipDuplicates?: boolean
  }

  export type LessonUpsertWithoutQuizInput = {
    update: XOR<LessonUpdateWithoutQuizInput, LessonUncheckedUpdateWithoutQuizInput>
    create: XOR<LessonCreateWithoutQuizInput, LessonUncheckedCreateWithoutQuizInput>
    where?: LessonWhereInput
  }

  export type LessonUpdateToOneWithWhereWithoutQuizInput = {
    where?: LessonWhereInput
    data: XOR<LessonUpdateWithoutQuizInput, LessonUncheckedUpdateWithoutQuizInput>
  }

  export type LessonUpdateWithoutQuizInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    videoUrl?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    course?: CourseUpdateOneRequiredWithoutLessonsNestedInput
    StudentProgress?: StudentProgressUpdateManyWithoutLessonNestedInput
  }

  export type LessonUncheckedUpdateWithoutQuizInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    videoUrl?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    StudentProgress?: StudentProgressUncheckedUpdateManyWithoutLessonNestedInput
  }

  export type QuestionUpsertWithWhereUniqueWithoutQuizInput = {
    where: QuestionWhereUniqueInput
    update: XOR<QuestionUpdateWithoutQuizInput, QuestionUncheckedUpdateWithoutQuizInput>
    create: XOR<QuestionCreateWithoutQuizInput, QuestionUncheckedCreateWithoutQuizInput>
  }

  export type QuestionUpdateWithWhereUniqueWithoutQuizInput = {
    where: QuestionWhereUniqueInput
    data: XOR<QuestionUpdateWithoutQuizInput, QuestionUncheckedUpdateWithoutQuizInput>
  }

  export type QuestionUpdateManyWithWhereWithoutQuizInput = {
    where: QuestionScalarWhereInput
    data: XOR<QuestionUpdateManyMutationInput, QuestionUncheckedUpdateManyWithoutQuizInput>
  }

  export type QuestionScalarWhereInput = {
    AND?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
    OR?: QuestionScalarWhereInput[]
    NOT?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
    id?: StringFilter<"Question"> | string
    quizId?: StringFilter<"Question"> | string
    question?: StringFilter<"Question"> | string
  }

  export type StudentQuizUpsertWithWhereUniqueWithoutQuizInput = {
    where: StudentQuizWhereUniqueInput
    update: XOR<StudentQuizUpdateWithoutQuizInput, StudentQuizUncheckedUpdateWithoutQuizInput>
    create: XOR<StudentQuizCreateWithoutQuizInput, StudentQuizUncheckedCreateWithoutQuizInput>
  }

  export type StudentQuizUpdateWithWhereUniqueWithoutQuizInput = {
    where: StudentQuizWhereUniqueInput
    data: XOR<StudentQuizUpdateWithoutQuizInput, StudentQuizUncheckedUpdateWithoutQuizInput>
  }

  export type StudentQuizUpdateManyWithWhereWithoutQuizInput = {
    where: StudentQuizScalarWhereInput
    data: XOR<StudentQuizUpdateManyMutationInput, StudentQuizUncheckedUpdateManyWithoutQuizInput>
  }

  export type QuizCreateWithoutQuestionsInput = {
    id?: string
    lesson: LessonCreateNestedOneWithoutQuizInput
    StudentQuiz?: StudentQuizCreateNestedManyWithoutQuizInput
  }

  export type QuizUncheckedCreateWithoutQuestionsInput = {
    id?: string
    lessonId: string
    StudentQuiz?: StudentQuizUncheckedCreateNestedManyWithoutQuizInput
  }

  export type QuizCreateOrConnectWithoutQuestionsInput = {
    where: QuizWhereUniqueInput
    create: XOR<QuizCreateWithoutQuestionsInput, QuizUncheckedCreateWithoutQuestionsInput>
  }

  export type QuestionOptionCreateWithoutQuestionInput = {
    id?: string
    option: string
    questionAnswer?: QuestionAnswerCreateNestedManyWithoutAnswerInput
    studentQuizAnswers?: StudentQuizAnswerCreateNestedManyWithoutSelectedOptionInput
  }

  export type QuestionOptionUncheckedCreateWithoutQuestionInput = {
    id?: string
    option: string
    questionAnswer?: QuestionAnswerUncheckedCreateNestedManyWithoutAnswerInput
    studentQuizAnswers?: StudentQuizAnswerUncheckedCreateNestedManyWithoutSelectedOptionInput
  }

  export type QuestionOptionCreateOrConnectWithoutQuestionInput = {
    where: QuestionOptionWhereUniqueInput
    create: XOR<QuestionOptionCreateWithoutQuestionInput, QuestionOptionUncheckedCreateWithoutQuestionInput>
  }

  export type QuestionOptionCreateManyQuestionInputEnvelope = {
    data: QuestionOptionCreateManyQuestionInput | QuestionOptionCreateManyQuestionInput[]
    skipDuplicates?: boolean
  }

  export type QuestionAnswerCreateWithoutQuestionInput = {
    id?: string
    answer: QuestionOptionCreateNestedOneWithoutQuestionAnswerInput
  }

  export type QuestionAnswerUncheckedCreateWithoutQuestionInput = {
    id?: string
    answerId: string
  }

  export type QuestionAnswerCreateOrConnectWithoutQuestionInput = {
    where: QuestionAnswerWhereUniqueInput
    create: XOR<QuestionAnswerCreateWithoutQuestionInput, QuestionAnswerUncheckedCreateWithoutQuestionInput>
  }

  export type QuestionAnswerCreateManyQuestionInputEnvelope = {
    data: QuestionAnswerCreateManyQuestionInput | QuestionAnswerCreateManyQuestionInput[]
    skipDuplicates?: boolean
  }

  export type StudentQuizAnswerCreateWithoutQuestionInput = {
    id?: string
    studentQuiz: StudentQuizCreateNestedOneWithoutStudentQuizAnswersInput
    selectedOption: QuestionOptionCreateNestedOneWithoutStudentQuizAnswersInput
  }

  export type StudentQuizAnswerUncheckedCreateWithoutQuestionInput = {
    id?: string
    studentQuizId: string
    optionId: string
  }

  export type StudentQuizAnswerCreateOrConnectWithoutQuestionInput = {
    where: StudentQuizAnswerWhereUniqueInput
    create: XOR<StudentQuizAnswerCreateWithoutQuestionInput, StudentQuizAnswerUncheckedCreateWithoutQuestionInput>
  }

  export type StudentQuizAnswerCreateManyQuestionInputEnvelope = {
    data: StudentQuizAnswerCreateManyQuestionInput | StudentQuizAnswerCreateManyQuestionInput[]
    skipDuplicates?: boolean
  }

  export type QuizUpsertWithoutQuestionsInput = {
    update: XOR<QuizUpdateWithoutQuestionsInput, QuizUncheckedUpdateWithoutQuestionsInput>
    create: XOR<QuizCreateWithoutQuestionsInput, QuizUncheckedCreateWithoutQuestionsInput>
    where?: QuizWhereInput
  }

  export type QuizUpdateToOneWithWhereWithoutQuestionsInput = {
    where?: QuizWhereInput
    data: XOR<QuizUpdateWithoutQuestionsInput, QuizUncheckedUpdateWithoutQuestionsInput>
  }

  export type QuizUpdateWithoutQuestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    lesson?: LessonUpdateOneRequiredWithoutQuizNestedInput
    StudentQuiz?: StudentQuizUpdateManyWithoutQuizNestedInput
  }

  export type QuizUncheckedUpdateWithoutQuestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    lessonId?: StringFieldUpdateOperationsInput | string
    StudentQuiz?: StudentQuizUncheckedUpdateManyWithoutQuizNestedInput
  }

  export type QuestionOptionUpsertWithWhereUniqueWithoutQuestionInput = {
    where: QuestionOptionWhereUniqueInput
    update: XOR<QuestionOptionUpdateWithoutQuestionInput, QuestionOptionUncheckedUpdateWithoutQuestionInput>
    create: XOR<QuestionOptionCreateWithoutQuestionInput, QuestionOptionUncheckedCreateWithoutQuestionInput>
  }

  export type QuestionOptionUpdateWithWhereUniqueWithoutQuestionInput = {
    where: QuestionOptionWhereUniqueInput
    data: XOR<QuestionOptionUpdateWithoutQuestionInput, QuestionOptionUncheckedUpdateWithoutQuestionInput>
  }

  export type QuestionOptionUpdateManyWithWhereWithoutQuestionInput = {
    where: QuestionOptionScalarWhereInput
    data: XOR<QuestionOptionUpdateManyMutationInput, QuestionOptionUncheckedUpdateManyWithoutQuestionInput>
  }

  export type QuestionOptionScalarWhereInput = {
    AND?: QuestionOptionScalarWhereInput | QuestionOptionScalarWhereInput[]
    OR?: QuestionOptionScalarWhereInput[]
    NOT?: QuestionOptionScalarWhereInput | QuestionOptionScalarWhereInput[]
    id?: StringFilter<"QuestionOption"> | string
    questionId?: StringFilter<"QuestionOption"> | string
    option?: StringFilter<"QuestionOption"> | string
  }

  export type QuestionAnswerUpsertWithWhereUniqueWithoutQuestionInput = {
    where: QuestionAnswerWhereUniqueInput
    update: XOR<QuestionAnswerUpdateWithoutQuestionInput, QuestionAnswerUncheckedUpdateWithoutQuestionInput>
    create: XOR<QuestionAnswerCreateWithoutQuestionInput, QuestionAnswerUncheckedCreateWithoutQuestionInput>
  }

  export type QuestionAnswerUpdateWithWhereUniqueWithoutQuestionInput = {
    where: QuestionAnswerWhereUniqueInput
    data: XOR<QuestionAnswerUpdateWithoutQuestionInput, QuestionAnswerUncheckedUpdateWithoutQuestionInput>
  }

  export type QuestionAnswerUpdateManyWithWhereWithoutQuestionInput = {
    where: QuestionAnswerScalarWhereInput
    data: XOR<QuestionAnswerUpdateManyMutationInput, QuestionAnswerUncheckedUpdateManyWithoutQuestionInput>
  }

  export type QuestionAnswerScalarWhereInput = {
    AND?: QuestionAnswerScalarWhereInput | QuestionAnswerScalarWhereInput[]
    OR?: QuestionAnswerScalarWhereInput[]
    NOT?: QuestionAnswerScalarWhereInput | QuestionAnswerScalarWhereInput[]
    id?: StringFilter<"QuestionAnswer"> | string
    questionId?: StringFilter<"QuestionAnswer"> | string
    answerId?: StringFilter<"QuestionAnswer"> | string
  }

  export type StudentQuizAnswerUpsertWithWhereUniqueWithoutQuestionInput = {
    where: StudentQuizAnswerWhereUniqueInput
    update: XOR<StudentQuizAnswerUpdateWithoutQuestionInput, StudentQuizAnswerUncheckedUpdateWithoutQuestionInput>
    create: XOR<StudentQuizAnswerCreateWithoutQuestionInput, StudentQuizAnswerUncheckedCreateWithoutQuestionInput>
  }

  export type StudentQuizAnswerUpdateWithWhereUniqueWithoutQuestionInput = {
    where: StudentQuizAnswerWhereUniqueInput
    data: XOR<StudentQuizAnswerUpdateWithoutQuestionInput, StudentQuizAnswerUncheckedUpdateWithoutQuestionInput>
  }

  export type StudentQuizAnswerUpdateManyWithWhereWithoutQuestionInput = {
    where: StudentQuizAnswerScalarWhereInput
    data: XOR<StudentQuizAnswerUpdateManyMutationInput, StudentQuizAnswerUncheckedUpdateManyWithoutQuestionInput>
  }

  export type StudentQuizAnswerScalarWhereInput = {
    AND?: StudentQuizAnswerScalarWhereInput | StudentQuizAnswerScalarWhereInput[]
    OR?: StudentQuizAnswerScalarWhereInput[]
    NOT?: StudentQuizAnswerScalarWhereInput | StudentQuizAnswerScalarWhereInput[]
    id?: StringFilter<"StudentQuizAnswer"> | string
    studentQuizId?: StringFilter<"StudentQuizAnswer"> | string
    questionId?: StringFilter<"StudentQuizAnswer"> | string
    optionId?: StringFilter<"StudentQuizAnswer"> | string
  }

  export type QuestionCreateWithoutQuestionOptionsInput = {
    id?: string
    question: string
    quiz: QuizCreateNestedOneWithoutQuestionsInput
    questionAnswer?: QuestionAnswerCreateNestedManyWithoutQuestionInput
    StudentQuizAnswer?: StudentQuizAnswerCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUncheckedCreateWithoutQuestionOptionsInput = {
    id?: string
    quizId: string
    question: string
    questionAnswer?: QuestionAnswerUncheckedCreateNestedManyWithoutQuestionInput
    StudentQuizAnswer?: StudentQuizAnswerUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type QuestionCreateOrConnectWithoutQuestionOptionsInput = {
    where: QuestionWhereUniqueInput
    create: XOR<QuestionCreateWithoutQuestionOptionsInput, QuestionUncheckedCreateWithoutQuestionOptionsInput>
  }

  export type QuestionAnswerCreateWithoutAnswerInput = {
    id?: string
    question: QuestionCreateNestedOneWithoutQuestionAnswerInput
  }

  export type QuestionAnswerUncheckedCreateWithoutAnswerInput = {
    id?: string
    questionId: string
  }

  export type QuestionAnswerCreateOrConnectWithoutAnswerInput = {
    where: QuestionAnswerWhereUniqueInput
    create: XOR<QuestionAnswerCreateWithoutAnswerInput, QuestionAnswerUncheckedCreateWithoutAnswerInput>
  }

  export type QuestionAnswerCreateManyAnswerInputEnvelope = {
    data: QuestionAnswerCreateManyAnswerInput | QuestionAnswerCreateManyAnswerInput[]
    skipDuplicates?: boolean
  }

  export type StudentQuizAnswerCreateWithoutSelectedOptionInput = {
    id?: string
    studentQuiz: StudentQuizCreateNestedOneWithoutStudentQuizAnswersInput
    question: QuestionCreateNestedOneWithoutStudentQuizAnswerInput
  }

  export type StudentQuizAnswerUncheckedCreateWithoutSelectedOptionInput = {
    id?: string
    studentQuizId: string
    questionId: string
  }

  export type StudentQuizAnswerCreateOrConnectWithoutSelectedOptionInput = {
    where: StudentQuizAnswerWhereUniqueInput
    create: XOR<StudentQuizAnswerCreateWithoutSelectedOptionInput, StudentQuizAnswerUncheckedCreateWithoutSelectedOptionInput>
  }

  export type StudentQuizAnswerCreateManySelectedOptionInputEnvelope = {
    data: StudentQuizAnswerCreateManySelectedOptionInput | StudentQuizAnswerCreateManySelectedOptionInput[]
    skipDuplicates?: boolean
  }

  export type QuestionUpsertWithoutQuestionOptionsInput = {
    update: XOR<QuestionUpdateWithoutQuestionOptionsInput, QuestionUncheckedUpdateWithoutQuestionOptionsInput>
    create: XOR<QuestionCreateWithoutQuestionOptionsInput, QuestionUncheckedCreateWithoutQuestionOptionsInput>
    where?: QuestionWhereInput
  }

  export type QuestionUpdateToOneWithWhereWithoutQuestionOptionsInput = {
    where?: QuestionWhereInput
    data: XOR<QuestionUpdateWithoutQuestionOptionsInput, QuestionUncheckedUpdateWithoutQuestionOptionsInput>
  }

  export type QuestionUpdateWithoutQuestionOptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    quiz?: QuizUpdateOneRequiredWithoutQuestionsNestedInput
    questionAnswer?: QuestionAnswerUpdateManyWithoutQuestionNestedInput
    StudentQuizAnswer?: StudentQuizAnswerUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateWithoutQuestionOptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    quizId?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    questionAnswer?: QuestionAnswerUncheckedUpdateManyWithoutQuestionNestedInput
    StudentQuizAnswer?: StudentQuizAnswerUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionAnswerUpsertWithWhereUniqueWithoutAnswerInput = {
    where: QuestionAnswerWhereUniqueInput
    update: XOR<QuestionAnswerUpdateWithoutAnswerInput, QuestionAnswerUncheckedUpdateWithoutAnswerInput>
    create: XOR<QuestionAnswerCreateWithoutAnswerInput, QuestionAnswerUncheckedCreateWithoutAnswerInput>
  }

  export type QuestionAnswerUpdateWithWhereUniqueWithoutAnswerInput = {
    where: QuestionAnswerWhereUniqueInput
    data: XOR<QuestionAnswerUpdateWithoutAnswerInput, QuestionAnswerUncheckedUpdateWithoutAnswerInput>
  }

  export type QuestionAnswerUpdateManyWithWhereWithoutAnswerInput = {
    where: QuestionAnswerScalarWhereInput
    data: XOR<QuestionAnswerUpdateManyMutationInput, QuestionAnswerUncheckedUpdateManyWithoutAnswerInput>
  }

  export type StudentQuizAnswerUpsertWithWhereUniqueWithoutSelectedOptionInput = {
    where: StudentQuizAnswerWhereUniqueInput
    update: XOR<StudentQuizAnswerUpdateWithoutSelectedOptionInput, StudentQuizAnswerUncheckedUpdateWithoutSelectedOptionInput>
    create: XOR<StudentQuizAnswerCreateWithoutSelectedOptionInput, StudentQuizAnswerUncheckedCreateWithoutSelectedOptionInput>
  }

  export type StudentQuizAnswerUpdateWithWhereUniqueWithoutSelectedOptionInput = {
    where: StudentQuizAnswerWhereUniqueInput
    data: XOR<StudentQuizAnswerUpdateWithoutSelectedOptionInput, StudentQuizAnswerUncheckedUpdateWithoutSelectedOptionInput>
  }

  export type StudentQuizAnswerUpdateManyWithWhereWithoutSelectedOptionInput = {
    where: StudentQuizAnswerScalarWhereInput
    data: XOR<StudentQuizAnswerUpdateManyMutationInput, StudentQuizAnswerUncheckedUpdateManyWithoutSelectedOptionInput>
  }

  export type QuestionCreateWithoutQuestionAnswerInput = {
    id?: string
    question: string
    quiz: QuizCreateNestedOneWithoutQuestionsInput
    questionOptions?: QuestionOptionCreateNestedManyWithoutQuestionInput
    StudentQuizAnswer?: StudentQuizAnswerCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUncheckedCreateWithoutQuestionAnswerInput = {
    id?: string
    quizId: string
    question: string
    questionOptions?: QuestionOptionUncheckedCreateNestedManyWithoutQuestionInput
    StudentQuizAnswer?: StudentQuizAnswerUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type QuestionCreateOrConnectWithoutQuestionAnswerInput = {
    where: QuestionWhereUniqueInput
    create: XOR<QuestionCreateWithoutQuestionAnswerInput, QuestionUncheckedCreateWithoutQuestionAnswerInput>
  }

  export type QuestionOptionCreateWithoutQuestionAnswerInput = {
    id?: string
    option: string
    question: QuestionCreateNestedOneWithoutQuestionOptionsInput
    studentQuizAnswers?: StudentQuizAnswerCreateNestedManyWithoutSelectedOptionInput
  }

  export type QuestionOptionUncheckedCreateWithoutQuestionAnswerInput = {
    id?: string
    questionId: string
    option: string
    studentQuizAnswers?: StudentQuizAnswerUncheckedCreateNestedManyWithoutSelectedOptionInput
  }

  export type QuestionOptionCreateOrConnectWithoutQuestionAnswerInput = {
    where: QuestionOptionWhereUniqueInput
    create: XOR<QuestionOptionCreateWithoutQuestionAnswerInput, QuestionOptionUncheckedCreateWithoutQuestionAnswerInput>
  }

  export type QuestionUpsertWithoutQuestionAnswerInput = {
    update: XOR<QuestionUpdateWithoutQuestionAnswerInput, QuestionUncheckedUpdateWithoutQuestionAnswerInput>
    create: XOR<QuestionCreateWithoutQuestionAnswerInput, QuestionUncheckedCreateWithoutQuestionAnswerInput>
    where?: QuestionWhereInput
  }

  export type QuestionUpdateToOneWithWhereWithoutQuestionAnswerInput = {
    where?: QuestionWhereInput
    data: XOR<QuestionUpdateWithoutQuestionAnswerInput, QuestionUncheckedUpdateWithoutQuestionAnswerInput>
  }

  export type QuestionUpdateWithoutQuestionAnswerInput = {
    id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    quiz?: QuizUpdateOneRequiredWithoutQuestionsNestedInput
    questionOptions?: QuestionOptionUpdateManyWithoutQuestionNestedInput
    StudentQuizAnswer?: StudentQuizAnswerUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateWithoutQuestionAnswerInput = {
    id?: StringFieldUpdateOperationsInput | string
    quizId?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    questionOptions?: QuestionOptionUncheckedUpdateManyWithoutQuestionNestedInput
    StudentQuizAnswer?: StudentQuizAnswerUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionOptionUpsertWithoutQuestionAnswerInput = {
    update: XOR<QuestionOptionUpdateWithoutQuestionAnswerInput, QuestionOptionUncheckedUpdateWithoutQuestionAnswerInput>
    create: XOR<QuestionOptionCreateWithoutQuestionAnswerInput, QuestionOptionUncheckedCreateWithoutQuestionAnswerInput>
    where?: QuestionOptionWhereInput
  }

  export type QuestionOptionUpdateToOneWithWhereWithoutQuestionAnswerInput = {
    where?: QuestionOptionWhereInput
    data: XOR<QuestionOptionUpdateWithoutQuestionAnswerInput, QuestionOptionUncheckedUpdateWithoutQuestionAnswerInput>
  }

  export type QuestionOptionUpdateWithoutQuestionAnswerInput = {
    id?: StringFieldUpdateOperationsInput | string
    option?: StringFieldUpdateOperationsInput | string
    question?: QuestionUpdateOneRequiredWithoutQuestionOptionsNestedInput
    studentQuizAnswers?: StudentQuizAnswerUpdateManyWithoutSelectedOptionNestedInput
  }

  export type QuestionOptionUncheckedUpdateWithoutQuestionAnswerInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    option?: StringFieldUpdateOperationsInput | string
    studentQuizAnswers?: StudentQuizAnswerUncheckedUpdateManyWithoutSelectedOptionNestedInput
  }

  export type StudentCreateWithoutStudentQuizzesInput = {
    id?: string
    name: string
    passcode: string
    phoneNo: string
    status?: boolean
    startDate: Date | string
    chatId: string
    createdAt?: Date | string
    progress?: StudentProgressCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateWithoutStudentQuizzesInput = {
    id?: string
    name: string
    passcode: string
    phoneNo: string
    status?: boolean
    startDate: Date | string
    chatId: string
    createdAt?: Date | string
    progress?: StudentProgressUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentCreateOrConnectWithoutStudentQuizzesInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutStudentQuizzesInput, StudentUncheckedCreateWithoutStudentQuizzesInput>
  }

  export type QuizCreateWithoutStudentQuizInput = {
    id?: string
    lesson: LessonCreateNestedOneWithoutQuizInput
    questions?: QuestionCreateNestedManyWithoutQuizInput
  }

  export type QuizUncheckedCreateWithoutStudentQuizInput = {
    id?: string
    lessonId: string
    questions?: QuestionUncheckedCreateNestedManyWithoutQuizInput
  }

  export type QuizCreateOrConnectWithoutStudentQuizInput = {
    where: QuizWhereUniqueInput
    create: XOR<QuizCreateWithoutStudentQuizInput, QuizUncheckedCreateWithoutStudentQuizInput>
  }

  export type StudentQuizAnswerCreateWithoutStudentQuizInput = {
    id?: string
    question: QuestionCreateNestedOneWithoutStudentQuizAnswerInput
    selectedOption: QuestionOptionCreateNestedOneWithoutStudentQuizAnswersInput
  }

  export type StudentQuizAnswerUncheckedCreateWithoutStudentQuizInput = {
    id?: string
    questionId: string
    optionId: string
  }

  export type StudentQuizAnswerCreateOrConnectWithoutStudentQuizInput = {
    where: StudentQuizAnswerWhereUniqueInput
    create: XOR<StudentQuizAnswerCreateWithoutStudentQuizInput, StudentQuizAnswerUncheckedCreateWithoutStudentQuizInput>
  }

  export type StudentQuizAnswerCreateManyStudentQuizInputEnvelope = {
    data: StudentQuizAnswerCreateManyStudentQuizInput | StudentQuizAnswerCreateManyStudentQuizInput[]
    skipDuplicates?: boolean
  }

  export type StudentUpsertWithoutStudentQuizzesInput = {
    update: XOR<StudentUpdateWithoutStudentQuizzesInput, StudentUncheckedUpdateWithoutStudentQuizzesInput>
    create: XOR<StudentCreateWithoutStudentQuizzesInput, StudentUncheckedCreateWithoutStudentQuizzesInput>
    where?: StudentWhereInput
  }

  export type StudentUpdateToOneWithWhereWithoutStudentQuizzesInput = {
    where?: StudentWhereInput
    data: XOR<StudentUpdateWithoutStudentQuizzesInput, StudentUncheckedUpdateWithoutStudentQuizzesInput>
  }

  export type StudentUpdateWithoutStudentQuizzesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    passcode?: StringFieldUpdateOperationsInput | string
    phoneNo?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    chatId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    progress?: StudentProgressUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateWithoutStudentQuizzesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    passcode?: StringFieldUpdateOperationsInput | string
    phoneNo?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    chatId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    progress?: StudentProgressUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type QuizUpsertWithoutStudentQuizInput = {
    update: XOR<QuizUpdateWithoutStudentQuizInput, QuizUncheckedUpdateWithoutStudentQuizInput>
    create: XOR<QuizCreateWithoutStudentQuizInput, QuizUncheckedCreateWithoutStudentQuizInput>
    where?: QuizWhereInput
  }

  export type QuizUpdateToOneWithWhereWithoutStudentQuizInput = {
    where?: QuizWhereInput
    data: XOR<QuizUpdateWithoutStudentQuizInput, QuizUncheckedUpdateWithoutStudentQuizInput>
  }

  export type QuizUpdateWithoutStudentQuizInput = {
    id?: StringFieldUpdateOperationsInput | string
    lesson?: LessonUpdateOneRequiredWithoutQuizNestedInput
    questions?: QuestionUpdateManyWithoutQuizNestedInput
  }

  export type QuizUncheckedUpdateWithoutStudentQuizInput = {
    id?: StringFieldUpdateOperationsInput | string
    lessonId?: StringFieldUpdateOperationsInput | string
    questions?: QuestionUncheckedUpdateManyWithoutQuizNestedInput
  }

  export type StudentQuizAnswerUpsertWithWhereUniqueWithoutStudentQuizInput = {
    where: StudentQuizAnswerWhereUniqueInput
    update: XOR<StudentQuizAnswerUpdateWithoutStudentQuizInput, StudentQuizAnswerUncheckedUpdateWithoutStudentQuizInput>
    create: XOR<StudentQuizAnswerCreateWithoutStudentQuizInput, StudentQuizAnswerUncheckedCreateWithoutStudentQuizInput>
  }

  export type StudentQuizAnswerUpdateWithWhereUniqueWithoutStudentQuizInput = {
    where: StudentQuizAnswerWhereUniqueInput
    data: XOR<StudentQuizAnswerUpdateWithoutStudentQuizInput, StudentQuizAnswerUncheckedUpdateWithoutStudentQuizInput>
  }

  export type StudentQuizAnswerUpdateManyWithWhereWithoutStudentQuizInput = {
    where: StudentQuizAnswerScalarWhereInput
    data: XOR<StudentQuizAnswerUpdateManyMutationInput, StudentQuizAnswerUncheckedUpdateManyWithoutStudentQuizInput>
  }

  export type StudentQuizCreateWithoutStudentQuizAnswersInput = {
    id?: string
    score?: number | null
    passed?: boolean
    takenAt?: Date | string
    student: StudentCreateNestedOneWithoutStudentQuizzesInput
    quiz: QuizCreateNestedOneWithoutStudentQuizInput
  }

  export type StudentQuizUncheckedCreateWithoutStudentQuizAnswersInput = {
    id?: string
    studentId: string
    quizId: string
    score?: number | null
    passed?: boolean
    takenAt?: Date | string
  }

  export type StudentQuizCreateOrConnectWithoutStudentQuizAnswersInput = {
    where: StudentQuizWhereUniqueInput
    create: XOR<StudentQuizCreateWithoutStudentQuizAnswersInput, StudentQuizUncheckedCreateWithoutStudentQuizAnswersInput>
  }

  export type QuestionCreateWithoutStudentQuizAnswerInput = {
    id?: string
    question: string
    quiz: QuizCreateNestedOneWithoutQuestionsInput
    questionOptions?: QuestionOptionCreateNestedManyWithoutQuestionInput
    questionAnswer?: QuestionAnswerCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUncheckedCreateWithoutStudentQuizAnswerInput = {
    id?: string
    quizId: string
    question: string
    questionOptions?: QuestionOptionUncheckedCreateNestedManyWithoutQuestionInput
    questionAnswer?: QuestionAnswerUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type QuestionCreateOrConnectWithoutStudentQuizAnswerInput = {
    where: QuestionWhereUniqueInput
    create: XOR<QuestionCreateWithoutStudentQuizAnswerInput, QuestionUncheckedCreateWithoutStudentQuizAnswerInput>
  }

  export type QuestionOptionCreateWithoutStudentQuizAnswersInput = {
    id?: string
    option: string
    question: QuestionCreateNestedOneWithoutQuestionOptionsInput
    questionAnswer?: QuestionAnswerCreateNestedManyWithoutAnswerInput
  }

  export type QuestionOptionUncheckedCreateWithoutStudentQuizAnswersInput = {
    id?: string
    questionId: string
    option: string
    questionAnswer?: QuestionAnswerUncheckedCreateNestedManyWithoutAnswerInput
  }

  export type QuestionOptionCreateOrConnectWithoutStudentQuizAnswersInput = {
    where: QuestionOptionWhereUniqueInput
    create: XOR<QuestionOptionCreateWithoutStudentQuizAnswersInput, QuestionOptionUncheckedCreateWithoutStudentQuizAnswersInput>
  }

  export type StudentQuizUpsertWithoutStudentQuizAnswersInput = {
    update: XOR<StudentQuizUpdateWithoutStudentQuizAnswersInput, StudentQuizUncheckedUpdateWithoutStudentQuizAnswersInput>
    create: XOR<StudentQuizCreateWithoutStudentQuizAnswersInput, StudentQuizUncheckedCreateWithoutStudentQuizAnswersInput>
    where?: StudentQuizWhereInput
  }

  export type StudentQuizUpdateToOneWithWhereWithoutStudentQuizAnswersInput = {
    where?: StudentQuizWhereInput
    data: XOR<StudentQuizUpdateWithoutStudentQuizAnswersInput, StudentQuizUncheckedUpdateWithoutStudentQuizAnswersInput>
  }

  export type StudentQuizUpdateWithoutStudentQuizAnswersInput = {
    id?: StringFieldUpdateOperationsInput | string
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    passed?: BoolFieldUpdateOperationsInput | boolean
    takenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: StudentUpdateOneRequiredWithoutStudentQuizzesNestedInput
    quiz?: QuizUpdateOneRequiredWithoutStudentQuizNestedInput
  }

  export type StudentQuizUncheckedUpdateWithoutStudentQuizAnswersInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    quizId?: StringFieldUpdateOperationsInput | string
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    passed?: BoolFieldUpdateOperationsInput | boolean
    takenAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionUpsertWithoutStudentQuizAnswerInput = {
    update: XOR<QuestionUpdateWithoutStudentQuizAnswerInput, QuestionUncheckedUpdateWithoutStudentQuizAnswerInput>
    create: XOR<QuestionCreateWithoutStudentQuizAnswerInput, QuestionUncheckedCreateWithoutStudentQuizAnswerInput>
    where?: QuestionWhereInput
  }

  export type QuestionUpdateToOneWithWhereWithoutStudentQuizAnswerInput = {
    where?: QuestionWhereInput
    data: XOR<QuestionUpdateWithoutStudentQuizAnswerInput, QuestionUncheckedUpdateWithoutStudentQuizAnswerInput>
  }

  export type QuestionUpdateWithoutStudentQuizAnswerInput = {
    id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    quiz?: QuizUpdateOneRequiredWithoutQuestionsNestedInput
    questionOptions?: QuestionOptionUpdateManyWithoutQuestionNestedInput
    questionAnswer?: QuestionAnswerUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateWithoutStudentQuizAnswerInput = {
    id?: StringFieldUpdateOperationsInput | string
    quizId?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    questionOptions?: QuestionOptionUncheckedUpdateManyWithoutQuestionNestedInput
    questionAnswer?: QuestionAnswerUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionOptionUpsertWithoutStudentQuizAnswersInput = {
    update: XOR<QuestionOptionUpdateWithoutStudentQuizAnswersInput, QuestionOptionUncheckedUpdateWithoutStudentQuizAnswersInput>
    create: XOR<QuestionOptionCreateWithoutStudentQuizAnswersInput, QuestionOptionUncheckedCreateWithoutStudentQuizAnswersInput>
    where?: QuestionOptionWhereInput
  }

  export type QuestionOptionUpdateToOneWithWhereWithoutStudentQuizAnswersInput = {
    where?: QuestionOptionWhereInput
    data: XOR<QuestionOptionUpdateWithoutStudentQuizAnswersInput, QuestionOptionUncheckedUpdateWithoutStudentQuizAnswersInput>
  }

  export type QuestionOptionUpdateWithoutStudentQuizAnswersInput = {
    id?: StringFieldUpdateOperationsInput | string
    option?: StringFieldUpdateOperationsInput | string
    question?: QuestionUpdateOneRequiredWithoutQuestionOptionsNestedInput
    questionAnswer?: QuestionAnswerUpdateManyWithoutAnswerNestedInput
  }

  export type QuestionOptionUncheckedUpdateWithoutStudentQuizAnswersInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    option?: StringFieldUpdateOperationsInput | string
    questionAnswer?: QuestionAnswerUncheckedUpdateManyWithoutAnswerNestedInput
  }

  export type StudentCreateWithoutProgressInput = {
    id?: string
    name: string
    passcode: string
    phoneNo: string
    status?: boolean
    startDate: Date | string
    chatId: string
    createdAt?: Date | string
    studentQuizzes?: StudentQuizCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateWithoutProgressInput = {
    id?: string
    name: string
    passcode: string
    phoneNo: string
    status?: boolean
    startDate: Date | string
    chatId: string
    createdAt?: Date | string
    studentQuizzes?: StudentQuizUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentCreateOrConnectWithoutProgressInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutProgressInput, StudentUncheckedCreateWithoutProgressInput>
  }

  export type LessonCreateWithoutStudentProgressInput = {
    id?: string
    title: string
    videoUrl: string
    order: number
    createdAt?: Date | string
    course: CourseCreateNestedOneWithoutLessonsInput
    quiz?: QuizCreateNestedOneWithoutLessonInput
  }

  export type LessonUncheckedCreateWithoutStudentProgressInput = {
    id?: string
    title: string
    videoUrl: string
    courseId: string
    order: number
    createdAt?: Date | string
    quiz?: QuizUncheckedCreateNestedOneWithoutLessonInput
  }

  export type LessonCreateOrConnectWithoutStudentProgressInput = {
    where: LessonWhereUniqueInput
    create: XOR<LessonCreateWithoutStudentProgressInput, LessonUncheckedCreateWithoutStudentProgressInput>
  }

  export type StudentUpsertWithoutProgressInput = {
    update: XOR<StudentUpdateWithoutProgressInput, StudentUncheckedUpdateWithoutProgressInput>
    create: XOR<StudentCreateWithoutProgressInput, StudentUncheckedCreateWithoutProgressInput>
    where?: StudentWhereInput
  }

  export type StudentUpdateToOneWithWhereWithoutProgressInput = {
    where?: StudentWhereInput
    data: XOR<StudentUpdateWithoutProgressInput, StudentUncheckedUpdateWithoutProgressInput>
  }

  export type StudentUpdateWithoutProgressInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    passcode?: StringFieldUpdateOperationsInput | string
    phoneNo?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    chatId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    studentQuizzes?: StudentQuizUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateWithoutProgressInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    passcode?: StringFieldUpdateOperationsInput | string
    phoneNo?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    chatId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    studentQuizzes?: StudentQuizUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type LessonUpsertWithoutStudentProgressInput = {
    update: XOR<LessonUpdateWithoutStudentProgressInput, LessonUncheckedUpdateWithoutStudentProgressInput>
    create: XOR<LessonCreateWithoutStudentProgressInput, LessonUncheckedCreateWithoutStudentProgressInput>
    where?: LessonWhereInput
  }

  export type LessonUpdateToOneWithWhereWithoutStudentProgressInput = {
    where?: LessonWhereInput
    data: XOR<LessonUpdateWithoutStudentProgressInput, LessonUncheckedUpdateWithoutStudentProgressInput>
  }

  export type LessonUpdateWithoutStudentProgressInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    videoUrl?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    course?: CourseUpdateOneRequiredWithoutLessonsNestedInput
    quiz?: QuizUpdateOneWithoutLessonNestedInput
  }

  export type LessonUncheckedUpdateWithoutStudentProgressInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    videoUrl?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quiz?: QuizUncheckedUpdateOneWithoutLessonNestedInput
  }

  export type CourseCreateManyTeacherInput = {
    id?: string
    title: string
    description: string
    createdAt?: Date | string
  }

  export type CourseUpdateWithoutTeacherInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lessons?: LessonUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateWithoutTeacherInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lessons?: LessonUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateManyWithoutTeacherInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentProgressCreateManyStudentInput = {
    id?: string
    lessonId: string
    completed?: boolean
    completedAt?: Date | string | null
  }

  export type StudentQuizCreateManyStudentInput = {
    id?: string
    quizId: string
    score?: number | null
    passed?: boolean
    takenAt?: Date | string
  }

  export type StudentProgressUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lesson?: LessonUpdateOneRequiredWithoutStudentProgressNestedInput
  }

  export type StudentProgressUncheckedUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    lessonId?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StudentProgressUncheckedUpdateManyWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    lessonId?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StudentQuizUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    passed?: BoolFieldUpdateOperationsInput | boolean
    takenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quiz?: QuizUpdateOneRequiredWithoutStudentQuizNestedInput
    studentQuizAnswers?: StudentQuizAnswerUpdateManyWithoutStudentQuizNestedInput
  }

  export type StudentQuizUncheckedUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    quizId?: StringFieldUpdateOperationsInput | string
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    passed?: BoolFieldUpdateOperationsInput | boolean
    takenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    studentQuizAnswers?: StudentQuizAnswerUncheckedUpdateManyWithoutStudentQuizNestedInput
  }

  export type StudentQuizUncheckedUpdateManyWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    quizId?: StringFieldUpdateOperationsInput | string
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    passed?: BoolFieldUpdateOperationsInput | boolean
    takenAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LessonCreateManyCourseInput = {
    id?: string
    title: string
    videoUrl: string
    order: number
    createdAt?: Date | string
  }

  export type LessonUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    videoUrl?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quiz?: QuizUpdateOneWithoutLessonNestedInput
    StudentProgress?: StudentProgressUpdateManyWithoutLessonNestedInput
  }

  export type LessonUncheckedUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    videoUrl?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quiz?: QuizUncheckedUpdateOneWithoutLessonNestedInput
    StudentProgress?: StudentProgressUncheckedUpdateManyWithoutLessonNestedInput
  }

  export type LessonUncheckedUpdateManyWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    videoUrl?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentProgressCreateManyLessonInput = {
    id?: string
    studentId: string
    completed?: boolean
    completedAt?: Date | string | null
  }

  export type StudentProgressUpdateWithoutLessonInput = {
    id?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    student?: StudentUpdateOneRequiredWithoutProgressNestedInput
  }

  export type StudentProgressUncheckedUpdateWithoutLessonInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StudentProgressUncheckedUpdateManyWithoutLessonInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type QuestionCreateManyQuizInput = {
    id?: string
    question: string
  }

  export type StudentQuizCreateManyQuizInput = {
    id?: string
    studentId: string
    score?: number | null
    passed?: boolean
    takenAt?: Date | string
  }

  export type QuestionUpdateWithoutQuizInput = {
    id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    questionOptions?: QuestionOptionUpdateManyWithoutQuestionNestedInput
    questionAnswer?: QuestionAnswerUpdateManyWithoutQuestionNestedInput
    StudentQuizAnswer?: StudentQuizAnswerUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateWithoutQuizInput = {
    id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    questionOptions?: QuestionOptionUncheckedUpdateManyWithoutQuestionNestedInput
    questionAnswer?: QuestionAnswerUncheckedUpdateManyWithoutQuestionNestedInput
    StudentQuizAnswer?: StudentQuizAnswerUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateManyWithoutQuizInput = {
    id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
  }

  export type StudentQuizUpdateWithoutQuizInput = {
    id?: StringFieldUpdateOperationsInput | string
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    passed?: BoolFieldUpdateOperationsInput | boolean
    takenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: StudentUpdateOneRequiredWithoutStudentQuizzesNestedInput
    studentQuizAnswers?: StudentQuizAnswerUpdateManyWithoutStudentQuizNestedInput
  }

  export type StudentQuizUncheckedUpdateWithoutQuizInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    passed?: BoolFieldUpdateOperationsInput | boolean
    takenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    studentQuizAnswers?: StudentQuizAnswerUncheckedUpdateManyWithoutStudentQuizNestedInput
  }

  export type StudentQuizUncheckedUpdateManyWithoutQuizInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    passed?: BoolFieldUpdateOperationsInput | boolean
    takenAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionOptionCreateManyQuestionInput = {
    id?: string
    option: string
  }

  export type QuestionAnswerCreateManyQuestionInput = {
    id?: string
    answerId: string
  }

  export type StudentQuizAnswerCreateManyQuestionInput = {
    id?: string
    studentQuizId: string
    optionId: string
  }

  export type QuestionOptionUpdateWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    option?: StringFieldUpdateOperationsInput | string
    questionAnswer?: QuestionAnswerUpdateManyWithoutAnswerNestedInput
    studentQuizAnswers?: StudentQuizAnswerUpdateManyWithoutSelectedOptionNestedInput
  }

  export type QuestionOptionUncheckedUpdateWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    option?: StringFieldUpdateOperationsInput | string
    questionAnswer?: QuestionAnswerUncheckedUpdateManyWithoutAnswerNestedInput
    studentQuizAnswers?: StudentQuizAnswerUncheckedUpdateManyWithoutSelectedOptionNestedInput
  }

  export type QuestionOptionUncheckedUpdateManyWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    option?: StringFieldUpdateOperationsInput | string
  }

  export type QuestionAnswerUpdateWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    answer?: QuestionOptionUpdateOneRequiredWithoutQuestionAnswerNestedInput
  }

  export type QuestionAnswerUncheckedUpdateWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    answerId?: StringFieldUpdateOperationsInput | string
  }

  export type QuestionAnswerUncheckedUpdateManyWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    answerId?: StringFieldUpdateOperationsInput | string
  }

  export type StudentQuizAnswerUpdateWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentQuiz?: StudentQuizUpdateOneRequiredWithoutStudentQuizAnswersNestedInput
    selectedOption?: QuestionOptionUpdateOneRequiredWithoutStudentQuizAnswersNestedInput
  }

  export type StudentQuizAnswerUncheckedUpdateWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentQuizId?: StringFieldUpdateOperationsInput | string
    optionId?: StringFieldUpdateOperationsInput | string
  }

  export type StudentQuizAnswerUncheckedUpdateManyWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentQuizId?: StringFieldUpdateOperationsInput | string
    optionId?: StringFieldUpdateOperationsInput | string
  }

  export type QuestionAnswerCreateManyAnswerInput = {
    id?: string
    questionId: string
  }

  export type StudentQuizAnswerCreateManySelectedOptionInput = {
    id?: string
    studentQuizId: string
    questionId: string
  }

  export type QuestionAnswerUpdateWithoutAnswerInput = {
    id?: StringFieldUpdateOperationsInput | string
    question?: QuestionUpdateOneRequiredWithoutQuestionAnswerNestedInput
  }

  export type QuestionAnswerUncheckedUpdateWithoutAnswerInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
  }

  export type QuestionAnswerUncheckedUpdateManyWithoutAnswerInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
  }

  export type StudentQuizAnswerUpdateWithoutSelectedOptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentQuiz?: StudentQuizUpdateOneRequiredWithoutStudentQuizAnswersNestedInput
    question?: QuestionUpdateOneRequiredWithoutStudentQuizAnswerNestedInput
  }

  export type StudentQuizAnswerUncheckedUpdateWithoutSelectedOptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentQuizId?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
  }

  export type StudentQuizAnswerUncheckedUpdateManyWithoutSelectedOptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentQuizId?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
  }

  export type StudentQuizAnswerCreateManyStudentQuizInput = {
    id?: string
    questionId: string
    optionId: string
  }

  export type StudentQuizAnswerUpdateWithoutStudentQuizInput = {
    id?: StringFieldUpdateOperationsInput | string
    question?: QuestionUpdateOneRequiredWithoutStudentQuizAnswerNestedInput
    selectedOption?: QuestionOptionUpdateOneRequiredWithoutStudentQuizAnswersNestedInput
  }

  export type StudentQuizAnswerUncheckedUpdateWithoutStudentQuizInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    optionId?: StringFieldUpdateOperationsInput | string
  }

  export type StudentQuizAnswerUncheckedUpdateManyWithoutStudentQuizInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    optionId?: StringFieldUpdateOperationsInput | string
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