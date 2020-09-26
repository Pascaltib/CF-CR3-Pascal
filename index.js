function calculateInsurance(){

var horse_power = Number(document.getElementById("horsepower").value);
var select = document.getElementById('select').value;
var age = Number(document.getElementById('age').value);
var name = document.getElementById("name").value;
var result = 0;
	
	if(select=="0"){
		result = (horse_power * 100/age)+50;
	}
	else if(select=="1"){
		result = (horse_power * 120/age)+100;
	}
	else if(select =="2"){
		result = (horse_power * 150/(age+3))+50;
	}
	result = Math.round(result);
	console.log(result);
	
	document.getElementById('result').innerHTML = `${name}, your insurance cost is: ${result} €`;
}

document.getElementById('calculate').addEventListener('click', calculateInsurance, false);