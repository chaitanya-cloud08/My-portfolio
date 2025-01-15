const toggleButton = document.getElementById("hamburger-toggle");
        const menu = document.getElementById("menu");
      
        toggleButton.addEventListener("click", () => {
          menu.classList.toggle("hidden");
        });
// Select the button and icon
const themeToggleButton = document.getElementById("theme-toggle");
var github=document.getElementById("github");
var linkedin= document.getElementById("linkedin");
var mail=document.getElementById("mail");
// Add event listener for button click
themeToggleButton.addEventListener("click", () => {
  // Toggle the dark mode class
  document.documentElement.classList.toggle("dark");

  // Change the icon based on the current mode
  if (document.documentElement.classList.contains("dark")) {
    themeToggleButton.textContent = "light_mode";
     themeToggleButton.style.color = "white"; 
     github.src="/assets/github-dark.png";
     linkedin.src="/assets/linkedin-dark.png";
     mail.src="/assets/mail-dark.png";
  } else {
    themeToggleButton.textContent = "dark_mode"; 
    themeToggleButton.style.color = "black"; 
    github.src="/assets/github-light.png";
    linkedin.src="/assets/linkedin-light.png";
    mail.src="/assets/mail-light.png";
  }
});
function MedAccess()
{
    window.location.href="https://github.com/chaitanya-cloud08/MedAccess";
}
function WeatherVue()
{
    window.location.href="https://github.com/chaitanya-cloud08/CBTCIP/tree/main/WeatherVue";
}

const slides = document.querySelector('.slides');
  const dots = document.querySelectorAll('.dot');
  let currentIndex = 0;

  // Function to update the active slide
  const updateSlide = (index) => {
    slides.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach((dot, i) => {
      dot.classList.toggle('bg-white', i === index);
      dot.classList.toggle('bg-gray-400', i !== index);
    });
  };

  // Add click event to dots
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      currentIndex = index;
      updateSlide(currentIndex);
    });
  });

  // Initialize the first slide as active
  updateSlide(currentIndex);

 // Register GSAP ScrollTrigger
 

