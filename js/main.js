// WATS 3020 Mad Libs Assignment




let honorific = prompt('Please enter an title (e.g. Empress or Colonel).');

//A variable named "authorName" for authorial attribution.
let authorName = prompt('What is your name?');

// A variable named "adjective1" for a word used to describe something.
let adjective1 = prompt ('Give an adjective to describe something.');

// A variable named "vehicle" for a mode of transportation (e.g. plane, boat, etc.).
let vehicle = prompt('What is your preferred mode of transportation?');

// A variable named "vehiclePart" for a part of the vehicle you just named.
let vehiclePart = prompt('Name a part of the transportation you just named.');

// A variable named "parking" for a location where you park the vehicle you just named.
let parking = prompt('Name a location.');

// A variable named "precious" for a precious object.
let precious = prompt('What is your most prized possession?');

// A variable named "noiseMaker" for something that makes a sound.
let noiseMaker = prompt('Name something that makes a lot of noise.');

// A variable named "crowdBehavior" for something that people do together as a group.
let crowdBehavior = prompt('Name an activity you can do together with a group.');

// A variable named "adjective2" for a word used to describe something.
let adjective2 = prompt('Name a word to describe something.');

// A variable named "adjective3" for a word used to describe something.
let adjective3 = prompt('Name another word to describe something.');

// A variable named "color" for the name of a color.
let color = prompt('What is your least favorite color?');

// A variable named "familyMember" for the name of a family relationship (e.g. sister, father, etc.).
let familyMember = prompt('Name a family relationship (e.g. sister, father, etc.)');

// A variable named "organ" for the name of a body organ (e.g. heart, liver, spleen, etc.).
let organ = prompt('Name a body organ.');

// A variable named "bodyPart1" for the name of a body part.
let bodyPart1 = prompt('Name a body part.');

// A variable named "bodyPart2" for the name of a body part.
let bodyPart2 = prompt('Name another body part.');

// A variable named "bodyPart3" for the name of a body part.
let bodyPart3 = prompt('Name yet another body part.');

// A variable named "thing" for an object.
let thing = prompt('Name an object.');

// A variable named "thing2" for an object you might give somebody you love.
let thing2 = prompt('Name a gift you would give to someone you loved.');

// A variable named "thing3" for an object you might give somebody you like.
let thing3 = prompt('Name a gift you would give to a friend.');

// A variable named "adjective4" for a word used to describe the vehicle.
let adjective4 = prompt('Name a word to describe something.');

// A variable named "adjective5" for a word used to describe the vehicle.
let adjective5 = prompt('Name another word to describe something.');

////////////////////////////////////////////////////////////////////////
// Section Numbers

let userNumber = prompt('Pick a number between 1 and 100.');

let number2 = userNumber*2;

let number3 = userNumber + number2; 

// DO NOT EDIT BELOW THIS LINE /////////////////////////////////////////
//
// The code below this line handles variable replacement into the HTML file.
// Please do not edit this code unless you are attempting a stretch goal.

let titleText = `O ${honorific}! My ${honorific}! by <small>${authorName}</small>`;
let titleHeading = document.querySelector("#madlib-title");
titleHeading.innerHTML = titleText;

let storyText = `

    ${userNumber}
    O ${honorific}! my ${honorific}! our ${adjective1} trip is done;
    The ${vehicle} has weather'd every rack, the ${precious} we sought is won;
    The ${parking} is near, the ${noiseMaker} I hear, the people all ${crowdBehavior},
    While follow ${bodyPart1} the steady keel, the vessel ${adjective4} and ${adjective5}:
    But O ${organ}! ${organ}! ${organ}!
    O the bleeding drops of ${color},
    Where on the ${vehiclePart} my ${honorific} lies,
    Fallen ${adjective2} and ${adjective3}.

    ${number2}
    O ${honorific}! my ${honorific}! rise up and hear the ${noiseMaker};
    Rise up-for you the ${thing} is flung-for you the bugle trills;
    For you ${thing2} and ribbon'd ${thing3}-for you the shores a-crowding;
    For you they ${crowdBehavior}, the swaying mass, their eager faces turning;
    Here ${honorific}! dear ${familyMember}!
    This ${bodyPart2} beneath your ${bodyPart3};
    It is some dream that on the ${vehiclePart},
    You've fallen ${adjective2} and ${adjective3}.

    ${number3}
    My ${honorific} does not answer, his lips are pale and still;
    My ${familyMember} does not feel my arm, he has no pulse nor will;
    The ${vehicle} is anchor'd safe and sound, its voyage closed and done;
    From fearful trip, the victor ${vehicle}, comes in with ${precious} won;
    Exult, O shores, and ring, O ${noiseMaker}!
    But I, with mournful tread,
    Walk the ${vehiclePart} my ${honorific} lies,
    Fallen ${adjective2} and ${adjective3}.
`;
let storyParagraph = document.querySelector("#madlib-text");
storyParagraph.innerHTML = storyText;