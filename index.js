
// 1 задание

	for (var i = 1;i<=100;i++) {

		var number = ((i%3==0) && (i%5==0))?('FizzBuzz'):
		(i%3==0)?('Fizz'):
		 (i%5==0)?('Buzz'):(i);
		 console.log (number);

	}
	console.log ('\n\n');

		
	// 2 задание
	var text = +prompt ('Введите количество строк','0');
	var a =" ";
	var i=0;
	while (i<text){
		a+="#";
		console.log (a);
		i++;
		
	}
	console.log ('\n\n');
    
	
	
	// 3 задание
	var desk ='';
	for (i=0;i<8;i++){
		for (j=0;j<8;j++){
			desk+=(i+j)%2?' ':'#';
		}
		desk+='\n';
	}
	console.log (desk);


	
