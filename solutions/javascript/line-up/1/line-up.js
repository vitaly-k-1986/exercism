const makeSentence = (name, num, suffix) => 
  `${name}, you are the ${num.toString()}${suffix} customer we serve today. Thank you!`;

const TH_SUFFIX = 'th';

const getSuffix = (lastDigit) => {
  switch(lastDigit) {
    case '1': return 'st';
    case '2': return 'nd';
    case '3': return 'rd';
    default: return TH_SUFFIX;
  }
}

export const format = (name, num) => {
  const numStr = num.toString();
  
  const lastDigit = numStr.at(-1);
  const suffix = getSuffix(lastDigit);
  
  if (numStr.length === 1) {
    return makeSentence(name, num, suffix);
  }

  const lastTwoDigits = numStr.slice(-2);

  if (['11', '12', '13'].includes(lastTwoDigits)) {
    return makeSentence(name, num, TH_SUFFIX)
  }

  return makeSentence(name, num, suffix);
};
