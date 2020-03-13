/**
 * object types
 */
const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string]; // tuple
} = {
  name: "Joe",
  age: 29,
  hobbies: ["Sleep", "Drawing", "Guitar"],
  role: [2, "admin"]
};

console.log(person.name);

/**
 * array types
 */
let anyArr: any[];
anyArr = [123, "hahaha"];

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
  // console.log(hobby.map())
}

/**
 * tuple types
 */
// person.role.push('user'); // ts can not cath push error
// person.role[1] = 10; // [1] should be string
// person.role = [1, 'test', 'xx']; // ts can also catch length error

/**
 * enum custom types
 * make the variables more readable
 */
// enum Role { ADMIN, READ_ONLY, AUTHOR }; // default starts with 0
enum Role {
  ADMIN = 5,
  READ_ONLY = 6,
  AUTHOR = 7
} // set to whatever you want
const joe = {
  role: Role.ADMIN
};
if (joe.role === Role.ADMIN) {
  console.log("is admin");
}
