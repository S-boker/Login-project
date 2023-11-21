import './Form.css';
import Field from './Input.js'



export default function Input({inputs, header, submitText='Enter', onSubmit, err='', info=''}) {
    if(info){
        return(<div className='info'>
            {info}
        </div>
        );
    }else return(
    <>
     <form className='Login' onSubmit={e => onSubmit(e)}>
        <header className="App-header">
           {header}
        </header>
        {inputs.map(i => (<Field key={i.id} id={i.id} type={i.type} label={i.label}/>))}
        <input type='submit' value={submitText}/>
        {errHTML(err)}
      </form>
      {infoHTML(info)}
      </>
    );
}

function errHTML(err){
    if(err){
        return(<div className='err'>
            {err}
        </div>
        );
    }else return (<></>);
}

function infoHTML(info){
    
}