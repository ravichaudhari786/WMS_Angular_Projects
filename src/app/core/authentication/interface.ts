export interface User {
  [propName: string]: any;

  userId: number | string | null;
  username?: string;
  email?: string;
  companyId:number;
  roleId:number;
  warehouseId:number;
  warehouseName:string;
  FinantialYearId:number;
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
