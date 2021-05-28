const ipConfig = {
  develop: {
    ip: '',
  },
  production: {
    ip: '',
  },
};

export const appConfig = Object.assign(
  ipConfig.all,
  ipConfig[ipConfig.all.env],
);
