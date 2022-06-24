let show = document.getElementById("show");
let pe = document.createElement("p");
let ul = document.createElement("ul");

let namesito = document.getElementById('namesito');
let skills = document.getElementById('skills');
let portfolio = document.getElementById('portfolio');

class Objet {
  constructor(name, lastname) {
    this.name = name;
    this.lastname = lastname;
    this.skills = [];
    this.portfolio = [];
  }

  getFullName() {
    return `${this.name} ${this.lastname}`;
  }

  addSkills(String) {
    this.skills.push(String);
  }
  
  addPortfolio(category, client) {
    let work = {
      category: category,
      client: client,
    };

    this.portfolio.push(work);
  }

  getClientsNames() {
    return this.portfolio.map((x) => {
      return x.client;
    });
  }
};

// Create new objet
let Tenco = new Objet ('Daniel', 'Tenconi');
console.log(Tenco)

// Add skills
Tenco.addSkills('html 5');
Tenco.addSkills('css 3');
Tenco.addSkills('javaScript');
Tenco.addSkills('jQuery');
Tenco.addSkills('react JS');
//console.log(Tenco.skills)
//console.log(Tenco.countSkills())

Tenco.addPortfolio('Graphic Design', 'Fogones Aiken');
Tenco.addPortfolio('Web Design', 'NewAgroCoin');
Tenco.addPortfolio('Design & Layout', 'Priceless Cities');
//console.log(Tenco.getClientsNames())



/* show.appendChild(
  
  namesito, skills) */
  
namesito.append (`${Tenco.name} ${Tenco.lastname}`)

skills.append(`${Tenco.skills}`)
let portis = Tenco.portfolio.map((po) =>{
  return (`${po.client}  ${po.category}`)
})
portfolio.append(`${portis}`)



/* 
show.append(namesito, skills)

namesito.appendChild(pe)
pe.appendChild(
  document.createTextNode(`Name & Lastname: ${Tenco.name} ${Tenco.lastname} `)
)

let ski = Tenco.skills.map((wo) =>{
  return wo
});

skills.appendChild(pe)
  pe.appendChild(
    document.createTextNode(`Skills: ${ski}`)
  ) */



//show.innerHTML+=(`<strong>Skills</strong>: ${ski}`);

/* let portis = Tenco.portfolio.map((po) =>{
  return po
}) */

//show.innerHTML+=(`<strong>Portfolio</strong>: ${portis}`)

//console.log(portis)
