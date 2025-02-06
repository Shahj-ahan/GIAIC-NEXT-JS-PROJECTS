import { type SchemaTypeDefinition } from 'sanity'
// import product from '../product';
import chefs from './chefs';
import food from './food';



export const schema: { types: SchemaTypeDefinition[] } = {
  types: [food , chefs],
}
