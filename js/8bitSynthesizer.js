var Syn = (function () {
	var that = this,
		_A4 = {
			tone: 'A',
			hz: 440.0,
			octive: 4,
			duration: 'Quarter',
			ms: 333
		},
		_note = {
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
		};
	
	function _CalcHz(note) {
		return Math.pow(2, (_CalcHalfSteps(_A4, note) / 12.0)) * _A4.hz;
	}
	
	function _CalcHalfSteps(n1, n2) {
		return (_note[n2.tone] + (n2.octive * 12)) - (_note[n1.tone] + (n1.octive * 12));
	}
	
	that.note = function (o) {
		o.octive = o.octive || 4;
		o.hz = _CalcHz(o);
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
