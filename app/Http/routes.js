'use strict'

const Route = use('Route')

Route.get('/', 'MolyController.main');
Route.get('/addBook', 'MolyController.addBook');
Route.get('/addQuote', 'MolyController.addQuote');
Route.post('/addBook', 'MolyController.doAddBook');
Route.post('/addQuote', 'MolyController.doAddQuote');
Route.get('/book/:id', 'MolyController.showBook');
Route.get('/type/:id', 'MolyController.showType');
Route.get('/book/:id/quotes', 'MolyController.showQuotes');

Route.get('/book/:id/quotes/:id/delete', 'MolyController.doDeleteQuote').middleware('auth');
Route.get('/book/:id/quotes/:id/edit', 'MolyController.editQuote');
Route.post('/book/:id/quotes/:id/edit', 'MolyController.doEditQuote');

Route.get('/allBook', 'MolyController.showAllBook');
Route.get('/book/:id/addRead', 'MolyController.addRead');
Route.post('/book/:id/addRead/', 'MolyController.doAddRead');

Route.get('/book/:id/edit', 'MolyController.edit');
Route.post('/book/:id/edit', 'MolyController.doEdit');

Route.get('/profile/:id', 'MolyController.showProfile');
Route.get('/books', 'MolyController.search');

Route.get('/menu', 'MolyController.showMenu');

Route.get('/reg', 'RegistrationsController.reg');
Route.post('/reg', 'RegistrationsController.doReg');
Route.get('/login', 'RegistrationsController.login');
Route.post('/login', 'RegistrationsController.doLogin');
Route.get('/logout', 'RegistrationsController.doLogout');
Route.get('/loginAlt', 'RegistrationsController.loginAlt');
Route.post('/loginAlt', 'RegistrationsController.doLogin');

Route.group('ajax', function(){
    Route.delete('/book/:id/quotes/:id/delete', 'MolyController.ajaxDelete').middleware('auth')
    Route.post('/login', 'RegistrationsController.ajaxLogin')
    Route.get('/logout', 'RegistrationsController.ajaxLogout').middleware('auth')
}).prefix('/ajax');

