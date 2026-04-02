import '../src/index.css';
import type { Preview } from '@storybook/react-vite'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
    a11y: {
      test: 'todo'
    },
    viewport: {
      viewports: {
        iPhoneSE: {
          name: 'iPhone SE',
          styles: { width: '375px', height: '667px' },
        },
        iPhone14: {
          name: 'iPhone 14',
          styles: { width: '390px', height: '844px' },
        },
        iPhone14Pro: {
          name: 'iPhone 14 Pro Max',
          styles: { width: '430px', height: '932px' },
        },
      },
      defaultViewport: 'iPhoneSE',
    },
  },
};

export default preview;
