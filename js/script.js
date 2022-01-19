
/*Descrizione:
1. Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
2. Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
3. Creare un array di oggetti di studenti (ossìa oggetti con le proprietà sopra descritte).
4. Ciclare su tutti gli studenti e stampare per ognuno di essi: nome e cognome.
5. Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere all’array creato in precedenza, un nuovo oggetto studente inserendo nell’ ordine: nome, cognome e età.
BONUS:
Usiamo il DOM per stampare e chiedere le informazioni all'utente!
*/

// creo oggetto con 3 proprietà

const studentNumber456 = {
    name: 'Pippo',
    surname: 'Baudo',
    age: 85,
};
const studentNumber457 = {
    name: 'Carlo',
    surname: 'Conti',
    age: 60,
};
const studentNumber458 = {
    name: 'Pino',
    surname: 'Insegno',
    age: 62,
};
const studentNumber459 = {
    name: 'Gerry',
    surname: 'Scotti',
    age: 65,
};
const studentNumber460 = {
    name: 'Toto',
    surname: 'Cutugno',
    age: 78,
};


let studentCell = document.getElementById('student-info');   

const studentList = [studentNumber456, studentNumber457, studentNumber458, studentNumber459, studentNumber460];

const newStudName = prompt('inserisci il nome dello studente da aggiungere');
const newStudSurname = prompt('inserisci il cognome dello studente da aggiungere');
const newStudAge = prompt("inserisci l'età dello studente da aggiungere");

const newStudent = {
        name: newStudName,
        surname: newStudSurname,
        age: newStudAge,
}

studentList.push(newStudent);
console.log(studentList);   

for (let i = 0; i < studentList.length; i++ ){
    console.log(studentList[i]);
    const students = studentList[i]
   
    let divElement = document.createElement("div");
    divElement.innerText = ` Nome: ${students.name}
    Cognome: ${students.surname}
    
    ` ;
    studentCell.appendChild(divElement);
    
   
    
}

