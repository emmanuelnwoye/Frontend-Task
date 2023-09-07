document.addEventListener('DOMContentLoaded', function() {

    function getCurrentDayOfWeek() {
        const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const currentDate = new Date();
        const dayIndex = currentDate.getUTCDay();
        return daysOfWeek[dayIndex];
    }

    function getCurrentUTCTime() {
        const currentDate = new Date();
        const hours = currentDate.getUTCHours().toString().padStart(2, '0');
        const Minutes = currentDate.getUTCMinutes().toString().padStart(2, '0');
        return '${hours}:${minutes} UTC';
    }

    document.querySelector('[data-testid="currentDayOfTheWeek"]').textContent = getCurrentDayOfWeek();
    document.querySelector('[data-testid="currentUTCTime"]').textContent = getCurrentUTCTime();
});