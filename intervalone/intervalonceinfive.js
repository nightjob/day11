function logNumberInFive(number) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(number);
            resolve();
        }, 5000);
    })
}

logNumberInFive(9001)