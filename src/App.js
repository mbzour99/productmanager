import Main from './views/Main'
import { Router } from '@reach/router'
import ShowOne from './views/ShowOne';
import UpdateProduct from './views/UpdateProduct';
function App() {
  return (
    <div className="App">
<Router>
<Main path="/"></Main>
<ShowOne path="/:id"></ShowOne>
<UpdateProduct path="/edit/:id"></UpdateProduct>
</Router>

    </div>
  );
}

export default App;
