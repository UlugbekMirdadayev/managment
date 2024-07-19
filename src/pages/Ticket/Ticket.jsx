import React, { useState } from "react";
import "./Ticket.css";
import { FakeTickets } from "../../utils/data";
import * as icon from "../../assets/svgs/index";

const Ticket = () => {
  const [select, setSelect] = useState("Все");
  const [data, setData] = useState(FakeTickets);
  const FakeData = FakeTickets.filter((f) =>
    select === "Все" ? FakeTickets : f.status === select
  );
  const FakeData2 = data.filter((f) =>
    select === "Все" ? data : f.status === select
  );
  const hanldeArrow = (item) => {
    const excite = data.filter((f) => f === item)[0];
    if (excite) {
      setData(
        data.map((x) => {
          return x.status === excite.status
            ? { ...excite, arrow: !excite.arrow }
            : x;
        })
      );
    }
  };
  return (
    <div className="ticket-container">
      <nav>
        <ul>
          <li className={`${select === "Все" ? "li-active" : ""}`}>
            <button onClick={() => setSelect("Все")}>Все</button>
          </li>
          {FakeTickets.map((item, index) => {
            return (
              <li
                key={index}
                className={`${select === item.status ? "li-active" : ""}`}
              >
                <button onClick={() => setSelect(item.status)}>
                  {item.status}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
      <table className="table-desktop">
        <thead>
          <tr>
            <th>ID</th>
            <th>Дата</th>
            <th>Статус</th>
            <th>Проект</th>
            <th>Тг.Группа</th>
            <th>Название тикета</th>
            <th>Описание</th>
          </tr>
        </thead>
        <tbody>
          {FakeData.map((item) => {
            return item.children.map((i) => (
              <tr key={i.date}>
                <td>{i.id}</td>
                <td>{i.date}</td>
                <td className={`status ${i.status}`}>
                  <button>{i.status}</button>
                </td>
                <td>{i.proekt}</td>
                <td>{i.group}</td>
                <td className="nameTicket">{i.NameTicket}</td>
                <td className="td-description">{i.description}</td>
              </tr>
            ));
          })}
        </tbody>
      </table>
      <table className="table-mobile">
        <tbody>
          {FakeData2.map((item) => {
            return item.children.map((i) => (
              <tr
                key={i.date}
                className={`tr ${item.arrow ? "active-arrow-table" : "tr"}`}
              >
                <tr>
                  <th>ID</th>
                  <td>
                    {i.id}{" "}
                    <button
                      className="td-btn"
                      onClick={() => hanldeArrow(item)}
                    >
                      {item.arrow ? <icon.ArrowUp2 /> : <icon.ArrowDown2 />}
                    </button>
                  </td>
                </tr>
                <tr
                  className={`table-mobile-td ${
                    item.arrow ? "active-arrow-tr" : ""
                  }`}
                >
                  <th>Дата</th>
                  <td>{i.date}</td>
                </tr>
                <tr
                  className={`table-mobile-td ${
                    item.arrow ? "active-arrow-tr" : ""
                  }`}
                >
                  <th>Статус</th>
                  <td className={`status ${i.status}`}>
                    <button>{i.status}</button>
                  </td>
                </tr>
                <tr
                  className={` table-mobile-td ${
                    item.arrow ? "active-arrow-tr" : ""
                  }`}
                >
                  <th>Проект</th>
                  <td>{i.proekt}</td>
                </tr>
                <tr
                  className={`table-mobile-td ${
                    item.arrow ? "active-arrow-tr" : ""
                  }`}
                >
                  <th>Тг.Группа</th>
                  <td>{i.group}</td>
                </tr>
                <tr
                  className={`table-mobile-td  ${
                    item.arrow ? "active-arrow-tr" : ""
                  }`}
                >
                  <th>Название тикета</th>
                  <td className="nameTicket">{i.NameTicket}</td>
                </tr>
                <tr
                  className={`table-mobile-td ${
                    item.arrow ? "active-arrow-tr" : ""
                  }`}
                >
                  <th>Описание</th>
                  <td className="td-description">{i.description}</td>
                </tr>
              </tr>
            ));
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Ticket;
