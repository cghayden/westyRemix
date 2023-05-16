/**
 * @type {import('@remix-run/dev').AppConfig}
 */
module.exports = {
  // project specific dependency
  serverDependenciesToBundle: ['nanoid'],

  ignoredRouteFiles: ['**/.*'],

  // When running locally in development mode, we use the built in remix server. This does not understand the vercel lambda module format, so we default back to the standard build output.
  server: process.env.NODE_ENV === 'development' ? undefined : './server.js',

  tailwind: true,
  future: {
    v2_errorBoundary: true,
    v2_meta: true,
    v2_normalizeFormMethod: true,
    v2_routeConvention: true,
    unstable_dev: true,
  },
  // default values:
  // serverMainFields: ['main', 'module'],
  // serverModuleFormat: 'cjs',
  // commented out = default value
  // serverPlatform: 'node',
  // serverMinify: false,
  // appDirectory: "app",
  // assetsBuildDirectory: "public/build",
  // serverBuildPath: "api/index.js",
  // publicPath: "/build/",
  // devServerPort: 8002
}
