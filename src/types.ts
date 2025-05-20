export type PostPros = {
  userId: number | string;
  id: number | string;
  title: string;
  body: string;
};

export type ThemeType = "light" | "dark" | "system";

export type ThemeContextType = {
  isSystemTheme: boolean;
  currentTheme: ThemeType;
  toggleTheme: (newTheme: ThemeType) => void;
  useSystemTheme: () => void;
};
