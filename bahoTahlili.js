function notesS(notes) {
    let sum = 0;
    let max = notes[0];
    let min = notes[0];

    let A = 0, B = 0, C = 0, D = 0, F = 0;

    for (let i = 0; i < notes.length; i++) {
        let baho = notes[i];
        sum += baho;

        if (baho > max) max = baho;
        if (baho < min) min = baho;

        switch (true) {
            case (baho >= 90 && baho <= 100): A++; break;
            case (baho >= 80 && baho <= 89): B++; break;
            case (baho >= 70 && baho <= 79): C++; break;
            case (baho >= 60 && baho <= 69): D++; break;
            default: F++;
        }
    }

    let average = sum / notes.length;

    console.log("Medium notes:", average.toFixed(2));
    console.log("Max notes:", max);
    console.log("Min notes", min);
    console.log("A:", A);
    console.log("B:", B);
    console.log("C:", C);
    console.log("D:", D);
    console.log("F:", F);
}

notesS([85, 92, 78, 65, 88, 72, 90, 60, 96, 55, 78, 82]);
