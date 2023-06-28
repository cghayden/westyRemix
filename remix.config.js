/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  serverDependenciesToBundle: ['nanoid'],

  ignoredRouteFiles: ['**/.*'],
  server: process.env.NODE_ENV === 'development' ? undefined : './server.ts',
  serverBuildPath: 'api/index.js',

  //REMIX FUTURE CHANGE: The `serverModuleFormat` config default option will be changing in v2 from `cjs` to `esm`. You can prepare for this change by explicitly specifying `serverModuleFormat: 'cjs'`. For instructions on making this change see https://remix.run/docs/en/v1.16.0/pages/v2#servermoduleformat
  serverModuleFormat: 'cjs',
  tailwind: true,

  // defaults:
  // appDirectory: "app",
  // assetsBuildDirectory: "public/build",
  // publicPath: "/build/",

  future: {
    v2_errorBoundary: true,
    v2_meta: true,
    v2_normalizeFormMethod: true,
    v2_routeConvention: true,
  },
}
