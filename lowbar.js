const _ = {};

_.identity = (x) => {
  return x;
};


_.fromPairs = (myArr) => {

  let myObject = {};
  for (let i = 0; i< myArr.length; i++)  {
    myObject[myArr[i][0]] = myArr[i][1]; 
  }
  return myObject;
}

_.times = (myNum) => {
  let num = 0;
  let myArr = []

  for (let i= 0; i< myNum; i++) {
    num = i + 1;
    myArr[i] = num.toString()
}

  return myArr;
  
}

 _.map = (myArr, squareFun) => {
 
  let newArr = [];
  let result = 0
  
  for (let i=0; i< myArr.length; i++) {
    result = squareFun(Number(myArr[i]))
    newArr.push(result)
}
  return newArr
 }

 _.filter = (myArr, evenNumFun) => {

  let newArr = [];

  for (let i=0; i< myArr.length; i++) {
    if (evenNumFun(Number(myArr[i]))) {
    newArr.push(myArr[i])
    }
  }
  return newArr;
}

_.forEach = (myArr, returnItem) => {

  for (let i=0; i< myArr.length; i++) {
    
    returnItem(Number(myArr[i]))
    
    }
}

_.invert = (myObj) => {

  let newObj = {};
  let tempObj = {};
  let newArr1 = [];
  let newArr2 = [];
  let counter = 0;
 
  for (const element in myObj) {

    newArr1[counter] = element;
    newArr2[counter] = myObj[element];
    counter ++;
    }

for (let i=0; i < newArr2.length; i++) {
  for (let j=i+1; j < newArr2.length; j++) {
    if (newArr2[i] === newArr2[j]) {
     newArr2.splice(i,1);
     newArr1.splice(i,1);
    }
  } 
}  
newArr1 = newArr1.reverse();
newArr2 = newArr2.reverse();

for (let i=0; i < newArr2.length; i++) {
    newObj[newArr2[i]] = newArr1[i];
}
return newObj ;
}

module.exports = _;
