import ServiceBase from '../Service.base';
import { AxiosRequestConfig } from 'axios';
import { ILoginDtoV1, IUserLoginResV1 } from './index.type';

class AuthService extends ServiceBase {
  public authController_login(
    params: ILoginDtoV1,
    options?: AxiosRequestConfig
  ) {
    return this.post<IUserLoginResV1>('/v1/auth/login', params, options);
  }
}
export default new AuthService();
