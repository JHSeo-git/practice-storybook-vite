const { fontFamily } = require('tailwindcss/defaultTheme');
const vars = require('./tailwindcss-vars');

/** @type {import('tailwindcss').Config} */
module.exports = {
  future: {
    hoverOnlyWhenSupported: true,
  },
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: ['class'],
  theme: {
    extend: {
      fontFamily: {
        sans: [vars.$semantic.typography.fontFamilySans, ...fontFamily.sans],
      },
      fontSize: {
        h1: [
          vars.$semantic.typography.h1.fontSize,
          {
            lineHeight: vars.$semantic.typography.h1.lineHeight,
            fontWeight: vars.$semantic.typography.h1.fontWeight,
          },
        ],
        h2: [
          vars.$semantic.typography.h2.fontSize,
          {
            lineHeight: vars.$semantic.typography.h2.lineHeight,
            fontWeight: vars.$semantic.typography.h2.fontWeight,
          },
        ],
        h3: [
          vars.$semantic.typography.h3.fontSize,
          {
            lineHeight: vars.$semantic.typography.h3.lineHeight,
            fontWeight: vars.$semantic.typography.h3.fontWeight,
          },
        ],
        h4: [
          vars.$semantic.typography.h4.fontSize,
          {
            lineHeight: vars.$semantic.typography.h4.lineHeight,
            fontWeight: vars.$semantic.typography.h4.fontWeight,
          },
        ],
        h5: [
          vars.$semantic.typography.h5.fontSize,
          {
            lineHeight: vars.$semantic.typography.h5.lineHeight,
            fontWeight: vars.$semantic.typography.h5.fontWeight,
          },
        ],
        h6: [
          vars.$semantic.typography.h6.fontSize,
          {
            lineHeight: vars.$semantic.typography.h6.lineHeight,
            fontWeight: vars.$semantic.typography.h6.fontWeight,
          },
        ],
        title1Bold: [
          vars.$semantic.typography.title1Bold.fontSize,
          {
            lineHeight: vars.$semantic.typography.title1Bold.lineHeight,
            fontWeight: vars.$semantic.typography.title1Bold.fontWeight,
          },
        ],
        title2Bold: [
          vars.$semantic.typography.title2Bold.fontSize,
          {
            lineHeight: vars.$semantic.typography.title2Bold.lineHeight,
            fontWeight: vars.$semantic.typography.title2Bold.fontWeight,
          },
        ],
        title3Bold: [
          vars.$semantic.typography.title3Bold.fontSize,
          {
            lineHeight: vars.$semantic.typography.title3Bold.lineHeight,
            fontWeight: vars.$semantic.typography.title3Bold.fontWeight,
          },
        ],
        title1Regular: [
          vars.$semantic.typography.title1Regular.fontSize,
          {
            lineHeight: vars.$semantic.typography.title1Regular.lineHeight,
            fontWeight: vars.$semantic.typography.title1Regular.fontWeight,
          },
        ],
        title2Regular: [
          vars.$semantic.typography.title2Regular.fontSize,
          {
            lineHeight: vars.$semantic.typography.title2Regular.lineHeight,
            fontWeight: vars.$semantic.typography.title2Regular.fontWeight,
          },
        ],
        title3Regular: [
          vars.$semantic.typography.title3Regular.fontSize,
          {
            lineHeight: vars.$semantic.typography.title3Regular.lineHeight,
            fontWeight: vars.$semantic.typography.title3Regular.fontWeight,
          },
        ],
        subtitle1Bold: [
          vars.$semantic.typography.subtitle1Bold.fontSize,
          {
            lineHeight: vars.$semantic.typography.subtitle1Bold.lineHeight,
            fontWeight: vars.$semantic.typography.subtitle1Bold.fontWeight,
          },
        ],
        subtitle2Bold: [
          vars.$semantic.typography.subtitle2Bold.fontSize,
          {
            lineHeight: vars.$semantic.typography.subtitle2Bold.lineHeight,
            fontWeight: vars.$semantic.typography.subtitle2Bold.fontWeight,
          },
        ],
        subtitle1Regular: [
          vars.$semantic.typography.subtitle1Regular.fontSize,
          {
            lineHeight: vars.$semantic.typography.subtitle1Regular.lineHeight,
            fontWeight: vars.$semantic.typography.subtitle1Regular.fontWeight,
          },
        ],
        subtitle2Regular: [
          vars.$semantic.typography.subtitle2Regular.fontSize,
          {
            lineHeight: vars.$semantic.typography.subtitle2Regular.lineHeight,
            fontWeight: vars.$semantic.typography.subtitle2Regular.fontWeight,
          },
        ],
        bodyRelaxed1Bold: [
          vars.$semantic.typography.bodyRelaxed1Bold.fontSize,
          {
            lineHeight: vars.$semantic.typography.bodyRelaxed1Bold.lineHeight,
            fontWeight: vars.$semantic.typography.bodyRelaxed1Bold.fontWeight,
          },
        ],
        bodyRelaxed2Bold: [
          vars.$semantic.typography.bodyRelaxed2Bold.fontSize,
          {
            lineHeight: vars.$semantic.typography.bodyRelaxed2Bold.lineHeight,
            fontWeight: vars.$semantic.typography.bodyRelaxed2Bold.fontWeight,
          },
        ],
        bodyNormal1Bold: [
          vars.$semantic.typography.bodyNormal1Bold.fontSize,
          {
            lineHeight: vars.$semantic.typography.bodyNormal1Bold.lineHeight,
            fontWeight: vars.$semantic.typography.bodyNormal1Bold.fontWeight,
          },
        ],
        bodyNormal2Bold: [
          vars.$semantic.typography.bodyNormal2Bold.fontSize,
          {
            lineHeight: vars.$semantic.typography.bodyNormal2Bold.lineHeight,
            fontWeight: vars.$semantic.typography.bodyNormal2Bold.fontWeight,
          },
        ],
        bodySnug1Bold: [
          vars.$semantic.typography.bodySnug1Bold.fontSize,
          {
            lineHeight: vars.$semantic.typography.bodySnug1Bold.lineHeight,
            fontWeight: vars.$semantic.typography.bodySnug1Bold.fontWeight,
          },
        ],
        bodySnug2Bold: [
          vars.$semantic.typography.bodySnug2Bold.fontSize,
          {
            lineHeight: vars.$semantic.typography.bodySnug2Bold.lineHeight,
            fontWeight: vars.$semantic.typography.bodySnug2Bold.fontWeight,
          },
        ],
        bodyRelaxed1Regular: [
          vars.$semantic.typography.bodyRelaxed1Regular.fontSize,
          {
            lineHeight: vars.$semantic.typography.bodyRelaxed1Regular.lineHeight,
            fontWeight: vars.$semantic.typography.bodyRelaxed1Regular.fontWeight,
          },
        ],
        bodyRelaxed2Regular: [
          vars.$semantic.typography.bodyRelaxed2Regular.fontSize,
          {
            lineHeight: vars.$semantic.typography.bodyRelaxed2Regular.lineHeight,
            fontWeight: vars.$semantic.typography.bodyRelaxed2Regular.fontWeight,
          },
        ],
        bodyNormal1Regular: [
          vars.$semantic.typography.bodyNormal1Regular.fontSize,
          {
            lineHeight: vars.$semantic.typography.bodyNormal1Regular.lineHeight,
            fontWeight: vars.$semantic.typography.bodyNormal1Regular.fontWeight,
          },
        ],
        bodyNormal2Regular: [
          vars.$semantic.typography.bodyNormal2Regular.fontSize,
          {
            lineHeight: vars.$semantic.typography.bodyNormal2Regular.lineHeight,
            fontWeight: vars.$semantic.typography.bodyNormal2Regular.fontWeight,
          },
        ],
        bodySnug1Regular: [
          vars.$semantic.typography.bodySnug1Regular.fontSize,
          {
            lineHeight: vars.$semantic.typography.bodySnug1Regular.lineHeight,
            fontWeight: vars.$semantic.typography.bodySnug1Regular.fontWeight,
          },
        ],
        bodySnug2Regular: [
          vars.$semantic.typography.bodySnug2Regular.fontSize,
          {
            lineHeight: vars.$semantic.typography.bodySnug2Regular.lineHeight,
            fontWeight: vars.$semantic.typography.bodySnug2Regular.fontWeight,
          },
        ],
        caption1Bold: [
          vars.$semantic.typography.caption1Bold.fontSize,
          {
            lineHeight: vars.$semantic.typography.caption1Bold.lineHeight,
            fontWeight: vars.$semantic.typography.caption1Bold.fontWeight,
          },
        ],
        caption2Bold: [
          vars.$semantic.typography.caption2Bold.fontSize,
          {
            lineHeight: vars.$semantic.typography.caption2Bold.lineHeight,
            fontWeight: vars.$semantic.typography.caption2Bold.fontWeight,
          },
        ],
        caption1Regular: [
          vars.$semantic.typography.caption1Regular.fontSize,
          {
            lineHeight: vars.$semantic.typography.caption1Regular.lineHeight,
            fontWeight: vars.$semantic.typography.caption1Regular.fontWeight,
          },
        ],
        caption2Regular: [
          vars.$semantic.typography.caption2Regular.fontSize,
          {
            lineHeight: vars.$semantic.typography.caption2Regular.lineHeight,
            fontWeight: vars.$semantic.typography.caption2Regular.fontWeight,
          },
        ],
        label1Bold: [
          vars.$semantic.typography.label1Bold.fontSize,
          {
            lineHeight: vars.$semantic.typography.label1Bold.lineHeight,
            fontWeight: vars.$semantic.typography.label1Bold.fontWeight,
          },
        ],
        label2Bold: [
          vars.$semantic.typography.label2Bold.fontSize,
          {
            lineHeight: vars.$semantic.typography.label2Bold.lineHeight,
            fontWeight: vars.$semantic.typography.label2Bold.fontWeight,
          },
        ],
        label3Bold: [
          vars.$semantic.typography.label3Bold.fontSize,
          {
            lineHeight: vars.$semantic.typography.label3Bold.lineHeight,
            fontWeight: vars.$semantic.typography.label3Bold.fontWeight,
          },
        ],
        label4Bold: [
          vars.$semantic.typography.label4Bold.fontSize,
          {
            lineHeight: vars.$semantic.typography.label4Bold.lineHeight,
            fontWeight: vars.$semantic.typography.label4Bold.fontWeight,
          },
        ],
        label5Bold: [
          vars.$semantic.typography.label5Bold.fontSize,
          {
            lineHeight: vars.$semantic.typography.label5Bold.lineHeight,
            fontWeight: vars.$semantic.typography.label5Bold.fontWeight,
          },
        ],
        label6Bold: [
          vars.$semantic.typography.label6Bold.fontSize,
          {
            lineHeight: vars.$semantic.typography.label6Bold.lineHeight,
            fontWeight: vars.$semantic.typography.label6Bold.fontWeight,
          },
        ],
        label1Regular: [
          vars.$semantic.typography.label1Regular.fontSize,
          {
            lineHeight: vars.$semantic.typography.label1Regular.lineHeight,
            fontWeight: vars.$semantic.typography.label1Regular.fontWeight,
          },
        ],
        label2Regular: [
          vars.$semantic.typography.label2Regular.fontSize,
          {
            lineHeight: vars.$semantic.typography.label2Regular.lineHeight,
            fontWeight: vars.$semantic.typography.label2Regular.fontWeight,
          },
        ],
        label3Regular: [
          vars.$semantic.typography.label3Regular.fontSize,
          {
            lineHeight: vars.$semantic.typography.label3Regular.lineHeight,
            fontWeight: vars.$semantic.typography.label3Regular.fontWeight,
          },
        ],
        label4Regular: [
          vars.$semantic.typography.label4Regular.fontSize,
          {
            lineHeight: vars.$semantic.typography.label4Regular.lineHeight,
            fontWeight: vars.$semantic.typography.label4Regular.fontWeight,
          },
        ],
        label5Regular: [
          vars.$semantic.typography.label5Regular.fontSize,
          {
            lineHeight: vars.$semantic.typography.label5Regular.lineHeight,
            fontWeight: vars.$semantic.typography.label5Regular.fontWeight,
          },
        ],
        label6Regular: [
          vars.$semantic.typography.label6Regular.fontSize,
          {
            lineHeight: vars.$semantic.typography.label6Regular.lineHeight,
            fontWeight: vars.$semantic.typography.label6Regular.fontWeight,
          },
        ],
      },
      colors: {
        base: {
          lo: vars.$semantic.color.loContrast,
          hi: vars.$semantic.color.hiContrast,
          weak: vars.$semantic.color.weakContrast,
          1: vars.$scale.color.gray1,
          2: vars.$scale.color.gray2,
          3: vars.$scale.color.gray3,
          4: vars.$scale.color.gray4,
          5: vars.$scale.color.gray5,
          6: vars.$scale.color.gray6,
          7: vars.$scale.color.gray7,
          8: vars.$scale.color.gray8,
          9: vars.$scale.color.gray9,
          10: vars.$scale.color.gray10,
          11: vars.$scale.color.gray11,
          12: vars.$scale.color.gray12,
        },
        canvas: {
          base: vars.$semantic.color.canvas,
          subtle: vars.$semantic.color.canvasSubtle,
        },
        primary: {
          base: vars.$semantic.color.primary9,
          hi: vars.$semantic.color.primary11,
          1: vars.$semantic.color.primary1,
          2: vars.$semantic.color.primary2,
          3: vars.$semantic.color.primary3,
          4: vars.$semantic.color.primary4,
          5: vars.$semantic.color.primary5,
          6: vars.$semantic.color.primary6,
          7: vars.$semantic.color.primary7,
          8: vars.$semantic.color.primary8,
          9: vars.$semantic.color.primary9,
          10: vars.$semantic.color.primary10,
          11: vars.$semantic.color.primary11,
          12: vars.$semantic.color.primary12,
        },
        danger: {
          base: vars.$semantic.color.danger,
          hi: vars.$semantic.color.dangerForeground,
          1: vars.$scale.color.red1,
          2: vars.$scale.color.red2,
          3: vars.$scale.color.red3,
          4: vars.$scale.color.red4,
          5: vars.$scale.color.red5,
          6: vars.$scale.color.red6,
          7: vars.$scale.color.red7,
          8: vars.$scale.color.red8,
          9: vars.$scale.color.red9,
          10: vars.$scale.color.red10,
          11: vars.$scale.color.red11,
          12: vars.$scale.color.red12,
        },
        success: {
          base: vars.$semantic.color.success,
          hi: vars.$semantic.color.successForeground,
          1: vars.$scale.color.green1,
          2: vars.$scale.color.green2,
          3: vars.$scale.color.green3,
          4: vars.$scale.color.green4,
          5: vars.$scale.color.green5,
          6: vars.$scale.color.green6,
          7: vars.$scale.color.green7,
          8: vars.$scale.color.green8,
          9: vars.$scale.color.green9,
          10: vars.$scale.color.green10,
          11: vars.$scale.color.green11,
          12: vars.$scale.color.green12,
        },
        info: {
          base: vars.$semantic.color.info,
          hi: vars.$semantic.color.infoForeground,
          1: vars.$scale.color.blue1,
          2: vars.$scale.color.blue2,
          3: vars.$scale.color.blue3,
          4: vars.$scale.color.blue4,
          5: vars.$scale.color.blue5,
          6: vars.$scale.color.blue6,
          7: vars.$scale.color.blue7,
          8: vars.$scale.color.blue8,
          9: vars.$scale.color.blue9,
          10: vars.$scale.color.blue10,
          11: vars.$scale.color.blue11,
          12: vars.$scale.color.blue12,
        },
        warning: {
          base: vars.$semantic.color.warning,
          hi: vars.$semantic.color.warningForeground,
          1: vars.$scale.color.yellow1,
          2: vars.$scale.color.yellow2,
          3: vars.$scale.color.yellow3,
          4: vars.$scale.color.yellow4,
          5: vars.$scale.color.yellow5,
          6: vars.$scale.color.yellow6,
          7: vars.$scale.color.yellow7,
          8: vars.$scale.color.yellow8,
          9: vars.$scale.color.yellow9,
          10: vars.$scale.color.yellow10,
          11: vars.$scale.color.yellow11,
          12: vars.$scale.color.yellow12,
        },
      },
      animation: {
        hide: 'radix-hide 0.1s ease-in forwards',
        'toast-slide-in-right': 'radix-toast-slide-in-right 0.15s cubic-bezier(0.16, 1, 0.3, 1)',
        'toast-slide-in-down': 'radix-toast-slide-in-down 0.15s cubic-bezier(0.16, 1, 0.3, 1)',
        'toast-slide-in-left': 'radix-toast-slide-in-left 0.15s cubic-bezier(0.16, 1, 0.3, 1)',
        'toast-slide-in-up': 'radix-toast-slide-in-up 0.15s cubic-bezier(0.16, 1, 0.3, 1)',
        'toast-swipe-out-x': 'radix-toast-swipe-out-x 0.1s ease-out forwards',
        'toast-swipe-out-y': 'radix-toast-swipe-out-y 0.1s ease-out forwards',
        'toast-swipe-out-x-reverse': 'radix-toast-swipe-out-x-reverse 0.1s ease-out forwards',
        'toast-swipe-out-y-reverse': 'radix-toast-swipe-out-y-reverse 0.1s ease-out forwards',
      },
      keyframes: {
        'radix-hide': {
          '0%': { opacity: 1 },
          '100%': { opacity: 0 },
        },
        'radix-toast-slide-in-right': {
          '0%': { transform: 'translateX(calc(100% + 1rem))' },
          '100%': { transform: 'translateX(0)' },
        },
        'radix-toast-slide-in-down': {
          '0%': { transform: 'translateY(calc(100% + 1rem))' },
          '100%': { transform: 'translateY(0)' },
        },
        'radix-toast-slide-in-left': {
          '0%': { transform: 'translateX(calc(-1 * (100% + 1rem)))' },
          '100%': { transform: 'translateY(0)' },
        },
        'radix-toast-slide-in-up': {
          '0%': { transform: 'translateY(calc(-1 * (100% + 1rem)))' },
          '100%': { transform: 'translateY(0)' },
        },
        'radix-toast-swipe-out-x': {
          '0%': { transform: 'translateX(var(--radix-toast-swipe-end-x))' },
          '100%': { transform: 'translateX(calc(100% + 1rem))' },
        },
        'radix-toast-swipe-out-y': {
          '0%': { transform: 'translateY(var(--radix-toast-swipe-end-y))' },
          '100%': { transform: 'translateY(calc(100% + 1rem))' },
        },
        'radix-toast-swipe-out-x-reverse': {
          '0%': { transform: 'translateX(var(--radix-toast-swipe-end-x))' },
          '100%': { transform: 'translateX(calc(-1 * (100% + 1rem)))' },
        },
        'radix-toast-swipe-out-y-reverse': {
          '0%': { transform: 'translateY(var(--radix-toast-swipe-end-y))' },
          '100%': { transform: 'translateY(calc(-1 * (100% + 1rem)))' },
        },
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
