import React, { FunctionComponent } from 'react';
import { Dimensions, ImageSourcePropType } from 'react-native';
import styled from '../../core/theme/styled-components';

/**
 * Types
 */

interface EmptyStateProps {
  image?: ImageSourcePropType;
  imageTestID?: string;
  scale?: number;
  title: string;
  testID?: string;
}

interface ImageWrapperProps {
  height: number;
}

/**
 * Constants
 */

const SCALE = 1;

/**
 * Styled components
 */

const Wrapper = styled.View`
  flex: 1;
  justify-content: center;
`;

const ImageWrapper = styled.View<ImageWrapperProps>`
  align-items: center;
  justify-content: center;
  height: ${({ height }) => `${height}px`};
  margin-bottom: 24px;
  width: 100%;
`;

const Image = styled.Image`
  flex: 1;
`;

const Title = styled.Text`
  color: ${({ theme: { Colors } }) => Colors.gray500};
  font-family: ${({ theme: { Fonts } }) => Fonts.medium};
  font-size: 24px;
  text-align: center;
`;

/**
 * EmptyState
 */

export const EmptyState: FunctionComponent<EmptyStateProps> = ({
  image,
  imageTestID,
  scale = SCALE,
  testID,
  title,
}) => {
  const wrapperHeight = Math.round(Dimensions.get('window').height) * scale;

  return (
    <Wrapper testID={testID}>
      {image && (
        <ImageWrapper height={wrapperHeight}>
          <Image testID={imageTestID} source={image} resizeMode="contain" />
        </ImageWrapper>
      )}
      <Title>{title}</Title>
    </Wrapper>
  );
};
