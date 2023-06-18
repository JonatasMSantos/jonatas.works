/// <reference path="../.astro/types.d.ts" />
/// <reference types="@astrojs/image/client" />


interface ImportMetaEnv {
    readonly TRELLO_API_KEY: string;
    readonly TRELLO_TOKEN: string;
    readonly TRELLO_BOARD: string;
    // mais variáveis de ambiente...
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }