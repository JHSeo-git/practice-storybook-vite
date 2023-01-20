## tailwindcss

> - https://storybook.js.org/recipes/tailwindcss
> - https://github.com/Integrayshaun/storybook-tailwind-recipe-example

storybook에서 tailwindcss을 사용하기 위한 설정입니다.

## 1. tailwind postcss autoprefixer 설치

```bash
yarn add -D tailwindcss postcss autoprefixer
```

## 2. tailwind init

```bash
yarn tailwindcss init --postcss
```

## 3. tailwind.config.js

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: ['class'],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

## 4. dev, build 설정

storybook의 staticFolder를 public으로 설정한다는 가정하에 아래 코드를 사용하시면 됩니다.

```json
{
  "scripts": {
    "build:tw": "tailwindcss -i ./src/styles/tailwind.css -o ./public/tailwind.css",
    "dev:tw": "tailwindcss -i ./src/styles/tailwind.css -o ./public/tailwind.css -w"
  }
}
```

## 5. storybook 설정

storybook에 build된 tailwindcss를 `<link>`로 추가해줍니다.

그 전에 storybook의 staticFolder를 public으로 설정해줍니다.

**main.js**

```js
module.exports = {
  ...
  staticFolder: 'public',
};
```

> public 폴더가 아닌 다른 폴더를 사용해도 무방합니다.

그 후 빌드된 tailwind.css path를 `<link>`로 추가해줍니다.

**preview-head.html**

```html
<link rel="stylesheet" href="tailwind.css" />
```
