import React from "react";
import Header from './components/Header';
import Footer from './components/Footer'
import HomePage from './Pages/HomePage';
import DummyPage from "./Pages/DummyPage";
import Usage from "./Pages/Usage";


class MyApp extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            currentSelected: 'home'
        }
    }

    handleMenuSelect = (val) => {
        // console.log(val);
        this.setState({
            currentSelected: val
        })
    }


    getPage() {
        const { currentSelected } = this.state;

        switch (currentSelected) {
            case 'home':
                return <HomePage />
            case 'usage':
                return <Usage name ='usage' key='usage' />
            case 'settings':
                return <DummyPage name='settings' key='settings' />
            case 'logout':
                return <DummyPage name='logout' key='logout' />
                break;

            default:
                break;
        }

    }

    render() {
        return (
            <div className='app'>
                <Header onMenuSelect={this.handleMenuSelect} />
                <div className='app-body'>
                   {this.getPage()}
                </div>
                <Footer />
            </div>
        )
    }
}

export default MyApp;