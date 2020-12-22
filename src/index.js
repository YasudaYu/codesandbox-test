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

const myProfile = {
  name: "yu",
  age: 26
};

const message1 = `名前は${myProfile.name}, 年齢は${myProfile.age}です。`;
console.log(message1);
