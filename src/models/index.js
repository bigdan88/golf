// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Player, GolfRound9 } = initSchema(schema);

export {
  Player,
  GolfRound9
};