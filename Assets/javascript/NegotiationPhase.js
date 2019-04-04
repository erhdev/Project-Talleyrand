var emotionArray = ["happy" , "angry", "bored"];
var decisionImminent = false;

var energy = 100;
var persuasiveness = 25;
var charArray = [
   // add something about internationalist inclinations here
    // prince = {emotionalState: emotionArray[Math.floor(Math.random() * emotionArray.length)], arguerType: "vain",attitudeTowardPlayer: 50,attitudeTowardVeteran: 100,attitudeTowardRevolutionary: 50,attitudeTowardPrince: 110,temper: 85,energy: 100,persuasiveness: 20,},

    veteran = {
        name:"The Veteran",
        emotionalState: emotionArray[Math.floor(Math.random() * emotionArray.length)],
        arguerType: "realpolitik",
        attitudeTowardPlayer: 50,
        attitudeTowardVeteran: 100,
        attitudeTowardRevolutionary: 50,
        attitudeTowardPrince: 40,
        temper: 85,
        turnDone: false,
        
        // can objects in an array reference other arrays?
        // probably
    },
    revolutionary = {
        name: "The Revolutionary",
        emotionalState: emotionArray[Math.floor(Math.random() * emotionArray.length)],
        arguerType: "ideological",
        attitudeTowardPlayer: 50,
        attitudeTowardVeteran: 50,
        attitudeTowardRevolutionary: 100,
        attitudeTowardPrince: 40,
        temper: 40,
        turnDone: false,
    }
];

var theFloor = {}

var cardArray = [$('#veteran'), $('#revolutionary')]

function infoUpdate() {
    for (i = 0; i < cardArray.length; i++) {
        // remember to change i when you can pick a character
        cardArray[i].find('.name')
        .text(charArray[i].name);
        cardArray[i].find('.emotionalState')
        .text("Emotional State: " + charArray[i].emotionalState);
        cardArray[i].find('.attitudeTowardPlayer')
        .text("Attitude Toward Player: " + charArray[i].attitudeTowardPlayer);
        cardArray[i].find('.arguerType')
        .text("Arguer Type: " + charArray[i].arguerType);
        cardArray[i].find('.attitudeTowardVeteran')
        .text("Attitude Toward Veteran:" + charArray[i].attitudeTowardVeteran);
        cardArray[i].find('.attitudeTowardRevolutionary')
        .text("Attitude Toward Revolutionary:" + charArray[i].attitudeTowardRevolutionary);
        cardArray[i].find('.temper')
        .text("Temper:" + charArray[i].temper);
    }
    $('.energy').text("Energy: " + energy);
    $('.persuasiveness').text("Persuasiveness: " + persuasiveness);

}
var update = setInterval(infoUpdate, 100);

