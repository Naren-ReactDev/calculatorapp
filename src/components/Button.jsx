export const Button =({name ,value,styleClass,w,handleButtonClick})=>{
    

    const handleClick=()=>{
        handleButtonClick(name);
    }
    return (<>
    <button  name={name} className={styleClass}
    onClick={handleClick}>{value}</button>
    </>);
}