import './Input.css';

export default function Field({id, type, label}) {
    return(
        <div className='input'>
          <label htmlFor={id}>{label}</label>
          <input  id={id} type={type} />
        </div>
    );
}