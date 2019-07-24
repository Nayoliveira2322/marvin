function abc(pala) {
    var pal = pala.toLowerCase()
    var letra = pal.substr(0,1);
    if (letra == "a" || letra == "b" || letra == "c") {
        return true;
    } else {
        return false;
    }
}
