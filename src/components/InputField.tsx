import './styles.css';

const InputField = () => {
  return (
    <form className='input'>
      <input type='text' placeholder='Enter a task' className='input__box' />
      <button className='input_submit' type='button'>
        Go
      </button>
    </form>
  );
};

export default InputField;
