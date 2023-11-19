function changeColor(color) {
    //change-color
    var elements = document.querySelectorAll('.change-color');
    var elementsHover = document.querySelectorAll('.change-hover');
    var elementsColor = document.querySelectorAll('.change-primary-color');
    var elementsBoxShadow = document.querySelectorAll('.change-boxshadow-color');
    
    //var menu = document.getElementById('menu');

    if(color == 'green'){
        elements.forEach(function(element) {
            element.classList.remove('custom-background-indigo');
            element.classList.toggle('custom-background-green');
        });
        elementsHover.forEach(function(element) {
            element.classList.remove('custom-hover-indigo');
            element.classList.toggle('custom-hover-green');
        });
        elementsColor.forEach(function(element){
            element.classList.toggle('custom-primary-green');
            element.classList.remove('custom-primary-indigo');
        });
        elementsBoxShadow.forEach(function(element){
            element.classList.toggle('custom-boxshadow-green');
            element.classList.remove('custom-boxshadow-indigo');
        })
 
        
    }
    else if(color == 'indigo') {
        elements.forEach(function(element) {
            element.classList.remove('custom-background-green');
            element.classList.toggle('custom-background-indigo');
        });
        elementsHover.forEach(function(element) {
            element.classList.remove('custom-hover-green');
            element.classList.toggle('custom-hover-indigo');
        });
        elementsColor.forEach(function(element){
            element.classList.toggle('custom-primary-indigo');
            element.classList.remove('custom-primary-green');
        });
        elementsBoxShadow.forEach(function(element){
            element.classList.toggle('custom-boxshadow-indigo');
            element.classList.remove('custom-boxshadow-green');
        })

    }
    else{
        elements.forEach(function(element) {
            element.classList.remove('custom-background-green');    
            element.classList.remove('custom-background-red');
        });
                elementsHover.forEach(function(element) {
            element.classList.remove('custom-hover-green');
            element.classList.remove('custom-hover-indigo');
        });
        elementsColor.forEach(function(element){
            element.classList.removetoggle('custom-primary-indigo');
            element.classList.remove('custom-primary-green');
        });
        elementsBoxShadow.forEach(function(element){
            element.classList.remove('custom-boxshadow-indigo');
            element.classList.remove('custom-boxshadow-green');
        })

    }
 
    


}

