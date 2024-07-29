import React, { useCallback, useEffect, useState } from "react";
import * as icon from "../../assets/svgs/index";
import Send from "../../assets/images/send.png";
import "./Report.css";
import { getRequest } from "../../service/api";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { setReport } from "../../redux/reportSlice";
import { useReport } from "../../redux/useSelector";
import { setLoader } from "../../redux/loaderSlice";

const Reports = () => {
  const report = useReport()
  const [myReport, setMyReport] = useState("");
  const [Array, setArray] = useState([
    { title: "Support", arrow: false, child: [], values: "support" },
    { title: "Project", arrow: false, child: [], values: "manager" },
    { title: "Director", arrow: false, child: [], values: "general_director" },
  ]);
  const dispatch = useDispatch()
  const hanldeArrow = (item) => {
    const excite = Array.filter((f) => f === item)[0];
    if (excite) {
      setArray(
        Array.map((x) => {
          return x.title === excite.title
            ? { ...excite, arrow: !excite.arrow }
            : x;
        })
      );
    }
  };
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));
  const getReports = useCallback(() => {
    dispatch(setLoader(true))
    getRequest("reports", token)
      .then((reponsive) => {
        toast.success("Отчеты пришол");
        dispatch(setReport(reponsive.data.data))
        dispatch(setLoader(false))
        console.log(reponsive.data.data);
      })
      .catch((error) => {
        console.error("Xato", error);
        toast.error(error.message ? error.message : "Xatolik yuz berdi");
        dispatch(setLoader(false))
      });
  }, [token,dispatch]);
  useEffect(() => {
    if(report.length === 0){
      getReports();
    }
  }, [getReports,report.length]);
  useEffect(() => {
    setArray((Array) =>
      Array.map((x) => {
        if (x?.child.length === 0) {
          return {
            ...x,
            child: report.filter((f) => f.user_name.includes(x.title)),
          };
        }
        return x;
      })
    );
  }, [report]);
  return (
    <div className="report-container">
      <nav>
        <ul>
          <li onClick={() => setMyReport(user?.user?.roles[0]?.name)}>
            <button>Мои отчеты</button>
          </li>
          <li>
            <button style={{ color: "#535ce8" }}>
              Сегодня <icon.ArrowDown />
            </button>
          </li>
          <li>
            <button onClick={() => setMyReport("")}>
              <icon.CalendarIcon color={"#535CE8"} />
            </button>
          </li>
        </ul>
      </nav>
      <div className="report-wrapper">
        {Array.filter((f) =>
          myReport === "" ? Array : f?.values.includes(myReport)
        ).map((item, index) => {
          return (
            <div
              className={`wrapper ${item?.arrow ? "arrow1" : ""}`}
              key={index}
            >
              <div className="wrapper-head">
                <h3 className="wrapper-head-title">
                  Ежедневные отчеты {item?.title}
                </h3>
                <button onClick={() => hanldeArrow(item)}>
                  {item?.arrow ? (
                    <icon.ArrowDown color={"#565e6c"} />
                  ) : (
                    <icon.ArrowUp />
                  )}
                </button>
              </div>
              <div className={`wrapper-body ${item?.arrow ? "arrow1" : ""}`}>
                <div className="body-wrap">
                  {report?.length === 0 ? (
                   ""
                  ) : (
                    item?.child.map((i, index) => {
                      return (
                        <div
                          className={`card ${
                            item?.title === "Support" ? "card-red" : ""
                          }`}
                          key={index}
                        >
                          <hr />
                          <div className="card-right ">
                            <div className="card-right-head">
                              <h1>{i?.report_name}</h1>
                              <img src={Send} alt="" />
                            </div>
                            <p className="card-right-description">
                              {i?.description}
                            </p>
                            <button className="card-right-btn">
                              Использовать отчет
                            </button>
                          </div>
                        </div>
                      );
                    })
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Reports;
