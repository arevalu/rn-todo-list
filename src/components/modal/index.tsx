import React, { FunctionComponent, ReactNode } from 'react';
import { rgba } from 'polished';
import {
  Dimensions,
  Modal as RNModal,
  ModalProps as RNModalProps,
} from 'react-native';
import styled from '@core/theme/styled-components';

/**
 * Types
 */

interface ModalProps extends Pick<RNModalProps, 'transparent' | 'visible'> {
  children: ReactNode;
}

/**
 * Constants
 */

const { width } = Dimensions.get('screen');

/**
 * Styled components
 */

const Backdrop = styled.View`
  align-items: center;
  background-color: ${({ theme: { Colors } }) => rgba(Colors.black, 0.3)};
  flex: 1;
  justify-content: center;
`;

const ContentWrapper = styled.View`
  background-color: ${({ theme: { Colors } }) => Colors.white};
  border-radius: 16px;
  min-height: 200px;
  width: ${width * 0.8}px;
`;

/**
 * Modal
 */

export const Modal: FunctionComponent<ModalProps> = ({
  children,
  transparent = true,
  ...modalProps
}) => (
  <RNModal animationType="slide" transparent={transparent} {...modalProps}>
    <Backdrop>
      <ContentWrapper>{children}</ContentWrapper>
    </Backdrop>
  </RNModal>
);
