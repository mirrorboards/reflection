import { Box, createStyles, DefaultProps, Selectors, useComponentDefaultProps } from "@mantine/core";
import { PropsWithChildren } from "react";
import { ActivityBar } from "../ActivityBar/ActivityBar";
import { StatusBar } from "../StatusBar/StatusBar";

export interface ReflectionLayoutStyleParams {
  spacing: number;
}

const useStyles = createStyles((theme, { spacing }: ReflectionLayoutStyleParams) => {
  return {
    root: {
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
    },
    container: {
      flexGrow: 1,
      flexDirection: "row",
      display: "flex",
    },
    content: {
      flexGrow: 1,
    },
    activityBar: {
      width: spacing * 2,
      height: "100%",
      borderRightWidth: 1,
      borderRightStyle: "solid",
      borderRightColor: theme.colors.gray[7],
    },
    statusBar: {
      height: spacing,
      borderTopWidth: 1,
      borderTopStyle: "solid",
      borderTopColor: theme.colors.gray[7],
    },
  };
});

type ReflectionLayoutStylesNames = Selectors<typeof useStyles>;

export interface ReflectionLayoutProps extends DefaultProps<ReflectionLayoutStylesNames, ReflectionLayoutStyleParams> {
  spacing?: number;
}

const defaultProps: Partial<ReflectionLayoutProps> = {
  spacing: 30,
};

export const ReflectionLayout: React.FC<PropsWithChildren<ReflectionLayoutProps>> = (props) => {
  const { classNames, styles, unstyled, className } = props;

  const { spacing } = useComponentDefaultProps("ReflectionLayout", defaultProps, props);
  const { classes, cx } = useStyles({ spacing }, { name: "ReflectionLayout", classNames, styles, unstyled });

  return (
    <Box className={cx(classes.root, className)}>
      <Box className={cx(classes.container)}>
        <Box className={cx(classes.activityBar)}>
          <ActivityBar />
        </Box>
        <Box className={cx(classes.content)}>{props.children}</Box>
      </Box>
      <Box className={cx(classes.statusBar)}>
        <StatusBar />
      </Box>
    </Box>
  );
};
