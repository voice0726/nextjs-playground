function mustGetEnv(key: string) {
  const value = process.env[key];
  if (!value || value.length === 0) {
    throw new Error(`Missing environment variable: ${key}`);
  }
  return value;
}

export const APP_HOST = mustGetEnv('APP_HOST');
export const API_HOST = mustGetEnv('API_HOST');
// note: AUTH_SECRET is not used in the code, but it is required by next-auth
mustGetEnv('AUTH_SECRET');
export const ZITADEL_CLIENT_ID = mustGetEnv('ZITADEL_CLIENT_ID');
export const ZITADEL_ISSUER = mustGetEnv('ZITADEL_ISSUER');
export const ZITADEL_WELL_KNOWN = mustGetEnv('ZITADEL_WELL_KNOWN');
