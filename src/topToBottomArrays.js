// Flip every chunk of n characters in a string, where n is any positive integer greater than 1.

// Note that this is intentionally very similar to the previous problem.

// Please focus on getting a working solution with the tools you know well.

// Practice the interactive/collaborative interview style that's described in the documentation.
// You will be given an array that contains two strings. Your job is to create a function that will take those two strings and transpose them, so that the strings go from top to bottom instead of left to right.

// e.g. transposeTwoStrings(['Hello','World']);
// H W
// e o
// l r
// l l
// o d

function transpose(arr) {
  const result = []

  for (let i = 0; i < arr[0].length; i++) {
    const col = []
    for (let j = 0; j < arr.length; j++)
      col.push(arr[j][i])

    result.push(col)
  }

  return result
}

console.log(transpose(['Hello', 'World']))
