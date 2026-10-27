import React, {useContext} from 'react';
import './Label.css';
import { MyContext, MyNewContext } from '../Pages/HomePage';

function Label(props) {

    const val = useContext(MyContext);
    const msg = useContext(MyNewContext);

    const style = props.isActive ? {background: 'green'} : {background : 'red'};
         if(val === false){
            return ;
        }
    return(
   
        <div>
            <span onClick={
                () => {
                    props.onAction(props.isActive ? 'active' : "non-active")
                }
            } className='list-label-item' style={style}>{props.isActive ? 'Active' : "Non Active"}</span>

            <button onClick={props.onButtonClick} >{msg}</button>
        </div>
       );
}

// class Label extends React.Component {
//     render() {
//         const props = this.props;
//         const style = props.isActive ? {background: 'green'} : {background : 'red'}
//         return(
//             <div>
//                 <span onClick={
//                () => {
//                    props.onAction(props.isActive ? 'active' : "non-active")
//                }
//            } className='list-label-item' style={style}>{props.isActive ? 'Active' : "Non Active"}</span>
   
//            <button onClick={props.onButtonClick} >{props.title}</button>
//               </div>
//        );
         
//     }
// }


export default Label;