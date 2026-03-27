declare namespace NodeJS {
  interface ProcessEnv {
    R2_ACCOUNT_ID: string;
    R2_ACCESS_KEY: string;
    R2_SECRET_KEY: string;
    R2_BUCKET: string;
  }
}

// Declaration Merging in TypeScript