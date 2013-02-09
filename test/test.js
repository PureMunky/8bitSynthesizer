module('V 0.1.0');
test('Note Created', function () {
	var note = Syn.note({tone: 'A', duration: 'Quarter'});
	
	equal(note.tone, 'A', 'Tone Passed');
	equal(note.duration, 'Quarter', 'Duration Passed');
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

// V 0.0.2