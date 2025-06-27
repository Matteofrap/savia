// TIMER
function showTime () {
  const now = moment(new Date()) //todays date
  const futureDate = moment('2025-07-28') // Préciser la date de l'événement au format anglais (yyyy-mm-dd)
  const duration = moment.duration(futureDate.diff(now)) // Calcule la difference entre la date visé et aujourd'hui (maintenant)
  const timeDiv = document.getElementById('time') // Récupère l'élément où afficher le décompte
  timeDiv.innerHTML = `${futureDate.diff(
    now,
    'days'
  )}<span class='time-units'>J</span> ${duration.hours()}<span class='time-units'>H</span> ${duration.minutes()}<span class='time-units'>M</span> ${duration.seconds()}<span class='time-units'>S</span>`
  window.setTimeout('showTime();', 1000) // L'affichage se met à jour chaque seconde
}

showTime()


// Scroll to top
const scrollToTopButton = document.getElementById("scrollToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 700) {
    scrollToTopButton.style.display = "block";
  } else {
    scrollToTopButton.style.display = "none";
  }
});

scrollToTopButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});


// Start Slide text anim when on screen

const startAnimation = (entries, observer) => {
  entries.forEach(entry => {
    entry.target.classList.toggle("rond-upscale", entry.isIntersecting);
  });
};

const observer = new IntersectionObserver(startAnimation);
const options = { root: null, rootMargin: '0px', threshold: 1 }; 

const elements = document.querySelectorAll('.rond');
elements.forEach(el => {
  observer.observe(el, options);
});


