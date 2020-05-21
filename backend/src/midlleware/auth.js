const jwt = require('jsonwebtoken');



module.exports={
    
    async authenticateToken(req, res, next) {
        console.log(req.headers['cookie']);
        const authHeader = req.headers['cookie']
       // const token = authHeader && authHeader.split(' ')[1]
        const token = authHeader && authHeader.split('=')[1]
        console.log(token);
        if (token == null) return res.sendStatus(401)
      
        jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
          console.log(err)
          if (err) return res.sendStatus(403)
          req.user = user
          next()
        })
      }
    }