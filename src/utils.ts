import { random } from 'lodash';
export type ValidStyleName = 'border-color' | 'background-color';

function Component(options: { id: string}) {
    return (target) => {
        target.elId = options.id;
    }
}

function param(x, name, index) {
    console.log(x, name, index);
}

@Component({
    id: 'rainbow'
})
export class App {
    static elId: string;
    private int: number;
    private style: ValidStyleName;

    constructor() {
        this.style = 'border-color';
        this.int = random(500, 2000);
    }

    public startOnInit(@param version: string): void {
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