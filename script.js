const checkbox = document.getElementById('check');
const navList = document.getElementById('test');

checkbox.addEventListener('change', function() {
   if (this.checked) {
      navList.style.left = '1%';
   } else {
      navList.style.left = '-100%';
   }
});
