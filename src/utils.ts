export type ValidStyleName = 'border-color' | 'background-color';

export class App {
    private static readonly elId: string = 'rainbow';
    private int: number;
    private style: ValidStyleName;

    constructor() {
        this.style = 'border-color';
        this.int = 1500;
    }

    public startOnInit(): void {
        var appComponent = document.getElementById(App.elId);
        setInterval(() => {
            if (appComponent) {
                appComponent.style[this.style] = generateColor();
            }
        }, this.int);
    }
}

export function generateColor(): string {
    return "#"+((1<<24)*Math.random()|0).toString(16);
}