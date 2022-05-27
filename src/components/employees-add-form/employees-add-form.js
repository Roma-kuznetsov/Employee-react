import { Component } from 'react';

import './employees-add-form.css';

class EmployeesAddForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            salary: ''
        }
    }

    render() {
        const { name, salary } = this.state;
        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form
                    className="add-form d-flex">
                    <input type="text"
                        className="form-control new-post-label"
                        placeholder="Как его зовут?"
                        name='name'
                        value={name}
                        onChange={(e) => {
                            this.setState({
                                name: e.currentTarget.value
                            });
                        }} />
                    <input type="number"
                        className="form-control new-post-label"
                        placeholder="З/П в $?"
                        name='salary'
                        value={salary}
                        onChange={(e) => {
                            this.setState({
                                salary: e.currentTarget.value
                            });
                        }} />
                    <button
                        onClick={() => { this.props.addUser(name,salary) }}
                        type="button"
                        className="btn btn-outline-light">
                        Добавить
                    </button>
                </form>
            </div>
        )
    }
}
export default EmployeesAddForm;