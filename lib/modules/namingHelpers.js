const capitalizeFirstLetter = string =>
  string.charAt(0).toUpperCase() + string.slice(1);

export const getCollectionName = collection => collection.options.name;
export const getCollectionDisplayName = collection =>
  capitalizeFirstLetter(getCollectionName(collection));
export const getDefaultFragmentName = collection =>
  `${collection.options.collectionName}DefaultFragment`;

export const getTypeName = collection => collection.options.typeName;

export const makeComponentName = suffix => collection =>
  `${getCollectionDisplayName(collection)}${suffix}`;

export const getDeleteMutationName = collection =>
  "delete" + getTypeName(collection);
