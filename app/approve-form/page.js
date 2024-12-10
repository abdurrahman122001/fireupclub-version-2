"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import Breadcrumb from "@/components/Breadcrumb";
import NextLayout from "@/layouts/NextLayout";
import Link from "next/link";

const Subscriptions = () => {
    const [subscriptions, setSubscriptions] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchSubscriptions();
    }, []);

    const fetchSubscriptions = async () => {
        setLoading(true);
        try {
            const response = await axios.get("https://innand.com/api/subscriptions");
            setSubscriptions(response.data);
        } catch (error) {
            console.error("Error fetching subscriptions:", error);
        } finally {
            setLoading(false);
        }
    };

    const deleteSubscription = async (id) => {
        try {
            await axios.delete(`https://innand.com/api/subscriptions/${id}`);
            alert("Subscription deleted successfully!");
            fetchSubscriptions(); // Refresh the list
        } catch (error) {
            console.error("Error deleting subscription:", error);
        }
    };

    const approveSubscription = async (id) => {
        try {
            await axios.post(`https://innand.com/api/subscriptions/approve/${id}`);
            alert("Approval email sent successfully!");
        } catch (error) {
            console.error("Error approving subscription:", error);
        }
    };

    return (
        <div className="container mt-5">
            <h2 className="mb-4">Subscription Management</h2>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <table className="table table-bordered table-hover">
                    <thead className="thead-dark">
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Email</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {subscriptions.map((subscription) => (
                            <tr key={subscription.id}>
                                <td>{subscription.id}</td>
                                <td>{subscription.name}</td>
                                <td>{subscription.phone}</td>
                                <td>{subscription.email}</td>
                                <td>
                                    <button
                                        className="btn btn-danger btn-sm me-2"
                                        onClick={() => deleteSubscription(subscription.id)}
                                    >
                                        Delete
                                    </button>
                                    <button
                                        className="btn btn-success btn-sm"
                                        onClick={() => approveSubscription(subscription.id)}
                                    >
                                        Approve
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default Subscriptions;
