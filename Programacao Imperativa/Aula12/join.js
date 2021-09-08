let juntaArray = "";

function join(array) {

    for (let i = 0; i < array.length; i++) {
        juntaArray += array[i];
    }
    return juntaArray;
}

console.log(join(["o", "l", "a"]));