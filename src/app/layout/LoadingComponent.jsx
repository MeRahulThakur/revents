import React from 'react'
import { Dimmer, Loader } from 'semantic-ui-react';

const LoadingComponent = ({inverted= true}) => {
    return (
        <Dimmer invertrd={inverted} active={true}>
            <Loader content='Loading...'/>
        </Dimmer>
    )
}

export default LoadingComponent;