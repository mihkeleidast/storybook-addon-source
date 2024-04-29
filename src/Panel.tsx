import React from "react";
import { useAddonState, useChannel } from "@storybook/manager-api";
import { AddonPanel } from "@storybook/components";
import { ADDON_ID, EVENTS } from "./constants";
import { Source } from "@storybook/blocks";
import { styled, useTheme } from "@storybook/theming";

interface PanelProps {
  active: boolean;
}

const PanelWrapper = styled.div({
  height: '100%',
  '> div': {
    height: '100%',
  }
});

const ContentWrapper = styled.div({
  height: '100%',
  '> div': {
    margin: 0,
    height: '100%',
    border: 0,
    borderRadius: 'inherit',
    boxShadow: 'none',
  }
});

export const Panel: React.FC<PanelProps> = (props) => {
  // https://storybook.js.org/docs/react/addons/addons-api#useaddonstate
  const [source, setSource] = useAddonState(ADDON_ID, '');

  useChannel({
    [EVENTS.RENDER]: (data) => setSource(data.source),
  });

  const theme = useTheme();

  return (
    <PanelWrapper hidden={!props.active}>
      <AddonPanel {...props}>
        <ContentWrapper>
          <Source code={source} dark={theme.base === 'dark'} />
        </ContentWrapper>
      </AddonPanel>
    </PanelWrapper>
  );
};
