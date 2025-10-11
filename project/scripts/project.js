//Date//
const date = new Date();
const year = date.getFullYear();
document.getElementById("year").innerHTML = year;
const oLastModified = new Date(document.lastModified);
const formattedLastModified = oLastModified.toLocaleString();
document.getElementById("last-modified").innerHTML = formattedLastModified;

//Hamburger Button//
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});

//Fun Fact//
const funFact = [
    'The word "robot" is Czech: It was coined by Czech writer Karel Čapek, derived from the Slavic word "robota", meaning labor.',
    'A land of castles: With over 2,000 castles and chateaux, the Czech Republic has one of the highest densities of castles in the world.',
    'The worlds oldest astronomical clock: Prague of Old Town is home to the oldest working astronomical clock, the Orloj, dating back to 1410.',
    'Inventors of soft contact lenses: The Czech Republic is the birthplace of several important inventions, including the soft contact lens.',
    'The average Czech drinks over 150 liters of beer per year. In many Czech pubs and restaurants, tap beer is actually cheaper than bottled water.',
    'The peaceful "Velvet Divorce": The separation of Czechoslovakia into the Czech Republic and Slovakia in 1993 was a rare and remarkably peaceful event, known as the "Velvet Divorce".'
];

function showData(button) {
    const container = button.closest('.bubble-container');
    const content = container.querySelector('.bubble-content');
    const estaVisible = content.classList.contains('show');
    if (estaVisible) {
        content.classList.remove('show');
    } else {
        const randomIndex = Math.floor(Math.random() * funFact.length);
        content.textContent = funFact[randomIndex];
        content.classList.add('show');
    }
}

//Album Page//

const pictures = [
    {
        pictureName: "Prague Castle",
        location: "Prague, Czech Republic",
        foundation: "9th Century",
        img: "./images/castle-1.webp"
    },
    {
        pictureName: "Charles Bridge",
        location: "Prague, Czech Republic",
        foundation: "1357",
        img: "./images/bridge-2.jpg.webp"
    },
    {
        pictureName: "Český Krumlov Castle",
        location: "Český Krumlov, Czech Republic",
        foundation: "13th Century",
        img: "./images/krum-castle.webp"
    },
    {
        pictureName: "Karlštejn Castle",
        location: "Central Bohemia, Czech Republic",
        foundation: "1348",
        img: "./images/karlstejn-castle.webp"
    },
    {
        pictureName: "Bohemian Switzerland",
        location: "Northern Bohemia, Czech Republic",
        foundation: "Natural Formation",
        img: "./images/bohemian.webp"
    },
    {
        pictureName: "Telč Historic Centre",
        location: "Telč, Czech Republic",
        foundation: "14th Century",
        img: "./images/telč.webp"
    },
    {
        pictureName: "Karlovy Vary Colonnades",
        location: "Karlovy Vary, Czech Republic",
        foundation: "14th Century",
        img: "./images/colonnades.webp"
    },
    {
        pictureName: "Lednice-Valtice Cultural Landscape",
        location: "South Moravia, Czech Republic",
        foundation: "17th Century",
        img: "./images/lednice.webp"
    },
    {
        pictureName: "Adršpach Rocks",
        location: "Eastern Bohemia, Czech Republic",
        foundation: "Natural Formation",
        img: "./images/adršpach.webp"
    },
    {
        pictureName: "Kutná Hora Historical Centre",
        location: "Kutná Hora, Czech Republic",
        foundation: "13th Century",
        img: "./images/kutna-2.webp"
    },
    {
        pictureName: "Moravian Karst",
        location: "South Moravia, Czech Republic",
        foundation: "Natural Formation",
        img: "./images/moravian.webp"
    },
    {
        pictureName: "Český ráj (Bohemian Paradise)",
        location: "Northern Bohemia, Czech Republic",
        foundation: "Natural Formation",
        img: "./images/paradise.webp"
    }
];

document.addEventListener("DOMContentLoaded", () => {
    const pictureContainer = document.getElementById("pictureContainer");

    const displayPictures = (picturesArray) => {
        pictureContainer.innerHTML = "";

        picturesArray.forEach((picture) => {
            const card = document.createElement("div");
            card.className = "picture-card";

            const name = document.createElement("h1");
            name.textContent = picture.pictureName;
            card.appendChild(name);

            const location = document.createElement("p");
            location.textContent = `Location: ${picture.location}`;
            card.appendChild(location);

            const foundation = document.createElement("p");
            foundation.textContent = `Founded: ${picture.foundation}`;
            card.appendChild(foundation);

            const image = document.createElement("img");
            image.src = picture.img;
            image.alt = picture.pictureName;
            image.loading = "lazy";
            card.appendChild(image);

            pictureContainer.appendChild(card);
        });
    };

    displayPictures(pictures);
});

//visit message//
document.addEventListener("DOMContentLoaded", function () {
    const lastVisit = localStorage.getItem("lastVisit");
    const now = new Date().getTime();
    let message = "Welcome! Let us know if you have any questions.";

    if (lastVisit) {
        const timeDiff = now - lastVisit;
        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        if (days < 1) {
            message = "Welcome back! You last visited today.";
        } else if (days < 7) {
            message = `Welcome back! You last visited ${days} days ago.`;
        } else {
            message = "It's been a while! Check out what's new.";
        }
    }

    document.getElementById("visit-message").textContent = message;
    localStorage.setItem("lastVisit", now);

    const lazyImages = document.querySelectorAll(".lazy-load");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.getAttribute("data-src");
                img.removeAttribute("data-src");
                observer.unobserve(img);
            }
        });
    }, { rootMargin: "50px" });

    lazyImages.forEach(img => observer.observe(img));
});