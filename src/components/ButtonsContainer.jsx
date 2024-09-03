/*import styles from './ButtonsContainer.module.css';
const ButtonsContainer = ({onButtonClick}) => {
  const ButtonNames = ["C","1","2","3","4","5","6","7","8","9","0","+","-","*","/","=","."]
    return (<div className={styles.buttonsContainer}>
        {ButtonNames.map((ButtonName) => (
          <button className={styles.button} onClick={() => onButtonClick(ButtonName)}>{ButtonName}</button>
        ))}
        
      </div>
    );
};

export default ButtonsContainer;*/
import styles from './ButtonsContainer.module.css';

const ButtonsContainer = ({ onButtonClick }) => {
  // List of button names and their respective classes
  const ButtonNames = [
    { name: "C", className: styles.clearButton },
    { name: "1", className: styles.numberButton },
    { name: "2", className: styles.numberButton },
    { name: "3", className: styles.numberButton },
    { name: "4", className: styles.numberButton },
    { name: "5", className: styles.numberButton },
    { name: "6", className: styles.numberButton },
    { name: "7", className: styles.numberButton },
    { name: "8", className: styles.numberButton },
    { name: "9", className: styles.numberButton },
    { name: "0", className: styles.numberButton },
    { name: "+", className: styles.operatorButton },
    { name: "-", className: styles.operatorButton },
    { name: "*", className: styles.operatorButton },
    { name: "/", className: styles.operatorButton },
    { name: "=", className: styles.equalsButton },
    { name: ".", className: styles.decimalButton }
  ];

  return (
    <div className={styles.buttonsContainer}>
      {ButtonNames.map((button) => (
        <button
          key={button.name}
          className={`${styles.button} ${button.className}`}
          onClick={() => onButtonClick(button.name)}
        >
          {button.name}
        </button>
      ))}
    </div>
  );
};

export default ButtonsContainer;
