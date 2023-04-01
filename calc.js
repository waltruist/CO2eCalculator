const calcbtn        = document.getElementById('calcbtn');
const fieldMethInQM  = document.getElementById('methinm3');
const fieldMethInMol = document.getElementById('methinmol');
const fieldMethInKg  = document.getElementById('methinkg');
const fieldCarbInMol = document.getElementById('carbinmol');
const fieldCarbInQM  = document.getElementById('carbinqm');
const fieldCarbInKg  = document.getElementById('carbinkg')
 
const calcStart = function() {
    var methQM = parseInt(fieldMethInQM.value);
    var methMol= Math.round(((methQM*.76)/16.04)*1000);
    var methKg = Math.round(methQM*.76);
    var carbMol= Math.round(methMol*28);
    var carbKg = Math.round((carbMol*44)/1000);
    var carbQM = Math.round(carbKg/1.97);
    
    fieldMethInMol.value = methMol;
    fieldMethInKg.value  = methKg;
    fieldCarbInMol.value = carbMol;
    fieldCarbInKg.value  = carbKg;
    fieldCarbInQM.value  = carbQM;
};

calcbtn.addEventListener('click', calcStart);