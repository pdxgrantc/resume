
export const BottomBorder = ({ children, click }) => {
    return (
        <button onClick={click} className='buttons center w-fit flex gap-3 mt-1 hover:text-white hover:mt-0 hover:mb-1 font-semibold transition-all durration-300 ease-in-out'>
            {children}
        </button>
    );
};
