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

const battleMembers = { mage, 
    warrior, 
    dragon 
};

const dragonDamage = (dragon) => {
    const minDamage = 15;
    const {strength} = dragon;
    const dragonDmg = Math.floor((Math.random() * (strength - minDamage + 1) + minDamage));
    return dragonDmg;
}

console.log(dragonDamage(dragon));

const warriorDamage = (warrior) => {
    const {weaponDmg} = warrior;
    const minDamage = warrior.strength;
    const maxDamage = minDamage * weaponDmg;
    const warriorDmg = Math.floor((Math.random() * (maxDamage - minDamage + 1)) + minDamage);
    return warriorDmg;
}

console.log(warriorDamage(warrior));

const mageDamage = (mage) => {
    const minDamage = mage.intelligence;
    const maxDamage = minDamage * 2;
    const mageMana = mage.mana;
    const turnStats = {
        damageDealt: 'Without mana',
        manaSpent: 0
    }
    if (mageMana > 15) {
        const mageDamage = Math.floor((Math.random() * (maxDamage - minDamage + 1)) + minDamage);
        turnStats.manaSpent = 15;
        turnStats.damageDealt = mageDamage;
        return turnStats;
    }
    return turnStats;
}

console.log(mageDamage(mage));
