import { Component, useState } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmploeesList from '../emploees-list/emploees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';


class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            data: [
                {name: 'Lenox', salary: 300, increase: false, id: 1},
                {name: 'Mark', salary: 900, increase: true, id: 2},
                {name: 'Ginny', salary: 1500, increase: true, id: 3}
            ]
        }
    }
    
    deleteItem = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }
    
    render() {
        return(
            <div className="app">
                <AppInfo/>
    
                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/>
                </div>
                <EmploeesList 
                data = {this.state.data}
                onDelete={this.deleteItem}/>
                <EmployeesAddForm/>   
            </div>
        )
    }
}

export default App;