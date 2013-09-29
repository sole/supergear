var ADSR = require('./ADSR'),
	ArithmeticMixer = require('./ArithmeticMixer'),
	Bajotron = require('./Bajotron'),
	BufferLoader = require('./BufferLoader'),
	Colchonator = require('./Colchonator'),
	Mixer = require('./Mixer'),
	NoiseGenerator = require('./NoiseGenerator'),
	OscillatorVoice = require('./OscillatorVoice'),
	Oscilloscope = require('./Oscilloscope'),
	Porrompom = require('./Porrompom'),
	Reverbetron = require('./Reverbetron'),
	SampleVoice = require('./SampleVoice'),
	gui = require('./gui/GUI');

module.exports = {
	ADSR: ADSR,
	ArithmeticMixer: ArithmeticMixer,
	Bajotron: Bajotron,
	BufferLoader: BufferLoader,
	Colchonator: Colchonator,
	Mixer: Mixer,
	NoiseGenerator: NoiseGenerator,
	OscillatorVoice: OscillatorVoice,
	Oscilloscope: Oscilloscope,
	Porrompom: Porrompom,
	Reverbetron: Reverbetron,
	SampleVoice: SampleVoice,
	GUI: gui
};
