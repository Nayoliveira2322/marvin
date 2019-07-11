function maiusculo(palavra) {
    primeiras = palavra.substring(0,3)
    ultimas = palavra.substring(3);
    return primeiras.toUpperCase()+ultimas
}
