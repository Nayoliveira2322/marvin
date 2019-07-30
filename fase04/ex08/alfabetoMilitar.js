function alfabetoMilitar(l1) {
    var l = l1.toLowerCase() 
    if (l == "a") {
        return "alpha"
    }
    if (l == "e") { 
        return "echo"
    }
    if (l == "i") {
        return "india"
    }
    if (l == "o") {
        return "oscar" 
    }
    if (l == "u") {
        return "uniform"
    }else{
        return false
    }
}
