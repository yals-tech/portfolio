import React, { memo } from 'react';
import { IIconType } from '../../types/icon.types';
import BaseIcon from './base-icons';
import { IconPath } from './icons.path';

const ListIcon = (props: IIconType) => {
  return <BaseIcon {...props} d={IconPath.list} />;
};

export default memo(ListIcon);
