// dependencies
const express = require('express')

let app = express()
app.use(express.static('public'))

// start server
app.listen(8080, () => {
  console.log('Express server connected!')
})
