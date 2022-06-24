let show = document.getElementById("show");
let codito = document.getElementsByTagName('code')

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
// Add skills
Tenco.addSkills('html 5');
Tenco.addSkills('css 3');
Tenco.addSkills('javaScript');
Tenco.addSkills('jQuery');
Tenco.addSkills('react JS');
// Add works
Tenco.addPortfolio('Graphic Design', 'Fogones Aiken');
Tenco.addPortfolio('Web Design', 'NewAgroCoin');
Tenco.addPortfolio('Design & Layout', 'Priceless Cities');

let namesito = document.createElement('div');
namesito.innerHTML+=(`<em>name:</em> ${Tenco.name} <br><em>surname:</em> ${Tenco.lastname}`);
let skillis = document.createElement('ul');
let ski = Tenco.skills.forEach(e => skillis.innerHTML+=(`<li>${e}</li>`));
let portis = document.createElement('ol');
let port = Tenco.portfolio.forEach(w => portis.innerHTML+=(`<li>${w.client}<br><em>${w.category}</em></li>`));

show.appendChild(namesito)
show.appendChild(skillis)
show.appendChild(portis)
