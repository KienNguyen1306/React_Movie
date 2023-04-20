import { AiFillCaretDown } from "react-icons/ai";

import { v4 as uuidv4 } from "uuid";
export const menuData = [
  {
    id: uuidv4(),
    title: "Thể loại",
    link: "/about",
    icon: AiFillCaretDown,
    children: [
      {
        id: 28,
        title: "Phim Hành Động",
        children: [],
        type: 1,
      },
      {
        id: 12,
        title: "Phim Phiêu Lưu",
        children: [],
        type: 1,
      },
      {
        id: 16,
        title: "Phim Hoạt Hình",
        children: [],
        type: 1,
      },
      {
        id: 35,
        title: "Phim Hài",
        children: [],
        type: 1,
      },
      {
        id: 80,
        title: "Phim Hình Sự",
        children: [],
        type: 1,
      },
      {
        id: 99,
        title: "Phim Tài Liệu",
        children: [],
        type: 1,
      },
      {
        id: 18,
        title: "Phim Chính Kịch",
        children: [],
        type: 1,
      },
      {
        id: 10751,
        title: "Phim Gia Đình",
        children: [],
        type: 1,
      },
      {
        id: 14,
        title: "Phim Giả Tượng",
        children: [],
        type: 1,
      },
      {
        id: 36,
        title: "Phim Lịch Sử",
        children: [],
        type: 1,
      },
      {
        id: 27,
        title: "Phim Kinh Dị",
        children: [],
        type: 1,
      },
      {
        id: 10402,
        title: "Phim Nhạc",
        children: [],
        type: 1,
      },
      {
        id: 9648,
        title: "Phim Bí Ẩn",
        children: [],
        type: 1,
      },
      {
        id: 10749,
        title: "Phim Lãng Mạn",
        children: [],
        type: 1,
      },
      {
        id: 878,
        title: "Phim Khoa Học Viễn Tưởng",
        children: [],
        type: 1,
      },
      {
        id: 10770,
        title: "Chương Trình Truyền Hình",
        children: [],
        type: 1,
      },
      {
        id: 53,
        title: "Phim Gây Cấn",
        children: [],
        type: 1,
      },
      {
        id: 10752,
        title: "Phim Chiến Tranh",
        children: [],
        type: 1,
      },
      {
        id: 37,
        title: "Phim Miền Tây",
        children: [],
        type: 1,
      },
    ],
  },
  {
    id: uuidv4(),
    title: "Quốc gia",
    link: "/about",
    icon: AiFillCaretDown,
    children: [
      {
        id: "AE",
        title: "Ả Rập Thống nhất",
        type: 2,
        children: [],
      },
      {
        id: "JP",
        title: "Nhật Bản",
        type: 2,
        children: [],
      },
      {
        id: "AR",
        title: "Argentina",
        type: 2,
        children: [],
      },
      {
        id: "TH",
        title: "Thái lan",
        type: 2,
        children: [],
      },
      {
        id: "LA",
        title: "LÀO",
        type: 1,
        children: [],
      },
      {
        id: "HK",
        title: "hông kông",
        type: 2,
        children: [],
      },
      {
        id: "KR",
        title: "hàn quốc",
        type: 1,
        children: [],
      },
      {
        id: "DE",
        title: "ĐỨC",
        type: 2,
        children: [],
      },
    ],
  },
  {
    id: "topviews",
    title: "Topviews",
    type: 3,
    children: [],
  },
  {
    id: "cinemo",
    title: "phim chiếu rạp",
    type: 4,
    children: [],
  },
];

export const genresData = [
  {
    id: 28,
    title: "Phim Hành Động",
    children: [],
  },
  {
    id: 12,
    title: "Phim Phiêu Lưu",
    children: [],
  },
  {
    id: 16,
    title: "Phim Hoạt Hình",
    children: [],
  },
  {
    id: 35,
    title: "Phim Hài",
    children: [],
  },
  {
    id: 80,
    title: "Phim Hình Sự",
    children: [],
  },
  {
    id: 99,
    title: "Phim Tài Liệu",
    children: [],
  },
  {
    id: 18,
    title: "Phim Chính Kịch",
    children: [],
  },
  {
    id: 10751,
    title: "Phim Gia Đình",
    children: [],
  },
  {
    id: 14,
    title: "Phim Giả Tượng",
    children: [],
  },
  {
    id: 36,
    title: "Phim Lịch Sử",
    children: [],
  },
  {
    id: 27,
    title: "Phim Kinh Dị",
    children: [],
  },
  {
    id: 10402,
    title: "Phim Nhạc",
    children: [],
  },
  {
    id: 9648,
    title: "Phim Bí Ẩn",
    children: [],
  },
  {
    id: 10749,
    title: "Phim Lãng Mạn",
    children: [],
  },
  {
    id: 878,
    title: "Phim Khoa Học Viễn Tưởng",
    children: [],
  },
  {
    id: 10770,
    title: "Chương Trình Truyền Hình",
    children: [],
  },
  {
    id: 53,
    title: "Phim Gây Cấn",
    children: [],
  },
  {
    id: 10752,
    title: "Phim Chiến Tranh",
    children: [],
  },
  {
    id: 37,
    title: "Phim Miền Tây",
    children: [],
  },
  {
    id: "cinemo",
    title: "phim chiếu rạp",
    children: [],
  },
  // ===================
  {
    id: "AE",
    title: "Ả Rập Thống nhất",
    children: [],
  },
  {
    id: "JP",
    title: "Nhật Bản",
    children: [],
  },
  {
    id: "AR",
    title: "Argentina",

    children: [],
  },
  {
    id: "TH",
    title: "Thái lan",
    children: [],
  },
  {
    id: "LA",
    title: "LÀO",

    children: [],
  },
  {
    id: "HK",
    title: "hông kông",
    children: [],
  },
  {
    id: "KR",
    title: "hàn quốc",

    children: [],
  },
  {
    id: "DE",
    title: "ĐỨC",
    children: [],
  },
  {
    id: "topviews",
    title: "Topviews",
    children: [],
  },
];

export const dataSearch = [
  {
    id: 28,
    title: "quái vật",
  },
  {
    id: 12,
    title: "khunhr bố",
  },
  {
    id: 16,
    title: "phù thủy",
  },
  {
    id: 35,
    title: "zombie",
  },
  {
    id: 80,
    title: "superman",
  },
  {
    id: 99,
    title: "ma cà rồng",
  },
  {
    id: 18,
    title: "marvel",
  },
  {
    id: 10751,
    title: "batman",
  },
  {
    id: 36,
    title: "iron man",
  },
  {
    id: 27,
    title: "Phim Kinh Dị",
  },
  {
    id: 10402,
    title: "Phim Nhạc",
  },
  {
    id: 9648,
    title: "Phim Bí Ẩn",
  },
  {
    id: 10749,
    title: "robot",
  },
  {
    id: 878,
    title: "ma cương thi",
  },
];

export const dataYear = [
  {
    id: 2023,
    title: "2023",
  },
  {
    id: 2022,
    title: "2022",
  },
  {
    id: 2021,
    title: "2021",
  },
  {
    id: 2020,
    title: "2020",
  },
  {
    id: 2019,
    title: "2019",
  },
  {
    id: 2018,
    title: "2018",
  },
  {
    id: 2017,
    title: "2017",
  },
  {
    id: 2016,
    title: "2016",
  },
  {
    id: 2015,
    title: "2015",
  },
];
