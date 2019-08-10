import React from "react";
import Nav from "../../components/Navigation/Navigation";
import ArticlesView from "../ArticlesView/ArticlesView";
import NotesView from "../NotesView/NotesView";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Modal from "../../components/Modal/Modal";
import AppContext from "../../context";

const initNotes =
  localStorage.getItem("note") !== null
    ? JSON.parse(localStorage.getItem("note"))
    : "";
const initArticles =
  localStorage.getItem("article") !== null
    ? JSON.parse(localStorage.getItem("article"))
    : "";

class Root extends React.Component {
  state = {
    isModalOpen: false,
    note: [...initNotes],
    article: [...initArticles]
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

  addItem = (e, newItem) => {
    e.preventDefault();
    this.setState(
      prevState => ({
        [newItem.type]: [...prevState[newItem.type], newItem]
      }),
      this.saveData
    );
    this.closeModal();
  };

  saveData = () => {
    localStorage.setItem("note", JSON.stringify(this.state.note));
    localStorage.setItem("article", JSON.stringify(this.state.article));
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
            <Nav openModalFn={this.openModal} />
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
