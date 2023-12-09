import { GlobalStyle } from "GlobalStyle";
import { Phonebook } from "./Phonebook/Phonebook";
import { Contacts } from "./Contacts/Contacts";
import { Container, Title } from "./App.styled";
import { Filter } from "./Filter/Filter"
import { useSelector } from "react-redux";
import { selectError, selectIsLoading } from "redux/selectors";
import { LineWave } from "react-loader-spinner";
import { Toaster } from "react-hot-toast";


export const App = () => {

  const contacts = useSelector(state => state.contacts.items);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);

  return (
    <Container>
      <Title>Phonebook</Title>
      <Phonebook></Phonebook>

      <Title>Contacts</Title>
      {contacts.length > 0 ? <Filter></Filter>
        : (!error && !isLoading && <p>You don't have any contacts</p>)}
      <Contacts></Contacts> 
      {error && <p>{error}</p>}
      {isLoading && <LineWave
  height="100"
  width="100"
  color="#4fa94d"
  ariaLabel="line-wave"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  firstLineColor=""
  middleLineColor=""
  lastLineColor=""
/>}
<Toaster position="top-right"/>
      <GlobalStyle />
    </Container> 
  )
};