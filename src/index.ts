import dayjs from 'dayjs'

console.log(dayjs().format(`YYYY-MM-DD`))
console.log(dayjs().subtract(1, 'day').format(`YYYY-MM-DD`))
