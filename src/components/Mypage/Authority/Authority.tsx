"use client";

import React from "react";
import TableContainer from "../Table/TableContainer";

const Authority = () => {
  const columns = ["게시글", "음원설정", "알림설정", "관심설정", "비공개게시물"];
  const data = [{ contant: "30건", sound: "3건", alarm: "2건", interest: "4건", private: "2건" }];

  return (
    <>
      <TableContainer columns={columns} data={data} useActionCell={false} />
    </>
  );
};

export default Authority;
