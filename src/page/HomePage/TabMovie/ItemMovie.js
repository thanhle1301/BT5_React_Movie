import React from "react";

export default function ItemMovie({ data }) {
  return (
    <div className="flex space-x-5">
      <img
        style={{
          height: 30,
        }}
        className="w-32 h-48 object-cover"
        src={data.hinhAnh}
        alt=""
      />
      <div>
        <h2 className="text-2xl">{data.tenPhim}</h2>
        <div className="grid grid-cols-4 gap-5">
          {data.lstLichChieuTheoPhim.map((lichChieu) => {
            return (
              <span
                className="text-red-600 font-medium"
                key={lichChieu.maLichChieu}
              >
                {lichChieu.maLichChieu}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}
