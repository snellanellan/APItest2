const express = require('express');
const app = express(); 
const request = require('request');


app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'))

app.listen(3000, () => {
    console.log("lyssnar på port 3000");
});

app.get('/:animal', (req, res) => {
    let djur = req.params.animal
    console.log(djur)
    request("https://cat-fact.herokuapp.com/facts/random?animal_type="+djur , (error, response, body) => {
        if(error){
            console.log(error)
        }
        
        let json = JSON.parse(body)

        console.log("min json " + json)
        res.render('index.ejs', {
            text : json.text,
            djur : djur
        })
    })
})



app.get('/', (req, res) => {

    res.render('index.ejs', {
        
    })
})


