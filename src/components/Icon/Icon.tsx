import { IconName, IconPrefix } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Icon.css';
import '../global.css';

interface IconProps {
  iconType: IconPrefix,
  iconName: IconName,
  description?: string,
}

const Icon: React.FC<IconProps> = ({ iconType, iconName, description }) => {
    return (
      <span className="root">
        <FontAwesomeIcon icon={[iconType, iconName]} />
        {/* if you do not add a description the span will be empty and not 
        read out to screen readers, only do this if the icon is decorative */}
        <span className="visually-hidden">{ description }</span>
      </span>
    );
}

export default Icon;