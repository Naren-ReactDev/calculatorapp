export const Button =({name ,value,h,w,handleButtonClick})=>{
    const height=h?h:'50px';
    const width=w?w:'50px';
    const handleClick=()=>{
        handleButtonClick(name);
    }
    return (<>
    <button style ={{marginRight:'4px',height:height,width:width}} name={name}
    onClick={handleClick}>{value}</button>
    </>);
}