import db1 from "./db.js";
import db2 from "./db.js";

db1.connect()
db2.connect()
console.log(db1 === db2); // true