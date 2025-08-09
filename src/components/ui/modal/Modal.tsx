"use client";
import React from "react";
import { IoMdClose } from "react-icons/io";

interface ModalProps {
	isOpen: boolean;
	onClose: () => void;
	children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
	if (!isOpen) return null;

	return (
		<div onClick={onClose} className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
			<div onClick={(e) => e.stopPropagation()} className="bg-white max-w-[800px] w-full p-3 rounded-md relative">
				<button
					onClick={onClose}
					className="absolute top-3 right-3 text-black  text-xl"
				>
					<IoMdClose size={26}/>
				</button>
				{children}
			</div>
		</div>
	);
};

export default Modal;
