import { StorybookApp2 } from './StorybookApp';

import { configure } from '@testing-library/dom';

configure({ testIdAttribute: 'story-id' });
const defaultViewport = {
  defaultResolution: {
    name: 'default HD',
    styles: {
      width: '1920px',
      height: '1080px',
    },
  },
};
const customViewports = {
  desktop: {
    type: 'desktop',
    name: 'desktop',
    styles: {
      width: '1440px',
      height: '100%',
    },
  },
  mobile: {
    type: 'mobile',
    name: 'mobile',
    styles: {
      width: '414px',
      height: '100%',
    },
  },
};
export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  viewport: {
    viewports: {
      ...defaultViewport,
      ...customViewports,
    },
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
export const decorators = [StorybookApp2];
