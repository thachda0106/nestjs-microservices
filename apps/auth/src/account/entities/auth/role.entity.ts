export enum ROLE {
  Customer = 'CUSTOMER',
  Employee = 'EMPLOYEE',
  Manager = 'MANAGER',
}

export enum Type {
  Customer = 'Customer',
  Employee = 'Employee',
  Manager = 'Manager',
}

export class Role {
  id: number;
  code: ROLE;
  type: Type;
}
