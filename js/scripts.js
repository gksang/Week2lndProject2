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

    //Date Validation Check 
    //Checks for Null Values
    if(!name || birthdate){
        alert("You have not entered any value under your name or birthdate ! Please enter both of these values to proceed");
    }
    //Checks for  Incorrect Date
    else if (dayVal <=0 || dayVal > 31){
        alert("The Value entered as your birth day number on your Birthdate is Invalid! The Birth Day on your Birthdate cannot be 0, less than 0 or greater than 31. Please enter the correct number between 0 and 31 as your Birth Day");
    }
    //checks for incorrect Month
    else if(monthVal <= 0 || monthVal > 12){
        alert("The Value entered as the month number on your Birthdate is Invalid! The Month on your Birthdate cannot be 0,less than 0 or greater than 12. Please enter the correct number between 0 and 12 as your Birth Month");
    }
    // Parses Correct Values for Akan Name Generation
    else{
        alert("You have entered the correct data");
    }
 
    


}