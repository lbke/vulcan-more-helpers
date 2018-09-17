
export const getCollectionName = collection => collection.options.name
export const getDefaultFragmentName = collection =>
    `${collection.options.collectionName}DefaultFragment`;