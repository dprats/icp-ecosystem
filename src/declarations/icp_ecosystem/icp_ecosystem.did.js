export const idlFactory = ({ IDL }) => {
  const Epoch_String = IDL.Text;
  return IDL.Service({
    'get_all_canister_stats' : IDL.Func(
        [],
        [IDL.Vec(IDL.Tuple(Epoch_String, IDL.Nat))],
        ['query'],
      ),
    'get_all_dfinity_grants_approved_stats' : IDL.Func(
        [],
        [IDL.Vec(IDL.Tuple(Epoch_String, IDL.Nat))],
        ['query'],
      ),
    'get_all_dfinity_grants_submmitted_stats' : IDL.Func(
        [],
        [IDL.Vec(IDL.Tuple(Epoch_String, IDL.Nat))],
        ['query'],
      ),
    'get_all_members_on_forum_stats' : IDL.Func(
        [],
        [IDL.Vec(IDL.Tuple(Epoch_String, IDL.Nat))],
        ['query'],
      ),
    'get_all_motoko_repos_stats' : IDL.Func(
        [],
        [IDL.Vec(IDL.Tuple(Epoch_String, IDL.Nat))],
        ['query'],
      ),
    'insert_canister_stats' : IDL.Func([Epoch_String, IDL.Nat], [], []),
    'insert_dfinity_application_grants_submmitted_stats' : IDL.Func(
        [Epoch_String, IDL.Nat],
        [],
        [],
      ),
    'insert_members_on_forum_stats' : IDL.Func([Epoch_String, IDL.Nat], [], []),
    'insert_motoko_repos_stats' : IDL.Func([Epoch_String, IDL.Nat], [], []),
    'lookup_canister_stats' : IDL.Func(
        [Epoch_String],
        [IDL.Opt(IDL.Nat)],
        ['query'],
      ),
    'lookup_dfinity_grants_approved_stats' : IDL.Func(
        [Epoch_String],
        [IDL.Opt(IDL.Nat)],
        ['query'],
      ),
    'lookup_dfinity_grants_submmitted_stats' : IDL.Func(
        [Epoch_String],
        [IDL.Opt(IDL.Nat)],
        ['query'],
      ),
    'lookup_members_on_forum_stats' : IDL.Func(
        [Epoch_String],
        [IDL.Opt(IDL.Nat)],
        ['query'],
      ),
    'lookup_motoko_repos_stats' : IDL.Func(
        [Epoch_String],
        [IDL.Opt(IDL.Nat)],
        ['query'],
      ),
  });
};
export const init = ({ IDL }) => { return []; };
