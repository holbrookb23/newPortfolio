const projects = [
    {
        name: "Scott's Tots",
        deployed: "https://project-two-threeandalady.herokuapp.com/login",
        repo: "https://github.com/threemenandalady/project-two",
        img: "./assets/img/projects/scottTots.png",

    },
    {
        name: "Weather Week",
        deployed: "https://holbrookb23.github.io/weatherWeek/",
        repo: "https://github.com/holbrookb23/weatherWeek",
        img: "./assets/img/projects/weatherWeek2.png",
    },
    {
        name: "Quiz Game",
        deployed: "https://holbrookb23.github.io/quizGame/",
        repo: "https://github.com/holbrookb23/quizGame",
        img: "./assets/img/projects/quizGame.png",
    },
    {
        name: "Best Shot",
        deployed: "https://thundercats-4ever.github.io/project/",
        repo: "https://github.com/thundercats-4ever/project",
        img: "./assets/img/projects/bestShot.png",
    },
];





projects.forEach((project) =>{
    const projectCard = document.createElement("div");
    projectCard.classList.add("projectCard");
    projectCard.classList.add("w-100-sm");
    projectCard.innerHTML = `
    <img src="${project.img}" alt="" class="br-1 w-100">
    <div class="b br-1 bg-tw z-1 p-a w-100">
        <h4 class="ta-c bb p">${project.name}</h4>
        <div class="df jc-se b-0">
            <button class="bo bblr pt-3 pb-5 projectBtn"><a href="${project.deployed}" target="_blank" class="c-black td-n w-100">Link</a></button>  
            <button class="bo bbrr pt-3 pb-5 projectBtn"><a href="${project.repo}" target="_blank" class="c-black td-n w-100">Repo</a></button>
        </div>
    </div>`;

    document.getElementById("projects").append(projectCard);
})