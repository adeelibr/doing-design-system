import React from "react";
import { action } from "@storybook/addon-actions";
import { Box } from "@material-ui/core";
import { Button } from "../../";

export default {
  title: "Button",
  component: Button,
  parameters: {
    chromatic: { viewports: [320, 1200] },
  },
};

export const Contained = () => (
  <Box display="flex" flexDirection="row" flexWrap="wrap">
    <Button color="primary" onClick={action("clicked")}>
      Primary
    </Button>
    <Box mr={3} />
    <Button color="secondary" onClick={action("clicked")}>
      Secondary
    </Button>
    <Box mr={3} />
    <Button color="tertiary" onClick={action("clicked")}>
      Tertiary
    </Button>
    <Box mr={3} />
    <Button color="danger" onClick={action("clicked")}>
      Danger
    </Button>
    <Box mr={3} />
    <Button color="warning" onClick={action("clicked")}>
      Warning
    </Button>
    <Box mr={3} />
    <Button color="success" onClick={action("clicked")}>
      Success
    </Button>
    <Box mr={3} />
    <Button color="primary" disabled onClick={action("clicked")}>
      Disabled
    </Button>
  </Box>
);

export const Outlined = () => (
  <Box display="flex" flexDirection="row" flexWrap="wrap">
    <Button variant="outlined" color="primary" onClick={action("clicked")}>
      Primary
    </Button>
    <Box mr={3} />
    <Button variant="outlined" color="secondary" onClick={action("clicked")}>
      Secondary
    </Button>
    <Box mr={3} />
    <Button variant="outlined" color="tertiary" onClick={action("clicked")}>
      Tertiary
    </Button>
    <Box mr={3} />
    <Button variant="outlined" color="danger" onClick={action("clicked")}>
      Danger
    </Button>
    <Box mr={3} />
    <Button variant="outlined" color="warning" onClick={action("clicked")}>
      Warning
    </Button>
    <Box mr={3} />
    <Button variant="outlined" color="success" onClick={action("clicked")}>
      Success
    </Button>
    <Box mr={3} />
    <Button variant="outlined" color="primary" disabled onClick={action("clicked")}>
      Disabled
    </Button>
  </Box>
);

export const Size = () => (
  <Box>
    <Box display="flex" flexDirection="row" flexWrap="wrap">
      <Button size="small" color="primary" onClick={action("clicked")}>
        Primary
      </Button>
      <Box mr={3} />
      <Button size="small" color="secondary" onClick={action("clicked")}>
        Secondary
      </Button>
      <Box mr={3} />
      <Button size="small" color="tertiary" onClick={action("clicked")}>
        Tertiary
      </Button>
      <Box mr={3} />
      <Button size="small" color="danger" onClick={action("clicked")}>
        Danger
      </Button>
      <Box mr={3} />
      <Button size="small" color="warning" onClick={action("clicked")}>
        Warning
      </Button>
      <Box mr={3} />
      <Button size="small" color="success" onClick={action("clicked")}>
        Success
      </Button>
      <Box mr={3} />
      <Button size="small" color="primary" disabled onClick={action("clicked")}>
        Disabled
      </Button>
    </Box>
    <Box mb={3} />
    <Box display="flex" flexDirection="row">
      <Button size="medium" color="primary" onClick={action("clicked")}>
        Primary
      </Button>
      <Box mr={3} />
      <Button size="medium" color="secondary" onClick={action("clicked")}>
        Secondary
      </Button>
      <Box mr={3} />
      <Button size="medium" color="tertiary" onClick={action("clicked")}>
        Tertiary
      </Button>
      <Box mr={3} />
      <Button size="medium" color="danger" onClick={action("clicked")}>
        Danger
      </Button>
      <Box mr={3} />
      <Button size="medium" color="warning" onClick={action("clicked")}>
        Warning
      </Button>
      <Box mr={3} />
      <Button size="medium" color="success" onClick={action("clicked")}>
        Success
      </Button>
      <Box mr={3} />
      <Button size="medium" color="primary" disabled onClick={action("clicked")}>
        Disabled
      </Button>
    </Box>
    <Box mb={3} />
    <Box display="flex" flexDirection="row">
      <Button size="large" color="primary" onClick={action("clicked")}>
        Primary
      </Button>
      <Box mr={3} />
      <Button size="large" color="secondary" onClick={action("clicked")}>
        Secondary
      </Button>
      <Box mr={3} />
      <Button size="large" color="tertiary" onClick={action("clicked")}>
        Tertiary
      </Button>
      <Box mr={3} />
      <Button size="large" color="danger" onClick={action("clicked")}>
        Danger
      </Button>
      <Box mr={3} />
      <Button size="large" color="warning" onClick={action("clicked")}>
        Warning
      </Button>
      <Box mr={3} />
      <Button size="large" color="success" onClick={action("clicked")}>
        Success
      </Button>
      <Box mr={3} />
      <Button size="large" color="primary" disabled onClick={action("clicked")}>
        Disabled
      </Button>
    </Box>
  </Box>
);
