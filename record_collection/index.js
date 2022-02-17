const recordCollection = {
    2548: {
        albumTitle: 'Slippery When Wet',
        artist: 'Bon Jovi',
        tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
        albumTitle: '1999',
        artist: 'Prince',
        tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
        artist: 'Robert Palmer',
        tracks: []
    },
    5439: {
        albumTitle: 'ABBA Gold'
    }
};

function updateRecords(records, id, prop, value) {
    if (value) {
        switch (prop) {
            case "tracks":
                if (!records[id].hasOwnProperty("tracks")) {
                    var tracks = [];
                    tracks.push(value);
                    records[id]["tracks"] = tracks;
                }
                if (value) {
                    records[id]["tracks"].push(value);
                }
                break;

            default:
                records[id][prop] = value;
        }
    } else {
        delete records[id][prop];
    }
    return records;
}

updateRecords(recordCollection, 5439, "artist", "ABBA");
console.log(recordCollection);
updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me");
console.log(recordCollection);
updateRecords(recordCollection, 2548, "artist", "");
console.log(recordCollection);
updateRecords(recordCollection, 1245, "tracks", "Addicted to Love");
console.log(recordCollection);
updateRecords(recordCollection, 2468, "tracks", "Free");
console.log(recordCollection);
updateRecords(recordCollection, 2548, "tracks", "");
console.log(recordCollection);
updateRecords(recordCollection, 1245, "albumTitle", "Riptide");
console.log(recordCollection);
