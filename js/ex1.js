console.log("This is ex1.js")


var myName ="Fariha Islam Fatema";
var age ="24";

var firstName ="Hi, my name is";
var secoendName ="I'm";
var thirdName ="years old and I learning Javascript";

  

document.getElementById('student_message').innerHTML = firstName + " " + myName+ "," + secoendName +" " +  age + " " +  thirdName;





var number1 =155;
var number2 =5;



document.getElementById('result').innerHTML =number1 /  number2;






var phone1 = "01313131313";





if(phone1.length ==11  ) {
    console.log("valid.");
} else {
    console.log("invalid");
}





var phone2 = "01723543267";
if(phone2.length ==11  ) {
    console.log("valid.");
} else {
    console.log("invalid");
}

var phone3 = "01945634278";
if(phone3.length == 11  ) {
    console.log("valid.");
} else {
    console.log("invalid");
}




// 5

var power = Math.pow (32,6);

console.log((power)) ;




// 7

var quantity = "25";
console.log(quantity += quantity);

var number = 6;
console.log( (7+5) / number + 2 );


var pressure;
console.log(pressure);



var temperature = null;
console.log(temperature);

var pressure;
console.log(typeof pressure);


var temperature = null;
console.log(typeof temperature);



// 8

// 1

var getAddressFromWebsite = document.getElementById("url_1").innerText;
console.log(getAddressFromWebsite);

var modifyAddress = "https://" + getAddressFromWebsite;
console.log(modifyAddress);


document.getElementById("url_2").innerText = modifyAddress;


// 2

var getAddress = document.getElementById("url_3").innerText;
console.log(getAddress);

var modifyAddress = ( getAddress.replace("https://" , "") ) ;
console.log(modifyAddress);

document.getElementById("url_4").innerText = modifyAddress;














