class ILoginDTO {
  password?: string;
  email?: string;
}

interface Data {
  gr_pessoa_id: number;
  nome: string;
  token_auth: string;
}

export interface IUserLoginResponse {
  code: number;
  message: string;
  data: Data;
}

export { ILoginDTO };
