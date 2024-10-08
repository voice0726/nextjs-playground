'use client';

import {
  type Dispatch,
  type ReactNode,
  type SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react';

type Props = {
  children: ReactNode;
  targetId?: string;
};

type State = {
  id: string;
  isOpen: boolean;
};

type ModalContextProviderProps = {
  modalState: State;
  setModalState: Dispatch<SetStateAction<State>>;
};

export default function ModalContextProvider({ children }: Props) {
  const [modalState, setModalState] = useState<State>({} as State);

  return <ModalContext.Provider value={{ modalState, setModalState }}>{children}</ModalContext.Provider>;
}

export const ModalContext = createContext<ModalContextProviderProps | undefined>(undefined);
export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }

  return [context.modalState, context.setModalState] as const;
};
