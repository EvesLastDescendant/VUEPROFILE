Vue.component('navbarcomponent', {
    template: `
        <nav class='container-fluid bg-dark navbar navbar-expand-sm shadow' id="navbar">
            <div class="container-fluid">
                <div class="container-fluid-sm my-name">
                    <h5><a href="" class="text-decoration-none text-white">{{letter}}</a></h5>
                </div>
            </div>
        </nav>
    `,
    data() {
        return {
            letter: 'IPA',
        }
    }
})
Vue.component('skillscomponent', {
    template: `
        <div class="container-fluid text-center text-white pt-4" id="skills"> 
            <div class="mx-auto shadow-lg abb">
                <p class="display-6">IPA</p>
            </div>
            <div class="container p-5">
                <p class="h4 w-50 mx-auto text-break">{{messageOne}}</p>
                <p class="w-50 mx-auto text-break">{{messageTwo}}</p>
                <button type="button" class="border-0 rounded" id="button"><a href="mailto:itspeterisaiah@gmail.com" class="text-decoration-none fw-bold text-white" target="_blank">Contact Me</a></button>
            </div>
            <br>
            <div class="mx-auto">
                <i class="img-fluid me-5 fa-brands fa-html5"></i>
                <i class="img-fluid me-5 fa-brands fa-css3-alt"></i>
                <i class="img-fluid me-5 fa-brands fa-square-js"></i>
                <iconify-icon class="img-fluid" icon="logs:typescript-icon"></iconify-icon>
                <i class="img-fluid me-5 fa-brands fa-node"></i>
                <i class="img-fluid me-5 fa-brands fa-react"></i>
                <i class="img-fluid me-5 fa-brands fa-bootstrap"></i>
                <iconify-icon class="img-fluid" icon="simple-icon:tailwindcss"></iconify-icon>
            </div>
            <div class="container-fluid border-bottom border-secondary shadow-lg"></div>
        </div>
    `,
    data() {
        return {
            messageOne: "As a frontend developer, I specialize in building and maintaining the user interface of web applications.",
            messageTwo: "I have a strong foundation in HTML, CSS, JavaScript. I am skilled in creating interactive and visually appealing websites."
        }
    }
})

Vue.component('aboutcomponent', {
    template: `
        <div class="container-fluid text-white p-3" id="about">
            <div class="container">
                <div class="row g-3 justify-content-between">
                    <div class="col-6">
                        <h3 class="fw-bold">About</h3>
                        <div class="container-fluid">
                            <p class="text-break">{{ text }}</p>
                        </div>
                    </div>
                    <div class="col-6 text-end">
                        <div class="p-2">
                            <img :src="image" alt="pic" class="img-fluid rounded-circle" width="200px"/>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container-fluid border-bottom border-secondary shadow-lg"></div>
        </div>
    `,
    data() {
        return {
            text: 'Hi, my name is Isaiah Peter and I am a web developer with over 3 years of experience in the field. I specialize in front-end development and have a strong background in ReactJS, TypeScript , TailWindCSS, Bootstrap. I am always looking to learn and grow as a developer, and I am excited to work on new and challenging projects.',
            image: './assets/pic.jpg'
        }
    }
})

Vue.component('projectcomponent', {
    template: `
        <div class="container-fluid text-white pt-3" id="projects">
            <div class="container">
                <div class="row gx-3 justify-content-between">
                    <div class="col-5 col-3-sm">
                        <h3 fw-bold="bold">Projects</h3>
                        <ol>
                            <li v-for="(project, index) in projects" 
                                :key="projectLink" 
                                class="mb-3 project-links"
                                @mouseover="showProjectPreview(index)"
                            >
                                    <div class="border-bottom border-white">
                                        <a :href="project.projectLink" class="text-white text-decoration-none">
                                            {{project.projectName}}
                                            <i class="fa-solid fa-play"></i>
                                        </a>
                                    </div>
                            </li>
                        </ol>
                    </div>
                    <div class="col-7 col-9-sm text-end">
                        <h3 class="fw-semibold">Project Preview</h3>
                        <div class="p-3">
                            <img :src="image" alt="project preview" class="img-fluid" width="250px"/>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container-fluid border-bottom border-secondary shadow-lg"></div>
        </div>
    `,
    data() {
        return {
            index: 0,
            selectedProject: 0,
            projects : [
                {
                    projectName: 'Tenzies Game',
                    projectLink: 'https://come-play-tenzies.netlify.app/',
                    projectPreview: './assets/tenzies.png'
                },
                {
                    projectName: 'Password Generator Website',
                    projectLink: 'https://pass-word-gen-app.netlify.app/',
                    projectPreview: './assets/pg.png'
                },
                {
                    projectName: 'Contact Widget',
                    projectLink: 'https://ipa-contacts-app.netlify.app/',
                    projectPreview: './assets/ca.png'
                },
                {
                    projectName: 'Meme Generator Website',
                    projectLink: 'https://memegenlumi.netlify.app/',
                    projectPreview: './assets/meme.png'
                }
            ]
        }
    },
    methods: {
        showProjectPreview(index) {
            this.selectedProject = index
            console.log(index)
        }
    },
    computed: {
        image() {
            return this.projects[this.selectedProject].projectPreview
        }
    }
})

Vue.component('footercomponent', {
    template: `
        <footer class="container-fluid pt-5 text-white">
            <div class="container text-center">
                <button type="button" class="btn border-white rounded px-4">
                    <a href="https://www.linkedin.com/in/apoo-isaiah" class="text-decoration-none text-white">Contact Me</a>
                </button>
                <div>
                    <p class="fw-bold mt-2">Want me building stuff for you? Hit me on Linkedin</p>
                </div>
            </div>
            <br> <br> <br>
            <div class="container text-center">
                <div>
                    <p class="fw-bold">follow me!</p>
                </div>
                <div class="mx-auto">
                    <a href="https://www.github.com/EvesLastDescendant" target="_blank" class="text-white"><i class="fa-brands fa-github"></i></a>
                    <a href="https://www.twitter.com/clydendnobonnie" target="_blank" class="text-white"><i class="fa-brands fa-twitter"></i></a>
                    <a href="https://codepen.io/eveslastdescendant" target="_blank" class="text-white"><i class="fa-brands fa-codepen"></i></a>
                </div>
            </div>
        </footer>
    `
})

const app = new Vue ({
    el: "#app",
    
})