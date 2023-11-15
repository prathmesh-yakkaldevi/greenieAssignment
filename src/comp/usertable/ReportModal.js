import React from 'react';

const ReportModal = ({ selectedUser, onClose, onGenerateReport }) => {
  const handleOverlayClick = (e) => {
    if (e.target.classList.contains('modal-overlay')) {
      onClose();
    }
  };

  const generateReport = () => {
    onGenerateReport(selectedUser);
    onClose();
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 modal-overlay" onClick={handleOverlayClick}>
      <div className="bg-white rounded-lg p-6">
        <button className="absolute top-0 right-0 p-2 text-gray-600 hover:text-gray-900" onClick={onClose}>
          &times;
        </button>
        <h3 className="text-lg font-semibold mb-4">Generate Report for {selectedUser.username}</h3>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600" onClick={generateReport}>
          Generate Report
        </button>
      </div>
    </div>
  );
};

export default ReportModal;
