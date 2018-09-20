import React, { Component } from 'react'
import Header from './components/header'
import PreviousList from './components/previousList'
import ZenPhrase from './components/zenPhrase'

class App extends Component {

    state = {
        flagPrevious: false,
        previousList: [],
        visible: true
    }

    componentDidMount() {
        this.loadPhrase()
    }

    loadPhrase = () => {
        const url = 'https://api.github.com/zen'
        fetch(url)		
            .then(res => {
                return res.text()
            })
            .then(data => {
                this.setState(prevState=>{
                    if (!prevState.phrase) return {...this.state, phrase: data, visible: true}
                    return {
                        visible: true,
                        phrase: data,
                        previousList: [...this.state.previousList, prevState.phrase]
                    }
                })
            })
            .catch(()=>this.setState({
                phrase: 'En estos momentos no podemos cargar una frase para usted, disculpe.'
            }))
    }

    nextPhrase = () => {
        this.setState({visible: false})
        setTimeout(()=>{
            this.loadPhrase()
        }, 700)
    }

    handleClickPrevious = (bool) => {
        this.setState({
            flagPrevious: bool
        })
    }

    render() {
        const headerText = {
            title: 'LA MANO ZEN',
            welcomeText: `Bienvenido!, aquí encontraras
                        las mejores frases de nuestra
                        escuela zen.`
        }
        return (
            <React.Fragment>
                <Header {...headerText} />
                <ZenPhrase {...this.state} nextPhrase={this.nextPhrase}/>
                {
                    this.state.previousList.length >= 1 &&
                    <PreviousList {...this.state} handleClickPrevious={this.handleClickPrevious}/>
                }
            </React.Fragment>
        )
    }
}

export default App
