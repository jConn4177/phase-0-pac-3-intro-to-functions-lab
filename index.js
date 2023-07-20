const shout = (string) => {
    return string.toUpperCase();
}

const whisper = (string) => {
    return string.toLowerCase();
}

const logShout = (string) => {
    console.log(string.toUpperCase());
}

const logWhisper = (string) => {
    console.log(string.toLowerCase());
}

function sayHiToHeadphonedRoommate(string) {
    if (string === whisper(string)) {
        return 'I can\'t hear you!';
    } else if (string === shout(string)) {
        return 'YES INDEED!';
    } else if (string === 'Let\'s have dinner together!') {
        return 'I would love to!';
    }
}