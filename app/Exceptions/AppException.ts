import { Exception } from '@poppinss/utils'
// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

/*
|--------------------------------------------------------------------------
| Exception
|--------------------------------------------------------------------------
|
| The Exception class imported from `@adonisjs/core` allows defining
| a status code and error code for every exception.
|
| @example
| new EmailAppException('message', 500, 'E_RUNTIME_EXCEPTION')
|
*/
export default class AppException extends Exception {
  constructor(message: string, statusCode: number) {
    super(message, statusCode)
  }
}
