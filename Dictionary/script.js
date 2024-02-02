function fetchSynonyms() {
    const wordInput = document.getElementById('wordInput');
    const synonymsList = document.getElementById('synonymsList');
    synonymsList.innerHTML = '';

    const word = wordInput.value.trim();

    if (word === '') {
        alert('Please enter a word');
        return;
    }

    const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const synonyms = data[0]?.meanings[0]?.definitions[0]?.synonyms;
            const part_of_speech = data[0]?.meanings[0]?.partOfSpeech;
            const synonyms1 = data[0]?.meanings[0]?.synonyms;

            if (synonyms && synonyms.length > 0) {
                synonyms.forEach(synonym => {
                    const li = document.createElement('li');
                    li.textContent = synonym;
                    synonymsList.appendChild(li);
                });
        
            
            }
            
          else if (synonyms1 && synonyms1.length > 0) {
                synonyms1.forEach(synonym1 => {
                    const li = document.createElement('li');
                    li.textContent = synonym1;
                    synonymsList.appendChild(li);
                });
        
            
            }
            else {
                const li = document.createElement('li');
                li.textContent = `No synonym found, part of speech : ${part_of_speech}`;
                synonymsList.appendChild(li);
            }
        })
        .catch(error => {
            console.error('Error fetching synonyms:', error);
            const li = document.createElement('li');
            li.textContent = 'Error fetching synonyms. Please try again.';
            synonymsList.appendChild(li);
        });
}
