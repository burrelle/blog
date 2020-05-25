---
title: 'Using PostCSS with Magento PWA Studio'
date: 2020-05-04
description: Update your Magento PWA build process to include PostCSS and start using CSS Next features today.
---

This guide assumes that you have Magento PWA studio or a standalone Magento PWA setup.

- [PWA Studio](https://magento.github.io/pwa-studio/venia-pwa-concept/setup/)
- [Standalone PWA Studio](https://magento.github.io/pwa-studio/pwa-buildpack/scaffolding/)

---

1. Install [PostCSS Loader](https://github.com/postcss/postcss-loader)

With npm:

```shell
npm i -D postcss-loader
```

With yarn:

```shell
yarn add -D postcss-loader
```

2. Update `webpack.config.js`

Since there is a rule for CSS that exists we want to append
the PostCSS loader to the first rule in `pwa-buildpack/lib/Utilities/getClientConfig.js`

```js
module.exports = async env => {
  // Existing configuration
  clientConfig.module.rules
    .find(rule => rule.test.toString() === '/\\.css$/')
    .oneOf[0].use.push('postcss-loader');

  return [clientConfig, serviceWorkerConfig];
};
```

3. Install [PostCSS Preset Env](https://github.com/csstools/postcss-preset-env)

With npm:

```shell
npm i -D postcss-preset-env

```

With yarn:

```shell
yarn add -D postcss-preset-env
```

4. Add `postcss.config.js`

```js
const postcssPresetEnv = require('postcss-preset-env');

module.exports = {
  plugins: [postcssPresetEnv(/* pluginOptions */)]
};
```
