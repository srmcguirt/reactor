function indexesOnly(arr) {
  for (let i = 0; i < arr.length; i++)
    arr.splice(i, 1, i)

  return arr
}

const arr = ['0', '1', '2', '3']

console.log(indexesOnly(arr))
