'use strict';

const User = use('App/Models/User');
const CustomException = use('App/Exceptions/CustomException');

class AuthController {
	async register({ request, auth }) {
		const data = request.only(['name', 'email', 'password']);

		const alreadyExists = await User.findBy('email', data.email);

		if (alreadyExists) {
			throw new CustomException('Já existe um usuário com esse email', 400);
		}

		await User.create(data);

		return this.auth({ request, auth });
	}

	async auth({ request, auth }) {
		const { email, password } = request.all();

		const token = await auth.attempt(email, password);
		return token;
	}
}

module.exports = AuthController;
