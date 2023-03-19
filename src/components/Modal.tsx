import React, { ReactNode } from "react";

interface ModalType {
  children?: ReactNode;
  isOpen: boolean;
  toggle: () => void;
}

export default function Modal(props: ModalType) {
  return (
    <>
      {props.isOpen && (
        <div
          className="z-[9999] w-screen h-screen absolute left-0 top-0 bg-transparent flex items-center justify-center"
          onClick={props.toggle}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className=" rounded"
          >
            {props.children}
          </div>
        </div>
      )}
    </>
  );
}
