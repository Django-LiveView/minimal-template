// Get lang
export function getLang() {
  return document.querySelector('html').getAttribute("lang");
}

export async function encodeFileAsBase64URL(file) {
    if (file) {
	return new Promise((resolve) => {
            const reader = new FileReader();
            reader.addEventListener('loadend', () => {
		resolve(reader.result);
            });
            reader.readAsDataURL(file);
	});
    }
    return null;
}

// The parallax function
export function parallax(el, x, y) {
    if (el) {
    const a = window.innerHeight - el.getBoundingClientRect().top
    el.style.transform = `translate3d(${x * a}px, ${y * a}px, 0)`;
  }
}

// Go to the top page
function scrollToTop () {
    window.scrollTo({
        top: 0
    });
}

// Renders the HTML received from the Consumer or from indexedDB
export const renderHTML = (data) => {

  const targetHTML = document.querySelector(data.selector);
  if (targetHTML) {
    if (data.append) {
      targetHTML.innerHTML += data.html;
    } else {
        targetHTML.innerHTML = data.html;
    }

    // If it is a new page or is backward, the scroll returns to the beginning
    if ( data.html && !data.scroll && data.url) {
      setTimeout(() => { scrollToTop() }, 50);
    }

  } else {
    console.error(`Target ${data.selector} not found`);
    return;
  }
    // Update URL
    if (data.url) history.pushState({}, "", data.url);

    // Update title
    if (data.title) document.title = data.title;
}

export function moveScrollToAnchor(data) {
  if (data.scroll) {
    setTimeout(() => {
      document.querySelector(data.scroll).scrollIntoView({ behavior: "smooth" });
    }, 50)
  }
}

export function moveScrollToTop(data) {
  if (data.scrollTop) {
    setTimeout(() => {
      document.querySelector("body").scrollIntoView({ behavior: "smooth" });
    }, 50)
  }
}
