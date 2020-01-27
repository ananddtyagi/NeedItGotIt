import React from 'react';
import Tab from '@material-ui/core/Tab';
import styled from 'styled-components';
import InputCard from './inputcard';
import DisplayCard from './displaycard.components';
import Dialog from '@material-ui/core/Dialog';

import './maincontent.styles.scss';

const CustomButtonContainer = styled.button`
    min-width: 165px;
    width: auto;
    height: 50px;
    letter-spacing: 0.5px;
    line-height: 50px;
    padding: 0 35px 0 35px;
    font-size: 15px;
    text-transform: uppercase;
    font-family: 'Open Sans Condensed';
    font-weight: bolder;
    cursor: pointer;
    justify-content: center;
`;

class MainContent extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            NeedItCollections: [],
            GotItCollections: [],
            isAddOn: false,
            side: "NeedIt",
            num: 1
        };
    }

    handleSubmit = ({name, email, description}) => {
        if(this.state.side === "NeedIt"){
            this.state.NeedItCollections.concat([{name},{email},{description},this.state.num]);
            this.setState({NeedItCollections: this.state.NeedItCollections});
            console.log({name});
        }
        else{
            this.state.GotItCollections.concat([{name},{email},{description},this.state.num]);
            this.setState({GotItCollections: this.state.GotItCollections});
        }
        this.setState({isAddOn: false});
        this.setState({num:this.state.num+1});
    };

    handleChange = event => {
        const {value,name} = event.target;
        this.setState({[name]: value});
    };

    handleCancel = () => {
        this.setState({isAddOn: false});
    }

    render() {

        return (
            <div>
            <Tab label="Need It" onClick={()=>this.setState({side: "NeedIt"})}/>
            <Tab label="Got It" onClick={()=>this.setState({side: "GotIt"})}/>

            <CustomButtonContainer onClick={() => this.setState({isAddOn: true})}>add</CustomButtonContainer>

            <Dialog open={this.state.isAddOn} aria-labelledby="form-dialog-title">
                <InputCard onCancel={this.handleCancel} onSubmit={this.handleSubmit}/>
            </Dialog>
            
            <div className='collections-overview'>
                {this.state.side==='NeedIt'?
                    (this.state.NeedItCollections.map(item=>
                    <DisplayCard key={item[3]} cardName={item[0]} cardEmail={item[1]} cardDescription={item[2]}/>)
                    )
                : this.state.GotItCollections.map(item=>
                    <DisplayCard key={item[3]} cardName={item[0]} cardEmail={item[1]} cardDescription={item[2]}/>)
                }
            </div>
            
            </div>
        );
    }
}

export default MainContent;