function genCard() {
    var resCard = $('<div>');
    resCard.addClass('card');
    var cardBody = $('<div>');
    cardBody.addClass('card-body');
    var resTitle = $('<h4>' + $('#resAbout').text() +  '</h4>');
    resTitle.appendTo(cardBody);
    var resList = $('<ul>');
    resList.addClass('list-group list-group-flush');


    if (typeof theFloor.res2 === 'undefined') {
        for (j = 0; j < theFloor.res1.length; j++) {
            var resAttr = $('<li>');
            resAttr.addClass('list-group-item');
            switch (j) {
                case 0: 
                    if (theFloor.res1[0][0]) {
                        resAttr.text("Owner: Me");
                    }
                    if (theFloor.res1[0][1]) {
                        resAttr.text("Owner: Veteran");
                    }
                    if (theFloor.res1[0][2]) {
                        resAttr.text('Owner: Revolutionary');
                    }
                    if (theFloor.res1[0][3]) {
                        resAttr.text('Owner: Independent');
                    }
                break;
                case 1:
                if (theFloor.res1[1][0]) {
                    resAttr.text("Taxes Paid To: Me");
                }
                if (theFloor.res1[1][1]) {
                    resAttr.text("Taxes Paid To: Veteran");
                }
                if (theFloor.res1[1][2]) {
                    resAttr.text('Taxes Paid To: Revolutionary');
                }
                if (theFloor.res1[1][3]) {
                    resAttr.text('Taxes Paid To: Local Government');
                }
                break;
                case 2:
                if (theFloor.res1[2][0]) {
                    resAttr.text("Demilitarized");
                }
                if (theFloor.res1[2][1]) {
                    resAttr.text("Militarized By Owner");
                }
                break;
            }
            resAttr.appendTo(cardBody);
        
        }
    } else if ((Array.isArray(theFloor.res1) && (typeof theFloor.res3 === 'undefined'))) {
        console.log('HEY');
        for (j = 0; j < theFloor.res2.length; j++) {
            var resAttr = $('<li>');
            resAttr.addClass('list-group-item');
            switch (j) {
                case 0: 
                if (theFloor.res2[0][0]) {
                    resAttr.text("Owner: Me");
                }
                if (theFloor.res2[0][1]) {
                    resAttr.text("Owner: Veteran");
                }
                if (theFloor.res1[0][2]) {
                    resAttr.text('Owner: Revolutionary');
                }
                if (theFloor.res1[0][3]) {
                    resAttr.text('Owner: Independent');
                }
                break;
                case 1:
                if (theFloor.res1[1][0]) {
                    resAttr.text("Taxes Paid To: Me");
                }
                if (theFloor.res1[1][1]) {
                    resAttr.text("Taxes Paid To: Veteran");
                }
                if (theFloor.res1[1][2]) {
                    resAttr.text('Taxes Paid To: Revolutionary');
                }
                if (theFloor.res1[1][3]) {
                    resAttr.text('Taxes Paid To: Local Government');
                }
                break;
                case 2:
                if (theFloor.res1[2][0]) {
                    resAttr.text("Demilitarized");
                }
                if (theFloor.res1[2][1]) {
                    resAttr.text("Militarized By Owner");
                }
                break;
            }
            resAttr.appendTo(cardBody);
        
        }
    } else if ((Array.isArray(theFloor.res1)) && (Array.isArray(theFloor.res2))) {
        for (j = 0; j < theFloor.res3.length; j++) {
            var resAttr = $('<li>');
            resAttr.addClass('list-group-item');
            switch (j) {
                case 0: 
                    if (theFloor.res3[0][0]) {
                        resAttr.text("Owner: Me");
                    }
                    if (theFloor.res3[0][1]) {
                        resAttr.text("Owner: Veteran");
                        console.log('working');
                    }
                    if (theFloor.res1[0][2]) {
                        resAttr.text('Owner: Revolutionary');
                    }
                    if (theFloor.res1[0][3]) {
                        resAttr.text('Owner: Independent');
                    }
                break;
                case 1:
                if (theFloor.res1[1][0]) {
                    resAttr.text("Taxes Paid To: Me");
                }
                if (theFloor.res1[1][1]) {
                    resAttr.text("Taxes Paid To: Veteran");
                }
                if (theFloor.res1[1][2]) {
                    resAttr.text('Taxes Paid To: Revolutionary');
                }
                if (theFloor.res1[1][3]) {
                    resAttr.text('Taxes Paid To: Local Government');
                }
                break;
                case 2:
                if (theFloor.res1[2][0]) {
                    resAttr.text("Demilitarized");
                }
                if (theFloor.res1[2][1]) {
                    resAttr.text("Militarized By Owner");
                }
                break;
            }
            resAttr.appendTo(cardBody);
        
        }
    }
    cardBody.appendTo(resCard);
    resCard.appendTo('#actionLog');

}

