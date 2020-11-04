
let cachedBoxes = sessionStorage.getItem('boxes');
boxes = cachedBoxes ? JSON.parse(cachedBoxes) : [{ colour: '#6F98A8', index: 1 }, { colour: '#72C3DC', index: 2 }, { colour: '#2F454E', index: 3 },
{ colour: '#72C3DC', index: 4 }, { colour: '#2F454E', index: 5 }, { colour: '#BFBFBF', index: 6 },
{ colour: '#BFBFBF', index: 7 }, { colour: '#6F98A8', index: 8 }, { colour: '#2F454E', index: 9 }];



let shuffle = function () {
    let shuffledboxes = [];
    var randomSequence = '';
    var characters = '123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < charactersLength; i++) {
        let char;
        while (true) {
            char = characters.charAt(Math.floor(Math.random() * charactersLength));
            if (randomSequence.indexOf(char) < 0 || randomSequence == "") {
                randomSequence += char;
                break;
            }

        }
    }

    let sequenceArray = String(randomSequence).split('');

    for (let i = 0; i < sequenceArray.length; i++) {
        shuffledboxes[i] = boxes[Number(sequenceArray[i]) - 1];
    }
    boxes = shuffledboxes;
    sessionStorage.setItem("boxes", JSON.stringify(shuffledboxes));
    location.reload();

}

let sortBoxes = function () {
    boxes = boxes.sort((a, b) => {
        return a["index"] - b["index"];
    });
    sessionStorage.setItem("boxes", JSON.stringify(boxes));
    location.reload();
}


window.addEventListener('load', function () {
    let p = this;


    let innerPanel = document.getElementsByName('panelInner')[0];

    for (let i = 0; i < boxes.length; i++) {
        let box = document.createElement("div");
        box.style.backgroundColor = boxes[i]["colour"];
        box.style.height = '200px';
        box.style.width = '390px';
        box.style.textAlign = 'center';

        let boxPara = document.createElement("p");
        boxPara.innerHTML =boxes[i]["index"];
        boxPara.style.color = '#FFFFFF';
        box.appendChild(boxPara);

        innerPanel.appendChild(box);
    }

    let shuffleBtn = document.getElementsByName("shufflebtn")[0];
    shuffleBtn.addEventListener('click', shuffle);
    let sortBtn = document.getElementsByName("sortbtn")[0];
    sortBtn.addEventListener('click', sortBoxes);


});

let randomNumber = function (min, max) {
    return Math.random() * (max - min) + min;
}
