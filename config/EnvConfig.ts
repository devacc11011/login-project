import { configDotenv } from 'dotenv';
import { ENV_CONFIG } from './AppConfig.js';
const toConfigureEnvs = ENV_CONFIG.LIST;
const PROFILE = process.env.PROFILE;

function configure() {
  let envPostFix = 'dev';
  console.debug('Configure Start...');
  if (PROFILE === 'prod') {
    envPostFix = 'prod';
  } else if (PROFILE === 'dev') {
    envPostFix = 'dev';
  } else {
    console.log('Env Profile is unknown or undifine, Profile not configured');
  }
  console.log(`Env Profile = ${envPostFix}, Registered Env = ${toConfigureEnvs}`);

  configEnv(envPostFix, toConfigureEnvs);
}

function configEnv(envPostFix: string, envs: Readonly<Array<string>>) {
  for (const env of envs) {
    configDotenv({ path: `.env.${env}.${envPostFix}` });
  }
}

export default configure;
