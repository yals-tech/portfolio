import React, { memo } from 'react';
import { PROFILE_CONFIG } from '../../config/profile-config';
import { ICertificationType } from '../../types/profile-config.types';
const certificationList = PROFILE_CONFIG.CERTIFICATIONS;

const CertificationsList = () => {
  return (
    <div className='custom-list'>
      <div className='custom-list-wrapper'>
        <div className='header-title'>Certifications</div>
        <div className='heading-separator'></div>
        <div className='cus-list-box'>
          {certificationList.map((cert: ICertificationType) => {
            return (
              <div className='cus-list-box-item' key={cert.id}>
                {cert.icon && (
                  <div className='cus-list-box-icon'>
                    <img
                      src={cert.icon}
                      className='emp-hist-img rounded-circle'
                      alt={cert.name}
                    />
                  </div>
                )}

                <div className='hist-sec emp-desc align-middle'>
                  <div className='custom-list-item-title '>{cert.name}</div>

                  <div className='custom-list-item-sub-title'>
                    {cert.certifiedBy}
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

export default memo(CertificationsList);
