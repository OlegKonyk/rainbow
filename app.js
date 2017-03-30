function generateColor() {
    return "#"+((1<<24)*Math.random()|0).toString(16);
}

function main() {
    var appComponent = document.getElementById('rainbow')
    setInterval(function() {
        appComponent.style['border-color'] = generateColor();
    }, 500)
}