class Stype {
  constructor(data) {
    this.id = data.id;
    this.type = data.type;
    this.name = data.name;
    this.operatorID = data.operatorID;
  }
}

export default Stype;

export const FormatStype = (data) => {
  const { id, attributes } = data;
  return new Stype({
    id,
    ...attributes,
  });
};
