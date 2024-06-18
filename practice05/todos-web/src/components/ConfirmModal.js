// import './ConFirmModal.css';

const ConfirmModal = ({onConfirm, onCancel }) => {

    return (
        <div className="modal">
            <div className="modal-content">
                <p>정말 삭제하겠습니까?</p>
                <button onClick={onConfirm}>OK</button>
                <button onClick={onCancel}>Cancel</button>
            </div>
        </div>
    );
};

export default ConfirmModal;