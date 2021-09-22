import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Books from './components/Books';
import Create from './components/Create';
function App() {
	return (
		<Router>
			<nav>
				<ul>
					<li>
						<Link to='/'>Home</Link>
					</li>
					<li>
						<Link to='/create'>Create Book</Link>
					</li>
				</ul>
			</nav>
			<Switch>
				<Route path='/' exact component={Books} />
				<Route path='/create' exact component={Create} />
			</Switch>
		</Router>
	);
}

export default App;
