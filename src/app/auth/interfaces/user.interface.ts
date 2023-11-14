export interface User {
  id: number,
  email: string,
  google: boolean,
}

export interface TokenResponse {
  token: string,
}

export interface UserAndToken {
  user: User,
  token: string,
}
