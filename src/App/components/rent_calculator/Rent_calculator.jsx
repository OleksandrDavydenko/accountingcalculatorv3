import React, { useContext, useState }  from "react";
import classes from "./rentCalculator.module.scss";
import { Context } from "../../../index";
import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { Loader } from '../loader/Loader';
import { useInput } from "../../utils/hooks/useInput";
import { RowSelection } from './rent_table/Table'
import { incomeData } from "./utils/incomeDataRentCalc";
import { doc, setDoc, deleteDoc } from "firebase/firestore";
import { calculations } from "./utils/calculations"; 
import { clearInp } from "./utils/clearInput";

export const RentCalculator = () => {
  
  const {auth, firestore} = useContext(Context)

  const [user] = useAuthState(auth)

  const [dbData, loading] = useCollectionData(
        firestore.collection('users').doc(user.uid).collection("agreements")
    )
//Бумеранг, получаю стэйт (состояние чекбоксов)с другого компонента//-//-//
  const [selectedRows, setselectedRows] = useState([]);

  const changedData =  (selectedRows) => {
        setselectedRows(selectedRows)
    }

  // Проверяем выбран ли договор для удаления
  let activeDelButton = true
  if (selectedRows.length > 0) {
    activeDelButton = false
  }
//-//-//-//-//-//-//-//-//-//-//-//-//-//-//-//-//-//-//-//-//-//-//-//-//

// создаем инпуты
  const korespondentName = useInput(
    {
      type: "text",
      placeholder: "Назва орендодавця:",
      name: "korespondentName"
    },
    "",
    {
      isEmpty: true,
      minLenght: 3
    }
  );
  const agreementNumber = useInput(
    {
      type: "text",
      placeholder: "Номер договору:",
      name: "agreementNumber",
      width: '200'
    },
    "",
    {
      isEmpty: true,
      minLenght: 3
    }
  );
  const aremeentDate = useInput(
    {
      type: "date",
      placeholder: "Дата початку договору:",
      name: "aremeentDate",
      width: '170'
    },
    "",
    {
      isEmpty: true,
    }
  );
  const aremeentDateEnd = useInput(
    {
      type: "date",
      placeholder: "Дата закінчення договору:",
      name: "aremeentDateEnd",
      width: '170'
    },
    "",
    {
      isEmpty: true,
    }
  );
  const discountRate  = useInput(
    {
      type: "number",
      placeholder: "Ставка дисконтування %:",
      name: "discountRate",
      width: '150',
    },
    "",
    {
      isEmpty: true,
    }
  );
  const monthPayment = useInput(
    {
      type: "number",
      placeholder: "Місячний платіж:",
      name: "monthPayment",
      width: '150',
    },
    "",
    {
      isEmpty: true,
    }
  );
    // Добавляем инпуты в массив
  const arrayInputs = [
    korespondentName,
    agreementNumber,
    aremeentDate,
    aremeentDateEnd,
    discountRate,
    monthPayment,
  ];

  //Проверяем инпуты все ли проверки прошли
  function checkValidation(arrayInputs) {
    return arrayInputs.every(
      (element) => !element.isEmpty && !element.minLengthError
    );
  }
  //меняем состояние кнопки
  let activeBtn = !checkValidation(arrayInputs);

  // отправляет обьект на firestore
  const sendData = async (obj) => {
        const timestamp =  String(Date.now())
        await setDoc(doc(firestore.collection('users').doc(user.uid).collection('agreements'), timestamp), obj);
    }
  //удаляем данные
  const removeData = async (obj) => {
    await deleteDoc(doc(firestore.collection('users').doc(user.uid).collection('agreements'), obj.timestamp), obj)
  }
// Если в базе данных есть записи то выполняем рассчеты
   let tableData = {}
    if(dbData) {
       tableData = calculations(dbData)
    }
    console.log(tableData);

  //отправляем данные, по нажатию на кнопку
  function sendDataHeandler() {
    sendData(incomeData(arrayInputs));
    clearInp(arrayInputs)
  }

  function dellDataHeandler () {
    if (window.confirm('Ви дійсно бажаєте видалити обрані договори?')) {
        for (let i = 0; i < dbData.length; i++) {
          const element = dbData[i];
          for (let index = 0; index < selectedRows.length; index++) {
            if (Number(i) === Number(selectedRows[index].id)) {
              removeData(element)
            }
          }
        }
      }
    console.log('deleted');
  }

  if (loading) {
    return <Loader/>
  }

  return (
    <div className={classes.container}>
        <div className={classes.income_form}>
            {arrayInputs.map((element) => (
                <div className={classes.input_box}  key={element.inputAttribute.name}>
                {element.isDirty && element.isEmpty && (
                    <div style={{ color: "red" }}>Поле не може бути пустим</div>
                )}
                {element.isDirty && element.minLengthError && (
                    <div style={{ color: "red" }}>Некоректна довжина поля</div>
                )}
                <p className={classes.input_title}>{element.inputAttribute.placeholder}</p>
                <input
                    style={{width: element.inputAttribute.width + 'px'}}
                    type={element.inputAttribute.type}
                    /* placeholder={element.inputAttribute.placeholder} */
                    className={classes.input_view}
                    value={element.value}
                    name={element.inputAttribute.name}
                    onChange={(e) => element.onChange(e)}
                    onBlur={(e) => element.onBlur(e)}
                    autoComplete="off"
                />
                </div>
            ))}
            </div>
            <button
                style={{marginBottom: '3%'}}
                className={classes.add_button}
                disabled={activeBtn}
                onClick={() => sendDataHeandler()}
            >
                Додати договір
            </button>
             <button
                style={{marginBottom: '3%'}}
                className={classes.del_button}
                disabled={activeDelButton}
                onClick={() => dellDataHeandler()}
            >
                Видалити договір
            </button>
        <RowSelection data={tableData} changedData={changedData}/>
    </div>
  );
};
