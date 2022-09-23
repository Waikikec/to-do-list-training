import './styles.css';

interface InputProps {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAddTask: (e: React.FormEvent) => void;
}

const InputField = ({ todo, setTodo, handleAddTask }: InputProps) => {
  return (
    <form className='input' onSubmit={handleAddTask}>
      <input
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
