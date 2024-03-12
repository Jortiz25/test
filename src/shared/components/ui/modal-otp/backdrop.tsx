import ReactDOM from 'react-dom'

import React from 'react'
import './modal-otp.style.css'

/**
 * Creates a modal component using the useModalStore hook and renders it as a portal.
 *
 * @return {React.ReactPortal} The modal component rendered as a portal
 */

export const BackdropOpt = ({
  children,
}: {
  children: React.ReactNode | React.ReactNode[] | JSX.Element | JSX.Element[]
}): React.ReactPortal => {
  return ReactDOM.createPortal(
    <div className="modal-container__opt">
      <div className="modal-content__opt slide-top">{children}</div>
    </div>,
    document.getElementById('app-modal-opt')!
  )
}
