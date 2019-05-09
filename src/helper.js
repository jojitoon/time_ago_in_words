export default class Helpers {
    static convertToTime(date) {
        if (typeof (date) === 'string') {
            return new Date(date);
        }

        return date.getTime();
    }

    static getSeconds(currentTime, timePassed) {
        if (currentTime > timePassed) {
            return (currentTime - timePassed) / 1000;
        }

        return 0;
    }

    static getTimeAgo(minutes, range) {
        const time = Math.trunc(minutes);

        if (time === 1) {
            return `${time} ${range} ago`;
        }

        return `${time} ${range}s ago`;
    }
}
