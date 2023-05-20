export interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: "hildegard.org";
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export interface IComment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}