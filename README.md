# dayjs-alpha-test

## Issue

Run `pnpm start`

```js
console.log(dayjs().format(`YYYY-MM-DD`)) // 2022-09-23
console.log(dayjs().subtract(1, 'day').format(`YYYY-MM-DD`)) // 2022-09-22
```

The outputs are as expected.

Run `pnpm test`

```js
console.log(dayjs().format(`YYYY-MM-DD`)) // 2022-09-23
console.log(dayjs().subtract(1, 'day').format(`YYYY-MM-DD`)) // 2022-09-23
```

Expression above got the same output which is weired.

Instead with `dayjs@1.x` it works as expected.
