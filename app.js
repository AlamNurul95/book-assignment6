const searchBook = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    searchField.value = '';
    const url = `https://openlibrary.org/search.json?q=${searchText}`;

    fetch(url)
        .then(res => res.json())
        .then(data => displaySearchResult(data.docs))
}

const displaySearchResult = books => {
    const searchField = document.getElementById('search-result');
    searchField.textContent = '';
    if (books.length === 0) {
        const h2 = document.createElement('h2');
        h2.innerHTML = `<h2>Search Result Not Found</h2>`
        searchField.appendChild(h2);
    }
    else {
        books.forEach(book => {
            // console.log(book);
            const div = document.createElement('div');
            div.classList.add('col');
            div.innerHTML = ` <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${book.title}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${book.author_name}</h6>
                <p class="card-text">${book.first_publish_year}</p>
            </div>
        </div>`
            searchField.appendChild(div);
        })
    }
}
