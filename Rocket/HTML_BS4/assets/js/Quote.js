$(document).ready(function() {
    $("#sum, #naparts, #nfloors, #nbasements, #nbusinesses, #nparkings, #ncages, #noccperfloor, #ndha, .buttoncenter").hide();

//hide everything that is not input for residential

   $("#btnresidential").on('click', function(){

        
        $('#btnhybrid').removeClass('type_clicked');
        $('#btncorporate').removeClass('type_clicked');
        $('#btncommercial').removeClass('type_clicked');
        $('#btnresidential').addClass('type_clicked'); 
        $("#naparts, #nfloors, #nbasements, #nbusinesses, #nparkings, #ncages, #noccperfloor, #ndha, .buttoncenter").hide();
        $("#sum, #naparts, #nfloors, #nbasements, .buttoncenter").show(1000);
   });

//hide everything thta is not input for commercial


    $("#btncommercial").on('click', function(){
        $('#btnhybrid').removeClass('type_clicked');
        $('#btncorporate').removeClass('type_clicked');
        $('#btncommercial').addClass('type_clicked');
        $('#btnresidential').removeClass('type_clicked'); 
        $("#naparts, #nfloors, #nbasements, #nbusinesses, #nparkings, #ncages, #noccperfloor, #ndha, .buttoncenter").hide();
        $("#sum, #nbusinesses, #nfloors, #nbasements, #nparkings, #ncages, .buttoncenter").show(1000);
    });

 //hide everything thta is not input for corporate


    $("#btncorporate").on('click', function(){
        $('#btnhybrid').removeClass('type_clicked');
        $('#btncorporate').addClass('type_clicked');
        $('#btncommercial').removeClass('type_clicked');
        $('#btnresidential').removeClass('type_clicked');         
        $("#naparts, #nfloors, #nbasements, #nbusinesses, #nparkings, #ncages, #noccperfloor, #ndha, .buttoncenter").hide();
        $("#sum, #nbusinesses, #nfloors, #nbasements, #nparkings, #noccperfloor, .buttoncenter").show(1000);
    });
 

 //hide everything thta is not input for hybrid


    $("#btnhybrid").on('click', function(){
        $('#btnhybrid').addClass('type_clicked');
        $('#btncorporate').removeClass('type_clicked');
        $('#btncommercial').removeClass('type_clicked');
        $('#btnresidential').removeClass('type_clicked'); 
        $("#naparts, #nfloors, #nbasements, #nbusinesses, #nparkings, #ncages, #noccperfloor, #ndha, .buttoncenter").hide();
        $("#sum, #nbusinesses, #nfloors, #nbasements, #nparkings, #noccperfloor, #ndha, .buttoncenter").show(1000);
    });
    
//  onclick switch 

    $("#standard").on('click', function(){
        var collected_vars = collect_vars();
        computed_result = compute_price(7565, collected_vars, 'standard');
        
        //show_results(computed_result); inner.html
    });
    $("#premium").on('click', function(){
        var collected_vars = collect_vars();
        computed_result = compute_price(12345, collected_vars, 'premium');
    });
    $("#excelium").on('click', function(){
        var collected_vars = collect_vars();
        computed_result = compute_price(15400, collected_vars, 'excelium');
    });
    $(".residential1  :input").on("change keyup", function () {
        console.log("test")
        var collected_vars = collect_vars();
        computed_result = compute_price(7565, collected_vars, 'standard');
    })
  

function compute_price(price, collected_vars, calc_type){
    let total;
    let fees;
    let cage2;
    let occfl1000;
    let calccol;
    // console.table(collected_vars)

    if (collected_vars['business_type'].toLowerCase() === 'residential'){
        cage2 = collected_vars.cagesPerFloors * collected_vars.nbcolumns;
        // console.log("residential")

        if (calc_type === 'standard'){
            totsfees2 = price * cage2;
            fees = totsfees2 * 0.1;
            total = totsfees2 + fees;
        }
        
        if (calc_type == 'premium'){
            totsfees2 = price * cage2;
            fees = totsfees2 * 0.13;
            total = totsfees2 + fees;
            
            
        }
        if (calc_type == 'excelium'){
            totsfees2 = price * cage2;
            fees = totsfees2 * 0.16;
            total = totsfees2 + fees;
            
            
        }
    }
    else if (collected_vars['business_type'].toLowerCase() === 'commercial'){        
        cage2 = collected_vars.nbcages;
        // console.log("commercial")
        if (calc_type === 'standard'){
            totsfees2 = price * cage2;
            fees = totsfees2 * 0.10;
            total = totsfees2 + fees;
        }
        
        if (calc_type == 'premium'){
            totsfees2 = price * cage2;
            fees = totsfees2 * 0.13;
            total = totsfees2 + fees;
            
            
        }
        if (calc_type == 'excelium'){
            totsfees2 = price * cage2;
            fees = totsfees2 * 0.16;
            total = totsfees2 + fees;
            
            
        }
    }
    else if (collected_vars['business_type'].toLowerCase() === 'corporate' || 'hybrid'){        
            occfl1000 = Math.ceil((collected_vars.nbocperfloors * (collected_vars.nbfloors + collected_vars.nbbassements)) /1000);
            calccol = Math.ceil(occfl1000 / collected_vars.nbcolumns);
            cage2 = Math.ceil(calccol * collected_vars.nbcolumns);



        if (calc_type === 'standard'){
            totsfees2 = price * cage2;
            fees = totsfees2 * 0.10;
            total = totsfees2 + fees;
        }
        
        if (calc_type == 'premium'){
            totsfees2 = price * cage2;
            fees = totsfees2 * 0.13;
            total = totsfees2 + fees;
            
            
        }
        if (calc_type == 'excelium'){
            totsfees2 = price * cage2;
            fees = totsfees2 * 0.16;
            total = totsfees2 + fees;
            
            
        }
    }


    if(isNaN(total, fees, totsfees2, cage2)){
        total=0;
        fees=0;
        totsfees2=0;
        cage2=0;

    }

    // nb_appart = colected_vars['nbapartments']
    // nb_floors = colected_vars['nbfloors']
    // if (type_of_business == 'residential'){
        document.getElementById("cage1").style.display = "block";
        document.getElementById("cage2").innerHTML = "Numbers of cages : " + cage2;
        document.getElementById("totsfees1").style.display = "block";
        document.getElementById("totsfees2").innerHTML = "Price without fees : " + totsfees2 + "$";
        document.getElementById("totalPrice1").style.display = "block";
        document.getElementById("fees").innerHTML = "Installation fees : " + fees + "$";
        document.getElementById("totalPrice").style.display = "block";
        document.getElementById("total").innerHTML = "Total : " + total + "$"; 
        
    }

function collect_vars(){

    var business_type = $('.type_clicked').html();
    var nbapartments = parseInt(document.getElementById("numbers_apartments").value);
    var nbfloors = parseInt(document.getElementById("numbers_floors").value);
    var nbbassements = parseInt(document.getElementById("numbers_basements").value);
    var nbbusinesses = parseInt(document.getElementById("numbers_businesses").value);
    var nbparkings = parseInt(document.getElementById("numbers_parkings").value);
    var nbcages = parseInt(document.getElementById("numbers_cages").value);
    var nbocperfloors = parseInt(document.getElementById("numbers_occupantsPerFloors").value);
    var nbhouractivity = parseInt(document.getElementById("numbers_hourActivity").value);

    var apartPerFloors = Math.ceil (nbapartments / nbfloors);
    console.log(apartPerFloors)
    var cagesPerFloors = Math.ceil(apartPerFloors / 6);
    console.log(cagesPerFloors)
    var nbcolumns = Math.ceil(nbfloors /20);
    console.log(nbcolumns)

    return { business_type: business_type, nbapartments: nbapartments,nbfloors: nbfloors,nbbassements: nbbassements,nbbusinesses:nbbusinesses,nbparkings:nbparkings,
        nbcages:nbcages,nbocperfloors:nbocperfloors,nbhouractivity:nbhouractivity, apartPerFloors:apartPerFloors,
         cagesPerFloors:cagesPerFloors, nbcolumns:nbcolumns}

}


  
// function calcresidential(price, nbapartments, nbfloors) {
    
//     document.getElementById('numbers_apartments').setAttribute('onchange','calcresidential();');
//     document.getElementById('numbers_floors').setAttribute('onchange','calcresidential();');
//     document.getElementById('numbers_basements').setAttribute('onchange','calcresidential();');

//      nbapartments = parseInt(document.getElementById("numbers_apartments").value);
//      console.log('patate' + nbapartments)
//      nbfloors = parseInt(document.getElementById("numbers_floors").value);
//      nbbassements = parseInt(document.getElementById("numbers_basements").value);
//      apartPerFloors = nbapartments / nbfloors;
//      cagesPerFloors = Math.ceil(apartPerFloors / 6);
//      nbcolumns = Math.ceil(nbfloors /20);
    
//         var cageunit =  cagesPerFloors;

//         var total1 = cagesPerFloors * nbcolumns * price;
//         var total2 = total1 *0.1;
//         var total = total1 + total2;

//     document.getElementById("totalPrice").style.display = "block";
//     document.getElementById("total").innerHTML = total + "$";
    
// }


  
//     // Montrer le prix
//     document.getElementById("totalPrice").style.display = "block";
//     document.getElementById("total").innerHTML = `s`;
//     console.log("lol");
//   };










// function total123(){
//     var residentialprice
// }





//  function calculateTotal(){
//      var residentialprice = nbapartments + nbfloors + nbbassements;

//      var divTot = document.getElementById("totalPrice");
//      divTot.style.display='block';
//      divTot.innerHTML = "$"+residentialprice;
//  }


// id="numbers_apartments">

// id="numbers_floors">

// id="numbers_basements">

// id="numbers_businesses">

// id="numbers_parkings">

// id="numbers_cages">

// id="numbers_occupantsPerFloors">

// id="numbers_hourActivity">



});
