export interface PaletteColor {
  hex: string;
  role: 'primary' | 'secondary' | 'accent' | 'background' | 'surface' | 'text' | 'border' | 'error' | 'success' | 'warning';
  variable: string;
}

export interface Typography {
  families: string[];
  sizes: string[];
  weights: number[];
}

export interface Analysis {
  url: string;
  palette: PaletteColor[];
  typography: Typography;
  spacing: string[];
  radii: string[];
  shadows: string[];
  downloadUrl: string;
}
