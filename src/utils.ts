export type ValidStyleName = 'border-color' | 'background-color';

export interface IApp {
    style: ValidStyleName,
    int: number
}

export class App implements IApp {
    static elId: string = 'rainbow';
    int: number;
    style: ValidStyleName;
    constructor() {
        this.style = 'border-color';
        this.int = 1500;
    }

    startOnInit(): void {
        var element = document.getElementById(App.elId);
        setInterval(() => {
            if (element) {
                element.style[this.style] = generateColor();
            }
        }, this.int);    
    }
}


export function generateColor(): string {
    return "#"+((1<<24)*Math.random()|0).toString(16);
}