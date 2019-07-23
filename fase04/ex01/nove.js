function nove (num) {
    var n1 = num.toString() ;
    var n2 = n1.substr(-1);
    if (n2 === "9") {
        return "true" ;
    }else{ 
        return "false";
    }
}
