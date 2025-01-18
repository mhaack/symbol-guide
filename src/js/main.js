document.addEventListener('DOMContentLoaded', () => {
  // Theme Toggle
  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
  
  // Add click handler to toggle button
  document.getElementById('theme-toggle').addEventListener('click', function() {
    // Toggle theme
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark')
      localStorage.theme = 'light'
    } else {
      document.documentElement.classList.add('dark')
      localStorage.theme = 'dark'
    }
  })

  // Character Copy Functionality
  const copyToast = document.getElementById('copy-toast');
  const characterButtons = document.querySelectorAll('.character-btn');

  characterButtons.forEach(btn => {
    btn.addEventListener('click', async () => {
      const char = btn.dataset.char;
      
      try {
        await navigator.clipboard.writeText(char);
        
        // Visual feedback
        btn.classList.add('copied');
        setTimeout(() => btn.classList.remove('copied'), 500);
        
        // Show toast
        copyToast.classList.remove('translate-y-full', 'hidden');
        setTimeout(() => {
          copyToast.classList.add('translate-y-full', 'hidden');
        }, 2500);
      } catch (err) {
        console.error('Failed to copy:', err);
      }
    });
  });

  // Search Functionality
  const searchInput = document.getElementById('search');
  const characterSections = document.querySelectorAll('.character-section');

  searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();

    characterSections.forEach(section => {
      const buttons = section.querySelectorAll('.character-btn');
      let hasVisibleCharacters = false;

      buttons.forEach(btn => {
        const char = btn.dataset.char;
        const name = btn.dataset.name.toLowerCase();
        const isVisible = char.toLowerCase().includes(searchTerm) || 
                         name.includes(searchTerm);

        btn.classList.toggle('hidden', !isVisible);
        if (isVisible) hasVisibleCharacters = true;
      });

      section.classList.toggle('hidden', !hasVisibleCharacters);
    });
  });
});