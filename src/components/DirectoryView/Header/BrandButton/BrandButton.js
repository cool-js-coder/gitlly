import React from 'react'

import AppCopy from '../../../../utils/app-copy-text'
import './BrandButton.less'

const BrandButton = (props) => {
  return (
    <div className='brandButtonContainer'>
      <div className='brandButton'>{AppCopy.headerBrandButtonText}</div>
    </div>
  )
}

export default BrandButton