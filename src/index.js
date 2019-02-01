const colorButtonsNode = document.getElementById('color-buttons');
const canvasNode = document.getElementById('canvas');
const transformNode = document.getElementById('transform-buttons');

const colors = [
    'red',
    'orange',
    'yellow',
    'blue',
];

const imgSrc = [
    '../assets/redfish.png',
    '../assets/pizza.png',
    '../assets/cheese.png',
    '../assets/bluefish.png',
];

for(let index = 0; index < colors.length; index++) {
    let color = colors[index]; //the color array index = color
    const colorButtonNode = document.createElement('button'); //colorButtonNode is a new variable and we created a button element that it corresponds to
    const imgNode = document.createElement('img'); //creating the images in html and assigning them the imgNode variable
    imgNode.src = imgSrc[index];
    colorButtonNode.value = color; //the color buttons will have a value of each color
    colorButtonNode.classList.add(color, 'color-button'); //adding the 'color-button' and color class to the colorButtonNodes

    colorButtonNode.addEventListener('click', function() {
        const segmentCount = document.querySelectorAll('.body-segment').length;
        if(segmentCount < 5) {
            paint(color);
        }
    }); 
    
    colorButtonsNode.appendChild(colorButtonNode);
    colorButtonNode.appendChild(imgNode);
    console.log(paint);
}

function paint(color) {
    const bodySegment = document.createElement('span');
    bodySegment.classList.add('body-segment', color);
    canvasNode.appendChild(bodySegment);
}

for(let index = 0; index < colors.length; index++) {
    let color = colors[index]; //the color array index = color
    const transformButtonNode = document.createElement('button'); //transormNode is a new variable and we created a button element that it corresponds to
    transformButtonNode.textContent = color; //need to change this to image
    transformButtonNode.value = color; //the color buttons will have a value of each color
    transformButtonNode.classList.add('transform-button', color); //adding the 'color-button' and color class to the colorButtonNodes
                    
    transformButtonNode.addEventListener('click', function() {
        dance(color);
    });                   
    transformNode.appendChild(transformButtonNode);
}

function dance(color) {
    const selector = '.body-segment.' + color; //selecting by body segment and color
    const bodySegments = document.querySelectorAll(selector);//setting bodySegments as a variable and equating it to the selector I just created
    const allBodySegments = document.querySelectorAll('.body-segment'); //setting allBodySegments as a selector and equating it to the body-segment class (not just color - this will move all of them down when transform buttons are pressed)

    for(let index = 0; index < allBodySegments.length; index++) {
        allBodySegments[index].classList.remove('dance-segment');
    }
    for(let index = 0; index < bodySegments.length; index++) {
        bodySegments[index].classList.add('dance-segment');
    }

    
}

