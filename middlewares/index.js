const jwt = require('jsonwebtoken');


module.exports = {

    verifyToken:  (req, res, next) => {

    try {
    
    //const token = req.headers.authorization; this is equivalent to the line below more clean code though
    const {authorization} = req.headers;
    const token = authorization.split(" ")[1];
	const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log('You got it man', decoded);
    req.decoded = decoded;
	//Next es una funcion propia de Express meaning, you got what u need, go on to your next mission man
	next();
        
    } catch (error) {
        res.status(403).send( {message: "Error with token, madafaka", error} );
    }
 

},

};