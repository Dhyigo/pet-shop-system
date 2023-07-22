import { ApiException } from '../../../models/Exceptions';
import { User } from '../../../models/Auth';
import { api } from '../api';
import { storage } from '../../../storage/localStorage';
import { storageKeys } from '../../../storage';

const isAuthenticated = (): boolean => storage.get(storageKeys.AUTH) != null;

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

    storage.set(storageKeys.AUTH, data[0]);

    return data[0];
  } catch {
    return new ApiException('Erro ao fazer login :(');
  }
};

const logOut = (): void => storage.remove(storageKeys.AUTH);

export const userServices = {
  login,
  logOut,
  isAuthenticated,
};
