import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export enum Practice {
  Te = 'TE',
  Da = 'DA',
  Dl = 'DL',
  Bas = 'BAS',
  Ac = 'AC'
}

export enum Title {
  An = 'AN',
  Co = 'CO',
  Sa = 'SA',
  Cm = 'CM',
  Pc = 'PC',
  Sp = 'SP',
  Pal = 'PAL',
  Pad = 'PAD',
  Md = 'MD',
  Gm = 'GM'
}

export type Name = {
  __typename?: 'Name';
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
};

export type NameInput = {
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
};

export type Employee = {
  __typename?: 'Employee';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Name>;
  title: Title;
  email: Scalars['String'];
  practice: Practice;
};

export type CreateEmployeeInput = {
  name?: Maybe<NameInput>;
  employerName?: Maybe<Scalars['String']>;
  title?: Maybe<Title>;
  email?: Maybe<Scalars['String']>;
  practice?: Maybe<Practice>;
};

export type DeleteEmployeeInput = {
  id?: Maybe<Scalars['String']>;
};

export type UpdateEmployeeInput = {
  id?: Maybe<Scalars['String']>;
  name?: Maybe<NameInput>;
  employerName?: Maybe<Scalars['String']>;
  title?: Maybe<Title>;
  email?: Maybe<Scalars['String']>;
  practice?: Maybe<Practice>;
};

export type DeleteEmployeePayload = {
  __typename?: 'DeleteEmployeePayload';
  success: Scalars['Boolean'];
};

export type CreateEmployeePayload = {
  __typename?: 'CreateEmployeePayload';
  url?: Maybe<Scalars['String']>;
};

export type UpdateEmployeePayload = {
  __typename?: 'UpdateEmployeePayload';
  url?: Maybe<Scalars['String']>;
};

/** GraphQL operations that mutate/write data. */
export type Mutation = {
  __typename?: 'Mutation';
  /** Create employee with request body */
  createEmployee?: Maybe<CreateEmployeePayload>;
  /** Delete employee with employee id */
  deleteEmployee?: Maybe<DeleteEmployeePayload>;
  /** Update employee with employee id */
  updateEmployee?: Maybe<UpdateEmployeePayload>;
};


/** GraphQL operations that mutate/write data. */
export type MutationCreateEmployeeArgs = {
  input: CreateEmployeeInput;
};


/** GraphQL operations that mutate/write data. */
export type MutationDeleteEmployeeArgs = {
  input: DeleteEmployeeInput;
};


/** GraphQL operations that mutate/write data. */
export type MutationUpdateEmployeeArgs = {
  input: UpdateEmployeeInput;
};

/** GraphQL operations that query/read data. */
export type Query = {
  __typename?: 'Query';
  /** Retrieve employee by id */
  employee?: Maybe<Employee>;
  /** Retrieve all employees */
  employees?: Maybe<Array<Maybe<Employee>>>;
};


/** GraphQL operations that query/read data. */
export type QueryEmployeeArgs = {
  id?: Maybe<Scalars['String']>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Practice: Practice;
  Title: Title;
  Name: ResolverTypeWrapper<Name>;
  String: ResolverTypeWrapper<Scalars['String']>;
  NameInput: NameInput;
  Employee: ResolverTypeWrapper<Employee>;
  CreateEmployeeInput: CreateEmployeeInput;
  DeleteEmployeeInput: DeleteEmployeeInput;
  UpdateEmployeeInput: UpdateEmployeeInput;
  DeleteEmployeePayload: ResolverTypeWrapper<DeleteEmployeePayload>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  CreateEmployeePayload: ResolverTypeWrapper<CreateEmployeePayload>;
  UpdateEmployeePayload: ResolverTypeWrapper<UpdateEmployeePayload>;
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Name: Name;
  String: Scalars['String'];
  NameInput: NameInput;
  Employee: Employee;
  CreateEmployeeInput: CreateEmployeeInput;
  DeleteEmployeeInput: DeleteEmployeeInput;
  UpdateEmployeeInput: UpdateEmployeeInput;
  DeleteEmployeePayload: DeleteEmployeePayload;
  Boolean: Scalars['Boolean'];
  CreateEmployeePayload: CreateEmployeePayload;
  UpdateEmployeePayload: UpdateEmployeePayload;
  Mutation: {};
  Query: {};
};

export type NameResolvers<ContextType = any, ParentType extends ResolversParentTypes['Name'] = ResolversParentTypes['Name']> = {
  firstName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lastName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EmployeeResolvers<ContextType = any, ParentType extends ResolversParentTypes['Employee'] = ResolversParentTypes['Employee']> = {
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['Name']>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['Title'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  practice?: Resolver<ResolversTypes['Practice'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeleteEmployeePayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['DeleteEmployeePayload'] = ResolversParentTypes['DeleteEmployeePayload']> = {
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateEmployeePayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateEmployeePayload'] = ResolversParentTypes['CreateEmployeePayload']> = {
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateEmployeePayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateEmployeePayload'] = ResolversParentTypes['UpdateEmployeePayload']> = {
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createEmployee?: Resolver<Maybe<ResolversTypes['CreateEmployeePayload']>, ParentType, ContextType, RequireFields<MutationCreateEmployeeArgs, 'input'>>;
  deleteEmployee?: Resolver<Maybe<ResolversTypes['DeleteEmployeePayload']>, ParentType, ContextType, RequireFields<MutationDeleteEmployeeArgs, 'input'>>;
  updateEmployee?: Resolver<Maybe<ResolversTypes['UpdateEmployeePayload']>, ParentType, ContextType, RequireFields<MutationUpdateEmployeeArgs, 'input'>>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  employee?: Resolver<Maybe<ResolversTypes['Employee']>, ParentType, ContextType, RequireFields<QueryEmployeeArgs, never>>;
  employees?: Resolver<Maybe<Array<Maybe<ResolversTypes['Employee']>>>, ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Name?: NameResolvers<ContextType>;
  Employee?: EmployeeResolvers<ContextType>;
  DeleteEmployeePayload?: DeleteEmployeePayloadResolvers<ContextType>;
  CreateEmployeePayload?: CreateEmployeePayloadResolvers<ContextType>;
  UpdateEmployeePayload?: UpdateEmployeePayloadResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
