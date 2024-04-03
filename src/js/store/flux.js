const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      people: [],
    },
    actions: {
      loadContacts: async () => {
        const store = getStore();
        const response = await fetch(
          "https://playground.4geeks.com/contact/agendas/josem"
        );
        const data = await response.json();
        setStore({ people: data.contacts });
      },
      addContact: (newContact) => {
        const store = getStore();
        fetch("https://playground.4geeks.com/contact/agendas/josem/contacts", {
          method: "POST",
          body: JSON.stringify(newContact),
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((response) => {
            if (response.ok) {
              return response.json();
            } else {
              throw new Error("Something went wrong with the POST request");
            }
          })
          .then((addedContact) => {
            setStore({ people: [...store.people, addedContact] });
          })
          .catch((error) => {
            console.error("Error adding contact", error);
          });
      },
      deleteContact: (id) => {
        const store = getStore();
        return fetch(
          `https://playground.4geeks.com/contact/agendas/josem/contacts/${id}`,
          {
            method: "DELETE",
            headers: {},
          }
        )
          .then((response) => {
            if (response.ok) {
              const updatedPeople = store.people.filter(
                (contact) => contact.id !== id
              );
              setStore({ ...store, people: updatedPeople });
            } else {
              throw new Error("Failed to delete contact");
            }
          })
          .catch((error) => {
            console.error("Error deleting contact", error);
            throw error;
          });
      },
      updateContact: (id, updatedContact) => {
        const store = getStore();
        return fetch(
          `https://playground.4geeks.com/contact/agendas/josem/contacts/${id}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedContact),
          }
        )
          .then((response) => {
            if (response.ok) {
              const updatedPeople = store.people.map((contact) =>
                contact.id === id ? { ...contact, ...updatedContact } : contact
              );
              setStore({ ...store, people: updatedPeople });
              return response.json();
            } else {
              throw new Error("Failed to update contact");
            }
          })
          .catch((error) => {
            console.error("Error updating contact", error);
            throw error;
          });
      },
    },
  };
};

export default getState;
