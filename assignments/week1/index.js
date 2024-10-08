//assignment 3.4
const express = require('express');

const port = 3000;
const app = express();
app.set('views', `${__dirname}/views`);
app.set('view engine', 'pug');
app.use(express.urlencoded({ extended: true }));
app.get('/', (req, res) => res.render('index.pug'));
app.post('/login',(req,res)=>{
    console.log(req.body);
    const username=req.body.username;
    const password=req.body.password;
    const introduction=req.body.introduction;
    res.render('login.pug',{username,password,introduction});
})
app.listen(port, () => console.log(`Server listening on port ${port}!`));