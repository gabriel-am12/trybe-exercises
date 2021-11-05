import React from 'react'
import PersonalData from './PersonalData'
import ProfessionalData from './ProfessionalData';

class Form extends React.Component {
    render() {
        const { sendForm, resetForm, changeHandler, currentState, onBlurHandler } = this.props;
        return(
            <form>
                <PersonalData
                    changeHandler={ changeHandler }
                    onBlurHandler= { onBlurHandler }
                    currentState= { currentState }
                />
                <ProfessionalData changeHandler={ changeHandler } />
                <input
                    type="button"
                    onClick={ sendForm }
                    value="Enviar"
                />
                <input
                    type="reset"
                    onClick={ resetForm }
                    value="Limpar"
                />
            </form>
        );
    }
}

export default Form