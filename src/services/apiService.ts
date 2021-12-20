'use strict';

import store from '@/store';
import httpClient from '@/utils/httpClient';
import ApiRoutes from '@/data/enums/endpoints';
import { parseJwt, setToken } from '@/utils/token';
import { GetCountResponseDTO, GetProjectDTO, ICreateUserDTO, ILoginDTO } from '@/types/dto';
import { USER_STORE } from '@/data/constants/vuexConstants';
import { GetAppDataResponseDTO, LoginResponseDTO } from '@/types/dto';
import user from '@/store/modules/user';

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

    const user = response.data.user;
    const userId = response.data.user.id;
    const name = response.data.user.firstName + ' ' + response.data.user.lastName;

    store.dispatch(USER_STORE.ACTIONS.SET_NAME, name);
    store.dispatch(USER_STORE.ACTIONS.ADD_USER, user);
    store.dispatch(USER_STORE.ACTIONS.SET_USER_ID, userId);
  }

  public async getProjectCount(userId: number): Promise<number> {
    const response: GetCountResponseDTO = await httpClient.get(
      ApiRoutes.GET_PROJECT_COUNT + userId
    );
    return response.data.count;
  }

  public async getTodoCount(userId: number): Promise<number> {
    const response: GetCountResponseDTO = await httpClient.get(ApiRoutes.GET_TODO_COUNT + userId);
    return response.data.count;
  }

  public async getImportantCountByUserId(userId: number): Promise<number> {
    const response: GetCountResponseDTO = await httpClient.get(
      ApiRoutes.GET_IMPORTANT_TODOS_BY_USER_ID + userId
    );
    return response.data.count;
  }

  public async getTodoCountByListId(listId: number): Promise<number> {
    const response: GetCountResponseDTO = await httpClient.get(
      ApiRoutes.GET_TODO_COUNT_BY_LIST_ID + listId
    );
    return response.data.count;
  }

  public async getDueTodayTodoCount(userId: number): Promise<number> {
    const response: GetCountResponseDTO = await httpClient.get(
      ApiRoutes.GET_DUE_TODAY_COUNT + userId
    );
    return response.data.count;
  }

  public async getDueTodayTodoCountByListId(listId: number): Promise<number> {
    const response: GetCountResponseDTO = await httpClient.get(
      ApiRoutes.GET_DUE_TODAY_COUNT_BY_LIST_ID + listId
    );
    return response.data.count;
  }

  public async getProjectsByUserId(userId: number): Promise<GetProjectDTO> {
    const response: GetProjectDTO = await httpClient.get(ApiRoutes.GET_PROJECTS + userId);
    return response;
  }
}

const instance = new ApiService();
export { instance as apiService };
