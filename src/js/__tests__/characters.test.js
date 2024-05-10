import { Character, Bowman, Swordsman, Magician, Daemon, Undead, Zombie } from '../characters';

describe('Character classes', () => {
  test('Character creation', () => {
    const character = new Character('John', 'Bowman');
    expect(character).toEqual({
      name: 'John',
      type: 'Bowman',
      health: 100,
      level: 1,
      attack: 25,
      defence: 25,
    });
  });

  test('Bowman creation', () => {
    const bowman = new Bowman('Mike');
    expect(bowman).toEqual({
      name: 'Mike',
      type: 'Bowman',
      health: 100,
      level: 1,
      attack: 25,
      defence: 25,
    });
  });

  test('Swordsman creation', () => {
    const swordsman = new Swordsman('Alex');
    expect(swordsman).toEqual({
      name: 'Alex',
      type: 'Swordsman',
      health: 100,
      level: 1,
      attack: 40,
      defence: 10,
    });
  });

  test('Magician creation', () => {
    const magician = new Magician('David');
    expect(magician).toEqual({
      name: 'David',
      type: 'Magician',
      health: 100,
      level: 1,
      attack: 10,
      defence: 40,
    });
  });

  test('Daemon creation', () => {
    const daemon = new Daemon('Lucifer');
    expect(daemon).toEqual({
      name: 'Lucifer',
      type: 'Daemon',
      health: 100,
      level: 1,
      attack: 10,
      defence: 40,
    });
  });

  test('Undead creation', () => {
    const undead = new Undead('Dracula');
    expect(undead).toEqual({
      name: 'Dracula',
      type: 'Undead',
      health: 100,
      level: 1,
      attack: 25,
      defence: 25,
    });
  });

  test('Zombie creation', () => {
    const zombie = new Zombie('Bub');
    expect(zombie).toEqual({
      name: 'Bub',
      type: 'Zombie',
      health: 100,
      level: 1,
      attack: 40,
      defence: 10,
    });
  });
});
