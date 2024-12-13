/**
 *  Dynamically includes HTML content from a file into an element on the page.
 *
 *  @param {string} file - The path to the HTML file to be included.
 *  @param {string} elementId - The ID of the element where the HTML content will be appended.
 *
 *  @throws {TypeError} If the element with the specified ID does not exist on the page.
 *
 *  @returns {void}
 */

export default function loadHtmlFile(file, elementId) {
  const request = new XMLHttpRequest();
  request.addEventListener("load", () => {
    if (request.status === 200) {
      const element = document.getElementById(elementId);
      if (element) {
        element.insertAdjacentHTML("beforeend", request.responseText);
      } else {
        console.error(`Element with ID '${elementId}' not found.`);
      }
    } else {
      console.error(`Failed to load ${file}: Status ${request.status}`);
    }
  });
  request.open("GET", file);
  request.send();
}
