//assignment 3.3
const express = require('express');

const port = 3000;
const app = express();
app.set('views', `${__dirname}/views`);
app.set('view engine', 'pug');
app.use(express.urlencoded({ extended: true }));

app.get('/factorial',(req, res) => {
    res.redirect(`/factorial/${req.query.number}`);
});

app.get('/factorial/:number',(req,res)=>{
    function factorial(num){
        if(num<=1)
            return 1;
        return num*factorial(num-1);
    };
    res.send(`Factorial of ${req.params.number} is ${factorial(Number(req.params.number))}`);
})
app.listen(port, () => console.log(`Server listening on port ${port}!`));