import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { useXTerm } from 'react-xtermjs';
import { FitAddon } from '@xterm/addon-fit';
import Draggable from 'react-draggable';

Modal.setAppElement('#root');

const TerminalModal = ({ isOpen, onRequestClose }) => {
  const { instance, ref } = useXTerm();
  const [commandBuffer, setCommandBuffer] = useState("");
  const fitAddon = new FitAddon();

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        if (instance) {
          instance.loadAddon(fitAddon);
          fitAddon.fit();
          console?.log("Terminal is open");
          const username = "Mouad Fliti";
          const hostname = "OUJDA";
          const branch = "STRIXXER";
          instance.writeln(`\x1b[32m${username}@${hostname} \x1b[35m${branch} \x1b[33m~\x1b[0m`);
          instance.write("\x1b[32m$ \x1b[0m");
          instance?.onData((data) => {
            console.log(data);
            instance.write(data);
          });
        } else {
          console.error("Terminal instance is not loaded");
        }
      }, 200); // Delay to ensure the modal is fully rendered
    }
  }, [isOpen,ref,instance]);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Terminal Modal"
      className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50"
    >
      <Draggable handle=".modal-header">
        <div className="bg-primary rounded-lg shadow-lg w-full max-w-3xl h-3/4 flex flex-col">
          <div className="modal-header flex justify-between items-center p-4 cursor-move">
            <h2 className="text-2xl font-bold">Terminal</h2>
            <button onClick={onRequestClose} className="text-gray-500 hover:text-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div ref={ref} className="flex-1 overflow-hidden p-0 m-0" />
        </div>
      </Draggable>
    </Modal>
  );
};

export default TerminalModal;