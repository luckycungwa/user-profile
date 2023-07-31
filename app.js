// SERVING EFFICIENTLY WITHOUT ADDING MORE HARDWARE

// THIS IS PURE nodeJS | might wanna test in Express (framework)

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
        // USING CUSTOM CREDENTIALS since the Assessment did not mention the use of database & user data storage
        if (email === "user@company.com" && password === "password") {

            console.log(resolve({ userId: 1, username: "user123" }));
          
        } else {
            console.log(reject(new Error("Invalid email or password.")));
        }
      }, 1000);
    });
  }

  // FOR TEST PURPOSE

 // //   Gte user profile images for ARRAY
function getUserImages(userId) {

    return new Promise((resolve) => {
      setTimeout(() => {
        // STORING IMAGE IN AN ARRAY
        const images = [
          // accept png & jpg
          "./img/image1.png",
          "./img/image2.png",
          "./img/image3.png",
          "./img/image4.png",
        ];
        resolve(images);
      }, 1500); //get images 1.5s
    });
  }

//   GET USER VIDEOS
  function getUserVideos(userId) {
    return new Promise((resolve) => {
      setTimeout(() => {
        // STORE VIDEOS IN ARRAY
        const videos = [
          // formarts mp4, 3gp, avi etc
          "video1.mp4",
          "video2.3gp",
          "video3.avi",
          "video4.mov",
        ];
        resolve(videos);
      }, 2000); //get images 2s (delayed 5ms after the images)
    });
  }

//  MAIN COMPONENTS OF THE APP FUNCTION
// RECORD USER INPUTS | READLINE
function recordUserData() {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
  
    return new Promise((resolve) => {
      // HINT for test purposes
      console.log("email: user@company.com | pass: password")
      
      // arg email & password | resolve
      rl.question("Enter your email: ", (email) => {
        rl.question("Enter your password: ", (password) => {
          rl.close();   //CLOSE WINDOW IF CREDENTIALS ARE INCORRECT | prevent hanging
          resolve({ email, password });
          // resolve.end();
        });
      });
    });
  }
  
  // MAIN APP FUNCTION
  async function main() {
    // LOG ALL THE DATA AND CATCH ANY ERRORS
    try {
        // INITIALIZE BY RECORDING THE APP HAS STARTED ETC.
      logRunPoints();
  
      // Record user data using CLI | prompt for credentials before providing data (img & vid)
      console.log("Enter login details below: ");
      const { email, password } = await recordUserData();
      // console successful log in
      console.log("Logging in..."); 
      const user = await login(email, password);
      console.log("Login successful!"); 
  
      // Get user images after login
      console.log("Loading images...");
      const images = await getUserImages(user.userId);
      console.log("User images:", images);
  
      // Get user videos 0.5s after images
      console.log("Loading videos...");
      const videos = await getUserVideos(user.userId);
      console.log("User videos:", videos);
  
      // lastly exacute: message after the app has launched and ran successfully
      console.log("APP HAS RAN SUCCESSFULLY!");
      //else log error
    } catch (error) {
       
      console.error("Error:", error.message);
    }
  }
  
//   EXECUTE MAIN FUNCTION
  main();
