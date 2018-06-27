/* function IsEmpty(objectfield,stringfield)
{
    objectvalue = objectfield.value.length;
    if(objectvalue=="")
    {
        alert("Oops.. Please fill out the value of "+stringfield);
        return false;
    }
    else
        return true;
}

function validateEmail(field,alerttxt)
{
    with (field)
    {
        apos=value.indexOf("@");
        dotpos=value.lastIndexOf(".");
        if (apos<1||dotpos-apos<2){
            alert(alerttxt);return false;
        }
        else {
            return true;
        }
    }
}

function validatePassword(fld) {
  var error = "";
  var illegalChars = /[\W_]/; // allow only letters and numbers

  if (fld.value == "") {
      fld.style.background = 'Yellow';
      error = "You didn't enter a password.\n";
      alert(error);
      return false;

  } else if ((fld.value.length < 1) || (fld.value.length > 8)) {
      error = "The password is the wrong length. \n";
      fld.style.background = 'Yellow';
      alert(error);
      return false;

  } else if (illegalChars.test(fld.value)) {
      error = "The password contains illegal characters.\n";
      fld.style.background = 'Yellow';
      alert(error);
      return false;

  } else {
      fld.style.background = 'White';
  }
 return true;
} */