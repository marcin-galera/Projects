var getGreetingAfterTime = time =>
  new Promise((resolve, reject) => {
    if (time > 3000) {
      reject(new Error("We will not wait longer than 3 seconds for greeting"));
    } else {
      setTimeout(() => resolve("Hi"), time);
    }
  });
