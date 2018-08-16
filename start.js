const time_past_in_words = (date, no_sec) => {
    const totalTime = typeof(date) === 'string'? new Date(date):date.getTime();
    const currentTime = new Date();
    const seconds = currentTime > totalTime ? (currentTime - totalTime) / 1000 : 0;

    if (seconds < 60) {
        if (no_sec === false){
            return 'just now';
        } else {
        return Math.trunc(seconds) === 1 ? Math.trunc(seconds) + " seconds ago" :Math.trunc(seconds) + " seconds ago";
        }
    } else {
        const minutes = seconds / 60;
        if (minutes < 60) {
            return Math.trunc(minutes) === 1 ? Math.trunc(minutes) + " minute ago" : Math.trunc(minutes) + " minutes ago";
        } else {
            const hours = minutes / 60;
            if (hours < 24) {
                return Math.trunc(minutes) === 1 ? Math.trunc(hours) + " hour ago" : Math.trunc(hours) + " hours ago";
            } else {
                const days = hours / 24;
                if (days < 7) {
                    return Math.trunc(days) === 1 ? Math.trunc(days) + " day ago" : Math.trunc(days) + " days ago";
                } else 
                    const weeks = days/7;
                    if(weeks < 4){
                        return Math.trunc(weeks) === 1?Math.trunc(weeks) + " week ago":Math.trunc(weeks) + " weeks ago";
                    }else {
                        const months = weeks/4;
                    if(months < 12){
                        return Math.trunc(months) === 1?Math.trunc(months) + " month ago":Math.trunc(months) + " months ago";
                    }else {
                        const years = months/12;
                        return Math.trunc(years) === 1?Math.trunc(years) + " year ago":Math.trunc(years) + " years ago";
                    } }}}}};
if(typeof module != 'undefined') {
    module.exports = time_past_in_words
  }