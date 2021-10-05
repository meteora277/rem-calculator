import React from 'react';
import { Button, Container } from './styles/key';

export default function Key(props){

    return(
        
        <Button onClick={props.onClick}>
            {props.number}
        </Button>
        
    )

}

Key.Container = ({children}) => (<Container>{children} </Container>)

