import React, { Component } from 'react';
import UserOutput from './UserOutput'
import styles from "./UserComponent.module.css"


class UserInput extends Component {
    constructor(props){
        super(props);

        this.state = {
            context : ''
        };

        this.inputUpdated = this.inputUpdated.bind(this);
    }

    inputUpdated(e){
        const { value } = e.target;

        this.state.context.length <= 50 && this.setState({ context : value })
    }

  render() {
    return (
      <div className={styles.textform}>
        <form>
          <label htmlFor="smsText">Enter Something</label>
          <br/>
          <input
           className="{styles.formcontrol}"
           type="input"
           name="smsText"
           value={this.state.zipcode}
           onInput={this.inputUpdated} />
          <button type="submit" className='btn btn-success'>Send</button>
        </form>
        <UserOutput smsText={this.state.context} />
      </div>
    );
  }
}

export default UserInput;