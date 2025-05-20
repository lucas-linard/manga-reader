// theme.ts

const darkTheme = {
    colors: {
      background: '#0A1128',
      surface: '#001F54',
      content: '#034078',
      primary: '#1282A2',
      secondary: '#FEFCFB',
      tertiary: '#89CFF0',
  
      textPrimary: '#FEFCFB',
      textSecondary: '#AAB8C2',
      textDisabled: '#7A869A',
  
      border: '#032747',
      error: '#D32F2F',
      success: '#2E7D32',
      warning: '#ED6C02',
      info: '#0288D1',
  
      overlay: 'rgba(0, 0, 0, 0.5)',
      shadow: 'rgba(0, 0, 0, 0.3)',
      fade: 'rgba(0, 0, 0, 0.6)',
    },
  
    typography: {
    //   fontFamily: {
    //     regular: 'System',
    //     medium: 'System',
    //     bold: 'System',
    //     monospace: 'Courier',
    //   },
      fontSize: {
        xs: 12,
        sm: 14,
        md: 16,
        lg: 20,
        xl: 24,
        xxl: 32,
      },

      lineHeight: {
        sm: 20,
        md: 24,
        lg: 28,
        xl: 32,
      },
    },
  
    spacing: {
      none: 0,
      xs: 4,
      sm: 8,
      md: 16,
      lg: 24,
      xl: 32,
      xxl: 40,
    },
  
    radius: {
      sm: 4,
      md: 8,
      lg: 16,
      xl: 24,
      full: 999,
    },
  
    elevation: {
      sm: 2,
      md: 4,
      lg: 8,
      xl: 16,
    },
  
    opacity: {
      disabled: 0.5,
      pressed: 0.7,
      hover: 0.9,
    },
  };
  
  export type ThemeType = typeof darkTheme;
  export default darkTheme;
  