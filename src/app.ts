type ValidStyleName = 'background-color' | 'border-color';

function generateColor(): string {
    return "#"+((1<<24)*Math.random()|0).toString(16);
}

function mutateElement(elId: string, style: ValidStyleName, int: number): void {
    var appComponent = document.getElementById(elId)
    setInterval(function() {
        var color: string = generateColor();
        appComponent.style[style] = color;
    }, int)
}

function main() {
    mutateElement('rainbow', 'border-color', 500)
}