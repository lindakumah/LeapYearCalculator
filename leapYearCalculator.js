let leapYearChecker = () => {
    let year = document.querySelector(".year").value;
    let output = document.querySelector(".output");
    
    if (year != 0){
        if ((year % 4 == 0) && (year % 100 != 100) && (year % 400 == 0)){
            output.value = year + " is a leap year";
        } else {
            output.value = year + " is a not leap year";
        }
    } else{
        output.value = year + " is a not leap year";
    }
}

document.querySelector(".btn").addEventListener("click", leapYearChecker);
