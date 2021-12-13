'use strict';

import httpClient from '@/utils/httpClient';
import ApiRoutes from '@/data/enums/endpoints';
import { ILoginResponseDTO } from '@/types/dto';
import { ICreateUserDTO, ILoginDTO } from '@/types/dto';

class ApiService {
  public async signUp(dto: ICreateUserDTO) {
    await httpClient.post(ApiRoutes.REGISTER, dto);
  }
  public async login(dto: ILoginDTO): Promise<ILoginResponseDTO> {
    const response = await httpClient.post(ApiRoutes.LOGIN, dto);
    return response;
  }
}

export default new ApiService();
