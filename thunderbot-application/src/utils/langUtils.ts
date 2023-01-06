const langObj: Record<string, any> = {};

const getLocale = (language: string, value: string, ...vars: any[]): void => {
  let locale = langObj[language][value];

  if (!locale)
    return console.log("[\x1b[31mERROR\x1b[0m] Can't find any locale with value:", value);

  let count = 0;
  locale = locale.replace(/%VAR%/g, () => (vars[count] !== null ? vars[count] : '%VAR%'));

  return locale;
};

export { langObj, getLocale };
