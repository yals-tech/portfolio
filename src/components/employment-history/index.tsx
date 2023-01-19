import React, { memo } from 'react';
import { PROFILE_CONFIG } from '../../config/profile-config';

const employmentHistoryList = PROFILE_CONFIG.EMPLOYMENTS;

const EmploymentHistory = () => {
  return (
    <div className='custom-list'>
      <div className='custom-list-wrapper'>
        <div className='header-title'>Employment History</div>
        <div className='heading-separator'></div>

        <div className='cus-list-box'>
          {employmentHistoryList.map((comp) => {
            return (
              <div className='cus-list-box-item' key={comp.id}>
                <div className='cus-list-box-icon'>
                  {comp.icon && (
                    <img
                      src={comp.icon}
                      className='emp-hist-img rounded-circle'
                      alt={comp.companyName}
                    />
                  )}
                </div>
                <div className='hist-sec emp-desc align-middle'>
                  <div className='custom-list-item-title'>
                    {comp.companyName}
                  </div>
                  <div className='custom-list-item-sub-title'>
                    <div className='cus-list-box-sub'>{comp.designation}</div>
                    <div className=''>
                      <small className='text-muted'>{comp.duration}</small>
                    </div>
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

export default memo(EmploymentHistory);
