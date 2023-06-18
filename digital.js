
//!..... DIGITAL 

function displayDateAndTime() {  // function function name

    let curDateobj= new Date();  // object 

    let curhours=curDateobj.getHours();  

    let curmin=curDateobj.getMinutes();
    let cursecs=curDateobj.getSeconds();



    let curdate=curDateobj.getDate();
    let curmonth=curDateobj.getMonth()+1;
    let curyear=curDateobj.getFullYear();

    document.getElementById("hours").innerText=curhours;
    document.getElementById("mins").innerText=curmin;
    document.getElementById("secs").innerText=cursecs;

    document.getElementById("date").innerText=curdate;
    document.getElementById("month").innerText=curmonth;
    document.getElementById("year").innerText=curyear;

    let curday=curDateobj.getDay();
    switch (curday) {
        case 0:curday="SUNDAY"
            
            break;
            case 1:curday="MONDAY"
            
            break;
            case 2:curday="TUESDAY"
            
            break;
            case 3:curday="WEDNESDAY"
            
            break;
            case 4:curday="THURSDAY"
            
            break;
            case 5:curday="FRIDAY"
            
            break;
            case 6:curday="SATURDAY"
            
            break;
        
    }
    document.getElementById("day").innerText=curday;

  







}