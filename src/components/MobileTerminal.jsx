import React, { useState, useEffect, useRef } from "react";
import { commands, shortCutcommands } from "../constants";
import { useGlobaleState } from "../states/GlobaleState";

const MobileTerminal = () => {
  const [input, setInput] = useState("");
  const { historical, setHistorical, addHistorical } = useGlobaleState();
  const [history, setHistory] = useState([
    {
      active: true,
      command: "",
      output: commands.init,
    },
  ]);
  const inputRef = useRef(null);

  const handleCommand = () => {
    if (input.trim() === "") return;
    let commandOutput = "";
    let exeBatch = input.toLowerCase().split(" ");
    let cmd = exeBatch[1];

    if (!exeBatch.includes("mouad"))
      commandOutput = `'${input.toLowerCase()}' is not recognized as a command.`;
    else
      commandOutput =
        commands[cmd] ||
        shortCutcommands[cmd] ||
        "Command not found. Type 'help' for a list of commands.";

    setInput("");
    const command = { command: input, output: commandOutput, active: false };
    addHistorical(command);

    if (commandOutput === "clear") {
      setHistory([{ active: true, command: "", output: commands.init }]);
      return;
    }

    setHistory((prev) => [...prev.map((p) => ({ ...p, active: false })), command]);
  };

  useEffect(() => {
    inputRef.current.focus();
    inputRef.current.scrollIntoView();
  }, [history]);

  useEffect(() => () => setHistorical(historical.map((p) => ({ ...p, active: false }))), []);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleCommand();
  };

  return (
    <div className="fixed top-5 inset-0 w-full h-full bg-black text-green-400 font-mono p-4 flex flex-col text-sm md:text-base">
      {/* Terminal Content */}
      <div className="flex-grow overflow-y-auto p-2 overflow-x-hidden w-full">
        {history.map((entry, index) => (
          <div key={index} className="w-full break-words">
            {entry.command && <pre className="text-green-200 overflow-hidden break-words w-full whitespace-pre-wrap text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px]">$ {entry.command}</pre>}
            <pre className="pl-5 text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] overflow-hidden break-words w-full whitespace-pre-wrap">{entry.output}</pre>
          </div>
        ))}
      </div>

      {/* Terminal Input */}
      <div className="p-2 mb-3 bg-green-800 flex items-center text-sm md:text-base w-full">
        <span className="text-green-200">$</span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="bg-transparent outline-none border-none text-green-400 ml-2 w-full break-words"
        />
        <button
          onClick={handleCommand}
          className="ml-2 p-2 bg-green-600 hover:bg-green-700 text-white rounded-md"
        >
          ➤
        </button>
      </div>
    </div>
  );
};

export default MobileTerminal;
