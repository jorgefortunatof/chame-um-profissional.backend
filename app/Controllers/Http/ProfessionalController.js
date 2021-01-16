'use strict';

const User = use('App/Models/User');
const Category = use('App/Models/Category');

class ProfessionalController {
	async index({ params }) {
		const { id } = params;

		const professional = await User.query()
			.where('id', id)
			.where('type', 'professional')
			.first();

		return professional;
	}

	async list({ request }) {
		const { category_id, rating, search } = request.get();

		const page = request.header('page');
		const query = User.query().where('type', 'professional');

		if (category_id) {
			query.where('category_id', category_id);
		}

		if (rating) {
			query.where('rating', '>=', rating);
		}

		if (search) {
			const categoriesId = await Category.query()
				.where('name', 'iLIKE', `%${search}%`)
				.ids();

			query
				.where('name', 'iLIKE', `%${search}%`)
				.orWhereIn('category_id', categoriesId);
		}

		const professionals = await query.with('category').paginate(page);

		return professionals;
	}
}

module.exports = ProfessionalController;
