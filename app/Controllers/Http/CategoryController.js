'use strict';

const CustomException = use('App/Exceptions/CustomException');
const Category = use('App/Models/Category');

class CategoryController {
	async create({ request }) {
		const data = request.only(['name']);
		const category = await Category.create(data);

		return category;
	}

	async update({ request, params }) {
		const { id } = params;
		const { name } = request.only(['name']);

		const category = await Category.find(id);
		if (!category) {
			throw new CustomException('Categoria não encontrada', 400);
		}

		category.name = name;
		await category.save();

		return category;
	}

	async delete({ params }) {
		const { id } = params;

		const category = await Category.find(id);
		if (!category) {
			throw new CustomException('Categoria não encontrada', 400);
		}

		await category.delete();

		return { ok: true };
	}

	async list() {
		const allCategories = await Category.all();

		return allCategories;
	}
}

module.exports = CategoryController;
