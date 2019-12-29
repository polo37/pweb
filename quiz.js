var nimo = [', congratulation',', tu es super fort',', tu devrais intégrer la NASA, non, je rigole'];
var idx=0;

var lili = [',tu es nul',', tu devrais mettre ta tête dans la bouse tellement tu es nul',', tu devrais relire la page web car les réponses sont dedans gros naze au lieu de cliquer au pif, tu es vraiment super pourri, gros lard'];

var rot = [" en fait, on sait pas car je n'ai pas dit du système solaire donc la question s'étendait sur tout l'univers, c'est bête."," on sait pas, car je n'ai pas dit  du système solaire donc la question s'étendait sur tout l'univers"];

var qfait = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var point = 0;

function printpoint(){
		var pts= document.getElementById("pts");
		pts.innerHTML=""+point;
	
	}


function		fonction (nq,rep) {
	console.log(rep);
	if (rep==0 || rep==3) {
		if (qfait[nq]==0) {
		point = point+1;
		qfait[nq]=1;
	   }
	   alert ("Tu as bien répondu, bravo "+ nimo[idx]);
	   idx = idx+1; 
	   if (idx==3) {
		   idx=0;
	   }
    } else if (rep==1 || rep==2) {
		 ii =Math.floor(Math.random()*lili.length);
	     alert ("Tu as mal répondu, tu es vraiment pourri pire qu'une crotte de moineau "+lili[ii]);
	  }
      else if (rep==4)
	 {
		oo =Math.floor(Math.random()*rot.length);
	   alert ("On peut pas savoir,"+rot[oo]);
	 }
	 	printpoint();

	return null;
}

function		lonlon(){
	var texte= document.getElementById("input").value;
	if (texte=="8") {
		if (qfait[6]==0) {
		point = point+1;
		qfait[6]=1;
	   }
	alert ( "Bravo, il y en a bien huit" ); }
	else {
	alert ("Mais non, il y en a huit");
	}		
		printpoint();

	return null;
}
function		yoyo(){
	var texte= document.getElementById("input2").value;
	if (texte=="1") {
		if (qfait[7]==0) {
		point = point+1;
		qfait[7]=1;
	   }
	alert ( "Bravo, tu es trop fort, il n'y en a qu'un seul" ); }
	else {
	alert ("Mais non, il y en a un seul"); }
	
	printpoint();

	return null;
}








