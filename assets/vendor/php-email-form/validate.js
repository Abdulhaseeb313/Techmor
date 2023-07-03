/**
* PHP Email Form Validation - v3.4
* URL: https://bootstrapmade.com/php-email-form/
* Author: BootstrapMade.com
*/
// (function () {
//   "use strict";

//   let forms = document.querySelectorAll('.php-email-form');

//   forms.forEach( function(e) {
//     e.addEventListener('submit', function(event) { 
//       event.preventDefault();

//       let thisForm = this;

//       let action = thisForm.getAttribute('action');
//       let recaptcha = thisForm.getAttribute('data-recaptcha-site-key');
      
//       if( ! action ) {
//         displayError(thisForm, 'The form action property is not set!')
//         return;
//       }
//       thisForm.querySelector('.loading').classList.add('d-block');
//       thisForm.querySelector('.error-message').classList.remove('d-block');
//       thisForm.querySelector('.sent-message').classList.remove('d-block');

//       let formData = new FormData( thisForm );

//       if ( recaptcha ) {
//         if(typeof grecaptcha !== "undefined" ) {
//           grecaptcha.ready(function() {
//             try {
//               grecaptcha.execute(recaptcha, {action: 'php_email_form_submit'})
//               .then(token => {
//                 formData.set('recaptcha-response', token);
//                 php_email_form_submit(thisForm, action, formData);
//               })
//             } catch(error) {
//               displayError(thisForm, error)
//             }
//           });
//         } else {
//           displayError(thisForm, 'The reCaptcha javascript API url is not loaded!')
//         }
//       } else {
//         php_email_form_submit(thisForm, action, formData);
//       }
//     });
//   });

//   function php_email_form_submit(thisForm, action, formData) {
//     fetch(action, {
//       method: 'POST',
//       body: formData,
//       headers: {'X-Requested-With': 'XMLHttpRequest'}
//     })
//     .then(response => {
//       if( response.ok ) {
//         return response.text()
//       } else {
//         throw new Error(`${response.status} ${response.statusText} ${response.url}`); 
//       }
//     })
//     .then(data => {
//       thisForm.querySelector('.loading').classList.remove('d-block');
//       if (data.trim() == 'OK') {
//         thisForm.querySelector('.sent-message').classList.add('d-block');
//         thisForm.reset(); 
//       } else {
//         throw new Error(data ? data : 'Form submission failed and no error message returned from: ' + action); 
//       }
//     })
//     .catch((error) => {
//       displayError(thisForm, error);
//     });
//   }

//   function displayError(thisForm, error) {
//     thisForm.querySelector('.loading').classList.remove('d-block');
//     thisForm.querySelector('.error-message').innerHTML = error;
//     thisForm.querySelector('.error-message').classList.add('d-block');
//   }

// })();


// // Listen for submit
// document .querySelector('.contact_form').addEventlistener('submit',
// submitForm);
// function submitForm(e){
//  e.preventDefault();

//  // Get input values
//  let name = document.querySelector('.name').value;
//  let email = document.querySelector('.email').value;
//  let msg =document.querySelector('.msssage').value;

// //  saveConteactInfo(name, email, message);
// //  document.querySelector(".contact-form").reset();
// //  sendEmail(name, email, message);
// }
// // Function send email

// function sendEmail(name, email, message){
//  Email.send({
//   Host:"smtp.gmail.com",
//   Username: "dialsmarketing00@gmail.com", 
//   Password: "00#00*00", 
//   To: "dialsmarketing00@gmail.com", 
//   From: "dialsmarketing00@gmail.com", 
//   Subject: `${name}sent you a message`,
//   Body: `Name: ${name} <br/> Email: ${email} <br/> Message: ${message}`,

//  }).then((message) => alert("mail sent successfully"));
// }


 
