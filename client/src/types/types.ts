export type UserValueTypes = {
  username: string;
  firstname?: string;
  middlename?: string;
  lastname?: string;
  password: string;
  confirm_password?: string;
};

export type DevTypes = {
  id?: number | string;
  username?: string;
  firstname: string;
  middlename: string;
  lastname: string;
  bio: string;
  stacks?: [];
  links?: [];
};
