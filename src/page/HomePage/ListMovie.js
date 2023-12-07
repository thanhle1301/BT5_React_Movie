import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import { https } from "../../service/config";

export default function ListMovie() {
  const [movieArr, setMovieArr] = useState([]);
  useEffect(() => {
    // axios({
    //   url: "https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP09",
    //   method: "GET",
    //   headers: {
    //     TokenCybersoft:
    //       "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA1NCIsIkhldEhhblN0cmluZyI6IjE0LzA1LzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcxNTY0NDgwMDAwMCIsIm5iZiI6MTY4NzcxMjQwMCwiZXhwIjoxNzE1NzkyNDAwfQ.cy8EAM6hrKh2o6c9THZW5lrKeOEmQXIDgFVyIf7K_rU",
    //   },
    // })

    https
      .get("/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP09")
      .then((res) => {
        console.log(res.data.content);
        setMovieArr(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="grid grid-cols-5 gap-5 container">
      {movieArr.map((item) => {
        return (
          <Card
            hoverable
            style={{
              width: 240,
            }}
            cover={<img alt="example" src={item.hinhAnh} />}
          >
            <Meta title={item.tenPhim} description="www.instagram.com" />
          </Card>
        );
      })}
    </div>
  );
}
