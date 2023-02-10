<script>
function validateform()
{
	var UserName = document.myform.UserName.value;
	var email = document.myform.email.value;
	var password = document.myform.password.value;
	var confirmedpassword =document.myform.confirmedpassword.value;

	if(UserName == null || UserName =="")
	{
		alert("Name cant be Blank");
		return false;
	}
	elseif(password.length<6){
		alert("password must be at least 6 charactor.");
		return false;
	}
	elseif(password != confirmedpassword)
	{
		alert("Password Mismatched. Recheck and give the correct One ")
		return false;
	}
	else{
		alert("done");
	}
}
</script>