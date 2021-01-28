'use strict';

const CustomException = use('App/Exceptions/CustomException');
const User = use('App/Models/User');
const Category = use('App/Models/Category');

class ProfessionalController {
	async index({ params }) {
		const { id } = params;

		const professional = await User.query()
			.where('id', id)
			.where('type', 'professional')
			.first();

		if (!professional) {
			throw new CustomException('Profissional não encontrado', 400);
		}

		return professional;
	}

	async list({ request }) {
		const { category_id, search } = request.get();

		const page = request.header('page');
		const query = User.query().where('type', 'professional');

		if (category_id) {
			query.where('category_id', category_id);
		}

		if (search) {
			const categoriesId = await Category.query()
				.where('name', 'iLIKE', `%${search.replace(/[^a-zA-Zs]/g, '_')}%`)
				.ids();

			query
				.where('name', 'iLIKE', `%${search.replace(/[^a-zA-Zs]/g, '_')}%`)
				.orWhereIn('category_id', categoriesId);
		}

		const professionals = await query.with('category').paginate(page);

		return professionals;
	}

	async spotlight() {
		const query = User.query()
			.where('type', 'professional')
			.orderBy('rating', 'desc')
			.limit(6);
		const professionals = await query.with('category').fetch();

		return professionals;
	}

	async nextToYou() {
		const query = User.query().where('type', 'professional').limit(6);
		const professionals = await query.with('category').fetch();

		return professionals;
	}
}

module.exports = ProfessionalController;
