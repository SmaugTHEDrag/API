const bookService = require('../services/book.service');

module.exports = function (app) {
    /**
     * @api {GET} /api/v1/books Get All
     * @apiVersion 1.0.0
     * @apiName getAll
     * @apiGroup Book
     * @apiPermission Every type of user
     *
     * @apiDescription Get all book
     *
     * @apiExample Example usage:
     * curl -i https://project-api-2625.onrender.com/api/v1/books
     *
     *
     * @apiSuccessExample Success-Response:
     *     HTTP/1.1 200 OK
     *     {
     *          "data":{
     *              "id": "2",
     *              ...
     *          },
     *          "result": "ok",
     *          "message" ""
     *     }
     *
     * @apiError invalid input data
     *
     * @apiErrorExample Error-Response:
     *     HTTP/1.1 400 Bad Request
     *     {
     *       "result": "fail",
     *       "message": "get_list_book_fail"
     *     }
     */
    app.get('/api/v1/books', bookService.getAll);
    /**
     * @api {GET} /api/v1/books/:id Get One
     * @apiVersion 1.0.0
     * @apiName getOne
     * @apiGroup Book
     * @apiPermission Every type of user
     *
     * @apiDescription Get one book
     *
     * @apiParam {string} id ID of book, on params
     *
     * @apiExample Example usage:
     * curl -i https://project-api-2625.onrender.com/api/v1/books/:id
     *
     * @apiSuccess {String} id the ID of book
     * @apiSuccess {String} title title of book
     *
     * @apiSuccessExample Success-Response:
     *     HTTP/1.1 200 OK
     *     {
     *          "data":{
     *              "id": "2",
     *              ...
     *          },
     *          "result": "ok",
     *          "message" ""
     *     }
     *
     * @apiError invalid input data
     *
     * @apiErrorExample Error-Response:
     *     HTTP/1.1 400 Bad Request
     *     {
     *       "result": "fail",
     *       "message": "get_book_fail"
     *     }
     */
    app.get('/api/v1/books/:id', bookService.getOne);
    /**
     * @api {POST} /api/v1/auth/books Create One
     * @apiVersion 1.0.0
     * @apiName createOne
     * @apiGroup Book
     * @apiPermission Every type of user
     *
     * @apiDescription Create one book
     *
     * @apiParam {string} access_token token of account, on params
     * 
     * @apiBody {String} title the title of the book
     * @apiBody {String} author the name of the author
     * @apiBody {String} parts the book parts
     * @apiBody {String} category the book category
     *
     * @apiExample Example usage:
     * curl -i https://project-api-2625.onrender.com/api/v1/auth/books
     *
     *
     * @apiSuccessExample Success-Response:
     *     HTTP/1.1 200 OK
     *     {
     *          "data":{
     *              "id": "2",
     *              ...
     *          },
     *          "result": "ok",
     *          "message" ""
     *     }
     *
     * @apiError invalid input data
     *
     * @apiErrorExample Error-Response:
     *     HTTP/1.1 400 Bad Request
     *     {
     *       "result": "fail",
     *       "message": "create_book_fail"
     *     }
     */
    app.post('/api/v1/auth/books', bookService.create);
    /**
     * @api {PUT} /api/v1/auth/books/:id Update One
     * @apiVersion 1.0.0
     * @apiName UpdateOne
     * @apiGroup Book
     * @apiPermission Every type of user
     *
     * @apiDescription Update one book
     * 
     * @apiParam {string} id ID of book, on params
     * @apiParam {string} access_token token of account, on params
     * 
     * @apiBody {String} title the title of the book
     * @apiBody {String} author the name of the author
     * @apiBody {String} parts the book parts
     * @apiBody {String} category the book category
     *
     * @apiExample Example usage:
     * curl -i https://project-api-2625.onrender.com/api/v1/auth/books/:id
     *
     *
     * @apiSuccessExample Success-Response:
     *     HTTP/1.1 200 OK
     *     {
     *          "data":{
     *              "id": "2",
     *              ...
     *          },
     *          "result": "ok",
     *          "message" ""
     *     }
     *
     * @apiError invalid input data
     *
     * @apiErrorExample Error-Response:
     *     HTTP/1.1 400 Bad Request
     *     {
     *       "result": "fail",
     *       "message": "update_book_fail"
     *     }
     */
    app.put('/api/v1/auth/books/:id', bookService.update);
    /**
     * @api {DELETE} /api/v1/auth/books/:id Delete One
     * @apiVersion 1.0.0
     * @apiName DeleteOne
     * @apiGroup Book
     * @apiPermission Every type of user
     *
     * @apiDescription Delete one book
     *
     * @apiParam {string} id ID of book, on params
     * @apiParam {string} access_token token of account, on params
     * 
     *
     * @apiExample Example usage:
     * curl -i https://project-api-2625.onrender.com/api/v1/auth/books/:id
     *
     *
     * @apiSuccessExample Success-Response:
     *     HTTP/1.1 200 OK
     *     {
     *          "data":{
     *              "id": "2",
     *              ...
     *          },
     *          "result": "ok",
     *          "message" ""
     *     }
     *
     * @apiError invalid input data
     *
     * @apiErrorExample Error-Response:
     *     HTTP/1.1 400 Bad Request
     *     {
     *       "result": "fail",
     *       "message": "delete_book_fail"
     *     }
     */
    app.delete('/api/v1/auth/books/:id', bookService.delete);
};
