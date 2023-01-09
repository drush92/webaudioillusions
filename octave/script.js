// declare the variables for left-panned sounds
let synth;                                                 
let sequence1;
let octaveMelody = ["400", "800", "400", "800"];            // 1 bar (low-high low-high sequence)
let panner;

// declare the variables for right-panned sounds
let synth2;                                                 
let sequence2;
let octaveMelody2 = ["800", "400", "800", "400"];           // 1 bar (high-low high-low sequence)
let panner2;

//synth, panner and sequence for left-panned sounds
synth = new Tone.Synth({
    oscillator: {
    type: "sine" // oscillator type
    },
    envelope: { 
    attack: 0,
    decay: 0.5,
    sustain: 1,
    release: 5
    }

});

panner = new Tone.Panner("1").toDestination(); // create the panner, panned hard left, connect to destination
synth.connect(panner); // connect synth to panner

sequence1 = new Tone.Sequence(function (time, note) {
    synth.triggerAttackRelease(note, 0.5);
    console.log(note);
}, octaveMelody, '4n');

//synth, panner and sequence for right-panned sounds
synth2 = new Tone.Synth({
    oscillator: {
        type: "sine" // oscillator type
    },
    envelope: {
        attack: 0,
        decay: 0.5,
        sustain: 1,
        release: 5
    }

});

panner2 = new Tone.Panner("-1").toDestination(); // create the 2nd panner, panned hard right, connect to destination
synth2.connect(panner2); // connect synth2 to panner 2

sequence2 = new Tone.Sequence(function (time, note) {
    synth2.triggerAttackRelease(note, 0.5);
    console.log(note);
}, octaveMelody2, '4n'); 


Tone.Transport.bpm.value = 240; // 240 bpm = 1 beat every 0.25 seconds
Tone.Transport.start();
Tone.Transport.loop = true;
Tone.Transport.loopStart = 0;
Tone.Transport.loopEnd = '1:0:0'; // loop ends after 1 bar


//starts the sequences for both sides
function octavePlay() {
    Tone.start();
   sequence1.start();
   sequence2.start();
}