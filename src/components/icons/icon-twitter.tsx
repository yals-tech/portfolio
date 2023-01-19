import React, { memo } from 'react';
import { IIconType } from '../../types/icon.types';
import BaseIcon from './base-icons';
import { IconPath } from './icons.path';

const IconTwitter = (props: IIconType) => {
  return <BaseIcon {...props} d={IconPath.twitter} />;
};

export default memo(IconTwitter);
