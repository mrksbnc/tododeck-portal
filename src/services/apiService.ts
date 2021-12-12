'use strict';

import httpClient from '@/utils/httpClient';
import ApiRoutes from '@/data/enums/endpoints';
import { ICreateUserDTO } from '@/types/interfaces/dto';

class ApiService {
  public async signUp(dto: ICreateUserDTO) {
    await httpClient.post(ApiRoutes.REGISTER, dto);
  }
}

export default new ApiService();
