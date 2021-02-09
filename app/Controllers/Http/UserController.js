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

		user.category = await user.category().fetch();

		return user;
	}

	async create({ request }) {
		const data = request.all();

		const alreadyExists = await User.findBy('email', data.email);

		if (alreadyExists) {
			throw new CustomException('Já existe um usuário com esse email', 400);
		}

		if (!data.category_id) {
			delete data.category_id;
		}

		const user = await User.create(data);
		user.category = await user.category().fetch();

		return user;
	}

	async update({ request, params }) {
		const { id } = params;
		const data = request.all();

		const user = await User.find(id);
		if (!user) {
			throw new CustomException('Usuário não encontrado', 400);
		}

		if (!data.category_id) {
			delete data.category_id;
		}

		user.merge(data);
		await user.save();
		user.category = await user.category().fetch();

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
