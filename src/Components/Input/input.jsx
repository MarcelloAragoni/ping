export default function Input({label,placeholder,type="text",name}){
    return(
        <>
          <label htmlFor={name} className="label">{label}:</label>
          <input type={type} name={name} id={name} placeholder={placeholder}/> 
        </>
    )
}