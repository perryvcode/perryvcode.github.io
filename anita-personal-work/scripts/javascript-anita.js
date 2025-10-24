// ============================
// Anita Hagh Personal Site JS
// Mobile + Desktop Compatible
// Smooth Expand/Collapse + Touch Hover
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

  // Initial state
  hiddenRows.classList.add('collapsed');

  expandButton.addEventListener('click', () => {
    expanded = !expanded;

    if (expanded) {
      hiddenRows.classList.remove('collapsed');
      hiddenRows.classList.add('expanded');
      expandButton.src = expandButton.dataset.active;
    } else {
      hiddenRows.classList.remove('expanded');
      hiddenRows.classList.add('collapsed');
      expandButton.src = 'images/show-more-button.png';
    }
  });

  // Hover effects for expand button
  expandButton.addEventListener('mouseenter', () => {
    if (window.matchMedia('(hover: hover)').matches) {
      expandButton.src = expanded
        ? expandButton.dataset.activeHover
        : expandButton.dataset.hover;
    }
  });

  expandButton.addEventListener('mouseleave', () => {
    if (window.matchMedia('(hover: hover)').matches) {
      expandButton.src = expanded
        ? expandButton.dataset.active
        : 'images/show-more-button.png';
    }
  });
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
