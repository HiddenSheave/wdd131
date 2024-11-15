const currentYear = new Date().getFullYear();
document.getElementById('currentyear').textContent = currentYear;

let lastModified = document.lastModified;
document.getElementById('lastModified').textContent = `Last Modification: ${lastModified}`;

const hamButton = document.querySelector("#menu");
const navigation = document.querySelector("nav")

hamButton.addEventListener('click', function() {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});

const navLinks = document.querySelectorAll('.navigation a');
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        navLinks.forEach(link =>
    link.classList.remove('active'));
            link.classList.add('active');
    });
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
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x250/payson-utah-temple-exterior-1416671-wallpaper.jpg"
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
    templeName: "Hamilton, New Zealand Temple",
      location: "Hamilton, New Zealand Temple",
      dedicated: "1958, April, 20",
      area: 45251,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/hamilton-new-zealand/400x250/hamilton_new_zealand_temple_exterior.png"
    },
    {
      templeName: "Dallas, Texas Temple",
      location: "Dallas, Texas Temple",
      dedicated: "1984, October, 19",
      area: 44207,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/dallas-texas/2018/400x250/Dallas-Texas-Temple12.jpg"
    },
    {
        templeName: "Bentonville, Arkansas Temple",
        location: "Bentonville, Arkansas Temple",
        dedicated: "2023, September, 17",
        area: 28472,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/bentonville-arkansas/400x250/Bentonville-Temple-Exterior-13.jpg"
      }
  ];
  function createTempleCard(filteredTemples) {
    const templateElement = document.querySelector(".template");
    templateElement.innerHTML = '';

    filteredTemples.forEach((temple) => {
        let figureExample = document.createElement("figure");

        figureExample.style.width = "400px";
        figureExample.style.height = "355px";
        figureExample.style.backgroundColor = "gainsboro";
        figureExample.style.padding = "2rem";
        figureExample.style.boxSizing = "border-box";
        figureExample.style.border = "1px solid gray";
        figureExample.style.flexDirection = "column";
        
        let templeName = document.createElement("figcaption");
        templeName.textContent = temple.templeName;
        templeName.style.textAlign = "center";
        templeName.style.fontWeight = "bold";
        templeName.style.fontSize = "18px";
        templeName.style.margin = "18px";
        templeName.style.marginTop = "-10px";
        figureExample.appendChild(templeName);

        let location = document.createElement("figcaption");
        location.textContent = `Location: ${temple.location}`;
        location.innerHTML = `<figcaption style="text-align: center;"> <span style="color: blue;">Location:</span> ${temple.location}</figcaption>`;
        figureExample.appendChild(location);

        let dedication = document.createElement("figcaption");
        dedication.textContent = `Dedicated: ${temple.dedicated}`;
        dedication.innerHTML = `<figcaption style="text-align: center;"> <span style="color: blue;">Dedicated:</span> ${temple.dedicated}</figcaption>`;
        figureExample.appendChild(dedication);

        let area = document.createElement("figcaption");
        area.textContent = `Area: ${temple.area} sq ft`;
        area.innerHTML = `<figcaption style="text-align: center;"> <span style="color: blue;">Area:</span> ${temple.area}</figcaption>`;
        figureExample.appendChild(area);

        let imageExample = document.createElement("img");
        imageExample.src = temple.imageUrl;
        imageExample.alt = temple.templeName;
        imageExample.style.background = "350px";
        imageExample.style.backgroundcolor = "350px";
        imageExample.style.maxWidth = "300px";
        imageExample.style.border = "1px solid #333";
        imageExample.style.boxShadow = "0px 0px 10px black ";
        imageExample.style.display = "block";
        imageExample.style.margin = "0 auto";
        imageExample.style.marginTop = "1rem";


        figureExample.appendChild(imageExample);

        templateElement.appendChild(figureExample);


    });
}
createTempleCard(temples);

  document.querySelector("#oldLink").addEventListener("click", () => {
    createTempleCard(temples.filter(temple => parseInt(temple.dedicated.split(",")[0]) > 1900));
  })

  document.querySelector("#newLink").addEventListener("click", () => {
    createTempleCard(temples.filter(temple => parseInt(temple.dedicated.split(",")[0]) < 2000));
  })

  document.querySelector("#largeLink").addEventListener("click", () => {
    createTempleCard(temples.filter(temple => temple.area > 90000));
  })

  document.querySelector("#smallLink").addEventListener("click", () => {
    createTempleCard(temples.filter(temple => temple.area < 10000));
  })

  document.querySelector("#homeLink").addEventListener("click", () => {
    createTempleCard(temples.filter(temple => temple.area > 1000));
  })


