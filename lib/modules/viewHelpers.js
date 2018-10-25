import _merge from "lodash/merge";

// chains multiple views functions
export const mergeViews = (...views) => (terms, apolloClient, context) =>
  views.reduce(
    (result, view) => _merge(result, view(terms, apolloClient, context)),
    {}
  );

// define a view, so that we can retrieve only valid/own data when the user is
// not authorized
export const mergeWithDefaultView = (collection, options, view) => {
  const defaultView = collection.defaultView;
  if (!defaultView) return view;
  const mergedView = mergeViews(defaultView, view); //console.log("views", defaultView, validDefaultView)
  return mergedView;
};

// A view that returns only user's own documents
// (or all documents for admins)
export const onlyOwnDocuments = (terms, apolloClient, context) => {
  const selector =
    context && context.currentUser && !context.currentUser.isAdmin
      ? {
          selector: {
            userId: context.currentUser._id
          }
        }
      : {};
  return {
    ...selector
  };
};

export const sortCreatedAt = (terms, apolloClient, context) => ({
  options: {
    sort: {
      createAt: -1
    }
  }
});
