

function main() {

    const exchangeRate = 75;

    let rubles = Number(prompt("Rubl hesabını daxil edin:"));
    let dollars = Number(prompt("Dollar hesabını daxil edin:"));


    let dollarsInRubles = dollars * exchangeRate;

    let totalRubles = rubles + dollarsInRubles;


    alert( totalRubles + " rubl.");
}

main();
