// loading icon
document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {  
        document.getElementById("loading").style.display = "none";
    }, 500); // Small delay to ensure all elements load
});



let hasAnimated = false;

function animateNumbers() {
    if (hasAnimated) return;
    hasAnimated = true;

    const columns = document.querySelectorAll('.column');
    columns.forEach(column => {
        let target = parseInt(column.getAttribute('data-target'));
        let count = 0;
        let step = target / 100; 
        let interval = setInterval(() => {
            count += step;
            column.childNodes[0].textContent = Math.floor(count) + "+";
            if (count >= target) {
                column.childNodes[0].textContent = target + "+";
                clearInterval(interval);
            }
        }, 20);
    });
}

function isVisible(el) {
    const rect = el.getBoundingClientRect();
    return rect.top < window.innerHeight && rect.bottom >= 0;
}

window.addEventListener('scroll', () => {
    const bar = document.getElementById('numberBar');
    if (isVisible(bar)) {
        animateNumbers();
    }
});

  // Image bending effect
  const img = document.getElementById('bendImage');
  img.addEventListener('mousemove', (event) => {
      const rect = img.getBoundingClientRect();
      const offsetX = (event.clientX - rect.left - rect.width / 2) / 20;
      const offsetY = (event.clientY - rect.top - rect.height / 2) / 20;
      img.style.transform = `rotateX(${offsetY}deg) rotateY(${offsetX}deg)`;
  });

  img.addEventListener('mouseleave', () => {
      img.style.transform = 'rotateX(0deg) rotateY(0deg)';
  });


