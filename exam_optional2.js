const readline = require('./lib/read3lines.js');

const optional2 = (twoNumbers, W, S) => {
    const [a, b] = twoNumbers.split(' ');
    let g = Number(a);
    let SLength = Number(b);

    // uncomment เพื่ออนุญาติให้คำนวณได้ถ้า input บรรทัดแรกไม่ตรงกับความยาวของ W และ S
    // if (g !== W.length)
    //     g = W.length;
    // if (SLength !== S.length)
    //     SLength = S.length;

    if (g !== W.length || SLength !== S.length || !/^[a-zA-Z]+$/.test(W) || !/^[a-zA-Z]+$/.test(S) || 1 > g > 3000 || g > SLength > 3000000) {
        throw new Error("Invalid Input");
    }


    let count = 0;
    let unusedGlyphs = [...W];
    for (let i = 0; i < (SLength - (g - 1)); i++) {
        if (unusedGlyphs.length === 0) {
            count += 1;
        }
        unusedGlyphs = [...W];
        if (unusedGlyphs.includes(S[i])) {
            
            for (let j = i; j < (i+g); j++) {
                if (unusedGlyphs.includes(S[j])) {
                    unusedGlyphs.splice(unusedGlyphs.indexOf(S[j]), 1);
                } else {
                    break;
                }
            }
        }
    }
    if (unusedGlyphs.length === 0) {
        count += 1;
    }
    return count;
}

readline(optional2);