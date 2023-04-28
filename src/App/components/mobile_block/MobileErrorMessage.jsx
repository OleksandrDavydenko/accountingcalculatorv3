import React from "react";
import logo from "../header/logo.png";

export const MobileErrorMessage = () => {
  return (
    <div
      style={{
        height: "600px",
        display: "flex",
        fontSize: "25px",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img src={logo} style={{ width: "150px" }} alt="UAbuh-logo" />
      <p>Шановний користувачу,</p>
      <p style={{ textAlign: "center" }}>
        На жаль, наш ресурс не підтримує мобільні пристрої. Проте, ви можете
        скористатися нашим сайтом на десктопних комп'ютерах та ноутбуках, щоб
        отримати доступ до всіх наших послуг та інформації.
      </p>
      <p>Дякуємо за розуміння.</p>
    </div>
  );
};
