function formatar(form) {
    document.execCommand(form, false, null);
}

function color() {
    let cor = document.getElementById("cor").value;
    document.execCommand("foreColor", false, cor);
}

function fontT() {
    let tamanho = document.getElementById("fT").value;
    document.execCommand("fontSize", false, '7');
    let tx = document.querySelectorAll("font[size='7']");
    tx.forEach(tx => 
        {tx.removeAttribute('size')}
    );
    tx.forEach(tx => {tx.style.fontSize = tamanho});
}

function fST() {
    let fontS = document.getElementById("fS").value;
    document.execCommand('fontName', false, 'Arial');
    let txF = document.querySelectorAll("font[face='Arial'");
    txF.forEach(txF => {
        txF.removeAttribute('face');
    });
    txF.forEach(txF => {
        txF.style.fontFamily = fontS;
    })
}