
(function() {
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
      if (xhr.readyState == XMLHttpRequest.DONE) {
          console.log(xhr.responseText);
      }
  }
  xhr.open('GET', '/', true);
  xhr.send(null);
})();
