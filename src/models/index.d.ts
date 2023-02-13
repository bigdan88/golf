import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerPlayer = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Player, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly first_name: string;
  readonly middle_name?: string | null;
  readonly last_name: string;
  readonly suffix?: string | null;
  readonly email: string;
  readonly phone?: string | null;
  readonly handicap?: number | null;
  readonly password: string;
  readonly is_admin?: boolean | null;
  readonly bio?: string | null;
  readonly picture?: string | null;
  readonly has_confirmed?: boolean | null;
  readonly plays_mondays?: boolean | null;
  readonly subs_mondays?: boolean | null;
  readonly plays_wednesdays?: boolean | null;
  readonly subs_wednesdays?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPlayer = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Player, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly first_name: string;
  readonly middle_name?: string | null;
  readonly last_name: string;
  readonly suffix?: string | null;
  readonly email: string;
  readonly phone?: string | null;
  readonly handicap?: number | null;
  readonly password: string;
  readonly is_admin?: boolean | null;
  readonly bio?: string | null;
  readonly picture?: string | null;
  readonly has_confirmed?: boolean | null;
  readonly plays_mondays?: boolean | null;
  readonly subs_mondays?: boolean | null;
  readonly plays_wednesdays?: boolean | null;
  readonly subs_wednesdays?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Player = LazyLoading extends LazyLoadingDisabled ? EagerPlayer : LazyPlayer

export declare const Player: (new (init: ModelInit<Player>) => Player) & {
  copyOf(source: Player, mutator: (draft: MutableModel<Player>) => MutableModel<Player> | void): Player;
}

type EagerGolfRound9 = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<GolfRound9, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly date: string;
  readonly hole1?: string | null;
  readonly hole2?: string | null;
  readonly hole3?: string | null;
  readonly hole4?: string | null;
  readonly hole5?: string | null;
  readonly hole6?: string | null;
  readonly hole7?: string | null;
  readonly hole8?: string | null;
  readonly hole9?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyGolfRound9 = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<GolfRound9, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly date: string;
  readonly hole1?: string | null;
  readonly hole2?: string | null;
  readonly hole3?: string | null;
  readonly hole4?: string | null;
  readonly hole5?: string | null;
  readonly hole6?: string | null;
  readonly hole7?: string | null;
  readonly hole8?: string | null;
  readonly hole9?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type GolfRound9 = LazyLoading extends LazyLoadingDisabled ? EagerGolfRound9 : LazyGolfRound9

export declare const GolfRound9: (new (init: ModelInit<GolfRound9>) => GolfRound9) & {
  copyOf(source: GolfRound9, mutator: (draft: MutableModel<GolfRound9>) => MutableModel<GolfRound9> | void): GolfRound9;
}