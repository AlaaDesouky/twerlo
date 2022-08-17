import './app.css';
import { WrapperContainer } from './components';
import { useAppContext } from './context/context';
import { Practice, Rank } from './pages';


function App() {
  // Check if the user reached the end of the words test
  const { isFinished } = useAppContext()


  return (
    <WrapperContainer>
      <h1>Twerlo Assignment</h1>

      {/* Render/Re-render Practice page | Rank page based on the test state */}
      {isFinished ? <Rank /> : <Practice />}
    </WrapperContainer>
  );
}

export default App;
