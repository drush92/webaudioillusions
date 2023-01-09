// declare the variables for the sequences, synth and the arrays that hold the notes for each sequence
let sequence1;
let sequence2;
let synth;
let ogMelody = ["G3", "A3", "B3", "G3", "G3", "A3", "B3", "G3",                                 // 1st bar
    "B3", "C4", "D4", null, "B3", "C4", "D4", null,                                 // 2nd bar
    ["D4", "E4"], ["D4", "C4"], "B3", "G3", ["D4", "E4"], ["D4", "C4"], "B3", "G3", // 3rd bar
    "G3", "D3", "G3", null, "G3", "D3", "G3", null];                                // 4th bar

let adaptedMelody = ["G5", "A2", "B4", "G1", "G5", "A2", "B4", "G1",                            // 1st bar
    "B5", "C3", "D1", null, "B5", "C3", "D1", null,                                 // 2nd bar
    ["D2", "E5"], ["D4", "C3"], "B5", "G3", ["D2", "E5"], ["D4", "C3"], "B5", "G3", // 3rd bar
    "G2", "D3", "G1", null, "G2", "D1", "G5", null];                                // 4th bar

//create the synth (mono synth - less abrasive sound)
synth = new Tone.MonoSynth({
    oscillator: {
        type: "sine"
    },
    envelope: {
        attack: 0.05,
        decay: 0.5,
        sustain: 1,
        release: 5
    }

}).toDestination(); // connnect to the destination

// create the sequences
sequence1 = new Tone.Sequence(function (time, note) {
    synth.triggerAttackRelease(note, 0.5);
    console.log(note);
}, ogMelody, '4n');

sequence2 = new Tone.Sequence(function (time, note) {
    synth.triggerAttackRelease(note, 0.5);
    console.log(note);
}, adaptedMelody, '4n');

//standard transport data
Tone.Transport.bpm.value = 120;
Tone.Transport.start();
Tone.Transport.loop = true; // loop added
Tone.Transport.loopStart = 0; // loop starts at 0
Tone.Transport.loopEnd = '8:0:0'; // loop ends after 8 bars


//starts the sequence
function ogMusic() {
    Tone.start();
    sequence1.start();
}

//starts the sequence
function adaptedMusic() {
    Tone.start();
    sequence2.start();
}