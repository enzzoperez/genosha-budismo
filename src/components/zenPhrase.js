import React from 'react'

class ZenPhrase extends React.PureComponent {
    render() {
        const {phrase, nextPhrase, visible} = this.props
        return (
            <div className="zen-phrase">
                <div className={visible? 'fade-in' : 'fade-out'}>
                    {
                        !phrase?
                            <p>Cargando...</p>
                            : `"${phrase}"`
                    }
                </div>
                <button onClick={()=>nextPhrase()}>Pedir otra frase</button>
            </div>
        )
    }
}

export default ZenPhrase