export const toBinary = (num, binaryCols) => {
  let binaryArr = new Array(binaryCols.length);
  let currentNum = num;
  let colNum;
  for (let i = binaryCols.length - 1; i >= 0; i--) {
    colNum = binaryCols[i];
    if (currentNum >= colNum) {
      binaryArr[i] = 1;
      currentNum -= colNum;
    } else {
      binaryArr[i] = 0;
    }
  }

  return binaryArr;
};

export const maxCount = 1023;

export const createBinaryColumns = maxValue => {
  const binaryCols = [];
  let currentValue = 1;

  while (currentValue < maxValue) {
    binaryCols.push(currentValue);

    currentValue *= 2;
  }

  return binaryCols;
};

export const binaryCols = createBinaryColumns(maxCount);
