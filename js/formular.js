(
    function init() {
        "use strict";

        const form = document.forms[0];
        const submit = document.querySelector("[type=submit]");
        const reset = document.querySelector("[type=reset]");

        submit.addEventListener(
            "click",
            e => { 
                e.preventDefault();
                deleteMessage();
                validationForm(form);
            },
            false
        );
        reset.addEventListener(
            "click",
            e => {
                // z.B. neu laden, Eingaben löschen, weiter leiten
                deleteMessage();
             },
            false
        );

        /* Constraint Api und validity zeigen:*/
        const allText=document.querySelectorAll("[type=text]");
        // console.log(allText);
        allText.forEach(text=>{
            console.log(text.validity);
        })

        // Prüfen

        function validationForm(el){
            const formFields=Array.from(form.elements);
            // gesamt form prüfen
            if(el.checkValidity()){
                console.log("Alles richtig.")
            }else{
                console.log("Irgendwas ist falsch!")
                // einzelne Felder prüfen
                formFields.forEach(el=>{
                    if(el.checkValidity()){
                        // alert("Richtig!");
                    }else{
                        // alert("Falsch.");
                        // spezifische Fehlermeldung für den Anwender
                        whichError(el);
                    }
                })
            }
        }
        // spezifische Fehlermeldungen
        function whichError(el){
            let validity=el.validity;
            // console.log(validity)
            // showMessage("irgendein Fehler");
            if(validity.valueMissing){
                showMessage(`${el.parentElement.firstElementChild.innerHTML} ausfüllen!`);
            }
            if(validity.tooShort){
                showMessage(`${el.parentElement.firstElementChild.innerHTML} mindestens 6 Zeichen!`);
            }
        }
        // Rückmeldung an den Anwemder
        function showMessage(text){
            let message=document.createElement("p");
            message.appendChild(document.createTextNode(text));
            form.appendChild(message);
        }

        // Textmeldungen löschen
        function deleteMessage(){
            while(form.lastElementChild.nodeName=="P"){
                form.lastElementChild.remove();
            }
        }
    }
)