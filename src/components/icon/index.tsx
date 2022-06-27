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
  size: number;
  testID?: string;
}

/**
 * Icons
 */

export const Icon: FunctionComponent<IconsProps> = ({
  color,
  name,
  size,
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
