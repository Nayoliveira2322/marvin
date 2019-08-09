function ateZero(n) {
    var nicola = [] 
    x = 0
    while (x<=n) {
     nicola[x]=x
    x++
}
    if (n>0) {
return nicola 
} else { 
    x-- 
}
    x = 0
    while (n<=0) {
     nicola[x]=n
    x++
    n++
    }
    return nicola
}
