import { User } from '../../services/api/auth/authService';
import { storage } from '../utils/localStorage';

const KEY = '@auth';

const save = (data: User): void => {
  storage.set(KEY, data);
};

const get = (): User | null => {
  return storage.get(KEY);
};

export const authStore = {
  save,
  get,
};
