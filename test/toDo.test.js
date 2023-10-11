const ToDo = require("../toDo.js");
const Item = require("../item.js");

describe("test can add item", () => {
  it.only("Test if can add item in toDo", () => {

    let item1 = new Item(
      "Faire exo",
      "Faire les exos de vueJs",
      new Date()
    );
    let item2 = new Item(
      "Faire exo",
      "Faire les exos de vueJs",
      new Date()
    );
    let item3 = new Item(
      "Faire exo2",
      "La mer scintillait sous les rayons du soleil couchant. Les vagues, telles des mains caressantes, venaient s'écraser doucement sur le sable doré de la plage. Le ciel se teintait de nuances roses et oranges, peignant un tableau de quiétude. Les enfants riaient en construisant des châteaux de sable, les mouettes survolaient l'horizon, et les amoureux se promenaient main dans la main le long du rivage.La brise marine transportait l'odeur saline de l'océan, rafraîchissant les esprits et les âmes. Les parasols multicolores ponctuaient le littoral, offrant ombre et abri contre les chauds rayons du soleil. Le cri des marchands ambulants résonnait, proposant glaces et boissons fraîches aux visiteurs en quête de rafraîchissement.Plus loin, des bateaux à voile filaient majestueusement, leurs voiles blanches se détachant sur l'horizon. Les pêcheurs, de retour de leur sortie, débarquaient leur précieuse cargaison de poissons frais. Les cafés en bord de plage invitaient à se détendre, offrant des vues imprenables sur l'étendue infinie de l'océan.La journée laissait place à la soirée, et le crépuscule offrait un tout autre spectacle. Les étoiles s'allumaient progressivement dans le ciel, et les vagues continuaient leur danse incessante. Les feux de camp scintillaient sur le sable, réunissant amis et familles pour des moments chaleureux.C'était un endroit où le temps semblait s'arrêter, où chaque bruit, chaque odeur et chaque vision évoquaient un sentiment de paix et de bonheur. La plage était un sanctuaire, un lieu de rencontres, de souvenirs et d'émerveillement. C'était un coin de paradis sur Terre, où l'océan et le sable se mariaient pour créer une expérience inoubliable.",
      new Date()
    );

    let toDo1 = new ToDo();
    toDo1.items = [item1tatus
    ];

    let toDo2 = new ToDo();

    expect(toDo1.canAddItem(item2)).toBe(false);
    expect(toDo2.canAddItem(item1)).toBe(true);
    expect(toDo2.canAddItem(item3)).toBe(false);
    expect(toDo2.canAddItem('item1')).toBe(false);

    


  });

  //   it.only("Email doesnt have the good format must be true", () => {
  //     let user = new User("", "", "asma   uyopmail.com", "");
  //     expect(user.isValidEmail()).toBe(false);
  //   });

  //   it.only("User name is true", () => {
  //     let user = new User("", "MOKEDDES", "", 21);
  //     expect(user.isValidNameOrFirstName()).toBe(false);
  //   });

  //   it.only("User name is true", () => {
  //     let user = new User("Asma", "MOKEDDES", "", 21);
  //     expect(!user.isValidNameOrFirstName()).toBe(false);
  //   });

  //   it.only("AGE", () => {
  //     let user = new User("Asma", "MOKEDDES", "", "2017-03-17");
  //     expect(user.isValidAge()).toBe(false);
  //   });
});
