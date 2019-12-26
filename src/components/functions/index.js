import crypto from 'crypto';
import arraySort from 'array-sort';

let key = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ123456',
    iv = '1234567890Abcdef';
key = crypto.createHash('md5').update(key).digest("hex");

export const createSlug = (title) => {
    let slug = title.replace(/[^a-zA-Z ]/g, "");
    slug = slug.replace(/\s+/g, "-").toLowerCase();
    return slug;
};

export const getParams = function (url) {
    let params = {};
    let parser = document.createElement('a');
    parser.href = url;
    let query = parser.search.substring(1);
    let vars = query.split('&');
    if (vars[0] !== "") {
        for (let i = 0; i < vars.length; i++) {
            let pair = vars[i].split('=');
            params[pair[0]] = decodeURIComponent(pair[1]);
        }
    }
    else {
        return null;
    }
    return params;
};


export const standardDate = (dat) => {
    const date = new Date(dat).toLocaleString("en-US", {timeZone: "America/New_York"});
    const newDate = new Date(date);
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let time = formatAMPM(newDate);
    let hours12 = newDate.toLocaleString('en-US', {hour: 'numeric', hour12: true});
    let hours = newDate.getHours();
    let minutes = newDate.getMinutes();
    let seconds = newDate.getSeconds();
    let dayName = days[newDate.getDay()];
    let dateNumber = ("0" + newDate.getDate()).slice(-2);
    let monthName = months[newDate.getMonth()];
    let monthNumber = ("0" + (newDate.getMonth() + 1)).slice(-2);
    let fullYear = newDate.getFullYear();
    let standardDate = monthNumber + "-" + dateNumber + "-" + fullYear;
    return {
        standardDate: standardDate,
        time: time,
        hours: hours,
        minutes: minutes,
        seconds: seconds,
        hours12: hours12,
        dayName: dayName,
        dateNumber: dateNumber,
        monthName: monthName,
        monthNumber: monthNumber,
        fullYear: fullYear
    };
};

function formatAMPM(date) {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    let beautifiedTime = hours + ':' + minutes + ' ' + ampm;
    return beautifiedTime;
}

export const RestructorData = (data, len) => {
    let i = 0, size = 0;
    let newData = [];
    let main = [];
    while (i <= data.length) {
        if (size < len) {
            if (data[i] !== undefined)
                main.push(data[i]);
            size++;
            i++;
        }
        else {
            size = 0;
            newData.push(main);
            main = [];
        }
    }
    if (main.length !== 0) {
        newData.push(main);
    }
    return newData;
};

export const getTagsIds = (tags) => {
    return tags.map(a => a.id);
};


export const decrypt = (_string) => {
    let decipher = crypto.createDecipheriv('aes-256-cbc', key, iv),
        buffer = Buffer.concat([
            decipher.update(Buffer.from(_string, 'base64')),
            decipher.final()
        ]);
    return buffer.toString();
};

export const decryptObj = (obj) => {
    for (let key in obj) {
        obj[key] = decrypt(obj[key]);
    }
    return obj;
};

export const sortTypeSwitch = (data, type, alreadyType) => {
    switch (type) {
        case "title":
            if (alreadyType && alreadyType === 'titleInverse') {
                return {data: arraySort(data, 'title'), type: "title"};
            }
            else {
                return {data: arraySort(data, 'title', {reverse: true}), type: "titleInverse"};
            }
        case "titleInverse":
            return {data: arraySort(data, 'title', {reverse: true}), type: "titleInverse"};
        case "created_at":
            if (alreadyType && alreadyType === "created_atInverse") {
                return {data: arraySort(data, 'created_at'), type: "created_at"};
            }
            else {
                return {data: arraySort(data, 'created_at', {reverse: true}), type: "created_atInverse"};
            }
        case "created_atInverse":
            return {data: arraySort(data, 'created_at', {reverse: true}), type: "created_atInverse"};
        case "updated_at":
            if (alreadyType && alreadyType === "updated_atInverse") {
                return {data: arraySort(data, 'updated_at'), type: "updated_at"};
            }
            else {
                return {data: arraySort(data, 'updated_at', {reverse: true}), type: "updated_atInverse"};
            }
        case "updated_atInverse":
            return {data: arraySort(data, 'updated_at', {reverse: true}), type: "updated_atInverse"};
        case "status":
            if (alreadyType && alreadyType === "statusInverse") {
                return {data: arraySort(data, 'status'), type: "status"};
            }
            else {
                return {data: arraySort(data, 'status', {reverse: true}), type: "statusInverse"};
            }
        case "statusInverse":
            return {data: arraySort(data, 'status', {reverse: true}), type: "statusInverse"};

            case "code":
            if (alreadyType && alreadyType === "codeInverse") {
                return {data: arraySort(data, 'code'), type: "code"};
            }
            else {
                return {data: arraySort(data, 'code', {reverse: true}), type: "codeInverse"};
            }
        case "codeInverse":
            return {data: arraySort(data, 'code', {reverse: true}), type: "codeInverse"};
        case "name":
            if (alreadyType && alreadyType === "nameInverse") {
                return {data: arraySort(data, 'name'), type: "name"};
            }
            else {
                return {data: arraySort(data, 'name', {reverse: true}), type: "nameInverse"};
            }
        case "nameInverse":
            return {data: arraySort(data, 'name', {reverse: true}), type: "nameInverse"};
        case "role":
            if (alreadyType && alreadyType === "roleInverse") {
                return {data: arraySort(data, 'role.name'), type: "role"};
            }
            else {
                return {data: arraySort(data, 'role.name', {reverse: true}), type: "roleInverse"};
            }
        case "roleInverse":
            return {data: arraySort(data, 'role.name', {reverse: true}), type: "roleInverse"};
        default:
            return {data: data, type: type};
    }
};