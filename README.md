# Calculator

> a small package i made one day while i was learning nodejs ( rewrote it today)

- easy to use
- supports typescript
- can add / multiply / subtract / divide /exponentiate as many numbers in just one functions
- no oop
- lightweight

### Install

```bash
npm install @whirl21/calculator
```

### Usage

```js
//with typescript
import calculator from "@whirl21/calculator";
const { add, subtract, multiply, divide, power } = calculator;
/*add(1 , 2 , 2 , 4 , 99 , 77)
subtract(1 , 2 , 2 , 4 , 99 , 77)
multiply(1 , 2 , 2 , 4 , 99 , 77)
divide(1 , 2 , 2 , 4 , 99 , 77)
power(1 , 2 , 2 , 4 , 99 , 77)*/
```

```js
//with node's require
const {
  add,
  subtract,
  multiply,
  divide,
  power,
} = require("@whirl21/calculator");
/*add(1 , 2 , 2 , 4 , 99 , 77)
subtract(1 , 2 , 2 , 4 , 99 , 77)
multiply(1 , 2 , 2 , 4 , 99 , 77)
divide(1 , 2 , 2 , 4 , 99 , 77)
power(1 , 2 , 2 , 4 , 99 , 77)*/
```

## LICENSE

MIT
