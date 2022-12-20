function logNumberFiveSeconds(number) {
    setInterval(() => {
        console.log(number);
    }, 5000);
}

logNumberFiveSeconds(9001)