

  let $form, $result;
  let serverData = {};
  let data = {};
  
  

  function getName() {
    fetch('/api/name')
     .then((response)=> {
       
       console.log(response);
       return response.json(); // Почему тут без return не работает???
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
    //let data = {};
    let formData = new FormData($form);
   
    console.log(formData)
    console.log($form)

    formData.forEach(function(value, key){
      //data[key] = value;
      serverData[key] = value;
    });

    return serverData;
  }

  function validate(){
    const $name = document.querySelector('#name');
    const eMail = document.querySelector("#email");
    const password = document.querySelector('#password');
    let error = true;
    const valid_email = /[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]/

    if(!data.name){
      $name.classList.add('error');
      error = false;
    } 

    if(!valid_email.test(data.eMail)){
      eMail.classList.add('error');
      error = false;
    } 

    if(!data.password){
      password.classList.add('error');
      error = false;
    }
     return error;   
  };

  
  
  

  document.addEventListener('DOMContentLoaded', () => {
    $form = document.forms.profile
    $result = document.querySelector('.result');
    const button = document.querySelector('.button');
    const $name = document.querySelector('#name');
    const eMail = document.querySelector("#email");
    const password = document.querySelector('#password');
    const message = document.querySelector('.message');
    const regExp = /@/;
    const regExp2 = /.ru/;
    getName();

    
    
    $name.addEventListener('input' , (e) => {
         data['name'] = e.target.value;// Зачем записываем значение в массив data?
         console.log(data)
         e.target.classList.remove('error');
    });
  
    eMail.addEventListener('input' , (e) => {
         data['eMail'] = e.target.value;
         console.log(data.eMail.match(regExp))
         e.target.classList.remove('error');
 });

    password.addEventListener('input' , (e) => {
         data['password'] = e.target.value;
         e.target.classList.remove('error');
 });
    

    $form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      if (validate()) {
        setName(prepareData());
        message.classList.remove('message2');
        } else {
          message.classList.add('message2'); 
        } 
      getName(prepareData());
   
      });

     button.addEventListener('click', function() {
      button.classList.toggle('button2'); 
            
     });

  });

  




// замыкание
// IIFE + область видимости переменных на learn Javascript