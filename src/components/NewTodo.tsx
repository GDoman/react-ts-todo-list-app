import { useRef } from "react";

import classes from "./NewTodo.module.css";

const NewTodo: React.FC<{ onAddTodo: (enteredText: string) => void }> = (
  props
) => {
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = todoTextInputRef.current!.value;

    if (enteredText.trim().length === 0) {
      // throw an error
      return;
    }

    props.onAddTodo(enteredText);
  };

  const todoTextInputRef = useRef<HTMLInputElement>(null);

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="text">Todo text</label>
      <input ref={todoTextInputRef} type="text" id="text"></input>
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
