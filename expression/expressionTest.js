let array1 = [3, 4, 5];
let array2 = [1, 2,];

// 구성 요소를 열거하는 형식
// array[0], array[1], array[2], array[3], array[4]..... 형식으로 초기화된다.
let array3 = [...array1, ...array2];
console.log(array3);

// 객체 자체가 들어가서 arrayTest[0] 과 arrayTest[1]에 각각 배열들이 선언된다.
let arrayTest = [array1, array2];
console.log(arrayTest);


// 이전에 내가 했을 법한 코드
let arrayBefore = [];
array1.forEach(i => arrayBefore.push(i));
array2.forEach(i => arrayBefore.push(i));
console.log('arrayBefore : ' + arrayBefore);

// 배우고난 후의 코드
let arrayAfter = [...array1, ...array2];
console.log('arrayAfter : ' + arrayAfter);