class Database {
    constructor() {
        console.log("New Database instance created");
        Database.instance = this;
        return Database.instance;
    }
    connect(){
        console.log("Connected to database");
    }
  }
  
  export default new Database();