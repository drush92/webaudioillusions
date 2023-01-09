// declare the variables for left-panned sounds
let synth;                                                 
let sequence1;
let octaveMelody = ["D5", "A4", "A5", "G4", "F#5", "F#4" ];            // 1 bar, 2 beats 
let panner;

// declare the variables for right-panned sounds
let synth2;                                                 
let sequence2;
let octaveMelody2 = ["G4", "F#5", "F#4", "G5", "A4", "A5" ];           // 1 bar, 2 beats
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

panner = new Tone.Panner("-1").toDestination(); // create the panner, panned hard left, connect to destination
synth.connect(panner); // connect synth to panner

sequence1 = new Tone.Sequence(function (time, note) {
    synth.triggerAttackRelease(note, 0.5);
    console.log(note);
}, octaveMelody, '8n');

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

panner2 = new Tone.Panner("1").toDestination(); // create the 2nd panner, panned hard right, connect to destination
synth2.connect(panner2); // connect synth2 to panner 2

sequence2 = new Tone.Sequence(function (time, note) {
    synth2.triggerAttackRelease(note, 0.5);
    console.log(note);
}, octaveMelody2, '8n'); 


Tone.Transport.bpm.value = 250; // 250 bpm = 1 beat every 0.24 seconds
Tone.Transport.start();
Tone.Transport.loop = true;
Tone.Transport.loopStart = 0;
Tone.Transport.loopEnd = '1:2:0'; // loop ends after 1 bar


//starts the sequences for both sides
function cambiataPlay() {
    Tone.start();
   sequence1.start();
   sequence2.start();
}