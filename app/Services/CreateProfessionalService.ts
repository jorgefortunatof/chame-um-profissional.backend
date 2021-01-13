import AppException from 'App/Exceptions/AppException'
import Professional from 'App/Models/Professional'

class CreateProfessionalService {
  public async execute({ email, name, password }: Professional) {
    const alreadyExists = await Professional.findBy('email', email)

    if (alreadyExists) {
      throw new AppException('Email já cadastrado', 400)
    }

    const professional = await Professional.create({ email, name, password })
    delete professional.password

    return professional
  }
}

export default CreateProfessionalService
