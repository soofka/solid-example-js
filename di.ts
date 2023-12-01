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

const app = (output: IOutput, text: string) => {
    output.display(text);
}

app(new ConsoleDisplay(), 'dupa 1');
app(new ConsoleDisplay(), 'dupa 2');
app(new ConsoleDisplay(), 'dupa 3');
try {
    app(new WebDisplay(), 'web dupa 1');
    app(new WebDisplay(), 'web dupa 2');
    app(new WebDisplay(), 'web dupa 3');
} catch(e) {}

const closureApp = (output: IOutput) => (text: string) => output.display(text);
const consoleClosureApp = closureApp(new ConsoleDisplay());
consoleClosureApp('closure dupa 1');
consoleClosureApp('closure dupa 2');
consoleClosureApp('closure dupa 3');
try {
    const webClosureApp = closureApp(new WebDisplay());
    webClosureApp('closure web dupa 1');
    webClosureApp('closure web dupa 2');
    webClosureApp('closure web dupa 3');
} catch(e) {}