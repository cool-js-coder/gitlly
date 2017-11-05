import React from 'react'
import Octicons from 'octicons'
import '../../../node_modules/octicons/build/build.css'

import './directory-list.less'
import Utils from '../../utils/utils'

const DirectoryList = (props) => {
  return (
    <div className='directoryListContainer'>
      {
        props.dirs && props.dirs.map((item, index) => {
          return (
            <div key={index} title={item} className='directoryListItem' onClick={() => props.listItemClicked(item)}>
              <span className='repoIcon' dangerouslySetInnerHTML={{ __html: Octicons.repo.toSVG({'width': 20, 'height': 20}) }} />
              <span>{Utils.getProjectNameFromDirPath(item)}</span>
            </div>
          )
        })
      }
    </div>
  )
}

export default DirectoryList