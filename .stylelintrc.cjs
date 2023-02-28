module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recommended',
    'stylelint-config-prettier',
  ],
  rules: {
    'at-rule-no-unknown': null,
    'function-no-unknown': null,
    'no-descending-specificity': null,
    'selector-class-pattern': '^([A-z][A-z0-9]*)((-|--)[A-z0-9]+)*$',
  },
};
