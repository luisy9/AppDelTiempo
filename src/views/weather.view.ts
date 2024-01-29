import '../styles.css'

export class WeatherView {
    public root!: HTMLElement;
    public weatherDiv!: HTMLElement;
    public appBox!: HTMLElement;
    public boxWeather!: HTMLElement;
    public appTitle!: HTMLElement;
    public inputSearchWeather!: HTMLInputElement;
    public divSearchAndTitle!: HTMLElement;
    public divSearchFlex!: HTMLElement;
    public divBoxFlex!: HTMLElement;
    public buttonSubmitWeather!: HTMLElement;
    public divInputAndButton!: HTMLElement;

    constructor() {
        this.inicialiceEvents();
    }

    get _resetInput(): string {
       return this.inputSearchWeather.value = '';
    }

    inicialiceEvents(): void {
        this.createSkeletonApp();
        this.mountSkeleton();
    }

    createElementDOM(element: string, className?: string): HTMLElement {
        const elementDOM = document.createElement(element);
        if (elementDOM.tagName.toLowerCase() === 'input' && className) {
            elementDOM.id = className;
        }
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
        this.inputSearchWeather = this.createElementDOM('input', 'inputSearchWeather') as HTMLInputElement;
        this.buttonSubmitWeather = this.createElementDOM('button', 'buttonSubmitWeather');
        this.buttonSubmitWeather.textContent = 'Search';
        this.divInputAndButton = this.createElementDOM('div', 'divInputButton');
        this.divBoxFlex = this.createElementDOM('div', 'divBoxFlex');
    }

    mountSkeleton(): void {
        this.divInputAndButton.append(this.inputSearchWeather, this.buttonSubmitWeather);
        this.divSearchAndTitle.append(this.appTitle, this.divInputAndButton);
        this.divSearchFlex.append(this.divSearchAndTitle);
        this.divBoxFlex.append(this.boxWeather);
        this.appBox.append(this.divSearchFlex, this.divBoxFlex);
        this.weatherDiv.append(this.appBox);
        this.root.append(this.weatherDiv);
    }


    bindSearchWeatherInput(handler: Function) {
        this.inputSearchWeather.addEventListener('focusout', (inputEvent) => {
            this.buttonSubmitWeather.addEventListener('click', event => {
                const nameCity = (inputEvent.target as any).value as string;
                if (nameCity.length > 0) {
                    handler(nameCity);
                }
                this.inputSearchWeather.value = nameCity;
                this._resetInput;
            });
        });
    }

    //Mostrar el resultado en el div
    showSearchWeather() {

    }
} 