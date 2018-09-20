import React from 'react'

class PreviousList extends React.PureComponent {
    render() {
        const {previousList, flagPrevious, handleClickPrevious} = this.props

        return (
            <div className="previous-list">
                {
                    previousList.length >= 1 && 
                    <a href="#" onClick={()=>handleClickPrevious(true)}>Ver anteriores</a>
                }
                {
                    !flagPrevious || 
                        <div>
                            <ul className="box-list-previous">
                                {previousList.reverse().map((item, index)=>
                                    <li key={index}>{item}</li>
                                )}
                            </ul>
                            <a href="#" onClick={()=>handleClickPrevious(false)}>Ocultar</a>
                        </div>
                }
            </div>
        )
    }
}

export default PreviousList