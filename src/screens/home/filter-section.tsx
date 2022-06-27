import React, { FunctionComponent } from 'react';
import { Dimensions, FlatList } from 'react-native';

import { FilterOptions, Option } from '@core/hooks/use-tasks/types';
import { Colors } from '@core/theme';
import styled, { css } from '@core/theme/styled-components';

/**
 * Types
 */

interface FilterSectionProps {
  options: Option[];
  onChangeFilter: (filterOption: FilterOptions) => void;
}

interface FilterItemProps {
  active?: boolean;
  lastChild?: boolean;
}

/**
 * Constants
 */

const { width } = Dimensions.get('screen');

const FLATLIST_STYLES = {
  borderColor: Colors.gray100,
  borderWidth: 0,
  borderBottomWidth: 2,
  flexGrow: 0,
  marginBottom: 24,
  paddingLeft: 16,
  width,
};

/**
 * Styled components
 */

const FilterItemActive = css`
  border-bottom-color: ${({ theme: { Colors } }) => Colors.black};
`;

const FilterItemInactive = css`
  border-bottom-color: ${({ theme: { Colors } }) => Colors.gray100};
`;

const ItemTextActive = css`
  font-family: ${({ theme: { Fonts } }) => Fonts.medium};
`;

const ItemTextInactive = css`
  font-family: ${({ theme: { Fonts } }) => Fonts.regular};
  color: ${({ theme: { Colors } }) => Colors.gray500};
`;

const FilterItem = styled.TouchableOpacity<FilterItemProps>`
  border-bottom-width: 2px;
  padding: 20px 0 20px 24px;
  position: relative;
  bottom: -2px;

  ${({ active }) => (active ? FilterItemActive : FilterItemInactive)};
  ${({ lastChild }) => !lastChild && `padding-right: ${width * 0.08}px`};
`;

const ItemText = styled.Text<Pick<FilterItemProps, 'active'>>`
  font-size: 16px;

  ${({ active }) => (active ? ItemTextActive : ItemTextInactive)};
`;

/**
 * FilterSection
 */

export const FilterSection: FunctionComponent<FilterSectionProps> = ({
  options,
  onChangeFilter,
}) => (
  <FlatList
    data={options}
    renderItem={({ item: { active, name } }) => (
      <FilterItem active={active} onPress={() => onChangeFilter(name)}>
        <ItemText active={active}>{name}</ItemText>
      </FilterItem>
    )}
    keyExtractor={({ name }) => name}
    showsHorizontalScrollIndicator={false}
    style={FLATLIST_STYLES}
    horizontal
  />
);
