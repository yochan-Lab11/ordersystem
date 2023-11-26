function onSubmit() {
    const name = document.getElementById('answer').value;
    const msg = `${name}`;
    console.log(msg);
    sendText(msg);
    return false;
}
