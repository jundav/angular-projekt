const jwt = require('jsonwebtoken')
const secretKey = "64413baa-73f0-44ee-b14b-39e681f06769"

exports.genToken = (id) => {
    return jwt.sign({ id: id }, secretKey, { expiresIn: "1h" })
}

exports.checkToken = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1]
        req.userData = jwt.verify(token, secretKey)
        next()
    }
    catch {
        return res.status(401).json({
            statusCode: 401,
            status:false,
            message:'Access Restricted! Please login in.'

        })
    } 
    
}