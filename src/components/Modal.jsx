import React, { useEffect, useRef } from 'react';
import { X } from 'lucide-react';

export default function Modal({ isOpen, onClose, title, children, triggerRef }) {
  const modalRef = useRef(null);
  const previousActiveElementRef = useRef(null);

  // Focus trap: simple implementation
  useEffect(() => {
    if (!isOpen) return;

    // Store the element that had focus before opening modal
    previousActiveElementRef.current = document.activeElement;

    // Focus the modal container
    if (modalRef.current) {
      const focusableElements = modalRef.current.querySelectorAll(
        'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      
      if (focusableElements.length > 0) {
        focusableElements[0].focus();
      } else {
        modalRef.current.focus();
      }
    }

    // Handle ESC key
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    // Handle Tab key for focus trap
    const handleTab = (e) => {
      if (!modalRef.current) return;

      const focusableElements = Array.from(
        modalRef.current.querySelectorAll(
          'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
        )
      );

      if (focusableElements.length === 0) return;

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (e.shiftKey) {
        // Shift + Tab
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        }
      } else {
        // Tab
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    };

    document.addEventListener('keydown', handleEscape);
    document.addEventListener('keydown', handleTab);

    // Prevent body scroll when modal is open (but allow scroll inside modal)
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('keydown', handleTab);
      // Restore original body overflow
      document.body.style.overflow = originalOverflow || '';

      // Return focus to trigger button (use setTimeout to ensure DOM is ready)
      setTimeout(() => {
        if (triggerRef?.current) {
          triggerRef.current.focus();
        } else if (previousActiveElementRef.current && previousActiveElementRef.current instanceof HTMLElement) {
          previousActiveElementRef.current.focus();
        }
      }, 0);
    };
  }, [isOpen, onClose, triggerRef]);

  if (!isOpen) return null;

  return (
    <div
      className='fixed inset-0 z-50 overflow-y-auto'
      aria-labelledby={title ? 'modal-title' : undefined}
      aria-modal='true'
      role='dialog'
    >
      {/* Backdrop */}
      <div
        className='fixed inset-0 bg-black/50 dark:bg-black/70 backdrop-blur-sm'
        aria-hidden='true'
        onClick={onClose}
      />

      {/* Modal container */}
      <div className='flex min-h-full items-start justify-center p-4 pt-20'>
        <div
          ref={modalRef}
          className='relative w-full max-w-md bg-white dark:bg-slate-800 rounded-lg shadow-xl border border-slate-200 dark:border-slate-700 max-h-[calc(100vh-5rem)] overflow-y-auto'
          tabIndex={-1}
        >
          {/* Header with close button */}
          <div className='sticky top-0 bg-white dark:bg-slate-800 z-10 flex items-center justify-end p-4 border-b border-slate-200 dark:border-slate-700'>
            {title && (
              <h2 id='modal-title' className='text-lg font-semibold dark:text-white flex-1'>
                {title}
              </h2>
            )}
            <button
              onClick={onClose}
              aria-label='Close modal'
              className='p-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-slate-800'
            >
              <X size={20} aria-hidden='true' />
            </button>
          </div>

          {/* Content */}
          <div className='p-4'>{children}</div>
        </div>
      </div>
    </div>
  );
}

