module.exports = function getSeason(date) {
    if (arguments == undefined || date == null) return 'Unable to determine the time of year!';
        var currentYear = date.getFullYear();
        if (date < new Date(currentYear, 2, 1)) {
            return 'winter';
        }
        if (date < new Date(currentYear, 5, 1)) {
            return 'spring';
        }
        if (date < new Date(currentYear, 8, 1)) {
            return 'summer';
        }
        if (date < new Date(currentYear, 11, 1)) {
            return 'autumn';
        }
        return 'winter';
};
