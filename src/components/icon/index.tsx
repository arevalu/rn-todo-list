/* eslint-disable import/namespace */
import React, { FunctionComponent } from 'react';
import { Colors, ColorsKey } from '@core/theme';
import * as icons from './icons';

/**
 * Types
 */

export type IconName = keyof typeof icons;

export interface IconsProps {
  color: ColorsKey;
  name: IconName;
  size?: number;
  testID?: string;
}

/**
 * Constants
 */

const ICON_SIZE = 24;

/**
 * Icons
 */

export const Icon: FunctionComponent<IconsProps> = ({
  color,
  name,
  size = ICON_SIZE,
  testID,
}) => {
  const IconComponent = icons[name];

  return (
    <IconComponent
      fill={Colors[color]}
      height={size}
      testID={testID}
      width={size}
    />
  );
};
