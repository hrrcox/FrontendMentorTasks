document.addEventListener('DOMContentLoaded', function () {

    const share = document.querySelector('.share');
    const options = document.querySelector('.share-expand')

    share.addEventListener('click', () => {
        options.classList.toggle('active');
        const isExpanded = options.classList.contains('active');
        share.setAttribute('aria-expanded', isExpanded);
    });
});