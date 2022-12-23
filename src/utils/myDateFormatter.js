import moment from "moment";

function formatDate(date){
    let dd = `${date.getDate()}`.padStart(2,'0');
    let mm = `${date.getMonth() + 1}`.padStart(2,'0');
    let yyyy = `${date.getFullYear()}`.padStart(4,'0');
    return `${yyyy}-${mm}-${dd}`;
}

function concatDateAndTime(date, time){
    let formatedDate = fromDDMMYYYY(date);
    let stringDate = `${formatedDate}T${time}:00`
    return new Date(stringDate);
}

function fromDDMMYYYY(dateString){
    let dateSplit = dateString.split('/');
    let DD = dateSplit[0];
    let MM = dateSplit[1];
    let YYYY = dateSplit[2]
    return `${YYYY}-${MM}-${DD}`;
}

function formatTime(date){
    let momentDate = moment(date);
    return momentDate.local().format('HH:mm');
}

export {formatDate, formatTime, concatDateAndTime}