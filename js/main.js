//Typed.js Instance
document.addEventListener('DOMContentLoaded', function() {
    var typed = new Typed('#typed', {
        strings: [
            '...in family',
            '...in business',
            '...in nature',
            '...in fun',
            '...in life'
        ],
        typeSpeed: 100,
        backSpeed: 100,
        startDelay: 1000,
        backDelay: 1000,
        loop: true,
        loopCount: Infinity,
        showCursor: true,
        cursorChar: 'I',
        smartBackspace: false
    });
});