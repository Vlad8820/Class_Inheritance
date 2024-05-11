const allowedTypes = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];

class Character {
  constructor(name, type) {
    if (typeof name !== 'string' || name.length < 2 || name.length > 10) {
      throw new Error('Name must be a string with length from 2 to 10 characters');
    }

    if (!allowedTypes.includes(type)) {
      throw new Error(`Unknown type: ${type}`);
    }

    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = 0;
    this.defence = 0;

    switch (type) {
      case 'Bowman':
        this.attack = 25;
        this.defence = 25;
        break;
      case 'Swordsman':
        this.attack = 40;
        this.defence = 10;
        break;
      case 'Magician':
        this.attack = 10;
        this.defence = 40;
        break;
      case 'Undead':
        this.attack = 25;
        this.defence = 25;
        break;
      case 'Zombie':
        this.attack = 40;
        this.defence = 10;
        break;
      case 'Daemon':
        this.attack = 10;
        this.defence = 40;
        break;
      default:
        throw new Error('Unknown type');
    }
  }
  levelUp() {
    if (this.health === 0) {
      throw new Error('Cannot level up a dead character');
    }

    this.level += 1;
    this.attack += Math.round(this.attack * 0.2);
    this.defence += Math.round(this.defence * 0.2);
    this.health = 100;
  }

  damage(points) {
    this.health -= points * (1 - this.defence / 100);
    if (this.health < 0) {
      this.health = 0;
    }
  }

}

class Bowman extends Character {
  constructor(name) {
    super(name, 'Bowman');
  }
}

class Swordsman extends Character {
  constructor(name) {
    super(name, 'Swordsman');
  }
}

class Magician extends Character {
  constructor(name) {
    super(name, 'Magician');
  }
}

class Daemon extends Character {
  constructor(name) {
    super(name, 'Daemon');
  }
}

class Undead extends Character {
  constructor(name) {
    super(name, 'Undead');
  }
}

class Zombie extends Character {
  constructor(name) {
    super(name, 'Zombie');
  }
}

export { Character, Bowman, Swordsman, Magician, Daemon, Undead, Zombie };
