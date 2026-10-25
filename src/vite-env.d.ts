/// <reference types="vite/client" />

/** Adres strony bez końcowego ukośnika, wstawiany przy buildzie (patrz vite.config.ts). */
declare const __SITE_URL__: string;

interface ImportMetaEnv {
  /** Klucz Web3Forms. Bez niego formularz otwiera WhatsApp z gotową wiadomością. */
  readonly VITE_WEB3FORMS_KEY?: string;
}
