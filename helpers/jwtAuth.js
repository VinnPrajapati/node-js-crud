const jwt = require("jsonwebtoken");
const seckey = process.env.SECRET_KEY;

module.exports.generateToken = (data) => {
  data = {
    id: 1,
    name: "vinod",
    email: "vinn@gmail.com",
  };
  let token = jwt.sign(data, seckey, { expiresIn: "300s" });
  return token;
};

module.exports.verifyToken = (req, res, next) => {
  const bearerHeader = req.headers.authorization;
  if (typeof bearerHeader !== "undefined") {
    jwt.verify(bearerHeader, seckey, (err, decoded) => {
      if (err) {
        res.status(403).json({ error: "Token is invalid" });
      } else {
        req.decodedToken = decoded;
        next();
      }
    });
  } else {
    res.status(403).json({ error: "Token is missing" });
  }
};
