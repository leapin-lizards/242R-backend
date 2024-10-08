//assignment 3.1
const express = require('express');

const port = 3000;
const app = express();
app.set('views', `${__dirname}/views`);
app.set('view engine', 'pug');
app.use(express.urlencoded({ extended: true }));

app.get('/',(req, res) => {
    const str=Object.keys(req.query).map(k => `${k}: ${req.query[k]}`).join('</br>');
    console.log(str);
    res.send(str);
});
app.post('/',(req,res)=>{
    const str=Object.keys(req.body).map(k => `${k}: ${req.body[k]}`).join('</br>');
    console.log(str);
    res.send(str);
});

app.delete('/',(req,res)=>{
    const str=Object.keys(req.body).map(k => `${k}: ${req.body[k]}`).join('</br>');
    console.log(str);
    res.send(str);
});

app.put('/',(req,res)=>{
    const str=Object.keys(req.body).map(k => `${k}: ${req.body[k]}`).join('</br>');
    console.log(str);
    res.send(str);
});
app.listen(port, () => console.log(`Server listening on port ${port}!`));