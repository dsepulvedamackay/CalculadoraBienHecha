$(document).ready(function(){ 
	var numbers = ['7','8','9','4','5','6','1','2','3','.','0'];
	
	numbers.forEach(function (data) {
			var button = document.createElement('button');
			var btnText = document.createTextNode(data);
			button.setAttribute('class', 'btn');
			button.setAttribute('onclick', 'Calculadora.writeNumber("' + data + '")');
			button.id = data;
			button.appendChild(btnText);
		})
	var btnDiv = document.createElement('div');
});