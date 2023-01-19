import React, { memo, useEffect, useState } from 'react';
import { PROFILE_CONFIG } from '../../config/profile-config';
import { ISkillType } from '../../types/profile-config.types';
import './skill.scss';

const skills = PROFILE_CONFIG.SKILLS;
const additionalSkills = PROFILE_CONFIG.ADDITIONAL_SKILLS;

const calculatePercent = (exp: any) => {
  const totalExp = 12;
  return Math.abs(Math.round((exp / totalExp) * 100));
};

const SkillList = () => {
  const [skillsList, setSkillList] = useState(skills);

  const updateSkillSetArray = () => {
    skillsList.map((skill) => {
      skill.percent = calculatePercent(skill.exp);
      return skill;
    });

    setSkillList([...skillsList]);
  };

  useEffect(() => {
    updateSkillSetArray();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='custom-list'>
      <div className='custom-list-wrapper'>
        <div className='header-title'>Primary Skills</div>
        <div className='heading-separator'></div>
        <div className='cus-list-box'>
          {skillsList.map((skill: ISkillType) => {
            return (
              <div className='cus-list-box-item' key={skill.id}>
                <div className='cus-list-box-icon align-middle'>
                  {skill.icon && (
                    <img
                      src={skill.icon}
                      className='skill-icon rounded-circle'
                      alt={skill.name}
                    />
                  )}
                </div>
                <div className='w-100 align-middle'>
                  <div className='custom-list-item-title'>{skill.name}</div>
                  <div className='custom-list-item-sub-title'>
                    <div className='progress'>
                      <div
                        className='progress-bar'
                        role='progressbar'
                        style={{ width: `${skill.percent}%` }}
                        aria-valuenow={25}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      >
                        {skill.exp}+ years
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {additionalSkills && (
          <>
            <div className='header-title'>Additional Skills</div>
            <div className='heading-separator'></div>
            <div className='additional-skills-box'>
              {additionalSkills.map((skill: ISkillType) => {
                return (
                  <div className='add-skill-item' key={skill.id}>
                    <div className='w-100 align-middle'>
                      <div className='item-title'>{skill.name}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default memo(SkillList);
