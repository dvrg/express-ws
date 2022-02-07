var express = require('express');
const News = require('../models/news');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    News.findAll()
        .then(function (newsData) {
            res.send({ success: true, data: newsData });
        })
        .catch(error => {
            res.send({ success: false, error: error });
        });
});

router.post('/', function (req, res, next) {
    News.create({
        title: req.body.title,
        body: req.body.body,
    })
        .then(function (newsData) {
            res.send({ success: true, data: newsData });
        })
        .catch(error => {
            res.send({ success: false, error: error });
        });
});

router.post('/:newsId', function (req, res, next) {
    News.findByPk(req.params.newsId)
        .then(function (newsData) {
            res.send({ success: true, data: newsData });
        })
        .catch(error => {
            res.send({ success: false, error: error });
        });
});

router.put('/:newsId', function (req, res, next) {
    News.update({
        title: req.body.title,
        body: req.body.body,
    }, {
        where: { id: req.params.newsId }
    })
        .then(() => {
            res.status(200).send({ success: true, data: "update successfully a news with id = " + req.params.newsId });
        });
})

router.delete('/:newsId', function (req, res, next) {
    News.destroy(
        {
            where: { id: req.params.newsId }
        })
        .then(() => {
            res.status(200).send({ success: true, data: "delete successfully a news with id = " + req.params.newsId });
        });
})

module.exports = router;
