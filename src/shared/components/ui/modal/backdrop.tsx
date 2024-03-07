import ReactDOM from 'react-dom'

import { useModalStore } from '@/store/modal'
import React from 'react'
import './modal.style.css'

/**
 * Creates a modal component using the useModalStore hook and renders it as a portal.
 *
 * @return {React.ReactPortal} The modal component rendered as a portal
 */

export const Backdrop = ({
  children,
}: {
  children: React.ReactNode | React.ReactNode[] | JSX.Element | JSX.Element[]
}): React.ReactPortal => {
  const { closeModal } = useModalStore()

  return ReactDOM.createPortal(
    <div
      className="modal-container"
      onClick={(e) => {
        e.stopPropagation()
        closeModal()
      }}
    >
      <div className="modal-content">{children}</div>
    </div>,
    document.getElementById('app-modal')!
  )
}
