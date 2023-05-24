// import ServiceBase from '../Service.base';
// import { AxiosRequestConfig } from 'axios';
// import {
//   ICreateUserDtoV1,
//   ISuccessResponse,
//   IGetUsersResV1,
//   IGetUserResV1,
//   IGetUserProfileV1Parameters,
//   IUpdateUserDtoV1,
//   IUpdateUserV1Parameters,
//   IDeleteUserV1Parameters,
// } from './index.type';

// class UsersService extends ServiceBase {
//   public createUserV1(params: ICreateUserDtoV1, options?: AxiosRequestConfig) {
//     return this.post<ISuccessResponse>('/v1/users', params, options);
//   }
//   public getUsersV1(options?: AxiosRequestConfig) {
//     return this.get<IGetUsersResV1>('/v1/users', options);
//   }
//   public getUserProfileV1(
//     { id }: IGetUserProfileV1Parameters,
//     options?: AxiosRequestConfig
//   ) {
//     return this.get<IGetUserResV1>(`/v1/users/${id}`, options);
//   }
//   public updateUserV1(
//     { id, ...params }: IUpdateUserDtoV1 & IUpdateUserV1Parameters,
//     options?: AxiosRequestConfig
//   ) {
//     return this.patch<ISuccessResponse>(`/v1/users/${id}`, params, options);
//   }
//   public deleteUserV1(
//     { id }: IDeleteUserV1Parameters,
//     options?: AxiosRequestConfig
//   ) {
//     return this.delete<ISuccessResponse>(`/v1/users/${id}`, options);
//   }
// }
// export default new UsersService();
