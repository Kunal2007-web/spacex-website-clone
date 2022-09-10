// Elements
const counters = document.querySelectorAll('.counter');

// Event Listener
document.addEventListener('scroll', scrollPage);

// Check the position of scroll to do the stat count
let scrollStarted = false;
function scrollPage() {
    const scrollPos = window.scrollY;

    if (scrollPos > 125 && !scrollStarted) {
        countUp();
        scrollStarted = true;
    } else if (scrollPos < 125 && scrollStarted) {
        resetCounter();
        scrollStarted = false;
    }
}

// Count up the stats using the data-target attribute
function countUp() {
    counters.forEach((counter) => {
        counter.innerText = '0';

        const updateCounter = () => {
            const target = +counter.getAttribute('data-target');
            const c = +counter.innerText;

            const increment = target / 100;

            if (c < target) {
                counter.innerText = `${Math.ceil(c + increment)}`;

                setTimeout(updateCounter, 150);
            } else {
                counter.innerText = target;
            }
        };

        updateCounter();
    });
}

// Reset the stat counter
function resetCounter() {
    counters.forEach((counter) => counter.innerText = '0');
}