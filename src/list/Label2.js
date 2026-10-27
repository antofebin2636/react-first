import React from "react";
import './Label.css';
import { MyContext,MyNewContext } from "../Pages/mycontext";

class Label2 extends React.Component {
    render() {

        const props = this.props;
        const style = props.isActive ? { background: 'green' } : { background: 'red' };

        return (
            <MyContext.Consumer>
                {
                    (val) => {
                        if (val === false) return;
                        return (
                            <div>
                                <span onClick={
                                    () => {
                                        props.onAction(props.isActive ? 'active' : "non-active")
                                    }
                                } className='list-label-item' style={style}>{props.isActive ? 'Active' : "Non Active"}</span>

                                {<button onClick={props.onButtonClick} >{this.context}</button>}
                            </div>
                        )
                    }
                }
            </MyContext.Consumer>
        );
    }
}


Label2.contextType = MyNewContext;

export default Label2;