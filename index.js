class App extends React.Component {
    render() {
        return (
            <div>
                <Hello to="Mourya"  from="Chinnu" bangs={5} />
                <Hello to="Chinnu" from="Mourya" bangs={10} />
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));