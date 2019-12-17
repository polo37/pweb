
const imgs=["img1.png","img2.png","img3.png","img4.png","img5.png","img6.png","img7.png","img8.png","img9.png","img10.png","img11.png","img12.png"];

const mots=[ ["loup","animal de la foret"] , ["mots","pluriel de mot"] , ["loup-garou","humain qui se transforme les nuits de pleines lunes"] , ["chien","loup apprivoisé par les humains"] , ["lycanthrope","vrai nom de loup-garou"] , ["berger","quelqu'un qui garde les champs"] , ["enclos","endroit ou on stoque les animaux"] , ["forêt","habitat naturel du loup"] , ["maison","lieu ou habtitent les habitants"] , ["village","lieu ou il y a des maisons"] , ["mouton","proie du loup dans les enclos"] , ["peur","ce que fait un loup-garou"] , ["dévorer","ce que fait un loup avec les moutons"] , ["monstre","on peut considéré que le loup-garou en est un"] , ["chèvre","autre proie du loup dans un enclos"] , ["pendu","ce qu'on est en train de faire"] , ["légende","histoire majoritairement fausse"] , ["lapin","proie difficile a atrapper dans la forêt"] , ["renard","autre proie difficile a atrapper dans la forêt"] , ["biche","gros animal difficile a atrapper dans la forêt"] , ["colère","ce qu'avaient les habitants contre les loups jadis"] , ["chasse","moment pour atrapper de la nouriture (animal)"] , ["tuer","ce que faisait les habitants quand ils voyaient un loup"]];
var m=mots[parseInt(Math.random()*mots.length)];
var mot=m[0];
var indice=m[1];
var vie_restantes=11;
var lettres_trouvees=[];
for(x=0;x<mot.split('').length;x++){
	var etat=false;
	if (mot.split('')=="-") etat=true
	lettres_trouvees.push(etat);
}

function aff(){
	var affi="";
	for(x=0;x<mot.length;x++){
		if(lettres_trouvees[x]){
			affi+=" "+mot[x];
		}
		else{
			affi+=" _"
		}
	}
	//alert(affi);
	document.getElementById("mot").innerHTML=affi;
	document.getElementById("vies").innerHTML="IL VOUS RESTE "+vie_restante+" VIES";
	var i=imgs[vie_restantes];
	document.getElementById("img").src=i;
}

function lettre(l){
	if(vie_restantes<=0){
		alert("Tu as perdu, t'es trop nul !");
		return null;
	}
	//alert(l);
	var trouve=false;
	var n=0;
	for(x=0;x<mot.split('').length;x++){
		var letr=mot.split('')[x];
		if(letr==l){
			lettres_trouvees[n]=true;
			trouve=true;
		}
		n+=1;
	}
	if(trouve==false){
		vie_restantes-=1;
		if(vie_restantes==1) alert("indice : "+indice);
		if(vie_restantes<=0){
			alert("Tu as perdu, t'es trop nul !");
		}
	}
	var gagne=true;
	for(x=0;x<lettres_trouvees.length;x++){
		var l=lettres_trouvees[x];
		if( l==false ) gagne=false;
	}
	if(gagne) alert("Tu as gagné");
	aff();
}


function restart(){
	m=mots[parseInt(Math.random()*mots.length)];
	mot=m[0];
	indice=m[1];
	vie_restantes=10;
	lettres_trouvees=[];
	for(x=0;x<mot.split('').length;x++){
		lettres_trouvees.push(false);
	}
	aff();
}

aff();
