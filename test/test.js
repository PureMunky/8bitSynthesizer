module('V 0.1.0');

test('Note Created', function () {
	var note = Syn.note({tone: 'A', duration: 'Quarter', octive: 4});
	
	equal(note.tone, 'A', 'Tone Passed');
	equal(note.duration, 'Quarter', 'Duration Passed');
	equal(note.octive, 4, 'Octive Passed');
});

test('Track Created', function () {
	var track = Syn.track({
		name: 'Melody', 
		key: 'A',
		notes: [],
		tempo: 80
	});
	
	equal(track.name, 'Melody', 'Name Passed');
	equal(track.key, 'A', 'Key Passed');
	equal(track.tempo, 80, 'Tempo Passed');
	equal(track.notes.length, 0, 'Notes Passed');
});

test('Sheet Create', function() {
	var sheet = Syn.sheet({
		name: 'Super Guy',
		key: 'A',
		tempo: 80,
		tracks: []
	});
	
	equal(sheet.name, 'Super Guy', 'Name Passed');
	equal(sheet.key, 'A', 'Key Passed');
	equal(sheet.tempo, 80, 'Tempo Passed');
	equal(sheet.tracks.length, 0, 'Notes Passed');
});

module('V 0.2.0');

test('Note tone normalization', function () {	
	equal(Syn.note({tone: 'A', octive: 3}).hz.toFixed(2), 220.00, 'A Tone Translated');
	equal(Syn.note({tone: 'A#', octive: 3}).hz.toFixed(2), 233.08, 'A# Tone Translated');
	equal(Syn.note({tone: 'B', octive: 3}).hz.toFixed(2), 246.94, 'B Tone Translated');
	equal(Syn.note({tone: 'C'}).hz.toFixed(2), 261.63, 'C Tone Translated');
	equal(Syn.note({tone: 'C#'}).hz.toFixed(2), 277.18, 'C# Tone Translated');
	equal(Syn.note({tone: 'D'}).hz.toFixed(2), 293.66, 'D Tone Translated');
	equal(Syn.note({tone: 'D#'}).hz.toFixed(2), 311.13, 'D# Tone Translated');
	equal(Syn.note({tone: 'E'}).hz.toFixed(2), 329.63, 'E Tone Translated');
	equal(Syn.note({tone: 'F'}).hz.toFixed(2), 349.23, 'F Tone Translated');
	equal(Syn.note({tone: 'F#'}).hz.toFixed(2), 369.99, 'F# Tone Translated');
	equal(Syn.note({tone: 'G'}).hz.toFixed(2), 392.00, 'G Tone Translated');
	equal(Syn.note({tone: 'G#'}).hz.toFixed(2), 415.30, 'G# Tone Translated');
	equal(Syn.note({tone: 'A'}).hz.toFixed(2), 440.00, 'A Tone Translated');
	equal(Syn.note({tone: 'A#'}).hz.toFixed(2), 466.16, 'A# Tone Translated');
	equal(Syn.note({tone: 'B'}).hz.toFixed(2), 493.88, 'B Tone Translated');
	equal(Syn.note({tone: 'C', octive: 5}).hz.toFixed(2), 523.25, 'C Tone Translated');
});

test('Note duration normalization', function () {
	equal(Syn.note({duration: 'Sixteenth'}).ms, 187.5, 'Duration ms');
	equal(Syn.note({duration: 'Eighth'}).ms, 375, 'Duration ms');
	equal(Syn.note({duration: 'Quarter'}).ms, 750, 'Duration ms');
	equal(Syn.note({duration: 'Half'}).ms, 1500, 'Duration ms');
	equal(Syn.note({duration: 'Whole'}).ms, 3000, 'Duration ms');
});

module('V 0.3.0');

test('Note play', function () {
	var note = Syn.note({tone: 'A'});
	stop(note.ms);
	note.play();
	setTimeout(function () {
			ok(true);
			start();
	}, note.ms)
		
});
