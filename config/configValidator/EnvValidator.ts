import { ConfigValidator } from './ConfigValidator';

class EnvValidator implements ConfigValidator {
  public validate() {
    const env = process.env;
    if (!env.JWT_TYPE) throw new Error();
  }
}

export default EnvValidator;
