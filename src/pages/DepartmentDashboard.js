import React from 'react';
import { Link } from 'react-router-dom';

function DepartmentDashboard() {
  return (
    <div>
      <main className="flex-grow container mx-auto px-6 py-8">
        <h2 className="text-2xl font-semibold text-center mb-8">WELCOME DEPARTMENT</h2>

        <div className="bg-gray-300 p-20 rounded-lg shadow-lg max-w-4xl mx-auto">
          <div className="text-center text-4xl font-bold" style={{
            color: '#333',
            textShadow: '2px 2px 4px rgba(0,0,0,0.3), -2px -2px 4px rgba(255,255,255,0.7)',
          }}>
            <div>WELCOME</div>
            <div>DESK</div>
            <div>DEPARTMENT</div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default DepartmentDashboard;