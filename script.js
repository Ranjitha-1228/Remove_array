const orignalArray = [1,2,2,3,6,6,0,5,3,7,9,3];

function getUniqueArray(inputArray) {

    const unique = [];

    const tempObject = {}; 

    inputArray.forEach(item =>
         { 
        const isExsit = tempObject[item];
         if (!isExsit) 
      { 
        unique.push(item);
        tempObject[item] = item;
      }
    }
    );
    return unique;
  }
  console.log(getUniqueArray(orignalArray));