import React from 'react'

const QuestionItem = ({ id, count, name, question, updateQueueOrder, currentUserId, questionUserId, currentQueueOrder }) => {
    let styling = 'd-flex row question-item py-3'
    let disabled = 'false'

    if(currentUserId === questionUserId) {
      styling = 'd-flex row question-item py-3 active-item'
    }else{
      disabled = 'true'
    }

    if(count !== currentQueueOrder && currentUserId === questionUserId){
      updateQueueOrder(count)
    }

    const editQuestion = (e) => {
      e.preventDefault()

    }


    return (
      <div className={styling}>
        <div className="col-1 d-flex justify-content-center align-items-center">
          <p className="element queueNum">{count}</p>
        </div>
        <div className="col-3 d-flex align-items-center">
          <p className="element name">{name}</p>
        </div>
        <div className="col-6 d-flex align-items-center">
          <p className="element topic" id="${id}-question">{question}</p>
        </div>
        <div className="col-2 d-flex flex-column align-items-center justify-content-center">
          <button type="button" id="${id}-edit" className='btn btn-warning waves-effect btn-sm item-button mt-2' disabled={disabled} onClick={e => editQuestion()}>Edit</button>
          <button type="button" id="${id}-answered" className='btn waves-effect btn-sm item-button mt-2 answered-btn' disabled={disabled}>Answered</button>
        </div>
      </div>
    )
}

export default QuestionItem
