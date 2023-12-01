// interface INote {
//     title: string;
//     created: Date;
//     updated: Date;
//     update(): void;
//     print(): void;
// }

// interface ITextNote extends INote {
//     text: string;
//     edit(title: string, text: string): void;
// }

// interface IListNote extends INote {
//     items: string[];
//     edit(title: string, items: string[]): void;
// }

// class Note implements INote {

//     title: string;
//     created: Date;
//     updated: Date;

//     constructor(title: string) {
//         this.title = title;

//         const date = new Date(Date.now());
//         this.created = date;
//         this.updated = date;
//     }
    
//     update() {
//         this.updated = new Date(Date.now());
//     }

//     print() {
//         console.log(`Title: ${this.title}`);
//     }
    
// }

// class TextNote extends Note implements ITextNote {

//     text: string;

//     constructor(title: string, text: string) {
//         super(title);
//         this.text = text;
//     }

//     edit(title: string, text: string) {
//         super.update();
//         this.title = title;
//         this.text = text;
//     }

//     print() {
//         console.log(`Title: ${this.title}, text: ${this.text}`);
//     }

// }

// class ListNote extends Note implements IListNote {

//     items: string[];

//     constructor(title: string, items: string[]) {
//         super(title);
//         this.items = items;
//     }

//     edit(title: string, items: string[]) {
//         super.update();
//         this.title = title;
//         this.items = items;
//     }

//     print() {
//         console.log(`Title: ${this.title}, items: ${this.items.join(', ')}`);
//     }

// }

// const notes: INote[] = [
//     new Note('test 1'),
//     new TextNote('test 2', 'dupa'),
//     new ListNote('test 3', ['raz', 'dwa', 'trzy']),
// ];

// for (let note of notes) {
//     note.print();
// }

interface Printer {
    print(text: string): void
}

class NormalConsolePrinter implements Printer {
    print(text: string) {
        console.log(text);
    }
}

class PanicConsolePrinter implements Printer {
    print(text: string) {
        console.warn(text);
    }
}

const myPrint = (printer: Printer) => printer.print('Hello world');
myPrint(new PanicConsolePrinter());