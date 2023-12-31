const dataCatalog = [
  {
    id: 'fluorite',
    name: 'Флюорит',
    description:
      'Минерал, обладающий уникальными геологическими и оптическими свойствами, делающими его важным объектом в музее геологии. Кристаллическая структура флюорита представляет интерес для геологов, исследующих процессы образования и метаморфизма в земной коре. \n\n Цветовое разнообразие флюорита является результатом взаимодействия с различными минералами в процессе его формирования. Экспозиция в музее может визуально демонстрировать этот спектр цветов и объяснить причины такого разнообразия.',
    image: '/images/fluorite.png',
    modelPath: '/models/fluorite.glb',
    categories: ['Минералы', 'Галогениды', 'Кубическая сингония'],
    properties: [
      {
        title: 'Физические свойства',
        content: [
          {
            propTitle: 'Цвет',
            propContent:
              'Белый или бесцветный, фиолетовый, синий, сине-зелёный, жёлтый, коричнево-жёлтый или красный',
          },
          {
            propTitle: 'Цвет черты',
            propContent: 'Белая',
          },
          {
            propTitle: 'Блеск',
            propContent: 'Стеклянный',
          },
          {
            propTitle: 'Твердость',
            propContent: 'Совершенная по {111}',
          },
          {
            propTitle: 'Излом',
            propContent: 'Ступенчатый',
          },
          {
            propTitle: 'Плотность',
            propContent: '3,18 г/см³',
          },
        ],
      },
      {
        title: 'Кристаллографические свойства',
        content: [
          {
            propTitle: 'Сингония',
            propContent: 'Кубическая',
          },
        ],
      },
      {
        title: 'Оптические свойства',
        content: [
          {
            propTitle: 'Показатель преломления',
            propContent: '1,433—1,435',
          },
        ],
      },
    ],
  },
  {
    id: 'aragonite',
    name: 'Арагонит',
    description:
      'Представляет собой минерал из группы карбонатов, и его кристаллическая структура является объектом изучения для геологов. Этот минерал обычно образуется в карстовых условиях и может быть найден в пещерах и гипсовых образованиях. Его стройная кристаллическая форма и уникальная оптическая активность делают его ценным объектом для коллекций и научных исследований.',
    image: '/images/aragonite.png',
    modelPath: '/models/aragonite.glb',
  },
  {
    id: 'granite',
    name: 'Перит',
    description:
      'Известная горная порода, широко распространенная на поверхности земли. Этот исключительный материал образуется при охлаждении магмы и обладает уникальной текстурой, включающей кристаллы кварца, слюды и полевого шпата. Гранит является популярным материалом для строительства и декора, а его структура предоставляет информацию о геологических процессах, связанных с формированием.',
    image: '/images/pyrite.png',
    modelPath: '/models/pyrite.glb',
  },
  {
    id: 'amethyst',
    name: 'Аметист',
    description:
      'Разновидность кристаллического кварца с фиолетовым оттенком, который может варьироваться от светло-лилового до насыщенного фиолетового цвета. Его цветовая палитра придает ему эстетическую привлекательность, и он часто используется в ювелирных украшениях. Аметист также привлекает внимание геологов, изучающих условия формирования кристаллов и их влияние на окружающие горные породы.',
    image: '/images/amethyst.png',
    modelPath: '/models/amethyst.glb',
  },
  {
    id: 'halcedon',
    name: 'Халцедон',
    description:
      'Представляет собой разновидность кремня и обладает микрокристаллической структурой. Его многообразие цветов и текстур делают его ценным объектом как для коллекционеров, так и для геологов. Халцедон может встречаться в виде агата, хризопраза, хризоколлы и других разновидностей. Его образование связано с гидротермальными процессами и может встречаться в различных типах горных образований.',
    image: '/images/testStone.png',
    modelPath: '/models/testStone.glb',
  },
];

export default dataCatalog;
