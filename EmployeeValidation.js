

function formValidation()
{
var uid = document.registration.userid;
var passid = document.registration.passid;
var uname = document.registration.username;
var uadd = document.registration.address;
var ucountry = document.registration.country;
var umobile = document.registration.mobile;
var uemail = document.registration.email;
var umsex = document.registration.msex;
var ufsex = document.registration.fsex; 
if(allLetter(uname))
{
if(alphanumeric(uadd))
{ 
if(countryselect(ucountry))
{
if(allnumeric(umobile))
{
	
if(ValidateEmail(uemail))
{

}
} 
}
} 
}

return false;

} 
function allLetter(uname)
{ 
var letters = /^[A-Za-z]+$/;
if(uname.value.match(letters))
{
return true;
}
else
{
alert('Username must have alphabet characters only');
uname.focus();
return false;
}
}
function alphanumeric(uadd)
{ 
var letters = /^[0-9a-zA-Z,]+$/;
if(uadd.value.match(letters))
{
return true;
}
else
{
alert('User address must have alphanumeric characters only');
uadd.focus();
return false;
}
}
 
function countryselect(ucountry)
{
if(ucountry.value == "Default")
{
document.getElementById('message').innerHTML="*Select your country from the list";
ucountry.focus();
return false;
}
else
{
return true;
}
}
function allnumeric(umobile)
{ 
var numbers = /^\d{10}$/;
if(umobile.value.match(numbers))
{
return true;
}
else
{
alert('phoneno must have numeric characters only and should not exceed 10digit');
umobile.focus();
return false;
}
}
function ValidateEmail(uemail)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(uemail.value.match(mailformat))
{
	alert('Form Succesfully Submitted');
window.location.reload()
return true;
}
else
{
alert("You have entered an invalid email address!");
uemail.focus();
return false;
}
} 