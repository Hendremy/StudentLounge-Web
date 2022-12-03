export default function formatDate(date){
    let dd = `${date.getDate()}`.padStart(2,'0');
    let mm = `${date.getMonth() + 1}`.padStart(2,'0');
    let yyyy = `${date.getFullYear()}`.padStart(4,'0');
    return `${yyyy}-${mm}-${dd}`;
}
