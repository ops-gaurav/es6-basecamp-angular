import response  from '../../utility/json_response';

var exports = module.exports = { };

/**
 * @desc a simple controller for index route
 */
exports.getIndex = ( req, res, next ) => {
	res.sendFile ('index.html');
}