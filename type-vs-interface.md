# Type vs Interface in TypeScript: What's the Difference?

## Introduction

While learning TypeScript, I found that both `type` and `interface` are used to define the structure of data. At first, they seemed almost the same to me. However, they have some important differences. Understanding these differences helps me write cleaner and more organized code.

## Detailed Explanation

An `interface` is mainly used to describe the shape of an object. For example:

```ts
interface User {
  name: string;
  age: number;
}

const user: User = {
  name: "Rakib",
  age: 22,
};
```

Here, the interface defines which properties a user object must have.

On the other hand, a `type` alias can define object structures as well as other types, such as unions, intersections, and primitive types.

```ts
type User = {
  name: string;
  age: number;
};

type Status = "active" | "inactive";
```

One important difference is that interfaces support declaration merging. It means we can declare the same interface more than once, and TypeScript combines their properties.

```ts
interface Person {
  name: string;
}

interface Person {
  age: number;
}
```

Now, `Person` contains both `name` and `age`.

However, type aliases cannot be redeclared in the same way.

## Conclusion

In my opinion, both `type` and `interface` are useful in TypeScript. I prefer using `interface` when defining object structures and `type` when working with unions, intersections, or more complex type combinations. Choosing between them depends on the situation and project requirements.
