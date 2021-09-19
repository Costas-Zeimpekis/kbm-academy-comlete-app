import './App.css';
import { Route, Switch } from 'react-router-dom';
import RegisterForm from './components/RegisterForm';
import { Provider } from 'react-redux';
import tStore from './components/store/configureStore';
import NavBar from './components/navBar/NavBar';
import Students from './components/Students';
import Home from './components/Home';
import { paginate } from './components/utils/paginate';

function App() {
	const store = tStore();
	return (
		<div className="App">
			<Provider store={store}>
				<NavBar />
				<div className="content">
					<Switch>
						<Route path="/" exact component={Home} />
						{/* <Route path="/" component={Home}></Route> */}
						<Route path="/students" component={Students}></Route>
						<Route path="/register" component={RegisterForm}></Route>
					</Switch>
				</div>
			</Provider>
		</div>
	);
}

export default App;
