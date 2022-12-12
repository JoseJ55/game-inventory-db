const express = require("express");
const cors = require('cors');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(cors({
    origin: ['http://localhost:3000'],
    methods: ['GET', 'POST', 'PATCH', 'DELETE'],
    credentials: true,
    optionsSuccessStatus: 200
}))

app.use(express.urlencoded({extended: true}));
app.use(express.json());

// if (process.env.NODE_ENV === 'production') {
//     app.use(express.static('client/build'));
// }

app.get("/", async (req, res) => {
    try {
        res.json("hello this is working");
        return;
    } catch (err) {
        res.status(500).json({message: err.message});
    }
})

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`);
})