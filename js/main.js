/*
Octava 4:
C: 261.626
C#: 277.183
D: 293.665
D#: 311.127
E: 329.628
F: 349.228
F#: 369.994
G: 391.995
G#: 415.305
A: 440.000
A#: 466.164
B: 493.883
*/
const notesArr = document.querySelectorAll('.note');

const playPiano = (freQ) => {   
    userStartAudio();//audi context
    monoSynth.play(freQ,0,0,2/4);
};
//p5 Sound
let monoSynth; 
function setup() {
    monoSynth = new p5.PolySynth();
    notesArr.forEach( n => { n.addEventListener('mousedown', note => {
            //console.log(note.target.dataset.freq);
            playPiano(note.target.dataset.freq);
        },false);
    });
};
