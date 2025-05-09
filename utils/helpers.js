/**
 * Format a date object to display time in HH:MM format
 * @param {Date} date - The date object to format
 * @returns {string} - Formatted time string
 */
export function formatTime(date) {
  return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

/**
 * Generate a unique ID for messages
 * @returns {string} - Unique ID string
 */
export function generateId() {
  return Math.random().toString(36).substring(2, 9);
}

/**
 * Debounce function to limit the rate at which a function can fire
 * @param {Function} func - The function to debounce
 * @param {number} wait - The debounce wait time in milliseconds
 * @returns {Function} - Debounced function
 */
export function debounce(func, wait) {
  let timeout;
  
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}