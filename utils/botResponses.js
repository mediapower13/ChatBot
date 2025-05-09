/**
 * Generate a response based on user input
 * @param {string} userInput - The user's message
 * @returns {string} - Bot's response
 */
export function getBotResponse(userInput) {
  const input = userInput.toLowerCase();
  
  // Greeting responses
  if (input.includes('hello') || input.includes('hi') || input.includes('hey')) {
    return getRandomResponse([
      "Hi there! How can I assist you today?",
      "Hello! What can I help you with?",
      "Hey! How are you doing today?"
    ]);
  } 
  
  // Questions about the bot
  else if (input.includes('how are you')) {
    return getRandomResponse([
      "I'm doing well, thanks for asking! How about you?",
      "I'm great! Thanks for asking. How can I help you today?",
      "I'm functioning perfectly! How are you doing?"
    ]);
  } 
  
  // Questions about the bot's name/identity
  else if (input.includes('name') || (input.includes('who') && input.includes('you'))) {
    return "I'm ChattyBot, your friendly AI assistant!";
  } 
  
  // Help requests
  else if (input.includes('help')) {
    return "I can answer questions, provide information, or just chat. What would you like to know?";
  } 
  
  // Farewells
  else if (input.includes('bye') || input.includes('goodbye')) {
    return getRandomResponse([
      "Goodbye! Feel free to chat again anytime.",
      "Bye for now! Have a great day!",
      "See you later! Come back soon!"
    ]);
  } 
  
  // Gratitude
  else if (input.includes('thanks') || input.includes('thank you')) {
    return getRandomResponse([
      "You're welcome! Is there anything else I can help with?",
      "Anytime! Let me know if you need anything else.",
      "Happy to help! What else would you like to know?"
    ]);
  } 
  
  // Default responses for when no pattern is matched
  else {
    return getRandomResponse([
      "That's interesting! Tell me more about that.",
      "I see. Is there anything specific you'd like to know about that?",
      "Interesting point! Could you elaborate on that?",
      "I'd love to hear more about that. Can you share more details?"
    ]);
  }
}

/**
 * Pick a random response from an array of possible responses
 * @param {string[]} responses - Array of possible responses
 * @returns {string} - A randomly selected response
 */
function getRandomResponse(responses) {
  const randomIndex = Math.floor(Math.random() * responses.length);
  return responses[randomIndex];
}

/**
 * Get a personalized response based on time of day
 * @returns {string} - A time-appropriate greeting
 */
export function getTimeBasedGreeting() {
  const hour = new Date().getHours();
  
  if (hour < 12) {
    return "Good morning! How can I help you today?";
  } else if (hour < 18) {
    return "Good afternoon! How can I assist you?";
  } else {
    return "Good evening! How may I help you today?";
  }
}