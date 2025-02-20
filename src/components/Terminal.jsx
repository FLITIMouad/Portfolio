import React, { useState, useEffect, useRef } from "react";
import { commands,shortCutcommands } from "../constants";
import { useGlobaleState } from "../states/GlobaleState";

const Terminal = ({absolute=false}) => {
  const [input, setInput] = useState("");
  const {historical,setHistorical,addHistorical} =useGlobaleState();
  const [history, setHistory] = useState([
    {
      active: true,
      command: "",
      output:  commands.init,
    },
  ]);
  const inputRef = useRef(null);
  

  const handleCommand = () => {
    if (input.trim() === "") return;
    let commandOutput ="";
    let exeBatch =input.toLowerCase().split(" ");
    let cmd=exeBatch[1];
    if(!exeBatch.includes("mouad")) 
        commandOutput =`'${input.toLowerCase()}' is not recognized as an internal or external command,`;
    else
        commandOutput = commands[cmd] || shortCutcommands[cmd]|| "Command not found. Type 'help' for a list of commands.";
        setInput("");
    const command= { command: input, output: commandOutput,active:false };
    addHistorical(command);
    if(commandOutput=="clear")
    {
        setHistory([  {
            active: true,
            command: "",
            output:  commands.init,
          },]);
        
        return;
    }

    setHistory((prev) => [...prev.map((p) => ({ ...p, active: false })),command]);
  };
 
  useEffect(() => {
    inputRef.current.focus();
    inputRef.current.scrollIntoView() ;
  }, [history]);

  useEffect( () => () => setHistorical(historical.map((p) => ({ ...p, active: false }))), [] );
  const handleKeyDown = (e) => {
    if(e.key === "Enter" )
        handleCommand()

    if (e.keyCode === 38) {
      let index = historical.findIndex((entry) => entry.active);
      index= index==-1 ? historical.length  : index;
      console.log(historical)
      if (index >= 0 && historical.length) {
        let decrimentedIndex = index ==0 ? 0 : 1;
        setInput(historical[index-decrimentedIndex].command);
        setHistorical( historical.map((p, i) => ({ ...p, active: i === index - decrimentedIndex})));
      }
    } else if (e.keyCode === 40) { 
      const index = historical.findIndex((entry) => entry.active);
      if (index < historical.length - 1) {
        setInput(historical[index + 1].command);
        setHistorical(historical.map((p, i) => ({ ...p, active: i === index + 1 })));
      }
    }
        
  }
  return (
    <div onClick={()=>{
        inputRef.current.focus();
    }}  className={`${absolute ? "absolute":""} inset-0 w-full h-full bg-black text-green-400 font-mono p-4 overflow-y-auto`}>
      <div className="mb-4 p-2">
        {history.map((entry, index) => (
          <div key={index}>
            {entry.command && (<p className="text-green-200">$ {entry.command}</p>)}
            <p className="pl-5">{entry.output}</p>
          </div>
        ))}
      </div>
      <div className="flex">
        <span className="text-green-200">$</span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="bg-transparent outline-none border-none text-green-400 ml-2 w-full"
        />
      </div>
    </div>
  );
};

export default Terminal;