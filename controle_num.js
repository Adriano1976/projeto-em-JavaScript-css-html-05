function calcular_suc(num)
{
	var num_suc = num;	
	return num_suc + 1;		
}

function calcular_ant(num)
{
	var num_ant = num;
	return num_ant - 1;
}

function mostrar_num(form)
{
	var num_suc = calcular_suc	
		(parseInt(form.num.value)); 
		alert("Número Sucessor:  " + num_suc);
		
	var num_ant = calcular_ant
		(parseInt(form.num.value));
		alert("Número Antecessor:  " + num_ant);
}