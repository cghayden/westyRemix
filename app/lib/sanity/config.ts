interface ClientConfig {
  apiVersion: string;
  dataset: string;
  projectId: string;
  useCdn: boolean;
}

// // _probably_ a way to actually pull these from the getEnv.ts file
// type EnvKey = 'NODE_ENV' | 'SANITY_DATASET' | 'SANITY_PROJECT_ID'

// function getEnvByKey(key: EnvKey) {
//   return typeof window === 'undefined' ? process.env[key] : window?.ENV[key]
// }

export const config: ClientConfig = {
  apiVersion: '2021-03-25',
  dataset: 'production',
  projectId: 't9guxb1x',
  useCdn: false,
};
