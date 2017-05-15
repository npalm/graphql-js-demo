import { Person, Talk } from './connectors';

const resolvers = {
  Query: {
    persons() {
      return Person.findAll();
    },
    person(_, args) {
      return Person.find({ where: args });
    },
    talks() {
      return Talk.findAll();
    },
    talk(_, args) {
      return Talk.find({ where: args });
    },
  },
  Mutation: {
    createPerson: (root, args) => { return Person.create(args); },
  },
  Person: {
    talks(person) {
      return person.getTalks();
    },
  },
  Talk: {
    speakers(talk) {
      return talk.getSpeakers();
    },
  },
};

export default resolvers;
