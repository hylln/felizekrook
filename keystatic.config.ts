import { config, collection, fields } from '@keystatic/core';

export default config({
  storage: {
    kind: 'local',
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
