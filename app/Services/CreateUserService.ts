import AppException from 'App/Exceptions/AppException'
import User from 'App/Models/User'

class CreateUserService {
  public async execute({ email, name, password }: User) {
    const alreadyExists = await User.findBy('email', email)

    if (alreadyExists) {
      throw new AppException('Email já cadastrado', 400)
    }

    const user = await User.create({ email, name, password })
    delete user.password

    return user
  }
}

export default CreateUserService
