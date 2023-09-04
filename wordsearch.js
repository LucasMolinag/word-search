const wordSearch = (letters, word) => {
  if (word.length === 0) return false; // Handle the case of an empty word

  const numRows = letters.length;
  const numCols = letters[0].length;

  // Check horizontally
  for (let row = 0; row < numRows; row++) {
    const rowString = letters[row].join('');
    if (rowString.includes(word)) return true;
  }

  // Check vertically
  for (let col = 0; col < numCols; col++) {
    let colString = '';
    for (let row = 0; row < numRows; row++) {
      colString += letters[row][col];
    }
    if (colString.includes(word)) return true;
  }

  return false; // Word not found in either direction
}

module.exports = wordSearch;
