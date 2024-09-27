'use client';

import { ReactNode } from 'react';

import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react';
import { css } from 'restyle';

import { useModal } from '@/app/_components/modal/context';

export type ModalProps = {
  title: string;
  children: ReactNode;
  name: string;
};

export const Modal = ({ title, children, name }: ModalProps) => {
  const [modalState, setModalState] = useModal();
  const [dialogClassName, DialogStyles] = css({
    position: 'relative',
    zIndex: 10,
    ':focus': {
      outline: 'none',
    },
  });
  const [dialogBackdrop, DialogBackdropStyles] = css({
    position: 'fixed',
    inset: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    transitionProperty: 'opacity',
    transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
    transitionDuration: '150ms',
    '&[data-closed]': {
      opacity: 0,
    },
    '&[data-enter]': {
      transitionDuration: '300ms',
      transitionTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
    },
    '&[data-leave]': {
      transitionDuration: '200ms',
      transitionTimingFunction: 'cubic-bezier(0.4, 0, 1, 1)',
    },
  });
  const [modalContainer, ModalContainerStyles] = css({
    position: 'fixed',
    inset: 0,
    zIndex: 10,
    width: '100vw',
    overflowY: 'auto',
  });
  const [insideContainer, InsideContainerStyles] = css({
    display: 'flex',
    minHeight: '100vh',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '1rem',
  });
  const [dialogPanel, DialogPanelStyles] = css({
    transition: 'transform 300ms ease-out, opacity 300ms ease-out',
    width: '100%',
    maxWidth: '28rem',
    borderRadius: '0.25rem',
    backgroundColor: 'rgba(255, 255, 255)',
    padding: '1.5rem',
  });
  const [dialogTitle, DialogTitleStyles] = css({
    fontSize: '1.125rem',
    fontWeight: 'bold',
    color: 'black',
    marginBottom: '1rem',
  });
  const styles = [
    DialogStyles,
    DialogBackdropStyles,
    ModalContainerStyles,
    InsideContainerStyles,
    DialogPanelStyles,
    DialogTitleStyles,
  ];

  return (
    <>
      {styles.map((Style, index) => (
        <Style key={`css-style-${index}`} />
      ))}
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
    </>
  );
};
