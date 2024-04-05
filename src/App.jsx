import ContactForm from "./components/ContactForm.jsx";
import SearchBox from "./components/SearchBox.jsx";
import ContactList from "./components/ContactList.jsx";
function App() {
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}

export default App;
