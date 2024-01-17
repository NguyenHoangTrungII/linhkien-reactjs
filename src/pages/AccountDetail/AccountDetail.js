import { useDispatch } from 'react-redux';
import MenuAccount from '~/component/Account/Component/MenuAccount/MenuAccount';
import { uploadAvatar } from '~/redux/actions/authAction';

function AccountDetail() {
    const dispatch = useDispatch();

    // const handleUpload = async () => {
    //     const fileInput = document.getElementById('fileInput');
    //     const file = fileInput.files[0];

    //     try {
    //         await dispatch(uploadAvatar(file));
    //     } catch (err) {
    //         console.log(err);
    //     }
    // };
    return (
        <div style={{ paddingTop: 100 }}>
            <MenuAccount />
        </div>
    );
}

export default AccountDetail;
