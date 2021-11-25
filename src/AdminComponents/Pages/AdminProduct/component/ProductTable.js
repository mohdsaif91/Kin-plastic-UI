import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactTable from "react-table-6";

import "react-table-6/react-table.css";

import { getSettingHome } from "../../../../Redux/Thunks/AdminHome";
import { getAllProducts } from "../../../../Redux/Thunks/AdminProduct";
import AddButton from "./AddButton";

export default function ProductTable() {
  const [tableData, setTableData] = useState([]);
  // const [settingData, setSettingData] = useState([]);

  const dispatch = useDispatch();

  const allProducts = useSelector((state) => state.AdminProduct.allProduct);
  const pageSetting = useSelector((state) => state.AdminHomeSetting.setting);

  useEffect(() => {
    if (!pageSetting) {
      dispatch(getSettingHome());
    }
    // if (pageSetting) {
    //   setSettingData(pageSetting);
    // }
  }, [dispatch, pageSetting]);

  const columns = [
    {
      Header: "Product",
      headerClassName: "main-col",
      columns: [
        {
          Header: "name",
          accessor: "productName",
          headerClassName: "col",
          // className: "product-class",
        },
        {
          Header: "Application",
          accessor: "application",
          headerClassName: "col",
        },
        {
          Header: "Design",
          accessor: "design",
          headerClassName: "col",
        },

        {
          Header: "Category",
          accessor: "categoryName",
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
          accessor: ({ _id }) => <AddButton _id={_id} />,
          id: "_id",
        },
      ],
    },
    {
      Header: "Nominal",
      headerClassName: "main-col",
      columns: [
        {
          Header: "Diameter",
          accessor: "nominalDiameter",
          headerClassName: "col",
        },
        {
          Header: "Process",
          accessor: "process",
          headerClassName: "col",
        },
      ],
    },

    {
      Header: "Shell",
      headerClassName: "main-col",
      columns: [
        {
          Header: "Matrial",
          accessor: "shellMatrial",
          headerClassName: "col",
        },
        {
          Header: "Weight",
          accessor: "shellWeight",
          headerClassName: "col",
        },
      ],
    },
  ];

  useEffect(() => {
    if (!allProducts) {
      dispatch(getAllProducts());
    }
    if (allProducts) {
      setTableData(allProducts);
    }
  }, [allProducts, dispatch]);

  return (
    <div>
      <ReactTable
        className="react-table"
        data={tableData}
        columns={columns}
        defaultPageSize={50}
        // pageSizeOptions={[2, 4, 6]}
      />
    </div>
  );
}
