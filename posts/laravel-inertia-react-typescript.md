---
title: "Creating a Laravel Application with Inertia, React and Typescript"
date: 2021-01-02
description: Bootstrap a new Laravel application with Inertia, React and Typescript.
---

References:

- [Laravel 8.x](https://laravel.com/docs/8.x/installation)
- [Inertia Server (Laravel)](https://inertiajs.com/server-side-setup)
- [Inertia Client (React)](https://inertiajs.com/client-side-setup)

---

Create a Inertia Route in `routes/web.php`

```php
use Inertia\Inertia;

Route::get('/', fn() => Inertia::render('Home'));
```

Install `laravel/ui` to swap to React presets

```bash
composer require laravel/ui

php artisan ui react
```

Update `webpack.mix.js` to compile typescript

```js
const mix = require("laravel-mix");

mix.ts("resources/js/app.tsx", "public/js");
```

Install react @types and typescript

```bash
npm i -D @types/react @types/react-dom ts-loader typescript
```

Generate `tsconfig.json` and choose `react` preset

```
npx tsconfig.json
```

Modify `tsconfig.json`

```diff
+ "allowSyntheticDefaultImports": true
+ "outDir": "public"
- "rootDir": "src"
```

Update `app.js` to `app.tsx` and add Inertia boilerplate

```tsx
import { InertiaApp } from "@inertiajs/inertia-react";
import React from "react";
import { render } from "react-dom";

const app = document.getElementById("app");

render(
  <InertiaApp
    initialPage={JSON.parse(app!.dataset.page!)}
    resolveComponent={(name) =>
      import(`./Pages/${name}`).then((module) => module.default)
    }
  />,
  app
);
```

Create initial page in `Pages` directory `Home.tsx`

```tsx
import React from "react";

export default function Home() {
  return <div>Home.</div>;
}
```

Compile assets

```bash
npm run dev
```
