'use strict';

import store from '@/store';
import httpClient from '@/utils/httpClient';
import ApiRoutes from '@/data/enums/endpoints';
import { parseJwt, setToken } from '@/utils/token';
import { GetCountResponseDTO, ICreateUserDTO, ILoginDTO } from '@/types/dto';
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

  public async getProjectCount(projectId: number) {
    const response: GetCountResponseDTO = await httpClient.get(
      ApiRoutes.GET_PROJECT_COUNT + projectId
    );
    return response;
  }

  public async getTodoCount(userId: number) {
    const response: GetCountResponseDTO = await httpClient.get(ApiRoutes.GET_TODO_COUNT + userId);
    return response;
  }

  public async getTodoCountByListId(listId: number) {
    const response: GetCountResponseDTO = await httpClient.get(
      ApiRoutes.GET_TODO_COUNT_BY_LIST_ID + listId
    );
    return response;
  }

  public async getDueTodayTodoCount(userId: number) {
    const response: GetCountResponseDTO = await httpClient.get(
      ApiRoutes.GET_DUE_TODAY_COUNT + userId
    );
    return response;
  }

  public async getDueTodayTodoCountByListId(listId: number) {
    const response: GetCountResponseDTO = await httpClient.get(
      ApiRoutes.GET_DUE_TODAY_COUNT_BY_LIST_ID + listId
    );
    return response;
  }
}

const instance = new ApiService();
export { instance as apiService };
