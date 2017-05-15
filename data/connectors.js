import Sequelize from 'sequelize';
import casual from 'casual';
import _ from 'lodash';


const db = new Sequelize('demo', null, null, {
  dialect: 'sqlite',
  storage: './demo.sqlite',
});

const PersonModel = db.define('person', {
  name: { type: Sequelize.STRING },
});

const TalkModel = db.define('talk', {
  title: { type: Sequelize.STRING },
  abstract: { type: Sequelize.STRING },
});

PersonModel.belongsToMany(TalkModel, { as: 'Talks', through: 'person_talks', foreignKey: 'personId' })
TalkModel.belongsToMany(PersonModel, { as: 'Speakers', through: 'person_talks', foreignKey: 'talkId' })

casual.seed(111);
db.sync({ force: true }).then(() => {
  _.times(20, () => {
    return PersonModel.create({
      name: casual.name,
    }).then((person) => {
      return person.createTalk({
        title: casual.title,
        abstract: casual.sentences(3),
      });
    });
  });
});

const Person = db.models.person;
const Talk = db.models.talk;

export { Person, Talk };
