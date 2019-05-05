const begin = Date.now();

Promise.all([
  new Promise(resolve => {
    setTimeout(() => resolve("Alpha"), 4000);
  }),
  new Promise(resolve => {
    setTimeout(() => resolve("Bravo"), 2000);
  })
])
  .then(values => console.log(values))
  .then(() => console.log(Date.now() - begin));
