function akanGen(){
    //Variables to extract values from Forms
    var name = document.getElementById("name").value;
    var birthDate = document.getElementById("birthDate").value;
    var gender = document.getElementById("gender").value;

    //Extracted Variable conversion
    var dateString = birthDate.split("/");
    var dayVal = parseInt(dateString[0]);
    var monthVal = parseInt(dateString[1]);
    var yearVal= parseInt(dateString[2]);
    var yearString = yearVal.toString();
    var ccVal = parseInt(yearString.substring(0,2));
    var yyVal = parseInt(yearString.substring(2,4));
    console.log(dateString);


}