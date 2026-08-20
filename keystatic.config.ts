import { config, singleton, fields } from '@keystatic/core';

const isProd = process.env.NODE_ENV === 'production';

export default config({
  storage: isProd
    ? {
        kind: 'cloud',
      }
    : {
        kind: 'local',
      },
  cloud: {
    project: 'felizekrook/felizekrook',
  },
  singletons: {
    portfolio: singleton({
      label: 'Portfolio List',
      path: 'src/content/portfolio',
      format: { data: 'json' },
      schema: {
        projects: fields.array(
          fields.object({
            id: fields.text({
              label: 'Index / ID',
              validation: { length: { min: 1 } }
            }),
            title: fields.text({ label: 'Title (optional)' }),
            image: fields.image({
              label: 'Project Image',
              directory: 'public/images/projects',
              publicPath: '/images/projects/',
              validation: { isRequired: true }
            }),
          }),
          {
            label: 'Portfolio Projects',
            itemLabel: (node) => {
              const id = node.fields.id.value || '';
              const title = node.fields.title.value || '';
              const image = node.fields.image.value || '';
              const filename = typeof image === 'string' ? image.split('/').pop() : '';
              return `[ID: ${id}] ${title ? `"${title}"` : filename || 'No image chosen'}`;
            },
          }
        ),
      },
    }),
  },
});
