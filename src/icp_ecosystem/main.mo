import Map "mo:base/HashMap";
import Text "mo:base/Text";
import Nat "mo:base/Nat";
import Iter "mo:base/Iter";
 

actor { 

  //1. Store of Data

  type Epoch_String = Text;


  //1.1. Instantiate some data stores in the form of hashmaps
//   let stats = Map.HashMap<Epoch_String, Entry>(0, Text.equal, Text.hash);
  let canister_stats = Map.HashMap<Epoch_String, Nat>(0, Text.equal, Text.hash);
  let motoko_repos_stats = Map.HashMap<Epoch_String, Nat>(0, Text.equal, Text.hash);
  let members_on_forum_stats = Map.HashMap<Epoch_String, Nat>(0, Text.equal, Text.hash);
  let dfinity_application_grants_submmitted_stats = Map.HashMap<Epoch_String, Nat>(0, Text.equal, Text.hash); 
  let dfinity_application_grants_approved_stats = Map.HashMap<Epoch_String, Nat>(0, Text.equal, Text.hash); 


 //1.2 Seed Data with a few starting dates

 canister_stats.put("1623715201", 331); // June 15, 2021 12:01 AM
 canister_stats.put("1624320060", 841); // June 22, 2021 12:01 AM
 canister_stats.put("1624924860", 924); // June 29, 2021 12:01 AM
 canister_stats.put("1625529601", 1036); // July 6, 2021 12:01 AM
 canister_stats.put("1626134401", 1173); // July 13, 2021 12:01 AM
 canister_stats.put("1626739201", 1416); // July 20, 2021 12:01 AM
 canister_stats.put("1627344060", 1909); // July 27, 2021 12:01 AM


 motoko_repos_stats.put("1623715201", 220); // June 15, 2021 12:01 AM
 motoko_repos_stats.put("1624320060", 247); // June 22, 2021 12:01 AM
 motoko_repos_stats.put("1624924860", 258); // June 29, 2021 12:01 AM
 motoko_repos_stats.put("1625529601", 260); // July 6, 2021 12:01 AM
 motoko_repos_stats.put("1626134401", 271); // July 13, 2021 12:01 AM
 motoko_repos_stats.put("1626739201", 282); // July 20, 2021 12:01 AM
 motoko_repos_stats.put("1627344060", 279); // July 27, 2021 12:01 AM


 members_on_forum_stats.put("1623715201", 2640); // June 15, 2021 12:01 AM
 members_on_forum_stats.put("1624320060", 2685); // June 22, 2021 12:01 AM
 members_on_forum_stats.put("1624924860", 2741); // June 29, 2021 12:01 AM
 members_on_forum_stats.put("1625529601", 2751); // July 6, 2021 12:01 AM
 members_on_forum_stats.put("1626134401", 2835); // July 13, 2021 12:01 AM
 members_on_forum_stats.put("1626739201", 2877); // July 20, 2021 12:01 AM
 members_on_forum_stats.put("1627344060", 2933); // July 27, 2021 12:01 AM


 dfinity_application_grants_submmitted_stats.put("1623715201", 144); // June 15, 2021 12:01 AM
 dfinity_application_grants_submmitted_stats.put("1624320060", 144); // June 22, 2021 12:01 AM
 dfinity_application_grants_submmitted_stats.put("1624924860", 175); // June 29, 2021 12:01 AM
 dfinity_application_grants_submmitted_stats.put("1625529601", 187); // July 6, 2021 12:01 AM
 dfinity_application_grants_submmitted_stats.put("1626134401", 197); // July 13, 2021 12:01 AM
 dfinity_application_grants_submmitted_stats.put("1626739201", 207); // July 20, 2021 12:01 AM
 dfinity_application_grants_submmitted_stats.put("1627344060", 216); // July 27, 2021 12:01 AM

 dfinity_application_grants_submmitted_stats.put("1625529601", 10); // July 6, 2021 12:01 AM
 dfinity_application_grants_submmitted_stats.put("1626134401", 20); // July 13, 2021 12:01 AM
 dfinity_application_grants_submmitted_stats.put("1626739201", 30); // July 20, 2021 12:01 AM
 dfinity_application_grants_approved_stats.put("1627344060", 52); // July 27, 2021 12:01 AM


  //2. Methods

  //2.1 return an array of all the data by type of stats
  public query func get_all_canister_stats(): async [(Epoch_String,Nat)] {
      Iter.toArray(canister_stats.entries());
  };

   public query func get_all_motoko_repos_stats(): async [(Epoch_String,Nat)] {
      Iter.toArray(motoko_repos_stats.entries());
  };

   public query func get_all_members_on_forum_stats(): async [(Epoch_String,Nat)] {
      Iter.toArray(members_on_forum_stats.entries());
  };

   public query func get_all_dfinity_grants_submmitted_stats(): async [(Epoch_String,Nat)] {
      Iter.toArray(dfinity_application_grants_submmitted_stats.entries());
  };

   public query func get_all_dfinity_grants_approved_stats(): async [(Epoch_String,Nat)] {
      Iter.toArray(dfinity_application_grants_approved_stats.entries());
  };


  //2.2 Insert data into the stats store

 public func insert_canister_stats(epoch: Epoch_String, num_of_canisters: Nat) : async (){      
      canister_stats.put(epoch, num_of_canisters);
  };
   public func insert_motoko_repos_stats(epoch: Epoch_String, num_of_repos: Nat) : async (){      
      motoko_repos_stats.put(epoch, num_of_repos);
  };
   public func insert_members_on_forum_stats(epoch: Epoch_String, num_of_members: Nat) : async (){      
      members_on_forum_stats.put(epoch, num_of_members);
  };
   public func insert_dfinity_application_grants_submmitted_stats(epoch: Epoch_String, num_of_grants: Nat) : async (){      
      dfinity_application_grants_submmitted_stats.put(epoch, num_of_grants);
  };


  //2.3 Query a particular hashmap by key
  public query func lookup_canister_stats(epoch: Epoch_String): async ?Nat {
      canister_stats.get(epoch);
  };

  public query func lookup_motoko_repos_stats(epoch: Epoch_String): async ?Nat {
      motoko_repos_stats.get(epoch);
  };

  public query func lookup_members_on_forum_stats(epoch: Epoch_String): async ?Nat {
      members_on_forum_stats.get(epoch);
  };

  public query func lookup_dfinity_grants_submmitted_stats(epoch: Epoch_String): async ?Nat {
      dfinity_application_grants_submmitted_stats.get(epoch);
  };

 public query func lookup_dfinity_grants_approved_stats(epoch: Epoch_String): async ?Nat {
      dfinity_application_grants_submmitted_stats.get(epoch);
  };


}
