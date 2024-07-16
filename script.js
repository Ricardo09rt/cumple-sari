function redirectToPage() {
    window.location.href = "birthday.html";
}

document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.container');
    const balloons = document.createElement('div');
    balloons.id = 'balloons';

    for (let i = 1; i <= 9; i++) {
        const balloon = document.createElement('div');
        balloon.className = 'balloon';
        balloon.style.left = `${10 * i}%`;
        balloon.style.animationDelay = `${i}s`;
        balloons.appendChild(balloon);
    }

    container.appendChild(balloons);
});
