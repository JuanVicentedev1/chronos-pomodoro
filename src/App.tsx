// ISSO É COMPONENTE
// função que utiliza o nome em PascalCase

import { Heading } from './components/Heading';

import './styles/global.css';
import './styles/theme.css';

export function App() { // um componente 
    console.log("oi");

   // que retorna um jsx
    return(<div>
      <Heading/>
      <p>JESUS SAVE!!!</p>
    </div>)
}

