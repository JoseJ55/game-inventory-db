const router = require('express').Router();

const api = require('./api');
// const client = require('./client');

router.use('/api', api);
// router.use('/client', client);

module.exports = router;