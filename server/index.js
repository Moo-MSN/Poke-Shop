// เรียกใช้ library express ด้วยคำสั่ง require
const express = require("express");
const bodyParser = require("body-parser");
const cors = require ("cors")

// เรียกใช้ library mysql
const mysql = require("mysql2/promise");

// เรียกใช้ User, Password ของ Mysql ใน .env
require("dotenv").config();

// ประกาศเริ่มต้นการใช้ express
const app = express();

// Parse incoming JSON data
app.use(bodyParser.json());

// ใช้ Cors เพื่อให้ Frontend เข้ามาใช้ได้
app.use(cors()) ;

// เราสร้างตัวแปร users ขึ้นมาเป็น Array จำลองการเก็บข้อมูลใน Server (ซึ่งของจริงจะเป็น database)
// let users = [];
// let counter = 1;
let conn = null;

// สร้าง Connection pool กับ myaql
const connectMySQL = async () => {
  conn = await mysql.createConnection({
    host: "localhost",
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
  });
};

// สร้าง API path GET Users ออกมาทั้งหมด
app.get("/users", async (req, res) => {
  try {
    let results = await conn.query("SELECT * FROM users");
    res.json(results[0]);
  } catch (error) {
    console.error("Error fetching userd:", error.message);
    res.status(500).json({ error: "Error fatching users" });
  }
});

// สร้าง API path POST
app.post("/users", async (req, res) => {
  const data = req.body;
  try {
    const results = await conn.query("INSERT INTO users SET ?", data);
    const userId = results[0].insertId;
    // server res
    res.status(201).json({ message: "User Create Successfully", userId });
  } catch (error) {
    console.error("Error creating user:".error.message);
    res.status(500).json({ error: "Error creating user" });
  }
});

// สร้าง API path GET User ออกมารายคน โดยใช้ id
app.get("/users/:id", async (req, res) => {
  const id = req.params.id;
  try {
    let [results] = await conn.query("SELECT * FROM users WHERE id = ?", [id]);
    // Check id ถ้าตรงให้ res กลับ เป็น json
    if (results.length === 0) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json(results[0]);
  } catch (error) {
    console.error("Error fetching user:", error.message);
    res.status(500).json({ error: "Error fetching user" });
  }
});

// สร้าง API path PUT
app.put("/users/:id", async (req, res) => {
  const id = req.params.id;
  const data = req.body;
  try {
    const results = await conn.query("UPDATE users SET ? WHRER id = ? ", [data, id]);
    if (results[0].affectedRows === 0) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json({ message: "User updated successfully", userId: id });
  } catch (error) {
    console.error("Error updated user:", error.message);
    res.status(500).json({ error: "Error updating user" });
  }
});
/*
  // Find user id
  const user = users.find((user) => user.id === parseInt(id));

  if (user) {
    user.firstname = data.firstname || user.firstname;
    user.lastname = data.lastname || user.lastname;

    res.json({ message: "User updated successfully", user: user });
  } else {
    req.status(404).json({ error: "User not found" });
  }

  // ถ้ามี id ให้ทำการ update
  userToUpdate.firstname = data.firstname || userToUpdate.firstname;
  userToUpdate.lastname = data.lastname || userToUpdate.lastname;

  // server res
  res.json({ message: "User Update Successfully", post: userToUpdate });
}); 
*/

// สร้าง API path patch
/*app.patch("/user/:id", (req, res) => {
  const id = req.params.id;
  const data = req.body;

  const userToUpdate = users.find((user) => user.id === parseInt(id));

  if (!userToUpdate) {
    return res.status(404).json({ message: "User not Found" });
  }

  if (data.firstname) {
    userToUpdate.firstname = data.firstname;
  }
  if (data.lastname) {
    userToUpdate.lastname = data.lastname;
  }
  res.json({ message: "User updated successfully", user: userToUpdate });
}); */

// สร้าง API path delete
app.delete("/users/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const results = await conn.query("DELETE FROM users WHERE id = ?", [id]);
    if (results[0].affectedRows === 0) {
      return res.status(404).json({ error: "User not fount" });
    }
    res.json({ message: "User deleting successfully", userId, id });
  } catch (error) {
    console.error("Error deleted user:", error.message);
    res.status(500).json({ error: "Error deleted user" });
  }
});
/*
  //Check ถ้ามี index ที่ถูกต้อง
  if (index >= 0 && index < users.length) {
    // Remove the user ที่ index ถูกต้อง
    const deletedUser = users.splice(index, 1)[0];
    res.json({ message: "User delelte successfully", post: deletedUser });
  } else {
    res.status(404).json({ message: "User not found" });
  }
});
*/
// // สร้าง API path GET Products ออกมาทั้งหมด
app.get("/products", async (req, res) => {
  try {
    const [results] = await conn.query("SELECT * FROM products");
    res.json(results);
  } catch (error) {
    console.error("Error fetching userd:", error.message);
    res.status(500).json({ error: "Error fatching users" });
  }
});
// ประกาศ​เป็น http server ที่ port 8000 (ตามตัวแปร port)
app.listen(8000, async () => {
  await connectMySQL();
  console.log("Server started on port 8000");
});
