import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

// 分割代入

// const myProfile = {
//   name: "yu",
//   age: 26
// };

// const { name, age } = myProfile;
// const message1 = `名前は${name}, 年齢は${age}です。`;
// console.log(message1);

// const myProfile = ["yu", 26];

// const message3 = `名前は${myProfile[0]}, 年齢は${myProfile[1]}`;

// const [name, age] = myProfile;
// const message4 = `名前は${name}、年齢は${age}`;
// console.log(message4);

// スプレッド構文
// ...

// 配列の展開
// const arr1 = [1, 2];
// // console.log(arr1);
// // console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// console.log(arr1);
// // sumFunc(arr1[0], arr1[1]);

// sumFunc(...arr1);

// まとめる

// const arr2 = [1, 2, 3, 4];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(arr3);

// 配列のコピーと結合

const arr4 = [10, 20];
const arr5 = [30, 40];

// const arr6 = [...arr4];
// console.log(arr6);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

// const arr8 = arr4;
// console.log(arr8);
// arr8[0] = 100;
// console.log(arr4);

// for (let i = 0; i < nameArr.length; i++) {
//   console.log(nameArr[i]);
// }

// const nameArr2 = nameArr.map((name) =>{
//   return name;
// });
// console.log(nameArr2);

// nameArr.map((name) => console.log(name));

// const numArr = [1, 2, 3, 4, 5];
// // const newNumArr = numArr.filter((num) => {
// //   return num % 2 === 1;
// // });
// // console.log(newNumArr);

// // nameArr.map((name, index) => console.log(`${index + 1}の要素は${name}です`));

// const nameArr = ["田中", "山田", "yu"];

// const newNameArr = nameArr.map((name) => {
//   if (name === "yu") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });
// console.log(newNameArr);
