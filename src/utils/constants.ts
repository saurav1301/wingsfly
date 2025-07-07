export type ThemeColors = {
  primary: string;
  background: string;
  text: string;
  gray: string;
  card: string;
  darkText: string;
  lightGray: string;
};

export const COLORS = {
  primary: '#1E2A78',
  background: '#ffffff',
  lightGray: '#F0F0F0',
  darkGray: '#1C1C1C',
  gray: '#888888',
  secondary: '#F5F5F5',
  text: '#222222',
  white: '#FFFFFF', // ✅ <-- Add this line


  light: {
    primary: '#3B5FFF',
    background: '#FFFFFF',
    text: '#222222',
    gray: '#888',
    card: '#F8F8F8',
    lightGray: '#F0F0F0',       // ✅ Add this
    darkText: '#333333',        // ✅ Add this
  } as ThemeColors,

  dark: {
    primary: '#3B5FFF',
    background: '#121212',
    text: '#FFFFFF',
    gray: '#AAA',
    card: '#1F1F1F',
    darkText: '#FFFFFF',
    lightGray: '#2A2A2A',
  } as ThemeColors,
};

export const SIZES = {
  padding: 16,
  header: 24,
  subtitle: 18,
  title: 20,     // ✅ Added
  radius: 10,
};
