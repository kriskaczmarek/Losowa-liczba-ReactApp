class App extends React.Component {
	state = {
		text: "",
	}
	btn = "Losowa liczba"
	handleClick = () => {
		const number = Math.floor(Math.random() * 10 + 1)
		this.setState({
			text: (this.state.text = number),
		})
	}
	render() {
		return (
			<>
				<button onClick={this.handleClick}>{this.btn}</button>
				<PanelResult test={this.state.text} />
			</>
		)
	}
}

const PanelResult = props => {
	return <h2>{props.test}</h2>
}

ReactDOM.render(<App btnTitle='dodaj cyfre' />, document.getElementById("root"))
