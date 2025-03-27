document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.querySelector('.main-search-input');
    const mangaItems = document.querySelectorAll('.wrapper__item');
    
    function filterManga() {
        const searchTerm = searchInput.value.toLowerCase().trim();
        
        mangaItems.forEach(item => {
            const title = item.querySelector('.wrapper__item__title').textContent.toLowerCase();
            if (title.includes(searchTerm)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    }
    
    searchInput.addEventListener('input', filterManga);
});