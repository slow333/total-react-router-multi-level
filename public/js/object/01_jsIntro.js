import { createEl } from "../exportFunc.js";

const person = {
   name: ["Bob", "Smith"],
   age: 32,
   gender: "male",
   interests: ["music", "skiing"],
   bio: function () {
      createEl(
         this.name[0] + " " +  this.name[1] + " is " +
         this.age + " years old. He likes " + this.interests[0] + " and " +
         this.interests[1] + ".", );
   },
   greeting: function () {
      createEl("Hi! I'm " + this.name[0] + ".");
   },
};

createEl(person.name);
createEl(person["name"]);
createEl(person.name[0]);
createEl(person.age);
person.bio();
person.greeting();

person["name"]["first"] = "Limp"
createEl(person.name.first);
person["eyes"] = "hazel";
createEl(person.eyes);