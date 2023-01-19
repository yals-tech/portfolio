import React, { memo } from 'react';
import { PROFILE_CONFIG } from '../../config/profile-config';
import { IProjectConfigType } from '../../types/profile-config.types';
import { getTechImageUrl } from '../../utils/util';
const projects = PROFILE_CONFIG.PROJECTS;

const RecentProjects = () => {
  return (
    <div className='custom-list'>
      <div className='custom-list-wrapper'>
        <div className='header-title'>Most Recent Projects</div>
        <div className='heading-separator'></div>
        <div className='project-grid'>
          {projects.map((project: IProjectConfigType, index: number) => {
            return (
              <div className='project-item' key={project.id}>
                <div>
                  <div className='project-name'>
                    {project.name}
                    {project.link && (
                      <>
                        <small className='project-link'>
                          <a
                            href={project.link}
                            target='_blank'
                            rel='noreferrer'
                            className='bg-link me-2'
                          >
                            {project.link}
                          </a>
                        </small>
                      </>
                    )}
                  </div>
                  <div className='project-desc'>{project.description}</div>

                  {index === 0 && (
                    <div className='mt-3'>
                      <div className='project-name text-muted'>
                        Roles and Responsibilities include:
                      </div>

                      <div className='project-desc'>
                        <ol className='mb-3'>
                          {project.rolesAndResponsibilities &&
                            project.rolesAndResponsibilities.map((resp) => {
                              return <li key={`${resp}-${index}`}>{resp}</li>;
                            })}
                        </ol>
                      </div>
                    </div>
                  )}
                </div>
                <div className='project-split-box'>
                  <div className='project-split'>
                    <div className='project-split-right'>
                      {project.role}
                      <span className='project-tech-row'>
                        <small>
                          {project.techStack.map((st, ind) => {
                            return (
                              <span
                                className='me-2'
                                key={`${st}-${index}-${ind}`}
                              >
                                <img
                                  src={getTechImageUrl(st)}
                                  className='tech-icon'
                                  title={st}
                                />
                              </span>
                            );
                          })}
                        </small>
                      </span>
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

export default memo(RecentProjects);
