8bitSynthesizer
===============

Javascript and Web Audio synthesizer to make 8bit music.

## Notes

Create Note objects with a frequency and duration.

Examples:

    var note = Syn.note('A#', 'Quarter');
    var note = Syn.note('A', '100ms');
    var note = Syn.note('440Hz', 'Whole');
    
    var note_param = {
        tone: 'A#',
        duration: 'Quarter'
    };
    
    note.play();
    note.play('Ab');
    note.play('440Hz', '200ms');

## Track

Create Track objects that contain Notes played at set intervals.

Examples:

    var track = Syn.track({name: 'Melody'});
    
    var track_param = {
        name: 'Melody',     // name for reference
        key: 'C',           // track key
        notes: [],          // Array containing note objects
        tempo: 80,          // BPM (overridden by sheet tempo)
    };
    
    track.play();       // Play track
    track.play(2);      // Tempo Change
    track.play('A');    // Key Change

## Sheet

Create a Sheet object to put the tracks together.

## Interface

Sheet music inteface with clickable notes and bars.
