const ol = document.querySelector('ol');

const li = document.querySelectorAll('li');
const lastLi = ol.lastElementChild;
ol.insertBefore(lastLi, ol.firstElementChild);
const sections = document.querySelectorAll('section');

const h2SectionThree = sections[2].querySelector('h2');
const h2SectionTwo = sections[1].querySelector('h2');
sections[1].insertBefore(h2SectionThree, sections[1].firstElementChild);
sections[2].insertBefore(h2SectionTwo, sections[2].firstElementChild);

const lastSection = sections[sections.length - 1];
lastSection.remove();