declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'dev | prod';
      DISCORD_CLIENT_ID: string;
      DISCORD_CLIENT_SECRET: string;
      DISCORD_REDIRECT_URI: string;

      API_PORT: number;
      COOKIE_SECRET: string;

      MONGO_URI: string;
    }
  }
}

export {};
