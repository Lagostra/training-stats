import { IAthlete } from "./contractTypes";

export interface ITokenResponse {
  token_type: string;
  expires_at: number;
  expires_in: number;
  refresh_token: string;
  access_token: string;
  athlete: IAthlete;
}
