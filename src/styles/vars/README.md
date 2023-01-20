## stylesheet

> - [디자인 토큰 - daangn/seed-design](https://github.com/daangn/seed-design/blob/main/packages/design-token/README.md)

이 파일은 스타일시트의 변수를 정의합니다.

> **Warning**
> 디자인 토큰은 컴포넌트 프로젝트 내부에서 관리하기보단 별도의 프로젝트로 관리하는 것이 좋습니다.  
> 역할을 분리하여 컴포넌트 프로젝트에서 디자인 토큰을 외부 종속성을 받아 사용하는 것이 좋을 것 같습니다.

## vars

color, typography, spacing, 등등 design-token으로 사용할 css 변수를 정의합니다.

- scale: 스케일 토큰을 정의합니다. raw values를 별도로 관리하지 않고 scale과 함께 정의합니다.
- semantic: 시멘틱 토큰을 정의합니다. 시멘틱 토큰은 scale을 사용하여 정의합니다.

### scale

```ts
// vars/scale/color.ts
export const gray1 = '#fcfcfc';
export const gray2 = '#f8f8f8';
...
```

### semantic

```ts
// vars/semantic/color.ts
import { $scale } from '@vars';

export const loContrast = $scale.color.white;
export const hiContrast = $scale.color.gray12;
...
```

## examples (tailwindcss)

tailwind.config.js 에서 theme을 활용하여 사용하는 방법입니다.

```js
const {vars} = require('[design token depended project]');
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          50: vars.$semantic.color.primary50,
          100: vars.$semantic.color.primary100,
          ...
        },
      },
    },
  },
};
```

```jsx
// Button.jsx
import { vars } from '[design token depended project]';

export const Button = () => {
  return <button className="bg-primary-100 text-primary-500">...</button>;
};
```

## examples (styled-components)

```jsx
// Button.jsx
import { vars } from '[design token depended project]';
import styled from 'styled-components';

export const Button = () => {
  return <StyledButton>...</StyledButton>;
};

const StyledButton = styled.button`
  background-color: ${vars.$semantic.color.primary100};
  color: ${vars.$semantic.color.primary500};
`;
```

## examples (stitches)

```js
// stitches.config.js
import { vars } from '[design token depended project]';
import { createStitches } from "@stitches/react";

export const { styled, css, globalCss, theme } = createStitches({
   theme: {
      colors: {
        primary: {
          50: vars.$semantic.color.primary50,
          100: vars.$semantic.color.primary100,
          ...
        },
      },
   }
});
```

```jsx
// Button.jsx
import { styled } from '@/stitches.config.js';

export const Button = () => {
  return <StyledButton>...</StyledButton>;
};

const StyledButton = styled('button', {
  backgroundColor: '$primary100',
  color: '$primary500',

  variants: {
    secondary: {
      true: {
        backgroundColor: '$secondary100',
        color: '$secondary500',
      },
    },
  },
});
```

## examples (inline)

```jsx
// Button.jsx
import { vars } from '[design token depended project]';

export const Button = () => {
  return (
    <button
      style={{
        backgroundColor: vars.$semantic.color.primary100,
        color: vars.$semantic.color.primary500,
      }}
    >
      ...
    </button>
  );
};
```
