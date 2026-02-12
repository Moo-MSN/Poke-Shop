// เรียกใช้ library express ด้วยคำสั่ง require
const express = require("express");
const bodyParser = require("body-parser");

// ประกาศเริ่มต้นการใช้ express
const app = express();

// Parse incoming JSON data
app.use(bodyParser.json());

// เราสร้างตัวแปร users ขึ้นมาเป็น Array จำลองการเก็บข้อมูลใน Server (ซึ่งของจริงจะเป็น database)
let users = [];
let counter = 1;

// สร้าง API path GET Users ออกมาทั้งหมด
app.get("/users", (req, res) => {
  res.json(users);
});

// สร้าง API path POST
app.post("/users", (req, res) => {
  const data = req.body;
  const newUser = {
    id: counter,
    firstname: data.firstname,
    lastname: data.lastname,
  };

  counter += 1;

  users.push(newUser);

  // server res
  res.status(201).json({ message: "User Create Successfully", user: newUser });
});

// สร้าง API path GET User ออกมารายคน โดยใช้ id
app.get("/users/:id", (req, res) => {
  const id = req.params.id;

  // Find user id
  const user = users.find((user) => user.id === parseInt(id));

  // Check id ถ้าตรงให้ res กลับ เป็น json
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ error: "User not found" });
  }
});

// สร้าง API path PUT
app.put("/user/:id", (req, res) => {
  const id = req.params.id;
  const data = req.body;

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

// สร้าง API path patch
app.patch("/user/:id", (req, res) => {
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
});

// สร้าง API path delete
app.delete("/users/:id", (req, res) => {
  const id = req.params.id;
  const index = users.findIndex((user)=> user.id === parseInt(id));

  //Check ถ้ามี index ที่ถูกต้อง
  if (index >= 0 && index < users.length) {
    // Remove the user ที่ index ถูกต้อง
    const deletedUser = users.splice(index, 1)[0];
    res.json({ message: "User delelte successfully", post: deletedUser });
  } else {
    res.status(404).json({ message: "User not found" });
  }
});
// ประกาศ​gxbf http server ที่ port 8000 (ตามตัวแปร port)
app.listen(8000, () => {
  console.log(`Server started on port 8000`);
});
