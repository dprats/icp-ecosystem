import type { Principal } from '@dfinity/principal';
export type Epoch_String = string;
export interface _SERVICE {
  'get_all_canister_stats' : () => Promise<Array<[Epoch_String, bigint]>>,
  'get_all_dfinity_grants_approved_stats' : () => Promise<
      Array<[Epoch_String, bigint]>
    >,
  'get_all_dfinity_grants_submmitted_stats' : () => Promise<
      Array<[Epoch_String, bigint]>
    >,
  'get_all_members_on_forum_stats' : () => Promise<
      Array<[Epoch_String, bigint]>
    >,
  'get_all_motoko_repos_stats' : () => Promise<Array<[Epoch_String, bigint]>>,
  'insert_canister_stats' : (arg_0: Epoch_String, arg_1: bigint) => Promise<
      undefined
    >,
  'insert_dfinity_application_grants_submmitted_stats' : (
      arg_0: Epoch_String,
      arg_1: bigint,
    ) => Promise<undefined>,
  'insert_members_on_forum_stats' : (
      arg_0: Epoch_String,
      arg_1: bigint,
    ) => Promise<undefined>,
  'insert_motoko_repos_stats' : (arg_0: Epoch_String, arg_1: bigint) => Promise<
      undefined
    >,
  'lookup_canister_stats' : (arg_0: Epoch_String) => Promise<[] | [bigint]>,
  'lookup_dfinity_grants_approved_stats' : (arg_0: Epoch_String) => Promise<
      [] | [bigint]
    >,
  'lookup_dfinity_grants_submmitted_stats' : (arg_0: Epoch_String) => Promise<
      [] | [bigint]
    >,
  'lookup_members_on_forum_stats' : (arg_0: Epoch_String) => Promise<
      [] | [bigint]
    >,
  'lookup_motoko_repos_stats' : (arg_0: Epoch_String) => Promise<[] | [bigint]>,
}
