function getRandomInt(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);

    // The maximum is exclusive and the minimum is inclusive
    return Math.floor(Math.random() * (max - min) + min);
}

function cks(code: number): number {
    let total: number = 0;

    let value: string = code.toString();
    for (let i = 0; i < value.length; i++) {
        let c: string = value.charAt(i);

        if (i % 2 === 1) {
            total += parseInt(c);
        } else {
            total += 3 * parseInt(c);
        }
    }

    return (10 - (total % 10)) % 10;
}

export function getGTIN(): string {
    let pow: number = 12;
    let value: number = getRandomInt(10 ** pow, 10 ** (pow + 1));
    let chk: number = cks(value);

    return `${value}${chk}`;
}
