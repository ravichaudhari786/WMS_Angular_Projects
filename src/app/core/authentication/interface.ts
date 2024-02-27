export interface User {
  [propName: string]: any;

  userId: number | string | null;
  username?: string;
  email?: string;
  companyId: number;
  roleId: number;
  warehouseId: number;
  warehouseName: string;
  FinantialYearId: number;
  avatar?: string;
}

export interface Token {
  access_token?: string;
  token?: string;
  token_type?: string;
  expires_in?: number;
}

export interface RefreshToken {
  refresh: boolean;
  accessToken: string;
  tokenType: string;
  exp: number;

  refreshTime: () => number;
  valid: () => boolean;
}

export interface ComponetMenus {
  AngularChildName: string;
  AngularChildRoute: string;
  AngularIcon: string;
  Delete_flg: boolean;
  DisplayName: string;
  Edit_flg: boolean;
  Export_flg: boolean;
  GSeqNo: number;
  GroupName: string;
  IconName: string;
  List_flg: boolean;
  MasterMenu: string;
  New_flg: boolean;
  Path: string;
  Print_flg: boolean;
  UIGroupID: number;
  UIMasterID: number;
  UIName: string;
  USeqNo: number;
  type: string;
}

export interface SelectedMenus {
  AngularChildName: string;
  AngularChildRoute: string;
  AngularIcon: string;
  Delete_flg: boolean;
  DisplayName: string;
  Edit_flg: boolean;
  Export_flg: boolean;
  GSeqNo: number;
  GroupName: string;
  IconName: string;
  List_flg: boolean;
  MasterMenu: string;
  New_flg: boolean;
  Path: string;
  Print_flg: boolean;
  UIGroupID: number;
  UIMasterID: number;
  UIName: string;
  USeqNo: number;
  type: string;
}