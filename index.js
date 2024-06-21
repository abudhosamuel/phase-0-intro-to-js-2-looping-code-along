// Function to create thank you cards
function writeCards(names, event) {
    // Create a new empty array to hold the messages
    let messages = [];
    
    // Iterate through the names array
    for (let i = 0; i < names.length; i++) {
      // Build the thank you message using string interpolation
      let message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
      
      // Add the message to the messages array
      messages.push(message);
    }
    
    // Return the array with all the messages
    return messages;
  }
  
  // Example usage
  let names = ["Charlie", "Samip", "Ali"];
  let event = "birthday";
  let thankYouCards = writeCards(names, event);
  
  console.log(thankYouCards);
  // Output should be:
  // [
  //   "Thank you, Charlie, for the wonderful birthday gift!",
  //   "Thank you, Samip, for the wonderful birthday gift!",
  //   "Thank you, Ali, for the wonderful birthday gift!"
  // ]
  
  function countDown(num) {
    while (num >= 0) {
      console.log(num);
      num--;
    }
  }
  
  // Example usage:
  countDown(10);
  // Expected output:
  // 10
  // 9
  // 8
  // 7
  // 6
  // 5
  // 4
  // 3
  // 2
  // 1
  // 0
  