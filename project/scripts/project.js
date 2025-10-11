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
        imageUrl: "https://d3dqioy2sca31t.cloudfront.net/Projects/cms/production/000/037/138/large/b49afd389a3bbedfa9ff41b5f43f2e5e/article-czech-republic-prague-castle.jpg"
    },
    {
        pictureName: "Charles Bridge",
        location: "Prague, Czech Republic",
        foundation: "1357",
        imageUrl: "https://discoveringprague.com/wp-content/uploads/2023/10/Charles-Bridge.jpg.webp"
    },
    {
        pictureName: "Český Krumlov Castle",
        location: "Český Krumlov, Czech Republic",
        foundation: "13th Century",
        imageUrl: "https://dynamic-media.tacdn.com/media/photo-o/2e/db/22/a3/caption.jpg?w=1100&h=800&s=1"
    },
    {
        pictureName: "Karlštejn Castle",
        location: "Central Bohemia, Czech Republic",
        foundation: "1348",
        imageUrl: "https://images.squarespace-cdn.com/content/v1/5a18683b64b05f9f4adeb4c7/fc551213-4cb4-4cae-991f-1a5fff863dd7/karlstejn+castle.jpeg?format=2500w"
    },
    {
        pictureName: "Bohemian Switzerland",
        location: "Northern Bohemia, Czech Republic",
        foundation: "Natural Formation",
        imageUrl: "https://dynamic-media.tacdn.com/media/photo-o/2e/db/35/5e/caption.jpg?w=1100&h=800&s=1"
    },
    {
        pictureName: "Telč Historic Centre",
        location: "Telč, Czech Republic",
        foundation: "14th Century",
        imageUrl: "https://whc.unesco.org/uploads/thumbs/site_0621_0013-594-0-20140623151316.jpg"
    },
    {
        pictureName: "Karlovy Vary Colonnades",
        location: "Karlovy Vary, Czech Republic",
        foundation: "14th Century",
        imageUrl: "https://sustaineurope.com/images/mlynska-kolonada_mill-colonnade-(6).jpg?crc=70404377"
    },
    {
        pictureName: "Lednice-Valtice Cultural Landscape",
        location: "South Moravia, Czech Republic",
        foundation: "17th Century",
        imageUrl: "https://www.amazingczechia.com/wp-content/uploads/2018/04/lednice-valtice-02xm.jpg.webp"
    },
    {
        pictureName: "Adršpach Rocks",
        location: "Eastern Bohemia, Czech Republic",
        foundation: "Natural Formation",
        imageUrl: "https://3seaseurope.com/wp-content/uploads/2023/02/rock-2.webp"
    },
    {
        pictureName: "Kutná Hora Historical Centre",
        location: "Kutná Hora, Czech Republic",
        foundation: "13th Century",
        imageUrl: "https://www.amazingczechia.com/wp-content/uploads/2018/07/kutna-hora-02.jpg"
    },
    {
        pictureName: "Moravian Karst",
        location: "South Moravia, Czech Republic",
        foundation: "Natural Formation",
        imageUrl: "https://www.zamek-lysice.cz/pamatky/lysice/fotogalerie/tipy_na_vylet/image-thumb__35937__HeaderImage/moravsky_kras_w14.webp"
    },
    {
        pictureName: "Český ráj (Bohemian Paradise)",
        location: "Northern Bohemia, Czech Republic",
        foundation: "Natural Formation",
        imageUrl: "https://img.atlasobscura.com/nVTj9pBLNFzNjiFvDYUmY_bK--erJgJKjYHuFHftZG0/rt:fit/w:1200/q:80/sm:1/scp:1/ar:1/aHR0cHM6Ly9hdGxh/cy1kZXYuczMuYW1h/em9uYXdzLmNvbS91/cGxvYWRzL3BsYWNl/X2ltYWdlcy9lMWM0/NzMyYy1hZjMxLTQ0/MDgtOTlhZC04MmY0/MTU0NjEwZWY4ZTBj/M2VhY2E5NTgzOTMx/NzlfQ8yMZXNrecyB/IHJhzIFqIDYuanBn.webp"
    }
];

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
        image.src = picture.imageUrl;
        image.alt = picture.pictureName;
        image.loading = "lazy";
        card.appendChild(image);

        pictureContainer.appendChild(card);
    });
};

displayPictures(pictures);