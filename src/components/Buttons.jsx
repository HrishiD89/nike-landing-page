const Buttons = ({ label, iconURL,backgroundColor,borderColor,textColor,fullWidth }) => {
  return (
    <button className={`flex justify-center items-center gap-2 px-7 py-4 font-montserrat text-lg border leading-none rounded-full
      ${backgroundColor ? `${backgroundColor} 
      ${borderColor} ${textColor}`: 'bg-coral-red  text-white border-coral-red' }
        ${fullWidth && 'w-full'}
     `}>
      {label}
      {iconURL && (
        <img src={iconURL} alt="arrow right icon" className="ml-2 rounded-full w-5 h-5" />
      )}
    </button>
  );  
};

export default Buttons;
