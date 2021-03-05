function verificaPalindrome(string) {
    let compare;
    for (let index=string.length; index=0; index-=1) {
        compare = compare + index;
    }
    if (compare === string) {
        mensagem = 'true';
    } else {
        mensagem = 'false';
    }

    return mensagem;
}

console.log(verificaPalindrome('arara'));