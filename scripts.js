const portfolio = {};

portfolio.portfolioArray = [
    {
        title: 'Shopper Mapper',
        url: "assets/portfolio-preview-five.png",
        alt: "Shopper Mapper",
        live: "https://shopper-mapper.github.io/shopper-mapper/",
        github: "https://github.com/shopper-mapper/shopper-mapper",
        description: "Sometimes you don't want to go to the coolest, newest place. Shopper Mapper is the app for you! Made by Anny Pham, Yuliana Hazda, Allan Limitless, and Edward Bacal.",
        language: "HTML | CSS | ReactJS | API | Mob Programming",
        aos: 'fade-right',
    },
    {
        title: 'Pic-draw-sso',
        url: "assets/portfolio-preview-four.png",
        alt: "Pic-draw-sso",
        live: "https://annyup.github.io/pic-draw-sso/",
        github: "https://github.com/annyup/pic-draw-sso",
        description: "Are you the next Picasso? Pic-draw-sso is a fun and interactive drawing app for you to doodle and upload to a gallery to share with the world!",
        language: "HTML | CSS | ReactJS | Firebase",
        aos: 'fade-left',
    },
    {
        title: 'Emoji Image Gallery',
        url: "assets/portfolio-preview-three.png",
        alt: "Emoji Image Gallery",
        live: "https://anny-hector.github.io/emoji-image-gallery/",
        github: "https://github.com/anny-hector/emoji-image-gallery",
        description: "Are you feeling happy? Festive? Want to see nature? Click on an emoji! Each emoji will load images accordingly. This was made by Anny Pham and Hector Gonzalez.",
        language: "HTML | CSS | SCSS | JavaScript | jQuery | API | Pair Programming",
        aos: 'fade-right',
    },
    {
        title: "I purple you",
        url: "assets/portfolio-preview-two.png",
        alt: "I purple you",
        live: "https://annyup.github.io/annyPhamProjectThree/",
        github: "https://github.com/annyup/annyPhamProjectThree",
        description: "I purple you is a timeline and soundboard dedicated to the Kpop group BTS. Interact with the buttons and listen to a short clip of their music!",
        language: "HTML | CSS | SCSS | JavaScript | jQuery",
        aos: 'fade-left',
    },
    {
        title: `Mindn'Soul`,
        url: "assets/portfolio-preview-one.png",
        alt: "Mindn'Soul",
        live: "https://annyup.github.io/anny-pham-project-two/",
        github: "https://github.com/annyup/anny-pham-project-two",
        description: "Mindn'Soul is a multi page PSD Conversion for a company specializing in health.",
        language: "HTML | CSS | SCSS | PSD Conversion",
        aos: 'fade-right',
    },
]

portfolio.displayImage = function (portfolioArray) {
    portfolioArray.forEach(function (image) {

        
        const photo = $("<img>")
        .addClass("portfolio-img")
        .attr("src", image.url)
        .attr("alt", image.alt);

        const title =$(`<p>`)
            .text(image.title);

        const description = $(`<p>`)
            .text(image.description);
        
        const language = $(`<p>`)
            .text(image.language);

        const liveUrl = $(`<a href="${image.live}" target="_blank"></a>`)
            .addClass("url-button")
            .text("Live");
        
        const gitUrl = $(`<a href="${image.github}" target="_blank"></a>`)
            .addClass("url-button")
            .text("Github");

        const urlButton = $(`<div>`)
            .addClass("url-container")
            .append(liveUrl, gitUrl);

        
      // overlay on top of image displaying info & download
      const overlay = $(`<div>`)
          .addClass("overlay")
          .attr("id", "overlay")
          .append(title, description, language, urlButton);
      
      const portfolioImg = $(`<div>`)
        .addClass("piece")
        .attr("data-aos", image.aos)
        .append(photo, overlay);
  
      $(".portfolio-grid").append(portfolioImg);
      console.log('hello');
    });
};

portfolio.hamburgerMenu = function() {

    const menu = document.getElementById('nav-styles');
    const closeIcon = document.getElementById("toggle");
    
    
    menu.addEventListener('click', handleMenuClick);
    
    function handleMenuClick(event) {
      if (event.target instanceof HTMLAnchorElement) {
          closeIcon.checked = false;
      }
    }
}

portfolio.overlayHover = function() {

    const overlay = document.getElementById('overlay');
    overlay.addEventListener('click', handleOverlay);

    function handleOverlay(event) {
        event.preventDefault();
    }
}

portfolio.typingEffect = function() {

    const typed = new Typed('#typed', {
        stringsElement: '#typed-strings',
        typeSpeed: 100,
        backSpeed: 80,
        smartBackspace: true,
        loop: true,
        backDelay: 2000,
        startDelay: 200
    });
}

portfolio.init = function () {
    portfolio.displayImage(portfolio.portfolioArray);
    portfolio.hamburgerMenu();
    portfolio.typingEffect();
    portfolio.smoothScroll();
    portfolio.overlayHover();
};

AOS.init({
    duration: 1000
});

$(function () {
    portfolio.init();
});