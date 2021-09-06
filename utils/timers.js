//jshint esversion:9

const setTimer = (fn) => {
    let now = new Date();
    if (now.getMonth() == 11) {
        let nextMonth = new Date(now.getFullYear() + 1, 0, 1);
    } else {
        let nextMonth = new Date(now.getFullYear(), now.getMonth() + 1, 1);
    }setTimeout(fn, now-nextMonth)
    
}