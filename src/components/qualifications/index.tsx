import React, { memo } from 'react';
import { PROFILE_CONFIG } from '../../config/profile-config';
import { IQualificationType } from '../../types/profile-config.types';
const qualifications = PROFILE_CONFIG.QUALIFICATIONS;

const QualificationList = () => {
  return (
    <div className='custom-list'>
      <div className='custom-list-wrapper'>
        <div className='header-title'>Qualifications</div>
        <div className='heading-separator'></div>
        <div className='cus-list-box'>
          {qualifications.map((qual: IQualificationType) => {
            return (
              <div className='cus-list-box-item' key={qual.id}>
                <div className='cus-list-box-icon'>
                  {qual.icon && (
                    <img
                      src={qual.icon}
                      className='emp-hist-img rounded-circle'
                      alt={qual.name}
                    />
                  )}
                </div>
                <div className='hist-sec emp-desc align-middle'>
                  <div className='custom-list-item-title'>{qual.name}</div>

                  <div className='custom-list-item-sub-title'>
                    {qual.certifiedBy}
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

export default memo(QualificationList);
