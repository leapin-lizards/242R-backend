//assignment 3.2
const express = require('express');

const port = 3000;
const app = express();
app.set('views', `${__dirname}/views`);
app.set('view engine', 'pug');
app.use(express.urlencoded({ extended: true }));

app.get('/board/page/:page',(req, res) => {
    res.send(`This page is #${req.params.page}`);
});
app.listen(port, () => console.log(`Server listening on port ${port}!`));