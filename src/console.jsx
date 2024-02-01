import './console.css';
import React, { useEffect, useState, useRef } from 'react';

function Console() {
    const[inputLineValue, setInputLineValue]= useState('');
    const[lines, setLines] = useState([]); //almacena los comandos insertados
    const[isHidden, setIsHidden] = useState(false);

    const inputRef = useRef(null);

    const handleReturn = (e) =>{
        if(e.key === 'Enter'|| e.key==='Return'){
            setLines([...lines, inputLineValue]); //A todas las lineas existentes, añade una nueva(abajo se le suma el ROOT:\>+{line})
            console.log(inputLineValue); //este es el valor ingresado en la consola.
            setInputLineValue(''); //el valor se instancia en un string vacío
            readConsoleLine(inputLineValue); //Ingresamos el valor del comando para evaluar si 
            console.log(lines);
        }
    };

    const commandLines ={
        "run":`'run' ----- Ejecutar un programa`,
        "cls":`'cls' ----- Limpia la consola`,
        "install":`'install' ----- Instala un programa`,
        "listProgram":`'lsprg' ----- Lista programas instalados`,
        "rmprogr":`'rmprg' ----- Borra un programa`
        }

    function readConsoleLine(command){
        switch(command){
            case '':
                setLines([...lines, 'ROOT:\\>'])
                break;
            case 'run map':
                break;
            case 'help':
                console.log('Imprimiendo ayuda');
                setLines([...lines, commandLines.cls, commandLines.install,commandLines.run, commandLines.listProgram])
                break;
            case 'cls':
                console.log('Clear Console');
                setIsHidden(true);
                setLines([]);
                break;
            case 'welcome':
                console.log('imprimiendo welcome');
                //showWelcome();
                break;
            default:
                console.log('Error Comando');
                setLines([...lines,`El comando "${inputLineValue}" no existe`,`Escribe 'help' para obtener una lista de comandos`])
                break;
        }
    }
    
    useEffect(()=>{
        if(inputRef.current){
            inputRef.current.focus(); //cambia el foco al último input creado
        }
    },[lines])
   
    return (
        <div className="console">
            <div className="menubar">::SigilCorp Console System::</div>
            <div id="console-structure" className="console-structure">
                <div style={{display:isHidden?'none':'block'}} className="welcome-text">
                    <p className='welcome-title'>::SigilCorp Console System::</p>
                    <span>
                        <p>Para ver una lista de comandos escribe<br/>
                         {'>'} <b>Help</b></p>
                        
                        Para ver información de un comando específico escribe
                            <br/>
                            {'>'} <b>el_comando -h</b>
                        <hr/>
                    </span>
                </div>
                {/*Aquí se implementan las líneas de la consola */}
                <div>
                    {/*Aquí se escriben las líneas Existentes */}

                    {lines.map((line,index)=>(
                        <div key={`line-${index}`} className='console-line'>
                            {line}
                        </div>
                        
                    ))}
                    

                {/*Aquí se escriben las nuevas líneas */}
                    <div key={`line-${lines.length}`} className='console-line'>
                        ROOT:\{'>'} 
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