import { makeGenericAPIRouteHandler } from '@keystatic/core/api/generic';
import { g as getEnv$1, s as setOnSetGetEnv } from '../../../chunks/runtime_1tkDUGik.mjs';
import { config as config$1, collection, fields } from '@keystatic/core';
export { renderers } from '../../../renderers.mjs';

/* eslint-disable @typescript-eslint/no-unused-vars */
// @ts-check

// @ts-expect-error
/** @returns {string} */
// used while generating the virtual module
// biome-ignore lint/correctness/noUnusedFunctionParameters: `key` is used by the generated code
const getEnv = (key) => {
	return getEnv$1(key);
};

const getSecret = (key) => {
	return getEnv(key);
};

setOnSetGetEnv(() => {
	
});

function makeHandler(_config) {
  return async function keystaticAPIRoute(context) {
    var _config$clientId, _config$clientSecret, _config$secret;
    const handler = makeGenericAPIRouteHandler({
      ..._config,
      clientId: (_config$clientId = _config.clientId) !== null && _config$clientId !== void 0 ? _config$clientId : getSecret('KEYSTATIC_GITHUB_CLIENT_ID'),
      clientSecret: (_config$clientSecret = _config.clientSecret) !== null && _config$clientSecret !== void 0 ? _config$clientSecret : getSecret('KEYSTATIC_GITHUB_CLIENT_SECRET'),
      secret: (_config$secret = _config.secret) !== null && _config$secret !== void 0 ? _config$secret : getSecret('KEYSTATIC_SECRET')
    }, {
      slugEnvName: 'PUBLIC_KEYSTATIC_GITHUB_APP_SLUG'
    });
    const {
      body,
      headers,
      status
    } = await handler(context.request);
    return new Response(body, {
      status,
      headers
    });
  };
}

const isProd = process.env.NODE_ENV === "production";
const hasGithubCreds = !!(process.env.KEYSTATIC_GITHUB_CLIENT_ID || process.env.PUBLIC_KEYSTATIC_GITHUB_APP_SLUG || process.env.KEYSTATIC_SECRET);
const config = config$1({
  storage: isProd && hasGithubCreds ? {
    kind: "github",
    repo: {
      owner: "hylln",
      name: "felizekrook"
    }
  } : {
    kind: "local"
  },
  collections: {
    projects: collection({
      label: "Projects",
      slugField: "id",
      path: "src/content/projects/*",
      format: { data: "json" },
      schema: {
        id: fields.text({
          label: "Index / ID",
          validation: { length: { min: 1 } }
        }),
        title: fields.text({ label: "Title (optional)" }),
        image: fields.image({
          label: "Project Image",
          directory: "public/images/projects",
          publicPath: "/images/projects/",
          validation: { isRequired: true }
        })
      }
    })
  }
});

const all = makeHandler({ config });
const ALL = all;

const prerender = false;

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	ALL,
	all,
	prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
