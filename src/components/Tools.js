import React from "react";
import './Tools.css';
import AddNew from "./AddNew";
//  import { Children } from "react";


class Tools extends React.Component {
    render() {
        const { children, onAction, listValue, onAdd, dataRefresh} = this.props;

        const onlyChildren = React.Children.only(children);
        const count = onlyChildren.props.data.length;


   
        
        return (
            <div className="list-tools">
                <div className="list-header">
                    <select onChange={onAction} name="status" value={listValue}>
                    <option value="all">All</option>
                    <option value="active">Active</option>
                    <option value="non-active">Non Active</option>
                    </select>
                </div>
                <AddNew onAdd = {onAdd} />
             <div  className="refresh" onClick={dataRefresh}>Refresh</div>
                {children}
                <div className="list-footer">
                    Total: {count} item
                </div>
            </div>
        );
    }

}

// function Tools(props){
//     const {children} = props;

//     const onlyChildren = Children.only(children);

//     const count = Children.count(onlyChildren.props.children);

//     console.log(onlyChildren.props);

//     return (
//                     <div className="list-tools">
//                         <div className="list-header">
//                             <select name="status">
//                             <option value="all">All</option>
//                             <option value="active">Active</option>
//                             <option value="non-active">Non Active</option>
//                             </select>
//                         </div>
//                         {children}
//                         <div className="list-footer">
//                             Total: {count} item
//                         </div>
//                     </div>
//                 );

// }

export default Tools;