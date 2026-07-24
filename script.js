const message = `Happy Meowday, Tutu!

Today, the Royal Court celebrates one of its most treasured companions.

As your friend,
I shall always stand by your side.

And should anyone dare hiss at us...

their name shall forever be recorded within...

THE BLACK PAPER.`;

const typing = document.getElementById("typing");
const openBook = document.getElementById("openBook");
const book = document.getElementById("book");
const enemyName = document.getElementById("enemyName");
const record = document.getElementById("record");
const result = document.getElementById("result");

let i = 0;

function typeLetter() {

    if (i < message.length) {

        typing.innerHTML += message.charAt(i);

        i++;

        setTimeout(typeLetter, 40);

    }

}

typeLetter();

openBook.addEventListener("click", () => {

    book.classList.remove("hidden");

    book.scrollIntoView({

        behavior: "smooth"

    });

});

record.addEventListener("click", () => {

    const name = enemyName.value.trim();

    if (name === "") {

        result.innerHTML = "⚠️ A name must be written.";

        return;

    }

    result.innerHTML = `
    <br>
    📜 <b>${name}</b> has been officially recorded.
    <br><br>
    🐈‍⬛ Justice shall remember.
    <br>
    👑 By order of the Royal Court.
    `;

});
