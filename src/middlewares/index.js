export const logger = (store) => (next) => (action) => {
  console.log(action);
  next(action);
};

export const featuring = (store) => (next) => (action) => {
  const feature = [...action.action.payload];
  const updatedAction = {
    ...action,
    action: { ...action.action, payload: feature },
  };
  next(updatedAction);
};
