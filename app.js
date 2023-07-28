// SERVING EFFICIENTLY WITHOUT ADDING MORE HARDWARE

//MANAGE APP START & END as per assessment equest
// Function to log 'start' and 'end' points'
function logRunPoints() {
    console.log("Started app...");
    process.on("exit", () => {
      console.log("Closed app...");
    });
  }

//   READ USER DATA/INPUT
const readline = require("readline");       //record user input

// Async login  function | taking email + pass
function login(email, password) {
    
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Resolve when cdentials match otherwise reject
        if (email === "user@company.com" && password === "password") {
            console.log(resolve({ userId: 1, username: "user123" }));
          
        } else {
            console.log(reject(new Error("Invalid email or password.")));
        }
      }, 1000);
    });
  }

//   Gte user profile images for ARRAY
function getUserImages(userId) {

    return new Promise((resolve) => {
      setTimeout(() => {
        // Assuming user images are stored in an array for simplicity
        const images = [
          "image1.jpg",
          "image2.png",
          "image3.jpg",
        //   etc....
        ];
        resolve(images);
      }, 1500);
    });
  }

//   GET USER VIDEOS ????
  function getUserVideos(userId) {
    return new Promise((resolve) => {
      setTimeout(() => {
        // STORE VIDEOS IN ARRAY
        const videos = [
          "video1.mp4",
          "video2.3gp",
          "video3.avi",
        ];
        resolve(videos);
      }, 2000);
    });
  }

//   MAIN COMPONENTS OF THE APP FUNCTION
// rECORD USER EMAIL & PASSWORD 
function recordUserData() {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
  
    return new Promise((resolve) => {
      rl.question("Enter your email: ", (email) => {
        rl.question("Enter your password: ", (password) => {
          rl.close();
          resolve({ email, password });
        });
      });
    });
  }
  
  async function main() {
    try {
        // INITIALIZE BY RECORDING THE APP HAS STARTED ETC.
      logRunPoints();
  
      // Record user data using CLI
      console.log("Provide email & password to login:");
      const { email, password } = await recordUserData();
  
      // user logged in with emaill and correct pass
      console.log("Logging in...");
      const user = await login(email, password);
      console.log("Login successful!");
  
      // Get user images after login
      console.log("Loading images...");
      const images = await getUserImages(user.userId);
      console.log("User images:", images);
  
      // Get user videos after images
      console.log("Loading videos...");
      const videos = await getUserVideos(user.userId);
      console.log("User videos:", videos);
  
      console.log("APP LAUNCHED SUCCESFULLY!");
      //else log error
    } catch (error) {
       
      console.error("Error:", error.message);
    }
  }
  
//   RUN THE APP
  main();
