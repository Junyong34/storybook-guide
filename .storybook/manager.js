import { addons } from '@storybook/addons'
import {create} from "@storybook/theming";
import NIKE from "./nike-1.png";

const sbCreate =create({
  base: 'light',
  brandTitle: 'JunD Storybook',
  brandUrl: 'https://jund-blog.netlify.app/',
  brandImage: NIKE,
})


addons.setConfig({
  theme: sbCreate,
  isFullscreen: false,
  showNav: true,
  showPanel: true,
  panelPosition: 'bottom',
  enableShortcuts: true,
  showToolbar: true,
  selectedPanel: undefined,
  initialActive: 'sidebar',
  sidebar: {
    showRoots: false,
    collapsedRoots: ['other'],
  },
  toolbar: {
    title: { hidden: false },
    zoom: { hidden: false },
    eject: { hidden: false },
    copy: { hidden: false },
    fullscreen: { hidden: false },
  },
})
