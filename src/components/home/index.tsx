import React, { memo, useEffect, useState } from 'react';
import { THEME_CONSTANT } from '../../utils/app-constants';
import { THEME } from '../../utils/util';
import HeaderSection from '../header-section';
import LeftSection from '../left-section';
import PersonalInfo from '../personal-info';
import QualificationList from '../qualifications';
import ToolsUsed from '../tools-used';
import './home.scss';

const Home = () => {
  const [theme, setTheme] = useState(THEME_CONSTANT.LIGHT_THEME);

  const onThemeChange = () => {
    const themeValue =
      theme === THEME_CONSTANT.LIGHT_THEME
        ? THEME_CONSTANT.DARK_THEME
        : THEME_CONSTANT.LIGHT_THEME;
    THEME.setTheme(themeValue);
    setTheme(() => themeValue);
  };

  useEffect(() => {
    setTheme(() => THEME.getTheme());
  }, []);

  return (
    <div className={`home-layout theme-${theme}`}>
      <div className='row'>
        <div className='col-md-12'>
          <HeaderSection
            onThemeChange={onThemeChange}
            theme={theme}
            key={theme}
          />
        </div>

        <div className='col-lg-8 col-md-12 left-section'>
          <LeftSection />
        </div>

        <div className='col-lg-4 col-md-12'>
          {/* <CertificationsList /> */}
          <QualificationList />
          <ToolsUsed />
          <PersonalInfo />
        </div>
      </div>
    </div>
  );
};

export default memo(Home);
