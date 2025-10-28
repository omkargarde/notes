# Zelevate interview questions

## what are template literals types and what are template literals?

template literals types in typescript are built upon literal type.

a literal type represent that a variable can hold only one specific string.

a regular which can represent any string value.

```TypeScript
let changingString = "Hello World";
changingString = "Goodbye World";
// Because `changingString` can represent any possible string, that
// is how TypeScript describes it in the type system
changingString;

const constantString = "Hello World";
// Because `constantString` can only represent 1 possible string, it
// has a literal type representation
// NOTE: literal types are still string and returned as such
constantString;
```

template literal or template which are delimited by backtick "`" are used for.

1. string interpolation
2. exception function inline in string
3. tagged template literal which are used to execute custom function

```TypeScript
let a = 10;
console.log(`some string ${a}`)
console.log(`some string ${a+10}`)
```

a template literal is used to print out string to console while
template literal type are used for to represent a specific string value

- what are generics?
  generics are used to make a function, class, interface reusable
  without losing the type safety.

  suppose i have a function which i want to make reusable with multiple types

  ```TypeScript
  function identity(arg: number): number {
  return arg;
  }
  ```

  this function works with _number_ type.
  this can be rewritten with _any_ type but will will lose the type safety.

  ```TypeScript
  function identity(arg: any): any {
  return arg;
  }
  ```

  to make this function reusable without losing type safety generics can used.

  ```TypeScript
  function identity<T>(arg: T): T {
  return arg;
  }

  const variable = identity<string>("string");
  ```

## what are intersection type?

intersection type are create a new type by extending exciting types using
_&_ operator

```TypeScript
interface type1{...}
interface type2{...}
type type3 = type1 & type2
```

using _&_ works same way as using _extends_ clause with only difference being
in way they resole conflicts

```TypeScript
//there are two interfaces with same property but with incompatible types
interface type1{
  property:string
}
interface type2{
  property:number
}
type3 = type1 & type2
```

type3 will result in _never_ type because
TypeScript will try to combine the types regardless

```TypeScript
interface type2 extends type1{
  property:number
}
```

here typescript will throw an error because the types are incompatible

## what are enum (both types)

enums are way to create constants of group of related values.

there are two ways to create enums in TypeScript

using built-in enum(not recommended)

```TypeScript
enum Status{
  notFound:404;
  serverError:500;
}

function getStatusMessage(status:status){return status}
```

using const object as enum

```TypeScript
const Status = {
  notFound:404;
  serverError:500;
} as const

type Status = typeof Status[keyof typeof Status]

function getStatusMessage(status:status){return status}
```

## what are HOC(class component)

## what are web vitals?

web vitals are metrics which are used to measure sites performance

- interaction to next paint (INP):measure time it takes for site to
  respond to user clicks
- largest Content-full paint:time to paint main content like heading or images
- cumulative layout shift:how much content jumps as page loads (images,fonts,ads)

## testing, unit test, integration tests,end to end tests

## find and create an array

from nest object where property equal a specific type using higher order function

## what are higher order functions

higher order functions are function which takes in function/callback as parameter
with or without other parameters and they can also return function

```TypeScript
function greet(name) {
  return `Hello, ${name}!`;
}

function processUser(name, callback) {
  return callback(name);
}

console.log(processUser("Omkar", greet));// "Hello, Omkar!"

function multiplier(factor) {
  return function (num) {
    return num * factor;
  };
}

const double = multiplier(2);
console.log(double(5)); // 10
```

## how do optime react application

## how do you find issues with react performance

## how do you find out about which component is causing renders

## how do you fix rerenders

## when do you use useMemo,give use case

## when do you use useCallback,give use case

## what are render props

## when do you use context api,what are the drawbacks

## when do you use redux, what are the drawbacks

## what is the architecture behind redux,flux
