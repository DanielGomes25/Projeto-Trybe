// Adicione a tag h1 com o texto TrybeTrip - Agência de Viagens como filho da tag body;

const elementH1 = document.createElement('h1');
elementH1.innerText = 'TrybeTrip - Agência de Viagens';
document.body.appendChild(elementH1);


// Adicione a tag main com a classe main-content como filho da tag body;

const elementMain = document.createElement('main');
elementMain.className = 'main-content';
document.body.appendChild(elementMain);


// Adicione a tag section com a classe center-content como filho da tag main criada no passo 2;

const elementSection = document.createElement('section');
elementSection.className = 'center-content';
elementMain.appendChild(elementSection);


// Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;
const elementP = document.createElement('p');
elementP.innerHTML = 'Daniel o Hacker de Mogi das Cruzes';
elementSection.appendChild(elementP);


// Adicione a tag section com a classe left-content como filho da tag main criada no passo 2;
const elementSection1 = document.createElement('section');
elementSection1.className = 'left-content';
elementMain.appendChild(elementSection1);

// Adicione a tag section com a classe right-content como filho da tag main criada no passo 2;
const elementSection3 = document.createElement('section');
elementSection3.className = 'right-content';
elementMain.appendChild(elementSection3);


// Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image. Esse elemento deve ser filho do section criado no passo 5;

const image = document.createElement('img');
image.className = 'small-image';
image.src = 'https://picsum.photos/200';
elementSection1.appendChild(image);


// Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um, dois, três, … como valores da lista. Essa lista deve ser filha do section criado no passo 6;

const listUl = document.createElement('ul');
elementSection3.appendChild('listUl');
const arrayNumber = ['Um', 'Dois', 'Tres', 'Quatro', 'Cinco', 'Seis', 'Sete', 'Oito', 'Nove', 'Dez'];
for (let index of arrayNumber) {
    const elementL1 = document.createElement('li');
    elementL1.innerHTML = arrayNumber[index];
    elementUl.appendChild(elementL1);
};



// Adicione 3 tags h3, todas sendo filhas do main criado no passo 2.

for (let index = 1; index <= 3; index += 1) {
const elementH3 = document.createElement('h3');
elementH3.innerHTML = 'show' + index;
elementMain.appendChild(elementH3);

}
// Após criar as tags anteriores, você mostrou para a sua liderança como estava a estrutura inicial da página. Sua liderança então pediu para que você fizesse algumas alterações:

// Adicione a classe title na tag h1 criada;

const title = document.querySelector('h1');
title.className = 'title';


// Adicione a classe description nas 3 tags h3 criadas;
const description = document.getElementsByTagName('h3')
for (let index = 1; index <= 3; index += 1) {
    elementH3[index].className = 'descriptiob';
}


// Remova a section criada no passo 5 (aquele que possui a classe left-content). Utilize a função .removeChild();


// Centralize a section criada no passo 6 (aquele que possui a classe right-content).


// De olho na dica 👀:: Para centralizar a section, basta configurar o margin-right: auto da section;

// Troque a cor de fundo do elemento pai da section criada no passo 3 (aquela que possui a classe center-content) para a cor verde;


// Remova os dois últimos elementos (nove e dez) da lista criada no passo 8.