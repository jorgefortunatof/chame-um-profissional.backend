'use strict';

const CustomException = use('App/Exceptions/CustomException');
const User = use('App/Models/User');

class UserController {
	async index({ params }) {
		const { id } = params;
		const user = await User.find(id);

		if (!user) {
			throw new CustomException('Usuário não encontrado', 400);
		}

		return user;
	}

	async create({ request }) {
		const data = request.only(['name', 'email', 'password']);

		const alreadyExists = await User.findBy('email', data.email);

		if (alreadyExists) {
			throw new CustomException('Já existe um usuário com esse email', 400);
		}

		const user = await User.create(data);
		delete user.password;

		return user;
	}

	async update({ request, params }) {
		const { id } = params;
		const data = request.all();

		const user = await User.find(id);
		if (!user) {
			throw new CustomException('Usuário não encontrado', 400);
		}

		user.merge(data);
		await user.save();

		return user;
	}

	async delete({ params }) {
		const { id } = params;

		const user = await User.find(id);
		if (!user) {
			throw new CustomException('Usuário não encontrado', 400);
		}

		await user.delete();
	}
}

module.exports = UserController;
