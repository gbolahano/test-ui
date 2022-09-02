export type Invoice = {
  id: number;
  invoice: string;
  amount: number;
  date: string;
  status: string;
  users: {
    imageUrl: string;
  }[];
};

type Data = Invoice[];

export const tableData: Data = [
  {
    id: 1,
    invoice: "Basic plan - Dec 2022",
    amount: 1000,
    date: "Dec 1, 2022",
    status: "paid",
    users: [
      {
        imageUrl:
          "https://img.freepik.com/free-photo/young-business-woman-working-her-desk-with-laptop_23-2149206572.jpg?w=2000",
      },
      {
        imageUrl:
          "https://media.istockphoto.com/photos/positivity-puts-you-in-a-position-of-power-picture-id1299077582?b=1&k=20&m=1299077582&s=170667a&w=0&h=Esjqlg_WCWmTc83Dv6PLhwPFwYN9uXoclBn0cUhtS5I=",
      },
      {
        imageUrl:
          "https://media.istockphoto.com/photos/smiling-african-american-business-woman-wearing-stylish-eyeglasses-picture-id1325565779?b=1&k=20&m=1325565779&s=170667a&w=0&h=mg7anQmF533oAt9xqypvLR-y0ei692eWC7zsnnjjlQc=",
      },
      {
        imageUrl:
          "https://thumbs.dreamstime.com/b/woman-laptop-taking-notes-learning-wearing-earbuds-office-business-wireless-sitting-modern-combining-work-study-189467623.jpg",
      },
      {
        imageUrl:
          "https://media.istockphoto.com/photos/focused-on-success-and-growth-picture-id1311977351?b=1&k=20&m=1311977351&s=170667a&w=0&h=h7_o-NmSz-t-tFMKVoIYk9c05c0mche1ocfeSQ2C4_c=",
      },
      {
        imageUrl:
          "https://media.istockphoto.com/photos/focused-on-success-and-growth-picture-id1311977351?b=1&k=20&m=1311977351&s=170667a&w=0&h=h7_o-NmSz-t-tFMKVoIYk9c05c0mche1ocfeSQ2C4_c=",
      },
      {
        imageUrl:
          "https://media.istockphoto.com/photos/focused-on-success-and-growth-picture-id1311977351?b=1&k=20&m=1311977351&s=170667a&w=0&h=h7_o-NmSz-t-tFMKVoIYk9c05c0mche1ocfeSQ2C4_c=",
      },
    ],
  },
  {
    id: 2,
    invoice: "Basic plan - Dec 2022",
    amount: 1000,
    date: "Nov 1, 2022",
    status: "paid",
    users: [
      {
        imageUrl:
          "https://img.freepik.com/free-photo/young-business-woman-working-her-desk-with-laptop_23-2149206572.jpg?w=2000",
      },
      {
        imageUrl:
          "https://media.istockphoto.com/photos/positivity-puts-you-in-a-position-of-power-picture-id1299077582?b=1&k=20&m=1299077582&s=170667a&w=0&h=Esjqlg_WCWmTc83Dv6PLhwPFwYN9uXoclBn0cUhtS5I=",
      },
      {
        imageUrl:
          "https://media.istockphoto.com/photos/smiling-african-american-business-woman-wearing-stylish-eyeglasses-picture-id1325565779?b=1&k=20&m=1325565779&s=170667a&w=0&h=mg7anQmF533oAt9xqypvLR-y0ei692eWC7zsnnjjlQc=",
      },
      {
        imageUrl:
          "https://thumbs.dreamstime.com/b/woman-laptop-taking-notes-learning-wearing-earbuds-office-business-wireless-sitting-modern-combining-work-study-189467623.jpg",
      },
      {
        imageUrl:
          "https://media.istockphoto.com/photos/focused-on-success-and-growth-picture-id1311977351?b=1&k=20&m=1311977351&s=170667a&w=0&h=h7_o-NmSz-t-tFMKVoIYk9c05c0mche1ocfeSQ2C4_c=",
      },
      {
        imageUrl:
          "https://media.istockphoto.com/photos/focused-on-success-and-growth-picture-id1311977351?b=1&k=20&m=1311977351&s=170667a&w=0&h=h7_o-NmSz-t-tFMKVoIYk9c05c0mche1ocfeSQ2C4_c=",
      },
    ],
  },
  {
    id: 3,
    invoice: "Basic plan - Dec 2022",
    amount: 1000,
    date: "Oct 1, 2022",
    status: "paid",
    users: [
      {
        imageUrl:
          "https://img.freepik.com/free-photo/young-business-woman-working-her-desk-with-laptop_23-2149206572.jpg?w=2000",
      },
      {
        imageUrl:
          "https://media.istockphoto.com/photos/positivity-puts-you-in-a-position-of-power-picture-id1299077582?b=1&k=20&m=1299077582&s=170667a&w=0&h=Esjqlg_WCWmTc83Dv6PLhwPFwYN9uXoclBn0cUhtS5I=",
      },
      {
        imageUrl:
          "https://media.istockphoto.com/photos/smiling-african-american-business-woman-wearing-stylish-eyeglasses-picture-id1325565779?b=1&k=20&m=1325565779&s=170667a&w=0&h=mg7anQmF533oAt9xqypvLR-y0ei692eWC7zsnnjjlQc=",
      },
      {
        imageUrl:
          "https://thumbs.dreamstime.com/b/woman-laptop-taking-notes-learning-wearing-earbuds-office-business-wireless-sitting-modern-combining-work-study-189467623.jpg",
      },
      {
        imageUrl:
          "https://media.istockphoto.com/photos/focused-on-success-and-growth-picture-id1311977351?b=1&k=20&m=1311977351&s=170667a&w=0&h=h7_o-NmSz-t-tFMKVoIYk9c05c0mche1ocfeSQ2C4_c=",
      },
    ],
  },
  {
    id: 4,
    invoice: "Basic plan - Dec 2022",
    amount: 1000,
    date: "Sep 1, 2022",
    status: "paid",
    users: [
      {
        imageUrl:
          "https://img.freepik.com/free-photo/young-business-woman-working-her-desk-with-laptop_23-2149206572.jpg?w=2000",
      },
      {
        imageUrl:
          "https://media.istockphoto.com/photos/positivity-puts-you-in-a-position-of-power-picture-id1299077582?b=1&k=20&m=1299077582&s=170667a&w=0&h=Esjqlg_WCWmTc83Dv6PLhwPFwYN9uXoclBn0cUhtS5I=",
      },
      {
        imageUrl:
          "https://media.istockphoto.com/photos/smiling-african-american-business-woman-wearing-stylish-eyeglasses-picture-id1325565779?b=1&k=20&m=1325565779&s=170667a&w=0&h=mg7anQmF533oAt9xqypvLR-y0ei692eWC7zsnnjjlQc=",
      },
    ],
  },
  {
    id: 5,
    invoice: "Basic plan - Dec 2022",
    amount: 1000,
    date: "Aug 1, 2022",
    status: "paid",
    users: [
      {
        imageUrl:
          "https://img.freepik.com/free-photo/young-business-woman-working-her-desk-with-laptop_23-2149206572.jpg?w=2000",
      },
      {
        imageUrl:
          "https://media.istockphoto.com/photos/positivity-puts-you-in-a-position-of-power-picture-id1299077582?b=1&k=20&m=1299077582&s=170667a&w=0&h=Esjqlg_WCWmTc83Dv6PLhwPFwYN9uXoclBn0cUhtS5I=",
      },
      {
        imageUrl:
          "https://media.istockphoto.com/photos/smiling-african-american-business-woman-wearing-stylish-eyeglasses-picture-id1325565779?b=1&k=20&m=1325565779&s=170667a&w=0&h=mg7anQmF533oAt9xqypvLR-y0ei692eWC7zsnnjjlQc=",
      },
      {
        imageUrl:
          "https://thumbs.dreamstime.com/b/woman-laptop-taking-notes-learning-wearing-earbuds-office-business-wireless-sitting-modern-combining-work-study-189467623.jpg",
      },
    ],
  },
  {
    id: 6,
    invoice: "Basic plan - Dec 2022",
    amount: 1000,
    date: "Jul 1, 2022",
    status: "paid",
    users: [
      {
        imageUrl:
          "https://img.freepik.com/free-photo/young-business-woman-working-her-desk-with-laptop_23-2149206572.jpg?w=2000",
      },
      {
        imageUrl:
          "https://media.istockphoto.com/photos/positivity-puts-you-in-a-position-of-power-picture-id1299077582?b=1&k=20&m=1299077582&s=170667a&w=0&h=Esjqlg_WCWmTc83Dv6PLhwPFwYN9uXoclBn0cUhtS5I=",
      },
      {
        imageUrl:
          "https://media.istockphoto.com/photos/smiling-african-american-business-woman-wearing-stylish-eyeglasses-picture-id1325565779?b=1&k=20&m=1325565779&s=170667a&w=0&h=mg7anQmF533oAt9xqypvLR-y0ei692eWC7zsnnjjlQc=",
      },
      {
        imageUrl:
          "https://thumbs.dreamstime.com/b/woman-laptop-taking-notes-learning-wearing-earbuds-office-business-wireless-sitting-modern-combining-work-study-189467623.jpg",
      },
    ],
  },
  {
    id: 7,
    invoice: "Basic plan - Dec 2022",
    amount: 1000,
    date: "Jun 1, 2022",
    status: "paid",
    users: [
      {
        imageUrl:
          "https://img.freepik.com/free-photo/young-business-woman-working-her-desk-with-laptop_23-2149206572.jpg?w=2000",
      },
      {
        imageUrl:
          "https://media.istockphoto.com/photos/positivity-puts-you-in-a-position-of-power-picture-id1299077582?b=1&k=20&m=1299077582&s=170667a&w=0&h=Esjqlg_WCWmTc83Dv6PLhwPFwYN9uXoclBn0cUhtS5I=",
      },
      {
        imageUrl:
          "https://media.istockphoto.com/photos/smiling-african-american-business-woman-wearing-stylish-eyeglasses-picture-id1325565779?b=1&k=20&m=1325565779&s=170667a&w=0&h=mg7anQmF533oAt9xqypvLR-y0ei692eWC7zsnnjjlQc=",
      },
    ],
  },
];
