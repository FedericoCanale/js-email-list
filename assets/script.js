/* To do list
 - Creare un array vuoto emails per salvare le email
 - Creare un ciclo for che si ripete 10 volte
 - Prendere le mail con axios
 - Aggiungere ogni email all'array con push
 - Controllare se l'array ha raggiunto 10 elementi 
 - Creare un elemento <ul> con document.createElement()
 - Usare forEach() per scorrere l'array delle email
 - Per ogni email, creare un elemento <li>
 - Inserire il testo dell'email dentro il <li>
 - Aggiungere ogni <li> all'<ul>
 - Aggiungere l'<ul> completo al body

 Tools
  - Axios
  - Boolean API
  - push 
  - forEach
  - document.createElement()
  - element.textContent
  - element.appendChild()
  - axios.get()
  - .then()
  - .catch()
  */

// Creo un array vuoto per salvare le email
const emails = [];
// Loop per generare 10 elementi
for (let i = 0; i < 10; i++) {
    axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then(response => {
            // Aggiungo l'email all'array
            emails.push(response.data.response);

            // Quando ho tutte le 10 email, le stampo
            if (emails.length === 10) {
                const ul = document.createElement('ul');
                // per ogni Email creo un li
                emails.forEach(email => {
                    const li = document.createElement('li');
                    li.textContent = email;
                    ul.appendChild(li);
                });
                document.body.appendChild(ul);
            }
        });
}