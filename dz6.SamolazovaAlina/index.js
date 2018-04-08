
	// 1 задание
	function min(m1,m2){
		if (arguments.length==0){return null;}
		var min=arguments[0];
		for (var i=0;i<arguments.length;i++){
			if (arguments[i]<min){
				min=arguments[i];
			}
		}
		return min;
	}
	console.log (min(100,-4));

		
	// 2 задание
    function countBs(message){
	var send = 0;
	var s = "B";
		for (var i=0;i<message.length;i++){
			if(message.charAt(i)==s){
				send++;
			}
		}
		return send;
	}	
	console.log (countBs("BaBy"));	




	function countChar(text,a){
		var score = 0;
		for (var i=0;i<text.length;i++){
			if(text.charAt(i)==a){
				score++;
			}
		}
		return score;
	}	
	console.log (countChar("Baby","b"));


	// 3 задание

	function isEven(n){
		if (n==0){return true;}
		if (n==1){return false;}
		return isEven (n-2*(n>0?1:-1));
	}
	console.log (isEven(50));
	console.log (isEven(75));
	console.log (isEven(-1));
	

	
