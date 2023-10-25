import React, { useState } from 'react'
import { View, Text, StyleSheet,TouchableOpacity, FlatList } from "react-native";

import {ButtonStyles} from "../styles/button";
import { inputStyle } from '../styles/inputStyle';



function Calculator() {

    const [firstNumber, setFirstNumber ]= useState("");
    const [secondNumber, setSecondNumber] = useState("");
  const [operation, setOperation] = useState("");
  const [result, setResult] = useState(null);

    const handlePress =(btn)=>{
        if(btn === '+' || btn === '-' ||btn === 'x' || btn === '/' )
        {
            handleOperationPress(btn);
        }
        else if( btn === '%' ||btn === '+/-' ){
          handleOneStepOperation(btn);
        }
        else if(btn === 'C')
        {
            clear();
        }
        else if(btn === "⌫")
        {
            setFirstNumber(firstNumber.slice(0, -1));

        }
        else if(btn === "="){
            getResult();
        }
        else
        {
            handleNumberPress(btn);
        }
    }


  const handleNumberPress = (buttonValue) => {
    if (firstNumber.length < 10) {
      setFirstNumber(firstNumber + buttonValue);
    }
  };

  const handleOperationPress = (buttonValue) => {
    setOperation(buttonValue);
    if (result !== null) {
      setSecondNumber(result.toString());
      setResult(null);
    } else {
        setSecondNumber(firstNumber);
      setFirstNumber("");
    }
  };
// ...

const handleOneStepOperation = (buttonValue) => {
  switch (buttonValue) {
    case "%":
      if (firstNumber !== "" || result!=='') {
        const percentageValue = parseInt(firstNumber) / 100;
        setFirstNumber(percentageValue.toString());
      }
      break;
    case "+/-":
      if (firstNumber !== "") {
        const negatedValue = parseInt(firstNumber) * -1;
        setFirstNumber(negatedValue.toString());
      }
      break;
    default:
      break;
  }
};




  

  const clear = () => {
    setFirstNumber("");
    setSecondNumber("");
    setOperation("");
    setResult(null);
  };

  const firstNumberDisplay = () => {
    if (result !== null) {
        const resultValue = parseInt(result);
        return (
          <Text style={resultValue < 99999 ? [inputStyle.screenFirstNumber, { color: '#46D5B2' }] : [inputStyle.screenFirstNumber, { fontSize: 50, color: '#46D5B2' }]}>
            {resultValue.toString()}
          </Text>
        );
      }
    if (firstNumber && firstNumber.length < 6) {
      return <Text style={inputStyle.screenFirstNumber}>{firstNumber}</Text>;
    }
    if (firstNumber === "") {
      return <Text style={inputStyle.screenFirstNumber}>{"0"}</Text>;
    }
    if (firstNumber.length > 5 && firstNumber.length < 8) {
      return (
        <Text style={[inputStyle.screenFirstNumber, { fontSize: 70 }]}>
          {firstNumber}
        </Text>
      );
    }
    if (firstNumber.length > 7) {
      return (
        <Text style={[inputStyle.screenFirstNumber, { fontSize: 50 }]}>
          {firstNumber}
        </Text>
      );
    }
  };

  const getResult = () => {
      switch (operation) {
        case "+":
            clear();
            setResult(parseInt(secondNumber) + parseInt(firstNumber));
            break;
        case "-":
            clear();
            setResult(parseInt(secondNumber) - parseInt(firstNumber));
            break;
        case "x":
            clear();
            setResult(parseInt(secondNumber) * parseInt(firstNumber));
            break;
        case "/":
            clear();
            setResult(parseInt(secondNumber) / parseInt(firstNumber));
            break;
       
        default:
            clear();
            setResult(null);
            break;
        }
    };


    const btns =[
        "C", "+/-" , "%", "/",
        "7", "8" , "9", "x",
        "4", "5" , "6", "-",
        "1", "2" , "3", "+",
        ".", "0" , "⌫", "=",
    ]

    return (
        <View style={{ position:"absolute", bottom:50,
        }}>
            <View
        style={{
          height: 120,
          width: "90%",
          justifyContent: "flex-end",
          alignSelf: "center",
        }}
      >
        <Text style={inputStyle.screenSecondNumber}>
          {secondNumber}
          <Text style={{ color: "purple", fontSize: 50, fontWeight: '500' }}>{operation}</Text>
        </Text>
        {firstNumberDisplay()}
      </View>

<View style={inputStyle.horizontalLine} />

            <View style={ButtonStyles.buttonContainer}>
            {
                btns.map((btn,index) => (
  <TouchableOpacity key={btn} style={[ButtonStyles.btn, ((index+1)%4)==0 ? {backgroundColor:"rgb(95, 82, 179)"}: "" ]} onPress={()=>handlePress(btn)}>
    <Text style={[ButtonStyles.buttonTxt,((index+1)%4)==0 ? {color:"white"}: "" ]}>{btn}</Text>
  </TouchableOpacity>
))

            }</View>


            
        </View>
    )
}

export default Calculator;