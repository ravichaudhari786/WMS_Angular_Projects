import { User } from './interface';

export const admin: User = {
  userId: 1,
  username: 'Zongbin',
  companyId:1,
  roleId:1,
  warehouseId:1,
  warehouseName:'PH',
  email: 'nzb329@163.com',
  FinantialYearId:1,
  avatar: './assets/images/avatar.png',
};

export const guest: User = {
  userId: null,
  username: 'unknown',
  companyId:0,
  roleId:0,
  warehouseId:0,
  warehouseName:'unknown',
  email: 'unknown',
  FinantialYearId:0,
  avatar: './assets/images/avatar.png',
};
