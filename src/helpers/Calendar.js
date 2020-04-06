const weekNumKey = {
  'Sun': 0,
  'Mon': 1,
  'Tue': 2,
  'Wed': 3,
  'Thu': 4,
  'Fri': 5,
  'Sat': 6
}

const monthNumKey= {
  'Jan': 0,
  'Feb': 1,
  'Mar': 2,
  'Apr': 3,
  'May': 4,
  'Jun': 5,
  'Jul': 6,
  'Aug': 7,
  'Sep': 8,
  'Oct': 9,
  'Nov': 10,
  'Dec': 11
}

const compose = (f,g) => x => f(g(x))

// const getDayOfWeek = date => date.getDay()

const getDayOfMonth = date => date.getDate()

const generateMonth = lastDay => {
  const generate = (count, arr) => count === 0 ? arr : generate(count - 1, [count, ...arr])
  return generate(lastDay, [])
}

const generateMonthWith = compose(generateMonth, getDayOfMonth)

const generateYearWith = monthkey => year =>
  Object.entries(monthkey)
  .map(([name, num]) => [name, generateMonthWith(new Date(year, num + 1, 0))])

export const generateYearOf = compose(Object.fromEntries, generateYearWith(monthNumKey))

// console.log(generateYearOf(2020))