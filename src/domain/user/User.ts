export interface UserProps {
  id: string;
  firstName: string;
  secondName: string;
  lastName: string;
  secondLastName: string;
  phone: string;
  address: string;
  city: string;
}

export class User {
  constructor(public props: UserProps) {}
}
