function minusculo(palavra) {
    primeira = palavra.substring(0,1)
    resto = palavra.substring(1)
    return primeira.toLowerCase() + resto.toUpperCase()
}
