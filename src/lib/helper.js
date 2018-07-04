export const upper = (string) => { // Convert string into uppercase
        if(string === null || string === undefined) {return "Not Specified"}
        if(typeof string === 'string') {return string}
        return string.toLowerCase().replace(/\b[a-z]/g, function(letter) {
            return letter.toUpperCase();
        })
    }
