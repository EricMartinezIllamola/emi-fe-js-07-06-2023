const expresion = new RegExp(/amor/g)
const r1 = "Busco amor, Amor".match(expresion);
console.log(r1); // ['amor']

const r2 = "Busco amor, Amor".match(/amor/gi);
console.log(r2); // ['amor', 'Amor']

const r3 = "Busco amor, Amor".match(/[ao]/gi);
console.log(r3); // ['o', 'a', 'o', 'A', 'o']

const r4 = "amor".match(/[^a]/gi);
console.log(r4); // ['m', 'o', 'r']

const r5 = "rm235".match(/[^1-3]/gi);
console.log(r5); // ['r', 'm', '5']

const r6 = "ana_jupa".match(/.a/gi);
console.log(r6); // ['na', 'pa']

const r7 = "ana_jupa".match(/a./gi);
console.log(r7); // ['an', 'a_']

const r8 = "1a2n3a".match(/\d/gi);
console.log(r8); // ['1', '2', '3']

const r9 = "1a2n3a".match(/\D/gi);
console.log(r9); // ['a', 'n', 'a']

const r10 = "aabbcc".match(/\baa/gi);
console.log(r10); // ['aa']

const r11 = "aabbcc".match(/^aa/gi);
console.log(r11); // ['aa']

const r12 = "abcoooababcccccab".match(/abc+/gi);
console.log(r12); // ['abc', 'abccccc']

const r13 = "abcoooababcccccab".match(/abc*/gi);
console.log(r13); // ['abc', 'ab', 'abccccc', 'ab']

const r14 = "abcoooababcccccab".match(/abc?/gi);
console.log(r14); // ['abc', 'ab', 'abc', 'ab']

const r15 = "abc-ooo-ab-cabccccc-ab".match(/(abc)/gi);
console.log(r15); // ['abc', 'abc']