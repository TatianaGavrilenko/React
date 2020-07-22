//const ReactElement = React.createElement('button', null, 'My button from class component');

/*function ReactComponent({text}){
    function clickHandler(name){
        alert (`Hello ${name}`)
    }

    function  changeHandler(event){
        console.log(event.currentTarget.value)
    }
    return (
        <div>
            <button onClick={ () => clickHandler('Jhon')}> {text} </button>
            <input onChange={changeHandler} type="text" />
        </div>
    )
}*/

//map
//filter

class ReactComponent extends React.Component{
    constructor(props){
        super(props)
        this.state = {text: 'default text', list: [
            {id:0, data: '123'},
            {id:1, data: '567'},
            {id:2, data: '890'},
            {id:3, data: '837967'},
        ]}
        

        this.clickHandler = this.clickHandler.bind(this)
        this.changeHandler = this.changeHandler.bind(this)
    }

    clickHandler(name){
        alert (`Hello ${name}`)
    }

    changeHandler(event){
        this.setState((state,props) => ({text: "state text " + state.text+ ", " + "props text " + props.state}))
        console.log(event.currentTarget.value)
        this.setState({list: this.state.list.filter(item => item.id != +event.currentTarget.value)})
    }

    render(){
        return(
            <div>
                <button onClick={ () => this.clickHandler('Jhon')}> {this.props.text} </button>
                <input onChange={this.changeHandler} type="text" /> <br />
                {this.state.text}
                {this.state.list.map(item => <div key={item.id}>{item.data}</div>)}
            </div>  
        )
    }
}

ReactDOM.render(<ReactComponent text='name from props'/>, document.getElementById('root'));