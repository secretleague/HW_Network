(function() { // для чего эта функция?
  let $form, $result;

  function getName() {
    fetch('/api/name')
     .then((response)=> {
       console.log(response);
       return response.json(); // Почему тут без ретерна не работает???
    } )

     .then((data) => {
       console.log(data);
       $result.textContent = JSON.stringify(data);//Почему тут можно без return?
     })
   };


  
  
  async function setName (data) {
    
      const response = await fetch('/api/name', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        },
      });
      return await response.json;
   };
   
  
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
      getName(prepareData());
      
      
    });
  });
})();



// замыкание