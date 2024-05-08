import { ConfigValidator } from './ConfigValidator';

class DbValidator implements ConfigValidator {
  public validate() {
    const env = process.env;
    if (!env.DB_PASSWD) {
      throw new Error('there is no DB_PASSWD)');
    }
    if (!env.DB_USER) {
      throw new Error('there is no DB_USER');
    }
    if (!env.DB_HOST) {
      throw new Error('there is no DB_HOST');
    }
  }
}

export default DbValidator;
