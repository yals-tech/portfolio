import React, { memo } from 'react';
import { IIconType } from '../../types/icon.types';
import BaseIcon from './base-icons';
import { IconPath } from './icons.path';

const InfoIcon = (props: IIconType) => {
  return <BaseIcon {...props} d={IconPath.info} />;
};

export default memo(InfoIcon);
