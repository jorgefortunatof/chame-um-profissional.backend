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

Route.post('/signup', 'UserController.create');
Route.post('/signin', 'SessionController.create');

// category
Route.post('/category', 'CategoryController.create').middleware(['auth']);
Route.put('/category/:id', 'CategoryController.update').middleware(['auth']);
Route.delete('/category/:id', 'CategoryController.delete').middleware(['auth']);
Route.get('/category', 'CategoryController.list');

// professional
Route.post('/user', 'UserController.create').middleware(['authAdmin']);
Route.put('/user/:id', 'UserController.update').middleware(['authAdmin']);
