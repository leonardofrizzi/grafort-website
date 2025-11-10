// Configuração centralizada do tema para garantir consistência

export const theme = {
  colors: {
    primary: {
      main: '#0284c7',
      light: '#38bdf8',
      dark: '#075985',
    },
    secondary: {
      main: '#eab308',
      light: '#fde047',
      dark: '#a16207',
    },
    neutral: {
      white: '#ffffff',
      black: '#0c4a6e',
      gray: {
        50: '#f9fafb',
        100: '#f3f4f6',
        200: '#e5e7eb',
        300: '#d1d5db',
        400: '#9ca3af',
        500: '#6b7280',
        600: '#4b5563',
        700: '#374151',
        800: '#1f2937',
        900: '#111827',
      },
    },
  },
  spacing: {
    section: '5rem',
    card: '1.5rem',
  },
  borderRadius: {
    sm: '0.5rem',
    md: '0.75rem',
    lg: '1rem',
    xl: '1.5rem',
  },
  shadows: {
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
    xl: '0 20px 25px -5px rgb(0 0 0 / 0.1)',
  },
  transitions: {
    fast: '150ms',
    normal: '300ms',
    slow: '500ms',
  },
} as const;

export type Theme = typeof theme;
