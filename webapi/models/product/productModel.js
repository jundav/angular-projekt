const mongodb = require('mongoose')
const Product = require('./productSchema')


exports.addProducts = (req, res) => {
    
    for(current of req.body) {
        let product = new Product({
            _id:                   new mongodb.Types.ObjectId,
             name:                 current.name,
             description:          current.description,
             shortDescription:     current.shortDescription,
             image:                current.image,
             inStockAmount:        current.inStockAmount,
             price:                current.price
        })
        product.save()
    }
    return res.status(200).json({
        statusCode: 200,
        status: true,
        message: 'Successfully imported products to database'
    })

}

exports.getProductById = (req, res) => {

    Product.findOne({_id: req.params.id})              
    .then(oneProduct => res.status(200).json(oneProduct))

    .catch(error => res.status(400).json({
        statusCode: 400,
        status:false,
        message: "product doesn't exist."
    }))
     
}

exports.getAllProducts = (req, res) => {
      Product.find()
      .then(allProducts => res.status(200).json(allProducts))    
}



