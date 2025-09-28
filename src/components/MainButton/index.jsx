// @ts-ignore
export default function Mainbutton({ children, onClick, className }) {
  return (
    <button onClick={onClick} className={` px-10 py-5 rounded-[10px] cursor-pointer ${className} `}>
      {children}
    </button>
  );
}
