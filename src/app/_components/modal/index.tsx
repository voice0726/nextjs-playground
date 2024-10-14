'use client';

import type { ReactNode } from 'react';

import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react';
import { css } from '@linaria/core';

import { useModal } from '~/app/_components/modal/context';

export type ModalProps = {
  title: string;
  children: ReactNode;
  name: string;
};

export const Modal = ({ title, children, name }: ModalProps) => {
  const [modalState, setModalState] = useModal();
  const dialogClassName = css`
    position: relative;
    z-index: 10;
    :focus {
      outline: none;
    }
  `;
  const dialogBackdrop = css`
    position: fixed;
    inset: 0;
    background-Color: rgba(0, 0, 0, 0.3);
    transition-Property: opacity;
    transition-Timing-Function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-Duration: 150ms;
    &[data-closed] {
      opacity: 0;
    },
    &[data-enter] {
      transition-Duration: 300ms;
      transition-Timing-Function: cubic-bezier(0, 0, 0.2, 1);
    },
    &[data-leave] {
      transition-Duration: 200ms;
      transition-Timing-Function: cubic-bezier(0.4, 0, 1, 1);
    },
  `;
  const modalContainer = css`
    position: fixed;
    inset: 0;
    z-index: 10;
    width: 100vw;
    overflow-y: auto;
  `;
  const insideContainer = css`
    display: flex;
    min-height: 100vh;
    align-items: center;
    justify-content: center;
    padding: 1rem;
  `;
  const dialogPanel = css`
    transition:
      transform 300ms ease-out,
      opacity 300ms ease-out;
    width: 100%;
    max-width: 28rem;
    border-radius: 0.25rem;
    background-color: rgba(255, 255, 255);
    padding: 1.5rem;
  `;
  const dialogTitle = css`
    font-size: 1.125rem;
    font-weight: bold;
    color: black;
    margin-bottom: 1rem;
  `;

  return (
    <Dialog
      open={modalState.id === name && modalState.isOpen}
      as="div"
      className={dialogClassName}
      onClose={() => setModalState({ id: '', isOpen: false })}
    >
      <DialogBackdrop transition className={dialogBackdrop} />
      <div className={modalContainer}>
        <div className={insideContainer}>
          <DialogPanel transition className={dialogPanel}>
            <DialogTitle as="h3" className={dialogTitle}>
              {title}
            </DialogTitle>
            {children}
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};
