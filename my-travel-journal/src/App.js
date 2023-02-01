import './App.css';
import Header from './components/header';
import Card from './components/card'
import {details} from './details';

function App() {
  const cards= details.map(item =>{
    return(
      <Card
      {...item}
      />
    )
  })
  return (
    <div className="App">
      <Header/>
      <section className='justify-center grid'>
        {cards}
      </section>
    </div>
  );
}

export default App;
