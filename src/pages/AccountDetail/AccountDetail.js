import { useDispatch } from 'react-redux';
import { uploadAvatar } from '~/redux/actions/authAction';

function AccountDetail() {
    const dispatch = useDispatch();

    const handleUpload = async () => {
        const fileInput = document.getElementById('fileInput');
        const file = fileInput.files[0];

        try {
            await dispatch(uploadAvatar(file));
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <div style={{ paddingTop: 200 }}>
            <input type="file" onChange={handleUpload} id="fileInput" />
        </div>
    );
}

export default AccountDetail;
