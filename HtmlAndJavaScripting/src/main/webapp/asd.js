function validateForm() {
	var x = document.forms["Person"]["empno"].value;
	var name = document.forms["Person"]["name"].value;
	if (x == "") {
		alert("Emp No can not be empty");
		return false;
	}
	
	if(name=="")
		{
		alert("Employee Name can not be Empty");
		return false;
		}
}