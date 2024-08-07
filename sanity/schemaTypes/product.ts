import { defineType } from 'sanity';

export const productType = defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'price',
      title: 'Price',
      type: 'string',
      validation: (Rule) => Rule.required().min(0),
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Freestanding Tub', value: 'freestanding-tub' },
          { title: 'Aclove Tub', value: 'aclove-tub' },
          { title: 'Clawfoot Tub', value: 'clawfoot-tub' },
          { title: 'Drop In Tub', value: 'dropin-tub' },
          { title: 'Jetted Tub', value: 'jetted-tub' },
        ],
      },
      validation: (Rule) => Rule.required(),
    },
  ],
});
