#!/usr/bin/env node
// Function to log your details in the terminal
function logDetails() {
  const message =
    "Hey! I'm Ayush Thakur, a Developer Advocate and a Community Manager!";
  const twitterLink = "https://twitter.com/JSAyushThakur";
  const linkedinLink = "https://www.linkedin.com/in/ayush2390/";
  const wesbiteLink = "https://ayush-thakur-portfolio.netlify.app/";
  const githubLink = "https://github.com/ayush2390";

  // Create a colorful box using ANSI escape codes
  const colorfulBox = `  \x1b[38;5;51m+---------------------------------------------------------------+
    |   \x1b[38;5;105m${message}\x1b[38;5;51m    |
    +---------------------------------------------------------------+
    | \x1b[38;5;93mTwitter:\x1b[0m \x1b[38;5;39m${twitterLink}                     \x1b[38;5;51m|
    | \x1b[38;5;93mLinkedIn:\x1b[0m \x1b[38;5;39m${linkedinLink}                 \x1b[38;5;51m|
    | \x1b[38;5;93mPortfolio:\x1b[0m  \x1b[38;5;39m${wesbiteLink}                      \x1b[38;5;51m|
    | \x1b[38;5;93mPortfolio:\x1b[0m  \x1b[38;5;39m${githubLink}                      \x1b[38;5;51m|
    +----------------------------------------------------------------+\x1b[0m`;

  // Log the colorful box in the terminal
  console.log(colorfulBox);
}
// Call the function to log your details
logDetails();
