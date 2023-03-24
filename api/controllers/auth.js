import { db } from "../connect.js";
import bcrypt from "bcryptjs";
import Jwt from "jsonwebtoken";

//REGISTER FUNCTION
export const register = (req, res) => {
  //CHECK USER IF EXİST
  const q = "SELECT * FROM users WHERE username = ?";

  db.query(q, [req.body.username], (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length) return res.status(409).json("User already exist!");

    // CREATE NEW USER
    //hash password
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(req.body.password, salt);

    const q =
      "INSERT INTO users (`username`,`email`,`password`, `name`) VALUES (?) ";

    const values = [
      req.body.username,
      req.body.email,
      hashedPassword,
      req.body.name,
    ];
    db.query(q, [values], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json("User has been created");
    });
  });
};

//LOGIN FUNCTION

export const login = (req, res) => {
  const q = "SELECT * FROM users WHERE username = ?";

  db.query(q, [req.body.username], (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length === 0) return res.status(404).json("User not found");

    const chechkPassword = bcrypt.compareSync(
      req.body.password,
      data[0].password
    );

    if (!chechkPassword)
      return res.status(400).json("Wrong Password or Username");

    const token = Jwt.sign({ id: data[0].id }, "secretkey");

    const { password, ...others } = data[0];

    res
      .cookie("accesToken", token, {
        httpOnly: true,
      })
      .status(200)
      .json(others);
  });
};
//LOGOUT FUNCTION
export const logout = (req, res) => {
  res
    .clearCookie("accessToken", {
      secure: true,
      sameSite: "none",
    })
    .status(200)
    .json("User has been deleted");
};
