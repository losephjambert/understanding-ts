// by using {} we're telling TS that this is a special object type whereby we
// will provide some information regarding the object's structure
// Array type
// when using an array in TS, we want to assign the [] type to the variable or key,
// along with the type that array will store
// you can use the any type escape hatch, but avoid it if you can
// an a array of strings, for example, would look like this:
var names = ['Kate', 'Susan', 'Christine', 'Ron'];
// Tuples
// a tuple is a fixed length, fixed type data type
// by typing the roleTuple this way, we ensure the 
// tuple can only ever have n elements
// and those elements must always be of number and string type
// additionally, the types are positioned explicitly
// so the 0th element must always be a number
// and the 1st element must always be a string
var roleTuple = [2, 'Engineer'];
// by assigning the inferredRoleTuple this way without explicitly
// typing it, we lose the guarantee that the 0th element 
// will always be a number and the 1st element will always be a string.
// we also lose the guarantee that the tuple will only ever have a length
// of 2.
var inferredRoleTuple = [2, 'Engineer'];
// BE CAREFUL!
// if you push into a tuple, you will modify the tuple's length
// TS does not offer support against pushing into a tuple
roleTuple.push(37); // is valid && won't throw an error
// const person: {
//   name: string
//   age: number
//   hobbies: string[],
//   role: [number, string]
// } = {
//   name: 'Joe',
//   age: 32,
//   hobbies: ['swimming', 'playing games'],
//   role: [4, 'Engineer']
// }
// Enums
// say we have a bunch of different roles: 'ADMIN', 'READ_ONLY', 'AUTHOR'
// a common JS approach is to declare global consts that store the role values.
// we can reference those consts throughout our code to ensure we don't make
// spelling mistakes
var ADMIN = 0;
var READ_ONLY = 1;
var AUTHOR = 2;
// enter Enums! TS allows us to use Enums as a way to store data such as roles
// convention is uppercase because enum is a custom type
// enum type defaults to assigning each member of the enum starting with 0
// you can override the starting member's value with any number
// and the following members will follow numerically
// so if I reassign Role.ADMIN to 3, the next member will have a value of 4, and so on.
// you can also assign a member to have a string value, as well
// you can also mix member types
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR"; // 2
})(Role || (Role = {}));
var MixedTypeRole;
(function (MixedTypeRole) {
    MixedTypeRole["ADMIN"] = "ADMIN";
    MixedTypeRole["READ_ONLY"] = "READ_ONLY";
    MixedTypeRole["AUTHOR"] = "AUTHOR";
})(MixedTypeRole || (MixedTypeRole = {}));
var person = {
    name: 'Joe',
    age: 32,
    hobbies: ['swimming', 'playing games'],
    role: Role.ADMIN
};
console.log(person);
if (person.role === Role.ADMIN) {
    console.log("You're an Admin!");
}
