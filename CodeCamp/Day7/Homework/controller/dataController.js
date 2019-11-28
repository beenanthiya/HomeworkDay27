var dataModel = require('../model/dataModel')

const axios = require('axios')

module.exports.send = async function(req, res) {
		var response = await axios.get('https://reqres.in/api/users/1', {
		header: { Authorization: 'Bearer someToken' }
	})
	// console.log(response.data.data);

	
	res.status(200).send(response.data)
}

module.exports.send2 = async function(req, res) {
	var response = await axios.get('https://reqres.in/api/users?page=1', {
	header: { Authorization: 'Bearer someToken' }
})
// console.log(response.data.data);


res.status(200).send("")
}

module.exports.getData = function(req, res) {
	const { key } = req.params
	
	var value = dataModel.get(key)
	if (value) {
		res.status(200).send(value)
	} else {
		res.status(404).send(key + ' is not found')
	}
}

module.exports.addData = function(req, res) {
	const { key, value } = req.params
	
	dataModel.set(key, value)
	res.status(200).send('Success')
}


module.exports.updateData = function(req, res) {
	const { key, value } = req.params
	
	if (dataModel.has(key)) {
		dataModel.set(key, value)
		res.status(200).send('Success')
	} else {
		res.status(404).send(key + ' is not found')
	}
}

module.exports.removeData = function(req, res) {
	const { key } = req.params
	
	if (dataModel.has(key)) {
		dataModel.delete(key)
		res.status(200).send('Success')
	} else {
		res.status(404).send(key + ' is not found')
	}
}
