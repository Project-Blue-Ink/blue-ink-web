import React from 'react';
import { Link } from 'react-router-dom'; 
import data from "./data";
function Fulfillment() {
    return (
        <div className="content content-margined">
            <div className="fulfillment-header">
                <h3>Fulfillments</h3>
            </div>
            <div className="fulfillment-list">
                <table className="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>DATE</th>
                    <th>TOTAL</th>
                    <th>USER</th>
                    <th>PAID</th>
                    <th>PAID AT</th>
                    <th>DELIVERED</th>
                    <th>DELIVERED AT</th>
                    <th>ACTIONS</th>
                </tr> 
            </thead>
            <tbody>
                {data.fulfillment.map((order) => (
                  <tr key={order._id} className={order.isDelivered ? '' : 'notFulfilled'}> 
                    <td>{order._id}</td> 
                    <td>{order.createdAt}</td> 
                    <td>{order.totalPrice}</td> 
                    <td>{order.user.name}</td> 
                    <td>{order.isPaid}</td> 
                    <td>{order.paidAt}</td>
                    <td>{order.isDelivered.toString()}</td> 
                    <td>{order.deliveredDate}</td> 
                    <td>
                        <Link to={"/fulfillment/" + order._id} className="button secondary">
                            Details
                        </Link>
                    </td> 
                 </tr>
                ))}
            </tbody>
                </table>
                </div>
        </div>);

}

export default Fulfillment;