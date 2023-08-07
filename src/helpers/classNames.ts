type Mod = Record<string, boolean | string>;

export const classNames = (
  defaultClassName: string,
  additionalClassNames: string[],
  mods?: Mod
): string => {
  return [
    defaultClassName,
    [...additionalClassNames],
    ...(!!mods
      ? Object.entries(mods)
          .filter(([className, value]) => Boolean(value))
          .map(([className, value]) => className)
      : []),
  ].join(" ");
};
