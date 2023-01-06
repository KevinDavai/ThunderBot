declare global {
  namespace NodeJS {
    interface ProcessEnv {
      CLIENT_TOKEN: string;
    }
  }
}

export {};
