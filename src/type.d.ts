type User = {
  _id: string;
  name: string;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
};

type Post = {
  _id: string;
  title: string;
  desc: string;
  img: string;
  content: string;
  username: string;
  createdAt: Date;
  updatedAt: Date;
};
