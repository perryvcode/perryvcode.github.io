// ============================
// Anita Hagh Personal Site JS
// Mobile + Desktop Compatible
// Fixed Expand/Collapse Button Logic
// ============================

// ---------- IMAGE HOVER HANDLER ----------
document.querySelectorAll('img[data-hover]').forEach(img => {
  const hoverSrc = img.dataset.hover;
  const originalSrc = img.src;

  // Desktop hover
  img.addEventListener('mouseenter', () => {
    if (window.matchMedia('(hover: hover)').matches) img.src = hoverSrc;
  });
  img.addEventListener('mouseleave', () => {
    if (window.matchMedia('(hover: hover)').matches) img.src = originalSrc;
  });

  // Touch devices
  img.addEventListener('touchstart', () => img.src = hoverSrc);
  img.addEventListener('touchend', () => setTimeout(() => (img.src = originalSrc), 200));
});

// ---------- COLLAPSIBLE SECTION ----------
const expandButton = document.querySelector('.expand');
const hiddenRows = document.querySelector('#hiddenRows');

if (expandButton && hiddenRows) {
  let expanded = false;

  // Initialize collapsed
  hiddenRows.classList.add('collapsed');

  const updateButtonImage = (hovering = false) => {
    if (expanded) {
      expandButton.src = hovering
        ? expandButton.dataset.activeHover
        : expandButton.dataset.active;
    } else {
      expandButton.src = hovering
        ? expandButton.dataset.hover
        : 'images/show-more-button.png';
    }
  };

  expandButton.addEventListener('click', () => {
    expanded = !expanded;

    if (expanded) {
      hiddenRows.classList.remove('collapsed');
      hiddenRows.classList.add('expanded');
    } else {
      hiddenRows.classList.remove('expanded');
      hiddenRows.classList.add('collapsed');
    }

    // Always update button image state correctly
    updateButtonImage(false);
  });

  // Hover effects (desktop)
  expandButton.addEventListener('mouseenter', () => {
    if (window.matchMedia('(hover: hover)').matches) updateButtonImage(true);
  });
  expandButton.addEventListener('mouseleave', () => {
    if (window.matchMedia('(hover: hover)').matches) updateButtonImage(false);
  });

  // Touch support: make sure correct image stays after tap
  expandButton.addEventListener('touchstart', () => updateButtonImage(true));
  expandButton.addEventListener('touchend', () => setTimeout(() => updateButtonImage(false), 200));
}

// ---------- SMOOTH SCROLLING ----------
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    e.preventDefault();
    const targetId = anchor.getAttribute('href');
    const targetEl = document.querySelector(targetId);
    if (targetEl) {
      window.scrollTo({
        top: targetEl.offsetTop - 60,
        behavior: 'smooth'
      });
    }
  });
});

// ---------- CONSOLE MESSAGE ----------
console.log('%cSite loaded successfully 🚀', 'color: #7E57C2; font-weight: bold;');
