const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },

    {
        templeName: "Abidjan Ivory Coast",
        location: "Abidjan, Ivory Coast",
        dedicated: "2025, May, 25",
        area: 17362,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/abidjan-ivory-coast-temple/abidjan-ivory-coast-temple-58324.jpg"
    },

    {
        templeName: "Freiberg Germany",
        location: "Freiberg, Germany",
        dedicated: "1985, June, 29-30",
        area: 21500,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/freiberg-germany-temple/freiberg-germany-temple-12311.jpg"
    },

    {
        templeName: "Bangkok Thailand",
        location: "Bangkok, Thailand",
        dedicated: "2023, October, 22",
        area: 48525,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/bangkok-thailand-temple/bangkok-thailand-temple-40037.jpg"
    },

    {
        templeName: "Kyiv Ukraine",
        location: "Kyiv, Ukraine",
        dedicated: "2010, August, 29",
        area: 22184,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/kyiv-ukraine-temple/kyiv-ukraine-temple-28530.jpg"
    },

    {
        templeName: "São Paulo Brazil",
        location: "São Paulo, Brazil",
        dedicated: "19778, October-November, 30-2",
        area: 59246,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/sao-paulo-brazil-temple/sao-paulo-brazil-temple-46816.jpg"
    },

];

const templeContainer = document.getElementById("templeContainer");

const displayTemples = (templesArray) => {
    templeContainer.innerHTML = "";

    templesArray.forEach((temple) => {
        const card = document.createElement("div");
        card.className = "temple-card";

        const name = document.createElement("h1");
        name.textContent = temple.templeName;
        card.appendChild(name);

        const location = document.createElement("p");
        location.textContent = `Location: ${temple.location}`;
        card.appendChild(location);

        const dedicated = document.createElement("p");
        dedicated.textContent = `Dedicated: ${temple.dedicated}`;
        card.appendChild(dedicated);

        const area = document.createElement("p");
        area.textContent = `Total Area: ${temple.area} sq ft`;
        card.appendChild(area);

        const image = document.createElement("img");
        image.src = temple.imageUrl;
        image.alt = temple.templeName;
        image.loading = "lazy";
        card.appendChild(image);

        templeContainer.appendChild(card);
    });
};

const filterByOldTemples = () => {
    const filteredTemples = temples.filter(
        (temple) => new Date(temple.dedicated).getFullYear() < 1900
    );
    displayTemples(filteredTemples);
};

const filterByNewTemples = () => {
    const filteredTemples = temples.filter(
        (temple) => new Date(temple.dedicated).getFullYear() > 2000
    );
    displayTemples(filteredTemples);
};

const filterByLargeTemples = () => {
    const filteredTemples = temples.filter((temple) => temple.area > 90000);
    displayTemples(filteredTemples);
};

const filterBySmallTemples = () => {
    const filteredTemples = temples.filter((temple) => temple.area < 10000);
    displayTemples(filteredTemples);
};

document.querySelector("nav").addEventListener("click", (event) => {
    event.preventDefault();

    const filter = event.target.textContent.toLowerCase().trim();

    switch (filter) {
        case "old":
            filterByOldTemples();
            break;
        case "new":
            filterByNewTemples();
            break;
        case "large":
            filterByLargeTemples();
            break;
        case "small":
            filterBySmallTemples();
            break;
        case "home":
            displayTemples(temples);
            break;
        default:
            break;
    }
});
displayTemples(temples);