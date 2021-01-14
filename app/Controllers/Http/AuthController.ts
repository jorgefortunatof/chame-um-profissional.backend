import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'
import CreateUserService from 'App/Services/CreateUserService'

export default class AuthController {
  public async register({ request }: HttpContextContract) {
    const data: User = request.only(['name', 'email', 'password'])

    const createUserService = new CreateUserService()
    const user = await createUserService.execute(data)

    return user
  }

  // public async authenticate() { }
}
