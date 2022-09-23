import { useRef } from 'react';
import './styles.css';

interface InputProps {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAddTask: (e: React.FormEvent) => void;
}

const InputField = ({ todo, setTodo, handleAddTask }: InputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  console.log(inputRef);

  return (
    <form
      className='input'
      onSubmit={(e) => {
        handleAddTask(e);
        inputRef.current?.blur();
      }}
    >
      <input
        ref={inputRef}
        type='text'
        placeholder='Enter a task'
        className='input__box'
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button className='input_submit' type='submit'>
        Go
      </button>
    </form>
  );
};

export default InputField;
