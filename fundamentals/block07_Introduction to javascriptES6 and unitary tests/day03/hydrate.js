const hydrate = (string) => {
    const splitTheString = string.split('');
    const result = splitTheString.reduce((corposDeAgua, caract) => {
        let parsedCaract = parseInt(caract);
        let isCaractANumber = isNaN(parsedCaract) === false;
        if (isCaractANumber) {
            return corposDeAgua + parsedCaract;
        }
        return corposDeAgua;
    }, 0);

    const copoOucopos = result === 1 ? 'copo' : 'copos';
    return `${result} ${copoOucopos} de água`;
}

module.exports = hydrate;