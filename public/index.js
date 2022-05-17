(function() {
  let $form, $result;

  function getName() {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (xhr.readyState == XMLHttpRequest.DONE ) {
        console.log(xhr);
        $result.textContent = xhr.responseText;
      }
    }
    xhr.open('GET', '/api/name', true);
    xhr.send(null);
  }

  function setName(data) {
    let xhr = new XMLHttpRequest();
    xhr.open("POST", '/api/name', true);
    xhr.setRequestHeader("Content-Type", "application/json");


    xhr.onreadystatechange = function() {
      if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
        // $result.textContent = xhr.responseText;

      }
    }
    xhr.send(JSON.stringify(data));
  }

  function prepareData() {
    let data = {};
    let formData = new FormData($form);
    console.log(formData)

    formData.forEach(function(value, key){
      data[key] = value;
    });

    return data;
  }
  

  document.addEventListener('DOMContentLoaded', () => {
    $form = document.forms.profile//querySelector('#profile');
    $result = document.querySelector('.result');
    getName();
    

    $form.addEventListener('submit', (e) => {
      e.preventDefault();
      setName(prepareData());
      
    });
  });
})();



// замыкание