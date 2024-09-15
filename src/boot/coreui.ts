// src/boot/coreui.ts
import { boot } from 'quasar/wrappers';
import CoreuiVue from '@coreui/vue';
import CIcon from '@coreui/icons-vue';
import { iconsSet as icons } from '../assets/icons';

export default boot(({ app }) => {
  app.use(CoreuiVue);
  app.provide('icons', icons);
  app.component('CIcon', CIcon);
});
