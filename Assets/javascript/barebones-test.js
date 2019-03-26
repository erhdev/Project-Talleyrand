var emotionArray = ["happy" , "angry", "bored"];
var decisionImminent = false;

var charArray = [
    veteran = {
        name:"The Veteran",
        emotionalState: emotionArray[Math.floor(Math.random() * emotionArray.length)],
        playerResistance: 50,
        arguerType: "realpolitik",
        attitudeTowardVeteran: 100,
        attitudeTowardRevolutionary: 50,
        insulted: false,
        favorsOwed: 0,
        wantsNoodles: false,
        wantsSteak: false,
        wantsDrink: false,
        // can objects in an array reference other arrays?
        // probably
    },
    revolutionary = {
        name: "The Revolutionary",
        emotionalState: emotionArray[Math.floor(Math.random() * emotionArray.length)],
        playerResistance: 50,
        arguerType: "ideological",
        attitudeTowardVeteran: 50,
        attitudeTowardRevolutionary: 100,
        insulted: false,
        favorsOwed: 1,
        wantsNoodles: false,
        wantsSteak: false,
        wantsDrink: false,
    }
];



var cardArray = [$('#veteran'), $('#revolutionary')];

function infoUpdate() {
    for (i = 0; i < cardArray.length; i++) {
        cardArray[i].find('.name')
        .text(charArray[i].name);
        cardArray[i].find('.emotionalState')
        .text("Emotional State: " + charArray[i].emotionalState);
        cardArray[i].find('.playerResistance')
        .text("Resistance toward Player: " + charArray[i].playerResistance);
        cardArray[i].find('.arguerType')
        .text("Arguer Type: " + charArray[i].arguerType);
        cardArray[i].find('.attitudeTowardVeteran')
        .text("Attitude Toward Veteran:" + charArray[i].attitudeTowardVeteran);
        cardArray[i].find('.attitudeTowardRevolutionary')
        .text("Attitude Toward Revolutionary:" + charArray[i].attitudeTowardRevolutionary);
        cardArray[i].find('.insulted')
        .text("Insulted:" + charArray[i].insulted);
    }   
}
var update = setInterval(infoUpdate(), 100);
$(document).ready(function () {
    infoUpdate(); 
    theQuestion();              
});

var tdis = $('#text-display');
function theQuestion() {
    if (veteran.emotionalState === "happy") {
        tdis.append("<b>" + veteran.name +": </b>" + "<p> It's good that the Prince was able to see reason so readily. Say, where should we get dinner after today's talks? I hear there's a lovely steakhouse around the corner.</>");        
        veteran.wantsSteak = true;
        theResponse();
    }
    if (veteran.emotionalState === "angry") {
        tdis.append("<b>" + veteran.name +": </b>" + "<p> I can't believe the Prince wants Hiltenland as his part of the deal. What a greedy brat he is. I need a drink.</p>");
        veteran.wantsDrink = true;
        theResponse();
    }
    if (veteran.emotionalState === "bored") {
        tdis.append("<b>" + veteran.name +": </b>" + "<p> Well, today's session was a wash. If I have to hear the Prince prattle on any longer I think my brains will come pouring out my ears. Shall we see about that noodle shop around that corner for dinner?</p>");
        veteran.wantsNoodles = true;
        theResponse();
    }
}
function theResponse() {
    switch (revolutionary.emotionalState) {
        case "happy" :
        if ((revolutionary.emotionalState === "happy") && (veteran.emotionalState === "happy")) {
            tdis.append("<b>" + revolutionary.name +": </b>" + "<p>Well, we could also go to a noodle shop I've heard of. It's supposed to have great daily specials.</p>"); 
            revolutionary.wantsNoodles = true;
        }
        if ((revolutionary.emotionalState === "happy") && (veteran.emotionalState === "angry")) {
            tdis.append("<b>" + revolutionary.name +": </b>" + "<p>Look, there's no need to get bothered over it. We can just keep the pressure on tomorrow; he has to crack sometime. Anyway, let's get some food. Noodles sound good?</p>");
            revolutionary.wantsNoodles = true;
        }
        if ((revolutionary.emotionalState === "happy") && (veteran.emotionalState === "bored")) {
            tdis.append("<b>" + revolutionary.name +": </b>" + "<p>Oh, it didn't go so badly. He did make that concession about the Seine. Let's celebrate with steak. </p>");
            revolutionary.wantsSteak = true;
    }
        break;
        case "angry" :
        if ((revolutionary.emotionalState === "angry") && (veteran.emotionalState === "happy")) {
            tdis.append("<b>" + revolutionary.name +": </b>" + "<p>He's just stringing us along, and you're eagerly playing the puppet. Frankly, you don't deserve steak. I want a drink.</p>");
            revolutionary.wantsDrink = true;
            veteran.insulted = true;
            veteran.attitudeTowardRevolutionary-=5;
            revolutionary.attitudeTowardVeteran-=4;
        }
        if ((revolutionary.emotionalState === "angry") && (veteran.emotionalState === "bored")) {
            tdis.append("<b>" + revolutionary.name +": </b>" + "<p>I can't believe that greedy brat wants Hiltenland too. To hell with noodles, I want a drink. </p>");
            revolutionary.wantsDrink = true;
            veteran.attitudeTowardRevolutionary-=5;
            revolutionary.attitudeTowardVeteran-=2;
        }
        if ((revolutionary.emotionalState === "angry") && (veteran.emotionalState === "angry")) {
            tdis.append("<b>" + revolutionary.name +": </b>" + "<p>Alcohol won't help anything. We need to go to a real restaurant, eat real food, and regroup. There's a steakhouse nearby we can go to.</p>"); 
            revolutionary.wantsSteak = true;
            veteran.attitudeTowardRevolutionary-=5;
            revolutionary.attitudeTowardVeteran-=5;
        }
        break;
        case "bored" :
        if ((revolutionary.emotionalState === "bored") && (veteran.emotionalState === "happy")) {
            tdis.append("<b>" + revolutionary.name +": </b>" + "<p>Yeah, uh, whatever you said is fine with me. </p>");
            revolutionary.wantsSteak = true;
        }
        if ((revolutionary.emotionalState === "bored") && (veteran.emotionalState === "angry")) {
            tdis.append("<b>" + revolutionary.name +": </b>" + "<p>Uh, I don't know. I think he'll cave in a few days. Anyways, I'm in the mood for noodles. </p>");
            revolutionary.wantsNoodles = true;
        }
        if ((revolutionary.emotionalState === "bored") && (veteran.emotionalState === "bored")) {
            tdis.append("<b>" + revolutionary.name +": </b>" + "<p>No, I need something to liven up the night after today. Let's get drinks.</p>");
            revolutionary.wantsDrink = true;
            veteran.attitudeTowardRevolutionary-=1;
            revolutionary.attitudeTowardVeteran-=1;
        }
        break;
       
    
    }
    if (veteran.insulted) {
        tdis.append( "<p style= font-style: italics> The Veteran reddens. </p>" + "<b>" + veteran.name +": </b>" + "<p> That was hardly called for. Maybe if you pulled even half your weight in negotiations you wouldn't be so quick to dismiss my hard work.</p>");    
        revolutionary.insulted = true;
        veteran.attitudeTowardRevolutionary -= 10;
        revolutionary.attitudeTowardVeteran -= 15;    
        decisionImminent = true;
    }
    theIntervention();
    infoUpdate();
}

function theIntervention() {
    $('#playerOptions').fadeIn(1000);
    $('#playerChoices').fadeIn(1000);
    $('#steak').click(function () {

    });
}


$('.dropdown-toggle').dropdown()







