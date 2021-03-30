import React from 'react'
import MenuItem from '../MenuItem';

import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectDirectorySection} from '../../redux/Directory/directorySelector';

import {DirectoryMenuContainer} from './directory.styles';


const  Directory = ({sections}) =>  {
    
  
        return (
            <DirectoryMenuContainer>
               {
                   sections.map(({id, ...otherSectionProps}) => {
                      return(
                        <MenuItem key={id} {...otherSectionProps} />
                      )
                   })
               }
            </DirectoryMenuContainer>
        )
}

const mapStateToProps = createStructuredSelector({
  sections:selectDirectorySection
});

export default connect(mapStateToProps)(Directory)
