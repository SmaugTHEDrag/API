const accountService = require('../services/account.service');

module.exports = function (app) {
    /**
     * @api {GET} /api/v1/auth/accounts Get All
     * @apiVersion 1.0.0
     * @apiName getAll
     * @apiGroup Accounts
     * @apiPermission Every type of user
     *
     * @apiDescription Get all account
     *
     * @apiParam {string} access_token token of account, on params
     *
     * @apiExample Example usage:
     * curl -i https://project-api-2625.onrender.com/api/v1/auth/accounts
     *
     * @apiSuccess {String} id the ID of account
     * @apiSuccess {String} title of account
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
     *       "message": "unavailable_account"
     *     }
     */
    app.get('/api/v1/auth/accounts', accountService.getAll);
    /**
     * @api {GET} /api/v1/auth/accounts/:id Get One
     * @apiVersion 1.0.0
     * @apiName getOne
     * @apiGroup Accounts
     * @apiPermission Every type of user
     *
     * @apiDescription Get one account
     *
     * @apiParam {string} id ID of account, on params
     * @apiParam {string} access_token token of account, on params
     *
     * @apiExample Example usage:
     * curl -i https://project-api-2625.onrender.com/api/v1/auth/accounts/2
     *
     * @apiSuccess {String} id the ID of account
     * @apiSuccess {String} title title of account
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
     *       "message": "invalid input"
     *     }
     */
    app.get('/api/v1/auth/accounts/:id', accountService.getOne);
    /**
     * @api {POST} /api/v1/accounts/login Login
     * @apiVersion 1.0.0
     * @apiName Login
     * @apiGroup Accounts
     * @apiPermission Every type of user
     *
     * @apiDescription Login to account
     *
     * @apiBody {String} login_name the unique name of user for login
     * @apiBody {String} password password of user
     *
     * @apiExample Example usage:
     * curl -i https://project-api-2625.onrender.com/api/v1/accounts/login
     *
     * @apiSuccess {String} id the ID of account
     * @apiSuccess {String} title of account
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
     *       "result": "400 Unauthorized error",
     *       "message": "login_fail"
     *     }
     */
    app.post('/api/v1/accounts/login', accountService.login);
    /**
     * @api {POST} /api/v1/accounts/register Register
     * @apiVersion 1.0.0
     * @apiName RegisterOne
     * @apiGroup Accounts
     * @apiPermission Every type of user
     *
     * @apiDescription Get register account
     *
     * @apiBody {String} login_name the unique name of user for login
     * @apiBody {String}  the name of user.
     * @apiBody {String} password password of user
     * 
     *
     * @apiExample Example usage:
     * curl -i https://project-api-2625.onrender.com/api/v1/accounts/register
     *
     * @apiSuccess {String} id the ID of account
     * @apiSuccess {String} title title of account
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
     *       "message": "invalid input"
     *     }
     */
    app.post('/api/v1/accounts/register', accountService.register);
    /**
     * @api {POST} /api/v1/accounts Create One
     * @apiVersion 1.0.0
     * @apiName createOne
     * @apiGroup Accounts
     * @apiPermission Every type of user
     *
     * @apiDescription Create one account
     *
     * @apiBody {String} login_name the unique name of user for login
     * @apiBody {String}  the name of user.
     * @apiBody {String} password password of user
     *
     * @apiExample Example usage:
     * curl -i https://project-api-2625.onrender.com/api/v1/accounts
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
     *       "message": "invalid input"
     *     }
     */
    app.post('/api/v1/accounts', accountService.create);
    /**
     * @api {PUT} /api/v1/auth/accounts/:id Update One
     * @apiVersion 1.0.0
     * @apiName UpdateOne
     * @apiGroup Accounts
     * @apiPermission Every type of user
     *
     * @apiDescription Update one account
     *
     * @apiParam {string} id ID of account, on params
     * @apiParam {string} access_token token of account, on params
     * 
     * @apiBody {String} login_name the unique name of user for login
     * @apiBody {String} password the new password of user.
     *
     * @apiExample Example usage:
     * curl -i https://project-api-2625.onrender.com/api/v1/auth/accounts/:id
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
     *       "message": "invalid input"
     *     }
     */
    app.put('/api/v1/auth/accounts/:id', accountService.update);
    /**
     * @api {PUT} /api/v1/auth/accounts Updates All
     * @apiVersion 1.0.0
     * @apiName Update All
     * @apiGroup Accounts
     * @apiPermission Every type of user
     *
     * @apiDescription Update all account
     *
     * @apiParam {string} access_token token of account, on params
     *
     * @apiExample Example usage:
     * curl -i https://project-api-2625.onrender.com/api/v1/auth/accounts
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
     *       "message": "invalid input"
     *     }
     */
    app.put('/api/v1/auth/accounts', accountService.updates);
    /**
     * @api {DELETE} /api/v1/auth/accounts/:id Delete One
     * @apiVersion 1.0.0
     * @apiName Delete One
     * @apiGroup Accounts
     * @apiPermission Every type of user
     *
     * @apiDescription Delete one account
     *
     * @apiParam {string} id ID of account, on params
     * @apiParam {string} access_token token of account, on params
     *
     * @apiExample Example usage:
     * curl -i https://project-api-2625.onrender.com/api/v1/auth/accounts/:id
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
     *       "message": "invalid input"
     *     }
     */
    app.delete('/api/v1/auth/accounts/:id', accountService.delete);
    /**
     * @api {DELETE} /api/v1/auth/accounts/:id Delete All
     * @apiVersion 1.0.0
     * @apiName Delete All
     * @apiGroup Accounts
     * @apiPermission Every type of user
     *
     * @apiDescription Delete all account
     *
     * @apiParam {string} id ID of account, on params
     * @apiParam {string} access_token token of account, on params
     *
     * @apiExample Example usage:
     * curl -i https://project-api-2625.onrender.com/api/v1/auth/accounts
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
     *       "message": "invalid input"
     *     }
     */
    app.delete('/api/v1/auth/accounts', accountService.deletes);
    //app.delete('/api/v1/auth/accounts', accountService.logout);
};
