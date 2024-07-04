const express = require("express");
const app = express();
const PORT = 3000;

app.get('/paytmProject', (req, res) => {
    res.send("This is a paytm project");
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
