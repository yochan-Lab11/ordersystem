function onSubmit() {
    const name = document.getElementById('answer1').value;
    //var count = document.getElementById('answer2').value;
    //var bento = document.getElementById('answer3').value;
    const msg = "【送信内容】\n" + name;
    console.log(msg);
    sendText(msg);
    return false;
}
