/*====================== EMAIL JS ==================*/
const contactForm = document.getElementById('contact-form');
const contactMessage = document.getElementById('contact__message');


const sendEmail = (e) => {
    e.preventDefault();

    // serviceID - templeteID - #form - publicKey
    emailjs.sendForm('service_8hr7zoq', 'template_9wdv2wf', '#contact-form', 'bE7-9evpyISEjpBhL')
    
    .then(() => {
        // show send message
        contactMessage.textContent = 'Message sent successfully ✅'

        // Remove message after five seconds
        setTimeout(() => {
            contactMessage.textContent = '';
        }, 5000)
        // Clear input fields

        contactForm.reset()
    }, () => {
        // Show error message
        contactMessage.textContent = 'Message not sent (service error) ❌'
    })
}

contactForm.addEventListener('submit', sendEmail);

/*====================== SHOW SCROLL JS ==================*/

const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')

    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll') 
    : scrollUp.classList.remove('show-scroll')
 }

window.addEventListener('scroll', scrollUp)


/*====================== SCROLL SECTION ACTIVE LINK JS ==================*/

const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollDown = window.scrollY

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__list a[href*=' + sectionId + ']')

		if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)

/*====================== SCROLL REVEL ANIMATION JS ==================*/