
function generateColor() {
    return "#"+((1<<24)*Math.random()|0).toString(16);
}

function main() {
    var appComponent = document.getElementById('rainbow')
    setInterval(function() {
        appComponent.style['background-color'] = generateColor();
    }, 1500)
}