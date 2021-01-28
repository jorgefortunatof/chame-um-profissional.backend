'use strict';

/*
|--------------------------------------------------------------------------
| UserSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Database = use('Database');

class UserSeeder {
	async run() {
		await Database.table('users').insert([
			{
				name: 'Jorge Luiz',
				email: 'jorge1@gmail.com',
				password:
					'$2a$10$Q45MRn1IAcTY0zYpt6lJpefs5x2DyuiJFztNpuhA/kHzR/ne3cKz6',
				type: 'professional',
				category_id: 1,
			},
			{
				name: 'Jonas neto da silva',
				email: 'jonas@gmail.com',
				password:
					'$2a$10$Q45MRn1IAcTY0zYpt6lJpefs5x2DyuiJFztNpuhA/kHzR/ne3cKz6',
				type: 'professional',
				category_id: 2,
			},
			{
				name: 'João ta maluco mano',
				email: 'joao@gmail.com',
				password:
					'$2a$10$Q45MRn1IAcTY0zYpt6lJpefs5x2DyuiJFztNpuhA/kHzR/ne3cKz6',
				type: 'professional',
				category_id: 6,
			},
			{
				name: 'Catarina menina',
				email: 'catarina@gmail.com',
				password:
					'$2a$10$Q45MRn1IAcTY0zYpt6lJpefs5x2DyuiJFztNpuhA/kHzR/ne3cKz6',
				type: 'professional',
				category_id: 2,
			},
			{
				name: 'Cristina Rafaela',
				email: 'cristina@gmail.com',
				password:
					'$2a$10$Q45MRn1IAcTY0zYpt6lJpefs5x2DyuiJFztNpuhA/kHzR/ne3cKz6',
				type: 'professional',
				category_id: 3,
			},
			{
				name: 'Dado vila lobos',
				email: 'dado@gmail.com',
				password:
					'$2a$10$Q45MRn1IAcTY0zYpt6lJpefs5x2DyuiJFztNpuhA/kHzR/ne3cKz6',
				type: 'professional',
				category_id: 4,
			},
			{
				name: 'Mateus Castro',
				email: 'mateus@gmail.com',
				password:
					'$2a$10$Q45MRn1IAcTY0zYpt6lJpefs5x2DyuiJFztNpuhA/kHzR/ne3cKz6',
				type: 'professional',
				category_id: 5,
			},
		]);
	}
}

module.exports = UserSeeder;
