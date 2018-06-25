import React from 'react';

export const upper = (string) => { // Convert string into uppercase
        if(string === null) {return "Not Specified"}
        return string.toLowerCase().replace(/\b[a-z]/g, function(letter) {
            return letter.toUpperCase();
        })
    }
