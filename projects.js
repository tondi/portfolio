function ProjectsComponent() {
    var projects = [
        // {
        //     src: 'https://github.com/tondi/air-info',
        //     demo: 'https://tondi.pl/powietrze',
        //     image: 'air-info.png',
        //     description: 'Current and historical air pollution statistics for Krakow',
        // },
        {
            src: 'https://github.com/tondi/rosetheme2/tree/master/css/src',
            demo: 'https://psycholog-roza.pl',
            image: 'centrumroza.png',
            description: 'Mobile first WP Theme',
        },
        {
            customTemplate: `<div class="project">
                <div class="graphics-container">
                    <div class="graphics">
                        <img src="assets/photoshop.svg" alt="">
                        <img src="assets/illustrator.svg" alt="">

                    </div>

                </div>
                <div class=" project__links-container ">
                    <a target="_blank " href="https://drive.google.com/open?id=0B6cSjjC-go6yNHkyZllndl9lRTg" class="project__links "><i class="fa fa-paint-brush"></i>
                    <span class="project__links__text ">Google Drive</span>
                    </a>

                </div>
                <div class="project__description-container ">
                    <span class="project__description__text ">
                        Web design & other Projects
                    </span>
                </div>
            </div>`
        },
        {
            src: 'https://github.com/tondi/bob-the-builder',
            demo: 'http://tondi.pl:6010/',
            image: 'bob-the-builder.png',
            description: 'three.js, Socket.IO, MongoDB, Node.js. Fast login: \'admin admin\'',
        },
        {
            src: 'https://github.com/tondi/threejs-game',
            demo: 'https://tondi.github.io/threejs-game/',
            image: 'threejs-game.png',
            description: 'three.js game. Models, Lights, Vectors, Player Movement, Async Loading',
        },
        {
            src: 'https://github.com/tondi/the-speedway',
            demo: 'https://tondi.github.io/the-speedway/',
            image: 'the-speedway.png',
            description: 'HTML5 Canvas Game',
        },
        {
            src: 'https://github.com/tondi/checkers',
            demo: 'http://tondi.pl:6020',
            image: 'checkers.png',
            description: 'Multiplayer Checkers Game in three.js. HTTP, AJAX, JSON, socket.io',
        },
        {
            src: 'https://github.com/tondi/level-editor',
            demo: 'https://tondi.github.io/level-editor/',
            image: 'level-editor.png',
            description: 'Level editor to "threejs-game". Outputs JSON to be used to generate terrain',
        },
        {
            src: 'https://github.com/tondi/tondi.github.io/tree/master/dratewka',
            demo: 'https://tondi.github.io/dratewka/',
            image: 'dratewka.png',
            description: 'Old text-based Atari game rewritten in Javascript. ',
        },
        {
            src: 'https://github.com/tondi/tondi.github.io/tree/master/click-n-slide',
            demo: 'https://tondi.github.io/click-n-slide/',
            image: 'click-n-slide.png',
            description: 'Click\'n\'Slide game in Javascript. Old ES5 project',
        },
    ];

    function render() {
        return projects.map(function(project) {
                return project.customTemplate || `
                <div class="project">
                    <img src="assets/${project.image}" alt="${project.image}">
                    <div class="project__links-container">
                        <a target="_blank" href="${project.src}" class="project__links"><i class="fa fa-github"></i>
                            <span class="project__links__text">Github</span>
                        </a>
                        <a target="_blank" href="${project.demo}" class="project__links"><i class="fa fa-external-link"></i>
                            <span class="project__links__text">Preview</span>
                        </a>

                    </div>
                    <div class="project__description-container">
                        <span class="project__description__text">
                        ${project.description}
                        </span>
                    </div>
                </div>
            `
            })
            .concat('<div class="fill-space"></div><div class="fill-space"></div><div class="fill-space"></div>')
            .join('\n');
    }

    return render();
}

function appendProjects() {
    var hook = document.querySelector('#js-projects');
    var container = hook.parentElement;
    var projectsTemplate = ProjectsComponent();

    var dom = document.createElement('section');
    dom.classList.add('project-container');
    dom.innerHTML = projectsTemplate;

    hook.remove();
    container.appendChild(dom);
}

appendProjects();