const _ = require('../lowbar');

describe.only('#identity', () => {

  test('returns the value passed as an argument', () => {
 

    expect(_.identity(3)).toBe(3);
    expect(_.identity('hello')).toBe('hello');
    expect(_.identity(true)).toBe(true);
  });
  test('return value has the same reference when passed an array or object', () => {
    const arr = [];
    expect(_.identity(arr)).toBe(arr);
    const obj = {};
    expect(_.identity(obj)).toBe(obj);
  }); 
});

describe.only('#fromPairs', () => {

  test('returns an object composed from key-value pairs passed as an array', () => {

  // Arrange
  
  const myArr = [['a',1],['b',2]];
  const expected = {a:1, b:2};

  //Act
    const result = _.fromPairs(myArr);

  //Assert
  expect(result).toEqual(expected);

  });
});
  describe.only('#times', () => {

    test('Invokes the iteratee n times, returning an array of the results of each invocation', () => {

    // Arrange
    const myNum = 3
    const expected = ['1','2','3'];
    //Act
      const result = _.times(myNum);
  
    //Assert
    expect(result).toEqual(expected);
  
    });
  });

    describe.only('#map', () => {

      test('Creates an array of values by running each element in collection thru iteratee.', () => {
    
      // Arrange
      const squareFun = (num => num * num)
      const myArr = [1,2,3];
      const expected = [1,4,9];
    
      //Act
      const result = _.map(myArr, squareFun)
    
      //Assert
      expect(result).toEqual(expected);
    
      });
    });

    describe.only('#filter', () => {

      test('Creates an array of values by running each element in collection thru iteratee.', () => {
    
      // Arrange
      const evenNumFun = (num => num % 2 === 0)
      const myArr = [1,2,3,4,5,6,7,8,9];
      const expected = [2,4,6,8];
    
      //Act
      const result = _.filter(myArr, evenNumFun)
    
      //Assert
      expect(result).toEqual(expected);
    
      });
    });

    describe.only('#forEach', () => {
      test('Iterates over elements of collection and invokes iteratee for each element.', () => {

    // Arrange
      const returnItem = (num => console.log(num))
      const myArr = [1,2,3,4,5,6,7,8,9];
      const expected = undefined;

    //Act
      const result = _.forEach(myArr, returnItem)

    //Assert
      expect(result).toEqual(expected);

      });
});

describe.only('#invert', () => {
test('Iterates over elements of collection and invokes iteratee for each element.', () => {

// Arrange
  const myObj = { 'a': 1, 'b': 2, 'c': 1 };
  const expected = { '1': 'c', '2': 'b' };

//Act
  const result = _.invert(myObj)

//Assert
  expect(result).toEqual(expected);

  });

});