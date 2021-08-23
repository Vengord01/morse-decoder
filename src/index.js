const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
    '*': ' ',
};

function decode(expr) {
    let res = '';

    for (let i = 0; i < expr.length; i += 10) {
        let current = expr.slice(i, i + 10);
        let arg = '';
        if (current.charAt(0) == '*') {
            arg = '*';
        } else {
            for (let j = 0; j < 10; j += 2) {
                if (current[j + 1] == '1') {
                    arg += ('-');
                }
                if (current[j] == '1' && current[j + 1] == '0') {
                    arg += ('.');
                }
            }
        }
        res += MORSE_TABLE[arg];
    }
    return res;
}

module.exports = {
    decode
}
