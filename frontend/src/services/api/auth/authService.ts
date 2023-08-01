import { ApiException } from '../../../models/Exceptions';
import { User } from '../../../models/Auth';
import { api } from '../api';
import { storage } from '../../../storage/localStorage';

const AUTH_KEY = '@auth';

const isAuthenticated = (): boolean => storage.get(AUTH_KEY) != null;

const getUserInfos = (): User | null => storage.get<User>(AUTH_KEY);

const login = async (
  email: string,
  password: string
): Promise<User | ApiException> => {
  try {
    const { data } = await api.get<User[]>(
      `/users?email=${email}&password=${password}`
    );

    if (!data.length) {
      return new ApiException('Email ou senha inválido');
    }

    storage.set(AUTH_KEY, data[0]);

    return data[0];
  } catch {
    return new ApiException('Erro ao fazer login :(');
  }
};

const create = async (UserData: User): Promise<User | ApiException> => {
  try {
    const { data } = await api.post<User>('/users', UserData);

    storage.set(AUTH_KEY, data);

    return data;
  } catch {
    return new ApiException('Erro ao criar usuário');
  }
};

const logOut = (): void => storage.remove(AUTH_KEY);

export const userServices = {
  create,
  login,
  logOut,
  isAuthenticated,
  getUserInfos,
};
