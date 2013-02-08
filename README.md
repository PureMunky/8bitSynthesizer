8bitSynthesizer
===============

Javascript and Web Audio synthesizer to make 8bit music.

## Notes

Create Note objects with a frequency and duration.

Example:
  var note = Syn.note('A#', 'Quarter');
  var note = Syn.note('A', '100ms');
  var note = Syn.note('440Hz', 'Whole');

## Track

Create Track objects that contain Notes played at set intervals.

## Sheet

Create a Sheet object to put the tracks together.

## Interface

Sheet music inteface with clickable notes and bars.
