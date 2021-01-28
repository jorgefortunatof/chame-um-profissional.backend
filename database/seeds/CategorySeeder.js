'use strict';

/*
|--------------------------------------------------------------------------
| CategorySeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Database = use('Database');

class CategorySeeder {
	async run() {
		await Database.table('categories').insert([
			{ name: 'Programador' },
			{ name: 'Mecânico' },
			{ name: 'Pintor' },
			{ name: 'Designer' },
			{ name: 'Desenhista' },
			{ name: 'Encanador' },
			{ name: 'Eletricísta' },
		]);
	}
}

module.exports = CategorySeeder;
