const express = require("express");
const app = express();
const PORT = 3000;
const { router } = require('./routes/index.js');
const { userRouter } = require("./routes/user.js");

app.use('/api/v1/user', userRouter);
app.use('/api/v1', router);



app.get('/', (req, res) => {
    res.send("Hello to /");
})

app.get('/paytmProject', (req, res) => {
    res.send("This is a paytm project");
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
