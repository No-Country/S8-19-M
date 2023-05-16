export interface LoginProps {
  email: string
  password: string
}

export interface RegisterProps {
  email: string
  password: string
}

export interface User {
  id: string
  email: string
  password?: string
  fisrtName: string
  lastName: string
}
