let counter = 0;

function check() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', '/img');
    xhr.onload = () => {
        if (xhr.status === 200) {
            const data = JSON.parse(xhr.responseText);
            const container = document.getElementById('container');
            if (data.img !== '') {
                container.innerHTML += "<img class='bubble run' src='" + data.img + "' id='sticker" + counter + "'>";
                remove(counter)
                counter++;
            }
        }
    };
    xhr.send();
}

function remove(id) {
    setTimeout(function(){
        const element = document.getElementById('sticker' + id);
        element.parentNode.removeChild(element);
    }, 3000);
}

check();
setInterval(check, 3100);