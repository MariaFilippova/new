import React, { Component } from 'react';
import './troubles.css';

class TableTroubles extends Component {
  render() {
    return (
      <table className="table">
        <tr>
          <th className="th">Проект</th>
          <th className="th">Суть проблемы</th>
          <th className="th">Ответственный</th>
          <th className="th">Цена проблемы, млн.</th>
          <th className="th">Принятые меры</th>
        </tr>
           <tr>
             <td className="td">ОКР "Ромашка"</td>
             <td className="td">Не работает</td>
             <td className="td">Иванов И.И.</td>
             <td className="td">23</td>
             <td className="td">Посмотрел</td>
           </tr>
           <tr>
             <td className="td">НИР "Звездолет"</td>
             <td className="td">Не взлетает</td>
             <td className="td">Павлов А.Р.</td>
             <td className="td">15</td>
             <td className="td">Одобрил</td>
           </tr>
           <tr>
             <td className="td">ОКР "Почет"</td>
             <td className="td">Падает</td>
             <td className="td">Корыткина О.Л.</td>
             <td className="td">70</td >
             <td className="td">Подписала</td>
           </tr>
           <tr>
             <td className="td">ОКР "Лунтик"</td>
             <td className="td">Барахлит</td>
             <td className="td">Пичугин А.Д.</td>
             <td className="td">100</td >
             <td className="td">Ознакомлен</td>
           </tr>
           <tr>
             <td className="td">НИР "Солнце"</td>
             <td className="td">Перегрев</td>
             <td className="td">Кашева Л.А.</td>
             <td className="td">23</td >
             <td className="td">Почти все хорошо</td>
           </tr>
      </table>
    );
  }
}
export default TableTroubles;
