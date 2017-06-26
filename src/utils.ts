export type ValidStyleName = 'border-color' | 'background-color';
export interface IMutateElement {
    elId: string,
    style: ValidStyleName,
    int: number
}

export function generateColor(): string {
    return "#"+((1<<24)*Math.random()|0).toString(16);
}

export function mutateElement(elId: string, style: ValidStyleName, int: number): void
export function mutateElement(option: IMutateElement): void
export function mutateElement(optionsOrId, style?, int?): void {
    if (typeof optionsOrId == 'string') {
        var appComponent = document.getElementById(optionsOrId);
        setInterval(function() {
            if (appComponent) {
                appComponent.style[style] = generateColor();
            }
        }, int);
    } else {
        var appComponent = document.getElementById(optionsOrId.elId);
        setInterval(function() {
            if (appComponent) {
                appComponent.style[optionsOrId.style] = generateColor();
            }
        }, optionsOrId.int);
    }
    
}