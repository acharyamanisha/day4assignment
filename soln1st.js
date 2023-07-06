function getSumPromise(numbers) {
    return new Promise((resolve, reject) => {
      if (numbers.length === 0) {
        reject("No numbers provided");
      } else {
        const sum = numbers.reduce((a, b) => a + b);
        resolve(sum);
      }
    });
  }
  async function getSumAsync(numbers) {
    if (numbers.length === 0) {
      throw new Error("No numbers provided");
    } else {
      return numbers.reduce((a, b) => a + b);
    }
  }
  
  const numbers = [1, 2, 3, 4];
  (async () => {
    try {
      const sum = await getSumAsync(numbers);
      console.log("Sum:", sum);
    } catch (error) {
      console.log("Error:", error.message);
    }
  })();