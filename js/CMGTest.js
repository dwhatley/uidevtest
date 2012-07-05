/* javaScript Code */
function enlargePhoto(idLargePhoto,urlLargePhoto)
{//Display a larger version of the photo  
	  if(urlLargePhoto == '')
	  {//no photo passed 
	    alert('A larger image is not available');
	  }
	  else if(idLargePhoto == '')
	  {//not coded
	  	alert('Photo enlargement not available');
	  }
	  return;
}


/* jQuery Code */
$(document).ready(function(){ 
	$("#idArticleMenuSize").click(function()
  {//Toggle text size and set matching menu item 
     if ($("#idArticleText").css('font-size') == '14px') 
     {//Set Large Font
        $("#idArticleText").css('font-size', '16px'); 
       $(this).css({'background':'url(../images/sprites.gif)0px -435px','background-repeat': 'no-repeat'});
        $("#idArticleMenuSize").html('Smaller type');
     }else
     {//Set Small Font
     	 $("#idArticleText").css('font-size', '14px'); 
     	 $(this).css({'background':'url(../images/sprites.gif)0px -390px','background-repeat': 'no-repeat'});
     	 $(this).html('Larger type');
     }
   }
  );



});
