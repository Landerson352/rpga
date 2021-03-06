import { sample } from 'lodash';
import { ItemTypes } from './constants';

const Dict = {
  RAT_FIRST_NAMES: () => sample([
    'Francis',
    'Felippe',
    'Cal',
    'Skeev',
    'Killet',
    'Kreen',
    'Sark',
  ]),
  RAT_TITLES: () => sample([
    'Cutter',
    'Skitterer',
    'Snapper',
    'Furry',
    'Whiskered',
    'Many-clawed',
    'Collector',
  ]),
  RAT_NAME: () => sample([
    `${Dict.RAT_TITLES()} ${Dict.RAT_FIRST_NAMES()}`,
    `${Dict.RAT_FIRST_NAMES()} the ${Dict.RAT_TITLES()}`,
  ]),
  CHIMP_FIRST_NAMES: () => sample([
    'Chippers',
    'Cupcake',
    'Nanners',
    'Popeye',
    'Skippy',
    'Chatters',
    'Goodboye',
    'Fruitcake',
  ]),
  CHIMP_TITLES: () => sample([
    'Space Engineer',
    'Commander',
    'Orbital Captain',
    'Hose-Scrubber',
    'Captain',
    'Security Consultant',
    'Moon Architect',
    'Comrade',
  ]),
  CHIMP_NAME: () => sample([
    `${Dict.CHIMP_TITLES()} ${Dict.CHIMP_FIRST_NAMES()}`,
    `${Dict.CHIMP_FIRST_NAMES()} the ${Dict.CHIMP_TITLES()}`,
  ]),
};

const Monsters = {
  RAT: () => ({
    name: Dict.RAT_NAME(),
    //attackToDefenseRatio: 0.5,
  }),
  CHIMP: () => ({
    name: Dict.CHIMP_NAME(),
  }),
};

const Items = [{
  article: 'a',
  name: 'Bird on a Hat',
  imageFile: 'top-hat.png',
  type: ItemTypes.SPECIAL,
  combatAction: 'birdlore',
  keywords: 'fancy black bird animal hat',
},{
  article: 'an old pair of',
  name: 'Stonerwashed Jeans',
  imageFile: 'top-hat.png',
  type: ItemTypes.SPECIAL,
  combatAction: 'smoking',
  keywords: '80s legs',
},{
  article: 'a pair of',
  name: 'Mismatched Kicking Boots',
  imageFile: 'top-hat.png',
  type: ItemTypes.WEAPON,
  combatAction: 'attack',
  keywords: 'black rugged shoes',
},{
  article: 'a set of',
  name: 'Pristine White Gloves',
  imageFile: 'top-hat.png',
  type: ItemTypes.SPECIAL,
  combatAction: 'cleaning',
  keywords: 'fancy white hands',
},{
  article: 'a',
  name: 'Spoon of Doom',
  imageFile: 'top-hat.png',
  type: ItemTypes.WEAPON,
  combatAction: 'attack',
  keywords: 'metal houseware',
}];

module.exports = {
  Dict,
  Monsters,
  Items,
};
