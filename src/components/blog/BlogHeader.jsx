import { useState } from 'react'
import { DeleteIcon, EditIcon, ThreeDots } from '../../constant/images'

export default function BlogHeader() {
  const [showAction, setShowAction] = useState(false)
  return (
    <div className="absolute right-2 top-2">
      <button
        onClick={(e) => {
          e.stopPropagation(), setShowAction(!showAction)
        }}>
        <img src={ThreeDots} alt="3dots of Action" />
      </button>

      {showAction && (
        <div className="action-modal-container">
          <button className="action-menu-item hover:text-lwsGreen">
            <img src={EditIcon} alt="Edit" />
            Edit
          </button>
          <button className="action-menu-item hover:text-red-500">
            <img src={DeleteIcon} alt="Delete" />
            Delete
          </button>
        </div>
      )}
    </div>
  )
}
