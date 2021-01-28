'use strict';

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route');

// auth
Route.post('/signup', 'UserController.create');
Route.post('/signin', 'SessionController.create');

// category
Route.get('/category', 'CategoryController.list');
Route.post('/category', 'CategoryController.create').middleware(['admin']);
Route.put('/category/:id', 'CategoryController.update').middleware(['admin']);
Route.delete('/category/:id', 'CategoryController.delete').middleware([
	'admin',
]);

// user
Route.get('/user', 'UserController.list').middleware(['admin']);
Route.post('/user', 'UserController.create').middleware(['admin']);
Route.get('/user/:id', 'UserController.index').middleware(['editUser']);
Route.put('/user/:id', 'UserController.update').middleware(['editUser']);
Route.delete('/user/:id', 'UserController.delete').middleware(['editUser']);

// professional
Route.get('/professional', 'ProfessionalController.list');
Route.get('/professional/spotlight', 'ProfessionalController.spotlight');
Route.get('/professional/:id', 'ProfessionalController.index');
