(function () {
    let tabsControls = document.querySelector('.tabs__controls'),
        tabsItems = document.querySelectorAll('.tabs__tab');

    tabsControls.addEventListener('click' , changeTab);

    function changeTab(e) {
        // if clicked elem already active return
        if (e.target.classList.contains('active')) return false;

        // if clicked elem is tabs conrol continue
        if (!e.target.classList.contains('tabs__control') && e.target.tagName !='SPAN') return false;

        let tabIndex = e.target.dataset.tabControl;
        
        // remove active tab and add active class to new tab
        document.querySelector('.tabs__tab.active').classList.remove('active');
        document.querySelector('.tabs__control.active').classList.remove('active');

        setTimeout(() => {
            tabsItems[+tabIndex].classList.add('active');
            tabsControls.children[tabIndex].classList.add('active');
        }, 125);
    }
})();