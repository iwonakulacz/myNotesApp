import React from "react";
import List from "../../components/List/List";
import Nav from "../../components/Navigation/Navigation";
import ArticlesView from "../ArticlesView/ArticlesView";
import NotesView from "../NotesView/NotesView";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Modal from "../../components/Modal/Modal";
import AppContext from "../../context";

const initialList = [
  {
    title: "Pierwszy tytul",
    link: "https://google.pl",
    description: "Lorem ipsum dolor em it"
  },
  {
    title: "Drugi tytul",
    link: "https://google.pl/j",
    description: "Lorem ipsum dolor"
  },
  {
    title: "Trzeci tytul",
    link: "https://google.pl/k",
    description: "Lorem ipsum dolor em it orem ipsum dolor em it"
  }
];

class Root extends React.Component {
  state = {
    items: [...initialList],
    isModalOpen: false,
    title: "",
    link: "",
    description: ""
  };

  openModal = () => {
    this.setState({
      isModalOpen: true
    });
  };

  closeModal = () => {
    this.setState({
      isModalOpen: false
    });
  };

  addItem = e => {
    e.preventDefault();

    const newItem = {
      title: e.target[0].value,
      link: e.target[1].value,
      description: e.target[2].value
    };

    this.setState(prevState => ({
      items: [...prevState.items, newItem]
    }));

    e.target.reset();
  };

  render() {
    const ContextElement = {
      ...this.state,
      addItem: this.addItem
    };
    const { isModalOpen } = this.state;

    return (
      <>
        <AppContext.Provider value={ContextElement}>
          <BrowserRouter>
            <Nav openModalFn={this.openModal}/>
            <List items={this.state.items} />
            {isModalOpen && <Modal closeModalFn={this.closeModal} />}
            <Switch>
              <Route exact path="/" component={NotesView} />
              <Route path="/articles" component={ArticlesView} />
            </Switch>
          </BrowserRouter>
        </AppContext.Provider>
      </>
    );
  }
}

export default Root;
