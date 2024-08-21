const button = document.getElementById("btn");
const input = document.getElementById("userId");
const userDetails = document.getElementById("userDetails");
button.onclick = () => getUser(input.value);

users = [
  {
    name: "Rahul",
    age: "46",
  },
  {
    name: "Rakesh",
    age: "23",
  },
  {
    name: "Renuka",
    age: "25",
  },
];

function getUser(userId) {
  try {
    let user = users[userId];
    console.log(user.name);
    userDetails.innerText = `${user.name} is ${user.age} years old.`;
  } catch (e) {
    window.location = "./error.html";
  }
}

// function getUser(userId) {
//   try {
//     if (!isNaN(Number(userId)) && Number(userId) < users.length) {
//       let user = users[userId];
//       console.log(user.name);
//       userDetails.innerText = `${user.name} is ${user.age} years old.`;
//     } else {
//       userDetails.innerText = `Please check the user ID you have entered.`;
//     }
//   } catch (e) {
//     window.location = "./error.html";
//   }
// }

// function getUser(userId) {
//   try {
//     if (userId && !isNaN(Number(userId)) && Number(userId) < users.length) {
//       let user = users[userId];
//       console.log(user.name);
//       userDetails.innerText = `${user.name} is ${user.age} years old.`;
//     } else {
//       userDetails.innerText = `Please check the user ID you have entered.`;
//     }
//   } catch (e) {
//     window.location = "./error.html";
//   }
// }
