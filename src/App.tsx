import "./App.css";

import { Header, Footer, Content, Faq, Player } from "./components";

const App = () => {
  return (
    <>
      <Header/>
      <Content>
        <Player/>
        <Faq/>
      </Content>
      <Footer/>
    </>
  );
};

export default App;
