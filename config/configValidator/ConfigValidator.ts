interface ConfigValidator {
  validate: () => void;
}

class ConfigValidatorImpl implements ConfigValidator {
  private chain: Array<ConfigValidator> = [];

  public ConfigValidatorImpl() {}

  public validate() {
    for (const c of this.chain) {
      c.validate();
    }
  }

  public add(configValidator: ConfigValidator) {
    this.chain.push(configValidator);
  }
}

export default ConfigValidatorImpl;
export { ConfigValidator };
