export interface IProfileConfigType {
  PROJECTS: Array<IProjectConfigType>;
  QUALIFICATIONS: Array<IQualificationType>;
  SKILLS: Array<ISkillType>;
  ADDITIONAL_SKILLS?: Array<any>;
  CERTIFICATIONS: Array<ICertificationType>;
  EMPLOYMENTS: Array<any>;
  TOOLS: Array<IToolType>;
}

export interface IProjectConfigType {
  id: number;
  name: string;
  description: string;
  role: string;
  techStack: Array<string>;
  link?: string;
  rolesAndResponsibilities?: Array<string>;
}

export interface IQualificationType {
  id: number;
  name: string;
  certifiedBy: string;
  icon?: string;
}

export interface ISkillType {
  id: number;
  name: string;
  icon: string;
  duration: number;
  since: number;
  exp: number;
  percent: number;
}

export interface ICertificationType {
  id: number;
  name: string;
  certifiedBy: string;
  icon?: string;
}

export interface IEmploymentType {
  id: number;
  companyName: string;
  designation: string;
  duration: string;
  icon: string;
}

export interface IToolType {
  id: number;
  name: string;
  description: string;
  icon: string;
}
