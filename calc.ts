var fieldMethInQM;
var calcbtn;
var fieldMethInMol;
var fieldMethInKg;
var fieldCarbInMol;
var fieldCarbInQM; 
var fieldCarbInKg; 

    calcbtn        = document.getElementById('calcbtn');
    fieldMethInQM  = document.getElementById('methinm3');
    fieldMethInMol = document.getElementById('methinmol');
    fieldMethInKg  = document.getElementById('methinkg');
    fieldCarbInMol = document.getElementById('carbinmol');
    fieldCarbInQM  = document.getElementById('carbinqm');
    fieldCarbInKg  = document.getElementById('carbinkg')

var methQM;

var calcStart = function() {
        methQM = parseInt(fieldMethInQM.innerHTML);
    var methMol= Math.round(((methQM*.76)/16.04)*1000);
    var methKg = Math.round(methQM*.76);
    var carbMol= Math.round(methMol*28);
    var carbKg = Math.round((carbMol*44)/1000);
    var carbQM = Math.round(carbKg/1.97);
    
    fieldMethInMol.innerHTML = methMol.toString();
    fieldMethInKg.innerHTML  = methKg.toString();
    fieldCarbInMol.innerHTML = carbMol.toString();
    fieldCarbInKg.innerHTML  = carbKg.toString();
    fieldCarbInQM.innerHTML  = carbQM.toString();
};

calcbtn.addEventListener('click', calcStart);