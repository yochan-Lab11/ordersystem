function onSubmit() {
    var name = document.getElementById('answer1').value;
    var count = document.getElementById('answer2').value;
    var bento = document.getElementById('answer3').value;
    const msg = "【送信内容】\n" + text1;
    console.log(msg);
    sendText(msg);
    return false;
}
