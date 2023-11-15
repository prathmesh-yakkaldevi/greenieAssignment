import React from 'react';
import './ReportModal.css';

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
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h3>Generate Report for {selectedUser.username}</h3>
        <button onClick={generateReport}>Generate Report</button>
      </div>
    </div>
  );
};

export default ReportModal;
