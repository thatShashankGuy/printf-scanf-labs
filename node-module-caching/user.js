console.log("User module loaded");

export class User {
  constructor(name) {
    console.log("New User instance created");
    this.name = name;
  }
}