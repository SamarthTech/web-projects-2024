// Utility Functions for Class Manipulation

/**
 * Toggles a class on an element.
 * @param {string} el - The selector for the element.
 * @param {string} className - The class to toggle.
 */
export const toggleClass = (el, className) => {
  const elem = document.querySelector(el);
  if (elem) {
    elem.classList.toggle(className);
  } else {
    console.warn(`Element ${el} not found.`);
  }
};

/**
 * Removes a class from an element.
 * @param {string} el - The selector for the element.
 * @param {string} className - The class to remove.
 */
export const removeClass = (el, className) => {
  const elem = document.querySelector(el);
  if (elem) {
    elem.classList.remove(className);
  } else {
    console.warn(`Element ${el} not found.`);
  }
};

// API Base URL
export const api_base_url = "http://localhost:3000";
