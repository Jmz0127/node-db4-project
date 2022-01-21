const router = require('express').Router()

router.use('*', (req,res) => {
    res.json({ api: 'up'})
})

router.use((err,req, res, next) => { // eslint-disable-line
    res.status(500).json({
        customMessage: 'ruh roh, something went wrong inside of the -router.js file',
        message: err.message,
        stack: err.stack
    })
})


module.exports = router