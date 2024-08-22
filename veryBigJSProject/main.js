const button = document.getElementById("btn");
const input = document.getElementById("userId");
const userDetails = document.getElementById("userDetails");
button.onclick = () => getUser(input.value);

const users = [
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
    if (userId < users.length) {
      let user = users[userId];
      const username = user.Name;
      const userAge = user.age;
      console.log(user.Name);
      userDetails.innerText = `${username} is ${userAge} years old.`;
    } else {
      userDetails.innerText = `Loading...`;
      setTimeout(() => {
        userDetails.innerText = `Please check the user ID you have entered.`;
      }, 1000);
    }
  } catch (e) {
    window.location = "./error.html";
  }
}
