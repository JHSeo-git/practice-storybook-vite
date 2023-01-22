## stylesheet

> - [디자인 토큰 - daangn/seed-design](https://github.com/daangn/seed-design/blob/main/packages/design-token/README.md)

`vars`는 스타일시트를 정의합니다.

> **Warning**
> 디자인 토큰은 컴포넌트 프로젝트 내부에서 관리하기보단 별도의 프로젝트로 관리하는 것이 좋습니다.  
> 모듈 시스템 상관없이 사용할 수 있게 번들링 과정을 거친다던지,  
> 필요한 토큰만 export할 수 있게 해주는 등의 이점이 있습니다.  
> 또한 역할을 분리하여 컴포넌트 프로젝트에서 디자인 토큰을 외부 종속성을 받아 사용하는 것이 좋을 것 같습니다.

## contrast

> - [Contrast guide](https://usecontrast.com/guide)

contrast ratio를 계산하여 적절한 색상을 선택합니다.

- [contrast ratio](https://www.w3.org/TR/WCAG20/#contrast-ratiodef) = (L1 + 0.05) / (L2 + 0.05)
- [L1](https://www.w3.org/TR/WCAG20/#relativeluminancedef): 밝은 색의 상대적인 휘도(luminance)
- [L2](https://www.w3.org/TR/WCAG20/#relativeluminancedef): 어두운 색의 상대적인 휘도(luminance)

| Label    | Description                                                                                                                                 |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| Fail     | (1.5) 어떠한 텍스트에도 사용하지 마세요. 로고, 그래픽 요소, Subtle border, divider, disabled 버튼에 대해서는 괜찮은 선택일 수도 있습니다.   |
| AA Large | (3.0) 18px bold, 21px regular(또는 그 이상 크기)에만 사용하세요. 인터페이스 아이콘, Primary CTA(Call To Action)에 대해서는 좋은 선택입니다. |
| AA       | (4.5) 디자인 전반에 걸쳐 모든 텍스트에 대해 사용하기에 안전합니다.                                                                          |
| AAA      | (7.0) 향상된 contrast이며 읽는데 상당한 시간이 걸리는 긴 형식에 대해서 사용하는 것이 권장됩니다.                                            |

### figma plugin

- [Contrast](https://www.figma.com/community/plugin/911262488575486588/Contrast)
- [USe-Contrast](https://www.figma.com/community/plugin/1149686177449921115/Use-Contrast)

## varsㅊ

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
const vars = require('[design token depended project]');
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
import vars from '[design token depended project]';

export const Button = () => {
  return <button className="bg-primary-100 text-primary-500">...</button>;
};
```

## examples (styled-components)

```jsx
// Button.jsx
import vars from '[design token depended project]';
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
import vars from '[design token depended project]';
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
import vars from '[design token depended project]';

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
