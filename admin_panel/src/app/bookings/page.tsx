"use client";

import { useState } from "react";
import { getBookings, markBookingAsCompleted } from "../../../lib/api-server";

interface Booking {
  _id: string;
  name: string;
  testName: string;
  phone: string;
  email: string;
  address: string;
  bloodGroup: string;
  paymentMode: string;
  status: string;
  createdAt: string;
}

export default function Bookings() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [isFetched, setIsFetched] = useState(false); // IMPORTANT

  // Fetch once without useEffect
  if (!isFetched) {
    setIsFetched(true); // prevent re-fetch
    getBookings().then((data) => {
      if (data.success) setBookings(data.bookings);
    });
  }

  const formatDate = (dateString: string) =>
    new Date(dateString).toLocaleDateString();

  const handleMarkComplete = async (id: string) => {
    const res = await markBookingAsCompleted(id);

    if (res.success) {
      setBookings((prev) =>
        prev.map((b) => (b._id === id ? { ...b, status: "completed" } : b))
      );
    }
  };

  return (
    <div>
      <h1 className="text-4xl font-bold text-indigo-900 mb-8">
        Bookings ({bookings.length})
      </h1>

      <div className="bg-white p-6 rounded-2xl shadow-lg">
        {bookings.length === 0 ? (
          <p className="text-gray-500 text-center py-8">No bookings found</p>
        ) : (
          <table className="w-full">
            <thead>
              <tr className="text-left border-b text-indigo-800">
                <th className="py-3">Name</th>
                <th className="py-3">Test</th>
                <th className="py-3">Phone</th>
                <th className="py-3">Email</th>
                <th className="py-3">Date</th>
                <th className="py-3">Status</th>
              </tr>
            </thead>

            <tbody>
              {bookings.map((booking) => (
                <tr key={booking._id} className="border-b hover:bg-gray-50">
                  <td className="py-3 font-medium">{booking.name}</td>
                  <td className="py-3">{booking.testName}</td>
                  <td className="py-3">{booking.phone}</td>
                  <td className="py-3">{booking.email}</td>
                  <td className="py-3">{formatDate(booking.createdAt)}</td>

                  <td className="py-3 flex items-center gap-2">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        booking.status === "completed"
                          ? "bg-green-100 text-green-800"
                          : booking.status === "confirmed"
                          ? "bg-blue-100 text-blue-800"
                          : booking.status === "pending"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {booking.status}
                    </span>

                    {booking.status !== "completed" && (
                      <button
                        onClick={() => handleMarkComplete(booking._id)}
                        className="w-6 h-6 flex items-center justify-center rounded-full bg-green-500 text-white hover:bg-green-600 transition"
                        title="Mark as Completed"
                      >
                        ✅
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        )}
      </div>
    </div>
  );
}
