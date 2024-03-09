import ReactDOM from 'react-dom'

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
  return ReactDOM.createPortal(
    <div className="modal-container">
      <div className="modal-content slide-top">{children}</div>
    </div>,
    document.getElementById('app-modal')!
  )
}
