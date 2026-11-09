# Combining Union (|) and Intersection (&) Types in TypeScript

## Introduction

While learning TypeScript, I learned that Union (`|`) and Intersection (`&`) types are useful for working with multiple types. They help us write flexible and reusable code. Although they look similar, they work differently. A Union allows a value to have one of several types, whereas an Intersection combines multiple types into one.

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

We can also combine Union and Intersection types in a practical example.

```ts
type Admin = {
  role: "admin";
};

type Customer = {
  role: "customer";
};

type User = {
  name: string;
  email: string;
};

type Account = User & (Admin | Customer);
```

In this example, an account must contain the properties of `User` and can have either an admin or customer role.

## Conclusion

In my understanding, Union and Intersection types make TypeScript more flexible and powerful. I use Union when a value can have different possible types and Intersection when I need to combine multiple structures. Using them together helps create reusable and well-organized code.
