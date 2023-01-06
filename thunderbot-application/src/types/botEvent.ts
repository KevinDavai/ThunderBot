export interface botEvent {
  name: string;
  once?: boolean | false;
  execute: (...args: any[]) => void;
}
