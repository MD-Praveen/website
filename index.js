const arr = [
    {
        img : 'url(loscabos.jpg)', h1: 'Soak up Los Cabos',h2: 'Mexico’s luxury resort area offers miles of pristine coastline and vast desert scenery. Experience buzzing nightlife, Michelin-star dining, and personalized yacht trips.'
    },
    {
        img: 'url(aspen.jpg)',h1: 'Access alpine adventures',h2: 'Experience the best of this iconic mountain town: gondola rides up breathtaking mountains, custom cowboy hats, and world-class cuisine.'
    },{
        img: 'url(Sun_Valley.jpg)', h1: 'Hit the slopes in Sun Valley',h2 : 'Escape to this vibrant yet laid-back ski town, with plenty of dining options, unique cultural events, and locally-owned shops'
    },{
        img: 'url(Los_Angeles.jpg)', h1: 'Live it up in Los Angeles',h2 : 'Beaches, palm trees, and perfect weather are all part of the city’s magic. Explore diverse neighborhoods, hike legendary trails, and stay at storied hotels.'
    }
];

const image_box = document.getElementById('imageContent');
const boxH1 = document.getElementById('box-h1');
const boxH2 = document.getElementById('box-h2');

boxH1.innerText = arr[0].h1;
boxH2.innerText = arr[0].h2;
image_box.style.backgroundImage = arr[0].img; 
btn1.style.borderBottom = '1px solid orange'

document.getElementById('btn1').querySelector('.btn-1st').classList.add('active-btn');


function changeContent(content, btnId) {
    // Reset all buttons to default color
    document.querySelectorAll('.buttons button').forEach(btn => {
        btn.querySelector('.btn-1st').classList.remove('active-btn');
        btn.style.borderBottom = '1px solid rgba(216, 216, 216, 0.0)'; // Reset border color
    });


    var btn = document.getElementById(btnId);

    // Update the content
    boxH1.innerText = content.h1;
    boxH2.innerText = content.h2;
    image_box.style.backgroundImage = content.img; 
    console.log(btnId)

    // Change the color of the clicked button
    btn.querySelector('.btn-1st').classList.add('active-btn');
    btn.style.borderBottom = '1px solid orange';
}





