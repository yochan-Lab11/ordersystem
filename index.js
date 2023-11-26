/*function onSubmit() {
    const name = document.getElementById('answer').value;
    const msg = `${name}`;
    console.log(msg);
    sendText(msg);
    return false;
}*/
const params = (new URL(document.location)).searchParams;
const key = params.get('key');

$(function () {
            $('form').submit(function () {
                const name    = $('input[name="name"]').val();
                const bangou = $('input[name="count"]').val();
                const shushoujou  = $('input[name="menu"]').val();
                const msg = `${name}\n${count}\n${menu}\n`;
                sendText(msg);
                return false;
            });
        });
