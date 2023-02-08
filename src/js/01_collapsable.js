'use strict';

const fillLegend = document.querySelector('.js_fill-legend');
const fillContent = document.querySelector('.js_fill-content');
const shareLegend = document.querySelector('.js_share-legend');
const shareContent = document.querySelector('js_share-content');


function closeAllSections(){
    fillContent.classList.add('collapsed');
    shareContent.classList.add('collapsed');
}

function openFillSection(){
    fillContent.classList.remove('collapsed');
}

function openShareSection(){
    shareContent.classList.remove('collapsed');
}

function handleShowFillSection(event){
    closeAllSections();
    openFillSection();
}

function handleShowShareSection(event){
    closeAllSections();
    openShareSection();
}

fillLegend.addEventListener('click', (handleShowFillSection));

shareLegend.addEventListener('click', (handleShowShareSection));


