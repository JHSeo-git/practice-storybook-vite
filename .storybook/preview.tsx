import React from 'react';
import { themes } from '@storybook/theming';
import { DocsContainer } from '@storybook/addon-docs';
import { lightTheme, darkTheme } from './theme';

import 'tailwindcss/tailwind.css';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    container: (props) => {
      return (
        <>
          <DocsContainer {...props} />
        </>
      );
    },
    source: {
      state: 'open',
    },
  },
  darkMode: {
    dark: { ...themes.dark, ...darkTheme },
    light: { ...themes.normal, ...lightTheme },
  },
  a11y: {
    // the target DOM element
    element: '#root',
    // sets the execution mode for the addon
    manual: false,
  },
};
