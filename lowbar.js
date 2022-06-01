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
  let newArr = [];
  console.log(myObj);
 

  for (let element in myObj) {
    newArr.push(element)
   
    }
    console.log(newArr.reverse());
}

module.exports = _;
