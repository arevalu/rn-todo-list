import * as styledComponents from 'styled-components/native';
import { ReactNativeThemedStyledComponentsModule } from 'styled-components/native';
import { ColorsType } from './colors';

interface CustomTheme {
  Colors: ColorsType;
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
