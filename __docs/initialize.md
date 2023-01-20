## vite + storybook init

storybook와 vite를 사용하기 위한 설정입니다.

package manager로 `yarn`을 사용합니다.

## 1. create vite app

```bash
yarn create vite

# [project-name]
# - React
# - TypeScript + SWC
```

## 2. install dependencies

```bash
cd [project-name]
yarn install
```

## 3. init storybook

```bash
npx sb init --builder @storybook/builder-vite
```
