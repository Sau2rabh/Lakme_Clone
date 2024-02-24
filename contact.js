// form validation //
const _email = document.getElementById('email');
const _phone = document.getElementById('phone');
const _validate = document.getElementById('validate');
const _validation = document.getElementById('validation');
const _emailError = document.getElementById('emailError');
const _phoneError = document.getElementById('phoneError');


const emailPattern = /^[\w\.\-]+@[\w\.\-]+\.[a-zA-Z]+$/;  //valid email pattern
  const phonePattern = /^\d{3}-\d{3}-\d{4}$/;              // valid phone pattern
      
      const patterns = {                                         
        email:/^[\w\.\-]+@[\w\.\-]+\.[a-zA-Z]+$/,
        phone:/^\d{3}-\d{3}-\d{4}$/
        
      }

function validate() {   
 if( !patterns.email.test(_email.value) ){         //if filled email is not according to pattern then give msg                                                        invalid email address  all the fields are required
      _emailError.innerHTML= "Invalid Email Address";
     _validation.innerHTML='Please fill all the required fields*'; // it is required field
 }
  if( !patterns.phone.test(_phone.value) ){
      _phoneError.innerHTML= "Invalid Phone Number";  //if phone is not as per the pattern then give msg invalid                                                    phone number
     _validation.innerHTML='Please fill all the required fields*';  // it is required field
  }
         if(patterns.phone.test(_phone.value) && patterns.email.test(_email.value) ) // if both matchs to the                                                                                  pattern then appointment is                                                                                 booked. 
   _validation.innerHTML='Success';
}

_validate.onclick = validate;

// date picker //
  
 $(function() {
            $( "#datepicker-1" ).datepicker();            // J Query UI datepicker to select the specific date                                                     for appointment.
         });
      