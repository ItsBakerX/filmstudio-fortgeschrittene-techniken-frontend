(function init(){
    "use strict";
    
    // 1.
    const articles = Array.from(document.getElementsByTagName("article"));
    
    function loadArticles(entries){
        const[entry] = entries;
        console.log("is visible: ", entry.isVisible);

        if(entry.isIntersecting || entry.isVisible){
            entry.target.classList.add("loadVisible");
        }
        else{
            entry.target.classList.remove("loadVisible");
        }
    }

    const options = {
        root: null,
        rootMargin: "0px",
        threshold: [.2,.5,1]
        // weitere Properties möglich: delay, trackvisibility
    }

    // 2.
    const observer = new IntersectionObserver(loadArticles,options);

    // target(s) observieren
    articles.forEach(article => {
        observer.observe(article);
    });

})();