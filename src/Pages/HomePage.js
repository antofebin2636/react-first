import React from "react";
import ListItem from '../list/ListItem';
import Tools from '../components/Tools';
import SimpleList from "../list/SimpleList";
import { MyContext,MyNewContext } from "./mycontext";
import JustInfo from "./JustInfo";



class HomePage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      data: [],
      activeState: 'all',
      message: '',
      showLabel: true,
      message:'Hello'
    }
  }

  componentDidMount() {
    // console.log('componentDidMount');
    fetch('/data.json')
      .then(res => res.json())
      .then((data) => this.setState({
        data
      }))
  }

  componentDidUpdate(prevProps, prevState) {
    //   console.log('componentDidUpdate');
    if (prevState.message !== this.state.message) {
      this.setState({
        message: 'Hello'
      })
    }
    // console.log(this.state.message);
  }

  componentWillUnmount() {
    // console.log('componentWillUnmount');
  }

  onListChange = (evt) => {
    // console.log(evt.target.value);

    const value = evt.target.value;
    this.setState({
      activeState: value
    })




    // this.setState({
    //     data: newList
    // })


    // this.setState({
    //     data: newList
    // }, () => {
    //     console.log('Render');
    // })


    // this.setState((state) => ({

    //             data:newList

    // }));

  }

  handleDelete = (item) => {
    // console.log(item);
    const newList = this.state.data.filter(element => element.id !== item.id);

    this.setState({
      data: newList
    })
  }

  onLabelClick = (arg) => {
    this.setState({
      activeState: arg
    })
  }

  onButtonClick = (arg) => {
    console.log(arg.title)
  }


  handleAdd = (item) => {
    this.setState({
      // showLabel
    })
  }

  handleDataRefresh = () => {
    fetch('/data2.json')
      .then(res => res.json())
      .then((data) => this.setState({
        data
      }))
  }

  handleShow = (evt) => {

    this.setState({
      showLabel: evt.target.checked
    })
  }


  render() {



    const { data, activeState } = this.state;

    const newList = data.filter((item) => {
      if (activeState === 'all') {
        return true;
      }
      if (activeState === 'active') {
        return item.isActive === true;
      }
      if (activeState === 'non-active') {
        return item.isActive === false;
      }
    });


    return (
      <div>
        <input type="checkbox" checked={this.state.showLabel} onChange={this.handleShow} ></input>Show Label
        <MyNewContext.Provider value={this.state.message}>
          <MyContext.Provider value={this.state.showLabel}>
            <Tools listValue={activeState} onAction={this.onListChange} onAdd={this.handleAdd} dataRefresh={this.handleDataRefresh}>
              <SimpleList data={newList} onAction={this.handleDelete} onLabelClick={this.onLabelClick} onButtonClick={this.onButtonClick} />
            </Tools>
            <JustInfo/>
          </MyContext.Provider>
        </MyNewContext.Provider>
      </div>

    );
  }
}


export default HomePage;

