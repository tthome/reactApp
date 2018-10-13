import React from 'react';

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'justify'
    }
};

class Button extends React.Component {
    render() {
        const {handleButtonClick, buttonContent = 'Add', description} = this.props;

        return (
            <div style={styles.container}>
                <h1>Press to add to-do</h1>
                {description && description !== '' && <span>{description}</span>}
                <button onClick={handleButtonClick}>{buttonContent}</button>
            </div>
        )
    }
}

export default Button