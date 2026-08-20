import { config, collection, fields } from '@keystatic/core';

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
  collections: {
    projects: collection({
      label: 'Projects',
      slugField: 'id',
      path: 'src/content/projects/*',
      format: { data: 'json' },
      schema: {
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
      },
    }),
  },
});
