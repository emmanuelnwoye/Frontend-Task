document.addEventListener('DOMContentLoaded', function() {
    function updateClock() {
        const currentDate = new Date(Date.now() - (11 * 60 * 60 * 1000));
        let hours = (currentDate.getUTCHours() + 11) % 12 + 1;
        const minutes = currentDate.getUTCMinutes();
        const seconds = currentDate.getUTCSeconds();
        const milliseconds = currentDate.getUTCMilliseconds();
        const ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12 || 12;

        document.getElementById('hour').textContent = hours.toString().padStart(2, '0');
        document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
        document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
        document.getElementById('milliseconds').textContent = milliseconds.toString().padStart(3, '0');
        document.getElementById('ampm').textContent = ampm;
}

    setInterval(updateClock, 1);

    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDate = new Date(Date.now() - (11 * 60 * 60 * 1000));
    const dayIndex = currentDate.getDay();
    const currentDay = daysOfWeek[dayIndex];
    document.querySelector('[data-testid="currentDayOfTheWeek"]').textContent = currentDay();
});