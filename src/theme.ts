import { createTheme, alpha } from '@mui/material/styles';
import { Inter, Poppins } from 'next/font/google';

const inter = Inter({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
  display: 'swap',
});

// Create a theme instance
const theme = createTheme({
  palette: {
    primary: {
      main: '#f05126', // Orange
      light: '#ff7f4d',
      dark: '#b52000',
      contrastText: '#fff',
    },
    secondary: {
      main: '#2196f3', // Blue
      light: '#6ec6ff',
      dark: '#0069c0',
      contrastText: '#fff',
    },
    background: {
      default: '#f8faff',
      paper: '#ffffff',
    },
    text: {
      primary: '#1a2138',
      secondary: '#5a6a8a',
    },
    error: {
      main: '#f44336',
      light: '#ff7961',
      dark: '#ba000d',
    },
    warning: {
      main: '#ff9800',
      light: '#ffb74d',
      dark: '#f57c00',
    },
    info: {
      main: '#2196f3',
      light: '#64b5f6',
      dark: '#0d47a1',
    },
    success: {
      main: '#4caf50',
      light: '#80e27e',
      dark: '#087f23',
    },
    grey: {
      50: '#fafafa',
      100: '#f5f5f5',
      200: '#eeeeee',
      300: '#e0e0e0',
      400: '#bdbdbd',
      500: '#9e9e9e',
      600: '#757575',
      700: '#616161',
      800: '#424242',
      900: '#212121',
    },
  },
  typography: {
    fontFamily: inter.style.fontFamily,
    h1: {
      fontFamily: poppins.style.fontFamily,
      fontSize: '3rem',
      fontWeight: 700,
      lineHeight: 1.2,
      letterSpacing: '-0.01em',
    },
    h2: {
      fontFamily: poppins.style.fontFamily,
      fontSize: '2.25rem',
      fontWeight: 700,
      lineHeight: 1.3,
      letterSpacing: '-0.01em',
    },
    h3: {
      fontFamily: poppins.style.fontFamily,
      fontSize: '1.875rem',
      fontWeight: 600,
      lineHeight: 1.3,
      letterSpacing: '-0.01em',
    },
    h4: {
      fontFamily: poppins.style.fontFamily,
      fontSize: '1.5rem',
      fontWeight: 600,
      lineHeight: 1.4,
    },
    h5: {
      fontFamily: poppins.style.fontFamily,
      fontSize: '1.25rem',
      fontWeight: 600,
      lineHeight: 1.4,
    },
    h6: {
      fontFamily: poppins.style.fontFamily,
      fontSize: '1rem',
      fontWeight: 600,
      lineHeight: 1.5,
    },
    subtitle1: {
      fontSize: '1rem',
      fontWeight: 500,
      lineHeight: 1.5,
      letterSpacing: '0.01em',
    },
    subtitle2: {
      fontSize: '0.875rem',
      fontWeight: 500,
      lineHeight: 1.57,
      letterSpacing: '0.01em',
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
      letterSpacing: '0.01em',
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.6,
      letterSpacing: '0.01em',
    },
    button: {
      fontSize: '0.875rem',
      textTransform: 'none',
      fontWeight: 600,
      letterSpacing: '0.02em',
    },
    caption: {
      fontSize: '0.75rem',
      lineHeight: 1.5,
      letterSpacing: '0.02em',
    },
    overline: {
      fontSize: '0.75rem',
      fontWeight: 600,
      lineHeight: 1.5,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
    },
  },
  shape: {
    borderRadius: 12,
  },
  shadows: [
    'none',
    '0px 2px 4px rgba(0, 0, 0, 0.03), 0px 1px 2px rgba(0, 0, 0, 0.04)',
    '0px 4px 8px rgba(0, 0, 0, 0.04), 0px 2px 4px rgba(0, 0, 0, 0.05)',
    '0px 6px 12px rgba(0, 0, 0, 0.05), 0px 3px 6px rgba(0, 0, 0, 0.06)',
    '0px 8px 16px rgba(0, 0, 0, 0.06), 0px 4px 8px rgba(0, 0, 0, 0.07)',
    '0px 10px 20px rgba(0, 0, 0, 0.07), 0px 5px 10px rgba(0, 0, 0, 0.08)',
    '0px 12px 24px rgba(0, 0, 0, 0.08), 0px 6px 12px rgba(0, 0, 0, 0.09)',
    '0px 14px 28px rgba(0, 0, 0, 0.09), 0px 7px 14px rgba(0, 0, 0, 0.1)',
    '0px 16px 32px rgba(0, 0, 0, 0.1), 0px 8px 16px rgba(0, 0, 0, 0.11)',
    '0px 18px 36px rgba(0, 0, 0, 0.11), 0px 9px 18px rgba(0, 0, 0, 0.12)',
    '0px 20px 40px rgba(0, 0, 0, 0.12), 0px 10px 20px rgba(0, 0, 0, 0.13)',
    '0px 22px 44px rgba(0, 0, 0, 0.13), 0px 11px 22px rgba(0, 0, 0, 0.14)',
    '0px 24px 48px rgba(0, 0, 0, 0.14), 0px 12px 24px rgba(0, 0, 0, 0.15)',
    '0px 26px 52px rgba(0, 0, 0, 0.15), 0px 13px 26px rgba(0, 0, 0, 0.16)',
    '0px 28px 56px rgba(0, 0, 0, 0.16), 0px 14px 28px rgba(0, 0, 0, 0.17)',
    '0px 30px 60px rgba(0, 0, 0, 0.17), 0px 15px 30px rgba(0, 0, 0, 0.18)',
    '0px 32px 64px rgba(0, 0, 0, 0.18), 0px 16px 32px rgba(0, 0, 0, 0.19)',
    '0px 34px 68px rgba(0, 0, 0, 0.19), 0px 17px 34px rgba(0, 0, 0, 0.2)',
    '0px 36px 72px rgba(0, 0, 0, 0.2), 0px 18px 36px rgba(0, 0, 0, 0.21)',
    '0px 38px 76px rgba(0, 0, 0, 0.21), 0px 19px 38px rgba(0, 0, 0, 0.22)',
    '0px 40px 80px rgba(0, 0, 0, 0.22), 0px 20px 40px rgba(0, 0, 0, 0.23)',
    '0px 42px 84px rgba(0, 0, 0, 0.23), 0px 21px 42px rgba(0, 0, 0, 0.24)',
    '0px 44px 88px rgba(0, 0, 0, 0.24), 0px 22px 44px rgba(0, 0, 0, 0.25)',
    '0px 46px 92px rgba(0, 0, 0, 0.25), 0px 23px 46px rgba(0, 0, 0, 0.26)',
    '0px 48px 96px rgba(0, 0, 0, 0.26), 0px 24px 48px rgba(0, 0, 0, 0.27)',
  ],
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '*': {
          boxSizing: 'border-box',
        },
        html: {
          scrollBehavior: 'smooth',
        },
        body: {
          transition: 'background-color 0.2s ease',
          scrollbarGutter: 'stable',
          // Prevent layout shift during hydration
          minHeight: '100vh',
          // Prevent flickering
          fontDisplay: 'swap',
        },
        a: {
          textDecoration: 'none',
          color: 'inherit',
        },
        ':focus-visible': {
          outline: `2px solid #2196f3`,
          outlineOffset: '2px',
        },
        '::-webkit-scrollbar': {
          width: '8px',
          height: '8px',
        },
        '::-webkit-scrollbar-track': {
          background: '#f1f1f1',
          borderRadius: '4px',
        },
        '::-webkit-scrollbar-thumb': {
          background: '#c1c1c1',
          borderRadius: '4px',
          '&:hover': {
            background: '#a1a1a1',
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          padding: '10px 20px',
          textTransform: 'none',
          fontWeight: 600,
          boxShadow: 'none',
          transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 6px 20px rgba(0, 0, 0, 0.15)',
          },
          '&:active': {
            transform: 'translateY(0)',
          },
          // Prevent initial flash
          '&.MuiButton-root': {
            willChange: 'transform, box-shadow',
          },
        },
        contained: {
          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
          '&:hover': {
            boxShadow: '0 6px 20px rgba(0, 0, 0, 0.15)',
          },
        },
        containedPrimary: {
          background: `linear-gradient(135deg, #f05126 0%, #ff7f4d 100%)`,
          '&:hover': {
            background: `linear-gradient(135deg, #e04016 0%, #f06f3d 100%)`,
          },
        },
        containedSecondary: {
          background: `linear-gradient(135deg, #2196f3 0%, #64b5f6 100%)`,
          '&:hover': {
            background: `linear-gradient(135deg, #1976d2 0%, #42a5f5 100%)`,
          },
        },
        outlined: {
          borderWidth: '2px',
          '&:hover': {
            borderWidth: '2px',
          },
        },
        outlinedPrimary: {
          borderColor: alpha('#f05126', 0.5),
          '&:hover': {
            borderColor: '#f05126',
            backgroundColor: alpha('#f05126', 0.05),
          },
        },
        outlinedSecondary: {
          borderColor: alpha('#2196f3', 0.5),
          '&:hover': {
            borderColor: '#2196f3',
            backgroundColor: alpha('#2196f3', 0.05),
          },
        },
        text: {
          '&:hover': {
            backgroundColor: alpha('#f05126', 0.05),
          },
        },
        sizeLarge: {
          padding: '12px 24px',
          fontSize: '1rem',
        },
        sizeSmall: {
          padding: '6px 16px',
          fontSize: '0.8125rem',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
          transition: 'box-shadow 0.3s ease, transform 0.3s ease',
        },
        elevation1: {
          boxShadow: '0 2px 12px rgba(0, 0, 0, 0.05)',
        },
        elevation2: {
          boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)',
        },
        elevation3: {
          boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)',
        },
        elevation4: {
          boxShadow: '0 12px 32px rgba(0, 0, 0, 0.12)',
        },
        elevation5: {
          boxShadow: '0 16px 40px rgba(0, 0, 0, 0.15)',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          boxShadow: '0 8px 24px rgba(0, 0, 0, 0.08)',
          overflow: 'hidden',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          '&:hover': {
            transform: 'translateY(-5px)',
            boxShadow: '0 16px 40px rgba(0, 0, 0, 0.12)',
          },
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: 24,
          '&:last-child': {
            paddingBottom: 24,
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 12,
            transition: 'box-shadow 0.3s ease',
            '&:hover': {
              boxShadow: '0 0 0 1px rgba(0, 0, 0, 0.1)',
            },
            '&.Mui-focused': {
              boxShadow: '0 0 0 2px rgba(33, 150, 243, 0.2)',
            },
          },
          '& .MuiInputLabel-root': {
            fontSize: '0.9rem',
          },
          '& .MuiInputBase-input': {
            padding: '14px 16px',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          borderRight: 'none',
          boxShadow: '4px 0 24px rgba(0, 0, 0, 0.08)',
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          margin: '4px 8px',
          padding: '10px 16px',
          transition: 'all 0.2s ease',
          '&:hover': {
            backgroundColor: alpha('#f05126', 0.05),
            transform: 'translateX(5px)',
          },
          '&.Mui-selected': {
            backgroundColor: alpha('#f05126', 0.1),
            '&:hover': {
              backgroundColor: alpha('#f05126', 0.15),
            },
          },
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          backgroundColor: alpha('#f5f5f5', 0.5),
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          padding: '16px 24px',
        },
        head: {
          fontWeight: 600,
          color: '#1a2138',
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 600,
          minWidth: 'auto',
          padding: '12px 24px',
          transition: 'all 0.2s ease',
          '&.Mui-selected': {
            color: '#f05126',
          },
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        indicator: {
          height: 3,
          borderRadius: '3px 3px 0 0',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          fontWeight: 500,
          '&.MuiChip-filled': {
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
          },
        },
        label: {
          padding: '0 12px',
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: 'rgba(33, 33, 33, 0.9)',
          borderRadius: 8,
          padding: '8px 12px',
          fontSize: '0.75rem',
          boxShadow: '0 4px 16px rgba(0, 0, 0, 0.2)',
        },
        arrow: {
          color: 'rgba(33, 33, 33, 0.9)',
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          borderRadius: 20,
          boxShadow: '0 24px 48px rgba(0, 0, 0, 0.2)',
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: 'rgba(0, 0, 0, 0.08)',
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: 'none',
          transition: 'color 0.2s ease',
          '&:hover': {
            textDecoration: 'none',
          },
        },
      },
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
        },
      },
    },
    MuiSkeleton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
  },
});

export default theme;
