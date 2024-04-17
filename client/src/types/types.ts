type LinkType = {
  title: string | null;
  link: string | null;
};

type DevTypes = {
  firstname: string | null;
  lastname: string | null;
};

export type LoginDevTypes = {
  username: string;
  password: string;
};

export type SignupDevTypes = DevTypes & {
  username: string;
  password: string | null;
  confirm_password: string | null;
};

export type GetAllDevDataTypes = DevTypes & {
  id: string;
  middlename: string | null;
};

export type GetDevDataTypes = GetAllDevDataTypes & {
  username: string | null;
  bio: string | null;
  stacks: string | null;
  links: LinkType;
};

export type AddORUpdateDevDataTypes = GetDevDataTypes & {
  id?: string | null;
  username: string | null;
  password: string | null;
  confirm_password: string | null;
};
