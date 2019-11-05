var express = require('express');
var router = express.Router();
const Product = require('../model/products')

router.get('/:limit/:page', function(req, res) {
    let limit = parseInt(req.params.limit) || 3;
    let numSkipPage = ((parseInt(req.params.page)-1) * limit) || 0;
    Product.find()
      .skip(numSkipPage)
      .limit(limit)
      .exec(function(err,response) {
          if (err) {
              res.status(400).json({'error':err})
          } else {
              res.status(200).json(response);
          }
      })
});

router.get('/:idProduct', function(req, res) {
    let idProduct = req.params.idProduct;
    Product.find({_id:idProduct})
      .exec(function (err,response) {
          if (err) {
              res.status(400).json({status:'failed',error:err})
          } else {
              res.status(200).json({status:'success',data:response[0]})
          }
      })
})

router.put('/:idProduct/:vote', function(req, res) {
    let idProduct = req.params.idProduct;
    let vote = parseInt(req.params.vote);
    Product.find({_id:idProduct})
      .exec(function (err,response) {
          let arrayVote = response[0].rate;
          arrayVote.push(vote);
          if (err) {
              res.status(400).json({status:'failed',error:err});
          } else {
              Product.findOneAndUpdate({_id:idProduct},{rate:arrayVote},function (err,response) {
                  if (err) {
                      res.status(400).json({status:'failed',error:err});
                  } else {
                      res.status(201).json({status:'success',data:response});
                  }
              })
          }
      })
})

router.post('/', function (req,res) {
    let title = req.body.title;
    let rate = parseInt(req.body.rate);
    let description = req.body.description;
    let price = req.body.price;
    let brand = req.body.brand;
    let detailProduct = req.body.detailProduct;
    try {
        let arrayRate = [rate];
        const newProduct = new Product({title,rate:arrayRate,description,price,brand,detailProduct});
        newProduct.save().then(dataCreated => {
            res.status(201).json({status:'success',data:dataCreated})
        })
    } catch (error) {
        res.status(400).json({status:'failed',error});
    }
})

router.delete('/:idProduct', function(req,res) {
    let idProduct = req.params.idProduct;
    Product.findOneAndDelete({_id:idProduct},function (err,response) {
        if (err) {
            res.status(400).json({status:'failed',error:err});
        } else {
            res.status(201).json({status:'success',data:response});
        }
    })
})

module.exports = router;
