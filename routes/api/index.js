const router = require('express').Router();

router.get('/', async (req, res) => {
    try {
        res.json({message: 'hello'})
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

module.exports = router;