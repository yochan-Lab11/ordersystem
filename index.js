function onSubmit() {
    var text1 = document.getElementById('answer1').value;
    var text2 = document.getElementById('answer2').value;
    var text3 = document.getElementById('answer3').value;
    
    const msg = "【送信内容】\n" + text1;
    console.log(msg);
    sendText(msg);
    return false;
}
