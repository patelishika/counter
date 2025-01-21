const Btn = ({ name, fun }) => {
  return (
    <>
      <button
        className='text-4xl w-32  bg-purple-300 border border-purple-700 rounded p-3 m-2 hover:bg-purple-400 shadow-md shadow-purple-300 hover:scale-110 transition-all duration-100'
        onClick={fun}>
        {name}
      </button>
    </>
  );
};
export default Btn;
