import '../styles.css'

export class WeatherView {
    public root!: HTMLElement;
    public weatherDiv!: HTMLElement;
    public appBox!: HTMLElement;
    public boxWeather!: HTMLElement;
    public appTitle!: HTMLElement;
    public inputSearchWeather!: HTMLElement;
    public divSearchAndTitle!: HTMLElement;
    public divSearchFlex!: HTMLElement;
    public divBoxFlex!: HTMLElement;

    constructor() {
        this.inicialiceEvents();
    }

    inicialiceEvents(): void {
        this.createSkeletonApp();
        this.mountSkeleton();
    }

    createElementDOM(element: string, className?: string): HTMLElement {
        const elementDOM = document.createElement(element);
        if (className) elementDOM.classList.add(className);
        return elementDOM;
    }

    createSkeletonApp(): void {
        this.root = document.getElementById('root')!;
        this.weatherDiv = this.createElementDOM('div', 'weatherDiv');
        this.appBox = this.createElementDOM('div', 'appBox');
        this.boxWeather = this.createElementDOM('div', 'boxWeather');
        this.divSearchFlex = this.createElementDOM('div', 'divSearchFlex');
        this.divSearchAndTitle = this.createElementDOM('div', 'divSearchAndTitle');
        this.appTitle = this.createElementDOM('h1', 'appTitle');
        this.appTitle.textContent = 'Weather App';
        this.inputSearchWeather = this.createElementDOM('input', 'inputSearchWeather');
        this.divBoxFlex = this.createElementDOM('div', 'divBoxFlex');
    }

    mountSkeleton(): void {
        this.divSearchAndTitle.append(this.appTitle, this.inputSearchWeather);
        this.divSearchFlex.append(this.divSearchAndTitle);
        this.divBoxFlex.append(this.boxWeather);
        this.appBox.append(this.divSearchFlex, this.divBoxFlex);
        this.weatherDiv.append(this.appBox);
        this.root.append(this.weatherDiv);
    }
} 