export enum AppRoles {
  DEFAULT = 'DEFAULT',
  ADMIN = 'ADMIN',
}

export interface IProfile {
  readonly id: string;
  readonly username: string;
  readonly email: string;
  readonly shortName: string;
  readonly firstName: string;
  readonly middleName: string;
  readonly lastName: string;
  readonly address: string;
  readonly phone: string;
  readonly avatar: string;
  readonly roles: AppRoles;
  readonly date: Date;
  readonly createdAt: Date;
  readonly updatedAt: Date;
}

export interface ISocial {
  readonly id: string;
  readonly name: string;
  readonly code: string;
  readonly link: string;
  readonly icon: string;
  readonly createdAt: Date;
  readonly updatedAt: Date;
}
