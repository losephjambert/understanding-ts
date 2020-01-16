// by using {} we're telling TS that this is a special object type whereby we
// will provide some information regarding the object's structure

// Array type
// when using an array in TS, we want to assign the [] type to the variable or key,
// along with the type that array will store
// you can use the any type escape hatch, but avoid it if you can
// an a array of strings, for example, would look like this:
const names: string[] = ['Kate', 'Susan', 'Christine', 'Ron']

// Tuples
// a tuple is a fixed length, fixed type data type
// by typing the roleTuple this way, we ensure the 
// tuple can only ever have n elements
// and those elements must always be of number and string type
// additionally, the types are positioned explicitly
// so the 0th element must always be a number
// and the 1st element must always be a string
const roleTuple: [number, string] = [2, 'Engineer']

// by assigning the inferredRoleTuple this way without explicitly
// typing it, we lose the guarantee that the 0th element 
// will always be a number and the 1st element will always be a string.
// we also lose the guarantee that the tuple will only ever have a length
// of 2.
const inferredRoleTuple = [2, 'Engineer']

const person: {
  name: string
  age: number
  hobbies: string[]
} = {
  name: 'Joe',
  age: 32,
  hobbies: ['swimming', 'playing games']
}


console.log(person)