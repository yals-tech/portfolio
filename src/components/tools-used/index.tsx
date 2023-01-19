import React, { memo } from 'react';
import { PROFILE_CONFIG } from '../../config/profile-config';
import { IToolType } from '../../types/profile-config.types';

const toolsList = PROFILE_CONFIG.TOOLS;

const ToolsUsedList = () => {
  return (
    <div className='custom-list'>
      <div className='custom-list-wrapper'>
        <div className='header-title'>Tools Used</div>
        <div className='heading-separator'></div>
        <div className='cus-list-box'>
          {toolsList.map((tool: IToolType) => {
            return (
              <div className='cus-list-box-item' key={tool.id}>
                <div className='cus-list-box-icon'>
                  {tool.icon && (
                    <img
                      src={tool.icon}
                      className='emp-hist-img rounded-circle'
                      alt={tool.name}
                    />
                  )}
                </div>
                <div className='hist-sec emp-desc align-middle'>
                  <div className='custom-list-item-title'>{tool.name}</div>

                  <div className='custom-list-item-sub-title'>
                    {tool.description}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default memo(ToolsUsedList);
