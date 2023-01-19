import { THEME_CONSTANT } from './app-constants';
import { ImagePaths } from './image-paths';

export const THEME = {
  getTheme: () => {
    return (
      localStorage.getItem(THEME_CONSTANT.KEY) || THEME_CONSTANT.DARK_THEME
    );
  },
  setTheme: (themeValue: string) => {
    localStorage.setItem(THEME_CONSTANT.KEY, themeValue);
  }
};

export const getTechImageUrl = (tech: string) => {
  switch (tech) {
    case 'ReactJs':
      return ImagePaths.TECH.REACT;

    case 'Redux':
      return ImagePaths.TECH.REDUX;

    case 'Angular Js':
    case 'Angular':
      return ImagePaths.TECH.ANGULAR;

    case 'NodeJs':
      return ImagePaths.TECH.NODE;

    case 'AWS':
      return ImagePaths.TECH.AWS;

    case 'Web API':
      return ImagePaths.TECH.DOT_NET;

    case 'JQuery':
      return ImagePaths.TECH.JQUERY;

    case 'JavaScript':
      return ImagePaths.TECH.JS;

    case 'TypeScript':
      return ImagePaths.TECH.TS;

    case 'CSS':
    case 'SCSS':
      return ImagePaths.TECH.CSS;
  }
};
