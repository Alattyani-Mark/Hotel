let ar=100000;
let ar1=150000;
let ar2=200000;
let letsz=document.getElementById("letsz").value;
let letsz1=document.getElementById("letsz1").value;
let letsz2=document.getElementById("letsz2").value;
let ido=document.getElementById("ido").value;
let ido1=document.getElementById("ido1").value;
let ido2=document.getElementById("ido2").value;
let osszeg=0;
//let xd1=document.getElementById("fk");
//let xd2=document.getElementById("fk2");
//let xd3=document.getElementById("fk3");
function szamol(szam){
	if (szam==1){
		osszeg=ido*ar/letsz;
		console.log(osszeg);
		//xd1.value=osszeg*1;
		document.getElementById("fk").value=osszeg;
	}
	else if (szam==2){
		osszeg=ido1*ar1/letsz1;
		//xd2.value=osszeg;
	}
	else if (szam==3){
		osszeg=ido2*ar2/letsz2;
		//xd3.value=osszeg;
	}
	
}
