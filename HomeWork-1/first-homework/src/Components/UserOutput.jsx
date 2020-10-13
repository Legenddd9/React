import React from 'react';
import styles from "./UserComponent.module.css"

class UserOutput extends React.Component {
  render() {
    return (
      <div className={styles.output}>
        User OutPut :   {this.props.smsText}
        <div className={styles.sorry}>
        ბოდიში არ ვიცოდი კვირას თუ იყო ბოლო ვადა
       </div>
      </div>  
    );
  }
}

export default UserOutput;