# TypeScript-এ Type Alias এবং Interface-এর মধ্যে পার্থক্য

## Introduction

Typescript এ type alias এবং interface আমরা data type বা অবজেক্ট স্ট্রাকচার কে define করার জন্য ব্যবহার করে থাকি। এই ২ টি আমাদেরকে ডাটা টাইপ safety দেয় run error এর আগে।  তবে এদের মধ্যে কিছু পার্থক্য  রয়েছে। 

## 1. Type Alias

`type` alias literals, unions, tuples, primitives এর সাথে বেশি সম্পর্কিত।

```ts
type ID = number;
type Role = "admin" | "member";

interface User {
  name: string;
  id: ID;
  role: Role;
}

const user: User = {
  id: 123,
  name: "abc",
  role: "admin",
};
```

এখানে ID হলো primitives এর number type এবং role হলো string literal এর union. অন্যদিকে, `interface` দিয়ে `type` এর মতো primitives এবং  string literal এর union equal sign দিয়ে define করা যায় না। যেমনঃ 
```
//! interface id = number
//! interface "admin" | "member"

```

## 2. Interface

`interface` সাধারণত object-এর সাথে বেশি connected।

`interface` এর object structure example:
```ts
interface User {
  name: string;
  id: ID;
  role: Role;
}
```
`interface` এর মাধ্যমে আমরা এক interface কে অন্য interface এ extends করতে পারি। অথাৎ ২ টি interface অবজেক্ট কে একসাথে acces করা যায়। 
```ts
interface Animal {
  species: string;
}

interface Cat extends Animal {
  breed: string;
}

const cat: Cat = {
  species: "Felix Catus",
  breed: "Persian",
};
```

অন্যদিকে `type` (&) symbol দিয়ে এই কাজটি করে intersection করার জন্য। 

```ts
type Vehicle = {
  brand: string;
};

type Car = Vehicle & {
  model: string;
};

const car: Car = {
  model: "Corolla",
  brand: "Toyota",
};
```

এখানে `Car` type-এ `Vehicle`- type এর `brand` এবং নিজের `model` এর ২ টি property  acces করা যাচ্ছে  interface এর মতো।

## 3. Declaration Merging

`interface`-এর আর একটি বৈশিষ্ট্য হলো যে Declaration Merging। একই নামে একাধিক interface declare করলে TypeScript তাদের properties গুলোকে একসাথে combine করে।

```ts
interface IEmployee {
  name: string;
}

interface IEmployee {
  id: number;
}

const employee: IEmployee = {
  id: 123,
  name: "ABC",
};
```

কিন্তু অন্যদিকে একই scope-এ একই নামে একাধিক বার  `type` alias declare করলে TypeScript error দেখায়।

## 4. কখন কোনটি ব্যবহার করব?

Object-এর structure, inheritance এবং declaration merging প্রয়োজন হলে আমরা `interface` ব্যবহার করব। এবং অন্যদিকে primitive, union, tuple বা complex type combination তৈরি করার জন্য `type` alias ব্যবহার করব।

## Conclusion

`type` এবং `interface` দুটোই TypeScript-এর গুরুত্বপূর্ণ feature। এদের অনেক কাজ একই হলেও কিছু বিশেষ সুবিধা রয়েছে যা তাদেরকে আলাদা করে। প্রয়োজন অনুযায়ী সঠিকটি ব্যবহার করলে কোড আরও readable, reusable এবং maintainable হয়।