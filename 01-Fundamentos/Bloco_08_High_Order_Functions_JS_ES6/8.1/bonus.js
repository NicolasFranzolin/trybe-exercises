const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const dragonDamage = () => {
    const damage =Math.floor(Math.random() * (50-15) + 15);
    return damage;
}

console.log('Dano do dragão: ' + dragonDamage());

const warriorDamage = () => {
    const damage =Math.floor(Math.random() * (60-30) + 30);
    return damage;
};

console.log('Dano do warrior: ' + warriorDamage());

const mageDamage = () => {
    let dmgDealt = {
    damage: Math.floor(Math.random() * ((mage.intelligence * 2)- mage.intelligence) + mage.intelligence),
    manaSpent: 15,
    }

    if (mage.mana < 15) {
        dmgDealt = {
        damage:'Não possui mana suficiente',
        mana: 0,
        }
    }
    
    return dmgDealt.damage;


}

console.log('Dano do mago: ' + mageDamage());

const gameActions = {
    // Crie as HOFs neste objeto.
  };