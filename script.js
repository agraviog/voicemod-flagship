var accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach(function (item) {
  var header = item.querySelector('.accordion-header');
  var content = item.querySelector('.accordion-content');

  header.addEventListener('click', function () {
    if (content.classList.contains('active')) {
      content.classList.remove('active');
    } else {
      content.classList.add('active');
    }
  });
});
