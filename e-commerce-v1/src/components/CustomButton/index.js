import React from 'react'

import {CustomButtonContainer} from './customButton.styles.js';

const CustomButton = (props) => {
    return (
        <CustomButtonContainer {...props}>
            {props.children}
        </CustomButtonContainer>
    )
}

export default CustomButton
