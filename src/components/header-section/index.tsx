import React, { memo } from 'react';
import { THEME_CONSTANT } from '../../utils/app-constants';
import { ImagePaths } from '../../utils/image-paths';
import IconHalfCircle from '../icons/half-circle-icon';
import IconLinkedin from '../icons/icon-linkedin';

import './header.scss';

const HeaderSection = (props: any) => {
  const { onThemeChange, theme } = props;

  return (
    <div className='header-section'>
      <div className='p-3 mb-2 header-banner text-white'>
        <div className='row'>
          <div className='col-lg-2 col-md-5 col-sm-12 profile-img-container'>
            <img
              src={ImagePaths.PROFILE.SUNIL}
              className='profile-img rounded-circle'
              alt='Sunil Kumar'
            />
          </div>

          <div className='col-lg-10 col-md-7 col-sm-12'>
            <h3>
              Sunil Kumar
              <div className='float-end'>
                <div className='social-icon-list'>
                  <a
                    className='social-name me-2 icon-linkedin'
                    href='https://www.linkedin.com/in/sunil-kumar-83146843/'
                    rel='noreferrer'
                    target='_blank'
                    title='LinkedIn'
                  >
                    <IconLinkedin height={20} width={20} fillColor='white' />
                  </a>
                  {/* <a
                    className='social-name me-2'
                    href='https://www.npmjs.com/~skumar-mca2010'
                    target='_blank'
                    rel='noreferrer'
                    title='NPM modules'
                  >
                    <img
                      alt='npm profile'
                      className='rounded-img social-icon'
                      src={ImagePaths.SOCIAL.NPM}
                    />
                  </a> */}

                  <a
                    className='social-name '
                    download=''
                    href={ImagePaths.RESUME_DOC}
                    target='_blank'
                    rel='noreferrer'
                  >
                    <img
                      className='rounded-img social-icon'
                      src={ImagePaths.COMMON.DOWNLOAD}
                      title='Download resume'
                      alt='download resume'
                    />
                  </a>
                </div>

                <div className='theme-switch'>
                  <button
                    className='btn btn-clear'
                    onClick={onThemeChange}
                    title='Change Theme'
                  >
                    <span className='mode-text'>
                      View in{' '}
                      {theme === THEME_CONSTANT.DARK_THEME ? 'Light' : 'Dark'}{' '}
                      Theme
                    </span>
                    <IconHalfCircle
                      fillColor={
                        theme === THEME_CONSTANT.DARK_THEME ? 'white' : 'black'
                      }
                    />
                  </button>
                </div>
              </div>
            </h3>
            <h6>UI Architect</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(HeaderSection);
