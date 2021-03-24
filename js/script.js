const toggleButton = document.getElementsByClassName('toggle-btn')[0]
const navbarlinks = document.getElementsByClassName('menu')[0]



toggleButton.addEventListener('click',()=>{
	if(navbarlinks.classList.toggle('active')){
		navbarlinks.style.marginTop="70px"
	}
	else{
		navbarlinks.style.marginTop="-417px"
	}
})


const monthly = document.getElementsByClassName('monthly')[0]
const annually = document.getElementsByClassName('annually')[0]

const plan1 = document.getElementsByClassName('amount-1')[0]
const plan2 = document.getElementsByClassName('amount-2')[0]

annually.addEventListener('click',()=>{
	annually.className = "annually active"
	monthly.className = "monthly"
	plan1.innerHTML="$400"
	plan2.innerHTML="$900"
})
monthly.addEventListener('click',()=>{
	monthly.className = "annually active"
	annually.className = "monthly"
	plan1.innerHTML="$50"
	plan2.innerHTML="$99"
})
