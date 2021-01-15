'use strict';

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
		category.name = name;
		await category.save();

		return category;
	}

	async delete({ params }) {
		const { id } = params;

		const category = await Category.find(id);
		await category.delete();

		return category;
	}

	async list() {
		const allCategories = await Category.all();

		return allCategories;
	}
}

module.exports = CategoryController;
