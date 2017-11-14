const path = require('path')
const express = require('express')
const dotenv = require('dotenv')

dotenv.config()

const app = express()

app.use(express.static(path.resolve(__dirname, 'build')))

app.get('*', (req, res) => {
	res.sendFile(path.resolve(__dirname, 'build', 'index.html'))
})

app.listen(process.env.PORT || 5000, function () {
	console.log('Magic happens on port %d in %s mode', (process.env.PORT || 5000), app.get('env'))
})