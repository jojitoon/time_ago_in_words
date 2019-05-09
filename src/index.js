import Helpers from './helper';

export default class TimePast {
    static inWords(date) {
        const timePassed = Helpers.convertToTime(date);
        const currentTime = new Date();
        const seconds = Helpers.getSeconds(currentTime, timePassed);
        const mins = seconds / 60;
        const hours = mins / 60;
        const days = hours / 24;
        const weeks = days / 7;
        const months = weeks / 4.35;
        const years = months / 12;
        let timeText = '';

        if (seconds < 60) {
            timeText = 'just now';
        } else if (seconds >= 60 && mins < 60) {
            timeText = Helpers.getTimeAgo(mins, 'minute');
        } else if (mins >= 60 && hours < 24) {
            timeText = Helpers.getTimeAgo(hours, 'hour');
        } else if (hours >= 24 && days < 7) {
            timeText = Helpers.getTimeAgo(days, 'day');
        } else if (days >= 7 && weeks < 4.35) {
            timeText = Helpers.getTimeAgo(weeks, 'week');
        } else if (weeks >= 4.35 && months < 12) {
            timeText = Helpers.getTimeAgo(months, 'month');
        } else {
            timeText = Helpers.getTimeAgo(years, 'year');
        }

        return timeText;
    }
}
