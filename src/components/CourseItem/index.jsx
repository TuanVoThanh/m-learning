import React, { Component } from "react";
import "./styles.css";
import { ReactComponent as IconStars } from "../../assets/svg/stars.svg";

const data = [
  {
    "id": "1",
    "courseName": "Understanding TypeScript - 2020 Edition",
    "author": "Dexter Thiel",
    "price": "344.00",
    "image": "https://img-a.udemycdn.com/course/240x135/947098_02ec.jpg?hqBExARaRCmC6mAvyWM-Q0bCmKH4AKoQo4MKQ1uDS9oycSNWXML02bAaOUj3sAGg01iXYhXYU--0EGoIJGfN0sIV5a7LsEG8387W9LlqCN2_Xj1SmbCYnVySHNDJ",
    "category": "Web Development",
    "view": 34967,
    "rating": "4.7",
    "highlight": true
  },
  {
    "id": "2",
    "courseName": "The Complete iOS App Development Bootcamp",
    "author": "Emelia Fritsch",
    "price": "691.00",
    "image": "https://img-a.udemycdn.com/course/240x135/1778502_f4b9_11.jpg?Ol1h5kAti2vsbTClEF9KbkPIMvIlbe18g4y7yLQoLlw1acX_OlE4H1PZQb7DMqA-iYD6BHIStKxFx42nTlaq38ok749ZDd0QKdr2vvjMKuy81c0w_gBaGsqFksGSTehtFQ",
    "category": "Web Development",
    "view": 72968,
    "rating": "4.8",
    "highlight": true
  },
  {
    "id": "3",
    "courseName": "Advanced CSS, Sass and More!",
    "author": "Kraig Murphy",
    "price": "991.00",
    "image": "https://img-a.udemycdn.com/course/240x135/1026604_790b_2.jpg?6F3CCNyOmrJo9GlfxdL3g9I9GfTMcHDnPflriWL8tbxWzvTrJgEuZWBjWBkHnBDIqtFh09VFUI1FWU81StgTK-xs5g9dlHYKKisl5C1XsaE8SJw7kjXT9-XIWOmeAV1T",
    "category": "Web Development",
    "view": 58331,
    "rating": "4.8",
    "highlight": false
  },
  {
    "id": "4",
    "courseName": "Angular - The Complete Guide 2020",
    "author": "Junior Brown",
    "price": "313.00",
    "image": "https://img-a.udemycdn.com/course/240x135/756150_c033_2.jpg?10qtRrbVGy4nY1_eVKP597H4oXTP1odhSd9O8uJfmc-R5Adm2ecd1_anYxUo7yzBpx0Ay3LTWS46DanCfcIvWdx2FSaNqMxfUxO1TPV5S0sCOzsQlPTJ-zRCJ9VfU8A",
    "category": "Web Development",
    "view": 53998,
    "rating": "4.6",
    "highlight": false
  },
  {
    "id": "5",
    "courseName": "Learn C# Fundamentals by Coding",
    "author": "Fausto Bode",
    "price": "622.00",
    "image": "https://img-a.udemycdn.com/course/240x135/382002_5d4a.jpg?iYinZ2s9nzmGIbuJEHzOCbQz7tKmJDcKtUtLgX5SCG0N2MGpgBmkyUWod6Q9pd1Ueel-gwKTgBJ17SWAAgscXO5etwMmPKZSK8P25ZOBhB2SYuTDL8deJqqqSFhb",
    "category": "Web Development",
    "view": 37845,
    "rating": "4.5",
    "highlight": false
  }
];

const CourseItem = () => {
  return data.map((item, index) => {
    return (
      <div key={index} className="courseItem__item">
        <img
          src={item.image}
          className="courseItem__item_image"
          alt="course"
        />
        <div className="courseItem__item_text">
          <p className="courseItem__item_text_title">{item.courseName}</p>
          <div className="courseItem__item_text_author">{item.author}</div>
        </div>
        <div className="courseItem__item_review">
          <div className="courseItem__item_review_stars">
            <IconStars />
          </div>
          <div className="courseItem__item_review_views">({item.view}))</div>
        </div>
        <div className="courseItem__item_price">
          <div className="courseItem__item_price_default">$124.99</div>
          <div className="courseItem__item_price_discount">$99</div>
          <div className="bestseller">Bestseller</div>
        </div>
      </div>
    );
  });
};

export default CourseItem;
