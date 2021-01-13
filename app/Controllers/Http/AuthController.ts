import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Professional from 'App/Models/Professional'
import CreateProfessionalService from 'App/Services/CreateProfessionalService'

export default class AuthController {
  public async register({ request }: HttpContextContract) {
    const data: Professional = request.only(['name', 'email', 'password'])

    const createProfessionalService = new CreateProfessionalService()
    const professional = await createProfessionalService.execute(data)

    return professional
  }

  // public async authenticate() { }
}
