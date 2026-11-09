# Combining Union (|) and Intersection (&) Types in TypeScript

## Introduction

While learning TypeScript, I learned that Union (`|`) and Intersection (`&`) types are useful for working with multiple types. They help us write flexible and reusable code. Although they look similar, they work differently.

## Detailed Explanation

A Union type means a variable can accept more than one possible type. For example:

```ts
type UserId = string | number;

let userId: UserId;

userId = 101;
userId = "USER101";
```

Here, `userId` can accept either a string or a number.

On the other hand, an Intersection type combines multiple object types into a single type.

```ts
type Person = {
  name: string;
  age: number;
};

type Employee = {
  employeeId: number;
  department: string;
};

type Staff = Person & Employee;

const staff: Staff = {
  name: "Rakib",
  age: 22,
  employeeId: 101,
  department: "IT",
};
```

Here, `Staff` contains all the properties from both `Person` and `Employee`.


## Conclusion

In my understanding, Union and Intersection types make TypeScript more flexible and powerful. I use Union when a value can have different possible types and Intersection when I need to combine multiple structures.