function playerTurn() {
    $('#otherTurnDisplay').fadeOut(1000);
    $('#playerTurnDisplay').fadeIn(1000);
$('.resolution').click(function () {
    $('#resolutionBuilder').fadeIn(1000);
    $('#actionDisplay').hide();
    $('.particular').text($(event.target).text());
});
$('.resButton').on('click', function(){
    resolutionBuilder();
});
function resolutionBuilder() {

    veteran.resImpact= [0, 0, 0, 0,]
    revolutionary.resImpact= [0, 0, 0, 0,]
    var veteranImpactTotal = 0;
    var revolutionaryImpactTotal = 0;
    

$('#resAtt1Opt1').click( function () {
    veteran.resImpact[0] = 0;    
    revolutionary.resImpact[0] = 0;
    
    veteran.resImpact[0] -= 5;
    revolutionary.resImpact[0] -= 5;
    $('#areaOwner').text($(this).attr('data-owner'));
    resBuilderInfo()
});
$('#resAtt1Opt2').click( function () {
    veteran.resImpact[0] = 0;    
    revolutionary.resImpact[0] = 0;
    
    veteran.resImpact[0] += 10;
    revolutionary.resImpact[0] -= 5;
    $('#areaOwner').text($(this).attr('data-owner'));
    resBuilderInfo()
});
$('#resAtt1Opt3').click( function () {
    veteran.resImpact[0] = 0;    
    revolutionary.resImpact[0] = 0;
    
    veteran.resImpact[0] -= 5;
    revolutionary.resImpact[0] += 10;
    $('#areaOwner').text($(this).attr('data-owner'));
    resBuilderInfo()
});
$('#resAtt1Opt4').click( function () {
    veteran.resImpact[0] = 0;    
    revolutionary.resImpact[0] = 0;
    
    veteran.resImpact[0] -= 7;
    revolutionary.resImpact[0] -= 7;
    $('#areaOwner').text($(this).attr('data-owner'));
    resBuilderInfo()
});

$('#resAtt2Opt1').click( function () {
    veteran.resImpact[1] = 0;    
    revolutionary.resImpact[1] = 0;
    
    veteran.resImpact[1] -= 5;
    revolutionary.resImpact[1] -= 5;
    resBuilderInfo()
});
$('#resAtt2Opt2').click( function () {
    veteran.resImpact[1] = 0;    
    revolutionary.resImpact[1] = 0;
    
    veteran.resImpact[1] += 10;
    revolutionary.resImpact[1] -= 5;
    resBuilderInfo()
});
$('#resAtt2Opt3').click( function () {
    veteran.resImpact[1] = 0;    
    revolutionary.resImpact[1] = 0;
    
    veteran.resImpact[1] -= 5;
    revolutionary.resImpact[1] += 10;
    resBuilderInfo()
});
$('#resAtt2Opt4').click( function () {
    veteran.resImpact[1] = 0;    
    revolutionary.resImpact[1] = 0;
    
    veteran.resImpact[1] -= 7;
    revolutionary.resImpact[1] -= 7;
    resBuilderInfo()
});

$('#resAtt3Opt1').click( function () {
    veteran.resImpact[3] = 0;    
    revolutionary.resImpact[3] = 0;
    resBuilderInfo()
});
$('#resAtt3Opt2').click( function () {
    veteran.resImpact[3] = 0;    
    revolutionary.resImpact[3] = 0;
    
    if ($('#areaOwner').text() === 'me') {
        veteran.resImpact[3] -= 10;
        revolutionary.resImpact[3] -= 10;
    } else
    if ($('#areaOwner').text() === 'Hallenland') {
        veteran.resImpact[3] += 15;
        revolutionary.resImpact[3] -= 10;
    } else
    if ($('#areaOwner').text() === 'Robbespier') {
        veteran.resImpact[3] -= 10;
        revolutionary.resImpact[3] += 15;
    } 
    resBuilderInfo()
});
$('#resAtt3Opt3').click( function () {
    veteran.resImpact[0] = 0;    
    revolutionary.resImpact[0] = 0;
    
    veteran.resImpact[0] -= 5;
    revolutionary.resImpact[0] += 10;
    // put in something about each character's internationalist inclinations
});

function resBuilderInfo() {
    
    veteranImpactTotal = 0;
    revolutionaryImpactTotal = 0;

    for (i = 0; i < veteran.resImpact.length; i++) {
        veteranImpactTotal += veteran.resImpact[i];
        
    };
    
    for (i = 0; i < veteran.resImpact.length; i++) {
        revolutionaryImpactTotal += revolutionary.resImpact[i];
    };

    $('#resAtt4Opt1').click( function () {

        if (veteranImpactTotal < 0) {veteranImpactTotal = veteranImpactTotal * 0.75;} else 
        if (veteranImpactTotal > 0)  {veteranImpactTotal = veteranImpactTotal * 1.25;}
        resBuilderInfo()
     });
     $('#resAtt4Opt2').click( function () {
     
        if (revolutionaryImpactTotal < 0) {revolutionaryImpactTotal = revolutionaryImpactTotal * 0.75;} else 
        if (revolutionaryImpactTotal > 0)  {revolutionaryImpactTotal = revolutionaryImpactTotal * 1.25;}
        resBuilderInfo()
     });
    

console.log(revolutionaryImpactTotal);
console.log(veteranImpactTotal);
if (veteranImpactTotal > 20){ $('#impactVeteran').text('wonderful!');} else 
if (veteranImpactTotal > 9){ $('#impactVeteran').text('quite agreeable.');} else
if (veteranImpactTotal > 4) { $('#impactVeteran').text('favorable.'); } else
if (veteranImpactTotal < -4) { $('#impactVeteran').text('unfavorable.');} else
if (veteranImpactTotal < -13) { $('#impactVeteran').text('actively hostile.');};

if (revolutionaryImpactTotal > 20){ $('#impactRevolutionary').text('wonderful!');} else 
if (revolutionaryImpactTotal > 9){ $('#impactRevolutionary').text('quite agreeable.');} else
if (revolutionaryImpactTotal > 4) { $('#impactRevolutionary').text('favorable.'); } else
if (revolutionaryImpactTotal < -4) { $('#impactRevolutionary').text('unfavorable.');} else
if (revolutionaryImpactTotal < -13) { $('#impactRevolutionary').text('actively hostile.');};
};

function toTheFloor() {
    impactTotals = [veteranImpactTotal, revolutionaryImpactTotal];
    for (i = 0; i < charArray.length; i++) {
        charArray[i].attitudeTowardPlayer += impactTotals[i];
    }

    function addToFloor() {
    attrArray = [
        attr1= [false, false, false, false],
        attr2= [false, false, false, false],
        attr3= [false, false, false]
    ]
    
    metaAttrArray = [
    attr1Array = [$('#resAtt1Opt1'), $('#resAtt1Opt2'),$('#resAtt1Opt3'),$('#resAtt1Opt4'), ],
    attr2Array = [$('#resAtt2Opt1'), $('#resAtt2Opt2'),$('#resAtt2Opt3'),$('#resAtt2Opt4'), ],
    attr3Array = [$('#resAtt3Opt1'), $('#resAtt3Opt2'),$('#resAtt3Opt3')]
    ]
    for (i=0; i < metaAttrArray.length; i++) {
        for (j=0; j < metaAttrArray[i].length; j++) {
            if (metaAttrArray[i][j].is(':checked')) {
                attrArray[i][j] = true;
            }
        }
    }
    if (typeof theFloor.res1 === 'undefined') {
        theFloor.res1 = attrArray;
    } else if (typeof theFloor.res2 === 'undefined') {
        theFloor.res2 = attrArray;
    } else if (typeof theFloor.res3 === 'undefined') {
        theFloor.res3 = attrArray;
    } 
    }

    addToFloor();
    console.log(theFloor);
    genCard();
    $('#resolutionBuilder').fadeOut(1000);
    $('#actionDisplay').fadeIn(1100);
}

$('#makeResolution').click(function() {
    toTheFloor();
    computerTurn();
})

};
veteran.turnDone = false;
revolutionary.turnDone = false;
}

