import React, { useContext, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import classes from "./App.module.scss";
import { Header } from "./components/header/Header";
import { Menu } from "./components/menu/Menu";
import { AppRouter } from "./components/AppRouter";
import { Context } from "../index";
import { useAuthState } from "react-firebase-hooks/auth";
import { Loader } from "./components/loader/Loader";
import { MobileErrorMessage } from "./components/mobile_block/MobileErrorMessage";

function App() {
  //Повідомлення про відсутність мобільної версії
  useEffect(() => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
      //window.alert("Цей сайт не має мобільної версії!");

      return <MobileErrorMessage />;
    }
  }, []);
  ///////////////////////////////////////////////////////////////////

  const { auth } = useContext(Context);
  // eslint-disable-next-line
  const [user, loading, error] = useAuthState(auth);

  return (
    <BrowserRouter>
      <div className={classes.App}>
        <Header />
        <section>
          <Menu />
          <main>{loading ? <Loader /> : <AppRouter />}</main>
        </section>
      </div>
    </BrowserRouter>
  );
}

export default App;
