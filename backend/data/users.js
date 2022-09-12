import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Aries",
    email: "aries@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Belle",
    email: "belle@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users
