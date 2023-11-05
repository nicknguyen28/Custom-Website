document.addEventListener('DOMContentLoaded', function () {
  const nav_items = document.querySelectorAll('#menu a');

  function highlight_nav_on_scroll() {
    const scroll_pos = window.scrollY;

    nav_items.forEach(item => {
      const section_id = item.getAttribute('href').substring(1);
      const section = document.getElementById(section_id);

      if (section_id === 'home' && scroll_pos < 110) {
        nav_items.forEach(nav_item => {
          nav_item.classList.remove('active');
        });

        item.classList.add('active');
      }else if (section && section.offsetTop <= scroll_pos + 101 && section.offsetTop + section.offsetHeight > scroll_pos + 101) {
        nav_items.forEach(nav_item => {
          nav_item.classList.remove('active');
        });

        item.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', highlight_nav_on_scroll);
  highlight_nav_on_scroll();
});

function submitForm() {
  var confirmation = document.getElementById('confirmation');
  var form = document.getElementById('contact-form');

  form.style.display = 'none';
  confirmation.style.display = 'block';
  
  setTimeout(function () {
    confirmation.style.display = 'none';
  }, 3000);
  setTimeout(function () {
    form.reset();
    form.style.display = 'block';
  }, 3000);
}