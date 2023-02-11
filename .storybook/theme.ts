import { create } from '@storybook/theming';
import { $scale, $semantic } from '../src/styles/vars';

export const lightTheme = create({
  base: 'light',

  colorPrimary: $semantic.color.primary9,
  colorSecondary: $semantic.color.primary11,

  // UI
  appBg: $semantic.color.loContrast,
  appContentBg: $semantic.color.loContrast,
  appBorderColor: $scale.color.gray7,
  appBorderRadius: 4,

  // Typography
  fontBase: $semantic.typography.fontFamilySans,
  fontCode: 'monospace',

  // Text colors
  textColor: $semantic.color.hiContrast,
  textInverseColor: $semantic.color.loContrast,

  // Toolbar default and active colors
  // barTextColor: $semantic.color.canvas,
  // barSelectedColor: $semantic.color.hiContrast,
  // barBg: $semantic.color.info,

  // Form colors
  // inputBg: $scale.color.white,
  // inputBorder: $scale.color.gray7,
  // inputTextColor: $semantic.color.hiContrast,
  // inputBorderRadius: 4,

  brandTitle: 'Seonest Storybook',
  // brandUrl: 'https://practice-storybook-vite.pages.dev/',
  brandImage: '/storybook-logo.svg',
  // brandTarget: '_self',
});

export const darkTheme = create({
  ...lightTheme,

  base: 'dark',

  colorPrimary: $semantic.color.primaryDark9,
  colorSecondary: $semantic.color.primaryDark11,

  // UI
  appBg: $semantic.color.loContrastDark,
  appContentBg: $semantic.color.loContrastDark,
  appBorderColor: $scale.color.grayDark7,
  appBorderRadius: 4,

  // Text colors
  textColor: $semantic.color.hiContrastDark,
  textInverseColor: $semantic.color.loContrastDark,

  // Toolbar default and active colors
  // barTextColor: $semantic.color.canvas,
  // barSelectedColor: $semantic.color.hiContrast,
  // barBg: $semantic.color.info,

  // Form colors
  // inputBg: $scale.color.white,
  // inputBorder: $scale.color.gray7,
  // inputTextColor: $semantic.color.hiContrast,
  // inputBorderRadius: 4,
});
