import React from 'react'
import '../css/styles.css'

class Header extends React.PureComponent {
    render() {
        const {title, welcomeText} = this.props
        return (
            <div className="header">
                <div className="title">
                    <p>{title}</p>
                </div>
                <div className="welcome-text">
                    <p>{welcomeText}</p>
                </div>
            </div>
        )
    }
}

export default Header