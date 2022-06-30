export const formatJsonapi = (data) => {
  const { id, attributes = {}, type, relationships } = data;
  return {
    id,
    ...attributes,
  };
};
