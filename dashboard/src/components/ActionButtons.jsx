import React from 'react'

function ActionButtons({ onStart, onStop, onSubmitProof }) {
  return (
    <div className="flex space-x-4 mt-6">
      <button onClick={onStart} className="bg-accent px-4 py-2 rounded-lg hover:bg-opacity-80">
        Start Node
      </button>
      <button onClick={onStop} className="bg-highlight px-4 py-2 rounded-lg hover:bg-opacity-80">
        Stop Node
      </button>
      <button onClick={onSubmitProof} className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-opacity-80">
        Submit Proof
      </button>
    </div>
  )
}

export default ActionButtons
