function askSerie() {
    let serie = {
        title: prompt('Entrez le titre de votre série'),
        production: prompt('Entrez le nom du producteur de votre série'),
        casting: prompt('Entrez le casting de votre série').split(',').map(actor => actor.trim())
    };
    return serie;
}



function RandomCast(tvSerie) {
    let randomCast = tvSerie.casting.sort(() => Math.random() - 0.5);
    return randomCast;
}

// console.log(RandomCast(askSerie()));

 function askSerie2(randomCast) {
    let serie2 = {
        title: prompt('Entrez le titre de votre série'),
        production: prompt('Entrez le nom du producteur de votre série'),
        casting: randomCast
    }
    return serie2;
}

//console.log(askSerie2( RandomCast(askSerie())));



