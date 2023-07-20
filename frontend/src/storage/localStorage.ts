const set = (key: string, data: any): void => {
  localStorage.setItem(key, JSON.stringify(data));
};

const get = <T>(key: string): T | null => {
  const data = localStorage.getItem(key);

  return data ? JSON.parse(data) : null;
};

export const storage = {
  set,
  get,
};
