/*function onSubmit() {
    const name = document.getElementById('answer').value;
    const msg = `${name}`;
    console.log(msg);
    sendText(msg);
    return false;
}*/

$(function () {
            $('form').submit(function () {
                const name    = $('input[name="name"]').val();
                const bangou = $('input[name="bangou"]').val();
                const shushoujou  = $('input[name="shushoujou"]').val();
                const keika  = $('input[name="keika"]').val();
                const hatunetu = $('input[name="hatunetu"]').val();
                const msg = `${name}\n${bangou}\n${shushoujou}\n${keika}\n${hatunetu}`;
                sendText(msg);
                return false;
            });
        });
