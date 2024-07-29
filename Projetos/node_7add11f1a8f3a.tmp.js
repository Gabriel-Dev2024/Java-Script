let count = 0;

const timer = setInterval(() => {
    if (count > 10) {
        clearInterval(timer);
        return;
    }
    console.log(count)
}, 400)