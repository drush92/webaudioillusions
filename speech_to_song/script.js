function playSpeechSong() {
    var u = new SpeechSynthesisUtterance();
    u.text = 'The sounds as they appear to you, are not only different from those that are really present. But they sometimes behave so strangely, as to seem quite impossible. sometimes behave so strangely, sometimes behave so strangely, sometimes behave so strangely, sometimes behave so strangely, sometimes behave so strangely ';
    u.lang = 'en-UK';
    u.rate = 1.1;
    u.pitch = 3.5;
    u.onend = function (event) { alert('Finished in ' + event.elapsedTime + ' seconds.'); }
    speechSynthesis.speak(u);
}