/**
 * @type {import('@remix-run/dev').AppConfig}
 */
module.exports = {
  serverDependenciesToBundle: ['nanoid'],

  // When running locally in development mode, we use the built in remix
  // server. This does not understand the vercel lambda module format,
  // so we default back to the standard build output.
  //vercel specific
  publicPath: '/build/',
  serverBuildPath: 'api/index.js',
  serverMainFields: ['main', 'module'],
  serverModuleFormat: 'cjs',
  serverPlatform: 'node',
  serverMinify: false,
  // end vercel specific

  server: process.env.NODE_ENV === 'development' ? undefined : './server.js',
  ignoredRouteFiles: ['.*'],
  tailwind: true,
  // appDirectory: "app",
  // assetsBuildDirectory: "public/build",
  // serverBuildPath: "api/index.js",
  // publicPath: "/build/",
  // devServerPort: 8002
  future: {
    v2_errorBoundary: true,
    v2_meta: true,
    v2_normalizeFormMethod: true,

    // unstable_dev: true,
  },
}
