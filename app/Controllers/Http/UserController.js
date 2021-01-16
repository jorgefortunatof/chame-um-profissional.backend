'use strict';

const User = use('App/Models/User');

class UserController {
	async create({ request }) {
		const data = request.only(['name', 'email', 'password']);

		const user = await User.create(data);
		delete user.password;

		return user;
	}

	async update({ request, params }) {
		const { id } = params;
		const data = request.all();

		const user = await User.find(id);
		user.merge(data);
		await user.save();

		return user;
	}

	async delete({ params }) {
		const { id } = params;

		const user = await User.find(id);
		user.delete();

		return { ok: true };
	}
}

module.exports = UserController;
