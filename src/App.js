import './App.css';
import Header from './MyComponents/Header';
import Footer from './MyComponents/Footer';
import Todos from './MyComponents/Todos';


function App() {
  let todos = [
    {
      sno: 1,
      title: 'Todos 1',
      desc: 'Sample todo1 description'
    },
    {
      sno: 2,
      title: 'Todos 2',
      desc: 'Sample todo2 description'
    },
    {
      sno: 3,
      title: 'Todos 3',
      desc: 'Sample todo3 description'
    }
  ]
  return (
    <>
    <Header title="My todos list" searchBar={true} />
    <Todos todos={todos}/>
    <Footer />
    </>
  );
}

export default App;
