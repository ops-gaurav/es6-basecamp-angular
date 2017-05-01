/**
 * the JSON response formats
 */
module.exports = {
	success: message => {
		return { status: 'success', message: message, status: 200 }
	},

	error: message => {
		return { status: 'error', message: message, code: 201 }
	}

}