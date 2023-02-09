'use strict';

function closeAllSections(){
    designContent.classList.add('collapsed');
    fillContent.classList.add('collapsed');
    shareContent.classList.add('collapsed');
}

function openDesignSection(){
    designContent.classList.remove('collapsed');
}

function openFillSection(){
    fillContent.classList.remove('collapsed');
}

function openShareSection(){
    shareContent.classList.remove('collapsed');
}

function handleClickDesign(event){
    event.preventDefault();
    closeAllSections();
    openDesignSection();
} 

function handleClickFill(event){
    event.preventDefault();
    closeAllSections();
    openFillSection();
} 

function handleClickShare(event){
    event.preventDefault();
    closeAllSections();
    openShareSection();
} 


designLegend.addEventListener('click', (handleClickDesign));

fillLegend.addEventListener('click', (handleClickFill));

shareLegend.addEventListener('click', (handleClickShare));


