import './ApplicationSentModal.css';
import sendIcon from './ic-send.svg';

interface ApplicationSentModalProps {
  isOpen?: boolean;
  brandName: string;
  onConfirm: () => void;
  onCollaborations: () => void;
}

export const ApplicationSentModal = ({
  isOpen = true,
  brandName,
  onConfirm,
  onCollaborations,
}: ApplicationSentModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-backdrop" />
      <div className="modal-sheet">
        <div className="modal-header">
          <div className="modal-featured-icon">
            <img src={sendIcon} alt="" className="modal-send-icon" />
          </div>
          <div className="modal-text">
            <p className="modal-title">Application sent!</p>
            <p className="modal-description">
              Thank you for applying! You will be notified when {brandName} reviews your application.
            </p>
          </div>
        </div>
        <div className="modal-actions">
          <button className="modal-btn-primary" onClick={onConfirm}>
            Got it!
          </button>
          <button className="modal-btn-secondary" onClick={onCollaborations}>
            Go to Collaborations
          </button>
        </div>
      </div>
    </div>
  );
};
