import React, {Component}  from 'react';

class Hello extends Component { 
    render(){
        const {color, name, isSpecial} = this.props;
        return(
            {isSpecial && <b>*</b>}
            안녕하세요 {name}
        )
    }
}