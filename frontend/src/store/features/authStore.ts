import { User } from '../../services/api/auth/authService';

const KEY = '@auth';

const save = (data: User): void => {
  return localStorage.setItem(KEY, JSON.stringify(data));
};

const get = (): User | null => {
  const auth = localStorage.getItem(KEY);

  return auth ? JSON.parse(auth) : null;
};

export const authStore = {
  save,
  get,
};
