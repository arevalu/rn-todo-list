import * as styledComponents from 'styled-components/native';
import { ReactNativeThemedStyledComponentsModule } from 'styled-components/native';
import { ColorsType } from './colors';
import { FontsType } from './fonts';

interface CustomTheme {
  Colors: ColorsType;
  Fonts: FontsType;
}

type CustomThemeStyled = ReactNativeThemedStyledComponentsModule<CustomTheme>;

const {
  css,
  default: styled,
  ThemeContext,
  ThemeProvider,
} = styledComponents as unknown as CustomThemeStyled;

export { css, ThemeContext, ThemeProvider };
export default styled;
