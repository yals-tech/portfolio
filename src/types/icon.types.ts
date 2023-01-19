export interface IIconType {
  width?: number;
  height?: number;
  fillColor?: string;
  viewBox?: string;
}

export interface IBaseIconType extends IIconType {
  d: string;
  d2?: string;
}
