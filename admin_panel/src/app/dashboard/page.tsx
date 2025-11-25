import { getDashboardStats, getChartStats } from "../../../lib/api-server";
import Chart from "../dashboard/Chart";

export default async function Dashboard() {
  const stats = await getDashboardStats();
  const chartData = await getChartStats(); // fetch chart data

  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold text-indigo-900 mb-8">Dashboard</h1>

      {/* ====== TOP METRICS ====== */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
          <h2 className="text-lg font-semibold text-indigo-700">Total Bookings</h2>
          <p className="mt-3 text-3xl font-bold">{stats.totalBookings}</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
          <h2 className="text-lg font-semibold text-indigo-700">Unread Messages</h2>
          <p className="mt-3 text-3xl font-bold">{stats.unreadMessages}</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
          <h2 className="text-lg font-semibold text-indigo-700">New Patients</h2>
          <p className="mt-3 text-3xl font-bold">{stats.newPatients}</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
          <h2 className="text-lg font-semibold text-indigo-700">Health Card Requests</h2>
          <p className="mt-3 text-3xl font-bold">{stats.healthCardRequests}</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
          <h2 className="text-lg font-semibold text-indigo-700">Approved Cards</h2>
          <p className="mt-3 text-3xl font-bold">{stats.healthCardApproved}</p>
        </div>
      </div>

      {/* ====== GRAPH SECTION ====== */}
      <div className="mt-12 bg-white p-6 rounded-2xl shadow-xl">
        <h2 className="text-2xl font-bold text-indigo-800 mb-4">Analytics Overview</h2>
        <Chart data={chartData} /> {/* Pass the fetched chart data here */}
      </div>
    </div>
  );
}
