import * as React from 'react';

interface IDupable {
    dupa(): string;
}

class User implements IDupable {
    login: string;
    password: string;
    
    dupa() {
        return 'user dupa';
    }
}



for (let a: IDupable of []) {
    a.dupa();
}

class Note implements IDupable {
    created: Date;
    updated: Date;

    constructor() {
        const date = new Date(Date.now());
        this.created = date;
        this.updated = date;
    }

    print(): string {
        return `empty`;
    }

    dupa(): string {
        return 'dupa';
    }
}

class TextNote extends Note implements ITitledNote {
    title: string;
    text: string;

    constructor(title: string, text: string) {
        super();
        this.title = title;
        this.text = text;
    }

    print(): string {
        return `${this.title}: ${this.text}`;
    }
}

class ImageNote extends Note {
    url: string;

    constructor(title: string, url: string) {
        super(title);
        this.url = url;
    }

    print(): string {
        return `${this.title}: <img src="${this.url}" />`;
    }
}

export const App = () => {
    const [notes, setNotes]: [Note[], (notes: Note[]) => void] = React.useState([]);

    const addNote = (note: Note) => setNotes([...notes, note]);

    return <>
        <h1>NOTES</h1>
        <button onClick={() => addNote(new Note('note test'))}>Add note</button>
        <button onClick={() => addNote(new TextNote('text note test', 'dupa'))}>Add text note</button>
        <button onClick={() => addNote(new ImageNote('image note test', 'https://scontent-waw1-1.xx.fbcdn.net/v/t1.6435-1/180978949_314228950059549_1005358403722529104_n.jpg?stp=dst-jpg_s200x200&_nc_cat=105&ccb=1-7&_nc_sid=c7e18e&_nc_ohc=__qWaxv0QPMAX_G3-Sq&_nc_ht=scontent-waw1-1.xx&oh=00_AfCbozVwPXYZ-zLbvIeoLPCoBvK8yZYxzo4C2mtg1D9xlA&oe=65917708'))}>Add image note</button>
        <ul>{notes.map((note: Note, index: number) => <li>{index+1}: {note.print()}</li>)}</ul>
    </>;
};