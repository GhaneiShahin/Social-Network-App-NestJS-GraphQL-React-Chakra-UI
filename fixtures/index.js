export const suggestedUsers = [
  {
    _id: 1,
    profile: {
      name: 'Shahin Ghanei',
      picture: 'https://thispersondoesnotexist.com/',
    },
  },
  {
    _id: 2,
    profile: {
      name: 'Zlatan Ibra',
      picture: 'https://thispersondoesnotexist.com/',
    },
  },
  {
    _id: 3,
    profile: {
      name: 'Leo Messi',
      picture: 'https://thispersondoesnotexist.com/',
    },
  },
  {
    _id: 4,
    profile: {
      name: 'Esma Benni',
      picture: 'https://thispersondoesnotexist.com/',
    },
  },
  {
    _id: 5,
    profile: {
      name: 'Alvaro Morata',
      picture: 'https://thispersondoesnotexist.com/',
    },
  },
];

export const PostData = {
  content:
    'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
  createdAt: '2 days ago',
  liked: true,
  user: suggestedUsers[0],
};

// export const navigation = [
//   { type: 'header', text: 'Navigation' },
//   { type: 'space', text: 'General' },
//   { type: 'header', text: 'Design' },
//   { type: 'header', text: 'Engineering' },
// ];

export const NAVIGATION = [
  {
    name: 'Navigation',
    type: 'Category',
    menu: [{ name: 'Edit Category' }, { name: 'Delete Category' }],
    actions: [{ name: 'Add Space', icon: 'plus' }],
    children: [
      {
        type: 'space',
        name: 'General',
        active: true,
      },
      {
        type: 'space',
        name: 'Design',
      },
      {
        type: 'space',
        name: 'Engineering',
      },
    ],
  },
  {
    name: 'Links',
    type: 'Category',
    menu: [{ name: 'Edit Category' }, { name: 'Delete Category' }],
    actions: [{ name: 'Add Space', icon: 'plus' }],
    children: [
      {
        type: 'link',
        name: 'Google',
      },
      {
        type: 'link',
        name: 'HomePage',
      },
      {
        type: 'link',
        name: 'Facebook',
      },
    ],
  },
];
