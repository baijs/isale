var express = require('express');
var mysql = require('mysql');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

router.get('/order', function (req, res, next) {
    var data = {
        "records": [
            {"id": "01","name":"商品","orderId":"11111","num":"10","price":"190.00","account":"b@163.com","remark":"无","paymethod":"支付宝" },
            {"id": "01","name":"商品","orderId":"11111","num":"10","price":"190.00","account":"b@163.com","remark":"无","paymethod":"支付宝" },
            {"id": "01","name":"商品","orderId":"11111","num":"10","price":"190.00","account":"b@163.com","remark":"无","paymethod":"支付宝" },
            {"id": "01","name":"商品","orderId":"11111","num":"10","price":"190.00","account":"b@163.com","remark":"无","paymethod":"支付宝" },
            {"id": "01","name":"商品","orderId":"11111","num":"10","price":"190.00","account":"b@163.com","remark":"无","paymethod":"支付宝" }
        ],
        "total":100
    };
    res.send(data);
});
module.exports = router;
