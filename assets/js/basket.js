const myDiv = document.getElementById('myDiv')



fetch('https://655e356a9f1e1093c59ab81c.mockapi.io/Api3/Api4')
.then(res => res.json())
.then(data => {
    data.forEach(item => {
        const card = document.createElement('div')
        card.className = "cardBox";
        card.innerHTML = `
        <div class="myDivz">
            <img src="${item.image}" alt="">
                <h2>${item.title}</h2>
                <p>${item.description}</p>
                <p>${item.price} $</p>
                <button class="btn" onclick="onbir()">Add to card</button>
                </div>`;
                myDiv.appendChild(card)
    })

})


