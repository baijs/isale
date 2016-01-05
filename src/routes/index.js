var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

router.get('/testdata', function (req, res, next) {
    var data = {
        "records": [
            {"Name": "北京市", "City": "Berlin", "Country": "Germany"},
            {"Name": "Ana Trujillo Emparedados y helados", "City": "México D.F.", "Country": "Mexico"},
            {"Name": "Antonio Moreno Taqueria", "City": "México D.F.", "Country": "Mexico"},
            {"Name": "Around the Horn", "City": "London", "Country": "UK"},
            {"Name": "B's Beverages", "City": "London", "Country": "UK"},
            {"Name": "Berglunds snabbkap", "City": "Luleå", "Country": "Sweden"},
            {"Name": "Blauer See Delikatessen", "City": "Mannheim", "Country": "Germany"},
            {"Name": "Blondel pre et fils", "City": "Strasbourg", "Country": "France"},
            {"Name": "Bólido Comidas preparadas", "City": "Madrid", "Country": "Spain"},
            {"Name": "Bon app'", "City": "Marseille", "Country": "France"},
            {"Name": "Bottom-Dollar Marketse", "City": "Tsawassen", "Country": "Canada"},
            {"Name": "Cactus Comidas para llevar", "City": "Buenos Aires", "Country": "Argentina"},
            {"Name": "Centro comercial Moctezuma", "City": "México D.F.", "Country": "Mexico"},
            {"Name": "Chop-suey Chinese", "City": "Bern", "Country": "Switzerland"},
            {"Name": "Comrcio Mineiro", "City": "São Paulo", "Country": "Brazil"}
        ]
    };
    res.send(data);
});
module.exports = router;
