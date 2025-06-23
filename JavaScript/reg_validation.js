
function validate()
{ 
   if( document.StudentRegistration.fname.value == "" )
   {
     alert( "Please provide your First Name!" );
     document.StudentRegistration.fname.focus() ;
     return false;
   }
   if( document.StudentRegistration.lname.value == "" )
   {
     alert( "Please provide your Last Name!" );
     document.StudentRegistration.lname.focus() ;
     return false;
   }
   if( document.StudentRegistration.pass.value == "" )
   {
     alert( "Please provide your Password and Confirm it!" );
     document.StudentRegistration.pass.focus() ;
     return false;
   }
   if( document.StudentRegistration.mnum.value == "" ||
           isNaN( document.StudentRegistration.mnum.value) ||
           document.StudentRegistration.mnum.value.length != 10 )
   {
     alert( "Please provide a valid 10 digit Mobile No." );
     document.StudentRegistration.mnum.focus() ;
     return false;
   }
   var email = document.StudentRegistration.email.value;
   atpos = email.indexOf("@");
   dotpos = email.lastIndexOf(".");
   if (email == "" || atpos < 1 || ( dotpos - atpos < 2 )) 
   {
     alert("Please enter correct email ID")
     document.StudentRegistration.email.focus() ;
     return false;
   }
   if( document.StudentRegistration.dob.value == "" )
   {
     alert( "Please provide your DOB!" );
     document.StudentRegistration.dob.focus() ;
     return false;
   }
   if ( ( StudentRegistration.sex[0].checked == false ) && ( StudentRegistration.sex[1].checked == false ) )
   {
   alert ( "Please choose your Gender: Male or Female" );
   return false;
   }   
   if( document.StudentRegistration.City.value == "-1" )
   {
     alert( "Please provide your City!" );
     document.StudentRegistration.City.focus() ;
     return false;
   }   
   if( document.StudentRegistration.State.value == "-1" )
   {
     alert( "Please provide your Select State!" );
     
     return false;
   }
   if( document.StudentRegistration.pincode.value == "" ||
           isNaN( document.StudentRegistration.pincode.value) ||
           document.StudentRegistration.pincode.value.length != 6 )
   {
     alert( "Please provide a pincode in the format ######." );
     document.StudentRegistration.pincode.focus() ;
     return false;
   }
    return( true );
}
