function getEnv(name: keyof NodeJS.ProcessEnv): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing environment variable: ${name}`);
  }
  return value;
}

export const env = {
  R2_ACCOUNT_ID: getEnv("R2_ACCOUNT_ID"),
  R2_ACCESS_KEY: getEnv("R2_ACCESS_KEY"),
  R2_SECRET_KEY: getEnv("R2_SECRET_KEY"),
  R2_BUCKET: getEnv("R2_BUCKET"),
};