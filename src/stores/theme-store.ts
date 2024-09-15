import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useThemeStore = defineStore('theme', () => {
  const theme = ref<'light' | 'dark'>('light');

  const toggleTheme = (_theme: 'light' | 'dark') => {
    theme.value = _theme;
  };

  return { theme, toggleTheme };
});
