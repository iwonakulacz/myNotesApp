import React from "react";
import styles from "./Form.module.scss";
import Button from "../Button/Button";
import Title from "../Title/Title";
import Radio from "./FormRadio";
import Input from "../Input/Input";
import AppContext from "../../context";

const type = {
  note: "note",
  article: "article"
};

class Form extends React.Component {
  state = {
    type: type.note,
    title: "",
    link: "",
    description: ""
  };

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleRadioChange = e => {
    this.setState({
      type: e.target.name
    });
  };

  render() {
    return (
      <AppContext.Consumer>
        {context => (
          <div className={styles.wrapper}>
            <Title>add new item</Title>
            <form className={styles.form} onSubmit={(e) => context.addItem(e, this.state)}>
              <div className={styles.radioWrapper}>
                <Radio
                  onRadioChangeFn={this.handleRadioChange}
                  checked={this.state.type === type.note}
                  name="note"
                >
                  note
                </Radio>
                <Radio
                  onRadioChangeFn={this.handleRadioChange}
                  checked={this.state.type === type.article}
                  name="article"
                >
                  article
                </Radio>
              </div>
              <Input
                onChangeFn={this.handleInputChange}
                value={this.state.title}
                name="title"
              >
                Title
              </Input>
              {this.state.type === type.article && (
                <Input
                  onChangeFn={this.handleInputChange}
                  value={this.state.link}
                  name="link"
                >
                  Link
                </Input>
              )}
              <Input
                onChangeFn={this.handleInputChange}
                value={this.state.description}
                name="description"
                textarea
              >
                Description
              </Input>
              <Button>add item</Button>
            </form>
          </div>
        )}
      </AppContext.Consumer>
    );
  }
}

export default Form;
