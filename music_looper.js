
	const instruments = document.querySelectorAll('.instrument');
	const navItems = document.querySelectorAll('.has-children ');
	const aNavItems = document.querySelectorAll('.category');
	const divInstrument = document.querySelector('.instruments');
	const buttonPlay = document.querySelector('.play');
	const buttonStop = document.querySelector('.stop');
	const form = document.querySelector('form');
	const range = document.querySelector('.bpm');



	var bpm = 60;
	var focusChecboxes;
	let countdown;

	var i = 0;



/* Loop Part*/
	
	function playSound(input){
		
		
	const audio = document.querySelector(`audio[data-key="${input.dataset.key}"]`);
	
		if(!audio) return; // stop the function from running all together
		
			
			audio.currentTime = 0;

			audio.play();
			
			input.classList.add('playing');
			input.classList.add('focus');	
					
	
	}

	function stopSound(input)
	{
		const audio = document.querySelector(`audio.${input.className}, [value${input.value}]`);
		
		if(!audio) return; // stop the function from running all together
			
			audio.currentTime = 2;

			audio.pause();
			input.classList.remove('focus');
			input.classList.remove('playing');
	
	}


function getInputValue(i){
	
	
	 focusChecboxes = document.querySelectorAll(`input[value="${i}"]`);
	
		focusChecboxes.forEach(function(focus){

			const child = focus;
			const checked = child.checked;
			const input = child.value;

			if (checked == true ) {
														
					playSound(child);
					child.classList.remove('focus')
					child.classList.remove('playing')						
											
			}else{
				
			}
			
	});
	
}	

function getAllInputValue(){

		getInputValue(i);
		
		if(i == 10 ){
		
			i = 0;
			return i ;
		}	
		i++;

}

function startLoop(i){
		
		clearInterval(countdown);
			countdown =	setInterval(function(){
				
				getAllInputValue();
				
		}, 60000 / bpm  );


}

function handleRangeUpdate(){

	form[this.name] = this.value;	
	bpm = this.value;

	this.innerHTML = bpm;
}
	
function stopLoop(e){

	clearInterval(countdown);
	i=0;
}
	
	
/*Load Sound Part*/
function createButtonsNavSounds(items, id){
			var index = 0;
			var buttonsNavPlay;
			var buttonsNavAdd;
			
             	items.forEach(function(item){
                             	        			
                     if(item.value === 1){
             			return;
             		}else if(!item.classList.contains('button')){
             
	             		var buttonAdd = document.createElement('button');
	             		var buttonPlay = document.createElement('button');
	             		let audio = document.createElement('audio');
	             	

	             		buttonAdd.innerHTML = "Add";
	             		buttonPlay.innerHTML = "Listen";
	             		buttonPlay.setAttribute('class', 'nav-button-play');
	             		buttonPlay.setAttribute('data-key', `${id}-${index}`)
	             		buttonAdd.setAttribute('class', 'nav-button-add');
	             		buttonAdd.setAttribute('data-key', `${id}-${index}`);
	             		audio.setAttribute('src', `../sounds/${id}/${item.innerText}`);
	             		audio.setAttribute('data-key', `${id}-${index}`);

						item.appendChild(buttonAdd);
						item.appendChild(buttonPlay);
						item.appendChild(audio);
						item.setAttribute('value', '1');
						index++;
						
					}

             		
             	});
             		
						getAllButtonAddNav();
						getAllButtonsPlayNav();
					
												
}

function getAllButtonsPlayNav(buttonsNavPlay){
		buttonsNavPlay = document.querySelectorAll('.nav-button-play');
		
		buttonsNavPlay.forEach(function(button){

			button.addEventListener('click',function(e){

				playSound(button);
			});
		});

		
}
function getAllButtonAddNav(){
	buttonsNavAdd = document.querySelectorAll('.nav-button-add');
		
		buttonsNavAdd.forEach(function(button){

			button.addEventListener('click',function(e){
				createLineSound(button.parentNode);
			});
		});
}

function createLineSound(button){
	
	var div = document.createElement("div");
	let audio = document.createElement('audio');
	var label = document.createElement('label');
	
	var audioSource = button.querySelector('audio').src;
	var dataKey = button.querySelector('button').dataset.key;


	div.setAttribute('class', 'instrument');
	label.innerHTML = `${dataKey}`;

	audio.setAttribute('src', `${audioSource}`);
	audio.setAttribute('data-key', `${dataKey}`);

	divInstrument.appendChild(div);
	div.appendChild(label);
	for(i = 0; i < 10; i++){

		var input = document.createElement("input");
		input.setAttribute("type", 'checkbox');
		input.setAttribute('value', `${i}`);
		input.setAttribute('data-key', `${dataKey}`);
		div.appendChild(input);

	}

	div.appendChild(audio);


}

function getAllSoundsNamesById(id){

	$.ajax({
		
		url : `../sounds/${id}/`,
		type:"GET",
		async: true,   // asynchronous request? (synchronous requests are discouraged...)
        cache: false,   // with this, you can force the browser to not make cache of the retrieved data
      	dataType: "html",  // jQuery will infer this, but you can set explicitly
        success: function( data, textStatus, jqXHR ) {
            var resourceContent = data; // can be a global variable too...
            // process the content...
   
            //data.find("li")
             $(resourceContent).find(`a:contains(${id})`).each(function(){

		        // will loop through 
		       
		        var sounds = $(this).attr("href");
		        	
		        	$('<li class="sous-item"></li>').html(sounds).appendTo(`li#${id} ul`);

		     });

		     		
             	const sousItems = document.querySelectorAll('.sous-item');

             	createButtonsNavSounds(sousItems, id);
            
				
        },
        error: function (data, textStatus, jqXHR, xhr) {
             
        }
	});


}




	buttonPlay.addEventListener('click', startLoop);
	buttonStop.addEventListener('click', stopLoop);
	


	range.addEventListener('change', handleRangeUpdate);

	aNavItems.forEach(aNavItem => aNavItem.addEventListener('click', function(e){

		var instrumentName = this.name;
	
		navItems.forEach(function(navItem){
							
			if(navItem.classList.contains('active') === true && navItem.id == instrumentName ){
					
					let node = navItem.querySelector('ul');	
							
					node.parentNode.removeChild(node);

					const sousItems = document.querySelectorAll('.sous-item');	
					sousItems.forEach(function(sousItem){
	             
						sousItem.parentNode.removeChild(sousItem);
						
	             		
	             	});		
					navItem.classList.remove('active');

				}else if(navItem.classList.contains('active') === false && navItem.id === instrumentName ){
																												
							navItem.classList.add('active');
							let node = document.createElement('ul');
							document.getElementById(navItem.id).appendChild(node);
							getAllSoundsNamesById(navItem.id);
								
		
					
				}
		
		});

	}));
	