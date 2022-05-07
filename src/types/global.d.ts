export {};

declare global {
  export interface TimerData {
    hours: number;
    minutes: number;
    seconds: number;
  }

  export type Style = { [cssProperty: string]: string };

  export type RemainingCharacters = {
    [name: string]: boolean;
  };
}
