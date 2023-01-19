import React from 'react';
import { SOCIAL_URL } from '../../utils/app-constants';

const infoList = [
  {
    id: 1,
    name: 'Phone',
    description: '+91 9818234200',
    isPhone: true
  },
  {
    id: 2,
    name: 'Email',
    description: 'skumar.mca2010@gmail.com',
    isEmail: true
  },
  {
    id: 3,
    name: 'LinkedIn',
    description: SOCIAL_URL.LINKEDIN,
    isLink: true
  },

  {
    id: 4,
    name: 'Location',
    description: 'Noida, Uttar Pradesh, India'
  },
  {
    id: 5,
    name: 'Date of Birth',
    description: '11-Apr-1986'
  },
  {
    id: 6,
    name: 'US VISA',
    description: 'B1/B2'
  }
];

const GenerateInfoValue = ({ info }: any) => {
  if (info.isPhone) {
    return <a href={`tel:${info.description}`}>{info.description}</a>;
  }

  if (info.isEmail) {
    return <a href={`mailto:${info.description}`}>{info.description}</a>;
  }

  if (info.isLink) {
    return (
      <a target='_blank' rel='noreferrer' href={`${info.description}`}>
        {info.description}
      </a>
    );
  }

  return info.description;
};

const PersonalInfo = () => {
  return (
    <div className='custom-list mb-3'>
      <div className='custom-list-wrapper'>
        <div className='header-title'>Info</div>
        <div className='heading-separator'></div>
        <div className='cus-list-box'>
          {infoList.map((info) => {
            return (
              <div className='cus-list-box-item' key={info.id}>
                <div>
                  <div className='custom-list-item-title'>{info.name}</div>

                  <div className='custom-list-item-sub-title'>
                    <GenerateInfoValue info={info} />
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

export default PersonalInfo;
