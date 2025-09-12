
// Smooth scrolling for navigation
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

        const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;


darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark');
    if (body.classList.contains('dark'),logo1.style.display === "none") {
        logo1.style.display = "block";
        logo2.style.display = "none";
        darkModeToggle.textContent = '☀️';
        localStorage.setItem('theme', 'dark');
    } else {
        darkModeToggle.textContent = '🌙';
        localStorage.setItem('theme', 'light');
        logo1.style.display = "none";
        logo2.style.display = "block";
    }
});


        // Form submission alert
        document.getElementById('contactForm').addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Mensagem enviada! Obrigado pelo contato.');
            e.target.reset();
        })
           

function dark() {
    let body = document.querySelector('');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "";
    } 
}            

function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "";
        
    }
} 

function apertado() {
    let menuMobile = document.querySelector('.mobile-menu.open');
    if (menuMobile.classList.remove('open'));}
    


function abrirPDF(caminho) {
      document.getElementById("iframe-pdf").src = caminho;
      document.getElementById("pdf-modal").style.display = "flex";
      document.body.style.overflow = "hidden"; // 🔒 trava rolagem
    }

    function fecharPDF() {
      document.getElementById("pdf-modal").style.display = "none";
      document.getElementById("iframe-pdf").src = "";
      document.body.style.overflow = "auto"; // 🔓 libera rolagem
    }    


    function animateProgressBars() {
        const skillsSection = document.getElementById('skills');
        const progressBars = document.querySelectorAll('.progress-bar');
        // Verifica se a seção skills está visível na viewport
        const rect = skillsSection.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        if (rect.top <= windowHeight && rect.bottom >= 0) {
            progressBars.forEach(bar => {
                const targetWidth = bar.getAttribute('data-progress');
                bar.style.transition = 'width 2s ease-in-out';
                bar.style.width = targetWidth + '%';
            });
            // Remove o event listener para não animar novamente
            window.removeEventListener('scroll', animateProgressBars);
        }
    }
    window.addEventListener('scroll', animateProgressBars);
    // Também chama ao carregar a página, caso já esteja visível
    window.addEventListener('load', animateProgressBars);





    

//-----------------------------------email---------------------------------------//
emailjs.init("2uJP0Vj14JDUDqEdz");

document.getElementById("conectar").addEventListener("submit", function (event) {
  event.preventDefault();

  const formData = {
    name: document.getElementById('nome').value,
    email: document.getElementById('e-mail').value,
    subject: document.getElementById('subject').value,
    mensagem: document.getElementById('mensagem').value,
  }
  
  const serviceID = "service_ks8j95p";
  const templateID = "template_inxjexh";
  const submitButton = document.getElementById("btn-enviar");
  

  emailjs.send(serviceID,templateID, formData)
.then (() => {
          Toastify({
            text: "E-mail enviado com sucesso!",
            style: {
                background: "#28a745",
                color: "#f4f4f4"
               },
         }). showToast();

         document.getElementById("conectar").reset();
    })

    .catch((error) => {
      Toastify({
            text: "Erro ao enviar o E-mail!",
            style: {
                background: "#ff0000ff",
                color: "#f4f4f4"
               },
         }). showToast();
      console.error("Erro no envio", error);
      
    })

    .finally(() => {
        submitButton. textContent = "Mensagem Enviada"

    })

});

 //-----------------------------------email---------------------------------------//














