const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      people: [],
    },
    actions: {
      loadData: async () => {
        const store = getStore();
        const response = await fetch(
          "https://playground.4geeks.com/contact/docs"
        );
        const data = await response.json();
        setStore({ people: data });
      },
      addPerson: (person) => {
        const store = getStore();
        setStore({ people: [...store.people, person] });
      },
      deletePerson: (index) => {
        const store = getStore();
        const newPeople = store.people.filter((person, i) => i !== index);
        setStore({ people: newPeople });
      },
      editPerson: (index, person) => {
        const store = getStore();
        const newPeople = store.people.map((p, i) =>
          i === index ? person : p
        );
        setStore({ people: newPeople });
      },
    },
  };
};

export default getState;
