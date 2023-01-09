let sequence, synth; 
let melody = ["C3", ["E3", "G3", "D3", "C3"], "A3", "B2", "C2", "E3",
    ["A2", "G2"], "C4"];


function setup() {

    sequence = new Tone.Sequence(function (time, note) {
        synth.triggerAttackRelease('note', '8n');
        console.log(note);
    }, melody, '4n');
    
    synth = new Tone.Synth(); 
    synth.toDestination();
    
    Tone.Transport.bpm.value = 90;
    Tone.Transport.loop = true;
    Tone.Transport.loopStart = 0;
    Tone.Transport.loopEnd = '2:0:0';
    Tone.Transport.start();

    playSynth();

}


function playSynth() {
    sequence.start();
    Tone.start();
}
