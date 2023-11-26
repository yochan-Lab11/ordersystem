function onSubmit(){
    const text1 = document.getElementById('answer1').value;
    const text2 = document.getElementById('answer2').value;
    const text3 = document.getElementById('answer3').value;
    
    const msg = "【送信内容】\n" + text1 "\n" +  text2 "\n" + text3 "\n" ;
    console.log(msg);
    sendText(msg);
    return false;
}
