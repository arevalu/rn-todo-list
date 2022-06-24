import { TouchableOpacityProps as RNTouchableOpacityProps } from 'react-native';
import { PickWithRequired } from './generic-types';

type TouchableProps = Pick<
  RNTouchableOpacityProps,
  'accessibilityLabel' | 'disabled' | 'onPress' | 'testID' | 'activeOpacity'
>;

export type TouchableOpacityProps = PickWithRequired<
  TouchableProps,
  'accessibilityLabel'
>;
