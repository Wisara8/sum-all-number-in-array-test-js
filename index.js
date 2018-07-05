function sumItems(array) {
  // Sum all the numbers in the array
    let sum = 0;
  // arr = true;
  array.forEach((item) => {
    if (Array.isArray(item)) {
      // Print out all it's items individually
      // let arr = true;
      sum += sumItems(item);

    } else {
      // console.log(item);
       sum += item;
    }
  });
  return sum;
  // return item;
}

module.exports = sumItems;