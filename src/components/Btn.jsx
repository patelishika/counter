const Btn = ({ name, fun }) => {
  return (
    <>
      <button
        className='text-4xl w-32 bg-purple-400 border border-purple-700 rounded p-3 m-2'
        onClick={fun}>
        {name}
      </button>
    </>
  );
};
export default Btn;
