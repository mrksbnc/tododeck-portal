'use strict';

import store from '@/store';
import httpClient from '@/utils/httpClient';
import ApiRoutes from '@/data/enums/endpoints';
import { parseJwt, setToken } from '@/utils/token';
import { ICreateUserDTO, ILoginDTO } from '@/types/dto';
import { USER_STORE } from '@/data/constants/vuexConstants';
import { GetAppDataResponseDTO, LoginResponseDTO } from '@/types/dto';

class ApiService {
  public async signUp(dto: ICreateUserDTO) {
    await httpClient.post(ApiRoutes.REGISTER, dto);
  }
  public async login(dto: ILoginDTO): Promise<void> {
    const response: LoginResponseDTO = await httpClient.post(ApiRoutes.LOGIN, dto);

    const token = response.data?.token;
    const decodedToken = parseJwt(token);
    setToken(token);

    await this.getAppData(decodedToken.userId);
  }

  public async getAppData(id: number): Promise<void> {
    const response: GetAppDataResponseDTO = await httpClient.get(ApiRoutes.GET_APP_DATA + id);

    const user = response?.data?.user;
    const name = response.data?.user?.firstName + ' ' + response.data?.user?.lastName;

    store.dispatch(USER_STORE.ACTIONS.SET_NAME, name);
    store.dispatch(USER_STORE.ACTIONS.ADD_USER, user);
  }
}

export default new ApiService();
