interface IOutput {
    display: (text: string) => void;
}

class ConsoleDisplay implements IOutput {
    display(text: string) {
        console.log(text);
    }
}

class WebDisplay implements IOutput {
    body: Element;

    constructor() {
        this.body = document.querySelector('body');
    }

    display(text: string) {
        this.body.textContent = text;
    }
}

const app = (output: IOutput) => {
    output.display('dupa');
}

app(new ConsoleDisplay());
try { app(new WebDisplay()); } catch(e) {}