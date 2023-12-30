"use strict"

function fetchData() {
    fetch("https://jsonplaceholder.typicode.com/posts").then((res) => { if (!res.ok) throw new Error("Failed to fetch"); return res.json() }).then((data) => { console.log(data); renderData(data); }).catch((err) => { console.log(err.message); renderError(err.message); });
}

function renderData(posts) {
    posts.forEach((post) => {
        const template = `<div><h1>${post.id} --- ${post.title}</h1></div>`;
        document.body.insertAdjacentHTML("beforeend", template)
    })
}

function renderError(msg) {
    const template = `<p>${msg}</p>`;
    document.body.insertAdjacentHTML("beforeend", template)
}
fetchData();
