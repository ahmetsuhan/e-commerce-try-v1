import React from 'react'
import MenuItem from '../MenuItem';
import './directory.scss';

import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectDirectorySection} from '../../redux/Directory/directorySelector';

const  Directory = ({sections}) =>  {
    
  
        return (
            <div className="directory-menu">
               {
                   sections.map(({id, ...otherSectionProps}) => {
                      return(
                        <MenuItem key={id} {...otherSectionProps} />
                      )
                   })
               }
            </div>
        )
}

const mapStateToProps = createStructuredSelector({
  sections:selectDirectorySection
});

export default connect(mapStateToProps)(Directory)
