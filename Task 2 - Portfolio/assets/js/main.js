
const showMenu = (toggleId, navId) => {
      const toggle = document.getElementById(toggleId),
            nav = document.getElementById(navId)

      if(toggle && nav){
            toggle.addEventListener('click', () =>{
                  nav.classList.toggle('show')
            });
      }
}

showMenu('nav_toggle','nav_menu')

const navLink = document.querySelectorAll('.nav_link')
navLink.forEach(n => n.classList.remove('active'))

function linkAction(){
      navLink.forEach(n => n.classList.remove('active'))
      this.classList.add('active')

      const navMenu = document.getElementById('nav_menu')
      navMenu.classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

document.addEventListener("DOMContentLoaded", function () {
      const words = ["Web Developer", "Web Designer", "Freelancer", "Content Writer"];
      let i = 0; 
      let j = 0; 
      let isDeleting = false 
      const typingSpeed = 150; 
      const deletingSpeed = 100; 
      const delayAfterTyping = 1000; 
      const target = document.querySelector(".home_title-color");
    
      function type() {
        const currentWord = words[i];
        
        if (!isDeleting) {
          target.textContent = currentWord.substring(0, j++); 
          if (j === currentWord.length) {
            setTimeout(() => (isDeleting = true), delayAfterTyping);
          }
        } else {
         
          target.textContent = currentWord.substring(0, j--); 
          if (j === 0) {
           
            isDeleting = false;
            i = (i + 1) % words.length; 
          }
        }
        
      
        setTimeout(type, isDeleting ? deletingSpeed : typingSpeed);
      }
    
     
      type();
    });
    document.getElementById('downloadBtn').addEventListener('click', function(e) {
      e.preventDefault(); 
      const link = document.createElement('a');
      link.href = './assets/your-resume.pdf'; 
      link.download = 'Your_Resume.pdf'; 
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link); 
    });
    
    