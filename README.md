♫ 8bitSynthesizer ♫
===================

Javascript and Web Audio synthesizer to make 8bit music.

## ♫ Notes

Create Note objects with a frequency and duration.

Examples:

    var note = Syn.note({tone: 'A#', duration: 'Quarter'});
    
    var note_param = {
        tone: 'A#',
        duration: 'Quarter'
    };
    
    note.play();                // Play a created note.
    note.play({tone: 'Ab'});    // Override any built in value temporarily.

## ♫ Track

Create Track objects that contain Notes played at set intervals.

Examples:

    var track = Syn.track({name: 'Melody'});
    
    var track_param = {
        name: 'Melody',         // name for reference
        key: 'C',               // track key
        notes: [],              // Array containing note objects
        tempo: 80               // BPM (overridden by sheet tempo)
    };
    
    track.play();               // Play track
    track.play(2);              // Tempo Change
    track.play('A');            // Key Change

## ♫ Sheet

Create a Sheet object to put the tracks together.

Examples:

    var sheet = Syn.sheet({name: 'Super Guy'});
    
    var sheet_param = {
        name: 'Super Guy',      // name for reference
        key: 'A',               // sheet key
        tempo: 80,              // BPM
        tracks: []              // track array in order of priority
    };

    sheet.play();               //Play Sheet

## ♫ Interface

Sheet music inteface with clickable notes and bars.
