 function validateform()
{
	var data = "";
	var UserName = document.myform.UserName.value;
	var email = document.myform.email.value;
	var password = document.myform.password.value;
	var confirmedpassword =document.myform.confirmedpassword.value;

	if(UserName == null || UserName =="")
	{
		alert("Name cant be Blank");
		return false;
	}
	else if(password.length<6){
		alert("password must be at least 6 charactor.");
		return false;
	}
	else if(password !== confirmedpassword)
	{
		alert("Password Mismatched. Recheck and give the correct One ")
		return false;
	}
	else{
		data = {
			"UserName":UserName,
			"email":email,
			"password":password,
			"confirmedpassword":confirmedpassword
		}
		alert(JSON.stringify(data));
		console.log(data);
		
	}
} 
// $(document).ready(() => {
//     console.log("Hello World!");
// });