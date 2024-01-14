export class WeatherView {
    public root: HTMLElement;
    public weatherDiv: HTMLElement;
    constructor() {
        this.inicialiceEvents();
    }

    inicialiceEvents() {
        this.createSkeletonApp();
    }

    createElementDOM(element: string, className?: string) {
        const elementDOM = document.createElement(element);
        if (className) elementDOM.classList.add(className);
        return elementDOM;
    }

    createSkeletonApp() {
        this.root = document.getElementById('root')!;
        this.weatherDiv = this.createElementDOM('div', 'weatherDiv');
        this.root.append(this.weatherDiv);
    }
}