import { ApiException } from '../ApiException';
import { api } from '../api';

interface User {
  id: number;
  email: string;
  password: string;
}

const login = async (
  email: string,
  password: string
): Promise<User | ApiException> => {
  try {
    const { data } = await api.get<User[]>(
      `/users?email=${email}&password=${password}`
    );

    if (!data.length) return new ApiException('Email ou senha inválido');

    return data[0];
  } catch {
    return new ApiException('Erro ao fazer login :(');
  }
};

export const userServices = {
  login,
};
