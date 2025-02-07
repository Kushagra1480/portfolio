import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import axios from 'axios';

const processGitHubData = (events) => {
  // Process events by day
  const dailyActivity = events.reduce((acc, event) => {
    const date = new Date(event.created_at).toLocaleDateString('en-US', { weekday: 'short' });
    
    if (!acc[date]) {
      acc[date] = { name: date, commits: 0, total: 0 };
    }
    
    if (event.type === 'PushEvent') {
      acc[date].commits += event.payload.commits?.length || 0;
    }
    acc[date].total += 1;
    
    return acc;
  }, {});
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const today = new Date().getDay();
  const orderedDays = [...days.slice(today + 1), ...days.slice(0, today + 1)];
  
  return orderedDays.map(day => ({
    name: day,
    commits: dailyActivity[day]?.commits || 0,
    total: dailyActivity[day]?.total || 0
  }));
};

const GitHubActivityChart = () => {
  const [chartData, setChartData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGitHubActivity = async () => {
      const username = "Kushagra1480";
      const cachedData = localStorage.getItem('githubActivity');
      const lastFetchTime = localStorage.getItem('lastFetchTime');
      const now = new Date().getTime();

      try {
        let data;
        if (cachedData && lastFetchTime && now - lastFetchTime < 86400000) {
          data = JSON.parse(cachedData);
        } else {
          const response = await axios.get(`https://api.github.com/users/${username}/events`);
          data = response.data;
          localStorage.setItem('githubActivity', JSON.stringify(data));
          localStorage.setItem('lastFetchTime', now);
        }
        
        const processed = processGitHubData(data);
        setChartData(processed);
      } catch (error) {
        console.error('Error fetching GitHub activity:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubActivity();
  }, []);

  if (loading || !chartData) {
    return <div className="text-center text-slate-400 py-8">LOADING_DATA...</div>;
  }

  return (
    <div className="relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={chartData}>
          <XAxis dataKey="name" stroke="#475569" />
          <YAxis stroke="#475569" />
          <Tooltip 
            contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e3a8a' }}
            itemStyle={{ color: '#e2e8f0' }}
            formatter={(value, name) => [value, name === 'commits' ? 'COMMITS' : 'TOTAL_ACTIVITY']}
          />
          <Line 
            type="monotone" 
            dataKey="commits" 
            stroke="#0ea5e9" 
            strokeWidth={2}
            dot={{ fill: '#0ea5e9' }}
            name="commits"
          />
          <Line 
            type="monotone" 
            dataKey="total" 
            stroke="#2563eb" 
            strokeWidth={2}
            dot={{ fill: '#2563eb' }}
            name="total"
          />
        </LineChart>
      </ResponsiveContainer>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
      <div className="mt-2 flex justify-between text-[10px] font-mono">
        <span className="text-slate-400">LAST_UPDATE::{new Date().toLocaleTimeString()}</span>
        <span className="text-cyan-400">DATA_SOURCE::GITHUB_API</span>
      </div>
    </div>
  );
};

export default GitHubActivityChart;