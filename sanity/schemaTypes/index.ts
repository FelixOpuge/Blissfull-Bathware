import { type SchemaTypeDefinition } from 'sanity'
import { eventType } from './eventType'
import { productType } from './product'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    productType
  ],
}
