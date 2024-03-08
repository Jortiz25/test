export interface IError {
  code: number
  message: string
  data?: string
}

export interface IResponse {
  error?: IError
}

export interface IResponseData<T> {
  error?: IError
  data?: T
}

export interface IResponseAuth<T> {
  error?: IError
  data?: T
}
