export interface IField {
  required: boolean;
  min: number;
  max: number;
  pattern: string | RegExp;
}

export interface ICommon {
  value: string | number;
}

export interface IError {
  field: object;
}
