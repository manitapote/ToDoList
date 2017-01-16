

$(document).ready( 
	
	
		
		function(){
		//localStorage.clear();
		
		//finding the length of localStorage
		console.log('cc'); 
		
		//display the list initially
			for(var i=0;i<localStorage.length;i++) 
			{	
				//getting the item by key i
				var local=localStorage.getItem(String(i));   
				
				//displaying each task in ordered list dynamically with id i , class=nextList, and button with class= del_button
				$('ol').prepend('<li id='+i+' class="nextList">' + local +'<button class="del_button">'+"Delete"+'</button>'+'</li>');  
				//console.log(local);
			}
			
			
			//adding the task when enter key is pressed
			$('input[name=ListItem]').keypress(function(event){   
				//13 the enter key value
				if (event.which==13)   
				{
					//triggering the add click button when enter is pressed
					$("#add_button").trigger("click");  
				}
			})
					
			//function for adding new task when add button is clicked
			$('#add_button').click(
				function(){
					var t=localStorage.length;
                	var toAdd= $('input[name=ListItem]').val();
					if (toAdd)
					{	
						$('ol').prepend('<li id='+t+') class="nextList">' + toAdd +'<button class="del_button">'+"delete"+'</button>'+'</li>');
						
						//store in localstorage
						localStorage.setItem(String(t),toAdd);  
		
					}
					//console.log(localStorage.getItem(String(t)));
				});
			
			
			//function for deleting the task when delete button is clicked
			$(".ol_list").on('click','.del_button',
				function(){
					//console.log("delete button");
					
					//hiding the task associated with parent class=nextList of this button 
					$(this).parent('.nextList').hide();
					
					//acessing the id of li
					var y=Number($(this).parent().attr("id"));
					//console.log(y);
					//console.log(localStorage.length);
					for(var i=y;i<localStorage.length-1;i++)
					{	
						
						localStorage.setItem(String(i),localStorage.getItem(String(i+1)));
						//console.log(localStorage.getItem(String(i)));
					}
					
					
					//removing the last item from the list
					localStorage.removeItem(String(localStorage.length-1));
										
				});
				
			//delete the whole list when delete taskList button is 	clicked
			$("#loadList_del_button").click(function(){
				$(".ol_list").hide();
				localStorage.clear();
				
			});
	})		
			

		
	
		
		