import './console.css';
import React, { useEffect, useState, useRef } from 'react';

function Console() {
    const[counterLines,setCounterLines]= useState(1); //contador de líneas, para que cada línea tenga un id único
    const[inputLineValue, setInputLineValue]= useState('');
    const[lines, setLines] = useState([]); //almacena los comandos insertados
    const inputRef = useRef(null);

    const handleReturn = (e) =>{
        if(e.key === 'Enter'|| e.key==='Return'){
            console.log('Enter Pressed');
            setCounterLines(counterLines+1);
            setLines([...lines, inputLineValue]);
            console.log(inputLineValue);
            setInputLineValue('');
        }
    }

    function readConsoleLine(command, currentLine){
        switch(command){
            case 'help':
                console.log('Imprimiendo ayuda');
                //showHelp(currentLine);
                break;
            case 'cls':
                console.log('Clear Console');
                //clearConsole();
                break;
            case 'welcome':
                console.log('imprimiendo welcome');
                //showWelcome(currentLine);
                break;
            default:
                console.log('Error Comando');
                //defaultReturn(currentLine);
                break;
        }
    }
    

    useEffect(()=>{
        if(inputRef.current){
            inputRef.current.focus();
        }
    },[lines])
   
    return (
        <div className="console">
            <div className="menubar">::SigilCorp Console System::</div>
            <div id="console-structure" className="console-structure">
                <div className="welcome-text">
                    <p className='welcome-title'>::SigilCorp Console System::</p>
                    <span>
                        <p>Para ver una lista de comandos escribe {'>'} <b>Help</b></p>
                        <p>Para ver info de un comando específico escribe
                            <br/>
                            {'>'} <b>el_comando -h</b></p>
                        <hr/>
                    </span>
                </div>
                {/*Aquí se implementan las líneas de la consola */}
                <div>
                    {lines.map((line,index)=>(
                        <div key={`line-${index}`} className='console-line'>
                            [{index}] ROOT:\{'>'} {line}
                        </div>
                    ))}
                    <div key={`line-${lines.length}`} className='console-line'>
                        [{lines.length}] ROOT:\{'>'}
                        <input
                            ref={inputRef}
                            value={inputLineValue}
                            onChange={(e)=>setInputLineValue(e.target.value)}
                            onKeyDown={handleReturn}
                        />
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Console;

/*
<div className="menubar"> Console </div>
    <div id="console-structure" class="console-structure">
        <div className="welcome-text">
            <p>::Bienvenid_ a la Consola del sistema::</p>
            <p> Para ver una lista de comandos escribe <b>help</b></p>
            <p> Para obtener ayuda sobre un comando escribe el_comando <b>-h</b> </p>
            <p> Para volver a imprimir este mensaje escribe <b>welcome</b></p>
        </div>
        <div id="console-line-1" className="console-line">[1] Root:\ {'>'}  <input autocomplete="off" id="console-input-1"></input> </div>
    </div>
*/