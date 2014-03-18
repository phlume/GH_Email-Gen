javascript:(function(){ if (typeof jQuery == 'undefined') {
	var jQ = document.createElement('script');
	jQ.type = 'text/javascript';
	jQ.src = 'http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js';
	
	document.body.appendChild(jQ);

	/* Initial message to users */
	//alert("**   Updated 3/5/14   ** \n\nGarE Says:\n\nHex value for color nav\nis now a \"yes\' or \"no\" question.\n\t...Good luck.\n\n\n\tGarE is requested.")
	
	/* user input for the information needed */
   	var msg = prompt("What is your Subject Line?\n\n")
	var msg2 = prompt("What is your Pre Header Text?\n\n")
	var msg5 = prompt("Insert the fineprint here:\n\n");
	var msg3 = prompt("Your full image path?\n\n")
	var msg6 = prompt("What is the HEX value of the **BACKGROUND** in the header?\n\n");
	var msg7 = confirm("Last question...\n\nBlack text in the Top Nav?\n\n(Click \"OK\" for Black, \"Cancel\" for White.)\n\n");
		
		
	/*============================= BEGIN SETTINGS AREA ===================================*/
	
	/************************************
	* Global Promo Banner *
	*************************************/
	
	// this is the prompt for using the global Giftcard banner or not.
	// Enter true inside of the parenthesis if you want to use the banner.
	var GC_check = Boolean(false);
	
	//If "true" above, enter in the following data for the global banner.
	//var gift_card_banner_link = "http://www.garnethill.com/gift-shop/gift-cards/";
	//var gift_card_banner_img = "http://www.garnethill.com/wcsstore/images/GarnetHill/_media/_assets/gift-card.jpg";
	
	//For the alt text, be sure to "escape" the single apostrophe with a backslash. Example: Girls' becomes Girls\' 
	//var gift_card_banner_alt = "Give The Gift That Always Fits: Garnet Hill Gift Cards";
	
	//Specific Fineprint for the Global banner
	
	//var GCFP = ' &lt;strong&gt;Gift cards are available and don\'t expire.lt;/strong&gt;'	
	//var GCBnrPre = ' Gift cards are available and don\'t expire.';	
	//var GCBnrRich = ' lt;strong&gt;Gift cards are available and don\'t expire.lt;/strong&gt;';
		
	/******* End Global Promo Banner *******/
	
	
	/**********************************
	* Naming convention of the top nav.
	***********************************/
	
	// Each of the variables below sort the top nav
	// labels and their destination.
	// Update here to update The Labels and Links.

	// Escaping for apostrophes (') are needed.
	// (Girl's becomes Girl\'s)
	
	// Also, ampersands need to be "Double" encoded here.
	// Ampersands should look like this:
	 			
	//		&amp;amp;
	
	var rootLink = '&gt;\n\t\t&lt;a href="http://www.**yourdomainnamehere**.com/';
	
	var tnav1 = "Location 1";
	var tnav1Link = rootLink+'location1/"';
	
	var tnav2 = "Location 2";
	var tnav2Link = rootLink+'location2/"';
	
	var tnav3 = "Location 3";
	var tnav3Link = rootLink+'location3/"';
	
	var tnav4 = "Location 4";
	var tnav4Link = rootLink+'location4/"';
	
	var tnav5 = "Location 5";
	var tnav5Link = rootLink+'location5/"';
	
	var tnav6 = "";
	var tnav6Link = "";
	
	var tnav7 = "";
	var tnav7Link = "";
	
	/******* End Top Nav Naming *******/
	
	
	/**********************************
	* Top Nav Style declarations.
	***********************************/
	if(!msg7){
		msg7 = "fff";
	} else {
		msg7 = "000";
	}
	
	// Style for the tables; color is from the prompt (msg6)
	var tableStyle = 'style="background:#'+msg6+';" width="640" align="center" cellpadding="0" cellspacing="0" border="0"';
	
	// Style for the TD tags within the table; color is from the prompt (msg6)
	var tdStyle = 'style="height:30px;background:#'+msg6+';text-align:center; vertical-align:bottom;"';
	
	// style for the links within the nav table (opening section)
	var aLinkStyle = 'style="line-height: 1em; font-family: Arial, Helvetica, sans-serif; text-decoration:none; text-transform:uppercase; font-size:10px;"&gt;&lt;span style="color:#'+msg7+';"&gt;';
	
	// Pixel width of the actual clearpixel.gif used as the spacing of the table's TD elements
	var clrWidth = '7';

	
	//Close the span for the contents (text shown in nav), close the TD
	// Open a new TD, add the clear Pixel spacer with the size listed above and then close the TD
	var clrPxl = '&lt;/span&gt;&lt;/a&gt;&lt;/td&gt;\n\t&lt;td width="'+clrWidth+'"&gt;&lt;img src="http://www.garnethill.com/wcsstore/images/GarnetHill/_media/clearpixel.gif" width="'+clrWidth+'" alt="" /&gt;&lt;/td&gt;';
	
	/******* End Top Nav Styles *******/
	
	/*============================= END SETTINGS AREA ===================================*/
	
	
	
		
	//if(GC_check == true){
	//	var msg4 = confirm("Use the Gift Card Banner?\n\nPress OK to use it.\nPress CANCEL to not use it.\n\n");
	//} else {
		var msg4 = Boolean(false);
	//}
	
	/* REPLACEMENT FUNCTION FOR REPLACING THE ARRAY OF SPECIAL CHARACTERS */
	
	var subRep = [ ['\u0027', '&amp;#39;'], ['\u2122', '=?UTF-8?Q?=e2=84=a2?='], ['\u00AE', '=?UTF-8?Q?=c2=ae?='], ['\u201c', '=?UTF-8?Q?=c2=ae?='], ['\u201c', '&amp;#34;'], ['\u201D', '&amp;#34;'], ['\u2018', '&amp;#39;'], ['\u2019', '&amp;#39;'], ['\u00D8', '=?UTF-8?Q?=c3=98?='], ['\u00F8', '=?UTF-8?Q?=c3=b8?='], ['\u2022', '&amp;#2022;'], ['\u003E', '&amp;#62;'], ['\u2015', '--'], ['\u2014', '--'], ['\u2013', '--'], ['\u2012', '--'], ['\u2011', '-'], ['\u2010', '-'] ];
	
	var preRep = [ ['\u0027', '&amp;#39;'], ['\u2122', '&amp;#153;'], ['\u00AE', '&amp;#174;'], ['\u201c', '&amp;#34;'], ['\u201c', '&amp;#34;'], ['\u201D', '&amp;#34;'], ['\u2018', '&amp;#39;'], ['\u2019', '&amp;#39;'], ['\u00D8', '&amp;#216;'], ['\u00F8', '&amp;#248;'], ['\u2022', '&amp;#2022;'], ['\u003E', '&amp;#62;'], ['\u2015', '--'], ['\u2014', '--'], ['\u2013', '--'], ['\u2012', '--'], ['\u2011', '-'], ['\u2010', '-'] ];
	
	if (msg!="") {
			  
			  subRep.forEach(function(pair1) {
     			msg = msg.split(pair1[0]).join(pair1[1]);
				
				});
				
			  preRep.forEach(function(pair2) {
     			msg2 = msg2.split(pair2[0]).join(pair2[1]);
				msg5 = msg5.split(pair2[0]).join(pair2[1]);
				});
				
				jQ.onload=runthis;
							  
			}else {
				jQ.onload=runthis;
			}
			
						
	document.body.appendChild(jQ);
	
	runthis();
		
} else {
	runthis();
}
function htmlEncode(value){
  return $('<div/>').text(value).html();
}


function runthis() {

	richtext = '';
	plaintext = '';
	
	$("#Table_01").attr({
		align: "center",
		bgcolor: '#ffffff'
	});	

	$("#Table_01").removeAttr('height');	
	
	$("#Table_01 td").removeAttr('height');
	$("#Table_01 td").removeAttr('width');
	
	$("img").removeAttr('height');
	$("img").removeAttr('width');
	
	 
			fineprint = msg5;
		//	if (msg4!=false){
		//			$("#Table_01 td:last").attr("style", "font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 10px; color: #333333;");
		//			tableClose = "&lt;/td&gt;\n&lt;/tr&gt;\n&lt;/table&gt;\n&lt;table width=\"640\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" align=\"center\" bgcolor=\"#ffffff\" style=\"font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 10px; color: #333333;\"&gt;\n&lt;tr&gt;\n&lt;td&gt;\n"+GC_Bnr+"&lt;/td&gt;\n&lt;/tr&gt;\n&lt;/table&gt;\n&lt;table width=\"640\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" align=\"center\" bgcolor=\"#ffffff\" style=\"font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 10px; color: #333333;\"&gt;\n&lt;tr&gt; \n&lt;td&gt;\n";
		//			fineprint+= GCFP;
		//	}else{
				tableClose = '';
				GCBnrPre = '';
				GCBnrRich = '';
		//	}
			fineprint2 = fineprint;
			fineprint3 = fineprint;
				
			fineprint3 = fineprint3.replace(/\n/g, '')/*.replace(/[#]/g, '')*/.replace(/[@]/g, '').replace(/[~]/g, '');
			fineprint3 = fineprint3.replace(/[\x2a]/g, '&lt;strong&gt;*').replace(/[\x3a]/g, ':&lt;/strong&gt;');
		
			
			//add '@' and '~' characters before and after FP to replace as div tag elements
			fineprint2 = '@' + fineprint2 + '~';
											
			//replace '*' and ':' with strong tags to bold FP header elements
			fineprint2 = fineprint2.replace(/[\x2a]/g, '&lt;strong&gt;*').replace(/[\x3a]/g, ':&lt;/strong&gt;');
				
			//replace @ as div tag element adding borders above and below the fine print
			//replace ~ as div close tag 
			fineprint2 = fineprint2.replace(/[@]/g,'\t\t\&lt;!--%%d_gift_card_1%%--&gt;\n\n\n&lt;table align="center" bgcolor="#ffffff" border="0" cellpadding="0" cellspacing="0" width="640"&gt;\n&lt;tbody&gt;\n\t&lt;tr&gt;\n\t\t&lt;td style="font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 10px; color: #333333;"&gt;\n\n\t\t\t&lt;div style="padding&#58; 9px 0 3px 0; margin-top&#58;10px; margin-bottom&#58;6px; font-family&#58; Verdana, Arial, Helvetica, sans-serif; font-size&#58; 10px; color&#58; #333333; border-top&#58;#e2e2e2 solid 1px; "&gt;\n').replace(/[~]/g, '\n\t\t&lt;/div&gt;\n\t\t&lt;/td&gt;\n\t&lt;/tr&gt;\n&lt;/tbody&gt;\n&lt;/table&gt;\n\n');
				//$("#Table_01 td:last").html(fineprint2);
				
				if (msg4!=false){
					$("#Table_01 td:last").attr({
					colspan: cols,
					bgcolor: '#ffffff'
					});			
				}
			
		//}
	
	$('a').each(function (){
			url = $(this).attr('href');
			alt = $(this).parent().find('img').attr('alt');
			alt = alt.replace(/[\x26]/g, '&#38').replace(/[\x00-\x1F\x80-\xAD]/g, '').replace(/[\xAF-\xFF]/g, '').replace(/[\u201c]/g, '&amp;#34;').replace(/[\u201D]/g, '&amp;#34;').replace(/[\u00AE]/g, '&amp;#174;').replace(/[\u0027]/g, '&amp;#39;').replace(/[\u2018]/g, '&amp;#39;').replace(/[\u2019]/g, '&amp;#39;').replace(/[\u2015]/g, '--').replace(/[\u2014]/g, '--').replace(/[\u2013]/g, '--').replace(/[\u2012]/g, '--').replace(/[\u2011]/g, '-').replace(/[\u2010]/g, '-').replace(/[\u2122]/g, '&amp;#0153;').replace(/[\u2022]/g, '&#x2022;').replace(/[\u003E]/g, '&amp;#62;');
			
			$(this).parent().find('img').attr("style", "display:block; border:none;");
			src = $(this).parent().find('img').attr('src');
			src = src.replace(/images/g, '');
			$(this).parent().find('img').attr("src", "http://www.garnethill.com/wcsstore/images/GarnetHill/_email/2014/"+msg3+src);
						
			richtext += '&lt;a href="' + url + '" &gt;\n' + alt + '&lt;/a&gt; &lt;br&gt;&lt;br&gt;\n\n';
			richtext = richtext.replace(/-- /g,'&lt;br&gt;\n');
			
			plaintext +=  alt + '\n' + url + '\n\n';
			plaintext = plaintext.replace(/-- /g,'\n');
							
		});
		
		table = htmlEncode($("body").html());
		table = table.replace(/&amp;/g, '&');
		
		// For the Global top nav banner:
		
		table = table.replace(/u003E/g, 'test').replace(/[\]/g, '').replace(/[\u00AE]/g, '&amp;#174;').replace(/[\u201c]/g, '&amp;#34;').replace(/[\u201D]/g, '&amp;#34;').replace(/[\u0027]/g, '&amp;#39;').replace(/[\u2018]/g, '&amp;#39;').replace(/[\u2019]/g, '&amp;#39;').replace(/[\u2015]/g, '--').replace(/[\u2014]/g, '--').replace(/[\u2013]/g, '--').replace(/[\u2012]/g, '--').replace(/[\u2011]/g, '-').replace(/[\u2010]/g, '-').replace(/[\u2122]/g, '&amp;#0153;');
		table = table.replace('&lt;script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js" type="text/javascript"&gt;&lt;/script&gt;', '');
		table = table.replace('&lt;script src="js-ui/js/jquery-ui-1.10.4.custom.js" type="text/javascript"&gt;&lt;/script&gt;', '');
		table = table.replace('&lt;link src="js-ui/css/ui-lightness/jquery-ui-1.10.4.custom.css" rel="stylesheet"&gt;', '');
		
		// spell();
		headerImg = '&lt;a href="http://www.garnethill.com"&gt;&lt;img src="http://www.garnethill.com/wcsstore/images/GarnetHill/_email/2014/'+msg3+'/gh_header-logo.gif" style="display:block; border:none;vertical-align:bottom;min-width:640px;"&gt;&lt;/a&gt;'
		
		TopNav = '\t\n&lt;!-- TOP NAV TABLE --&gt;\n&lt;table '+tableStyle+' &gt;\n\t&lt;tr&gt;\n&lt;td valign="bottom" style="height:95px;vertical-align:bottom;background:#'+msg6+';min-width:640px;" &gt;\n'+headerImg+'&lt;/td&gt;&lt;/tr&gt;&lt;/table&gt;\n\n&lt;table '+tableStyle+' &gt;\n\t&lt;tr&gt;&lt;td width="5%"&gt;&lt;img src="http://www.garnethill.com/wcsstore/images/GarnetHill/_media/clearpixel.gif" alt="" width="2%" /&gt;&lt;/td&gt;\n\t&lt;td '+tdStyle+tnav1Link+aLinkStyle+tnav1+clrPxl+'\n\t&lt;td '+tdStyle+tnav2Link+aLinkStyle+tnav2+clrPxl+'\n\t&lt;td '+tdStyle+tnav3Link+aLinkStyle+tnav3+clrPxl+'\n\t&lt;td '+tdStyle+tnav4Link+aLinkStyle+tnav4+clrPxl+'\n\t&lt;td '+tdStyle+tnav5Link+aLinkStyle+tnav5+'&lt;/span&gt;&lt;/a&gt;&lt;/td&gt;\n\t&lt;td width="5%"&gt;&lt;img src="http://www.garnethill.com/wcsstore/images/GarnetHill/_media/clearpixel.gif"alt="" width="2%" /&gt;&lt;/td&gt;&lt;/tr&gt;\n\t&lt;tr&gt;&lt;td colspan="11" height="18"&gt;&lt;img src="http://www.garnethill.com/wcsstore/images/GarnetHill/_media/clearpixel.gif" height="18" alt="" /&gt;&lt;/td&gt;&lt;/tr&gt;\n&lt;/table&gt;\n&lt;!-- END TOP NAV TABLE --&gt;\n';
		
			
		output ='<div style="margin: 0 auto; width:1000px; background: #000000; padding: 15px 20px; border-left: 4px solid #FF7F00; border-right: 4px solid #FF7F00; border-bottom: 4px double #FF7F00; display:none; position:fixed; width:95%; top:0; font-family: Courier, monospace; font-size: 18px; color: #cccccc;" id="message"> Loading... </div><br><br><br><br><br><br><pre style="background: #555555; border: medium none; color: #FFFFFF; border-bottom: 1px solid #CCCCCC; border-left: 12px solid #CCCCCC; font-size: 12px; white-space: pre-wrap; line-height: 20px; margin: 0 auto; overflow-x: auto; overflow-y: auto; padding: 0 0 0 20px; width: 1200px;" >&lt;!-- Base image path: http://www.garnethill.com/wcsstore/images/GarnetHill/_email/2014/'+msg3+'--&gt;\n\n&lt;!--SUBJECT:\n'+msg+'\n\nPRE-HEAD:\n'+msg2+'\n--&gt;\n\n&lt;!-- ****  BEGIN HTML OUTPUT **** --&gt;\n\n'+ TopNav + table + fineprint2+'\n\n&lt;!-- **** END HTML OUTPUT **** --&gt;\n\n&lt;!-- Plain Text --&gt;&lt;pre style="white-space: pre-wrap;"&gt;\n\n' + plaintext + GCBnrPre + fineprint +'\n\n&lt;/pre&gt;\n\n&lt;!-- Rich Text --&gt;\n\n' +richtext + GCBnrRich + '&lt;div style="padding: 10px 0 10px 0; margin-top:10px; font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 10px; color: #333333; border-top:#e2e2e2 solid 1px;"&gt;\n\n' + fineprint3 + '\n\n&lt;/div&gt;\n\n';
				
		
		/*messages*/
		var messages = [
			"The Sugar Hill Gang's 'Rapper's Delight' (1979) is said to be the first rap recording.",
			"Unlike most cats, tigers love the water and can easily swim three or four miles.",
			"The ancient Egyptian language was a mix of Cushitic and Berber languages from North Africa and a few words from Semitic languages in Asia.",
			"The average human needs 18,250 gallons for an 80 year lifespan.",
			"The first Emmy Award, presented in 1949, went to a puppet.",
			"The ancient Greeks used to make dice out of sheep's shoulder blades.",
			"Gar-E never lies.",
			"Termites eat wood twice as fast when they listen to heavy metal music.",
			"If slime moulds are cut into pieces and placed in a labrynith with food, bacteria for them, the pieces will reassemble and head for the food.",
			"Jupiter's moon Ganymede is the only magnetic moon in the solar system.",
			"McGuffins are diversionary props in stories, such as the briefcase in 'Pulp Fiction' or the falcon in the 'Maltese Falcon'. Master of the form Alfred Hitchcock coined the word.",
			"The Great Wall of China can not be seen from outer space.",
			"The first item scanned in a supermarket was a pack of Wrigley's Juicyfruit gum at a Mars supermarket.",
			"Al Capone's business card said that he was a used furniture dealer.",
			"101 Dalmatians and Peter Pan (Wendy, et al) are the only two Disney cartoon features with both parents that are present and don't die during the movie.",
			"The name Wendy was made up for the book 'Peter Pan.'",
			];
			
			var dir = '<img src="http://www.garnethill.com/wcsstore/images/GarnetHill/_media/_assets/hal9000.png"><span style="color: #0099ff;">"Did you Know?" with</span><span style="color: #75ca30;"> Gar-</span><span style="color: #FF7F00;">E</span>...<br><br><span style="color: #cdcd66; left:50px;"> ';
			
			
			var fullMessage = '';
			var ranMessage = 'Failed to communicate with satellite. Retry? [Y/N]';
			var brk = '</span>';
			
		function getMessage() {
		   ranMessage = messages[Math.floor(Math.random() * messages.length)];
		   fullMessage = dir + ranMessage + brk;
		   return fullMessage;

		};
		
		function timedMsg(){
			
			$("#message").html(getMessage());
			$("#message").fadeIn(1000);
		};
		
		
		$("#Table_01").after(output);
		$("#Table_01").hide().delay(500).queue(function() {
			timedMsg();
		});
		$("#message").click( function(){
			$("#message").html(getMessage());
		})
		
}
	
})();