function computerTurn() {

    // ADD THE CONDITIONS TO SWITCH TURNS BACK IN


var order = Math.floor(Math.random() * 2);
if (order === 1) {
    veteranAI();
    revolutionaryAI();
} else {
    revolutionaryAI();
    veteranAI();
}

function compTurnLayoutAdjustments() {
    $('#otherTurnDisplay').fadeIn(1000);
    $('#playerTurnDisplay').fadeOut(1000);

}; compTurnLayoutAdjustments();
function veteranAI() {
    var attrArray = [
        attr1= [false, false, false, false],
        attr2= [false, false, false, false],
        attr3= [false, false, false]
    ]

    if (veteran.attitudeTowardPlayer > 70) {
        attrArray = [
            attr1= [false, true, false, false],
            attr2= [true, false, false, false],
            attr3= [true, false, false]
        ]
    } else if (veteran.attitudeTowardPlayer > 50) {
        attrArray = [
            attr1= [false, true, false, false],
            attr2= [true, false, false, false],
            attr3= [false, true, false]
        ]
    } else if (veteran.attitudeTowardPlayer <= 50) {
        attrArray = [
            attr1= [false, true, false, false],
            attr2= [false, true, false, false],
            attr3= [false, true, false]
        ]
    } else if (veteran.attitudeTowardPlayer < 30) {
        attrArray = [
            attr1= [false, true, false, false],
            attr2= [false, true, false, false],
            attr3= [false, true, false]
        ]
    }
    if (typeof theFloor.res1 === 'undefined') {
        theFloor.res1 = attrArray;
        console.log(theFloor.res1);
    } else if (typeof theFloor.res2 === 'undefined') {
        theFloor.res2 = attrArray;
    } else if (typeof theFloor.res3 === 'undefined') {
        theFloor.res3 = attrArray;
    }
    genCard();
    veteran.turnDone = true;
};
function revolutionaryAI() {
    console.log('firing');
    var attrArray = [
        attr1= [false, false, false, false],
        attr2= [false, false, false, false],
        attr3= [false, false, false]
    ]

    if (revolutionary.attitudeTowardPlayer > 70) {
        attrArray = [
            attr1= [false, false, false, true],
            attr2= [true, false, false, false],
            attr3= [true, false, false]
        ]
    } else if (revolutionary.attitudeTowardPlayer > 50) {
        attrArray = [
            attr1= [false, false, false, true],
            attr2= [false, false, true, false],
            attr3= [false, true, false]
        ]
    } else if (revolutionary.attitudeTowardPlayer <= 50) {
        attrArray = [
            attr1= [false, false, true, false],
            attr2= [false, false, true, false],
            attr3= [true, false, false]
        ]
    } else if (revolutionary.attitudeTowardPlayer < 30) {
        attrArray = [
            attr1= [false, false, true, false],
            attr2= [false, false, true, false],
            attr3= [false, true, false]
        ]
    }
    if (typeof theFloor.res1 === 'undefined') {
        theFloor.res1 = attrArray;
        console.log(theFloor.res1);
    } else if (typeof theFloor.res2 === 'undefined') {
        theFloor.res2 = attrArray;
    } else if (typeof theFloor.res3 === 'undefined') {
        theFloor.res3 = attrArray;
    }
    genCard();
    revolutionary.turnDone = true;
}
if ((veteran.turnDone) &&(revolutionary.turnDone)) {
    playerTurn();
}
}

$(document).ready(function () {
    var order = Math.floor(Math.random() * 2);
    if (order === 1) {
        playerTurn();
    } else { computerTurn();}
    if (Array.isArray(theFloor.res3)) {$('#advance-resolution').addClass('disabled'); console.log(yo)};
    
});

// come up with a way of determining turn order and a round counter
// let the player be able to pick resolutions they want to introduce 
// have different displays for player turn and non player turns