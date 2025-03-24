export enum EnumIntl {
  KAZAK = "kz",
  ENGLISH = "en",
  RUSSIAN = "ru",
}

// types
export type IntlType = EnumIntl.ENGLISH | EnumIntl.RUSSIAN | EnumIntl.KAZAK;

export interface ILocale {
  name: string;
  locale: IntlType;
  short_name: string;
}

export interface PropsWithTitle {
  title: string;
  query?: string;
}
