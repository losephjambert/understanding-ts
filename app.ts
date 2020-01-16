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
const roleTuple: (string | number)[] = [2, 'Engineer']
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