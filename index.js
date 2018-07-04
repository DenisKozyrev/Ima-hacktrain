class Landing {
    constructor() {
        this.hackatrainNavigation = document.getElementById('hackatrainNav');
        this.navigationIcon = document.getElementById('navigationIcon');
        this.navigationLinkCollection = document.querySelectorAll('#navigationLink');
        this.linkAnchorsCollection = document.getElementsByName('anchor');
        this.muteButton = document.getElementById('trainPauseButton');
        this.trainVideo = document.getElementById('trainVideo');
        this.contentWrapper = document.getElementById('contentWrapper');
        this.logoLink = document.getElementById('logoLink');
        this.anchorHome = document.getElementById('anchorHome');
        this.navigationBlockInit();
        this.navigationLinkInit();
        this.trainAnimationInit();
    }

    navigationBlockInit() {
        this.navigationIcon.addEventListener('click', () => {
            this.navigationIcon.classList.toggle('change');
            this.hackatrainNavigation.classList.add('dropdown-nav');
            if (this.navigationIcon.classList.contains('change')) {
                this.hackatrainNavigation.classList.add('dropdown-nav-display');
                this.hackatrainNavigation.classList.remove('dropdown-nav-hide');
            } else {
                this.hackatrainNavigation.classList.remove('dropdown-nav-display');
                this.hackatrainNavigation.classList.add('dropdown-nav-hide');
            }
            this.hackatrainNavigation.addEventListener('webkitAnimationEnd', () => {
                this.hackatrainNavigation.classList.remove('dropdown-nav-hide');
            });
        });
    }

    navigationLinkInit() {
        this.logoLink.addEventListener('click', () => {
            window.scrollBy({
                top: this.anchorHome.offsetTop - window.pageYOffset,
                behavior: 'smooth'
            });
        })
        this.navigationLinkCollection.forEach((link, index) => {
            const linkCoordinate = this.linkAnchorsCollection[index].offsetTop;
            link.addEventListener('click', () => {
                window.scrollBy({
                    top: linkCoordinate - window.pageYOffset,
                    behavior: 'smooth'
                });
                this.navigationIcon.classList.toggle('change');
                this.hackatrainNavigation.classList.remove('dropdown-nav-display');
                this.hackatrainNavigation.classList.add('dropdown-nav-hide');
            });
        });
    }

    trainAnimationInit() {
        this.trainVideo.volume = 0.03;
        if (document.documentElement.clientWidth >= 1024) {
            this.trainVideo.play();
        };
        this.muteButton.addEventListener('click', () => {
            this.muteButton.classList.toggle('volume-on');
            this.trainVideo.muted = !this.trainVideo.muted;
        });
    }
}

const landing = new Landing();