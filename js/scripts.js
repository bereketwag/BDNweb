document.addEventListener("DOMContentLoaded", function() {
  const loadingPage = document.getElementById('loading-page');
  const mainContent = document.getElementById('main-content');

  // Ensure main content is hidden for accessibility
  mainContent.setAttribute('aria-hidden', 'true');

  // Apply transition at the start
  loadingPage.style.transition = 'opacity 0.5s ease';

  // Simulate loading time (e.g., 2 seconds)
  setTimeout(function() {
      loadingPage.style.opacity = '0';

      // Once faded out, hide the loading page and show the main content
      setTimeout(function() {
          loadingPage.style.display = 'none';
          mainContent.style.display = 'block';
          mainContent.setAttribute('aria-hidden', 'false');
      }, 500);
  }, 2000); // 2 seconds delay
});




// Update scroll progress bar width based on scroll position
window.addEventListener('scroll', function() {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    var scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrollPercentage = (scrollTop / scrollHeight) * 100;
    document.querySelector('.scroll-progress-inner').style.width = scrollPercentage + '%';
  });

  


  typing_effect(['Hello World', 'Website Developer', 'Graphics Designer', 'Digital Marketer', 'Branding'],
    ['#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF']);
  
  function typing_effect(words, colors) {
      const cursor = document.getElementById('cursor'); //cursor
      const text = document.getElementById('text'); //text
  
      let blink = true;
      let wait = false;
      let letters_count = 1;
      let temp = 1;
  
      text.style.color = colors[0];
  
      function typeLetters() {
          if (letters_count === 0 && wait === false) {
              wait = true;
              text.innerHTML = ''; // leave a blank
              setTimeout(function() {
                  const usedColor = colors.shift(); //remove first element and get it as str
                  colors.push(usedColor);
                  const usedWord = words.shift();
                  words.push(usedWord);
                  temp = 1;
                  text.style.color = colors[0];
                  letters_count += temp;
                  wait = false;
              }, 1000);
          } else if (letters_count === words[0].length + 1 && wait === false) {
              wait = true;
              setTimeout(function() {
                  temp = -1;
                  letters_count += temp;
                  wait = false;
              }, 1000);
          } else if (wait === false) {
              text.innerHTML = words[0].substr(0, letters_count);
              letters_count += temp;
          }
          setTimeout(typeLetters, 120); // Recursive call with timeout instead of setInterval
      }
  
      function blinkCursor() {
          cursor.style.opacity = blink ? '0' : '1';
          blink = !blink;
          requestAnimationFrame(blinkCursor); // Use requestAnimationFrame for smoother blinking
      }
  
      typeLetters();
      blinkCursor();
  }
  

  // floating share icon
  document.addEventListener("DOMContentLoaded", function() {
    const floatingShare = document.getElementById('floating-share');
    const socialIcons = document.getElementById('social-icons');

    floatingShare.addEventListener('click', function() {
        if (socialIcons.style.display === 'none' || socialIcons.style.display === '') {
            socialIcons.style.display = 'block';
            setTimeout(() => {
                socialIcons.style.opacity = '1';
            }, 10);
        } else {
            socialIcons.style.opacity = '0';
            setTimeout(() => {
                socialIcons.style.display = 'none';
            }, 300);
        }
    });
});




document.getElementById('customize-form').addEventListener('submit', function(event) {
  event.preventDefault();
  // Handle form submission logic here
  alert('Form submitted!');
});


  
