type ValidStyleName = 'background-color' | 'border-color';

interface mutateConfig { elId: string, style: ValidStyleName, int?: number };

function generateColor(): string {
    return "#"+((1<<24)*Math.random()|0).toString(16);
}

function mutateElement(options: mutateConfig): void {
    var appComponent = document.getElementById(options.elId)
    setInterval(function() {
        var color: string = generateColor();
        if (appComponent) {
            appComponent.style[options.style] = color;
        }
    }, options.int);
}

function main() {
    mutateElement({elId: 'rainbow', style: 'border-color', int: 500})
}