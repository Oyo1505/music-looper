
	const instruments = document.querySelectorAll('.instrument');
	const buttonPlay = document.querySelector('.play');
	const buttonStop = document.querySelector('.stop');
	const form = document.querySelector('form');
	const range = document.querySelector('.bpm')

	var bpm = 60;
	var focusChecboxes ;
	let countdown;

	var i = 0;




	
	function playSound(input){

	const audio = document.querySelector(`audio.${input.className}`);
	
		if(!audio) return; // stop the function from running all together
		
			
				audio.currentTime = 0;

				audio.play();;
			
			input.classList.add('playing');
			input.classList.add('focus');	

		
			
	
	}

	function stopSound(input)
	{
		const audio = document.querySelector(`audio.${input.className}, [value${input.value}]`);
		
		if(!audio) return; // stop the function from running all together
			
			audio.currentTime = 2;

			audio.pause();
			input.classList.remove('focus')
			input.classList.remove('playing')
	
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
				

				getAllInputValue()
					
				
				
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
	
	
	buttonPlay.addEventListener('click', startLoop);
	buttonStop.addEventListener('click', stopLoop);
	

	range.addEventListener('change', handleRangeUpdate);

