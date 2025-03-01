// Example of Callback Function
let something = (callback) => {
  console.log("Executing something...");
  callback();
};

let something2 = () => {
  console.log("Executing something2...");
};

something(something2);

// JavaScript behaves synchronously, meaning it executes code line by line. 
// If a function takes time (e.g., 1 minute), it blocks the execution of subsequent code.

// To avoid this, we use `setTimeout()` because in real-world applications, 
// we communicate with databases, which takes time to respond.

console.log("First");

setTimeout(() => {
  console.log("Executed after 3 seconds");
}, 3000);

console.log("Second");

// Issue with synchronous execution: The following function doesn't return the expected value
const loginUser = (email, password) => {
  setTimeout(() => {
    return email;
  }, 2000);
};

const userEmail = loginUser("mastermin22", 2222);
console.log(userEmail); // This will print `undefined`

// Solution: Using Callbacks
const loginUserWithCallback = (email, password, callbackFunc) => {
  setTimeout(() => {
    callbackFunc(email);
  }, 2000);
};

loginUserWithCallback("mastermin22", 2222, (email) => {
  console.log(email);
});

// Problem with Callbacks: Callback Hell (nested callbacks become hard to read & manage)
// Solution: Use Promises

const checkMarks = (marks) => {
  return new Promise((resolve, reject) => {
    if (marks >= 80) {
      resolve("Pass");
    } else {
      reject("Fail");
    }
  });
};

checkMarks(80)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

// Using Promises in a Login System
const loginUserPromise = (email, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === "tahirshobb@gmail.com" && password === "1234") {
        resolve(email);
      } else {
        reject("Email or password incorrect");
      }
    }, 2000);
  });
};

const getVideos = (email) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(["video1", "video2", "video3"]);
    }, 2000);
  });
};

loginUserPromise("tahirshobb@gmail.com", "1234")
  .then((email) => {
    console.log(email);
    return getVideos(email);
  })
  .then((videos) => {
    console.log(videos);
  })
  .catch((error) => {
    console.log(error);
  });

// Problem with .then & .catch: It becomes repetitive and hard to maintain
// Solution: Use Async/Await

const getUserDetails = async () => {
  try {
    const userEmail = await loginUserPromise("tahirshobb@gmail.com", "1234");
    console.log(userEmail);

    const userVideos = await getVideos(userEmail);
    console.log(userVideos);
  } catch (error) {
    console.log("Error:", error);
  }
};

getUserDetails();
