# TypeScript-এ Union এবং Intersection Types-এর ব্যবহার

## Introduction

TypeScript এ Union (`|`) এবং Intersection (`&`) দুটি গুরুত্বপূর্ণ feature। এগুলো ব্যবহার করে একাধিক type এর মধ্যে সম্পর্ক তৈরি করা যায়। Union ব্যবহার করলে একটি variable একাধিক type এর যেকোনো একটি হতে পারে। অন্যদিকে Intersection ব্যবহার করলে একাধিক type এর properties একসঙ্গে combine করা যায়।

## 1. Union Type

Union (`|`) ব্যবহার করে একাধিক type বা literal value একসঙ্গে define করা যায়।

```ts
type Role = "user" | "admin" | "manager";
const userRole: Role = "manager";
```

এখানে `Role` "user", "admin", "manager" এই তিনটি value এর যেকোনো একটি হতে পারে।

## 2. Object Union

Object Union ব্যবহার করে একটি variable এ একাধিক object structure এর যেকোনো একটি গ্রহণ করা যায়।

```ts
type Admin = {
  id: number;
  role: "admin";
  privileges: string[];
};

type Member = {
  id: number;
  role: "member";
  plans: string[];
};

type User = Admin | Member;

const user: User = {
  id: 123,
  role: "member",
  plans: ["abc", "def"],
};
```

এখানে `User` হয় `Admin`, নয়তো `Member` type এর object হতে পারবে।

## 3. Intersection Type

Intersection (`&`) ব্যবহার করে একাধিক object type এর properties combine করা যায়।

```ts
type Vehicle = {
  brand: string;
};

type Car = Vehicle & {
  model: string;
};

const car: Car = {
  brand: "Toyota",
  model: "Corolla",
};
```

এখানে `Car` type এ `brand` এবং `model` দুটি property ই প্রয়োজন।

## 4. Union এবং Intersection এর একসঙ্গে ব্যবহার

real world project এ common properties এর সঙ্গে বিভিন্ন ধরনের user এর information combine করতে Union ও Intersection একসঙ্গে ব্যবহার করা যায়।

```ts
type BaseUser = {
  id: number;
  name: string;
};

type AdminInfo = {
  role: "admin";
  privileges: string[];
};

type MemberInfo = {
  role: "member";
  plans: string[];
};

type AppUser = BaseUser & (AdminInfo | MemberInfo);

const appUser: AppUser = {
  id: 101,
  name: "Rakib",
  role: "admin",
  privileges: ["create", "delete"],
};
```

এখানে `BaseUser` এর properties বাধ্যতামূলক এবং `AdminInfo` অথবা `MemberInfo` এর যেকোনো একটি structure থাকতে হবে।

## Conclusion

Union ব্যবহার করে একাধিক সম্ভাব্য type নির্ধারণ করা যায়, আর Intersection ব্যবহার করে বিভিন্ন type combine করা যায়। দুটো একসঙ্গে ব্যবহার করলে flexible এবং type safe data structure তৈরি করা সহজ হয়।