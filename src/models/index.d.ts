import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";





type EagerGame = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Game, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly date?: string | null;
  readonly Teams?: (Team | null)[] | null;
  readonly GolfRound9s?: (GolfRound9 | null)[] | null;
  readonly got_cancelled?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyGame = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Game, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly date?: string | null;
  readonly Teams: AsyncCollection<Team>;
  readonly GolfRound9s: AsyncCollection<GolfRound9>;
  readonly got_cancelled?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Game = LazyLoading extends LazyLoadingDisabled ? EagerGame : LazyGame

export declare const Game: (new (init: ModelInit<Game>) => Game) & {
  copyOf(source: Game, mutator: (draft: MutableModel<Game>) => MutableModel<Game> | void): Game;
}

type EagerTeam = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Team, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly team_name?: string | null;
  readonly Players?: (Player | null)[] | null;
  readonly gameID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTeam = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Team, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly team_name?: string | null;
  readonly Players: AsyncCollection<Player>;
  readonly gameID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Team = LazyLoading extends LazyLoadingDisabled ? EagerTeam : LazyTeam

export declare const Team: (new (init: ModelInit<Team>) => Team) & {
  copyOf(source: Team, mutator: (draft: MutableModel<Team>) => MutableModel<Team> | void): Team;
}

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
  readonly is_union?: boolean | null;
  readonly teamID: string;
  readonly Team?: Team | null;
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
  readonly is_union?: boolean | null;
  readonly teamID: string;
  readonly Team: AsyncItem<Team | undefined>;
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
  readonly hole1?: number | null;
  readonly hole2?: number | null;
  readonly hole3?: number | null;
  readonly hole4?: number | null;
  readonly hole5?: number | null;
  readonly hole6?: number | null;
  readonly hole7?: number | null;
  readonly hole8?: number | null;
  readonly hole9?: number | null;
  readonly Player?: Player | null;
  readonly gameID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly golfRound9PlayerId?: string | null;
}

type LazyGolfRound9 = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<GolfRound9, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly hole1?: number | null;
  readonly hole2?: number | null;
  readonly hole3?: number | null;
  readonly hole4?: number | null;
  readonly hole5?: number | null;
  readonly hole6?: number | null;
  readonly hole7?: number | null;
  readonly hole8?: number | null;
  readonly hole9?: number | null;
  readonly Player: AsyncItem<Player | undefined>;
  readonly gameID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly golfRound9PlayerId?: string | null;
}

export declare type GolfRound9 = LazyLoading extends LazyLoadingDisabled ? EagerGolfRound9 : LazyGolfRound9

export declare const GolfRound9: (new (init: ModelInit<GolfRound9>) => GolfRound9) & {
  copyOf(source: GolfRound9, mutator: (draft: MutableModel<GolfRound9>) => MutableModel<GolfRound9> | void): GolfRound9;
}