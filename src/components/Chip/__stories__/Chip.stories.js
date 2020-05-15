import React from 'react';
import { action } from '@storybook/addon-actions';
// Material-UI Components
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
// Material-Icons
import FaceIcon from '@material-ui/icons/Face';

import { Chip } from '../../';

export default {
  title: 'Chip',
  component: Chip,
};

export const Basic = () => (
  <div>
    <Chip label="Default" />
    <Box display="inline" mr={3} />
    <Chip label="Disabled" disabled />
  </div>
);

export const Dismissible = () => {
  const handleClick = action('action click on chip');
  const handleDelete = action('action click for delete');

  return (
    <div>
      <Chip label="Default" onClick={handleClick} onDelete={handleDelete} />
      <Box display="inline" mr={3} />
      <Chip
        label="Disabled"
        onClick={handleClick}
        onDelete={handleDelete}
        disabled
      />
    </div>
  );
};

export const WithIconOrAvatar = () => {
  const handleClick = action('action click on chip');
  const handleDelete = action('action click for delete');

  return (
    <div>
      <Chip
        label="label with avatar"
        avatar={<Avatar>B</Avatar>}
        onClick={handleClick}
      />
      <Box display="inline" mr={3} />
      <Chip
        label="label with icon"
        icon={<FaceIcon />}
      />
      <Box display="inline" mr={3} />
      <Chip
        label="Avatar clickable dismissible"
        avatar={<Avatar>A</Avatar>}
        onClick={handleClick}
        onDelete={handleDelete}
        color="primary"
      />
      <Box display="inline" mr={3} />
      <Chip
        label="Icon clickable dismissible"
        icon={<FaceIcon />}
        onClick={handleClick}
        onDelete={handleDelete}
      />
    </div>
  );
};

WithIconOrAvatar.story = {
  name: 'With icon or avatar',
};

export const ColorVariation = () => {
  const handleClick = action('action click on chip');
  const handleDelete = action('action click for delete');

  return (
    <div>
      <Chip
        label="Default with icon"
        color="default"
        icon={<FaceIcon />}
        onClick={handleClick}
        onDelete={handleDelete}
      />
      <Box mb={3} />
      <Chip
        label="Basic dismissible"
        color="success"
        onClick={handleClick}
        onDelete={handleDelete}
      />
      <Box mb={3} />
      <Chip label="Danger" color="danger" onClick={handleClick} />
      <Box mb={3} />
      <Chip
        label="Primary with icon dismissible"
        color="primary"
        icon={<FaceIcon />}
        onClick={handleClick}
        onDelete={handleDelete}
      />
      <Box mb={3} />
      <Chip
        label="Secondary with icon dismissible"
        color="secondary"
        icon={<FaceIcon />}
        onClick={handleClick}
        onDelete={handleDelete}
      />
      <Box mb={3} />
      <Chip
        label="Tertiary with icon dismissible"
        color="tertiary"
        icon={<FaceIcon />}
        onClick={handleClick}
        onDelete={handleDelete}
      />
      <Box mb={3} />
      <Chip
        label="Warning with icon dismissible"
        color="warning"
        icon={<FaceIcon />}
        onClick={handleClick}
        onDelete={handleDelete}
      />
      <Box mb={3} />
      <Chip
        label="Danger with icon dismissible"
        color="danger"
        icon={<FaceIcon />}
        onClick={handleClick}
        onDelete={handleDelete}
      />
      <Box mb={3} />
      <Chip
        label="Success with icon dismissible"
        color="success"
        icon={<FaceIcon />}
        onClick={handleClick}
        onDelete={handleDelete}
      />
    </div>
  );
};

ColorVariation.story = {
  name: 'Color variation',
};
