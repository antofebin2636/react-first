import React from "react";
import './AddNew.css';


class AddNew extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            titleInput: '',
            descInput:'',
            isActive:false
        }
    }

    handleChange = (evt)=>{
        this.setState({
            titleInput : evt.target.value
        })
    }

    handleClick = () => {
        console.log(this.state.titleInput);
    }

    handleTitle = (evt) =>{
        this.setState({
            titleInput: evt.target.value
        })
    }

    handleDesc = (evt) =>{
        this.setState({
            descInput: evt.target.value
        })
    }

    handleStatus = (evt) =>{
        this.setState({
            isActive: evt.target.checked
        })
    }


    handleClick = () => {
            console.log(this.state);
            const {titleInput,descInput,isActive } = this.state;

            if(titleInput){
                this.props.onAdd({
                    id: Math.floor(Math.random()*100) + 10,
                    title : titleInput,
                    descr: descInput,
                    isActive: isActive
                })
            }

            this.setState({
                 titleInput: '',
            descInput:'',
            isActive:false
            })

    }

    render(){
        return (
            <div className="add-new">
                <input type="text" placeholder="title" value={this.state.titleInput} onChange={this.handleTitle} />
                <input type="text" placeholder="Description" value={this.state.descInput} onChange={this.handleDesc} />
                <span>Is Active</span>
                <input type="checkbox" checked={this.state.isActive} onChange={this.handleStatus} />
                <button onClick={this.handleClick}>Add Item</button>
            </div>
        )
       
    }
}

export default AddNew