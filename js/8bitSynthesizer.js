var Syn = (function () {
	var that = this,
		_A4 = {
			tone: 'A',
			hz: 440.0,
			octive: 4,
			duration: 'Quarter',
			ms: 333,
			bpm: 80
		},
		_tone = {
			'A': 10,
			'A#': 11,
			'B': 12,
			'C': 1,
			'C#': 2,
			'D': 3,
			'D#': 4,
			'E': 5,
			'F': 6,
			'F#': 7,
			'G': 8,
			'G#': 9
		},
		_duration = {
			'Sixteenth': .25,
			'Eighth': .5,
			'Quarter': 1,
			'Half': 2,
			'Whole': 4
		};
	
	function _CalcHz(note) {
		return Math.pow(2, (_CalcHalfSteps(_A4, note) / 12.0)) * _A4.hz;
	}
	
	function _CalcHalfSteps(n1, n2) {
		return (_tone[n2.tone] + (n2.octive * 12)) - (_tone[n1.tone] + (n1.octive * 12));
	}
	
	function _CalcMs(note) {
		return (1 / (_A4.bpm / 60)) * 1000 * _duration[note.duration];
	}
	
	that.note = function (o) {
		o.octive = o.octive || 4;
		o.hz = o.hz || _CalcHz(o);
		o.ms = o.ms || _CalcMs(o);
		return o;
	};
	
	that.track = function (o) {
		return o;
	};
	
	that.sheet = function (o) {
		return o;
	};
	
	return that;
})();
