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
const arr1 = [1, 2];
// console.log(arr1);
// console.log(...arr1);

const sumFunc = (num1, num2) => console.log(num1 + num2);
console.log(arr1);
// sumFunc(arr1[0], arr1[1]);

sumFunc(...arr1);
