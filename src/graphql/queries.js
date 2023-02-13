/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPlayer = /* GraphQL */ `
  query GetPlayer($id: ID!) {
    getPlayer(id: $id) {
      id
      first_name
      middle_name
      last_name
      suffix
      email
      phone
      handicap
      password
      is_admin
      bio
      picture
      has_confirmed
      plays_mondays
      subs_mondays
      plays_wednesdays
      subs_wednesdays
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listPlayers = /* GraphQL */ `
  query ListPlayers(
    $filter: ModelPlayerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPlayers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        first_name
        middle_name
        last_name
        suffix
        email
        phone
        handicap
        password
        is_admin
        bio
        picture
        has_confirmed
        plays_mondays
        subs_mondays
        plays_wednesdays
        subs_wednesdays
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncPlayers = /* GraphQL */ `
  query SyncPlayers(
    $filter: ModelPlayerFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPlayers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        first_name
        middle_name
        last_name
        suffix
        email
        phone
        handicap
        password
        is_admin
        bio
        picture
        has_confirmed
        plays_mondays
        subs_mondays
        plays_wednesdays
        subs_wednesdays
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getGolfRound9 = /* GraphQL */ `
  query GetGolfRound9($id: ID!) {
    getGolfRound9(id: $id) {
      id
      date
      hole1
      hole2
      hole3
      hole4
      hole5
      hole6
      hole7
      hole8
      hole9
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listGolfRound9s = /* GraphQL */ `
  query ListGolfRound9s(
    $filter: ModelGolfRound9FilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGolfRound9s(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        date
        hole1
        hole2
        hole3
        hole4
        hole5
        hole6
        hole7
        hole8
        hole9
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncGolfRound9s = /* GraphQL */ `
  query SyncGolfRound9s(
    $filter: ModelGolfRound9FilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncGolfRound9s(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        date
        hole1
        hole2
        hole3
        hole4
        hole5
        hole6
        hole7
        hole8
        hole9
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
