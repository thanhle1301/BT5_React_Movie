import React, { useEffect, useState } from "react";
import { https } from "../../../service/config";
import { Tabs, Tooltip } from "antd";
import ItemMovie from "./ItemMovie";

export default function TabMovie() {
  const [heThongRap, setheThongRap] = useState([]);
  useEffect(() => {
    https
      .get("/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP01")
      .then((res) => {
        console.log("😃-TabMovie", res);
        setheThongRap(res.data.content);
      })
      .catch((err) => {
        console.log("😃-TabMovie", err);
      });
  }, []);
  const onChange = (key) => {
    console.log(key);
  };
  const items = heThongRap.map((heThong, index) => {
    return {
      key: index,
      label: <img className="w-16" src={heThong.logo} alt="" />,
      children: (
        <Tabs
          style={{
            height: 600,
          }}
          tabPosition="left"
          items={heThong.lstCumRap.map((cumRap) => {
            return {
              key: cumRap.diaChi,
              label: (
                <div className="w-60 truncate text-left">
                  <Tooltip title={cumRap.diaChi}>
                    <p className="text-green-600 font-bold text-base">
                      {cumRap.tenCumRap}
                    </p>
                    <p className="truncate">{cumRap.diaChi}</p>
                  </Tooltip>
                </div>
              ),

              children: (
                <div className="space-y-5">
                  {cumRap.danhSachPhim.map((phim) => {
                    return <ItemMovie data={phim} key={phim.maPhim} />;
                  })}
                </div>
              ),
            };
          })}
        />
      ),
    };
  });

  return (
    <div className="container pb-96 pt-10">
      <Tabs
        tabPosition="left"
        defaultActiveKey="1"
        items={items}
        onChange={onChange}
      />
    </div>
  );
}
// {
//     key: "1",
//     label: "Tab 1",
//     children: "Content of Tab Pane 1",
//   },
