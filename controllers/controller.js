const conn = require("../config/dbConfig");
const { generateToken } = require("../helpers/jwtAuth");

module.exports.login = (req, resp) => {
  const { name } = req.body;
  conn.query(
    "SELECT name, email, password FROM users WHERE name = ? ",
    [name],
    (err, result) => {
      if (err) {
        resp.status(500).send(err);
      } else {
        let token = generateToken(result[0]);
        resp.send({ token: token, data: result[0] });
      }
    }
  );
};

module.exports.getAllData = (req, resp) => {
  conn.query("select * from users", (err, result) => {
    if (err) {
      resp.send("error");
    } else {
      resp.send(result);
    }
  });
};

module.exports.postData = (req, resp) => {
  const data = req.body;
  // const data = {
  //   name: "vinodkumar",
  //   email: "vinodkumar@gmail.com",
  //   role: "this is role",
  // };
  conn.query("insert into users set ?", data, (err, result, fields) => {
    if (err) {
      res.send(error);
    } else {
      resp.send(result);
    }
  });
};

module.exports.putData = (req, resp) => {
  const data = [req.body.name, req.body.id];
  conn.query(
    "update users set name=? where id=?",
    data,
    (err, result, field) => {
      if (err) {
        resp.send(err);
      } else {
        resp.send(result);
      }
    }
  );
};

module.exports.delData = (req, resp) => {
  const delid = req.body.id;
  conn.query("delete from users where id=" + delid, (err, result) => {
    if (err) {
      resp.send(err);
    } else {
      resp.send(result);
    }
  });
};
