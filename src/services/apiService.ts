'use strict';

import { AxiosResponse } from 'axios';
import httpClient from '@/utils/httpClient';
import { PartialUser } from '@/types/globals';
import ApiRoutes from '@/data/enums/endpoints';
import { ICreateUserDTO, ILoginDTO } from '@/types/interfaces/dto';

class ApiService {
  public async signUp(dto: ICreateUserDTO) {
    await httpClient.post(ApiRoutes.REGISTER, dto);
  }
  public async login(dto: ILoginDTO): Promise<AxiosResponse<{ user: PartialUser; token: string }>> {
    const response = await httpClient.post(ApiRoutes.LOGIN, dto);
    return response;
  }
}

export default new ApiService();
