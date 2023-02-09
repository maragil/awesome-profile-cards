'use strict';


function handleClickDesign(){
    fillContent.classList.add('collapsed');
    shareContent.classList.add('collapsed');
    designContent.classList.remove('collapsed');
};

function handleClickFill(){
    designContent.classList.add('collapsed');
    shareContent.classList.add('collapsed');
    fillContent.classList.remove('collapsed');
};

function handleClickShare(){
    designContent.classList.add('collapsed');
    fillContent.classList.add('collapsed');
    shareContent.classList.remove('collapsed');
};

designLegend.addEventListener('click', (handleClickDesign));

fillLegend.addEventListener('click', (handleClickFill));

shareLegend.addEventListener('click', (handleClickShare));


