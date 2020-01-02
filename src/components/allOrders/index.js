import React, {Component} from "react";
import {Link} from "react-router-dom";
import {CSVLink} from "react-csv";
import {listOrders} from "../../graphql/queries";
import {useQuery} from '@apollo/react-hooks';
import gql from 'graphql-tag';
const Allorders = () => {

    const {data, error} = useQuery(gql(listOrders), {
        fetchPolicy: 'network-only'
    });

    let finalData = data && data.listOrders.items;
    console.log(finalData)
    let printData = [];
    finalData && finalData.forEach(sin => {
        let newSingle = {
            OrderId: sin.id,
            DeliveryDate:sin.delivery_date.split("T")[0],
            ProductTitle:sin.product.title,
            OrderTotal:sin.order_total
        }
        printData.push(newSingle);
    })

    return (
        <div>
            <div className="rightSection">
                <div className="Header page-header">
                    <div >
                        <h3>All Orders</h3>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="navList">
                    <h5>Orders List</h5>
                    <div className="search-dropdown">
                        {/*<div className="search-area mr-0">*/}
                            {/*<div>*/}
                                {/*<form>*/}
                                    {/*<input type="search" placeholder="Search"/>*/}
                                    {/*<i className="fa fa-search"/>*/}
                                {/*</form>*/}
                            {/*</div>*/}

                        {/*</div>*/}
                    </div>
                </div>

                <div className="submission_table">
                    <table>
                        <thead>
                        <tr className="tableHeading">
                            <th>Order Id</th>
                            <th>Title</th>
                            <th>Delivery Date</th>
                            <th>Order Total</th>
                        </tr>
                        </thead>

                        <tbody>
                        {
                            printData && printData.length > 0 && printData.map((sin, i) => {
                                return (
                                    <tr className="tableData" key={i}>
                                        <td>{sin.OrderId}</td>
                                        <td>{sin.ProductTitle}</td>
                                        <td className="action-icons">{sin.DeliveryDate}</td>
                                        <td className="action-icons">{"$" +  parseFloat(Math.round(sin.OrderTotal * 100) / 100).toFixed(2) }</td>
                                    </tr>
                                )
                            })
                        }


                        </tbody>
                    </table>
                    <div className="export">
                        <CSVLink data={printData && printData} target="_blank"
                        filename={"orders.csv"}>Export
                        all</CSVLink>
                    </div>
                </div>

            </div>
        </div>
    )
}


export default Allorders;