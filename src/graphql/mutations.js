/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPlayer = /* GraphQL */ `
  mutation CreatePlayer(
    $input: CreatePlayerInput!
    $condition: ModelPlayerConditionInput
  ) {
    createPlayer(input: $input, condition: $condition) {
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
export const updatePlayer = /* GraphQL */ `
  mutation UpdatePlayer(
    $input: UpdatePlayerInput!
    $condition: ModelPlayerConditionInput
  ) {
    updatePlayer(input: $input, condition: $condition) {
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
export const deletePlayer = /* GraphQL */ `
  mutation DeletePlayer(
    $input: DeletePlayerInput!
    $condition: ModelPlayerConditionInput
  ) {
    deletePlayer(input: $input, condition: $condition) {
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
export const createGolfRound9 = /* GraphQL */ `
  mutation CreateGolfRound9(
    $input: CreateGolfRound9Input!
    $condition: ModelGolfRound9ConditionInput
  ) {
    createGolfRound9(input: $input, condition: $condition) {
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
export const updateGolfRound9 = /* GraphQL */ `
  mutation UpdateGolfRound9(
    $input: UpdateGolfRound9Input!
    $condition: ModelGolfRound9ConditionInput
  ) {
    updateGolfRound9(input: $input, condition: $condition) {
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
export const deleteGolfRound9 = /* GraphQL */ `
  mutation DeleteGolfRound9(
    $input: DeleteGolfRound9Input!
    $condition: ModelGolfRound9ConditionInput
  ) {
    deleteGolfRound9(input: $input, condition: $condition) {
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
