import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactTable from "react-table-6";

import "react-table-6/react-table.css";

import { getSettingHome } from "../../../../Redux/Thunks/AdminHome";
import { getAllProducts } from "../../../../Redux/Thunks/AdminProduct";
import AddButton from "./AddButton";

export default function ProductTable() {
  const [tableData, setTableData] = useState([]);

  const dispatch = useDispatch();

  const allProducts = useSelector((state) => state.AdminProduct.allProduct);
  const pageSetting = useSelector((state) => state.AdminHomeSetting.setting);
  const categoryProduct = useSelector((state) => state.AdminProduct.byCategory);

  useEffect(() => {
    if (!pageSetting) {
      dispatch(getSettingHome());
    }
  }, [dispatch, pageSetting]);

  const limit = tableData.filter((f) => f.bestProduct);

  const columns = [
    {
      Header: "Product",
      headerClassName: "main-col",
      columns: [
        {
          width: 200,
          id: "productName",
          Header: "name",
          accessor: ({ productName }) => (
            <div className="word-break">{productName}</div>
          ),
          headerClassName: "col",
        },
        {
          Header: "Application",
          id: "applcation",
          accessor: ({ application }) => (
            <div className="word-break">{application || "NA"}</div>
          ),
          headerClassName: "col",
        },
        {
          id: "design",
          Header: "Design",
          accessor: ({ design }) => (
            <div className="word-break">{design || "NA"}</div>
          ),
          headerClassName: "col",
        },

        {
          id: "category",
          Header: "Category",
          accessor: ({ categoryName }) => (
            <div className="word-break">{categoryName || "NA"}</div>
          ),
          headerClassName: "col",
        },
        {
          Header: "Image",
          accessor: ({ productImage }) => (
            <img
              alt=""
              className="product-img-container"
              src={`https://kinindustries.s3.ap-south-1.amazonaws.com/product/${productImage}`}
            />
          ),
          headerClassName: "col",
          id: "productImage",
        },
        {
          Header: "Actions",
          headerClassName: "col",
          accessor: ({ _id, bestProduct }) => (
            <AddButton
              limit={limit.length}
              bestProduct={bestProduct}
              _id={_id}
            />
          ),
          id: "_id",
        },
      ],
    },
    {
      Header: "Nominal",
      headerClassName: "main-col",
      columns: [
        {
          id: "diameter",
          Header: "Diameter",
          accessor: ({ nominalDiameter }) => (
            <div className="word-break">{nominalDiameter || "NA"}</div>
          ),
          headerClassName: "col",
        },
        {
          id: "process",
          Header: "Process",
          accessor: ({ process }) => (
            <div className="word-break">{process || "NA"}</div>
          ),
          headerClassName: "col",
        },
      ],
    },

    {
      Header: "Shell",
      headerClassName: "main-col",
      columns: [
        {
          id: "matrial",
          Header: "Matrial",
          accessor: ({ shellMatrial }) => (
            <div className="word-break">{shellMatrial || "NA"}</div>
          ),
          headerClassName: "col",
        },
        {
          id: "weight",
          Header: "Weight",
          accessor: ({ shellWeight }) => (
            <div className="word-break">{shellWeight || "NA"}</div>
          ),
          headerClassName: "col",
        },
      ],
    },
  ];

  useEffect(() => {
    if (!allProducts) {
      dispatch(getAllProducts());
    }
    if (allProducts || categoryProduct) {
      const dummyData = categoryProduct || allProducts;
      setTableData([...dummyData]);
    }
  }, [allProducts, categoryProduct, dispatch, pageSetting]);

  return (
    <div>
      <ReactTable
        className="react-table"
        data={tableData}
        columns={columns}
        defaultPageSize={15}
        showFilters={false}
        showPagination={false}
      />
    </div>
  );
}
