class User {
  id = "";
  name = "";
  email = "";
  address = "";
  avatar = "";
  city = "";
  deleted = false;
  description = "";
  englishName = "";
  github = "";
  organization = "";
  phone = "";
  signature = "";
  source = "";
  sourceID = "";
  status = "";
  thirdPart = false;
  twitter = "";
  weiChat = "";
  sex = "";
  constructor(data = {}) {
    this.id = data.id;
    this.name = data.name;
    this.email = data.email;
    this.address = data.address;
    this.avatar = data.avatar;
    this.city = data.city;
    this.isDeleted = data.Deleted;
    this.description = data.description;
    this.englishName = data.englishName;
    this.github = data.github;
    this.organization = data.organization;
    this.phone = data.phone;
    this.signature = data.signature;
    this.source = data.source;
    this.sourceID = data.sourceID;
    this.status = data.status;
    this.thirdPart = data.thirdPart;
    this.twitter = data.twitter;
    this.weiChat = data.weiChat;
    this.sex = data.sex || 0;
  }
}

export const NewUser = () => new User();
export const FormatUser = (data) => {
  return new User({
   ...data
  });
};
export default User;
