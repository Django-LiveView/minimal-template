import { renderHTML } from "./miscellaneous.js";

// Save HTML page to Session Storage for caching
export function saveHistory(data) {
  if (data.action.includes("send_page")) {
    sessionStorage.setItem(sessionStorage.length, JSON.stringify(data));
  }
}

// Render back page from Session Storage
function recoverBackHistory() {
  const index = sessionStorage.length - 1;
  if (index > 0) {
    const lastPage = JSON.parse(sessionStorage.getItem(index - 1));
    renderHTML(lastPage);
  }
  sessionStorage.removeItem(index);
}

// Start history listener
export function startHistory() {
  // Save initial page
  saveHistory(
    {
      action: "send_page",
      selector: "html",
      html: document.querySelector("html").outerHTML,
      append: false,
      url: window.location.href,
      title: document.title
    }
  );
  // Back button listener
  window.addEventListener("popstate", (event) => {
    if (sessionStorage.length > 0) {
      recoverBackHistory();
    } else {
      window.history.back();
    }
  });
}
