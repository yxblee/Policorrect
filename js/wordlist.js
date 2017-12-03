var CMU = new Array(18);
for (var n = 0; n < 18; n++) {
    CMU[n] = new Array(2);
}

var govUK = new Array(13);
for (var i = 0; i < 13; i++) {
    govUK[i] = new Array(2);
}

var tableHeader = new Array(2);
tableHeader[0] = "Should be avoided";
tableHeader[1] = "Alternatives";



// incorrect - correct pair
CMU[0][0] = "Best man for the job";
CMU[0][1] = "Best person for the job";
CMU[1][0] = "Waitress";
CMU[1][1] = "Server";
CMU[2][0] = "Chairman";
CMU[2][1] = "Chair";
CMU[3][0] = "Fireman";
CMU[3][1] = "Firefighter";
CMU[4][0] = "Forefathers";
CMU[4][1] = "Ancestors";
CMU[5][0] = "Housewife";
CMU[5][1] = "Consumer";
CMU[6][0] = "Mankind";
CMU[6][1] = "Humanity";
CMU[7][0] = "Man the desk";
CMU[7][1] = "Staff the desk";
CMU[8][0] = "Homosexual";
CMU[8][1] = "Same-sex";
CMU[9][0] = "Man in the street";
CMU[9][1] = "Average person";
CMU[10][0] = "Christian name";
CMU[10][1] = "Forename";
CMU[11][0] = "Polio victim";
CMU[11][1] = "Polio survivor";
CMU[12][0] = "Man-made";
CMU[12][1] = "Artificial";
CMU[13][0] = "Manpower";
CMU[13][1] = "Human resources";
CMU[14][0] = "Right-hand man";
CMU[14][1] = "Chief assistant";
CMU[15][0] = "Sportsmanship";
CMU[15][1] = "Fairness";
CMU[16][0] = "Tax man";
CMU[16][1] = "Tax officer";
CMU[17][0] = "Workmanlike";
CMU[17][1] = "Effecient";

govUK[0][0] = "(the) handicapped, (the) disabled";
govUK[0][1] = "disabled (people)";
govUK[1][0] = "afflicted by, suffers from, victim of";
govUK[1][1] = "has [name of condition or impairment]";
govUK[2][0] = "confined to a wheelchair, wheelchair-bound";
govUK[2][1] = "wheelchair user";
govUK[3][0] = "mentally handicapped, mentally defective, retarded, subnormal";
govUK[3][1] = "with a learning disability (singular) with learning disabilities (plural)";
govUK[4][0] = "cripple, invalid";
govUK[4][1] = "disabled person";
govUK[5][0] = "spastic";
govUK[5][1] = "person with cerebral palsy";
govUK[6][0] = "able-bodied";
govUK[6][1] = "non-disabled";
govUK[7][0] = "mental patient, insane, mad";
govUK[7][1] = "person with a mental health condition";
govUK[8][0] = "deaf and dumb; deaf mute";
govUK[8][1] = "deaf, user of British Sign Language (BSL), person with a hearing impairment";
govUK[9][0] = "the blind";
govUK[9][1] = "people with visual impairments; blind people; blind and partially sighted people";
govUK[10][0] = "an epileptic, diabetic, depressive, and so on";
govUK[10][1] = "person with epilepsy, diabetes, depression or someone who has epilepsy, diabetes, depression";
govUK[11][0] = "dwarf; midget";
govUK[11][1] = "someone with restricted growth or short stature";
govUK[12][0] = "fits, spells, attacks";
govUK[12][1] = "seizures";


var tableGovUK = document.getElementById("GovUK");
tableGovUK.setAttribute("class", "table");

var tGovUKtable = document.createElement("table");
var tGovUKhead = document.createElement("thead");
var tGovUKbody = document.createElement("tbody");

for (var rcount = 0; rcount < 1; rcount++) {
    var row = document.createElement("tr");

    for (var j = 0; j < 2; j++) {
        var cell = document.createElement("th");
        var tnode = document.createTextNode(tableHeader[j]);
        
        cell.appendChild(tnode);
        row.appendChild(cell);
    }
    tGovUKhead.appendChild(row);
}
tGovUKtable.appendChild(tGovUKhead);


for (var b = 0; b < govUK.length; b++) {
    var row = document.createElement("tr");
    
    for (var a = 0; a < 2 ; a++) {
        var cell = document.createElement("td");
        var term = document.createTextNode(govUK[b][a]);
        cell.appendChild(term);
        row.appendChild(cell);
    }
    tGovUKbody.appendChild(row);
}
tGovUKtable.appendChild(tGovUKbody);
tableGovUK.appendChild(tGovUKtable);




var tableCMU = document.getElementById("CMU");
tableCMU.setAttribute("class", "table");

var tCMUtable = document.createElement("table");
var tCMUhead = document.createElement("thead");
var tCMUbody = document.createElement("tbody");

for (var rcount = 0; rcount < 1; rcount++) {
    var row = document.createElement("tr");

    for (var j = 0; j < 2; j++) {
        var cell = document.createElement("th");
        var tnode = document.createTextNode(tableHeader[j]);
        
        cell.appendChild(tnode);
        row.appendChild(cell);
    }
    tCMUhead.appendChild(row);
}
tCMUtable.appendChild(tCMUhead);


for (var i = 0; i < CMU.length; i++) {
    var row = document.createElement("tr");
    
    for (var j = 0; j < 2 && (CMU[i][j] != null); j++) {
        var cell = document.createElement("td");
        var term = document.createTextNode(CMU[i][j]);
        cell.appendChild(term);
        row.appendChild(cell);
    }
    tCMUbody.appendChild(row);
}
tCMUtable.appendChild(tCMUbody);
tableCMU.appendChild(tCMUtable);

