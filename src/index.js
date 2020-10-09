module.exports = function toReadable(number) {

    if (number.length > 3) { return 'Add *** number' };

    let th = ['hundred', 'thousand', 'million', 'milliard', 'billion'];
    let dg = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let tn = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let tw = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    let num = number.toString();


    let getSingle = (num) => { return dg[num]; }

    let getDouble = (num) => {
        if (num[0] == 1) { return tn[num - 10]; }
        if (num[1] == 0 && num[0] != 1) { return tw[num / 10 - 2]; }
        if (num[0] != 1 && num[1] != 0) { return tw[Math.floor(num / 10) - 2] + ' ' + dg[num % 10]; }
    }

    if (num.length === 1) return getSingle(num);
    if (num.length === 2) return getDouble(num);

    let getTriple = (num) => {
        if (num[1] == 0 && num[2] == 0) { return dg[num / 100] + ' ' + th[0]; }

        if (((num[1] != 1 && num[1] != 0 && num[2] != 0) || num[1] != 0)) { return dg[Math.floor(num / 100)] + ' ' + th[0] + ' ' + getDouble(num.slice(1, 3)); }

        if (num[1] == 0) { return dg[Math.floor(num / 100)] + ' ' + th[0] + ' ' + getSingle(num.slice(2, 3)); }
    }

    if (num.length === 3) { return getTriple(num); }


}
